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
    "revision": "267fb3dfbcc05b3a628ad2daaea3aa48"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "f153b9f6af064c2ecd1169ea239a201b"
  },
  {
    "url": "advanced/meta.html",
    "revision": "4fed0f89a5faeffe490d9a645b391904"
  },
  {
    "url": "assets/css/0.styles.1a988d8a.css",
    "revision": "2c22e9c102b1794b895f6cb377be89ff"
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
    "url": "assets/js/11.eb1f94fa.js",
    "revision": "e59b215d211e95df0bdf962550ef78c9"
  },
  {
    "url": "assets/js/12.217c828e.js",
    "revision": "eeec67646bd34d072075680fb6ca3849"
  },
  {
    "url": "assets/js/13.a4c355fa.js",
    "revision": "0f07eb2c161682be24175f3d30cb72c9"
  },
  {
    "url": "assets/js/14.a274f8bf.js",
    "revision": "4cc4cd4af5f0fad87503e7b1fe20271f"
  },
  {
    "url": "assets/js/15.292a1afd.js",
    "revision": "8f7f2390cdaee640074de806a19cbc41"
  },
  {
    "url": "assets/js/16.7fb1345b.js",
    "revision": "f19dff52911ce47005520177503fbb7c"
  },
  {
    "url": "assets/js/17.216abf9c.js",
    "revision": "629d81db5a485fe22f02371745273ac5"
  },
  {
    "url": "assets/js/18.8e8956ec.js",
    "revision": "433de95ea91fd5474e93cdbbd1fcd149"
  },
  {
    "url": "assets/js/19.bd8c05b0.js",
    "revision": "a6b1153a5b360844a8f8f73f1d249963"
  },
  {
    "url": "assets/js/2.aa249559.js",
    "revision": "a5ddfe8c0510f7f3818dada0cdb176f5"
  },
  {
    "url": "assets/js/20.c16a8841.js",
    "revision": "57e5c7d4d6c4b562aa47b215af4e3e67"
  },
  {
    "url": "assets/js/21.8d3352ad.js",
    "revision": "50bc875112b6fc457322b2eb18cf759a"
  },
  {
    "url": "assets/js/22.b6f72cf9.js",
    "revision": "37c688396f435b2c8bd3eeb46cdfcaa3"
  },
  {
    "url": "assets/js/23.8c62b164.js",
    "revision": "8a3eac11ab5af84149a4286d15944a17"
  },
  {
    "url": "assets/js/24.fb9e448c.js",
    "revision": "acf17d3c7a1fe35d195870290e74788f"
  },
  {
    "url": "assets/js/25.93ea6254.js",
    "revision": "f108a6ba88a70229800c4ea4275318e1"
  },
  {
    "url": "assets/js/26.1c4b90e1.js",
    "revision": "f2b13a9c934583e17bcf46f47b23c234"
  },
  {
    "url": "assets/js/27.902aa5c6.js",
    "revision": "515bc9734fd4996d1f6413862d6b01b2"
  },
  {
    "url": "assets/js/28.3e53e134.js",
    "revision": "43ae87aabb0a8a2e480ac05941c43a36"
  },
  {
    "url": "assets/js/29.5a7cc374.js",
    "revision": "87b11936bf7291439a31dbd69578149e"
  },
  {
    "url": "assets/js/3.6a500168.js",
    "revision": "0710c3b3f6ea2fa386df0a748f753fcb"
  },
  {
    "url": "assets/js/30.c6b48d03.js",
    "revision": "632100de087b1ef019c6105d62ad893a"
  },
  {
    "url": "assets/js/31.c5c31c53.js",
    "revision": "b7b7d706d5fe67ffb1c79573ad36fa86"
  },
  {
    "url": "assets/js/32.1adccdd2.js",
    "revision": "f1e87af60593d36d0a7825500abad659"
  },
  {
    "url": "assets/js/33.88702faa.js",
    "revision": "a05bd2932c52dd5fce58c7c4b9bfa620"
  },
  {
    "url": "assets/js/4.64d0cea0.js",
    "revision": "4ae3c7deacfb008681d75379a6c5cc6c"
  },
  {
    "url": "assets/js/5.d7d065b9.js",
    "revision": "4040f791efc1a18eb5569ca7ee0606c5"
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
    "url": "assets/js/8.227b8e65.js",
    "revision": "9dbd5f3bd2080194ab863f53d862b654"
  },
  {
    "url": "assets/js/9.72b33c4f.js",
    "revision": "c34acfae7246c240d7b643a622ee315b"
  },
  {
    "url": "assets/js/app.37eea4e0.js",
    "revision": "d061c33dde2c1afec5848b7745012f5e"
  },
  {
    "url": "dev/action.html",
    "revision": "d190b2c674ecbfd675ea88f6ccf76c52"
  },
  {
    "url": "dev/component.html",
    "revision": "f0671b26dfe1d19e46d4d1022f6957f4"
  },
  {
    "url": "dev/container.html",
    "revision": "f38c732c1465342f3765cd6b34ffde48"
  },
  {
    "url": "dev/materials.html",
    "revision": "a3297eae9f5216070b5325f127b480cf"
  },
  {
    "url": "dev/plugin.html",
    "revision": "a8d960ac06716e10ed5a503c17ae8e26"
  },
  {
    "url": "events/async.html",
    "revision": "2c173d3374bbe111b678d1e1748e13d9"
  },
  {
    "url": "events/component.html",
    "revision": "d0187ed50128e84af83e0788fd5353d3"
  },
  {
    "url": "events/container.html",
    "revision": "be73fd42ed71c510e6dcc09bd5a111ef"
  },
  {
    "url": "events/intro.html",
    "revision": "a7addbbd3f858a7435f8928c914488dd"
  },
  {
    "url": "events/plugin.html",
    "revision": "1656f7c440e20ca24d6160c87e4fc96e"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "1aad28e4fc66ef95dd23d2e026955c30"
  },
  {
    "url": "form/intro.html",
    "revision": "889cdc2bacbf5415453b2209f0905a9b"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "40d23fa27924fa1b9169d15993c755fd"
  },
  {
    "url": "form/registryField.html",
    "revision": "df9d1ca19a4caeaa427ecba52f2685cc"
  },
  {
    "url": "index.html",
    "revision": "19ed47f49c635204229cda36a6cb7d8f"
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
    "revision": "f2ba742770ee996bf53b8e67199b5dcb"
  },
  {
    "url": "start/component.html",
    "revision": "49263533119e3347815f9ba2046cb6b9"
  },
  {
    "url": "start/container.html",
    "revision": "45fa414000e8dc541da281f5a0eadc97"
  },
  {
    "url": "start/plugin.html",
    "revision": "d546383bae3eac4e9ce85636a97e6451"
  },
  {
    "url": "start/ready.html",
    "revision": "c5b641212433f09fe9debe5ece6e2a46"
  },
  {
    "url": "style/fixed.html",
    "revision": "11172fee47f66f72b2a6040f7a81402c"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "cf6f3cb7747f3806dc45b17cb593903d"
  },
  {
    "url": "style/styleInject.html",
    "revision": "0c4e051bb5671f4b0201946baa88c80e"
  },
  {
    "url": "welcome/intro.html",
    "revision": "7f3df2d46615f0bc6d120afaa9a3e819"
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
