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
              <p className="text-lg text-muted-foreground mb-2">Windflow Media LLC DBA HomeProConnect</p>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p><strong>Effective Date:</strong> January 1st, 2026</p>
                <p><strong>Last Updated:</strong> January 1st, 2026</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 text-foreground">


                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">SMS Messaging Terms & Compliance</h2>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">1. Program Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This messaging program sends appointment confirmation and reminder messages to customers who have requested services with HomeProConnect, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2. Cancellation Instructions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can cancel the SMS service at any time. Simply text "STOP" to +1 516 288 9893. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">3. Support Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to support@homeproconnectarkansas.com or call +1 (516) 288-9893 during business hours.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4. Carrier Liability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Carriers are not liable for delayed or undelivered messages.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5. Message & Data Rates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6. Supported Carriers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our SMS program works with all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon, Sprint, and most regional carriers.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">7. Age Restriction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You must be 18 years or older to participate in our SMS program.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">8. Privacy Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For privacy-related inquiries, please refer to our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mt-4 italic">
                    We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">General Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This website (the "Site") is owned and operated by Windflow Media LLC DBA HomeProConnect ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from HomeProConnect.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Intellectual Property Rights</h2>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Our Limited License to You</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This Site and all the materials available on the Site are the property of HomeProConnect and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Your License to Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Disclaimers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites, or the information, products or services offered on or through the sites. We are not responsible for the content, accuracy, or opinions expressed in such sites, and such sites are not investigated, monitored or checked for accuracy or completeness by us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Description of Services</h2>
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
                  <h2 className="text-2xl font-bold text-foreground mb-3">Contractor Relationships</h2>
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
                  <h2 className="text-2xl font-bold text-foreground mb-3">Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">To use HomeProConnect services:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>You must be at least 18 years of age.</strong> By submitting an inquiry or opting in to SMS communications, you confirm you are 18 years or older.</li>
                    <li>You must be a homeowner or authorized representative for the property in question.</li>
                    <li>You must provide accurate contact and project information.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">User Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate contact and project information</li>
                    <li>Respond to scheduling communications in a timely manner</li>
                    <li>Treat contractors and our team with respect</li>
                    <li>Not use our service for fraudulent or illegal purposes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">No Guarantee of Service</h2>
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
                  <h2 className="text-2xl font-bold text-foreground mb-3">Limitation of Liability</h2>
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
                  <h2 className="text-2xl font-bold text-foreground mb-3">Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our service is provided "as is" without warranties of any kind. We do not warrant that our service will be uninterrupted or error-free.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Windflow Media LLC, its officers, and employees from claims arising from your use of our service or violation of these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by the laws of the State of Wyoming, without regard to conflict of law principles.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Disputes arising from these Terms shall be resolved through binding arbitration in Sheridan, Wyoming, in accordance with the American Arbitration Association rules.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms periodically. Continued use of our service after changes constitutes acceptance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Severability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision is found unenforceable, the remaining provisions remain in effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Windflow Media LLC DBA HomeProConnect</strong><br />
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
