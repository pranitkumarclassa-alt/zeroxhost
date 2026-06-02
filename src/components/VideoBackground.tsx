'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const [videoUrl, setVideoUrl] = useState("https://lylvdeeorhjxevbdlqhm.supabase.co/storage/v1/object/public/website%20material/video.mp4.mp4");
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    console.error("Video failed to load:", videoUrl);
    setHasError(true);
  };

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.8;
        videoRef.current.play().catch(err => {
          console.warn("Autoplay failed, retrying on interaction...", err);
        });
      }
    };

    playVideo();
    
    // Ensure video keeps playing and loops correctly
    const interval = setInterval(() => {
      if (videoRef.current && videoRef.current.paused && isVideoLoaded) {
        videoRef.current.play().catch(() => {});
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [videoUrl, isVideoLoaded]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020202]">
      {/* Fallback Background Image */}
      {hasError && (
        <div className="absolute inset-0 bg-[#020202]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>
      )}

      {/* The Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => {
            console.log("Video background: Data Loaded");
            setIsVideoLoaded(true);
          }}
          onCanPlay={() => setIsVideoLoaded(true)}
          onPlaying={() => setIsVideoLoaded(true)}
          onError={handleVideoError}
          className={`h-full w-full object-cover scale-[1.05] transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-70' : 'opacity-40'} pointer-events-none`}
        >
          <source src="https://lylvdeeorhjxevbdlqhm.supabase.co/storage/v1/object/public/website%20material/video.mp4.mp4" type="video/mp4" />
          <source src="https://lylvdeeorhjxevbdlqhm.supabase.co/storage/v1/object/public/website%20material/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Halix-style Dotted Grid - Very sharp and prominent */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Noise Texture Overlay - Procedural SVG for high quality */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Deep Blue Glows for Halix Aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/15 blur-[150px] rounded-full pointer-events-none z-10 animate-pulse" />

      {/* Vignette & Depth Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-20" />
      <div className="absolute inset-0 bg-black/5 z-20" />
      
      {/* Final bottom blend */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent z-30" />
    </div>
  );
}
