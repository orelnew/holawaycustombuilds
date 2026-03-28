import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <h3 className="font-bold text-2xl text-primary mb-2">HomeProConnect</h3>
              <p className="text-sm text-background/70">A service of Windflow Media LLC</p>
            </div>
            <p className="text-background/80">
              Connecting homeowners across the US with trusted local contractors for kitchen remodels, bathroom renovations, and home improvement projects.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link to="/service-area" className="hover:text-primary transition-colors">Service Area</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <a href="tel:+15162889893" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                516-288-9893
              </a>
              <a href="mailto:support@homeproconnectarkansas.com" className="flex items-center gap-2 hover:text-primary transition-colors break-all">
                <Mail className="h-4 w-4" />
                support@homeproconnectarkansas.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} HomeProConnect. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-3 text-sm flex-wrap">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/get-started" className="hover:text-primary transition-colors">SMS Opt-In</Link>
          </div>
          <p className="mt-3 text-sm">Serving communities across the United States</p>
          <p className="mt-2 text-xs">Operated by Windflow Media LLC | 30 N Gould St Ste N, Sheridan, WY 82801</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
