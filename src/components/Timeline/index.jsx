'use client';

import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import ResponsiveImage from '@/src/components/ui/ResponsiveImage';
import Reveal from '@/src/components/ui/Reveal';

function StoryImage({ item, index }) {
  const imageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <m.div
      ref={imageRef}
      initial={reduceMotion ? false : { clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 1.15, delay: index * 0.03, ease: [0.76, 0, 0.24, 1] }}
      className="relative aspect-[4/5] overflow-hidden bg-[#ded7ca]"
    >
      <m.div className="absolute -inset-y-[5%] inset-x-0" style={reduceMotion ? undefined : { y }}>
        <ResponsiveImage
          image={item.image}
          alt={item.imageAlt}
          sizes="(min-width: 768px) 42vw, calc(100vw - 5rem)"
          className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:hover:scale-[1.025]"
          style={{ objectPosition: item.position }}
        />
      </m.div>
      <span className="absolute inset-0 ring-1 ring-inset ring-black/5" aria-hidden="true" />
    </m.div>
  );
}

export default function Timeline({ content }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 72%', 'end 46%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper px-[var(--page-gutter)] py-[clamp(7rem,14vw,13rem)]"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-[clamp(6rem,12vw,11rem)] max-w-4xl">
          <p className="mb-6 text-[0.68rem] font-semibold tracking-[0.42em] text-gold">
            {content.timelineHeading.label}
          </p>
          <h2 className="editorial-serif text-balance text-[clamp(3.25rem,8vw,7.5rem)] font-normal leading-[0.9] tracking-[-0.052em]">
            {content.timelineHeading.title}
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-0 left-[1.18rem] top-0 w-px bg-charcoal/12 md:left-1/2" aria-hidden="true">
            <m.span
              className="block h-full w-full origin-top bg-gold"
              style={reduceMotion ? { scaleY: 1 } : { scaleY: lineScale }}
            />
          </div>

          <div className="space-y-[clamp(7rem,13vw,12rem)]">
            {content.timeline.map((item, index) => {
              const imageOnRight = index % 2 === 1;

              return (
                <article
                  key={`${item.date}-${item.title}`}
                  className="relative grid pl-12 md:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] md:items-center md:pl-0"
                >
                  <span
                    className="absolute left-[0.94rem] top-6 z-10 h-2 w-2 rounded-full border border-gold bg-paper md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                    aria-hidden="true"
                  />

                  <div
                    className={imageOnRight ? 'md:col-start-3 md:row-start-1' : 'md:col-start-1 md:row-start-1'}
                  >
                    <StoryImage item={item} index={index} />
                  </div>

                  <Reveal
                    className={`mt-8 md:row-start-1 md:mt-0 ${
                      imageOnRight
                        ? 'md:col-start-1 md:pr-[clamp(2rem,5vw,5rem)] md:text-right'
                        : 'md:col-start-3 md:pl-[clamp(2rem,5vw,5rem)]'
                    }`}
                    delay={0.08}
                  >
                    <p className="mb-5 text-[0.68rem] font-semibold tracking-[0.34em] text-gold">
                      {item.date}
                    </p>
                    <h3 className="editorial-serif text-balance text-[clamp(2.25rem,4.6vw,4.6rem)] font-normal leading-[0.96] tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-md text-base leading-8 text-ink-muted md:ml-auto">
                      {item.description}
                    </p>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
