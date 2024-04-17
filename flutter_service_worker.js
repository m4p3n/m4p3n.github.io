'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "90f321e04dadd5e36cb790bcbe3a0ae2",
"assets/AssetManifest.json": "4d9e09a6db86a7b8d269dbb914105851",
"assets/FontManifest.json": "00b243047e0ec3ea588de0e7145915c5",
"assets/fonts/Chivo-Black.ttf": "660372fee517026efad06af1613500dd",
"assets/fonts/Chivo-BlackItalic.ttf": "6c29e98d35721a532ff066efb067de91",
"assets/fonts/Chivo-Bold.ttf": "f4044d28e89482d87fde0cc28ae88c1e",
"assets/fonts/Chivo-BoldItalic.ttf": "b53050b65f25f348e028522933ca5ced",
"assets/fonts/Chivo-ExtraBold.ttf": "596979dd4b53c35a5421d6fd57f1f986",
"assets/fonts/Chivo-ExtraBoldItalic.ttf": "533afa4e4a63fe8db5e1cd96b8238371",
"assets/fonts/Chivo-ExtraLight.ttf": "48993c471b851568d79cee7c83be751a",
"assets/fonts/Chivo-ExtraLightItalic.ttf": "88cf07df9001d647541d1c527d478a90",
"assets/fonts/Chivo-Italic.ttf": "c001cbb1257005205bf93d9b6a45c8ca",
"assets/fonts/Chivo-Light.ttf": "0ab4cdfe92c452c046a12861bca97d09",
"assets/fonts/Chivo-LightItalic.ttf": "a6fe4638a4c44e5dbd0945edf68cfa6e",
"assets/fonts/Chivo-Medium.ttf": "cba0898204af4b9d4e70bba9893ea1eb",
"assets/fonts/Chivo-MediumItalic.ttf": "64ac8e1538d22034b24f3467b92dfed4",
"assets/fonts/Chivo-Regular.ttf": "e58510cde8d7570855425b52f5c049fc",
"assets/fonts/Chivo-SemiBold.ttf": "bebb7a814de9b21745be07844a8e709b",
"assets/fonts/Chivo-SemiBoldItalic.ttf": "fa1ad3c8391ae286a9ec679cf6e82bad",
"assets/fonts/Chivo-Thin.ttf": "479f41facab7c03d3beb7b6da80665b0",
"assets/fonts/Chivo-ThinItalic.ttf": "610f0f53ae717a81da474c932e7690d1",
"assets/fonts/MaterialIcons-Regular.otf": "e0962756937044ab0970d61a3d95e509",
"assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/images/coming_soon.jpg": "92c71868dd9672ec38944fb72ccfe565",
"assets/images/homepage_header_pic.png": "d6db554f37537fcd9eccce071c8b8621",
"assets/images/ic_android.png": "64d286ee88d6e8c6b28ba5652083a70b",
"assets/images/ic_ln.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/images/ic_ml.png": "76fdd29ffdd088aa2025dc5830f0f501",
"assets/images/ic_ph.png": "0f836368efbacc57b877c547a93019fc",
"assets/images/ic_wc.png": "ef1b68a44042d8dcfb669437d493423e",
"assets/images/sheet.png": "596f8d92ae7118a6041359e865dc385f",
"assets/images/sheets.png": "42bdc53c9330afeabd09b74a57c14b24",
"assets/NOTICES": "6a7a908f8112b3264f8f2f51e586d85e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "94db2bd63f92a267d455a6fcda77d912",
"icons/Icon-512.png": "d8e0f1941dc3b0c17877dd944f993f6c",
"icons/Icon-maskable-192.png": "94db2bd63f92a267d455a6fcda77d912",
"icons/Icon-maskable-512.png": "d8e0f1941dc3b0c17877dd944f993f6c",
"index.html": "40678dd9209a606ef5129531e6de3824",
"/": "40678dd9209a606ef5129531e6de3824",
"main.dart.js": "37bbc48293d66be3d853fb328770aedc",
"manifest.json": "0aa6af4bf3ca70ec6d0d39ee3ed0404b",
"version.json": "c24a19d87558d6428854be543f0e8feb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
