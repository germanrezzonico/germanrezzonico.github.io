'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"README.md": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "696ff88ae7e86d9b3eb2c5b93eca30d8",
"favicon.png": "15e863dd918e3b6796bf9c9abecf1f44",
"index.html": "793568660f5e9adf9dd73886194394c0",
"/": "793568660f5e9adf9dd73886194394c0",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"main.dart.js": "f381384e22063a3f168d9f3bf0cbb203",
"flutter_bootstrap.js": "42d43c91abf6a87b49e2f4e9a5f63960",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "2dfcd9c70a7b83ad18071322564750de",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-Regular.ttf": "a8deb2821dc0fdf6fd70cc272bea65bc",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-ExtraBold.ttf": "1e255fcf02437e156bbe0e9a5e3126d4",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-SemiBold.ttf": "ba155473d72fb574bd945b20f4598560",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-Black.ttf": "4e5cd85e2981467d09d0bffa47f54610",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-Light.ttf": "3b8bf05c0d2fb5ca05e822f5723826b7",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-Bold.ttf": "4571c7793d017d574972bcdf28fbe154",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-ExtraLight.ttf": "72ee61ab90d985a3bde1853f01b56e6c",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-Thin.ttf": "70c0ce724b3c5fb6145eeb9474acb19a",
"assets/fonts/Montserrat-Alt1-0.3.2/MontserratAlt1-Medium.ttf": "29295d2928c6bd76a76c9e789982bc85",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_23_0.png": "21b0301a651688c8c42e18f4b564c802",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_18_0.png": "f9626436352b89fea3603310512df828",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_cover.jpg": "adb9f04e2c1094b07296dfe2296ea143",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_40_0.png": "23d3f907bc6a22e92b4a872f60ce156d",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_64_0.png": "ff1793b9f28e19bc384d929707824b86",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_9_2.png": "6ba0c83f72e56cd01ca8a4c92606bd47",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_65_2.png": "a2e41f2a54147d2954776f52f4553381",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_33_1.png": "2bd167380b192afd882fe46e276cbfdc",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_65_0.png": "3b800de2fa4f21d2cf38a56c21e51062",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_22_0.png": "ee0244cb36ac7b23d6debc487d37dced",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_65_1.png": "f0ad2cfe6ac3ed468be024844b55f3f0",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_25_0.png": "def1d800f8e94105d7a9239eeeb4261a",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_44_0.png": "5f62aa2d0212e139ccb5e778e2b6c88a",
"assets/projects/predicting_boston_housing_prices_files/predicting_boston_housing_prices_9_1.png": "b1447c68572de0b7c9fdd5b2d0ed0b3a",
"assets/projects/training_a_smartcab_to_drive_files/training_a_smartcab_to_drive_34_0.png": "56650a66bb03d7311ffbc723c5c1c4b6",
"assets/projects/training_a_smartcab_to_drive_files/training_a_smartcab_to_drive_cover.jpg": "10fadbe190841b99ad7a614bc4b9be36",
"assets/projects/training_a_smartcab_to_drive_files/training_a_smartcab_to_drive_38_0.png": "08e58d17575278d0eaf5139784a06b8a",
"assets/projects/training_a_smartcab_to_drive_files/training_a_smartcab_to_drive_11_0.png": "394a6c9d3afe95718dfaf58f68f56d06",
"assets/projects/training_a_smartcab_to_drive_files/training_a_smartcab_to_drive_40_0.png": "57c5d645dc8e2362ac106d63421f73bc",
"assets/projects/training_a_smartcab_to_drive_files/training_a_smartcab_to_drive_32_0.png": "041c0f01da0a07082a5cdc5415a3a7a4",
"assets/projects/training_a_smartcab_to_drive_files/training_a_smartcab_to_drive_25_0.png": "7f4391735a5f89cf21548ee3f5d0a8b2",
"assets/projects/creating_customer_segments_files/creating_customer_segments_61_0.png": "5620cb9d64501c1f4ff0421d15fa948b",
"assets/projects/creating_customer_segments_files/creating_customer_segments_11_1.png": "3df697f3a482b8809e8f3c477a177799",
"assets/projects/creating_customer_segments_files/creating_customer_segments_86_1.png": "0bedaec2cd53c730a26f31e188ef9e61",
"assets/projects/creating_customer_segments_files/creating_customer_segments_37_0.png": "86adfe89cf4e5f9e9e02c998ad8599d3",
"assets/projects/creating_customer_segments_files/creating_customer_segments_87_1.png": "f25148f7439299c177d055d59f53023d",
"assets/projects/creating_customer_segments_files/creating_customer_segments_52_0.png": "db23a39aa766fda570093e479bd9e0f3",
"assets/projects/creating_customer_segments_files/creating_customer_segments_9_1.png": "aa9496a105a5ad413eb0c2a589813ddf",
"assets/projects/creating_customer_segments_files/creating_customer_segments_10_1.png": "c3b9a12b7829445e22fd7752de1ffda9",
"assets/projects/creating_customer_segments_files/creating_customer_segments_77_0.png": "d57b0e5be634a6275ef733dc76829fc3",
"assets/projects/creating_customer_segments_files/creating_customer_segments_65_1.png": "5f6a9fa22c2064dbc6508d5b3fbb41e6",
"assets/projects/creating_customer_segments_files/creating_customer_segments_31_0.png": "67a4824af5aa4e1cd9da4ed188c5b364",
"assets/projects/creating_customer_segments_files/creating_customer_segments_58_0.png": "d4be32c7a936c561620efd7b87035a1c",
"assets/projects/creating_customer_segments_files/creating_customer_segments_97_0.png": "865f038ae854584a615c73e20d79bd57",
"assets/projects/creating_customer_segments_files/creating_customer_segments_29_0.png": "35e8105001e76e08a145c800328c4ca8",
"assets/projects/creating_customer_segments_files/creating_customer_segments_cover.jpg": "b931b1f6401321c8d175bfb79e052b2d",
"assets/projects/creating_customer_segments_files/creating_customer_segments_39_0.png": "d66553d598e867cd2b6888e7ae6a6549",
"assets/projects/creating_customer_segments_files/creating_customer_segments_12_1.png": "90e370be29e6d79539f60dd47fbc3988",
"assets/projects/creating_customer_segments_files/creating_customer_segments_98_0.png": "313b808371555b103b356bc0505e4ca1",
"assets/projects/creating_customer_segments_files/creating_customer_segments_20_0.png": "553f978887bf965c281735786238d5ef",
"assets/projects/building_a_student_intervention_system_files/building_a_student_intervention_system_15_0.png": "0464a3a050a33aaaf88430721eaf90c6",
"assets/projects/building_a_student_intervention_system_files/building_a_student_intervention_system_29_1.png": "7e04646532386ba282a54496610af89a",
"assets/projects/building_a_student_intervention_system_files/building_a_student_intervention_system_43_1.png": "12a1e4bab692b29d6ad0c0bb62faa677",
"assets/projects/building_a_student_intervention_system_files/building_a_student_intervention_system_15_1.png": "e396ba6a7c94b520a97b4d6d0d489358",
"assets/projects/building_a_student_intervention_system_files/building_a_student_intervention_system_cover.jpg": "f3efb65888d84bfd2f6fe2cdf4dcdb14",
"assets/projects/building_a_student_intervention_system_files/building_a_student_intervention_system_29_0.png": "f7ce024c33aff75a0d2fc433aa45072e",
"assets/projects/building_a_student_intervention_system_files/building_a_student_intervention_system_29_2.png": "d1ac4bfe0ad23a4cef798fddcc181b61",
"assets/articles/installing_tensorflow_and_keras_on_a_chromebook_files/installing_tensorflow_and_keras_on_a_chromebook_cover.jpg": "c4a3c99828b7d84c75b64a3885f4ea99",
"assets/articles/markdown_post_test_files/markdown_post_test_cover.jpg": "a3493d8025af7edf265c21a4ce4cf8c4",
"assets/articles/tensorflow_gpu_and_keras_on_ubuntu_with_nvidia_960_m_files/tensorflow_gpu_and_keras_on_ubuntu_with_nvidia_960_m_cover.jpg": "4207c8fe3f7274699bd10e1392d4a414",
"assets/articles/machine_learning_on_a_chromebook_files/machine_learning_on_a_chromebook_cover.jpg": "0243c2d105fff1dd58902b8e4a0604be",
"assets/articles/programming_environment_on_a_chromebook_files/programming_environment_on_a_chromebook_cover.jpg": "1a33d419fa18d589a872a929af7375b1",
"assets/articles/installing_tensorflow_and_keras_on_a_chromebook_python_3_files/installing_tensorflow_and_keras_on_a_chromebook_python_3_cover.jpg": "c4a3c99828b7d84c75b64a3885f4ea99",
"assets/articles/ubuntu_14_04_5_lts_trusty_on_a_chromebook_files/ubuntu_14_04_5_lts_trusty_on_a_chromebook_cover.jpg": "d5b90fc5bf237ae09eb83b8ad387a464",
"assets/AssetManifest.json": "bba2547f8aa4ff6ab2758020bfc2d1df",
"assets/AssetManifest.bin": "23f3f9632c39322be050720ae7572216",
"assets/NOTICES": "51bac4a67ec83e04f17dcb3e69b3979b",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "43ef70816034a943040c0a8f3343846a",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "ead68840b98c97ed465b8bccb4b211e3",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "287e7df18ab66f64751141610f75be25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/AssetManifest.bin.json": "c336c11b09c5203fb16ef7c13502c9b3",
"assets/FontManifest.json": "20baa75daa19cdc7504d214da7ee5a3c",
"assets/assets/CV.pdf": "397a23f8a6d2f381a2ea7607beffbf3a",
"assets/assets/img/ic_launcher_round.png": "dca3735da6c3031e768a234b1ebd492a",
"assets/assets/img/drawer_decoration_image.jpg": "2596c702ea5ddbd844dff1e09fc66067"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
