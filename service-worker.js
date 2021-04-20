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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4384571586a462347baa2a2b7ecc3257"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "77942c1a9e4ff6a8e42f789f4a987eb4"
  },
  {
    "url": "advanced/dsl.html",
    "revision": "c2fc67ac4b1abfa97977b5a1113caeac"
  },
  {
    "url": "advanced/hot-area-component.html",
    "revision": "099340214715390afa210426806de51f"
  },
  {
    "url": "advanced/meta.html",
    "revision": "73a3aed89b286aa8aee1168b926d933d"
  },
  {
    "url": "advanced/routerController.html",
    "revision": "a88d203028b85facb0b3bc26d6160174"
  },
  {
    "url": "assets/css/0.styles.95c628d6.css",
    "revision": "6c8ae5dba9d6432da76e8df40dcb9429"
  },
  {
    "url": "assets/img/0.aab3f5fa.png",
    "revision": "aab3f5fad95e9dbcaf17a4e504b18083"
  },
  {
    "url": "assets/img/1.06a51c46.png",
    "revision": "06a51c462763bda3c82c2f44eb9e2f58"
  },
  {
    "url": "assets/img/10.e678288c.png",
    "revision": "e678288c9f264ef9a77467994f4ffab7"
  },
  {
    "url": "assets/img/2.125674d3.png",
    "revision": "125674d30a384ab6fe0e95202c84cb55"
  },
  {
    "url": "assets/img/3.c08121f8.png",
    "revision": "c08121f83b99138f39b19eb11cbb449b"
  },
  {
    "url": "assets/img/4.974f353b.png",
    "revision": "974f353b446f74ef7e280590be6c2946"
  },
  {
    "url": "assets/img/5.82569f67.png",
    "revision": "82569f67d8a8baf8c588f9b9bd4a6f37"
  },
  {
    "url": "assets/img/6.0d43986c.png",
    "revision": "0d43986c8e1863582ab5e30df2e1b379"
  },
  {
    "url": "assets/img/7.34f0103a.png",
    "revision": "34f0103abec8662f5a59e8297f68d08a"
  },
  {
    "url": "assets/img/8.68dffbdb.png",
    "revision": "68dffbdbdb74c85fa128ab1d4568d6c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6fa70f2c.js",
    "revision": "cbf10fcb01e33b9c5c7548908a51ba14"
  },
  {
    "url": "assets/js/11.88292b76.js",
    "revision": "72fc22369794c03de66a471ec6fb4b61"
  },
  {
    "url": "assets/js/12.e2d327f7.js",
    "revision": "a33c8d15c91681b2aaf282b6e8ebb71a"
  },
  {
    "url": "assets/js/13.6de1991b.js",
    "revision": "201494e4387a026fe6b042ff60ede62b"
  },
  {
    "url": "assets/js/14.085ce070.js",
    "revision": "197bdb6c3c50e9234384977914f02860"
  },
  {
    "url": "assets/js/15.fc2d6ac8.js",
    "revision": "bed853ad3951bababf68b073033d597d"
  },
  {
    "url": "assets/js/16.00d2f0e9.js",
    "revision": "2c8ab5ec40bcbafe33ab847d60c18347"
  },
  {
    "url": "assets/js/17.7ea1d42f.js",
    "revision": "32971383513865ab9464192e0a264b78"
  },
  {
    "url": "assets/js/18.0268d564.js",
    "revision": "798efeebb3b2c8177d85dc15745aa50c"
  },
  {
    "url": "assets/js/19.3c3e7051.js",
    "revision": "9f7f819f0376c4074aee9a084c53294a"
  },
  {
    "url": "assets/js/2.ce708975.js",
    "revision": "893987672d6b611ad59f6e2ef504edf1"
  },
  {
    "url": "assets/js/20.6f90607e.js",
    "revision": "5c6d0a931997b3e54dd0017828b6d4ce"
  },
  {
    "url": "assets/js/21.0509591c.js",
    "revision": "fd62c4b5a8ea92471509dde566bf9ece"
  },
  {
    "url": "assets/js/22.2a3296e0.js",
    "revision": "b3a81f7433f6f74c01e960e205d6249e"
  },
  {
    "url": "assets/js/23.9dd93c45.js",
    "revision": "52d681f437d3d561f1c687ba99111ff7"
  },
  {
    "url": "assets/js/24.4c159b7d.js",
    "revision": "2c163be14d118ffb6705cb49794366e9"
  },
  {
    "url": "assets/js/25.2593d71a.js",
    "revision": "01a2c5df79cddb403c8f2b1ef7e6352f"
  },
  {
    "url": "assets/js/26.6adc3b1b.js",
    "revision": "8776e8e19b71da8049ed2e78a7577c8f"
  },
  {
    "url": "assets/js/27.fc82fb78.js",
    "revision": "4cc53800ac7c2fe7bed7458c85374291"
  },
  {
    "url": "assets/js/28.61d447f0.js",
    "revision": "bf28be2acd1a01ce10e9b81716d6470e"
  },
  {
    "url": "assets/js/29.7b2687aa.js",
    "revision": "56169e9d7a2bf220e74072cea6a03115"
  },
  {
    "url": "assets/js/3.471035c4.js",
    "revision": "7adf388aac00fb6d04569ec034f880a9"
  },
  {
    "url": "assets/js/30.15325256.js",
    "revision": "836bf05b20dd802e421bca2c3044fdac"
  },
  {
    "url": "assets/js/31.fb364832.js",
    "revision": "f8578994c1f5c4f96976ec530f0bb98c"
  },
  {
    "url": "assets/js/32.25c40c02.js",
    "revision": "792275782166df8afbc0aa3945ced14e"
  },
  {
    "url": "assets/js/33.c9579d4f.js",
    "revision": "330011453afcf86db625f3edc6eb20bf"
  },
  {
    "url": "assets/js/34.1123b85e.js",
    "revision": "7f453af096be57f0a946705ee2d48501"
  },
  {
    "url": "assets/js/35.e1026a34.js",
    "revision": "ddb9cd0ea7838cca782dd0c18b6e3b68"
  },
  {
    "url": "assets/js/36.a1323f09.js",
    "revision": "edd419eb9881d04fc4b723cf0102e22a"
  },
  {
    "url": "assets/js/37.904f6615.js",
    "revision": "efb7c0f0f41e8fa23b6aecbddc0b1fba"
  },
  {
    "url": "assets/js/38.8fd08bc3.js",
    "revision": "b83059fedd78e4b85fe20025cc4f5659"
  },
  {
    "url": "assets/js/39.db326d7f.js",
    "revision": "f16cefb42a98a7e3d02118810854f52e"
  },
  {
    "url": "assets/js/4.844c4129.js",
    "revision": "1a9758f92051330276c1a2e67d04e0fa"
  },
  {
    "url": "assets/js/40.39f20d5b.js",
    "revision": "5bf6f9227824124a3ae448df09f22323"
  },
  {
    "url": "assets/js/41.ea98f48a.js",
    "revision": "2a2ec63f3332a4b068edaf272d7ce183"
  },
  {
    "url": "assets/js/42.c5e4de34.js",
    "revision": "22d88edde95d40773a4b68bf00ae7c21"
  },
  {
    "url": "assets/js/43.ea39a837.js",
    "revision": "aa9887acfbbc53a15a31d872729fb5f5"
  },
  {
    "url": "assets/js/44.2b5e3cec.js",
    "revision": "c09ac685ab0a59ce1fdc6167f530c5df"
  },
  {
    "url": "assets/js/45.c677b10f.js",
    "revision": "216035cae4f76455b9547ebda1695995"
  },
  {
    "url": "assets/js/5.20997c32.js",
    "revision": "6872906de9386ed2b969ad94c9fdcf14"
  },
  {
    "url": "assets/js/6.fd9f1123.js",
    "revision": "0039ce75c62727f645463008b63411cd"
  },
  {
    "url": "assets/js/7.513d5a1c.js",
    "revision": "c9b3f464f085d18961429cf33bbd2179"
  },
  {
    "url": "assets/js/8.5d818b05.js",
    "revision": "95db1abf12edac981da12a1901e10ce2"
  },
  {
    "url": "assets/js/9.46e3952b.js",
    "revision": "9dc1932aaec4a295fe3df4bccd072836"
  },
  {
    "url": "assets/js/app.5a9c121c.js",
    "revision": "5a39506404cc294a2419a6a2cb2fc9f6"
  },
  {
    "url": "deploy/generator.html",
    "revision": "897c472db84d281f3ba5d11e87474c42"
  },
  {
    "url": "deploy/intro.html",
    "revision": "875206d15dd5bca120578d997fa64ec0"
  },
  {
    "url": "deploy/middleware.html",
    "revision": "65818e0135b8efa3ea1aaccfcd9b77fc"
  },
  {
    "url": "deploy/publisher.html",
    "revision": "4936145a9089fecffccee89ae1bfab69"
  },
  {
    "url": "deploy/resources.html",
    "revision": "c3b0c0c6e21dbe3cda076ea26b434e08"
  },
  {
    "url": "deploy/user.html",
    "revision": "83729024f895051c96956b83ec9fe781"
  },
  {
    "url": "dev/action.html",
    "revision": "dd28d9810c64449bcbfb12cbf8149d29"
  },
  {
    "url": "dev/component.html",
    "revision": "fef1e80146c5e914d83be491645ac6d4"
  },
  {
    "url": "dev/container.html",
    "revision": "fec17c5a231f86cb50ca75187b8772da"
  },
  {
    "url": "dev/materials.html",
    "revision": "2bce0f2427e494621d403f28c079da54"
  },
  {
    "url": "dev/plugin.html",
    "revision": "2976084681b1959012958136c423705d"
  },
  {
    "url": "events/async.html",
    "revision": "75192443c7c4391b0995aafebe8d1eba"
  },
  {
    "url": "events/component.html",
    "revision": "b4cab32029343368fc6c9f228ba97e41"
  },
  {
    "url": "events/global.html",
    "revision": "311d75ff28c7c265af0d3ccd38f25c75"
  },
  {
    "url": "events/intro.html",
    "revision": "26bed59ffa42e507f212cfb50dbb2941"
  },
  {
    "url": "events/page.html",
    "revision": "5847602a0d8f53b4d33f9405ce0cfcf4"
  },
  {
    "url": "events/plugin.html",
    "revision": "bd02ed5976054cc4a6160e9cadd28ccc"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "bf262fef54688259484c16ee0752c245"
  },
  {
    "url": "form/intro.html",
    "revision": "1bf598ba4e5fbc5351786221837dbb8b"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "95363e7a0ef102581ef03b05dd837eb1"
  },
  {
    "url": "form/registryField.html",
    "revision": "88066e495d9b230bcef353294d50c6c9"
  },
  {
    "url": "index.html",
    "revision": "3148b01cf0f167b94e22f4f0371c9d38"
  },
  {
    "url": "logo.png",
    "revision": "15c64ecf4681b23412a20c6985dca249"
  },
  {
    "url": "logo.svg",
    "revision": "cbb788f696bc4f7479d977fbe0395336"
  },
  {
    "url": "start/action.html",
    "revision": "464a0b2e298f7e5797814f945977c9ec"
  },
  {
    "url": "start/component.html",
    "revision": "7cc197b200b806842c5b807dd367a40b"
  },
  {
    "url": "start/container.html",
    "revision": "00d39970f2de64dcd0c7f9c36bf1173c"
  },
  {
    "url": "start/plugin.html",
    "revision": "93077495a23a91a790f7ec421d58a1b7"
  },
  {
    "url": "start/ready.html",
    "revision": "dae2a0391d8b68516c1c726459cdcd64"
  },
  {
    "url": "style/fixed.html",
    "revision": "e580bd4fd5e6ff3462f83e0201ac4c20"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "baf818aaeb4840e986e0b38f2092d072"
  },
  {
    "url": "style/styleInject.html",
    "revision": "8b41bddb16ed1eaf407bd7faabff45cb"
  },
  {
    "url": "welcome/intro.html",
    "revision": "94aff1976e708c29a9a94a357f64c762"
  },
  {
    "url": "welcome/packages.html",
    "revision": "68689a436bbbba75047a00a468f7c4dd"
  }
].concat(self.__precacheManifest || []);
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
