import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import paintingImage from "@/assets/painting-service.jpg";
import fencingImage from "@/assets/fencing-service.jpg";
import remodelingImage from "@/assets/remodeling-service.jpg";
import constructionImage from "@/assets/construction-service.jpg";

const projects = [
  {
    title: "Modern Kitchen Remodel",
    category: "Kitchen",
    image: remodelingImage,
    description: "Complete kitchen transformation with custom cabinetry and modern finishes"
  },
  {
    title: "Exterior Painting Project",
    category: "Painting",
    image: paintingImage,
    description: "Full exterior repaint bringing new life to this home"
  },
  {
    title: "Custom Privacy Fence",
    category: "Fencing",
    image: fencingImage,
    description: "Beautiful wood privacy fence installation for backyard security"
  },
  {
    title: "Bathroom Renovation",
    category: "Remodeling",
    image: constructionImage,
    description: "Modern bathroom update with tile work and new fixtures"
  },
  {
    title: "Interior Paint Refresh",
    category: "Painting",
    image: paintingImage,
    description: "Interior painting project with color consultation"
  },
  {
    title: "Deck Construction",
    category: "Construction",
    image: constructionImage,
    description: "Custom deck build perfect for outdoor living"
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Project Gallery
              </h1>
              <p className="text-xl text-muted-foreground">
                See the quality work our partner contractors deliver across the US
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-primary">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">What Homeowners Are Saying</h2>
              <Card className="border-2">
                <CardContent className="p-8">
                  <p className="text-lg italic text-muted-foreground mb-4">
                    "HomeProConnect connected us with an amazing contractor for our kitchen remodel. The whole process was smooth, and we couldn't be happier with the results!"
                  </p>
                  <p className="font-semibold">— Jennifer L.</p>
                  <p className="text-sm text-muted-foreground">Springdale, AR</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Project Could Be Next
              </h2>
              <p className="text-xl mb-8 text-cream/90">
                Let us connect you with qualified contractors who deliver quality work like this
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/sms-opt-in">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/testimonials">
                  <Button size="lg" variant="outline" className="bg-cream text-navy hover:bg-cream/90">
                    Read More Reviews
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
