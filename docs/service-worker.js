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
    "revision": "08ae98334f2a58df394f017049596792"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "356d820bc5cdac592a7e4075183aaaf4"
  },
  {
    "url": "advanced/meta.html",
    "revision": "7320b859f870f537dfd7ea90ce9e8184"
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
    "url": "assets/js/11.b00da014.js",
    "revision": "be56694ff650e99833b4d2248307d88c"
  },
  {
    "url": "assets/js/12.217c828e.js",
    "revision": "eeec67646bd34d072075680fb6ca3849"
  },
  {
    "url": "assets/js/13.22611366.js",
    "revision": "52bbd9fc1265a0fb216272ba6cdb6caf"
  },
  {
    "url": "assets/js/14.17d6008b.js",
    "revision": "1cbfceca48fcd9427f92e0f740e03c4e"
  },
  {
    "url": "assets/js/15.d5316062.js",
    "revision": "fdefab62504036c799b68fa5596b2c42"
  },
  {
    "url": "assets/js/16.9043a314.js",
    "revision": "9d7fa0704e48c1b8fd4391e7451171e4"
  },
  {
    "url": "assets/js/17.23bd2b90.js",
    "revision": "f4b72944f009c2cf6e8f35419070c42b"
  },
  {
    "url": "assets/js/18.9a714e1b.js",
    "revision": "2bdd4f2a6a082317fe311cd7c1c88318"
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
    "url": "assets/js/20.5483c588.js",
    "revision": "cc8936fb5d37fc260050fd0ba369991c"
  },
  {
    "url": "assets/js/21.646dc502.js",
    "revision": "baf762146b5dc8a68ea787ca8fb1b35a"
  },
  {
    "url": "assets/js/22.d7623b0f.js",
    "revision": "39e03b90e5ece938cc3fea9e304a8c27"
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
    "url": "assets/js/25.d3d27aa8.js",
    "revision": "4b54edb40096df077d286c43e5b3e0bd"
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
    "url": "assets/js/30.7e8a4f8b.js",
    "revision": "7578b8caa43aadcfe0f8b7cb7936a1b7"
  },
  {
    "url": "assets/js/31.c5c31c53.js",
    "revision": "b7b7d706d5fe67ffb1c79573ad36fa86"
  },
  {
    "url": "assets/js/32.8fae34f4.js",
    "revision": "9aa9d2b2b6e6f73dbaf75aa6a38e468b"
  },
  {
    "url": "assets/js/33.88702faa.js",
    "revision": "a05bd2932c52dd5fce58c7c4b9bfa620"
  },
  {
    "url": "assets/js/4.53aff5ad.js",
    "revision": "00360b896e212219d9d89a9141b3cefe"
  },
  {
    "url": "assets/js/5.d7d065b9.js",
    "revision": "4040f791efc1a18eb5569ca7ee0606c5"
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
    "url": "assets/js/8.778f29e7.js",
    "revision": "b618d0ac53fbfdf93450cc2b7afbdc1d"
  },
  {
    "url": "assets/js/9.72b33c4f.js",
    "revision": "c34acfae7246c240d7b643a622ee315b"
  },
  {
    "url": "assets/js/app.3d2f0609.js",
    "revision": "c98b0b614dc3437c48b943e58bc448ce"
  },
  {
    "url": "dev/action.html",
    "revision": "c423d7aca8f75ca2d1f17bc01a74cb38"
  },
  {
    "url": "dev/component.html",
    "revision": "9b93a46a9cb7ff64992c1b104f11f114"
  },
  {
    "url": "dev/container.html",
    "revision": "19b136e299c70d5d8040eee14a3e61a7"
  },
  {
    "url": "dev/materials.html",
    "revision": "dfbfe42159facd4b7f9ab544be97c7dd"
  },
  {
    "url": "dev/plugin.html",
    "revision": "53791c81a68948d85bd18591c76dcb10"
  },
  {
    "url": "events/async.html",
    "revision": "9f1271527207670a2cd5163d4749a875"
  },
  {
    "url": "events/component.html",
    "revision": "08a2d14f9a291302847e0aa12bfc99d5"
  },
  {
    "url": "events/container.html",
    "revision": "b91fec7b44e8c2d34cbcedff6201609b"
  },
  {
    "url": "events/intro.html",
    "revision": "b631c135aef513f41f0f3eb923652f3d"
  },
  {
    "url": "events/plugin.html",
    "revision": "22f303fccdbdf5547c5f0ff47d8d548e"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "6acaccb028b29083e236d38fbe361188"
  },
  {
    "url": "form/intro.html",
    "revision": "cf7ad5b6624a08b055ca4d9f3b5721dd"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "c53cd1c21df7c190ef2ed679df0a83ed"
  },
  {
    "url": "form/registryField.html",
    "revision": "6c667026b543fef782e913d79cf9f929"
  },
  {
    "url": "index.html",
    "revision": "ca4a9cb34be85ffde7d941042555c536"
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
    "revision": "2fd44cfedf31478d8f33ebfb9336df7c"
  },
  {
    "url": "start/component.html",
    "revision": "01e3a5505acc9bb56ae3bfcb5eb2ba6d"
  },
  {
    "url": "start/container.html",
    "revision": "82ad17f91ac678659fc50e52bea86090"
  },
  {
    "url": "start/plugin.html",
    "revision": "e4b372bf5edfa4e989e31682877ad442"
  },
  {
    "url": "start/ready.html",
    "revision": "75c4813f2cc5e82daaef36ccdaf27fe6"
  },
  {
    "url": "style/fixed.html",
    "revision": "307ca984401772e4f886a9c6a4b909af"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "0333af4118402c1224a10ff4ad381b11"
  },
  {
    "url": "style/styleInject.html",
    "revision": "56d7a1bf1ae5d9d87012d0d59259dfee"
  },
  {
    "url": "welcome/intro.html",
    "revision": "34a6194b7742de98b8166c2e6f65e865"
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
