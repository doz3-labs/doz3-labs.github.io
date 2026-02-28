import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import DozWordmark from "./DozWordmark.jsx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="glass bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <img
                src="/doze-logo.png"
                alt="DOZ3 logo"
                className="h-8 w-8"
              />
              <DozWordmark className="text-lg font-semibold text-doz-blue" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink
              to="/ecosystem"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-doz-blue" : "text-slate-700 hover:text-doz-blue"}`
              }
            >
              Ecosystem
            </NavLink>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-doz-blue" : "text-slate-700 hover:text-doz-blue"}`
              }
            >
              For Doctors
            </NavLink>
            <NavLink
              to="/patients"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-doz-blue" : "text-slate-700 hover:text-doz-blue"}`
              }
            >
              For Patients
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/demo"
              className="px-4 py-2 rounded-full bg-doz-blue text-white text-sm font-medium shadow-md shadow-doz-blue/30 hover:bg-doz-teal hover:shadow-doz-teal/30 transition-colors transition-shadow"
            >
              Live Demo
            </Link>
            {/* Three-dash animated menu button */}
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 hover:bg-white transition-colors"
              aria-label="Open more pages"
            >
              <span className="relative flex h-4 w-4 flex-col justify-between">
                <motion.span
                  className="h-[2px] w-full rounded-full bg-slate-900"
                  animate={
                    isMenuOpen
                      ? { rotate: 45, y: 4 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
                <motion.span
                  className="h-[2px] w-full rounded-full bg-slate-900"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="h-[2px] w-full rounded-full bg-slate-900"
                  animate={
                    isMenuOpen
                      ? { rotate: -45, y: -4 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Side drawer for secondary pages */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-64 bg-white border-l border-slate-200 shadow-xl flex flex-col"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <div className="px-5 pt-16 pb-4 border-b border-slate-100">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                  More from DOZ
                  <span className="inline-block -scale-x-100 -ml-[0.18em]">E</span>
                </p>
              </div>
              <nav className="flex-1 px-5 py-4 space-y-2 text-sm font-medium text-slate-800">
                <NavLink
                  to="/manifesto"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 transition-colors ${
                      isActive
                        ? "bg-doz-blue text-white"
                        : "hover:bg-slate-100 hover:text-doz-blue"
                    }`
                  }
                >
                  Manifesto
                </NavLink>
                <NavLink
                  to="/safety"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 transition-colors ${
                      isActive
                        ? "bg-doz-blue text-white"
                        : "hover:bg-slate-100 hover:text-doz-blue"
                    }`
                  }
                >
                  Safety &amp; Quality
                </NavLink>
                <NavLink
                  to="/careers"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 transition-colors ${
                      isActive
                        ? "bg-doz-blue text-white"
                        : "hover:bg-slate-100 hover:text-doz-blue"
                    }`
                  }
                >
                  Careers
                </NavLink>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
