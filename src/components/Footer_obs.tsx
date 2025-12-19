import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="max-w-screen-lg mx-auto p-4 text-base lg:text-xl">
      <Link to="/visitors" className="opacity-60 hover:opacity-100 text-sm">
        Visitors
      </Link>

      <p>Last update: December 2025.</p>
    </footer>
  );
};

export default Footer;
