/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5804429445ab62b574482b3f33c74f66"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/3.ce1b8b39.js",
    "revision": "0f6a37b5bee3936820b646f4a202a59f"
  },
  {
    "url": "assets/js/4.61e0acef.js",
    "revision": "7b965984afd185ad2ec5e7c010f6cf2c"
  },
  {
    "url": "assets/js/5.5d3d78f0.js",
    "revision": "be6e203f387aa0b556ac290877261974"
  },
  {
    "url": "assets/js/6.0876e244.js",
    "revision": "447d10f50e58669791e477cd7534e942"
  },
  {
    "url": "assets/js/7.8de0df8f.js",
    "revision": "5c83b136d24ab5e56b22dcb9f7df3fa9"
  },
  {
    "url": "assets/js/8.3955df3f.js",
    "revision": "39030fffa58f1ed4e43e2fee3bdd84fa"
  },
  {
    "url": "assets/js/9.b670974b.js",
    "revision": "19edee8de5533c274ad9d96eb8fe7566"
  },
  {
    "url": "assets/js/app.c7229337.js",
    "revision": "d5b3262da5773aa7ff26141eb43ec50d"
  },
  {
    "url": "diary/index.html",
    "revision": "413b629116d2e202b3935555b6b1db8b"
  },
  {
    "url": "index.html",
    "revision": "2ad7c0b2d4314de955b8d93c345a6eb9"
  },
  {
    "url": "web-note/index.html",
    "revision": "6b831ff938785e09a8430780e2572738"
  },
  {
    "url": "web-note/markdown.html",
    "revision": "e757e827e68ad98dc0b05a8d618bb33b"
  },
  {
    "url": "zh/index.html",
    "revision": "e2dafb4749d7a658912d21b1879041c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
