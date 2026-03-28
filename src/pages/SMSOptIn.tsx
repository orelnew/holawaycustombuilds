import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional().refine((val) => !val || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(val), {
    message: "Invalid phone number format"
  }),
  email: z.string().email("Invalid email address"),
  transactionalConsent: z.boolean().optional(),
  marketingConsent: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

const SMSOptIn = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Here you would normally send the data to your backend
    console.log("Form submitted:", data);

    // Show thank you message
    setSubmitted(true);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-primary/10 to-navy/5">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8">
                  <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Thank You!
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Your information has been received. We'll be in touch soon to coordinate your home improvement consultation.
                  </p>
                  <p className="text-muted-foreground">
                    Watch for a text message or phone call from our team to schedule your appointment with a qualified local contractor.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button size="lg">Return to Home</Button>
                  </Link>
                  <Link to="/how-it-works">
                    <Button variant="outline" size="lg">Learn More About Our Process</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get Your Free Home Improvement Consultation
              </h1>
              <p className="text-lg text-muted-foreground">
                Join hundreds of homeowners who've transformed their homes with our proven contractor matching system. Fill out the form below to get started.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name (Optional)</Label>
                        <Input
                          id="firstName"
                          {...register("firstName")}
                          className={errors.firstName ? "border-destructive" : ""}
                        />
                        {errors.firstName && (
                          <p className="text-sm text-destructive">{errors.firstName.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name (Optional)</Label>
                        <Input
                          id="lastName"
                          {...register("lastName")}
                          className={errors.lastName ? "border-destructive" : ""}
                        />
                        {errors.lastName && (
                          <p className="text-sm text-destructive">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(479) 555-1234"
                        {...register("phone")}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email")}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    {/* SMS Consent Section */}
                    <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">SMS Consent (Optional)</h3>
                        <p className="text-sm text-muted-foreground">
                          The following SMS disclosures clearly state who is sending messages, what type of messages will be sent, message frequency, rates, and how to get help or opt out.
                        </p>
                      </div>

                      {/* Transactional Messages Checkbox */}
                      <div className="flex items-start space-x-3 bg-background rounded-lg p-4">
                        <Controller
                          name="transactionalConsent"
                          control={control}
                          render={({ field }) => (
                            <Checkbox
                              id="transactionalConsent"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          )}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="transactionalConsent"
                            className="text-sm leading-relaxed cursor-pointer"
                          >
                            I consent to receive transactional messages from <strong>Windflow Media LLC (DBA HomeProConnect)</strong> at the phone number provided. This includes appointment reminders and meeting updates. Message frequency may vary (typically 2-5 messages per month). Message & data rates may apply. Reply HELP for help or STOP to opt out.
                          </label>
                        </div>
                      </div>

                      {/* Marketing Messages Checkbox */}
                      <div className="flex items-start space-x-3 bg-background rounded-lg p-4">
                        <Controller
                          name="marketingConsent"
                          control={control}
                          render={({ field }) => (
                            <Checkbox
                              id="marketingConsent"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          )}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="marketingConsent"
                            className="text-sm leading-relaxed cursor-pointer"
                          >
                            I consent to receive marketing and promotional messages from <strong>Windflow Media LLC (DBA HomeProConnect)</strong> at the phone number provided. This includes case studies and business tips. Message frequency may vary (typically 2-5 messages per month). Message & data rates may apply. Reply HELP for help or STOP to opt out.
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg"
                    >
                      Get My Free Consultation
                    </Button>

                    {/* Privacy & Data Sharing Notice */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Privacy & Data Sharing:</strong> Your SMS consent and phone number will <strong>not be shared with third parties</strong> except our SMS service providers who are required to deliver text messages. For full details, please review our{" "}
                        <Link to="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link to="/terms-of-service" className="text-primary hover:underline">
                          Terms of Service
                        </Link>
                        , which are publicly accessible.
                      </p>
                    </div>

                    {/* Trust Badges */}
                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-3">
                        Trusted by over 500+ homeowners
                      </p>
                      <div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
                        <span>✓ No Spam Guarantee</span>
                        <span>✓ Secure & Confidential</span>
                        <span>✓ Unsubscribe Anytime</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SMSOptIn;
