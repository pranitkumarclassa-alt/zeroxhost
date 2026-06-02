import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, getBlogPost, getRelatedPosts } from '@/lib/blogs';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock } from 'lucide-react';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog post not found | ZEROX HOST',
    };
  }

  return {
    title: `${post.title} | ZEROX HOST Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />

      <div className="relative z-10">
        <article className="px-6 pt-36 pb-20">
          <div className="max-w-5xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs font-black uppercase tracking-[0.22em] transition-colors mb-10">
              <ArrowLeft size={14} />
              Back to blog
            </Link>

            <header className="mb-14">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.24em]">
                  <BookOpen size={12} />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 text-[10px] font-black uppercase tracking-[0.24em]">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.92] tracking-tighter font-montserrat mb-8">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl font-medium">{post.excerpt}</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
              <aside className="lg:sticky lg:top-32 h-fit rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                <div className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-400 mb-5">Topics</div>
                <div className="space-y-3">
                  {post.topics.map((topic) => (
                    <a key={topic} href={`#${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                      <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                      <span className="font-bold">{topic}</span>
                    </a>
                  ))}
                </div>
              </aside>

              <div className="space-y-5">
                {post.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                    className="scroll-mt-28 rounded-2xl bg-black/25 border border-white/10 p-6 md:p-8"
                  >
                    <div className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">{section.heading}</h2>
                    <p className="text-gray-400 leading-8 font-medium">{section.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="px-6 pb-24">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-white text-sm font-black uppercase tracking-[0.25em]">Related guides</h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:border-blue-500/30 hover:bg-blue-600/[0.05] transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-lg font-black text-white tracking-tight leading-tight">{relatedPost.title}</h3>
                      <ArrowRight size={16} className="mt-1 shrink-0 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </main>
  );
}
