import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, MapPin } from "lucide-react";
import DozWordmark from "../components/DozWordmark.jsx";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzzbR_P3obQ6_E5o_RyETwChY-d4EyR7fQuftptfmYiY4iNfpPDCKGyfpsT8ZWPQ5FA/exec"; 

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() ?? "");
}

function JoinPilotPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleNotify() {
    if (!isValidEmail(email)) return;

    setStatus("loading");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Essential for Google Scripts
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });

      // Assuming success if no network error
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-[85vh] flex items-center justify-center bg-white">
      <section className="w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-12">
        
        {/* --- LEFT: The "Pitch" --- */}
        <div className="text-left space-y-8">
          
          {/* Pilot Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Live Pilot • Indiranagar
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Join the <br/>
              <span className="text-doz-blue">
              <DozWordmark className="text-4xl md:text-5xl font-semibold text-doz-blue" /> Network.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              We are currently onboarding a limited batch of <strong>50 families</strong> in Indiranagar, Bengaluru. 
              Secure your spot for the first automated dosage delivery service in India.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-md">
            {status === "success" ? (
              <div className="p-5 bg-green-50 border border-green-100 rounded-2xl flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900">You're on the list!</h3>
                  <p className="text-sm text-green-700 mt-1">
                    We will email you as soon as a slot opens in your sector.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-xs font-semibold text-green-600 underline mt-3 hover:text-green-800"
                  >
                    Add another email
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      disabled={status === "loading"}
                      className="flex-1 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-doz-blue/40 shadow-sm disabled:opacity-50 disabled:bg-slate-50 transition-all"
                    />
                    <button
                      onClick={handleNotify}
                      disabled={status === "loading"}
                      className="px-8 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                           <Loader2 className="w-4 h-4 animate-spin" />
                           Joining...
                        </>
                      ) : (
                        <>
                           Join Waitlist
                           <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                </div>
                {status === "error" && (
                   <p className="text-red-500 text-sm px-1">Something went wrong. Please try again.</p>
                )}
                <p className="text-xs text-slate-400 pl-1">
                  Are you a Doctor? <a href="mailto:doz3labs@gmail.com" className="text-doz-blue font-medium hover:underline">Partner with us.</a>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* --- RIGHT: The "Visual Proof" (Crucial for YC) --- */}
        <div className="relative hidden md:block">
            {/* The Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out group">
               <img 
                 src="/hero.jpg" 
                 alt="DOZ3 Product Box" 
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               
               {/* Overlay Gradient for Text Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
               
               {/* "Actual Product" Label */}
               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="text-white">
                    <p className="text-xs font-medium opacity-80 uppercase tracking-widest">Prototype v1</p>
                    <p className="text-sm font-semibold">Pre-sorted Sachet Strip</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
               </div>
            </div>

            {/* Background Decoration Blob */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply"></div>
        </div>

      </section>
    </main>
  );
}

export default JoinPilotPage;