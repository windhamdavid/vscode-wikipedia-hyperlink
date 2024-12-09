(()=>{var e={28:e=>{var t=[[/\*/g,"\\*","asterisks"],[/#/g,"\\#","number signs"],[/\//g,"\\/","slashes"],[/\(/g,"\\(","parentheses"],[/\)/g,"\\)","parentheses"],[/\[/g,"\\[","square brackets"],[/\]/g,"\\]","square brackets"],[/</g,"&lt;","angle brackets"],[/>/g,"&gt;","angle brackets"],[/_/g,"\\_","underscores"],[/`/g,"\\`","codeblocks"]];e.exports=function(e,r){return r=r||[],t.reduce((function(e,t){var s=t[2];return s&&-1!==r.indexOf(s)?e:e.replace(t[0],t[1])}),e)}},368:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.request=function(e,t={},r=""){const a=function(e={},t){if(null==e.headers)return t;switch(e.headers["Content-Type"]){case"application/json":return JSON.stringify(t);case"application/x-www-form-urlencoded":return o.stringify(t);default:return t}}(t,r);return null==t.headers&&(t.headers={}),new Promise(((r,o)=>{e instanceof s.URL||(e=new s.URL(e));const i=n.request(e,t,(e=>{const t=[];e.on("data",(e=>{t.push(e)})),e.on("end",(()=>{try{const{headers:s}=e,n=t.join("");r({headers:s,body:n})}catch(e){o(e)}})),e.on("error",(e=>{o(e)}))}));i.write(a),i.end()}))};const s=r(16),n=r(692),o=r(480)},398:e=>{"use strict";e.exports=require("vscode")},692:e=>{"use strict";e.exports=require("https")},480:e=>{"use strict";e.exports=require("querystring")},16:e=>{"use strict";e.exports=require("url")},948:(e,t)=>{"use strict";const{replace:r}="",s=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,n=/[&<>'"]/g,o={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},a=e=>o[e];t.escape=e=>r.call(e,n,a);const i={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},c=e=>i[e];t.unescape=e=>r.call(e,s,c)}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}var s={};(()=>{"use strict";var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=function(e){let r=t.commands.registerCommand("wikipedia-link.addHyperlink",(()=>{var e=t.window.activeTextEditor;if(void 0!==e){const r=e.selection,s=e.document.getText(r);if(""===s.trim())return t.window.showErrorMessage("No text is selected"),!1;t.window.withProgress({location:t.ProgressLocation.Window,cancellable:!1,title:"Loading article from wikipedia..."},(async i=>{i.report({increment:0});try{const u=await(0,o.request)(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=info|extracts&exintro&explaintext&&inprop=url&redirects=1&titles=${encodeURIComponent(s)}`),l=JSON.parse(u.body);i.report({increment:100}),console.log(u);const d=l.query.pages[Object.keys(l.query.pages)[0]].extract,p=l.query.pages[Object.keys(l.query.pages)[0]].fullurl;if(d.includes("may refer to:"))return t.window.showInformationMessage(`There are multiple articles under the term ${s}. Do you want to see all the possible articles in wikipedia inside your browser?`,{modal:!0},"Yes","No").then((e=>{"Yes"===e?t.env.openExternal(t.Uri.parse(p)):t.window.showInformationMessage("Okay, you can refine your text anytime and use the command again")})),!1;var c=e?.document.languageId;"markdown"===c?e?.edit((e=>{e.replace(r,`[${a(s)}](${p})`)})):"html"===c||"jinja"===c?e?.edit((e=>{e.replace(r,`<a href="${p}" title="${(0,n.escape)(d)}">${(0,n.escape)(s)}</a>`)})):t.window.showWarningMessage(`The current language (${c}) is not supported`,"Use HTML","Use Markdown","Cancel").then((t=>{"Use HTML"===t?e?.edit((e=>{e.replace(r,`<a href="${p}" title="${(0,n.escape)(d)}">${(0,n.escape)(s)}</a>`)})):"Use Markdown"===t&&e?.edit((e=>{e.replace(r,`[${a(s)}](${p})`)}))}))}catch(e){t.window.showErrorMessage("Request failed"),console.error(e)}}))}else t.window.showInformationMessage("No window is active")}));e.subscriptions.push(r)},e.deactivate=function(){};const t=r(398),n=r(948),o=r(368),a=r(28)})(),module.exports=s})();