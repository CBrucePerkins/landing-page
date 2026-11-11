import { twMerge } from "tailwind-merge";

export default function SectionHeading({
  eyebrow,
  title,
  children,
  dark = false,
  className,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={twMerge("mx-auto max-w-2xl text-center", className)}>
      <p className={twMerge("text-sm font-semibold uppercase tracking-[0.12em]", dark ? "text-indigo-200" : "text-brand")}>
        {eyebrow}
      </p>
      <h2 className={twMerge("mt-3 text-3xl font-extrabold tracking-tight [text-wrap:balance] sm:text-4xl lg:text-5xl", dark ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {children && (
        <p className={twMerge("mt-4 text-lg [text-wrap:pretty]", dark ? "text-indigo-100/80" : "text-slate-600")}>{children}</p>
      )}
    </div>
  );
}
