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
    "revision": "6909f41a8b8bdcd8d2544d5e0174b916"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.e4951809.js",
    "revision": "d25c740cf92a031794013f431638fd6c"
  },
  {
    "url": "assets/js/11.462ef21b.js",
    "revision": "3ce88b35d167f731323bce31d978283c"
  },
  {
    "url": "assets/js/12.a6cafda4.js",
    "revision": "ee8669cbd191f6d6ab97e2bf3dbb4aea"
  },
  {
    "url": "assets/js/13.83beb065.js",
    "revision": "607b96d30e4724a164e8c6644229a59b"
  },
  {
    "url": "assets/js/14.a106a735.js",
    "revision": "3492d3bdf31e7d673293530eafb3d2d3"
  },
  {
    "url": "assets/js/15.e5d6e90b.js",
    "revision": "d047c7ba53e8dbe0d5eb204f6317e2c7"
  },
  {
    "url": "assets/js/16.93593c0f.js",
    "revision": "0fe94d6b060e86c6ca005611ab2ccc41"
  },
  {
    "url": "assets/js/17.2692d4ca.js",
    "revision": "2af76169e114a3aebbba525e22a63ba7"
  },
  {
    "url": "assets/js/18.3d88eb94.js",
    "revision": "6b683bf437274a9836ca2f17838dafb3"
  },
  {
    "url": "assets/js/19.14cc8963.js",
    "revision": "396faa96acb1e50e374804497d8946cd"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.fdd537df.js",
    "revision": "3b0fa29de8580f5f8a593c0fb7f5cb27"
  },
  {
    "url": "assets/js/21.cfd6da32.js",
    "revision": "19433d0bbb4f0eb810de4711038158b5"
  },
  {
    "url": "assets/js/22.b2cf4b36.js",
    "revision": "75ae590f0f687bd09b96cf28025bd2a5"
  },
  {
    "url": "assets/js/23.e2861ccf.js",
    "revision": "5f66aff19ce596514102e3622481bb8b"
  },
  {
    "url": "assets/js/24.e416dbbd.js",
    "revision": "f87d912c6aaa73e1d09d6ed10285201d"
  },
  {
    "url": "assets/js/25.310218e1.js",
    "revision": "5b3fc12d82ea2935b65708ec8f9cc06a"
  },
  {
    "url": "assets/js/26.b1481f29.js",
    "revision": "932bb9a090fd713e1b6d2f9592d317ce"
  },
  {
    "url": "assets/js/27.6b3aff7d.js",
    "revision": "b894c9666bf3e8b916c86afaa5d1175b"
  },
  {
    "url": "assets/js/28.53cb1b84.js",
    "revision": "3990ba28a9dedbcf8806fd062ff9bd8e"
  },
  {
    "url": "assets/js/29.47bc7b83.js",
    "revision": "7c5bf522d505ba5cab342020e1ff90a0"
  },
  {
    "url": "assets/js/3.3ff0072f.js",
    "revision": "1437af5430e10ed9b6fe93ad5d2b045e"
  },
  {
    "url": "assets/js/30.02433797.js",
    "revision": "002fd9b9057f161ee98fe0c1ce133187"
  },
  {
    "url": "assets/js/31.f613a1c4.js",
    "revision": "2b1ee51efce28220068329d738d7d548"
  },
  {
    "url": "assets/js/32.5b9c4abf.js",
    "revision": "9d107769819c97cdab3cbd8809974be0"
  },
  {
    "url": "assets/js/33.f80df6dc.js",
    "revision": "66e6e81e663494018af00801fe350e6b"
  },
  {
    "url": "assets/js/4.eb1bb222.js",
    "revision": "6e75541f43429bb7f97f4c5ebc5e3d37"
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
    "url": "assets/js/7.759dac86.js",
    "revision": "9d13a1538f8babfa59b49ae3fba67e98"
  },
  {
    "url": "assets/js/8.8a52d1e2.js",
    "revision": "336bb88f4c313c16b3f944eb7a4e7d56"
  },
  {
    "url": "assets/js/9.33810ed3.js",
    "revision": "8ab6f08cd555a1a2136a5d529d124f14"
  },
  {
    "url": "assets/js/app.03a5b9e6.js",
    "revision": "1e2929b59f7c5180bbe1d29cfe925fb6"
  },
  {
    "url": "daily/cat.html",
    "revision": "e5660c6ce87ed0d0a723126801497e54"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "b34afb28f4144428fc40289b297ad314"
  },
  {
    "url": "daily/food.html",
    "revision": "c6fd93f602a81dde9038efec0cd2a3fb"
  },
  {
    "url": "daily/index.html",
    "revision": "427a20c9e2199d4bb520c626f65882e9"
  },
  {
    "url": "daily/swin.html",
    "revision": "ddd4b48246f24ee876af3b9ccfc00e7e"
  },
  {
    "url": "daily/travel.html",
    "revision": "e201ecd5bd439eaef623a75436b898b3"
  },
  {
    "url": "daily/vlog.html",
    "revision": "8757152166b6f25c35fdb59b3910701a"
  },
  {
    "url": "daily/water-color.html",
    "revision": "df58e944ac15311a58b72ea74bd5e8cc"
  },
  {
    "url": "daily/yoga.html",
    "revision": "d59382e1feb3f73b6ee12e58fee3f619"
  },
  {
    "url": "diary/closure.html",
    "revision": "ce66edfc07f56576aa9d71091f5edbbf"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "d1d39301824a559b329cf43e480b320a"
  },
  {
    "url": "diary/index.html",
    "revision": "871d574649846be7d6c75d30318fe6cc"
  },
  {
    "url": "diary/type.html",
    "revision": "50a000a2cea9ae0e00c3c6fd659ed87c"
  },
  {
    "url": "index.html",
    "revision": "99209625a35043e6765d25de025a0047"
  },
  {
    "url": "note/code-review.html",
    "revision": "54d0c4bb6f2ad23b6882abdbb5585fbb"
  },
  {
    "url": "note/cors.html",
    "revision": "5aad2963b64bfef97ae21c9888460d95"
  },
  {
    "url": "note/export.html",
    "revision": "3bde1aa01e61e2b853c059f360d7005c"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "eabb00219779ff9b427874c2f26f09d4"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "96a63143171c080c3bcd04587e4fa633"
  },
  {
    "url": "note/index.html",
    "revision": "1628037e4418c181beb7adfcca6d722c"
  },
  {
    "url": "note/markdown.html",
    "revision": "2d016b7a4a6165321774b9585752cdcc"
  },
  {
    "url": "note/node.html",
    "revision": "30442954edb2525e6e0297b51378c7c7"
  },
  {
    "url": "note/security.html",
    "revision": "2c9f31ae246c5300b90ebfe14ad5f0bf"
  },
  {
    "url": "note/threejs.html",
    "revision": "49fcc5481d2378845f01f75e372de441"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "09c421061c4a254eca297fe65a8cd78b"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "3eb2c23e5516e31929de0c7d27f9fe91"
  },
  {
    "url": "note/webpack.html",
    "revision": "51f99e1cd07de85774c0baa623d89673"
  },
  {
    "url": "thinking/resume.html",
    "revision": "9ddf993260021205a0f00ec1c38fc251"
  },
  {
    "url": "zh/index.html",
    "revision": "4dc8141b6ff0e18106e33d9ae26d42fb"
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
