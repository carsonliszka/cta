import type { Metadata } from "next";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://cta-gules.vercel.app";

const DESCRIPTION =
  "CTA Inc. Formed in 1979 by the engineers behind NASA's Viking Mars missions. Mission-critical systems engineering, applied AI, and DoD manufacturing for defense, intelligence, and healthcare.";

const TITLE = "CTA · Mission-critical systems engineering";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "CTA Inc.",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "CTA. Mission-critical systems engineering." },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // cache-bust the static css/js: fresh every request in dev, per-deploy in prod.
  const ver =
    process.env.NODE_ENV === "development"
      ? Date.now()
      : (process.env.VERCEL_GIT_COMMIT_SHA || "1").slice(0, 8);
  return (
    <html lang="en">
      <body>
        {/* critical css: applies before site.css to prevent a flash of the
            (hidden) loader chrome on first paint */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html,body{background:#010101;margin:0}.loader{position:fixed;inset:0;z-index:900;background:#010101}.loader-top,.loader-mid,.loader-bar,.loader-status,.loader-count{display:none}.cursor{opacity:0}",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href={`/assets/css/site.css?v=${ver}`} precedence="high" />
        <div className="cursor" aria-hidden="true"></div>
        <div className="pixel-grid" id="pixelgrid" aria-hidden="true"></div>
        <Loader />
        <Nav />
        <div className="page">{children}</div>
        <Footer />
        <SiteScripts ver={ver} />
      </body>
    </html>
  );
}
