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
import ArkansasWeatherMaintenance from "./pages/blog/ArkansasWeatherMaintenance";
import ArkansasExteriorColors from "./pages/blog/ArkansasExteriorColors";
import ArkansasFencingRegulations from "./pages/blog/ArkansasFencingRegulations";
import NWAKitchenTrends from "./pages/blog/NWAKitchenTrends";
import ArkansasHomePrep from "./pages/blog/ArkansasHomePrep";
import ArkansasEnergyEfficiency from "./pages/blog/ArkansasEnergyEfficiency";
import ArkansasHistoricHomes from "./pages/blog/ArkansasHistoricHomes";

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
          <Route path="/blog/arkansas-weather-maintenance" element={<ArkansasWeatherMaintenance />} />
          <Route path="/blog/arkansas-exterior-colors" element={<ArkansasExteriorColors />} />
          <Route path="/blog/arkansas-fencing-regulations" element={<ArkansasFencingRegulations />} />
          <Route path="/blog/nwa-kitchen-trends" element={<NWAKitchenTrends />} />
          <Route path="/blog/arkansas-home-prep" element={<ArkansasHomePrep />} />
          <Route path="/blog/arkansas-energy-efficiency" element={<ArkansasEnergyEfficiency />} />
          <Route path="/blog/arkansas-historic-homes" element={<ArkansasHistoricHomes />} />

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
          <Route path="/sms-opt-in" element={<SMSOptIn />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
