import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Connected Today</h2>
            <p className="text-xl text-cream/90">
              Ready to start your project? Let us connect you with trusted local contractors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-background/10 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-cream">Call Us</h3>
                <a href="tel:+14793646865" className="text-primary hover:text-primary/80 transition-colors text-lg">
                  479-364-6865
                </a>
              </CardContent>
            </Card>

            <Card className="bg-background/10 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-cream">Email Us</h3>
                <a href="mailto:support@homeproconnectarkansas.com" className="text-primary hover:text-primary/80 transition-colors break-all">
                  support@homeproconnectarkansas.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-background/10 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-cream">Service Area</h3>
                <p className="text-cream/80">
                  Serving the US Nationwide
                  <br />
                  <span className="text-sm">Coast to Coast</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-cream">Why Choose HomeProConnect?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">Local</p>
                <p className="text-cream/80">Contractors Nationwide</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">Pre-Screened</p>
                <p className="text-cream/80">Qualified Professionals</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">Hassle-Free</p>
                <p className="text-cream/80">Appointment Coordination</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.location.href = 'tel:+14793646865'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Free Quote
              </Button>
              <Button
                size="lg"
                className="bg-cream text-navy hover:bg-cream/90 hover:text-navy"
                onClick={() => window.location.href = 'mailto:support@homeproconnectarkansas.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
