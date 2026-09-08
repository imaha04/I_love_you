'use client';

import { ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '@/src/components/ui/Reveal';

function getLocationUrl(location) {
  const isAppleDevice = /iPad|iPhone|iPod|Macintosh/i.test(navigator.userAgent);
  const query = encodeURIComponent(`${location.name} ${location.address}`);
  const configuredUrl = isAppleDevice ? location.appleMapsUrl : location.mapsUrl;

  if (configuredUrl && !configuredUrl.startsWith('[')) return configuredUrl;
  return isAppleDevice
    ? `https://maps.apple.com/?q=${query}`
    : `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export default function Location({ content }) {
  const openLocation = () => {
    window.open(getLocationUrl(content.location), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="details-panel flex min-h-[36rem] items-center bg-paper px-7 py-16 sm:px-12 lg:px-[clamp(3rem,7vw,7rem)]">
      <Reveal className="w-full">
        <MapPin size={24} strokeWidth={1.15} className="mb-12 text-gold" aria-hidden="true" />
        <p className="text-[0.68rem] font-semibold tracking-[0.42em] text-gold">
          {content.location.label}
        </p>
        <h2 className="editorial-serif mt-6 text-balance text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.88] tracking-[-0.05em]">
          {content.location.name}
        </h2>
        <p className="mt-7 max-w-lg text-base leading-8 text-ink-muted">{content.location.address}</p>

        <button
          type="button"
          onClick={openLocation}
          className="group mt-12 inline-flex min-h-12 items-center gap-8 border-b border-charcoal/30 pb-3 text-xs font-semibold uppercase tracking-[0.24em] transition-colors hover:border-gold hover:text-gold"
        >
          {content.location.buttonLabel}
          <ArrowUpRight
            size={18}
            strokeWidth={1.4}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      </Reveal>
    </section>
  );
}
