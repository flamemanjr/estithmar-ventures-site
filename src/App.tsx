import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import AlMahaIsland from "./pages/destinations/AlMahaIsland";
import KataraHillsLXR from "./pages/destinations/KataraHillsLXR";
import MaysanDohaLXR from "./pages/destinations/MaysanDohaLXR";
import RosewoodMaldives from "./pages/destinations/RosewoodMaldives";
import RixosBaghdad from "./pages/destinations/RixosBaghdad";
import Team from "./pages/Team";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="destinations/al-maha-island" element={<AlMahaIsland />} />
            <Route path="destinations/katara-hills-lxr" element={<KataraHillsLXR />} />
            <Route path="destinations/maysan-doha-lxr" element={<MaysanDohaLXR />} />
            <Route path="destinations/rosewood-maldives" element={<RosewoodMaldives />} />
            <Route path="destinations/rixos-baghdad" element={<RixosBaghdad />} />
            <Route path="team" element={<Team />} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
