import { useState, lazy, Suspense } from "react";

const VisitorsInline = lazy(() => import("../visitors/VisitorsInline"));

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="text-gray-300">
      <div className="mx-auto max-w-xl text-left">
        {/* 👀 row */}
        <div className="flex gap-2">
          <span>👀 Who’s been here (time in UTC):</span>
          <button
            onClick={() => setOpen(!open)}
            className="link link-accent no-underline"
          >
            {open ? "collapse" : "expand"}
          </button>
        </div>

        {/* list */}
        {open && (
          <div className="mx-auto mt-3 text-left">
            {/*<Suspense fallback={null}>*/}
            <Suspense
              fallback={<p className="mt-3 italic opacity-80">Loading…</p>}
            >
              <VisitorsInline />
            </Suspense>
          </div>
        )}

        {/* footer note */}
        <div className="mt-6 text-sm opacity-60">
          Last update: February 2026
        </div>

        <div className="h-4" />
      </div>
    </footer>
  );
}
