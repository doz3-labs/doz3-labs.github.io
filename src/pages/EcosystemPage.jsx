import React from "react";
import EcosystemTabs from "../components/EcosystemTabs.jsx";
import Features from "../components/Features.jsx";
import DozWordmark from "../components/DozWordmark.jsx";

function EcosystemPage() {
  return (
    <main className="pt-6">
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          The{" "}
          <DozWordmark className="text-3xl md:text-4xl font-semibold text-doz-blue" />{" "}
          Ecosystem
        </h1>
        <p className="text-slate-600 max-w-2xl">
          A connected network of doctors, patients, pharmacies, and logistics providers,
          stitched together through pre-sorted dosages and real-time coordination.
        </p>
      </section>
      <EcosystemTabs useGifs />
      <Features />
    </main>
  );
}

export default EcosystemPage;

