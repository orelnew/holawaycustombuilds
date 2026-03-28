import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const EnergyEfficiency = () => {
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
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Energy</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Energy-Efficient Home Improvements</h1>
                <p className="text-xl text-muted-foreground">Cut costs and stay comfortable year-round</p>
              </header>
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p>Hot summers and cold winters mean energy efficiency pays off quickly. Here are top improvements.</p>
                <h2 className="text-2xl font-bold text-foreground">Insulation Upgrades</h2>
                <p>Adding attic insulation to R-38 or higher can cut cooling costs by 15-20% during hot summer months.</p>
                <h2 className="text-2xl font-bold text-foreground">Window Replacement</h2>
                <p>Energy Star windows reduce heat gain and loss. Expect 10-15 year payback through utility savings.</p>
                <h2 className="text-2xl font-bold text-foreground">HVAC Optimization</h2>
                <p>High-efficiency heat pumps work well in most climates, providing both heating and cooling efficiently.</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default EnergyEfficiency;
