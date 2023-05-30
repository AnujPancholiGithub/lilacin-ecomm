import { useState } from "react";
import "./App.css";
import TopBar from "./components/partials/TopBar";
import NavBar from "./components/partials/NavBar";
import HeroSection from "./components/carasouls/HeroSection";
import SectionList from "./components/cards/SectionList";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <HeroSection />
      <SectionList />
    </>
  );
}

export default App;
