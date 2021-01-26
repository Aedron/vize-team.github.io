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
    "revision": "092392ac5f70bd72dfd4d8ea38860693"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "3021b859954a7681e7c6c6b3360f0454"
  },
  {
    "url": "advanced/generator.html",
    "revision": "f1f6b2fcf961f9a2a3f51d322b1c7b14"
  },
  {
    "url": "advanced/hot-area-component.html",
    "revision": "85a76e6265e1cc4ee0fcffa951e36ed4"
  },
  {
    "url": "advanced/meta.html",
    "revision": "ca1f2ccd10724fd2bc0db32e8b8d2176"
  },
  {
    "url": "advanced/routerController.html",
    "revision": "da0d7e9fd6b490f232e39cb1c6a1f470"
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
    "url": "assets/js/10.7a717ad7.js",
    "revision": "2018e32cbc3b6f5a31079204e3db6204"
  },
  {
    "url": "assets/js/11.b00da014.js",
    "revision": "be56694ff650e99833b4d2248307d88c"
  },
  {
    "url": "assets/js/12.8ba57e9a.js",
    "revision": "65d4459eb73b2202551a06be32d0920a"
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
    "url": "assets/js/15.03565831.js",
    "revision": "5d125bca4004e77d882461477041dd26"
  },
  {
    "url": "assets/js/16.0ac61a9c.js",
    "revision": "7928da0e0fd1a67fb8eef5a398bcb288"
  },
  {
    "url": "assets/js/17.aa91f0bf.js",
    "revision": "60165741901001e27be487bb9065dcea"
  },
  {
    "url": "assets/js/18.50e7b056.js",
    "revision": "cdcc62c9fa76bffe43631f4ca758dbfc"
  },
  {
    "url": "assets/js/19.4212e003.js",
    "revision": "593a361cfb2b7eff162f18a50faf53f4"
  },
  {
    "url": "assets/js/2.aa249559.js",
    "revision": "a5ddfe8c0510f7f3818dada0cdb176f5"
  },
  {
    "url": "assets/js/20.a5ed4718.js",
    "revision": "5870d930a0cb44ebaba804b6ad45e1f1"
  },
  {
    "url": "assets/js/21.ac2eb1cc.js",
    "revision": "ce9a5a7752b96adf938b645e4ff94eae"
  },
  {
    "url": "assets/js/22.524804b7.js",
    "revision": "1d5dc953001607fe351f3404b7d340d5"
  },
  {
    "url": "assets/js/23.9de31f67.js",
    "revision": "2b0d5eff70b5108210e46743a877b5d7"
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
    "url": "assets/js/26.9dd14035.js",
    "revision": "8f6c78a69d3b3186b1e25f33f53e0e89"
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
    "url": "assets/js/29.5d36bb7c.js",
    "revision": "d085859e47904cb710dcd929049d46dd"
  },
  {
    "url": "assets/js/3.52538167.js",
    "revision": "bd92a2fe47be7a70764d0ff77e7fce45"
  },
  {
    "url": "assets/js/30.1f949e41.js",
    "revision": "7449c54c6523f80f9a3c865c6c2afbbf"
  },
  {
    "url": "assets/js/31.b43fb080.js",
    "revision": "b23d64be7ee1990070d403c6a160b0da"
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
    "url": "assets/js/34.0081cc0e.js",
    "revision": "60cf2c4ab55712feb6d7081f0f605fc0"
  },
  {
    "url": "assets/js/35.6f77eecd.js",
    "revision": "fbe8ee049d09db88c7d0641d14a4d363"
  },
  {
    "url": "assets/js/36.f99f1828.js",
    "revision": "a4abd11cf480571463552752972c2d07"
  },
  {
    "url": "assets/js/4.2b29f2d2.js",
    "revision": "d97e54a46c6175774e44ad528a6d21d3"
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
    "url": "assets/js/8.0838a5d9.js",
    "revision": "32ae88e4c6123db2d30c2521ab7dcb10"
  },
  {
    "url": "assets/js/9.72b33c4f.js",
    "revision": "c34acfae7246c240d7b643a622ee315b"
  },
  {
    "url": "assets/js/app.68589b35.js",
    "revision": "6d753b3166c53e9d2830390b23e71332"
  },
  {
    "url": "dev/action.html",
    "revision": "e74dd8256f447ce9106be2d04bbfb83e"
  },
  {
    "url": "dev/component.html",
    "revision": "4466303e9cb8654a0d6f344966c1bba9"
  },
  {
    "url": "dev/container.html",
    "revision": "98514f28c18a8211c44a8691fda501d8"
  },
  {
    "url": "dev/materials.html",
    "revision": "db9679ad48286fe11fb270865093b64f"
  },
  {
    "url": "dev/plugin.html",
    "revision": "05aa654ae6e3b043657d1ba8137ffeb9"
  },
  {
    "url": "events/async.html",
    "revision": "906e7ed7045d2d1735c10932bb58dc17"
  },
  {
    "url": "events/component.html",
    "revision": "938b706dac229e2ac9453551cc4e893f"
  },
  {
    "url": "events/container.html",
    "revision": "b6381a292790d9a35153aeee3dea154e"
  },
  {
    "url": "events/intro.html",
    "revision": "b159eb5fad3a88f22ec8e5b2db2ef76e"
  },
  {
    "url": "events/plugin.html",
    "revision": "64a58f2810e66957081fc36e3060e3f0"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "02eb3047a182f9bf5575a31636d4158a"
  },
  {
    "url": "form/intro.html",
    "revision": "2fa70c8f2f9065e6a96681ed0ab6343d"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "f6ecf5c45760034ae18b1deb99f69c8c"
  },
  {
    "url": "form/registryField.html",
    "revision": "e8b7485df80b81ed461095e75935e733"
  },
  {
    "url": "index.html",
    "revision": "1c89b2d033801886efa364abb61f1f88"
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
    "revision": "e865f25429a6e82a3d1024fcc2de4295"
  },
  {
    "url": "start/component.html",
    "revision": "a3c8026a3589da68ed3a55b9fa834cec"
  },
  {
    "url": "start/container.html",
    "revision": "935efcf0fdd452d2b9ae49f43768b99c"
  },
  {
    "url": "start/plugin.html",
    "revision": "5a8d58666a36008b3101ba995f4f15b0"
  },
  {
    "url": "start/ready.html",
    "revision": "50ef7b1a6097544e19e07b758c6736a1"
  },
  {
    "url": "style/fixed.html",
    "revision": "0d02e36cf195cbd2118622c990406d48"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "640968339c764465ca6a70d60a0499d3"
  },
  {
    "url": "style/styleInject.html",
    "revision": "847af5214c8de3fb03fb574b04b7b784"
  },
  {
    "url": "welcome/intro.html",
    "revision": "7c47181354b5a72f793f3b5a0545a2e7"
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
