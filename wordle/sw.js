if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const a=s=>i(s,l),o={module:{uri:l},exports:t,require:a};e[l]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/backspace-58c9abe2.svg",revision:null},{url:"assets/close-5676927a.svg",revision:null},{url:"assets/flags-01398f4a.svg",revision:null},{url:"assets/icons/apple-touch-icon.png",revision:"96d54a5e33e9fa2ad4971f443a5333b5"},{url:"assets/icons/favicon.svg",revision:"0fb84e95c58821936ac1cc5eebd4c45a"},{url:"assets/icons/pwa-192x192.png",revision:"314349e75afefe179dedcf32837c295b"},{url:"assets/icons/pwa-512x512.png",revision:"19f39672475ee983ea94a14190f12d1e"},{url:"assets/icons/safari-pinned-tab.svg",revision:"aa95f19af0fa2a33bfec4e7c19210de7"},{url:"assets/index-3acbc781.css",revision:null},{url:"assets/index-b2b18385.js",revision:null},{url:"assets/info-8a32605c.svg",revision:null},{url:"assets/light-d5892340.svg",revision:null},{url:"assets/Nunito-Bold-34f790c2.ttf",revision:null},{url:"assets/Nunito-Medium-56a28554.ttf",revision:null},{url:"assets/Nunito-Regular-a278cc18.ttf",revision:null},{url:"assets/Nunito-SemiBold-28d37096.ttf",revision:null},{url:"assets/settings-47410ebf.svg",revision:null},{url:"assets/statistics-5266e682.svg",revision:null},{url:"assets/trash-ae285962.svg",revision:null},{url:"index.html",revision:"054fcbcc7b46e9862d73a8c4ccfa57a9"},{url:"manifest.webmanifest",revision:"941e194614562231deb8527ce97ceaf3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/icons/pwa-192x192.png",revision:"314349e75afefe179dedcf32837c295b"},{url:"assets/icons/pwa-512x512.png",revision:"19f39672475ee983ea94a14190f12d1e"},{url:"manifest.webmanifest",revision:"941e194614562231deb8527ce97ceaf3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));