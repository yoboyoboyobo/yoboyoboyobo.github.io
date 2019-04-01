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
    "revision": "78b89bf02acb676641b34549b0fb9fb4"
  },
  {
    "url": "assets/css/0.styles.1b1543a3.css",
    "revision": "32572aa34e9364cc0fadf0f688698561"
  },
  {
    "url": "assets/js/10.109c7291.js",
    "revision": "4c6b17cfa83dac140e0bdfcdf762c005"
  },
  {
    "url": "assets/js/11.a5beb2f1.js",
    "revision": "91848de773bbad8117caec814a5830c6"
  },
  {
    "url": "assets/js/12.669d19d6.js",
    "revision": "45010e27ddbdd5f3370d60343cb2a3ae"
  },
  {
    "url": "assets/js/13.4b2b6f81.js",
    "revision": "196b0ff0e8fed4a93a5103c83c3f936e"
  },
  {
    "url": "assets/js/14.10ea12a8.js",
    "revision": "b145886af36749640c8aef0e82f385bc"
  },
  {
    "url": "assets/js/15.f40c4bb9.js",
    "revision": "d2308ff50b5fdc82b0f059e7d3794459"
  },
  {
    "url": "assets/js/16.76d23392.js",
    "revision": "e1111ae2d024dbc5af3e6caaf9c13107"
  },
  {
    "url": "assets/js/17.ca66b202.js",
    "revision": "4fcc682f91c6cf14dc9113c1d3a7b95e"
  },
  {
    "url": "assets/js/18.26807715.js",
    "revision": "e48d3e89eb11e9e7184974fe94fca932"
  },
  {
    "url": "assets/js/19.678109c9.js",
    "revision": "0c356859a7a17c240650ca487e135667"
  },
  {
    "url": "assets/js/2.fc705826.js",
    "revision": "40b9305d8ff44767d0cfd5e2e18e956c"
  },
  {
    "url": "assets/js/20.d42771cb.js",
    "revision": "550300d5e54912388b923949b4b440d7"
  },
  {
    "url": "assets/js/21.c21addca.js",
    "revision": "0d601137bf689665920567e7e680d4de"
  },
  {
    "url": "assets/js/22.0b538999.js",
    "revision": "86faaff4de24e41a0ca0ae511f54666e"
  },
  {
    "url": "assets/js/23.52ddd9da.js",
    "revision": "92067131daa29b9de361b94a8a544916"
  },
  {
    "url": "assets/js/24.fa78ad08.js",
    "revision": "ae7ca08816b0dd17ed30fe6fe2bd6bfc"
  },
  {
    "url": "assets/js/25.aaa44f30.js",
    "revision": "3168db1b5b3b3b9be7a697844c99622c"
  },
  {
    "url": "assets/js/26.5b002d9a.js",
    "revision": "111cbae5f50a8ae16c24bf5cff3820b4"
  },
  {
    "url": "assets/js/27.5c0d22fc.js",
    "revision": "62d7790fc2b9e608f67f0214b8873c45"
  },
  {
    "url": "assets/js/28.eece5e8f.js",
    "revision": "8d95d203a10e0291de90fab14668d776"
  },
  {
    "url": "assets/js/29.1231759a.js",
    "revision": "a8befd06a2615707daa38f10cd261b16"
  },
  {
    "url": "assets/js/3.9f702f27.js",
    "revision": "1865a83c7244ff50679a0c966d985111"
  },
  {
    "url": "assets/js/30.fcd4306e.js",
    "revision": "b22d21bbe5348e5ac53023d38ee7dc38"
  },
  {
    "url": "assets/js/31.0654d6c6.js",
    "revision": "a1e183cfcf88918bcd709442912a9543"
  },
  {
    "url": "assets/js/32.2ead873d.js",
    "revision": "7b8892113fd65c2f930e6b10c05e54ac"
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
    "url": "assets/js/6.9457fcc3.js",
    "revision": "c8994336bf096dc61d914c0d170a31be"
  },
  {
    "url": "assets/js/7.82fd6ba3.js",
    "revision": "2e9f00c3c46aef90ef092fb59303dda4"
  },
  {
    "url": "assets/js/8.83b5f5d9.js",
    "revision": "da883f30f752b1c066e6978f0e2709a1"
  },
  {
    "url": "assets/js/9.5772b72f.js",
    "revision": "7520220a2622fcbfc23b25d0aceb9bcf"
  },
  {
    "url": "assets/js/app.1b9b3770.js",
    "revision": "966ad0ded86a883253ccabdb3faf1072"
  },
  {
    "url": "daily/cat.html",
    "revision": "52d0e1a0d70704729e51de3fcbf451d3"
  },
  {
    "url": "daily/electronic-keyboard.html",
    "revision": "7cc87b5327a3b4534c54508a57682fdc"
  },
  {
    "url": "daily/food.html",
    "revision": "299544f021071430cf5cecd5e9756207"
  },
  {
    "url": "daily/index.html",
    "revision": "f2bf908a805b83a50b5612c79994a055"
  },
  {
    "url": "daily/swin.html",
    "revision": "f687c06b052d53b3fa50b34fef178912"
  },
  {
    "url": "daily/vlog.html",
    "revision": "0e43ddf69d8a8ab998e69b43dbf94b97"
  },
  {
    "url": "daily/water-color.html",
    "revision": "672c8cad2ed431e802df1d4fc7fef4d7"
  },
  {
    "url": "daily/yoga.html",
    "revision": "8d2a9ec0fe827ed961f4288609693fb2"
  },
  {
    "url": "diary/closure.html",
    "revision": "e4874541db922d3c1a7e1c1511c7d474"
  },
  {
    "url": "diary/eventloop.html",
    "revision": "0048c923bfeb26b6f0e5d9e93869f96a"
  },
  {
    "url": "diary/index.html",
    "revision": "dcb53d4df111075787908e7cc0008816"
  },
  {
    "url": "diary/type.html",
    "revision": "8b01397290fc59d8450de28e9c0fc742"
  },
  {
    "url": "index.html",
    "revision": "fe10f01b94adf6b1e3f8ff2b6a9c2d61"
  },
  {
    "url": "note/code-review.html",
    "revision": "4c215a3d85f114515f79fb6398f682f8"
  },
  {
    "url": "note/cors.html",
    "revision": "ed263018e3cb4223b727b913cc1fd209"
  },
  {
    "url": "note/export.html",
    "revision": "61dee5ee187579ef831d6cebc6ac7996"
  },
  {
    "url": "note/fe-sop.html",
    "revision": "3023ca9f60c941670e363d32cd4f0a17"
  },
  {
    "url": "note/git-ssh.html",
    "revision": "17143daa83e7f0c43a0edf257dc869fe"
  },
  {
    "url": "note/index.html",
    "revision": "6206283a2b8feacff9f07bfd217d2a12"
  },
  {
    "url": "note/markdown.html",
    "revision": "fb838ebc39d11ea92ce060355a2152c2"
  },
  {
    "url": "note/node.html",
    "revision": "01beb911b88385fa9e953f13b7173760"
  },
  {
    "url": "note/security.html",
    "revision": "d034794a49ac452facae6f80edf87918"
  },
  {
    "url": "note/threejs.html",
    "revision": "4b155ee50d953ea6e5c0d498268eb8fd"
  },
  {
    "url": "note/throttle-debounce.html",
    "revision": "839c7fd45709c10b615dad2ef818bef0"
  },
  {
    "url": "note/vuepress-io-guild.html",
    "revision": "30027ad9bdf2ced69772e261be921ba1"
  },
  {
    "url": "note/webpack.html",
    "revision": "dc2898e904bba115ae1645b90818ffdf"
  },
  {
    "url": "thinking/resume.html",
    "revision": "bf1506a673ce1c907b9bee040ca82496"
  },
  {
    "url": "zh/index.html",
    "revision": "4b73a29158ff23e4d0300d6863d8b277"
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
