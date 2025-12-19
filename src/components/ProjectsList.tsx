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
            This one comes with middleware to fight bots. Think of Ruby Rack,
            but simpler. There is also a cli to manage users. Go is natural for
            backend. Each request is handled by a goroutine which owns its DB
            transaction. Multiple requests/transactions are delegated to SQLite.
            One can play with mutexes to protect maps from concurrent updates,
            apply Go's context signal system to ensure graceful shutdowns.
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
            frame. Tired of Unreal/Unity? Choose C or Go and push this to the
            limit. Note that GC enabled Minecraft...
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
            (avr-gcc). C is outstanding. After 50+ years nothing comes close to
            it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
