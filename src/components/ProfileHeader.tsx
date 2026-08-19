type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <div
        className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
        aria-hidden
      >
        <svg
          className="h-20 w-20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z" />
        </svg>
      </div>
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {name}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
    </header>
  );
}
