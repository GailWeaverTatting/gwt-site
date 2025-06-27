import Navigation from '@/components/Navigation';
import WelcomeSection from '@/components/WelcomeSection';
import AboutSection from '@/components/AboutSection';
import ShopPatternsSection from '@/components/ShopPatternsSection';
import FreePatternsSection from '@/components/FreePatternsSection';
import CustomerMapSection from '@/components/CustomerMapSection';
import VintageSpotlightSection from '@/components/VintageSpotlightSection';
import ColorBuilderSection from '@/components/ColorBuilderSection';
import SupportSection from '@/components/SupportSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WelcomeSection />
      <AboutSection />
      <ShopPatternsSection />
      <FreePatternsSection />
      <CustomerMapSection />
      <VintageSpotlightSection />
      <ColorBuilderSection />
      <SupportSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
