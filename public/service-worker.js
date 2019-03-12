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
    "revision": "8f19409a386628a61ce24d3fe50677a6"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.7995c3df.js",
    "revision": "208df996d85417071735ae4479602edf"
  },
  {
    "url": "assets/js/11.eaa6acac.js",
    "revision": "88a8e152aa8486500b9eee77f98df244"
  },
  {
    "url": "assets/js/12.b157ebaf.js",
    "revision": "a2727101f5846ca655c788a40f245f71"
  },
  {
    "url": "assets/js/13.19c0f699.js",
    "revision": "3c083fdc251f8ce00d45b359b9131ceb"
  },
  {
    "url": "assets/js/14.46d8b18c.js",
    "revision": "347930786a26282cf321fc0523740825"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/3.402131cc.js",
    "revision": "604e48d65d7195b67aa805e562360a0f"
  },
  {
    "url": "assets/js/4.e32a764f.js",
    "revision": "ae0b14b02acea143b5da8764f6c5aa07"
  },
  {
    "url": "assets/js/5.a428fe0e.js",
    "revision": "3425f7677ad442f81f4f29b13ea90c30"
  },
  {
    "url": "assets/js/6.8e04c8ae.js",
    "revision": "1b7ca597df7ee0607d862fb5cc087f8f"
  },
  {
    "url": "assets/js/7.75c5fc1d.js",
    "revision": "7f0f174f866ef49af1cc0f06b0baab83"
  },
  {
    "url": "assets/js/8.c326d301.js",
    "revision": "c49cbaf8fa1df30a52b898ce2e63e0b8"
  },
  {
    "url": "assets/js/9.ebdd007e.js",
    "revision": "1ebb4082defa8d8cc64e7e2d3ab35f7c"
  },
  {
    "url": "assets/js/app.bee70f3a.js",
    "revision": "4268c77b5948b0f65c6793948fc59e84"
  },
  {
    "url": "daily/index.html",
    "revision": "d8ecbb71508545dec716ad95603e1d11"
  },
  {
    "url": "diary/index.html",
    "revision": "ceb0f403106bdae0528253e2d5a52b0f"
  },
  {
    "url": "index.html",
    "revision": "b5237f8b25c201b9d1ebfc6b87c275f6"
  },
  {
    "url": "note/code-review.html",
    "revision": "ce76bb2c4aaf6be95dc1cf5ed6a16bcb"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "c58c54561800d485ecc765596959b970"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "92ca2fd54942a29de4219ccc2d3c4c56"
  },
  {
    "url": "note/index.html",
    "revision": "213eb973a2a2e03275a5dce6ce9e59e5"
  },
  {
    "url": "note/markdown.html",
    "revision": "c7b1b96b10fcf4155c548f7a7391cbc4"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "b19178dd70a7d2c2c9c272131f43004f"
  },
  {
    "url": "zh/index.html",
    "revision": "4c078b4e5a8037bea6a369648860d2cc"
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
