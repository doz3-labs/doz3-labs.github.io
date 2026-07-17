import React from "react";
import { Shield, Zap, Users } from "lucide-react";
import DozWordmark from "./DozWordmark.jsx";

const features = [
  {
    title: "AI Safety Net",
    description: "Automated checks that flag risky interactions before they reach patients.",
    Icon: Shield,
  },
  {
    title: "60-Min Dispatch",
    description: "Orchestrated logistics so medications leave the pharmacy within an hour.",
    Icon: Zap,
  },
  {
    title: "Family Loop",
    description: "Keep caregivers in the loop with live status, alerts, and approvals.",
    Icon: Users,
  },
];

function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10 space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            The rails beneath every interaction.
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl">
            <DozWordmark className="text-xs font-semibold text-doz-blue align-baseline" />{" "}
            weaves safety, speed, and coordination into every prescription and delivery
            touchpoint.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="glass rounded-2xl p-6 flex flex-col gap-4 transform transition-transform duration-200 hover:scale-105"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-doz-blue/10 text-doz-blue border border-doz-blue/30">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

