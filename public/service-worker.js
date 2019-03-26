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
    "revision": "dddc43bbd7e26f17433e2bdfa098ae21"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.6d84b4f1.js",
    "revision": "8f8f15eb1f261a1f0d08e6dca60dbe28"
  },
  {
    "url": "assets/js/11.fbd09a8a.js",
    "revision": "148aa0ab1a12b6adaed0aee64a1c0bb9"
  },
  {
    "url": "assets/js/12.6370a60d.js",
    "revision": "2eb80135240c540f4e557c6db3a7fed3"
  },
  {
    "url": "assets/js/13.00802d26.js",
    "revision": "ee3c6238e14a36c77b75e6009465878f"
  },
  {
    "url": "assets/js/14.d0a03b48.js",
    "revision": "e23683250825ad39430768b91ec29750"
  },
  {
    "url": "assets/js/15.3721f19e.js",
    "revision": "239cdb59dc8be74e9e5a75aad205ed9c"
  },
  {
    "url": "assets/js/16.f6fd8527.js",
    "revision": "679ea63dcc61f75aa0abe5e0bee895cc"
  },
  {
    "url": "assets/js/17.7fec94f0.js",
    "revision": "db9576d7d5ecff3bbd982ff56dcd7060"
  },
  {
    "url": "assets/js/18.3b1e0839.js",
    "revision": "698dc4e0f501477da84a62c0643551bb"
  },
  {
    "url": "assets/js/19.e92ca9e4.js",
    "revision": "835e13ba5e9e5c6418bfdd13ab5c5edb"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.7e53cf6a.js",
    "revision": "f3c29cfe79ec1b305e9a892919c0c7f2"
  },
  {
    "url": "assets/js/21.fa38bfa9.js",
    "revision": "635cfe39b0d980c2c3fc5b8019123dc2"
  },
  {
    "url": "assets/js/22.7fb2a8ce.js",
    "revision": "79092491fd0d9bcec8f9ecb0b4fb8318"
  },
  {
    "url": "assets/js/23.2789c46a.js",
    "revision": "6c4969f218c5a1c93bf5c265a7167ab8"
  },
  {
    "url": "assets/js/24.6aec138e.js",
    "revision": "221a6e3b23fe9774b90bc3731fd2464c"
  },
  {
    "url": "assets/js/25.2694d407.js",
    "revision": "757b4f24ca24a1125ee8b4d10041b9f5"
  },
  {
    "url": "assets/js/26.5fcacfc8.js",
    "revision": "eda948b79c6e0024674713cc7345a8c2"
  },
  {
    "url": "assets/js/27.b037f15c.js",
    "revision": "90443e6a75a648cb57f99561cdfe1bd0"
  },
  {
    "url": "assets/js/28.c0d2d562.js",
    "revision": "7ff3c1911520ec37d2af24f01c152c5c"
  },
  {
    "url": "assets/js/29.948cebb3.js",
    "revision": "16f336ca23ccfd9f7ca29b473df7134e"
  },
  {
    "url": "assets/js/3.26b3e3db.js",
    "revision": "04504f8ccb3576caeeda7af739cda71c"
  },
  {
    "url": "assets/js/4.5daca38e.js",
    "revision": "53b128b24450a418606252d207726f43"
  },
  {
    "url": "assets/js/5.04a550cf.js",
    "revision": "2c64280d726f12693cf93577e3273f33"
  },
  {
    "url": "assets/js/6.32bdbe69.js",
    "revision": "7ac734bf472fdcb87ede0a3256ad607d"
  },
  {
    "url": "assets/js/7.1752c2f1.js",
    "revision": "6ed8984f1486b960171b943d94c1ff33"
  },
  {
    "url": "assets/js/8.b3335f18.js",
    "revision": "39030fffa58f1ed4e43e2fee3bdd84fa"
  },
  {
    "url": "assets/js/9.049083b4.js",
    "revision": "524b4fbf64cd2fb8e74fa0a123a7ac1f"
  },
  {
    "url": "assets/js/app.4a18057d.js",
    "revision": "a7b22b621188207043a1fbdecbe7ea39"
  },
  {
    "url": "daily/cat.html",
    "revision": "78e8463479bd11086ca32e96052f0ef9"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "00a032e7f98ca992211a8309f9dc431c"
  },
  {
    "url": "daily/food.html",
    "revision": "a8b1b7b74e5069b49360589dd7b17782"
  },
  {
    "url": "daily/index.html",
    "revision": "8c80f9f02d3a61357e91116eff024da6"
  },
  {
    "url": "daily/swin.html",
    "revision": "bcb00b61c5f47b4bbb072efe71eeecff"
  },
  {
    "url": "daily/vlog.html",
    "revision": "990f8a18797f9402fb4fb920b217c6bd"
  },
  {
    "url": "daily/water-color.html",
    "revision": "674e5eb94a2043fb5c00236fb2b10474"
  },
  {
    "url": "daily/yoga.html",
    "revision": "27b5fbb5d8366332cb7ed371229f274a"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "31459883413335efe30d112b2df5be68"
  },
  {
    "url": "diary/index.html",
    "revision": "af4f4d64aea1218d8e4cfd38a451bb41"
  },
  {
    "url": "diary/type.html",
    "revision": "3011994d805a7f4b5ddf08205a382be3"
  },
  {
    "url": "index.html",
    "revision": "c7ec683e1a905abaa80f57711b097872"
  },
  {
    "url": "note/code-review.html",
    "revision": "6c5af9cc37ad8633ec82dde73d728e8a"
  },
  {
    "url": "note/export.html",
    "revision": "58de21d507644ceaf7a2b08357c5c714"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "d8ebb4802746d9499c0727dbd62b32d2"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "b350c0edec8bc4a9198059c26c00d0cc"
  },
  {
    "url": "note/index.html",
    "revision": "f9c5fe7a173ab043e315dc9b1264d9d0"
  },
  {
    "url": "note/markdown.html",
    "revision": "a62e08ab5d805170828ad93abe532282"
  },
  {
    "url": "note/node.html",
    "revision": "aa91b05890270874953b2373fda9c6a7"
  },
  {
    "url": "note/threejs.html",
    "revision": "a3c511dabec1190d4216806f1179f22b"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "facd73147ac677c99ca04d8e6148b3aa"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "3147194a3d8390bafd79460f8dfe6f67"
  },
  {
    "url": "note/webpack.html",
    "revision": "f80ce7b14ba4f82a4a831cdedcd6d4d7"
  },
  {
    "url": "thiking/resume.html",
    "revision": "425d04aeb388ce97fa3446192ddefb03"
  },
  {
    "url": "zh/index.html",
    "revision": "aa390f1a7ffb81320b301e2f6395a1b6"
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
