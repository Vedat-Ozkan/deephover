(()=>{"use strict";var t={},e={useTooltip:"true",translateSource:"auto",translateTarget:"En",tooltipFontSize:"14",tooltipWidth:"200"};function a(a){chrome.storage.local.get(Object.keys(e),(function(n){for(const a in e)n[a]?t[a]=n[a]:t[a]=e[a];void 0!==a&&a(t)}))}async function n(t,e){return await fetch(t+new URLSearchParams(e),{method:"POST"}).then((t=>t.json())).catch((t=>console.log(t)))}chrome.runtime.onMessage.addListener((function(e,o,s){return"translate"===e.type?async function(e,a){var o="",s={auth_key:"0db9a932-1ba0-2744-698a-7cc72f9665b3:fx",text:e.word,source_lang:t.translateSource,target_lang:e.translateTarget},r="",l={q:e.word};let c=await n("https://translate.googleapis.com/translate_a/t?client=dict-chrome-ex",{data:l});if(console.log(c),c&&(r=c.ld_result.srclangs[0].substr(0,2).toUpperCase()),r===s.source_lang||""===s.source_lang){const t=await n("https://api-free.deepl.com/v2/translate",{data:s});t?(t.translations&&(o+=res.translations[0].text),a({translatedText:o,lang:t.translations[0].detected_source_language})):a({translatedText:"",lang:"en"})}}(e,s):"saveSetting"===e.type?chrome.storage.local.set(e.options,(function(){t=e.options})):"loadSetting"===e.type&&a(s),!0})),a()})();