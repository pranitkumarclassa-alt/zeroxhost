'use client';

import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PricingContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'games';

  return (
    <div className="pt-20">
      <Pricing initialCategory={category} />
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <LoadingScreen />
      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen" />}>
          <PricingContent />
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}