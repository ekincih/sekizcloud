// sw.js
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('sekizdijital-cache-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css', // Eğer ayrı bir stil dosyanız varsa
                '/icon.png', // Uygulama simgeniz
                '/manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
