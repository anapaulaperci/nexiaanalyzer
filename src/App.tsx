import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HorizontalDashboardLayout from "./components/HorizontalDashboardLayout";
import Dashboard from "./pages/Dashboard";
import Tutorial from "./pages/Tutorial";
import Prompts from "./pages/Prompts";
import CampaignPlanning from "./pages/CampaignPlanning";
import Copy from "./pages/Copy";
import CRM from "./pages/CRM";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HorizontalDashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tutorial" element={<Tutorial />} />
            <Route path="prompts" element={<Prompts />} />
            <Route path="copy" element={<Copy />} />
            <Route path="crm" element={<CRM />} />
            <Route path="campaign" element={<CampaignPlanning />} />
          </Route>
          <Route path="/landing" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
