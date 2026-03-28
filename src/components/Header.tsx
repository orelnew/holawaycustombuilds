import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div>
              <h1 className="font-bold text-xl text-primary">HomeProConnect</h1>
              <p className="text-xs text-foreground/60 hidden sm:block">A service of Windflow Media LLC</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                Legal
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/privacy-policy" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                  Terms of Service
                </Link>
              </div>
            </div>
            <Link to="/get-started">
              <Button variant="default">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Link to="/get-started">
              <Button size="sm">Get Started</Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col py-4">
              <Link to="/how-it-works" className="px-4 py-3 text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </Link>
              <Link to="/about" className="px-4 py-3 text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/gallery" className="px-4 py-3 text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link to="/testimonials" className="px-4 py-3 text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                Reviews
              </Link>
              <Link to="/faq" className="px-4 py-3 text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">Legal</div>
              <Link to="/privacy-policy" className="px-8 py-2 text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="px-8 py-2 text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                Terms of Service
              </Link>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
