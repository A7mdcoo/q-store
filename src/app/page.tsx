import HeroSection from '@/components/sections/HeroSection';
import FeaturedDeals from '@/components/sections/FeaturedDeals';
import CategoriesSection from '@/components/sections/CategoriesSection';
import FlashSale from '@/components/sections/FlashSale';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import SocialProof from '@/components/sections/SocialProof';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDeals />
      <CategoriesSection />
      <FlashSale />
      <WhyChooseUs />
      <SocialProof />
      <Testimonials />
      <CTASection />
    </>
  );
}
