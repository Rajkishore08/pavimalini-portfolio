'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

interface VantaEffect {
  destroy: () => void;
  resize?: () => void;
}

declare global {
  interface Window {
    THREE?: unknown;
    VANTA?: {
      CLOUDS?: (options: Record<string, unknown>) => VantaEffect;
    };
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  const initVanta = () => {
    if (effectRef.current || !vantaRef.current) return;
    if (typeof window !== 'undefined' && window.THREE && window.VANTA?.CLOUDS) {
      try {
        effectRef.current = window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0xffffff,
          skyColor: 0x68b8d7,
          cloudColor: 0xadc1de,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
          speed: 1.0,
        });
      } catch (err) {
        console.error('Failed to initialize Vanta Clouds:', err);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (effectRef.current?.resize) {
        effectRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
          effectRef.current = null;
        } catch {
          // cleanup fallback
        }
      }
    };
  }, []);

  return (
    <>
      {/* Three.js r134 and Vanta Clouds scripts */}
      <Script
        src="/vendor/three.r134.min.js"
        strategy="afterInteractive"
        onReady={initVanta}
      />
      <Script
        src="/vendor/vanta.clouds.min.js"
        strategy="afterInteractive"
        onReady={initVanta}
      />

      {/* Fixed Fullscreen 3D Cloud Canvas */}
      <div
        id="vanta-clouds-canvas"
        ref={vantaRef}
        className="fixed inset-0 w-screen h-screen -z-50 pointer-events-none overflow-hidden"
        style={{
          width: '100vw',
          height: '100vh',
        }}
        aria-hidden="true"
      />

      {/* Subtle atmospheric gradient veil for AAA typography contrast */}
      <div
        className="fixed inset-0 w-screen h-screen -z-40 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/20"
        aria-hidden="true"
      />
    </>
  );
}
