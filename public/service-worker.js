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
    "revision": "51b26761a4b23e253dfb6c22a241c287"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.21b2f37f.js",
    "revision": "d0d1aa3327c52427d8384fdb22f38655"
  },
  {
    "url": "assets/js/11.b3704128.js",
    "revision": "2918494d4817d7b095b064e9fe746e4e"
  },
  {
    "url": "assets/js/12.5e4418f2.js",
    "revision": "74a3d8447cbbdc0dd691e04199cba8bc"
  },
  {
    "url": "assets/js/13.28f8d171.js",
    "revision": "3c083fdc251f8ce00d45b359b9131ceb"
  },
  {
    "url": "assets/js/14.79017e0c.js",
    "revision": "8b95393029e38d2c63e58563040c8fe2"
  },
  {
    "url": "assets/js/15.cacd2b95.js",
    "revision": "b8fb70442330c731ed88982bc9169b1b"
  },
  {
    "url": "assets/js/16.8d678d12.js",
    "revision": "71c0a6f6073e5a4d44f670b2779a68d3"
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
    "url": "assets/js/4.80eab5b0.js",
    "revision": "f17cf5b9f336fd23fd61532adf9e61e9"
  },
  {
    "url": "assets/js/5.fa426605.js",
    "revision": "f8cbf02835c950e4b9f30026867312db"
  },
  {
    "url": "assets/js/6.09370b06.js",
    "revision": "0f7e2301c583f93aeb920a9413363f1a"
  },
  {
    "url": "assets/js/7.d1064310.js",
    "revision": "63d756e985bc15a6e6d319b8170d7dbd"
  },
  {
    "url": "assets/js/8.6d5a9ad0.js",
    "revision": "e63ca47f6da8387b235a72fcb4fc02a9"
  },
  {
    "url": "assets/js/9.c167ac35.js",
    "revision": "e7a9a15982e1708986591e6c1f9b768f"
  },
  {
    "url": "assets/js/app.ceafda2a.js",
    "revision": "ce41bf1070b4a272b7f2f82f422fd1cc"
  },
  {
    "url": "daily/index.html",
    "revision": "361b68551f6ce9d415b4989561072f3f"
  },
  {
    "url": "diary/index.html",
    "revision": "2f1ff8f23a7e6edbfad5252e1e4e2fa4"
  },
  {
    "url": "index.html",
    "revision": "39bd3315404613149133d9ba1eab45a5"
  },
  {
    "url": "note/code-review.html",
    "revision": "cd37c851daf6f1dc69ec597e2201133d"
  },
  {
    "url": "note/export.html",
    "revision": "5a7dec1d94ba513f133478cc4b966fcc"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "da8acaa776506b51c20da5ad8a0b4027"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "2f3c42525e5e777ad7594cd3b1e93177"
  },
  {
    "url": "note/index.html",
    "revision": "271d7bf60519def78da4d00e0dc5b5f1"
  },
  {
    "url": "note/markdown.html",
    "revision": "71d40ac9ed2bf2c730dd07cdd8a2b0d2"
  },
  {
    "url": "note/node.html",
    "revision": "c6fb9344d16ddfdfe8acef30cf381e78"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "9a88f402f14c254757b94d79f0097c01"
  },
  {
    "url": "zh/index.html",
    "revision": "88acbaa3df94a1458bd5129699ecf227"
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
