import React, { useState } from "react";
import DozWordmark from "../components/DozWordmark.jsx";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() ?? "");
}

function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNotify() {
    if (isValidEmail(email)) {
      setSubmitted(true);
    }
  }

  return (
    <main className="pt-10 pb-20">
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
          App Preview
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          The{" "}
          <DozWordmark className="text-3xl md:text-4xl font-semibold text-doz-blue" />{" "}
          app is coming soon.
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          We&apos;re onboarding our first clinics and families. Leave your email with
          the team and we&apos;ll let you know the moment pre-sorted pouches are live
          in your city.
        </p>

        {submitted ? (
          <p className="mt-4 text-base md:text-lg font-medium text-doz-blue">
            Thank you for your interest.
          </p>
        ) : (
          <div className="mt-4 inline-flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-64 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-doz-blue/40"
            />
            <button
              onClick={handleNotify}
              className="px-5 py-2 rounded-full bg-doz-blue text-white text-sm font-medium shadow-md shadow-doz-blue/30 hover:bg-doz-teal hover:shadow-doz-teal/30 transition-colors transition-shadow"
            >
              Notify me
            </button>
          </div>
        )}

        <p className="text-xs text-slate-500">
          Or email{" "}
          <a
            href="mailto:doz3labs@gmail.com"
            className="font-medium text-doz-blue underline underline-offset-2"
          >
            help@dozelabs.com
          </a>{" "}
          to join the early access list.
        </p>
      </section>
    </main>
  );
}

export default ComingSoonPage;

