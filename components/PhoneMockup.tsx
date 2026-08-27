import { twMerge } from "tailwind-merge";

interface PhoneMockupProps {
  className?: string;
}

// A CSS phone chassis with the app recording clipped to the screen area.
// The recording already includes its own status bar/notch (it's a real
// screen recording), so the frame just adds the bezel + side buttons.
// Rendered as a muted looping <video> rather than a GIF — same visual
// result at ~1/5th the file size, and it's likely the LCP element in the
// Hero, so this materially helps page-load performance.
const PhoneMockup = ({ className = "" }: PhoneMockupProps) => {
  return (
    <div
      className={twMerge(
        "relative w-[230px] sm:w-[260px] aspect-[295/640]",
        className
      )}
    >
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-20 h-7 w-[3px] rounded-l-sm bg-neutral-800" />
      <div className="absolute -left-[3px] top-[7.5rem] h-11 w-[3px] rounded-l-sm bg-neutral-800" />
      <div className="absolute -right-[3px] top-24 h-14 w-[3px] rounded-r-sm bg-neutral-800" />

      {/* Chassis */}
      <div className="relative h-full w-full rounded-[2.4rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-black">
          <video
            className="h-full w-full object-cover"
            src="/assets/mobile.mp4"
            poster="/assets/mobile-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="MusiOS mobile app"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
