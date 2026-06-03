import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AdvancedFeatures from '@/components/AdvancedFeatures';
import Locations from '@/components/Locations';
import Pricing from '@/components/Pricing';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import WhyZerox from '@/components/WhyZerox';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import FAQSchema from '@/components/FAQSchema';

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <FAQSchema />
      <LoadingScreen />
      
      <div className="relative z-10 bg-transparent">
        {/* Global background glows - Halix Style */}
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
          {/* Main background - let VideoBackground handle the base color */}
          
          {/* Dynamic Glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute top-[40%] right-[-5%] w-[40%] h-[40%] bg-blue-400/5 blur-[120px] rounded-full animate-pulse" />
          
          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </div>
        
        <AnnouncementBanner />
        <Navbar />
        <Hero />
        <Features />
        <WhyZerox />
        <Pricing />
        <Calculator />
        <Reviews />
        <FAQ />
        <AdvancedFeatures />
        <Locations />
        <Footer />
      </div>
    </main>
  );
}
