'use client';

import { useRef } from 'react';
import { m, stagger, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import ResponsiveImage from '@/src/components/ui/ResponsiveImage';

export default function FinalSection({ content }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={sectionRef}
      className="grain defer-section relative isolate flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-charcoal px-[var(--page-gutter)] py-24 text-center text-ivory"
    >
      <m.div className="absolute -inset-y-[6%] inset-x-0 -z-20" style={reduceMotion ? undefined : { y: imageY }}>
        <ResponsiveImage
          image={content.final.image}
          sizes="100vw"
          className="h-full w-full object-cover object-[50%_62%]"
        />
      </m.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(14,14,12,.35),rgba(14,14,12,.65))]" />

      <m.div
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          visible: {
            transition: { delayChildren: reduceMotion ? 0 : stagger(0.16) },
          },
        }}
        className="flex max-w-4xl flex-col items-center"
      >
        <m.h2
          variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="editorial-serif text-balance text-[clamp(4rem,12vw,10rem)] font-normal leading-[0.8] tracking-[-0.055em]"
        >
          {content.final.title}
        </m.h2>
        <m.p
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-[0.7rem] font-semibold tracking-[0.4em] text-champagne"
        >
          {content.dateSpaced}
        </m.p>
        <m.p
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="editorial-serif mt-10 text-[clamp(2rem,5vw,4rem)] italic"
        >
          {content.couple.name1} & {content.couple.name2}
        </m.p>
        <m.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 1.2 }}
          className="editorial-serif mt-6 text-lg italic text-white/72 sm:text-2xl"
        >
          {content.final.quote}
        </m.p>
        <m.span
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 1.2 }}
          className="mt-10 text-2xl text-champagne"
          aria-hidden="true"
        >
          ♡
        </m.span>
      </m.div>
    </section>
  );
}
