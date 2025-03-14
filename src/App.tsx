
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateSurvey from "./pages/CreateSurvey"; 
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import TakeSurvey from "./pages/TakeSurvey";
import Suggestions from "./pages/Suggestions";
import CustomerGrowth from "./pages/CustomerGrowth";
import Requirements from "./pages/Requirements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<CreateSurvey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/survey/:surveyId" element={<TakeSurvey />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/customers" element={<CustomerGrowth />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
