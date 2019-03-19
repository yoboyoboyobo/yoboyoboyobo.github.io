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
    "revision": "120c307897a664b7f19a03aa0179610c"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.c80097c5.js",
    "revision": "e38bce383fedd616d6d75d9099e3329b"
  },
  {
    "url": "assets/js/11.eeb15e94.js",
    "revision": "051ebff53710d31fdac8ba443abb0d0f"
  },
  {
    "url": "assets/js/12.c12ec4b9.js",
    "revision": "b17c57b3f5759c277acb1001b931d320"
  },
  {
    "url": "assets/js/13.b0640ecf.js",
    "revision": "a4e8f308a03a6bd8592c321b0fe73323"
  },
  {
    "url": "assets/js/14.22943b6d.js",
    "revision": "3b78a2010ed3da58ed30e08a6013beb9"
  },
  {
    "url": "assets/js/15.7211f7d3.js",
    "revision": "99ba5e710deb9e603f4390859207309a"
  },
  {
    "url": "assets/js/16.effbe1d8.js",
    "revision": "0b389355929a2ac67fdfc47692ec60b0"
  },
  {
    "url": "assets/js/17.4b5dc724.js",
    "revision": "d89b4b986eaed0851fe1eeed65d6a9ef"
  },
  {
    "url": "assets/js/18.e402646e.js",
    "revision": "1d86ea498564b52cd200b8478c148454"
  },
  {
    "url": "assets/js/19.3792a86e.js",
    "revision": "931ba201ed2d04f40e8b6deb095fe14a"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.35360c7a.js",
    "revision": "792b967d19a3cc98c0f8c612d41d62a8"
  },
  {
    "url": "assets/js/3.deb13c7b.js",
    "revision": "7c8830c6ba113a55b8d64d0cb6e33467"
  },
  {
    "url": "assets/js/4.80eab5b0.js",
    "revision": "f17cf5b9f336fd23fd61532adf9e61e9"
  },
  {
    "url": "assets/js/5.66bf0241.js",
    "revision": "029a2fd1842a044254ecec5ea741cc87"
  },
  {
    "url": "assets/js/6.8a61db93.js",
    "revision": "986f3e233b1d8893ab2976ed4ed53112"
  },
  {
    "url": "assets/js/7.9406b71b.js",
    "revision": "83f27c7bb39cdc9c1893b2d6d367fd8a"
  },
  {
    "url": "assets/js/8.eaf3d630.js",
    "revision": "456d17c6cc6c7fe12e1493a6d9154b1b"
  },
  {
    "url": "assets/js/9.291a42fe.js",
    "revision": "cbdb8e4ddafbae2815709237ebb34881"
  },
  {
    "url": "assets/js/app.1a75fe87.js",
    "revision": "57e3a20c9eb9a38c1d0e5ab433e1c8ed"
  },
  {
    "url": "daily/index.html",
    "revision": "545fe03e352778dce3a634caf8ae3b16"
  },
  {
    "url": "daily/vlog.html",
    "revision": "f1a06755b621a28face6dc2237704bbe"
  },
  {
    "url": "daily/water-color.html",
    "revision": "8db0c66fa39c40283dbd693237e5ba06"
  },
  {
    "url": "daily/yoga.html",
    "revision": "bcc9ecdbbe442e2efdb5a3c2a0536281"
  },
  {
    "url": "diary/index.html",
    "revision": "47835445743bdfc1135d6de15e40237d"
  },
  {
    "url": "index.html",
    "revision": "cc94e981295b755583ded5d6da818ef8"
  },
  {
    "url": "note/code-review.html",
    "revision": "cb9c76d90f364dc9eb45fccac9223f9d"
  },
  {
    "url": "note/export.html",
    "revision": "04406ef845ac420392b5fb6436949a96"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "d83059b3f09128d8abd849130ae1b610"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "e96b51f851608a8118cffa4addec5ebc"
  },
  {
    "url": "note/index.html",
    "revision": "615863659871950c0c17acf0e5e093dc"
  },
  {
    "url": "note/markdown.html",
    "revision": "811130511d63ff405537933f58c289fd"
  },
  {
    "url": "note/node.html",
    "revision": "bd1a3c531797a56ca0666725d67ad896"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "7e0378c32abd566a98bf752a47991a65"
  },
  {
    "url": "note/webpack.html",
    "revision": "8dbcea5731880dfba7c93cd681ee4b61"
  },
  {
    "url": "zh/index.html",
    "revision": "79e2f8449cf271e0c840e5b33592d65a"
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
