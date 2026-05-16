import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ProblemStrip } from "@/components/sections/ProblemStrip";
import { Pillars } from "@/components/sections/Pillars";
import { CompareTable } from "@/components/sections/CompareTable";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LocalDistribution } from "@/components/sections/LocalDistribution";
import { Founder } from "@/components/sections/Founder";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd } from "@/components/JsonLd";
import { productSchemas, faqPageSchema } from "@/lib/schema";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <div id="hero-end-sentinel" aria-hidden="true" />
        <ProblemStrip />
        <Pillars />
        <CompareTable />
        <Pricing />
        <HowItWorks />
        <LocalDistribution />
        <Founder />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <JsonLd data={[...productSchemas(), faqPageSchema()]} />
    </>
  );
}
