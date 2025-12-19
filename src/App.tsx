import { useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { sendGuestTimeLoc } from "./analytics/sendGuestTimeLoc";

import Header from "./components/Header";
import ProjectsList from "./components/ProjectsList";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

import "./App.css";

const VisitorsOverlay = lazy(() => import("./visitors/VisitorsOverlay"));

function CV() {
  return (
    <div className="bg-neutral">
      <div className="mx-auto flex w-11/12 flex-col items-center gap-8 text-gray-400 2xl:w-3/5 2xl:gap-24">
        <Header />
        <Portfolio />
        <ProjectsList />
        <Contact />
        <Footer />
        <div className="hidden tablet:block">
          <Popup
            imageSrc="assets/IronMike.png"
            link="https://www.youtube.com/watch?v=Y183gJQ9yCY&t=20s&ab_channel=MMAMindset"
            message="How can I help you?"
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  /*React gotcha: StrictMode runs effects twice in dev
  useRef is here so that POST inside sendGuestTimeLoc()
  may not fire twice in dev*/

  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    sendGuestTimeLoc();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<CV />} />
      <Route
        path="/visitors"
        element={
          <Suspense fallback={null}>
            <VisitorsOverlay />
          </Suspense>
        }
      />
    </Routes>
  );
}
