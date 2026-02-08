import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero.jsx";
import EcosystemTabs from "../components/EcosystemTabs.jsx";
import Features from "../components/Features.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <EcosystemTabs useGifs />
      <Features />

      {/* --- NEW JOIN PILOT SECTION --- */}
      <section className="py-24 px-6 text-center bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to close the loop?
          </h2>
          <p className="text-lg text-slate-600">
            We are currently onboarding 50 families in Indiranagar.
          </p>
          
          <div className="pt-4">
            <Link to="/join-pilot">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-doz-blue text-white text-lg font-semibold rounded-full shadow-lg shadow-doz-blue/25 hover:bg-doz-teal hover:scale-105 transition-all duration-300">
                Join the Pilot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          
          <p className="text-xs text-slate-400 font-medium uppercase tracking-widest pt-4">
            Limited Spots Available • Bengaluru
          </p>
        </div>
      </section>
      {/* ----------------------------- */}
    </>
  );
}

export default HomePage;