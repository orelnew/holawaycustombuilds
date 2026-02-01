import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Instagram } from "lucide-react";
import remodelingImage from "@/assets/Gemini_Generated_Image_vv5efovv5efovv5e.png";
import logo from "@/assets/logo-2.webp";

const imageModules = import.meta.glob('../assets/client-images/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const clientImages = Object.values(imageModules) as string[];

interface FormData {
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  homeBuilt: string;
  homeOwnership: string;
  homeValue: string;
  propertyType: string;
  budget: string;
  kitchenVision: string;
  remodelReason: string;
  startTimeline: string;
  paymentMethod: string;
  decisionMakers: string;
  otherEstimates: string;
}

const LeadFunnel = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    homeBuilt: "",
    homeOwnership: "",
    homeValue: "",
    propertyType: "",
    budget: "",
    kitchenVision: "",
    remodelReason: "",
    startTimeline: "",
    paymentMethod: "",
    decisionMakers: "",
    otherEstimates: "",
  });

  const totalSteps = 15;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.name.trim() !== "";
      case 1: return formData.phone.trim() !== "";
      case 2: return formData.email.trim() !== "";
      case 3: return formData.street.trim() !== "" && formData.city.trim() !== "" && formData.state.trim() !== "" && formData.zip.trim() !== "";
      case 4: return formData.homeBuilt !== "";
      case 5: return formData.homeOwnership !== "";
      case 6: return formData.homeValue !== "";
      case 7: return formData.propertyType !== "";
      case 8: return formData.budget !== "";
      case 9: return formData.kitchenVision.trim() !== "";
      case 10: return formData.remodelReason !== "";
      case 11: return formData.startTimeline !== "";
      case 12: return formData.paymentMethod !== "";
      case 13: return formData.decisionMakers !== "";
      case 14: return formData.otherEstimates !== "";
      default: return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      // --- Contact Information ---

      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Let's get started!</h2>
              <p className="text-gray-600">What's your full name?</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Great, {formData.name}!</h2>
              <p className="text-gray-600">What's the best phone number to reach you?</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Almost there with your info!</h2>
              <p className="text-gray-600">What's the best email to send your consultation details?</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Property Address</h2>
              <p className="text-gray-600">What's the address of the property you're looking to remodel?</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="street">Street Address</Label>
                <Input
                  id="street"
                  type="text"
                  placeholder="123 Main Street"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="text-lg py-6"
                  autoFocus
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Austin"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="text-lg py-6"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    type="text"
                    placeholder="Texas"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="text-lg py-5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input
                    id="zip"
                    type="text"
                    placeholder="78701"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="text-lg py-5"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      // --- Property & Homeowner Profile ---

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">About Your Home</h2>
              <p className="text-gray-600">When was your home built?</p>
            </div>
            <RadioGroup value={formData.homeBuilt} onValueChange={(value) => setFormData({ ...formData, homeBuilt: value })}>
              {["Before 1980", "1980–1999", "2000–2010", "2011 or newer"].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`homeBuilt-${option}`} />
                  <Label htmlFor={`homeBuilt-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">How long have you owned this home?</h2>
            </div>
            <RadioGroup value={formData.homeOwnership} onValueChange={(value) => setFormData({ ...formData, homeOwnership: value })}>
              {[
                "Less than 1 year (just purchased)",
                "1–5 years",
                "5–15 years",
                "More than 15 years"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`ownership-${option}`} />
                  <Label htmlFor={`ownership-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What's your home's approximate current value?</h2>
            </div>
            <RadioGroup value={formData.homeValue} onValueChange={(value) => setFormData({ ...formData, homeValue: value })}>
              {[
                "Under $350,000",
                "$350,000–$500,000",
                "$500,000–$750,000",
                "$750,000–$1,000,000",
                "Over $1,000,000"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`value-${option}`} />
                  <Label htmlFor={`value-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What type of property is this?</h2>
            </div>
            <RadioGroup value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
              {[
                "Single-family home",
                "Townhome/Condo",
                "Multi-family property",
                "Other"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`propType-${option}`} />
                  <Label htmlFor={`propType-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      // --- Project Details ---

      case 8:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Project Budget</h2>
              <p className="text-gray-600">What's your budget range for this kitchen remodeling project?</p>
            </div>
            <RadioGroup value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              {[
                "Under $20,000",
                "$20,000–$40,000",
                "$40,000–$75,000",
                "$75,000–$125,000",
                "$125,000–$200,000",
                "Over $200,000"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`budget-${option}`} />
                  <Label htmlFor={`budget-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Your Kitchen Vision</h2>
              <p className="text-gray-600">Tell us about your kitchen remodeling vision — what are you hoping to accomplish and why now?</p>
            </div>
            <div className="space-y-2">
              <Textarea
                id="vision"
                placeholder="For example: updating an outdated layout, creating an open concept, adding an island, improving functionality, etc."
                value={formData.kitchenVision}
                onChange={(e) => {
                  if (e.target.value.length <= 500) {
                    setFormData({ ...formData, kitchenVision: e.target.value });
                  }
                }}
                className="text-base min-h-[120px]"
                autoFocus
              />
              <p className="text-sm text-gray-500 text-right">{formData.kitchenVision.length}/500 characters</p>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Why are you considering this remodel?</h2>
              <p className="text-gray-600">Which best describes your situation?</p>
            </div>
            <RadioGroup value={formData.remodelReason} onValueChange={(value) => setFormData({ ...formData, remodelReason: value })}>
              {[
                "We want to improve our kitchen's look, feel, or functionality",
                "We need to fix damage or a structural problem",
                "We're preparing to sell our home",
                "Other"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`reason-${option}`} />
                  <Label htmlFor={`reason-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 11:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">When are you hoping to start this project?</h2>
            </div>
            <RadioGroup value={formData.startTimeline} onValueChange={(value) => setFormData({ ...formData, startTimeline: value })}>
              {[
                "Ready to start within 1–2 months",
                "3–6 months",
                "6–12 months",
                "Just exploring my options for now"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`timeline-${option}`} />
                  <Label htmlFor={`timeline-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 12:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">How are you planning to pay for this kitchen remodel?</h2>
            </div>
            <RadioGroup value={formData.paymentMethod} onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}>
              {[
                "Cash or savings",
                "Home equity line of credit (HELOC)",
                "Personal loan or financing",
                "Insurance claim only",
                "Insurance claim plus additional funds from savings/HELOC",
                "Still exploring my financing options"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`payment-${option}`} />
                  <Label htmlFor={`payment-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      // --- Decision-Making Process ---

      case 13:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Decision-Making</h2>
              <p className="text-gray-600">Will all household decision-makers be available to attend the initial consultation?</p>
            </div>
            <RadioGroup value={formData.decisionMakers} onValueChange={(value) => setFormData({ ...formData, decisionMakers: value })}>
              {[
                "Yes, everyone who needs to approve this project will be there",
                "No, only one of us can attend",
                "Not sure yet"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`decision-${option}`} />
                  <Label htmlFor={`decision-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 14:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Almost done!</h2>
              <p className="text-gray-600">Are you planning to get estimates from other contractors?</p>
            </div>
            <RadioGroup value={formData.otherEstimates} onValueChange={(value) => setFormData({ ...formData, otherEstimates: value })}>
              {[
                "No, I'm just looking for the right contractor who's a good fit",
                "Yes, I'm comparing 2–3 contractors to find the best value",
                "Yes, I'm getting multiple bids to find the lowest price",
                "Haven't decided yet"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`estimates-${option}`} />
                  <Label htmlFor={`estimates-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      default:
        return null;
    }
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-500">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={logo}
              alt="Holaway Custom Builds"
              className="h-28 w-28 md:h-36 md:w-36"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Holaway Custom Builds
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              See the quality and craftsmanship we bring to every kitchen remodel — then let's talk about yours.
            </p>
          </div>

          <Button
            onClick={() => setStarted(true)}
            size="lg"
            className="text-lg px-10 py-6 h-auto"
          >
            Get Started — It's Free
          </Button>

          <div className="w-full space-y-3">
            <p className="text-lg font-semibold text-gray-800 text-center">Check out what our clients are saying about us:</p>
            <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Holaway Custom Builds"
                src="https://player.vimeo.com/video/1160786568"
                className="w-full"
                style={{ aspectRatio: '16/9' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                allowFullScreen
              />
            </div>
          </div>

          <div className="w-full space-y-3">
            <p className="text-lg font-semibold text-gray-800 text-center">Meet the team:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {clientImages.map((src, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                  <img src={src} alt={`Team photo ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === totalSteps) {
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
              Thank you, {formData.name}!
            </h1>
            <p className="text-xl text-gray-600">
              We've received your information and one of our team members will be in touch to schedule your free kitchen remodeling consultation.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-lg text-gray-700">
                📞 We'll reach you at: <span className="font-semibold">{formData.phone}</span>
              </p>
              <p className="text-lg text-gray-700">
                ✉️ Consultation details sent to: <span className="font-semibold">{formData.email}</span>
              </p>
            </div>
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Progress value={progress} className="h-2 rounded-none" />
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-gray-600"
          >
            Exit
          </Button>
        </div>
      </div>

      {/* Hero Cover Section */}
      <div className="relative h-64 md:h-80 mt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${remodelingImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <img
            src={logo}
            alt="Holaway Custom Builds"
            className="h-16 w-16 md:h-20 md:w-20 mb-4 animate-in fade-in zoom-in duration-500"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            Holaway Custom Builds
          </h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            Get Your Free Kitchen Remodeling Consultation — Let's Turn Your Vision Into Reality
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6">
              {currentStep > 0 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                size="lg"
                className="w-full md:flex-1"
              >
                {currentStep === totalSteps - 1 ? "Submit" : "Continue"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFunnel;
