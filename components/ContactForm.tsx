"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    setStatus("submitting");
    setError("");
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="cform" id="contactForm" onSubmit={onSubmit} noValidate>
      <div className="cfield">
        <label htmlFor="fn"><span className="fi">01</span>Name</label>
        <input id="fn" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="cfield">
        <label htmlFor="org"><span className="fi">02</span>Organization / agency</label>
        <input id="org" name="org" type="text" autoComplete="organization" />
      </div>
      <div className="cfield">
        <label htmlFor="em"><span className="fi">03</span>Email</label>
        <input id="em" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="cfield">
        <label htmlFor="dom"><span className="fi">04</span>Domain</label>
        <input id="dom" name="domain" type="text" placeholder="Defense · Intelligence · Healthcare" />
      </div>
      <div className="cfield full">
        <label htmlFor="msg"><span className="fi">05</span>Define the problem</label>
        <textarea id="msg" name="message" placeholder="One clear objective is a good place to start."></textarea>
      </div>

      {/* honeypot: hidden from users, catches bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="formfoot">
        <button className="btn" type="submit" disabled={status === "submitting"}>
          <span>{status === "submitting" ? "Sending" : "Submit"}</span> <span className="arw">→</span>
        </button>
        <span className="label dim">Routed to the engineering team</span>
      </div>

      {status === "error" && (
        <div className="formerr" role="alert">{error}</div>
      )}
      <div className="formok" id="formOk" hidden={status !== "ok"}>
        Message received. A member of the CTA team will be in touch shortly.
      </div>
    </form>
  );
}
