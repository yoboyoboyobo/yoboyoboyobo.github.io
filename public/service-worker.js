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
    "revision": "5a0be7d1ce48c45fc2d338f53047d828"
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
    "url": "assets/js/15.8fd77f76.js",
    "revision": "dc1e932938ca53a5443edf4feace92a0"
  },
  {
    "url": "assets/js/16.c6ed652b.js",
    "revision": "71da156619c082b42f5d7914b2779b9a"
  },
  {
    "url": "assets/js/17.b2b7168a.js",
    "revision": "a83f07f4e980272b986be431f0541d80"
  },
  {
    "url": "assets/js/18.d5b6d1b2.js",
    "revision": "bfc086fb007fbbc4cc08c84873806ea5"
  },
  {
    "url": "assets/js/19.0c67cd8e.js",
    "revision": "ac6ba9373931dff1bf66a0b28531fd57"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.4e02465e.js",
    "revision": "9d62a4975c29c871aa3d25bcd7fd16bd"
  },
  {
    "url": "assets/js/21.950f9178.js",
    "revision": "35746fd9438610112c3fb0fa09f7756a"
  },
  {
    "url": "assets/js/22.71e3dcec.js",
    "revision": "b05ef8b9faaf574c73e06e52e7f76240"
  },
  {
    "url": "assets/js/23.85523077.js",
    "revision": "f6a4c383f6b24f102173b976c646383c"
  },
  {
    "url": "assets/js/24.8a291434.js",
    "revision": "b69d0c5dac2c6144eaeceeef0f6a975a"
  },
  {
    "url": "assets/js/25.5fd679e4.js",
    "revision": "5b3fc12d82ea2935b65708ec8f9cc06a"
  },
  {
    "url": "assets/js/26.ef42207b.js",
    "revision": "449c48db0c4eaf7e415b9aeb160cb017"
  },
  {
    "url": "assets/js/27.76effb84.js",
    "revision": "564fb7f704d88aec2295f2cd3a3b2ed9"
  },
  {
    "url": "assets/js/3.cdf65354.js",
    "revision": "e310b72659f358bbfa6ce01cc7b533f3"
  },
  {
    "url": "assets/js/4.fb4f24a4.js",
    "revision": "18c2340d495520fa4759563d893c9bba"
  },
  {
    "url": "assets/js/5.978b7f47.js",
    "revision": "2394d0da447283b5959e3906590506f1"
  },
  {
    "url": "assets/js/6.895f5a2e.js",
    "revision": "476a227e0ca6d5db522edae6eb05d126"
  },
  {
    "url": "assets/js/7.1752c2f1.js",
    "revision": "6ed8984f1486b960171b943d94c1ff33"
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
    "url": "assets/js/app.29f10ad1.js",
    "revision": "029bce8be3791cf7f499581545c33595"
  },
  {
    "url": "daily/cat.html",
    "revision": "3de5b3406296d6a90f000e8ac2869b9b"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "0899ad1441831fff78ba760a4e8ee4c0"
  },
  {
    "url": "daily/food.html",
    "revision": "289076584c373bc37c24ff695573e495"
  },
  {
    "url": "daily/index.html",
    "revision": "f1bb7f5c212122da80c16a642a2ad264"
  },
  {
    "url": "daily/swin.html",
    "revision": "9b8bedb00e9a6e6325d9c72b788ca342"
  },
  {
    "url": "daily/vlog.html",
    "revision": "6efd3df0d66df6bbc805f6a6a054cafd"
  },
  {
    "url": "daily/water-color.html",
    "revision": "c57671c0299167adb272a1724ac31314"
  },
  {
    "url": "daily/yoga.html",
    "revision": "f807cbce10096d00d28f66b899e6eb94"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "4678ec5baca7ca04f1dd8766a07bbc45"
  },
  {
    "url": "diary/index.html",
    "revision": "034735e2793ce7eda7bdd3c8dbdc9ff3"
  },
  {
    "url": "index.html",
    "revision": "20500083f515dc3ced59b75ba66f2192"
  },
  {
    "url": "note/code-review.html",
    "revision": "ea0030e0ccf6b423d3acfa3f2fad7e45"
  },
  {
    "url": "note/export.html",
    "revision": "5cad0a653eed6bf657ab2691009ea5e2"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "d768d109c3053bbd5b8ca53ace19e675"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "7c26306e14bbfeacc5f00285f61ecb29"
  },
  {
    "url": "note/index.html",
    "revision": "2a1e86d13e52d0bfac23a76d5f4a6029"
  },
  {
    "url": "note/markdown.html",
    "revision": "ce1c54507fffbf4c02a4407c983e0394"
  },
  {
    "url": "note/node.html",
    "revision": "8b0a4f18136b6154077fb4bd66c794f5"
  },
  {
    "url": "note/threejs.html",
    "revision": "e2ba0795bdf0c9a2fdefd5d24f093062"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "f7d416a04c329754c567b871c48f2b85"
  },
  {
    "url": "note/webpack.html",
    "revision": "0541791b8fcdd4b33e7c74488bb8fdf9"
  },
  {
    "url": "thiking/resume.html",
    "revision": "a1b684410218b8a97561fea3620480fc"
  },
  {
    "url": "zh/index.html",
    "revision": "3d636675c9d9b8f20f96e487a8131697"
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
