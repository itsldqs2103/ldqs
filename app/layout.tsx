import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Contact, Folder, House, MenuIcon, Moon, Sun, User } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.className} antialiased`}>
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
          </div>

          <div className="drawer-side shadow-2xl shadow-black/40">
            <label htmlFor="sidebar-toggle" aria-label="close sidebar" className="drawer-overlay"></label>
            <aside className="w-72 bg-base-100 shadow-2xl shadow-black/40 border-r border-base-300 p-6 flex flex-col gap-8 min-h-full">
              <div className="text-center">
                <div className="avatar mb-5">
                  <div className="w-28 rounded-full shadow-xl ring-3 ring-primary ring-offset-base-100 ring-offset-3">
                    <Image src="/ldqs.png" width={256} height={256} alt="ldqs's avatar" className="hover:scale-115 transition-[scale]" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold">Quang Sang Le Do</h1>
                <p className="opacity-70 text-sm">Full-Stack Web Developer</p>
              </div>

              <nav className="flex flex-col gap-2">
                <Link href="/" className="btn btn-ghost justify-start text-lg hover:translate-x-2 transition-[transform,translate]"><House /> Home</Link>
                <Link href="/aboutme" className="btn btn-ghost justify-start text-lg hover:translate-x-2 transition-[transform,translate]"><User /> About Me</Link>
                <Link href="/projects" className="btn btn-ghost justify-start text-lg hover:translate-x-2 transition-[transform,translate]"><Folder /> Projects</Link>
                <Link href="/contact" className="btn btn-ghost justify-start text-lg hover:translate-x-2 transition-[transform,translate]"><Contact /> Contact</Link>
              </nav>

              <footer className="mt-auto text-center">
                Powered by <a href="https://nextjs.org/" className="link link-primary transition-[color]" target="_blank">Next.js</a>
              </footer>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
