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
    "revision": "d115145d109e5ce6eb62c96e209a22a6"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.e6d9453f.js",
    "revision": "4706b4b413a4079b88560edb58130e33"
  },
  {
    "url": "assets/js/11.ebcedf70.js",
    "revision": "5cecba177f3a1c98211ad28420b99aa5"
  },
  {
    "url": "assets/js/12.6e88cce2.js",
    "revision": "dd0a69b8ad8287236e99b46aef2be05c"
  },
  {
    "url": "assets/js/13.738a1263.js",
    "revision": "1e45bb2a55953ce98608524ee4e98dc1"
  },
  {
    "url": "assets/js/14.4a94e457.js",
    "revision": "14f9bc9802c1072f033d1f04ed72d94f"
  },
  {
    "url": "assets/js/15.eff9dbd3.js",
    "revision": "0d4a5012aa8b61fc2a23965b063f69c0"
  },
  {
    "url": "assets/js/16.7d61a95e.js",
    "revision": "dd9913eca8d273bcc3ada265c0394fe8"
  },
  {
    "url": "assets/js/17.47e4ca1c.js",
    "revision": "d131eaceb01eb7759c32f059fa7274ff"
  },
  {
    "url": "assets/js/18.1c53f16a.js",
    "revision": "54bd9a01eb43d7a83ff843559b454e75"
  },
  {
    "url": "assets/js/19.d28dca05.js",
    "revision": "cc58a6bc1c68038cea7b3fd07d7c578b"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.a35fab80.js",
    "revision": "ed348651f4dacd49c6645a0d6b7c7fbd"
  },
  {
    "url": "assets/js/21.de289ce2.js",
    "revision": "ce57a494bd8aa0631f37d6b54227c11f"
  },
  {
    "url": "assets/js/22.3dadca41.js",
    "revision": "3d5ee4b276d94cc390f4056c5b0067b7"
  },
  {
    "url": "assets/js/23.f1a54415.js",
    "revision": "aba98b17061402e685556e691d17cc74"
  },
  {
    "url": "assets/js/24.7475d8df.js",
    "revision": "c8af4ad3cd1104c5b46a776b5d4fc446"
  },
  {
    "url": "assets/js/3.e5001ba1.js",
    "revision": "e26a9456d6ac019e62c95abaec706e8b"
  },
  {
    "url": "assets/js/4.7d9dfd59.js",
    "revision": "39073300b92dc33afe896e68916ca92a"
  },
  {
    "url": "assets/js/5.6d35da42.js",
    "revision": "a044fccc70999e5b6fbb523e072ebd07"
  },
  {
    "url": "assets/js/6.1e27f90d.js",
    "revision": "ed42445f69760fce6771f3300158dcf5"
  },
  {
    "url": "assets/js/7.edce27b4.js",
    "revision": "be4b4c3a088f89b05e036db677bed7b4"
  },
  {
    "url": "assets/js/8.b28f647c.js",
    "revision": "bf0c85ba571f3389c1f86516f859c06d"
  },
  {
    "url": "assets/js/9.41ec1058.js",
    "revision": "d694d9971a1718bcd5d6a527138a961e"
  },
  {
    "url": "assets/js/app.48dd69af.js",
    "revision": "168e0139f5961db9621946076afa67ad"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "89a6aa480782f985168cb9950c70e8cf"
  },
  {
    "url": "daily/index.html",
    "revision": "5745197ef4406642a203830220282802"
  },
  {
    "url": "daily/swin.html",
    "revision": "00c0a13721d973ca1e196d6c6112916c"
  },
  {
    "url": "daily/vlog.html",
    "revision": "c8a6600b978d6b8cc1aff9594819e84c"
  },
  {
    "url": "daily/water-color.html",
    "revision": "319c45bb294ebe8b6c19d6d06b3fe54b"
  },
  {
    "url": "daily/yoga.html",
    "revision": "6107349af16a4bfd0e608f34628d0261"
  },
  {
    "url": "diary/index.html",
    "revision": "3faa2e238733243cd9af1d55a03f1e18"
  },
  {
    "url": "index.html",
    "revision": "d0331521b8287ead9cbe182c82223bd2"
  },
  {
    "url": "note/code-review.html",
    "revision": "7b22c556047ddb3db14bc7e7289b8f85"
  },
  {
    "url": "note/export.html",
    "revision": "b788ffd91e23b8d52f06c8949295351d"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "7ad589e441ec317f8d79eaad4df56a15"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "c2231f4fc25f5898907f89b1c39d07b0"
  },
  {
    "url": "note/index.html",
    "revision": "d9d94ec9808329af81aea9dc068671ac"
  },
  {
    "url": "note/markdown.html",
    "revision": "2471bb69d43ed51d83a52dd9b0a14043"
  },
  {
    "url": "note/node.html",
    "revision": "0a585c0d4584ef326fcfc8d0dda6438d"
  },
  {
    "url": "note/threejs.html",
    "revision": "96cb389d948e89bba572f677ca5ac17d"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "e5fa657e8f54409ec800f04dd1979c25"
  },
  {
    "url": "note/webpack.html",
    "revision": "fbf7765e408607fa8c0b182b2e203618"
  },
  {
    "url": "thiking/resume.html",
    "revision": "bf3901280b904bb2f0a4241dba8800ed"
  },
  {
    "url": "zh/index.html",
    "revision": "cfd65386a84d0573dd7fe30a927ae456"
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
