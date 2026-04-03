# Project 2 — Step 5: Styling & Responsive Layouts

**Student Name:** Kopzhasar Beksultan
**Date:** 03.04.2026  


## Жоба туралы


Бұл қадамда React Native Flexbox арқылы responsive layout жасалды.

## Компоненттер


### GridLayout.tsx
Балаларды автоматты колонкаларға бөледі.
`useWindowDimensions` арқылы экран еніне қарай колонка өлшемін есептейді.

### ResponsiveHeader.tsx
Safe area қолдауы бар header.
`useSafeAreaInsets` арқылы Android/iOS-та notch аймағын дұрыс өңдейді.
Планшетте (`width >= 768`) sidebar layout көрсетеді.

### AdaptiveLayout.tsx
Телефон, планшет және landscape үшін автоматты layout.
`FeatureCard` және `StatsRow` компоненттері кіреді.

## Responsive Design

| Экран | Layout |
|---|---|
| Телефон (portrait) | Бір колонка |
| Телефон (landscape) | `flexDirection: row` |
| Планшет (768px+) | Екі колонка + sidebar |

## Іске қосу
```bash
npm install
npx expo start
```