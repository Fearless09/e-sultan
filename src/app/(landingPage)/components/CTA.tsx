"use client";

import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-20">
      <section className="wrapper max-w-4xl text-center">
        <h2 className="mb-6 text-4xl leading-tight font-black text-balance sm:text-5xl md:text-6xl">
          Your Transformation <span className="text-gradient">Starts Now</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          Stop wishing for a better body. Start building one. Join 500+ members
          who've already transformed their lives with E-Sultan Fitness.
        </p>

        <div className="mb-8 flex justify-center">
          <button className="transition-300 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-500 px-10 py-4 font-bold text-white hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30">
            <MessageCircle className="size-5" />
            Start Free Trial
          </button>
        </div>

        <p className="text-sm text-slate-600">
          Response time: Usually within minutes. Available 6 AM - 10 PM (Ph
          time)
        </p>
      </section>
    </section>
  );
}
