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
    "revision": "8296b6ccb7677c3ac15291018a2d73de"
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
    "url": "assets/js/15.b33ee2fd.js",
    "revision": "58ce4b4dc47cc50c46d986d24dffa832"
  },
  {
    "url": "assets/js/16.8a489fee.js",
    "revision": "a64685cd4c73cc41db0ac5a51aac92b7"
  },
  {
    "url": "assets/js/17.9f1d3d01.js",
    "revision": "ff3865082e0e0f7d24cb6c9e9208ff29"
  },
  {
    "url": "assets/js/18.f81ec1bd.js",
    "revision": "54913843b656f5f757c774694cdb66dd"
  },
  {
    "url": "assets/js/19.89cc9683.js",
    "revision": "40a44fa7b9e061c19ea4f8ed1c0afb79"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.c2784b00.js",
    "revision": "40f608231892e52247d67305c8da9715"
  },
  {
    "url": "assets/js/21.393b8828.js",
    "revision": "05657e788c3d86e5f0af4004a311b0c0"
  },
  {
    "url": "assets/js/22.249a8de3.js",
    "revision": "ec5e0cc8b6769ad77fcf181686d6cbe4"
  },
  {
    "url": "assets/js/23.5c6fe0eb.js",
    "revision": "3b70770b8aea820f512fe7aef35d55d4"
  },
  {
    "url": "assets/js/24.8d41d8e6.js",
    "revision": "1253d3f5361e0ccdef8c15495a6b0459"
  },
  {
    "url": "assets/js/25.142737d7.js",
    "revision": "6209a145647bb5f8e08faa52dc322429"
  },
  {
    "url": "assets/js/26.637a3fe5.js",
    "revision": "6a633c49215d45a4e16ce66ec0fe0c2b"
  },
  {
    "url": "assets/js/27.fe1dc5df.js",
    "revision": "60b2bbcc52c01888181a446f52b467bf"
  },
  {
    "url": "assets/js/28.20b2ce5a.js",
    "revision": "a00ead53bc89c080db99b3b307f26dea"
  },
  {
    "url": "assets/js/29.0cfbb881.js",
    "revision": "a57a91226e9ad7574a66c0d72cab5c1d"
  },
  {
    "url": "assets/js/3.9f702f27.js",
    "revision": "1865a83c7244ff50679a0c966d985111"
  },
  {
    "url": "assets/js/30.134678d8.js",
    "revision": "67a67a9e3bb3f056d4acee9cd38b6061"
  },
  {
    "url": "assets/js/31.d96f2364.js",
    "revision": "47ef38181c215fe16064de39291949d6"
  },
  {
    "url": "assets/js/4.0a583a32.js",
    "revision": "50b8df9d26b7ceffb0efb3a051a7ffa8"
  },
  {
    "url": "assets/js/5.04a550cf.js",
    "revision": "2c64280d726f12693cf93577e3273f33"
  },
  {
    "url": "assets/js/6.e352d5a8.js",
    "revision": "f5cd18b602ad43ff91dc58915e7a80ac"
  },
  {
    "url": "assets/js/7.048263af.js",
    "revision": "4e9f2e0dc269b1e902eb4ee542f61d82"
  },
  {
    "url": "assets/js/8.b3335f18.js",
    "revision": "39030fffa58f1ed4e43e2fee3bdd84fa"
  },
  {
    "url": "assets/js/9.33810ed3.js",
    "revision": "8ab6f08cd555a1a2136a5d529d124f14"
  },
  {
    "url": "assets/js/app.abf184dc.js",
    "revision": "0dd247fa7d063cc30b5c8f1409af80cc"
  },
  {
    "url": "daily/cat.html",
    "revision": "2e02ad9b3d5b70496b3318179a1aa4f0"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "cc11a49aa0f9f159df69441008ce566a"
  },
  {
    "url": "daily/food.html",
    "revision": "72a1a8191efca440236f8f9b848e5fe6"
  },
  {
    "url": "daily/index.html",
    "revision": "e31bd073096a70d17c1a1d9e01b11754"
  },
  {
    "url": "daily/swin.html",
    "revision": "f718984bf0f1dac2f2df174555271443"
  },
  {
    "url": "daily/vlog.html",
    "revision": "375a23b84e699c2ee34182bc4edfc546"
  },
  {
    "url": "daily/water-color.html",
    "revision": "a044b4802d3bc4ed64f23900cdb7e6a3"
  },
  {
    "url": "daily/yoga.html",
    "revision": "43458d6dc781aeae6c7dce8776fa4e6f"
  },
  {
    "url": "diary/closure.html",
    "revision": "13567680e148735024123dfefe2fea09"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "d07703c454f03fcef8f158c572d20821"
  },
  {
    "url": "diary/index.html",
    "revision": "092fab9e2023292bc2e8caaa5b7d64ce"
  },
  {
    "url": "diary/type.html",
    "revision": "445155c3ed9b94d9abfd8db1da8c5bf2"
  },
  {
    "url": "index.html",
    "revision": "3558571d37e13eda06261a129b1a2e96"
  },
  {
    "url": "note/code-review.html",
    "revision": "e424d2cc68c8b32507b8209507be1b34"
  },
  {
    "url": "note/export.html",
    "revision": "19a63bc3f86ba5e9e8dfaa53bb69e44e"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "296174cf54312bb1e8418342fab74799"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "05e0f854d86b84ef5b3fac67f084b40c"
  },
  {
    "url": "note/index.html",
    "revision": "140baea3852acf138a863f393149be1d"
  },
  {
    "url": "note/markdown.html",
    "revision": "986ece9dea64d439acc2b75e438de375"
  },
  {
    "url": "note/node.html",
    "revision": "1e521ee128a17d94d471568df4c6ffe3"
  },
  {
    "url": "note/security.html",
    "revision": "ea833db044bfa4c7c5e173174c4898d9"
  },
  {
    "url": "note/threejs.html",
    "revision": "890a219d17d7b5413ec6ba6c7d3679d4"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "22df25b2dc5db52764d2a8930d483fea"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "34a0e74645972c1d44cd4be5835d80b6"
  },
  {
    "url": "note/webpack.html",
    "revision": "6ce34b1ac6caaa5494382ff25acb881b"
  },
  {
    "url": "thinking/resume.html",
    "revision": "8b89b5512508fc92256725034d4be206"
  },
  {
    "url": "zh/index.html",
    "revision": "7d91ba1c4e3d393e9f1e7eecaed51c1d"
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
