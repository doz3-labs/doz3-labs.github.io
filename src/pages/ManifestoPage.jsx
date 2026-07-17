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

        {/* FOUNDER PROFILE SECTION */}
        <div className="mt-8 pt-8 border-t border-slate-100">
          <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-4">
             Built by
          </h2>
          
          <div className="glass rounded-2xl p-5 flex flex-row items-center gap-5 border border-slate-200/60 shadow-sm max-w-md">
            {/* CRITICAL: Make sure 'founder.png' is inside your 'public' folder! 
               Not inside 'src'.
            */}
            <img
              src="/founder.png" 
              alt="Harsh P"
              className="h-16 w-16 rounded-full object-cover bg-slate-100 border border-slate-200"
            />
            
            <div className="flex flex-col">
              <p className="text-sm font-bold text-slate-900">Harsh P</p>
              <p className="text-xs text-slate-500 font-medium mb-2">Founder / CEO / Product Engineer</p>
              
              {/* LINKEDIN BUTTON */}
              <a 
                href="https://www.linkedin.com/in/ls-harsh/" // <--- PASTE YOUR LINKEDIN URL HERE
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}

export default ManifestoPage;