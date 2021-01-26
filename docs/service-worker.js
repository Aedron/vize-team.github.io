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
    "revision": "ed9852a54595e363893463f91268ad86"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "08864c54851d20c077965a7e2809958d"
  },
  {
    "url": "advanced/generator.html",
    "revision": "87aa05d00b6fddc89efb61d8f0415771"
  },
  {
    "url": "advanced/hot-area-component.html",
    "revision": "0171eb62e4bd7c4439630aa3f080e3df"
  },
  {
    "url": "advanced/meta.html",
    "revision": "788edf0eb66ded1daec452460fda5487"
  },
  {
    "url": "advanced/routerController.html",
    "revision": "f5557062c149dfa3f1e07dc669c8290b"
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
    "url": "assets/js/11.eb1f94fa.js",
    "revision": "e59b215d211e95df0bdf962550ef78c9"
  },
  {
    "url": "assets/js/12.d02afaad.js",
    "revision": "f5c7d75455a80220f8131aa498fd940b"
  },
  {
    "url": "assets/js/13.139b1c50.js",
    "revision": "2bb7e1ff0f92c2c83d25b491b3201573"
  },
  {
    "url": "assets/js/14.7fc3417b.js",
    "revision": "d082bdf2ca01bca6c265d78f636dc163"
  },
  {
    "url": "assets/js/15.0ea21b96.js",
    "revision": "89004e43ddf6e677aa33a3f5db599ac6"
  },
  {
    "url": "assets/js/16.09b9b08f.js",
    "revision": "9c12f9e34348e78d56701a5e910e2c8e"
  },
  {
    "url": "assets/js/17.ce2ff2a6.js",
    "revision": "3e4a62031297aea13aa452c0e28c4a68"
  },
  {
    "url": "assets/js/18.f44b5ee0.js",
    "revision": "cdb1db32b19e418c4fec105fb129297d"
  },
  {
    "url": "assets/js/19.0bc07f79.js",
    "revision": "a66b09f2b39968a7a9a164c230c8aa0b"
  },
  {
    "url": "assets/js/2.aa249559.js",
    "revision": "a5ddfe8c0510f7f3818dada0cdb176f5"
  },
  {
    "url": "assets/js/20.ac38395a.js",
    "revision": "d344d4dede2d5e568f6881f7b4057911"
  },
  {
    "url": "assets/js/21.47b9961f.js",
    "revision": "6e32716fd94a4c35f84111b9f31c3b5c"
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
    "url": "assets/js/26.38d281a1.js",
    "revision": "d634631d273ddf54cfbfb5eea2c79b68"
  },
  {
    "url": "assets/js/27.48295d64.js",
    "revision": "965055f4d7946e086e9e823eb51be63d"
  },
  {
    "url": "assets/js/28.85590fb4.js",
    "revision": "cc15bfd3af49bbda08924e2df913be85"
  },
  {
    "url": "assets/js/29.0e97a6a5.js",
    "revision": "d12e06aba415c2874fad711cb1de5e99"
  },
  {
    "url": "assets/js/3.d22fa736.js",
    "revision": "9c23a78674bae0cbfc1dab441f5a29cc"
  },
  {
    "url": "assets/js/30.2614e3e3.js",
    "revision": "95656045bc4bd99235531681ff81932a"
  },
  {
    "url": "assets/js/31.4c19ab3d.js",
    "revision": "7bd2143ca0181154a5e2f7d63c805c8e"
  },
  {
    "url": "assets/js/32.dff3e882.js",
    "revision": "0379ae63db4d37d94df2f78efd2c4cc6"
  },
  {
    "url": "assets/js/33.c83d6dde.js",
    "revision": "c6f13a78585a625d485651a067d2b9b7"
  },
  {
    "url": "assets/js/34.273ee0b6.js",
    "revision": "1ce457886230e9d20c3cdc471a37275e"
  },
  {
    "url": "assets/js/35.b02e805a.js",
    "revision": "1a8371a3924957c804ebae5a6e767926"
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
    "url": "assets/js/app.270e3f2b.js",
    "revision": "b1dc97942810b66ee5982e683477a53e"
  },
  {
    "url": "dev/action.html",
    "revision": "a7337bbe8eb1feaa354ea7aea4ddd75e"
  },
  {
    "url": "dev/component.html",
    "revision": "30f94b8aaaad24417897071681860137"
  },
  {
    "url": "dev/container.html",
    "revision": "7917aba78650505112503578d4a424dd"
  },
  {
    "url": "dev/materials.html",
    "revision": "80833e42bcb36e02dd7d5cd965a051d7"
  },
  {
    "url": "dev/plugin.html",
    "revision": "3923353e3ce5f8451669cb3e04a3872b"
  },
  {
    "url": "events/async.html",
    "revision": "957e54204371c997c682623b549f3b55"
  },
  {
    "url": "events/component.html",
    "revision": "9eaf1858a9d5a70c96b2ea6c5885e7dc"
  },
  {
    "url": "events/container.html",
    "revision": "bfebf098aa90d743dd6cc46a1ebea675"
  },
  {
    "url": "events/intro.html",
    "revision": "bfdbc34ecbd4d92ade8508dfea58bd88"
  },
  {
    "url": "events/plugin.html",
    "revision": "af7979a651db8cbcff36f55fc69daf6f"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "1e1d0a044362e8fc115c8dea098722f3"
  },
  {
    "url": "form/intro.html",
    "revision": "f785213bd6822a4bc07750ecd4ba223a"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "1746228cdaf6f3b26a1eda79a3347c99"
  },
  {
    "url": "form/registryField.html",
    "revision": "82b0ef69ea3fdf3326a17ea4665d5993"
  },
  {
    "url": "index.html",
    "revision": "abb020d49781201272b977502446c336"
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
    "revision": "69313617216f1babb2c73befaaf5b784"
  },
  {
    "url": "start/component.html",
    "revision": "937089889baae116c25217db1ef28239"
  },
  {
    "url": "start/container.html",
    "revision": "7fcbd5ebfe7a2f12501c3078b9cc1d14"
  },
  {
    "url": "start/plugin.html",
    "revision": "03a685373c14f275068c7c4ff0f64718"
  },
  {
    "url": "start/ready.html",
    "revision": "d7fe9f970a218b88e16597ced3e2d726"
  },
  {
    "url": "style/fixed.html",
    "revision": "1b6709fa9775936abaf28b8096ebf267"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "4d60bc02b83faf3e0a8ccb747699ddf1"
  },
  {
    "url": "style/styleInject.html",
    "revision": "1a34d04f26499375b45f6bca82f56921"
  },
  {
    "url": "welcome/intro.html",
    "revision": "4fa4dacf0b95df552b9200a1ee7e6b7b"
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
