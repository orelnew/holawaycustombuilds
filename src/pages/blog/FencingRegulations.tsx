import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const FencingRegulations = () => {
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
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Fencing</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Fencing Regulations in Your City</h1>
                <p className="text-xl text-muted-foreground">Local ordinances and permit requirements you need to know</p>
              </header>
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p>Before installing a fence, understanding local regulations can save time and money.</p>
                <h2 className="text-2xl font-bold text-foreground">Height Restrictions</h2>
                <p>Most cities allow 6-foot fences in backyards and 4-foot fences in front yards. Check with your local city before building.</p>
                <h2 className="text-2xl font-bold text-foreground">Permit Requirements</h2>
                <p>Many cities typically require permits for fence installation. Expect $50-$150 permit fees.</p>
                <h2 className="text-2xl font-bold text-foreground">Property Line Considerations</h2>
                <p>Always survey your property lines before installation. Local laws require fences stay on your property unless neighbors agree otherwise.</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default FencingRegulations;
