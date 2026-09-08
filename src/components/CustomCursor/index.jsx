'use client';

import { useEffect, useState } from 'react';
import { m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const x = useMotionValue(-30);
  const y = useMotionValue(-30);
  const smoothX = useSpring(x, { stiffness: 500, damping: 42, mass: 0.28 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 42, mass: 0.28 });
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine) and (min-width: 900px)');
    const updateAvailability = () => setEnabled(query.matches && !reduceMotion);
    const onPointerMove = (event) => {
      x.set(event.clientX - 6);
      y.set(event.clientY - 6);
    };

    updateAvailability();
    query.addEventListener('change', updateAvailability);
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      query.removeEventListener('change', updateAvailability);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [reduceMotion, x, y]);

  useEffect(() => {
    document.documentElement.classList.toggle('has-custom-cursor', enabled);
    return () => document.documentElement.classList.remove('has-custom-cursor');
  }, [enabled]);

  if (!enabled) return null;

  return (
    <m.span
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] h-3 w-3 rounded-full border border-gold bg-ivory/25 mix-blend-difference"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
