import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, Clock, Shield, Users, Phone, Star } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Pre-Screened Contractors",
    description: "Every contractor in our network is vetted for proper licensing, insurance, and quality workmanship. No guesswork involved."
  },
  {
    icon: Clock,
    title: "Save Time & Hassle",
    description: "No more calling dozens of contractors or playing phone tag. We handle the coordination so you can focus on planning your project."
  },
  {
    icon: Users,
    title: "Local Arkansas Expertise",
    description: "All our partner contractors are based in Arkansas and understand local codes, weather conditions, and supplier networks."
  },
  {
    icon: Phone,
    title: "Simple Communication",
    description: "We reach out via text or phone to schedule consultations at times that work for you. Quick, easy, and convenient."
  },
  {
    icon: Star,
    title: "No Obligation Consultations",
    description: "Meet with contractors with zero pressure. Free consultations mean you're in complete control of your project decisions."
  },
  {
    icon: Check,
    title: "Proven Track Record",
    description: "We only partner with contractors who have established businesses and positive customer reviews."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose HomeProConnect Arkansas?
              </h1>
              <p className="text-xl text-muted-foreground">
                The smarter way to find qualified contractors for your Arkansas home improvement project
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardContent className="p-6">
                        <Icon className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">The HomeProConnect Difference</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-destructive/5 border-2 border-destructive/20">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-destructive">Traditional Way</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Call dozens of contractors individually</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Wait days for callbacks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Play phone tag scheduling consultations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>No guarantee contractors are qualified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Hours spent researching and vetting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-2 border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">The HomeProConnect Way</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Submit one simple inquiry form</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>We reach out within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>We handle all scheduling coordination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>All contractors pre-screened & verified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Save hours of research time</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How We Vet Contractors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How We Vet Our Contractors</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Licensing Verification
                      </h3>
                      <p className="text-muted-foreground pl-7">
                        We verify that contractors hold all required state and local licenses for their trade.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Insurance Confirmation
                      </h3>
                      <p className="text-muted-foreground pl-7">
                        Every contractor must carry liability insurance and workers compensation coverage.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Track Record Review
                      </h3>
                      <p className="text-muted-foreground pl-7">
                        We review past projects, customer feedback, and business history before adding contractors to our network.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Communication Standards
                      </h3>
                      <p className="text-muted-foreground pl-7">
                        All partner contractors must demonstrate professional communication and customer service skills.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience the Difference
              </h2>
              <p className="text-xl mb-8 text-cream/90">
                Join hundreds of Arkansas homeowners who've found their perfect contractor through HomeProConnect
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/sms-opt-in">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="bg-cream text-navy hover:bg-cream/90">
                    Learn How It Works
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

export default WhyChooseUs;
