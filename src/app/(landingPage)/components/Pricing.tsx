"use client";

import { plans } from "@/data/plans";
import { cn } from "@/utilities/utils";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <section className="wrapper">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Flexible <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Choose the perfect plan for your fitness journey
          </p>
        </header>

        <main className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                `transition-300 rounded-xl p-6 md:p-8`,
                "border border-slate-200 bg-slate-50 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/20",
                {
                  "border-2 border-orange-600 bg-linear-to-br from-orange-50 to-red-50 shadow-xl hover:border-orange-500 md:scale-105":
                    plan.popular,
                },
              )}
            >
              {plan.popular && (
                <div className="mb-4 inline-block rounded-full bg-orange-600 px-4 py-1 text-sm font-bold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="mb-4 text-slate-600">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-600">
                  {plan.price}
                </span>
                <span className="text-slate-600">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-lg bg-red-100">
                      <Check className="size-3 stroke-4 text-orange-600" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  `transition-300 w-full cursor-pointer rounded-lg border-2 px-6 py-3 font-bold`,
                  "border-slate-300 text-slate-900 hover:border-orange-600 hover:text-orange-600",
                  {
                    "border-orange-500 bg-orange-500 text-white hover:border-orange-600 hover:bg-orange-600 hover:text-white":
                      plan.popular,
                  },
                )}
              >
                Get Started
              </button>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
}
