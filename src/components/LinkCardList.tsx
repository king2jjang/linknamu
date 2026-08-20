"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type LinkItem = {
  id: string;
  href: string;
  label: string;
  icon: string;
};

type LinkCardListProps = {
  links: LinkItem[];
};

export default function LinkCardList({ links }: LinkCardListProps) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!cancelled) {
          setCounts(data);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleClick = (id: string) => {
    fetch(`/api/clicks/${id}`, { method: "POST" })
      .then((res) => res.json())
      .then((data: { count: number }) => {
        setCounts((prev) => ({ ...prev, [id]: data.count }));
      })
      .catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          href={link.href}
          label={link.label}
          icon={link.icon}
          clickCount={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
