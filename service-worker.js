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
    "revision": "b8e051be14de51676559d2e7e8f93dfe"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "fd0b993adb8e33a88dbd004412eb7010"
  },
  {
    "url": "advanced/dsl.html",
    "revision": "15a7f4fbf8176172cd035656f2772a9a"
  },
  {
    "url": "advanced/hot-area-component.html",
    "revision": "d9eb97982593f8b20ce333bbe605c21a"
  },
  {
    "url": "advanced/meta.html",
    "revision": "31f4e25f3ea4f6d64de0e04229b8d2bd"
  },
  {
    "url": "advanced/routerController.html",
    "revision": "7b86fe43dcf4fa7452886abfa16ea6b6"
  },
  {
    "url": "assets/css/0.styles.20d903ed.css",
    "revision": "bbe5062bfc028a928aa8bac881b65f00"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9163b5f6.js",
    "revision": "2b5579dde57ff2096d78df89164a5fe1"
  },
  {
    "url": "assets/js/11.5950634f.js",
    "revision": "6053f9092d8cee87ba177c0fc768d61e"
  },
  {
    "url": "assets/js/12.a46f0e88.js",
    "revision": "f587503e3d4bf30bfb748d589272b5c4"
  },
  {
    "url": "assets/js/13.c92c8928.js",
    "revision": "124edbaae7e75d85f96e5ad5f8fa8618"
  },
  {
    "url": "assets/js/14.a5327570.js",
    "revision": "ca969ee32fe588894c30517d09078ab8"
  },
  {
    "url": "assets/js/15.b0845756.js",
    "revision": "59e3504972a855d039ef0f33b5cc09b3"
  },
  {
    "url": "assets/js/16.490d88e7.js",
    "revision": "3c495d3cb4959f15cee71d72f2887663"
  },
  {
    "url": "assets/js/17.41e7f18b.js",
    "revision": "e6f1750aa4d1bc118f5ef35c968a6250"
  },
  {
    "url": "assets/js/18.ea5b6792.js",
    "revision": "4d38e9bb9ee531f08318df3657257741"
  },
  {
    "url": "assets/js/19.30e9abe1.js",
    "revision": "20de1e174af20784207326b1b51e60e0"
  },
  {
    "url": "assets/js/2.aa249559.js",
    "revision": "a5ddfe8c0510f7f3818dada0cdb176f5"
  },
  {
    "url": "assets/js/20.78e0637c.js",
    "revision": "4a55eee2ae2dc958851b817fa317ac30"
  },
  {
    "url": "assets/js/21.16e5a80c.js",
    "revision": "8fd768468ccbffa02953fffa527c7dde"
  },
  {
    "url": "assets/js/22.2c5ef420.js",
    "revision": "72157f034ed58bc89e4159056644a8d0"
  },
  {
    "url": "assets/js/23.d6aa07e6.js",
    "revision": "0d64256119bfca69c2b73130d1ef3f11"
  },
  {
    "url": "assets/js/24.5ca0a26c.js",
    "revision": "d3f237977558d4534c22e0994f1db7a3"
  },
  {
    "url": "assets/js/25.9ce5eb7e.js",
    "revision": "b12a2405e7eb1118dff9956691855f94"
  },
  {
    "url": "assets/js/26.469de941.js",
    "revision": "e4e875fb93e53b28f667a986d125d7df"
  },
  {
    "url": "assets/js/27.b626096f.js",
    "revision": "ed96046612bbc9816d3a7e9bac95fcf4"
  },
  {
    "url": "assets/js/28.78c1fc9e.js",
    "revision": "ede848b1fa9ca7468fca591caa859685"
  },
  {
    "url": "assets/js/29.2855e0a6.js",
    "revision": "a9a76b9616df9a41a36474b0688210df"
  },
  {
    "url": "assets/js/3.1126513a.js",
    "revision": "998931ccb38f4beb77f788c99971dad8"
  },
  {
    "url": "assets/js/30.aaa0e151.js",
    "revision": "57865da5c5dd9e47ff1aa69f19951465"
  },
  {
    "url": "assets/js/31.87d02dea.js",
    "revision": "c76bc703b6eb6066d173423a03b657ae"
  },
  {
    "url": "assets/js/32.e63d8462.js",
    "revision": "0e29d29ace698863d8d70af2037338a9"
  },
  {
    "url": "assets/js/33.90102918.js",
    "revision": "0308bb1832cd520c4af6e3f79370a356"
  },
  {
    "url": "assets/js/34.1ba6ed95.js",
    "revision": "adfcbe1d90f6da2cf39df6607ec160dc"
  },
  {
    "url": "assets/js/35.fe8bd5b9.js",
    "revision": "996b5f384a1578581b8b32e314b07673"
  },
  {
    "url": "assets/js/36.ae3e7f5d.js",
    "revision": "2af747b1f98e7190a91f4db8f3e71663"
  },
  {
    "url": "assets/js/37.4ecb59ff.js",
    "revision": "7269524b82b5e85eef6c46f5f9826fdc"
  },
  {
    "url": "assets/js/38.2833b245.js",
    "revision": "60fa69c6d3c7b613f92c691ac2e2b82a"
  },
  {
    "url": "assets/js/39.9da55642.js",
    "revision": "ea3f31eadf5769e3b73e913526d816f9"
  },
  {
    "url": "assets/js/4.f41174ee.js",
    "revision": "19e89d3324b8bf2edcf92f98a0315fa4"
  },
  {
    "url": "assets/js/40.c2692374.js",
    "revision": "75814cd8c2400c3c445c6475eb13bf1b"
  },
  {
    "url": "assets/js/41.20c5bfc6.js",
    "revision": "906e44fbbd00b876caefe8c673defe41"
  },
  {
    "url": "assets/js/42.21fb2a17.js",
    "revision": "4b6601b6a9f90ff7d8bccd2e886528ad"
  },
  {
    "url": "assets/js/43.afad3bad.js",
    "revision": "79d36b318452e0a21e59020f562dcc6d"
  },
  {
    "url": "assets/js/5.3ec20586.js",
    "revision": "e636a0c4fc4ae7f0aadf08cd0e39ea71"
  },
  {
    "url": "assets/js/6.1b7fa69c.js",
    "revision": "69e9a65de68d616a7be186b11a74e45f"
  },
  {
    "url": "assets/js/7.945a89bd.js",
    "revision": "816911749d78082f1ae707fce2b6a9f9"
  },
  {
    "url": "assets/js/8.0bf63838.js",
    "revision": "df562c2ee6480e4d2ab5f81f7713bc33"
  },
  {
    "url": "assets/js/9.72b33c4f.js",
    "revision": "c34acfae7246c240d7b643a622ee315b"
  },
  {
    "url": "assets/js/app.1131fe8e.js",
    "revision": "3862c512d98e235b4ef8dbe352f9118f"
  },
  {
    "url": "deploy/generator.html",
    "revision": "3160f5088275ad3e0cf627a891118baf"
  },
  {
    "url": "deploy/intro.html",
    "revision": "e2787dbe222856cbaaf4e9b5aacefbaa"
  },
  {
    "url": "deploy/middleware.html",
    "revision": "4e9fb0251c737f9ff2e4d44a082203da"
  },
  {
    "url": "deploy/publisher.html",
    "revision": "5b1a72790ef5f3a801e64e5c95df9b76"
  },
  {
    "url": "deploy/resources.html",
    "revision": "730d0d7514452c42bc074663c7ca5816"
  },
  {
    "url": "deploy/user.html",
    "revision": "454949d2e902751f7eaab0edae97b4a3"
  },
  {
    "url": "dev/action.html",
    "revision": "44ec9f3820fb5d172c34be416d867238"
  },
  {
    "url": "dev/component.html",
    "revision": "b179f58de523a09fce7121a0e19ffe22"
  },
  {
    "url": "dev/container.html",
    "revision": "069aa5968719e35f23ed40a2d0d61c79"
  },
  {
    "url": "dev/materials.html",
    "revision": "61f12605a254e3e4ba49e0459063b0cf"
  },
  {
    "url": "dev/plugin.html",
    "revision": "6fd8b893d149a72c9015d5b55058283a"
  },
  {
    "url": "events/async.html",
    "revision": "7f05e590070c99495748c6d32e1d91c7"
  },
  {
    "url": "events/component.html",
    "revision": "8efade94c4fba008e64a40c5a4de1dd2"
  },
  {
    "url": "events/container.html",
    "revision": "dc51b8c739f733c2ce1a7a4500fc4806"
  },
  {
    "url": "events/intro.html",
    "revision": "b99d83fa5afec61f133a59ec5ffe54c6"
  },
  {
    "url": "events/plugin.html",
    "revision": "93a0df360b5a2bb3efb8519ccddbf3f2"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "0828f77de8314fa6a959f75ff7a41af4"
  },
  {
    "url": "form/intro.html",
    "revision": "9bd61e59725923e4bc23d178519e87df"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "a13afc99c225ee566df72d846946e61e"
  },
  {
    "url": "form/registryField.html",
    "revision": "51f11dc62faa1987f9387c8de48ad75f"
  },
  {
    "url": "index.html",
    "revision": "cf3f499d95391b045166987c3105c28b"
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
    "revision": "e9579bde1f5bdac8b83fdd922d2f789f"
  },
  {
    "url": "start/component.html",
    "revision": "debc73600934a6767d367ff1e9f5b515"
  },
  {
    "url": "start/container.html",
    "revision": "4ffa39412c07327e7e3ea7e7a9c1fa38"
  },
  {
    "url": "start/plugin.html",
    "revision": "dd2a87fb52eee2b56ea2965c6dab6da8"
  },
  {
    "url": "start/ready.html",
    "revision": "43ac58cc3e56fbd1508ab1cb4c948323"
  },
  {
    "url": "style/fixed.html",
    "revision": "d07c49a40d74462138b8eddc23077af5"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "09eb75b7ba4ef33f1189afedb19d0f83"
  },
  {
    "url": "style/styleInject.html",
    "revision": "116f9e1679fd0742a30baf0d00197298"
  },
  {
    "url": "welcome/intro.html",
    "revision": "99a34d18058335c0da2d382a5c843b0c"
  },
  {
    "url": "welcome/packages.html",
    "revision": "e8decc3d00b40527e1e4fd6418ee9284"
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
