import React from "react";

export default function RouteFallback({ label = "Loading…" }) {
  return (
    <div className="flex items-center justify-center py-12" role="status" aria-live="polite">
      <div className="inline-flex items-center gap-3 text-gray-300">
        <span
          className="h-4 w-4 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(163,255,0,0.5)]"
          aria-hidden
        />
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}

