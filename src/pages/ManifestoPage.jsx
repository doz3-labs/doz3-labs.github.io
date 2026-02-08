import React from "react";
import DozWordmark from "../components/DozWordmark.jsx";

function ManifestoPage() {
  return (
    <main className="pt-6">
      <section className="max-w-5xl mx-auto px-6 space-y-4 pb-10">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
          Our Mission
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Why healthcare needs an ecosystem.
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-6 space-y-8 pb-16 text-slate-700 text-sm md:text-base leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            The problem
          </h2>
          <p>
            In India, 50% of patients stop taking their medications after month two.
            Doctors lose track of what actually gets taken at home. Pharmacies see
            a prescription as a transaction, not a longitudinal story. Families are
            left guessing whether mum or dad took the right pill at the right time.
          </p>
          <p>
            The result is a broken loop, the moment a patient leaves the clinic or
            hospital, everyone else is flying blind.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            Our belief
          </h2>
          <p>
            We believe health is not a one off transaction. It&apos;s a loop,
            Doctor → Patient → Pill → Feedback → Doctor again. When that loop is
            unstructured, adherence drops, complications rise, and families carry
            an invisible cognitive load.
          </p>
          <p>
            <DozWordmark className="text-xs font-semibold text-doz-blue align-baseline" />{" "}
            exists to turn that loop into an operating system. Structured doses,
            predictable refills, and real world signals that flow back to the
            people who care.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            The founder story
          </h2>
          <p>
            {/* TODO: Replace this with your real founder story. */}
            I built this because I watched my grandpa juggle 11+ medications a
            day with no system. Blister packs, handwritten charts, anxious late night
            calls asking &quot;Did you take your 8pm dose?&quot; The tools we give
            patients today feel like spreadsheets, not safety nets.
          </p>
          <p>
            <DozWordmark className="text-xs font-semibold text-doz-blue align-baseline" />{" "}
            is my attempt to encode what great clinicians and caregivers already do
            by hand. simplify, structure, and close the loop.
          </p>
        </div>

        <div className="space-y-3">
          {/* <h2 className="text-base md:text-lg font-semibold text-slate-900">
            The team
          </h2>
          <p>
            Real people, building for real families. Add your faces and short,
            honest bios here not stock photos.
          </p> */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {/* TODO: Replace these placeholders with real team photos and titles. */}
            {["Founder / CEO"].map((role) => (
              <div
                key={role}
                className="glass rounded-2xl p-4 flex flex-col items-start gap-3"
              >
                <img
                  src="/founder.png"
                  alt="Harsh P - Founder"
                  className="h-16 w-16 rounded-full object-cover bg-slate-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Harsh P
                  </p>
                  <p className="text-xs text-slate-600">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ManifestoPage;

