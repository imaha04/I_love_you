'use client';

import Reveal from '@/src/components/ui/Reveal';

export default function Intro({ content }) {
  return (
    <section className="defer-section relative overflow-hidden bg-ivory px-[var(--page-gutter)] py-[clamp(8rem,18vw,16rem)]">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="editorial-serif text-balance text-[clamp(2.65rem,7vw,6.4rem)] font-normal leading-[0.96] tracking-[-0.045em]">
            {content.intro.lead}
          </h2>
        </Reveal>

        <div className="mx-auto my-[clamp(5rem,10vw,8rem)] h-24 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

        <div className="ml-auto max-w-2xl text-right">
          {content.intro.lines.map((line, index) => (
            <Reveal key={line} delay={index * 0.08}>
              <p className="editorial-serif text-[clamp(1.85rem,4.3vw,3.55rem)] leading-[1.08] tracking-[-0.025em] text-ink-muted">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-[clamp(7rem,14vw,12rem)] max-w-3xl">
          {content.intro.ending.map((line, index) => (
            <Reveal key={line} delay={index * 0.1}>
              <p className="editorial-serif text-balance text-[clamp(2.1rem,5vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.035em]">
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
