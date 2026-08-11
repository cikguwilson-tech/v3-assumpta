import React, { useEffect, useRef } from 'react';
import bgImage1 from '../assets/images/assumption_masterpiece_1786427031695.jpg';
import bgImage2 from '../assets/images/assumption_radiant_halo_1786427047524.jpg';

export const BG_IMAGE_1 = bgImage1;
export const BG_IMAGE_2 = bgImage2;

export const ImageRevealBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealLayerRef = useRef<HTMLDivElement>(null);
  const gridOverlayRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Offscreen canvas for rendering the halo mask gradient
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Mouse coordinates
    let rawMouseX = width * 0.62;
    let rawMouseY = height * 0.38;
    let smoothMouseX = rawMouseX;
    let smoothMouseY = rawMouseY;

    // Parallax grid coordinates
    let gridX = 0;
    let gridY = 0;

    let animationFrameId: number;
    let isRunning = true;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX = e.clientX;
      rawMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const renderLoop = () => {
      if (!isRunning) return;

      if (!prefersReducedMotion) {
        // Spotlight cursor easing (factor 0.1)
        smoothMouseX += (rawMouseX - smoothMouseX) * 0.1;
        smoothMouseY += (rawMouseY - smoothMouseY) * 0.1;

        // Parallax grid easing (factor 0.06)
        const targetGridX = (rawMouseX / width - 0.5) * 16;
        const targetGridY = (rawMouseY / height - 0.5) * 16;
        gridX += (targetGridX - gridX) * 0.06;
        gridY += (targetGridY - gridY) * 0.06;
      }

      // Radius calculation: Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)))
      const radius = Math.round(Math.min(420, Math.max(160, width * 0.16)));

      // Draw warm gold-white halo gradient on canvas
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(
        smoothMouseX,
        smoothMouseY,
        0,
        smoothMouseX,
        smoothMouseY,
        radius
      );

      // Gradient stops specified in prompt:
      // 0 -> rgba(255,250,235,1)
      // 0.4 -> rgba(255,250,235,1)
      // 0.6 -> rgba(255,250,235,0.75)
      // 0.75 -> rgba(255,250,235,0.4)
      // 0.88 -> rgba(255,250,235,0.12)
      // 1 -> rgba(255,250,235,0)
      gradient.addColorStop(0, 'rgba(255, 250, 235, 1)');
      gradient.addColorStop(0.4, 'rgba(255, 250, 235, 1)');
      gradient.addColorStop(0.6, 'rgba(255, 250, 235, 0.75)');
      gradient.addColorStop(0.75, 'rgba(255, 250, 235, 0.4)');
      gradient.addColorStop(0.88, 'rgba(255, 250, 235, 0.12)');
      gradient.addColorStop(1, 'rgba(255, 250, 235, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Apply mask to reveal layer
      if (revealLayerRef.current) {
        const maskDataUrl = canvas.toDataURL('image/png');
        revealLayerRef.current.style.maskImage = `url(${maskDataUrl})`;
        revealLayerRef.current.style.webkitMaskImage = `url(${maskDataUrl})`;
      }

      if (gridOverlayRef.current && !prefersReducedMotion) {
        gridOverlayRef.current.style.transform = `translate3d(${gridX.toFixed(2)}px, ${gridY.toFixed(2)}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="desktop-image-reveal-bg"
      className="hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Layer (BG_IMAGE_1 - Masterpiece Devotional Image with White Page Blending) */}
      <div
        className="absolute inset-0 bg-contain bg-right bg-no-repeat transition-opacity duration-700 opacity-80"
        style={{
          backgroundImage: `url(${BG_IMAGE_1})`,
          backgroundPosition: 'right 5% center',
          backgroundSize: 'auto 92%',
        }}
      />

      {/* Luminous Pure White Masking & Vignette to guarantee pristine crisp white background across page */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.88) 60%, rgba(255, 255, 255, 0.45) 85%, rgba(255, 255, 255, 0.15) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0) 15%, rgba(255, 255, 255, 0) 85%, #ffffff 100%)',
        }}
      />

      {/* 2. Reveal Layer (BG_IMAGE_2 - Radiant Halo Close-Up Variant with Canvas Mask) */}
      <div
        ref={revealLayerRef}
        className="absolute inset-0 bg-contain bg-right bg-no-repeat will-change-[mask-image] opacity-90"
        style={{
          backgroundImage: `url(${BG_IMAGE_2})`,
          backgroundPosition: 'right 5% center',
          backgroundSize: 'auto 92%',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />

      {/* 3. Architectural / Stained Glass Sacred Grid Overlay */}
      <svg
        ref={gridOverlayRef}
        className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] opacity-[0.08] pointer-events-none transition-transform duration-75 ease-out"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="sacred-arch-grid"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <rect width="72" height="72" fill="none" />
            <path
              d="M 72 0 L 0 0 0 72"
              fill="none"
              stroke="var(--marian-sky, #A9C6E8)"
              strokeWidth="0.6"
            />
            {/* Subtle diamond center accent */}
            <circle cx="36" cy="36" r="1" fill="var(--marian-sky, #A9C6E8)" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sacred-arch-grid)" />
      </svg>
    </div>
  );
};
