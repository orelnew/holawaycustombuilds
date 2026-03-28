import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Austin.png";
import { Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-in fade-in zoom-in duration-700">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-2">
              HomeProConnect
            </h1>
            <p className="text-cream/80 text-lg md:text-xl font-medium">
              A service of Windflow Media LLC
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-cream animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Connecting Homeowners with
            <span className="block text-primary mt-2">Trusted Local Contractors</span>
          </h2>

          <p className="text-xl md:text-2xl text-cream/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            We help coordinate appointments between homeowners and pre-screened home improvement professionals in your area
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              className="bg-cream text-navy hover:bg-cream/90 hover:text-navy text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:+15162889893'}
            >
              <Phone className="mr-2 h-5 w-5" />
              516-288-9893
            </Button>
          </div>

          <div className="pt-8 animate-in fade-in duration-700 delay-500">
            <p className="text-cream font-semibold text-lg mb-2">Local Focus • Pre-Screened Professionals • Hassle-Free Scheduling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
