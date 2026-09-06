import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CompanyIntro } from '@/components/sections/CompanyIntro';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { IndustriesServed } from '@/components/sections/IndustriesServed';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { Infrastructure } from '@/components/sections/Infrastructure';
import { QualityAssurance } from '@/components/sections/QualityAssurance';
import { WhyBlueShield } from '@/components/sections/WhyBlueShield';
import { ProjectsPreview } from '@/components/sections/ProjectsPreview';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { QuoteCTA } from '@/components/sections/QuoteCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CompanyIntro />
      <SolutionsGrid />
      <FeaturedProducts />
      <IndustriesServed />
      <HowWeWork />
      <Infrastructure />
      <QualityAssurance />
      <WhyBlueShield />
      <ProjectsPreview />
      <TestimonialsCarousel />
      <QuoteCTA />
    </>
  );
}
