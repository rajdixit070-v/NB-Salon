import React, { useEffect, useState } from 'react';

interface FloatingItem {
  id: number;
  type: 'scissors' | 'dryer' | 'comb' | 'razor' | 'perfume' | 'polish' | 'brush' | 'sparkle';
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number; // pixels
  duration: number; // seconds
  delay: number; // seconds
  rotateStart: number;
  rotateEnd: number;
  scale: number;
  opacity: number;
}

export const Salon3DBackground: React.FC = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Generate scattered 3D salon floating elements
    const salonTypes: FloatingItem['type'][] = [
      'scissors', 'dryer', 'comb', 'razor',
      'perfume', 'polish', 'brush', 'sparkle',
      'scissors', 'comb', 'perfume', 'sparkle'
    ];

    const generated: FloatingItem[] = salonTypes.map((type, i) => ({
      id: i,
      type,
      x: 5 + (i * 8.5) % 90 + (Math.random() * 5 - 2.5),
      y: (i * 14) % 88 + (Math.random() * 6 - 3),
      size: type === 'sparkle' ? 24 : 44 + (i % 3) * 12,
      duration: 18 + (i % 7) * 4,
      delay: (i * 1.5) % 8,
      rotateStart: (i * 35) % 360,
      rotateEnd: ((i * 35) % 360) + 360,
      scale: 0.75 + (i % 4) * 0.15,
      opacity: 0.15 + (i % 3) * 0.08
    }));

    setItems(generated);
  }, []);

  const renderIcon = (type: FloatingItem['type']) => {
    switch (type) {
      case 'scissors':
        return (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-[#D5AD55]">
            <circle cx="20" cy="48" r="8" />
            <circle cx="44" cy="48" r="8" />
            <path d="M26 42L48 12M38 42L16 12" />
            <circle cx="32" cy="30" r="2.5" fill="#FFF4D2" />
          </svg>
        );
      case 'dryer':
        return (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-[#D5AD55]">
            <rect x="14" y="16" width="28" height="18" rx="4" />
            <path d="M42 20L54 22V28L42 30M28 34V50H22V34M14 22C8 22 8 28 14 28" />
          </svg>
        );
      case 'comb':
        return (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-[#D5AD55]">
            <rect x="10" y="24" width="44" height="8" rx="2" fill="currentColor" fillOpacity="0.2" />
            <path d="M14 32V44M20 32V44M26 32V44M32 32V44M38 32V44M44 32V44M50 32V44" />
          </svg>
        );
      case 'razor':
        return (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-[#D5AD55]">
            <path d="M12 44L28 28L48 32L32 48Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M28 28L44 12L52 20L36 36" />
            <circle cx="28" cy="28" r="2" fill="#FFF4D2" />
          </svg>
        );
      case 'perfume':
        return (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-[#D5AD55]">
            <rect x="18" y="26" width="28" height="28" rx="6" fill="currentColor" fillOpacity="0.2" />
            <rect x="28" y="18" width="8" height="8" />
            <path d="M24 18H40M32 14V18" />
            <circle cx="32" cy="40" r="4" fill="#FFF4D2" fillOpacity="0.5" />
          </svg>
        );
      case 'polish':
        return (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-[#D5AD55]">
            <rect x="20" y="28" width="24" height="26" rx="4" fill="currentColor" fillOpacity="0.2" />
            <rect x="27" y="14" width="10" height="14" rx="2" />
          </svg>
        );
      case 'brush':
        return (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-[#D5AD55]">
            <path d="M24 40L14 54M44 14C36 14 30 20 30 26L40 36C46 36 52 30 52 22Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M30 26L24 40L28 44L40 36" />
          </svg>
        );
      case 'sparkle':
      default:
        return (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-[#FFF4D2]">
            <path d="M32 8L36 26L54 30L36 34L32 52L28 34L10 30L28 26Z" fill="#D5AD55" fillOpacity="0.4" />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            opacity: item.opacity,
            transform: `scale(${item.scale})`,
            animation: `float3D ${item.duration}s ease-in-out infinite alternate`,
            animationDelay: `${item.delay}s`,
            filter: 'drop-shadow(0 0 10px rgba(213, 173, 85, 0.3))',
            perspective: 1000,
            transformStyle: 'preserve-3d'
          }}
        >
          <div
            style={{
              animation: `spin3D ${item.duration * 1.5}s linear infinite`,
              animationDelay: `${item.delay}s`
            }}
            className="w-full h-full"
          >
            {renderIcon(item.type)}
          </div>
        </div>
      ))}
    </div>
  );
};
