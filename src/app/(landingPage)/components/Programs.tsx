"use client";

import { programs } from "@/data/services";

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20">
      <section className="wrapper">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Comprehensive fitness solutions for every goal and fitness level
          </p>
        </header>

        <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="group transition-300 rounded-xl border border-slate-200 bg-slate-50 p-8 hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-400/30"
            >
              <span className="transition-300 mb-4 flex w-max items-center justify-center text-5xl group-hover:scale-110">
                {program.icon}
              </span>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                {program.title}
              </h3>
              <p className="mb-4 text-slate-600">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-600"
                  >
                    <span className="font-bold text-orange-500">✓</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
}
