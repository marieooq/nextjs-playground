import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "./ui/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Playground",
  description: "A playground that you can mess around with.",
};

export default function RootLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  console.log({ team });
  console.log({ analytics });
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen bg-cyan-200">
          <Navigation
            navLinks={[
              { href: "/", name: "Home" },
              { href: "/dashboard", name: "Dashboard" },
              { href: "/setting", name: "Setting" },
              { href: "/about", name: "About" },
              { href: "/blog", name: "Blog" },
              { href: "/nestedpage", name: "NestedPage" },
              { href: "/users", name: "Users" },
            ]}
          />
          {children}
          {team}
          {analytics}
        </div>
      </body>
    </html>
  );
}
