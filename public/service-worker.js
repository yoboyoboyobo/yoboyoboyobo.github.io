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
    "revision": "9f54bb6fbebd7ea6ca41e28642830896"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.d286c71b.js",
    "revision": "a2d975e05fdf4c838573d78d681c4cf3"
  },
  {
    "url": "assets/js/11.a561c905.js",
    "revision": "d5ff01c6e577af2d9deebab9a9d05d50"
  },
  {
    "url": "assets/js/12.911be094.js",
    "revision": "f1190ed876a58f74fdbbd0a8322e8b70"
  },
  {
    "url": "assets/js/13.505cf683.js",
    "revision": "54dc7541813e1cc44648bd8f3ada8753"
  },
  {
    "url": "assets/js/14.f30f3139.js",
    "revision": "50488b91c7889998330516c8794add70"
  },
  {
    "url": "assets/js/15.31af428e.js",
    "revision": "045201bd602a2b35b575c043eb1068cd"
  },
  {
    "url": "assets/js/16.27c9585b.js",
    "revision": "c0ff5ee5da3fdf9fbcdfd4f655e2fb0d"
  },
  {
    "url": "assets/js/17.cf6dc8dc.js",
    "revision": "a294a295aeb98753d0db1c0d63ecb456"
  },
  {
    "url": "assets/js/18.80711246.js",
    "revision": "2f745d2f6ccb8f801adf2574b3d7c9db"
  },
  {
    "url": "assets/js/19.7e2209b0.js",
    "revision": "55a0d21f6ee646a7bf100b0bfef0d519"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.c7cf56a3.js",
    "revision": "f593a79b52eb864f15649ee263898f28"
  },
  {
    "url": "assets/js/21.3a379e27.js",
    "revision": "9b52090543e61b44e0432de2b2973680"
  },
  {
    "url": "assets/js/22.22e26290.js",
    "revision": "7c48d41df1b6c58d24160d3883410d58"
  },
  {
    "url": "assets/js/23.7bb883ca.js",
    "revision": "56edf73ddbd520fba7de6c363a1e58fb"
  },
  {
    "url": "assets/js/24.942f43c3.js",
    "revision": "70e18cb6689d4079c43b46265d3f2dbc"
  },
  {
    "url": "assets/js/25.2b5483d2.js",
    "revision": "b43d1aad332687f39baca5dae9e75782"
  },
  {
    "url": "assets/js/26.f45c9e86.js",
    "revision": "af2ef089fa43e0117dbabd2da2004fe6"
  },
  {
    "url": "assets/js/3.4ce57911.js",
    "revision": "7c5ad8ccaac485b48558a3b5d2182e27"
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
    "url": "assets/js/7.925aea02.js",
    "revision": "0cc250272a580ffea9c8dd1ae4b739dd"
  },
  {
    "url": "assets/js/8.c73217d1.js",
    "revision": "f1890d154d54ffb048ec7d610c0c32d4"
  },
  {
    "url": "assets/js/9.8fc35a07.js",
    "revision": "214c420b65d2b607a5791453b31b92f7"
  },
  {
    "url": "assets/js/app.1e74c96b.js",
    "revision": "b9b0a0823e74025710ecb1ad3b2a3293"
  },
  {
    "url": "daily/cat.html",
    "revision": "a6a190215d6794539033b5eb555f9320"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "d8d964621a025027ac6a5ae8286ea3ff"
  },
  {
    "url": "daily/food.html",
    "revision": "9fe4aab1fac25395d40487a57b78c90e"
  },
  {
    "url": "daily/index.html",
    "revision": "7ade71fc78116bf799e706a24251e4f2"
  },
  {
    "url": "daily/swin.html",
    "revision": "4d1db05cd4adc9c51c36d05bd371c8d4"
  },
  {
    "url": "daily/vlog.html",
    "revision": "6ca7c1a7f4b4fc476942d478008906a8"
  },
  {
    "url": "daily/water-color.html",
    "revision": "06bb096ba9d4e40859e95eacf081ad4d"
  },
  {
    "url": "daily/yoga.html",
    "revision": "0b812495fc073cfa7bb45ab0e11c1a7e"
  },
  {
    "url": "diary/index.html",
    "revision": "8bec6fc57b7f6875418c6308074034e0"
  },
  {
    "url": "index.html",
    "revision": "b779b4880a7bda81adc58ad0fabffc3f"
  },
  {
    "url": "note/code-review.html",
    "revision": "c0dfa81053522a4d6c3b1305830d1d4c"
  },
  {
    "url": "note/export.html",
    "revision": "5f663a4fbb54d94c9e2203f7d87b1f5a"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "4de208d0a389ec05520d702dfa21c25b"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "f85a6be0e4e04f75d6518f2d629d035a"
  },
  {
    "url": "note/index.html",
    "revision": "9ffe813829222b7627fe719704797099"
  },
  {
    "url": "note/markdown.html",
    "revision": "5ddce894b0568a5bbb8aa5b90c15a40a"
  },
  {
    "url": "note/node.html",
    "revision": "65d765983b54fc070118633a2f72c116"
  },
  {
    "url": "note/threejs.html",
    "revision": "974d50de19658611e2320cdc1a692c47"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "89841c126a2fbc8d53c0c4b5771db9bd"
  },
  {
    "url": "note/webpack.html",
    "revision": "8573c73422c02a9cc697ed2ffd6a67ca"
  },
  {
    "url": "thiking/resume.html",
    "revision": "3c81bcc91c4c23d8e1cf5a16e0347057"
  },
  {
    "url": "zh/index.html",
    "revision": "de3c234a081508971f6b1267d07d375b"
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
