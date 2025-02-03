!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="4.0.3";(()=>{const n=document.createElement("div");n.id="sa11y-loading";const t=n.attachShadow({mode:"open"}),o=document.createElement("div");o.classList.add("loader"),o.innerHTML='\n<style>\n.loader {\n  height: 55px;\n  width: 55px;\n  background: linear-gradient(0deg, #e040fb, #00bcd4);\n  background-color: var(--sa11y-setting-switch-bg-off);\n  background-size: 150% 150%;\n  border-radius: 50%;\n  text-align: center;\n  vertical-align: middle;\n  bottom: 15px;\n  inset-inline-end: 18px;\n  position: fixed;\n  z-index: 9999;\n}\n</style>\n\n\x3c!-- Credit: https://codepen.io/aurer/pen/ZEJxpO --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="55px" height="55px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n  <path fill="#FFF" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">\n  <animateTransform attributeType="xml"\n    attributeName="transform"\n    type="rotate"\n    from="0 25 25"\n    to="360 25 25"\n    dur="1.2s"\n    repeatCount="indefinite"/>\n  </path>\n</svg>',t.appendChild(o),document.body.appendChild(n);const s=(document.documentElement.lang||"en").split("-");let i=s[0];const d=s[1]?s[1].toLowerCase():"";["bg","cs","da","de","el","en","es","et","fi","fr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt","ro","sl","sk","sv","tr","uk","ua","zh"].includes(i)?"pt"===i?i="br"===d?"ptBR":"ptPT":"uk"===i?i="ua":"en"===i&&(i="us"===d?"enUS":"en"):i="en",new Promise(((n,t)=>{const o=document.createElement("link");o.rel="stylesheet",o.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${e}/dist/css/sa11y.min.css`,o.onload=n,o.onerror=t,document.head.appendChild(o)})).then((()=>(n=>new Promise(((t,o)=>{const s=document.createElement("script");s.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${e}/dist/js/lang/${n}.umd.min.js,gh/ryersondmp/sa11y@${e}/dist/js/sa11y.umd.min.js`,s.onload=t,s.onerror=o,document.body.appendChild(s)})))(i))).then((()=>(e=>{const n=()=>{const n=`Sa11yLang${e.charAt(0).toUpperCase()+e.slice(1)}`;Sa11y.Lang.addI18n(window[n].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,exportResultsPlugin:!0,detectSPArouting:!0})};if(window.location.href.includes("https://360.articulate.com/review/content")){const e=document.querySelector("iframe.player"),t=e.getAttribute("src");e&&t?(document.getElementById("sa11y-loading").remove(),window.confirm("Press OK to be redirected to a page where you can check the accessibility of the content. The page will open in a new tab.")&&window.open(t,"_blank")):n()}else n(),document.getElementById("sa11y-loading").remove()})(i))).catch((e=>new Error("Error loading Sa11y:",e)))})()}));
