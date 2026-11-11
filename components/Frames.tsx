import { twMerge } from "tailwind-merge";

// Device chrome around a <Screen />. The phone's screen area matches an
// iPhone simulator screenshot (1179 x 2556), which already contains its own
// status bar and Dynamic Island, so the frame is just the bezel.
export function PhoneFrame({ children, className, onDark = false }: { children: React.ReactNode; className?: string; onDark?: boolean }) {
  return (
    <div className={twMerge("relative w-[260px]", className)}>
      {/* On a dark background the black bezel needs a light edge to stay visible. */}
      <div className={twMerge("rounded-[2.6rem] bg-neutral-900 p-[9px] shadow-[0_40px_70px_-30px_rgba(0,30,128,0.55)] ring-1", onDark ? "ring-white/25" : "ring-black/10")}>
        <div className="relative aspect-[1179/2556] overflow-hidden rounded-[2.1rem] bg-white">{children}</div>
      </div>
    </div>
  );
}

export function BrowserFrame({ children, className, url = "musios.io/app" }: { children: React.ReactNode; className?: string; url?: string }) {
  return (
    <div className={twMerge("overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_40px_80px_-40px_rgba(0,30,128,0.5)]", className)}>
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="mx-auto rounded-md border border-slate-200 bg-white px-4 py-0.5 text-xs text-slate-400">{url}</div>
        <div className="w-[42px]" aria-hidden />
      </div>
      <div className="relative aspect-[16/10] bg-white">{children}</div>
    </div>
  );
}
