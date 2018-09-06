"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f49d0dcb1c842fcffa58152849da2d69"],["/static/css/main.3dd62736.css","690425c1fcadcc24481aac744e133634"],["/static/js/i18n-0.12f3acd2.chunk.js","db760d1e514e517ff5fbc211bc6d6526"],["/static/js/i18n-1.9df1309a.chunk.js","dad1f9f8d2325f990e27aad3842a337f"],["/static/js/i18n-2.5950160f.chunk.js","b44d941156da13c2e2d3e5da130dd2fa"],["/static/js/main.9e1f697e.js","8f772b6d6c50f5e034cefbb152745d14"],["/static/media/Flaticon.11441feb.woff","11441feb81224d5f002b28597355169f"],["/static/media/Flaticon.81d040cc.svg","81d040cce0bfd20499b0d6850b32e5ac"],["/static/media/Flaticon.a550843b.eot","a550843bb993eb884583d91e85afd1f2"],["/static/media/Flaticon.a620bb71.ttf","a620bb7182dfd796a0cfe17a1701f416"],["/static/media/logo-commerce-01.6d4e5108.svg","6d4e5108c7a81693d67d03ee4d02ae0f"],["/static/media/logo-commerce-02.8afb6c6f.svg","8afb6c6f6577cf7c448089ddf1520ae6"],["/static/media/logo-gopay.48aa4030.png","48aa4030b2c024022145de1d15250baf"],["/static/media/logo-mpizza.cedc04ae.svg","cedc04ae8ee184d3d7c7e417e22fcd8c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});