import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SequenceUpload from "./pages/SequenceUpload";
import AIModelSelection from "./pages/AIModelSelection";
import Visualization3D from "./pages/Visualization3D";
import ExportResults from "./pages/ExportResults";
import CompoundLibrary from "./pages/CompoundLibrary";
import MolecularDocking from "./pages/MolecularDocking";
import LeadOptimization from "./pages/LeadOptimization";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sequence-upload" element={<SequenceUpload />} />
          <Route path="/ai-model-selection" element={<AIModelSelection />} />
          <Route path="/3d-visualization" element={<Visualization3D />} />
          <Route path="/export-results" element={<ExportResults />} />
          <Route path="/compound-library" element={<CompoundLibrary />} />
          <Route path="/molecular-docking" element={<MolecularDocking />} />
          <Route path="/lead-optimization" element={<LeadOptimization />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
