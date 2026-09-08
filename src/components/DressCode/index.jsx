'use client';

import { Gem } from 'lucide-react';
import Reveal from '@/src/components/ui/Reveal';

export default function DressCode({ content }) {
  return (
    <section className="details-panel flex min-h-[36rem] items-center bg-[#e6ded0] px-7 py-16 sm:px-12 lg:px-[clamp(3rem,7vw,7rem)]">
      <Reveal className="w-full">
        <Gem size={24} strokeWidth={1.15} className="mb-12 text-gold" aria-hidden="true" />
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-gold">
          {content.dressCode.title}
        </p>
        <h2 className="editorial-serif mt-6 text-balance text-[clamp(3rem,6vw,6rem)] font-normal italic leading-[0.9] tracking-[-0.05em]">
          {content.dressCode.style}
        </h2>
        <p className="editorial-serif mt-8 max-w-xl text-[clamp(1.45rem,3vw,2.25rem)] leading-[1.25] text-ink-muted">
          {content.dressCode.note}
        </p>
      </Reveal>
    </section>
  );
}
