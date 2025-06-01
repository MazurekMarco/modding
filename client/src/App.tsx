import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-background text-foreground">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
