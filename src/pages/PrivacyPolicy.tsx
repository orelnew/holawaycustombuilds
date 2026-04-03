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
              <p className="text-lg text-muted-foreground mb-2">Windflow Media LLC DBA HomeProConnect</p>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p><strong>Effective Date:</strong> January 1st, 2026</p>
                <p><strong>Last Updated:</strong> January 1st, 2026</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-yellow-50 border-y border-yellow-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-foreground mb-3">IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA</h2>
              <p className="text-foreground leading-relaxed">
                HomeProConnect ("we," "us," or "our") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
              </p>
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
                    Windflow Media LLC DBA HomeProConnect ("HomeProConnect," "we," "us," or "our") is an appointment coordination service. We connect homeowners with local home improvement contractors.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    This Privacy Policy explains how we collect, use, and protect your information when you submit an inquiry, visit our website, or receive communications from us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">We collect the following types of information:</p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Personal Information:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Name, email address, phone number, physical address</li>
                    <li>Payment information when you make a purchase or request a quote</li>
                    <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Non-Personal Information:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>IP address, browser type, device information</li>
                    <li>Website usage patterns and analytics</li>
                    <li>Cookies and similar technologies</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Customer Communication:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Records of inquiries and service requests</li>
                    <li>Appointment details and preferences</li>
                    <li>Service history and feedback</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">We use collected data for:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Providing and improving our services</li>
                    <li>Processing transactions and payments</li>
                    <li>Communicating with you about your inquiries, appointments, and promotions</li>
                    <li>Enhancing website functionality and user experience</li>
                    <li>Ensuring security and fraud prevention</li>
                    <li>Maintaining records of your communication preferences and consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">4. SMS Messaging & Compliance</h2>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Text Message Program Terms & Conditions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Opt-In & Consent:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>You will only receive messages if you have explicitly opted in</li>
                    <li>We maintain timestamped records of all opt-in actions</li>
                    <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Opt-Out Instructions:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>You can cancel SMS notifications at any time by replying "STOP"</li>
                    <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                    <li>All opt-out requests are processed immediately</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Message Frequency & Content:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Message frequency varies based on your interactions with our business</li>
                    <li>Messages will be directly related to the services you have requested</li>
                    <li>We do not send promotional content without specific consent</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Help & Support:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Reply "HELP" for assistance or contact us at support@homeproconnectarkansas.com</li>
                    <li>Customer support is available during regular business hours</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Carrier Information:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Standard message and data rates may apply</li>
                    <li>Carriers are not liable for delayed or undelivered messages</li>
                    <li>Supported carriers include AT&T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">SMS Data Protection Statement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">5. Information Sharing & Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">We do not sell, rent, or trade personal information. We may share information with:</p>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Service Providers:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
                    <li>SMS aggregators and providers solely for the purpose of delivering messages you've consented to receive</li>
                    <li>All service providers are contractually obligated to maintain confidentiality and security</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Legal Compliance:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>If required by law, legal process, or to protect our rights</li>
                    <li>In response to valid law enforcement requests or court orders</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Business Transfers:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>In case of mergers, acquisitions, or sale of assets</li>
                    <li>In such cases, your data remains protected under the terms of this policy</li>
                  </ul>

                  <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                    All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">We implement and maintain reasonable security measures to protect your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Secure access controls and authentication mechanisms</li>
                    <li>Regular security assessments and updates</li>
                    <li>Employee training on data protection</li>
                    <li>Breach notification protocols in accordance with applicable laws</li>
                    <li>Secure backup systems and disaster recovery procedures</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">7. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your information for as long as necessary to fulfill your inquiry and for our legitimate business purposes, unless a longer period is required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">8. Cookies & Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Analyze site traffic and user behavior</li>
                    <li>Remember your preferences</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Measure the effectiveness of our services</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">9. Your Rights & Choices</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access, update, or delete your personal information</li>
                    <li>Opt-out of marketing emails by clicking "unsubscribe" in our emails</li>
                    <li>Opt-out of SMS messages by replying "STOP"</li>
                    <li>Request information on how we process your data</li>
                    <li>Withdraw consent at any time for future communications</li>
                    <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    To exercise these rights, please contact us using the information in Section 12.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">10. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by HomeProConnect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">11. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are intended for homeowners aged 18 and older. We do not knowingly collect information from anyone under 18.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">12. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">13. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    If you have questions about this Privacy Policy or how your information is handled, contact us at:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Windflow Media LLC DBA HomeProConnect</strong><br />
                    30 N Gould St Ste N<br />
                    Sheridan, WY 82801<br />
                    United States
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong>Phone:</strong> +1 (516) 288-9893<br />
                    <strong>Email:</strong> support@homeproconnectarkansas.com
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4 italic">
                    By using our website and services, you consent to this Privacy Policy.
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
