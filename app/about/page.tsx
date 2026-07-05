import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · CTA Inc.",
  description:
    "CTA was formed in 1979 by the engineers who built the automation technology for NASA's Viking Mars missions. A systems-engineering firm for defense, intelligence, and healthcare.",
};

// heritage ruler: milestones anchor to the text columns (0 / 25 / 50 / 100),
// and per-year tick density carries the true time scale within each era.
const TL_START = 1979;
const TL_END = 2026;
const TL_MAJORS = [1979, 1985, 1995, 2026] as const;
const TL_SEGS = [
  [1979, 1985, 0, 25],
  [1985, 1995, 25, 50],
  [1995, 2026, 50, 100],
] as const;
const TL_YEARS = Array.from({ length: TL_END - TL_START + 1 }, (_, i) => TL_START + i);
const tlPos = (y: number) => {
  for (const [y0, y1, p0, p1] of TL_SEGS) {
    if (y <= y1) return p0 + ((y - y0) / (y1 - y0)) * (p1 - p0);
  }
  return 100;
};
const TL_EVENTS = [
  { year: "1979", pos: tlPos(1979), title: "NASA Viking Mars", desc: "Founded by the team that built the automation technology for NASA's Viking Mars program." },
  { year: "1985", pos: tlPos(1985), title: "Hardware capability", desc: "Special-purpose hardware design, fabrication, and test established for mission-critical operations." },
  { year: "1995", pos: tlPos(1995), title: "EW manufacturing", desc: "Begins manufacturing Electronic Warfare systems integrated onto U.S. Navy aircraft." },
  { year: "Today", pos: tlPos(2026), title: "AI / VFusion", desc: "Applied AI and semantic enrichment for defense, intelligence, and healthcare decision support." },
] as const;

export default function About() {
  return (
    <>
      <header className="phead" id="top">
        <div className="bg"><img src="/assets/img/viking-cleanroom.jpg" alt="NASA Viking spacecraft in the clean room before its 1975 launch" /></div>
        <div className="wrap inner">
          <div className="topline">
            <span className="label fg" data-rv>About CTA</span>
            <span className="label dim r" data-rv>A Proud Tradition of Success<br />Since 1979</span>
          </div>
          <h1 className="disp" data-split>Formed by the engineers behind NASA&apos;s Viking Mars missions</h1>
          <p className="lead" data-rv>The automation technology that ran on Mars in 1976 was built by the team that founded CTA. That lineage, autonomy where failure is not an option, still defines how we engineer.</p>
        </div>
      </header>

      <main>
        <section className="psec wrap egrid" data-frame>
          <div className="rail">
            <div className="label dim" data-rv>00</div>
            <div className="label dim" data-rv>Origin</div>
          </div>
          <div className="body">
            <p className="lead2" data-split>CTA was formed in 1979 by a team of engineers who developed the automation technology used in NASA&apos;s Viking Mars missions.</p>
            <p className="body" data-rv>Today CTA is an established information-technology and systems-engineering firm with a storied record of top-tier systems services and advanced-technology solutions for government and commercial clients in support of mission-critical operations. We apply that expertise to a broad range of complex data objectives, and we still measure ourselves against the standard the Viking program set.</p>
          </div>
        </section>

        <section className="her wrap" id="heritage" data-frame>
          <div className="label dim" data-rv>Origins / 1979 → Today</div>
          <h2 className="disp" data-split>A lineage of systems that cannot fail</h2>
          <div className="tlx" data-tl data-tl-segs={JSON.stringify(TL_SEGS)}>
            <div className="tl-ruler" aria-hidden="true">
              <div className="tl-era">
                <i style={{ left: "12.5%", width: "25%" }} />
                <i style={{ left: "37.5%", width: "25%" }} />
                <i style={{ left: "75%", width: "50%" }} />
              </div>
              {TL_YEARS.map((y) => (
                <span
                  key={y}
                  className={TL_MAJORS.includes(y as (typeof TL_MAJORS)[number]) ? "tk mj" : y % 5 === 0 ? "tk md" : "tk"}
                  style={{ left: `${tlPos(y)}%` }}
                  data-y={y}
                />
              ))}
              {TL_MAJORS.map((y) => (
                <span key={`n${y}`} className="nd mid" style={{ left: `${tlPos(y)}%` }} data-y={y} />
              ))}
              {TL_MAJORS.map((y) => (
                <span key={`l${y}`} className={`ym mid${y === 2026 ? " end" : ""}`} style={{ left: `${tlPos(y)}%` }}>
                  {y === 2026 ? "Today" : y}
                </span>
              ))}
              <i className="tl-base" />
              <i className="tl-fill" />
              <div className="tl-ph"><span className="tl-ro">1979</span></div>
            </div>
            {/* vertical drops from each milestone node into its text column */}
            <div className="tl-gap" aria-hidden="true">
              <i className="dp mid" style={{ left: "0%" }} />
              <i className="dp mid" style={{ left: "25%" }} />
              <i className="dp mid" style={{ left: "50%" }} />
              <i className="dp mid" style={{ left: "100%" }} />
            </div>
            <div className="tl">
              {TL_EVENTS.map((ev) => (
                <div
                  key={ev.year}
                  className="ev"
                  data-rv
                  style={{ left: `${ev.pos}%` }}
                >
                  <div className="yr disp" data-year={ev.year}>{ev.year}</div>
                  <div className="ti">{ev.title}</div>
                  <div className="ds">{ev.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="psec wrap egrid post-tl" data-frame>
          <div className="rail">
            <div className="label dim" data-rv>01</div>
            <div className="label dim" data-rv>Doctrine</div>
          </div>
          <div className="body">
            <div className="spec" data-rv>
              <div className="r"><span className="k">Mission</span><span className="v">Help our customers overcome high-priority challenges and achieve mission-critical goals.</span></div>
              <div className="r"><span className="k">Vision</span><span className="v">Be the global leader in applying business intelligence, data science / AI, and reliability engineering to deliver exceptional results.</span></div>
              <div className="r"><span className="k">Values</span><span className="v">Driven by integrity and curiosity.</span></div>
            </div>
          </div>
        </section>

        <section className="man wrap" data-frame>
          <div className="lead disp" data-split>We don&apos;t just write code.</div>
          <div className="lines">
            <div className="ln2" data-rv><span className="ix">01</span>We push envelopes.</div>
            <div className="ln2" data-rv><span className="ix">02</span>We engineer systems.</div>
            <div className="ln2" data-rv><span className="ix">03</span>We become a part of your team.</div>
            <div className="ln2" data-rv><span className="ix">04</span>We learn voraciously.</div>
          </div>
        </section>

        <section className="careers" id="careers" data-frame>
          <div className="bg"><img src="/assets/img/viking-cleanroom.jpg" alt="CTA engineers at work in a cleanroom" /></div>
          <div className="wrap inner">
            <div className="topline">
              <span className="label fg" data-rv>02 / Careers</span>
              <span className="label dim r" data-rv>Always meeting top talent</span>
            </div>
            <h2 className="disp" data-split>Our team is driven by integrity and curiosity.</h2>
            <p className="lead" data-rv>CTA is not currently hiring for a specific position, but we are always looking to meet top talent. If you have what it takes to engineer the systems others rely on, send us your résumé and we will keep it on file.</p>
            <a className="btn" href="/contact"><span>Submit your résumé</span> <span className="arw">→</span></a>
          </div>
        </section>

        <section className="close" id="close">
          <div className="bg"><img src="/assets/img/mars-viking.jpg" alt="The planet Mars imaged by the Viking orbiter" /></div>
          <div className="wrap inner">
            <div className="label fg" data-rv>Start a conversation</div>
            <h2 className="disp" data-split>Engineer the impossible with us.</h2>
            <a className="btn" href="/contact"><span>Schedule a consultation</span> <span className="arw">→</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
