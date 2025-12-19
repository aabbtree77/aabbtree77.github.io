import React from "react";
import ToggleFont from "./ToggleFont";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 2xl:mt-16">
      <div className="flex flex-row gap-4 items-center justify-center p-4">
        <img
          src="assets/rg.jpg"
          alt="Ramūnas Girdziušas"
          className="w-16 h-16 lg:w-32 lg:h-32 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row items-center justify-evenly gap-2 xl:gap-4">
            <p className="text-2xl lg:text-4xl font-bold">Ramunas</p>
            <p className="text-2xl lg:text-4xl font-bold">Girdziusas</p>
          </div>

          <div className="text-base lg:text-2xl text-center">
          <a
              className="link link-accent no-underline"
              href="https://github.com/aabbtree77?tab=repositories"
            >
              Github{" "}
            </a>
            <a
              className="link link-accent no-underline"
              href="https://aabbtree77.github.io/pdfs/RamunasGirdziusasResume.pdf"
            >
              resume.pdf{" "}
            </a>{" "}
            <a
              className="link link-accent no-underline"
              href="https://aabbtree77.github.io/pdfs/RamunasGirdziusasCV.pdf"
            >
              cv.pdf
            </a>
          </div>
        </div>
      </div>

      <ToggleFont />
    </div>
  );
};

export default Header;
