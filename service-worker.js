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
    "revision": "7192ce08cf7db0ac83df7a192541bb10"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "919d12cab6dffb4d1d50f3bd3e65d5fa"
  },
  {
    "url": "advanced/dsl.html",
    "revision": "344322f9b87768144dbb0bfaea4ec878"
  },
  {
    "url": "advanced/hot-area-component.html",
    "revision": "e7344b614ea342f5fe5c6820f1f0ede0"
  },
  {
    "url": "advanced/meta.html",
    "revision": "62786f48ffe87629c78fb11d987640dc"
  },
  {
    "url": "advanced/routerController.html",
    "revision": "a72bcc3e80d36e23e8343ea8f5fa769b"
  },
  {
    "url": "assets/css/0.styles.9386e6f4.css",
    "revision": "cf765f6116832935b6dbf5de7d207f8e"
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
    "url": "assets/js/11.494e8d67.js",
    "revision": "ef6a3f4ed5a0a034604fe3bfcdfc270b"
  },
  {
    "url": "assets/js/12.010f4323.js",
    "revision": "5b48d4b92201e8b3c6eb9586b8dde504"
  },
  {
    "url": "assets/js/13.439c2238.js",
    "revision": "c0d06b859dc1fbead511d541f9a79823"
  },
  {
    "url": "assets/js/14.ff545b73.js",
    "revision": "947e3c47a31ee7e42bd127176d96ebb2"
  },
  {
    "url": "assets/js/15.b0845756.js",
    "revision": "59e3504972a855d039ef0f33b5cc09b3"
  },
  {
    "url": "assets/js/16.c9a157dd.js",
    "revision": "02313e1b3f71736602a912dc2f9002d6"
  },
  {
    "url": "assets/js/17.ec804600.js",
    "revision": "00c047990fcd5242241285085da5c652"
  },
  {
    "url": "assets/js/18.f18398b2.js",
    "revision": "b9faf3e7e455dd629d8e461a390501e5"
  },
  {
    "url": "assets/js/19.74707808.js",
    "revision": "06e8dbc246be6214c6eacba3cef5cbf5"
  },
  {
    "url": "assets/js/2.aa249559.js",
    "revision": "a5ddfe8c0510f7f3818dada0cdb176f5"
  },
  {
    "url": "assets/js/20.9f52755d.js",
    "revision": "0042766ec440714c96bc52be5f247242"
  },
  {
    "url": "assets/js/21.2750a598.js",
    "revision": "67219fb30c062d6112c8efd08a63b92e"
  },
  {
    "url": "assets/js/22.e56e5570.js",
    "revision": "9f354bd092319bb0ef972b2f16551b89"
  },
  {
    "url": "assets/js/23.24c9fbf9.js",
    "revision": "cf3b9a087632a1082bf07e1fc170cef6"
  },
  {
    "url": "assets/js/24.d6d1f574.js",
    "revision": "fa96f13aacf6004d3e65e04f963cd425"
  },
  {
    "url": "assets/js/25.f6347916.js",
    "revision": "5ae70f8da7ccd118e2434c673ec92baf"
  },
  {
    "url": "assets/js/26.ecc98bd5.js",
    "revision": "cad0fc227a728f6cc268443364ddf63e"
  },
  {
    "url": "assets/js/27.b626096f.js",
    "revision": "ed96046612bbc9816d3a7e9bac95fcf4"
  },
  {
    "url": "assets/js/28.da5733d9.js",
    "revision": "1c2e243d1c88cc40de239339dafd6e94"
  },
  {
    "url": "assets/js/29.2855e0a6.js",
    "revision": "a9a76b9616df9a41a36474b0688210df"
  },
  {
    "url": "assets/js/3.bcc772ac.js",
    "revision": "424dd6b75bb36cf7add72afbb0667977"
  },
  {
    "url": "assets/js/30.aaa0e151.js",
    "revision": "57865da5c5dd9e47ff1aa69f19951465"
  },
  {
    "url": "assets/js/31.70f6562d.js",
    "revision": "7c8fe3a11110e2ba1817358abdb69f58"
  },
  {
    "url": "assets/js/32.082a78a7.js",
    "revision": "d907058a885b21c667692868cbbb5fe2"
  },
  {
    "url": "assets/js/33.ad8f217d.js",
    "revision": "9b14b8073fa8d1210e50adce8635e0e1"
  },
  {
    "url": "assets/js/34.a5c53da7.js",
    "revision": "d3f572fa8502fbbe268a6d7e5d14fcec"
  },
  {
    "url": "assets/js/35.8f54feb5.js",
    "revision": "bbff1048c6a8a86cfbf6769b8dfc4591"
  },
  {
    "url": "assets/js/36.ae3e7f5d.js",
    "revision": "2af747b1f98e7190a91f4db8f3e71663"
  },
  {
    "url": "assets/js/37.11d3e5b3.js",
    "revision": "5084727c68ae5282c16b5f7599064c15"
  },
  {
    "url": "assets/js/38.4f365960.js",
    "revision": "914d52cf5714c162099c1dd037aaf72d"
  },
  {
    "url": "assets/js/39.df2f1e16.js",
    "revision": "e750f6ca7fa3b6e9a396228edd4ce493"
  },
  {
    "url": "assets/js/4.10c9da28.js",
    "revision": "07908e2fc23833661fa0ab3bcbdb5db0"
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
    "url": "assets/js/6.fc4101fa.js",
    "revision": "565ab201dcd9ba6fd3eb4630ecdb8ac0"
  },
  {
    "url": "assets/js/7.c4d1da18.js",
    "revision": "f897a445ea484b3698c6353828bffe56"
  },
  {
    "url": "assets/js/8.a2368e0d.js",
    "revision": "a1905505787068448202ae04af88b204"
  },
  {
    "url": "assets/js/9.72b33c4f.js",
    "revision": "c34acfae7246c240d7b643a622ee315b"
  },
  {
    "url": "assets/js/app.ee473eae.js",
    "revision": "27acda2f7371e143b057dc48124bac34"
  },
  {
    "url": "deploy/generator.html",
    "revision": "a54c20e45e4740267082c2829f71a54a"
  },
  {
    "url": "deploy/intro.html",
    "revision": "256eb0f9b4b6b14bb5821594fdfd7a6d"
  },
  {
    "url": "deploy/middleware.html",
    "revision": "b60652990af98039a8d1847cfa39320b"
  },
  {
    "url": "deploy/publisher.html",
    "revision": "2e9e8dea5ae278b7327630c2c76c6be9"
  },
  {
    "url": "deploy/resources.html",
    "revision": "f1518edebdee773dca3476f09282568c"
  },
  {
    "url": "deploy/user.html",
    "revision": "c73ba0d33787b84d85c1198ca41c5c7b"
  },
  {
    "url": "dev/action.html",
    "revision": "03e75c2f3d501ae98fca20f11bd38be9"
  },
  {
    "url": "dev/component.html",
    "revision": "e81d3f002ff00e08e7b589f6df56d00f"
  },
  {
    "url": "dev/container.html",
    "revision": "9a289cba9660b215814bf5958b7c6456"
  },
  {
    "url": "dev/materials.html",
    "revision": "d371edbe5171bcff42f63976bf9dcc18"
  },
  {
    "url": "dev/plugin.html",
    "revision": "10806c665a6bc95a1b3d487cec271da4"
  },
  {
    "url": "events/async.html",
    "revision": "b8b6f3ff1127dc8a2e2e58915b79e6cc"
  },
  {
    "url": "events/component.html",
    "revision": "a396c37b2023cca6dbc234d380bb0165"
  },
  {
    "url": "events/container.html",
    "revision": "083389148105a164cafad6b2aa4feb96"
  },
  {
    "url": "events/intro.html",
    "revision": "ee41894bbc3415a611e51313b1855a92"
  },
  {
    "url": "events/plugin.html",
    "revision": "7efd559755233d5d9749e27a9411daf8"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "fccd84c86d0411ae0fc0a1cc9a79f9e5"
  },
  {
    "url": "form/intro.html",
    "revision": "4b711075d8ba7c993ad28de013f21fd5"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "b41b9d204389102e37d13213682c518d"
  },
  {
    "url": "form/registryField.html",
    "revision": "52b6ce645813b359634ba034c44019e1"
  },
  {
    "url": "index.html",
    "revision": "e74c9f6a08beb72a3ac4c2d0c5a851c1"
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
    "revision": "4a35ee252aaca80e6d5c7d73db8f73ab"
  },
  {
    "url": "start/component.html",
    "revision": "d3b5bea43584423f4e2a1ed37c36e8cd"
  },
  {
    "url": "start/container.html",
    "revision": "a3ad64b7acff71a2d6a00665a450e877"
  },
  {
    "url": "start/plugin.html",
    "revision": "c64226de1cdb026a8ad913dd183a4e67"
  },
  {
    "url": "start/ready.html",
    "revision": "e695b36ef700f3787ca1752f1552c1d6"
  },
  {
    "url": "style/fixed.html",
    "revision": "a2f37926de01cfc55e54fe69e4f170b6"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "16eabeab6cdcb06b7d8df76b2da5a046"
  },
  {
    "url": "style/styleInject.html",
    "revision": "fe9d708877672483cb789c5444b63399"
  },
  {
    "url": "welcome/intro.html",
    "revision": "d4b04a30f632da0b0194419ed6b03fe3"
  },
  {
    "url": "welcome/packages.html",
    "revision": "8ed88ebbc19ffd3048d1506cb3444386"
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
