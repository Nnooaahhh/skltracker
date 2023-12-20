// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('your-cache-name').then((cache) => {
            return cache.addAll([
                '/',
                '/path/to/your/styles.css',
                '/path/to/your/scripts.js',
                // Add other resources you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
