import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { contactSubmissions } from "../drizzle/schema";

const INTEREST_LABELS: Record<string, string> = {
  'ai-audit': 'AI Audit ($497)',
  'manus-website': 'Manus AI Website',
  'multi-llm-research': 'Multi-LLM Research',
  'ai-training': 'AI Training Session',
  'other': 'Other',
};

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1).max(200),
          email: z.string().email().max(320),
          phone: z.string().min(7).max(30),
          interest: z.enum(['ai-audit', 'manus-website', 'multi-llm-research', 'ai-training', 'other']),
          smsConsent: z.boolean().default(false),
        })
      )
      .mutation(async ({ input }) => {
        const interestLabel = INTEREST_LABELS[input.interest] ?? input.interest;

        // Save to database
        const db = await getDb();
        if (db) {
          await db.insert(contactSubmissions).values({
            name: input.name,
            email: input.email,
            phone: input.phone,
            interest: input.interest,
            smsConsent: input.smsConsent,
          });
        }

        // Notify owner
        const title = `New Lead: ${input.name} — ${interestLabel}`;
        const contentLines = [
          `Name: ${input.name}`,
          `Email: ${input.email}`,
          `Phone: ${input.phone}`,
          `Interested in: ${interestLabel}`,
          `SMS Consent: ${input.smsConsent ? 'Yes ✓' : 'No'}`,
          ``,
          `Reply to: ${input.email}`,
        ];
        const content = contentLines.join('\n');

        await notifyOwner({ title, content });

        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
