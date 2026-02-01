import { InlineWidget } from "react-calendly";
import { CheckCircle2, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const imageModules = import.meta.glob('../assets/client-images/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const clientImages = Object.values(imageModules) as string[];

interface LeadFormData {
  name: string;
  phone: string;
  email: string;
}

const BookMeeting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData as LeadFormData | undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-500">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Thank you{formData ? `, ${formData.name}` : ""}!
          </h1>
          <p className="text-xl text-gray-600">
            We've received your information and one of our team members will be in touch to schedule your free kitchen remodeling consultation.
          </p>
          {formData && (
            <div className="pt-4 space-y-2">
              <p className="text-lg text-gray-700">
                📞 We'll reach you at: <span className="font-semibold">{formData.phone}</span>
              </p>
              <p className="text-lg text-gray-700">
                ✉️ Consultation details sent to: <span className="font-semibold">{formData.email}</span>
              </p>
            </div>
          )}
        </div>

        <div className="pt-4 space-y-2">
          <p className="text-lg font-semibold text-gray-800">Want to skip the wait? Book your consultation directly:</p>
          <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <InlineWidget
              url="https://calendly.com/mark-agm/site-visit"
              styles={{ height: '660px', width: '100%', minHeight: '660px' }}
            />
          </div>
        </div>

        <div className="pt-4 space-y-3">
          <p className="text-lg font-semibold text-gray-800">Some of our recent work:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {clientImages.map((src, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                <img src={src} alt={`Project photo ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://holawaycustombuilds.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View our work
            <ExternalLink className="w-4 h-4" />
          </a>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <a
            href="https://www.instagram.com/holawaycustombuilds/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="text-lg px-8"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;
