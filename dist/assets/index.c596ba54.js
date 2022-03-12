import{m as n,o as d,c,w as p,v as u,a as i,b as f}from"./vendor.27a9d10a.js";const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}};g();var b=(o,t)=>{const l=o.__vccOpts||o;for(const[a,e]of t)l[a]=e;return l};const m=`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap');
body {
  font-family: 'Noto Sans JP', sans-serif;
  background-color: rgb(31 41 55);
}
#article {
  line-height: 1;
  white-space: pre;
  word-break: break-all;
  overflow-wrap: normal;
  color: white;
}
#article h1 {
  font-size: 30px;
  border-bottom: rgb(146, 146, 146) solid;
  padding-bottom: 5px;
  font-weight: bold;
}
#article h2,#article h3,#article h4,#article h5,#article h6 {font-size: 24px; font-weight: bold;}
#article p {font-size: 18px;}
#article ul {
  background: rgb(22 31 45);
  padding-left: 30px;
  border-radius: 10px;
  list-style: disc;
}
#article blockquote {
  background-color: rgb(22 31 45);
  padding-left: 10px;
  border-left: 3px solid rgb(116, 116, 116);
  border-radius: 10px;
}
#article ol {
  background: rgb(22 31 45);
  padding-left: 30px;
  border-radius: 10px;
  list-style: number;
}`,h={data(){return{md:""}},methods:{mark(o){return n.parse(o)},copy_to_clipboard(o){if(navigator.clipboard){var t=o;navigator.clipboard.writeText(t)}else alert("\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\u3002")},copyHTML(){const t=`
      <div id="article">
        ${document.getElementById("article").innerHTML}
      </div>
      <style>
       ${m}
      </style>
      `;this.copy_to_clipboard(t)}}},y={class:"flex flex-row h-screen w-192 bg-gray-800"},_={class:"border border-gray-500 basis-1/2 shadow-lg shadow-sky-700 h-auto m-4 rounded-lg p-5",id:"output"},x=i("i",{class:"bi bi-clipboard"},null,-1),v=[x],w={class:"z-10"},k=["innerHTML"];function L(o,t,l,a,e,r){return d(),c("main",y,[p(i("textarea",{class:"border border-gray-500 basis-1/2 bg-gray-700/75 shadow-lg shadow-sky-700 h-auto my-4 ml-4 rounded-lg p-5 resize-none text-slate-100 text-lg",placeholder:"\u3053\u3053\u306B\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3092\u5165\u529B","onUpdate:modelValue":t[0]||(t[0]=s=>e.md=s)},null,512),[[u,e.md]]),i("div",_,[i("button",{class:"bg-slate-500 px-2 py-1 rounded-md shadow-sky-500 shadow-md text-slate-50 float-right right-10 z-20 fixed",title:"HTML\u3092\u30B3\u30D4\u30FC",onClick:t[1]||(t[1]=(...s)=>r.copyHTML&&r.copyHTML(...s))},v),i("div",w,[i("div",{innerHTML:r.mark(e.md),id:"article"},null,8,k)])])])}var T=b(h,[["render",L]]);f(T).mount("#app");
