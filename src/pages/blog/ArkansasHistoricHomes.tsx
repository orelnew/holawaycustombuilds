import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const ArkansasHistoricHomes = () => {
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
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Restoration</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Historic Home Remodeling in Arkansas</h1>
                <p className="text-xl text-muted-foreground">Preserving character while modernizing comfort</p>
              </header>
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p>Arkansas has beautiful historic homes from Victorian to Craftsman styles. Remodeling requires balancing preservation with modern needs.</p>
                <h2 className="text-2xl font-bold text-foreground">Know the Rules</h2>
                <p>Homes in historic districts have specific guidelines. Contact your local historic preservation commission before starting work.</p>
                <h2 className="text-2xl font-bold text-foreground">Preserve Original Features</h2>
                <p>Original woodwork, windows, and architectural details add value. Restore rather than replace when possible.</p>
                <h2 className="text-2xl font-bold text-foreground">Modernize Invisibly</h2>
                <p>Update electrical, plumbing, and HVAC systems while maintaining the home's historic character and charm.</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default ArkansasHistoricHomes;
