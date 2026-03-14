import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import paintingImage from "@/assets/painting-service.jpg";
import fencingImage from "@/assets/fencing-service.jpg";
import remodelingImage from "@/assets/remodeling-service.jpg";
import constructionImage from "@/assets/construction-service.jpg";

const services = [
  {
    title: "Painting Projects",
    slug: "painting",
    description: "We connect you with skilled painting contractors for interior and exterior projects throughout Arkansas.",
    image: paintingImage,
    features: ["Interior Painting", "Exterior Painting", "Color Consultation", "Surface Preparation"]
  },
  {
    title: "Fencing Projects",
    slug: "fencing",
    description: "Find qualified fencing contractors for custom installation and repair projects to secure your property.",
    image: fencingImage,
    features: ["Wood Fencing", "Chain Link", "Privacy Fences", "Repairs & Maintenance"]
  },
  {
    title: "Remodeling Projects",
    slug: "remodeling",
    description: "Get matched with experienced remodeling contractors to bring your renovation vision to life.",
    image: remodelingImage,
    features: ["Kitchen Remodeling", "Bathroom Upgrades", "Room Additions", "Exterior Renovations"]
  },
  {
    title: "Construction Projects",
    slug: "construction",
    description: "Connect with professional construction contractors for projects from demolition to finishing touches.",
    image: constructionImage,
    features: ["Demolition", "Flooring Installation", "Tilework", "General Construction"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Project Types We Help Coordinate</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting Arkansas homeowners with qualified contractors for all types of home improvement projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/services/${service.slug}`}
              className="block"
            >
              <Card
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group cursor-pointer h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-primary font-semibold group-hover:underline">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
