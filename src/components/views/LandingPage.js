import React from "react";
import Carousel from "./Carousel";
import CreamSection from "./CreamSection";
import Header from "./Header";
import Sections from "./Sections";
import SmallSection from "./SmallSection";
import { Data } from "../Data";
import Footer from "./Footer";
function LandingPage() {
  return (
    <div>
      <Header />
      <Sections />
      <SmallSection />
      <CreamSection />
      <Carousel slides={Data} />
      <Footer />
    </div>
  );
}

export default LandingPage;
