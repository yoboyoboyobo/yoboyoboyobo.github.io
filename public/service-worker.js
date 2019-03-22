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
    "revision": "b5ff1b8ab8bbc6a9d585be6984a08f5e"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.72a11635.js",
    "revision": "db0431fd1daa05757865c344c77557f9"
  },
  {
    "url": "assets/js/11.972f0754.js",
    "revision": "79606110ebbd86bd78a6294d8daeadf8"
  },
  {
    "url": "assets/js/12.84bd4fcc.js",
    "revision": "c5c2991fe43de50aacf7f76371e73a7c"
  },
  {
    "url": "assets/js/13.c31be53b.js",
    "revision": "0ca19f5c7a0b15793b07d133957a2e1f"
  },
  {
    "url": "assets/js/14.a515de54.js",
    "revision": "9e649e63ce70a440daeb71bacdc49d37"
  },
  {
    "url": "assets/js/15.ac146bb7.js",
    "revision": "0a9b03641eef7dc2fc9410ab9173e80e"
  },
  {
    "url": "assets/js/16.bd6bb482.js",
    "revision": "ee04639df3adbfd4a7a0dd93ef1c9d0d"
  },
  {
    "url": "assets/js/17.5fda12b0.js",
    "revision": "1ff9133b588e53763c21a38777880ef2"
  },
  {
    "url": "assets/js/18.c98cf82a.js",
    "revision": "fd3bc9f71710de86ec2a8b7a4bb5c9b5"
  },
  {
    "url": "assets/js/19.2d2d908c.js",
    "revision": "a52155f9558a3ed3e8522d10cf22c12a"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.a81b7d99.js",
    "revision": "8b5dec5cc950e55d576066919941dc12"
  },
  {
    "url": "assets/js/21.1846eab9.js",
    "revision": "638a59761dd672df7cabb0649c261d9f"
  },
  {
    "url": "assets/js/22.3851c574.js",
    "revision": "6b166367ffd8d3e206c6ab5cd0334be5"
  },
  {
    "url": "assets/js/23.ac909253.js",
    "revision": "3b70770b8aea820f512fe7aef35d55d4"
  },
  {
    "url": "assets/js/24.df2a5d6a.js",
    "revision": "f48a98a88539485b7391c545494be139"
  },
  {
    "url": "assets/js/25.85cb6fa1.js",
    "revision": "651271a770e29a0405ff2b3cba4e6099"
  },
  {
    "url": "assets/js/3.4ce57911.js",
    "revision": "7c5ad8ccaac485b48558a3b5d2182e27"
  },
  {
    "url": "assets/js/4.6ca8d67a.js",
    "revision": "c464de341bd7d5aa168df80508ba20db"
  },
  {
    "url": "assets/js/5.04a550cf.js",
    "revision": "2c64280d726f12693cf93577e3273f33"
  },
  {
    "url": "assets/js/6.ee2a310e.js",
    "revision": "fe5a28316b604d6b142677373332a8d8"
  },
  {
    "url": "assets/js/7.759dac86.js",
    "revision": "9d13a1538f8babfa59b49ae3fba67e98"
  },
  {
    "url": "assets/js/8.c146ee8b.js",
    "revision": "aca8da25204ddad7f75030de2e34f878"
  },
  {
    "url": "assets/js/9.9d5551e3.js",
    "revision": "9b579e98cd3688e2a62c3d41bc2bb0ee"
  },
  {
    "url": "assets/js/app.9b45d6f2.js",
    "revision": "4d1e9bd53aebcdeaf60bfcf50d1bcfea"
  },
  {
    "url": "daily/cat.html",
    "revision": "1c30bb25ccf57834516cfdbf3b02a8a1"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "d0e3822410929bc2689dafe5d114af83"
  },
  {
    "url": "daily/index.html",
    "revision": "a3dcb90c78aee355bc9defbd0e5767fd"
  },
  {
    "url": "daily/swin.html",
    "revision": "66d9ea31d82d5740c54b4945e9e4e65c"
  },
  {
    "url": "daily/vlog.html",
    "revision": "f68f15441952797e80b4f96887d11aa5"
  },
  {
    "url": "daily/water-color.html",
    "revision": "699f00e0729ac08f1d6a67387317b329"
  },
  {
    "url": "daily/yoga.html",
    "revision": "0eaf7b6448283c3eb6b566da57574415"
  },
  {
    "url": "diary/index.html",
    "revision": "0d54e4904c86e56831144f3c1baeed4a"
  },
  {
    "url": "index.html",
    "revision": "95715d02cb2d8aafe3fdafa83356e26c"
  },
  {
    "url": "note/code-review.html",
    "revision": "b0ba969593adfe8025521f6e6189e9f8"
  },
  {
    "url": "note/export.html",
    "revision": "6e67a127dd9dec7351476d81b2421c45"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "076f66c38f4722af879e37d451c025bb"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "8e0774cfe39ccf14b4d65779ddc28477"
  },
  {
    "url": "note/index.html",
    "revision": "3952cd9711b5b1bf62709a833ad376f0"
  },
  {
    "url": "note/markdown.html",
    "revision": "2e21ebca6a96171cd692126a6f27fad2"
  },
  {
    "url": "note/node.html",
    "revision": "8b1d48c36e18efc53c4eec78235ccb2b"
  },
  {
    "url": "note/threejs.html",
    "revision": "d5b3317e704cdc800bc05fba869a1837"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "ba0d8bf83bdcb080bb4df9153eb2aa71"
  },
  {
    "url": "note/webpack.html",
    "revision": "4d3bb241276f9deb3e64e71f39092877"
  },
  {
    "url": "thiking/resume.html",
    "revision": "1595288a2579ba4880d3266c0026d468"
  },
  {
    "url": "zh/index.html",
    "revision": "009ff86cc471898cca39e06d1584200f"
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
