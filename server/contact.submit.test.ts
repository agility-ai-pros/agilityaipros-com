import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock the database so tests don't need a real DB connection
vi.mock("./db", () => ({
  getDb: vi.fn().mockResolvedValue({
    insert: vi.fn().mockReturnValue({
      values: vi.fn().mockResolvedValue(undefined),
    }),
  }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("accepts valid submission with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (561) 555-0100",
      interest: "ai-audit",
      smsConsent: true,
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts submission without optional phone number", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Jane Smith",
      email: "jane@example.com",
      interest: "manus-website",
      smsConsent: false,
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts all valid interest values", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const interests = ["ai-audit", "manus-website", "multi-llm-research", "ai-training", "other"] as const;

    for (const interest of interests) {
      const result = await caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        interest,
        smsConsent: true,
      });
      expect(result).toEqual({ success: true });
    }
  });

  it("defaults smsConsent to false when not provided", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // smsConsent is optional with default false in zod schema
    const result = await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      interest: "other",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "John Doe",
        email: "not-an-email",
        interest: "ai-audit",
        smsConsent: true,
      })
    ).rejects.toThrow();
  });

  it("rejects empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "john@example.com",
        interest: "ai-audit",
        smsConsent: true,
      })
    ).rejects.toThrow();
  });
});
