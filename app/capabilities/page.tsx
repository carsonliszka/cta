import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities · CTA Inc.",
  description:
    "Applied AI, DoD manufacturing, enterprise data, and cybersecurity for mission-critical operations. Home of the VFusion semantic enrichment engine.",
};

export default function Capabilities() {
  return (
    <>
      <header className="phead" id="top">
        <div className="bg"><img src="/assets/img/pod-rf-assembly.jpg" alt="Internal electronic-warfare pod assembly" /></div>
        <div className="wrap inner">
          <div className="topline">
            <span className="label fg" data-rv>Our Capabilities</span>
            <span className="label dim r" data-rv>Defense · Intelligence · Healthcare<br />Est. 1979 · ISO 9001:2015 · CMMC</span>
          </div>
          <h1 className="disp" data-split>Engineered for mission-critical operations</h1>
          <p className="lead" data-rv>Applied AI, defense manufacturing, enterprise data, and cybersecurity, built for the agencies and enterprises where the cost of being wrong is measured in missions and lives.</p>
        </div>
      </header>

      <main>
        <article className="cap2 deep" id="ai" data-frame>
          <div className="bg"><img src="/assets/img/icu-monitor.jpg" alt="Critical-care vital-sign monitoring" /></div>
          <div className="wrap inner egrid">
            <div className="rail">
              <div className="cixn disp" data-rv>01</div>
              <div className="label dim" data-rv>Artificial Intelligence</div>
              <div className="label dim" data-rv>Defense &amp; Healthcare</div>
            </div>
            <div className="body">
              <h2 className="disp" data-split>AI for healthcare and defense</h2>
              <p data-rv>CTA has applied artificial intelligence to mission-critical operations for four decades, across the aerospace, intelligence, and healthcare domains. We built expert systems for DoD and NASA in support of autonomous space missions, delivered IARPA an ontological approach to the &quot;Insider Threat&quot; problem, and applied machine learning to classified surveillance and targeting.</p>
              <p data-rv>Commercial AI built purely on data-driven algorithms is inadequate for high-consequence missions. Our scientists pair the knowledge of domain experts with machine learning, natural language processing, and prediction algorithms, so the system reasons the way an expert does, not just the way the data trends.</p>
              <a className="go" href="/contact">Discuss a program <span className="arw">→</span></a>
            </div>
            <div className="dat">
              <div className="spec" data-rv>
                <div className="r"><span className="k">Focus</span><span className="v">Expert Systems · Ontologies</span></div>
                <div className="r"><span className="k">Programs</span><span className="v">DoD · NASA · IARPA Insider Threat</span></div>
                <div className="r"><span className="k">Engine</span><span className="v">VFusion Semantic Enrichment</span></div>
                <div className="r"><span className="k">Domains</span><span className="v">Critical Care · National Security</span></div>
              </div>
            </div>
          </div>
        </article>

        <section className="vf" id="vf" data-frame>
          <div className="wrap inner">
            <div className="label fg" data-rv>Flagship platform / VFusion™ Semantic Enrichment Engine</div>
            <h2 className="disp" data-split>VFusion™</h2>
            <p className="body" data-rv>A domain-agnostic AI engine with a concept-map interface that lets subject-matter experts encode their expertise directly, as <strong>knowledge graphs</strong>. VFusion converts those graphs into computable rules, then pairs them with machine learning and natural-language processing to enrich raw data streams, surface rule-based conclusions, and predict outcomes. Decision support engineered for healthcare and defense.</p>
            <div className="subgrid" data-rv>
              <div className="sub">
                <div className="n">Application 01</div>
                <h4>Sepsis early warning</h4>
                <p>Sepsis causes an estimated one in five deaths worldwide, roughly 11 million a year, and early recognition is decisive. A VFusion clinical decision-support system has reduced detection time by up to six hours in early hospital studies.</p>
              </div>
              <div className="sub">
                <div className="n">Application 02</div>
                <h4>COVID-19 trial</h4>
                <p>In an active clinical trial, VFusion pairs with a wearable vital-sign monitor to detect asymptomatic infection in otherwise healthy people, a basis for reducing transmission and managing future pandemics.</p>
              </div>
              <div className="sub">
                <div className="n">Application 03</div>
                <h4>Air Force RPA</h4>
                <p>Robotic process automation that fills forms in legacy Air Force procurement systems, cutting errors and time. Augmented with VFusion, it executes complex decision trees across systems that are too costly to replace.</p>
              </div>
            </div>
            <div className="stats">
              <div className="st" data-rv><div className="n disp" data-count="5" data-suffix="">0</div><div className="l label dim">VFusion targets sepsis, a cause of 1 in 5 deaths worldwide</div></div>
              <div className="st" data-rv><div className="n disp" data-count="11" data-suffix="M">0</div><div className="l label dim">Sepsis deaths each year that earlier detection can reduce</div></div>
              <div className="st" data-rv><div className="n disp" data-count="6" data-suffix=" hrs">0</div><div className="l label dim">Earlier sepsis detection shown in early hospital studies</div></div>
            </div>
          </div>
        </section>

        <article className="cap2 deep" id="mfg" data-frame>
          <div className="bg"><img src="/assets/img/pods-bay.jpg" alt="DLQ-9 electronic-warfare pods in CTA's facility" /></div>
          <div className="wrap inner egrid">
            <div className="rail">
              <div className="cixn disp" data-rv>02</div>
              <div className="label dim" data-rv>Hardware</div>
              <div className="label dim" data-rv>DoD Manufacturing</div>
            </div>
            <div className="body">
              <h2 className="disp" data-split>Department of Defense manufacturing</h2>
              <p data-rv>CTA&apos;s hardware design, fabrication, and test capabilities were established in 1985 for mission-critical operations. Since 1995 our procurement, manufacturing, and QA team has built Electronic Warfare systems, pods, electronic assemblies, and cable and wire-harness assemblies, integrated onto U.S. Navy manned and unmanned aircraft.</p>
              <p data-rv>We have fabricated and delivered over <strong>600 pod and pod-system variants</strong>, each with thousands of parts and hundreds of interconnections. Our ISO 9001:2015 quality system and proven &quot;Process Traveler&quot; method hold every build to a consistent, repeatable standard.</p>
              <a className="go" href="/contact">Request capability statement <span className="arw">→</span></a>
              <div className="plist" data-rv>
                <div className="pr"><span className="ix">01</span><span className="tx">Drawing verification &amp; engineering interface</span></div>
                <div className="pr"><span className="ix">02</span><span className="tx">Parts obsolescence &amp; specialized tooling</span></div>
                <div className="pr"><span className="ix">03</span><span className="tx">Purchasing, receiving &amp; Process Traveler prep</span></div>
                <div className="pr"><span className="ix">04</span><span className="tx">Kitting, fabrication, assembly &amp; inspection</span></div>
                <div className="pr"><span className="ix">05</span><span className="tx">Testing, QA &amp; engineering verification</span></div>
              </div>
            </div>
            <div className="dat">
              <div className="spec" data-rv>
                <div className="r"><span className="k">Since</span><span className="v">1995</span></div>
                <div className="r"><span className="k">Certified</span><span className="v">ISO 9001:2015</span></div>
                <div className="r"><span className="k">Delivered</span><span className="v">600+ EW Pod &amp; System Variants</span></div>
                <div className="r"><span className="k">Platform</span><span className="v">U.S. Navy · EA-18G Growler</span></div>
                <div className="r"><span className="k">Contracts</span><span className="v">Cost · Fixed-Price · T&amp;M IDIQ</span></div>
              </div>
            </div>
          </div>
        </article>

        <article className="cap2 deep" id="data" data-frame>
          <div className="bg"><img src="/assets/img/datacenter.jpg" alt="Enterprise data center" /></div>
          <div className="wrap inner egrid">
            <div className="rail">
              <div className="cixn disp" data-rv>03</div>
              <div className="label dim" data-rv>Data</div>
              <div className="label dim" data-rv>Business Intelligence</div>
            </div>
            <div className="body">
              <h2 className="disp" data-split>Enterprise data applications</h2>
              <p data-rv>Information is the one indispensable asset, but raw data is only a raw material. It has to be cultivated, purposed, crafted, and optimized before it delivers insight: reliable, purpose-matched indicators that tell you who, what, when, where, why, and how much.</p>
              <p data-rv>We support the entire lifecycle, from requirements and strategy through design, engineering, rollout, and optimization. For the U.S. Navy F/A-18 and EA-18G program, CTA built a web-based suite for financial planning, funds execution, risk, and project management, centralizing cost and management data and automating its reporting.</p>
              <a className="go" href="/projects">See the work <span className="arw">→</span></a>
            </div>
            <div className="dat">
              <div className="spec" data-rv>
                <div className="r"><span className="k">Lifecycle</span><span className="v">Requirements → Optimization</span></div>
                <div className="r"><span className="k">Practice</span><span className="v">Enterprise Business Intelligence</span></div>
                <div className="r"><span className="k">Method</span><span className="v">Cultivate · Purpose · Craft</span></div>
                <div className="r"><span className="k">Output</span><span className="v">Reliable, Actionable Insight</span></div>
              </div>
            </div>
          </div>
        </article>

        <article className="cap2 deep" id="cyber" data-frame>
          <div className="bg"><img src="/assets/img/soc.jpg" alt="Security operations center" /></div>
          <div className="wrap inner egrid">
            <div className="rail">
              <div className="cixn disp" data-rv>04</div>
              <div className="label dim" data-rv>Security</div>
              <div className="label dim" data-rv>Cyber Defense</div>
            </div>
            <div className="body">
              <h2 className="disp" data-split>Cybersecurity</h2>
              <p data-rv>CTA has more than 25 years in the cyber realm: ethical hacking, threat hunting, vulnerability management, compliance, and overall cyber hygiene. Whether you need a full posture assessment or a second opinion, we meet you where your defenses are.</p>
              <p data-rv>The Cybersecurity Maturity Model Certification (CMMC) now requires every DoD contractor to prove a defined level of security across <strong>five levels of compliance</strong>. Our CMMC Certified Professional assesses what level you need and whether you are ready for it.</p>
              <a className="go" href="/contact">Assess your posture <span className="arw">→</span></a>
            </div>
            <div className="dat">
              <div className="spec" data-rv>
                <div className="r"><span className="k">Experience</span><span className="v">25+ Years</span></div>
                <div className="r"><span className="k">Services</span><span className="v">Ethical Hacking · Threat Hunting · Vuln Mgmt</span></div>
                <div className="r"><span className="k">Framework</span><span className="v">CMMC · All Five Levels</span></div>
                <div className="r"><span className="k">Assessor</span><span className="v">CMMC Certified Professional</span></div>
              </div>
            </div>
          </div>
        </article>

        <section className="close" id="close">
          <div className="bg"><img src="/assets/img/growler-maint.jpg" alt="Avionics maintenance on an EA-18G Growler" /></div>
          <div className="wrap inner">
            <div className="label fg" data-rv>Start a conversation</div>
            <h2 className="disp" data-split>Bring us the problem that doesn&apos;t fit.</h2>
            <a className="btn" href="/contact"><span>Schedule a consultation</span> <span className="arw">→</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
