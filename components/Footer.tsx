export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="sf-inner">
        <div className="sf-c sf-c1">
          <div className="sf-mark" aria-hidden="true">
            <svg viewBox="0 0 60 52">
              <path d="M30 4 L56 48 L4 48 Z" fill="none" strokeWidth="2.6" />
              <path d="M30 4 L43 26 L17 26 Z" fill="#f1f0ea" />
            </svg>
          </div>

          <div className="sf-sec sf-join">
            <div className="sf-hd">Join our mission</div>
            <p className="sf-jointxt">
              We are always looking to meet top talent. If you can engineer the systems
              others rely on, we want to hear from you.
            </p>
            <a className="btn" href="/about#careers">
              <span>View careers</span> <span className="arw">→</span>
            </a>
          </div>

          <div className="sf-sec sf-place">
            <div className="sf-built">Rockville, Maryland</div>
            <div className="sf-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/accessibility">Accessibility</a>
            </div>
            <div className="sf-copy">© 2026 CTA Inc. · Est. 1979</div>
          </div>
        </div>

        <div className="sf-c sf-c2">
          <div className="sf-hd">Capabilities</div>
          <div className="sf-nav">
            <a href="/capabilities#ai">AI &amp; Defense</a>
            <a href="/capabilities#mfg">Manufacturing</a>
            <a href="/capabilities#data">Enterprise Data</a>
            <a href="/capabilities#cyber">Cybersecurity</a>
            <a href="/capabilities#vf">VFusion</a>
          </div>
        </div>

        <div className="sf-c sf-c3">
          <div className="sf-hd">Company</div>
          <div className="sf-nav">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/about#careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="sf-connect">
            <div className="sf-hd">Connect</div>
            <div className="sf-social">
              <a href="https://www.linkedin.com/company/cta-inc" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="sf-strip">
        <span>DUNS #193973948</span>
        <span>NAICS 332999 / 541511 / 518210</span>
        <span>GSA GS-35F-320DA</span>
        <span>ISO 9001:2015</span>
        <span>CMMC Certified Professional</span>
      </div>
    </footer>
  );
}
