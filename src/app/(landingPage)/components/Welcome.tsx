"use client";

export default function Welcome() {
  return (
    <section className="bg-white py-20">
      <section className="wrapper">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Welcome to <span className="text-gradient">E-Sultan</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            A premier fitness destination where elite athletes and fitness
            enthusiasts unite to achieve their transformation goals
          </p>
        </header>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="transition-300 rounded-xl border border-slate-200 bg-slate-50 p-6 hover:border-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 md:p-8"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}

const features = [
  {
    icon: "🏢",
    title: "Premium Facilities",
    desc: "State-of-the-art equipment and modern gym infrastructure",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Coaching",
    desc: "Certified trainers with years of industry experience",
  },
  {
    icon: "🎯",
    title: "Personalized Plans",
    desc: "Customized programs tailored to your specific goals",
  },
];
