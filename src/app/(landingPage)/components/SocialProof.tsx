"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="overflow-clip bg-white px-5 py-20">
      <header className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
          Real Results from Real <span className="text-gradient">Members</span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-slate-600">
          See the transformations our members have achieved
        </p>
      </header>

      <main className="flex animate-[20s_linear_infinite_marquee] flex-nowrap gap-8 hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials, ...testimonials].map(
          (testimonial, idx) => (
            <div
              key={idx}
              className="transition-300 w-80 shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-6 even:border-orange-500/25 even:shadow-orange-500/10 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="relative size-16 overflow-clip rounded-full bg-slate-200">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover object-center"
                  />
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-semibold text-orange-500">
                    {testimonial.transformation}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-orange-400 stroke-orange-400"
                  />
                ))}
              </div>
            </div>
          ),
        )}
      </main>
    </section>
  );
}

const testimonials = [
  {
    name: "John Smith",
    transformation: "Lost 35 lbs in 3 months",
    quote:
      "E-Sultan changed my life. The trainers are incredibly knowledgeable and supportive. I've never felt better!",
    image: "/happy-male-member-testimonial.jpg",
  },
  {
    name: "Maria Garcia",
    transformation: "Added 15 lbs of muscle",
    quote:
      "The personalized program worked perfectly for me. Results came faster than expected. Highly recommend!",
    image: "/happy-female-member-testimonial.jpg",
  },
  {
    name: "David Lee",
    transformation: "Built 6-pack abs",
    quote:
      "Best investment I ever made in myself. The community is amazing and the trainers are true experts.",
    image: "/happy-fit-male-testimonial.jpg",
  },
  {
    name: "Jessica Brown",
    transformation: "Improved strength by 40%",
    quote:
      "From complete beginner to feeling strong and confident. E-Sultan made the journey enjoyable!",
    image: "/happy-confident-female-testimonial.jpg",
  },
];
