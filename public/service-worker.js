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
    "revision": "c5644b07b79cad68c097e15df1b75ba5"
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
    "url": "assets/js/29.f574570d.js",
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
    "url": "assets/js/app.0a220e26.js",
    "revision": "e7397973f92a29c9943e115d60b9fb82"
  },
  {
    "url": "daily/cat.html",
    "revision": "718223f163ac114852967e1e9834c6ff"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "ff550b2954ea39a939c7bca01d74bb48"
  },
  {
    "url": "daily/food.html",
    "revision": "d4098fa7af9c5ba7b102f67afe78f672"
  },
  {
    "url": "daily/index.html",
    "revision": "c9f05fc139a34d63dfd2c364b81d3d82"
  },
  {
    "url": "daily/swin.html",
    "revision": "c12221971fcdb0382faa5de81c8bce69"
  },
  {
    "url": "daily/vlog.html",
    "revision": "aaab03b1575b9f281388ebce85746559"
  },
  {
    "url": "daily/water-color.html",
    "revision": "9ceac09845fdce0b2548c0a204966c7c"
  },
  {
    "url": "daily/yoga.html",
    "revision": "15be174efd522e3a42fdbaa0786f4ece"
  },
  {
    "url": "diary/closure.html",
    "revision": "15c8209155d7113fe92a415937192748"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "f696c8578839d7d4e3c8d727c547d20b"
  },
  {
    "url": "diary/index.html",
    "revision": "c090aca3a722fa5f0dc29835ec705f32"
  },
  {
    "url": "diary/type.html",
    "revision": "da8acde2332c975fb1b1978872f0cbb6"
  },
  {
    "url": "index.html",
    "revision": "38449b282ed71fdb66138f9798d381e9"
  },
  {
    "url": "note/code-review.html",
    "revision": "feb1191d161cad6664202f81f1d5dd99"
  },
  {
    "url": "note/export.html",
    "revision": "28fad863a013fc3eb678d5c405571f49"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "73c4c4c6e6c86555204c09489724c4ed"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "9656d093bc68a951da1fc6e249609f23"
  },
  {
    "url": "note/index.html",
    "revision": "fd0706c038835e54f24b5461ff9aedce"
  },
  {
    "url": "note/markdown.html",
    "revision": "f540be7b92343244124cd04eecabc5a5"
  },
  {
    "url": "note/node.html",
    "revision": "d7053eb0f3a8da5bde5654d908df1015"
  },
  {
    "url": "note/security.html",
    "revision": "71348c440213053c816bd798cb7ed562"
  },
  {
    "url": "note/threejs.html",
    "revision": "f24ae0d69d46995a844b0edf3e694ef1"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "4c5b5e7e41e48078d324d7848fd5af83"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "5c471cf328b7597a06825d4614e935bb"
  },
  {
    "url": "note/webpack.html",
    "revision": "b95f209caec408040072af3d0cb4092d"
  },
  {
    "url": "thiking/resume.html",
    "revision": "52be022f93c07565c3ebe395b1bc7a45"
  },
  {
    "url": "zh/index.html",
    "revision": "5f48c6b84ac31f7202f60f9dcbc31126"
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
