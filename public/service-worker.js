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
    "revision": "89ee1012b4fc61e0c72c5160e43ea6b2"
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
    "url": "assets/js/app.2f978a2d.js",
    "revision": "6c6761ece6f2705b5d7f50c0c201b7fc"
  },
  {
    "url": "daily/index.html",
    "revision": "0b1fefe08c6be909ad413060d38da3f8"
  },
  {
    "url": "diary/index.html",
    "revision": "ba6553e2fb8b5306624962aead033f8a"
  },
  {
    "url": "index.html",
    "revision": "f8c2feea60b1db7d6fdabdc41597df1a"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "c3785ed495147893f5c0a48ce926d7c8"
  },
  {
    "url": "note/index.html",
    "revision": "674019420ca64a04f13c6b1ffa1cfdd4"
  },
  {
    "url": "note/markdown.html",
    "revision": "5e45cab9a140c55af38072d1efca6021"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "e1dd49b5fa593e03e5e35b4ad5dc9b4d"
  },
  {
    "url": "zh/index.html",
    "revision": "bfeb4355be163d0f69b8b8fb57ed2eb5"
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
