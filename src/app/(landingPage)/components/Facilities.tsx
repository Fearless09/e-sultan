"use client";

import { facilities } from "@/data/services";
import Image from "next/image";

export default function FacilityShowcase() {
  return (
    <section className="bg-slate-50 py-20">
      <section className="wrapper">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Everything you need for a complete fitness transformation
          </p>
        </header>

        <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="group transition-300 relative overflow-clip rounded-xl hover:drop-shadow-xl"
            >
              <div className="relative aspect-square overflow-clip bg-slate-200">
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.name}
                  fill
                  sizes="100%"
                  className="transition-300 object-cover group-hover:scale-110"
                />
              </div>

              <div className="from-background/80 transition-300 absolute inset-0 z-1 flex flex-col justify-end rounded-xl bg-linear-to-t via-transparent to-transparent p-4 group-hover:opacity-100 sm:opacity-0">
                <h3 className="mb-1 font-semibold">{facility.name}</h3>
                <p className="text-sm text-slate-800">{facility.desc}</p>
              </div>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
}
