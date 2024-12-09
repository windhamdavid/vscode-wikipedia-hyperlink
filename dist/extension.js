(()=>{var e={28:e=>{var r=[[/\*/g,"\\*","asterisks"],[/#/g,"\\#","number signs"],[/\//g,"\\/","slashes"],[/\(/g,"\\(","parentheses"],[/\)/g,"\\)","parentheses"],[/\[/g,"\\[","square brackets"],[/\]/g,"\\]","square brackets"],[/</g,"&lt;","angle brackets"],[/>/g,"&gt;","angle brackets"],[/_/g,"\\_","underscores"],[/`/g,"\\`","codeblocks"]];e.exports=function(e,t){return t=t||[],r.reduce((function(e,r){var s=r[2];return s&&-1!==t.indexOf(s)?e:e.replace(r[0],r[1])}),e)}},368:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.request=function(e,r={},t=""){const a=function(e={},r){if(null==e.headers)return r;switch(e.headers["Content-Type"]){case"application/json":return JSON.stringify(r);case"application/x-www-form-urlencoded":return o.stringify(r);default:return r}}(r,t);return null==r.headers&&(r.headers={}),new Promise(((t,o)=>{e instanceof s.URL||(e=new s.URL(e));const i=n.request(e,r,(e=>{const r=[];e.on("data",(e=>{r.push(e)})),e.on("end",(()=>{try{const{headers:s}=e,n=r.join("");t({headers:s,body:n})}catch(e){o(e)}})),e.on("error",(e=>{o(e)}))}));i.write(a),i.end()}))};const s=t(16),n=t(692),o=t(480)},398:e=>{"use strict";e.exports=require("vscode")},692:e=>{"use strict";e.exports=require("https")},480:e=>{"use strict";e.exports=require("querystring")},16:e=>{"use strict";e.exports=require("url")},948:(e,r)=>{"use strict";const{replace:t}="",s=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,n=/[&<>'"]/g,o={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},a=e=>o[e];r.escape=e=>t.call(e,n,a);const i={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},c=e=>i[e];r.unescape=e=>t.call(e,s,c)}},r={};function t(s){var n=r[s];if(void 0!==n)return n.exports;var o=r[s]={exports:{}};return e[s](o,o.exports,t),o.exports}var s={};(()=>{"use strict";var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=function(e){let t=r.commands.registerCommand("wikipedia-hyperlinker.addHyperlink",(()=>{var e=r.window.activeTextEditor;if(void 0!==e){const t=e.selection,s=e.document.getText(t);if(""===s.trim())return r.window.showErrorMessage("No text is selected"),!1;r.window.withProgress({location:r.ProgressLocation.Window,cancellable:!1,title:"Loading article from wikipedia..."},(async i=>{i.report({increment:0});try{const u=await(0,o.request)(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=info|extracts&exintro&explaintext&&inprop=url&redirects=1&titles=${encodeURIComponent(s)}`),l=JSON.parse(u.body);i.report({increment:100}),console.log(u);const p=l.query.pages[Object.keys(l.query.pages)[0]].extract,d=l.query.pages[Object.keys(l.query.pages)[0]].fullurl;if(p.includes("may refer to:"))return r.window.showInformationMessage(`There are multiple articles under the term ${s}. Do you want to see all the possible articles in wikipedia inside your browser?`,{modal:!0},"Yes","No").then((e=>{"Yes"===e?r.env.openExternal(r.Uri.parse(d)):r.window.showInformationMessage("Okay, you can refine your text anytime and use the command again")})),!1;var c=e?.document.languageId;"markdown"===c?e?.edit((e=>{e.replace(t,`[${a(s)}](${d})`)})):"html"===c||"jinja"===c?e?.edit((e=>{e.replace(t,`<a href="${d}" title="${(0,n.escape)(p)}">${(0,n.escape)(s)}</a>`)})):r.window.showWarningMessage(`The current language (${c}) is not supported`,"Use HTML","Use Markdown","Cancel").then((r=>{"Use HTML"===r?e?.edit((e=>{e.replace(t,`<a href="${d}" title="${(0,n.escape)(p)}">${(0,n.escape)(s)}</a>`)})):"Use Markdown"===r&&e?.edit((e=>{e.replace(t,`[${a(s)}](${d})`)}))}))}catch(e){r.window.showErrorMessage("Request failed"),console.error(e)}}))}else r.window.showInformationMessage("No window is active")}));e.subscriptions.push(t)},e.deactivate=function(){};const r=t(398),n=t(948),o=t(368),a=t(28)})(),module.exports=s})();