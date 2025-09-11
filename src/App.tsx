
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ProjectVolvoD6350 from "./pages/ProjectVolvoD6350";
import ProjectMercruiser57 from "./pages/ProjectMercruiser57";
import ServiceRestore from "./pages/ServiceRestore";
import ServiceRepair from "./pages/ServiceRepair";
import Services from "./pages/Services";
import LongBlocks from "./pages/LongBlocks";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/restore" element={<ServiceRestore />} />
          <Route path="/services/repair" element={<ServiceRepair />} />
          <Route path="/services/longblocks" element={<LongBlocks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/volvo-d6-350" element={<ProjectVolvoD6350 />} />
          <Route path="/projects/mercruiser-5-7l" element={<ProjectMercruiser57 />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;