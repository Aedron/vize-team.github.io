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
    "revision": "9791776834aa964df473293f4df4aeeb"
  },
  {
    "url": "advanced/containerComponent.html",
    "revision": "f88be0a2d349f89119805071ba826025"
  },
  {
    "url": "advanced/dsl.html",
    "revision": "d92707f90584d5a69b44d777c46bd0b0"
  },
  {
    "url": "advanced/hotAreaComponent.html",
    "revision": "18c49c459248b46434180b0e6606538d"
  },
  {
    "url": "advanced/meta.html",
    "revision": "9533bce09e0243cca8eed694c9e632e4"
  },
  {
    "url": "advanced/routerController.html",
    "revision": "cdef4479d88c924ade0975c3c62b4f90"
  },
  {
    "url": "assets/css/0.styles.c5286507.css",
    "revision": "bf6f6b944664e38353a9649a966dc02c"
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
    "url": "assets/js/10.72affb1a.js",
    "revision": "8c979e1749c2563abc576ffe3592c449"
  },
  {
    "url": "assets/js/11.4f185d04.js",
    "revision": "5f08e4a3bc44d51578762e292b84ab44"
  },
  {
    "url": "assets/js/12.ad85804e.js",
    "revision": "509ac77b4232461b461687a07835491e"
  },
  {
    "url": "assets/js/13.0419ca99.js",
    "revision": "7551e1a08219dba68332a35577c13b7e"
  },
  {
    "url": "assets/js/14.286bcb69.js",
    "revision": "2ac70dfca7d1a4230d9e94aa3588775e"
  },
  {
    "url": "assets/js/15.3cfb736b.js",
    "revision": "ea9ea86b94f90609d1aff3d5f3361194"
  },
  {
    "url": "assets/js/16.8795f039.js",
    "revision": "5f63409f9b98b1b53a7c026c6c91e29b"
  },
  {
    "url": "assets/js/17.61168f7c.js",
    "revision": "b779ff153f4b02158d63215af4d4ace5"
  },
  {
    "url": "assets/js/18.668f4bbe.js",
    "revision": "90b14fadc6ea5ce375ed3ee1850df90e"
  },
  {
    "url": "assets/js/19.5db47d62.js",
    "revision": "6b460fce4afa22acb1269eb1797349c6"
  },
  {
    "url": "assets/js/2.1e4b7d10.js",
    "revision": "bc40e4969445432c76b343f7518dca4c"
  },
  {
    "url": "assets/js/20.582b4d6e.js",
    "revision": "19608af1fd09995511aad8502fdaf7eb"
  },
  {
    "url": "assets/js/21.c024b8e2.js",
    "revision": "97dda39649622cdd71524ef3a2df59bd"
  },
  {
    "url": "assets/js/22.0089d668.js",
    "revision": "3484cde2d4408845e4a9dc549701ce00"
  },
  {
    "url": "assets/js/23.3a3c03e8.js",
    "revision": "7ed6629a85f65d4bf1ac7d347be46c15"
  },
  {
    "url": "assets/js/24.3b7a8641.js",
    "revision": "1607de7686b35068d45a9be540b20128"
  },
  {
    "url": "assets/js/25.1454cbfb.js",
    "revision": "50b9e4624436638138fb6988cbc5cc34"
  },
  {
    "url": "assets/js/26.bdc2649c.js",
    "revision": "ca989f64a3ce95274b49b7596eb26d36"
  },
  {
    "url": "assets/js/27.2ed28106.js",
    "revision": "516df60e45b7eea8755744a11aed88aa"
  },
  {
    "url": "assets/js/28.2bdb9569.js",
    "revision": "ea1d2c1b132f8e8fa93afa9350747e08"
  },
  {
    "url": "assets/js/29.9e68adac.js",
    "revision": "c93bfa102d4e163848e4f05748146195"
  },
  {
    "url": "assets/js/3.fbb20c3e.js",
    "revision": "28cafdf371ccf7d215acecf03c0e8845"
  },
  {
    "url": "assets/js/30.326c61e5.js",
    "revision": "c7353650669b1177d39cf57ffcbf41ba"
  },
  {
    "url": "assets/js/31.4cab05a7.js",
    "revision": "fdcb9f4de7c4f6f7a92ed2807a66459f"
  },
  {
    "url": "assets/js/32.b6c9fa23.js",
    "revision": "44bff6e7e716be6f2e49b7d7b750725e"
  },
  {
    "url": "assets/js/33.e9f7eab2.js",
    "revision": "a03c40aa85538c27481e4dc2faf30500"
  },
  {
    "url": "assets/js/34.fe2ce399.js",
    "revision": "995c192a17781a856760ae90b481edee"
  },
  {
    "url": "assets/js/35.e94a5d97.js",
    "revision": "3f4faa91e4bb756baeb00e8033ef1608"
  },
  {
    "url": "assets/js/36.1cf139bf.js",
    "revision": "9b375b8ce64cead7e5a60ad7815c0ae6"
  },
  {
    "url": "assets/js/37.1699b097.js",
    "revision": "b6e92741f9ab53c51066da6a7f6a6826"
  },
  {
    "url": "assets/js/38.162bb456.js",
    "revision": "91541df2f4e8fa81dd850f6064b16ba2"
  },
  {
    "url": "assets/js/39.ba523299.js",
    "revision": "808902a4db9d698f5b79549b89b1c59e"
  },
  {
    "url": "assets/js/4.b731a777.js",
    "revision": "119304bc4a81318c162d1de605365efe"
  },
  {
    "url": "assets/js/40.c67ba1e1.js",
    "revision": "cfe05d409cded43bd166ffae143346c5"
  },
  {
    "url": "assets/js/41.d6071752.js",
    "revision": "cc1f65fcf57d1344bb4bc0f784a4034c"
  },
  {
    "url": "assets/js/42.14838721.js",
    "revision": "3e4af16914714bcfb352961437b47a25"
  },
  {
    "url": "assets/js/43.87e4c073.js",
    "revision": "4f71d9b5478c14c4115bc981aadaa3d9"
  },
  {
    "url": "assets/js/44.7a3b1548.js",
    "revision": "bb90bb6c7091ecd96b0a7a19e08dc992"
  },
  {
    "url": "assets/js/45.ee2d73e5.js",
    "revision": "ec45d95255a1b68440dbc05bdf15c9e5"
  },
  {
    "url": "assets/js/46.fdd0b452.js",
    "revision": "aa6e50023e46c15b317cdecdf4485a0a"
  },
  {
    "url": "assets/js/47.f25f9090.js",
    "revision": "c29836bfcba9682468562ca6cfc25d22"
  },
  {
    "url": "assets/js/48.7dbbe1dd.js",
    "revision": "327ec36d41cec910ece2341c422a432c"
  },
  {
    "url": "assets/js/5.71007a86.js",
    "revision": "128b5cddbfee6a6049bd5bdc61625739"
  },
  {
    "url": "assets/js/6.ba07bc1b.js",
    "revision": "80db79eed8dd3ed5ef001011f6dbab8f"
  },
  {
    "url": "assets/js/7.17f74ef6.js",
    "revision": "9d495f6a5f71e282412cf38ba01c0667"
  },
  {
    "url": "assets/js/8.bc204a2b.js",
    "revision": "fa0d16bf24a9b53b197a31ac1f4cf7c7"
  },
  {
    "url": "assets/js/9.0d8825ef.js",
    "revision": "259b6227f8241788db62492fc0113026"
  },
  {
    "url": "assets/js/app.eea0800e.js",
    "revision": "5e2997dd8762476e3edb8f345a3357da"
  },
  {
    "url": "cli/commands.html",
    "revision": "856ef23bd7269d32555dfcc7de36d93a"
  },
  {
    "url": "cli/config.html",
    "revision": "3375394d7592d12b6b7ef50b7853983f"
  },
  {
    "url": "deploy/generator.html",
    "revision": "e8be6afff6da16387361d8ba9ab30bcd"
  },
  {
    "url": "deploy/intro.html",
    "revision": "73bbf092319a8646ee1f8c10bfaea1b8"
  },
  {
    "url": "deploy/middleware.html",
    "revision": "1e4fb5c5f2e28bc26c786dd73e1f41d2"
  },
  {
    "url": "deploy/publisher.html",
    "revision": "9dedb48e15f7a3c34da31473fc3e7bf9"
  },
  {
    "url": "deploy/resources.html",
    "revision": "ed3cdbc6ae707bd911e4d12527f01be3"
  },
  {
    "url": "deploy/user.html",
    "revision": "cf4c11e6babebadc0636fd15f6e3e131"
  },
  {
    "url": "dev/action.html",
    "revision": "fb049ff9d08ccf7cb3482c49268b6b49"
  },
  {
    "url": "dev/component.html",
    "revision": "cbdea01d764855f3f21d6a28461c356f"
  },
  {
    "url": "dev/container.html",
    "revision": "2500805bdf0d3c64fce5f7f79fa6763b"
  },
  {
    "url": "dev/materials.html",
    "revision": "0155e9443f7a6575528bfb68b35899e1"
  },
  {
    "url": "dev/plugin.html",
    "revision": "665da5a01851d41a72a1829b214b5298"
  },
  {
    "url": "events/async.html",
    "revision": "80ea280bb1310a927f5c556aea4d927f"
  },
  {
    "url": "events/component.html",
    "revision": "93c3cef715fd40445a09aab6b5b76df0"
  },
  {
    "url": "events/global.html",
    "revision": "cef8c39f34f6486415f2d4715db31a65"
  },
  {
    "url": "events/intro.html",
    "revision": "d5d7779d28628a340037427efb74f029"
  },
  {
    "url": "events/page.html",
    "revision": "3cc9804ade7a2065b5530805a83e4440"
  },
  {
    "url": "events/plugin.html",
    "revision": "0586a97e33a9b24c714c180504770de8"
  },
  {
    "url": "form/dynamicForm.html",
    "revision": "0d0f0f23228ef5f552b85fc50dde8a87"
  },
  {
    "url": "form/intro.html",
    "revision": "292780d973c4f812f035f160a62935fc"
  },
  {
    "url": "form/jsonSchema.html",
    "revision": "6a0cc3ea87c0d8b0542926e9673fd3c9"
  },
  {
    "url": "form/registryField.html",
    "revision": "4b3ccd5d77703fc71216e095055ab1e9"
  },
  {
    "url": "index.html",
    "revision": "02675d1fc4eb077ce097c9479e85d7e9"
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
    "revision": "662277c83848d6fbec62ad172f2fb1cb"
  },
  {
    "url": "start/component.html",
    "revision": "f5a345019e760397026562b4b0ef48f4"
  },
  {
    "url": "start/container.html",
    "revision": "267eb08b3149ba22a656fce5c333e865"
  },
  {
    "url": "start/plugin.html",
    "revision": "3bb94d0e01002298de952f69f2bc03d6"
  },
  {
    "url": "start/ready.html",
    "revision": "50a7fd34a2a4e103b2115c011328b32d"
  },
  {
    "url": "style/fixed.html",
    "revision": "f66ff3278ba18ee17313f2664670ad07"
  },
  {
    "url": "style/styleGroup.html",
    "revision": "96c8b42a144ca642cf2221db473762c3"
  },
  {
    "url": "style/styleInject.html",
    "revision": "92580c649f6a26cff17f1191af8e53e7"
  },
  {
    "url": "welcome/intro.html",
    "revision": "d5ca3082c81d8d3862241cc7e5e74b84"
  },
  {
    "url": "welcome/packages.html",
    "revision": "0ae03a3001794b564785164de81b6e73"
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
