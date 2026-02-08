import React from "react";
import Hero from "../components/Hero.jsx";
import EcosystemTabs from "../components/EcosystemTabs.jsx";
import Features from "../components/Features.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <EcosystemTabs useGifs />
      <Features />
    </>
  );
}

export default HomePage;

