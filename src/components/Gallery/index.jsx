'use client';

import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import ResponsiveImage from '@/src/components/ui/ResponsiveImage';
import Reveal from '@/src/components/ui/Reveal';

const ratioClasses = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
};

export default function Gallery({ content }) {
  const [selected, setSelected] = useState(null);
  const reduceMotion = useReducedMotion();
  const items = content.gallery.items;

  const close = () => setSelected(null);
  const showPrevious = () =>
    setSelected((current) => (current === null ? null : (current - 1 + items.length) % items.length));
  const showNext = () =>
    setSelected((current) => (current === null ? null : (current + 1) % items.length));
  const selectedItem = selected === null ? items[0] : items[selected];

  return (
    <section className="defer-section bg-ivory px-[var(--page-gutter)] py-[clamp(7rem,15vw,14rem)]">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-[clamp(4rem,9vw,8rem)] md:grid md:grid-cols-2 md:items-end md:gap-16">
          <h2 className="editorial-serif text-[clamp(3.9rem,9vw,8.8rem)] font-normal italic leading-[0.78] tracking-[-0.055em]">
            {content.gallery.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-8 max-w-lg text-base leading-8 text-ink-muted md:mt-0 md:pb-2">
            {content.gallery.subtitle}
          </p>
        </Reveal>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <m.button
              key={`${item.alt}-${index}`}
              type="button"
              onClick={() => setSelected(index)}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`gallery-item gallery-item-${index + 1} group relative overflow-hidden bg-[#ddd5c7] text-left ${ratioClasses[item.ratio]}`}
              aria-label={`Открыть фотографию: ${item.alt}`}
            >
              <ResponsiveImage
                image={item.image}
                alt={item.alt}
                sizes="(min-width: 768px) 55vw, calc(100vw - 2.5rem)"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out md:group-hover:scale-[1.025]"
                style={{ objectPosition: item.position }}
              />
              <span className="absolute inset-0 ring-1 ring-inset ring-black/5" aria-hidden="true" />
            </m.button>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && close()}>
        <DialogContent
          showCloseButton={false}
          className="fixed inset-0 left-0 top-0 z-[90] grid h-dvh w-screen max-w-none translate-x-0 translate-y-0 place-items-center rounded-none bg-[#171713]/96 p-4 text-white ring-0 sm:p-8"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') showPrevious();
            if (event.key === 'ArrowRight') showNext();
          }}
        >
          <DialogTitle className="sr-only">Просмотр фотографии</DialogTitle>
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-8"
            aria-label="Закрыть"
          >
            <X size={20} strokeWidth={1.4} />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute bottom-5 left-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:bottom-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2"
            aria-label="Предыдущая фотография"
          >
            <ChevronLeft size={22} strokeWidth={1.4} />
          </button>

          <AnimatePresence mode="wait">
            <m.div
              key={selected ?? 0}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="h-[min(78svh,900px)] w-[min(84vw,1100px)]"
            >
              <ResponsiveImage
                image={selectedItem.image}
                alt={selectedItem.alt}
                sizes="90vw"
                className="h-full w-full object-contain"
              />
            </m.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={showNext}
            className="absolute bottom-5 right-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:bottom-auto sm:right-8 sm:top-1/2 sm:-translate-y-1/2"
            aria-label="Следующая фотография"
          >
            <ChevronRight size={22} strokeWidth={1.4} />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
