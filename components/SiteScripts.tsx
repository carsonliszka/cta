import Script from "next/script";

// vendored motion libs load before interactive; app.js runs after the DOM is ready.
// order matters: gsap -> ScrollTrigger -> lenis -> app.js
export default function SiteScripts({ ver }: { ver: string | number }) {
  const q = `?v=${ver}`;
  return (
    <>
      <Script src={`/assets/js/gsap.min.js${q}`} strategy="beforeInteractive" />
      <Script src={`/assets/js/ScrollTrigger.min.js${q}`} strategy="beforeInteractive" />
      <Script src={`/assets/js/lenis.min.js${q}`} strategy="beforeInteractive" />
      <Script src={`/assets/js/app.js${q}`} strategy="afterInteractive" />
    </>
  );
}
