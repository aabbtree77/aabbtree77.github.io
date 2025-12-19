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
            href="https://github.com/aabbtree77/schatzhauser"
            target="_blank"
            rel="noreferrer"
          >
            Schatzhauser: A Go Backend for Web Apps
          </a>
          <p className="mt-3 text-base text-left">
            This is a minimalist backend with middleware to help fighting bots.
            The latter is implemented without composition games. Think of Ruby
            Rack, but simpler. The unsung hero is sqlc.
          </p>
          <p className="mt-3 text-base text-left">
            Go runtime is natural for BE. Each request is handled by a goroutine
            which owns its DB transaction. Multiple transactions are handled by
            SQLite. One can play with mutexes to protect maps from concurrent
            updates, apply Go's context signal system to ensure graceful
            shutdowns. This is less clear in Ts.
          </p>
        </div>

        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://github.com/aabbtree77/twinpeekz2"
            target="_blank"
            rel="noreferrer"
          >
            Volumetric Sponza
          </a>
          <p className="mt-3 text-base text-left">
            Shadow mapping is a billion times faster than ray tracing.
            Surprisingly, one can go one step further and capture particle
            scattering with it. I have implemented volumetric lighting in Go and
            Nim using forward rendering, shadow mapping, PBR, and 3D ray
            marching with OpenGL. The work follows techniques described by
            Balázs Tóth, Tamás Umenhoffer (2009), and Tomas Öhberg (2017). These
            are the most beautiful scientific works and 3D simulations I have
            ever seen.
          </p>
          <p className="mt-3 text-base text-left">
            Debugging OpenGL (or any other 3D backend) is a horror story.
            RenderDoc becomes essential, static types are of little help, there
            is no printf, a 3D API (GPU) is so alien to rays and geometry.
          </p>
        </div>

        <div>
          <a
            className="link link-accent no-underline hover:underline text-xl lg:text-2xl font-semibold"
            href="https://github.com/aabbtree77/adast"
            target="_blank"
            rel="noreferrer"
          >
            Paper Guillotine
          </a>
          <p className="mt-3 text-base text-left">
            Joint work with Saulius Rakauskas (Infovega). We have maintained a
            real factory machine since February 2020, I wrote firmware in C
            (avr-gcc).
          </p>
          <p className="mt-3 text-base text-left">
            C is outstanding. After 50+ years we have nothing close to it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
