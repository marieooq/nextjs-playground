import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "./ui/Navigation";
import { CounterProvider } from "@/context/CounterProvider";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <CounterProvider>
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
                { href: "/pokemon", name: "Pokemon" },
                { href: "/post", name: "Post" },
              ]}
            />
            <div className="p-4">
              {children}
              {team}
              {analytics}
            </div>
          </div>
        </CounterProvider>
      </body>
    </html>
  );
}
