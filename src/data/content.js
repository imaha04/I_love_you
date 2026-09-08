const images = {
  hero: {
    src: '/images/couple-hero-960.webp',
    webpSrcSet: '/images/couple-hero-640.webp 640w, /images/couple-hero-960.webp 960w',
    avifSrcSet: '/images/couple-hero-640.avif 640w, /images/couple-hero-960.avif 960w',
    alt: 'Иманжан и Адалят вместе',
    width: 960,
    height: 1280,
  },
  story1: {
    src: '/images/story-1-870.webp',
    webpSrcSet: '/images/story-1-600.webp 600w, /images/story-1-870.webp 870w',
    avifSrcSet: '/images/story-1-600.avif 600w, /images/story-1-870.avif 870w',
    alt: 'Чёрно-белый совместный портрет',
    width: 870,
    height: 1280,
  },
  story2: {
    src: '/images/story-2-720.webp',
    webpSrcSet: '/images/story-2-540.webp 540w, /images/story-2-720.webp 720w',
    avifSrcSet: '/images/story-2-540.avif 540w, /images/story-2-720.avif 720w',
    alt: 'Тихий момент рядом',
    width: 720,
    height: 1280,
  },
  story3: {
    src: '/images/story-3-960.webp',
    webpSrcSet: '/images/story-3-640.webp 640w, /images/story-3-960.webp 960w',
    avifSrcSet: '/images/story-3-640.avif 640w, /images/story-3-960.avif 960w',
    alt: 'Совместное путешествие',
    width: 960,
    height: 1280,
  },
  story4: {
    src: '/images/story-4-898.webp',
    webpSrcSet: '/images/story-4-600.webp 600w, /images/story-4-898.webp 898w',
    avifSrcSet: '/images/story-4-600.avif 600w, /images/story-4-898.avif 898w',
    alt: 'Иманжан и Адалят у озера',
    width: 898,
    height: 1280,
  },
  gallery1: {
    src: '/images/gallery-1-1280.webp',
    webpSrcSet: '/images/gallery-1-640.webp 640w, /images/gallery-1-1280.webp 1280w',
    avifSrcSet: '/images/gallery-1-640.avif 640w, /images/gallery-1-1280.avif 1280w',
    alt: 'Кадр одного из общих вечеров',
    width: 1280,
    height: 960,
  },
  gallery2: {
    src: '/images/gallery-2-1280.webp',
    webpSrcSet: '/images/gallery-2-640.webp 640w, /images/gallery-2-1280.webp 1280w',
    avifSrcSet: '/images/gallery-2-640.avif 640w, /images/gallery-2-1280.avif 1280w',
    alt: 'Весёлый совместный кадр',
    width: 1280,
    height: 718,
  },
  gallery3: {
    src: '/images/gallery-3-960.webp',
    webpSrcSet: '/images/gallery-3-640.webp 640w, /images/gallery-3-960.webp 960w',
    avifSrcSet: '/images/gallery-3-640.avif 640w, /images/gallery-3-960.avif 960w',
    alt: 'Солнечный совместный портрет',
    width: 960,
    height: 1280,
  },
  gallery6: {
    src: '/images/gallery-6-960.webp',
    webpSrcSet: '/images/gallery-6-640.webp 640w, /images/gallery-6-960.webp 960w',
    avifSrcSet: '/images/gallery-6-640.avif 640w, /images/gallery-6-960.avif 960w',
    alt: 'Совместный вечер',
    width: 960,
    height: 1280,
  },
  final: {
    src: '/images/couple-final-734.webp',
    webpSrcSet: '/images/couple-final-600.webp 600w, /images/couple-final-734.webp 734w',
    avifSrcSet: '/images/couple-final-600.avif 600w, /images/couple-final-734.avif 734w',
    alt: 'Иманжан и Адалят смотрят на закат у моря',
    width: 734,
    height: 1280,
  },
};

const content = {
  couple: {
    name1: 'Иманжан',
    name2: 'Адалят',
    monogram: 'I & A',
  },
  date: '09.09.2026',
  dateSpaced: '09 · 09 · 2026',
  dateLong: '09 сентября 2026',
  time: '[TIME]',
  countdownTarget: '2026-09-09T19:00:00+05:00',
  seo: {
    title: 'Иманжан & Адалят — 09.09.2026',
    description: 'A special evening. A story of two.',
    ogImage: '/images/og.jpg',
  },
  hero: {
    eyebrow: '09.09.2026',
    lines: ['One evening.', 'A thousand memories.', 'And a new beginning.'],
    scrollLabel: 'Scroll to begin',
    image: images.hero,
  },
  intro: {
    lead: 'Некоторые моменты начинаются задолго до того, как наступает их день.',
    lines: [
      'С одного разговора.',
      'С одного взгляда.',
      'С одного человека, который постепенно становится целым миром.',
    ],
    ending: [
      'Наша история — это не один большой момент.',
      'Это тысячи маленьких, которые привели нас сюда.',
    ],
  },
  timelineHeading: {
    label: 'OUR STORY',
    title: 'Воспоминания, из которых сложились мы.',
  },
  timeline: [
    {
      title: 'Всё началось здесь.',
      image: images.story3,
      position: '50% 45%',
    },
    {
      title: 'Первое из множества «вместе».',
      image: images.story2,
      position: '50% 48%',
    },
    {
      title: 'Моменты, которые хочется сохранить.',
      image: images.story1,
      position: '50% 42%',
    },
    {
      title: 'Мы.',
      image: images.story4,
      position: '50% 48%',
    },
  ],
  gallery: {
    title: ['Little moments.', 'Big memories.'],
    subtitle:
      'Из тысяч фотографий невозможно выбрать всего несколько. Но именно эти хочется оставить здесь.',
    items: [
      {
        image: images.gallery1,
        alt: 'Кадр одного из общих вечеров',
        ratio: 'square',
        position: '50% 42%',
      },
      {
        image: images.gallery2,
        alt: 'Весёлый совместный кадр',
        ratio: 'landscape',
        position: '50% 50%',
      },
      {
        image: images.gallery3,
        alt: 'Солнечный совместный портрет',
        ratio: 'portrait',
        position: '50% 46%',
      },
      {
        image: images.story3,
        alt: 'Одно из наших путешествий',
        ratio: 'portrait',
        position: '50% 42%',
      },
      {
        image: images.final,
        alt: 'Закат у моря',
        ratio: 'square',
        position: '50% 45%',
      },
      {
        image: images.gallery6,
        alt: 'Ещё один вечер вместе',
        ratio: 'landscape',
        position: '50% 35%',
      },
    ],
  },
  interlude: {
    lines: ['And somehow,', 'through all these moments,', 'we arrived here.'],
  },
  invitation: {
    label: 'A SPECIAL INVITATION',
    greeting: 'Дорогая Моя,',
    paragraphs: [
      'Приглашаю тебя разделить со мной один особенный вечер.',
      'Вечер, который хочется запомнить не только фотографиями, но и тем чувством, которое останется после него.',
    ],
    closing: 'Буду ждать тебя.',
    signature: 'Иманжан',
  },
  countdown: {
    title: 'Until our evening',
    complete: 'The moment is here.',
    labels: ['Days', 'Hours', 'Minutes', 'Seconds'],
  },
  location: {
    label: 'WHERE',
    name: 'Seven',
    address: 'Пр. Аль-Фараби 77/7',
  },
  dressCode: {
    title: 'Dress code',
    style: 'Elegant evening',
    note: 'Просто приходи такой, какой я люблю тебя видеть.',
  },
  final: {
    title: 'До встречи завтра.',
    quote: 'Some stories are meant to become forever.',
    image: images.final,
  },
  music: {
    src: '/music/song.mp3',
    labelOn: 'Music ON',
    labelOff: 'Music OFF',
  },
};

export default content;
