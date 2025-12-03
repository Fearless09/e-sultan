import { Award, Users, Zap } from "lucide-react";

export const headCoach = {
  img: "/professional-fitness-coach-trainer-certified-muscu.jpg",
  name: "Muyideen Babatunde",
  title: "Head Coach & Founder",
  bio: "With over 10 years of experience in the fitness industry, Coach Muyideen has trained over 500 clients, transforming bodies and changing lives. Specializing in fat loss, strength training, and functional conditioning.",
  mission:
    "My mission is to help beginners and busy professionals achieve results they never thought possible. Everyone deserves a healthy, strong body.",
  credentials: [
    {
      icon: Award,
      title: "Certified Personal Trainer (ISSA)",
      description: "nternational Sports Sciences Association",
    },
    {
      icon: Zap,
      title: "Nutrition Specialist",
      description: "Evidence-based nutrition coaching",
    },
    {
      icon: Users,
      title: "Rehab & Conditioning Expert",
      description: "Specializing in injury prevention",
    },
  ],
};

export const trainers = [
  {
    name: "Alex Johnson",
    title: "Head Trainer & Founder",
    specialty: "Strength & Conditioning",
    credentials: "NASM-CPT, ISSN, 15+ years experience",
    image: "/professional-male-fitness-trainer.png",
  },
  {
    name: "Sarah Williams",
    title: "Senior Coach",
    specialty: "Nutrition & Weight Loss",
    credentials: "RDN, ISSN-SNS, Certified Nutritionist",
    image: "/professional-female-fitness-coach.png",
  },
  {
    name: "Marcus Brown",
    title: "Combat Sports Specialist",
    specialty: "Boxing & MMA",
    credentials: "Former Pro Boxer, NASM-CPT, 12+ years",
    image: "/professional-male-mma-trainer.jpg",
  },
  {
    name: "Emma Davis",
    title: "Wellness Coach",
    specialty: "Yoga & Flexibility",
    credentials: "RYT-500, Pilates Instructor, Wellness Specialist",
    image: "/professional-female-yoga-instructor.png",
  },
];
