'use client';

import { useRef, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer({ content }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const reduceMotion = useReducedMotion();

  const toggle = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setUnavailable(false);
      setPlaying(true);
    } catch {
      setUnavailable(true);
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 sm:bottom-6 sm:right-6">
      <audio ref={audioRef} src={content.music.src} preload="none" loop onEnded={() => setPlaying(false)}>
        <track kind="captions" />
      </audio>
      <m.button
        type="button"
        onClick={toggle}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        className="group flex min-h-12 items-center gap-3 rounded-full border border-white/20 bg-charcoal/90 p-1.5 pr-4 text-ivory shadow-[0_10px_35px_rgba(0,0,0,.2)] backdrop-blur-md"
        aria-pressed={playing}
        aria-label={unavailable ? 'Добавьте файл /public/music/song.mp3' : playing ? content.music.labelOn : content.music.labelOff}
        title={unavailable ? 'Добавьте /public/music/song.mp3' : undefined}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-paper text-charcoal">
          {playing ? <Volume2 size={16} strokeWidth={1.5} /> : <VolumeX size={16} strokeWidth={1.5} />}
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em]">
          {playing ? content.music.labelOn : content.music.labelOff}
        </span>
      </m.button>
    </div>
  );
}
