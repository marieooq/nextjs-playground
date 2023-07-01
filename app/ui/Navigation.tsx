"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

type navLinksType = { href: string; name: string }[];

export function Navigation({ navLinks }: { navLinks: navLinksType }) {
  const pathname = usePathname();

  return (
    <div className="w-full flex items-center space-x-8 bg-cyan-200">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={classNames("inline-block text-lg leading-6 font-bold ", {
              "text-orange-600": isActive,
              "text-black": !isActive,
            })}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
