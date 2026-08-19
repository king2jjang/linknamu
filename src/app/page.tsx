import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { BlogIcon, GithubIcon, LinkedInIcon } from "@/components/icons";

const PROFILE = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
};

const LINKS = [
  { href: "https://github.com", label: "GitHub", icon: <GithubIcon /> },
  { href: "https://linkedin.com", label: "LinkedIn", icon: <LinkedInIcon /> },
  { href: "https://example.com/blog", label: "Blog", icon: <BlogIcon /> },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-900">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-10 text-center">
        <ProfileHeader name={PROFILE.name} bio={PROFILE.bio} />
        <div className="flex w-full flex-col gap-6">
          {LINKS.map((link) => (
            <LinkCard
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
