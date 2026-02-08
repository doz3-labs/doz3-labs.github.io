import React from "react";
import DozWordmark from "../components/DozWordmark.jsx";

function CareersPage() {
  const roles = [
    {
      title: "Founding Engineer",
      location: "Bengaluru / Remote, India",
      blurb:
        "Own core services from prescription ingestion to pouch orchestration. You ship fast and care about safety.",
    },
    {
      title: "Operations Lead",
      location: "Bengaluru, India",
      blurb:
        "Stand up and scale our first hubs. You love process, people, and the reality of physical logistics.",
    },
  ];

  return (
    <main className="pt-6">
      <section className="max-w-5xl mx-auto px-6 space-y-4 pb-8">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
          Careers
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Build the future of Indian healthcare.
        </h1>
        <p className="text-slate-600 max-w-2xl text-sm md:text-base">
          We are a small group of engineers, designers, and operators who believe
          that better coordination can save lives.{" "}
          <DozWordmark className="text-xs font-semibold text-doz-blue align-baseline" />{" "}
          is still early you will shape the product, the culture, and the way care
          feels for thousands of families.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12 space-y-6">
        <h2 className="text-base md:text-lg font-semibold text-slate-900">
          Open roles
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {roles.map((role) => (
            <article
              key={role.title}
              className="glass rounded-2xl p-5 flex flex-col gap-2"
            >
              <h3 className="text-sm md:text-base font-semibold text-slate-900">
                {role.title}
              </h3>
              <p className="text-xs text-slate-500">{role.location}</p>
              <p className="text-xs md:text-sm text-slate-600">{role.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-3">
        <h2 className="text-base md:text-lg font-semibold text-slate-900">
          Don&apos;t see your role?
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          If you care deeply about adherence, logistics, or building for India, we&apos;d
          still love to hear from you. Tell us what you want to work on and why it
          matters.
        </p>
        <p className="text-sm md:text-base text-doz-blue font-medium">
          Email us at{" "}
          <a
            href="mailto:founders@doz3-labs.com"
            className="underline underline-offset-2"
          >
            founders@doz3-labs.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}

export default CareersPage;

