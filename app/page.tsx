"use client";

import Link from "next/link";
import Counter from "./Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-9xl">Home</p>
      <Link
        href="/users"
        className="inline-block text-lg leading-6 hover:text-orange-600 hover:underline"
      >
        Link to Users page
      </Link>
      <Counter />
    </div>
  );
}
