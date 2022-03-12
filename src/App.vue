<template>
  <main class="flex flex-row h-screen w-192 bg-gray-800">
    <textarea
      class="
        border border-gray-500
        basis-1/2 bg-gray-700/75
        shadow-lg shadow-sky-700
        h-auto my-4 ml-4 rounded-lg p-5
        resize-none
        text-slate-100 text-lg
      "
      placeholder="ここにマークダウンを入力"
      v-model="md"
    ></textarea>
    <div
      class="
        border border-gray-500
        basis-1/2
        shadow-lg shadow-sky-700
        h-auto m-4 rounded-lg p-5
      "
      id="output"
    >
      <button
        class="
         bg-slate-500 px-2 py-1 rounded-md 
         shadow-sky-500 shadow-md
         text-slate-50
         float-right right-10
         z-20 fixed
        "
        title="HTMLをコピー"
        @click="copyHTML"
      ><i class="bi bi-clipboard"></i></button>
      <div class="z-10">
        <div
          v-html="mark(md)"
          id="article"
        ></div>
      </div>
    </div>
  </main>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/default.min.css");
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");

body {
  font-family: 'Noto Sans JP', sans-serif;
}
#output {
  background: rgb(31 41 55);
  overflow-x: scroll;
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
}

</style>

<script>
import {marked} from 'marked'

const CSS = `
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
}`

export default{
  data(){return{
    md: ""
  }},
  methods: {
    mark(getMD){
      const outhtml = marked.parse(getMD);
      return outhtml
    },
    copy_to_clipboard(value) {
        if(navigator.clipboard) {
            var copyText = value;
            navigator.clipboard.writeText(copyText)
        } else {
            alert('対応していません。');
        }
    },
    copyHTML(){
      const HTML = document.getElementById("article").innerHTML;
      const copyText = `
      <div id="article">
        ${HTML}
      </div>
      <style>
       ${CSS}
      </style>
      `
      this.copy_to_clipboard(copyText)
    }
  }
}

</script>