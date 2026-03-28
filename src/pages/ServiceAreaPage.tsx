import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Northeast",
    cities: ["New York City", "Boston", "Philadelphia", "Pittsburgh", "Portland ME", "Buffalo"]
  },
  {
    name: "Southeast",
    cities: ["Atlanta", "Miami", "Charlotte", "Nashville", "Orlando", "Tampa"]
  },
  {
    name: "Midwest",
    cities: ["Chicago", "Detroit", "Minneapolis", "St. Louis", "Cleveland", "Indianapolis"]
  },
  {
    name: "Southwest",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Phoenix", "Albuquerque"]
  },
  {
    name: "West",
    cities: ["Los Angeles", "San Francisco", "Seattle", "Portland OR", "San Diego", "Las Vegas"]
  },
  {
    name: "Mountain",
    cities: ["Denver", "Salt Lake City", "Boise", "Colorado Springs", "Reno", "Billings"]
  }
];

const ServiceAreaPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Where We Serve
              </h1>
              <p className="text-xl text-muted-foreground">
                Connecting homeowners with trusted contractors throughout the United States
              </p>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regions.map((region, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-primary">{region.name}</h3>
                      <ul className="space-y-2">
                        {region.cities.map((city, cityIndex) => (
                          <li key={cityIndex} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {city}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Don't See Your City */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Don't See Your City?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're constantly expanding our contractor network across the United States. Even if your city isn't listed, we may still be able to help!
              </p>
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-cream/90">
                Let us connect you with qualified contractors in your area
              </p>
              <Link to="/get-started">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreaPage;
