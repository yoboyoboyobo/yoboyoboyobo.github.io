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
    "revision": "3748bb6ddc6914b9db425f03c1eaa04b"
  },
  {
    "url": "assets/css/0.styles.074f2267.css",
    "revision": "c832a4d0f057f636efbcd646a696256c"
  },
  {
    "url": "assets/js/10.ef7aa497.js",
    "revision": "af73480f94817509ccd895a581c53aed"
  },
  {
    "url": "assets/js/11.ad5cb681.js",
    "revision": "5c20f1b70c7eba9bec52a85ba18b5e1f"
  },
  {
    "url": "assets/js/12.f53a3f7f.js",
    "revision": "63fded93166cd7b429ebadcc4a7959b2"
  },
  {
    "url": "assets/js/13.9577791d.js",
    "revision": "b378bba778f2b9014b085547af5ba8cb"
  },
  {
    "url": "assets/js/14.ea37124c.js",
    "revision": "a413c54716f8b72f767d4028ff7c5d93"
  },
  {
    "url": "assets/js/15.ea6e5b55.js",
    "revision": "8b0d4b953cfd7f9e1d72f519b5dfd1c0"
  },
  {
    "url": "assets/js/16.08134140.js",
    "revision": "598e0b397410d9c26002cc8227c0e70b"
  },
  {
    "url": "assets/js/17.b493009e.js",
    "revision": "c049f9542ddf6d9f03f962e3d01643f8"
  },
  {
    "url": "assets/js/18.c6c72606.js",
    "revision": "28c09c7fc4cf64cf5f42860bdfb8a1c7"
  },
  {
    "url": "assets/js/19.d9610ad6.js",
    "revision": "a5e55b6f6aec240571973ddf9e2d291e"
  },
  {
    "url": "assets/js/2.8c834ce5.js",
    "revision": "ba00596edbd574c12f05320fc5732e4e"
  },
  {
    "url": "assets/js/20.57a49326.js",
    "revision": "8cabc07340ee8d5a668b52379776578e"
  },
  {
    "url": "assets/js/21.f688989a.js",
    "revision": "1d7f6183b18c359af0a9d6c8da317949"
  },
  {
    "url": "assets/js/22.cef5b00d.js",
    "revision": "a0697ac9a0106c1eb05762563ce97a04"
  },
  {
    "url": "assets/js/23.1b0952fd.js",
    "revision": "5af63af639b25c926bce9a1a833e6ae5"
  },
  {
    "url": "assets/js/24.c0d12549.js",
    "revision": "cdd14b8c6517266be051b5bdf5c3857e"
  },
  {
    "url": "assets/js/25.106461dd.js",
    "revision": "ff5b0299d2368c836b44764082691914"
  },
  {
    "url": "assets/js/26.60ea78e1.js",
    "revision": "daaebe0ecebae5a08d6c1a3557eb8c82"
  },
  {
    "url": "assets/js/27.a83db01c.js",
    "revision": "3728d6e7651a903408fc2d1811dc4c68"
  },
  {
    "url": "assets/js/28.28558757.js",
    "revision": "4f296c291c6ad3254695ee7662e49150"
  },
  {
    "url": "assets/js/29.f7ae30e1.js",
    "revision": "4337c277453247b652ede9b5dc86d822"
  },
  {
    "url": "assets/js/3.9437fae8.js",
    "revision": "31000ef867783e04d77d6bac75c352de"
  },
  {
    "url": "assets/js/30.340f5ef4.js",
    "revision": "0bf4a2a6a688a17ef36ff575fc578107"
  },
  {
    "url": "assets/js/31.5754eccb.js",
    "revision": "fdf30aa0bc8ef1b022052c67aeb36efe"
  },
  {
    "url": "assets/js/32.b726aba0.js",
    "revision": "07921f786577aed7c4ec8159794934c7"
  },
  {
    "url": "assets/js/33.9fcaa24d.js",
    "revision": "a8e9ad097bd6e939e7af5716aa64f742"
  },
  {
    "url": "assets/js/34.6ccb56d3.js",
    "revision": "f70a63c2a6b816a148bed2d231b9ab8c"
  },
  {
    "url": "assets/js/35.dd38b788.js",
    "revision": "45c0977ac51002051c7e67a788ba8c9a"
  },
  {
    "url": "assets/js/36.0677be9d.js",
    "revision": "f133d2e4f5e7438127c3d9d543812784"
  },
  {
    "url": "assets/js/37.045c0661.js",
    "revision": "d725d4861e5ae37a3a7af216eea27061"
  },
  {
    "url": "assets/js/38.0a73c34f.js",
    "revision": "178d7079820aac6264ed4b8e55969700"
  },
  {
    "url": "assets/js/4.7c9f5753.js",
    "revision": "310692efc9f988c628e7f8ec0f78ebce"
  },
  {
    "url": "assets/js/5.3905d6be.js",
    "revision": "1e69f6162dc6849ae80d215f2fc00d32"
  },
  {
    "url": "assets/js/6.4b02ca03.js",
    "revision": "ba4f515f29c78b887153b04958aa3142"
  },
  {
    "url": "assets/js/7.1a92105d.js",
    "revision": "ba8e58bb6d3f9755e1e9ca1628a4fb25"
  },
  {
    "url": "assets/js/8.9f6d3c33.js",
    "revision": "093c6dcb71a3ecc53e553a3145a2708a"
  },
  {
    "url": "assets/js/9.5edde692.js",
    "revision": "784f29e65ee8c4cc2c94bf7b5abc6db0"
  },
  {
    "url": "assets/js/app.54a9b57d.js",
    "revision": "286e04696f06f0e17d35540e8a8495f2"
  },
  {
    "url": "daily/cat.html",
    "revision": "cb2c0749ad8e4b8917728295b3ca15c9"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "a6d6e90b9dea2e904cf284eb189808e9"
  },
  {
    "url": "daily/food.html",
    "revision": "ad35a356126c62dcaaeb9a9862bce8e8"
  },
  {
    "url": "daily/index.html",
    "revision": "2b0e57313a3701ee21d749e8b4857e68"
  },
  {
    "url": "daily/swin.html",
    "revision": "d951618527e0c3893539a966f35507e9"
  },
  {
    "url": "daily/travel.html",
    "revision": "cdbbbac84c33c93745276e0e7e1bef5e"
  },
  {
    "url": "daily/vlog.html",
    "revision": "2d90e32f4dc299f31be1ba54b656d854"
  },
  {
    "url": "daily/water-color.html",
    "revision": "a7155e39f54f50c4d2f1dfdf2b8ecd66"
  },
  {
    "url": "daily/yoga.html",
    "revision": "4c30a9c6fbb54c45f5307b1569ef9b4d"
  },
  {
    "url": "diary/closure.html",
    "revision": "beef862167e1d4dd32ba1877785fc9dc"
  },
  {
    "url": "diary/css.html",
    "revision": "79a860145afe9e44cc7ed8875f91504e"
  },
  {
    "url": "diary/english.html",
    "revision": "17b9542c5331540e83f2a883eadbf37f"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "83e7baa82197dcc9233b8f1e47c65faf"
  },
  {
    "url": "diary/html.html",
    "revision": "68716db821050f174d5b86124cd8b5b8"
  },
  {
    "url": "diary/index.html",
    "revision": "0be063740c7a2f8bfe42364391035339"
  },
  {
    "url": "diary/javascript.html",
    "revision": "969ea3ba0aa9866514dcfcb9a34c0e8f"
  },
  {
    "url": "diary/mac.html",
    "revision": "22562274ec2cdbbb30afccc3980ed1ad"
  },
  {
    "url": "diary/type.html",
    "revision": "b9b8f18e72ad6c5c36f1420aa21d8a71"
  },
  {
    "url": "index.html",
    "revision": "35ac1a8e96276f3220a7f4aff35805fc"
  },
  {
    "url": "note/code-review.html",
    "revision": "ef264397af8e5768b947e20de6feed84"
  },
  {
    "url": "note/cors.html",
    "revision": "2a7a9497debded4fd626824f9ed290f2"
  },
  {
    "url": "note/export.html",
    "revision": "439e0e43396a3a57a865b3a5111495a2"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "a4109883f987093ddb9e590986b5ed86"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "e9568458cc5d18fec65839b8602564e8"
  },
  {
    "url": "note/index.html",
    "revision": "513eb3803fe2758cc3a0811e1ec15ec6"
  },
  {
    "url": "note/markdown.html",
    "revision": "e8cfcac80672dd2f17c2d567b075049a"
  },
  {
    "url": "note/node.html",
    "revision": "3172774a6402ea44f02ac4341654bbef"
  },
  {
    "url": "note/security.html",
    "revision": "0ed4d666eb2ee91c20201c67a1463347"
  },
  {
    "url": "note/threejs.html",
    "revision": "2b8add8ddb55ae5419911b3c5091ff87"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "5bbe326b2da2c4e125e314c1c53d929f"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "621cc064b6128391369613f5dd667639"
  },
  {
    "url": "note/webpack.html",
    "revision": "02e6f0429e1324a95a2dbf198b947918"
  },
  {
    "url": "thinking/resume.html",
    "revision": "59b2bdb2154e282c118828fc677a6c63"
  },
  {
    "url": "zh/index.html",
    "revision": "50529a9a090557d692458193472c4d9e"
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
