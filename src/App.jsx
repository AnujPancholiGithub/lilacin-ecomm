import { useState } from "react";
import "./App.css";
import TopBar from "./components/partials/TopBar";
import NavBar from "./components/partials/NavBar";
import HeroSection from "./components/carasouls/HeroSection";
import SectionList from "./components/cards/SectionList";
import ProductRow from "./components/cards/ProductRow";
import SignupNewsletter from "./components/help/SignupNewsletter";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <HeroSection />
      <SectionList />
      <ProductRow />
      <SignupNewsletter />
      <Footer />
    </>
  );
}

export default App;
