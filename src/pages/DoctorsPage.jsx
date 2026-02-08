import React from "react";
import { Shield, ClipboardCheck, Activity } from "lucide-react";
import DozWordmark from "../components/DozWordmark.jsx";
import CollageBanner from "../components/CollageBanner.jsx";

function DoctorsPage() {
  const items = [
    {
      title: "AI Safety Checks",
      description: "Automated interaction checks before every prescription is dispensed.",
      Icon: Shield,
    },
    {
      title: "Structured Prescriptions",
      description: "Convert free text orders into structured, time stamped dosage pouches.",
      Icon: ClipboardCheck,
    },
    {
      title: "Continuous Outcomes Loop",
      description: "Status signals from patients and caregivers fed back into your workflow.",
      Icon: Activity,
    },
  ];

  return (
    <main className="pt-6">
      <section className="max-w-5xl mx-auto px-6 space-y-4 pb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          <DozWordmark className="text-3xl md:text-4xl font-semibold text-doz-blue" />{" "}
          for Doctors
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Reduce cognitive load while increasing patient safety.{" "}
          <DozWordmark className="text-xs font-semibold text-doz-blue align-baseline" />{" "}
          turns your prescriptions into pre-sorted, time-based pouches that patients can&apos;t
          get wrong.
        </p>
      </section>

      {/* Collage section (placed before the feature cards) */}
      <CollageBanner
        alt="Doctors app collage"
        imageUrl="https://placehold.co/1600x900?text=Doctors+Figma+Collage"
      />

      <section className="max-w-5xl mx-auto px-6 pb-20 grid gap-6 md:grid-cols-3">
        {items.map(({ title, description, Icon }) => (
          <article key={title} className="glass rounded-2xl p-5 flex flex-col gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-doz-blue/10 text-doz-blue border border-doz-blue/20">
              <Icon className="h-4 w-4" />
            </div>
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="text-sm text-slate-600">{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default DoctorsPage;

