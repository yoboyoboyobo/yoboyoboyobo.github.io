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
    "revision": "840fe929bf8ac2c7b8b5f9332778fb01"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.55f703a3.js",
    "revision": "77e225b219377be635fcea66ca5f0396"
  },
  {
    "url": "assets/js/11.9bc5872f.js",
    "revision": "bb8cbe112c1cee07332613317290b8dd"
  },
  {
    "url": "assets/js/12.24a7103c.js",
    "revision": "790360a7e50363d4d5a55c06fc1b428f"
  },
  {
    "url": "assets/js/13.f19770bb.js",
    "revision": "23995226029a456bc48f9fa1538366ce"
  },
  {
    "url": "assets/js/14.02d3bfd8.js",
    "revision": "c28949b68b5b15662691cefdbabe6dd8"
  },
  {
    "url": "assets/js/15.7910c09e.js",
    "revision": "e68be992959fa4fcf24c492165749eb5"
  },
  {
    "url": "assets/js/16.b9dfc655.js",
    "revision": "d10230b2961f64f520d97ee206db1ac2"
  },
  {
    "url": "assets/js/17.971d4684.js",
    "revision": "b4c740e968cc2b7e194431a593c0e2df"
  },
  {
    "url": "assets/js/18.db99e9f2.js",
    "revision": "68a3b2f6c22adecc6d2be9f08cf5f2e1"
  },
  {
    "url": "assets/js/19.1db1f166.js",
    "revision": "5c3d6f2daf516b8ddb3bea455dc9235e"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.fa9ae5ea.js",
    "revision": "6129a58b72068cb1e732b17e63e3f5fc"
  },
  {
    "url": "assets/js/21.8e6d675d.js",
    "revision": "dfd630f8d28ee402f6059055f33b2356"
  },
  {
    "url": "assets/js/3.0c4acd47.js",
    "revision": "074ee1eb582a0df5f2a04b2fac7225dc"
  },
  {
    "url": "assets/js/4.80eab5b0.js",
    "revision": "f17cf5b9f336fd23fd61532adf9e61e9"
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
    "url": "assets/js/7.b2678326.js",
    "revision": "4d13f8a76732aec225ecb034dc6af829"
  },
  {
    "url": "assets/js/8.476b1812.js",
    "revision": "7a2d989f9802e3ccc0bb2e37e7995812"
  },
  {
    "url": "assets/js/9.8c960c20.js",
    "revision": "6fd257c7aaff72df87729f51fa4571c0"
  },
  {
    "url": "assets/js/app.a2ec71ba.js",
    "revision": "6e86dcda594de6156233f1c78108b592"
  },
  {
    "url": "daily/index.html",
    "revision": "23ff28e9a3fb4b4c44dd6e7ef6bafadc"
  },
  {
    "url": "daily/vlog.html",
    "revision": "78603ee42cb885cffb20f368397f84b5"
  },
  {
    "url": "daily/water-color.html",
    "revision": "c94132b18cbe9076b8d4ded4f5126cf0"
  },
  {
    "url": "daily/yoga.html",
    "revision": "f0146ebc537aafbaae880399c179f7a6"
  },
  {
    "url": "diary/index.html",
    "revision": "7222bc8a65e57442e074d00f99a556cf"
  },
  {
    "url": "index.html",
    "revision": "276ddb564c59ffd7ee7a990ff02605c8"
  },
  {
    "url": "note/code-review.html",
    "revision": "5752b17e2c5a1d0c7c1577b0140e189a"
  },
  {
    "url": "note/export.html",
    "revision": "195d87a0abf2d4acc457f7c92d56df4c"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "8561fe545abe566d13547aceac607f9c"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "6c11379306dd187ad37712711418307e"
  },
  {
    "url": "note/index.html",
    "revision": "1717859a38ae51a19de1c0cc69690b5f"
  },
  {
    "url": "note/markdown.html",
    "revision": "ada2599dbd1f574820a096c5f508f9de"
  },
  {
    "url": "note/node.html",
    "revision": "bd946599499516bf09910a6d29a6eb1e"
  },
  {
    "url": "note/threejs.html",
    "revision": "4ef0687e09714b8eb5636f1cb2f4ea19"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "a96778a300dc89cbf46396ec1f9577ba"
  },
  {
    "url": "note/webpack.html",
    "revision": "6da257505397d6531ecc27aa52c7c9d7"
  },
  {
    "url": "zh/index.html",
    "revision": "7a3197665c6f247f84fab82611032930"
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
