const CACHE_NAME = "flappy-bird";

let resourcesToCache = [
  "/",
  "/build/clumsy-min.js",
  "/data/bgm/theme.mp3",
  "/data/bgm/theme.ogg",
  "/data/css/gamefont.eot",
  "/data/css/gamefont.svg",
  "/data/css/gamefont.ttf",
  "/data/css/gamefont.woff",
  "/data/img/bg.png",
  "/data/img/clumsy.png",
  "/data/img/favicon.ico",
  "/data/img/gameover.png",
  "/data/img/gameoverbg.png",
  "/data/img/getready.png",
  "/data/img/ground.png",
  "/data/img/hit.png",
  "/data/img/logo.png",
  "/data/img/new.png",
  "/data/img/pipe.png",
  "/data/img/share.png",
  "/data/img/tweet.png",
  "/data/sfx/hit.mp3",
  "/data/sfx/hit.ogg",
  "/data/sfx/lose.mp3",
  "/data/sfx/lose.ogg",
  "/data/sfx/wing.mp3",
  "/data/sfx/wing.ogg",
  "/data/sfx/wing.wav",
  "/js/entities/entities.js",
  "/js/entities/HUD.js",
  "/js/screens/gameover.js",
  "/js/screens/play.js",
  "/js/screens/title.js",
  "/js/game.js",
  "/js/melonJS-min.js",
  "/Gruntfile.js",
  "/index.css",
  "/index.html",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(resourcesToCache);
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// Update a service worker
const cacheWhitelist = ["flappy-bird"];
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
