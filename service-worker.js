if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>r(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"video-alarm-new"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/alarm.png",revision:"b4f07533687d0e27fd043098fe977c32"},{url:"/css/858.f68bafdb.css",revision:null},{url:"/css/app.bd205c9c.css",revision:null},{url:"/index.html",revision:"8d19fef9d8a0df6956521ac23e34d9c4"},{url:"/js/858.025bf398.js",revision:null},{url:"/js/about.700311b1.js",revision:null},{url:"/js/app.ba0ad164.js",revision:null},{url:"/js/chunk-vendors.e196f2a9.js",revision:null},{url:"/manifest.json",revision:"04480e0e51f7215aa52ff7dc42926131"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
