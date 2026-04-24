import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import About from "@/pages/About";
import AIRoadmap from "@/pages/AIRoadmap";
import AutomationOffers from "@/pages/AutomationOffers";
import CaseStudies from "@/pages/CaseStudies";
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
            <Route path="/faq" component={FAQ} />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
