import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Martinez",
    location: "Little Rock, AR",
    rating: 5,
    review: "HomeProConnect made finding a contractor so easy! They coordinated everything and connected us with a great painter. The whole process was smooth and professional. Highly recommend!",
    service: "Painting Coordination"
  },
  {
    name: "Michael Thompson",
    location: "Fayetteville, AR",
    rating: 5,
    review: "We needed a fence installed and HomeProConnect matched us with a quality contractor in our area. They handled all the scheduling and made the process hassle-free!",
    service: "Fencing Coordination"
  },
  {
    name: "Jennifer Lopez",
    location: "Springdale, AR",
    rating: 5,
    review: "Getting our kitchen remodeled was stressful until we found HomeProConnect. They connected us with the perfect contractor and coordinated our consultation. Very impressed!",
    service: "Kitchen Remodeling"
  },
  {
    name: "David Chen",
    location: "Rogers, AR",
    rating: 5,
    review: "The coordination service was fantastic! They quickly connected us with a qualified contractor for our bathroom renovation. Communication was excellent throughout.",
    service: "Bathroom Renovation"
  },
  {
    name: "Emily Rodriguez",
    location: "Bentonville, AR",
    rating: 5,
    review: "HomeProConnect saved us so much time! Instead of calling dozens of contractors, they matched us with pre-screened professionals. The contractor they connected us with was perfect!",
    service: "Interior Painting"
  },
  {
    name: "Robert Johnson",
    location: "Conway, AR",
    rating: 5,
    review: "Great service! They made it easy to connect with a reliable contractor for our home renovation. No more phone tag or endless searching. Exactly what we needed!",
    service: "Home Renovation"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Homeowners Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied homeowners across the US
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <p className="text-sm text-primary mt-1">{review.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
