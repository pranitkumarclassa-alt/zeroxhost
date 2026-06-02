import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogCategories, blogPosts } from '@/lib/blogs';
import { ArrowRight, BookOpen, Clock, Layers, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | ZEROX HOST',
  description: 'VPS, Minecraft hosting, web hosting, and developer guides from ZEROX HOST.',
};

const featuredPosts = blogPosts.filter((post) => post.featured);

export default function BlogPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />

      <div className="relative z-10">
        <section className="relative px-6 pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-[-1] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_65%,transparent_100%)] opacity-30" />

          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <BookOpen size={13} />
                Hosting Knowledge Base
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter font-montserrat mb-8">
                Guides for faster, safer hosting.
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl font-medium">
                Practical articles for VPS hosting, Minecraft servers, websites, and developer workloads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-blue-500/40 hover:bg-blue-600/[0.06] transition-all"
                >
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-400">{post.category}</span>
                    <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-2xl font-black text-white tracking-tight mb-4">{post.title}</h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                  <Layers size={13} />
                  All Topics
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-montserrat">Browse every guide</h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <Search size={14} />
                {blogPosts.length} articles
              </div>
            </div>

            <div className="space-y-12">
              {blogCategories.map((category) => {
                const posts = blogPosts.filter((post) => post.category === category);

                return (
                  <div key={category}>
                    <div className="flex items-center gap-4 mb-5">
                      <h3 className="text-white text-sm font-black uppercase tracking-[0.25em]">{category}</h3>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {posts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="group rounded-2xl bg-black/25 border border-white/10 p-5 hover:bg-white/[0.04] hover:border-white/20 transition-all"
                        >
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <h4 className="text-lg font-black text-white tracking-tight leading-tight">{post.title}</h4>
                            <ArrowRight size={16} className="mt-1 shrink-0 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed mb-5">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2">
                            {post.topics.slice(0, 3).map((topic) => (
                              <span key={topic} className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
