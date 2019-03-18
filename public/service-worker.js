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
    "revision": "ce5b23625c19fba5629e126b192ce118"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.c432d306.js",
    "revision": "dc49371c40da43080744ed6e7951ed23"
  },
  {
    "url": "assets/js/11.f65a59d5.js",
    "revision": "d2c9dd9b29697dd7b92070d95c0d30c2"
  },
  {
    "url": "assets/js/12.635256e3.js",
    "revision": "2d1ceff3b3a06dfed375ed2e0e5e3070"
  },
  {
    "url": "assets/js/13.4bf466bf.js",
    "revision": "89bb6274ee5befa948d1be6e0205c8de"
  },
  {
    "url": "assets/js/14.55aa8bcc.js",
    "revision": "1154b9e20e67875a3990f58b63be91b3"
  },
  {
    "url": "assets/js/15.dd394999.js",
    "revision": "84916ef63cef5ca23bb26e02811d3cd2"
  },
  {
    "url": "assets/js/16.90de8c20.js",
    "revision": "0a4838a0f434768ce9719d2f2f53a90e"
  },
  {
    "url": "assets/js/17.9049cd4a.js",
    "revision": "c247a8313933993ecab223c99183fce8"
  },
  {
    "url": "assets/js/18.e05c1af1.js",
    "revision": "e98a76cbf95e86ffe8b803136e18ec93"
  },
  {
    "url": "assets/js/19.4604a1ba.js",
    "revision": "1682faff009bb9d3150f62bec083465a"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/3.deb13c7b.js",
    "revision": "7c8830c6ba113a55b8d64d0cb6e33467"
  },
  {
    "url": "assets/js/4.30712052.js",
    "revision": "7b965984afd185ad2ec5e7c010f6cf2c"
  },
  {
    "url": "assets/js/5.ad38b59a.js",
    "revision": "4df3b422040ab1d21f9b44134e403968"
  },
  {
    "url": "assets/js/6.6730161a.js",
    "revision": "0e38fd7a178eebf0c5e521042b18c3fa"
  },
  {
    "url": "assets/js/7.7680a0aa.js",
    "revision": "69666be86f920d1b4b3ec65b7261573f"
  },
  {
    "url": "assets/js/8.4d375ac9.js",
    "revision": "e8bbf3602da6f3dda3785626082af2f2"
  },
  {
    "url": "assets/js/9.01198f1a.js",
    "revision": "f3cd542c91cc58bd6fb8152132732688"
  },
  {
    "url": "assets/js/app.50772c6c.js",
    "revision": "6962c5afba6f364fd8ccc93eecb6549f"
  },
  {
    "url": "daily/index.html",
    "revision": "592310351cedb53ee9347658309211a4"
  },
  {
    "url": "daily/vlog.html",
    "revision": "27d1c747b013b5dfdec53c51d6cd2503"
  },
  {
    "url": "daily/water-color.html",
    "revision": "dbec37e1e74070d63cdbb8756035ce02"
  },
  {
    "url": "diary/index.html",
    "revision": "a37533ae93055f049ae1c604aa5bf0aa"
  },
  {
    "url": "index.html",
    "revision": "6e2a795018b1796a793d0945d5e3a47b"
  },
  {
    "url": "note/code-review.html",
    "revision": "4273c666ff55308aba1b437374f33b07"
  },
  {
    "url": "note/export.html",
    "revision": "af9da1314f930989568054ea84645a1d"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "2b32bbd7ec79ad6835c3715565c44c6c"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "54f97e5cbc8ca5e01f96f572360d4c58"
  },
  {
    "url": "note/index.html",
    "revision": "44161d75f7634cee41d457cdaa9e8f9c"
  },
  {
    "url": "note/markdown.html",
    "revision": "e2e73339c711714a035ce80a55e31f35"
  },
  {
    "url": "note/node.html",
    "revision": "860358a7b5101bebf445c18d9230151d"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "6abd507cb1f20d66d58d151e30eeee90"
  },
  {
    "url": "note/webpack.html",
    "revision": "ba485afd2c0e8d34486a093298ed35ea"
  },
  {
    "url": "zh/index.html",
    "revision": "19c416b943b22267d3217bc25b5e26d7"
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
