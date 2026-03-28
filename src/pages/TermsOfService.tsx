import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
              <p className="text-lg text-muted-foreground mb-2">HomeProConnect</p>
              <p className="text-sm text-muted-foreground">A service of Windflow Media LLC</p>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p><strong>Effective Date:</strong> March 2026</p>
                <p><strong>Last Updated:</strong> March 2026</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 text-foreground">

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using HomeProConnect ("HomeProConnect," "we," "us") — including submitting an inquiry, visiting our website, or receiving SMS communications — you agree to these Terms of Service.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    HomeProConnect is operated by Windflow Media LLC.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">2. Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">To use HomeProConnect services:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>You must be at least 18 years of age.</strong> By submitting an inquiry or opting in to SMS communications, you confirm you are 18 years or older.</li>
                    <li>You must be a homeowner or authorized representative for the property in question.</li>
                    <li>You must provide accurate contact and project information.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">3. Description of Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">HomeProConnect is an appointment coordination service that:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Receives home improvement inquiries from homeowners</li>
                    <li>Matches inquiries with qualified local contractors</li>
                    <li>Coordinates consultations via SMS and phone</li>
                    <li>Sends appointment reminders and confirmations</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3 font-semibold">
                    <strong>We are not a contractor.</strong> We do not perform home improvement work. We connect you with independent contractors who do.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">4. SMS Messaging Program</h2>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Program Description</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    HomeProConnect uses SMS messaging to coordinate appointments between homeowners and contractors. Messages include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Scheduling requests and confirmations</li>
                    <li>Appointment reminders</li>
                    <li>Follow-ups regarding your project inquiry</li>
                    <li>Responses to your questions</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">On Behalf Of</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Messages are sent by HomeProConnect on behalf of our partner contractors. Each message identifies the relevant contractor.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Message Frequency</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Message frequency varies. Expect 2-10 messages per project inquiry depending on scheduling needs.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Message and Data Rates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Standard message and data rates may apply based on your mobile carrier and plan.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Opt-Out Instructions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reply <strong>STOP</strong> to any message to opt out. You will receive a single confirmation message, and no further SMS messages will be sent.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Help and Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reply <strong>HELP</strong> to any message for assistance, or contact us:
                  </p>
                  <ul className="list-none pl-6 space-y-1 text-muted-foreground mt-2">
                    <li><strong>Email:</strong> support@homeproconnectarkansas.com</li>
                    <li><strong>Phone:</strong> +1 (516) 288-9893</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Carrier Liability Disclaimer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HomeProConnect and mobile carriers are not liable for delayed or undelivered messages. Message delivery depends on your carrier's network and is outside our control.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">5. Contractor Relationships</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    HomeProConnect partners with independent contractors. We do not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Employ the contractors</li>
                    <li>Guarantee their work quality</li>
                    <li>Set their pricing</li>
                    <li>Control their scheduling</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Any agreement you make with a contractor is between you and them. We encourage you to verify licensing, insurance, and references before hiring.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">6. User Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate contact and project information</li>
                    <li>Respond to scheduling communications in a timely manner</li>
                    <li>Treat contractors and our team with respect</li>
                    <li>Not use our service for fraudulent or illegal purposes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">7. No Guarantee of Service</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">We do not guarantee:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>That a contractor will be available for your project</li>
                    <li>Specific pricing or timelines from contractors</li>
                    <li>That you will be satisfied with any contractor's work</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    HomeProConnect is a coordination service only.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">8. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website — including text, logos, and design — is owned by Windflow Media LLC and protected by intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    To the fullest extent permitted by law, HomeProConnect and Windflow Media LLC are not liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Any damages arising from contractor work or conduct</li>
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Losses exceeding the amount you paid us (if any)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">10. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our service is provided "as is" without warranties of any kind. We do not warrant that our service will be uninterrupted or error-free.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">11. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Windflow Media LLC, its officers, and employees from claims arising from your use of our service or violation of these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">12. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by the laws of the State of Wyoming, without regard to conflict of law principles.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">13. Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Disputes arising from these Terms shall be resolved through binding arbitration in Sheridan, Wyoming, in accordance with the American Arbitration Association rules.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">14. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms periodically. Continued use of our service after changes constitutes acceptance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">15. Severability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision is found unenforceable, the remaining provisions remain in effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">16. Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your use of our services is also governed by our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">17. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>HomeProConnect</strong><br />
                    Operated by Windflow Media LLC<br />
                    30 N Gould St Ste N<br />
                    Sheridan, WY 82801<br />
                    United States
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong>Email:</strong> support@homeproconnectarkansas.com<br />
                    <strong>Phone:</strong> +1 (516) 288-9893
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
