import React from "react";

const PortfolioTimeline: React.FC = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-base lg:text-xl timeline-end mb-10">
          <time className="font-mono italic">2014 - Now</time>
          <div className="text-xl lg:text-2xl font-black">Street: C, ATmega, Linux, MQTT, Blender 3D, OpenGL, Nim, REST APIs, SQLite, PostgreSQL, Go, React, MERN, git, Docker Compose, VPS, prototyping, consulting, leetcoding, applying...</div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-base lg:text-xl timeline-start md:text-end mb-10">
          <time className="font-mono italic">2000 - 2014</time>
          <div className="text-xl lg:text-2xl font-black">
            Universities: Matlab, Scilab, Python, LaTeX, C, calculus, linear algebra, Bayesianism/Jaynes, Gaussian processes (kriging), 
            CART, CMA-ES, MDS, MNIST, CIFAR, machine learning, ICCV-2007, Lie groups, Pavel Zhilin, tensors, Donn G. Shankland...  
          </div>
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default PortfolioTimeline;
