"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Header(): React.JSX.Element {
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-bg backdrop-blur-sm border-b border-header-border">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2">
            <Image src={theme === "dark" ? "/logo/whiteName.svg" : "/logo/blackName.svg"} alt="Logo" width={160} height={48} className="block" priority />
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link href="#home" className="text-foreground hover:text-blue-400 transition-colors text-base font-normal">Home</Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#about" className="text-foreground hover:text-blue-400 transition-colors text-base font-normal">About</Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#lab" className="text-foreground hover:text-blue-400 transition-colors text-base font-normal">Featured Projects</Link>
            </li>
            <li className="m-0 p-0">
              <button
                onClick={toggle}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-subtle hover:bg-subtle-hover border border-border-light transition"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </li>
            <li className="m-0 p-0">
              <a
                href="/YORO, LEONARDO ANTERO - BSIT  - RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-subtle hover:bg-subtle-hover border border-purple-500/30 hover:border-purple-500/60 transition text-sm font-medium text-foreground"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}