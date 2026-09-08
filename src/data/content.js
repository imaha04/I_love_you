const images = {
  hero: {
    src: '/images/hero-1120.webp',
    webpSrcSet: '/images/hero-960.webp 960w, /images/hero-1120.webp 1120w',
    avifSrcSet: '/images/hero-960.avif 960w, /images/hero-1120.avif 1120w',
    alt: 'Пара встречает вечер на террасе',
    width: 1120,
    height: 1400,
  },
  moments: {
    src: '/images/moments-1280.webp',
    webpSrcSet: '/images/moments-768.webp 768w, /images/moments-1280.webp 1280w',
    avifSrcSet: '/images/moments-768.avif 768w, /images/moments-1280.avif 1280w',
    alt: 'Руки пары во время прогулки',
    width: 1280,
    height: 853,
  },
  final: {
    src: '/images/final-1120.webp',
    webpSrcSet: '/images/final-960.webp 960w, /images/final-1120.webp 1120w',
    avifSrcSet: '/images/final-960.avif 960w, /images/final-1120.avif 1120w',
    alt: 'Пара уходит по вечерней аллее',
    width: 1120,
    height: 1400,
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
  timeline: [
    {
      date: '[DATE_1]',
      title: 'Всё началось здесь.',
      description: '[STORY_TEXT_1]',
      image: images.hero,
      position: '50% 62%',
    },
    {
      date: '[DATE_2]',
      title: 'Первое из множества «вместе».',
      description: '[STORY_TEXT_2]',
      image: images.moments,
      position: '50% 50%',
    },
    {
      date: '[DATE_3]',
      title: 'Моменты, которые хочется сохранить.',
      description: '[STORY_TEXT_3]',
      image: images.final,
      position: '50% 62%',
    },
    {
      date: '[DATE_4]',
      title: 'Мы.',
      description: '[STORY_TEXT_4]',
      image: images.moments,
      position: '58% 50%',
    },
  ],
  timelineHeading: {
    label: 'OUR STORY',
    title: 'Воспоминания, из которых сложились мы.',
  },
  gallery: {
    title: ['Little moments.', 'Big memories.'],
    subtitle:
      'Из тысяч фотографий невозможно выбрать всего несколько. Но именно эти хочется оставить здесь.',
    items: [
      { image: images.hero, alt: 'Вечер на террасе', ratio: 'portrait', position: '50% 65%' },
      { image: images.moments, alt: 'Прогулка по старому городу', ratio: 'landscape', position: '50% 50%' },
      { image: images.final, alt: 'Тихая вечерняя прогулка', ratio: 'square', position: '50% 70%' },
      { image: images.moments, alt: 'Момент, который хочется сохранить', ratio: 'portrait', position: '38% 50%' },
      { image: images.hero, alt: 'Вместе на закате', ratio: 'square', position: '50% 55%' },
      { image: images.final, alt: 'Дорога в новый вечер', ratio: 'landscape', position: '50% 58%' },
    ],
  },
  interlude: {
    lines: ['And somehow,', 'through all these moments,', 'we arrived here.'],
  },
  invitation: {
    label: 'A SPECIAL INVITATION',
    greeting: 'Дорогая Адалят,',
    paragraphs: [
      'Приглашаю тебя разделить со мной один особенный вечер.',
      'Вечер, который хочется запомнить не только фотографиями, но и тем чувством, которое останется после него.',
    ],
    closing: 'Буду ждать тебя.',
    signature: 'Иманжан',
  },
  location: {
    label: 'WHERE',
    name: '[LOCATION NAME]',
    address: '[ADDRESS]',
    mapsUrl: '[MAPS_URL]',
    appleMapsUrl: '[APPLE_MAPS_URL]',
    buttonLabel: 'Open location',
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
  countdown: {
    title: 'Until our evening',
    complete: 'The moment is here.',
    labels: ['Days', 'Hours', 'Minutes', 'Seconds'],
  },
};

export default content;
