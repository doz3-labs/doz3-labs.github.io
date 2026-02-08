import React from "react";
import { Pill, Clock, Users } from "lucide-react";
import DozWordmark from "../components/DozWordmark.jsx";
import CollageBanner from "../components/CollageBanner.jsx";

function PatientsPage() {
  const items = [
    {
      title: "Pre sorted Pouches",
      description: "Each pouch is a moment in time, exactly what to take and when.",
      Icon: Pill,
    },
    {
      title: "One tap Refills",
      description: "Refill reminders & pharmacy handoff without long calls or queues.",
      Icon: Clock,
    },
    {
      title: "Family Loop",
      description: "Keep your family in the loop with status updates and alerts.",
      Icon: Users,
    },
  ];

  return (
    <main className="pt-6">
      <section className="max-w-5xl mx-auto px-6 space-y-4 pb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          <DozWordmark className="text-3xl md:text-4xl font-semibold text-doz-blue" />{" "}
          for Patients &amp; Families
        </h1>
        <p className="text-slate-600 max-w-2xl">
          <DozWordmark className="text-xs font-semibold text-doz-blue align-baseline" />{" "}
          turns complex prescriptions into simple, daily rituals with clear, pre sorted medicine
          pouches and proactive reminders.
        </p>
      </section>

      {/* Collage section (placed before the feature cards) */}
      <CollageBanner
        alt="Patients app collage"
        imageUrl="https://placehold.co/1600x900?text=Patients+Figma+Collage"
      />

      <section className="max-w-5xl mx-auto px-6 pb-20 grid gap-6 md:grid-cols-3">
        {items.map(({ title, description, Icon }) => (
          <article key={title} className="glass rounded-2xl p-5 flex flex-col gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-doz-teal/10 text-doz-teal border border-doz-teal/20">
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

export default PatientsPage;

