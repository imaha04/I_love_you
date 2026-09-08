'use client';

import { useRef } from 'react';
import { m, stagger, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero({ content, start = true }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '7%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.025, 1.07]);
  const { couple, hero } = content;

  return (
    <section
      ref={sectionRef}
      className="grain relative isolate min-h-screen min-h-[100svh] overflow-hidden bg-charcoal text-ivory"
      aria-label="Обложка приглашения"
    >
      <m.div
        className="absolute -inset-y-[6%] inset-x-0"
        style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
      >
        <picture>
          <source type="image/avif" srcSet={hero.image.avifSrcSet} sizes="100vw" />
          <img
            src={hero.image.src}
            srcSet={hero.image.webpSrcSet}
            sizes="100vw"
            width={hero.image.width}
            height={hero.image.height}
            alt={hero.image.alt}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[50%_58%]"
          />
        </picture>
      </m.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,12,.34)_0%,rgba(14,14,12,.08)_34%,rgba(14,14,12,.28)_66%,rgba(14,14,12,.76)_100%)]" />

      <m.div
        initial="hidden"
        animate={start ? 'visible' : 'hidden'}
        transition={{
          delayChildren: reduceMotion ? 0 : stagger(0.18, { startDelay: 0.2 }),
        }}
        className="relative z-10 flex min-h-screen min-h-[100svh] flex-col items-center justify-between px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] text-center sm:px-10"
      >
        <m.p
          variants={reveal}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 text-[0.69rem] font-medium uppercase tracking-[0.38em] text-white/78 sm:text-xs"
        >
          {hero.eyebrow}
        </m.p>

        <div className="flex flex-col items-center">
          <m.h1
            variants={reveal}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-serif max-w-[12ch] text-balance text-[clamp(3.7rem,14vw,9rem)] font-normal leading-[0.78] tracking-[-0.055em] text-white"
          >
            <span className="block">{couple.name1}</span>
            <span className="my-[0.12em] block text-[0.48em] italic text-champagne">&</span>
            <span className="block">{couple.name2}</span>
          </m.h1>

          <m.p
            variants={reveal}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-serif mt-7 text-[clamp(1.05rem,2.1vw,1.35rem)] italic leading-relaxed tracking-[0.02em] text-white/84"
          >
            {hero.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </m.p>
        </div>

        <m.div
          variants={reveal}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-3 text-[0.64rem] font-medium uppercase tracking-[0.28em] text-white/65"
        >
          <span>{hero.scrollLabel}</span>
          <span className="relative block h-10 w-px overflow-hidden bg-white/25" aria-hidden="true">
            <m.span
              className="absolute inset-x-0 top-0 h-1/2 bg-champagne"
              animate={reduceMotion ? undefined : { y: ['-100%', '220%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </m.div>
      </m.div>
    </section>
  );
}
