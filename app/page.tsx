import Hero from "@/Components/hero";
import TrustedTech from "@/Components/trustedtech";
import Technologies from "@/Components/technologies";
import Services from "@/Components/services";
import SolutionsPage from "@/Components/solutions";
import Vision from "@/Components/vision";
import Industries from "@/Components/industries";
import Projects from "@/Components/project";
import CTA from "@/Components/cta";

export default function Home() {
  return (
    <main>

      <Hero />

      <TrustedTech/>

      <Technologies />

      <Services />
      <SolutionsPage/>
      <Vision />
      <Industries />
      <Projects />
      <CTA />

    </main>
  );
}