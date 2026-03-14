import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import LexiUSD from "@/pages/LexiUSD";
import GForceToken from "@/pages/GForceToken";
import DueDiligence from "@/pages/DueDiligence";
import CaseStudies from "@/pages/CaseStudies";
import WhoIServe from "@/pages/WhoIServe";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/case-studies/lexiusd"} component={LexiUSD} />
      <Route path={"/case-studies/gforcetoken"} component={GForceToken} />
      <Route path={"/case-studies/due-diligence"} component={DueDiligence} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/who-i-serve"} component={WhoIServe} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
