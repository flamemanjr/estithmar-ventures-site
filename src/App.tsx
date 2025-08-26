import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";
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

const App = () => {
  console.log('App.tsx: App component initializing');
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Layout />}>
                  {/* Eager loaded critical pages */}
                  <Route index element={
                    <ErrorBoundary>
                      <Index />
                    </ErrorBoundary>
                  } />
                  <Route path="about" element={
                    <ErrorBoundary>
                      <About />
                    </ErrorBoundary>
                  } />
                  <Route path="destinations" element={
                    <ErrorBoundary>
                      <Destinations />
                    </ErrorBoundary>
                  } />
                  
                  {/* Lazy loaded secondary pages with suspense */}
                  <Route path="team" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <Team />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                  <Route path="news" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <News />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                  <Route path="gallery" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <Gallery />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                  <Route path="contact" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <Contact />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                  
                  {/* Destination pages - lazy loaded */}
                  <Route path="destinations/al-maha-island" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <AlMahaIsland />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                  <Route path="destinations/katara-hills-lxr" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <KataraHillsLXR />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                  <Route path="destinations/maysan-doha-lxr" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <MaysanDohaLXR />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                  <Route path="destinations/rosewood-maldives" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <RosewoodMaldives />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                  <Route path="destinations/rixos-baghdad" element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageLoadingFallback />}>
                        <RixosBaghdad />
                      </Suspense>
                    </ErrorBoundary>
                  } />
                </Route>
                
                {/* 404 page */}
                <Route path="*" element={
                  <ErrorBoundary>
                    <Suspense fallback={<PageLoadingFallback />}>
                      <NotFound />
                    </Suspense>
                  </ErrorBoundary>
                } />
              </Routes>
            </ErrorBoundary>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
