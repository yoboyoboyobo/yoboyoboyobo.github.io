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
    "revision": "11c12afbcbe312f3b23111b85c82368c"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
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
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
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
    "url": "assets/js/app.fcef1594.js",
    "revision": "5c22d08a396628b07230ab6576a0818f"
  },
  {
    "url": "daily/cat.html",
    "revision": "3fc93fb531ad85f35b025a7b64901b57"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "fc2564e19ccc14bb37b1a82123d77dca"
  },
  {
    "url": "daily/food.html",
    "revision": "ad0f3111d567d8afdfead1ced11644bb"
  },
  {
    "url": "daily/index.html",
    "revision": "df1e7891b5deb09af3cde0a4b79f4350"
  },
  {
    "url": "daily/swin.html",
    "revision": "ccdcac76b5ca2e39b7207526a2189b15"
  },
  {
    "url": "daily/travel.html",
    "revision": "a1b24fb7f72e15f367e6b9062538d2f0"
  },
  {
    "url": "daily/vlog.html",
    "revision": "197233737935d86f22cb028850cb504f"
  },
  {
    "url": "daily/water-color.html",
    "revision": "b24a77d34409faf8dfe54e2e26845957"
  },
  {
    "url": "daily/yoga.html",
    "revision": "d6a6bca49e4a456d460e11defdee521c"
  },
  {
    "url": "diary/closure.html",
    "revision": "b2f6b9720b5031fb96e5c49607582aa5"
  },
  {
    "url": "diary/css.html",
    "revision": "5672914fc542e4090b15a92685c7f360"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "6431af0ef1c64264735900cbb8a86904"
  },
  {
    "url": "diary/html.html",
    "revision": "5737d83916514fa63c443f52383bc432"
  },
  {
    "url": "diary/index.html",
    "revision": "8dcaa5770b4efe90bf105cf2ef202fbf"
  },
  {
    "url": "diary/javascript.html",
    "revision": "77a1ff5aa477bf220c99ec22dc9d0c07"
  },
  {
    "url": "diary/mac.html",
    "revision": "c5b2dbbc14c46b65fa3a81106d3a7618"
  },
  {
    "url": "diary/type.html",
    "revision": "eff0f76699fc39429e02f9f5f9e9b95a"
  },
  {
    "url": "index.html",
    "revision": "bb4138d7439613ad547ae0ce4d1f662d"
  },
  {
    "url": "note/code-review.html",
    "revision": "3453d702d465716054fe91a1a8140462"
  },
  {
    "url": "note/cors.html",
    "revision": "1c7e2597ef37da33169ca0b9156e8ef4"
  },
  {
    "url": "note/export.html",
    "revision": "38d4e9dbce1fa77a1a3e14e781c26066"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "7c6c7512588c5603a4d90069ee2bc73a"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "5e5658724fda3c9a7a49305f11234595"
  },
  {
    "url": "note/index.html",
    "revision": "a506c584f26bdc46247facd492ac5c44"
  },
  {
    "url": "note/markdown.html",
    "revision": "f587d91eda71f9c1ba90faec0b2d258a"
  },
  {
    "url": "note/node.html",
    "revision": "2e64964bda9d60393057a4410591284f"
  },
  {
    "url": "note/security.html",
    "revision": "7d961f329b40dd0cb96b30b91598a0f4"
  },
  {
    "url": "note/threejs.html",
    "revision": "2250526e7efc22e44fb86ef8c1726b6a"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "5f01cdf0ade6f57eb8a5a7c4cf7919c9"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "58337c6b82e89c94a096c00a57b1a842"
  },
  {
    "url": "note/webpack.html",
    "revision": "880f2ffe3ee23fffd35c384315cbde44"
  },
  {
    "url": "thinking/resume.html",
    "revision": "9e19b0837f938d1f93e02cd543145963"
  },
  {
    "url": "zh/index.html",
    "revision": "676d4790870ec17cd9679583fd3ec289"
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
