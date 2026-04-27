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
import { useLocation } from 'wouter';
import FAQ from "@/pages/FAQ";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { Router, Route } from "wouter";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router>
            <Navigation />
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
              const [, navigate] = useLocation();
              useEffect(() => {
                window.location.href = '/case-studies/cryotherapy-30k-email-campaign';
              }, []);
              return null;
            }} />
            <Route path="/faq" component={FAQ} />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
