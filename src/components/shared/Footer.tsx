"use client";

import { footerLinks } from "@/data/nav_data";
import { Dumbbell } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 pt-16 pb-5">
      <section className="wrapper">
        <main className="mb-12 flex flex-wrap justify-between gap-12">
          <div className="flex1 w-full max-w-[300px]">
            <Link href={"/"} className="mb-4 flex items-center gap-1.5">
              <span className="flex size-10 items-center justify-center rounded-md bg-linear-to-br from-red-600 to-orange-500 text-white">
                <s className="size-6" />
              </span>
              <span className="text-lg font-semibold text-white">E-Sultan</span>
            </Link>

            <p className="text-slate-400">
              Transform your body and mind with E-Sultan. Your journey to peak
              fitness starts here.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, lists], index) => (
            <div key={index} className="w-full max-w-[180px]">
              <h4 className="mb-4 font-semibold text-white capitalize">
                {title}
              </h4>
              <ul className="space-y-2 text-slate-300">
                {lists.map((list, lidx) => (
                  <li key={lidx}>
                    {list.href ? (
                      <>
                        <Link
                          href={list.href}
                          aria-label={list.name}
                          className="transition-300 flex gap-2 hover:text-orange-500"
                        >
                          {typeof list.icon === "string" && (
                            <span>{list.icon}</span>
                          )}
                          {list.name}
                        </Link>
                      </>
                    ) : (
                      <p aria-label={list.name} className="flex gap-2">
                        {typeof list.icon === "string" && (
                          <span>{list.icon}</span>
                        )}
                        <span>{list.name}</span>
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>

        {/* bottom section */}
        <main className="border-t border-slate-700 pt-5 text-center">
          <p className="mb-4 text-slate-300">
            &copy; {new Date().getFullYear()} E-Sultan Fitness. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
            {qualifitions.map((item, index) => (
              <React.Fragment key={index}>
                <span>✓ {item}</span>
                {index + 1 < qualifitions.length && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </main>
      </section>
    </footer>
  );
}

const qualifitions = [
  "Licensed Facility",
  "Certified Trainers",
  "Member Satisfaction Guarantee",
];
