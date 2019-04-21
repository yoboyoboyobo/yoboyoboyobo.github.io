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
    "revision": "183e56ee03eda59ff3d5c3f203adb5db"
  },
  {
    "url": "assets/css/0.styles.3028fced.css",
    "revision": "0d8ecaa8dbf52138da6721d82a1a33f4"
  },
  {
    "url": "assets/js/10.f8f62f1a.js",
    "revision": "3eef54917ecf5c57551da16873668b20"
  },
  {
    "url": "assets/js/11.b1e52c5f.js",
    "revision": "2c62fbac51eb7b7f6a7e8f330d66bf9d"
  },
  {
    "url": "assets/js/12.3086b4a0.js",
    "revision": "743993aa71cf62a3970d7df2b47f7552"
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
    "url": "assets/js/17.b0b8b399.js",
    "revision": "c14b125552a1d6fa594683db1d6c374a"
  },
  {
    "url": "assets/js/18.b7c040bf.js",
    "revision": "30475b50c93d56d809027309ac1b0e6f"
  },
  {
    "url": "assets/js/19.aee3192e.js",
    "revision": "4709d44fa5fd24c546326170074d8e65"
  },
  {
    "url": "assets/js/2.949c0d29.js",
    "revision": "84f9a3fbde7081faf439d70c6fd5f211"
  },
  {
    "url": "assets/js/20.70c94ff2.js",
    "revision": "ef3d8eb99e2f927f41e332759672f909"
  },
  {
    "url": "assets/js/21.f1fc9303.js",
    "revision": "0d274ec31d6e5a9226159069c82be5c8"
  },
  {
    "url": "assets/js/22.fdd464e5.js",
    "revision": "dbf0147b918371b3aa085558f2ea1532"
  },
  {
    "url": "assets/js/23.76a26b72.js",
    "revision": "892ee202d02f50345c365e6c94865424"
  },
  {
    "url": "assets/js/24.579d3ebf.js",
    "revision": "d24151c6521eee5d6e19916fd39f92b4"
  },
  {
    "url": "assets/js/25.e1bc5251.js",
    "revision": "29f7871103ad501d198d2fddc1cdb3c8"
  },
  {
    "url": "assets/js/26.e9b10da2.js",
    "revision": "e1a03ebfa59c43da2b47afb29f1512ac"
  },
  {
    "url": "assets/js/27.fcc61724.js",
    "revision": "6ec7796ed273dc190bb034cda3fee68e"
  },
  {
    "url": "assets/js/28.2d62eba0.js",
    "revision": "7e56eafd6daab6fbf40dd81be9d8a004"
  },
  {
    "url": "assets/js/29.029e2eac.js",
    "revision": "a57a91226e9ad7574a66c0d72cab5c1d"
  },
  {
    "url": "assets/js/3.9437fae8.js",
    "revision": "31000ef867783e04d77d6bac75c352de"
  },
  {
    "url": "assets/js/30.0e813909.js",
    "revision": "9533e6de3ecf67fb9cb02acb5cfde007"
  },
  {
    "url": "assets/js/31.b30ae194.js",
    "revision": "90738ec2939c9d01ad225e52da2269b0"
  },
  {
    "url": "assets/js/32.937a0997.js",
    "revision": "57602e1be6825f45fab9253ecc865115"
  },
  {
    "url": "assets/js/33.4876c7f4.js",
    "revision": "89ecbc5ea621e1aed583853dc80a2495"
  },
  {
    "url": "assets/js/34.4f8c9cd8.js",
    "revision": "29c2fb24dfab73d153d98b8314a5b9be"
  },
  {
    "url": "assets/js/35.56f68308.js",
    "revision": "1fa832e86f54f33ca326218d2b61e936"
  },
  {
    "url": "assets/js/36.d6dbccd0.js",
    "revision": "7575315ce8cd25ceac8a5ab33d178741"
  },
  {
    "url": "assets/js/37.4eda6c6a.js",
    "revision": "c8b3049e29d908edb530d0a4b0764154"
  },
  {
    "url": "assets/js/4.f5be358b.js",
    "revision": "6728b87045100fce47021619bc0fae75"
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
    "url": "assets/js/8.c146ee8b.js",
    "revision": "aca8da25204ddad7f75030de2e34f878"
  },
  {
    "url": "assets/js/9.049083b4.js",
    "revision": "524b4fbf64cd2fb8e74fa0a123a7ac1f"
  },
  {
    "url": "assets/js/app.eb83628d.js",
    "revision": "93e155258ca122cc528cb20a40fafac6"
  },
  {
    "url": "daily/cat.html",
    "revision": "c6705388c0353951d8646735e7a647be"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "94fdd87514ab762c8eb6c2739397a213"
  },
  {
    "url": "daily/food.html",
    "revision": "ce5ce2bbf967e0962406ecac3986a07b"
  },
  {
    "url": "daily/index.html",
    "revision": "9544a066db9af40a27eb55a92ea21aed"
  },
  {
    "url": "daily/swin.html",
    "revision": "49853cf110d481cdf306eb03f3e55117"
  },
  {
    "url": "daily/travel.html",
    "revision": "4152b696f8971293277da6c0bcd924ce"
  },
  {
    "url": "daily/vlog.html",
    "revision": "9afdc7e764171d701b2c27817ce4cdfe"
  },
  {
    "url": "daily/water-color.html",
    "revision": "0e1859d61f4bb6765997b663ae56d2cb"
  },
  {
    "url": "daily/yoga.html",
    "revision": "c5667b1e42be6c9526810f16c889596f"
  },
  {
    "url": "diary/closure.html",
    "revision": "e10fc48257c150bcdf22a806af899d25"
  },
  {
    "url": "diary/css.html",
    "revision": "3ff6544c2168fcb9cebc4711a61dab41"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "705ea52c28fdcec67a428972824657f2"
  },
  {
    "url": "diary/html.html",
    "revision": "8781d7401be759447834244957e4e3ae"
  },
  {
    "url": "diary/index.html",
    "revision": "495e4741fd100f11a1f947ddcc3cf13f"
  },
  {
    "url": "diary/javascript.html",
    "revision": "b268918e88f9c22bf41b8862915a2ddf"
  },
  {
    "url": "diary/mac.html",
    "revision": "14e7e7855e744df78a67ecf98d40b2af"
  },
  {
    "url": "diary/type.html",
    "revision": "31df98d14549ba5097a059e663b4331d"
  },
  {
    "url": "index.html",
    "revision": "328cdfe1f4986f68eddaa275f4188f4f"
  },
  {
    "url": "note/code-review.html",
    "revision": "27d7b6c1b265289ccd85571229405f92"
  },
  {
    "url": "note/cors.html",
    "revision": "77f93c50f09f6e39a39683137370188e"
  },
  {
    "url": "note/export.html",
    "revision": "a0e4e27bb8a861d142bc9adc05521ab8"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "9b7de8c29ad87ad29c2079e160f743fe"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "0103a842d62c0cc6314fabc52d2b17af"
  },
  {
    "url": "note/index.html",
    "revision": "f1939b65a618a049ae016439c7598287"
  },
  {
    "url": "note/markdown.html",
    "revision": "6e670c30c1beadbf25b586c45eec2001"
  },
  {
    "url": "note/node.html",
    "revision": "54b6b68cbfc3449a5a2bfda457e2ba01"
  },
  {
    "url": "note/security.html",
    "revision": "48121aadb02d999870a827ded1721b4e"
  },
  {
    "url": "note/threejs.html",
    "revision": "b9497dc1574c1fedc827a50307d621d1"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "7c7593f991f2211dccb84e944165eede"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "be19d4d8dba13660e6dbab1da185cf98"
  },
  {
    "url": "note/webpack.html",
    "revision": "e49ca168e36d9efd366e7eb6ad4f4940"
  },
  {
    "url": "thinking/resume.html",
    "revision": "a746d45a7ddab7fc465fd9f94822127d"
  },
  {
    "url": "zh/index.html",
    "revision": "7371e255e0ec4d5b2736c4365eb22a0e"
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
