import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stethoscope, User2, ShieldCheck } from "lucide-react";

const TAB_CONFIG = {
  patient: {
    label: "Patient",
    description: "Patients get one tap refills & real time delivery updates.",
  },
  doctor: {
    label: "Doctor",
    description: "Doctors get AI safety checks before every prescription.",
  },
  admin: {
    label: "Admin",
    description: "Admin does end to end visibility across your care network.",
  },
};

function EcosystemTabs({ useGifs = false }) {
  const [activeTab, setActiveTab] = useState("patient");

  const isDoctor = activeTab === "doctor";
  const isAdmin = activeTab === "admin";

  const isPhone = activeTab === "patient";

  // Patient GIF is 760×1920 (portrait). Frame aspect matches so GIF fills inner box.
  const isGifMode = useGifs;
  const deviceSize = isPhone
    ? { width: 260, height: 657, borderRadius: 26 } // 260 * (1920/760) ≈ 657
    : isAdmin
    ? { width: 560, height: 340, borderRadius: 12 }
    : { width: 420, height: 320, borderRadius: 18 };

  const gradientClass = isDoctor
    ? "from-doz-blue via-sky-500 to-indigo-500"
    : isAdmin
    ? "from-amber-400 via-orange-500 to-rose-500"
    : "from-emerald-400 via-doz-teal to-emerald-700";

  const Icon =
    activeTab === "doctor" ? Stethoscope : activeTab === "patient" ? User2 : ShieldCheck;

  const gifByTab = {
    // Put your GIFs in /public/gifs and keep these paths.
    // Example: public/gifs/patient.gif → /gifs/patient.gif
    patient: "/gifs/patient.gif",
    doctor: "/gifs/doctor.gif",
    admin: "/gifs/admin.gif",
  };

  return (
    <section className="py-20 bg-doz-surface/40">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top segmented control */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center rounded-full bg-white border border-slate-200 p-1 shadow-sm">
            {Object.entries(TAB_CONFIG).map(([key, tab]) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="ecosystem-pill"
                      className="absolute inset-0 rounded-full bg-doz-blue shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center device mockup */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="relative border border-slate-200 bg-white shadow-xl shadow-slate-200/80 flex items-center justify-center overflow-hidden rounded-2xl"
            animate={{
              width: deviceSize.width,
              height: deviceSize.height,
              borderRadius: deviceSize.borderRadius,
            }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 22,
            }}
          >
            {/* Bezel / shell details */}
            {isPhone && (
              <div className="absolute top-3 inset-x-20 h-5 rounded-full bg-slate-200" />
            )}

            {isAdmin && (
              <>
                {/* Laptop top bar */}
                <div className="absolute top-0 inset-x-0 h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="ml-4 h-5 w-32 rounded bg-slate-200" />
                </div>
                {/* Laptop base */}
                <div className="absolute -bottom-4 left-1/2 h-3 w-[80%] -translate-x-1/2 rounded-b-3xl bg-slate-300" />
              </>
            )}

            {/* TODO: Replace these placeholders with Figma screenshots later. */}
            <div
              className={`relative rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center ${
                isAdmin ? "w-[94%] h-[82%] mt-6 mb-3" : "w-[94%] h-[94%]"
              }`}
            >
              {useGifs ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={gifByTab[activeTab]}
                    alt={`${TAB_CONFIG[activeTab].label} UI preview`}
                    className="h-full w-full object-cover rounded-2xl"
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.18 }}
                    draggable={false}
                  />
                </AnimatePresence>
              ) : (
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="h-14 w-14 rounded-2xl bg-black/15 backdrop-blur flex items-center justify-center border border-white/40">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/80">
                    {TAB_CONFIG[activeTab].label} View
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Description text */}
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center text-sm md:text-base text-slate-600 max-w-xl"
          >
            {TAB_CONFIG[activeTab].description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default EcosystemTabs;

