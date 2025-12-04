"use client";

import { whatsAppUrl } from "@/data/nav_data";
import Link from "next/link";

export default function RiskReversal() {
  return (
    <section className="bg-slate-50 px-4 py-20">
      <section className="wrapper max-w-4xl rounded-xl border-2 border-orange-500 bg-white px-6 py-8 text-center md:p-12">
        <h2 className="mb-6 text-4xl font-bold text-slate-900">
          Zero Risk <span className="text-gradient">Guarantee</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600">
          We&apos;re so confident you&apos;ll love E-Sultan Fitness that
          we&apos;re removing all the barriers to getting started.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {guarantee.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6"
            >
              <div className="mb-3 text-3xl font-bold text-orange-500">✓</div>
              <h4 className="mb-2 font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href={whatsAppUrl}
          className="transition-300 cursor-pointer rounded-lg bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/30"
        >
          Start Your 7-Day Trial
        </Link>

        <p className="mt-8 text-sm text-slate-600 italic">
          Our goal is your success. If you don&apos;t see results within 30
          days, we&apos;ll work with you to adjust your program at no extra
          cost.
        </p>
      </section>
    </section>
  );
}

const guarantee = [
  {
    title: "7-Day Trial",
    desc: "Full access to everything. No credit card needed.",
  },
  {
    title: "Cancel Anytime",
    desc: "Month-to-month membership. No long-term contracts.",
  },
  {
    title: "Beginner Friendly",
    desc: "Every workout can be modified to your fitness level.",
  },
];
