import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, HelpCircle, Images, Info, MapPin, MessageSquare, Star, Lightbulb } from "lucide-react";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when page loads or hash changes
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  const quickLinks = [
    { title: "How It Works", icon: Lightbulb, path: "/how-it-works", description: "Learn our simple 4-step process" },
    { title: "About Us", icon: Info, path: "/about", description: "Our story and mission" },
    { title: "Why Choose Us", icon: Star, path: "/why-choose-us", description: "See what makes us different" },
    { title: "Gallery", icon: Images, path: "/gallery", description: "View completed projects" },
    { title: "Testimonials", icon: MessageSquare, path: "/testimonials", description: "Read homeowner reviews" },
    { title: "Service Area", icon: MapPin, path: "/service-area", description: "Cities we serve across the US" },
    { title: "FAQ", icon: HelpCircle, path: "/faq", description: "Get answers to common questions" },
    { title: "Get Started", icon: FileText, path: "/get-started", description: "Free consultation signup" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Quick Links Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explore HomeProConnect
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about connecting with trusted contractors
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                A service of <strong>Windflow Media LLC</strong>
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={index} to={link.path}>
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary border-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">{link.title}</h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Services />
        <ServiceArea />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
