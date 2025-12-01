"use client"

import { Manrope } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Contact, Copyright, Folder, House, MenuIcon, Moon, Sun, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  useEffect(() => {
    const toggle = document.getElementById("sidebar-toggle") as HTMLInputElement | null;
    if (toggle) toggle.checked = false;
  }, [pathname]);

  const linkClasses = (path: string) =>
    `btn btn-ghost justify-start text-lg transition-[transform,translate] hover:translate-x-2 inline-flex items-center gap-1
     ${pathname === path ? "bg-base-300 font-semibold translate-x-2" : ""}`;

  return (
    <html lang="en" className={`${manrope.className} antialiased`}>
      <body className="min-h-screen bg-base-200">
        <div className="drawer lg:drawer-open">
          <input id="sidebar-toggle" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content p-6">
            <div className="flex justify-between items-center lg:block lg:text-end mb-14">

              <label htmlFor="sidebar-toggle" className="swap lg:hidden">
                <MenuIcon className="h-8 w-8" />
              </label>

              <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller" value="light" />

                <Sun className="swap-on h-8 w-8" />

                <Moon className="swap-off h-8 w-8" />
              </label>
            </div>
            {children}
            <footer className="mt-14 rounded-2xl p-4 flex justify-between bg-base-100 border border-base-300 text-center shadow-2xl shadow-black/40">
              <div className="inline-flex items-center gap-1">
                <Copyright className="h-4 w-4" />2025 ldqs. All rights reserved
              </div>
              <div>
                Powered with <a href="https://nextjs.org/" className="link link-primary transition-[color]" target="_blank">Next.js</a> by <a href="https://vercel.com/" className="link link-primary transition-[color]" target="_blank">Vercel</a>
              </div>
            </footer>
          </div>

          <div className="drawer-side shadow-2xl shadow-black/40">
            <label htmlFor="sidebar-toggle" aria-label="close sidebar" className="drawer-overlay"></label>
            <aside className="w-72 bg-base-100 shadow-2xl shadow-black/40 border-r border-base-300 p-6 flex flex-col gap-8 min-h-full">
              <div className="text-center">
                <div className="avatar mb-5">
                  <div className="w-28 rounded-full shadow-xl ring-3 ring-primary ring-offset-base-100 ring-offset-3">
                    <Image src="/ldqs.jpg" width={256} height={256} alt="ldqs's avatar" className="hover:scale-110 transition-[scale]" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold">Quang Sang Le Do</h1>
                <p className="opacity-70 text-sm">Full-Stack Web Developer</p>
              </div>

              <nav className="flex flex-col gap-2">
                <Link href="/" className={linkClasses("/")}>
                  <House />Home
                </Link>

                <Link href="/aboutme" className={linkClasses("/aboutme")}>
                  <User />About Me
                </Link>

                <Link href="/projects" className={linkClasses("/projects")}>
                  <Folder />Projects
                </Link>

                <Link href="/contact" className={linkClasses("/contact")}>
                  <Contact />Contact
                </Link>
              </nav>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
