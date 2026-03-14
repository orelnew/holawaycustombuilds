import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Little Rock, AR",
    rating: 5,
    review: "HomeProConnect made finding a contractor so easy! They coordinated everything and connected us with a great painter. The whole process was smooth and professional. Highly recommend!",
    project: "Painting"
  },
  {
    name: "Michael Thompson",
    location: "Fayetteville, AR",
    rating: 5,
    review: "We needed a fence installed and HomeProConnect matched us with a quality contractor in our area. They handled all the scheduling and made the process hassle-free!",
    project: "Fencing"
  },
  {
    name: "Jennifer Lopez",
    location: "Springdale, AR",
    rating: 5,
    review: "Getting our kitchen remodeled was stressful until we found HomeProConnect. They connected us with the perfect contractor and coordinated our consultation. Very impressed!",
    project: "Kitchen Remodel"
  },
  {
    name: "David Chen",
    location: "Rogers, AR",
    rating: 5,
    review: "The coordination service was fantastic! They quickly connected us with a qualified contractor for our bathroom renovation. Communication was excellent throughout.",
    project: "Bathroom Renovation"
  },
  {
    name: "Emily Rodriguez",
    location: "Bentonville, AR",
    rating: 5,
    review: "HomeProConnect saved us so much time! Instead of calling dozens of contractors, they matched us with pre-screened professionals. The contractor they connected us with was perfect!",
    project: "Interior Painting"
  },
  {
    name: "Robert Johnson",
    location: "Conway, AR",
    rating: 5,
    review: "Great service! They made it easy to connect with a reliable contractor for our home renovation. No more phone tag or endless searching. Exactly what we needed!",
    project: "Home Renovation"
  },
  {
    name: "Amanda White",
    location: "Little Rock, AR",
    rating: 5,
    review: "Professional and efficient! HomeProConnect took the stress out of finding a contractor. They followed up promptly and made scheduling so easy.",
    project: "Exterior Painting"
  },
  {
    name: "James Wilson",
    location: "Fort Smith, AR",
    rating: 5,
    review: "I appreciated how quickly they responded and matched us with a contractor. The whole experience was smooth from start to finish. Would definitely use again!",
    project: "Deck Construction"
  },
  {
    name: "Lisa Brown",
    location: "Jonesboro, AR",
    rating: 5,
    review: "HomeProConnect is a game-changer! They connected us with an excellent contractor who did amazing work on our kitchen. Couldn't be happier with the service.",
    project: "Kitchen Remodel"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Homeowner Reviews
              </h1>
              <p className="text-xl text-muted-foreground">
                See what Arkansas homeowners are saying about HomeProConnect
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-sm text-primary mt-1">{testimonial.project}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
