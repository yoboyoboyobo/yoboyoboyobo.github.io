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
    "revision": "fe602eeadec5b7e50375400fd87cdf5a"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.28f3cf4a.js",
    "revision": "079a376e860bb311fa8580e07e515952"
  },
  {
    "url": "assets/js/11.e5993b06.js",
    "revision": "f2b696bc98b65497176f4c07c0b26241"
  },
  {
    "url": "assets/js/12.18d5b28a.js",
    "revision": "f183d163275e81f26dbb9e5235862374"
  },
  {
    "url": "assets/js/13.e41fd173.js",
    "revision": "bb6a7df9bb26017a6d63d9659845f1c8"
  },
  {
    "url": "assets/js/14.3f8466b7.js",
    "revision": "074544251c48ffe3927733d4844aff5d"
  },
  {
    "url": "assets/js/15.4273c99a.js",
    "revision": "3b6ac78217a517e4d2dec5d4c9718c52"
  },
  {
    "url": "assets/js/16.5cbc1848.js",
    "revision": "f20826b56cfdcd4860cfb30a7ff2d641"
  },
  {
    "url": "assets/js/17.10c03c78.js",
    "revision": "da2ceed260c98c763ff7c45fc20c9188"
  },
  {
    "url": "assets/js/18.61414717.js",
    "revision": "68731d41aaa45212df03e36f309261e6"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/3.65d3252d.js",
    "revision": "14f1d9f85590ae0e77578c270e862a71"
  },
  {
    "url": "assets/js/4.f1ce0e8e.js",
    "revision": "6989c7ce40cfda1689c819044059ac9b"
  },
  {
    "url": "assets/js/5.fe6a0843.js",
    "revision": "e7434fe1f10c7f51f7644e2e8473243e"
  },
  {
    "url": "assets/js/6.500aa45f.js",
    "revision": "5e4245a7137aaf19db7b86f058a7c875"
  },
  {
    "url": "assets/js/7.ab0e6bcc.js",
    "revision": "c523da0b0c0696271e32d3e208f4ca58"
  },
  {
    "url": "assets/js/8.0c31e086.js",
    "revision": "d0101499c7a843da833a818184920a1b"
  },
  {
    "url": "assets/js/9.eadfd4fc.js",
    "revision": "b68cc023aa8b303087d424fa7d0884c2"
  },
  {
    "url": "assets/js/app.59f4a02b.js",
    "revision": "91219c75652345b4774d030d01c0b57f"
  },
  {
    "url": "daily/index.html",
    "revision": "8efdc7068cc0b9a17beff72f1eb30ae8"
  },
  {
    "url": "daily/water-color.html",
    "revision": "2edcfe99aa4173b09e3ba48b3a482839"
  },
  {
    "url": "diary/index.html",
    "revision": "bbdf31a3078057525ab90e683ddfb403"
  },
  {
    "url": "index.html",
    "revision": "bd9a9624d11f6bfc5039389da6208c05"
  },
  {
    "url": "note/code-review.html",
    "revision": "448b00f997473598df1fc2de5c29ee59"
  },
  {
    "url": "note/export.html",
    "revision": "0e55e23c7feee24d941c50a30b9bd4ed"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "e85c0860578f2d974e20875c487b6f02"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "2f62cd2a01ab98aacf975a887d3dda2e"
  },
  {
    "url": "note/index.html",
    "revision": "c8045e396574f91cd1ab221686988c98"
  },
  {
    "url": "note/markdown.html",
    "revision": "99ecee09d760d515f0e957ded49be11f"
  },
  {
    "url": "note/node.html",
    "revision": "fb4a7b98b059f5ff7e837d7080602232"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "9bd0d17047887bcbdef4093dfd62b8b3"
  },
  {
    "url": "note/webpack.html",
    "revision": "0733a7b193e3d54544c1d0be6b5acbc3"
  },
  {
    "url": "zh/index.html",
    "revision": "afbd0fe283ed4dd68377b142b36c9c27"
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
