import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const ExteriorColors = () => {
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
                    Home Design
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Best Exterior Paint Colors for Your Home
                </h1>
                <p className="text-xl text-muted-foreground">
                  Climate-appropriate colors that boost curb appeal and resale value
                </p>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="lead text-lg text-muted-foreground mb-6">
                  Choosing the right exterior paint color for your home means considering climate, architecture, and neighborhood aesthetics. Here are the top color choices that work beautifully for any region.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Warm Neutrals: The Timeless Classic</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Colors:</strong> Warm beige, sandy tan, soft taupe
                </p>
                <p className="text-muted-foreground mb-4">
                  Warm neutral tones are incredibly popular for good reason:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Complement the natural landscape of forests and rolling hills</li>
                  <li>Hide dirt and pollen from our humid climate</li>
                  <li>Work with traditional, farmhouse, and contemporary architecture</li>
                  <li>Maintain strong resale appeal</li>
                  <li>Pair well with stone, brick, and wood accents</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  <strong>Best for:</strong> Ranch homes, craftsman bungalows, and farmhouses
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Soft Grays: Modern & Sophisticated</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Colors:</strong> Warm gray, greige, light charcoal
                </p>
                <p className="text-muted-foreground mb-4">
                  Gray exteriors have surged in popularity across the country:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Provide a contemporary, upscale look</li>
                  <li>Resist showing moisture stains from humidity and rain</li>
                  <li>Create stunning contrast with white trim</li>
                  <li>Work exceptionally well with modern farmhouse style</li>
                  <li>Photograph beautifully for listings</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  <strong>Best for:</strong> Modern builds, updated mid-century homes, new construction in developing areas
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Classic White & Off-White</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Colors:</strong> Bright white, cream, ivory, alabaster
                </p>
                <p className="text-muted-foreground mb-4">
                  White remains timeless and elegant:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Reflects heat in summer, potentially lowering cooling costs</li>
                  <li>Makes homes appear larger and more inviting</li>
                  <li>Classic, timeless aesthetic</li>
                  <li>Requires more frequent cleaning due to pollen and dirt</li>
                  <li>Pairs beautifully with black or dark green shutters</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  <strong>Best for:</strong> Colonial, Greek Revival, traditional homes, historic districts
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Earthy Greens: Natural & Calming</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Colors:</strong> Sage green, olive, forest green accents
                </p>
                <p className="text-muted-foreground mb-4">
                  Green exteriors blend beautifully with natural environments:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Harmonize with wooded lots and mountain views</li>
                  <li>Trending in eco-conscious communities</li>
                  <li>Work well as full-home color or accent</li>
                  <li>Pair wonderfully with natural wood and stone</li>
                  <li>Particularly popular in rural and mountain communities</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  <strong>Best for:</strong> Cabin-style homes, mountain properties, wooded lots, cottages
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Warm Blues: Coastal-Inspired Charm</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Colors:</strong> Navy, slate blue, soft sky blue
                </p>
                <p className="text-muted-foreground mb-4">
                  Blue exteriors bring a fresh, distinctive look:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Stand out in neighborhoods without being loud</li>
                  <li>Evoke calm and trust</li>
                  <li>Work beautifully with white trim and brass hardware</li>
                  <li>Popular in historic areas and downtown districts</li>
                  <li>Resist fading in sun better than some other colors</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  <strong>Best for:</strong> Victorian homes, historic districts, lakefront properties, cottage-style homes
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Important Considerations</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Climate Factors</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Humidity:</strong> Choose mildew-resistant paint formulas</li>
                  <li><strong>Sun Exposure:</strong> Lighter colors reflect heat and reduce fading</li>
                  <li><strong>Pollen & Dirt:</strong> Mid-tone colors show less than pure white</li>
                  <li><strong>Storm Damage:</strong> Quality paint protects siding from moisture</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Regional Preferences</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Urban Areas:</strong> Modern grays and whites dominate new construction</li>
                  <li><strong>Suburban Areas:</strong> Mix of traditional neutrals and contemporary colors</li>
                  <li><strong>Mountain Regions:</strong> Natural greens and earthy tones</li>
                  <li><strong>Rural Areas:</strong> Classic whites and warm neutrals</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Color Combinations That Work</h2>
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold mb-3">Popular Color Combinations:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Warm gray body + white trim + black accents</li>
                    <li>Soft beige + cream trim + wood tones</li>
                    <li>Navy blue + white trim + brass fixtures</li>
                    <li>Sage green + natural stone + white accents</li>
                    <li>Off-white + warm gray shutters + black door</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Resale Value Tips</h2>
                <p className="text-muted-foreground mb-4">
                  If you're painting with resale in mind:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Stick with neutral to warm neutrals for broadest appeal</li>
                  <li>Avoid trendy colors that may date the home</li>
                  <li>Match neighborhood aesthetics while standing out subtly</li>
                  <li>Ensure quality paint application for lasting impression</li>
                  <li>Consider HOA restrictions before choosing colors</li>
                </ul>

                <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
                  <h3 className="text-xl font-semibold mb-2">Professional Tip</h3>
                  <p className="text-muted-foreground">
                    Always test paint samples on your actual home exterior. Colors look different in varied lighting conditions throughout the day. Test on multiple sides of your home and observe for at least a week before committing.
                  </p>
                </div>

                <p className="text-muted-foreground">
                  Ready to refresh your home's exterior? HomeProConnect can connect you with experienced painting contractors who understand local climate challenges and color trends.
                </p>
              </div>

              <div className="mt-12 p-8 bg-navy text-cream rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Paint Your Home?</h3>
                <p className="mb-6">
                  Connect with trusted painting contractors
                </p>
                <Link to="/get-started">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Find a Painter Today
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

export default ExteriorColors;
