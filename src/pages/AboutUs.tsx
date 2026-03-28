import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Heart, Shield, Zap } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About HomeProConnect               </h1>
              <p className="text-xl text-muted-foreground">
                Connecting Arkansas homeowners with trusted local contractors since day one
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      HomeProConnect Arkansas is an appointment coordination service that connects homeowners with trusted local contractors for kitchen remodels, bathroom renovations, and other home improvement projects.
                    </p>
                    <p>
                      We partner with established, pre-screened contractors throughout Arkansas to help homeowners find the right professional for their project — without the hassle of endless phone calls and scheduling conflicts.
                    </p>
                    <p>
                      Our mission is simple: make it easy for Arkansas homeowners to connect with quality contractors who will bring their home improvement visions to life.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Role */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Role</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    When you submit an inquiry through one of our partner contractor's forms, our team steps in to help coordinate the next steps. We'll reach out via text or phone to:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Confirm your interest in the project</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Answer basic questions about the process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Schedule a consultation at a time that works for you</span>
                    </li>
                  </ul>
                  <p className="text-lg text-muted-foreground mt-6 leading-relaxed font-semibold">
                    We're not the contractor — we're the bridge that makes connecting with them easier.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
                    <p className="text-muted-foreground">
                      We exclusively work with Arkansas-based contractors who understand our communities and local building requirements.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                    <p className="text-muted-foreground">
                      Every contractor in our network is vetted for licensing, insurance, and proven track record of excellent work.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
                    <p className="text-muted-foreground">
                      No more wasted time calling contractors. We coordinate everything so you can focus on your project vision.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <Heart className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Customer-Centered</h3>
                    <p className="text-muted-foreground">
                      Your satisfaction drives everything we do. We're here to make your contractor search stress-free.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Who We Work With</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    HomeProConnect Arkansas partners with:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Licensed and insured contractors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Businesses with established track records</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Professionals who prioritize customer communication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Operated By */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">A Service of Windflow Media LLC</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                HomeProConnect Arkansas is operated by Windflow Media LLC, a marketing and appointment coordination company based in the United States.
              </p>
              <Card className="max-w-md mx-auto">
                <CardContent className="p-6">
                  <p className="font-semibold mb-2">Contact:</p>
                  <p className="text-muted-foreground text-sm">
                    Windflow Media LLC<br />
                    30 N Gould St Ste N<br />
                    Sheridan, WY 82801
                  </p>
                  <p className="text-muted-foreground text-sm mt-4">
                    Email: orelnew@gmail.com
                  </p>
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
                Ready to Transform Your Home?
              </h2>
              <p className="text-xl mb-8 text-cream/90">
                Let us connect you with the perfect contractor for your Arkansas home improvement project
              </p>
              <Link to="/sms-opt-in">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
