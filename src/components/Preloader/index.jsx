'use client';

import { m, useReducedMotion } from 'framer-motion';

export default function Preloader({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <m.output
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.65, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] grid touch-none place-items-center bg-charcoal text-ivory"
      aria-label="Загрузка приглашения"
    >
      <m.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="editorial-serif text-[clamp(3.4rem,13vw,6.5rem)] font-normal italic leading-none tracking-[-0.04em]">
          {content.couple.monogram}
        </p>
        <p className="mt-6 text-[0.68rem] font-medium tracking-[0.42em] text-champagne">
          {content.dateSpaced}
        </p>
      </m.div>
    </m.output>
  );
}
