(()=>{var e,r,t={7927:()=>{window.onload=function(){var e=!1,r=!1;if(this.clickBtn=!1,this.document.addEventListener("click",(function(t){if("slide"===t.target.getAttribute("data-id")){var n=document.querySelector(".article"),o=document.querySelector(".content"),i=document.querySelector(".downPage"),c=document.querySelector(".loaded");screen.width>560&&(e?(document.querySelectorAll(".scroll").forEach((function(e){return e.style.transform="rotate(0)"})),o.style.top="0",n.style.position="absolute",n.style.top="30rem",c.style.overflow="hidden",i.style.position="relative",i.style.top="0",e=!1):(document.querySelectorAll(".scroll").forEach((function(e){return e.style.transform="rotate(180deg)"})),o.style.top="-30rem",n.style.position="relative",n.style.top="0",n.style.height="auto",c.style.overflow="auto",i.style.position="absolute",screen.width<801?i.style.top="23vh":i.style.top="12vh",i.style.right="0vh",e=!0))}if("desbtn"===t.target.className.split(" ")[1]){var a=t.target.className.split(" ")[0],d=document.querySelector("."+a),l=document.querySelector("."+a+" > div");r?(l.style.display="none",document.querySelectorAll(".content__gameProp > div").forEach((function(e){e.style.display="block"})),r=!r):(document.querySelectorAll(".content__gameProp > div").forEach((function(e){e.style.display="none"})),d.style.display="block",l.style.display="block",r=!r)}})),/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())){var t=document.querySelector(".tetris"),n=document.querySelector(".popup__p");document.querySelector(".downPage"),t.style.animation="none",n&&(n.style.animation="none"),document.querySelectorAll(".scroll").forEach((function(e){return e.style.animation="none"})),document.querySelectorAll(".letter-1").forEach((function(e){return e.classList.remove("letter-1")})),document.querySelectorAll(".letter-2").forEach((function(e){return e.classList.remove("letter-2")}))}}}},n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={exports:{}},i={id:e,module:r,factory:t[e],require:o};return o.i.forEach((function(e){e(i)})),r=i.module,i.factory.call(r.exports,r,r.exports,i.require),r.exports}o.m=t,o.c=n,o.i=[],o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"another."+o.h()+".hot-update.json",o.h=()=>"3ab3e84b78d115cc294f",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="rsclone:",o.l=(t,n,i)=>{if(e[t])e[t].push(n);else{var c,a;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var s=d[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+i){c=s;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+i),c.src=t),e[t]=[n];var u=(r,n)=>{c.onerror=c.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),a&&document.head.appendChild(c)}},(()=>{var e,r,t,n,i={},c=o.c,a=[],d=[],l="idle";function s(e){l=e;for(var r=0;r<d.length;r++)d[r].call(null,e)}function u(e){if(0===r.length)return e();var t=r;return r=[],Promise.all(t).then((function(){return u(e)}))}function f(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return s("check"),o.hmrM().then((function(n){if(!n)return s(m()?"ready":"idle"),null;s("prepare");var i=[];return r=[],t=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,r){return o.hmrC[r](n.c,n.r,n.m,e,t,i),e}),[])).then((function(){return u((function(){return e?h(e):(s("ready"),i)}))}))}))}function p(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=t.map((function(r){return r(e)}));t=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return s("abort"),Promise.resolve().then((function(){throw i[0]}));s("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var c=function(e){o||(o=e)},a=[];return r.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var t=0;t<r.length;t++)a.push(r[t])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):n?h(e).then((function(e){return a.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(s("idle"),Promise.resolve(a))}function m(){if(n)return t||(t=[]),Object.keys(o.hmrI).forEach((function(e){n.forEach((function(r){o.hmrI[e](r,t)}))})),n=void 0,!0}o.hmrD=i,o.i.push((function(h){var m,v,y,g=h.module,b=function(t,n){var o=c[n];if(!o)return t;var i=function(r){if(o.hot.active){if(c[r]){var i=c[r].parents;-1===i.indexOf(n)&&i.push(n)}else a=[n],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+n),a=[];return t(r)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&"e"!==f&&Object.defineProperty(i,f,d(f));return i.e=function(e){return function(e){switch(l){case"ready":return s("prepare"),r.push(e),u((function(){s("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(t.e(e))},i}(h.require,h.id);g.hot=(m=h.id,v=g,y={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==m,_requireSelf:function(){a=v.parents.slice(),e=m,o(m)},active:!0,accept:function(e,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=r||function(){};else y._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":t=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,t)})),s("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return l;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:i[m]},e=void 0,y),g.parents=a,g.children=[],a=[],h.require=b})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e,r,t,n,i={21:0},c={};function a(e){return new Promise(((r,t)=>{c[e]=r;var n=o.p+o.hu(e),i=new Error;o.l(n,(r=>{if(c[e]){c[e]=void 0;var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,t(i)}}))}))}function d(c){function a(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var i=n.pop(),c=i.id,a=i.chain,l=o.c[c];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var s=0;s<l.parents.length;s++){var u=l.parents[s],f=o.c[u];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([u]),moduleId:c,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[c]?(t[u]||(t[u]=[]),d(t[u],[c])):(delete t[u],r.push(u),n.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}o.f&&delete o.f.jsonpHmr,e=void 0;var l={},s=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(o.o(r,p)){var h,m=r[p],v=!1,y=!1,g=!1,b="";switch((h=m?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":c.onUnaccepted&&c.onUnaccepted(h),c.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":c.onAccepted&&c.onAccepted(h),y=!0;break;case"disposed":c.onDisposed&&c.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(p in u[p]=m,d(s,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(l[p]||(l[p]=[]),d(l[p],h.outdatedDependencies[p]));g&&(d(s,[h.moduleId]),u[p]=f)}r=void 0;for(var w,E=[],_=0;_<s.length;_++){var k=s[_];o.c[k]&&o.c[k].hot._selfAccepted&&u[k]!==f&&!o.c[k].hot._selfInvalidated&&E.push({module:k,require:o.c[k].hot._requireSelf,errorHandler:o.c[k].hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,n=s.slice();n.length>0;){var c=n.pop(),a=o.c[c];if(a){var d={},u=a.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,d);for(o.hmrD[c]=d,a.hot.active=!1,delete o.c[c],delete l[c],_=0;_<a.children.length;_++){var f=o.c[a.children[_]];f&&(e=f.parents.indexOf(c))>=0&&f.parents.splice(e,1)}}}for(var p in l)if(o.o(l,p)&&(a=o.c[p]))for(w=l[p],_=0;_<w.length;_++)r=w[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var t=0;t<n.length;t++)n[t](o);for(var i in l)if(o.o(l,i)){var a=o.c[i];if(a){w=l[i];for(var d=[],f=[],p=0;p<w.length;p++){var h=w[p],m=a.hot._acceptedDependencies[h];if(m){if(-1!==d.indexOf(m))continue;d.push(m),f.push(h)}}for(var v=0;v<d.length;v++)try{d[v].call(null,w)}catch(r){c.onErrored&&c.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[v],error:r}),c.ignoreErrored||e(r)}}}for(var y=0;y<E.length;y++){var g=E[y],b=g.module;try{g.require(b)}catch(r){if("function"==typeof g.errorHandler)try{g.errorHandler(r)}catch(t){c.onErrored&&c.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:t,originalError:r}),c.ignoreErrored||e(t),e(r)}else c.onErrored&&c.onErrored({type:"self-accept-errored",moduleId:b,error:r}),c.ignoreErrored||e(r)}}return s}}}self.webpackHotUpdatersclone=(e,t,i)=>{for(var a in t)o.o(t,a)&&(r[a]=t[a]);i&&n.push(i),c[e]&&(c[e](),c[e]=void 0)},o.hmrI.jsonp=function(e,i){r||(r={},n=[],t=[],i.push(d)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(c,l,s,u,f,p){f.push(d),e={},t=l,r=s.reduce((function(e,r){return e[r]=!1,e}),{}),n=[],c.forEach((function(r){o.o(i,r)&&void 0!==i[r]&&(u.push(a(r)),e[r]=!0)})),o.f&&(o.f.jsonpHmr=function(r,t){e&&!o.o(e,r)&&o.o(i,r)&&void 0!==i[r]&&(t.push(a(r)),e[r]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(7927)})();