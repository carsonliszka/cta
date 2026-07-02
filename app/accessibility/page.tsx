import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility · CTA Inc.",
  description:
    "CTA Inc. is committed to making this website usable for as many people as possible, including people who rely on assistive technologies.",
};

export default function Accessibility() {
  return (
    <>
      <header className="legal-head">
        <div className="wrap inner">
          <div className="topline">
            <span className="label fg" data-rv>Legal</span>
            <span className="label dim r" data-rv>CTA Inc. · Est. 1979</span>
          </div>
          <h1>Accessibility</h1>
        </div>
      </header>

      <main>
        <section className="wrap">
          <div className="legal">
            <div className="upd">Draft pending review · Effective date to be set at launch</div>

            <p className="intro">CTA Inc. is committed to making this website usable for as many people as possible, including people who rely on assistive technologies. Accessibility is an ongoing effort, and we work to improve the site over time.</p>

            <h2>Conformance target</h2>
            <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. This is a target we work toward rather than a claim of full conformance at every point in time.</p>

            <h2>Measures we take</h2>
            <ul>
              <li>Semantic HTML structure with headings and landmark regions.</li>
              <li>Keyboard-operable navigation and interactive controls.</li>
              <li>Text alternatives for meaningful images.</li>
              <li>A high-contrast black-and-white design with attention to color contrast.</li>
              <li>Support for the reduced-motion setting in your browser or operating system, which disables the intro animation and other motion.</li>
              <li>A responsive layout that adapts to different screen sizes and zoom levels.</li>
            </ul>

            <h2>Known limitations</h2>
            <p>The homepage opens with a brief animated intro and includes motion-based sections. If you have reduced motion enabled, these animations are turned off and a static experience is shown instead. We continue to review and improve areas that may not yet fully meet our target.</p>

            <h2>Feedback</h2>
            <p>If you encounter an accessibility barrier on this site, we want to hear about it. Please reach us through our <a href="/contact">contact page</a> and describe the issue and the page involved. We will make reasonable efforts to address it.</p>

            <h2>Contact</h2>
            <p>Accessibility feedback can be sent through our <a href="/contact">contact page</a>. CTA Inc., Rockville, Maryland.</p>

            <div className="note"><strong>Note.</strong> This statement reflects the site&apos;s current, ongoing accessibility work and should be verified with a full audit, both automated and manual with assistive-technology testing, before launch. Update the conformance status and date to match the audit results.</div>
          </div>
        </section>
      </main>
    </>
  );
}
