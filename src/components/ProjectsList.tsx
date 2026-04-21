import React from "react";

const ProjectsList: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-12 px-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Selected Projects
      </h2>

      <div className="mx-auto flex flex-col gap-10 w-full sm:w-2/3 lg:w-1/2">
        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://github.com/aabbtree77/opt"
            target="_blank"
            rel="noreferrer"
          >
            opt and opt/initialsdb
          </a>
          <p className="mt-3 text-base text-left">
            VPS infrastructure + code for{" "}
            <a
              className="link link-accent no-underline hover:underline font-semibold"
              href="https://initials.dev/"
              target="_blank"
              rel="noreferrer"
            >
              initials.dev
            </a>
            , a public bulletin board (message store) implemented as a Go
            backend serving a React SPA, together with PostgreSQL and Docker
            Compose, 24/7 on Hetzner.
          </p>
        </div>

        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://github.com/aabbtree77/twinpeekz2"
            target="_blank"
            rel="noreferrer"
          >
            Volumetric Light (God Rays)
          </a>
          <p className="mt-3 text-base text-left">
            A complete OpenGL real-time rendering pipeline from glTF2 to fully
            3D ray marched volumetric light squeezed into milliseconds per
            frame.
          </p>
        </div>

        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://github.com/aabbtree77/adast"
            target="_blank"
            rel="noreferrer"
          >
            Paper Guillotine Adast Maxima MS80
          </a>
          <p className="mt-3 text-base text-left">
            Joint work with Saulius Rakauskas (Infovega). We have maintained a
            real factory machine since February 2020. A massive steel knife,
            precision mechanics, heavy factory loads. I wrote firmware in C
            (avr-gcc), and it does the job, it helps people.
          </p>
        </div>

        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://aabbtree77.github.io/tensors/"
            target="_blank"
            rel="noreferrer"
          >
            Reading Donn G. Shankland (1970)
          </a>
          <p className="mt-3 text-base text-left">
            Verified Shankland's algebras.
          </p>
        </div>

        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://hal.science/hal-00723427"
            target="_blank"
            rel="noreferrer"
          >
            Parallel Budgeted Optimization
          </a>
          <p className="mt-3 text-base text-left">
            PostDoc at Saint-Étienne, 2012-2013. Optimization of the fluid flow
            for automotive industry. OpenFOAM, CATIA,STAR CCM+, ParaView, ProActive PACA Grid cloud
            (INRIA), Scilab, Python, CMA-ES, 24/7 runs, asynchrony. I sped up the multivariate expected 
            improvement integration with a specialized unscented transform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
