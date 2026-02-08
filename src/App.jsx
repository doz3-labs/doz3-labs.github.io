import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import DozWordmark from "./components/DozWordmark.jsx";
import HomePage from "./pages/HomePage.jsx";
import EcosystemPage from "./pages/EcosystemPage.jsx";
import DoctorsPage from "./pages/DoctorsPage.jsx";
import PatientsPage from "./pages/PatientsPage.jsx";
import ManifestoPage from "./pages/ManifestoPage.jsx";
import SafetyPage from "./pages/SafetyPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import ComingSoonPage from "./pages/ComingSoonPage.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-doz-bg text-doz-text-main">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        © 2026{" "}
        <DozWordmark className="text-xs font-semibold text-doz-blue align-middle" />{" "}
        Labs
      </footer>
    </div>
  );
}

export default App;
