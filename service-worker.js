if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const u=e=>r(e,l),c={module:{uri:l},exports:o,require:u};s[l]=Promise.all(n.map((e=>c[e]||u(e)))).then((e=>(i(...e),o)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"video-alarm-new"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/alarm.png",revision:"b4f07533687d0e27fd043098fe977c32"},{url:"/css/372.f59367f1.css",revision:null},{url:"/css/858.f68bafdb.css",revision:null},{url:"/css/app.bd205c9c.css",revision:null},{url:"/css/chunk-vendors.b1e96ca6.css",revision:null},{url:"/index.html",revision:"e170ea5bed740373809afb7e404382c3"},{url:"/js/238.e178d404.js",revision:null},{url:"/js/372.b00dfc02.js",revision:null},{url:"/js/858.83ab125b.js",revision:null},{url:"/js/961.081aa523.js",revision:null},{url:"/js/app.9d4cf4b0.js",revision:null},{url:"/js/chunk-vendors.7f63a751.js",revision:null},{url:"/manifest.json",revision:"04480e0e51f7215aa52ff7dc42926131"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
