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
    "revision": "d6ea7cfc86674970aaa35c0c3f0fc53f"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.e6385e24.js",
    "revision": "a93df82bf5bbb7cee77bcedfb3e7d10e"
  },
  {
    "url": "assets/js/11.4b35e1fd.js",
    "revision": "32cecf6f27656373b7e7ad7325f36503"
  },
  {
    "url": "assets/js/12.7d01ec27.js",
    "revision": "e2f099c8ea8f2840db6b0fdced3be0b0"
  },
  {
    "url": "assets/js/13.daf1b843.js",
    "revision": "6917b85a4e004becaea83765e861279d"
  },
  {
    "url": "assets/js/14.d0a03b48.js",
    "revision": "e23683250825ad39430768b91ec29750"
  },
  {
    "url": "assets/js/15.addccc38.js",
    "revision": "3696c45ba8c12ee9c15116cdd9a8923a"
  },
  {
    "url": "assets/js/16.3f8fe8e3.js",
    "revision": "8e0b4b1b91fb2a895777d070783e5662"
  },
  {
    "url": "assets/js/17.2d06f17d.js",
    "revision": "ceb8d620c60485c409de4c54c3e6469b"
  },
  {
    "url": "assets/js/18.08ab876b.js",
    "revision": "5403d6034a8e61467b89a234aeca1c91"
  },
  {
    "url": "assets/js/19.eb2e396c.js",
    "revision": "9f63edccd92de0b2ce289fce9a828b6a"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.b32f66d8.js",
    "revision": "32c2c0f2084b70278fe6463e76fb183e"
  },
  {
    "url": "assets/js/21.ed12ec39.js",
    "revision": "ae36d48f81077ed50c064de2ca95cdad"
  },
  {
    "url": "assets/js/22.a044df9f.js",
    "revision": "46289eb04418e3d8fda32f8f8df39e85"
  },
  {
    "url": "assets/js/23.88bf60a2.js",
    "revision": "5b211c610a17031ba3c2b70266127044"
  },
  {
    "url": "assets/js/24.bf8f908b.js",
    "revision": "daec33775460990a8b51b75148306482"
  },
  {
    "url": "assets/js/25.5cb47283.js",
    "revision": "3ab3a1eba457bc4222551dae61bb19bd"
  },
  {
    "url": "assets/js/26.dfa514cc.js",
    "revision": "19262cd787f33b717970ade87f1c488e"
  },
  {
    "url": "assets/js/27.1463b929.js",
    "revision": "90443e6a75a648cb57f99561cdfe1bd0"
  },
  {
    "url": "assets/js/28.69f9b247.js",
    "revision": "0317295972e52ce9f86bcdd51f7acd2c"
  },
  {
    "url": "assets/js/3.cdf65354.js",
    "revision": "e310b72659f358bbfa6ce01cc7b533f3"
  },
  {
    "url": "assets/js/4.7d9dfd59.js",
    "revision": "39073300b92dc33afe896e68916ca92a"
  },
  {
    "url": "assets/js/5.b6dae2be.js",
    "revision": "88b9f25e01e419a6cc4e5727f4eb386b"
  },
  {
    "url": "assets/js/6.7076945b.js",
    "revision": "348c9f768fcb13d286d1b9eefa494a67"
  },
  {
    "url": "assets/js/7.11fe8553.js",
    "revision": "2b59f1df8e60398b3d38b53aa8eaa3b6"
  },
  {
    "url": "assets/js/8.8d21cac8.js",
    "revision": "868c7f7ea3199e69034d78c72849e1b0"
  },
  {
    "url": "assets/js/9.45158faf.js",
    "revision": "20f49076e11bc969e697ea836139cd00"
  },
  {
    "url": "assets/js/app.db65acbb.js",
    "revision": "e8319e423e3bb0577bb0a6c84d80a13c"
  },
  {
    "url": "daily/cat.html",
    "revision": "c401d4889c8d08e0a293d88dde7acbf5"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "7eee80bd57d1762a42ffa19ea298a21f"
  },
  {
    "url": "daily/food.html",
    "revision": "1585278781b49c58799f175d6a0a3ed4"
  },
  {
    "url": "daily/index.html",
    "revision": "bf65addbadc1b357ccc5873946c21f0b"
  },
  {
    "url": "daily/swin.html",
    "revision": "6e5d8603b97157ab19d0ec0d75d2a0db"
  },
  {
    "url": "daily/vlog.html",
    "revision": "83ba01980a9ce33a78db7a25ff09269b"
  },
  {
    "url": "daily/water-color.html",
    "revision": "fc99cb6556401aeae2beb33d0f04ee4f"
  },
  {
    "url": "daily/yoga.html",
    "revision": "647f5b39a583b000762518ffdc32a5a3"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "26fc87be1688eb22e3f33924f4fb7285"
  },
  {
    "url": "diary/index.html",
    "revision": "1bfdb73b3c99aa4bf006a886632c5c81"
  },
  {
    "url": "diary/type.html",
    "revision": "f2386d53889da5b913dc279643be4aab"
  },
  {
    "url": "index.html",
    "revision": "ec9cdc03058480e667dbf3a39757894c"
  },
  {
    "url": "note/code-review.html",
    "revision": "0074f60bcbdd2d9b39e84780b769afd4"
  },
  {
    "url": "note/export.html",
    "revision": "258def98dab24887f949d7609e0115c8"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "17b3150c80c92a1db699d584ef1a5b36"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "889b81bb6492be2011ddcf7018869600"
  },
  {
    "url": "note/index.html",
    "revision": "7f2a9d9723e34ad543045f432be38be2"
  },
  {
    "url": "note/markdown.html",
    "revision": "d7b442c5b85c29c240511e3e0d8452e9"
  },
  {
    "url": "note/node.html",
    "revision": "1bd98a8579c8bc376e2fed3981d28366"
  },
  {
    "url": "note/threejs.html",
    "revision": "8a7c7a428cb6b522b7f11c58b826fc99"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "c10c05c235f5de985407789bf0403428"
  },
  {
    "url": "note/webpack.html",
    "revision": "b64bed513e1a0bc405419e6115cdfe90"
  },
  {
    "url": "thiking/resume.html",
    "revision": "ce7ea4ee611b8e3c306b84cd504e2a01"
  },
  {
    "url": "zh/index.html",
    "revision": "74976edd26950c22a62551deb1695f87"
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
