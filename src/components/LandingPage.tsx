import React from "react";
import Header from "./Header";
import DX from "./ProjectsList";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-neutral">
      <div className="gap-4 lg:gap-8 flex flex-col items-center text-gray-400">
        <Header />
        <DX />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
