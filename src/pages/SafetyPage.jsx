import React from "react";
import DozWordmark from "../components/DozWordmark.jsx";

function SafetyPage() {
  return (
    <main className="pt-6">
      <section className="max-w-5xl mx-auto px-6 space-y-4 pb-10">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
          Safety &amp; Quality
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Your health. Verified.
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-3 pb-20 text-sm md:text-base text-slate-700 leading-relaxed">
        <article className="space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            Data privacy
          </h2>
          <p>
            We treat your medical history like production code. encrypted, audited,
            and access controlled. Data is visible only to you and the doctors
            you explicitly connect.
          </p>
          <p className="text-xs text-slate-500">
            {/* TODO: Update this copy with the exact frameworks you comply with. */}
            We are designing{" "}
            <span className="font-bold">towards HIPAA & DISHA grade safeguards</span>{" "}
            from day one.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            Pill quality &amp; photo proof
          </h2>
          <p>
            Every pouch packed through{" "}
            <DozWordmark className="text-xs font-semibold text-doz-blue align-baseline" />{" "}
            passes through two layers of verification, human pharmacy checks and an
            AI vision system.
          </p>
          <p>
            We photograph each pouch before it leaves our hub. The system flags
            missing tablets, colour or shape anomalies, and dose mismatches before
            anything reaches a patient&apos;s home.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            Sourcing &amp; chain of custody
          </h2>
          <p>
            We source directly from licensed manufacturers and verified distributors.
            No grey market substitutions, no mystery brands.
          </p>
          <p>
            From inventory intake to last mile dispatch, every strip and pouch has
            a recorded trail so you always know where your medicine came from and
            how it moved.
          </p>
        </article>
      </section>
    </main>
  );
}

export default SafetyPage;

