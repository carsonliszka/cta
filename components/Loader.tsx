export default function Loader() {
  return (
    <div className="loader" id="loader">
      <div className="loader-top">
        <span className="label fg">© CTA Inc.</span>
        <span className="label dim">Est. 1979 · NASA Viking Mars</span>
      </div>
      <div>
        <div className="loader-mid">
          <span className="loader-mk" aria-hidden="true">
            <svg viewBox="0 0 60 52">
              <path d="M30 4 L56 48 L4 48 Z" fill="none" stroke="#f1f0ea" strokeWidth="2.4" />
              <path d="M30 4 L43 26 L17 26 Z" fill="#f1f0ea" />
            </svg>
          </span>
          <span className="loader-count" id="lcount">0</span>
        </div>
        <div className="loader-bar"><i id="lbar"></i></div>
        <div className="loader-status label dim">
          <span id="lstatus"></span>
          <span>Mission-critical systems engineering</span>
        </div>
      </div>
    </div>
  );
}
