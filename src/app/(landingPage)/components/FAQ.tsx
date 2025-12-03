"use client";

import { FAQType, faqs } from "@/data/faq";
import { useToggle } from "@/hooks/useToggle";
import { cn } from "@/utilities/utils";
import { Plus } from "lucide-react";
import { FC } from "react";

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20">
      <section className="wrapper max-w-4xl">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-slate-600">
            Get answers to common questions about E-Sultan
          </p>
        </header>

        <main className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQCard key={idx} {...faq} />
          ))}
        </main>
      </section>
    </section>
  );
}

const FAQCard: FC<FAQType> = ({ answer, question }) => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <div className="transition-300 overflow-clip rounded-lg border border-slate-200 bg-white hover:border-orange-500">
      <button
        onClick={() => toggleOpen()}
        className="transition-300 flex w-full cursor-pointer items-center justify-between gap-2 px-5 py-4 hover:bg-slate-50"
      >
        <h3 className="text-left font-semibold text-slate-900">{question}</h3>
        <Plus
          className={cn(
            `transition-300 size-5 shrink-0 stroke-3 text-orange-500`,
            {
              "rotate-135": open,
            },
          )}
        />
      </button>

      <p
        className={cn(
          "transition-300 max-h-0 overflow-clip border-slate-200 bg-slate-50 px-5 leading-relaxed text-slate-600",
          { "max-h-96 border-t py-4": open },
        )}
      >
        {answer}
      </p>
    </div>
  );
};
