"use client";

import { headCoach } from "@/data/trainers";
import Image from "next/image";

export default function LeadTrainer() {
  const { bio, credentials, img, mission, name, title } = headCoach;

  return (
    <section id="trainers" className="bg-slate-50 py-20">
      <section className="wrapper">
        <h2 className="mb-16 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
          Meet Your <span className="text-gradient">Lead Coach</span>
        </h2>

        <main className="grid items-center gap-12 md:grid-cols-2">
          <main className="relative aspect-square overflow-hidden rounded-xl bg-slate-200 drop-shadow-2xl drop-shadow-orange-500/15">
            <Image
              src={img}
              alt="Lead Coach"
              fill
              sizes="100%"
              className="object-cover object-center"
            />
          </main>

          <main>
            <h3 className="mb-2 text-3xl font-bold">Coach {name}</h3>
            <p className="font-semibold text-orange-500">{title}</p>

            <p className="mt-6 leading-relaxed text-slate-600">{bio}</p>

            <div className="mt-6 space-y-3">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <credential.icon className="mt-1 size-5 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-bold">{credential.title}</p>
                    <p className="text-sm text-slate-600">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-600 italic">
              &ldquo;{mission}&rdquo;
            </p>
          </main>
        </main>
      </section>
    </section>
  );
}
