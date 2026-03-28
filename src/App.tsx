import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import Painting from "./pages/services/Painting";
import Fencing from "./pages/services/Fencing";
import Remodeling from "./pages/services/Remodeling";
import Construction from "./pages/services/Construction";

// Blog Pages
import PaintColors2025 from "./pages/blog/PaintColors2025";
import ChoosingRightFence from "./pages/blog/ChoosingRightFence";
import KitchenRemodelingBudget from "./pages/blog/KitchenRemodelingBudget";
import WeatherMaintenance from "./pages/blog/WeatherMaintenance";
import ExteriorColors from "./pages/blog/ExteriorColors";
import FencingRegulations from "./pages/blog/FencingRegulations";
import NWAKitchenTrends from "./pages/blog/NWAKitchenTrends";
import HomePrep from "./pages/blog/HomePrep";
import EnergyEfficiency from "./pages/blog/EnergyEfficiency";
import HistoricHomes from "./pages/blog/HistoricHomes";

// Other Pages
import ContactPage from "./pages/ContactPage";
import OurApproach from "./pages/OurApproach";
import LeadFunnel from "./pages/LeadFunnel";
import RoofingLeadFunnel from "./pages/RoofingLeadFunnel";
import BookMeeting from "./pages/BookMeeting";

// New Pages
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import WhyChooseUs from "./pages/WhyChooseUs";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import TestimonialsPage from "./pages/TestimonialsPage";

// Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SMSOptIn from "./pages/SMSOptIn";

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

          {/* Service Routes */}
          <Route path="/services/painting" element={<Painting />} />
          <Route path="/services/fencing" element={<Fencing />} />
          <Route path="/services/remodeling" element={<Remodeling />} />
          <Route path="/services/construction" element={<Construction />} />

          {/* Blog Routes */}
          <Route path="/blog/paint-colors-2025" element={<PaintColors2025 />} />
          <Route path="/blog/choosing-right-fence" element={<ChoosingRightFence />} />
          <Route path="/blog/kitchen-remodeling-budget" element={<KitchenRemodelingBudget />} />
          <Route path="/blog/weather-maintenance" element={<WeatherMaintenance />} />
          <Route path="/blog/exterior-colors" element={<ExteriorColors />} />
          <Route path="/blog/fencing-regulations" element={<FencingRegulations />} />
          <Route path="/blog/kitchen-trends" element={<NWAKitchenTrends />} />
          <Route path="/blog/home-prep" element={<HomePrep />} />
          <Route path="/blog/energy-efficiency" element={<EnergyEfficiency />} />
          <Route path="/blog/historic-homes" element={<HistoricHomes />} />

          {/* Other Pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/get-started" element={<LeadFunnel />} />
          <Route path="/roofing-estimate" element={<RoofingLeadFunnel />} />
          <Route path="/book-meeting" element={<BookMeeting />} />

          {/* New Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service-area" element={<ServiceAreaPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/get-started" element={<SMSOptIn />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
