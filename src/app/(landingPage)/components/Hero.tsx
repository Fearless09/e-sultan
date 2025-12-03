"use client";

import { MessageCircle, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-56px)] items-center justify-center overflow-hidden">
      {/* Background Element */}
      <>
        <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50 to-blue-50" />
        <div className="absolute top-20 right-0 size-96 rounded-full bg-red-200/30 opacity-40 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-96 rounded-full bg-orange-200/30 opacity-40 blur-3xl" />
      </>

      <section className="wrapper relative z-1 grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2">
        <main className="animate-fade-in-up text-balance">
          <h1 className="mb-6 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
            <span className="text-slate-900">Transform Into Your</span>{" "}
            <span className="text-gradient">Best Self</span>
          </h1>
          <p className="max-w-lg text-xl leading-relaxed text-slate-600">
            E-Sultan is your ultimate destination for transformation. Premium
            facilities, expert trainers, and personalized programs designed for
            your success.
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center gap-2 text-base">
            <span className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-orange-500 text-orange-500"
                />
              ))}
            </span>
            <span className="text-slate-600">5-Star Rated</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-base text-slate-600">
            <span>✓ 500+ Members Trained</span>
            <span>✓ Certified Coaches</span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="transition-300 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30">
              <MessageCircle className="size-5" /> Chat on WhatsApp
            </button>
            <button className="transition-300 cursor-pointer rounded-lg border-2 border-orange-500 px-8 py-4 font-bold text-orange-500 hover:bg-orange-500/5">
              Start Free Trial
            </button>
          </div>

          {/* Stats */}
          {/* <div className="mt-8 grid grid-cols-3 gap-4 pt-8">
            <div>
              <p className="text-3xl font-bold text-red-600">500+</p>
              <p className="text-sm text-slate-600">Active Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-sm text-slate-600">Classes/Month</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">20+</p>
              <p className="text-sm text-slate-600">Expert Trainers</p>
            </div>
          </div> */}
        </main>

        {/* Right Image Placeholder */}
        <main className="relative aspect-square overflow-clip rounded-2xl drop-shadow-2xl drop-shadow-orange-500/25">
          <Image
            src="/athletic-man-training-in-modern-gym-1.jpg"
            alt="Hero athlete training"
            fill
            sizes="100%"
            className="object-cover object-center"
          />
        </main>
      </section>
    </section>
  );
}
