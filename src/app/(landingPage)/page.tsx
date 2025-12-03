import Hero from "./components/Hero";
import PainPointsBenefits from "./components/PainPoint";
import Programs from "./components/Programs";
import LeadTrainer from "./components/LeadTrainer";
import TrainersAuthority from "./components/Trainers";
import Welcome from "./components/Welcome";
import SocialProof from "./components/SocialProof";
import FacilityShowcase from "./components/Facilities";
import Pricing from "./components/Pricing";
import RiskReversal from "./components/RiskReversal";
import LocationContact from "./components/LocationContact";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <PainPointsBenefits />
      <Programs />
      <LeadTrainer />
      <TrainersAuthority />
      <SocialProof />
      <FacilityShowcase />
      <Pricing />
      <RiskReversal />
      <LocationContact />
      <FAQ />
      <CTA />
    </>
  );
}
