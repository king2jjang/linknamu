type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/90 to-orange-100/60 p-1.5 shadow-[0_12px_32px_-8px_rgba(196,120,60,0.45)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-32 w-32 rounded-full object-cover ring-1 ring-white/70 sm:h-36 sm:w-36"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-[#3f2f24]">
          {name}
        </h1>
        <p className="text-sm text-[#8a7566]">{bio}</p>
      </div>
    </header>
  );
}
