import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects · CTA Inc.",
  description:
    "A proven record of delivery: web-based enterprise systems for defense, federal, and commercial programs measured in years and billions. GSA MAS GS-35F-320DA.",
};

export default function Projects() {
  return (
    <>
      <header className="phead" id="top">
        <div className="bg"><img src="/assets/img/pods-bay.jpg" alt="Electronic-warfare pods in CTA's facility" /></div>
        <div className="wrap inner">
          <div className="topline">
            <span className="label fg" data-rv>Project Examples</span>
            <span className="label dim r" data-rv>Past Performance<br />Government · Commercial</span>
          </div>
          <h1 className="disp" data-split>A proven record of delivery</h1>
          <p className="lead" data-rv>Web-based enterprise systems that plan, execute, and report on programs measured in years and billions, delivered for defense, federal, and commercial clients.</p>
        </div>
      </header>

      <main>
        <section className="psec wrap" data-frame>
          <div className="contract" data-rv>
            <div><span className="k">GSA Vehicle</span> <span className="v">Multiple Award Schedule · GS-35F-320DA</span></div>
            <div><span className="k">Special Item Numbers</span> <span className="v">54151S · 54151HEAL</span></div>
            <div><span className="k">Clients Served Since 1979</span> <span className="v">700+ Government &amp; Commercial</span></div>
          </div>
        </section>

        <article className="cap2 deep" id="awl" data-frame>
          <div className="bg"><img src="/assets/img/growler-pods.jpg" alt="EA-18G Growler on the flightline" /></div>
          <div className="wrap inner egrid">
            <div className="rail">
              <div className="cixn disp" data-rv>01</div>
              <div className="label dim" data-rv>Defense</div>
              <div className="label dim" data-rv>Advanced Weapons Lab</div>
            </div>
            <div className="body">
              <h2 className="disp" data-split>Advanced Weapons Lab</h2>
              <p data-rv>A multi-year, multi-million-dollar online tools effort: a web-based, integrated application suite to perform project planning and estimating, manage execution and risk, and provide real-time reporting across a defense weapons program.</p>
              <a className="go" href="/contact">Discuss a similar program <span className="arw">→</span></a>
            </div>
            <div className="dat">
              <div className="spec" data-rv>
                <div className="r"><span className="k">Domain</span><span className="v">Defense Weapons Program</span></div>
                <div className="r"><span className="k">Scope</span><span className="v">Planning · Estimating · Execution · Risk</span></div>
                <div className="r"><span className="k">Reporting</span><span className="v">Real-Time</span></div>
                <div className="r"><span className="k">Scale</span><span className="v">Multi-Year · Multi-Million</span></div>
              </div>
            </div>
          </div>
        </article>

        <article className="cap2 deep" id="cpg" data-frame>
          <div className="bg"><img src="/assets/img/datacenter.jpg" alt="Enterprise data center" /></div>
          <div className="wrap inner egrid">
            <div className="rail">
              <div className="cixn disp" data-rv>02</div>
              <div className="label dim" data-rv>Commercial</div>
              <div className="label dim" data-rv>Corporate Properties Group</div>
            </div>
            <div className="body">
              <h2 className="disp" data-split>Corporate Properties Group</h2>
              <p data-rv>A six-year, multi-million-dollar intranet and data-warehouse effort: a nation-wide, web-based enterprise application suite to perform, manage, and report property-management functions for an organization overseeing more than <strong>$1 billion</strong> in property assets.</p>
              <a className="go" href="/contact">Discuss a similar program <span className="arw">→</span></a>
            </div>
            <div className="dat">
              <div className="spec" data-rv>
                <div className="r"><span className="k">Sector</span><span className="v">International Banking</span></div>
                <div className="r"><span className="k">Duration</span><span className="v">6 Years</span></div>
                <div className="r"><span className="k">Assets</span><span className="v">$1B+ Under Management</span></div>
                <div className="r"><span className="k">Delivery</span><span className="v">Nationwide Intranet · Data Warehouse</span></div>
              </div>
            </div>
          </div>
        </article>

        <article className="cap2 deep" id="gsa" data-frame>
          <div className="bg"><img src="/assets/img/soc.jpg" alt="Security operations center" /></div>
          <div className="wrap inner egrid">
            <div className="rail">
              <div className="cixn disp" data-rv>03</div>
              <div className="label dim" data-rv>Federal</div>
              <div className="label dim" data-rv>General Services Administration</div>
            </div>
            <div className="body">
              <h2 className="disp" data-split>General Services Administration</h2>
              <p data-rv>Data engineering and application development for the GSA: a custom web-based application and data platform to collect and standardize system security-scan findings, and to track and manage remediation activities across the enterprise.</p>
              <a className="go" href="/contact">Discuss a similar program <span className="arw">→</span></a>
            </div>
            <div className="dat">
              <div className="spec" data-rv>
                <div className="r"><span className="k">Agency</span><span className="v">U.S. General Services Administration</span></div>
                <div className="r"><span className="k">Vehicle</span><span className="v">GS-35F-320DA</span></div>
                <div className="r"><span className="k">Scope</span><span className="v">Security-Scan Findings · Remediation Workflow</span></div>
                <div className="r"><span className="k">Practice</span><span className="v">Data Engineering · App Development</span></div>
              </div>
            </div>
          </div>
        </article>

        <section className="close" id="close">
          <div className="bg"><img src="/assets/img/night-ops.jpg" alt="Night flight operations on a carrier deck" /></div>
          <div className="wrap inner">
            <div className="label fg" data-rv>Start a conversation</div>
            <h2 className="disp" data-split>Your operation runs on insight.</h2>
            <a className="btn" href="/contact"><span>Schedule a consultation</span> <span className="arw">→</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
