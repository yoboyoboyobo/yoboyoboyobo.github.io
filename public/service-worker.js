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
    "revision": "fc48c8eddb896ce595731fc88ba00edc"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.6d64aed0.js",
    "revision": "540ef1cea3c1b49239dd8fa14113f133"
  },
  {
    "url": "assets/js/11.2b2d3fb6.js",
    "revision": "44d1748888133d763e70603a2c4c3858"
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
    "url": "assets/js/4.f9faa23a.js",
    "revision": "74a98734d8def8d10e9f3e609d15e681"
  },
  {
    "url": "assets/js/5.e9ed2ff9.js",
    "revision": "2f6a4ea0400ee7b043bbbdac07f77d88"
  },
  {
    "url": "assets/js/6.0876e244.js",
    "revision": "447d10f50e58669791e477cd7534e942"
  },
  {
    "url": "assets/js/7.553b85ea.js",
    "revision": "3020bcf640e4b1a452b7d0fb5936f036"
  },
  {
    "url": "assets/js/8.fd4427bb.js",
    "revision": "c3ff5ab1a70352092ef3a30f3d870bd8"
  },
  {
    "url": "assets/js/9.5c8f7764.js",
    "revision": "b28d6f541ef1e53c1eb646bd60ba0fc5"
  },
  {
    "url": "assets/js/app.22809f38.js",
    "revision": "2c4ca6ac5c8ffb0db86f5d235c29f796"
  },
  {
    "url": "diary/index.html",
    "revision": "f74d81ba567ff597c66512ab470d7869"
  },
  {
    "url": "index.html",
    "revision": "807a36f68a6f56276611322ac7e6157c"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "84c7d7b34e7bc64810f4a98c0fe17837"
  },
  {
    "url": "note/index.html",
    "revision": "b24febae9a0168cdfc4d48b10646fd77"
  },
  {
    "url": "note/markdown.html",
    "revision": "6d25ae09356386d2f2520252a8eb2960"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "4603f38f9bdec40cfd6155bc18eb68a2"
  },
  {
    "url": "zh/index.html",
    "revision": "385511cfe085b074319c2e3b5bfeec64"
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
