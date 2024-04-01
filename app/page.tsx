
import HeroSection from "@/components/hero/hero";
import Faq from "@/components/hero/faq";
import Course from "@/components/hero/couse";
export default function HomePage() {
  return (
 <section className="container mx-auto mt-4">
  <HeroSection />
  <Course />
 <Faq />
 </section>
 
  );
}
