'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Countdown from '@/src/components/Countdown';
import CustomCursor from '@/src/components/CustomCursor';
import DressCode from '@/src/components/DressCode';
import FinalSection from '@/src/components/FinalSection';
import Gallery from '@/src/components/Gallery';
import Hero from '@/src/components/Hero';
import Interlude from '@/src/components/Interlude';
import Intro from '@/src/components/Intro';
import Invitation from '@/src/components/Invitation';
import Location from '@/src/components/Location';
import MusicPlayer from '@/src/components/MusicPlayer';
import Preloader from '@/src/components/Preloader';
import Timeline from '@/src/components/Timeline';

export default function SiteExperience({ content }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1350);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{ready ? null : <Preloader content={content} />}</AnimatePresence>
      <Hero content={content} start={ready} />
      <Intro content={content} />
      <Timeline content={content} />
      <Gallery content={content} />
      <Interlude content={content} />
      <Invitation content={content} />
      <Countdown content={content} />
      <div className="details-grid defer-section">
        <Location content={content} />
        <DressCode content={content} />
      </div>
      <FinalSection content={content} />
      <MusicPlayer content={content} />
      <CustomCursor />
    </>
  );
}
