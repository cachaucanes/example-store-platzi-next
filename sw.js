if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const c=e=>t(e,i),l={module:{uri:i},exports:o,require:c};s[i]=Promise.all(a.map((e=>l[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/example-store-platzi-next/_next/static/Ao6PYbF4l1sL0ZTE2Bvb5/_buildManifest.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/Ao6PYbF4l1sL0ZTE2Bvb5/_middlewareManifest.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/Ao6PYbF4l1sL0ZTE2Bvb5/_ssgManifest.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/chunks/main-f1ecdda0c94bca63.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/chunks/pages/_app-243cd45783f573e8.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/chunks/pages/checkout-b5179b97cfce45f3.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/chunks/pages/index-9ed812cc656b9b76.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/chunks/webpack-db03ed41ea5624e8.js",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/css/7a39526128f8dd21.css",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/css/93c89556b66a22f7.css",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/css/ad8f20a538bfe22a.css",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/media/bt_add_to_cart.fb1463ea.svg",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/media/bt_added_to_cart.45632f53.svg",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/media/flechita.1c152575.svg",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/media/icon_close.e791344b.png",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/media/icon_menu.b70fc14a.svg",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/media/icon_shopping_cart.665a6046.svg",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/media/image-not-found.49a16b2e.svg",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/_next/static/media/logo_yard_sale.ab5a49e4.svg",revision:"Ao6PYbF4l1sL0ZTE2Bvb5"},{url:"/example-store-platzi-next/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/example-store-platzi-next/icon-192x192.png",revision:"9dc75ce7241f7fbc97179f3ff4b040bc"},{url:"/example-store-platzi-next/icon-256x256.png",revision:"a09593f255ff9c403a6ea087410150b6"},{url:"/example-store-platzi-next/icon-384x384.png",revision:"7962a4c81f40cbbfd802be17cc6f3661"},{url:"/example-store-platzi-next/icon-512x512.png",revision:"5f58a9823cf40d74ea66724b2e88cf8a"},{url:"/example-store-platzi-next/manifest.json",revision:"ecc3197e798131ea230a8d3ef4f1bbb0"},{url:"/example-store-platzi-next/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/example-store-platzi-next",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
