import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparisons } from '@/lib/comparisons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, X, Minus, ChevronRight, Scale, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);

  if (!comparison) {
    return {
      title: 'Comparison Not Found | ZeroXHost',
    };
  }

  return {
    title: `${comparison.title} | ZeroXHost Comparisons`,
    description: comparison.description,
    alternates: {
      canonical: `/comparisons/${slug}`,
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  const [option1, option2] = comparison.title.split(' vs ');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zeroxhost.space"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Comparisons",
        "item": "https://zeroxhost.space/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": comparison.title,
        "item": `https://zeroxhost.space/comparisons/${slug}`
      }
    ]
  };

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      
      <div className="relative z-10">
        {/* Breadcrumbs */}
        <div className="pt-32 pb-8 px-6">
          <div className="max-w-5xl mx-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-blue-500">Comparisons</span>
          </div>
        </div>

        <section className="pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <header className="mb-16 text-center">
              <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">
                <Scale size={32} className="text-blue-500" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-8">
                {comparison.title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                {comparison.description}
              </p>
            </header>

            {/* Comparison Table */}
            <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-3xl mb-16">
              <div className="grid grid-cols-3 p-8 md:p-12 border-b border-white/5 bg-white/[0.01]">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Feature</div>
                <div className="text-center text-xl font-black text-white">{option1}</div>
                <div className="text-center text-xl font-black text-white">{option2}</div>
              </div>

              <div className="divide-y divide-white/5">
                {comparison.items.map((item, i) => (
                  <div key={i} className="grid grid-cols-3 p-8 md:p-12 items-center hover:bg-white/[0.01] transition-colors">
                    <div className="text-sm font-bold text-gray-400">{item.feature}</div>
                    <div className={`text-center flex flex-col items-center gap-3 ${item.winner === 1 ? 'text-blue-500' : 'text-gray-500'}`}>
                      <span className="text-xs font-bold">{item.option1}</span>
                      {item.winner === 1 ? <Check size={20} /> : item.winner === 'tie' ? <Minus size={20} /> : <X size={20} />}
                    </div>
                    <div className={`text-center flex flex-col items-center gap-3 ${item.winner === 2 ? 'text-blue-500' : 'text-gray-500'}`}>
                      <span className="text-xs font-bold">{item.option2}</span>
                      {item.winner === 2 ? <Check size={20} /> : item.winner === 'tie' ? <Minus size={20} /> : <X size={20} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verdict */}
            <div className="bg-blue-600/10 border border-blue-500/20 p-12 rounded-[3rem] mb-16">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-4">
                <Check className="text-blue-500" />
                The Verdict
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                {comparison.verdict}
              </p>
            </div>

            {/* FAQs Section */}
            {comparison.faqs && (
              <section className="mb-20">
                <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
                  <MessageSquare className="text-blue-500" />
                  Related FAQs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {comparison.faqs.map((faq, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-3xl">
                      <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                      <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center gap-3 px-12 py-6 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all hover:scale-[1.02]">
                View All Hosting Plans
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
