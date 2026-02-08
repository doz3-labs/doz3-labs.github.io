import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function DemoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100">
      
      {/* 1. Header with Glass Effect */}
      <header className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div>
             <span className="ml-2 text-[10px] uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-1 rounded-full align-middle border border-blue-100 font-bold">
               Internal Demo
             </span>
        </div>
      </header>

      {/* 2. Main Section with STRONGER Gradient */}
      <main className="flex-1 flex flex-col items-center justify-start pt-12 pb-20 px-4 md:px-8 bg-gradient-to-b from-slate-100 via-white to-white relative overflow-hidden">
        
        {/* --- THE GLOW EFFECT (The "Secret Sauce") --- */}
        {/* This creates a soft blue light behind the video */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="w-full max-w-5xl space-y-10 relative z-10">
          
          {/* Text Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 drop-shadow-sm">
              The Operating System for Adherence
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Watch the closed-loop ecosystem in action: <br className="hidden md:block"/>
              <span className="text-blue-600">Doctor Prescription</span> → 
              <span className="text-blue-600"> Logistics Sorting</span> → 
              <span className="text-blue-600"> Patient Delivery</span>.
            </p>
          </div>

          {/* 3. The Video Player with Shadow */}
          <div className="relative aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 group">
            <video 
              className="w-full h-full object-cover"
              controls 
              playsInline
              poster="/hero2.jpg" 
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* 4. Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-lg transition-all hover:-translate-y-1">
              <strong className="block text-slate-900 mb-2 text-sm font-bold">01. Doctor Node</strong>
              <p className="text-slate-500 text-sm leading-relaxed">iPad Interface converts unstructured prescriptions into structured digital orders.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-lg transition-all hover:-translate-y-1">
              <strong className="block text-slate-900 mb-2 text-sm font-bold">02. Logistics Engine</strong>
              <p className="text-slate-500 text-sm leading-relaxed">Automated batching and routing logic for the 60-minute delivery loop.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-lg transition-all hover:-translate-y-1">
              <strong className="block text-slate-900 mb-2 text-sm font-bold">03. Patient App</strong>
              <p className="text-slate-500 text-sm leading-relaxed">Visual adherence tracking, one-tap refills, and family notifications.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default DemoPage;