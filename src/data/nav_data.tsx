export const whatsAppUrl = "https://wa.me/639759807991";

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
  { name: "WhatsApp", href: whatsAppUrl },
  {
    name: "Instagram",
    href: "https://www.instagram.com/esultanfitness?igsh=MWN5c3B5YjVucnNyMA==",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1HU9LtDXAp/?mibextid=wwXIfr",
  },
  // { name: "X (formerly, Twitter)", href: "#" },
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
    { icon: "✉️", name: "esultan@gmail.com", href: "mailto:esultan@gmail.com" },
    { icon: "📱", name: "+63 975 980 7991", href: "tel:+639759807991" },
    {
      icon: "📍",
      name: "Makati City, Manila, Philippines",
    },
  ],
  // legal: [
  //   { name: "Privacy Policy", href: "#" },
  //   { name: "Terms of Service", href: "#" },
  //   { name: "Membership Agreement", href: "#" },
  // ],
  // resources: [
  //   { name: "Blog & Tips", href: "#" },
  //   { name: "Fitness Guide", href: "#" },
  //   { name: "Nutrition Calculator", href: "#" },
  // ],
  // membership: [
  //   { name: "My Account", href: "#" },
  //   { name: "Class Schedule", href: "#" },
  //   { name: "Billing & Support", href: "#" },
  // ],
  "follow us": socialMedias,
};
