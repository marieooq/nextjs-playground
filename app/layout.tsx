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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation
          navLinks={[
            { href: "/dashboard", name: "Dashboard" },
            { href: "/setting", name: "Setting" },
            { href: "/about", name: "About" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
