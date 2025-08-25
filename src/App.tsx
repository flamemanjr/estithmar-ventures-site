import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Suspense, lazy } from "react";
import { ImageSkeleton } from "@/components/ui/image-skeleton";

// Eager load critical pages
import Index from "./pages/Index";
import About from "./pages/About";
import Destinations from "./pages/Destinations";

// Lazy load secondary pages for better performance
const Team = lazy(() => import("./pages/Team"));
const News = lazy(() => import("./pages/News"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const AlMahaIsland = lazy(() => import("./pages/destinations/AlMahaIsland"));
const KataraHillsLXR = lazy(() => import("./pages/destinations/KataraHillsLXR"));
const MaysanDohaLXR = lazy(() => import("./pages/destinations/MaysanDohaLXR"));
const RosewoodMaldives = lazy(() => import("./pages/destinations/RosewoodMaldives"));
const RixosBaghdad = lazy(() => import("./pages/destinations/RixosBaghdad"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Optimized QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes  
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="space-y-8 animate-pulse">
        <ImageSkeleton aspectRatio="video" className="h-64" />
        <div className="space-y-4">
          <div className="h-8 bg-muted rounded w-1/2"></div>
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Eager loaded critical pages */}
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="destinations" element={<Destinations />} />
            
            {/* Lazy loaded secondary pages with suspense */}
            <Route path="team" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <Team />
              </Suspense>
            } />
            <Route path="news" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <News />
              </Suspense>
            } />
            <Route path="gallery" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <Gallery />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <Contact />
              </Suspense>
            } />
            
            {/* Destination pages - lazy loaded */}
            <Route path="destinations/al-maha-island" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <AlMahaIsland />
              </Suspense>
            } />
            <Route path="destinations/katara-hills-lxr" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <KataraHillsLXR />
              </Suspense>
            } />
            <Route path="destinations/maysan-doha-lxr" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <MaysanDohaLXR />
              </Suspense>
            } />
            <Route path="destinations/rosewood-maldives" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <RosewoodMaldives />
              </Suspense>
            } />
            <Route path="destinations/rixos-baghdad" element={
              <Suspense fallback={<PageLoadingFallback />}>
                <RixosBaghdad />
              </Suspense>
            } />
          </Route>
          
          {/* 404 page */}
          <Route path="*" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
