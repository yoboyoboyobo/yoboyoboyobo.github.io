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
    "revision": "8c058b3f3023f3e508fd4f7178e18bf6"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.a93c3a70.js",
    "revision": "4892443c41f453c16f8d7a01af67d483"
  },
  {
    "url": "assets/js/11.a8c06b88.js",
    "revision": "d8a87229c707b3ff6c3d631e876d1c8e"
  },
  {
    "url": "assets/js/12.9cf4c99e.js",
    "revision": "d970b6e452c2a5b93ecf6b8f44dadd08"
  },
  {
    "url": "assets/js/13.c82f9e40.js",
    "revision": "7b792905156540868442692bf000b90a"
  },
  {
    "url": "assets/js/14.38186594.js",
    "revision": "ecb2a847f71b2984dc21d18505960300"
  },
  {
    "url": "assets/js/15.672c692d.js",
    "revision": "2379c111dd655ea88e2020619d036b72"
  },
  {
    "url": "assets/js/16.2e62dd24.js",
    "revision": "8465cfaf7ddc8b4cf1175f07cc5d7fb8"
  },
  {
    "url": "assets/js/17.689116c0.js",
    "revision": "bea073d6494dfe37e1980ef548b40353"
  },
  {
    "url": "assets/js/18.cf0c38ac.js",
    "revision": "710a2c6ef3c8bd2066a973f0a0d6f06b"
  },
  {
    "url": "assets/js/19.917ac865.js",
    "revision": "adaab8814479edd782ebd80d7ef3711e"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.9ae1641e.js",
    "revision": "5a62066538e69faab7967b304f759144"
  },
  {
    "url": "assets/js/21.881833b6.js",
    "revision": "aa8a2c1c35045014f55812c4c527b683"
  },
  {
    "url": "assets/js/22.5960ef22.js",
    "revision": "024f45d3323091462db2fdce0a242995"
  },
  {
    "url": "assets/js/23.04bc48cf.js",
    "revision": "b5053c734c9cd7bbec0d27505ed71940"
  },
  {
    "url": "assets/js/24.ac4bb9fc.js",
    "revision": "4c24bd8a13c1e04bfa0800fe3400fe3b"
  },
  {
    "url": "assets/js/25.e270fa4b.js",
    "revision": "51e2eb285c30f0472420c042a43ba670"
  },
  {
    "url": "assets/js/26.5ddb33ed.js",
    "revision": "fff682c38ddba117ba782a5e16da9a1a"
  },
  {
    "url": "assets/js/27.3b4da937.js",
    "revision": "a3f07df7d4c556e233c319e124e60188"
  },
  {
    "url": "assets/js/28.8eff8398.js",
    "revision": "c7408dbd56cd8d06af7944e7ff6b0bd0"
  },
  {
    "url": "assets/js/29.7c2d8fed.js",
    "revision": "f74a62a65b88f2a053bee32fbbf0b9b3"
  },
  {
    "url": "assets/js/3.26b3e3db.js",
    "revision": "04504f8ccb3576caeeda7af739cda71c"
  },
  {
    "url": "assets/js/30.9a1b333d.js",
    "revision": "b9cfad9e91c9fa4889c290a330671268"
  },
  {
    "url": "assets/js/4.6ca8d67a.js",
    "revision": "c464de341bd7d5aa168df80508ba20db"
  },
  {
    "url": "assets/js/5.3905d6be.js",
    "revision": "1e69f6162dc6849ae80d215f2fc00d32"
  },
  {
    "url": "assets/js/6.9457fcc3.js",
    "revision": "c8994336bf096dc61d914c0d170a31be"
  },
  {
    "url": "assets/js/7.b57f1102.js",
    "revision": "0f6b9214ad38b48d406c2a131220a758"
  },
  {
    "url": "assets/js/8.e9aba9a9.js",
    "revision": "41cbc125e3fa83c282d627635f738314"
  },
  {
    "url": "assets/js/9.0ae093e1.js",
    "revision": "80f91fec6cc219af1d718c646a7edd2f"
  },
  {
    "url": "assets/js/app.036a98be.js",
    "revision": "0e1b81cba3326d87bb5c490f8f275caa"
  },
  {
    "url": "daily/cat.html",
    "revision": "cf412fad45f2301597886b969c46dd5f"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "f42c3ee9e9c3274cfc6c62e11260fc1f"
  },
  {
    "url": "daily/food.html",
    "revision": "9cfef3c6c5b5d6e92da32a6dda8f7895"
  },
  {
    "url": "daily/index.html",
    "revision": "812a960a10607b34ecce9e6e5e0d2e48"
  },
  {
    "url": "daily/swin.html",
    "revision": "0b8c6836e5aed427e18b7d57b0df4a14"
  },
  {
    "url": "daily/vlog.html",
    "revision": "4222b6c825bdb23a6e766ad167b489d3"
  },
  {
    "url": "daily/water-color.html",
    "revision": "bab114fee94b221cd7591741d19cb830"
  },
  {
    "url": "daily/yoga.html",
    "revision": "a60622237394829bac667872708d8e7a"
  },
  {
    "url": "diary/closure.html",
    "revision": "1d3bd82e815ada7ac890b9ba2992db27"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "6b639394ece5dda5fe3932e2c832eee8"
  },
  {
    "url": "diary/index.html",
    "revision": "cfb34d46daad8edcb0988beccab1082c"
  },
  {
    "url": "diary/type.html",
    "revision": "8931237f4235df5968cff5cc92e5807e"
  },
  {
    "url": "index.html",
    "revision": "b13341390aaed333ecec19d6702c6b31"
  },
  {
    "url": "note/code-review.html",
    "revision": "1b4cd0c9af7e900ee8a06bc9c11a4120"
  },
  {
    "url": "note/export.html",
    "revision": "12f59eb17bb229ea7203eed0e5f93a94"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "240c267c04c53eb580a93e7699822cfb"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "dc843bf29f1da37a8e90124a2e633807"
  },
  {
    "url": "note/index.html",
    "revision": "c8f377ccbbe37951c72eb8ab6058026e"
  },
  {
    "url": "note/markdown.html",
    "revision": "dd60878dadea2b998e8576bc81ccb17b"
  },
  {
    "url": "note/node.html",
    "revision": "8be9a763ab9d39319fb40ea21e9f5941"
  },
  {
    "url": "note/threejs.html",
    "revision": "3ea229a4dda69be4c3e8fb6eb5f1fb74"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "d5742a60a4774a25a9259731389b5627"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "7b5da4f383c00240f1738418c2d32231"
  },
  {
    "url": "note/webpack.html",
    "revision": "acbd9415f90c80a9446e2b90c8922701"
  },
  {
    "url": "thiking/resume.html",
    "revision": "075b7b143aa2bcd103c29856668828fc"
  },
  {
    "url": "zh/index.html",
    "revision": "0c48d9340290d4dd2fa9b4380d260fde"
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
