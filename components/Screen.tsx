import fs from "fs";
import path from "path";
import Image from "next/image";

// One screenshot or screen recording slot. It looks for files in
// public/assets/landing/ at build time, so new captures are a drop-in:
//   <name>.mp4 (+ <name>.jpg as its poster)  -> looping, muted video
//   <name>.webp / .png / .jpg                -> still image
//   nothing yet                              -> a labelled placeholder
// Server component on purpose: the file check happens once when the page is
// built, and nothing is shipped to the browser for it.
const DIR = path.join(process.cwd(), "public", "assets", "landing");
const find = (name: string, exts: string[]) =>
  exts.find((ext) => fs.existsSync(path.join(DIR, `${name}.${ext}`)));

type ScreenProps = {
  name: string;
  alt: string;
  /** What the placeholder asks for, e.g. "Teacher · Home, Students tab". */
  label: string;
  priority?: boolean;
  sizes?: string;
};

export default function Screen({ name, alt, label, priority = false, sizes = "300px" }: ScreenProps) {
  const url = (ext: string) => `/assets/landing/${name}.${ext}`;

  if (find(name, ["mp4"])) {
    const poster = find(name, ["jpg", "webp", "png"]);
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover object-top"
        src={url("mp4")}
        poster={poster ? url(poster) : undefined}
        autoPlay
        loop
        muted
        playsInline
        preload={priority ? "auto" : "metadata"}
        aria-label={alt}
      />
    );
  }

  const still = find(name, ["webp", "png", "jpg"]);
  if (still) {
    return <Image src={url(still)} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />;
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-brand/25 bg-brand-soft p-4 text-center">
      <span className="text-sm font-semibold text-brand">{label}</span>
      <code className="break-all text-[11px] text-slate-500">assets/landing/{name}.png</code>
    </div>
  );
}
