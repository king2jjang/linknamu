import type { ReactNode } from "react";

type LinkCardProps = {
  href: string;
  label: string;
  icon: ReactNode;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({
  href,
  label,
  icon,
  clickCount,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-3xl border border-white/50 bg-white/50 px-6 py-4 text-[#4a3a2f] shadow-[0_4px_20px_-6px_rgba(180,120,80,0.2)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_10px_28px_-8px_rgba(180,120,80,0.3)]"
    >
      <span className="shrink-0 text-xl" aria-hidden>
        {icon}
      </span>
      <span className="font-medium tracking-tight">{label}</span>
      <span className="ml-auto shrink-0 text-xs text-[#8a7566]">
        {clickCount}회
      </span>
    </a>
  );
}
