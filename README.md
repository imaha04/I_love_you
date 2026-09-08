# Иманжан & Адалят — private invitation

Одностраничное персональное приглашение на 09.09.2026. Проект собран на React, Vite/Vinext, Tailwind CSS, Framer Motion и Lucide React.

## Установка и запуск

Нужен Node.js 22.13 или новее.

```bash
npm install
npm run dev
```

После запуска откройте адрес, который появится в терминале (обычно `http://localhost:3000`).

## Где менять данные

Весь текст, имена, даты, адрес, ссылки, музыка и список фотографий находятся в одном файле:

`src/data/content.js`

- Имена: `content.couple`
- Основная дата: `date`, `dateSpaced`, `dateLong`
- Время: `time`
- Точное время для таймера: `countdownTarget` в ISO-формате, например `2026-09-09T19:00:00+05:00`
- События истории: `timeline`
- Тексты приглашения: `invitation`
- Место и адрес: `location.name` и `location.address`
- Ссылки на карты: `location.mapsUrl` и `location.appleMapsUrl`
- SEO-текст и обложка: `seo`

Если ссылки на карты пока оставлены как `[MAPS_URL]`, кнопка автоматически откроет поиск по названию места и адресу.

## Как заменить фотографии

1. Поместите оптимизированные изображения в `public/images`.
2. В `src/data/content.js` замените пути в объекте `images`.
3. Сохраняйте реальные `width` и `height` — это предотвращает скачки верстки.
4. Для быстрой загрузки рекомендуется подготовить AVIF и WebP в двух размерах и указать их в `avifSrcSet` и `webpSrcSet`.

Основные файлы сейчас:

- `hero-*` — обложка и часть истории
- `moments-*` — галерея и timeline
- `final-*` — финальный экран
- `og.jpg` — Open Graph preview 1200×630

Порядок, подписи, кадрирование и пропорции галереи меняются в `content.gallery.items`.

## Как добавить музыку

Поместите композицию по адресу:

`public/music/song.mp3`

Либо измените `content.music.src`. Автовоспроизведение намеренно отключено: звук включается только после нажатия на кнопку.

## Production build

```bash
npm run build
```

Локальная проверка production-версии:

```bash
npm run start
```

## Структура

```text
src/
  assets/images/
  components/
    Hero/
    Intro/
    Timeline/
    Gallery/
    Interlude/
    Invitation/
    Countdown/
    Location/
    DressCode/
    FinalSection/
    MusicPlayer/
    Preloader/
    CustomCursor/
    SiteExperience/
    ui/
  data/content.js
public/
  images/
  music/
```

Нижние фотографии загружаются лениво, первый экран использует preload, размеры изображений зарезервированы, а Framer Motion подключён через `LazyMotion` с лёгким набором `domAnimation`.
