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
    "revision": "89872647b5b45b751aef4c32129e56bb"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.2cb8fc89.js",
    "revision": "0a2e481c2c9d4cf71ea47c41e0326356"
  },
  {
    "url": "assets/js/11.25bc2fa8.js",
    "revision": "f1ae791561f431e4360780a16d212304"
  },
  {
    "url": "assets/js/12.7e4b893a.js",
    "revision": "5dabb64215b3e28d8041a70dba7642f2"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/3.c4d245f0.js",
    "revision": "e6b9d11d1cd17ba865cdb3b92077af4e"
  },
  {
    "url": "assets/js/4.00a46dd5.js",
    "revision": "5b41a82e8c09658a02d317041e05b90d"
  },
  {
    "url": "assets/js/5.d5f3a7e9.js",
    "revision": "dafd05ad37ee58a27ccca41bf82ff73e"
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
    "url": "assets/js/8.da361a1d.js",
    "revision": "a80e909acca8f22e9306df3d055c3155"
  },
  {
    "url": "assets/js/9.3e461eed.js",
    "revision": "7ec00e1aeb406245cb72b551f1f79326"
  },
  {
    "url": "assets/js/app.d3a84e7f.js",
    "revision": "36eaa7f18c52a0fb83208574b6689d52"
  },
  {
    "url": "daily/index.html",
    "revision": "5bf4bd17537a34f629ce698067ef4ff5"
  },
  {
    "url": "diary/index.html",
    "revision": "d6b49f496f97413545e513b94b69b3f8"
  },
  {
    "url": "index.html",
    "revision": "905b94419ead82c43caacfe9fecf8692"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "db61c8dbd8ff8bdf842ba2cf4d7c0e3a"
  },
  {
    "url": "note/index.html",
    "revision": "36d0844670f1f32c33c07432f2a624f8"
  },
  {
    "url": "note/markdown.html",
    "revision": "092cc62ff6fb73f1a66312603cb412ad"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "ae46c4c2ad8017f4db1ec574b4327633"
  },
  {
    "url": "zh/index.html",
    "revision": "39dcc307907050bf7e74843e064e9b2f"
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
