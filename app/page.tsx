import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-cyan-200 flex flex-col items-center justify-center gap-8">
      <p className="text-9xl">Home</p>
      <Link
        href="/about"
        className="inline-block text-lg leading-6 hover:text-orange-600"
      >
        Link to About page
      </Link>
    </div>
  );
}
