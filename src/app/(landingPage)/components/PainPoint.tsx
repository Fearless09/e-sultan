"use client";

export default function PainPointsBenefits() {
  return (
    <section className="bg-slate-50 py-20">
      <section className="wrapper">
        {/* Problem Section */}
        <section className="mb-20">
          <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
            Common Pain Points We Solve
          </h2>

          <main className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {painPoints.map((point, idx) => (
              <div
                key={idx}
                className="transition-300 rounded-xl border-2 border-red-200 bg-white p-6 hover:border-red-400/80 md:p-8"
              >
                <div className="mb-4 text-5xl">{point.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">
                  {point.title}
                </h3>
              </div>
            ))}
          </main>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
            Why Choose E-Sultan?
          </h2>
          <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="transition-300 rounded-xl border border-slate-200 bg-white p-8 hover:border-orange-300/50 hover:shadow-lg hover:shadow-orange-300/30"
              >
                <h3 className="mb-2 text-xl font-bold text-red-600">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </main>
        </section>
      </section>
    </section>
  );
}

const painPoints = [
  { title: "Tired of Inconsistent Results?", icon: "😤" },
  { title: "Lack of Expert Guidance?", icon: "❓" },
  { title: "No Accountability or Support?", icon: "👥" },
];

const benefits = [
  {
    title: "Proven Transformation Results",
    desc: "Members see results in 30 days or less",
  },
  {
    title: "Expert Personalized Support",
    desc: "Dedicated coaches guiding every step",
  },
  {
    title: "Community & Motivation",
    desc: "Supportive environment that pushes you forward",
  },
  {
    title: "Flexible Scheduling",
    desc: "Classes and training sessions fit your lifestyle",
  },
  {
    title: "Science-Based Programs",
    desc: "Programs designed using latest fitness research",
  },
  {
    title: "Complete Health Transformation",
    desc: "From fitness to nutrition to mental wellness",
  },
];
