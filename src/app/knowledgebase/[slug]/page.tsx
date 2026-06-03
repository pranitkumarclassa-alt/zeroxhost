import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { kbArticles } from '@/lib/knowledgebase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Calendar, Clock, ChevronRight, MessageSquare, Share2 } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = kbArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | ZeroXHost',
    };
  }

  return {
    title: `${article.title} | ZeroXHost Knowledge Base`,
    description: article.excerpt,
    alternates: {
      canonical: `/knowledgebase/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  };
}

export default async function KBArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = kbArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.excerpt,
    "image": "https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048",
    "author": {
      "@type": "Organization",
      "name": "ZEROX HOST"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ZEROX HOST",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"
      }
    },
    "datePublished": article.lastUpdated,
    "dateModified": article.lastUpdated
  };

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
        "name": "Knowledge Base",
        "item": "https://zeroxhost.space/knowledgebase"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.category,
        "item": `https://zeroxhost.space/knowledgebase?category=${article.category}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": article.title,
        "item": `https://zeroxhost.space/knowledgebase/${slug}`
      }
    ]
  };

  const faqSchema = article.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Navbar />
      
      <div className="relative z-10">
        {/* Breadcrumbs */}
        <div className="pt-32 pb-8 px-6">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/knowledgebase" className="hover:text-white transition-colors">Knowledge Base</Link>
            <ChevronRight size={12} />
            <span className="text-blue-500">{article.category}</span>
          </div>
        </div>

        <article className="pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-16">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-xs font-bold">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-blue-500" />
                  Last Updated: {article.lastUpdated}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-blue-500" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-blue-500" />
                  {article.category}
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="space-y-12 mb-20">
              {article.content.map((section, i) => (
                <section key={i} className="prose prose-invert max-w-none">
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-4">
                    <span className="text-blue-600">0{i + 1}.</span>
                    {section.heading}
                  </h2>
                  <div className="text-gray-400 text-lg leading-relaxed bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-3xl">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>

            {/* FAQs Section (SEO) */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
                  <MessageSquare className="text-blue-500" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-3xl">
                      <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                      <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-20">
              {article.topics.map((topic) => (
                <span key={topic} className="px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                  #{topic}
                </span>
              ))}
            </div>

            {/* Share & Support */}
            <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-bold text-xs hover:bg-white/[0.05] transition-all">
                  <Share2 size={14} className="text-blue-500" />
                  Share Article
                </button>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-500 font-bold mb-2">Still need help?</p>
                <Link href="/contact" className="text-blue-500 font-black uppercase tracking-widest text-[10px] hover:text-blue-400 transition-colors">
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
