import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · CTA Inc.",
  description:
    "Tell us what you are trying to accomplish. A no-cost, no-risk first conversation with the CTA engineering team. Encinitas, California. Est. 1979.",
};

export default function Contact() {
  return (
    <>
      <header className="phead" id="top">
        <div className="bg"><img src="/assets/img/night-ops.jpg" alt="Night flight operations on a carrier deck" /></div>
        <div className="wrap inner">
          <div className="topline">
            <span className="label fg" data-rv>Contact</span>
            <span className="label dim r" data-rv>No-Cost · No-Risk Consultation</span>
          </div>
          <h1 className="disp" data-split>Not every problem fits in a box</h1>
          <p className="lead" data-rv>Sometimes the best place to start is a single, simple goal. Tell us what you are trying to accomplish. You do not need every detail figured out first.</p>
        </div>
      </header>

      <main>
        <section className="psec wrap egrid" data-frame>
          <div className="rail">
            <div className="label dim" data-rv>00</div>
            <div className="label dim" data-rv>Inquiry</div>
          </div>
          <div className="body">
            <p className="body" data-rv>The prospect of tackling a hard data or systems problem can seem overwhelming: where to start, what to ask for, what success looks like. Those questions are exactly what a first conversation is for. Send us the shape of the problem and we will help you scope it.</p>

            <div className="cform-head" data-rv>
              <span className="label fg">Direct inquiry</span>
              <span className="label dim">CTA Inc. · Encinitas, CA · Est. 1979</span>
            </div>

            <ContactForm />

            <div className="cdetail" data-rv>
              <div><div className="k">Headquarters</div><div className="v">Encinitas, California</div><div className="v sm">Operating locations: Colorado, New Jersey, Virginia &amp; Washington, D.C.</div></div>
              <div><div className="k">Identifiers</div><div className="v sm">DUNS #193973948<br />NAICS 332999 · 541511 · 518210</div></div>
              <div><div className="k">Contract &amp; Compliance</div><div className="v sm">GSA MAS · GS-35F-320DA<br />ISO 9001:2015 · CMMC Certified Professional</div></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
