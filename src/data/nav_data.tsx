export type Nav = {
  name: string;
  href: string;
};

export const navs: Nav[] = [
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export const socialMedias = [
  { name: "WhatsApp", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "X (formerly, Twitter)", href: "#" },
];

export type FooterLinks = {
  [key: string]: {
    name: string;
    href?: string;
    icon?: string;
  }[];
};

export const footerLinks: FooterLinks = {
  "quick links": navs,
  "get in touch": [
    { icon: "✉️", name: "nfo@e-sultan.com", href: "mailto:info@e-sultan.com" },
    { icon: "📱", name: "(555) 123-4567", href: "tel:+555" },
    {
      icon: "📍",
      name: "123 Fitness Street New York, NY 10001",
    },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Membership Agreement", href: "#" },
  ],
  resources: [
    { name: "Blog & Tips", href: "#" },
    { name: "Fitness Guide", href: "#" },
    { name: "Nutrition Calculator", href: "#" },
  ],
  membership: [
    { name: "My Account", href: "#" },
    { name: "Class Schedule", href: "#" },
    { name: "Billing & Support", href: "#" },
    { name: "", href: "#" },
  ],
  "follow us": socialMedias,
};
