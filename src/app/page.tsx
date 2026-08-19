import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const PROFILE = {
  name: "이병국",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
};

const LINKS = [
  { href: "https://github.com/king2jjang", label: "GitHub", icon: "💻" },
  { href: "https://blog.naver.com/unibklee", label: "블로그", icon: "📝" },
  { href: "mailto:unibklee@gmail.com", label: "이메일", icon: "📧" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-12 text-center">
        <ProfileHeader
          name={PROFILE.name}
          bio={PROFILE.bio}
          imageUrl={PROFILE.imageUrl}
        />
        <div className="flex w-full flex-col gap-5">
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
