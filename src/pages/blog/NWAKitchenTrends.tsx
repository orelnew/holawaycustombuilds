import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const NWAKitchenTrends = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>

              <header className="mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <time>March 14, 2026</time>
                  <span>•</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    Kitchen Remodeling
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Kitchen Remodeling Trends for 2026
                </h1>
                <p className="text-xl text-muted-foreground">
                  What's hot in kitchen design in 2026
                </p>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="lead text-lg text-muted-foreground mb-6">
                  Modern kitchen design is experiencing a renaissance, blending contemporary sophistication with timeless charm. Here's what's trending in kitchens this year.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Two-Tone Cabinets</h2>
                <p className="text-muted-foreground mb-4">
                  The hottest trend in kitchen design is two-tone cabinetry:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>White or cream upper cabinets with navy or forest green lowers</li>
                  <li>Natural wood island contrasting with painted perimeter cabinets</li>
                  <li>Creates visual interest and depth</li>
                  <li>Popular in modern farmhouse and transitional designs</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Quartz Countertops</h2>
                <p className="text-muted-foreground mb-4">
                  Quartz has overtaken granite as the top choice:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Low maintenance ideal for busy families</li>
                  <li>Resistant to staining from humidity</li>
                  <li>Wide variety of colors and patterns</li>
                  <li>Waterfall edges on islands are especially popular</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Open Shelving</h2>
                <p className="text-muted-foreground mb-4">
                  Homeowners everywhere are embracing open shelving:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Natural wood or metal floating shelves</li>
                  <li>Display pottery, plants, and glassware</li>
                  <li>Often mixed with traditional upper cabinets</li>
                  <li>Creates an airy, approachable feel</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Smart Kitchen Technology</h2>
                <p className="text-muted-foreground mb-4">
                  Tech-forward homeowners want connected kitchens:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Smart refrigerators with touchscreens</li>
                  <li>Voice-activated faucets and lighting</li>
                  <li>Built-in charging stations</li>
                  <li>Wi-Fi enabled appliances</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Natural Materials</h2>
                <p className="text-muted-foreground mb-4">
                  Connecting to natural beauty through materials:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Butcher block countertops for islands</li>
                  <li>Natural stone backsplashes</li>
                  <li>Wood beam accents</li>
                  <li>Live-edge wood details</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Budget Ranges</h2>
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Minor Remodel:</strong> $15,000-$30,000 (paint, hardware, countertops)</li>
                    <li><strong>Mid-Range:</strong> $30,000-$60,000 (new cabinets, appliances, flooring)</li>
                    <li><strong>Upscale:</strong> $60,000-$100,000+ (custom cabinets, high-end appliances, layout changes)</li>
                  </ul>
                </div>

                <p className="text-muted-foreground">
                  Ready to remodel your kitchen? HomeProConnect can connect you with experienced local contractors who understand regional trends and building codes.
                </p>
              </div>

              <div className="mt-12 p-8 bg-navy text-cream rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Plan Your Kitchen Remodel</h3>
                <p className="mb-6">Connect with trusted contractors today</p>
                <Link to="/sms-opt-in">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NWAKitchenTrends;
