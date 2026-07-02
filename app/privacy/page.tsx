import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · CTA Inc.",
  description:
    "How CTA Inc. collects, uses, shares, and protects information submitted through this website.",
};

export default function Privacy() {
  return (
    <>
      <header className="legal-head">
        <div className="wrap inner">
          <div className="topline">
            <span className="label fg" data-rv>Legal</span>
            <span className="label dim r" data-rv>CTA Inc. · Est. 1979</span>
          </div>
          <h1>Privacy Policy</h1>
        </div>
      </header>

      <main>
        <section className="wrap">
          <div className="legal">
            <div className="upd">Draft pending legal review · Effective date to be set at launch</div>

            <p className="intro">CTA Inc. and its affiliates (&quot;CTA,&quot; &quot;we,&quot; &quot;us&quot;) take data protection and privacy seriously. This notice explains what information we collect through this website, why we collect it, how we use and share it, and the choices and rights you have. We keep data collection to the minimum needed to respond to inquiries and to operate the site securely.</p>

            <h2>Information we collect</h2>
            <h3>Information you provide</h3>
            <p>When you submit the contact form, we receive the details you enter: your name, organization or agency, email address, the domain of your inquiry, and your message. You choose what to share.</p>
            <h3>Information collected automatically</h3>
            <p>When you request pages or submit the form, our hosting and security systems record standard technical data such as your IP address, approximate location derived from it, and basic request and device metadata. We use this only to operate, secure, and rate-limit the site.</p>

            <h2>Cookies and tracking</h2>
            <p>This site does not use advertising or analytics cookies, and it does not track you across other websites or serve interest-based advertising. If we introduce any such technology in the future, we will update this notice and provide the appropriate controls before doing so.</p>

            <h2>Do Not Track</h2>
            <p>Some browsers offer a Do Not Track (DNT) signal. Because there is no common industry standard for how to respond to DNT signals, and because this site does not track you across other websites or serve interest-based advertising, we do not take any special action in response to them.</p>

            <h2>How and why we use information</h2>
            <ul>
              <li>To respond to your inquiry and communicate with you about it.</li>
              <li>To provide, maintain, operate, and improve the website.</li>
              <li>To protect against, identify, and prevent spam, abuse, fraud, and security threats.</li>
              <li>To comply with and enforce applicable legal requirements, industry standards, and our policies.</li>
            </ul>

            <h2>How we share information</h2>
            <p>We do not sell your information. We share it only as described here:</p>
            <ul>
              <li>Within CTA and its affiliates, where necessary to respond to you or operate our business.</li>
              <li>With service providers that help us run the site, such as hosting and email delivery, who are bound by confidentiality obligations and may use the information only to provide their service to us.</li>
              <li>With regulators, law enforcement, or other authorities where required by law, or to protect our rights, safety, or property.</li>
              <li>In connection with a sale or transfer of some or all of our business or assets, with a potential or actual purchaser.</li>
            </ul>

            <h2>International note</h2>
            <p>The site is operated from the United States. If you access it from another country, you understand that your information will be processed in the United States, which may have different data-protection standards than your location. We take reasonable steps to protect information consistent with this notice and applicable law.</p>

            <h2>How we protect and retain information</h2>
            <p>We maintain reasonable administrative and technical safeguards designed to reduce the risk of loss, misuse, or unauthorized access. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. We keep contact submissions for as long as needed to handle your inquiry and any resulting relationship, and as required for legitimate business, legal, tax, or accounting purposes. Technical logs are retained for a limited period for security and operational purposes.</p>

            <h2>Your privacy rights</h2>
            <p>Subject to applicable law, you may request access to, correction of, or deletion of the personal information you have submitted, and you may object to or ask us to restrict certain processing. To exercise these rights, contact us through our <a href="/contact">contact page</a>. We will verify your request and respond consistent with applicable law. Our fulfillment of these rights is a commitment to a process, not a guarantee of a particular outcome.</p>

            <h2>California residents</h2>
            <p>If you are a California resident, the California Privacy Rights Act (CPRA) may give you rights to know what personal information we collect, to access, correct, or delete it, and to opt out of its &quot;sale&quot; or &quot;sharing&quot; for cross-context behavioral advertising. <strong>We do not sell your personal information and we do not share it for cross-context behavioral advertising.</strong> We do not knowingly collect personal information from children under 16. To exercise your rights, contact us through our <a href="/contact">contact page</a>; we will not treat you differently for doing so. We will respond to verifiable requests within the time required by applicable law, generally within 45 days, which may be extended where permitted.</p>

            <h2>Children</h2>
            <p>This website is intended for business and professional audiences and is not directed to children, and we do not knowingly collect information from them.</p>

            <h2>External links</h2>
            <p>The site may link to third-party websites. This notice does not apply to those sites, and we are not responsible for their content or privacy practices. Your use of them is at your own risk and subject to their policies.</p>

            <h2>Changes to this notice</h2>
            <p>We may update this notice from time to time. Material changes will be reflected by updating the date shown above, and, where appropriate, by additional notice.</p>

            <h2>Contact</h2>
            <p>Questions about this notice or our privacy practices, and requests to exercise your rights, can be sent through our <a href="/contact">contact page</a>. CTA Inc., Rockville, Maryland.</p>

            <div className="note"><strong>Note.</strong> This document is a starting template for the rebuilt site and is not legal advice. Confirm the legal entity name, data-retention periods, and any applicable state, federal, or sector privacy requirements (for example CPRA, and GDPR if you serve EU or UK visitors) with qualified counsel before publishing. If you later add cookies, analytics, a careers portal, or other data collection, this notice must be expanded accordingly.</div>
          </div>
        </section>
      </main>
    </>
  );
}
