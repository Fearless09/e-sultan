"use client";

import { trainers } from "@/data/trainers";
import Image from "next/image";

export default function TrainersAuthority() {
  return (
    <section className="bg-slate-50 py-20">
      <section className="wrapper">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Meet Our Expert <span className="text-gradient">Trainers</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Certified professionals with extensive experience in fitness,
            nutrition, and wellness
          </p>
        </header>

        <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="transition-300 overflow-clip rounded-xl border border-slate-200 bg-white hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-clip bg-slate-200">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  fill
                  sizes="100%"
                  className="object-cover object-center"
                />
              </div>

              <div className="px-4 pt-2 pb-6">
                <h3 className="mb-0.5 text-xl font-semibold text-slate-900">
                  {trainer.name}
                </h3>
                <p className="mb-2 font-semibold text-red-600">
                  {trainer.title}
                </p>
                <p className="mb-2 text-sm text-slate-600">
                  {trainer.specialty}
                </p>
                <p className="max-w-max rounded bg-slate-100 p-2 text-xs text-slate-500">
                  {trainer.credentials}
                </p>
              </div>
            </div>
          ))}
        </main>

        {/* Authority Section */}
        <main className="mt-20 rounded-xl border border-slate-200 bg-white px-5 py-12">
          <h3 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Why Trust E-Sultan?
          </h3>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-slate-100 px-4 py-8">
                <p className="mb-2 text-4xl font-bold text-red-600">
                  {stat.number}
                </p>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </main>
      </section>
    </section>
  );
}

const stats = [
  { number: "50+", label: "Certifications" },
  { number: "200+", label: "Transformations" },
  { number: "98%", label: "Member Satisfaction" },
  { number: "15+", label: "Years Combined Experience" },
];
