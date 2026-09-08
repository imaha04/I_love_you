'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import SiteExperience from '@/src/components/SiteExperience';
import content from '@/src/data/content';

export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <main className="site-shell">
        <SiteExperience content={content} />
      </main>
    </LazyMotion>
  );
}
