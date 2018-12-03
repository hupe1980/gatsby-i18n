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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b58b554fdcc32f5c70e2.js"
  },
  {
    "url": "app-0e3c0375befaddf25863.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6926a93decc2bedb23bf.js"
  },
  {
    "url": "index.html",
    "revision": "6a1f6a0ee0fa8ae945ce297cf548c221"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "509176fcc90a73ec321c3be635202c27"
  },
  {
    "url": "0-41f642e08f43fd20eadb.js"
  },
  {
    "url": "component---cache-wapps-redirect-js-2206cf89d3c852187430.js"
  },
  {
    "url": "static/d/158/path---index-6a9-eBInYOc8JTG3xsFkJAbWZcdDzpU.json",
    "revision": "8983c1b2a49d7f03e899299786e74854"
  },
  {
    "url": "static/d/622/path---404-html-516-62a-niiqWQzSUsMyXqVt7ULoi6fDk.json",
    "revision": "fad3d5828a942d26fbc3f82326b8deb7"
  },
  {
    "url": "static/d/936/path---offline-plugin-app-shell-fallback-a-30-c5a-ewzZIeG1IO2tqBOMy6AOmnCsfU.json",
    "revision": "616b5a1fdee580edb95f98abc92e03ef"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d9cfc98ba5d6d596bcc003abf4efe123"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/gatsby-i18n/gatsby-starter-i18next/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});