export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        <div className="hero-bg" aria-hidden="true">
          <video
            id="herovid"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/img/night-ops.jpg"
          >
            <source src="/assets/video/hero-launch.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrap inner">
          <div className="topline topline-solo">
            <div className="hero-tag r" data-rv>
              <span className="t1">Systems Engineering · Applied AI · Manufacturing</span>
              <span className="t2">Defense · Intelligence · Healthcare</span>
            </div>
          </div>
          <h1 className="disp" id="heroH1">
            <span className="ln"><span className="in"><span className="cmark">©</span> Solving the</span></span>
            <span className="ln"><span className="in">nation&apos;s hardest</span></span>
            <span className="ln"><span className="in">problems</span></span>
          </h1>
          <div className="cluster" data-rv>
            <span className="label fg">Engineered<br />since 1979</span>
            <span className="label dim">ISO 9001:2015 · CMMC · DUNS 193973948</span>
            <span className="sp">
              <span className="scrolltick" aria-hidden="true">+ +</span>
              <span className="label dim">Scroll</span>
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="statement wrap egrid" data-frame>
          <div className="rail">
            <div className="label dim" data-rv>00</div>
            <div className="label dim" data-rv>Mandate</div>
          </div>
          <div className="body">
            <p className="disp" data-split>Since 1979, CTA has engineered the systems that cannot fail.</p>
            <p className="sub" data-rv>One firm, three domains: defense, intelligence, and healthcare. Systems engineering, applied AI, and advanced manufacturing for the agencies and enterprises that cannot afford to be wrong.</p>
            <div className="spec" data-rv>
              <div className="r"><span className="k">Domains</span><span className="v">Defense · Intelligence · Healthcare</span></div>
              <div className="r"><span className="k">Disciplines</span><span className="v">Systems Engineering · Applied AI · Advanced Manufacturing</span></div>
              <div className="r"><span className="k">Established</span><span className="v">1979 · NASA Viking Mars Program</span></div>
              <div className="r"><span className="k">Standards</span><span className="v">ISO 9001:2015 · CMMC · DUNS 193973948</span></div>
            </div>
          </div>
        </section>

        <section id="cap">
          <article className="cap2" data-frame>
            <div className="bg"><img src="/assets/img/icu-monitor.jpg" alt="Critical-care vital-sign monitoring" /></div>
            <div className="wrap inner egrid">
              <div className="rail">
                <div className="cixn disp" data-rv>01</div>
                <div className="label dim" data-rv>Artificial Intelligence</div>
                <div className="label dim" data-rv>Defense &amp; Healthcare</div>
              </div>
              <div className="body">
                <h2 className="disp" data-split>AI for healthcare and defense</h2>
                <p data-rv>Expert systems for DoD and NASA. An ontological approach to IARPA&apos;s &quot;Insider Threat&quot; problem. Advanced analytics for classified surveillance and targeting, paired with the VFusion™ semantic engine for critical-care and national-security decision support.</p>
                <a className="go" href="/capabilities#ai">View capabilities <span className="arw">→</span></a>
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
          <article className="cap2" data-frame>
            <div className="bg"><img src="/assets/img/pods-bay.jpg" alt="DLQ-9 electronic-warfare pods in CTA's facility" /></div>
            <div className="wrap inner egrid">
              <div className="rail">
                <div className="cixn disp" data-rv>02</div>
                <div className="label dim" data-rv>Hardware</div>
                <div className="label dim" data-rv>DoD Manufacturing</div>
              </div>
              <div className="body">
                <h2 className="disp" data-split>DoD manufacturing</h2>
                <p data-rv>ISO 9001:2015-certified fabrication since 1995. Electronic Warfare pod and pod-system variants, each thousands of parts and hundreds of interconnections, integrated into U.S. Navy manned and unmanned aircraft.</p>
                <a className="go" href="/capabilities#mfg">View capabilities <span className="arw">→</span></a>
              </div>
              <div className="dat">
                <div className="spec" data-rv>
                  <div className="r"><span className="k">Since</span><span className="v">1995</span></div>
                  <div className="r"><span className="k">Certified</span><span className="v">ISO 9001:2015</span></div>
                  <div className="r"><span className="k">Delivered</span><span className="v">600+ EW Pod &amp; System Variants</span></div>
                  <div className="r"><span className="k">Platform</span><span className="v">U.S. Navy · EA-18G Growler</span></div>
                </div>
              </div>
            </div>
          </article>
          <article className="cap2" data-frame>
            <div className="bg"><img src="/assets/img/datacenter.jpg" alt="Enterprise data center" /></div>
            <div className="wrap inner egrid">
              <div className="rail">
                <div className="cixn disp" data-rv>03</div>
                <div className="label dim" data-rv>Data</div>
                <div className="label dim" data-rv>Business Intelligence</div>
              </div>
              <div className="body">
                <h2 className="disp" data-split>Enterprise data applications</h2>
                <p data-rv>Information is the one indispensable asset. We cultivate, purpose, and craft raw data into reliable, actionable insight, from requirements and strategy through engineering, rollout, and ongoing optimization.</p>
                <a className="go" href="/capabilities#data">View capabilities <span className="arw">→</span></a>
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
          <article className="cap2" data-frame>
            <div className="bg"><img src="/assets/img/soc.jpg" alt="Security operations center" /></div>
            <div className="wrap inner egrid">
              <div className="rail">
                <div className="cixn disp" data-rv>04</div>
                <div className="label dim" data-rv>Security</div>
                <div className="label dim" data-rv>Cyber Defense</div>
              </div>
              <div className="body">
                <h2 className="disp" data-split>Cybersecurity</h2>
                <p data-rv>Over 25 years in the cyber realm: ethical hacking, threat hunting, vulnerability management, and CMMC readiness, assessed by our Certified Professional across all five levels of compliance.</p>
                <a className="go" href="/capabilities#cyber">View capabilities <span className="arw">→</span></a>
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
        </section>

        <section className="vf" id="vf">
          <div className="vf-lead wrap">
            <div className="label fg" data-rv>Flagship platform / VFusion™ Semantic Enrichment Engine</div>
            <h2 className="disp" data-split>VFusion™</h2>
            <p className="body" data-rv>A domain-agnostic AI engine that lets subject-matter experts encode expertise as computable rules, then pairs it with machine learning and NLP to enrich raw data streams, surface rule-based conclusions, and predict outcomes. In active development for <strong>early warning of sepsis</strong> in critical care, and trialed with a wearable monitor to detect asymptomatic infection.</p>
          </div>

          <div className="vf-seq" id="vfSeq">
            <div className="vf-media" aria-hidden="true">
              <div className="vf-frame" data-f="0"><img src="/assets/img/icu-monitor.jpg" alt="" /></div>
              <div className="vf-frame" data-f="1"><img src="/assets/img/soc.jpg" alt="" /></div>
              <div className="vf-frame" data-f="2"><img src="/assets/img/datacenter.jpg" alt="" /></div>
            </div>
            <div className="vf-scrim" aria-hidden="true"></div>
            <div className="vf-overlay">
              <div className="wrap vf-top">
                <span className="label fg">The pipeline</span>
                <span className="label dim vf-counter"><span id="vfNum">01</span> / 03</span>
              </div>
              <div className="wrap vf-mid">
                <div className="vf-stages">
                  <article className="vf-stage" data-s="0">
                    <div className="vf-ix label dim">Stage 01</div>
                    <h3 className="vf-title disp">Ingest</h3>
                    <p className="vf-desc">Raw streams in. Vital signs, labs, sensor and signal feeds, continuous and unstructured.</p>
                    <div className="spec vf-spec">
                      <div className="r"><span className="k">Input</span><span className="v">Vitals · Labs · Signals</span></div>
                      <div className="r"><span className="k">Mode</span><span className="v">Continuous · Real-time</span></div>
                    </div>
                  </article>
                  <article className="vf-stage" data-s="1">
                    <div className="vf-ix label dim">Stage 02</div>
                    <h3 className="vf-title disp">Enrich</h3>
                    <p className="vf-desc">Expert knowledge, encoded as computable rules, fused with machine learning and NLP against every stream.</p>
                    <div className="spec vf-spec">
                      <div className="r"><span className="k">Method</span><span className="v">Expert Rules · ML · NLP</span></div>
                      <div className="r"><span className="k">Basis</span><span className="v">Encoded Domain Expertise</span></div>
                    </div>
                  </article>
                  <article className="vf-stage" data-s="2">
                    <div className="vf-ix label dim">Stage 03</div>
                    <h3 className="vf-title disp">Predict</h3>
                    <p className="vf-desc">Rule-based conclusions and early warning. In critical-care studies, sepsis surfaced hours sooner.</p>
                    <div className="spec vf-spec">
                      <div className="r"><span className="k">Output</span><span className="v">Conclusions · Early Warning</span></div>
                      <div className="r"><span className="k">Proven</span><span className="v">Sepsis · Asymptomatic Infection</span></div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="wrap vf-botrow"><div className="vf-rail" aria-hidden="true"><span id="vfFill"></span></div></div>
            </div>
          </div>

          <div className="vf-stats wrap">
            <div className="st" data-rv><div className="n disp" data-count="1979" data-suffix="">1979</div><div className="l label dim">Founded on NASA Viking Mars automation technology</div></div>
            <div className="st" data-rv><div className="n disp" data-count="600" data-suffix="+">0</div><div className="l label dim">EW pod &amp; system variants fabricated and delivered</div></div>
            <div className="st" data-rv><div className="n disp" data-count="6" data-prefix="" data-suffix=" hrs">0</div><div className="l label dim">Earlier sepsis detection in early hospital studies</div></div>
          </div>
        </section>

        <section className="work wrap" id="work">
          <div className="hd">
            <div>
              <div className="label dim" data-rv>Selected work / Project examples</div>
              <h2 className="disp" data-split>A proven record of delivery</h2>
            </div>
            <a className="label fg" href="/projects">All projects →</a>
          </div>
          <a className="wrow" href="#" data-rv><span className="ix">_01</span><span className="cl disp">Advanced Weapons Lab</span><span className="ds">Web-based suite for project planning, estimating, execution, and real-time risk reporting.</span><span className="mt">Multi-year / Multi-million</span></a>
          <a className="wrow" href="#" data-rv><span className="ix">_02</span><span className="cl disp">Corporate Properties Group</span><span className="ds">Nation-wide intranet and data warehouse for international-banking property management.</span><span className="mt">$1B+ in assets</span></a>
          <a className="wrow" href="#" data-rv><span className="ix">_03</span><span className="cl disp">General Services Administration</span><span className="ds">Consolidated security-scan findings database with remediation-workflow management.</span><span className="mt">GSA / Federal</span></a>
        </section>

        <section className="her wrap" id="her">
          <div className="label dim" data-rv>Since 1979 / A proud tradition of success</div>
          <h2 className="disp" data-split>Formed by the engineers behind NASA&apos;s Viking Mars missions</h2>
          <a className="go" href="/about#heritage" data-rv>Our origins <span className="arw">→</span></a>
        </section>

        <section className="close" id="close">
          <div className="bg"><img src="/assets/img/growler-launch.jpg" alt="EA-18G Growler launching from a carrier flight deck" /></div>
          <div className="wrap inner">
            <div className="label fg" data-rv>Start a conversation</div>
            <h2 className="disp" data-split>Not every problem fits in a box.</h2>
            <a className="btn" href="/contact"><span>Schedule a consultation</span> <span className="arw">→</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
