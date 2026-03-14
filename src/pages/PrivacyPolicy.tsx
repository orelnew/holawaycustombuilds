import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-navy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground mb-2">HomeProConnect Arkansas</p>
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
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    HomeProConnect Arkansas ("HomeProConnect," "we," "us," or "our") is an appointment coordination service operated by Windflow Media LLC. We connect homeowners with local home improvement contractors.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    This Privacy Policy explains how we collect, use, and protect your information when you submit an inquiry, visit our website, or receive communications from us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Contact Information:</strong> Name, phone number, email address, home address</li>
                    <li><strong>Project Information:</strong> Type of project (kitchen, bathroom, etc.), timeline, budget range</li>
                    <li><strong>Property Information:</strong> Home value, ownership status, project location</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Information Collected Automatically</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                    <li><strong>Usage Data:</strong> Pages visited, time on site, referring URLs</li>
                    <li><strong>Cookies:</strong> We use cookies to improve site functionality</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Share your inquiry with qualified local contractors</li>
                    <li>Contact you via SMS or phone to coordinate appointments</li>
                    <li>Confirm consultation times and send reminders</li>
                    <li>Improve our services and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">4. SMS Communications</h2>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">How You Opt In</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you submit an inquiry through a contractor's lead form or our website, you consent to receive SMS messages from HomeProConnect Arkansas regarding your home improvement inquiry.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Types of Messages</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Appointment coordination and scheduling</li>
                    <li>Consultation confirmations and reminders</li>
                    <li>Follow-up messages about your project inquiry</li>
                    <li>Responses to your questions</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Who Sends Messages</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Messages are sent by HomeProConnect Arkansas on behalf of local contractors in our network. Messages will identify both the contractor and HomeProConnect.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Message Frequency</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Message frequency varies based on your inquiry. Typically 2-10 messages per project inquiry.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Message and Data Rates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Message and data rates may apply depending on your mobile carrier and plan.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Opt-Out</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may opt out at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation and no further messages will be sent.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Help</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For assistance, reply <strong>HELP</strong> to any message or contact us at orelnew@gmail.com.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Consent Not Shared</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your SMS consent and phone number will <strong>not be sold or shared with third parties</strong> for their marketing purposes. We only share your contact information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                    <li>The specific contractor(s) relevant to your inquiry</li>
                    <li>Our SMS service providers who deliver messages on our behalf</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">5. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">We share your information with:</p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Partner Contractors</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your project inquiry is shared with qualified local contractors who may be a fit for your project. This is the core purpose of our service.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Service Providers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Third parties who help us operate (SMS platforms, CRM systems, analytics). These providers are contractually required to protect your data.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Legal Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When required by law, court order, or government request.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use reasonable technical and administrative measures to protect your information. However, no system is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">7. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your information for as long as necessary to fulfill your inquiry and for our legitimate business purposes, unless a longer period is required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">8. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">You may:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Request access to your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of SMS communications</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Contact us at orelnew@gmail.com to exercise these rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">9. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are intended for homeowners aged 18 and older. We do not knowingly collect information from anyone under 18.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">10. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">11. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>HomeProConnect Arkansas</strong><br />
                    Operated by Windflow Media LLC<br />
                    30 N Gould St Ste N<br />
                    Sheridan, WY 82801<br />
                    United States
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong>Email:</strong> orelnew@gmail.com<br />
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

export default PrivacyPolicy;
