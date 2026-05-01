import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import About from "@/pages/About";
import AIRoadmap from "@/pages/AIRoadmap";
import AutomationOffers from "@/pages/AutomationOffers";
import CaseStudies from "@/pages/CaseStudies";
import LexiUSD from "@/pages/CaseStudies/LexiUSD";
import GForceToken from "@/pages/CaseStudies/GForceToken";
import DueDiligence from "@/pages/CaseStudies/DueDiligence";
import LegacyAviationFI from "@/pages/CaseStudies/LegacyAviationFI";
import Cryotherapy from "@/pages/CaseStudies/Cryotherapy";
import Chocomize from "@/pages/CaseStudies/Chocomize";
import Cryotherapy2xBookings from "@/pages/CaseStudies/Cryotherapy2xBookings";
import CryotherapyNoShowReduction from "@/pages/CaseStudies/CryotherapyNoShowReduction";
import Cryotherapy30kEmailCampaign from "@/pages/CaseStudies/Cryotherapy30kEmailCampaign";
import { useEffect } from 'react';
import { useLocation, Redirect } from 'wouter';
import FAQ from "@/pages/FAQ";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { Router, Route, Switch } from "wouter";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";

// Disable browser's automatic scroll restoration so it doesn't fight our scroll-to-top logic
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

/**
 * ScrollReset fires window.scrollTo(0, 0) on every route change.
 *
 * IMPORTANT: wouter v3's useLocation() returns a TUPLE: [locationString, setLocationFn].
 * The first element is a plain string (the current path), NOT an object with a .pathname.
 * Writing `const { pathname } = useLocation()` would give undefined and the effect
 * would never re-fire. The correct destructuring is `const [location] = useLocation()`.
 *
 * This component must be mounted inside <Router> so it has access to wouter's context.
 * It handles all navigation including browser back/forward (wouter listens to popstate).
 * For in-page hash navigation, we skip the scroll so the browser can scroll to the anchor.
 */
function ScrollReset() {
  // location is a plain string like "/about" or "/case-studies/chocomize"
  const [location] = useLocation();

  useEffect(() => {
    // Skip scroll reset for hash navigation (in-page anchors)
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router>
            {/* ScrollReset must be inside Router to access wouter context */}
            <ScrollReset />
            <Navigation />
            <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/ai-roadmap" component={AIRoadmap} />
            <Route path="/automation-offers" component={AutomationOffers} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/case-studies/lexiusd" component={LexiUSD} />
            <Route path="/case-studies/gforcetoken" component={GForceToken} />
            <Route path="/case-studies/due-diligence" component={DueDiligence} />
            <Route path="/case-studies/legacyaviationfi" component={LegacyAviationFI} />
            <Route path="/case-studies/cryotherapy-no-show-reduction" component={CryotherapyNoShowReduction} />
            <Route path="/case-studies/cryotherapy-2x-bookings" component={Cryotherapy2xBookings} />
            <Route path="/case-studies/cryotherapy-30k-email-campaign" component={Cryotherapy30kEmailCampaign} />
            <Route path="/case-studies/chocomize" component={Chocomize} />
            <Route path="/case-studies/email-campaign" component={() => {
              useEffect(() => {
                window.location.href = '/case-studies/cryotherapy-30k-email-campaign';
              }, []);
              return null;
            }} />
            <Route path="/faq" component={FAQ} />
            {/* Client-side redirects for deleted orphan routes */}
            <Route path="/services"><Redirect to="/ai-roadmap" /></Route>
            <Route path="/who-i-serve"><Redirect to="/about" /></Route>
            <Route path="/contact"><Redirect to="/ai-roadmap" /></Route>
            <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
