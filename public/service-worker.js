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
    "revision": "2469e3f920af78be80c58b36cc790ccd"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.1593c981.js",
    "revision": "6253c9f0dd3fb8c3b0ad6ef58ac83738"
  },
  {
    "url": "assets/js/11.c50a5a29.js",
    "revision": "8a0a941a924eb254d22f36fd7f689ae5"
  },
  {
    "url": "assets/js/12.6f8f994d.js",
    "revision": "c7162af87da38f2024fc9059532606d9"
  },
  {
    "url": "assets/js/13.83beb065.js",
    "revision": "607b96d30e4724a164e8c6644229a59b"
  },
  {
    "url": "assets/js/14.c6fb6aa3.js",
    "revision": "2d8b6ce5971c858ba04b0e2c42193a9c"
  },
  {
    "url": "assets/js/15.58638d54.js",
    "revision": "2de17d8e480e81ffd817ed6b890c40e2"
  },
  {
    "url": "assets/js/16.41ed8d18.js",
    "revision": "09dacce51b30ca36c11dd6e54b17f52f"
  },
  {
    "url": "assets/js/17.4eb8538a.js",
    "revision": "38b80739c89d4e7e9b38d59faa74d452"
  },
  {
    "url": "assets/js/18.22517148.js",
    "revision": "56b26db63c375fe1b00ca0a2e97f4324"
  },
  {
    "url": "assets/js/19.4a6ebb06.js",
    "revision": "78c09818685b7a244042c2aa6ffe39cd"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.ed0e30d6.js",
    "revision": "a8be6ea9fd5ae07e7fecbd1398dcbcbf"
  },
  {
    "url": "assets/js/21.3100d2a2.js",
    "revision": "f28138f05345154eaaf496ad530ac950"
  },
  {
    "url": "assets/js/22.10aa6e38.js",
    "revision": "b091fe4a92ace286cabafd1def11ed69"
  },
  {
    "url": "assets/js/23.fdb894ce.js",
    "revision": "ab2e82610a8bc3ee914f73a8cca86a0b"
  },
  {
    "url": "assets/js/24.e615bd82.js",
    "revision": "435f70fd2e2f188b790bd1cb1401a550"
  },
  {
    "url": "assets/js/25.8ffa9c2b.js",
    "revision": "470c07b3b2439fc368d07c14ec3597c5"
  },
  {
    "url": "assets/js/26.b38daae3.js",
    "revision": "385099e2b721a92b4c0da208d8ff3ff0"
  },
  {
    "url": "assets/js/27.61e4035e.js",
    "revision": "24eea46977ff89c3ab237ccad0d3aa8c"
  },
  {
    "url": "assets/js/28.3f1a1c19.js",
    "revision": "e1fb5d6c31657b12d733a3f6c9d124fa"
  },
  {
    "url": "assets/js/29.fe322751.js",
    "revision": "710879c730b444dcad58dabcce30938b"
  },
  {
    "url": "assets/js/3.df7a674b.js",
    "revision": "e8f466babcccf5515ed7a16d425f0d96"
  },
  {
    "url": "assets/js/30.e7ffa4ed.js",
    "revision": "115c2d31c97dcd9aab37bfb7b5d551e5"
  },
  {
    "url": "assets/js/31.8d6d8713.js",
    "revision": "b1308935d5cd84ba0f9e76b86f45fd33"
  },
  {
    "url": "assets/js/32.d7f91e99.js",
    "revision": "092aa82127cdbcf0c473b62685953706"
  },
  {
    "url": "assets/js/33.a70a8e9b.js",
    "revision": "a644c877c6c6b573ebe1a8f6216bd55c"
  },
  {
    "url": "assets/js/34.768dc6bf.js",
    "revision": "7f4fe1316f0b7e8fea67a0be3d75e923"
  },
  {
    "url": "assets/js/35.83822871.js",
    "revision": "b5d8d5c0feb88e1a5542cc6edb598c1f"
  },
  {
    "url": "assets/js/36.c95437b9.js",
    "revision": "320ddcfe4f77e8a6fae0e6b5a7b97018"
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
    "url": "assets/js/7.82fd6ba3.js",
    "revision": "2e9f00c3c46aef90ef092fb59303dda4"
  },
  {
    "url": "assets/js/8.9f6d3c33.js",
    "revision": "093c6dcb71a3ecc53e553a3145a2708a"
  },
  {
    "url": "assets/js/9.21fbac67.js",
    "revision": "217e4b418b1a218e14373668defc0fd7"
  },
  {
    "url": "assets/js/app.3a0eadcc.js",
    "revision": "f832eb85bd45259ed6d44ce31eea67aa"
  },
  {
    "url": "daily/cat.html",
    "revision": "d83fb1ac459d3d7088425779f2536993"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "487a231d6ff58a41e7a6de078fb8fdd1"
  },
  {
    "url": "daily/food.html",
    "revision": "5a9e2eeb294c41916324236f6b51007b"
  },
  {
    "url": "daily/index.html",
    "revision": "3298ac46978efe1b1cda547b6f9a91f4"
  },
  {
    "url": "daily/swin.html",
    "revision": "16f04391525f40da2dbc967a5fec7a29"
  },
  {
    "url": "daily/travel.html",
    "revision": "8e2e446027d1c70829d0a73d94c8f7cc"
  },
  {
    "url": "daily/vlog.html",
    "revision": "80ee3b10fd0efb99bde5f67113d3db4d"
  },
  {
    "url": "daily/water-color.html",
    "revision": "9386f625521d3b3e42fd05c845a8352b"
  },
  {
    "url": "daily/yoga.html",
    "revision": "298b280020016c2066a792145ff49fe8"
  },
  {
    "url": "diary/closure.html",
    "revision": "e360c3daba0fe8021022800f789a54c3"
  },
  {
    "url": "diary/css.html",
    "revision": "3da437c2a25447041615c94cffd42256"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "3fb3793da1e2db463754010312347d78"
  },
  {
    "url": "diary/html.html",
    "revision": "3a9232415404f6ba3b7ff599973f9d19"
  },
  {
    "url": "diary/index.html",
    "revision": "e92e8c1d3f9bee891b1dc0ca069ae2e1"
  },
  {
    "url": "diary/javascript.html",
    "revision": "b47ebff57ccc79a319478c1e58bb34a8"
  },
  {
    "url": "diary/type.html",
    "revision": "ec0058f5b1077da6b2ac58b2f4ab5553"
  },
  {
    "url": "index.html",
    "revision": "46309f9a2cdc0582260c655c87708a4c"
  },
  {
    "url": "note/code-review.html",
    "revision": "8ff55bc88273b57536ed3ccd416903bc"
  },
  {
    "url": "note/cors.html",
    "revision": "60e1491c38a8b496f8bd68d84e0c994b"
  },
  {
    "url": "note/export.html",
    "revision": "ec6f6ff7cae68f041fdb9a578f46748e"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "4f9e2c77e8c2688558170c3f03ec6fa7"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "b59df16f5df9cff999776a6d093e8681"
  },
  {
    "url": "note/index.html",
    "revision": "218c82e0bfb270d371594930972d3bb6"
  },
  {
    "url": "note/markdown.html",
    "revision": "74d73173ba0a5057b55a5239d7c50dfb"
  },
  {
    "url": "note/node.html",
    "revision": "769e96e94e1dda6e5638eb0f04dbfe96"
  },
  {
    "url": "note/security.html",
    "revision": "c8ac3281bfb0ff0d1417099a2e0be6b9"
  },
  {
    "url": "note/threejs.html",
    "revision": "89b55cc9312521d40def2b2f9ec0a72f"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "a4699551832e74e831d743e7621c5aec"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "dbf3ccdd2ec7d65d579b3747354ffd9c"
  },
  {
    "url": "note/webpack.html",
    "revision": "09baaee0be58c50dd33b8e6d3c7f9c0b"
  },
  {
    "url": "thinking/resume.html",
    "revision": "5d02b8e2eaf286205a3a82603441fd55"
  },
  {
    "url": "zh/index.html",
    "revision": "6d211612a6e99128a22889d48ea589d6"
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
