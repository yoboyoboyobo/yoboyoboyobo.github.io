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
    "revision": "5c4be7d3012b2d2ccc1f6c9ad6926ef8"
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
    "url": "assets/js/app.b9f43277.js",
    "revision": "b3cd7891a7527f0dd934c70f4ea1c168"
  },
  {
    "url": "daily/index.html",
    "revision": "8a9f80eb147f31dca9cd493564947b49"
  },
  {
    "url": "diary/index.html",
    "revision": "b985169748132b672bd7e07b9164aed6"
  },
  {
    "url": "index.html",
    "revision": "fbfbca99ba7da48fdfc5ba49e581383c"
  },
  {
    "url": "note/code-review.html",
    "revision": "1215abe7e630d6f1058e2b57eb29d623"
  },
  {
    "url": "note/export.html",
    "revision": "294ed9ac3296d50f58bbd277ad5a914c"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "afe1ce73a5846b72fce7f3a39e2daf68"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "b77b3e29391a11cb908442aa8c669c36"
  },
  {
    "url": "note/index.html",
    "revision": "cd9bb463a19a6218e6bd74331acb1f90"
  },
  {
    "url": "note/markdown.html",
    "revision": "6a9b54865c2eaa32b528c9109596cdbf"
  },
  {
    "url": "note/node.html",
    "revision": "8d1ce5ecc5411baa8cb0047a0a0cb6bc"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "b7900621385c13ff07b485c82ec50b37"
  },
  {
    "url": "note/webpack.html",
    "revision": "81e7830f0aa24efdf83786f0dc1dde17"
  },
  {
    "url": "zh/index.html",
    "revision": "1c8fdd8c001ef93da0fdfa7338b68f97"
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
