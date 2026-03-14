import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is HomeProConnect Arkansas?",
    answer: "HomeProConnect Arkansas is an appointment coordination service that connects Arkansas homeowners with pre-screened local contractors for home improvement projects. We're not contractors ourselves—we help facilitate the connection between you and qualified professionals."
  },
  {
    question: "How does the service work?",
    answer: "Simple! Submit an inquiry about your project, and we'll share it with qualified contractors in our network. Our team then reaches out via text or phone to coordinate a consultation at a time that works for you. No pressure, no obligation."
  },
  {
    question: "Is there a cost to use HomeProConnect?",
    answer: "No! Our coordination service is free for homeowners. You only pay the contractor you choose to hire for their actual work."
  },
  {
    question: "How are contractors vetted?",
    answer: "Every contractor in our network is screened for proper licensing, insurance coverage, and proven track record. We verify their credentials and review their history before adding them to our network."
  },
  {
    question: "What types of projects do you help with?",
    answer: "We coordinate appointments for all types of home improvement projects including kitchen remodels, bathroom renovations, painting (interior and exterior), fencing, general construction, and more."
  },
  {
    question: "What areas of Arkansas do you serve?",
    answer: "We serve homeowners throughout Arkansas, including Northwest Arkansas (Fayetteville, Bentonville, Rogers, Springdale), Central Arkansas (Little Rock, Conway, North Little Rock), and many other communities statewide."
  },
  {
    question: "Am I obligated to hire the contractor I meet with?",
    answer: "Absolutely not! Consultations are free and there's no obligation to hire anyone. We want you to find the right contractor for your specific needs."
  },
  {
    question: "How quickly can I expect to hear back?",
    answer: "Our team typically reaches out within 24 hours of receiving your inquiry to coordinate your consultation."
  },
  {
    question: "Can I opt out of SMS messages?",
    answer: "Yes! You can opt out at any time by replying STOP to any message you receive from us."
  },
  {
    question: "Who do I contact if I have questions?",
    answer: "You can reach us at support@homeproconnectarkansas.com or call 479-364-6865. We're here to help!"
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about HomeProConnect Arkansas
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-navy text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 text-cream/90">
                We're here to help! Reach out and we'll get back to you quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="bg-cream text-navy hover:bg-cream/90">
                    Learn How It Works
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

export default FAQ;
