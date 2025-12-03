"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function LocationContact() {
  return (
    <section id="contact" className="bg-white py-20">
      <section className="wrapper">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Visit us in the <span className="text-gradient">Philippines</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Located in the heart of the city with state-of-the-art facilities
          </p>
        </header>

        <main className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Map/Location */}
          <main className="h-96 min-h-96 overflow-hidden rounded-xl border border-slate-200 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30894.25135322261!2d121.00381892690548!3d14.554488599275592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0ed01%3A0x2b066ed57830cace!2sMakati%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1764723602788!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </main>

          {/* Contact Information */}
          <main className="space-y-6">
            <div className="space-y-3">
              <h3 className="mb-4 text-2xl font-bold">Location & Hours</h3>

              {locations.map((loc, index) => (
                <div key={index} className="flex items-start gap-3">
                  <loc.icon className="mt-1 size-5 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-semibold">{loc.title}</p>
                    <div className="space-y-1 text-slate-600">
                      {loc.details.map((detail, dindex) => (
                        <p key={dindex}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-slate-200 pt-6">
              <h4 className="font-bold">Get In Touch</h4>

              {contacts.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="transition-300 flex items-center gap-3 hover:text-orange-500"
                  title={contact.title}
                  aria-label={contact.title}
                >
                  <contact.icon className="size-5 text-orange-500" />
                  <span>{contact.detail}</span>
                </Link>
              ))}
            </div>
          </main>
        </main>
      </section>
    </section>
  );
}

const locations = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Fitness Street, Makati City, Manila, Philippines"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 6:00 AM - 10:00 PM", "Sat - Sun: 7:00 AM - 8:00 PM"],
  },
];

const contacts = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+63 (0)XXX-XXXX",
    href: "tel:+63XXXXXXXXX",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "WhatsApp",
    href: "https://wa.me/63XXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "hello@esultanfitness.com",
    href: "mailto:hello@esultanfitness.com",
  },
];
