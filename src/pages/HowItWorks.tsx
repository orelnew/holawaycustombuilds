import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Users, Calendar, Handshake } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "You Submit an Inquiry",
    description: "Fill out a quick form about your home improvement project — kitchen remodel, bathroom renovation, or other upgrades."
  },
  {
    number: "2",
    icon: Users,
    title: "We Match You",
    description: "Your inquiry is shared with qualified local contractors who specialize in your project type."
  },
  {
    number: "3",
    icon: Calendar,
    title: "We Coordinate",
    description: "Our team reaches out via text or phone to schedule a convenient consultation time."
  },
  {
    number: "4",
    icon: Handshake,
    title: "You Meet Your Contractor",
    description: "Sit down with a trusted professional to discuss your vision, timeline, and budget."
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How It Works
              </h1>
              <p className="text-xl text-muted-foreground">
                Finding the right contractor for your home is simple with HomeProConnect
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon className="h-8 w-8 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-4xl font-bold text-primary">{step.number}</span>
                              <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why HomeProConnect ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
                    <p className="text-muted-foreground">
                      We work exclusively with -based contractors who know local building codes, suppliers, and conditions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Pre-Screened Professionals</h3>
                    <p className="text-muted-foreground">
                      Every contractor in our network is vetted for licensing, insurance, and quality of work.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Hassle-Free Scheduling</h3>
                    <p className="text-muted-foreground">
                      No phone tag. We handle the back-and-forth to find a time that works for you.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">No Obligation</h3>
                    <p className="text-muted-foreground">
                      Consultations are free. No pressure, no commitment. You're in control.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-cream/90">
                Let us connect you with the perfect contractor for your  home improvement project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/sms-opt-in">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your Free Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-cream text-navy hover:bg-cream/90">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
