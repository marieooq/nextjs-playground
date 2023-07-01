import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-1/2 flex items-center space-x-8">
        <Link
          href="/dashboard"
          className="inline-block text-lg leading-6 font-bold"
        >
          Dashboard
        </Link>
        <Link
          href="/setting"
          className="inline-block text-lg leading-6 font-bold"
        >
          Setting
        </Link>
        <Link
          href="/about"
          className="inline-block text-lg leading-6 font-bold"
        >
          About
        </Link>
      </div>

      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{" "}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>
    </main>
  );
}
