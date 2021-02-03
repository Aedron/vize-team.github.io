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
    "revision": "3cc33172e1f887bd1a88c966f8a2f0dc"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "b3c4cef2cd2c70941d10ad44e1fa273b"
  },
  {
    "url": "advanced/generator.html",
    "revision": "ad062d5af01cae085b553b11f25096bb"
  },
  {
    "url": "advanced/hot-area-component.html",
    "revision": "704571ab3a6893019edbabedd48ecec3"
  },
  {
    "url": "advanced/meta.html",
    "revision": "07d68c8087104259059984dfc640fd8f"
  },
  {
    "url": "advanced/routerController.html",
    "revision": "eaaf6c2d9c900e95ba1a6a95127785d7"
  },
  {
    "url": "assets/css/0.styles.fc0ed463.css",
    "revision": "f0540fa6e5da4eee27bbd6c5502aa9e4"
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
    "url": "assets/js/10.d664ac42.js",
    "revision": "cc5633316940bccc0fb5e5323b9b2688"
  },
  {
    "url": "assets/js/11.64132e5b.js",
    "revision": "913d2352194cd60000bf722b8d485045"
  },
  {
    "url": "assets/js/12.ae549fd2.js",
    "revision": "45a9e61094a33a674903f57c099d2a06"
  },
  {
    "url": "assets/js/13.30fcbd0b.js",
    "revision": "1753b28ff89ef8f3f00808118a8a7fc3"
  },
  {
    "url": "assets/js/14.022b482f.js",
    "revision": "c100618c23c24a44fff03085b27115c4"
  },
  {
    "url": "assets/js/15.625999cc.js",
    "revision": "a2165134396b6471bb82cb647b820f61"
  },
  {
    "url": "assets/js/16.1237be48.js",
    "revision": "22b6819b21b29189e42710c1dad7d375"
  },
  {
    "url": "assets/js/17.f99bbc14.js",
    "revision": "f9ec1dfe633c1dcc5f456036f7b5e72c"
  },
  {
    "url": "assets/js/18.5bdb60d9.js",
    "revision": "ca7d8e9cf6db4050aed8f39633a39fba"
  },
  {
    "url": "assets/js/19.61dbf18d.js",
    "revision": "0d858313fc02bb77c2c21a5c1efae3ef"
  },
  {
    "url": "assets/js/2.aa249559.js",
    "revision": "a5ddfe8c0510f7f3818dada0cdb176f5"
  },
  {
    "url": "assets/js/20.1268f9a5.js",
    "revision": "4140a1e51c254337d7b35cffff07be41"
  },
  {
    "url": "assets/js/21.da490f10.js",
    "revision": "6a3ccf28925fbc148df53a416de1e7cf"
  },
  {
    "url": "assets/js/22.40beb760.js",
    "revision": "9dfc431084e5efc635ccc3fb27e9ffec"
  },
  {
    "url": "assets/js/23.432f362a.js",
    "revision": "0f0e8c0e716f4dfdca3093062c8651a2"
  },
  {
    "url": "assets/js/24.bbc9950b.js",
    "revision": "4e5dd51f464a8bd8b28ac79f27c653ef"
  },
  {
    "url": "assets/js/25.f7a51438.js",
    "revision": "2d8284c5bc99559e2be3db44cf684335"
  },
  {
    "url": "assets/js/26.9a60b496.js",
    "revision": "97bc3d10de13b4faeb14361c082b3acf"
  },
  {
    "url": "assets/js/27.675404a9.js",
    "revision": "8446da02c262f4409f52f4483559e046"
  },
  {
    "url": "assets/js/28.85590fb4.js",
    "revision": "cc15bfd3af49bbda08924e2df913be85"
  },
  {
    "url": "assets/js/29.6edb2587.js",
    "revision": "47a3dc9dd05da5c11945406dbe795ddc"
  },
  {
    "url": "assets/js/3.5194f054.js",
    "revision": "e9c794e57075fa0d669c76e05f697b0a"
  },
  {
    "url": "assets/js/30.1f949e41.js",
    "revision": "7449c54c6523f80f9a3c865c6c2afbbf"
  },
  {
    "url": "assets/js/31.137ab9b4.js",
    "revision": "3274b9dd74799b928f17c696cbd56344"
  },
  {
    "url": "assets/js/32.8ab34426.js",
    "revision": "6c3d5a304cca0f330d22d78c86b52152"
  },
  {
    "url": "assets/js/33.40ce9d76.js",
    "revision": "2479a6025f7a5b39cfb32e81db950c74"
  },
  {
    "url": "assets/js/34.fab13fcd.js",
    "revision": "0f060986baad854fb6b8ecd4678c2a50"
  },
  {
    "url": "assets/js/35.2006f65d.js",
    "revision": "250af23d440a9ba0c3179306ee5a52a6"
  },
  {
    "url": "assets/js/36.f99f1828.js",
    "revision": "a4abd11cf480571463552752972c2d07"
  },
  {
    "url": "assets/js/4.e14576b5.js",
    "revision": "124fb371d078b47ac66bd22a2002135c"
  },
  {
    "url": "assets/js/5.1a8bc218.js",
    "revision": "5c8f0fb0d4482e8abaacf0c04ab1f22b"
  },
  {
    "url": "assets/js/6.fc4101fa.js",
    "revision": "565ab201dcd9ba6fd3eb4630ecdb8ac0"
  },
  {
    "url": "assets/js/7.c4d1da18.js",
    "revision": "f897a445ea484b3698c6353828bffe56"
  },
  {
    "url": "assets/js/8.adaa049b.js",
    "revision": "0b40b8d66128373d4cb9b4c9b4e32437"
  },
  {
    "url": "assets/js/9.72b33c4f.js",
    "revision": "c34acfae7246c240d7b643a622ee315b"
  },
  {
    "url": "assets/js/app.65988e5f.js",
    "revision": "833132259fc61a1be3aa85cacd47adbb"
  },
  {
    "url": "dev/action.html",
    "revision": "5a11e3b1dfcbe0a10c497929fc05303a"
  },
  {
    "url": "dev/component.html",
    "revision": "4f66d84350ac7b6f0894e98e83993828"
  },
  {
    "url": "dev/container.html",
    "revision": "66badf0f0325ddb7f2244f72da2f0448"
  },
  {
    "url": "dev/materials.html",
    "revision": "9724c4d5ddf0e3eb708668abf4945c33"
  },
  {
    "url": "dev/plugin.html",
    "revision": "8bba96aa5f983204b4714679ce38651b"
  },
  {
    "url": "events/async.html",
    "revision": "aadb195f1db65c0eec50254be7e620ac"
  },
  {
    "url": "events/component.html",
    "revision": "e973934da5d2d1014989c9f92e27c257"
  },
  {
    "url": "events/container.html",
    "revision": "996c0e2ac98d3ac3940c722eee5b41d5"
  },
  {
    "url": "events/intro.html",
    "revision": "e7f99688fa56ea7172db7dd3ba9387d6"
  },
  {
    "url": "events/plugin.html",
    "revision": "71a9f39e3bcdd9172187f6c7b16f4410"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "e787b03716aae5f874c2f46cf5661d5d"
  },
  {
    "url": "form/intro.html",
    "revision": "4ca368332026b8e3f7a24371e66ef988"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "4b195141fc11eb898a09a30398f9a735"
  },
  {
    "url": "form/registryField.html",
    "revision": "862b96b6819506dff6041089556994cf"
  },
  {
    "url": "index.html",
    "revision": "027d3bfb2bd347ff0fe25bb5a76b0cad"
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
    "revision": "5b77e1cfb949dbf1ee6305516e850dac"
  },
  {
    "url": "start/component.html",
    "revision": "18cd20077e859dd6585ea6cb732829eb"
  },
  {
    "url": "start/container.html",
    "revision": "5c35cb501e3e56ab627a31a8c532aa23"
  },
  {
    "url": "start/plugin.html",
    "revision": "49904939e8eb544e48ca2ea34d195803"
  },
  {
    "url": "start/ready.html",
    "revision": "8570864c9c9e028c94095ba8b27457e0"
  },
  {
    "url": "style/fixed.html",
    "revision": "c6fb15ee2333d28c0a994d8d9faad88a"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "b9dfe0568c31eaebfc08795d7b492ff3"
  },
  {
    "url": "style/styleInject.html",
    "revision": "2e8d6cee915a3dc7f2a82d87df914e6b"
  },
  {
    "url": "welcome/intro.html",
    "revision": "886d89d3cc04dd68e6a28fb52ca0274e"
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
