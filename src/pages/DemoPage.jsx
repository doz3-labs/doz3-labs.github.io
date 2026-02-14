import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

function DemoPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleUnlock(e) {
    e.preventDefault();
    const trimmedLogin = login.trim();
    const trimmedPassword = password.trim();

    if (trimmedLogin === "yc-demo" && trimmedPassword === "please-fund-me") {
      setUnlocked(true);
      setError("");
    } else {
      setUnlocked(false);
      setError("Incorrect login or password.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100">
      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-start pt-12 pb-20 px-4 md:px-8 bg-gradient-to-b from-slate-100 via-white to-white relative overflow-hidden">
        {/* Soft glow behind content */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="w-full max-w-5xl space-y-12 relative z-10">
          {/* 1. Text: Sneak peek + access model */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 drop-shadow-sm">
              Take a sneak peek at the live demo
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Watch the closed loop ecosystem in action, then step into the{" "}
              <span className="text-blue-600">live product</span> itself.
            </p>
          </div>

          {/* 2. Password-protected live demo card containing the three demo apps */}
          <section className="pt-4">
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-[0_18px_45px_-20px_rgba(15,23,42,0.4)] space-y-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-base md:text-lg font-semibold text-slate-900">
                    Live demo
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Enter the shared credentials to reveal the three live demo apps.
                  </p>
                </div>

                <form
                  onSubmit={handleUnlock}
                  className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
                >
                  <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Login"
                    className="w-full sm:w-40 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
                  />
                  <div className="relative w-full sm:w-40">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full rounded-full border border-slate-300 bg-white pl-4 pr-10 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400/60 rounded-full"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/30 hover:bg-blue-700 transition-colors"
                  >
                    Unlock demo
                  </button>
                </form>
              </div>

              {error && (
                <p className="text-xs text-red-500 font-medium">{error}</p>
              )}

              {unlocked && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <a
                    href="https://doz3-labs.github.io/Doz3doctordashboard/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 cursor-pointer hover:bg-slate-100 transition-colors overflow-hidden"
                  >
                    <div className="relative h-64 rounded-xl border border-slate-200 overflow-hidden bg-white">
                      <img
                        src="/doc1.png"
                        alt="Doctor's Dashboard preview"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/90 via-white/20 to-transparent rounded-xl" aria-hidden />
                    </div>
                    <strong className="block text-slate-900 text-sm font-bold">
                      Doctor&apos;s Dashboard
                    </strong>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      Live demo of the prescribing console and safety rails.
                    </p>
                  </a>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 cursor-pointer hover:bg-slate-100 transition-colors overflow-hidden">
                    <a
                      href="https://doz3-labs.github.io/Doz3patientapp/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col gap-3 text-slate-600 text-xs md:text-sm leading-relaxed"
                    >
                      <div className="relative h-64 rounded-xl border border-slate-200 overflow-hidden bg-white">
                        <img
                          src="/pat1.png"
                          alt="Patient App preview"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/90 via-white/20 to-transparent rounded-xl" aria-hidden />
                      </div>
                      <strong className="block text-slate-900 text-sm font-bold">
                        Patient App
                      </strong>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        Live demo of adherence timelines, refills, and reminders.
                      </p>
                    </a>
                  </div>
                  <a
                    href="https://doz3-labs.github.io/Doz3admindashboard/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 cursor-pointer hover:bg-slate-100 transition-colors overflow-hidden"
                  >
                    <div className="relative h-64 rounded-xl border border-slate-200 overflow-hidden bg-white">
                      <img
                        src="/adm1.png"
                        alt="Admin Panel preview"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/90 via-white/20 to-transparent rounded-xl" aria-hidden />
                    </div>
                    <strong className="block text-slate-900 text-sm font-bold">
                      Admin Panel
                    </strong>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">Live demo of logistics, routing, and exception handling.</p>
                  </a>
                </div>
              )}
            </div>
          </section>

              <div>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              The interactive demo is{" "}
              <span className="font-semibold text-slate-800">
                protected by login &amp; password
              </span>{" "}
              across all three apps {" "}
              <span className="text-blue-600">Doctor&apos;s Dashboard</span>,{" "}
              <span className="text-blue-600">Patient App</span>, and{" "}
              <span className="text-blue-600">Admin Panel</span>. Please request access if you don't have credentials.
            </p>
              </div>
          {/* 3. Hero video */}
          <div className="relative aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 group">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              poster="/hero2.png"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DemoPage;