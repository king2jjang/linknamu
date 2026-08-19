import type { ReactNode } from "react";

type LinkCardProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export default function LinkCard({ href, label, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
    >
      <span className="shrink-0" aria-hidden>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </a>
  );
}
