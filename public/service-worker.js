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
    "revision": "4090a3d0e06173f6ae323300863412d6"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.8ba13ec8.js",
    "revision": "96b588884795226506b33baf9e0e4ca8"
  },
  {
    "url": "assets/js/11.a4ebb561.js",
    "revision": "dd5f37f3546794fee58d5eea4a08f94b"
  },
  {
    "url": "assets/js/12.67c7af67.js",
    "revision": "6a25896d43ee01414db149716c1d299b"
  },
  {
    "url": "assets/js/13.df48765c.js",
    "revision": "55ec2ecf796da18ecab200e71df45b87"
  },
  {
    "url": "assets/js/14.79017e0c.js",
    "revision": "8b95393029e38d2c63e58563040c8fe2"
  },
  {
    "url": "assets/js/15.594a1b91.js",
    "revision": "b8a60f491d1ed6bba860d9005483a67c"
  },
  {
    "url": "assets/js/16.8be12878.js",
    "revision": "eab51cc2ec2593b20dc5e97c6b249bcb"
  },
  {
    "url": "assets/js/17.d344c087.js",
    "revision": "e0193ef1edd63146b65a0f91d4edde2b"
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
    "url": "assets/js/4.b988e889.js",
    "revision": "0e2c3e8c3b6baae38a6c63f119d4c939"
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
    "url": "assets/js/8.c57458eb.js",
    "revision": "5c26c3d4c2ae1bcbb7d9b56449c73196"
  },
  {
    "url": "assets/js/9.ad8b383a.js",
    "revision": "36568314a57643393f637bd239d6be92"
  },
  {
    "url": "assets/js/app.e3194fbb.js",
    "revision": "5be553b1550007cc010378e2506e0549"
  },
  {
    "url": "daily/index.html",
    "revision": "e11364f4e342a8d3ba7f78d7121e8240"
  },
  {
    "url": "diary/index.html",
    "revision": "2d6651763fb52a530a18a25c1f130681"
  },
  {
    "url": "index.html",
    "revision": "a50034b9714530ebd9992d83c9c113e1"
  },
  {
    "url": "note/code-review.html",
    "revision": "6dec4c909cd8d6567d51a2e7ea12f0d4"
  },
  {
    "url": "note/export.html",
    "revision": "68c988f8266d9c990814ded25d079b60"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "f81fb0cde09c55f4e576afd27e26bba7"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "357ae88752f145f125cd8c271c501e20"
  },
  {
    "url": "note/index.html",
    "revision": "7100758f7248d9d08c2d73a2480a9ccd"
  },
  {
    "url": "note/markdown.html",
    "revision": "c1f24de72d3efb5c5562e44bcfe7eb20"
  },
  {
    "url": "note/node.html",
    "revision": "72b65364c37b2069d2db6bd6e5b4f9a8"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "54c9526d60372863f0a9ad51980d99a8"
  },
  {
    "url": "note/webpack.html",
    "revision": "1dc755cd61bbe561f85040323da75d6f"
  },
  {
    "url": "zh/index.html",
    "revision": "77b8f81404c398000f8e8cb7ec28e9ba"
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
