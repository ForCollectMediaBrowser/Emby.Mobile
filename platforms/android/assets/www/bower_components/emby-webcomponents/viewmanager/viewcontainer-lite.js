define(["browser"],function(e){function n(){return L?e.tv?!1:!0:!1}function t(e){if(!e.cancel){u();var n=d(g),t=-1==n?null:g[n],o=n+1;o>=w&&(o=0);var s=document.createElement("div");s.classList.add("page-view"),e.type&&s.setAttribute("data-type",e.type),s.innerHTML=e.view;var f=g[o],c=f.querySelector(".page-view");return c?(v(c),f.replaceChild(s,c)):f.appendChild(s),p&&p(s,!1,e),i(g,o,n),a(f,t,e.transition,e.isBack).then(function(){return b=o,y[o]=e.url,!e.cancel&&t&&r(g,o),s})}}function i(e,n,t){for(var i=0,r=e.length;r>i;i++)n==i||t==i||e[i].classList.add("hide")}function r(e,n){for(var t=0,i=e.length;i>t;t++)n==t||e[t].classList.add("hide")}function a(e,t,i,r){if(n()&&e.animate){if("slide"==i)return s(e,t,i,r);if("fade"==i)return f(e,t,i,r)}return o(e,t,i,r)}function o(e){return e.classList.remove("hide"),Promise.resolve()}function s(e,n,t,i){var r={duration:450,iterations:1,easing:"ease-out",fill:"both"},a=[];if(n){var o=i?"100%":"-100%";a.push(n.animate([{transform:"none",offset:0},{transform:"translate3d("+o+", 0, 0)",offset:1}],r))}e.classList.remove("hide");var s=i?"-100%":"100%";return a.push(e.animate([{transform:"translate3d("+s+", 0, 0)",offset:0},{transform:"none",offset:1}],r)),P=a,new Promise(function(e){a[a.length-1].onfinish=e})}function f(e,n){var t={duration:200,iterations:1,easing:"ease-out",fill:"both"},i=[];return n&&i.push(n.animate([{opacity:1,offset:0},{opacity:0,offset:1}],t)),e.classList.remove("hide"),i.push(e.animate([{opacity:0,offset:0},{opacity:1,offset:1}],t)),P=i,new Promise(function(e){i[i.length-1].onfinish=e})}function u(){for(var e=P,n=0,t=e.length;t>n;n++)c(e[n])}function c(e){try{e.cancel()}catch(n){}}function l(e){p=e}function d(){return b}function m(e){var n=e.url,t=y.indexOf(n);if(-1!=t){var o=g[t],s=o.querySelector(".page-view");if(s){if(e.cancel)return;u();var f=g[t],c=d(g),l=-1==c?null:g[c];return p&&p(s,!0,e),i(g,t,c),a(f,l,e.transition,e.isBack).then(function(){return b=t,!e.cancel&&l&&r(g,t),s})}}return Promise.reject()}function v(e){e.dispatchEvent(new CustomEvent("viewdestroy",{}))}function h(){y=[]}var p,g=document.querySelectorAll(".mainAnimatedPage"),y=[],w=g.length,L=!0,b=-1,P=[];return n()&&!document.documentElement.animate&&require(["webAnimations"]),{loadView:t,tryRestoreView:m,reset:h,setOnBeforeChange:l}});