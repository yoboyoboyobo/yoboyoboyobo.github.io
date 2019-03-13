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
    "revision": "7ff8eed89fd59e9b80f872c8420f91a0"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.afcd203d.js",
    "revision": "da6265cb6a1eb0fc4f97db04f4d9c5fa"
  },
  {
    "url": "assets/js/11.d994b79f.js",
    "revision": "129ba45c94c898c2c24757b6a4f142fa"
  },
  {
    "url": "assets/js/12.2a8b5840.js",
    "revision": "3cae85a3a39f8ac65d3036cf987ef976"
  },
  {
    "url": "assets/js/13.0a816165.js",
    "revision": "8a2f356924ee477ffdfcbb370fb76fcc"
  },
  {
    "url": "assets/js/14.4fcbcd9b.js",
    "revision": "4ef1fad276724313367c7796f7b716e7"
  },
  {
    "url": "assets/js/15.b8f34bdf.js",
    "revision": "eb5d2998ff99a41dcd340fd13ece9373"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/3.64964003.js",
    "revision": "c4701049bcabe217597340b6d13aa86e"
  },
  {
    "url": "assets/js/4.65aacae1.js",
    "revision": "917c1bb024870cebdd905eadb62c26a6"
  },
  {
    "url": "assets/js/5.fe6a0843.js",
    "revision": "e7434fe1f10c7f51f7644e2e8473243e"
  },
  {
    "url": "assets/js/6.895f5a2e.js",
    "revision": "476a227e0ca6d5db522edae6eb05d126"
  },
  {
    "url": "assets/js/7.9bd9465d.js",
    "revision": "0f7974c551d29c8a7c510493d7fd6527"
  },
  {
    "url": "assets/js/8.c326d301.js",
    "revision": "c49cbaf8fa1df30a52b898ce2e63e0b8"
  },
  {
    "url": "assets/js/9.a949e116.js",
    "revision": "368c7420e58fe2ae7fe081123a665360"
  },
  {
    "url": "assets/js/app.35f5a6fb.js",
    "revision": "4c1c3d23baeb29e48f46800d5a6054b9"
  },
  {
    "url": "daily/index.html",
    "revision": "0e7a4008d9e49d945c4a26421fe582c7"
  },
  {
    "url": "diary/index.html",
    "revision": "109dc4c2ad89ba3f5ee8933ce36274a3"
  },
  {
    "url": "index.html",
    "revision": "06e0684061d1dc8c0fee2121b8cd1aa5"
  },
  {
    "url": "note/code-review.html",
    "revision": "579fab3ff25a1230782cf5c881aac80f"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "2916f0cf9e3084980754d20901e5ce0b"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "d84e18d45b515f2e330535680debd885"
  },
  {
    "url": "note/index.html",
    "revision": "45492eb9647b58c99e8d70c0f21424f1"
  },
  {
    "url": "note/markdown.html",
    "revision": "9dec5c620f31f09565fead044948accf"
  },
  {
    "url": "note/node.html",
    "revision": "a006602e1d22c5eb56269b7911ecc8cf"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "396a4d1ed46b680a959a024a5856d602"
  },
  {
    "url": "zh/index.html",
    "revision": "1b24e23236f9e6a76934df937fd0d487"
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
