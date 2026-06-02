'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function PageHeader({ title, subtitle, gradient = "from-blue-400 to-blue-600" }: PageHeaderProps) {
  return (
    <section className="pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-black text-white leading-tight mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} animate-gradient`}>
            {title}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          {subtitle}
        </motion.p>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] -z-10 rounded-full animate-pulse" />
    </section>
  );
}
