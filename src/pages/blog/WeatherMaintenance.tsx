import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const WeatherMaintenance = () => {
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
                    Home Maintenance
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Home Maintenance for Your Area Weather
                </h1>
                <p className="text-xl text-muted-foreground">
                  Essential tips to protect your home from tornadoes, ice storms, and humidity in the Natural State
                </p>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="lead text-lg text-muted-foreground mb-6">
                  Your Area weather can be unpredictable, with tornado season in spring, ice storms in winter, and high humidity year-round. Proper home maintenance is essential to protect your investment and keep your family safe.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Spring: Tornado Season Preparation</h2>
                <p className="text-muted-foreground mb-4">
                  Your Area is part of "Dixie Alley," experiencing frequent tornadoes from March through May. Here's how to prepare your home:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Inspect Your Roof:</strong> Check for loose or damaged shingles that could become projectiles in high winds</li>
                  <li><strong>Trim Trees:</strong> Remove dead branches within 10 feet of your home to prevent damage during storms</li>
                  <li><strong>Secure Outdoor Items:</strong> Anchor or store patio furniture, grills, and decorations</li>
                  <li><strong>Check Gutters:</strong> Clean debris to prevent water damage during heavy spring rains</li>
                  <li><strong>Review Insurance:</strong> Ensure your homeowner's policy covers tornado damage</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Winter: Ice Storm Protection</h2>
                <p className="text-muted-foreground mb-4">
                  Ice storms can cause significant damage to Your Area homes. Protect your property with these steps:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Insulate Pipes:</strong> Wrap exposed pipes in attics, crawl spaces, and exterior walls</li>
                  <li><strong>Seal Air Leaks:</strong> Caulk windows and doors to prevent cold drafts and ice dam formation</li>
                  <li><strong>Service Your Furnace:</strong> Schedule annual maintenance before winter arrives</li>
                  <li><strong>Install Heat Tape:</strong> Add heat cables to vulnerable pipes and gutters</li>
                  <li><strong>Trim Overhanging Branches:</strong> Ice-laden branches can damage roofs and power lines</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Year-Round: Humidity Management</h2>
                <p className="text-muted-foreground mb-4">
                  Your Area's humid climate can lead to mold, wood rot, and pest problems. Combat moisture issues:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Use Dehumidifiers:</strong> Maintain 30-50% humidity levels indoors</li>
                  <li><strong>Improve Ventilation:</strong> Install exhaust fans in bathrooms and kitchens</li>
                  <li><strong>Check for Leaks:</strong> Inspect roof, windows, and foundation regularly</li>
                  <li><strong>Clean AC Units:</strong> Service HVAC systems twice yearly to manage humidity</li>
                  <li><strong>Inspect Crawl Spaces:</strong> Look for standing water and install vapor barriers if needed</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Seasonal Maintenance Checklist</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">Spring (March-May)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Roof inspection</li>
                  <li>Gutter cleaning</li>
                  <li>HVAC service</li>
                  <li>Exterior painting touch-ups</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Summer (June-August)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>AC maintenance</li>
                  <li>Deck sealing</li>
                  <li>Window caulking</li>
                  <li>Pest control</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Fall (September-November)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Gutter cleaning (again)</li>
                  <li>Chimney inspection</li>
                  <li>Weatherstripping</li>
                  <li>Furnace service</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Winter (December-February)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Pipe insulation check</li>
                  <li>Roof snow/ice monitoring</li>
                  <li>Indoor humidity control</li>
                  <li>Emergency kit preparation</li>
                </ul>

                <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
                  <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
                  <p className="text-muted-foreground">
                    Create a home maintenance binder with receipts, warranties, and seasonal checklists. Document all work done by contractors for future reference and resale value.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">When to Call a Professional</h2>
                <p className="text-muted-foreground mb-4">
                  Some maintenance tasks require professional expertise:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Roof repairs or replacement</li>
                  <li>Foundation issues</li>
                  <li>Electrical system updates</li>
                  <li>HVAC installation or major repairs</li>
                  <li>Mold remediation</li>
                </ul>

                <p className="text-muted-foreground">
                  HomeProConnect Your Area can help you find qualified contractors for any maintenance or repair project. Our network of pre-screened professionals understands Your Area weather challenges and can keep your home protected year-round.
                </p>
              </div>

              <div className="mt-12 p-8 bg-navy text-cream rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help with Home Maintenance?</h3>
                <p className="mb-6">
                  Connect with trusted Your Area contractors who understand local weather challenges
                </p>
                <Link to="/get-started">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started Today
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

export default WeatherMaintenance;
