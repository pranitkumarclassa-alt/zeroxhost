'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

const LOG_MESSAGES = [
  "Initializing neural core...",
  "Establishing secure handshake...",
  "Syncing Delhi-1 datacenter...",
  "Calibrating NVMe Gen4 arrays...",
  "Loading enterprise DDoS filters...",
  "Optimizing packet routing...",
  "Allocating dedicated resources...",
  "Verifying node integrity...",
  "Finalizing system handshake...",
  "Systems operational. Welcome."
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const diff = Math.random() * 12;
        return Math.min(prev + diff, 100);
      });
    }, 250);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex(prev => (prev < LOG_MESSAGES.length - 1 ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(logInterval);
  }, []);

  const characters = useMemo(() => "ZEROXHOST".split(""), []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    return [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
      text: Math.random().toString(16).substring(2, 8).toUpperCase(),
      xOffset: (Math.random() * 100 - 10) + "%"
    }));
  }, [mounted]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
            transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020202] overflow-hidden"
        >
          {/* Enhanced Background: Animated Grid & Scanlines */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ y: [0, 40] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(37, 99, 235, 0.2) 50%)`,
                backgroundSize: '100% 4px'
              }}
            />
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Dynamic Background Glows - Reactive to progress */}
          <motion.div
            animate={{
              scale: [1, 1.2 + (progress/100), 1],
              opacity: [0.3, 0.5 + (progress/200), 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[180px] rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-400/10 blur-[180px] rounded-full"
          />

          <div className="relative flex flex-col items-center scale-100 md:scale-110">
            {/* Center Logo with Advanced Orbital System */}
            <div className="relative mb-16">
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-32 h-32 p-1.5 rounded-[2.5rem] bg-gradient-to-br from-blue-600/30 to-transparent border border-white/10 shadow-[0_0_60px_rgba(37,99,235,0.4)] backdrop-blur-2xl"
              >
                <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
                  <Image
                    src="https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"
                    alt="Zerox Host"
                    fill
                    className="object-cover scale-110"
                    priority
                  />
                </div>
              </motion.div>

              {/* Complex Orbital Rings */}
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: 360 * (i % 2 === 0 ? 1 : -1),
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 3 + i * 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2 + i, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    padding: `${i * 14}px`,
                    opacity: 0.6 - i * 0.1
                  }}
                  className="absolute -inset-10 rounded-full border border-transparent border-t-blue-500/30 border-l-blue-400/10"
                />
              ))}

              {/* High-intensity Scanning Pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl -z-10"
              />
            </div>

            {/* Staggered Glitch Text Animation */}
            <div className="flex gap-1.5 mb-10">
              {characters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                  animate={{ 
                    y: 0, 
                    opacity: 1, 
                    scale: 1, 
                    filter: "blur(0px)",
                    color: i > 4 ? ["#3b82f6", "#ffffff", "#3b82f6"] : ["#ffffff", "#3b82f6", "#ffffff"]
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8 + i * 0.08,
                    ease: [0.33, 1, 0.68, 1],
                    color: { duration: 2, repeat: Infinity, delay: i * 0.1 }
                  }}
                  className={`text-5xl font-black tracking-tighter ${char === 'H' || char === 'O' || char === 'S' || char === 'T' ? 'text-blue-500' : 'text-white'}`}
                  style={{
                    textShadow: char === 'H' || char === 'O' || char === 'S' || char === 'T' ? '0 0 30px rgba(37, 99, 235, 0.6)' : '0 0 20px rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* System Log Console */}
            <div className="h-6 mb-8 overflow-hidden text-center w-80">
              <AnimatePresence mode="wait">
                <motion.p
                  key={logIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-[10px] font-mono text-blue-400/60 uppercase tracking-[0.2em]"
                >
                  {LOG_MESSAGES[logIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Advanced Progress Architecture */}
            <div className="w-72 space-y-4">
              <div className="flex justify-between items-end px-1">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Status</span>
                  <motion.span 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500"
                  >
                    {progress < 100 ? 'System Loading' : 'Complete'}
                  </motion.span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Progress</span>
                  <span className="text-sm font-black text-white tabular-nums">{Math.round(progress)}%</span>
                </div>
              </div>
              
              <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 shadow-[0_0_15px_#2563eb]"
                  style={{ width: `${progress}%` }}
                  transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                />
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </div>
            </div>
          </div>

          {/* Floating Cyber Elements / Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ 
                x: p.x, 
                y: "110%",
                opacity: 0,
                rotate: 0
              }}
              animate={{ 
                y: "-10%",
                opacity: [0, 0.4, 0],
                rotate: 360,
                x: p.xOffset
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay,
                ease: "linear" 
              }}
              className="absolute pointer-events-none"
            >
              <div className={`w-[1px] h-8 bg-gradient-to-t from-blue-500/0 via-blue-500/40 to-blue-500/0`} />
              <div className="text-[6px] font-mono text-blue-400/20 mt-2">
                {p.text}
              </div>
            </motion.div>
          ))}

          {/* Glitch Overlay effect */}
          <motion.div 
            animate={{ opacity: [0, 0.05, 0, 0.1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-white pointer-events-none z-[110] mix-blend-overlay"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
