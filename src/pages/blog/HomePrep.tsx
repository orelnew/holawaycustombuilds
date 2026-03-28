import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const HomePrep = () => {
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
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Home Sales</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Preparing Your Home for Sale</h1>
                <p className="text-xl text-muted-foreground">High-ROI improvements that attract buyers fast</p>
              </header>
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p>Selling your home? Focus on these high-impact improvements for maximum return on investment.</p>
                <h2 className="text-2xl font-bold text-foreground">Fresh Paint</h2>
                <p>Interior painting returns 107% ROI on average. Stick with neutral colors like warm grays and soft whites.</p>
                <h2 className="text-2xl font-bold text-foreground">Curb Appeal</h2>
                <p>Buyers form first impressions in seconds. Clean gutters, trim landscaping, and fresh mulch make huge differences.</p>
                <h2 className="text-2xl font-bold text-foreground">Kitchen Updates</h2>
                <p>Minor kitchen updates like new hardware, lighting, and backsplash can yield 80%+ ROI without major renovation costs.</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default HomePrep;
