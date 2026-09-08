'use client';

import { m, useReducedMotion } from 'framer-motion';
import Reveal from '@/src/components/ui/Reveal';

export default function Interlude({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="grain defer-section relative isolate flex min-h-[82svh] items-center overflow-hidden bg-charcoal px-[var(--page-gutter)] py-28 text-ivory">
      <m.span
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [-8, 8, -8] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="editorial-serif absolute -right-[0.08em] top-1/2 -z-10 -translate-y-1/2 text-[clamp(10rem,28vw,30rem)] font-medium leading-none text-white/[0.025]"
      >
        09
      </m.span>

      <div className="mx-auto w-full max-w-6xl">
        <Reveal amount={0.35} y={18}>
          <h2 className="editorial-serif text-balance text-[clamp(3.25rem,9vw,8.4rem)] font-normal italic leading-[0.9] tracking-[-0.052em]">
            {content.interlude.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-14 text-xs font-medium tracking-[0.42em] text-champagne">
            {content.date}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
