import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BirthdayMessagePage from "./pages/BirthdayMessagePage";
import SecondCollagePage from "./pages/SecondCollagePage";
import IconHubPage from "./pages/IconHubPage";
import LettersOverviewPage from "./pages/LettersOverviewPage";
import IndividualLetterPage from "./pages/IndividualLetterPage";
import HeartPage from "./pages/HeartPage";
import HeartLetterPage from "./pages/HeartLetterPage";
import SpotifyPage from "./pages/SpotifyPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/birthday-message" element={<BirthdayMessagePage />} />
          <Route path="/second-collage" element={<SecondCollagePage />} />
          <Route path="/hub" element={<IconHubPage />} />
          <Route path="/letters" element={<LettersOverviewPage />} />
          <Route path="/letter/:id" element={<IndividualLetterPage />} />
          <Route path="/heart" element={<HeartPage />} />
          <Route path="/heart-letter" element={<HeartLetterPage />} />
          <Route path="/spotify" element={<SpotifyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
