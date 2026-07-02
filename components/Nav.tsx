"use client";

import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const cur = (href: string) =>
    pathname === href ? ({ "aria-current": "page" } as const) : {};

  return (
    <nav>
      <a className="brand" href={isHome ? "#top" : "/"} aria-label="CTA home">
        <img className="brandlogo" src="/assets/brand/cta-logo-white.svg" alt="CTA" />
      </a>
      <div className="nav-c">
        <a href="/about" {...cur("/about")}>About</a>
        <a href="/capabilities" {...cur("/capabilities")}>Capabilities</a>
        <a href="/projects" {...cur("/projects")}>Projects</a>
      </div>
      <div className="nav-r">
        <a href="/contact" {...cur("/contact")}>Contact</a>
      </div>
    </nav>
  );
}
