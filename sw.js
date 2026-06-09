const CACHE_NAME = 'notebook-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Кешуємо файли при першому відкритті
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Працюємо в офлайні: беремо дані з кешу
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
