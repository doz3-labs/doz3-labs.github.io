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

  // --- SIZES ---
  // Patient = Standard Phone Size
  // Doctor/Admin = Large Landscape Sizes
  const deviceSize = isPhone
    ? { width: 260, height: 657, borderRadius: 36 } 
    : isAdmin
    ? { width: 900, height: 550, borderRadius: 12 } 
    : { width: 750, height: 520, borderRadius: 24 };

  const gradientClass = isDoctor
    ? "from-doz-blue via-sky-500 to-indigo-500"
    : isAdmin
    ? "from-amber-400 via-orange-500 to-rose-500"
    : "from-emerald-400 via-doz-teal to-emerald-700";

  const Icon =
    activeTab === "doctor" ? Stethoscope : activeTab === "patient" ? User2 : ShieldCheck;

  const gifByTab = {
    patient: "/gifs/patient.gif",
    doctor: "/gifs/doctor.gif",
    admin: "/gifs/admin.gif",
  };

  return (
    <section className="py-20 bg-doz-surface/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
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
        <div className="flex flex-col items-center gap-8">
          <motion.div
            className="relative border border-slate-200 bg-white shadow-2xl shadow-slate-300/50 flex items-center justify-center overflow-hidden"
            animate={{
              width: deviceSize.width,
              height: deviceSize.height,
              borderRadius: deviceSize.borderRadius,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            {/* 2. Admin Laptop Top Bar (Only for Admin) */}
            {isAdmin && (
              <div className="absolute top-0 inset-x-0 h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 z-20">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="ml-4 h-5 w-48 rounded bg-white border border-slate-200 shadow-sm" />
              </div>
            )}

            {/* 3. iPad Notch (Only for Doctor) - ADDED HERE */}
            {isDoctor && (
                // Centered at top, grey color, rounded bottom corners
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-slate-200 rounded-b-xl z-20 border-b border-x border-slate-300/50" />
            )}

            <div
              className={`relative bg-gradient-to-br ${gradientClass} flex items-center justify-center overflow-hidden ${
                isAdmin ? "w-full h-full pt-8" : "w-full h-full"
              }`}
            >
              {useGifs ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={gifByTab[activeTab]}
                    alt={`${TAB_CONFIG[activeTab].label} UI preview`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    draggable={false}
                  />
                </AnimatePresence>
              ) : (
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="h-14 w-14 rounded-2xl bg-black/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-white/90">
                    {TAB_CONFIG[activeTab].label} Interface
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Description text */}
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-lg font-medium text-slate-600 max-w-2xl"
          >
            {TAB_CONFIG[activeTab].description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default EcosystemTabs;