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
            Compose. Web-standard, reliable, and debuggable, but less automated,
            sort of "anti-serverless".
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
            frame. Tired of Unreal/Unity? Choose C or Go and specialize. Do not
            be afraid of a GC. Minecraft is Java...
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
            real factory machine since February 2020, I wrote firmware in C
            (avr-gcc).
          </p>
        </div>

        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://aabbtree77.github.io/tensors/"
            target="_blank"
            rel="noreferrer"
          >
            Notes taken while reading Shankland (1970)
          </a>
          <p className="mt-3 text-base text-left">
            Very few people know that tensors are not only vector spaces, but
            also algebras. The product determines their spectrum, even though
            the object is symbolical, not numerical. Spin comes up as a
            label/size of an irreducible block in the spectrum of a tensor.
            Guarded with this hint of Donn G. Shankland, one can rewrite,
            compress, and better understand Weinberg's QFT Vol.1, completely
            bottom-up. The reality is, history + experiment are the true
            ultimate compressors. Gamow/Sakharov, not Landau/Weinberg/Witten.
          </p>
        </div>

        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://hal.science/hal-00723427"
            target="_blank"
            rel="noreferrer"
          >
            Parallel Budgeted Optimization for Air Duct Design
          </a>
          <p className="mt-3 text-base text-left">
            PostDoc at Saint-Étienne, 2012-2013. Optimization of the fluid flow
            which was implemented before me with OpenFOAM, CATIA, STAR CCM+ and
            ParaView, running on the ProActive PACA Grid cloud (INRIA) via the
            Scilab-to-Java bridge managed by Fabien Viale. The optimization
            involved kriging and the CMA-ES as a meta-optimizer of the expected
            multi-point improvement whose integration I sped up with a
            specialized unscented transform. David Ginsbourger approached the
            integral differently, reducing it to Fortran routines which needed
            to compute multivariate Gaussian quadratures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
