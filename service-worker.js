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
    "revision": "a72ace4f2b2d2ee2e2be00147b62aa43"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "8d406a478f0f3b93ac9bfc387472cab3"
  },
  {
    "url": "advanced/dsl.html",
    "revision": "25e3c4bb16eebf3f1aac964ca31cd0ae"
  },
  {
    "url": "advanced/hotAreaComponent.html",
    "revision": "4af9e2703fcd1c940a97f0c24d047b03"
  },
  {
    "url": "advanced/meta.html",
    "revision": "d33210df482c5962c27b6b2abd24c8d2"
  },
  {
    "url": "advanced/routerController.html",
    "revision": "7dc61130ea6dd7e1513f03bfee1eebe7"
  },
  {
    "url": "assets/css/0.styles.b1054d33.css",
    "revision": "0c89464c6e6f00e0d034ad07646485a7"
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
    "url": "assets/img/10.bf0fa1ae.png",
    "revision": "bf0fa1aeb7db2d545d88d6a72a7a72e0"
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
    "url": "assets/img/7.4950dff1.png",
    "revision": "4950dff1fa3c47537930e703c1b7508d"
  },
  {
    "url": "assets/img/8.ebf6123b.png",
    "revision": "ebf6123bba469358ef975bc57d5a9535"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.a9f0b1cd.jpg",
    "revision": "a9f0b1cd08c195aad5dd88304302d2f5"
  },
  {
    "url": "assets/js/10.06499664.js",
    "revision": "bf5bb093bd27f849a31203d7e0bb654d"
  },
  {
    "url": "assets/js/11.70fdb188.js",
    "revision": "5f08e4a3bc44d51578762e292b84ab44"
  },
  {
    "url": "assets/js/12.bec2a22b.js",
    "revision": "39b131db93fa7ab0d2a1dbc4fcf98328"
  },
  {
    "url": "assets/js/13.6edc7ded.js",
    "revision": "7551e1a08219dba68332a35577c13b7e"
  },
  {
    "url": "assets/js/14.1a017c11.js",
    "revision": "2ac70dfca7d1a4230d9e94aa3588775e"
  },
  {
    "url": "assets/js/15.8572bf78.js",
    "revision": "0cdcf481c31624d93fae169c7924693d"
  },
  {
    "url": "assets/js/16.ad30a891.js",
    "revision": "68fbf3ecced68af6f7d046ddcae89cea"
  },
  {
    "url": "assets/js/17.86a4fdd4.js",
    "revision": "20c47da94a3e2d0ef92aa09b8d72a95e"
  },
  {
    "url": "assets/js/18.debd0185.js",
    "revision": "d784873fa3a2219df133c6c296619c58"
  },
  {
    "url": "assets/js/19.2671f870.js",
    "revision": "86fa6f95bf23d0b1d0ad25f0bb28a991"
  },
  {
    "url": "assets/js/2.a395c05b.js",
    "revision": "bc40e4969445432c76b343f7518dca4c"
  },
  {
    "url": "assets/js/20.1cb519dc.js",
    "revision": "655b7f016c2badf4b7dba4b76724d076"
  },
  {
    "url": "assets/js/21.510fb5ce.js",
    "revision": "b509eebfac2d88821e89db3694f7accd"
  },
  {
    "url": "assets/js/22.cb3dc564.js",
    "revision": "da79fc0a8d9f3787ba3296fa8150920f"
  },
  {
    "url": "assets/js/23.2b029d5e.js",
    "revision": "4aaf17c574acfd52bfab333f0b5314ce"
  },
  {
    "url": "assets/js/24.3a7eb54d.js",
    "revision": "f8411795aec99e385fdbb55e35039c5f"
  },
  {
    "url": "assets/js/25.27bd0ee6.js",
    "revision": "60c3402efa09d862f092407ad8457878"
  },
  {
    "url": "assets/js/26.a609c0bb.js",
    "revision": "1b4e20d20fbc0e05ccea8aed855cce5f"
  },
  {
    "url": "assets/js/27.b1e541c8.js",
    "revision": "7f9a00faeec4912a7c99cc2e4f6a0790"
  },
  {
    "url": "assets/js/28.dce6e6a2.js",
    "revision": "b0244aebe1aa8d6c97f7ec685e2b8306"
  },
  {
    "url": "assets/js/29.8f8789d4.js",
    "revision": "c93bfa102d4e163848e4f05748146195"
  },
  {
    "url": "assets/js/3.d561ac43.js",
    "revision": "e96dc62e3ac5fed30c72cf7f170f8f2c"
  },
  {
    "url": "assets/js/30.d3f8aabd.js",
    "revision": "e724a5bfb7cc293adc62d207c9bc4ab1"
  },
  {
    "url": "assets/js/31.8337fe3b.js",
    "revision": "baf22323df671f13f0bddf8e43e17bc1"
  },
  {
    "url": "assets/js/32.586255ac.js",
    "revision": "44bff6e7e716be6f2e49b7d7b750725e"
  },
  {
    "url": "assets/js/33.509b1e28.js",
    "revision": "a03c40aa85538c27481e4dc2faf30500"
  },
  {
    "url": "assets/js/34.6297d952.js",
    "revision": "4c45d0d00155065a14711bc5c46dd559"
  },
  {
    "url": "assets/js/35.9e1ead43.js",
    "revision": "ed6f2ca55cb7ccbaf4659dd3df7a0d65"
  },
  {
    "url": "assets/js/36.66cf4705.js",
    "revision": "51e2f8e2f2148d8359163d7268aef44e"
  },
  {
    "url": "assets/js/37.937d334e.js",
    "revision": "9f721dfc7fba722c31a6bef935eb7411"
  },
  {
    "url": "assets/js/38.d2448a5b.js",
    "revision": "1ebbd6618425ea01370ec52f8b2dd9e4"
  },
  {
    "url": "assets/js/39.aa87a4cc.js",
    "revision": "6443e37022067b6c58e194025b74660f"
  },
  {
    "url": "assets/js/4.fd1827f3.js",
    "revision": "093c31648665ba1fbc8fdcd5216de155"
  },
  {
    "url": "assets/js/40.2cc4cec2.js",
    "revision": "a88ab21deff0e8cc4b595f95f894844e"
  },
  {
    "url": "assets/js/41.57f48043.js",
    "revision": "4bd2036b58022d53fdd15762a8d332ca"
  },
  {
    "url": "assets/js/42.ee5ea3d6.js",
    "revision": "0871e46aac6ad912a19d6a8bd2694620"
  },
  {
    "url": "assets/js/43.806aed25.js",
    "revision": "4d2139309869a7b9ffe9ed9a6a2b2d1f"
  },
  {
    "url": "assets/js/44.42b934b4.js",
    "revision": "bb90bb6c7091ecd96b0a7a19e08dc992"
  },
  {
    "url": "assets/js/45.987946eb.js",
    "revision": "ec45d95255a1b68440dbc05bdf15c9e5"
  },
  {
    "url": "assets/js/46.3e9f08a0.js",
    "revision": "1d8dc700f2f2b2800dce3afc82cfe36a"
  },
  {
    "url": "assets/js/47.50f251b7.js",
    "revision": "19d22f876a6848ef6a4f19c0c35e3e28"
  },
  {
    "url": "assets/js/48.7dbbe1dd.js",
    "revision": "327ec36d41cec910ece2341c422a432c"
  },
  {
    "url": "assets/js/5.63eafc49.js",
    "revision": "128b5cddbfee6a6049bd5bdc61625739"
  },
  {
    "url": "assets/js/6.e0ea0fe4.js",
    "revision": "38e416ddfcdcc5ac25b25663824f6c8a"
  },
  {
    "url": "assets/js/7.aeb79af4.js",
    "revision": "dda03d0b09b7bbbb0fe8caf03dee409a"
  },
  {
    "url": "assets/js/8.c75f3ae8.js",
    "revision": "3b447a8c1c61a42688df944856d289a1"
  },
  {
    "url": "assets/js/9.524773a8.js",
    "revision": "369d1549fd5cca61f51ffe4d310b8094"
  },
  {
    "url": "assets/js/app.8e4de98f.js",
    "revision": "7da1eecaec932b43e5f74dee74a3ccde"
  },
  {
    "url": "cli/commands.html",
    "revision": "2e11639241e8710926ca4806b88e2fc6"
  },
  {
    "url": "cli/config.html",
    "revision": "f46d3187cb9b236207a5da3e6cc79082"
  },
  {
    "url": "deploy/generator.html",
    "revision": "aec9fa05622ea8900a289bbb9a5c43b7"
  },
  {
    "url": "deploy/intro.html",
    "revision": "46892ed939101121e4210210dec418a6"
  },
  {
    "url": "deploy/middleware.html",
    "revision": "e1da48b4dbd6c484c212452912298c98"
  },
  {
    "url": "deploy/publisher.html",
    "revision": "e6f9ffb152eaf843f7bd750e23f9f8be"
  },
  {
    "url": "deploy/resources.html",
    "revision": "0cee1094f6efa31fee8a904f293f3470"
  },
  {
    "url": "deploy/user.html",
    "revision": "2c4a718bab997d926f359a5b80fc08ed"
  },
  {
    "url": "dev/action.html",
    "revision": "00d48c6a0360c81ab0c86bf8f3379203"
  },
  {
    "url": "dev/component.html",
    "revision": "a0e5481046f981d04d21f6d837497420"
  },
  {
    "url": "dev/container.html",
    "revision": "55b3521d89e31d4e7e3170c5cf1b6c88"
  },
  {
    "url": "dev/materials.html",
    "revision": "eada79a692132b136073db08384c4fe4"
  },
  {
    "url": "dev/plugin.html",
    "revision": "9a53739bf7dd2b6456a5d59ce28ea491"
  },
  {
    "url": "events/async.html",
    "revision": "07cd0c0d01c920c42816c6ad1b75aaa2"
  },
  {
    "url": "events/component.html",
    "revision": "4ecd2ef35898c86882dbd21cc7393969"
  },
  {
    "url": "events/global.html",
    "revision": "95bce68f37e579c7c55b6e7ee229bea5"
  },
  {
    "url": "events/intro.html",
    "revision": "d10d9d3138a4a0b4b4a410ab6b2bd438"
  },
  {
    "url": "events/page.html",
    "revision": "fd56aa9f58e81693039cc99d55dcc653"
  },
  {
    "url": "events/plugin.html",
    "revision": "ed1069c1358dbf6336acc167502cf19e"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "216dadb8c5eefd81458afcbfaa58bc9e"
  },
  {
    "url": "form/intro.html",
    "revision": "1e6d5e4fb63a373f92950659bf6f6672"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "539814410a8fe6d2438dfe494a40f715"
  },
  {
    "url": "form/registryField.html",
    "revision": "19831027dc2f092b471b79bdd60bcb68"
  },
  {
    "url": "index.html",
    "revision": "4f552fd0636813fb4eef2e30b83dc061"
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
    "revision": "20c1a9d4017c96805e9666a59df2e78f"
  },
  {
    "url": "start/component.html",
    "revision": "abf4f16fafd5f5621b3b984432ab437a"
  },
  {
    "url": "start/container.html",
    "revision": "a51dbbd9764db5f32e102024dd7ea428"
  },
  {
    "url": "start/plugin.html",
    "revision": "d5646b80e481bf3be961a5de979801ef"
  },
  {
    "url": "start/ready.html",
    "revision": "4a2c15c263e91c4c594d1d77221af011"
  },
  {
    "url": "style/fixed.html",
    "revision": "ee62e06349f7f6fcb36bb1743fcf040e"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "930f044cc639b25213c5b2d096d5569d"
  },
  {
    "url": "style/styleInject.html",
    "revision": "3108afb5279f87b2634dac0b48a33a57"
  },
  {
    "url": "welcome/intro.html",
    "revision": "8911272f7a8d6c4457d807b433f1733a"
  },
  {
    "url": "welcome/packages.html",
    "revision": "8119916b9b39e30751a7f54755c8e454"
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
