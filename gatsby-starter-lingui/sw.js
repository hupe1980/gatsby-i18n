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
    "url": "webpack-runtime-f043f4aa7439c21162c3.js"
  },
  {
    "url": "app-d84b0d46a1f25deb250a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-fa1cfe661590b2d8a959.js"
  },
  {
    "url": "index.html",
    "revision": "a66d5dedf707a61af81b7c6aa85b8956"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "24155b610fac6aa2f23c33c2eba18b59"
  },
  {
    "url": "0-4cd54855708eaeec72a1.js"
  },
  {
    "url": "component---cache-wapps-redirect-js-38cbd56db7ad69a03ba5.js"
  },
  {
    "url": "static/d/297/path---index-6a9-JHxYPny4LeB05r8WxNb4D9TSd6U.json",
    "revision": "a3f097623e2aaff5dadbb2e25c2e4805"
  },
  {
    "url": "static/d/397/path---404-html-516-62a-VDVKetYFRQcrMkNkX1q5FvkJis.json",
    "revision": "0d8c8f2a4b71e8db773085d89ff2b8e2"
  },
  {
    "url": "static/d/686/path---offline-plugin-app-shell-fallback-a-30-c5a-bZxXxiUCTtltnPQzr18apT0XOs.json",
    "revision": "f9eef95fb09f44241969d08d275f6bbb"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "47967eb65f07a3cb8b47042d3dbb8ee0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/gatsby-i18n/gatsby-starter-lingui/offline-plugin-app-shell-fallback/index.html", {
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