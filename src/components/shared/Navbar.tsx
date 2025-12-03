"use client";

import { navs } from "@/data/nav_data";
import useClose from "@/hooks/useClose";
import { useToggle } from "@/hooks/useToggle";
import { cn } from "@/utilities/utils";
import { Dumbbell, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, toggleOpen] = useToggle(false);
  const mobileRef = useClose(() => toggleOpen(false));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-lg">
      <section className="wrapper relative">
        <nav className="flex items-center justify-between py-2.5">
          <Link href={"/"} className="flex items-center gap-1">
            <span className="flex size-9 items-center justify-center rounded-md bg-linear-to-br from-red-600 to-orange-500 text-white">
              <Dumbbell className="size-5" />
            </span>
            <span className="hidden text-lg font-semibold text-slate-900 sm:inline">
              E-Sultan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navs.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className="transition-300 font-medium text-slate-600 hover:text-orange-600"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <button className="transition-300 hidden cursor-pointer items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 md:flex">
              <MessageCircle className="size-4.5" />
              Chat on WhatsApp
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => toggleOpen()}
              className="cursor-pointer p-1.5 text-slate-900 md:hidden [&_svg]:size-5"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <main
          className={cn(
            "transition-300 absolute inset-x-0 top-[calc(100%+2px)] flex max-h-0 flex-col gap-4 overflow-clip border-slate-100 bg-white/95 px-4 backdrop-blur-lg ease-linear md:hidden",
            { "max-h-100 border-b py-4": open },
          )}
          ref={mobileRef}
        >
          {navs.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="transition-300 font-medium text-slate-600 hover:text-orange-600"
              onClick={() => toggleOpen(false)}
            >
              {nav.name}
            </Link>
          ))}

          <button className="transition-300 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-2 font-semibold text-white hover:bg-orange-600">
            <MessageCircle className="size-4.5" />
            Chat on WhatsApp
          </button>
        </main>
      </section>
    </header>
  );
}
