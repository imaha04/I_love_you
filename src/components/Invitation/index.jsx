'use client';

import Reveal from '@/src/components/ui/Reveal';

export default function Invitation({ content }) {
  return (
    <section className="defer-section relative overflow-hidden bg-[#ded6c7] px-[var(--page-gutter)] py-[clamp(7rem,14vw,13rem)]">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-35 [background:radial-gradient(circle_at_16%_18%,rgba(255,255,255,.7),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(167,141,97,.18),transparent_34%)]" />

      <Reveal className="relative mx-auto max-w-4xl" amount={0.15}>
        <article className="invitation-card relative bg-paper px-7 py-14 text-center shadow-[0_40px_100px_rgba(62,51,35,.14)] sm:px-14 sm:py-20 md:px-24 md:py-28">
          <span className="invitation-corner invitation-corner-tl" aria-hidden="true" />
          <span className="invitation-corner invitation-corner-tr" aria-hidden="true" />
          <span className="invitation-corner invitation-corner-bl" aria-hidden="true" />
          <span className="invitation-corner invitation-corner-br" aria-hidden="true" />

          <p className="text-[0.65rem] font-semibold tracking-[0.38em] text-gold">
            {content.invitation.label}
          </p>
          <div className="mx-auto my-8 h-px w-12 bg-gold/60" />

          <h2 className="editorial-serif text-[clamp(3rem,8vw,6.4rem)] font-normal italic leading-none tracking-[-0.045em]">
            {content.invitation.greeting}
          </h2>

          <div className="editorial-serif mx-auto mt-10 max-w-[31rem] space-y-6 text-[clamp(1.35rem,3vw,2rem)] leading-[1.28] text-ink-muted">
            {content.invitation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="my-12 flex items-center justify-center gap-4" aria-hidden="true">
            <span className="h-px w-12 bg-charcoal/15" />
            <span className="h-1 w-1 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-charcoal/15" />
          </div>

          <p className="editorial-serif text-[clamp(2.6rem,7vw,5.5rem)] leading-none tracking-[-0.045em]">
            {content.dateLong}
          </p>
          <p className="mt-7 text-xs font-semibold tracking-[0.32em] text-gold">
            {content.time}
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.26em] text-charcoal/70">
            {content.location.name}
          </p>

          <p className="editorial-serif mt-14 text-2xl italic text-ink-muted">
            {content.invitation.closing}
          </p>
          <p className="editorial-serif mt-3 text-4xl italic">{content.invitation.signature}</p>
        </article>
      </Reveal>
    </section>
  );
}
