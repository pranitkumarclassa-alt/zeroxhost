import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pseoPages } from '@/lib/pseo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import Features from '@/components/Features';
import Locations from '@/components/Locations';
import WhyZerox from '@/components/WhyZerox';
import { MapPin, Zap, Shield, Cpu, ChevronRight, MessageSquare, Star } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pseoPages.find((p) => p.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | ZeroXHost`,
    description: page.description,
    keywords: [page.keyword, 'VPS Hosting', 'India VPS', 'ZeroXHost'],
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function PSEOPage({ params }: Props) {
  const { slug } = await params;
  const page = pseoPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": page.title,
    "description": page.description,
    "brand": {
      "@type": "Brand",
      "name": "ZEROX HOST"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://zeroxhost.space/${slug}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />
      <Navbar />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -top-48 -left-48" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-8">
                  <MapPin size={12} />
                  Best {page.keyword}
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
                  {page.title.split(' ').map((word, i) => (
                    <span key={i} className={i > 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl">
                  {page.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link href="#pricing" className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all hover:scale-[1.02]">
                    Get Started Now
                  </Link>
                  <Link href="/network" className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                    Test Latency
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full lg:w-auto">
                <div className="grid grid-cols-2 gap-4">
                  {page.features.map((feature, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:border-blue-500/30 transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {i === 0 ? <Zap className="text-blue-500" /> : i === 1 ? <Shield className="text-blue-500" /> : i === 2 ? <Cpu className="text-blue-500" /> : <Star className="text-blue-500" />}
                      </div>
                      <p className="text-white font-bold text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content Section */}
        <section className="py-24 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
              <div>
                <h2 className="text-4xl font-black text-white mb-8">
                  Why choose ZeroXHost for <span className="text-blue-500">{page.keyword}?</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-400 text-lg leading-relaxed">
                    ZeroXHost is built for performance and reliability. Our infrastructure in {page.location || 'India'} is optimized to provide the lowest possible latency and maximum uptime for your critical workloads.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Whether you are hosting a high-traffic website, a complex database, or a lag-sensitive game server, our {page.keyword} solutions are designed to scale with your needs.
                  </p>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[3rem] backdrop-blur-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-gray-800" />
                    ))}
                  </div>
                  <div>
                    <div className="flex text-yellow-500 gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-white font-bold text-xs">Trusted by 5,000+ Users</p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-lg leading-relaxed mb-8">
                  "The latency from {page.location || 'India'} is incredible. I've tried many providers, but ZeroXHost is the only one that truly delivers on performance and support."
                </p>
                <p className="text-blue-500 font-black uppercase tracking-widest text-[10px]">
                  — Harshvardhan S., CTO at TechNode
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing">
          <Pricing />
        </section>

        <WhyZerox />
        
        <Features />

        {/* FAQs */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-16 text-center flex items-center justify-center gap-4">
              <MessageSquare className="text-blue-500" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {page.faqs.map((faq, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Locations />
        
        <Footer />
      </div>
    </main>
  );
}
