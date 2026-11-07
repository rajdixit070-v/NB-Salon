import React, { useEffect, useState, useRef } from 'react';

export const Movable3DSalonScene: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [smoothScroll, setSmoothScroll] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse & Touch tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1) from viewport center
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth - 0.5) * 2;
        const y = (touch.clientY / window.innerHeight - 0.5) * 2;
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Smooth Scroll Parallax tracking with RequestAnimationFrame interpolation
  useEffect(() => {
    let animationFrameId: number;
    let targetY = window.scrollY;
    let currentY = window.scrollY;

    const handleScroll = () => {
      targetY = window.scrollY;
      setScrollY(targetY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth inertia interpolation loop
    const updateSmoothScroll = () => {
      currentY += (targetY - currentY) * 0.08;
      setSmoothScroll(currentY);
      animationFrameId = requestAnimationFrame(updateSmoothScroll);
    };

    animationFrameId = requestAnimationFrame(updateSmoothScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const mx = mousePos.x;
  const my = mousePos.y;
  const sy = smoothScroll;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-85 sm:opacity-95 transition-opacity duration-700"
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Dynamic 3D Radial Lighting Auras that react to scroll & mouse */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mx * -45}px, calc(${my * -45}px + ${sy * 0.08}px), -50px)`
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[450px] sm:w-[750px] h-[450px] sm:h-[750px] bg-[#D5AD55]/20 rounded-full blur-[150px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mx * 55}px, calc(${my * 55}px - ${sy * 0.06}px), -30px)`
        }}
      />

      {/* ========================================================
          1. 3D GOLDEN SHEARS / SCISSORS (Top Right - 3D Scroll Parallax)
          ======================================================== */}
      <div
        className="absolute top-[10%] right-[4%] sm:right-[10%] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * 45}px), calc(${my * 35}px + ${sy * 0.16}px), calc(${65 + Math.sin(sy * 0.004) * 35}px)) rotateX(${-my * 20 + sy * 0.05}deg) rotateY(${mx * 25 + sy * 0.04}deg) rotateZ(${sy * 0.07}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-1">
          <div className="relative w-24 h-24 sm:w-36 sm:h-36 drop-shadow-[0_20px_40px_rgba(213,173,85,0.6)]">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              {/* Blade 1 (snips continuously with animated sub-loop) */}
              <g className="origin-[35px_50px] animate-[snipA_2.2s_ease-in-out_infinite]">
                <path d="M35 50 L85 28 L90 32 L38 52 Z" fill="url(#goldShearGrad)" stroke="#FFF4D2" strokeWidth="1.2" />
                <path d="M35 50 L18 68 C12 74 12 84 18 90 C24 96 34 96 40 90 L48 72 Z" fill="none" stroke="#D5AD55" strokeWidth="3" />
                <circle cx="28" cy="80" r="10" stroke="#FFF4D2" strokeWidth="2.5" fill="#073B27" fillOpacity="0.85" />
              </g>
              {/* Blade 2 */}
              <g className="origin-[35px_50px] animate-[snipB_2.2s_ease-in-out_infinite]">
                <path d="M35 50 L85 72 L90 68 L38 48 Z" fill="url(#goldShearGrad)" stroke="#FFF4D2" strokeWidth="1.2" />
                <path d="M35 50 L18 32 C12 26 12 16 18 10 C24 4 34 4 40 10 L48 28 Z" fill="none" stroke="#D5AD55" strokeWidth="3" />
                <circle cx="28" cy="20" r="10" stroke="#FFF4D2" strokeWidth="2.5" fill="#073B27" fillOpacity="0.85" />
              </g>
              {/* Center Pivot Screw with Diamond Crest */}
              <circle cx="35" cy="50" r="5" fill="#FFF4D2" stroke="#D5AD55" strokeWidth="1.5" />
              <circle cx="35" cy="50" r="2" fill="#041B12" />

              <defs>
                <linearGradient id="goldShearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#D5AD55" />
                  <stop offset="100%" stopColor="#8A6614" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. 3D GOLDEN STYLING COMB (Top Left - 3D Scroll Parallax)
          ======================================================== */}
      <div
        className="absolute top-[16%] left-[3%] sm:left-[7%] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * -40}px), calc(${my * -30}px + ${sy * 0.22}px), calc(${45 + Math.cos(sy * 0.005) * 25}px)) rotateX(${my * 22 + sy * 0.06}deg) rotateY(${mx * -26 + sy * 0.05}deg) rotateZ(${-12 + sy * -0.06}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-2">
          <div className="w-28 h-16 sm:w-44 sm:h-24 drop-shadow-[0_15px_32px_rgba(213,173,85,0.5)]">
            <svg viewBox="0 0 120 50" fill="none" className="w-full h-full">
              {/* Spine with gold sheen */}
              <rect x="8" y="8" width="104" height="13" rx="4" fill="url(#goldCombGrad)" stroke="#FFF4D2" strokeWidth="1.2" />
              {/* 19 Precision Teeth */}
              {[...Array(19)].map((_, i) => (
                <line
                  key={i}
                  x1={14 + i * 5}
                  y1="21"
                  x2={14 + i * 5}
                  y2={i % 2 === 0 ? 46 : 42}
                  stroke="url(#goldCombGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              ))}
              <defs>
                <linearGradient id="goldCombGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A6614" />
                  <stop offset="45%" stopColor="#FFF4D2" />
                  <stop offset="100%" stopColor="#D5AD55" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. 3D SALON BLOW DRYER (Middle Left - Parallax Drift)
          ======================================================== */}
      <div
        className="absolute top-[42%] left-[2%] sm:left-[5%] transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * -50}px), calc(${my * 40}px + ${sy * 0.18}px), calc(${55 + Math.sin(sy * 0.003) * 30}px)) rotateX(${-my * 18 + sy * 0.04}deg) rotateY(${mx * 22 - sy * 0.03}deg) rotateZ(${sy * 0.04}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-3">
          <div className="w-24 h-24 sm:w-34 sm:h-34 drop-shadow-[0_20px_36px_rgba(0,0,0,0.7)]">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              {/* Main Emerald Barrel with Gold Filigree */}
              <rect x="25" y="24" width="46" height="24" rx="7" fill="#073B27" stroke="#D5AD55" strokeWidth="2.2" />
              {/* Gold Concentrator Nozzle */}
              <path d="M71 28 L88 31 V41 L71 44 Z" fill="url(#goldShearGrad)" stroke="#FFF4D2" strokeWidth="1" />
              {/* Handle */}
              <path d="M38 48 L44 82 H33 L29 48 Z" fill="#041B12" stroke="#D5AD55" strokeWidth="2" />
              {/* Air Intake Grille */}
              <circle cx="25" cy="36" r="10" fill="#041B12" stroke="#D5AD55" strokeWidth="1.8" />
              <circle cx="25" cy="36" r="6" stroke="#FFF4D2" strokeWidth="1" />
              <circle cx="25" cy="36" r="2.5" fill="#D5AD55" />
              {/* Floating airflow rings */}
              <path d="M92 34 Q 98 36 94 40" stroke="#D5AD55" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M96 32 Q 102 36 98 42" stroke="#FFF4D2" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          4. 3D BARBER STRAIGHT RAZOR (Middle Right - Dynamic Flip)
          ======================================================== */}
      <div
        className="absolute top-[40%] right-[3%] sm:right-[7%] transition-transform duration-180 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * 42}px), calc(${my * -35}px + ${sy * 0.24}px), calc(${50 + Math.cos(sy * 0.004) * 30}px)) rotateX(${my * 22 + sy * 0.07}deg) rotateY(${-mx * 26 + sy * 0.05}deg) rotateZ(${-8 + sy * -0.06}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-4">
          <div className="w-28 h-20 sm:w-40 sm:h-28 drop-shadow-[0_16px_34px_rgba(213,173,85,0.5)]">
            <svg viewBox="0 0 120 60" fill="none" className="w-full h-full">
              {/* Ebony Wood Handle */}
              <path d="M18 42 L68 18 C74 15 80 18 82 22 L36 50 C30 54 22 52 18 42 Z" fill="#041B12" stroke="#D5AD55" strokeWidth="2" />
              {/* Gold Pivot Pin */}
              <circle cx="68" cy="20" r="4" fill="#FFF4D2" stroke="#D5AD55" strokeWidth="1.2" />
              {/* Polished Steel Razor Blade */}
              <path d="M68 20 L112 7 L108 23 L68 25 Z" fill="url(#razorSteelGrad)" stroke="#FFF4D2" strokeWidth="1.2" />
              <defs>
                <linearGradient id="razorSteelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="45%" stopColor="#D5AD55" />
                  <stop offset="100%" stopColor="#7E5C0D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          5. 3D LUXURY PERFUME ATOMIZER (Lower Left - Scroll Tilt)
          ======================================================== */}
      <div
        className="absolute bottom-[18%] left-[5%] sm:left-[11%] transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * -32}px), calc(${my * -30}px + ${sy * 0.12}px), calc(${40 + Math.sin(sy * 0.005) * 20}px)) rotateX(${-my * 16 + sy * 0.04}deg) rotateY(${mx * 20 - sy * 0.03}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-2">
          <div className="w-22 h-26 sm:w-30 sm:h-34 drop-shadow-[0_18px_36px_rgba(213,173,85,0.45)]">
            <svg viewBox="0 0 80 100" fill="none" className="w-full h-full">
              {/* Glass Emerald Flacon */}
              <rect x="14" y="36" width="52" height="54" rx="12" fill="#073B27" fillOpacity="0.9" stroke="#D5AD55" strokeWidth="2.2" />
              {/* Gold Atomizer Ring */}
              <rect x="29" y="22" width="22" height="15" rx="3" fill="url(#goldCombGrad)" stroke="#FFF4D2" strokeWidth="1" />
              {/* Sprayer Pump */}
              <rect x="34" y="12" width="12" height="11" rx="2" fill="#FFF4D2" stroke="#8A6614" strokeWidth="1" />
              {/* Monogram Seal RNB */}
              <circle cx="40" cy="63" r="15" stroke="#D5AD55" strokeWidth="1.5" />
              <text x="40" y="68" fontSize="11" fontFamily="serif" fill="#D5AD55" textAnchor="middle" fontWeight="bold">RNB</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          6. 3D NAIL LACQUER / POLISH BOTTLE (Lower Right - Scroll Sway)
          ======================================================== */}
      <div
        className="absolute bottom-[20%] right-[5%] sm:right-[11%] transition-transform duration-180 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * 36}px), calc(${my * 30}px + ${sy * 0.20}px), calc(${45 + Math.cos(sy * 0.004) * 25}px)) rotateX(${my * 20 + sy * 0.05}deg) rotateY(${-mx * 24 + sy * 0.04}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-1">
          <div className="w-20 h-26 sm:w-26 sm:h-32 drop-shadow-[0_16px_32px_rgba(73,29,43,0.55)]">
            <svg viewBox="0 0 60 90" fill="none" className="w-full h-full">
              {/* Tall Handle Cap */}
              <rect x="22" y="6" width="16" height="30" rx="3" fill="#041B12" stroke="#D5AD55" strokeWidth="1.8" />
              {/* Burgundy Glass Reservoir */}
              <rect x="10" y="36" width="40" height="48" rx="9" fill="#491D2B" fillOpacity="0.95" stroke="#D5AD55" strokeWidth="2.2" />
              {/* Liquid Shine Crest */}
              <circle cx="30" cy="60" r="10" stroke="#FFF4D2" strokeWidth="1" fill="#D5AD55" fillOpacity="0.35" />
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          7. 3D ROUND BEVELED HAND MIRROR (Upper Mid - Perspective Glint)
          ======================================================== */}
      <div
        className="hidden md:block absolute top-[6%] left-[46%] transition-transform duration-250 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * 22}px), calc(${my * -18}px + ${sy * 0.14}px), calc(${35 + Math.sin(sy * 0.003) * 20}px)) rotateZ(${-15 + mx * 8 + sy * 0.03}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-3">
          <div className="w-22 h-30 drop-shadow-[0_15px_30px_rgba(213,173,85,0.4)]">
            <svg viewBox="0 0 60 90" fill="none" className="w-full h-full">
              {/* Mirror Frame */}
              <circle cx="30" cy="30" r="24" stroke="#D5AD55" strokeWidth="2.5" fill="#073B27" fillOpacity="0.75" />
              <circle cx="30" cy="30" r="20" stroke="#FFF4D2" strokeWidth="1" fill="#041B12" fillOpacity="0.55" />
              {/* Reflection Shimmer */}
              <path d="M16 20 Q 30 14 44 26" stroke="#FFF4D2" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
              {/* Mirror Handle */}
              <path d="M28 54 L27 82 H33 L32 54 Z" fill="#041B12" stroke="#D5AD55" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          8. 3D LUXURY SHAVING BADGER BRUSH (Center-Lower Right)
          ======================================================== */}
      <div
        className="hidden lg:block absolute bottom-[35%] right-[22%] transition-transform duration-220 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * 28}px), calc(${my * 24}px + ${sy * 0.26}px), calc(${40 + Math.cos(sy * 0.004) * 25}px)) rotateX(${my * 18 + sy * 0.06}deg) rotateY(${-mx * 20}deg) rotateZ(${15 + sy * 0.05}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-4">
          <div className="w-20 h-28 drop-shadow-[0_16px_30px_rgba(213,173,85,0.4)]">
            <svg viewBox="0 0 60 90" fill="none" className="w-full h-full">
              {/* Bristles Fan */}
              <path d="M15 42 C12 20 20 8 30 6 C40 8 48 20 45 42 Z" fill="#FFF4D2" stroke="#D5AD55" strokeWidth="1.5" />
              <path d="M20 42 C18 26 24 16 30 14 C36 16 42 26 40 42 Z" fill="#3D2B1F" opacity="0.75" />
              {/* Gold Ferrule */}
              <rect x="20" y="42" width="20" height="10" rx="2" fill="url(#goldShearGrad)" stroke="#FFF4D2" strokeWidth="1" />
              {/* Handle */}
              <path d="M22 52 L20 80 C20 85 40 85 40 80 L38 52 Z" fill="#041B12" stroke="#D5AD55" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          9. 3D LUXURY CERAMIC FLAT IRON / STRAIGHTENER (Center-Mid Left)
          ======================================================== */}
      <div
        className="hidden lg:block absolute top-[30%] left-[24%] transition-transform duration-220 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(${mx * -25}px), calc(${my * -20}px + ${sy * 0.28}px), calc(${35 + Math.sin(sy * 0.004) * 25}px)) rotateX(${-my * 16}deg) rotateY(${mx * 18}deg) rotateZ(${-25 + sy * 0.06}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="animate-flow-2">
          <div className="w-28 h-16 drop-shadow-[0_16px_30px_rgba(213,173,85,0.4)]">
            <svg viewBox="0 0 100 45" fill="none" className="w-full h-full">
              {/* Upper Arm */}
              <rect x="10" y="8" width="80" height="9" rx="4" fill="#041B12" stroke="#D5AD55" strokeWidth="1.8" />
              <rect x="40" y="10" width="45" height="5" rx="1.5" fill="#D5AD55" />
              {/* Lower Arm */}
              <rect x="10" y="24" width="80" height="9" rx="4" fill="#041B12" stroke="#D5AD55" strokeWidth="1.8" />
              <rect x="40" y="26" width="45" height="5" rx="1.5" fill="#D5AD55" />
              {/* Hinge */}
              <circle cx="15" cy="20" r="5" fill="#073B27" stroke="#FFF4D2" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================
          10. CONTINUOUS FLOWING 3D SILK RIBBONS & LIGHT TRAILS
          ======================================================== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translateY(${sy * 0.12}px)`
        }}
      >
        <path
          d="M -100 250 C 350 450, 750 100, 1550 320"
          fill="none"
          stroke="url(#flowRibbon1)"
          strokeWidth="2.5"
          className="animate-[pulse_4s_ease-in-out_infinite]"
        />
        <path
          d="M -100 680 C 450 520, 850 820, 1550 640"
          fill="none"
          stroke="url(#flowRibbon2)"
          strokeWidth="2.2"
          className="animate-[pulse_5s_ease-in-out_infinite]"
        />
        <path
          d="M -80 1100 C 500 950, 800 1350, 1600 1150"
          fill="none"
          stroke="url(#flowRibbon1)"
          strokeWidth="2"
          className="animate-[pulse_6s_ease-in-out_infinite]"
        />
        <defs>
          <linearGradient id="flowRibbon1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#073B27" stopOpacity="0" />
            <stop offset="35%" stopColor="#D5AD55" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#FFF4D2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B291B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowRibbon2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#491D2B" stopOpacity="0" />
            <stop offset="50%" stopColor="#D5AD55" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#073B27" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};