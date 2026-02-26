const CACHE_NAME = "cnh-app-v1";

const urlsToCache = [
  "index.html",
  "pag2.html",
  "pag3.html",
  "pag4.html",
  "pag5.html",
  "pag6.html",
  "pag1ed.jpg",
  "pag2ed.jpg",
  "pag3ed.jpg",
  "pag4ed.jpg",
  "pag5ed.jpg",
  "pag6ed.jpg",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});