/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.19 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.1.19',
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttp://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI, normalizedBaseParts,
                baseParts = (baseName && baseName.split('/')),
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }

                trimDots(name);
                name = name.join('/');
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);

                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                                         normalize(name, parentName, applyMap) :
                                         name;
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                //Array splice in the values since the context code has a
                //local var ref to defQueue, so cannot just reassign the one
                //on context.
                apsp.apply(defQueue,
                           [defQueue.length, 0].concat(globalDefQueue));
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    this.fetch();
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                req.onResourceLoad(context, this.map, this.depMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            if (this.undefed) {
                                return;
                            }
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        } else if (this.events.error) {
                            // No direct errback on this module, but something
                            // else is listening for errors, so be sure to
                            // propagate the error correctly.
                            on(depMap, 'error', bind(this, function(err) {
                                this.emit('error', err);
                            }));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
                        args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? {name: pkgObj} : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        mod.undefed = true;
                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs ? url +
                                        ((url.indexOf('?') === -1 ? '?' : '&') +
                                         config.urlArgs) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    return onError(makeError('scripterror', 'Script error for: ' + data.id, evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url);
            }

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/jrburke/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/jrburke/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation that a build has been done so that
                //only one script needs to be loaded anyway. This may need to be
                //reevaluated if other use cases become common.
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one.
                if (!cfg.baseUrl) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, '')
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        (context ? context.defQueue : globalDefQueue).push([name, deps, callback]);
    };

    define.amd = {
        jQuery: true
    };

    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this));

/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function (e, t, n) { n(e.jQuery, e, t) })(this, document, function (e, t, n, r) { (function (e, t, r) { "$:nomunge"; function l(e) { return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1") } var i = "hashchange", s = n, o, u = e.event.special, a = s.documentMode, f = "on" + i in t && (a === r || a > 7); e.fn[i] = function (e) { return e ? this.bind(i, e) : this.trigger(i) }, e.fn[i].delay = 50, u[i] = e.extend(u[i], { setup: function () { if (f) return !1; e(o.start) }, teardown: function () { if (f) return !1; e(o.stop) } }), o = function () { function p() { var n = l(), r = h(u); n !== u ? (c(u = n, r), e(t).trigger(i)) : r !== u && (location.href = location.href.replace(/#.*/, "") + r), o = setTimeout(p, e.fn[i].delay) } var n = {}, o, u = l(), a = function (e) { return e }, c = a, h = a; return n.start = function () { o || p() }, n.stop = function () { o && clearTimeout(o), o = r }, t.attachEvent && !t.addEventListener && !f && function () { var t, r; n.start = function () { t || (r = e.fn[i].src, r = r && r + l(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () { r || c(l()), p() }).attr("src", r || "javascript:0").insertAfter("body")[0].contentWindow, s.onpropertychange = function () { try { event.propertyName === "title" && (t.document.title = s.title) } catch (e) { } }) }, n.stop = a, h = function () { return l(t.location.href) }, c = function (n, r) { var o = t.document, u = e.fn[i].domain; n !== r && (o.title = s.title, o.open(), u && o.write('<script>document.domain="' + u + '"</script>'), o.close(), t.location.hash = n) } }(), n }() })(e, this), function (e) { e.mobile = {} }(e), function (e, t, n) { e.extend(e.mobile, { version: "1.4.5", subPageUrlKey: "ui-page", hideUrlBar: !0, keepNative: ":jqmData(role='none'), :jqmData(role='nojs')", activePageClass: "ui-page-active", activeBtnClass: "ui-btn-active", focusClass: "ui-focus", ajaxEnabled: !0, hashListeningEnabled: !0, linkBindingEnabled: !0, defaultPageTransition: "fade", maxTransitionWidth: !1, minScrollBack: 0, defaultDialogTransition: "pop", pageLoadErrorMessage: "Error Loading Page", pageLoadErrorMessageTheme: "a", phonegapNavigationEnabled: !1, autoInitializePage: !0, pushStateEnabled: !0, ignoreContentEnabled: !1, buttonMarkup: { hoverDelay: 200 }, dynamicBaseEnabled: !0, pageContainer: e(), allowCrossDomainPages: !1, dialogHashKey: "&ui-state=dialog" }) }(e, this), function (e, t, n) { var r = {}, i = e.find, s = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, o = /:jqmData\(([^)]*)\)/g; e.extend(e.mobile, { ns: "", getAttribute: function (t, n) { var r; t = t.jquery ? t[0] : t, t && t.getAttribute && (r = t.getAttribute("data-" + e.mobile.ns + n)); try { r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : s.test(r) ? JSON.parse(r) : r } catch (i) { } return r }, nsNormalizeDict: r, nsNormalize: function (t) { return r[t] || (r[t] = e.camelCase(e.mobile.ns + t)) }, closestPageData: function (e) { return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page") } }), e.fn.jqmData = function (t, r) { var i; return typeof t != "undefined" && (t && (t = e.mobile.nsNormalize(t)), arguments.length < 2 || r === n ? i = this.data(t) : i = this.data(t, r)), i }, e.jqmData = function (t, n, r) { var i; return typeof n != "undefined" && (i = e.data(t, n ? e.mobile.nsNormalize(n) : n, r)), i }, e.fn.jqmRemoveData = function (t) { return this.removeData(e.mobile.nsNormalize(t)) }, e.jqmRemoveData = function (t, n) { return e.removeData(t, e.mobile.nsNormalize(n)) }, e.find = function (t, n, r, s) { return t.indexOf(":jqmData") > -1 && (t = t.replace(o, "[data-" + (e.mobile.ns || "") + "$1]")), i.call(this, t, n, r, s) }, e.extend(e.find, i) }(e, this), function (e, t) { function s(t, n) { var r, i, s, u = t.nodeName.toLowerCase(); return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (s = e("img[usemap=#" + i + "]")[0], !!s && o(s))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && o(t) } function o(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () { return e.css(this, "visibility") === "hidden" }).length } var r = 0, i = /^ui-id-\d+$/; e.ui = e.ui || {}, e.extend(e.ui, { version: "c0ab71056b936627e8a7821f03c044aec6280a40", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ focus: function (t) { return function (n, r) { return typeof n == "number" ? this.each(function () { var t = this; setTimeout(function () { e(t).focus(), r && r.call(t) }, n) }) : t.apply(this, arguments) } }(e.fn.focus), scrollParent: function () { var t; return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () { return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0) : t = this.parents().filter(function () { return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(this[0].ownerDocument || n) : t }, uniqueId: function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++r) }) }, removeUniqueId: function () { return this.each(function () { i.test(this.id) && e(this).removeAttr("id") }) } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) { return function (n) { return !!e.data(n, t) } }) : function (t, n, r) { return !!e.data(t, r[3]) }, focusable: function (t) { return s(t, !isNaN(e.attr(t, "tabindex"))) }, tabbable: function (t) { var n = e.attr(t, "tabindex"), r = isNaN(n); return (r || n >= 0) && s(t, !r) } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) { function u(t, n, r, s) { return e.each(i, function () { n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0) }), n } var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], s = r.toLowerCase(), o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight }; e.fn["inner" + r] = function (n) { return n === t ? o["inner" + r].call(this) : this.each(function () { e(this).css(s, u(this, n) + "px") }) }, e.fn["outer" + r] = function (t, n) { return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () { e(this).css(s, u(this, t, !0, n) + "px") }) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(e == null ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) { return function (n) { return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in n.createElement("div"), e.fn.extend({ disableSelection: function () { return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) { e.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") }, zIndex: function (r) { if (r !== t) return this.css("zIndex", r); if (this.length) { var i = e(this[0]), s, o; while (i.length && i[0] !== n) { s = i.css("position"); if (s === "absolute" || s === "relative" || s === "fixed") { o = parseInt(i.css("zIndex"), 10); if (!isNaN(o) && o !== 0) return o } i = i.parent() } } return 0 } }), e.ui.plugin = { add: function (t, n, r) { var i, s = e.ui[t].prototype; for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]]) }, call: function (e, t, n, r) { var i, s = e.plugins[t]; if (!s) return; if (!r && (!e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)) return; for (i = 0; i < s.length; i++) e.options[s[i][0]] && s[i][1].apply(e.element, n) } } }(e), function (e, t, r) { var i = function (t, n) { var r = t.parent(), i = [], s = function () { var t = e(this), n = e.mobile.toolbar && t.data("mobile-toolbar") ? t.toolbar("option") : { position: t.attr("data-" + e.mobile.ns + "position"), updatePagePadding: t.attr("data-" + e.mobile.ns + "update-page-padding") !== !1 }; return n.position !== "fixed" || n.updatePagePadding !== !0 }, o = r.children(":jqmData(role='header')").filter(s), u = t.children(":jqmData(role='header')"), a = r.children(":jqmData(role='footer')").filter(s), f = t.children(":jqmData(role='footer')"); return u.length === 0 && o.length > 0 && (i = i.concat(o.toArray())), f.length === 0 && a.length > 0 && (i = i.concat(a.toArray())), e.each(i, function (t, r) { n -= e(r).outerHeight() }), Math.max(0, n) }; e.extend(e.mobile, { window: e(t), document: e(n), keyCode: e.ui.keyCode, behaviors: {}, silentScroll: function (n) { e.type(n) !== "number" && (n = e.mobile.defaultHomeScroll), e.event.special.scrollstart.enabled = !1, setTimeout(function () { t.scrollTo(0, n), e.mobile.document.trigger("silentscroll", { x: 0, y: n }) }, 20), setTimeout(function () { e.event.special.scrollstart.enabled = !0 }, 150) }, getClosestBaseUrl: function (t) { var n = e(t).closest(".ui-page").jqmData("url"), r = e.mobile.path.documentBase.hrefNoHash; if (!e.mobile.dynamicBaseEnabled || !n || !e.mobile.path.isPath(n)) n = r; return e.mobile.path.makeUrlAbsolute(n, r) }, removeActiveLinkClass: function (t) { !!e.mobile.activeClickedLink && (!e.mobile.activeClickedLink.closest("." + e.mobile.activePageClass).length || t) && e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass), e.mobile.activeClickedLink = null }, getInheritedTheme: function (e, t) { var n = e[0], r = "", i = /ui-(bar|body|overlay)-([a-z])\b/, s, o; while (n) { s = n.className || ""; if (s && (o = i.exec(s)) && (r = o[2])) break; n = n.parentNode } return r || t || "a" }, enhanceable: function (e) { return this.haveParents(e, "enhance") }, hijackable: function (e) { return this.haveParents(e, "ajax") }, haveParents: function (t, n) { if (!e.mobile.ignoreContentEnabled) return t; var r = t.length, i = e(), s, o, u, a, f; for (a = 0; a < r; a++) { o = t.eq(a), u = !1, s = t[a]; while (s) { f = s.getAttribute ? s.getAttribute("data-" + e.mobile.ns + n) : ""; if (f === "false") { u = !0; break } s = s.parentNode } u || (i = i.add(o)) } return i }, getScreenHeight: function () { return t.innerHeight || e.mobile.window.height() }, resetActivePageHeight: function (t) { var n = e("." + e.mobile.activePageClass), r = n.height(), s = n.outerHeight(!0); t = i(n, typeof t == "number" ? t : e.mobile.getScreenHeight()), n.css("min-height", ""), n.height() < t && n.css("min-height", t - (s - r)) }, loading: function () { var t = this.loading._widget || e(e.mobile.loader.prototype.defaultHtml).loader(), n = t.loader.apply(t, arguments); return this.loading._widget = t, n } }), e.addDependents = function (t, n) { var r = e(t), i = r.jqmData("dependents") || e(); r.jqmData("dependents", e(i).add(n)) }, e.fn.extend({ removeWithDependents: function () { e.removeWithDependents(this) }, enhanceWithin: function () { var t, n = {}, r = e.mobile.page.prototype.keepNativeSelector(), i = this; e.mobile.nojs && e.mobile.nojs(this), e.mobile.links && e.mobile.links(this), e.mobile.degradeInputsWithin && e.mobile.degradeInputsWithin(this), e.fn.buttonMarkup && this.find(e.fn.buttonMarkup.initSelector).not(r).jqmEnhanceable().buttonMarkup(), e.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(r).jqmEnhanceable().fieldcontain(), e.each(e.mobile.widgets, function (t, s) { if (s.initSelector) { var o = e.mobile.enhanceable(i.find(s.initSelector)); o.length > 0 && (o = o.not(r)), o.length > 0 && (n[s.prototype.widgetName] = o) } }); for (t in n) n[t][t](); return this }, addDependents: function (t) { e.addDependents(this, t) }, getEncodedText: function () { return e("<a>").text(this.text()).html() }, jqmEnhanceable: function () { return e.mobile.enhanceable(this) }, jqmHijackable: function () { return e.mobile.hijackable(this) } }), e.removeWithDependents = function (t) { var n = e(t); (n.jqmData("dependents") || e()).remove(), n.remove() }, e.addDependents = function (t, n) { var r = e(t), i = r.jqmData("dependents") || e(); r.jqmData("dependents", e(i).add(n)) }, e.find.matches = function (t, n) { return e.find(t, null, null, n) }, e.find.matchesSelector = function (t, n) { return e.find(n, null, null, [t]).length > 0 } }(e, this), function (e, r) { t.matchMedia = t.matchMedia || function (e, t) { var n, r = e.documentElement, i = r.firstElementChild || r.firstChild, s = e.createElement("body"), o = e.createElement("div"); return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", s.style.background = "none", s.appendChild(o), function (e) { return o.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', r.insertBefore(s, i), n = o.offsetWidth === 42, r.removeChild(s), { matches: n, media: e } } }(n), e.mobile.media = function (e) { return t.matchMedia(e).matches } }(e), function (e, t) { var r = { touch: "ontouchend" in n }; e.mobile.support = e.mobile.support || {}, e.extend(e.support, r), e.extend(e.mobile.support, r) }(e), function (e, n) { e.extend(e.support, { orientation: "orientation" in t && "onorientationchange" in t }) }(e), function (e, r) { function i(e) { var t = e.charAt(0).toUpperCase() + e.substr(1), n = (e + " " + u.join(t + " ") + t).split(" "), i; for (i in n) if (o[n[i]] !== r) return !0 } function h() { var n = t, r = !!n.document.createElementNS && !!n.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect && (!n.opera || navigator.userAgent.indexOf("Chrome") !== -1), i = function (t) { (!t || !r) && e("html").addClass("ui-nosvg") }, s = new n.Image; s.onerror = function () { i(!1) }, s.onload = function () { i(s.width === 1 && s.height === 1) }, s.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" } function p() { var i = "transform-3d", o = e.mobile.media("(-" + u.join("-" + i + "),(-") + "-" + i + "),(" + i + ")"), a, f, l; if (o) return !!o; a = n.createElement("div"), f = { MozTransform: "-moz-transform", transform: "transform" }, s.append(a); for (l in f) a.style[l] !== r && (a.style[l] = "translate3d( 100px, 1px, 1px )", o = t.getComputedStyle(a).getPropertyValue(f[l])); return !!o && o !== "none" } function d() { var t = location.protocol + "//" + location.host + location.pathname + "ui-dir/", n = e("head base"), r = null, i = "", o, u; return n.length ? i = n.attr("href") : n = r = e("<base>", { href: t }).appendTo("head"), o = e("<a href='testurl' />").prependTo(s), u = o[0].href, n[0].href = i || location.pathname, r && r.remove(), u.indexOf(t) === 0 } function v() { var e = n.createElement("x"), r = n.documentElement, i = t.getComputedStyle, s; return "pointerEvents" in e.style ? (e.style.pointerEvents = "auto", e.style.pointerEvents = "x", r.appendChild(e), s = i && i(e, "").pointerEvents === "auto", r.removeChild(e), !!s) : !1 } function m() { var e = n.createElement("div"); return typeof e.getBoundingClientRect != "undefined" } function g() { var e = t, n = navigator.userAgent, r = navigator.platform, i = n.match(/AppleWebKit\/([0-9]+)/), s = !!i && i[1], o = n.match(/Fennec\/([0-9]+)/), u = !!o && o[1], a = n.match(/Opera Mobi\/([0-9]+)/), f = !!a && a[1]; return (r.indexOf("iPhone") > -1 || r.indexOf("iPad") > -1 || r.indexOf("iPod") > -1) && s && s < 534 || e.operamini && {}.toString.call(e.operamini) === "[object OperaMini]" || a && f < 7458 || n.indexOf("Android") > -1 && s && s < 533 || u && u < 6 || "palmGetResource" in t && s && s < 534 || n.indexOf("MeeGo") > -1 && n.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0 } var s = e("<body>").prependTo("html"), o = s[0].style, u = ["Webkit", "Moz", "O"], a = "palmGetResource" in t, f = t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]", l = t.blackberry && !i("-webkit-transform"), c; e.extend(e.mobile, { browser: {} }), e.mobile.browser.oldIE = function () { var e = 3, t = n.createElement("div"), r = t.all || []; do t.innerHTML = "<!--[if gt IE " + ++e + "]><br><![endif]-->"; while (r[0]); return e > 4 ? e : !e }(), e.extend(e.support, { pushState: "pushState" in history && "replaceState" in history && !(t.navigator.userAgent.indexOf("Firefox") >= 0 && t.top !== t) && t.navigator.userAgent.search(/CriOS/) === -1, mediaquery: e.mobile.media("only all"), cssPseudoElement: !!i("content"), touchOverflow: !!i("overflowScrolling"), cssTransform3d: p(), boxShadow: !!i("boxShadow") && !l, fixedPosition: g(), scrollTop: ("pageXOffset" in t || "scrollTop" in n.documentElement || "scrollTop" in s[0]) && !a && !f, dynamicBaseTag: d(), cssPointerEvents: v(), boundingRect: m(), inlineSVG: h }), s.remove(), c = function () { var e = t.navigator.userAgent; return e.indexOf("Nokia") > -1 && (e.indexOf("Symbian/3") > -1 || e.indexOf("Series60/5") > -1) && e.indexOf("AppleWebKit") > -1 && e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/) }(), e.mobile.gradeA = function () { return (e.support.mediaquery && e.support.cssPseudoElement || e.mobile.browser.oldIE && e.mobile.browser.oldIE >= 8) && (e.support.boundingRect || e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/) !== null) }, e.mobile.ajaxBlacklist = t.blackberry && !t.WebKitPoint || f || c, c && e(function () { e("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet") }), e.support.boxShadow || e("html").addClass("ui-noboxshadow") }(e), function (e, t) { var n = e.mobile.window, r, i = function () { }; e.event.special.beforenavigate = { setup: function () { n.on("navigate", i) }, teardown: function () { n.off("navigate", i) } }, e.event.special.navigate = r = { bound: !1, pushStateEnabled: !0, originalEventName: t, isPushStateEnabled: function () { return e.support.pushState && e.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled() }, isHashChangeEnabled: function () { return e.mobile.hashListeningEnabled === !0 }, popstate: function (t) { var r = new e.Event("navigate"), i = new e.Event("beforenavigate"), s = t.originalEvent.state || {}; i.originalEvent = t, n.trigger(i); if (i.isDefaultPrevented()) return; t.historyState && e.extend(s, t.historyState), r.originalEvent = t, setTimeout(function () { n.trigger(r, { state: s }) }, 0) }, hashchange: function (t) { var r = new e.Event("navigate"), i = new e.Event("beforenavigate"); i.originalEvent = t, n.trigger(i); if (i.isDefaultPrevented()) return; r.originalEvent = t, n.trigger(r, { state: t.hashchangeState || {} }) }, setup: function () { if (r.bound) return; r.bound = !0, r.isPushStateEnabled() ? (r.originalEventName = "popstate", n.bind("popstate.navigate", r.popstate)) : r.isHashChangeEnabled() && (r.originalEventName = "hashchange", n.bind("hashchange.navigate", r.hashchange)) } } }(e), function (e) { e.event.special.throttledresize = { setup: function () { e(this).bind("resize", n) }, teardown: function () { e(this).unbind("resize", n) } }; var t = 250, n = function () { s = (new Date).getTime(), o = s - r, o >= t ? (r = s, e(this).trigger("throttledresize")) : (i && clearTimeout(i), i = setTimeout(n, t - o)) }, r = 0, i, s, o }(e), function (e, t) { function p() { var e = s(); e !== o && (o = e, r.trigger(i)) } var r = e(t), i = "orientationchange", s, o, u, a, f = { 0: !0, 180: !0 }, l, c, h; if (e.support.orientation) { l = t.innerWidth || r.width(), c = t.innerHeight || r.height(), h = 50, u = l > c && l - c > h, a = f[t.orientation]; if (u && a || !u && !a) f = { "-90": !0, 90: !0 } } e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, { setup: function () { if (e.support.orientation && !e.event.special.orientationchange.disabled) return !1; o = s(), r.bind("throttledresize", p) }, teardown: function () { if (e.support.orientation && !e.event.special.orientationchange.disabled) return !1; r.unbind("throttledresize", p) }, add: function (e) { var t = e.handler; e.handler = function (e) { return e.orientation = s(), t.apply(this, arguments) } } }), e.event.special.orientationchange.orientation = s = function () { var r = !0, i = n.documentElement; return e.support.orientation ? r = f[t.orientation] : r = i && i.clientWidth / i.clientHeight < 1.1, r ? "portrait" : "landscape" }, e.fn[i] = function (e) { return e ? this.bind(i, e) : this.trigger(i) }, e.attrFn && (e.attrFn[i] = !0) }(e, this), function (e, t, n, r) { function T(e) { while (e && typeof e.originalEvent != "undefined") e = e.originalEvent; return e } function N(t, n) { var i = t.type, s, o, a, l, c, h, p, d, v; t = e.Event(t), t.type = n, s = t.originalEvent, o = e.event.props, i.search(/^(mouse|click)/) > -1 && (o = f); if (s) for (p = o.length, l; p;) l = o[--p], t[l] = s[l]; i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1); if (i.search(/^touch/) !== -1) { a = T(s), i = a.touches, c = a.changedTouches, h = i && i.length ? i[0] : c && c.length ? c[0] : r; if (h) for (d = 0, v = u.length; d < v; d++) l = u[d], t[l] = h[l] } return t } function C(t) { var n = {}, r, s; while (t) { r = e.data(t, i); for (s in r) r[s] && (n[s] = n.hasVirtualBinding = !0); t = t.parentNode } return n } function k(t, n) { var r; while (t) { r = e.data(t, i); if (r && (!n || r[n])) return t; t = t.parentNode } return null } function L() { g = !1 } function A() { g = !0 } function O() { E = 0, v.length = 0, m = !1, A() } function M() { L() } function _() { D(), c = setTimeout(function () { c = 0, O() }, e.vmouse.resetTimerDuration) } function D() { c && (clearTimeout(c), c = 0) } function P(t, n, r) { var i; if (r && r[t] || !r && k(n.target, t)) i = N(n, t), e(n.target).trigger(i); return i } function H(t) { var n = e.data(t.target, s), r; !m && (!E || E !== n) && (r = P("v" + t.type, t), r && (r.isDefaultPrevented() && t.preventDefault(), r.isPropagationStopped() && t.stopPropagation(), r.isImmediatePropagationStopped() && t.stopImmediatePropagation())) } function B(t) { var n = T(t).touches, r, i, o; n && n.length === 1 && (r = t.target, i = C(r), i.hasVirtualBinding && (E = w++, e.data(r, s, E), D(), M(), d = !1, o = T(t).touches[0], h = o.pageX, p = o.pageY, P("vmouseover", t, i), P("vmousedown", t, i))) } function j(e) { if (g) return; d || P("vmousecancel", e, C(e.target)), d = !0, _() } function F(t) { if (g) return; var n = T(t).touches[0], r = d, i = e.vmouse.moveDistanceThreshold, s = C(t.target); d = d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i, d && !r && P("vmousecancel", t, s), P("vmousemove", t, s), _() } function I(e) { if (g) return; A(); var t = C(e.target), n, r; P("vmouseup", e, t), d || (n = P("vclick", e, t), n && n.isDefaultPrevented() && (r = T(e).changedTouches[0], v.push({ touchID: E, x: r.clientX, y: r.clientY }), m = !0)), P("vmouseout", e, t), d = !1, _() } function q(t) { var n = e.data(t, i), r; if (n) for (r in n) if (n[r]) return !0; return !1 } function R() { } function U(t) { var n = t.substr(1); return { setup: function () { q(this) || e.data(this, i, {}); var r = e.data(this, i); r[t] = !0, l[t] = (l[t] || 0) + 1, l[t] === 1 && b.bind(n, H), e(this).bind(n, R), y && (l.touchstart = (l.touchstart || 0) + 1, l.touchstart === 1 && b.bind("touchstart", B).bind("touchend", I).bind("touchmove", F).bind("scroll", j)) }, teardown: function () { --l[t], l[t] || b.unbind(n, H), y && (--l.touchstart, l.touchstart || b.unbind("touchstart", B).unbind("touchmove", F).unbind("touchend", I).unbind("scroll", j)); var r = e(this), s = e.data(this, i); s && (s[t] = !1), r.unbind(n, R), q(this) || r.removeData(i) } } } var i = "virtualMouseBindings", s = "virtualTouchID", o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), u = "clientX clientY pageX pageY screenX screenY".split(" "), a = e.event.mouseHooks ? e.event.mouseHooks.props : [], f = e.event.props.concat(a), l = {}, c = 0, h = 0, p = 0, d = !1, v = [], m = !1, g = !1, y = "addEventListener" in n, b = e(n), w = 1, E = 0, S, x; e.vmouse = { moveDistanceThreshold: 10, clickDistanceThreshold: 10, resetTimerDuration: 1500 }; for (x = 0; x < o.length; x++) e.event.special[o[x]] = U(o[x]); y && n.addEventListener("click", function (t) { var n = v.length, r = t.target, i, o, u, a, f, l; if (n) { i = t.clientX, o = t.clientY, S = e.vmouse.clickDistanceThreshold, u = r; while (u) { for (a = 0; a < n; a++) { f = v[a], l = 0; if (u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.data(u, s) === f.touchID) { t.preventDefault(), t.stopPropagation(); return } } u = u.parentNode } } }, !0) }(e, t, n), function (e, t, r) { function l(t, n, i, s) { var o = i.type; i.type = n, s ? e.event.trigger(i, r, t) : e.event.dispatch.call(t, i), i.type = o } var i = e(n), s = e.mobile.support.touch, o = "touchmove scroll", u = s ? "touchstart" : "mousedown", a = s ? "touchend" : "mouseup", f = s ? "touchmove" : "mousemove"; e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (t, n) { e.fn[n] = function (e) { return e ? this.bind(n, e) : this.trigger(n) }, e.attrFn && (e.attrFn[n] = !0) }), e.event.special.scrollstart = { enabled: !0, setup: function () { function s(e, n) { r = n, l(t, r ? "scrollstart" : "scrollstop", e) } var t = this, n = e(t), r, i; n.bind(o, function (t) { if (!e.event.special.scrollstart.enabled) return; r || s(t, !0), clearTimeout(i), i = setTimeout(function () { s(t, !1) }, 50) }) }, teardown: function () { e(this).unbind(o) } }, e.event.special.tap = { tapholdThreshold: 750, emitTapOnTaphold: !0, setup: function () { var t = this, n = e(t), r = !1; n.bind("vmousedown", function (s) { function a() { clearTimeout(u) } function f() { a(), n.unbind("vclick", c).unbind("vmouseup", a), i.unbind("vmousecancel", f) } function c(e) { f(), !r && o === e.target ? l(t, "tap", e) : r && e.preventDefault() } r = !1; if (s.which && s.which !== 1) return !1; var o = s.target, u; n.bind("vmouseup", a).bind("vclick", c), i.bind("vmousecancel", f), u = setTimeout(function () { e.event.special.tap.emitTapOnTaphold || (r = !0), l(t, "taphold", e.Event("taphold", { target: o })) }, e.event.special.tap.tapholdThreshold) }) }, teardown: function () { e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), i.unbind("vmousecancel") } }, e.event.special.swipe = { scrollSupressionThreshold: 30, durationThreshold: 1e3, horizontalDistanceThreshold: 30, verticalDistanceThreshold: 30, getLocation: function (e) { var n = t.pageXOffset, r = t.pageYOffset, i = e.clientX, s = e.clientY; if (e.pageY === 0 && Math.floor(s) > Math.floor(e.pageY) || e.pageX === 0 && Math.floor(i) > Math.floor(e.pageX)) i -= n, s -= r; else if (s < e.pageY - r || i < e.pageX - n) i = e.pageX - n, s = e.pageY - r; return { x: i, y: s } }, start: function (t) { var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t, r = e.event.special.swipe.getLocation(n); return { time: (new Date).getTime(), coords: [r.x, r.y], origin: e(t.target) } }, stop: function (t) { var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t, r = e.event.special.swipe.getLocation(n); return { time: (new Date).getTime(), coords: [r.x, r.y] } }, handleSwipe: function (t, n, r, i) { if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) { var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight"; return l(r, "swipe", e.Event("swipe", { target: i, swipestart: t, swipestop: n }), !0), l(r, s, e.Event(s, { target: i, swipestart: t, swipestop: n }), !0), !0 } return !1 }, eventInProgress: !1, setup: function () { var t, n = this, r = e(n), s = {}; t = e.data(this, "mobile-events"), t || (t = { length: 0 }, e.data(this, "mobile-events", t)), t.length++, t.swipe = s, s.start = function (t) { if (e.event.special.swipe.eventInProgress) return; e.event.special.swipe.eventInProgress = !0; var r, o = e.event.special.swipe.start(t), u = t.target, l = !1; s.move = function (t) { if (!o || t.isDefaultPrevented()) return; r = e.event.special.swipe.stop(t), l || (l = e.event.special.swipe.handleSwipe(o, r, n, u), l && (e.event.special.swipe.eventInProgress = !1)), Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault() }, s.stop = function () { l = !0, e.event.special.swipe.eventInProgress = !1, i.off(f, s.move), s.move = null }, i.on(f, s.move).one(a, s.stop) }, r.on(u, s.start) }, teardown: function () { var t, n; t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, t.length--, t.length === 0 && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(u, n.start), n.move && i.off(f, n.move), n.stop && i.off(a, n.stop)) } }, e.each({ scrollstop: "scrollstart", taphold: "tap", swipeleft: "swipe.left", swiperight: "swipe.right" }, function (t, n) { e.event.special[t] = { setup: function () { e(this).bind(n, e.noop) }, teardown: function () { e(this).unbind(n) } } }) }(e, this), function (e, t) { var r = { animation: {}, transition: {} }, i = n.createElement("a"), s = ["", "webkit-", "moz-", "o-"]; e.each(["animation", "transition"], function (n, o) { var u = n === 0 ? o + "-" + "name" : o; e.each(s, function (n, s) { if (i.style[e.camelCase(s + u)] !== t) return r[o].prefix = s, !1 }), r[o].duration = e.camelCase(r[o].prefix + o + "-" + "duration"), r[o].event = e.camelCase(r[o].prefix + o + "-" + "end"), r[o].prefix === "" && (r[o].event = r[o].event.toLowerCase()) }), e.support.cssTransitions = r.transition.prefix !== t, e.support.cssAnimations = r.animation.prefix !== t, e(i).remove(), e.fn.animationComplete = function (i, s, o) { var u, a, f = this, l = function () { clearTimeout(u), i.apply(this, arguments) }, c = !s || s === "animation" ? "animation" : "transition"; if (e.support.cssTransitions && c === "transition" || e.support.cssAnimations && c === "animation") { if (o === t) { e(this).context !== n && (a = parseFloat(e(this).css(r[c].duration)) * 3e3); if (a === 0 || a === t || isNaN(a)) a = e.fn.animationComplete.defaultDuration } return u = setTimeout(function () { e(f).off(r[c].event, l), i.apply(f) }, a), e(this).one(r[c].event, l) } return setTimeout(e.proxy(i, this), 0), e(this) }, e.fn.animationComplete.defaultDuration = 1e3 }(e), function (e, t) { function s(e, t) { var n = t ? t : []; return n.push("ui-btn"), e.theme && n.push("ui-btn-" + e.theme), e.icon && (n = n.concat(["ui-icon-" + e.icon, "ui-btn-icon-" + e.iconpos]), e.iconshadow && n.push("ui-shadow-icon")), e.inline && n.push("ui-btn-inline"), e.shadow && n.push("ui-shadow"), e.corners && n.push("ui-corner-all"), e.mini && n.push("ui-mini"), n } function o(e) { var r, i, s, o = !1, u = !0, a = { icon: "", inline: !1, shadow: !1, corners: !1, iconshadow: !1, mini: !1 }, f = []; e = e.split(" "); for (r = 0; r < e.length; r++) s = !0, i = n[e[r]], i !== t ? (s = !1, a[i] = !0) : e[r].indexOf("ui-btn-icon-") === 0 ? (s = !1, u = !1, a.iconpos = e[r].substring(12)) : e[r].indexOf("ui-icon-") === 0 ? (s = !1, a.icon = e[r].substring(8)) : e[r].indexOf("ui-btn-") === 0 && e[r].length === 8 ? (s = !1, a.theme = e[r].substring(7)) : e[r] === "ui-btn" && (s = !1, o = !0), s && f.push(e[r]); return u && (a.icon = ""), { options: a, unknownClasses: f, alreadyEnhanced: o } } function u(e) { return "-" + e.toLowerCase() } var n = { "ui-shadow": "shadow", "ui-corner-all": "corners", "ui-btn-inline": "inline", "ui-shadow-icon": "iconshadow", "ui-mini": "mini" }, r = function () { var n = e.mobile.getAttribute.apply(this, arguments); return n == null ? t : n }, i = /[A-Z]/g; e.fn.buttonMarkup = function (n, a) { var f, l, c, h, p, d = e.fn.buttonMarkup.defaults; for (f = 0; f < this.length; f++) { c = this[f], l = a ? { alreadyEnhanced: !1, unknownClasses: [] } : o(c.className), h = e.extend({}, l.alreadyEnhanced ? l.options : {}, n); if (!l.alreadyEnhanced) for (p in d) h[p] === t && (h[p] = r(c, p.replace(i, u))); c.className = s(e.extend({}, d, h), l.unknownClasses).join(" "), c.tagName.toLowerCase() !== "button" && c.setAttribute("role", "button") } return this }, e.fn.buttonMarkup.defaults = { icon: "", iconpos: "left", theme: null, inline: !1, shadow: !0, corners: !0, iconshadow: !1, mini: !1 }, e.extend(e.fn.buttonMarkup, { initSelector: "a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button:not(:jqmData(role='navbar') button)" }) }(e), function (e, t) { var n = 0, r = Array.prototype.slice, i = e.cleanData; e.cleanData = function (t) { for (var n = 0, r; (r = t[n]) != null; n++) try { e(r).triggerHandler("remove") } catch (s) { } i(t) }, e.widget = function (t, n, r) { var i, s, o, u, a = {}, f = t.split(".")[0]; return t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function (t) { return !!e.data(t, i) }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function (e, t) { if (!this._createWidget) return new o(e, t); arguments.length && this._createWidget(e, t) }, e.extend(o, s, { version: r.version, _proto: e.extend({}, r), _childConstructors: [] }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function (t, r) { if (!e.isFunction(r)) { a[t] = r; return } a[t] = function () { var e = function () { return n.prototype[t].apply(this, arguments) }, i = function (e) { return n.prototype[t].apply(this, e) }; return function () { var t = this._super, n = this._superApply, s; return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s } }() }), o.prototype = e.widget.extend(u, { widgetEventPrefix: s ? u.widgetEventPrefix || t : t }, a, { constructor: o, namespace: f, widgetName: t, widgetFullName: i }), s ? (e.each(s._childConstructors, function (t, n) { var r = n.prototype; e.widget(r.namespace + "." + r.widgetName, o, n._proto) }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o), o }, e.widget.extend = function (n) { var i = r.call(arguments, 1), s = 0, o = i.length, u, a; for (; s < o; s++) for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a); return n }, e.widget.bridge = function (n, i) { var s = i.prototype.widgetFullName || n; e.fn[n] = function (o) { var u = typeof o == "string", a = r.call(arguments, 1), f = this; return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function () { var r, i = e.data(this, s); if (o === "instance") return f = i, !1; if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'"); if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance"); r = i[o].apply(i, a); if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1 }) : this.each(function () { var t = e.data(this, s); t ? t.option(o || {})._init() : e.data(this, s, new i(o, this)) }), f } }, e.Widget = function () { }, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (t, r) { r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, { remove: function (e) { e.target === r && this.destroy() } }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") }, _destroy: e.noop, widget: function () { return this.element }, option: function (n, r) { var i = n, s, o, u; if (arguments.length === 0) return e.widget.extend({}, this.options); if (typeof n == "string") { i = {}, s = n.split("."), n = s.shift(); if (s.length) { o = i[n] = e.widget.extend({}, this.options[n]); for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]]; n = s.pop(); if (r === t) return o[n] === t ? null : o[n]; o[n] = r } else { if (r === t) return this.options[n] === t ? null : this.options[n]; i[n] = r } } return this._setOptions(i), this }, _setOptions: function (e) { var t; for (t in e) this._setOption(t, e[t]); return this }, _setOption: function (e, t) { return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this }, enable: function () { return this._setOptions({ disabled: !1 }) }, disable: function () { return this._setOptions({ disabled: !0 }) }, _on: function (t, n, r) { var i, s = this; typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function (r, o) { function u() { if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return; return (typeof o == "string" ? s[o] : o).apply(s, arguments) } typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++); var a = r.match(/^(\w+)\s*(.*)$/), f = a[1] + s.eventNamespace, l = a[2]; l ? i.delegate(l, f, u) : n.bind(f, u) }) }, _off: function (e, t) { t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t) }, _delay: function (e, t) { function n() { return (typeof e == "string" ? r[e] : e).apply(r, arguments) } var r = this; return setTimeout(n, t || 0) }, _hoverable: function (t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function (t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function (t) { e(t.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function (t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function (t) { e(t.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function (t, n, r) { var i, s, o = this.options[t]; r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent; if (s) for (i in s) i in n || (n[i] = s[i]); return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented()) } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, n) { e.Widget.prototype["_" + t] = function (r, i, s) { typeof i == "string" && (i = { effect: i }); var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t; i = i || {}, typeof i == "number" && (i = { duration: i }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function (n) { e(this)[t](), s && s.call(r[0]), n() }) } }) }(e), function (e, t) { var n = /[A-Z]/g, r = function (e) { return "-" + e.toLowerCase() }; e.extend(e.Widget.prototype, { _getCreateOptions: function () { var t, i, s = this.element[0], o = {}; if (!e.mobile.getAttribute(s, "defaults")) for (t in this.options) i = e.mobile.getAttribute(s, t.replace(n, r)), i != null && (o[t] = i); return o } }), e.mobile.widget = e.Widget }(e), function (e, t) { e.mobile.widgets = {}; var n = e.widget, r = e.mobile.keepNative; e.widget = function (n) { return function () { var r = n.apply(this, arguments), i = r.prototype.widgetName; return r.initSelector = r.prototype.initSelector !== t ? r.prototype.initSelector : ":jqmData(role='" + i + "')", e.mobile.widgets[i] = r, r } }(e.widget), e.extend(e.widget, n), e.mobile.document.on("create", function (t) { e(t.target).enhanceWithin() }), e.widget("mobile.page", { options: { theme: "a", domCache: !1, keepNativeDefault: e.mobile.keepNative, contentTheme: null, enhanced: !1 }, _createWidget: function () { e.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init") }, _create: function () { if (this._trigger("beforecreate") === !1) return !1; this.options.enhanced || this._enhance(), this._on(this.element, { pagebeforehide: "removeContainerBackground", pagebeforeshow: "_handlePageBeforeShow" }), this.element.enhanceWithin(), e.mobile.getAttribute(this.element[0], "role") === "dialog" && e.mobile.dialog && this.element.dialog() }, _enhance: function () { var n = "data-" + e.mobile.ns, r = this; this.options.role && this.element.attr("data-" + e.mobile.ns + "role", this.options.role), this.element.attr("tabindex", "0").addClass("ui-page ui-page-theme-" + this.options.theme), this.element.find("[" + n + "role='content']").each(function () { var i = e(this), s = this.getAttribute(n + "theme") || t; r.options.contentTheme = s || r.options.contentTheme || r.options.dialog && r.options.theme || r.element.jqmData("role") === "dialog" && r.options.theme, i.addClass("ui-content"), r.options.contentTheme && i.addClass("ui-body-" + r.options.contentTheme), i.attr("role", "main").addClass("ui-content") }) }, bindRemove: function (t) { var n = this.element; !n.data("mobile-page").options.domCache && n.is(":jqmData(external-page='true')") && n.bind("pagehide.remove", t || function (t, n) { if (!n.samePage) { var r = e(this), i = new e.Event("pageremove"); r.trigger(i), i.isDefaultPrevented() || r.removeWithDependents() } }) }, _setOptions: function (n) { n.theme !== t && this.element.removeClass("ui-page-theme-" + this.options.theme).addClass("ui-page-theme-" + n.theme), n.contentTheme !== t && this.element.find("[data-" + e.mobile.ns + "='content']").removeClass("ui-body-" + this.options.contentTheme).addClass("ui-body-" + n.contentTheme) }, _handlePageBeforeShow: function () { this.setContainerBackground() }, removeContainerBackground: function () { this.element.closest(":mobile-pagecontainer").pagecontainer({ theme: "none" }) }, setContainerBackground: function (e) { this.element.parent().pagecontainer({ theme: e || this.options.theme }) }, keepNativeSelector: function () { var t = this.options, n = e.trim(t.keepNative || ""), i = e.trim(e.mobile.keepNative), s = e.trim(t.keepNativeDefault), o = r === i ? "" : i, u = o === "" ? s : ""; return (n ? [n] : []).concat(o ? [o] : []).concat(u ? [u] : []).join(", ") } }) }(e), function (e, t) { e.mobile.degradeInputs = { color: !1, date: !1, datetime: !1, "datetime-local": !1, email: !1, month: !1, number: !1, range: "number", search: "text", tel: !1, time: !1, url: !1, week: !1 }, e.mobile.page.prototype.options.degradeInputs = e.mobile.degradeInputs, e.mobile.degradeInputsWithin = function (t) { t = e(t), t.find("input").not(e.mobile.page.prototype.keepNativeSelector()).each(function () { var t = e(this), n = this.getAttribute("type"), r = e.mobile.degradeInputs[n] || "text", i, s, o, u; e.mobile.degradeInputs[n] && (i = e("<div>").html(t.clone()).html(), s = i.indexOf(" type=") > -1, o = s ? /\s+type=["']?\w+['"]?/ : /\/?>/, u = ' type="' + r + '" data-' + e.mobile.ns + 'type="' + n + '"' + (s ? "" : ">"), t.replaceWith(i.replace(o, u))) }) } }(e), function (e, t) { e.fn.fieldcontain = function () { return this.addClass("ui-field-contain") } }(e), function (e, t) { e.fn.grid = function (t) { return this.each(function () { var n = e(this), r = e.extend({ grid: null }, t), i = n.children(), s = { solo: 1, a: 2, b: 3, c: 4, d: 5 }, o = r.grid, u, a; if (!o) if (i.length <= 5) for (a in s) s[a] === i.length && (o = a); else o = "a", n.addClass("ui-grid-duo"); u = s[o], n.addClass("ui-grid-" + o), i.filter(":nth-child(" + u + "n+1)").addClass("ui-block-a"), u > 1 && i.filter(":nth-child(" + u + "n+2)").addClass("ui-block-b"), u > 2 && i.filter(":nth-child(" + u + "n+3)").addClass("ui-block-c"), u > 3 && i.filter(":nth-child(" + u + "n+4)").addClass("ui-block-d"), u > 4 && i.filter(":nth-child(" + u + "n+5)").addClass("ui-block-e") }) } }(e), function (e, n) { var r, i, s = "&ui-state=dialog"; e.mobile.path = r = { uiStateKey: "&ui-state", urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/, getLocation: function (e) { var t = this.parseUrl(e || location.href), n = e ? t : location, r = t.hash; return r = r === "#" ? "" : r, n.protocol + t.doubleSlash + n.host + (n.protocol !== "" && n.pathname.substring(0, 1) !== "/" ? "/" : "") + n.pathname + n.search + r }, getDocumentUrl: function (t) { return t ? e.extend({}, r.documentUrl) : r.documentUrl.href }, parseLocation: function () { return this.parseUrl(this.getLocation()) }, parseUrl: function (t) { if (e.type(t) === "object") return t; var n = r.urlParseRE.exec(t || "") || []; return { href: n[0] || "", hrefNoHash: n[1] || "", hrefNoSearch: n[2] || "", domain: n[3] || "", protocol: n[4] || "", doubleSlash: n[5] || "", authority: n[6] || "", username: n[8] || "", password: n[9] || "", host: n[10] || "", hostname: n[11] || "", port: n[12] || "", pathname: n[13] || "", directory: n[14] || "", filename: n[15] || "", search: n[16] || "", hash: n[17] || "" } }, makePathAbsolute: function (e, t) { var n, r, i, s; if (e && e.charAt(0) === "/") return e; e = e || "", t = t ? t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "", n = t ? t.split("/") : [], r = e.split("/"); for (i = 0; i < r.length; i++) { s = r[i]; switch (s) { case ".": break; case "..": n.length && n.pop(); break; default: n.push(s) } } return "/" + n.join("/") }, isSameDomain: function (e, t) { return r.parseUrl(e).domain.toLowerCase() === r.parseUrl(t).domain.toLowerCase() }, isRelativeUrl: function (e) { return r.parseUrl(e).protocol === "" }, isAbsoluteUrl: function (e) { return r.parseUrl(e).protocol !== "" }, makeUrlAbsolute: function (e, t) { if (!r.isRelativeUrl(e)) return e; t === n && (t = this.documentBase); var i = r.parseUrl(e), s = r.parseUrl(t), o = i.protocol || s.protocol, u = i.protocol ? i.doubleSlash : i.doubleSlash || s.doubleSlash, a = i.authority || s.authority, f = i.pathname !== "", l = r.makePathAbsolute(i.pathname || s.filename, s.pathname), c = i.search || !f && s.search || "", h = i.hash; return o + u + a + l + c + h }, addSearchParams: function (t, n) { var i = r.parseUrl(t), s = typeof n == "object" ? e.param(n) : n, o = i.search || "?"; return i.hrefNoSearch + o + (o.charAt(o.length - 1) !== "?" ? "&" : "") + s + (i.hash || "") }, convertUrlToDataUrl: function (e) { var n = e, i = r.parseUrl(e); return r.isEmbeddedPage(i) ? n = i.hash.split(s)[0].replace(/^#/, "").replace(/\?.*$/, "") : r.isSameDomain(i, this.documentBase) && (n = i.hrefNoHash.replace(this.documentBase.domain, "").split(s)[0]), t.decodeURIComponent(n) }, get: function (e) { return e === n && (e = r.parseLocation().hash), r.stripHash(e).replace(/[^\/]*\.[^\/*]+$/, "") }, set: function (e) { location.hash = e }, isPath: function (e) { return /\//.test(e) }, clean: function (e) { return e.replace(this.documentBase.domain, "") }, stripHash: function (e) { return e.replace(/^#/, "") }, stripQueryParams: function (e) { return e.replace(/\?.*$/, "") }, cleanHash: function (e) { return r.stripHash(e.replace(/\?.*$/, "").replace(s, "")) }, isHashValid: function (e) { return /^#[^#]+$/.test(e) }, isExternal: function (e) { var t = r.parseUrl(e); return !!t.protocol && t.domain.toLowerCase() !== this.documentUrl.domain.toLowerCase() }, hasProtocol: function (e) { return /^(:?\w+:)/.test(e) }, isEmbeddedPage: function (e) { var t = r.parseUrl(e); return t.protocol !== "" ? !this.isPath(t.hash) && t.hash && (t.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && t.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(t.href) }, squash: function (e, t) { var n, i, s, o, u, a = this.isPath(e), f = this.parseUrl(e), l = f.hash, c = ""; t || (a ? t = r.getLocation() : (u = r.getDocumentUrl(!0), r.isPath(u.hash) ? t = r.squash(u.href) : t = u.href)), i = a ? r.stripHash(e) : e, i = r.isPath(f.hash) ? r.stripHash(f.hash) : i, o = i.indexOf(this.uiStateKey), o > -1 && (c = i.slice(o), i = i.slice(0, o)), n = r.makeUrlAbsolute(i, t), s = this.parseUrl(n).search; if (a) { if (r.isPath(l) || l.replace("#", "").indexOf(this.uiStateKey) === 0) l = ""; c && l.indexOf(this.uiStateKey) === -1 && (l += c), l.indexOf("#") === -1 && l !== "" && (l = "#" + l), n = r.parseUrl(n), n = n.protocol + n.doubleSlash + n.host + n.pathname + s + l } else n += n.indexOf("#") > -1 ? c : "#" + c; return n }, isPreservableHash: function (e) { return e.replace("#", "").indexOf(this.uiStateKey) === 0 }, hashToSelector: function (e) { var t = e.substring(0, 1) === "#"; return t && (e = e.substring(1)), (t ? "#" : "") + e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, "\\$1") }, getFilePath: function (e) { return e && e.split(s)[0] }, isFirstPageUrl: function (t) { var i = r.parseUrl(r.makeUrlAbsolute(t, this.documentBase)), s = i.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && i.hrefNoHash === this.documentBase.hrefNoHash, o = e.mobile.firstPage, u = o && o[0] ? o[0].id : n; return s && (!i.hash || i.hash === "#" || u && i.hash.replace(/^#/, "") === u) }, isPermittedCrossDomainRequest: function (t, n) { return e.mobile.allowCrossDomainPages && (t.protocol === "file:" || t.protocol === "content:") && n.search(/^https?:/) !== -1 } }, r.documentUrl = r.parseLocation(), i = e("head").find("base"), r.documentBase = i.length ? r.parseUrl(r.makeUrlAbsolute(i.attr("href"), r.documentUrl.href)) : r.documentUrl, r.documentBaseDiffers = r.documentUrl.hrefNoHash !== r.documentBase.hrefNoHash, r.getDocumentBase = function (t) { return t ? e.extend({}, r.documentBase) : r.documentBase.href }, e.extend(e.mobile, { getDocumentUrl: r.getDocumentUrl, getDocumentBase: r.getDocumentBase }) }(e), function (e, t) { e.mobile.History = function (e, t) { this.stack = e || [], this.activeIndex = t || 0 }, e.extend(e.mobile.History.prototype, { getActive: function () { return this.stack[this.activeIndex] }, getLast: function () { return this.stack[this.previousIndex] }, getNext: function () { return this.stack[this.activeIndex + 1] }, getPrev: function () { return this.stack[this.activeIndex - 1] }, add: function (e, t) { t = t || {}, this.getNext() && this.clearForward(), t.hash && t.hash.indexOf("#") === -1 && (t.hash = "#" + t.hash), t.url = e, this.stack.push(t), this.activeIndex = this.stack.length - 1 }, clearForward: function () { this.stack = this.stack.slice(0, this.activeIndex + 1) }, find: function (e, t, n) { t = t || this.stack; var r, i, s = t.length, o; for (i = 0; i < s; i++) { r = t[i]; if (decodeURIComponent(e) === decodeURIComponent(r.url) || decodeURIComponent(e) === decodeURIComponent(r.hash)) { o = i; if (n) return o } } return o }, closest: function (e) { var n, r = this.activeIndex; return n = this.find(e, this.stack.slice(0, r)), n === t && (n = this.find(e, this.stack.slice(r), !0), n = n === t ? n : n + r), n }, direct: function (n) { var r = this.closest(n.url), i = this.activeIndex; r !== t && (this.activeIndex = r, this.previousIndex = i), r < i ? (n.present || n.back || e.noop)(this.getActive(), "back") : r > i ? (n.present || n.forward || e.noop)(this.getActive(), "forward") : r === t && n.missing && n.missing(this.getActive()) } }) }(e), function (e, r) { var i = e.mobile.path, s = location.href; e.mobile.Navigator = function (t) { this.history = t, this.ignoreInitialHashChange = !0, e.mobile.window.bind({ "popstate.history": e.proxy(this.popstate, this), "hashchange.history": e.proxy(this.hashchange, this) }) }, e.extend(e.mobile.Navigator.prototype, { squash: function (r, s) { var o, u, a = i.isPath(r) ? i.stripHash(r) : r; return u = i.squash(r), o = e.extend({ hash: a, url: u }, s), t.history.replaceState(o, o.title || n.title, u), o }, hash: function (e, t) { var n, r, s, o; return n = i.parseUrl(e), r = i.parseLocation(), r.pathname + r.search === n.pathname + n.search ? s = n.hash ? n.hash : n.pathname + n.search : i.isPath(e) ? (o = i.parseUrl(t), s = o.pathname + o.search + (i.isPreservableHash(o.hash) ? o.hash.replace("#", "") : "")) : s = e, s }, go: function (r, s, o) { var u, a, f, l, c = e.event.special.navigate.isPushStateEnabled(); a = i.squash(r), f = this.hash(r, a), o && f !== i.stripHash(i.parseLocation().hash) && (this.preventNextHashChange = o), this.preventHashAssignPopState = !0, t.location.hash = f, this.preventHashAssignPopState = !1, u = e.extend({ url: a, hash: f, title: n.title }, s), c && (l = new e.Event("popstate"), l.originalEvent = { type: "popstate", state: null }, this.squash(r, u), o || (this.ignorePopState = !0, e.mobile.window.trigger(l))), this.history.add(u.url, u) }, popstate: function (t) { var n, r; if (!e.event.special.navigate.isPushStateEnabled()) return; if (this.preventHashAssignPopState) { this.preventHashAssignPopState = !1, t.stopImmediatePropagation(); return } if (this.ignorePopState) { this.ignorePopState = !1; return } if (!t.originalEvent.state && this.history.stack.length === 1 && this.ignoreInitialHashChange) { this.ignoreInitialHashChange = !1; if (location.href === s) { t.preventDefault(); return } } n = i.parseLocation().hash; if (!t.originalEvent.state && n) { r = this.squash(n), this.history.add(r.url, r), t.historyState = r; return } this.history.direct({ url: (t.originalEvent.state || {}).url || n, present: function (n, r) { t.historyState = e.extend({}, n), t.historyState.direction = r } }) }, hashchange: function (t) { var r, s; if (!e.event.special.navigate.isHashChangeEnabled() || e.event.special.navigate.isPushStateEnabled()) return; if (this.preventNextHashChange) { this.preventNextHashChange = !1, t.stopImmediatePropagation(); return } r = this.history, s = i.parseLocation().hash, this.history.direct({ url: s, present: function (n, r) { t.hashchangeState = e.extend({}, n), t.hashchangeState.direction = r }, missing: function () { r.add(s, { hash: s, title: n.title }) } }) } }) }(e), function (e, t) { e.mobile.navigate = function (t, n, r) { e.mobile.navigate.navigator.go(t, n, r) }, e.mobile.navigate.history = new e.mobile.History, e.mobile.navigate.navigator = new e.mobile.Navigator(e.mobile.navigate.history); var n = e.mobile.path.parseLocation(); e.mobile.navigate.history.add(n.href, { hash: n.hash }) }(e), function (e, t) { var n = e("head").children("base"), r = { element: n.length ? n : e("<base>", { href: e.mobile.path.documentBase.hrefNoHash }).prependTo(e("head")), linkSelector: "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]", set: function (t) { if (!e.mobile.dynamicBaseEnabled) return; e.support.dynamicBaseTag && r.element.attr("href", e.mobile.path.makeUrlAbsolute(t, e.mobile.path.documentBase)) }, rewrite: function (t, n) { var i = e.mobile.path.get(t); n.find(r.linkSelector).each(function (t, n) { var r = e(n).is("[href]") ? "href" : e(n).is("[src]") ? "src" : "action", s = e.mobile.path.parseLocation(), o = e(n).attr(r); o = o.replace(s.protocol + s.doubleSlash + s.host + s.pathname, ""), /^(\w+:|#|\/)/.test(o) || e(n).attr(r, i + o) }) }, reset: function () { r.element.attr("href", e.mobile.path.documentBase.hrefNoSearch) } }; e.mobile.base = r }(e), function (e, t, n) { e.mobile.Transition = function () { this.init.apply(this, arguments) }, e.extend(e.mobile.Transition.prototype, { toPreClass: " ui-page-pre-in", init: function (t, n, r, i) { e.extend(this, { name: t, reverse: n, $to: r, $from: i, deferred: new e.Deferred }) }, cleanFrom: function () { this.$from.removeClass(e.mobile.activePageClass + " out in reverse " + this.name).height("") }, beforeDoneIn: function () { }, beforeDoneOut: function () { }, beforeStartOut: function () { }, doneIn: function () { this.beforeDoneIn(), this.$to.removeClass("out in reverse " + this.name).height(""), this.toggleViewportClass(), e.mobile.window.scrollTop() !== this.toScroll && this.scrollPage(), this.sequential || this.$to.addClass(e.mobile.activePageClass), this.deferred.resolve(this.name, this.reverse, this.$to, this.$from, !0) }, doneOut: function (e, t, n, r) { this.beforeDoneOut(), this.startIn(e, t, n, r) }, hideIn: function (e) { this.$to.css("z-index", -10), e.call(this), this.$to.css("z-index", "") }, scrollPage: function () { e.event.special.scrollstart.enabled = !1, (e.mobile.hideUrlBar || this.toScroll !== e.mobile.defaultHomeScroll) && t.scrollTo(0, this.toScroll), setTimeout(function () { e.event.special.scrollstart.enabled = !0 }, 150) }, startIn: function (t, n, r, i) { this.hideIn(function () { this.$to.addClass(e.mobile.activePageClass + this.toPreClass), i || e.mobile.focusPage(this.$to), this.$to.height(t + this.toScroll), r || this.scrollPage() }), this.$to.removeClass(this.toPreClass).addClass(this.name + " in " + n), r ? this.doneIn() : this.$to.animationComplete(e.proxy(function () { this.doneIn() }, this)) }, startOut: function (t, n, r) { this.beforeStartOut(t, n, r), this.$from.height(t + e.mobile.window.scrollTop()).addClass(this.name + " out" + n) }, toggleViewportClass: function () { e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + this.name) }, transition: function () { var t, n = this.reverse ? " reverse" : "", r = e.mobile.getScreenHeight(), i = e.mobile.maxTransitionWidth !== !1 && e.mobile.window.width() > e.mobile.maxTransitionWidth; return this.toScroll = e.mobile.navigate.history.getActive().lastScroll || e.mobile.defaultHomeScroll, t = !e.support.cssTransitions || !e.support.cssAnimations || i || !this.name || this.name === "none" || Math.max(e.mobile.window.scrollTop(), this.toScroll) > e.mobile.getMaxScrollForTransition(), this.toggleViewportClass(), this.$from && !t ? this.startOut(r, n, t) : this.doneOut(r, n, t, !0), this.deferred.promise() } }) }(e, this), function (e) { e.mobile.SerialTransition = function () { this.init.apply(this, arguments) }, e.extend(e.mobile.SerialTransition.prototype, e.mobile.Transition.prototype, { sequential: !0, beforeDoneOut: function () { this.$from && this.cleanFrom() }, beforeStartOut: function (t, n, r) { this.$from.animationComplete(e.proxy(function () { this.doneOut(t, n, r) }, this)) } }) }(e), function (e) { e.mobile.ConcurrentTransition = function () { this.init.apply(this, arguments) }, e.extend(e.mobile.ConcurrentTransition.prototype, e.mobile.Transition.prototype, { sequential: !1, beforeDoneIn: function () { this.$from && this.cleanFrom() }, beforeStartOut: function (e, t, n) { this.doneOut(e, t, n) } }) }(e), function (e) { var t = function () { return e.mobile.getScreenHeight() * 3 }; e.mobile.transitionHandlers = { sequential: e.mobile.SerialTransition, simultaneous: e.mobile.ConcurrentTransition }, e.mobile.defaultTransitionHandler = e.mobile.transitionHandlers.sequential, e.mobile.transitionFallbacks = {}, e.mobile._maybeDegradeTransition = function (t) { return t && !e.support.cssTransform3d && e.mobile.transitionFallbacks[t] && (t = e.mobile.transitionFallbacks[t]), t }, e.mobile.getMaxScrollForTransition = e.mobile.getMaxScrollForTransition || t }(e), function (e, r) { e.widget("mobile.pagecontainer", { options: { theme: "a" }, initSelector: !1, _create: function () { this._trigger("beforecreate"), this.setLastScrollEnabled = !0, this._on(this.window, { navigate: "_disableRecordScroll", scrollstop: "_delayedRecordScroll" }), this._on(this.window, { navigate: "_filterNavigateEvents" }), this._on({ pagechange: "_afterContentChange" }), this.window.one("navigate", e.proxy(function () { this.setLastScrollEnabled = !0 }, this)) }, _setOptions: function (e) { e.theme !== r && e.theme !== "none" ? this.element.removeClass("ui-overlay-" + this.options.theme).addClass("ui-overlay-" + e.theme) : e.theme !== r && this.element.removeClass("ui-overlay-" + this.options.theme), this._super(e) }, _disableRecordScroll: function () { this.setLastScrollEnabled = !1 }, _enableRecordScroll: function () { this.setLastScrollEnabled = !0 }, _afterContentChange: function () { this.setLastScrollEnabled = !0, this._off(this.window, "scrollstop"), this._on(this.window, { scrollstop: "_delayedRecordScroll" }) }, _recordScroll: function () { if (!this.setLastScrollEnabled) return; var e = this._getActiveHistory(), t, n, r; e && (t = this._getScroll(), n = this._getMinScroll(), r = this._getDefaultScroll(), e.lastScroll = t < n ? r : t) }, _delayedRecordScroll: function () { setTimeout(e.proxy(this, "_recordScroll"), 100) }, _getScroll: function () { return this.window.scrollTop() }, _getMinScroll: function () { return e.mobile.minScrollBack }, _getDefaultScroll: function () { return e.mobile.defaultHomeScroll }, _filterNavigateEvents: function (t, n) { var r; if (t.originalEvent && t.originalEvent.isDefaultPrevented()) return; r = t.originalEvent.type.indexOf("hashchange") > -1 ? n.state.hash : n.state.url, r || (r = this._getHash()); if (!r || r === "#" || r.indexOf("#" + e.mobile.path.uiStateKey) === 0) r = location.href; this._handleNavigate(r, n.state) }, _getHash: function () { return e.mobile.path.parseLocation().hash }, getActivePage: function () { return this.activePage }, _getInitialContent: function () { return e.mobile.firstPage }, _getHistory: function () { return e.mobile.navigate.history }, _getActiveHistory: function () { return this._getHistory().getActive() }, _getDocumentBase: function () { return e.mobile.path.documentBase }, back: function () { this.go(-1) }, forward: function () { this.go(1) }, go: function (n) { if (e.mobile.hashListeningEnabled) t.history.go(n); else { var r = e.mobile.navigate.history.activeIndex, i = r + parseInt(n, 10), s = e.mobile.navigate.history.stack[i].url, o = n >= 1 ? "forward" : "back"; e.mobile.navigate.history.activeIndex = i, e.mobile.navigate.history.previousIndex = r, this.change(s, { direction: o, changeHash: !1, fromHashChange: !0 }) } }, _handleDestination: function (t) { var n; return e.type(t) === "string" && (t = e.mobile.path.stripHash(t)), t && (n = this._getHistory(), t = e.mobile.path.isPath(t) ? t : e.mobile.path.makeUrlAbsolute("#" + t, this._getDocumentBase())), t || this._getInitialContent() }, _transitionFromHistory: function (e, t) { var n = this._getHistory(), r = e === "back" ? n.getLast() : n.getActive(); return r && r.transition || t }, _handleDialog: function (t, n) { var r, i, s = this.getActivePage(); return s && !s.data("mobile-dialog") ? (n.direction === "back" ? this.back() : this.forward(), !1) : (r = n.pageUrl, i = this._getActiveHistory(), e.extend(t, { role: i.role, transition: this._transitionFromHistory(n.direction, t.transition), reverse: n.direction === "back" }), r) }, _handleNavigate: function (t, n) { var r = e.mobile.path.stripHash(t), i = this._getHistory(), s = i.stack.length === 0 ? "none" : this._transitionFromHistory(n.direction), o = { changeHash: !1, fromHashChange: !0, reverse: n.direction === "back" }; e.extend(o, n, { transition: s }); if (i.activeIndex > 0 && r.indexOf(e.mobile.dialogHashKey) > -1) { r = this._handleDialog(o, n); if (r === !1) return } this._changeContent(this._handleDestination(r), o) }, _changeContent: function (t, n) { e.mobile.changePage(t, n) }, _getBase: function () { return e.mobile.base }, _getNs: function () { return e.mobile.ns }, _enhance: function (e, t) { return e.page({ role: t }) }, _include: function (e, t) { e.appendTo(this.element), this._enhance(e, t.role), e.page("bindRemove") }, _find: function (t) { var n = this._createFileUrl(t), r = this._createDataUrl(t), i, s = this._getInitialContent(); return i = this.element.children("[data-" + this._getNs() + "url='" + e.mobile.path.hashToSelector(r) + "']"), i.length === 0 && r && !e.mobile.path.isPath(r) && (i = this.element.children(e.mobile.path.hashToSelector("#" + r)).attr("data-" + this._getNs() + "url", r).jqmData("url", r)), i.length === 0 && e.mobile.path.isFirstPageUrl(n) && s && s.parent().length && (i = e(s)), i }, _getLoader: function () { return e.mobile.loading() }, _showLoading: function (t, n, r, i) { if (this._loadMsg) return; this._loadMsg = setTimeout(e.proxy(function () { this._getLoader().loader("show", n, r, i), this._loadMsg = 0 }, this), t) }, _hideLoading: function () { clearTimeout(this._loadMsg), this._loadMsg = 0, this._getLoader().loader("hide") }, _showError: function () { this._hideLoading(), this._showLoading(0, e.mobile.pageLoadErrorMessageTheme, e.mobile.pageLoadErrorMessage, !0), setTimeout(e.proxy(this, "_hideLoading"), 1500) }, _parse: function (t, n) { var r, i = e("<div></div>"); return i.get(0).innerHTML = t, r = i.find(":jqmData(role='page'), :jqmData(role='dialog')").first(), r.length || (r = e("<div data-" + this._getNs() + "role='page'>" + (t.split(/<\/?body[^>]*>/gmi)[1] || "") + "</div>")), r.attr("data-" + this._getNs() + "url", this._createDataUrl(n)).attr("data-" + this._getNs() + "external-page", !0), r }, _setLoadedTitle: function (t, n) { var r = n.match(/<title[^>]*>([^<]*)/) && RegExp.$1; r && !t.jqmData("title") && (r = e("<div>" + r + "</div>").text(), t.jqmData("title", r)) }, _isRewritableBaseTag: function () { return e.mobile.dynamicBaseEnabled && !e.support.dynamicBaseTag }, _createDataUrl: function (t) { return e.mobile.path.convertUrlToDataUrl(t) }, _createFileUrl: function (t) { return e.mobile.path.getFilePath(t) }, _triggerWithDeprecated: function (t, n, r) { var i = e.Event("page" + t), s = e.Event(this.widgetName + t); return (r || this.element).trigger(i, n), this._trigger(t, s, n), { deprecatedEvent: i, event: s } }, _loadSuccess: function (t, n, i, s) { var o = this._createFileUrl(t); return e.proxy(function (u, a, f) { var l, c = new RegExp("(<[^>]+\\bdata-" + this._getNs() + "role=[\"']?page[\"']?[^>]*>)"), h = new RegExp("\\bdata-" + this._getNs() + "url=[\"']?([^\"'>]*)[\"']?"); c.test(u) && RegExp.$1 && h.test(RegExp.$1) && RegExp.$1 && (o = e.mobile.path.getFilePath(e("<div>" + RegExp.$1 + "</div>").text()), o = this.window[0].encodeURIComponent(o)), i.prefetch === r && this._getBase().set(o), l = this._parse(u, o), this._setLoadedTitle(l, u), n.xhr = f, n.textStatus = a, n.page = l, n.content = l, n.toPage = l; if (this._triggerWithDeprecated("load", n).event.isDefaultPrevented()) return; this._isRewritableBaseTag() && l && this._getBase().rewrite(o, l), this._include(l, i), i.showLoadMsg && this._hideLoading(), s.resolve(t, i, l) }, this) }, _loadDefaults: { type: "get", data: r, reloadPage: !1, reload: !1, role: r, showLoadMsg: !1, loadMsgDelay: 50 }, load: function (t, n) { var i = n && n.deferred || e.Deferred(), s = n && n.reload === r && n.reloadPage !== r ? { reload: n.reloadPage } : {}, o = e.extend({}, this._loadDefaults, n, s), u = null, a = e.mobile.path.makeUrlAbsolute(t, this._findBaseWithDefault()), f, l, c, h; return o.data && o.type === "get" && (a = e.mobile.path.addSearchParams(a, o.data), o.data = r), o.data && o.type === "post" && (o.reload = !0), f = this._createFileUrl(a), l = this._createDataUrl(a), u = this._find(a), u.length === 0 && e.mobile.path.isEmbeddedPage(f) && !e.mobile.path.isFirstPageUrl(f) ? (i.reject(a, o), i.promise()) : (this._getBase().reset(), u.length && !o.reload ? (this._enhance(u, o.role), i.resolve(a, o, u), o.prefetch || this._getBase().set(t), i.promise()) : (h = { url: t, absUrl: a, toPage: t, prevPage: n ? n.fromPage : r, dataUrl: l, deferred: i, options: o }, c = this._triggerWithDeprecated("beforeload", h), c.deprecatedEvent.isDefaultPrevented() || c.event.isDefaultPrevented() ? i.promise() : (o.showLoadMsg && this._showLoading(o.loadMsgDelay), o.prefetch === r && this._getBase().reset(), !e.mobile.allowCrossDomainPages && !e.mobile.path.isSameDomain(e.mobile.path.documentUrl, a) ? (i.reject(a, o), i.promise()) : (e.ajax({ url: f, type: o.type, data: o.data, contentType: o.contentType, dataType: "html", success: this._loadSuccess(a, h, o, i), error: this._loadError(a, h, o, i) }), i.promise())))) }, _loadError: function (t, n, r, i) { return e.proxy(function (s, o, u) { this._getBase().set(e.mobile.path.get()), n.xhr = s, n.textStatus = o, n.errorThrown = u; var a = this._triggerWithDeprecated("loadfailed", n); if (a.deprecatedEvent.isDefaultPrevented() || a.event.isDefaultPrevented()) return; r.showLoadMsg && this._showError(), i.reject(t, r) }, this) }, _getTransitionHandler: function (t) { return t = e.mobile._maybeDegradeTransition(t), e.mobile.transitionHandlers[t] || e.mobile.defaultTransitionHandler }, _triggerCssTransitionEvents: function (t, n, r) { var i = !1; r = r || "", n && (t[0] === n[0] && (i = !0), this._triggerWithDeprecated(r + "hide", { nextPage: t, toPage: t, prevPage: n, samePage: i }, n)), this._triggerWithDeprecated(r + "show", { prevPage: n || e(""), toPage: t }, t) }, _cssTransition: function (t, n, r) { var i = r.transition, s = r.reverse, o = r.deferred, u, a; this._triggerCssTransitionEvents(t, n, "before"), this._hideLoading(), u = this._getTransitionHandler(i), a = (new u(i, s, t, n)).transition(), a.done(e.proxy(function () { this._triggerCssTransitionEvents(t, n) }, this)), a.done(function () { o.resolve.apply(o, arguments) }) }, _releaseTransitionLock: function () { s = !1, i.length > 0 && e.mobile.changePage.apply(null, i.pop()) }, _removeActiveLinkClass: function (t) { e.mobile.removeActiveLinkClass(t) }, _loadUrl: function (t, n, r) { r.target = t, r.deferred = e.Deferred(), this.load(t, r), r.deferred.done(e.proxy(function (e, t, r) { s = !1, t.absUrl = n.absUrl, this.transition(r, n, t) }, this)), r.deferred.fail(e.proxy(function () { this._removeActiveLinkClass(!0), this._releaseTransitionLock(), this._triggerWithDeprecated("changefailed", n) }, this)) }, _triggerPageBeforeChange: function (t, n, r) { var i; return n.prevPage = this.activePage, e.extend(n, { toPage: t, options: r }), e.type(t) === "string" ? n.absUrl = e.mobile.path.makeUrlAbsolute(t, this._findBaseWithDefault()) : n.absUrl = r.absUrl, i = this._triggerWithDeprecated("beforechange", n), i.event.isDefaultPrevented() || i.deprecatedEvent.isDefaultPrevented() ? !1 : !0 }, change: function (t, n) { if (s) { i.unshift(arguments); return } var r = e.extend({}, e.mobile.changePage.defaults, n), o = {}; r.fromPage = r.fromPage || this.activePage; if (!this._triggerPageBeforeChange(t, o, r)) return; t = o.toPage, e.type(t) === "string" ? (s = !0, this._loadUrl(t, o, r)) : this.transition(t, o, r) }, transition: function (t, o, u) { var a, f, l, c, h, p, d, v, m, g, y, b, w, E; if (s) { i.unshift([t, u]); return } if (!this._triggerPageBeforeChange(t, o, u)) return; o.prevPage = u.fromPage, E = this._triggerWithDeprecated("beforetransition", o); if (E.deprecatedEvent.isDefaultPrevented() || E.event.isDefaultPrevented()) return; s = !0, t[0] === e.mobile.firstPage[0] && !u.dataUrl && (u.dataUrl = e.mobile.path.documentUrl.hrefNoHash), a = u.fromPage, f = u.dataUrl && e.mobile.path.convertUrlToDataUrl(u.dataUrl) || t.jqmData("url"), l = f, c = e.mobile.path.getFilePath(f), h = e.mobile.navigate.history.getActive(), p = e.mobile.navigate.history.activeIndex === 0, d = 0, v = n.title, m = (u.role === "dialog" || t.jqmData("role") === "dialog") && t.jqmData("dialog") !== !0; if (a && a[0] === t[0] && !u.allowSamePageTransition) { s = !1, this._triggerWithDeprecated("transition", o), this._triggerWithDeprecated("change", o), u.fromHashChange && e.mobile.navigate.history.direct({ url: f }); return } t.page({ role: u.role }), u.fromHashChange && (d = u.direction === "back" ? -1 : 1); try { n.activeElement && n.activeElement.nodeName.toLowerCase() !== "body" ? e(n.activeElement).blur() : e("input:focus, textarea:focus, select:focus").blur() } catch (S) { } g = !1, m && h && (h.url && h.url.indexOf(e.mobile.dialogHashKey) > -1 && this.activePage && !this.activePage.hasClass("ui-dialog") && e.mobile.navigate.history.activeIndex > 0 && (u.changeHash = !1, g = !0), f = h.url || "", !g && f.indexOf("#") > -1 ? f += e.mobile.dialogHashKey : f += "#" + e.mobile.dialogHashKey), y = h ? t.jqmData("title") || t.children(":jqmData(role='header')").find(".ui-title").text() : v, !!y && v === n.title && (v = y), t.jqmData("title") || t.jqmData("title", v), u.transition = u.transition || (d && !p ? h.transition : r) || (m ? e.mobile.defaultDialogTransition : e.mobile.defaultPageTransition), !d && g && (e.mobile.navigate.history.getActive().pageUrl = l), f && !u.fromHashChange && (!e.mobile.path.isPath(f) && f.indexOf("#") < 0 && (f = "#" + f), b = { transition: u.transition, title: v, pageUrl: l, role: u.role }, u.changeHash !== !1 && e.mobile.hashListeningEnabled ? e.mobile.navigate(this.window[0].encodeURI(f), b, !0) : t[0] !== e.mobile.firstPage[0] && e.mobile.navigate.history.add(f, b)), n.title = v, e.mobile.activePage = t, this.activePage = t, u.reverse = u.reverse || d < 0, w = e.Deferred(), this._cssTransition(t, a, { transition: u.transition, reverse: u.reverse, deferred: w }), w.done(e.proxy(function (n, r, i, s, a) { e.mobile.removeActiveLinkClass(), u.duplicateCachedPage && u.duplicateCachedPage.remove(), a || e.mobile.focusPage(t), this._releaseTransitionLock(), this._triggerWithDeprecated("transition", o), this._triggerWithDeprecated("change", o) }, this)) }, _findBaseWithDefault: function () { var t = this.activePage && e.mobile.getClosestBaseUrl(this.activePage); return t || e.mobile.path.documentBase.hrefNoHash } }), e.mobile.navreadyDeferred = e.Deferred(); var i = [], s = !1 }(e), function (e, r) { function f(e) { while (e) { if (typeof e.nodeName == "string" && e.nodeName.toLowerCase() === "a") break; e = e.parentNode } return e } var i = e.Deferred(), s = e.Deferred(), o = function () { s.resolve(), s = null }, u = e.mobile.path.documentUrl, a = null; e.mobile.loadPage = function (t, n) { var r; return n = n || {}, r = n.pageContainer || e.mobile.pageContainer, n.deferred = e.Deferred(), r.pagecontainer("load", t, n), n.deferred.promise() }, e.mobile.back = function () { var n = t.navigator; this.phonegapNavigationEnabled && n && n.app && n.app.backHistory ? n.app.backHistory() : e.mobile.pageContainer.pagecontainer("back") }, e.mobile.focusPage = function (e) { var t = e.find("[autofocus]"), n = e.find(".ui-title:eq(0)"); if (t.length) { t.focus(); return } n.length ? n.focus() : e.focus() }, e.mobile._maybeDegradeTransition = e.mobile._maybeDegradeTransition || function (e) { return e }, e.mobile.changePage = function (t, n) { e.mobile.pageContainer.pagecontainer("change", t, n) }, e.mobile.changePage.defaults = { transition: r, reverse: !1, changeHash: !0, fromHashChange: !1, role: r, duplicateCachedPage: r, pageContainer: r, showLoadMsg: !0, dataUrl: r, fromPage: r, allowSamePageTransition: !1 }, e.mobile._registerInternalEvents = function () { var n = function (t, n) { var r, i = !0, s, o, f; return !e.mobile.ajaxEnabled || t.is(":jqmData(ajax='false')") || !t.jqmHijackable().length || t.attr("target") ? !1 : (r = a && a.attr("formaction") || t.attr("action"), f = (t.attr("method") || "get").toLowerCase(), r || (r = e.mobile.getClosestBaseUrl(t), f === "get" && (r = e.mobile.path.parseUrl(r).hrefNoSearch), r === e.mobile.path.documentBase.hrefNoHash && (r = u.hrefNoSearch)), r = e.mobile.path.makeUrlAbsolute(r, e.mobile.getClosestBaseUrl(t)), e.mobile.path.isExternal(r) && !e.mobile.path.isPermittedCrossDomainRequest(u, r) ? !1 : (n || (s = t.serializeArray(), a && a[0].form === t[0] && (o = a.attr("name"), o && (e.each(s, function (e, t) { if (t.name === o) return o = "", !1 }), o && s.push({ name: o, value: a.attr("value") }))), i = { url: r, options: { type: f, data: e.param(s), transition: t.jqmData("transition"), reverse: t.jqmData("direction") === "reverse", reloadPage: !0 } }), i)) }; e.mobile.document.delegate("form", "submit", function (t) { var r; t.isDefaultPrevented() || (r = n(e(this)), r && (e.mobile.changePage(r.url, r.options), t.preventDefault())) }), e.mobile.document.bind("vclick", function (t) { var r, i, s = t.target, o = !1; if (t.which > 1 || !e.mobile.linkBindingEnabled) return; a = e(s); if (e.data(s, "mobile-button")) { if (!n(e(s).closest("form"), !0)) return; s.parentNode && (s = s.parentNode) } else { s = f(s); if (!s || e.mobile.path.parseUrl(s.getAttribute("href") || "#").hash === "#") return; if (!e(s).jqmHijackable().length) return } ~s.className.indexOf("ui-link-inherit") ? s.parentNode && (i = e.data(s.parentNode, "buttonElements")) : i = e.data(s, "buttonElements"), i ? s = i.outer : o = !0, r = e(s), o && (r = r.closest(".ui-btn")), r.length > 0 && !r.hasClass("ui-state-disabled") && (e.mobile.removeActiveLinkClass(!0), e.mobile.activeClickedLink = r, e.mobile.activeClickedLink.addClass(e.mobile.activeBtnClass)) }), e.mobile.document.bind("click", function (n) { if (!e.mobile.linkBindingEnabled || n.isDefaultPrevented()) return; var i = f(n.target), s = e(i), o = function () { t.setTimeout(function () { e.mobile.removeActiveLinkClass(!0) }, 200) }, a, l, c, h, p, d, v; e.mobile.activeClickedLink && e.mobile.activeClickedLink[0] === n.target.parentNode && o(); if (!i || n.which > 1 || !s.jqmHijackable().length) return; if (s.is(":jqmData(rel='back')")) return e.mobile.back(), !1; a = e.mobile.getClosestBaseUrl(s), l = e.mobile.path.makeUrlAbsolute(s.attr("href") || "#", a); if (!e.mobile.ajaxEnabled && !e.mobile.path.isEmbeddedPage(l)) { o(); return } if (l.search("#") !== -1 && (!e.mobile.path.isExternal(l) || !e.mobile.path.isAbsoluteUrl(l))) { l = l.replace(/[^#]*#/, ""); if (!l) { n.preventDefault(); return } e.mobile.path.isPath(l) ? l = e.mobile.path.makeUrlAbsolute(l, a) : l = e.mobile.path.makeUrlAbsolute("#" + l, u.hrefNoHash) } c = s.is("[rel='external']") || s.is(":jqmData(ajax='false')") || s.is("[target]"), h = c || e.mobile.path.isExternal(l) && !e.mobile.path.isPermittedCrossDomainRequest(u, l); if (h) { o(); return } p = s.jqmData("transition"), d = s.jqmData("direction") === "reverse" || s.jqmData("back"), v = s.attr("data-" + e.mobile.ns + "rel") || r, e.mobile.changePage(l, { transition: p, reverse: d, role: v, link: s }), n.preventDefault() }), e.mobile.document.delegate(".ui-page", "pageshow.prefetch", function () { var t = []; e(this).find("a:jqmData(prefetch)").each(function () { var n = e(this), r = n.attr("href"); r && e.inArray(r, t) === -1 && (t.push(r), e.mobile.loadPage(r, { role: n.attr("data-" + e.mobile.ns + "rel"), prefetch: !0 })) }) }), e.mobile.pageContainer.pagecontainer(), e.mobile.document.bind("pageshow", function () { s ? s.done(e.mobile.resetActivePageHeight) : e.mobile.resetActivePageHeight() }), e.mobile.window.bind("throttledresize", e.mobile.resetActivePageHeight) }, e(function () { i.resolve() }), n.readyState === "complete" ? o() : e.mobile.window.load(o), e.when(i, e.mobile.navreadyDeferred).done(function () { e.mobile._registerInternalEvents() }) }(e), function (e) { var t = "ui-loader", n = e("html"); e.widget("mobile.loader", { options: { theme: "a", textVisible: !1, html: "", text: "loading" }, defaultHtml: "<div class='" + t + "'>" + "<span class='ui-icon-loading'></span>" + "<h1></h1>" + "</div>", fakeFixLoader: function () { var t = e("." + e.mobile.activeBtnClass).first(); this.element.css({ top: e.support.scrollTop && this.window.scrollTop() + this.window.height() / 2 || t.length && t.offset().top || 100 }) }, checkLoaderPosition: function () { var t = this.element.offset(), n = this.window.scrollTop(), r = e.mobile.getScreenHeight(); if (t.top < n || t.top - n > r) this.element.addClass("ui-loader-fakefix"), this.fakeFixLoader(), this.window.unbind("scroll", this.checkLoaderPosition).bind("scroll", e.proxy(this.fakeFixLoader, this)) }, resetHtml: function () { this.element.html(e(this.defaultHtml).html()) }, show: function (r, i, s) { var o, u, a; this.resetHtml(), e.type(r) === "object" ? (a = e.extend({}, this.options, r), r = a.theme) : (a = this.options, r = r || a.theme), u = i || (a.text === !1 ? "" : a.text), n.addClass("ui-loading"), o = a.textVisible, this.element.attr("class", t + " ui-corner-all ui-body-" + r + " ui-loader-" + (o || i || r.text ? "verbose" : "default") + (a.textonly || s ? " ui-loader-textonly" : "")), a.html ? this.element.html(a.html) : this.element.find("h1").text(u), this.element.appendTo(e.mobile.pagecontainer ? e(":mobile-pagecontainer") : e("body")), this.checkLoaderPosition(), this.window.bind("scroll", e.proxy(this.checkLoaderPosition, this)) }, hide: function () { n.removeClass("ui-loading"), this.options.text && this.element.removeClass("ui-loader-fakefix"), this.window.unbind("scroll", this.fakeFixLoader), this.window.unbind("scroll", this.checkLoaderPosition) } }) }(e, this), function (e, t, r) { function o() { i.removeClass("ui-mobile-rendering") } var i = e("html"), s = e.mobile.window; e(t.document).trigger("mobileinit"); if (!e.mobile.gradeA()) return; e.mobile.ajaxBlacklist && (e.mobile.ajaxEnabled = !1), i.addClass("ui-mobile ui-mobile-rendering"), setTimeout(o, 5e3), e.extend(e.mobile, { initializePage: function () { var t = e.mobile.path, i = e(":jqmData(role='page'), :jqmData(role='dialog')"), u = t.stripHash(t.stripQueryParams(t.parseLocation().hash)), a = e.mobile.path.parseLocation(), f = u ? n.getElementById(u) : r; i.length || (i = e("body").wrapInner("<div data-" + e.mobile.ns + "role='page'></div>").children(0)), i.each(function () { var n = e(this); n[0].getAttribute("data-" + e.mobile.ns + "url") || n.attr("data-" + e.mobile.ns + "url", n.attr("id") || t.convertUrlToDataUrl(a.pathname + a.search)) }), e.mobile.firstPage = i.first(), e.mobile.pageContainer = e.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer(), e.mobile.navreadyDeferred.resolve(), s.trigger("pagecontainercreate"), e.mobile.loading("show"), o(), !e.mobile.hashListeningEnabled || !e.mobile.path.isHashValid(location.hash) || !e(f).is(":jqmData(role='page')") && !e.mobile.path.isPath(u) && u !== e.mobile.dialogHashKey ? (e.event.special.navigate.isPushStateEnabled() && e.mobile.navigate.navigator.squash(t.parseLocation().href), e.mobile.changePage(e.mobile.firstPage, { transition: "none", reverse: !0, changeHash: !1, fromHashChange: !0 })) : e.event.special.navigate.isPushStateEnabled() ? (e.mobile.navigate.history.stack = [], e.mobile.navigate(e.mobile.path.isPath(location.hash) ? location.hash : location.href)) : s.trigger("hashchange", [!0]) } }), e(function () { e.support.inlineSVG(), e.mobile.hideUrlBar && t.scrollTo(0, 1), e.mobile.defaultHomeScroll = !e.support.scrollTop || e.mobile.window.scrollTop() === 1 ? 0 : 1, e.mobile.autoInitializePage && e.mobile.initializePage(), e.mobile.hideUrlBar && s.load(e.mobile.silentScroll), e.support.cssPointerEvents || e.mobile.document.delegate(".ui-state-disabled,.ui-disabled", "vclick", function (e) { e.preventDefault(), e.stopImmediatePropagation() }) }) }(e, this), function (e, t) { e.mobile.links = function (t) { e(t).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function () { var e = this, t = e.getAttribute("href").substring(1); t && (e.setAttribute("aria-haspopup", !0), e.setAttribute("aria-owns", t), e.setAttribute("aria-expanded", !1)) }).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link") } }(e), function (e) { var t = e("meta[name=viewport]"), n = t.attr("content"), r = n + ",maximum-scale=1, user-scalable=no", i = n + ",maximum-scale=10, user-scalable=yes", s = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(n); e.mobile.zoom = e.extend({}, { enabled: !s, locked: !1, disable: function (n) { !s && !e.mobile.zoom.locked && (t.attr("content", r), e.mobile.zoom.enabled = !1, e.mobile.zoom.locked = n || !1) }, enable: function (n) { !s && (!e.mobile.zoom.locked || n === !0) && (t.attr("content", i), e.mobile.zoom.enabled = !0, e.mobile.zoom.locked = !1) }, restore: function () { s || (t.attr("content", n), e.mobile.zoom.enabled = !0) } }) }(e), function (e, t) { function r(t) { var r, i = t.length, s = []; for (r = 0; r < i; r++) t[r].className.match(n) || s.push(t[r]); return e(s) } var n = /\bui-screen-hidden\b/; e.mobile.behaviors.addFirstLastClasses = { _getVisibles: function (e, t) { var n; return t ? n = r(e) : (n = e.filter(":visible"), n.length === 0 && (n = r(e))), n }, _addFirstLastClasses: function (e, t, n) { e.removeClass("ui-first-child ui-last-child"), t.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"), n || this.element.trigger("updatelayout") }, _removeFirstLastClasses: function (e) { e.removeClass("ui-first-child ui-last-child") } } }(e), function (e, t) { var n = /([A-Z])/g, r = function (e) { return "ui-btn-icon-" + (e === null ? "left" : e) }; e.widget("mobile.collapsible", { options: { enhanced: !1, expandCueText: null, collapseCueText: null, collapsed: !0, heading: "h1,h2,h3,h4,h5,h6,legend", collapsedIcon: null, expandedIcon: null, iconpos: null, theme: null, contentTheme: null, inset: null, corners: null, mini: null }, _create: function () { var t = this.element, n = { accordion: t.closest(":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')" + (e.mobile.collapsibleset ? ", :mobile-collapsibleset" : "")).addClass("ui-collapsible-set") }; this._ui = n, this._renderedOptions = this._getOptions(this.options), this.options.enhanced ? (n.heading = this.element.children(".ui-collapsible-heading"), n.content = n.heading.next(), n.anchor = n.heading.children(), n.status = n.anchor.children(".ui-collapsible-heading-status")) : this._enhance(t, n), this._on(n.heading, { tap: function () { n.heading.find("a").first().addClass(e.mobile.activeBtnClass) }, click: function (e) { this._handleExpandCollapse(!n.heading.hasClass("ui-collapsible-heading-collapsed")), e.preventDefault(), e.stopPropagation() } }) }, _getOptions: function (t) { var r, i = this._ui.accordion, s = this._ui.accordionWidget; t = e.extend({}, t), i.length && !s && (this._ui.accordionWidget = s = i.data("mobile-collapsibleset")); for (r in t) t[r] = t[r] != null ? t[r] : s ? s.options[r] : i.length ? e.mobile.getAttribute(i[0], r.replace(n, "-$1").toLowerCase()) : null, null == t[r] && (t[r] = e.mobile.collapsible.defaults[r]); return t }, _themeClassFromOption: function (e, t) { return t ? t === "none" ? "" : e + t : "" }, _enhance: function (t, n) { var i, s = this._renderedOptions, o = this._themeClassFromOption("ui-body-", s.contentTheme); return t.addClass("ui-collapsible " + (s.inset ? "ui-collapsible-inset " : "") + (s.inset && s.corners ? "ui-corner-all " : "") + (o ? "ui-collapsible-themed-content " : "")), n.originalHeading = t.children(this.options.heading).first(), n.content = t.wrapInner("<div class='ui-collapsible-content " + o + "'></div>").children(".ui-collapsible-content"), n.heading = n.originalHeading, n.heading.is("legend") && (n.heading = e("<div role='heading'>" + n.heading.html() + "</div>"), n.placeholder = e("<div><!-- placeholder for legend --></div>").insertBefore(n.originalHeading), n.originalHeading.remove()), i = s.collapsed ? s.collapsedIcon ? "ui-icon-" + s.collapsedIcon : "" : s.expandedIcon ? "ui-icon-" + s.expandedIcon : "", n.status = e("<span class='ui-collapsible-heading-status'></span>"), n.anchor = n.heading.detach().addClass("ui-collapsible-heading").append(n.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn " + (i ? i + " " : "") + (i ? r(s.iconpos) + " " : "") + this._themeClassFromOption("ui-btn-", s.theme) + " " + (s.mini ? "ui-mini " : "")), n.heading.insertBefore(n.content), this._handleExpandCollapse(this.options.collapsed), n }, refresh: function () { this._applyOptions(this.options), this._renderedOptions = this._getOptions(this.options) }, _applyOptions: function (e) { var n, i, s, o, u, a = this.element, f = this._renderedOptions, l = this._ui, c = l.anchor, h = l.status, p = this._getOptions(e); e.collapsed !== t && this._handleExpandCollapse(e.collapsed), n = a.hasClass("ui-collapsible-collapsed"), n ? p.expandCueText !== t && h.text(p.expandCueText) : p.collapseCueText !== t && h.text(p.collapseCueText), u = p.collapsedIcon !== t ? p.collapsedIcon !== !1 : f.collapsedIcon !== !1; if (p.iconpos !== t || p.collapsedIcon !== t || p.expandedIcon !== t) c.removeClass([r(f.iconpos)].concat(f.expandedIcon ? ["ui-icon-" + f.expandedIcon] : []).concat(f.collapsedIcon ? ["ui-icon-" + f.collapsedIcon] : []).join(" ")), u && c.addClass([r(p.iconpos !== t ? p.iconpos : f.iconpos)].concat(n ? ["ui-icon-" + (p.collapsedIcon !== t ? p.collapsedIcon : f.collapsedIcon)] : ["ui-icon-" + (p.expandedIcon !== t ? p.expandedIcon : f.expandedIcon)]).join(" ")); p.theme !== t && (s = this._themeClassFromOption("ui-btn-", f.theme), i = this._themeClassFromOption("ui-btn-", p.theme), c.removeClass(s).addClass(i)), p.contentTheme !== t && (s = this._themeClassFromOption("ui-body-", f.contentTheme), i = this._themeClassFromOption("ui-body-", p.contentTheme), l.content.removeClass(s).addClass(i)), p.inset !== t && (a.toggleClass("ui-collapsible-inset", p.inset), o = !(!p.inset || !p.corners && !f.corners)), p.corners !== t && (o = !(!p.corners || !p.inset && !f.inset)), o !== t && a.toggleClass("ui-corner-all", o), p.mini !== t && c.toggleClass("ui-mini", p.mini) }, _setOptions: function (e) { this._applyOptions(e), this._super(e), this._renderedOptions = this._getOptions(this.options) }, _handleExpandCollapse: function (t) { var n = this._renderedOptions, r = this._ui; r.status.text(t ? n.expandCueText : n.collapseCueText), r.heading.toggleClass("ui-collapsible-heading-collapsed", t).find("a").first().toggleClass("ui-icon-" + n.expandedIcon, !t).toggleClass("ui-icon-" + n.collapsedIcon, t || n.expandedIcon === n.collapsedIcon).removeClass(e.mobile.activeBtnClass), this.element.toggleClass("ui-collapsible-collapsed", t), r.content.toggleClass("ui-collapsible-content-collapsed", t).attr("aria-hidden", t).trigger("updatelayout"), this.options.collapsed = t, this._trigger(t ? "collapse" : "expand") }, expand: function () { this._handleExpandCollapse(!1) }, collapse: function () { this._handleExpandCollapse(!0) }, _destroy: function () { var e = this._ui, t = this.options; if (t.enhanced) return; e.placeholder ? (e.originalHeading.insertBefore(e.placeholder), e.placeholder.remove(), e.heading.remove()) : (e.status.remove(), e.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap()), e.anchor.contents().unwrap(), e.content.contents().unwrap(), this.element.removeClass("ui-collapsible ui-collapsible-collapsed ui-collapsible-themed-content ui-collapsible-inset ui-corner-all") } }), e.mobile.collapsible.defaults = { expandCueText: " click to expand contents", collapseCueText: " click to collapse contents", collapsedIcon: "plus", contentTheme: "inherit", expandedIcon: "minus", iconpos: "left", inset: !0, corners: !0, theme: "inherit", mini: !1 } }(e), function (e, t) { e.widget("mobile.controlgroup", e.extend({ options: { enhanced: !1, theme: null, shadow: !1, corners: !0, excludeInvisible: !0, type: "vertical", mini: !1 }, _create: function () { var t = this.element, n = this.options, r = e.mobile.page.prototype.keepNativeSelector(); e.fn.buttonMarkup && this.element.find(e.fn.buttonMarkup.initSelector).not(r).buttonMarkup(), e.each(this._childWidgets, e.proxy(function (t, n) { e.mobile[n] && this.element.find(e.mobile[n].initSelector).not(r)[n]() }, this)), e.extend(this, { _ui: null, _initialRefresh: !0 }), n.enhanced ? this._ui = { groupLegend: t.children(".ui-controlgroup-label").children(), childWrapper: t.children(".ui-controlgroup-controls") } : this._ui = this._enhance() }, _childWidgets: ["checkboxradio", "selectmenu", "button"], _themeClassFromOption: function (e) { return e ? e === "none" ? "" : "ui-group-theme-" + e : "" }, _enhance: function () { var t = this.element, n = this.options, r = { groupLegend: t.children("legend"), childWrapper: t.addClass("ui-controlgroup ui-controlgroup-" + (n.type === "horizontal" ? "horizontal" : "vertical") + " " + this._themeClassFromOption(n.theme) + " " + (n.corners ? "ui-corner-all " : "") + (n.mini ? "ui-mini " : "")).wrapInner("<div class='ui-controlgroup-controls " + (n.shadow === !0 ? "ui-shadow" : "") + "'></div>").children() }; return r.groupLegend.length > 0 && e("<div role='heading' class='ui-controlgroup-label'></div>").append(r.groupLegend).prependTo(t), r }, _init: function () { this.refresh() }, _setOptions: function (e) { var n, r, i = this.element; return e.type !== t && (i.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + (e.type === "horizontal" ? "horizontal" : "vertical")), n = !0), e.theme !== t && i.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(e.theme)), e.corners !== t && i.toggleClass("ui-corner-all", e.corners), e.mini !== t && i.toggleClass("ui-mini", e.mini), e.shadow !== t && this._ui.childWrapper.toggleClass("ui-shadow", e.shadow), e.excludeInvisible !== t && (this.options.excludeInvisible = e.excludeInvisible, n = !0), r = this._super(e), n && this.refresh(), r }, container: function () { return this._ui.childWrapper }, refresh: function () { var t = this.container(), n = t.find(".ui-btn").not(".ui-slider-handle"), r = this._initialRefresh; e.mobile.checkboxradio && t.find(":mobile-checkboxradio").checkboxradio("refresh"), this._addFirstLastClasses(n, this.options.excludeInvisible ? this._getVisibles(n, r) : n, r), this._initialRefresh = !1 }, _destroy: function () { var e, t, n = this.options; if (n.enhanced) return this; e = this._ui, t = this.element.removeClass("ui-controlgroup ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini " + this._themeClassFromOption(n.theme)).find(".ui-btn").not(".ui-slider-handle"), this._removeFirstLastClasses(t), e.groupLegend.unwrap(), e.childWrapper.children().unwrap() } }, e.mobile.behaviors.addFirstLastClasses)) }(e), function (e, t) { e.widget("mobile.textinput", { initSelector: "input[type='text'],input[type='search'],:jqmData(type='search'),input[type='number'],:jqmData(type='number'),input[type='password'],input[type='email'],input[type='url'],input[type='tel'],textarea,input[type='time'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input[type='color'],input:not([type]),input[type='file']", options: { theme: null, corners: !0, mini: !1, preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1, wrapperClass: "", enhanced: !1 }, _create: function () { var t = this.options, n = this.element.is("[type='search'], :jqmData(type='search')"), r = this.element[0].tagName === "TEXTAREA", i = this.element.is("[data-" + (e.mobile.ns || "") + "type='range']"), s = (this.element.is("input") || this.element.is("[data-" + (e.mobile.ns || "") + "type='search']")) && !i; this.element.prop("disabled") && (t.disabled = !0), e.extend(this, { classes: this._classesFromOptions(), isSearch: n, isTextarea: r, isRange: i, inputNeedsWrap: s }), this._autoCorrect(), t.enhanced || this._enhance(), this._on({ focus: "_handleFocus", blur: "_handleBlur" }) }, refresh: function () { this.setOptions({ disabled: this.element.is(":disabled") }) }, _enhance: function () { var e = []; this.isTextarea && e.push("ui-input-text"), (this.isTextarea || this.isRange) && e.push("ui-shadow-inset"), this.inputNeedsWrap ? this.element.wrap(this._wrap()) : e = e.concat(this.classes), this.element.addClass(e.join(" ")) }, widget: function () { return this.inputNeedsWrap ? this.element.parent() : this.element }, _classesFromOptions: function () { var e = this.options, t = []; return t.push("ui-body-" + (e.theme === null ? "inherit" : e.theme)), e.corners && t.push("ui-corner-all"), e.mini && t.push("ui-mini"), e.disabled && t.push("ui-state-disabled"), e.wrapperClass && t.push(e.wrapperClass), t }, _wrap: function () { return e("<div class='" + (this.isSearch ? "ui-input-search " : "ui-input-text ") + this.classes.join(" ") + " " + "ui-shadow-inset'></div>") }, _autoCorrect: function () { typeof this.element[0].autocorrect != "undefined" && !e.support.touchOverflow && (this.element[0].setAttribute("autocorrect", "off"), this.element[0].setAttribute("autocomplete", "off")) }, _handleBlur: function () { this.widget().removeClass(e.mobile.focusClass), this.options.preventFocusZoom && e.mobile.zoom.enable(!0) }, _handleFocus: function () { this.options.preventFocusZoom && e.mobile.zoom.disable(!0), this.widget().addClass(e.mobile.focusClass) }, _setOptions: function (e) { var n = this.widget(); this._super(e); if (e.disabled !== t || e.mini !== t || e.corners !== t || e.theme !== t || e.wrapperClass !== t) n.removeClass(this.classes.join(" ")), this.classes = this._classesFromOptions(), n.addClass(this.classes.join(" ")); e.disabled !== t && this.element.prop("disabled", !!e.disabled) }, _destroy: function () { if (this.options.enhanced) return; this.inputNeedsWrap && this.element.unwrap(), this.element.removeClass("ui-input-text " + this.classes.join(" ")) } }) }(e), function (e, t) { e.widget("mobile.textinput", e.mobile.textinput, { options: { autogrow: !0, keyupTimeoutBuffer: 100 }, _create: function () { this._super(), this.options.autogrow && this.isTextarea && this._autogrow() }, _autogrow: function () { this.element.addClass("ui-textinput-autogrow"), this._on({ keyup: "_timeout", change: "_timeout", input: "_timeout", paste: "_timeout" }), this._on(!0, this.document, { pageshow: "_handleShow", popupbeforeposition: "_handleShow", updatelayout: "_handleShow", panelopen: "_handleShow" }) }, _handleShow: function (t) { e.contains(t.target, this.element[0]) && this.element.is(":visible") && (t.type !== "popupbeforeposition" && this.element.addClass("ui-textinput-autogrow-resize").animationComplete(e.proxy(function () { this.element.removeClass("ui-textinput-autogrow-resize") }, this), "transition"), this._prepareHeightUpdate()) }, _unbindAutogrow: function () { this.element.removeClass("ui-textinput-autogrow"), this._off(this.element, "keyup change input paste"), this._off(this.document, "pageshow popupbeforeposition updatelayout panelopen") }, keyupTimeout: null, _prepareHeightUpdate: function (e) { this.keyupTimeout && clearTimeout(this.keyupTimeout), e === t ? this._updateHeight() : this.keyupTimeout = this._delay("_updateHeight", e) }, _timeout: function () { this._prepareHeightUpdate(this.options.keyupTimeoutBuffer) }, _updateHeight: function () { var e, t, n, r, i, s, o, u, a, f = this.window.scrollTop(); this.keyupTimeout = 0, "onpage" in this.element[0] || this.element.css({ height: 0, "min-height": 0, "max-height": 0 }), r = this.element[0].scrollHeight, i = this.element[0].clientHeight, s = parseFloat(this.element.css("border-top-width")), o = parseFloat(this.element.css("border-bottom-width")), u = s + o, a = r + u + 15, i === 0 && (e = parseFloat(this.element.css("padding-top")), t = parseFloat(this.element.css("padding-bottom")), n = e + t, a += n), this.element.css({ height: a, "min-height": "", "max-height": "" }), this.window.scrollTop(f) }, refresh: function () { this.options.autogrow && this.isTextarea && this._updateHeight() }, _setOptions: function (e) { this._super(e), e.autogrow !== t && this.isTextarea && (e.autogrow ? this._autogrow() : this._unbindAutogrow()) } }) }(e), function (e, t) { e.widget("mobile.button", { initSelector: "input[type='button'], input[type='submit'], input[type='reset']", options: { theme: null, icon: null, iconpos: "left", iconshadow: !1, corners: !0, shadow: !0, inline: null, mini: null, wrapperClass: null, enhanced: !1 }, _create: function () { this.element.is(":disabled") && (this.options.disabled = !0), this.options.enhanced || this._enhance(), e.extend(this, { wrapper: this.element.parent() }), this._on({ focus: function () { this.widget().addClass(e.mobile.focusClass) }, blur: function () { this.widget().removeClass(e.mobile.focusClass) } }), this.refresh(!0) }, _enhance: function () { this.element.wrap(this._button()) }, _button: function () { var t = this.options, n = this._getIconClasses(this.options); return e("<div class='ui-btn ui-input-btn" + (t.wrapperClass ? " " + t.wrapperClass : "") + (t.theme ? " ui-btn-" + t.theme : "") + (t.corners ? " ui-corner-all" : "") + (t.shadow ? " ui-shadow" : "") + (t.inline ? " ui-btn-inline" : "") + (t.mini ? " ui-mini" : "") + (t.disabled ? " ui-state-disabled" : "") + (n ? " " + n : "") + "' >" + this.element.val() + "</div>") }, widget: function () { return this.wrapper }, _destroy: function () { this.element.insertBefore(this.wrapper), this.wrapper.remove() }, _getIconClasses: function (e) { return e.icon ? "ui-icon-" + e.icon + (e.iconshadow ? " ui-shadow-icon" : "") + " ui-btn-icon-" + e.iconpos : "" }, _setOptions: function (n) { var r = this.widget(); n.theme !== t && r.removeClass(this.options.theme).addClass("ui-btn-" + n.theme), n.corners !== t && r.toggleClass("ui-corner-all", n.corners), n.shadow !== t && r.toggleClass("ui-shadow", n.shadow), n.inline !== t && r.toggleClass("ui-btn-inline", n.inline), n.mini !== t && r.toggleClass("ui-mini", n.mini), n.disabled !== t && (this.element.prop("disabled", n.disabled), r.toggleClass("ui-state-disabled", n.disabled)), (n.icon !== t || n.iconshadow !== t || n.iconpos !== t) && r.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses(e.extend({}, this.options, n))), this._super(n) }, refresh: function (t) { var n, r = this.element.prop("disabled"); this.options.icon && this.options.iconpos === "notext" && this.element.attr("title") && this.element.attr("title", this.element.val()), t || (n = this.element.detach(), e(this.wrapper).text(this.element.val()).append(n)), this.options.disabled !== r && this._setOptions({ disabled: r }) } }) }(e), function (e, t) { e.mobile.behaviors.formReset = { _handleFormReset: function () { this._on(this.element.closest("form"), { reset: function () { this._delay("_reset") } }) } } }(e), function (e, t) { var n = e.mobile.path.hashToSelector; e.widget("mobile.checkboxradio", e.extend({ initSelector: "input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))", options: { theme: "inherit", mini: !1, wrapperClass: null, enhanced: !1, iconpos: "left" }, _create: function () { var t = this.element, n = this.options, r = function (e, t) { return e.jqmData(t) || e.closest("form, fieldset").jqmData(t) }, i = this.options.enhanced ? { element: this.element.siblings("label"), isParent: !1 } : this._findLabel(), s = t[0].type, o = "ui-" + s + "-on", u = "ui-" + s + "-off"; if (s !== "checkbox" && s !== "radio") return; this.element[0].disabled && (this.options.disabled = !0), n.iconpos = r(t, "iconpos") || i.element.attr("data-" + e.mobile.ns + "iconpos") || n.iconpos, n.mini = r(t, "mini") || n.mini, e.extend(this, { input: t, label: i.element, labelIsParent: i.isParent, inputtype: s, checkedClass: o, uncheckedClass: u }), this.options.enhanced || this._enhance(), this._on(i.element, { vmouseover: "_handleLabelVMouseOver", vclick: "_handleLabelVClick" }), this._on(t, { vmousedown: "_cacheVals", vclick: "_handleInputVClick", focus: "_handleInputFocus", blur: "_handleInputBlur" }), this._handleFormReset(), this.refresh() }, _findLabel: function () { var t, r, i, s = this.element, o = s[0].labels; return o && o.length > 0 ? (r = e(o[0]), i = e.contains(r[0], s[0])) : (t = s.closest("label"), i = t.length > 0, r = i ? t : e(this.document[0].getElementsByTagName("label")).filter("[for='" + n(s[0].id) + "']").first()), { element: r, isParent: i } }, _enhance: function () { this.label.addClass("ui-btn ui-corner-all"), this.labelIsParent ? this.input.add(this.label).wrapAll(this._wrapper()) : (this.element.wrap(this._wrapper()), this.element.parent().prepend(this.label)), this._setOptions({ theme: this.options.theme, iconpos: this.options.iconpos, mini: this.options.mini }) }, _wrapper: function () { return e("<div class='" + (this.options.wrapperClass ? this.options.wrapperClass : "") + " ui-" + this.inputtype + (this.options.disabled ? " ui-state-disabled" : "") + "' ></div>") }, _handleInputFocus: function () { this.label.addClass(e.mobile.focusClass) }, _handleInputBlur: function () { this.label.removeClass(e.mobile.focusClass) }, _handleInputVClick: function () { this.element.prop("checked", this.element.is(":checked")), this._getInputSet().not(this.element).prop("checked", !1), this._updateAll(!0) }, _handleLabelVMouseOver: function (e) { this.label.parent().hasClass("ui-state-disabled") && e.stopPropagation() }, _handleLabelVClick: function (e) { var t = this.element; if (t.is(":disabled")) { e.preventDefault(); return } return this._cacheVals(), t.prop("checked", this.inputtype === "radio" && !0 || !t.prop("checked")), t.triggerHandler("click"), this._getInputSet().not(t).prop("checked", !1), this._updateAll(), !1 }, _cacheVals: function () { this._getInputSet().each(function () { e(this).attr("data-" + e.mobile.ns + "cacheVal", this.checked) }) }, _getInputSet: function () { var t, r, i = this.element[0], s = i.name, o = i.form, u = this.element.parents().last().get(0), a = this.element; return s && this.inputtype === "radio" && u && (t = "input[type='radio'][name='" + n(s) + "']", o ? (r = o.getAttribute("id"), r && (a = e(t + "[form='" + n(r) + "']", u)), a = e(o).find(t).filter(function () { return this.form === o }).add(a)) : a = e(t, u).filter(function () { return !this.form })), a }, _updateAll: function (t) { var n = this; this._getInputSet().each(function () { var r = e(this); (this.checked || n.inputtype === "checkbox") && !t && r.trigger("change") }).checkboxradio("refresh") }, _reset: function () { this.refresh() }, _hasIcon: function () { var t, n, r = e.mobile.controlgroup; if (r) { t = this.element.closest(":mobile-controlgroup," + r.prototype.initSelector); if (t.length > 0) return n = e.data(t[0], "mobile-controlgroup"), (n ? n.options.type : t.attr("data-" + e.mobile.ns + "type")) !== "horizontal" } return !0 }, refresh: function () { var t = this.element[0].checked, n = e.mobile.activeBtnClass, r = "ui-btn-icon-" + this.options.iconpos, i = [], s = []; this._hasIcon() ? (s.push(n), i.push(r)) : (s.push(r), (t ? i : s).push(n)), t ? (i.push(this.checkedClass), s.push(this.uncheckedClass)) : (i.push(this.uncheckedClass), s.push(this.checkedClass)), this.widget().toggleClass("ui-state-disabled", this.element.prop("disabled")), this.label.addClass(i.join(" ")).removeClass(s.join(" ")) }, widget: function () { return this.label.parent() }, _setOptions: function (e) { var n = this.label, r = this.options, i = this.widget(), s = this._hasIcon(); e.disabled !== t && (this.input.prop("disabled", !!e.disabled), i.toggleClass("ui-state-disabled", !!e.disabled)), e.mini !== t && i.toggleClass("ui-mini", !!e.mini), e.theme !== t && n.removeClass("ui-btn-" + r.theme).addClass("ui-btn-" + e.theme), e.wrapperClass !== t && i.removeClass(r.wrapperClass).addClass(e.wrapperClass), e.iconpos !== t && s ? n.removeClass("ui-btn-icon-" + r.iconpos).addClass("ui-btn-icon-" + e.iconpos) : s || n.removeClass("ui-btn-icon-" + r.iconpos), this._super(e) } }, e.mobile.behaviors.formReset)) }(e), function (e, t) { e.widget("mobile.flipswitch", e.extend({ options: { onText: "On", offText: "Off", theme: null, enhanced: !1, wrapperClass: null, corners: !0, mini: !1 }, _create: function () { this.options.enhanced ? e.extend(this, { flipswitch: this.element.parent(), on: this.element.find(".ui-flipswitch-on").eq(0), off: this.element.find(".ui-flipswitch-off").eq(0), type: this.element.get(0).tagName }) : this._enhance(), this._handleFormReset(), this._originalTabIndex = this.element.attr("tabindex"), this._originalTabIndex != null && this.on.attr("tabindex", this._originalTabIndex), this.element.attr("tabindex", "-1"), this._on({ focus: "_handleInputFocus" }), this.element.is(":disabled") && this._setOptions({ disabled: !0 }), this._on(this.flipswitch, { click: "_toggle", swipeleft: "_left", swiperight: "_right" }), this._on(this.on, { keydown: "_keydown" }), this._on({ change: "refresh" }) }, _handleInputFocus: function () { this.on.focus() }, widget: function () { return this.flipswitch }, _left: function () { this.flipswitch.removeClass("ui-flipswitch-active"), this.type === "SELECT" ? this.element.get(0).selectedIndex = 0 : this.element.prop("checked", !1), this.element.trigger("change") }, _right: function () { this.flipswitch.addClass("ui-flipswitch-active"), this.type === "SELECT" ? this.element.get(0).selectedIndex = 1 : this.element.prop("checked", !0), this.element.trigger("change") }, _enhance: function () { var t = e("<div>"), n = this.options, r = this.element, i = n.theme ? n.theme : "inherit", s = e("<a></a>", { href: "#" }), o = e("<span></span>"), u = r.get(0).tagName, a = u === "INPUT" ? n.onText : r.find("option").eq(1).text(), f = u === "INPUT" ? n.offText : r.find("option").eq(0).text(); s.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(a), o.addClass("ui-flipswitch-off").text(f), t.addClass("ui-flipswitch ui-shadow-inset ui-bar-" + i + " " + (n.wrapperClass ? n.wrapperClass : "") + " " + (r.is(":checked") || r.find("option").eq(1).is(":selected") ? "ui-flipswitch-active" : "") + (r.is(":disabled") ? " ui-state-disabled" : "") + (n.corners ? " ui-corner-all" : "") + (n.mini ? " ui-mini" : "")).append(s, o), r.addClass("ui-flipswitch-input").after(t).appendTo(t), e.extend(this, { flipswitch: t, on: s, off: o, type: u }) }, _reset: function () { this.refresh() }, refresh: function () { var e, t = this.flipswitch.hasClass("ui-flipswitch-active") ? "_right" : "_left"; this.type === "SELECT" ? e = this.element.get(0).selectedIndex > 0 ? "_right" : "_left" : e = this.element.prop("checked") ? "_right" : "_left", e !== t && this[e]() }, _toggle: function () { var e = this.flipswitch.hasClass("ui-flipswitch-active") ? "_left" : "_right"; this[e]() }, _keydown: function (t) { t.which === e.mobile.keyCode.LEFT ? this._left() : t.which === e.mobile.keyCode.RIGHT ? this._right() : t.which === e.mobile.keyCode.SPACE && (this._toggle(), t.preventDefault()) }, _setOptions: function (e) { if (e.theme !== t) { var n = e.theme ? e.theme : "inherit", r = e.theme ? e.theme : "inherit"; this.widget().removeClass("ui-bar-" + n).addClass("ui-bar-" + r) } e.onText !== t && this.on.text(e.onText), e.offText !== t && this.off.text(e.offText), e.disabled !== t && this.widget().toggleClass("ui-state-disabled", e.disabled), e.mini !== t && this.widget().toggleClass("ui-mini", e.mini), e.corners !== t && this.widget().toggleClass("ui-corner-all", e.corners), this._super(e) }, _destroy: function () { if (this.options.enhanced) return; this._originalTabIndex != null ? this.element.attr("tabindex", this._originalTabIndex) : this.element.removeAttr("tabindex"), this.on.remove(), this.off.remove(), this.element.unwrap(), this.flipswitch.remove(), this.removeClass("ui-flipswitch-input") } }, e.mobile.behaviors.formReset)) }(e), function (e, r) { e.widget("mobile.slider", e.extend({ initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')", widgetEventPrefix: "slide", options: { theme: null, trackTheme: null, corners: !0, mini: !1, highlight: !1 }, _create: function () { var i = this, s = this.element, o = this.options.trackTheme || e.mobile.getAttribute(s[0], "theme"), u = o ? " ui-bar-" + o : " ui-bar-inherit", a = this.options.corners || s.jqmData("corners") ? " ui-corner-all" : "", f = this.options.mini || s.jqmData("mini") ? " ui-mini" : "", l = s[0].nodeName.toLowerCase(), c = l === "select", h = s.parent().is(":jqmData(role='rangeslider')"), p = c ? "ui-slider-switch" : "", d = s.attr("id"), v = e("[for='" + d + "']"), m = v.attr("id") || d + "-label", g = c ? 0 : parseFloat(s.attr("min")), y = c ? s.find("option").length - 1 : parseFloat(s.attr("max")), b = t.parseFloat(s.attr("step") || 1), w = n.createElement("a"), E = e(w), S = n.createElement("div"), x = e(S), T = this.options.highlight && !c ? function () { var t = n.createElement("div"); return t.className = "ui-slider-bg " + e.mobile.activeBtnClass, e(t).prependTo(x) }() : !1, N, C, k, L, A, O, M, _, D, P; v.attr("id", m), this.isToggleSwitch = c, w.setAttribute("href", "#"), S.setAttribute("role", "application"), S.className = [this.isToggleSwitch ? "ui-slider ui-slider-track ui-shadow-inset " : "ui-slider-track ui-shadow-inset ", p, u, a, f].join(""), w.className = "ui-slider-handle", S.appendChild(w), E.attr({ role: "slider", "aria-valuemin": g, "aria-valuemax": y, "aria-valuenow": this._value(), "aria-valuetext": this._value(), title: this._value(), "aria-labelledby": m }), e.extend(this, { slider: x, handle: E, control: s, type: l, step: b, max: y, min: g, valuebg: T, isRangeslider: h, dragging: !1, beforeStart: null, userModified: !1, mouseMoved: !1 }); if (c) { M = s.attr("tabindex"), M && E.attr("tabindex", M), s.attr("tabindex", "-1").focus(function () { e(this).blur(), E.focus() }), C = n.createElement("div"), C.className = "ui-slider-inneroffset"; for (k = 0, L = S.childNodes.length; k < L; k++) C.appendChild(S.childNodes[k]); S.appendChild(C), E.addClass("ui-slider-handle-snapping"), N = s.find("option"); for (A = 0, O = N.length; A < O; A++) _ = A ? "a" : "b", D = A ? " " + e.mobile.activeBtnClass : "", P = n.createElement("span"), P.className = ["ui-slider-label ui-slider-label-", _, D].join(""), P.setAttribute("role", "img"), P.appendChild(n.createTextNode(N[A].innerHTML)), e(P).prependTo(x); i._labels = e(".ui-slider-label", x) } s.addClass(c ? "ui-slider-switch" : "ui-slider-input"), this._on(s, { change: "_controlChange", keyup: "_controlKeyup", blur: "_controlBlur", vmouseup: "_controlVMouseUp" }), x.bind("vmousedown", e.proxy(this._sliderVMouseDown, this)).bind("vclick", !1), this._on(n, { vmousemove: "_preventDocumentDrag" }), this._on(x.add(n), { vmouseup: "_sliderVMouseUp" }), x.insertAfter(s), !c && !h && (C = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>", s.add(x).wrapAll(C)), this._on(this.handle, { vmousedown: "_handleVMouseDown", keydown: "_handleKeydown", keyup: "_handleKeyup" }), this.handle.bind("vclick", !1), this._handleFormReset(), this.refresh(r, r, !0) }, _setOptions: function (e) { e.theme !== r && this._setTheme(e.theme), e.trackTheme !== r && this._setTrackTheme(e.trackTheme), e.corners !== r && this._setCorners(e.corners), e.mini !== r && this._setMini(e.mini), e.highlight !== r && this._setHighlight(e.highlight), e.disabled !== r && this._setDisabled(e.disabled), this._super(e) }, _controlChange: function (e) { if (this._trigger("controlchange", e) === !1) return !1; this.mouseMoved || this.refresh(this._value(), !0) }, _controlKeyup: function () { this.refresh(this._value(), !0, !0) }, _controlBlur: function () { this.refresh(this._value(), !0) }, _controlVMouseUp: function () { this._checkedRefresh() }, _handleVMouseDown: function () { this.handle.focus() }, _handleKeydown: function (t) { var n = this._value(); if (this.options.disabled) return; switch (t.keyCode) { case e.mobile.keyCode.HOME: case e.mobile.keyCode.END: case e.mobile.keyCode.PAGE_UP: case e.mobile.keyCode.PAGE_DOWN: case e.mobile.keyCode.UP: case e.mobile.keyCode.RIGHT: case e.mobile.keyCode.DOWN: case e.mobile.keyCode.LEFT: t.preventDefault(), this._keySliding || (this._keySliding = !0, this.handle.addClass("ui-state-active")) } switch (t.keyCode) { case e.mobile.keyCode.HOME: this.refresh(this.min); break; case e.mobile.keyCode.END: this.refresh(this.max); break; case e.mobile.keyCode.PAGE_UP: case e.mobile.keyCode.UP: case e.mobile.keyCode.RIGHT: this.refresh(n + this.step); break; case e.mobile.keyCode.PAGE_DOWN: case e.mobile.keyCode.DOWN: case e.mobile.keyCode.LEFT: this.refresh(n - this.step) } }, _handleKeyup: function () { this._keySliding && (this._keySliding = !1, this.handle.removeClass("ui-state-active")) }, _sliderVMouseDown: function (e) { return this.options.disabled || e.which !== 1 && e.which !== 0 && e.which !== r ? !1 : this._trigger("beforestart", e) === !1 ? !1 : (this.dragging = !0, this.userModified = !1, this.mouseMoved = !1, this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex), this.refresh(e), this._trigger("start"), !1) }, _sliderVMouseUp: function () { if (this.dragging) return this.dragging = !1, this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"), this.mouseMoved ? this.userModified ? this.refresh(this.beforeStart === 0 ? 1 : 0) : this.refresh(this.beforeStart) : this.refresh(this.beforeStart === 0 ? 1 : 0)), this.mouseMoved = !1, this._trigger("stop"), !1 }, _preventDocumentDrag: function (e) { if (this._trigger("drag", e) === !1) return !1; if (this.dragging && !this.options.disabled) return this.mouseMoved = !0, this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"), this.refresh(e), this.userModified = this.beforeStart !== this.element[0].selectedIndex, !1 }, _checkedRefresh: function () { this.value !== this._value() && this.refresh(this._value()) }, _value: function () { return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val()) }, _reset: function () { this.refresh(r, !1, !0) }, refresh: function (t, r, i) { var s = this, o = e.mobile.getAttribute(this.element[0], "theme"), u = this.options.theme || o, a = u ? " ui-btn-" + u : "", f = this.options.trackTheme || o, l = f ? " ui-bar-" + f : " ui-bar-inherit", c = this.options.corners ? " ui-corner-all" : "", h = this.options.mini ? " ui-mini" : "", p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _; s.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch ui-slider-track ui-shadow-inset" : "ui-slider-track ui-shadow-inset", l, c, h].join(""), (this.options.disabled || this.element.prop("disabled")) && this.disable(), this.value = this._value(), this.options.highlight && !this.isToggleSwitch && this.slider.find(".ui-slider-bg").length === 0 && (this.valuebg = function () { var t = n.createElement("div"); return t.className = "ui-slider-bg " + e.mobile.activeBtnClass, e(t).prependTo(s.slider) }()), this.handle.addClass("ui-btn" + a + " ui-shadow"), b = this.element, w = !this.isToggleSwitch, E = w ? [] : b.find("option"), S = w ? parseFloat(b.attr("min")) : 0, x = w ? parseFloat(b.attr("max")) : E.length - 1, T = w && parseFloat(b.attr("step")) > 0 ? parseFloat(b.attr("step")) : 1; if (typeof t == "object") { v = t, m = 8, p = this.slider.offset().left, d = this.slider.width(), g = d / ((x - S) / T); if (!this.dragging || v.pageX < p - m || v.pageX > p + d + m) return; g > 1 ? y = (v.pageX - p) / d * 100 : y = Math.round((v.pageX - p) / d * 100) } else t == null && (t = w ? parseFloat(b.val() || 0) : b[0].selectedIndex), y = (parseFloat(t) - S) / (x - S) * 100; if (isNaN(y)) return; N = y / 100 * (x - S) + S, C = (N - S) % T, k = N - C, Math.abs(C) * 2 >= T && (k += C > 0 ? T : -T), L = 100 / ((x - S) / T), N = parseFloat(k.toFixed(5)), typeof g == "undefined" && (g = d / ((x - S) / T)), g > 1 && w && (y = (N - S) * L * (1 / T)), y < 0 && (y = 0), y > 100 && (y = 100), N < S && (N = S), N > x && (N = x), this.handle.css("left", y + "%"), this.handle[0].setAttribute("aria-valuenow", w ? N : E.eq(N).attr("value")), this.handle[0].setAttribute("aria-valuetext", w ? N : E.eq(N).getEncodedText()), this.handle[0].setAttribute("title", w ? N : E.eq(N).getEncodedText()), this.valuebg && this.valuebg.css("width", y + "%"), this._labels && (A = this.handle.width() / this.slider.width() * 100, O = y && A + (100 - A) * y / 100, M = y === 100 ? 0 : Math.min(A + 100 - O, 100), this._labels.each(function () { var t = e(this).hasClass("ui-slider-label-a"); e(this).width((t ? O : M) + "%") })); if (!i) { _ = !1, w ? (_ = parseFloat(b.val()) !== N, b.val(N)) : (_ = b[0].selectedIndex !== N, b[0].selectedIndex = N); if (this._trigger("beforechange", t) === !1) return !1; !r && _ && b.trigger("change") } }, _setHighlight: function (e) { e = !!e, e ? (this.options.highlight = !!e, this.refresh()) : this.valuebg && (this.valuebg.remove(), this.valuebg = !1) }, _setTheme: function (e) { this.handle.removeClass("ui-btn-" + this.options.theme).addClass("ui-btn-" + e); var t = this.options.theme ? this.options.theme : "inherit", n = e ? e : "inherit"; this.control.removeClass("ui-body-" + t).addClass("ui-body-" + n) }, _setTrackTheme: function (e) { var t = this.options.trackTheme ? this.options.trackTheme : "inherit", n = e ? e : "inherit"; this.slider.removeClass("ui-body-" + t).addClass("ui-body-" + n) }, _setMini: function (e) { e = !!e, !this.isToggleSwitch && !this.isRangeslider && (this.slider.parent().toggleClass("ui-mini", e), this.element.toggleClass("ui-mini", e)), this.slider.toggleClass("ui-mini", e) }, _setCorners: function (e) { this.slider.toggleClass("ui-corner-all", e), this.isToggleSwitch || this.control.toggleClass("ui-corner-all", e) }, _setDisabled: function (e) { e = !!e, this.element.prop("disabled", e), this.slider.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.toggleClass("ui-state-disabled", e) } }, e.mobile.behaviors.formReset)) }(e), function (e, t) { e.widget("mobile.rangeslider", e.extend({ options: { theme: null, trackTheme: null, corners: !0, mini: !1, highlight: !0 }, _create: function () { var t = this.element, n = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider", r = t.find("input").first(), i = t.find("input").last(), s = t.find("label").first(), o = e.data(r.get(0), "mobile-slider") || e.data(r.slider().get(0), "mobile-slider"), u = e.data(i.get(0), "mobile-slider") || e.data(i.slider().get(0), "mobile-slider"), a = o.slider, f = u.slider, l = o.handle, c = e("<div class='ui-rangeslider-sliders' />").appendTo(t); r.addClass("ui-rangeslider-first"), i.addClass("ui-rangeslider-last"), t.addClass(n), a.appendTo(c), f.appendTo(c), s.insertBefore(t), l.prependTo(f), e.extend(this, { _inputFirst: r, _inputLast: i, _sliderFirst: a, _sliderLast: f, _label: s, _targetVal: null, _sliderTarget: !1, _sliders: c, _proxy: !1 }), this.refresh(), this._on(this.element.find("input.ui-slider-input"), { slidebeforestart: "_slidebeforestart", slidestop: "_slidestop", slidedrag: "_slidedrag", slidebeforechange: "_change", blur: "_change", keyup: "_change" }), this._on({ mousedown: "_change" }), this._on(this.element.closest("form"), { reset: "_handleReset" }), this._on(l, { vmousedown: "_dragFirstHandle" }) }, _handleReset: function () { var e = this; setTimeout(function () { e._updateHighlight() }, 0) }, _dragFirstHandle: function (t) { return e.data(this._inputFirst.get(0), "mobile-slider").dragging = !0, e.data(this._inputFirst.get(0), "mobile-slider").refresh(t), e.data(this._inputFirst.get(0), "mobile-slider")._trigger("start"), !1 }, _slidedrag: function (t) { var n = e(t.target).is(this._inputFirst), r = n ? this._inputLast : this._inputFirst; this._sliderTarget = !1; if (this._proxy === "first" && n || this._proxy === "last" && !n) return e.data(r.get(0), "mobile-slider").dragging = !0, e.data(r.get(0), "mobile-slider").refresh(t), !1 }, _slidestop: function (t) { var n = e(t.target).is(this._inputFirst); this._proxy = !1, this.element.find("input").trigger("vmouseup"), this._sliderFirst.css("z-index", n ? 1 : "") }, _slidebeforestart: function (t) { this._sliderTarget = !1, e(t.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0, this._targetVal = e(t.target).val()) }, _setOptions: function (e) { e.theme !== t && this._setTheme(e.theme), e.trackTheme !== t && this._setTrackTheme(e.trackTheme), e.mini !== t && this._setMini(e.mini), e.highlight !== t && this._setHighlight(e.highlight), e.disabled !== t && this._setDisabled(e.disabled), this._super(e), this.refresh() }, refresh: function () { var e = this.element, t = this.options; if (this._inputFirst.is(":disabled") || this._inputLast.is(":disabled")) this.options.disabled = !0; e.find("input").slider({ theme: t.theme, trackTheme: t.trackTheme, disabled: t.disabled, corners: t.corners, mini: t.mini, highlight: t.highlight }).slider("refresh"), this._updateHighlight() }, _change: function (t) { if (t.type === "keyup") return this._updateHighlight(), !1; var n = this, r = parseFloat(this._inputFirst.val(), 10), i = parseFloat(this._inputLast.val(), 10), s = e(t.target).hasClass("ui-rangeslider-first"), o = s ? this._inputFirst : this._inputLast, u = s ? this._inputLast : this._inputFirst; if (this._inputFirst.val() > this._inputLast.val() && t.type === "mousedown" && !e(t.target).hasClass("ui-slider-handle")) o.blur(); else if (t.type === "mousedown") return; r > i && !this._sliderTarget ? (o.val(s ? i : r).slider("refresh"), this._trigger("normalize")) : r > i && (o.val(this._targetVal).slider("refresh"), setTimeout(function () { u.val(s ? r : i).slider("refresh"), e.data(u.get(0), "mobile-slider").handle.focus(), n._sliderFirst.css("z-index", s ? "" : 1), n._trigger("normalize") }, 0), this._proxy = s ? "first" : "last"), r === i ? (e.data(o.get(0), "mobile-slider").handle.css("z-index", 1), e.data(u.get(0), "mobile-slider").handle.css("z-index", 0)) : (e.data(u.get(0), "mobile-slider").handle.css("z-index", ""), e.data(o.get(0), "mobile-slider").handle.css("z-index", "")), this._updateHighlight(); if (r >= i) return !1 }, _updateHighlight: function () { var t = parseInt(e.data(this._inputFirst.get(0), "mobile-slider").handle.get(0).style.left, 10), n = parseInt(e.data(this._inputLast.get(0), "mobile-slider").handle.get(0).style.left, 10), r = n - t; this.element.find(".ui-slider-bg").css({ "margin-left": t + "%", width: r + "%" }) }, _setTheme: function (e) { this._inputFirst.slider("option", "theme", e), this._inputLast.slider("option", "theme", e) }, _setTrackTheme: function (e) { this._inputFirst.slider("option", "trackTheme", e), this._inputLast.slider("option", "trackTheme", e) }, _setMini: function (e) { this._inputFirst.slider("option", "mini", e), this._inputLast.slider("option", "mini", e), this.element.toggleClass("ui-mini", !!e) }, _setHighlight: function (e) { this._inputFirst.slider("option", "highlight", e), this._inputLast.slider("option", "highlight", e) }, _setDisabled: function (e) { this._inputFirst.prop("disabled", e), this._inputLast.prop("disabled", e) }, _destroy: function () { this._label.prependTo(this.element), this.element.removeClass("ui-rangeslider ui-mini"), this._inputFirst.after(this._sliderFirst), this._inputLast.after(this._sliderLast), this._sliders.remove(), this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy") } }, e.mobile.behaviors.formReset)) }(e), function (e, r) { e.widget("mobile.selectmenu", e.extend({ initSelector: "select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )", options: { theme: null, icon: "carat-d", iconpos: "right", inline: !1, corners: !0, shadow: !0, iconshadow: !1, overlayTheme: null, dividerTheme: null, hidePlaceholderMenuItems: !0, closeText: "Close", nativeMenu: !0, preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1, mini: !1 }, _button: function () { return e("<div/>") }, _setDisabled: function (e) { return this.element.attr("disabled", e), this.button.attr("aria-disabled", e), this._setOption("disabled", e) }, _focusButton: function () { var e = this; setTimeout(function () { e.button.focus() }, 40) }, _selectOptions: function () { return this.select.find("option") }, _preExtension: function () { var t = this.options.inline || this.element.jqmData("inline"), n = this.options.mini || this.element.jqmData("mini"), r = ""; !~this.element[0].className.indexOf("ui-btn-left") || (r = " ui-btn-left"), !~this.element[0].className.indexOf("ui-btn-right") || (r = " ui-btn-right"), t && (r += " ui-btn-inline"), n && (r += " ui-mini"), this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + r + "'>"), this.selectId = this.select.attr("id") || "select-" + this.uuid, this.buttonId = this.selectId + "-button", this.label = e("label[for='" + this.selectId + "']"), this.isMultiple = this.select[0].multiple }, _destroy: function () { var e = this.element.parents(".ui-select"); e.length > 0 && (e.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(e.hasClass("ui-btn-left") ? "ui-btn-left" : "ui-btn-right"), this.element.insertAfter(e), e.remove()) }, _create: function () { this._preExtension(), this.button = this._button(); var n = this, r = this.options, i = r.icon ? r.iconpos || this.select.jqmData("iconpos") : !1, s = this.button.insertBefore(this.select).attr("id", this.buttonId).addClass("ui-btn" + (r.icon ? " ui-icon-" + r.icon + " ui-btn-icon-" + i + (r.iconshadow ? " ui-shadow-icon" : "") : "") + (r.theme ? " ui-btn-" + r.theme : "") + (r.corners ? " ui-corner-all" : "") + (r.shadow ? " ui-shadow" : "")); this.setButtonText(), r.nativeMenu && t.opera && t.opera.version && s.addClass("ui-select-nativeonly"), this.isMultiple && (this.buttonCount = e("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(s.addClass("ui-li-has-count"))), (r.disabled || this.element.attr("disabled")) && this.disable(), this.select.change(function () { n.refresh(), !r.nativeMenu || n._delay(function () { n.select.blur() }) }), this._handleFormReset(), this._on(this.button, { keydown: "_handleKeydown" }), this.build() }, build: function () { var t = this; this.select.appendTo(t.button).bind("vmousedown", function () { t.button.addClass(e.mobile.activeBtnClass) }).bind("focus", function () { t.button.addClass(e.mobile.focusClass) }).bind("blur", function () { t.button.removeClass(e.mobile.focusClass) }).bind("focus vmouseover", function () { t.button.trigger("vmouseover") }).bind("vmousemove", function () { t.button.removeClass(e.mobile.activeBtnClass) }).bind("change blur vmouseout", function () { t.button.trigger("vmouseout").removeClass(e.mobile.activeBtnClass) }), t.button.bind("vmousedown", function () { t.options.preventFocusZoom && e.mobile.zoom.disable(!0) }), t.label.bind("click focus", function () { t.options.preventFocusZoom && e.mobile.zoom.disable(!0) }), t.select.bind("focus", function () { t.options.preventFocusZoom && e.mobile.zoom.disable(!0) }), t.button.bind("mouseup", function () { t.options.preventFocusZoom && setTimeout(function () { e.mobile.zoom.enable(!0) }, 0) }), t.select.bind("blur", function () { t.options.preventFocusZoom && e.mobile.zoom.enable(!0) }) }, selected: function () { return this._selectOptions().filter(":selected") }, selectedIndices: function () { var e = this; return this.selected().map(function () { return e._selectOptions().index(this) }).get() }, setButtonText: function () { var t = this, r = this.selected(), i = this.placeholder, s = e(n.createElement("span")); this.button.children("span").not(".ui-li-count").remove().end().end().prepend(function () { return r.length ? i = r.map(function () { return e(this).text() }).get().join(", ") : i = t.placeholder, i ? s.text(i) : s.html("&#160;"), s.addClass(t.select.attr("class")).addClass(r.attr("class")).removeClass("ui-screen-hidden") }()) }, setButtonCount: function () { var e = this.selected(); this.isMultiple && this.buttonCount[e.length > 1 ? "show" : "hide"]().text(e.length) }, _handleKeydown: function () { this._delay("_refreshButton") }, _reset: function () { this.refresh() }, _refreshButton: function () { this.setButtonText(), this.setButtonCount() }, refresh: function () { this._refreshButton() }, open: e.noop, close: e.noop, disable: function () { this._setDisabled(!0), this.button.addClass("ui-state-disabled") }, enable: function () { this._setDisabled(!1), this.button.removeClass("ui-state-disabled") } }, e.mobile.behaviors.formReset)) }(e), function (e, t) { function r() { return n || (n = e("<div></div>", { "class": "ui-slider-popup ui-shadow ui-corner-all" })), n.clone() } var n; e.widget("mobile.slider", e.mobile.slider, { options: { popupEnabled: !1, showValue: !1 }, _create: function () { this._super(), e.extend(this, { _currentValue: null, _popup: null, _popupVisible: !1 }), this._setOption("popupEnabled", this.options.popupEnabled), this._on(this.handle, { vmousedown: "_showPopup" }), this._on(this.slider.add(this.document), { vmouseup: "_hidePopup" }), this._refresh() }, _positionPopup: function () { var e = this.handle.offset(); this._popup.offset({ left: e.left + (this.handle.width() - this._popup.width()) / 2, top: e.top - this._popup.outerHeight() - 5 }) }, _setOption: function (e, t) { this._super(e, t), e === "showValue" ? this.handle.html(t && !this.options.mini ? this._value() : "") : e === "popupEnabled" && t && !this._popup && (this._popup = r().addClass("ui-body-" + (this.options.theme || "a")).hide().insertBefore(this.element)) }, refresh: function () { this._super.apply(this, arguments), this._refresh() }, _refresh: function () { var e = this.options, t; e.popupEnabled && this.handle.removeAttr("title"), t = this._value(); if (t === this._currentValue) return; this._currentValue = t, e.popupEnabled && this._popup && (this._positionPopup(), this._popup.html(t)), e.showValue && !this.options.mini && this.handle.html(t) }, _showPopup: function () { this.options.popupEnabled && !this._popupVisible && (this.handle.html(""), this._popup.show(), this._positionPopup(), this._popupVisible = !0) }, _hidePopup: function () { var e = this.options; e.popupEnabled && this._popupVisible && (e.showValue && !e.mini && this.handle.html(this._value()), this._popup.hide(), this._popupVisible = !1) } }) }(e), function (e, t) { var n = e.mobile.getAttribute; e.widget("mobile.listview", e.extend({ options: { theme: null, countTheme: null, dividerTheme: null, icon: "carat-r", splitIcon: "carat-r", splitTheme: null, corners: !0, shadow: !0, inset: !1 }, _create: function () { var e = this, t = ""; t += e.options.inset ? " ui-listview-inset" : "", !e.options.inset || (t += e.options.corners ? " ui-corner-all" : "", t += e.options.shadow ? " ui-shadow" : ""), e.element.addClass(" ui-listview" + t), e.refresh(!0) }, _findFirstElementByTagName: function (e, t, n, r) { var i = {}; i[n] = i[r] = !0; while (e) { if (i[e.nodeName]) return e; e = e[t] } return null }, _addThumbClasses: function (t) { var n, r, i = t.length; for (n = 0; n < i; n++) r = e(this._findFirstElementByTagName(t[n].firstChild, "nextSibling", "img", "IMG")), r.length && e(this._findFirstElementByTagName(r[0].parentNode, "parentNode", "li", "LI")).addClass(r.hasClass("ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb") }, _getChildrenByTagName: function (t, n, r) { var i = [], s = {}; s[n] = s[r] = !0, t = t.firstChild; while (t) s[t.nodeName] && i.push(t), t = t.nextSibling; return e(i) }, _beforeListviewRefresh: e.noop, _afterListviewRefresh: e.noop, refresh: function (t) { var r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x = this.options, T = this.element, N = !!e.nodeName(T[0], "ol"), C = T.attr("start"), k = {}, L = T.find(".ui-li-count"), A = n(T[0], "counttheme") || this.options.countTheme, O = A ? "ui-body-" + A : "ui-body-inherit"; x.theme && T.addClass("ui-group-theme-" + x.theme), N && (C || C === 0) && (p = parseInt(C, 10) - 1, T.css("counter-reset", "listnumbering " + p)), this._beforeListviewRefresh(), S = this._getChildrenByTagName(T[0], "li", "LI"); for (i = 0, s = S.length; i < s; i++) { o = S.eq(i), u = ""; if (t || o[0].className.search(/\bui-li-static\b|\bui-li-divider\b/) < 0) c = this._getChildrenByTagName(o[0], "a", "A"), h = n(o[0], "role") === "list-divider", v = o.attr("value"), a = n(o[0], "theme"), c.length && c[0].className.search(/\bui-btn\b/) < 0 && !h ? (f = n(o[0], "icon"), l = f === !1 ? !1 : f || x.icon, c.removeClass("ui-link"), r = "ui-btn", a && (r += " ui-btn-" + a), c.length > 1 ? (u = "ui-li-has-alt", m = c.last(), g = n(m[0], "theme") || x.splitTheme || n(o[0], "theme", !0), y = g ? " ui-btn-" + g : "", b = n(m[0], "icon") || n(o[0], "icon") || x.splitIcon, w = "ui-btn ui-btn-icon-notext ui-icon-" + b + y, m.attr("title", e.trim(m.getEncodedText())).addClass(w).empty(), c = c.first()) : l && (r += " ui-btn-icon-right ui-icon-" + l), c.addClass(r)) : h ? (E = n(o[0], "theme") || x.dividerTheme || x.theme, u = "ui-li-divider ui-bar-" + (E ? E : "inherit"), o.attr("role", "heading")) : c.length <= 0 && (u = "ui-li-static ui-body-" + (a ? a : "inherit")), N && v && (d = parseInt(v, 10) - 1, o.css("counter-reset", "listnumbering " + d)); k[u] || (k[u] = []), k[u].push(o[0]) } for (u in k) e(k[u]).addClass(u); L.each(function () { e(this).closest("li").addClass("ui-li-has-count") }), O && L.not("[class*='ui-body-']").addClass(O), this._addThumbClasses(S), this._addThumbClasses(S.find(".ui-btn")), this._afterListviewRefresh(), this._addFirstLastClasses(S, this._getVisibles(S, t), t) } }, e.mobile.behaviors.addFirstLastClasses)) }(e), function (e, t) { e.widget("mobile.navbar", { options: { iconpos: "top", grid: null }, _create: function () { var r = this.element, i = r.find("a, button"), s = i.filter(":jqmData(icon)").length ? this.options.iconpos : t; r.addClass("ui-navbar").attr("role", "navigation").find("ul").jqmEnhanceable().grid({ grid: this.options.grid }), i.each(function () { var t = e.mobile.getAttribute(this, "icon"), n = e.mobile.getAttribute(this, "theme"), r = "ui-btn"; n && (r += " ui-btn-" + n), t && (r += " ui-icon-" + t + " ui-btn-icon-" + s), e(this).addClass(r) }), r.delegate("a", "vclick", function () { var t = e(this); t.hasClass("ui-state-disabled") || t.hasClass("ui-disabled") || t.hasClass(e.mobile.activeBtnClass) || (i.removeClass(e.mobile.activeBtnClass), t.addClass(e.mobile.activeBtnClass), e(n).one("pagehide", function () { t.removeClass(e.mobile.activeBtnClass) })) }), r.closest(".ui-page").bind("pagebeforeshow", function () { i.filter(".ui-state-persist").addClass(e.mobile.activeBtnClass) }) } }) }(e), function (e, n) { e.widget("mobile.panel", { options: { classes: { panel: "ui-panel", panelOpen: "ui-panel-open", panelClosed: "ui-panel-closed", panelFixed: "ui-panel-fixed", panelInner: "ui-panel-inner", modal: "ui-panel-dismiss", modalOpen: "ui-panel-dismiss-open", pageContainer: "ui-panel-page-container", pageWrapper: "ui-panel-wrapper", pageFixedToolbar: "ui-panel-fixed-toolbar", pageContentPrefix: "ui-panel-page-content", animate: "ui-panel-animate" }, animate: !0, theme: null, position: "left", dismissible: !0, display: "reveal", swipeClose: !0, positionFixed: !1 }, _closeLink: null, _parentPage: null, _page: null, _modal: null, _panelInner: null, _wrapper: null, _fixedToolbars: null, _create: function () { var t = this.element, n = t.closest(".ui-page, :jqmData(role='page')"); e.extend(this, { _closeLink: t.find(":jqmData(rel='close')"), _parentPage: n.length > 0 ? n : !1, _openedPage: null, _page: this._getPage, _panelInner: this._getPanelInner(), _fixedToolbars: this._getFixedToolbars }), this.options.display !== "overlay" && this._getWrapper(), this._addPanelClasses(), e.support.cssTransform3d && !!this.options.animate && this.element.addClass(this.options.classes.animate), this._bindUpdateLayout(), this._bindCloseEvents(), this._bindLinkListeners(), this._bindPageEvents(), !this.options.dismissible || this._createModal(), this._bindSwipeEvents() }, _getPanelInner: function () { var e = this.element.find("." + this.options.classes.panelInner); return e.length === 0 && (e = this.element.children().wrapAll("<div class='" + this.options.classes.panelInner + "' />").parent()), e }, _createModal: function () { var t = this, n = t._parentPage ? t._parentPage.parent() : t.element.parent(); t._modal = e("<div class='" + t.options.classes.modal + "'></div>").on("mousedown", function () { t.close() }).appendTo(n) }, _getPage: function () { var t = this._openedPage || this._parentPage || e("." + e.mobile.activePageClass); return t }, _getWrapper: function () { var e = this._page().find("." + this.options.classes.pageWrapper); e.length === 0 && (e = this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='" + this.options.classes.pageWrapper + "'></div>").parent()), this._wrapper = e }, _getFixedToolbars: function () { var t = e("body").children(".ui-header-fixed, .ui-footer-fixed"), n = this._page().find(".ui-header-fixed, .ui-footer-fixed"), r = t.add(n).addClass(this.options.classes.pageFixedToolbar); return r }, _getPosDisplayClasses: function (e) { return e + "-position-" + this.options.position + " " + e + "-display-" + this.options.display }, _getPanelClasses: function () { var e = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed + " " + "ui-body-" + (this.options.theme ? this.options.theme : "inherit"); return !this.options.positionFixed || (e += " " + this.options.classes.panelFixed), e }, _addPanelClasses: function () { this.element.addClass(this._getPanelClasses()) }, _handleCloseClick: function (e) { e.isDefaultPrevented() || this.close() }, _bindCloseEvents: function () { this._on(this._closeLink, { click: "_handleCloseClick" }), this._on({ "click a:jqmData(ajax='false')": "_handleCloseClick" }) }, _positionPanel: function (t) { var n = this, r = n._panelInner.outerHeight(), i = r > e.mobile.getScreenHeight(); i || !n.options.positionFixed ? (i && (n._unfixPanel(), e.mobile.resetActivePageHeight(r)), t && this.window[0].scrollTo(0, e.mobile.defaultHomeScroll)) : n._fixPanel() }, _bindFixListener: function () { this._on(e(t), { throttledresize: "_positionPanel" }) }, _unbindFixListener: function () { this._off(e(t), "throttledresize") }, _unfixPanel: function () { !!this.options.positionFixed && e.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed) }, _fixPanel: function () { !!this.options.positionFixed && e.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed) }, _bindUpdateLayout: function () { var e = this; e.element.on("updatelayout", function () { e._open && e._positionPanel() }) }, _bindLinkListeners: function () { this._on("body", { "click a": "_handleClick" }) }, _handleClick: function (t) { var r, i = this.element.attr("id"); t.currentTarget.href.split("#")[1] === i && i !== n && (t.preventDefault(), r = e(t.target), r.hasClass("ui-btn") && (r.addClass(e.mobile.activeBtnClass), this.element.one("panelopen panelclose", function () { r.removeClass(e.mobile.activeBtnClass) })), this.toggle()) }, _bindSwipeEvents: function () { var e = this, t = e._modal ? e.element.add(e._modal) : e.element; !e.options.swipeClose || (e.options.position === "left" ? t.on("swipeleft.panel", function () { e.close() }) : t.on("swiperight.panel", function () { e.close() })) }, _bindPageEvents: function () { var e = this; this.document.on("panelbeforeopen", function (t) { e._open && t.target !== e.element[0] && e.close() }).on("keyup.panel", function (t) { t.keyCode === 27 && e._open && e.close() }), !this._parentPage && this.options.display !== "overlay" && this._on(this.document, { pageshow: function () { this._openedPage = null, this._getWrapper() } }), e._parentPage ? this.document.on("pagehide", ":jqmData(role='page')", function () { e._open && e.close(!0) }) : this.document.on("pagebeforehide", function () { e._open && e.close(!0) }) }, _open: !1, _pageContentOpenClasses: null, _modalOpenClasses: null, open: function (t) { if (!this._open) { var n = this, r = n.options, i = function () { n._off(n.document, "panelclose"), n._page().jqmData("panel", "open"), e.support.cssTransform3d && !!r.animate && r.display !== "overlay" && (n._wrapper.addClass(r.classes.animate), n._fixedToolbars().addClass(r.classes.animate)), !t && e.support.cssTransform3d && !!r.animate ? (n._wrapper || n.element).animationComplete(s, "transition") : setTimeout(s, 0), r.theme && r.display !== "overlay" && n._page().parent().addClass(r.classes.pageContainer + "-themed " + r.classes.pageContainer + "-" + r.theme), n.element.removeClass(r.classes.panelClosed).addClass(r.classes.panelOpen), n._positionPanel(!0), n._pageContentOpenClasses = n._getPosDisplayClasses(r.classes.pageContentPrefix), r.display !== "overlay" && (n._page().parent().addClass(r.classes.pageContainer), n._wrapper.addClass(n._pageContentOpenClasses), n._fixedToolbars().addClass(n._pageContentOpenClasses)), n._modalOpenClasses = n._getPosDisplayClasses(r.classes.modal) + " " + r.classes.modalOpen, n._modal && n._modal.addClass(n._modalOpenClasses).height(Math.max(n._modal.height(), n.document.height())) }, s = function () { if (!n._open) return; r.display !== "overlay" && (n._wrapper.addClass(r.classes.pageContentPrefix + "-open"), n._fixedToolbars().addClass(r.classes.pageContentPrefix + "-open")), n._bindFixListener(), n._trigger("open"), n._openedPage = n._page() }; n._trigger("beforeopen"), n._page().jqmData("panel") === "open" ? n._on(n.document, { panelclose: i }) : i(), n._open = !0 } }, close: function (t) { if (this._open) { var n = this, r = this.options, i = function () { n.element.removeClass(r.classes.panelOpen), r.display !== "overlay" && (n._wrapper.removeClass(n._pageContentOpenClasses), n._fixedToolbars().removeClass(n._pageContentOpenClasses)), !t && e.support.cssTransform3d && !!r.animate ? (n._wrapper || n.element).animationComplete(s, "transition") : setTimeout(s, 0), n._modal && n._modal.removeClass(n._modalOpenClasses).height("") }, s = function () { r.theme && r.display !== "overlay" && n._page().parent().removeClass(r.classes.pageContainer + "-themed " + r.classes.pageContainer + "-" + r.theme), n.element.addClass(r.classes.panelClosed), r.display !== "overlay" && (n._page().parent().removeClass(r.classes.pageContainer), n._wrapper.removeClass(r.classes.pageContentPrefix + "-open"), n._fixedToolbars().removeClass(r.classes.pageContentPrefix + "-open")), e.support.cssTransform3d && !!r.animate && r.display !== "overlay" && (n._wrapper.removeClass(r.classes.animate), n._fixedToolbars().removeClass(r.classes.animate)), n._fixPanel(), n._unbindFixListener(), e.mobile.resetActivePageHeight(), n._page().jqmRemoveData("panel"), n._trigger("close"), n._openedPage = null }; n._trigger("beforeclose"), i(), n._open = !1 } }, toggle: function () { this[this._open ? "close" : "open"]() }, _destroy: function () { var t, n = this.options, r = e("body > :mobile-panel").length + e.mobile.activePage.find(":mobile-panel").length > 1; n.display !== "overlay" && (t = e("body > :mobile-panel").add(e.mobile.activePage.find(":mobile-panel")), t.not(".ui-panel-display-overlay").not(this.element).length === 0 && this._wrapper.children().unwrap(), this._open && (this._fixedToolbars().removeClass(n.classes.pageContentPrefix + "-open"), e.support.cssTransform3d && !!n.animate && this._fixedToolbars().removeClass(n.classes.animate), this._page().parent().removeClass(n.classes.pageContainer), n.theme && this._page().parent().removeClass(n.classes.pageContainer + "-themed " + n.classes.pageContainer + "-" + n.theme))), r || this.document.off("panelopen panelclose"), this._open && this._page().jqmRemoveData("panel"), this._panelInner.children().unwrap(), this.element.removeClass([this._getPanelClasses(), n.classes.panelOpen, n.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"), this._modal && this._modal.remove() } }) }(e), function (e, n) { function r(e, t, n, r) { var i = r; return e < t ? i = n + (e - t) / 2 : i = Math.min(Math.max(n, r - t / 2), n + e - t), i } function i(e) { return { x: e.scrollLeft(), y: e.scrollTop(), cx: e[0].innerWidth || e.width(), cy: e[0].innerHeight || e.height() } } e.widget("mobile.popup", { options: { wrapperClass: null, theme: null, overlayTheme: null, shadow: !0, corners: !0, transition: "none", positionTo: "origin", tolerance: null, closeLinkSelector: "a:jqmData(rel='back')", closeLinkEvents: "click.popup", navigateEvents: "navigate.popup", closeEvents: "navigate.popup pagebeforechange.popup", dismissible: !0, enhanced: !1, history: !e.mobile.browser.oldIE }, _handleDocumentVmousedown: function (t) { this._isOpen && e.contains(this._ui.container[0], t.target) && this._ignoreResizeEvents() }, _create: function () { var t = this.element, n = t.attr("id"), r = this.options; r.history = r.history && e.mobile.ajaxEnabled && e.mobile.hashListeningEnabled, this._on(this.document, { vmousedown: "_handleDocumentVmousedown" }), e.extend(this, { _scrollTop: 0, _page: t.closest(".ui-page"), _ui: null, _fallbackTransition: "", _currentTransition: !1, _prerequisites: null, _isOpen: !1, _tolerance: null, _resizeData: null, _ignoreResizeTo: 0, _orientationchangeInProgress: !1 }), this._page.length === 0 && (this._page = e("body")), r.enhanced ? this._ui = { container: t.parent(), screen: t.parent().prev(), placeholder: e(this.document[0].getElementById(n + "-placeholder")) } : (this._ui = this._enhance(t, n), this._applyTransition(r.transition)), this._setTolerance(r.tolerance)._ui.focusElement = this._ui.container, this._on(this._ui.screen, { vclick: "_eatEventAndClose" }), this._on(this.window, { orientationchange: e.proxy(this, "_handleWindowOrientationchange"), resize: e.proxy(this, "_handleWindowResize"), keyup: e.proxy(this, "_handleWindowKeyUp") }), this._on(this.document, { focusin: "_handleDocumentFocusIn" }) }, _enhance: function (t, n) { var r = this.options, i = r.wrapperClass, s = { screen: e("<div class='ui-screen-hidden ui-popup-screen " + this._themeClassFromOption("ui-overlay-", r.overlayTheme) + "'></div>"), placeholder: e("<div style='display: none;'><!-- placeholder --></div>"), container: e("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate" + (i ? " " + i : "") + "'></div>") }, o = this.document[0].createDocumentFragment(); return o.appendChild(s.screen[0]), o.appendChild(s.container[0]), n && (s.screen.attr("id", n + "-screen"), s.container.attr("id", n + "-popup"), s.placeholder.attr("id", n + "-placeholder").html("<!-- placeholder for " + n + " -->")), this._page[0].appendChild(o), s.placeholder.insertAfter(t), t.detach().addClass("ui-popup " + this._themeClassFromOption("ui-body-", r.theme) + " " + (r.shadow ? "ui-overlay-shadow " : "") + (r.corners ? "ui-corner-all " : "")).appendTo(s.container), s }, _eatEventAndClose: function (e) { return e.preventDefault(), e.stopImmediatePropagation(), this.options.dismissible && this.close(), !1 }, _resizeScreen: function () { var e = this._ui.screen, t = this._ui.container.outerHeight(!0), n = e.removeAttr("style").height(), r = this.document.height() - 1; n < r ? e.height(r) : t > n && e.height(t) }, _handleWindowKeyUp: function (t) { if (this._isOpen && t.keyCode === e.mobile.keyCode.ESCAPE) return this._eatEventAndClose(t) }, _expectResizeEvent: function () { var e = i(this.window); if (this._resizeData) { if (e.x === this._resizeData.windowCoordinates.x && e.y === this._resizeData.windowCoordinates.y && e.cx === this._resizeData.windowCoordinates.cx && e.cy === this._resizeData.windowCoordinates.cy) return !1; clearTimeout(this._resizeData.timeoutId) } return this._resizeData = { timeoutId: this._delay("_resizeTimeout", 200), windowCoordinates: e }, !0 }, _resizeTimeout: function () { this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate"), this.reposition({ positionTo: "window" }), this._ignoreResizeEvents()), this._resizeScreen(), this._resizeData = null, this._orientationchangeInProgress = !1) : (this._resizeData = null, this._orientationchangeInProgress = !1) }, _stopIgnoringResizeEvents: function () { this._ignoreResizeTo = 0 }, _ignoreResizeEvents: function () { this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo), this._ignoreResizeTo = this._delay("_stopIgnoringResizeEvents", 1e3) }, _handleWindowResize: function () { this._isOpen && this._ignoreResizeTo === 0 && (this._expectResizeEvent() || this._orientationchangeInProgress) && !this._ui.container.hasClass("ui-popup-hidden") && this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style") }, _handleWindowOrientationchange: function () { !this._orientationchangeInProgress && this._isOpen && this._ignoreResizeTo === 0 && (this._expectResizeEvent(), this._orientationchangeInProgress = !0) }, _handleDocumentFocusIn: function (t) { var n, r = t.target, i = this._ui; if (!this._isOpen) return; if (r !== i.container[0]) { n = e(r); if (!e.contains(i.container[0], r)) return e(this.document[0].activeElement).one("focus", e.proxy(function () { this._safelyBlur(r) }, this)), i.focusElement.focus(), t.preventDefault(), t.stopImmediatePropagation(), !1; i.focusElement[0] === i.container[0] && (i.focusElement = n) } this._ignoreResizeEvents() }, _themeClassFromOption: function (e, t) { return t ? t === "none" ? "" : e + t : e + "inherit" }, _applyTransition: function (t) { return t && (this._ui.container.removeClass(this._fallbackTransition), t !== "none" && (this._fallbackTransition = e.mobile._maybeDegradeTransition(t), this._fallbackTransition === "none" && (this._fallbackTransition = ""), this._ui.container.addClass(this._fallbackTransition))), this }, _setOptions: function (e) { var t = this.options, r = this.element, i = this._ui.screen; return e.wrapperClass !== n && this._ui.container.removeClass(t.wrapperClass).addClass(e.wrapperClass), e.theme !== n && r.removeClass(this._themeClassFromOption("ui-body-", t.theme)).addClass(this._themeClassFromOption("ui-body-", e.theme)), e.overlayTheme !== n && (i.removeClass(this._themeClassFromOption("ui-overlay-", t.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-", e.overlayTheme)), this._isOpen && i.addClass("in")), e.shadow !== n && r.toggleClass("ui-overlay-shadow", e.shadow), e.corners !== n && r.toggleClass("ui-corner-all", e.corners), e.transition !== n && (this._currentTransition || this._applyTransition(e.transition)), e.tolerance !== n && this._setTolerance(e.tolerance), e.disabled !== n && e.disabled && this.close(), this._super(e) }, _setTolerance: function (t) { var r = { t: 30, r: 15, b: 30, l: 15 }, i; if (t !== n) { i = String(t).split(","), e.each(i, function (e, t) { i[e] = parseInt(t, 10) }); switch (i.length) { case 1: isNaN(i[0]) || (r.t = r.r = r.b = r.l = i[0]); break; case 2: isNaN(i[0]) || (r.t = r.b = i[0]), isNaN(i[1]) || (r.l = r.r = i[1]); break; case 4: isNaN(i[0]) || (r.t = i[0]), isNaN(i[1]) || (r.r = i[1]), isNaN(i[2]) || (r.b = i[2]), isNaN(i[3]) || (r.l = i[3]); break; default: } } return this._tolerance = r, this }, _clampPopupWidth: function (e) { var t, n = i(this.window), r = { x: this._tolerance.l, y: n.y + this._tolerance.t, cx: n.cx - this._tolerance.l - this._tolerance.r, cy: n.cy - this._tolerance.t - this._tolerance.b }; return e || this._ui.container.css("max-width", r.cx), t = { cx: this._ui.container.outerWidth(!0), cy: this._ui.container.outerHeight(!0) }, { rc: r, menuSize: t } }, _calculateFinalLocation: function (e, t) { var n, i = t.rc, s = t.menuSize; return n = { left: r(i.cx, s.cx, i.x, e.x), top: r(i.cy, s.cy, i.y, e.y) }, n.top = Math.max(0, n.top), n.top -= Math.min(n.top, Math.max(0, n.top + s.cy - this.document.height())), n }, _placementCoords: function (e) { return this._calculateFinalLocation(e, this._clampPopupWidth()) }, _createPrerequisites: function (t, n, r) { var i, s = this; i = { screen: e.Deferred(), container: e.Deferred() }, i.screen.then(function () { i === s._prerequisites && t() }), i.container.then(function () { i === s._prerequisites && n() }), e.when(i.screen, i.container).done(function () { i === s._prerequisites && (s._prerequisites = null, r()) }), s._prerequisites = i }, _animate: function (t) { this._ui.screen.removeClass(t.classToRemove).addClass(t.screenClassToAdd), t.prerequisites.screen.resolve(); if (t.transition && t.transition !== "none") { t.applyTransition && this._applyTransition(t.transition); if (this._fallbackTransition) { this._ui.container.addClass(t.containerClassToAdd).removeClass(t.classToRemove).animationComplete(e.proxy(t.prerequisites.container, "resolve")); return } } this._ui.container.removeClass(t.classToRemove), t.prerequisites.container.resolve() }, _desiredCoords: function (t) { var n, r = null, s = i(this.window), o = t.x, u = t.y, a = t.positionTo; if (a && a !== "origin") if (a === "window") o = s.cx / 2 + s.x, u = s.cy / 2 + s.y; else { try { r = e(a) } catch (f) { r = null } r && (r.filter(":visible"), r.length === 0 && (r = null)) } r && (n = r.offset(), o = n.left + r.outerWidth() / 2, u = n.top + r.outerHeight() / 2); if (e.type(o) !== "number" || isNaN(o)) o = s.cx / 2 + s.x; if (e.type(u) !== "number" || isNaN(u)) u = s.cy / 2 + s.y; return { x: o, y: u } }, _reposition: function (e) { e = { x: e.x, y: e.y, positionTo: e.positionTo }, this._trigger("beforeposition", n, e), this._ui.container.offset(this._placementCoords(this._desiredCoords(e))) }, reposition: function (e) { this._isOpen && this._reposition(e) }, _safelyBlur: function (t) { t !== this.window[0] && t.nodeName.toLowerCase() !== "body" && e(t).blur() }, _openPrerequisitesComplete: function () { var t = this.element.attr("id"), n = this._ui.container.find(":focusable").first(); this._ui.container.addClass("ui-popup-active"), this._isOpen = !0, this._resizeScreen(), e.contains(this._ui.container[0], this.document[0].activeElement) || this._safelyBlur(this.document[0].activeElement), n.length > 0 && (this._ui.focusElement = n), this._ignoreResizeEvents(), t && this.document.find("[aria-haspopup='true'][aria-owns='" + t + "']").attr("aria-expanded", !0), this._trigger("afteropen") }, _open: function (t) { var n = e.extend({}, this.options, t), r = function () { var e = navigator.userAgent, t = e.match(/AppleWebKit\/([0-9\.]+)/), n = !!t && t[1], r = e.match(/Android (\d+(?:\.\d+))/), i = !!r && r[1], s = e.indexOf("Chrome") > -1; return r !== null && i === "4.0" && n && n > 534.13 && !s ? !0 : !1 }(); this._createPrerequisites(e.noop, e.noop, e.proxy(this, "_openPrerequisitesComplete")), this._currentTransition = n.transition, this._applyTransition(n.transition), this._ui.screen.removeClass("ui-screen-hidden"), this._ui.container.removeClass("ui-popup-truncate"), this._reposition(n), this._ui.container.removeClass("ui-popup-hidden"), this.options.overlayTheme && r && this.element.closest(".ui-page").addClass("ui-popup-open"), this._animate({ additionalCondition: !0, transition: n.transition, classToRemove: "", screenClassToAdd: "in", containerClassToAdd: "in", applyTransition: !1, prerequisites: this._prerequisites }) }, _closePrerequisiteScreen: function () { this._ui.screen.removeClass("out").addClass("ui-screen-hidden") }, _closePrerequisiteContainer: function () { this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style") }, _closePrerequisitesDone: function () { var t = this._ui.container, r = this.element.attr("id"); e.mobile.popup.active = n, e(":focus", t[0]).add(t[0]).blur(), r && this.document.find("[aria-haspopup='true'][aria-owns='" + r + "']").attr("aria-expanded", !1), this._trigger("afterclose") }, _close: function (t) { this._ui.container.removeClass("ui-popup-active"), this._page.removeClass("ui-popup-open"), this._isOpen = !1, this._createPrerequisites(e.proxy(this, "_closePrerequisiteScreen"), e.proxy(this, "_closePrerequisiteContainer"), e.proxy(this, "_closePrerequisitesDone")), this._animate({ additionalCondition: this._ui.screen.hasClass("in"), transition: t ? "none" : this._currentTransition, classToRemove: "in", screenClassToAdd: "out", containerClassToAdd: "reverse out", applyTransition: !0, prerequisites: this._prerequisites }) }, _unenhance: function () { if (this.options.enhanced) return; this._setOptions({ theme: e.mobile.popup.prototype.options.theme }), this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit"), this._ui.screen.remove(), this._ui.container.remove(), this._ui.placeholder.remove() }, _destroy: function () { return e.mobile.popup.active === this ? (this.element.one("popupafterclose", e.proxy(this, "_unenhance")), this.close()) : this._unenhance(), this }, _closePopup: function (n, r) { var i, s, o = this.options, u = !1; if (n && n.isDefaultPrevented() || e.mobile.popup.active !== this) return; t.scrollTo(0, this._scrollTop), n && n.type === "pagebeforechange" && r && (typeof r.toPage == "string" ? i = r.toPage : i = r.toPage.jqmData("url"), i = e.mobile.path.parseUrl(i), s = i.pathname + i.search + i.hash, this._myUrl !== e.mobile.path.makeUrlAbsolute(s) ? u = !0 : n.preventDefault()), this.window.off(o.closeEvents), this.element.undelegate(o.closeLinkSelector, o.closeLinkEvents), this._close(u) }, _bindContainerClose: function () { this.window.on(this.options.closeEvents, e.proxy(this, "_closePopup")) }, widget: function () { return this._ui.container }, open: function (t) { var n, r, i, s, o, u, a = this, f = this.options; return e.mobile.popup.active || f.disabled ? this : (e.mobile.popup.active = this, this._scrollTop = this.window.scrollTop(), f.history ? (u = e.mobile.navigate.history, r = e.mobile.dialogHashKey, i = e.mobile.activePage, s = i ? i.hasClass("ui-dialog") : !1, this._myUrl = n = u.getActive().url, o = n.indexOf(r) > -1 && !s && u.activeIndex > 0, o ? (a._open(t), a._bindContainerClose(), this) : (n.indexOf(r) === -1 && !s ? n += n.indexOf("#") > -1 ? r : "#" + r : n = e.mobile.path.parseLocation().hash + r, this.window.one("beforenavigate", function (e) { e.preventDefault(), a._open(t), a._bindContainerClose() }), this.urlAltered = !0, e.mobile.navigate(n, { role: "dialog" }), this)) : (a._open(t), a._bindContainerClose(), a.element.delegate(f.closeLinkSelector, f.closeLinkEvents, function (e) { a.close(), e.preventDefault() }), this)) }, close: function () { return e.mobile.popup.active !== this ? this : (this._scrollTop = this.window.scrollTop(), this.options.history && this.urlAltered ? (e.mobile.back(), this.urlAltered = !1) : this._closePopup(), this) } }), e.mobile.popup.handleLink = function (t) { var n, r = e.mobile.path, i = e(r.hashToSelector(r.parseUrl(t.attr("href")).hash)).first(); i.length > 0 && i.data("mobile-popup") && (n = t.offset(), i.popup("open", { x: n.left + t.outerWidth() / 2, y: n.top + t.outerHeight() / 2, transition: t.jqmData("transition"), positionTo: t.jqmData("position-to") })), setTimeout(function () { t.removeClass(e.mobile.activeBtnClass) }, 300) }, e.mobile.document.on("pagebeforechange", function (t, n) { n.options.role === "popup" && (e.mobile.popup.handleLink(n.options.link), t.preventDefault()) }) }(e), function (e, t) { function i() { var e = r.clone(), t = e.eq(0), n = e.eq(1), i = n.children(); return { arEls: n.add(t), gd: t, ct: n, ar: i } } var n = e.mobile.browser.oldIE && e.mobile.browser.oldIE <= 8, r = e("<div class='ui-popup-arrow-guide'></div><div class='ui-popup-arrow-container" + (n ? " ie" : "") + "'>" + "<div class='ui-popup-arrow'></div>" + "</div>"); e.widget("mobile.popup", e.mobile.popup, { options: { arrow: "" }, _create: function () { var e, t = this._super(); return this.options.arrow && (this._ui.arrow = e = this._addArrow()), t }, _addArrow: function () { var e, t = this.options, n = i(); return e = this._themeClassFromOption("ui-body-", t.theme), n.ar.addClass(e + (t.shadow ? " ui-overlay-shadow" : "")), n.arEls.hide().appendTo(this.element), n }, _unenhance: function () { var e = this._ui.arrow; return e && e.arEls.remove(), this._super() }, _tryAnArrow: function (e, t, n, r, i) { var s, o, u, a = {}, f = {}; if (r.arFull[e.dimKey] > r.guideDims[e.dimKey]) return i; a[e.fst] = n[e.fst] + (r.arHalf[e.oDimKey] + r.menuHalf[e.oDimKey]) * e.offsetFactor - r.contentBox[e.fst] + (r.clampInfo.menuSize[e.oDimKey] - r.contentBox[e.oDimKey]) * e.arrowOffsetFactor, a[e.snd] = n[e.snd], s = r.result || this._calculateFinalLocation(a, r.clampInfo), o = { x: s.left, y: s.top }, f[e.fst] = o[e.fst] + r.contentBox[e.fst] + e.tipOffset, f[e.snd] = Math.max(s[e.prop] + r.guideOffset[e.prop] + r.arHalf[e.dimKey], Math.min(s[e.prop] + r.guideOffset[e.prop] + r.guideDims[e.dimKey] - r.arHalf[e.dimKey], n[e.snd])), u = Math.abs(n.x - f.x) + Math.abs(n.y - f.y); if (!i || u < i.diff) f[e.snd] -= r.arHalf[e.dimKey] + s[e.prop] + r.contentBox[e.snd], i = { dir: t, diff: u, result: s, posProp: e.prop, posVal: f[e.snd] }; return i }, _getPlacementState: function (e) { var t, n, r = this._ui.arrow, i = { clampInfo: this._clampPopupWidth(!e), arFull: { cx: r.ct.width(), cy: r.ct.height() }, guideDims: { cx: r.gd.width(), cy: r.gd.height() }, guideOffset: r.gd.offset() }; return t = this.element.offset(), r.gd.css({ left: 0, top: 0, right: 0, bottom: 0 }), n = r.gd.offset(), i.contentBox = { x: n.left - t.left, y: n.top - t.top, cx: r.gd.width(), cy: r.gd.height() }, r.gd.removeAttr("style"), i.guideOffset = { left: i.guideOffset.left - t.left, top: i.guideOffset.top - t.top }, i.arHalf = { cx: i.arFull.cx / 2, cy: i.arFull.cy / 2 }, i.menuHalf = { cx: i.clampInfo.menuSize.cx / 2, cy: i.clampInfo.menuSize.cy / 2 }, i }, _placementCoords: function (t) { var r, i, s, o, u, a = this.options.arrow, f = this._ui.arrow; return f ? (f.arEls.show(), u = {}, r = this._getPlacementState(!0), s = { l: { fst: "x", snd: "y", prop: "top", dimKey: "cy", oDimKey: "cx", offsetFactor: 1, tipOffset: -r.arHalf.cx, arrowOffsetFactor: 0 }, r: { fst: "x", snd: "y", prop: "top", dimKey: "cy", oDimKey: "cx", offsetFactor: -1, tipOffset: r.arHalf.cx + r.contentBox.cx, arrowOffsetFactor: 1 }, b: { fst: "y", snd: "x", prop: "left", dimKey: "cx", oDimKey: "cy", offsetFactor: -1, tipOffset: r.arHalf.cy + r.contentBox.cy, arrowOffsetFactor: 1 }, t: { fst: "y", snd: "x", prop: "left", dimKey: "cx", oDimKey: "cy", offsetFactor: 1, tipOffset: -r.arHalf.cy, arrowOffsetFactor: 0 } }, e.each((a === !0 ? "l,t,r,b" : a).split(","), e.proxy(function (e, n) { i = this._tryAnArrow(s[n], n, t, r, i) }, this)), i ? (f.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-" + i.dir).removeAttr("style").css(i.posProp, i.posVal).show(), n || (o = this.element.offset(), u[s[i.dir].fst] = f.ct.offset(), u[s[i.dir].snd] = { left: o.left + r.contentBox.x, top: o.top + r.contentBox.y }), i.result) : (f.arEls.hide(), this._super(t))) : this._super(t) }, _setOptions: function (e) { var n, r = this.options.theme, i = this._ui.arrow, s = this._super(e); if (e.arrow !== t) { if (!i && e.arrow) { this._ui.arrow = this._addArrow(); return } i && !e.arrow && (i.arEls.remove(), this._ui.arrow = null) } return i = this._ui.arrow, i && (e.theme !== t && (r = this._themeClassFromOption("ui-body-", r), n = this._themeClassFromOption("ui-body-", e.theme), i.ar.removeClass(r).addClass(n)), e.shadow !== t && i.ar.toggleClass("ui-overlay-shadow", e.shadow)), s }, _destroy: function () { var e = this._ui.arrow; return e && e.arEls.remove(), this._super() } }) }(e), function (e, t) { e.widget("mobile.table", { options: { classes: { table: "ui-table" }, enhanced: !1 }, _create: function () { this.options.enhanced || this.element.addClass(this.options.classes.table), e.extend(this, { headers: t, allHeaders: t }), this._refresh(!0) }, _setHeaders: function () { var e = this.element.find("thead tr"); this.headers = this.element.find("tr:eq(0)").children(), this.allHeaders = this.headers.add(e.children()) }, refresh: function () { this._refresh() }, rebuild: e.noop, _refresh: function () { var t = this.element, n = t.find("thead tr"); this._setHeaders(), n.each(function () { var r = 0; e(this).children().each(function () { var i = parseInt(this.getAttribute("colspan"), 10), s = ":nth-child(" + (r + 1) + ")", o; this.setAttribute("data-" + e.mobile.ns + "colstart", r + 1); if (i) for (o = 0; o < i - 1; o++) r++, s += ", :nth-child(" + (r + 1) + ")"; e(this).jqmData("cells", t.find("tr").not(n.eq(0)).not(this).children(s)), r++ }) }) } }) }(e), function (e, t) { e.widget("mobile.table", e.mobile.table, { options: { mode: "reflow", classes: e.extend(e.mobile.table.prototype.options.classes, { reflowTable: "ui-table-reflow", cellLabels: "ui-table-cell-label" }) }, _create: function () { this._super(); if (this.options.mode !== "reflow") return; this.options.enhanced || (this.element.addClass(this.options.classes.reflowTable), this._updateReflow()) }, rebuild: function () { this._super(), this.options.mode === "reflow" && this._refresh(!1) }, _refresh: function (e) { this._super(e), !e && this.options.mode === "reflow" && this._updateReflow() }, _updateReflow: function () { var t = this, n = this.options; e(t.allHeaders.get().reverse()).each(function () { var r = e(this).jqmData("cells"), i = e.mobile.getAttribute(this, "colstart"), s = r.not(this).filter("thead th").length && " ui-table-cell-label-top", o = e(this).clone().contents(), u, a; o.length > 0 && (s ? (u = parseInt(this.getAttribute("colspan"), 10), a = "", u && (a = "td:nth-child(" + u + "n + " + i + ")"), t._addLabels(r.filter(a), n.classes.cellLabels + s, o)) : t._addLabels(r, n.classes.cellLabels, o)) }) }, _addLabels: function (t, n, r) { r.length === 1 && r[0].nodeName.toLowerCase() === "abbr" && (r = r.eq(0).attr("title")), t.not(":has(b." + n + ")").prepend(e("<b class='" + n + "'></b>").append(r)) } }) }(e) });
// THIS FILE IS GENERATED - DO NOT EDIT!

(function() {
    
    var impl = {};

    impl.mobileDetectRules = {
        "phones": {
            "iPhone": "\\biPhone\\b|\\biPod\\b",
            "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
            "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
            "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
            "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
            "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",
            "Samsung": "Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8",
            "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
            "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
            "Asus": "Asus.*Galaxy|PadFone.*Mobile",
            "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
            "Palm": "PalmSource|Palm",
            "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
            "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
            "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
            "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
            "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
            "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
            "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
            "Alcatel": "Alcatel",
            "Nintendo": "Nintendo 3DS",
            "Amoi": "Amoi",
            "INQ": "INQ",
            "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
        },
        "tablets": {
            "iPad": "iPad|iPad.*Mobile",
            "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",
            "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237P|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T",
            "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",
            "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
            "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
            "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL",
            "BlackBerryTablet": "PlayBook|RIM Tablet",
            "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
            "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
            "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
            "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",
            "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
            "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
            "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
            "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",
            "LenovoTablet": "Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
            "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
            "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
            "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
            "ArnovaTablet": "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
            "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
            "IRUTablet": "M702pro",
            "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
            "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
            "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
            "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
            "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
            "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612",
            "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
            "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
            "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
            "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
            "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
            "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
            "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
            "FlyTablet": "IQ310|Fly Vision",
            "bqTablet": "(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
            "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
            "NecTablet": "\\bN-06D|\\bN-08D",
            "PantechTablet": "Pantech.*P4100",
            "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
            "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
            "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
            "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
            "NabiTablet": "Android.*\\bNabi",
            "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
            "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
            "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
            "PlaystationTablet": "Playstation.*(Portable|Vita)",
            "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
            "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
            "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
            "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
            "GalapadTablet": "Android.*\\bG1\\b",
            "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
            "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
            "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
            "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
            "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
            "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
            "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
            "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
            "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
            "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
            "DPSTablet": "DPS Dream 9|DPS Dual 7",
            "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
            "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
            "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
            "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
            "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
            "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
            "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
            "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
            "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
            "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
            "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
            "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
            "iMobileTablet": "i-mobile i-note",
            "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
            "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
            "AMPETablet": "Android.* A78 ",
            "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
            "TecnoTablet": "TECNO P9",
            "JXDTablet": "Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
            "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
            "FX2Tablet": "FX2 PAD7|FX2 PAD10",
            "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
            "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
            "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
            "CaptivaTablet": "CAPTIVA PAD",
            "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
            "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
            "JaytechTablet": "TPC-PA762",
            "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
            "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
            "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
            "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY",
            "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
            "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
            "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
            "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
            "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
            "UbislateTablet": "UbiSlate[\\s]?7C",
            "PocketBookTablet": "Pocketbook",
            "Hudl": "Hudl HT7S3",
            "TelstraTablet": "T-Hub2",
            "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b"
        },
        "oss": {
            "AndroidOS": "Android",
            "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
            "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
            "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
            "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
            "WindowsPhoneOS": "Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
            "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
            "MeeGoOS": "MeeGo",
            "MaemoOS": "Maemo",
            "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
            "webOS": "webOS|hpwOS",
            "badaOS": "\\bBada\\b",
            "BREWOS": "BREW"
        },
        "uas": {
            "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
            "Dolfin": "\\bDolfin\\b",
            "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
            "Skyfire": "Skyfire",
            "IE": "IEMobile|MSIEMobile",
            "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
            "Bolt": "bolt",
            "TeaShark": "teashark",
            "Blazer": "Blazer",
            "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
            "Tizen": "Tizen",
            "UCBrowser": "UC.*Browser|UCWEB",
            "baiduboxapp": "baiduboxapp",
            "baidubrowser": "baidubrowser",
            "DiigoBrowser": "DiigoBrowser",
            "Puffin": "Puffin",
            "Mercury": "\\bMercury\\b",
            "ObigoBrowser": "Obigo",
            "NetFront": "NF-Browser",
            "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
        },
        "props": {
            "Mobile": "Mobile\/[VER]",
            "Build": "Build\/[VER]",
            "Version": "Version\/[VER]",
            "VendorID": "VendorID\/[VER]",
            "iPad": "iPad.*CPU[a-z ]+[VER]",
            "iPhone": "iPhone.*CPU[a-z ]+[VER]",
            "iPod": "iPod.*CPU[a-z ]+[VER]",
            "Kindle": "Kindle\/[VER]",
            "Chrome": [
                "Chrome\/[VER]",
                "CriOS\/[VER]",
                "CrMo\/[VER]"
            ],
            "Coast": [
                "Coast\/[VER]"
            ],
            "Dolfin": "Dolfin\/[VER]",
            "Firefox": "Firefox\/[VER]",
            "Fennec": "Fennec\/[VER]",
            "IE": [
                "IEMobile\/[VER];",
                "IEMobile [VER]",
                "MSIE [VER];"
            ],
            "NetFront": "NetFront\/[VER]",
            "NokiaBrowser": "NokiaBrowser\/[VER]",
            "Opera": [
                " OPR\/[VER]",
                "Opera Mini\/[VER]",
                "Version\/[VER]"
            ],
            "Opera Mini": "Opera Mini\/[VER]",
            "Opera Mobi": "Version\/[VER]",
            "UC Browser": "UC Browser[VER]",
            "MQQBrowser": "MQQBrowser\/[VER]",
            "MicroMessenger": "MicroMessenger\/[VER]",
            "baiduboxapp": "baiduboxapp\/[VER]",
            "baidubrowser": "baidubrowser\/[VER]",
            "Iron": "Iron\/[VER]",
            "Safari": [
                "Version\/[VER]",
                "Safari\/[VER]"
            ],
            "Skyfire": "Skyfire\/[VER]",
            "Tizen": "Tizen\/[VER]",
            "Webkit": "webkit[ \/][VER]",
            "Gecko": "Gecko\/[VER]",
            "Trident": "Trident\/[VER]",
            "Presto": "Presto\/[VER]",
            "iOS": " \\bi?OS\\b [VER][ ;]{1}",
            "Android": "Android [VER]",
            "BlackBerry": [
                "BlackBerry[\\w]+\/[VER]",
                "BlackBerry.*Version\/[VER]",
                "Version\/[VER]"
            ],
            "BREW": "BREW [VER]",
            "Java": "Java\/[VER]",
            "Windows Phone OS": [
                "Windows Phone OS [VER]",
                "Windows Phone [VER]"
            ],
            "Windows Phone": "Windows Phone [VER]",
            "Windows CE": "Windows CE\/[VER]",
            "Windows NT": "Windows NT [VER]",
            "Symbian": [
                "SymbianOS\/[VER]",
                "Symbian\/[VER]"
            ],
            "webOS": [
                "webOS\/[VER]",
                "hpwOS\/[VER];"
            ]
        },
        "utils": {
            "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor",
            "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
            "DesktopMode": "WPDesktop",
            "TV": "SonyDTV|HbbTV",
            "WebKit": "(webkit)[ \/]([\\w.]+)",
            "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
            "Watch": "SM-V700"
        }
    };

    // following patterns come from http://detectmobilebrowsers.com/
    impl.detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
    };

    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;

    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';

    isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

    function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function convertPropsToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }

    (function init() {
        var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);

        // copy some patterns to oss0 which are tested first (see issue#15)
        mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
        };
    }());

    /**
     * Test userAgent string against a set of rules and find the matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    impl.findMatch = function (rules, userAgent) {
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    };

    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    impl.getVersionStr = function (propertyName, userAgent) {
        var props = impl.mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    };

    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    impl.getVersion = function (propertyName, userAgent) {
        var version = impl.getVersionStr(propertyName, userAgent);
        return version ? impl.prepareVersionNo(version) : NaN;
    };

    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    impl.prepareVersionNo = function (version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    };

    impl.isMobileFallback = function (userAgent) {
        return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
            impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
    };

    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
            return;
        }
        var phone, tablet, phoneSized;

        // first check for stronger tablet rules, then phone (see issue#5)
        tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
        if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
        }

        phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
        if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
        }

        // our rules haven't found a match -> try more general fallback rules
        if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined) {
                cache.mobile = impl.FALLBACK_MOBILE;
                cache.tablet = cache.phone = null;
            } else if (phoneSized) {
                cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                cache.tablet = null;
            } else {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            }
        } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
        }
    };

    // t is a reference to a MobileDetect instance
    impl.mobileGrade = function (t) {
        // impl note:
        // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
        // When changes are made in Mobile_Detect.php, copy this method and replace:
        //     $this-> / t.
        //     self::MOBILE_GRADE_(.) / '$1'
        //     , self::VERSION_TYPE_FLOAT / (nothing)
        //     isIOS() / os('iOS')
        //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
        var $isMobile = t.mobile() !== null;

        if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad') >= 4.3 ||
            t.os('iOS') && t.version('iPhone') >= 3.1 ||
            t.os('iOS') && t.version('iPod') >= 3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            (t.version('Android') > 2.1 && t.is('Webkit')) ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS') >= 7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            (t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi')) ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            (t.is('Firefox') && t.version('Firefox') >= 12) ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            (t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0) ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            (t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3) ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            (t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS')) ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada') >= 2.0 ||

            // UC Browser - Tested on Android 2.3 device
            ((t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3) ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            (t.match('Kindle Fire') ||
                t.is('Kindle') && t.version('Kindle') >= 3.0) ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome') >= 11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari') >= 5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox') >= 4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE') >= 7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera') >= 10 && !$isMobile

            ) {
            return 'A';
        }

        if (
            t.os('iOS') && t.version('iPad') < 4.3 ||
            t.os('iOS') && t.version('iPhone') < 3.1 ||
            t.os('iOS') && t.version('iPod') < 3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            (t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 &&
                (t.version('Android') >= 2.3 || t.is('iOS'))) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi') >= 11 && t.is('SymbianOS')
            ) {
            return 'B';
        }

        if (
            // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry') < 5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2

            ) {
            return 'C';
        }

        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
        //will receive the basic, C grade experience.
        return 'C';
    };

    impl.detectOS = function (ua) {
        return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
            impl.findMatch(impl.mobileDetectRules.oss, ua);
    };

    impl.getDeviceSmallerSide = function () {
        return window.screen.width < window.screen.height ?
            window.screen.width :
            window.screen.height;
    };

    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = userAgent || '';
        this._cache = {};
        //600dp is typical 7" tablet minimum width
        this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
        constructor: MobileDetect,

        /**
         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
         * <br>
         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
         * <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
         * @function MobileDetect#mobile
         */
        mobile: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
        },

        /**
         * Returns the detected phone type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
         * Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley, Wolfgang,
         * Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
         * @function MobileDetect#phone
         */
        phone: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
        },

        /**
         * Returns the detected tablet type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
         * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
         * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
         * DellTablet, YarvikTablet, MedionTablet, ArnovaTablet, IntensoTablet, IRUTablet,
         * MegafonTablet, EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet,
         * SonyTablet, PhilipsTablet, CubeTablet, CobyTablet, MIDTablet, MSITablet,
         * SMiTTablet, RockChipTablet, FlyTablet, bqTablet, HuaweiTablet, NecTablet,
         * PantechTablet, BronchoTablet, VersusTablet, ZyncTablet, PositivoTablet,
         * NabiTablet, KoboTablet, DanewTablet, TexetTablet, PlaystationTablet,
         * TrekstorTablet, PyleAudioTablet, AdvanTablet, DanyTechTablet, GalapadTablet,
         * MicromaxTablet, KarbonnTablet, AllFineTablet, PROSCANTablet, YONESTablet,
         * ChangJiaTablet, GUTablet, PointOfViewTablet, OvermaxTablet, HCLTablet,
         * DPSTablet, VistureTablet, CrestaTablet, MediatekTablet, ConcordeTablet,
         * GoCleverTablet, ModecomTablet, VoninoTablet, ECSTablet, StorexTablet,
         * VodafoneTablet, EssentielBTablet, RossMoorTablet, iMobileTablet, TolinoTablet,
         * AudioSonicTablet, AMPETablet, SkkTablet, TecnoTablet, JXDTablet, iJoyTablet,
         * FX2Tablet, XoroTablet, ViewsonicTablet, OdysTablet, CaptivaTablet,
         * IconbitTablet, TeclastTablet, JaytechTablet, BlaupunktTablet, DigmaTablet,
         * EvolioTablet, LavaTablet, CelkonTablet, WolderTablet, MiTablet, NibiruTablet,
         * NexoTablet, UbislateTablet, PocketBookTablet, Hudl, TelstraTablet, GenericTablet</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
         * @function MobileDetect#tablet
         */
        tablet: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
        },

        /**
         * Returns the detected user-agent string or <tt>null</tt>.
         * <br>
         * The returned user-agent is one of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, IE, Firefox, Bolt, TeaShark, Blazer, Safari,
         * Tizen, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser</tt><br>
         *
         * @returns {String} the key for the detected user-agent or <tt>null</tt>
         * @function MobileDetect#userAgent
         */
        userAgent: function () {
            if (this._cache.userAgent === undefined) {
                this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
        },

        /**
         * Returns the detected operating system string or <tt>null</tt>.
         * <br>
         * The operating system is one of following keys:<br>
         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
         * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
         *
         * @returns {String} the key for the detected operating system.
         * @function MobileDetect#os
         */
        os: function () {
            if (this._cache.os === undefined) {
                this._cache.os = impl.detectOS(this.ua);
            }
            return this._cache.os;
        },

        /**
         * Get the version (as Number) of the given property in the User-Agent.
         * <br>
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, IE, NetFront, NokiaBrowser, Opera, Opera Mini, Opera
         * Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser, Iron,
         * Safari, Skyfire, Tizen, Webkit, Gecko, Trident, Presto, iOS, Android,
         * BlackBerry, BREW, Java, Windows Phone OS, Windows Phone, Windows CE, Windows
         * NT, Symbian, webOS</tt><br>
         *
         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
         *          Be careful when comparing this value with '==' operator!
         * @function MobileDetect#version
         */
        version: function (key) {
            return impl.getVersion(key, this.ua);
        },

        /**
         * Get the version (as String) of the given property in the User-Agent.
         * <br>
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, IE, NetFront, NokiaBrowser, Opera, Opera Mini, Opera
         * Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser, Iron,
         * Safari, Skyfire, Tizen, Webkit, Gecko, Trident, Presto, iOS, Android,
         * BlackBerry, BREW, Java, Windows Phone OS, Windows Phone, Windows CE, Windows
         * NT, Symbian, webOS</tt><br>
         *
         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
         *
         * @function MobileDetect#versionStr
         */
        versionStr: function (key) {
            return impl.getVersionStr(key, this.ua);
        },

        /**
         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
         *
         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
         *        tablet family.<br>
         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
         *        Additionally you have following keys:<br>
         * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
         *
         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
         * @function MobileDetect#is
         */
        is: function (key) {
            return equalIC(key, this.userAgent()) ||
                   equalIC(key, this.os()) ||
                   equalIC(key, this.phone()) ||
                   equalIC(key, this.tablet()) ||
                   equalIC(key, impl.findMatch(impl.mobileDetectRules.utils, this.ua));
        },

        /**
         * Do a quick test against navigator::userAgent.
         *
         * @param {String|RegExp} pattern the pattern, either as String or RegExp
         *                        (a string will be converted to a case-insensitive RegExp).
         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
         * @function MobileDetect#match
         */
        match: function (pattern) {
            if (!(pattern instanceof RegExp)) {
                pattern = new RegExp(pattern, 'i');
            }
            return pattern.test(this.ua);
        },

        /**
         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
         * <br>
         * Obviously this method makes sense in browser environments only (not for Node.js)!
         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
         *          Will always return <code>undefined</code> server-side.
         */
        isPhoneSized: function (maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },

        /**
         * Returns the mobile grade ('A', 'B', 'C').
         *
         * @returns {String} one of the mobile grades ('A', 'B', 'C').
         * @function MobileDetect#mobileGrade
         */
        mobileGrade: function () {
            if (this._cache.grade === undefined) {
                this._cache.grade = impl.mobileGrade(this);
            }
            return this._cache.grade;
        }
    };

    // environment-dependent
    if (typeof window !== 'undefined' && window.screen) {
        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
        };
    } else {
        MobileDetect.isPhoneSized = function () { };
    }

    // should not be replaced by a completely new object - just overwrite existing methods
    MobileDetect._impl = impl;

    window.MobileDetect = MobileDetect;

})();

(function (jQuery, window, undefined) {
    "use strict";

    var matched, browser;

    jQuery.uaMatch = function (ua) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(safari)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];

        var platform_match = /(ipad)/.exec(ua) ||
            /(iphone)/.exec(ua) ||
            /(android)/.exec(ua) ||
            [];

        var browser = match[1] || "";

        if (ua.indexOf("windows phone") != -1 || ua.indexOf("iemobile") != -1) {

            // http://www.neowin.net/news/ie11-fakes-user-agent-to-fool-gmail-in-windows-phone-81-gdr1-update
            browser = "msie";
        }
        else if (ua.indexOf("like gecko") != -1 && ua.indexOf('webkit') == -1 && ua.indexOf('opera') == -1 && ua.indexOf('chrome') == -1 && ua.indexOf('safari') == -1) {
            browser = "msie";
        }

        return {
            browser: browser,
            version: match[2] || "0",
            platform: platform_match[0] || ""
        };
    };

    var userAgent = window.navigator.userAgent;
    matched = jQuery.uaMatch(userAgent);
    browser = {};

    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
    }

    if (matched.platform) {
        browser[matched.platform] = true;
    }

    if (userAgent.toLowerCase().indexOf("webkit") != -1 && !browser.chrome && !browser.msie) {
        browser.safari = true;
    }

    var md = new MobileDetect(userAgent);

    if (md.mobile()) {
        browser.mobile = true;
    } else {
        browser.mobile = null;
    }

    if (browser.msie && !browser.mobile && userAgent.toLowerCase().indexOf("xbox") != -1) {
        browser.tv = true;
    }

    if (browser.ipad || browser.iphone) {
        if (userAgent.toLowerCase().indexOf('cpu os 9') != -1) {
            browser.iOSVersion = 9;
        }
        else if (userAgent.toLowerCase().indexOf('cpu os 8') != -1) {
            browser.iOSVersion = 8;
        }
        else if (userAgent.toLowerCase().indexOf('cpu os 7') != -1) {
            browser.iOSVersion = 7;
        }
    }

    jQuery.browser = browser;

})(jQuery, window);


(function ($) {

})(jQuery);

/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

(function ($) {

    /**
    * Copyright 2012, Digital Fusion
    * Licensed under the MIT license.
    * http://teamdf.com/jquery-plugins/license/
    *
    * @author Sam Sehnert
    * @desc A small plugin that checks whether elements are within
    *       the user visible viewport of a web browser.
    *       only accounts for vertical position, not horizontal.
    */
    var $w = $(window);

    function visibleInViewport(elem, partial, hidden, direction, threshold) {

        var $t = $(elem),
            t = elem,
            vpWidth = $w.width(),
            vpHeight = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function') {

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top >= 0 && rec.top < vpHeight + threshold,
                bViz = rec.bottom > 0 && rec.bottom <= vpHeight + threshold,
                lViz = rec.left >= 0 && rec.left < vpWidth + threshold,
                rViz = rec.right > 0 && rec.right <= vpWidth + threshold,
                vVisible = partial ? tViz || bViz : tViz && bViz,
                hVisible = partial ? lViz || rViz : lViz && rViz;

            if (direction === 'both')
                return clientSize && vVisible && hVisible;
            else if (direction === 'vertical')
                return clientSize && vVisible;
            else if (direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop = $w.scrollTop(),
                viewBottom = viewTop + vpHeight,
                viewLeft = $w.scrollLeft(),
                viewRight = viewLeft + vpWidth,
                offset = $t.offset(),
                _top = offset.top,
                _bottom = _top + $t.height(),
                _left = offset.left,
                _right = _left + $t.width(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom,
                compareLeft = partial === true ? _right : _left,
                compareRight = partial === true ? _left : _right;

            if (direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if (direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if (direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    }

    var unveilId = 0;

    function getThreshold() {

        // If less than 100, the search window ends up not getting images
        // If less than 200, this happens on the home page
        // Need to fix those before this can be set to 0

        //if (window.AppInfo && AppInfo.isNativeApp && $.browser.safari) {
        //    return 7000;
        //}

        var screens = $.browser.mobile ? 2.5 : 1;

        // This helps eliminate the draw-in effect as you scroll
        return Math.max(screen.availHeight * screens, 1000);
    }

    var threshold = getThreshold();

    function isVisible(elem) {
        return visibleInViewport(elem, true, false, 'both', threshold);
    }

    function fillImage(elem) {
        var source = elem.getAttribute('data-src');
        if (source) {
            ImageStore.setImageInto(elem, source);
            elem.setAttribute("data-src", '');
        }
    }

    function unveilElements(elems) {

        if (!elems.length) {
            return;
        }

        var images = elems;

        unveilId++;
        var eventNamespace = 'unveil' + unveilId;

        function unveil() {

            var remaining = [];

            for (var i = 0, length = images.length; i < length; i++) {
                var img = images[i];
                if (isVisible(img)) {
                    fillImage(img);
                } else {
                    remaining.push(img);
                }
            }

            images = remaining;

            if (!images.length) {
                Events.off(window, 'scroll.' + eventNamespace);
                Events.off(window, 'resize.' + eventNamespace);
            }
        }

        Events.on(window, 'scroll.' + eventNamespace, unveil);
        Events.on(window, 'resize.' + eventNamespace, unveil);

        unveil();
    }

    function fillImages(elems) {

        for (var i = 0, length = elems.length; i < length; i++) {
            var elem = elems[0];
            var source = elem.getAttribute('data-src');
            if (source) {
                ImageStore.setImageInto(elem, source);
                elem.setAttribute("data-src", '');
            }
        }
    }

    function lazyChildren(elem) {

        unveilElements(elem.getElementsByClassName('lazy'));
    }

    $.fn.lazyChildren = function () {

        if (this.length == 1) {
            lazyChildren(this[0]);
        } else {
            unveilElements($('.lazy', this));
        }
        return this;
    };

    function lazyImage(elem, url) {

        elem.setAttribute('data-src', url);
        fillImages([elem]);
    }

    window.ImageLoader = {
        fillImages: fillImages,
        lazyImage: lazyImage,
        lazyChildren: lazyChildren
    };

})(window.jQuery || window.Zepto);

(function () {

    function setImageIntoElement(elem, url) {

        if (elem.tagName !== "IMG") {

            elem.style.backgroundImage = "url('" + url + "')";

        } else {
            elem.setAttribute("src", url);
        }
    }

    function simpleImageStore() {

        var self = this;

        self.setImageInto = setImageIntoElement;
    }

    console.log('creating simpleImageStore');
    window.ImageStore = new simpleImageStore();

})();
window.localizationGlossary={"SettingsSaved":"Settings saved.","AddUser":"Add User","Users":"Users","Delete":"Delete","Administrator":"Administrator","Password":"Password","DeleteImage":"Delete Image","MessageThankYouForSupporting":"Thank you for supporting Emby.","MessagePleaseSupportProject":"Please support Emby.","DeleteImageConfirmation":"Are you sure you wish to delete this image?","FileReadCancelled":"The file read has been canceled.","FileNotFound":"File not found.","FileReadError":"An error occurred while reading the file.","DeleteUser":"Delete User","DeleteUserConfirmation":"Are you sure you wish to delete this user?","PasswordResetHeader":"Reset Password","PasswordResetComplete":"The password has been reset.","PinCodeResetComplete":"The pin code has been reset.","PasswordResetConfirmation":"Are you sure you wish to reset the password?","PinCodeResetConfirmation":"Are you sure you wish to reset the pin code?","HeaderPinCodeReset":"Reset Pin Code","PasswordSaved":"Password saved.","PasswordMatchError":"Password and password confirmation must match.","OptionRelease":"Official Release","OptionBeta":"Beta","OptionDev":"Dev (Unstable)","UninstallPluginHeader":"Uninstall Plugin","UninstallPluginConfirmation":"Are you sure you wish to uninstall {0}?","NoPluginConfigurationMessage":"This plugin has nothing to configure.","NoPluginsInstalledMessage":"You have no plugins installed.","BrowsePluginCatalogMessage":"Browse our plugin catalog to view available plugins.","MessageKeyEmailedTo":"Key emailed to {0}.","MessageKeysLinked":"Keys linked.","HeaderConfirmation":"Confirmation","MessageKeyUpdated":"Thank you. Your supporter key has been updated.","MessageKeyRemoved":"Thank you. Your supporter key has been removed.","HeaderSupportTheTeam":"Support the Emby Team","TextEnjoyBonusFeatures":"Enjoy Bonus Features","TitleLiveTV":"Live TV","ButtonCancelSyncJob":"Cancel sync job","TitleSync":"Sync","HeaderSelectDate":"Select Date","ButtonDonate":"Donate","HeaderMyMedia":"My Media","TitleNotifications":"Notifications","ErrorLaunchingChromecast":"There was an error launching chromecast. Please ensure your device is connected to your wireless network.","MessageErrorLoadingSupporterInfo":"There was an error loading supporter information. Please try again later.","MessageLinkYourSupporterKey":"Link your supporter key with up to {0} Emby Connect members to enjoy free access to the following apps:","HeaderConfirmRemoveUser":"Remove User","MessageSwipeDownOnRemoteControl":"Welcome to remote control. Select the device to control by clicking the cast icon in the upper right corner. Swipe down anywhere on this screen to go back to where you came from.","MessageConfirmRemoveConnectSupporter":"Are you sure you wish to remove additional supporter benefits from this user?","ValueTimeLimitSingleHour":"Time limit: 1 hour","ValueTimeLimitMultiHour":"Time limit: {0} hours","HeaderUsers":"Users","PluginCategoryGeneral":"General","PluginCategoryContentProvider":"Content Providers","PluginCategoryScreenSaver":"Screen Savers","PluginCategoryTheme":"Themes","PluginCategorySync":"Sync","PluginCategorySocialIntegration":"Social Networks","PluginCategoryNotifications":"Notifications","PluginCategoryMetadata":"Metadata","PluginCategoryLiveTV":"Live TV","PluginCategoryChannel":"Channels","HeaderSearch":"Search","ValueDateCreated":"Date created: {0}","LabelArtist":"Artist","LabelMovie":"Movie","LabelMusicVideo":"Music Video","LabelEpisode":"Episode","LabelSeries":"Series","LabelStopping":"Stopping","LabelCancelled":"(cancelled)","LabelFailed":"(failed)","ButtonHelp":"Help","ButtonSave":"Save","ButtonDownload":"Download","SyncJobStatusQueued":"Queued","SyncJobStatusConverting":"Converting","SyncJobStatusFailed":"Failed","SyncJobStatusCancelled":"Cancelled","SyncJobStatusCompleted":"Synced","SyncJobStatusReadyToTransfer":"Ready to Transfer","SyncJobStatusTransferring":"Transferring","SyncJobStatusCompletedWithError":"Synced with errors","SyncJobItemStatusReadyToTransfer":"Ready to Transfer","LabelCollection":"Collection","HeaderAddToCollection":"Add to Collection","NewCollectionNameExample":"Example: Star Wars Collection","OptionSearchForInternetMetadata":"Search the internet for artwork and metadata","LabelSelectCollection":"Select collection:","HeaderDevices":"Devices","ButtonScheduledTasks":"Scheduled tasks","MessageItemsAdded":"Items added","ButtonAddToCollection":"Add to collection","HeaderSelectCertificatePath":"Select Certificate Path","ConfirmMessageScheduledTaskButton":"This operation normally runs automatically as a scheduled task. It can also be run manually here. To configure the scheduled task, see:","HeaderSupporterBenefit":"A supporter membership provides additional benefits such as access to sync, premium plugins, internet channel content, and more. {0}Learn more{1}.","LabelSyncNoTargetsHelp":"It looks like you don't currently have any apps that support sync.","HeaderWelcomeToProjectServerDashboard":"Welcome to the Emby Server Dashboard","HeaderWelcomeToProjectWebClient":"Welcome to Emby","ButtonTakeTheTour":"Take the tour","HeaderWelcomeBack":"Welcome back!","TitlePlugins":"Plugins","ButtonTakeTheTourToSeeWhatsNew":"Take the tour to see what's new","MessageNoSyncJobsFound":"No sync jobs found. Create sync jobs using the Sync buttons found throughout the web interface.","HeaderLibraryAccess":"Library Access","HeaderChannelAccess":"Channel Access","HeaderDeviceAccess":"Device Access","HeaderSelectDevices":"Select Devices","ButtonCancelItem":"Cancel item","ButtonQueueForRetry":"Queue for retry","ButtonReenable":"Re-enable","ButtonLearnMore":"Learn more","SyncJobItemStatusSyncedMarkForRemoval":"Marked for removal","LabelAbortedByServerShutdown":"(Aborted by server shutdown)","LabelScheduledTaskLastRan":"Last ran {0}, taking {1}.","HeaderDeleteTaskTrigger":"Delete Task Trigger","HeaderTaskTriggers":"Task Triggers","MessageDeleteTaskTrigger":"Are you sure you wish to delete this task trigger?","MessageNoPluginsInstalled":"You have no plugins installed.","LabelVersionInstalled":"{0} installed","LabelNumberReviews":"{0} Reviews","LabelFree":"Free","HeaderPlaybackError":"Playback Error","MessagePlaybackErrorNotAllowed":"You're currently not authorized to play this content. Please contact your system administrator for details.","MessagePlaybackErrorNoCompatibleStream":"No compatible streams are currently available. Please try again later or contact your system administrator for details.","MessagePlaybackErrorRateLimitExceeded":"Your playback rate limit has been exceeded. Please contact your system administrator for details.","MessagePlaybackErrorPlaceHolder":"The content chosen is not playable from this device.","HeaderSelectAudio":"Select Audio","HeaderSelectSubtitles":"Select Subtitles","ButtonMarkForRemoval":"Remove from device","ButtonUnmarkForRemoval":"Cancel removal from device","LabelDefaultStream":"(Default)","LabelForcedStream":"(Forced)","LabelDefaultForcedStream":"(Default/Forced)","LabelUnknownLanguage":"Unknown language","MessageConfirmSyncJobItemCancellation":"Are you sure you wish to cancel this item?","ButtonMute":"Mute","ButtonUnmute":"Unmute","ButtonStop":"Stop","ButtonNextTrack":"Next Track","ButtonPause":"Pause","ButtonPlay":"Play","ButtonEdit":"Edit","ButtonQueue":"Queue","ButtonPlayTrailer":"Play trailer","ButtonPlaylist":"Playlist","ButtonPreviousTrack":"Previous Track","LabelEnabled":"Enabled","LabelDisabled":"Disabled","ButtonMoreInformation":"More Information","LabelNoUnreadNotifications":"No unread notifications.","ButtonViewNotifications":"View notifications","ButtonMarkTheseRead":"Mark these read","ButtonClose":"Close","LabelAllPlaysSentToPlayer":"All plays will be sent to the selected player.","MessageInvalidUser":"Invalid username or password. Please try again.","HeaderLoginFailure":"Login Failure","HeaderAllRecordings":"All Recordings","RecommendationBecauseYouLike":"Because you like {0}","RecommendationBecauseYouWatched":"Because you watched {0}","RecommendationDirectedBy":"Directed by {0}","RecommendationStarring":"Starring {0}","HeaderConfirmRecordingCancellation":"Confirm Recording Cancellation","MessageConfirmRecordingCancellation":"Are you sure you wish to cancel this recording?","MessageRecordingCancelled":"Recording cancelled.","HeaderConfirmSeriesCancellation":"Confirm Series Cancellation","MessageConfirmSeriesCancellation":"Are you sure you wish to cancel this series?","MessageSeriesCancelled":"Series cancelled.","HeaderConfirmRecordingDeletion":"Confirm Recording Deletion","MessageConfirmRecordingDeletion":"Are you sure you wish to delete this recording?","MessageRecordingDeleted":"Recording deleted.","ButonCancelRecording":"Cancel Recording","MessageRecordingSaved":"Recording saved.","OptionSunday":"Sunday","OptionMonday":"Monday","OptionTuesday":"Tuesday","OptionWednesday":"Wednesday","OptionThursday":"Thursday","OptionFriday":"Friday","OptionSaturday":"Saturday","OptionEveryday":"Every day","OptionWeekend":"Weekends","OptionWeekday":"Weekdays","HeaderConfirmDeletion":"Confirm Deletion","MessageConfirmPathSubstitutionDeletion":"Are you sure you wish to delete this path substitution?","LiveTvUpdateAvailable":"(Update available)","LabelVersionUpToDate":"Up to date!","ButtonResetTuner":"Reset tuner","HeaderResetTuner":"Reset Tuner","MessageConfirmResetTuner":"Are you sure you wish to reset this tuner? Any active players or recordings will be abruptly stopped.","ButtonCancelSeries":"Cancel Series","HeaderSeriesRecordings":"Series Recordings","LabelAnytime":"Any time","StatusRecording":"Recording","StatusWatching":"Watching","StatusRecordingProgram":"Recording {0}","StatusWatchingProgram":"Watching {0}","HeaderSplitMedia":"Split Media Apart","MessageConfirmSplitMedia":"Are you sure you wish to split the media sources into separate items?","HeaderError":"Error","MessageChromecastConnectionError":"Your Chromecast receiver is unable to connect to your Emby Server. Please check their connections and try again.","MessagePleaseSelectOneItem":"Please select at least one item.","MessagePleaseSelectTwoItems":"Please select at least two items.","MessageTheFollowingItemsWillBeGrouped":"The following titles will be grouped into one item:","MessageConfirmItemGrouping":"Emby apps will automatically choose the optimal version to play based on device and network performance. Are you sure you wish to continue?","HeaderResume":"Resume","HeaderMyViews":"My Views","HeaderLibraryFolders":"Media Folders","HeaderLatestMedia":"Latest Media","ButtonMoreItems":"More...","ButtonMore":"More","HeaderFavoriteMovies":"Favorite Movies","HeaderFavoriteShows":"Favorite Shows","HeaderFavoriteEpisodes":"Favorite Episodes","HeaderFavoriteGames":"Favorite Games","HeaderRatingsDownloads":"Rating / Downloads","HeaderConfirmProfileDeletion":"Confirm Profile Deletion","MessageConfirmProfileDeletion":"Are you sure you wish to delete this profile?","HeaderSelectServerCachePath":"Select Server Cache Path","HeaderSelectTranscodingPath":"Select Transcoding Temporary Path","HeaderSelectImagesByNamePath":"Select Images By Name Path","HeaderSelectMetadataPath":"Select Metadata Path","HeaderSelectServerCachePathHelp":"Browse or enter the path to use for server cache files. The folder must be writeable.","HeaderSelectTranscodingPathHelp":"Browse or enter the path to use for transcoding temporary files. The folder must be writeable.","HeaderSelectImagesByNamePathHelp":"Browse or enter the path to your items by name folder. The folder must be writeable.","HeaderSelectMetadataPathHelp":"Browse or enter the path you'd like to store metadata within. The folder must be writeable.","HeaderSelectChannelDownloadPath":"Select Channel Download Path","HeaderSelectChannelDownloadPathHelp":"Browse or enter the path to use for storing channel cache files. The folder must be writeable.","OptionNewCollection":"New...","ButtonAdd":"Add","ButtonRemove":"Remove","LabelChapterDownloaders":"Chapter downloaders:","LabelChapterDownloadersHelp":"Enable and rank your preferred chapter downloaders in order of priority. Lower priority downloaders will only be used to fill in missing information.","HeaderFavoriteAlbums":"Favorite Albums","HeaderLatestChannelMedia":"Latest Channel Items","ButtonOrganizeFile":"Organize File","ButtonDeleteFile":"Delete File","HeaderOrganizeFile":"Organize File","HeaderDeleteFile":"Delete File","StatusSkipped":"Skipped","StatusFailed":"Failed","StatusSuccess":"Success","MessageFileWillBeDeleted":"The following file will be deleted:","MessageSureYouWishToProceed":"Are you sure you wish to proceed?","MessageDuplicatesWillBeDeleted":"In addition the following dupliates will be deleted:","MessageFollowingFileWillBeMovedFrom":"The following file will be moved from:","MessageDestinationTo":"to:","HeaderSelectWatchFolder":"Select Watch Folder","HeaderSelectWatchFolderHelp":"Browse or enter the path to your watch folder. The folder must be writeable.","OrganizePatternResult":"Result: {0}","HeaderRestart":"Restart","HeaderShutdown":"Shutdown","MessageConfirmRestart":"Are you sure you wish to restart Emby Server?","MessageConfirmShutdown":"Are you sure you wish to shutdown Emby Server?","ButtonUpdateNow":"Update Now","ValueItemCount":"{0} item","ValueItemCountPlural":"{0} items","NewVersionOfSomethingAvailable":"A new version of {0} is available!","VersionXIsAvailableForDownload":"Version {0} is now available for download.","LabelVersionNumber":"Version {0}","LabelPlayMethodTranscoding":"Transcoding","LabelPlayMethodDirectStream":"Direct Streaming","LabelPlayMethodDirectPlay":"Direct Playing","LabelAudioCodec":"Audio: {0}","LabelVideoCodec":"Video: {0}","LabelLocalAccessUrl":"Local access: {0}","LabelRemoteAccessUrl":"Remote access: {0}","LabelRunningOnPort":"Running on http port {0}.","LabelRunningOnPorts":"Running on http port {0}, and https port {1}.","HeaderLatestFromChannel":"Latest from {0}","LabelUnknownLanaguage":"Unknown language","HeaderCurrentSubtitles":"Current Subtitles","MessageDownloadQueued":"The download has been queued.","MessageAreYouSureDeleteSubtitles":"Are you sure you wish to delete this subtitle file?","ButtonRemoteControl":"Remote Control","HeaderLatestTvRecordings":"Latest Recordings","ButtonOk":"Ok","ButtonCancel":"Cancel","ButtonRefresh":"Refresh","LabelCurrentPath":"Current path:","HeaderSelectMediaPath":"Select Media Path","HeaderSelectPath":"Select Path","ButtonNetwork":"Network","MessageDirectoryPickerInstruction":"Network paths can be entered manually in the event the Network button fails to locate your devices. For example, {0} or {1}.","HeaderMenu":"Menu","ButtonOpen":"Open","ButtonOpenInNewTab":"Open in new tab","ButtonShuffle":"Shuffle","ButtonInstantMix":"Instant mix","ButtonResume":"Resume","HeaderScenes":"Scenes","HeaderAudioTracks":"Audio Tracks","HeaderLibraries":"Libraries","HeaderSubtitles":"Subtitles","HeaderVideoQuality":"Video Quality","MessageErrorPlayingVideo":"There was an error playing the video.","MessageEnsureOpenTuner":"Please ensure there is an open tuner availalble.","ButtonHome":"Home","ButtonDashboard":"Dashboard","ButtonReports":"Reports","ButtonMetadataManager":"Metadata Manager","HeaderTime":"Time","HeaderName":"Name","HeaderAlbum":"Album","HeaderAlbumArtist":"Album Artist","HeaderArtist":"Artist","LabelAddedOnDate":"Added {0}","ButtonStart":"Start","HeaderChannels":"Channels","HeaderMediaFolders":"Media Folders","HeaderBlockItemsWithNoRating":"Block content with no rating information:","OptionBlockOthers":"Others","OptionBlockTvShows":"TV Shows","OptionBlockTrailers":"Trailers","OptionBlockMusic":"Music","OptionBlockMovies":"Movies","OptionBlockBooks":"Books","OptionBlockGames":"Games","OptionBlockLiveTvPrograms":"Live TV Programs","OptionBlockLiveTvChannels":"Live TV Channels","OptionBlockChannelContent":"Internet Channel Content","ButtonRevoke":"Revoke","MessageConfirmRevokeApiKey":"Are you sure you wish to revoke this api key? The application's connection to Emby Server will be abruptly terminated.","HeaderConfirmRevokeApiKey":"Revoke Api Key","ValueContainer":"Container: {0}","ValueAudioCodec":"Audio Codec: {0}","ValueVideoCodec":"Video Codec: {0}","ValueCodec":"Codec: {0}","ValueConditions":"Conditions: {0}","LabelAll":"All","HeaderDeleteImage":"Delete Image","MessageFileNotFound":"File not found.","MessageFileReadError":"An error occurred reading this file.","ButtonNextPage":"Next Page","ButtonPreviousPage":"Previous Page","ButtonMoveLeft":"Move left","ButtonMoveRight":"Move right","ButtonBrowseOnlineImages":"Browse online images","HeaderDeleteItem":"Delete Item","ConfirmDeleteItem":"Deleting this item will delete it from both the file system and your media library. Are you sure you wish to continue?","MessagePleaseEnterNameOrId":"Please enter a name or an external Id.","MessageValueNotCorrect":"The value entered is not correct. Please try again.","MessageItemSaved":"Item saved.","MessagePleaseAcceptTermsOfServiceBeforeContinuing":"Please accept the terms of service before continuing.","OptionEnded":"Ended","OptionContinuing":"Continuing","OptionOff":"Off","OptionOn":"On","ButtonSettings":"Settings","ButtonUninstall":"Uninstall","HeaderFields":"Fields","HeaderFieldsHelp":"Slide a field to 'off' to lock it and prevent it's data from being changed.","HeaderLiveTV":"Live TV","MissingLocalTrailer":"Missing local trailer.","MissingPrimaryImage":"Missing primary image.","MissingBackdropImage":"Missing backdrop image.","MissingLogoImage":"Missing logo image.","MissingEpisode":"Missing episode.","OptionScreenshots":"Screenshots","OptionBackdrops":"Backdrops","OptionImages":"Images","OptionKeywords":"Keywords","OptionTags":"Tags","OptionStudios":"Studios","OptionName":"Name","OptionOverview":"Overview","OptionGenres":"Genres","OptionParentalRating":"Parental Rating","OptionPeople":"People","OptionRuntime":"Runtime","OptionProductionLocations":"Production Locations","OptionBirthLocation":"Birth Location","LabelAllChannels":"All channels","LabelLiveProgram":"LIVE","LabelNewProgram":"NEW","LabelPremiereProgram":"PREMIERE","LabelHDProgram":"HD","HeaderChangeFolderType":"Change Content Type","HeaderChangeFolderTypeHelp":"To change the type, please remove and rebuild the folder with the new type.","HeaderAlert":"Alert","MessagePleaseRestart":"Please restart to finish updating.","ButtonRestart":"Restart","MessagePleaseRefreshPage":"Please refresh this page to receive new updates from the server.","ButtonHide":"Hide","MessageSettingsSaved":"Settings saved.","ButtonSignOut":"Sign Out","ButtonMyProfile":"My Profile","ButtonMyPreferences":"My Preferences","MessageBrowserDoesNotSupportWebSockets":"This browser does not support web sockets. For a better experience, try a newer browser such as Chrome, Firefox, IE10+, Safari (iOS) or Opera.","LabelInstallingPackage":"Installing {0}","LabelPackageInstallCompleted":"{0} installation completed.","LabelPackageInstallFailed":"{0} installation failed.","LabelPackageInstallCancelled":"{0} installation cancelled.","TabServer":"Server","TabUsers":"Users","TabLibrary":"Library","TabMetadata":"Metadata","TabDLNA":"DLNA","TabLiveTV":"Live TV","TabAutoOrganize":"Auto-Organize","TabPlugins":"Plugins","TabAdvanced":"Advanced","TabHelp":"Help","TabScheduledTasks":"Scheduled Tasks","ButtonFullscreen":"Fullscreen","ButtonAudioTracks":"Audio Tracks","ButtonSubtitles":"Subtitles","ButtonScenes":"Scenes","ButtonQuality":"Quality","HeaderNotifications":"Notifications","HeaderSelectPlayer":"Select Player:","ButtonSelect":"Select","ButtonNew":"New","MessageInternetExplorerWebm":"For best results with Internet Explorer please install the WebM playback plugin.","HeaderVideoError":"Video Error","ButtonAddToPlaylist":"Add to playlist","HeaderAddToPlaylist":"Add to Playlist","LabelName":"Name:","ButtonSubmit":"Submit","LabelSelectPlaylist":"Playlist:","OptionNewPlaylist":"New playlist...","MessageAddedToPlaylistSuccess":"Ok","ButtonView":"View","ButtonViewSeriesRecording":"View series recording","ValueOriginalAirDate":"Original air date: {0}","ButtonRemoveFromPlaylist":"Remove from playlist","HeaderSpecials":"Specials","HeaderTrailers":"Trailers","HeaderAudio":"Audio","HeaderResolution":"Resolution","HeaderVideo":"Video","HeaderRuntime":"Runtime","HeaderCommunityRating":"Community rating","HeaderPasswordReset":"Password Reset","HeaderParentalRating":"Parental rating","HeaderReleaseDate":"Release date","HeaderDateAdded":"Date added","HeaderSeries":"Series","HeaderSeason":"Season","HeaderSeasonNumber":"Season number","HeaderNetwork":"Network","HeaderYear":"Year","HeaderGameSystem":"Game system","HeaderPlayers":"Players","HeaderEmbeddedImage":"Embedded image","HeaderTrack":"Track","HeaderDisc":"Disc","OptionMovies":"Movies","OptionCollections":"Collections","OptionSeries":"Series","OptionSeasons":"Seasons","OptionEpisodes":"Episodes","OptionGames":"Games","OptionGameSystems":"Game systems","OptionMusicArtists":"Music artists","OptionMusicAlbums":"Music albums","OptionMusicVideos":"Music videos","OptionSongs":"Songs","OptionHomeVideos":"Home videos","OptionBooks":"Books","OptionAdultVideos":"Adult videos","ButtonUp":"Up","ButtonDown":"Down","LabelMetadataReaders":"Metadata readers:","LabelMetadataReadersHelp":"Rank your preferred local metadata sources in order of priority. The first file found will be read.","LabelMetadataDownloaders":"Metadata downloaders:","LabelMetadataDownloadersHelp":"Enable and rank your preferred metadata downloaders in order of priority. Lower priority downloaders will only be used to fill in missing information.","LabelMetadataSavers":"Metadata savers:","LabelMetadataSaversHelp":"Choose the file formats to save your metadata to.","LabelImageFetchers":"Image fetchers:","LabelImageFetchersHelp":"Enable and rank your preferred image fetchers in order of priority.","ButtonQueueAllFromHere":"Queue all from here","ButtonPlayAllFromHere":"Play all from here","LabelDynamicExternalId":"{0} Id:","HeaderIdentify":"Identify Item","PersonTypePerson":"Person","LabelTitleDisplayOrder":"Title display order:","OptionSortName":"Sort name","OptionReleaseDate":"Release date","LabelSeasonNumber":"Season number:","LabelDiscNumber":"Disc number","LabelParentNumber":"Parent number","LabelEpisodeNumber":"Episode number:","LabelTrackNumber":"Track number:","LabelNumber":"Number:","LabelReleaseDate":"Release date:","LabelEndDate":"End date:","LabelYear":"Year:","LabelDateOfBirth":"Date of birth:","LabelBirthYear":"Birth year:","LabelBirthDate":"Birth date:","LabelDeathDate":"Death date:","HeaderRemoveMediaLocation":"Remove Media Location","MessageConfirmRemoveMediaLocation":"Are you sure you wish to remove this location?","HeaderRenameMediaFolder":"Rename Media Folder","LabelNewName":"New name:","HeaderAddMediaFolder":"Add Media Folder","HeaderAddMediaFolderHelp":"Name (Movies, Music, TV, etc):","HeaderRemoveMediaFolder":"Remove Media Folder","MessageTheFollowingLocationWillBeRemovedFromLibrary":"The following media locations will be removed from your library:","MessageAreYouSureYouWishToRemoveMediaFolder":"Are you sure you wish to remove this media folder?","ButtonRename":"Rename","ButtonChangeType":"Change type","HeaderMediaLocations":"Media Locations","LabelContentTypeValue":"Content type: {0}","LabelPathSubstitutionHelp":"Optional: Path substitution can map server paths to network shares that clients can access for direct playback.","FolderTypeUnset":"Unset (mixed content)","FolderTypeMovies":"Movies","FolderTypeMusic":"Music","FolderTypeAdultVideos":"Adult videos","FolderTypePhotos":"Photos","FolderTypeMusicVideos":"Music videos","FolderTypeHomeVideos":"Home videos","FolderTypeGames":"Games","FolderTypeBooks":"Books","FolderTypeTvShows":"TV","TabMovies":"Movies","TabSeries":"Series","TabEpisodes":"Episodes","TabTrailers":"Trailers","TabGames":"Games","TabAlbums":"Albums","TabSongs":"Songs","TabMusicVideos":"Music Videos","BirthPlaceValue":"Birth place: {0}","DeathDateValue":"Died: {0}","BirthDateValue":"Born: {0}","HeaderLatestReviews":"Latest Reviews","HeaderPluginInstallation":"Plugin Installation","MessageAlreadyInstalled":"This version is already installed.","ValueReviewCount":"{0} Reviews","MessageYouHaveVersionInstalled":"You currently have version {0} installed.","MessageTrialExpired":"The trial period for this feature has expired","MessageTrialWillExpireIn":"The trial period for this feature will expire in {0} day(s)","MessageInstallPluginFromApp":"This plugin must be installed from with in the app you intend to use it in.","ValuePriceUSD":"Price: {0} (USD)","MessageFeatureIncludedWithSupporter":"You are registered for this feature, and will be able to continue using it with an active supporter membership.","MessageSupporterMembershipExpiredOn":"Your supporter membership expired on {0}.","MessageYouHaveALifetimeMembership":"You have a lifetime supporter membership. You can provide additional donations on a one-time or recurring basis using the options below. Thank you for supporting Emby.","MessageYouHaveAnActiveRecurringMembership":"You have an active {0} membership. You can upgrade your plan using the options below.","ButtonDelete":"Delete","HeaderEmbyAccountAdded":"Emby Account Added","MessageEmbyAccountAdded":"The Emby account has been added to this user.","MessagePendingEmbyAccountAdded":"The Emby account has been added to this user. An email will be sent to the owner of the account. The invitation will need to be confirmed by clicking a link within the email.","HeaderEmbyAccountRemoved":"Emby Account Removed","MessageEmbyAccontRemoved":"The Emby account has been removed from this user.","TooltipLinkedToEmbyConnect":"Linked to Emby Connect","HeaderUnrated":"Unrated","ValueDiscNumber":"Disc {0}","HeaderUnknownDate":"Unknown Date","HeaderUnknownYear":"Unknown Year","ValueMinutes":"{0} min","ButtonPlayExternalPlayer":"Play with external player","HeaderSelectExternalPlayer":"Select External Player","HeaderExternalPlayerPlayback":"External Player Playback","ButtonImDone":"I'm Done","OptionWatched":"Watched","OptionUnwatched":"Unwatched","ExternalPlayerPlaystateOptionsHelp":"Specify how you would like to resume playing this video next time.","LabelMarkAs":"Mark as:","OptionInProgress":"In-Progress","LabelResumePoint":"Resume point:","ValueOneMovie":"1 movie","ValueMovieCount":"{0} movies","ValueOneTrailer":"1 trailer","ValueTrailerCount":"{0} trailers","ValueOneSeries":"1 series","ValueSeriesCount":"{0} series","ValueOneEpisode":"1 episode","ValueEpisodeCount":"{0} episodes","ValueOneGame":"1 game","ValueGameCount":"{0} games","ValueOneAlbum":"1 album","ValueAlbumCount":"{0} albums","ValueOneSong":"1 song","ValueSongCount":"{0} songs","ValueOneMusicVideo":"1 music video","ValueMusicVideoCount":"{0} music videos","HeaderOffline":"Offline","HeaderUnaired":"Unaired","HeaderMissing":"Missing","ButtonWebsite":"Website","TooltipFavorite":"Favorite","TooltipLike":"Like","TooltipDislike":"Dislike","TooltipPlayed":"Played","ValueSeriesYearToPresent":"{0}-Present","ValueAwards":"Awards: {0}","ValueBudget":"Budget: {0}","ValueRevenue":"Revenue: {0}","ValuePremiered":"Premiered {0}","ValuePremieres":"Premieres {0}","ValueStudio":"Studio: {0}","ValueStudios":"Studios: {0}","ValueStatus":"Status: {0}","ValueSpecialEpisodeName":"Special - {0}","LabelLimit":"Limit:","ValueLinks":"Links: {0}","HeaderPeople":"People","HeaderCastAndCrew":"Cast & Crew","ValueArtist":"Artist: {0}","ValueArtists":"Artists: {0}","HeaderTags":"Tags","MediaInfoCameraMake":"Camera make","MediaInfoCameraModel":"Camera model","MediaInfoAltitude":"Altitude","MediaInfoAperture":"Aperture","MediaInfoExposureTime":"Exposure time","MediaInfoFocalLength":"Focal length","MediaInfoOrientation":"Orientation","MediaInfoIsoSpeedRating":"Iso speed rating","MediaInfoLatitude":"Latitude","MediaInfoLongitude":"Longitude","MediaInfoShutterSpeed":"Shutter speed","MediaInfoSoftware":"Software","HeaderIfYouLikeCheckTheseOut":"If you like {0}, check these out...","HeaderPlotKeywords":"Plot Keywords","HeaderMovies":"Movies","HeaderAlbums":"Albums","HeaderGames":"Games","HeaderBooks":"Books","HeaderEpisodes":"Episodes","HeaderSeasons":"Seasons","HeaderTracks":"Tracks","HeaderItems":"Items","HeaderOtherItems":"Other Items","ButtonFullReview":"Full review","ValueAsRole":"as {0}","ValueGuestStar":"Guest star","MediaInfoSize":"Size","MediaInfoPath":"Path","MediaInfoFormat":"Format","MediaInfoContainer":"Container","MediaInfoDefault":"Default","MediaInfoForced":"Forced","MediaInfoExternal":"External","MediaInfoTimestamp":"Timestamp","MediaInfoPixelFormat":"Pixel format","MediaInfoBitDepth":"Bit depth","MediaInfoSampleRate":"Sample rate","MediaInfoBitrate":"Bitrate","MediaInfoChannels":"Channels","MediaInfoLayout":"Layout","MediaInfoLanguage":"Language","MediaInfoCodec":"Codec","MediaInfoProfile":"Profile","MediaInfoLevel":"Level","MediaInfoAspectRatio":"Aspect ratio","MediaInfoResolution":"Resolution","MediaInfoAnamorphic":"Anamorphic","MediaInfoInterlaced":"Interlaced","MediaInfoFramerate":"Framerate","MediaInfoStreamTypeAudio":"Audio","MediaInfoStreamTypeData":"Data","MediaInfoStreamTypeVideo":"Video","MediaInfoStreamTypeSubtitle":"Subtitle","MediaInfoStreamTypeEmbeddedImage":"Embedded Image","MediaInfoRefFrames":"Ref frames","TabPlayback":"Playback","TabNotifications":"Notifications","TabExpert":"Expert","HeaderSelectCustomIntrosPath":"Select Custom Intros Path","HeaderRateAndReview":"Rate and Review","HeaderThankYou":"Thank You","MessageThankYouForYourReview":"Thank you for your review.","LabelYourRating":"Your rating:","LabelFullReview":"Full review:","LabelShortRatingDescription":"Short rating summary:","OptionIRecommendThisItem":"I recommend this item","WebClientTourContent":"View your recently added media, next episodes, and more. The green circles indicate how many unplayed items you have.","WebClientTourMovies":"Play movies, trailers and more from any device with a web browser","WebClientTourMouseOver":"Hold the mouse over any poster for quick access to important information","WebClientTourTapHold":"Tap and hold or right click any poster for a context menu","WebClientTourMetadataManager":"Click edit to open the metadata manager","WebClientTourPlaylists":"Easily create playlists and instant mixes, and play them on any device","WebClientTourCollections":"Create movie collections to group box sets together","WebClientTourUserPreferences1":"User preferences allow you to customize the way your library is presented in all of your Emby apps","WebClientTourUserPreferences2":"Configure your audio and subtitle language settings once, for every Emby app","WebClientTourUserPreferences3":"Design the web client home page to your liking","WebClientTourUserPreferences4":"Configure backdrops, theme songs and external players","WebClientTourMobile1":"The web client works great on smartphones and tablets...","WebClientTourMobile2":"and easily controls other devices and Emby apps","WebClientTourMySync":"Sync your personal media to your devices for offline viewing.","MessageEnjoyYourStay":"Enjoy your stay","DashboardTourDashboard":"The server dashboard allows you to monitor your server and your users. You'll always know who is doing what and where they are.","DashboardTourHelp":"In-app help provides easy buttons to open wiki pages relating to the on-screen content.","DashboardTourUsers":"Easily create user accounts for your friends and family, each with their own permissions, library access, parental controls and more.","DashboardTourCinemaMode":"Cinema mode brings the theater experience straight to your living room with the ability to play trailers and custom intros before the main feature.","DashboardTourChapters":"Enable chapter image generation for your videos for a more pleasing presentation while viewing.","DashboardTourSubtitles":"Automatically download subtitles for your videos in any language.","DashboardTourPlugins":"Install plugins such as internet video channels, live tv, metadata scanners, and more.","DashboardTourNotifications":"Automatically send notifications of server events to your mobile device, email and more.","DashboardTourScheduledTasks":"Easily manage long running operations with scheduled tasks. Decide when they run, and how often.","DashboardTourMobile":"The Emby Server dashboard works great on smartphones and tablets. Manage your server from the palm of your hand anytime, anywhere.","DashboardTourSync":"Sync your personal media to your devices for offline viewing.","MessageRefreshQueued":"Refresh queued","TabDevices":"Devices","TabExtras":"Extras","DeviceLastUsedByUserName":"Last used by {0}","HeaderDeleteDevice":"Delete Device","DeleteDeviceConfirmation":"Are you sure you wish to delete this device? It will reappear the next time a user signs in with it.","LabelEnableCameraUploadFor":"Enable camera upload for:","HeaderSelectUploadPath":"Select Upload Path","LabelEnableCameraUploadForHelp":"Uploads will occur automatically in the background when signed into Emby.","ErrorMessageStartHourGreaterThanEnd":"End time must be greater than the start time.","ButtonLibraryAccess":"Library access","ButtonParentalControl":"Parental control","HeaderInvitationSent":"Invitation Sent","MessageInvitationSentToUser":"An email has been sent to {0}, inviting them to accept your sharing invitation.","MessageInvitationSentToNewUser":"An email has been sent to {0} inviting them to sign up with Emby.","HeaderConnectionFailure":"Connection Failure","MessageUnableToConnectToServer":"We're unable to connect to the selected server right now. Please ensure it is running and try again.","ButtonSelectServer":"Select Server","MessagePluginConfigurationRequiresLocalAccess":"To configure this plugin please sign in to your local server directly.","MessageLoggedOutParentalControl":"Access is currently restricted. Please try again later.","DefaultErrorMessage":"There was an error processing the request. Please try again later.","ButtonAccept":"Accept","ButtonReject":"Reject","HeaderForgotPassword":"Forgot Password","MessageContactAdminToResetPassword":"Please contact your system administrator to reset your password.","MessageForgotPasswordInNetworkRequired":"Please try again within your home network to initiate the password reset process.","MessageForgotPasswordFileCreated":"The following file has been created on your server and contains instructions on how to proceed:","MessageForgotPasswordFileExpiration":"The reset pin will expire at {0}.","MessageInvalidForgotPasswordPin":"An invalid or expired pin was entered. Please try again.","MessagePasswordResetForUsers":"Passwords have been removed for the following users:","HeaderInviteGuest":"Invite Guest","ButtonLinkMyEmbyAccount":"Link my account now","MessageConnectAccountRequiredToInviteGuest":"In order to invite guests you need to first link your Emby account to this server.","ButtonSync":"Sync","SyncMedia":"Sync Media","HeaderCancelSyncJob":"Cancel Sync","CancelSyncJobConfirmation":"Cancelling the sync job will remove synced media from the device during the next sync process. Are you sure you wish to proceed?","TabSync":"Sync","MessagePleaseSelectDeviceToSyncTo":"Please select a device to sync to.","MessageSyncJobCreated":"Sync job created.","LabelSyncTo":"Sync to:","LabelSyncJobName":"Sync job name:","LabelQuality":"Quality:","HeaderSettings":"Settings","OptionAutomaticallySyncNewContent":"Automatically sync new content","OptionAutomaticallySyncNewContentHelp":"New content added to will be automatically synced to the device.","OptionSyncUnwatchedVideosOnly":"Sync unwatched videos only","OptionSyncUnwatchedVideosOnlyHelp":"Only unwatched videos will be synced, and videos will be removed from the device as they are watched.","LabelItemLimit":"Item limit:","LabelItemLimitHelp":"Optional. Set a limit to the number of items that will be synced.","MessageBookPluginRequired":"Requires installation of the Bookshelf plugin","MessageGamePluginRequired":"Requires installation of the GameBrowser plugin","MessageUnsetContentHelp":"Content will be displayed as plain folders. For best results use the metadata manager to set the content types of sub-folders.","SyncJobItemStatusQueued":"Queued","SyncJobItemStatusConverting":"Converting","SyncJobItemStatusTransferring":"Transferring","SyncJobItemStatusSynced":"Synced","SyncJobItemStatusFailed":"Failed","SyncJobItemStatusRemovedFromDevice":"Removed from device","SyncJobItemStatusCancelled":"Cancelled","LabelProfile":"Profile:","LabelBitrateMbps":"Bitrate (Mbps):","EmbyIntroDownloadMessage":"To download and install Emby Server visit {0}.","ButtonNewServer":"New Server","ButtonSignInWithConnect":"Sign in with Emby Connect","HeaderNewServer":"New Server","MyDevice":"My Device","ButtonRemote":"Remote","TabInfo":"Info","TabCast":"Cast","TabScenes":"Scenes","HeaderUnlockApp":"Unlock App","MessageUnlockAppWithPurchase":"Unlock the full features of the app with a small one-time purchase.","MessageUnlockAppWithPurchaseOrSupporter":"Unlock the full features of the app with a small one-time purchase, or by signing in with an active Emby Supporter Membership.","MessageUnlockAppWithSupporter":"Unlock the full features of the app by signing in with an active Emby Supporter Membership.","MessageToValidateSupporter":"If you have an active Emby Supporter Membership, simply sign into the app using your Wifi connection within your home network.","MessagePaymentServicesUnavailable":"Payment services are currently unavailable. Please try again later.","ButtonUnlockWithSupporter":"Sign in with Emby Supporter Membership","MessagePleaseSignInLocalNetwork":"Before proceeding, please ensure that you're connected to your local network using a Wifi or LAN connection.","ButtonUnlockWithPurchase":"Unlock with Purchase","ButtonUnlockPrice":"Unlock {0}","MessageLiveTvGuideRequiresUnlock":"The Live TV Guide is currently limited to {0} channels. Click the unlock button to learn how to enjoy the full experience.","OptionEnableFullscreen":"Enable Fullscreen","ButtonServer":"Server","HeaderAdmin":"Admin","HeaderLibrary":"Library","HeaderMedia":"Media","ButtonInbox":"Inbox","HeaderAdvanced":"Advanced","HeaderGroupVersions":"Group Versions","HeaderSaySomethingLike":"Say Something Like...","ButtonTryAgain":"Try Again","HeaderYouSaid":"You Said...","MessageWeDidntRecognizeCommand":"We're sorry, we didn't recognize that command.","MessageIfYouBlockedVoice":"If you denied voice access to the app you'll need to reconfigure before trying again.","MessageNoItemsFound":"No items found.","ButtonManageServer":"Manage Server","ButtonPreferences":"Preferences","ButtonViewArtist":"View artist","ButtonViewAlbum":"View album","ErrorMessagePasswordNotMatchConfirm":"The password and password confirmation must match.","ErrorMessageUsernameInUse":"The username is already in use. Please choose a new name and try again.","ErrorMessageEmailInUse":"The email address is already in use. Please enter a new email address and try again, or use the forgot password feature.","MessageThankYouForConnectSignUp":"Thank you for signing up for Emby Connect. An email will be sent to your address with instructions on how to confirm your new account. Please confirm the account and then return here to sign in.","HeaderShare":"Share","ButtonShareHelp":"Share a web page containing media information with social media. Media files are never shared publicly.","ButtonShare":"Share","HeaderConfirm":"Confirm","ButtonAdvancedRefresh":"Advanced Refresh"}
window.appMode='cordova';window.dashboardVersion='3.0.5679.20282';
var Logger={log:function(str){console.log(str);}};var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,g)).finalize(a)}}});var k=m.algo={};return m}(Math);(function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);var CryptoJS=CryptoJS||function(e,m){var p={},j=p.lib={},l=function(){},f=j.Base={extend:function(a){l.prototype=this;var c=new l;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},n=j.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=m?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,q=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)c[d+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[d+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-8*(c%4);a.length=e.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*e.random()|0);return new n.init(c,a)}}),b=p.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},k=j.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){var a=f.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(b,f){return(new s.HMAC.init(a,f)).finalize(b)}}});var s=p.algo={};return p}(Math);(function(){var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();(function(globalScope,localStorage,sessionStorage){function myStore(defaultObject){var self=this;self.localData={};var isDefaultAvailable;if(defaultObject){try{defaultObject.setItem('_test','0');isDefaultAvailable=true;}catch(e){}}
self.setItem=function(name,value){if(isDefaultAvailable){defaultObject.setItem(name,value);}else{self.localData[name]=value;}};self.getItem=function(name){if(isDefaultAvailable){return defaultObject.getItem(name);}
return self.localData[name];};self.removeItem=function(name){if(isDefaultAvailable){defaultObject.removeItem(name);}else{self.localData[name]=null;}};}
globalScope.appStorage=new myStore(localStorage);globalScope.sessionStore=new myStore(sessionStorage);})(window,window.localStorage,window.sessionStorage);(function(globalScope){if(!globalScope.MediaBrowser){globalScope.MediaBrowser={};}
globalScope.MediaBrowser.generateDeviceId=function(keyName,seed){keyName=keyName||'randomId';var keys=[];keys.push(navigator.userAgent);keys.push((navigator.cpuClass||""));if(seed){keys.push(seed);}
var randomId='';randomId=appStorage.getItem(keyName);if(!randomId){randomId=new Date().getTime();appStorage.setItem(keyName,randomId.toString());}
keys.push(randomId);return CryptoJS.SHA1(keys.join('|')).toString();};})(window);(function(globalScope,JSON){if(!globalScope.MediaBrowser){globalScope.MediaBrowser={};}
globalScope.MediaBrowser.CredentialProvider=function(key){var self=this;var credentials=null;key=key||'servercredentials3';function ensure(){if(!credentials){var json=appStorage.getItem(key)||'{}';Logger.log('credentials initialized with: '+json);credentials=JSON.parse(json);credentials.Servers=credentials.Servers||credentials.servers||[];credentials.servers=null;}}
function get(){ensure();return credentials;}
function set(data){if(data){credentials=data;appStorage.setItem(key,JSON.stringify(data));}else{self.clear();}
Events.trigger(self,'credentialsupdated');}
self.clear=function(){credentials=null;appStorage.removeItem(key);};self.credentials=function(data){if(data){set(data);}
return get();};self.addOrUpdateServer=function(list,server){if(!server.Id){throw new Error('Server.Id cannot be null or empty');}
var existing=list.filter(function(s){return s.Id==server.Id;})[0];if(existing){existing.DateLastAccessed=Math.max(existing.DateLastAccessed||0,server.DateLastAccessed||0);existing.UserLinkType=server.UserLinkType;if(server.AccessToken){existing.AccessToken=server.AccessToken;existing.UserId=server.UserId;}
if(server.ExchangeToken){existing.ExchangeToken=server.ExchangeToken;}
if(server.RemoteAddress){existing.RemoteAddress=server.RemoteAddress;}
if(server.ManualAddress){existing.ManualAddress=server.ManualAddress;}
if(server.LocalAddress){existing.LocalAddress=server.LocalAddress;}
if(server.Name){existing.Name=server.Name;}
if(server.WakeOnLanInfos&&server.WakeOnLanInfos.length){existing.WakeOnLanInfos=server.WakeOnLanInfos;}
if(server.LastConnectionMode!=null){existing.LastConnectionMode=server.LastConnectionMode;}
existing.DateLastLocalConnection=Math.max(existing.DateLastLocalConnection||0,server.DateLastLocalConnection||0);return existing;}
else{list.push(server);return server;}};};})(window,window.JSON);(function(globalScope){globalScope.HttpClient={param:function(params){return jQuery.param(params);},send:function(request){request.timeout=request.timeout||30000;try{return jQuery.ajax(request);}catch(err){var deferred=DeferredBuilder.Deferred();deferred.reject();return deferred.promise();}}};})(window);(function(globalScope){globalScope.Events={on:function(obj,eventName,selector,fn){Logger.log('event.on '+eventName);jQuery(obj).on(eventName,selector,fn);},off:function(obj,eventName,selector,fn){Logger.log('event.off '+eventName);jQuery(obj).off(eventName,selector,fn);},trigger:function(obj,eventName,params){Logger.log('event.trigger '+eventName);jQuery(obj).trigger(eventName,params);}};})(window);(function(globalScope){globalScope.DeferredBuilder={Deferred:function(){return jQuery.Deferred();},when:function(promises){return jQuery.when(promises);}};})(window);(function(globalScope,JSON,WebSocket,setTimeout,devicePixelRatio,FileReader){if(!globalScope.MediaBrowser){globalScope.MediaBrowser={};}
globalScope.MediaBrowser.ApiClient=function(logger,serverAddress,clientName,applicationVersion,deviceName,deviceId){if(!serverAddress){throw new Error("Must supply a serverAddress");}
logger.log('ApiClient serverAddress: '+serverAddress);logger.log('ApiClient clientName: '+clientName);logger.log('ApiClient applicationVersion: '+applicationVersion);logger.log('ApiClient deviceName: '+deviceName);logger.log('ApiClient deviceId: '+deviceId);var self=this;var webSocket;var serverInfo={};self.enableAppStorePolicy=false;self.serverAddress=function(val){if(val!=null){if(val.toLowerCase().indexOf('http')!=0){throw new Error('Invalid url: '+val);}
var changed=val!=serverAddress;serverAddress=val;if(changed){Events.trigger(this,'serveraddresschanged');}}
return serverAddress;};self.serverInfo=function(info){serverInfo=info||serverInfo;return serverInfo;};var currentUserPromise;self.getCurrentUser=function(){var promise=currentUserPromise;if(promise==null){promise=self.getUser(self.getCurrentUserId()).fail(function(){currentUserPromise=null;});currentUserPromise=promise;}
return promise;};self.getCurrentUserId=function(){return serverInfo.UserId;};self.accessToken=function(){return serverInfo.AccessToken;};self.deviceName=function(){return deviceName;};self.deviceId=function(){return deviceId;};self.appName=function(){return clientName;};self.appVersion=function(){return applicationVersion;};self.clearAuthenticationInfo=function(){self.setAuthenticationInfo(null,null);};self.setAuthenticationInfo=function(accessKey,userId){currentUserPromise=null;serverInfo.AccessToken=accessKey;serverInfo.UserId=userId;};self.encodeName=function(name){name=name.split('/').join('-');name=name.split('&').join('-');name=name.split('?').join('-');var val=HttpClient.param({name:name});return val.substring(val.indexOf('=')+1).replace("'",'%27');};function onRequestFail(e){Events.trigger(self,'requestfail',[{url:this.url,type:this.type,status:e.status,errorCode:e.getResponseHeader("X-Application-Error-Code")}]);}
function onRetryRequestFail(request){Events.trigger(self,'requestfail',[{url:request.url}]);}
self.setRequestHeaders=function(headers){var currentServerInfo=self.serverInfo();if(clientName){var auth='MediaBrowser Client="'+clientName+'", Device="'+deviceName+'", DeviceId="'+deviceId+'", Version="'+applicationVersion+'"';var userId=currentServerInfo.UserId;if(userId){auth+=', UserId="'+userId+'"';}
headers.Authorization=auth;}
var accessToken=currentServerInfo.AccessToken;if(accessToken){headers['X-MediaBrowser-Token']=accessToken;}};self.ajax=function(request,includeAuthorization){if(!request){throw new Error("Request cannot be null");}
if(includeAuthorization!==false){request.headers=request.headers||{};self.setRequestHeaders(request.headers);}
if(self.enableAutomaticNetworking===false||request.type!="GET"){logger.log('Requesting url without automatic networking: '+request.url);return HttpClient.send(request).fail(onRequestFail);}
var deferred=DeferredBuilder.Deferred();self.ajaxWithFailover(request,deferred,true);return deferred.promise();};function switchConnectionMode(connectionMode){var currentServerInfo=self.serverInfo();var newConnectionMode=connectionMode;newConnectionMode--;if(newConnectionMode<0){newConnectionMode=MediaBrowser.ConnectionMode.Manual;}
if(MediaBrowser.ServerInfo.getServerAddress(currentServerInfo,newConnectionMode)){return newConnectionMode;}
newConnectionMode--;if(newConnectionMode<0){newConnectionMode=MediaBrowser.ConnectionMode.Manual;}
if(MediaBrowser.ServerInfo.getServerAddress(currentServerInfo,newConnectionMode)){return newConnectionMode;}
return connectionMode;}
function tryReconnectInternal(deferred,connectionMode,currentRetryCount){connectionMode=switchConnectionMode(connectionMode);var url=MediaBrowser.ServerInfo.getServerAddress(self.serverInfo(),connectionMode);logger.log("Attempting reconnection to "+url);var timeout=connectionMode==MediaBrowser.ConnectionMode.Local?7000:15000;HttpClient.send({type:"GET",url:url+"/system/info/public",dataType:"json",timeout:timeout}).done(function(){logger.log("Reconnect succeeded to "+url);self.serverInfo().LastConnectionMode=connectionMode;self.serverAddress(url);deferred.resolve();}).fail(function(){logger.log("Reconnect attempt failed to "+url);if(currentRetryCount<=5){var newConnectionMode=switchConnectionMode(connectionMode);setTimeout(function(){tryReconnectInternal(deferred,newConnectionMode,currentRetryCount+1);},500);}else{deferred.reject();}});}
function tryReconnect(){var deferred=DeferredBuilder.Deferred();setTimeout(function(){tryReconnectInternal(deferred,self.serverInfo().LastConnectionMode,0);},500);return deferred.promise();}
self.ajaxWithFailover=function(request,deferred,enableReconnection){logger.log("Requesting "+request.url);request.timeout=30000;HttpClient.send(request).done(function(response){deferred.resolve(response,0);}).fail(function(e,textStatus){logger.log("Request failed with textStatus "+textStatus+" to "+request.url);var statusCode=parseInt(e.status||'0');var isUserErrorCode=statusCode>=400&&statusCode<500;if(enableReconnection&&!isUserErrorCode){logger.log("Attempting reconnection");var previousServerAddress=self.serverAddress();tryReconnect().done(function(){logger.log("Reconnect succeesed");request.url=request.url.replace(previousServerAddress,self.serverAddress());self.ajaxWithFailover(request,deferred,false);}).fail(function(){logger.log("Reconnect failed");onRetryRequestFail(request);deferred.reject();});}else{logger.log("Reporting request failure");onRetryRequestFail(request);deferred.reject();}});};self.get=function(url){return self.ajax({type:"GET",url:url});};self.getJSON=function(url){return self.ajax({type:"GET",url:url,dataType:"json"});};self.getUrl=function(name,params){if(!name){throw new Error("Url name cannot be empty");}
var url=serverAddress;if(!url){throw new Error("serverAddress is yet not set");}
if(name.charAt(0)!='/'){url+='/';}
url+=name;if(params){url+="?"+HttpClient.param(params);}
return url;};self.updateServerInfo=function(server,connectionMode){if(server==null){throw new Error('server cannot be null');}
if(connectionMode==null){throw new Error('connectionMode cannot be null');}
logger.log('Begin updateServerInfo. connectionMode: '+connectionMode);self.serverInfo(server);var serverUrl=MediaBrowser.ServerInfo.getServerAddress(server,connectionMode);if(!serverUrl){throw new Error('serverUrl cannot be null. serverInfo: '+JSON.stringify(server));}
logger.log('Setting server address to '+serverUrl);self.serverAddress(serverUrl);};self.isWebSocketSupported=function(){return WebSocket!=null;};self.openWebSocket=function(){var accessToken=self.serverInfo().AccessToken;if(!accessToken){throw new Error("Cannot open web socket without access token.");}
var url=serverAddress.replace('http','ws');url+="?api_key="+accessToken;url+="&deviceId="+deviceId;webSocket=new WebSocket(url);webSocket.onmessage=function(msg){msg=JSON.parse(msg.data);onWebSocketMessage(msg);};webSocket.onopen=function(){logger.log('web socket connection opened');setTimeout(function(){Events.trigger(self,'websocketopen');},0);};webSocket.onerror=function(){setTimeout(function(){Events.trigger(self,'websocketerror');},0);};webSocket.onclose=function(){setTimeout(function(){Events.trigger(self,'websocketclose');},0);};};self.closeWebSocket=function(){if(webSocket&&webSocket.readyState===WebSocket.OPEN){webSocket.close();}};function onWebSocketMessage(msg){if(msg.MessageType==="UserDeleted"){currentUserPromise=null;}
else if(msg.MessageType==="UserUpdated"||msg.MessageType==="UserConfigurationUpdated"){var user=msg.Data;if(user.Id==self.getCurrentUserId()){currentUserPromise=null;}}
Events.trigger(self,'websocketmessage',[msg]);}
self.sendWebSocketMessage=function(name,data){logger.log('Sending web socket message: '+name);var msg={MessageType:name};if(data){msg.Data=data;}
msg=JSON.stringify(msg);webSocket.send(msg);};self.isWebSocketOpen=function(){return webSocket&&webSocket.readyState===WebSocket.OPEN;};self.isWebSocketOpenOrConnecting=function(){return webSocket&&(webSocket.readyState===WebSocket.OPEN||webSocket.readyState===WebSocket.CONNECTING);};self.getProductNews=function(options){options=options||{};var url=self.getUrl("News/Product",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getDownloadSpeed=function(byteSize){var url=self.getUrl('Playback/BitrateTest',{Size:byteSize});var now=new Date().getTime();var deferred=DeferredBuilder.Deferred();self.get(url).done(function(){var responseTime=new Date().getTime()-now;var bytesPerSecond=byteSize/responseTime;bytesPerSecond*=1000;deferred.resolveWith(null,[bytesPerSecond]);}).fail(function(){deferred.reject();});return deferred.promise();};self.detectBitrate=function(){var deferred=DeferredBuilder.Deferred();self.getDownloadSpeed(1000000).done(function(bitrate){if(bitrate<3000000){deferred.resolveWith(null,[Math.round(bitrate*.8)]);}else{self.getDownloadSpeed(3000000).done(function(bitrate){deferred.resolveWith(null,[Math.round(bitrate*.8)]);}).fail(function(){deferred.reject();});}}).fail(function(){deferred.reject();});return deferred.promise();};self.getItem=function(userId,itemId){if(!itemId){throw new Error("null itemId");}
var url=userId?self.getUrl("Users/"+userId+"/Items/"+itemId):self.getUrl("Items/"+itemId);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getRootFolder=function(userId){if(!userId){throw new Error("null userId");}
var url=self.getUrl("Users/"+userId+"/Items/Root");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getNotificationSummary=function(userId){if(!userId){throw new Error("null userId");}
var url=self.getUrl("Notifications/"+userId+"/Summary");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getNotifications=function(userId,options){if(!userId){throw new Error("null userId");}
var url=self.getUrl("Notifications/"+userId,options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.markNotificationsRead=function(userId,idList,isRead){if(!userId){throw new Error("null userId");}
if(!idList){throw new Error("null idList");}
var suffix=isRead?"Read":"Unread";var params={UserId:userId,Ids:idList.join(',')};var url=self.getUrl("Notifications/"+userId+"/"+suffix,params);return self.ajax({type:"POST",url:url});};self.logout=function(){self.closeWebSocket();var done=function(){self.setAuthenticationInfo(null,null);};if(self.serverInfo().AccessToken){var url=self.getUrl("Sessions/Logout");return self.ajax({type:"POST",url:url}).always(done);}
var deferred=DeferredBuilder.Deferred();deferred.resolveWith(null,[]);return deferred.promise().always(done);};function getRemoteImagePrefix(options){var urlPrefix;if(options.artist){urlPrefix="Artists/"+self.encodeName(options.artist);delete options.artist;}else if(options.person){urlPrefix="Persons/"+self.encodeName(options.person);delete options.person;}else if(options.genre){urlPrefix="Genres/"+self.encodeName(options.genre);delete options.genre;}else if(options.musicGenre){urlPrefix="MusicGenres/"+self.encodeName(options.musicGenre);delete options.musicGenre;}else if(options.gameGenre){urlPrefix="GameGenres/"+self.encodeName(options.gameGenre);delete options.gameGenre;}else if(options.studio){urlPrefix="Studios/"+self.encodeName(options.studio);delete options.studio;}else{urlPrefix="Items/"+options.itemId;delete options.itemId;}
return urlPrefix;}
self.getRemoteImageProviders=function(options){if(!options){throw new Error("null options");}
var urlPrefix=getRemoteImagePrefix(options);var url=self.getUrl(urlPrefix+"/RemoteImages/Providers",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getAvailableRemoteImages=function(options){if(!options){throw new Error("null options");}
var urlPrefix=getRemoteImagePrefix(options);var url=self.getUrl(urlPrefix+"/RemoteImages",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.downloadRemoteImage=function(options){if(!options){throw new Error("null options");}
var urlPrefix=getRemoteImagePrefix(options);var url=self.getUrl(urlPrefix+"/RemoteImages/Download",options);return self.ajax({type:"POST",url:url});};self.getLiveTvInfo=function(options){var url=self.getUrl("LiveTv/Info",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvGuideInfo=function(options){var url=self.getUrl("LiveTv/GuideInfo",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvChannel=function(id,userId){if(!id){throw new Error("null id");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("LiveTv/Channels/"+id,options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvChannels=function(options){var url=self.getUrl("LiveTv/Channels",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvPrograms=function(options){options=options||{};if(options.channelIds&&options.channelIds.length>1800){return self.ajax({type:"POST",url:self.getUrl("LiveTv/Programs"),data:JSON.stringify(options),contentType:"application/json",dataType:"json"});}else{return self.ajax({type:"GET",url:self.getUrl("LiveTv/Programs",options),dataType:"json"});}};self.getLiveTvRecommendedPrograms=function(options){options=options||{};return self.ajax({type:"GET",url:self.getUrl("LiveTv/Programs/Recommended",options),dataType:"json"});};self.getLiveTvRecordings=function(options){var url=self.getUrl("LiveTv/Recordings",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvRecordingGroups=function(options){var url=self.getUrl("LiveTv/Recordings/Groups",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvRecordingGroup=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("LiveTv/Recordings/Groups/"+id);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvRecording=function(id,userId){if(!id){throw new Error("null id");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("LiveTv/Recordings/"+id,options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvProgram=function(id,userId){if(!id){throw new Error("null id");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("LiveTv/Programs/"+id,options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.deleteLiveTvRecording=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("LiveTv/Recordings/"+id);return self.ajax({type:"DELETE",url:url});};self.cancelLiveTvTimer=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("LiveTv/Timers/"+id);return self.ajax({type:"DELETE",url:url});};self.getLiveTvTimers=function(options){var url=self.getUrl("LiveTv/Timers",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLiveTvTimer=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("LiveTv/Timers/"+id);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getNewLiveTvTimerDefaults=function(options){options=options||{};var url=self.getUrl("LiveTv/Timers/Defaults",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.createLiveTvTimer=function(item){if(!item){throw new Error("null item");}
var url=self.getUrl("LiveTv/Timers");return self.ajax({type:"POST",url:url,data:JSON.stringify(item),contentType:"application/json"});};self.updateLiveTvTimer=function(item){if(!item){throw new Error("null item");}
var url=self.getUrl("LiveTv/Timers/"+item.Id);return self.ajax({type:"POST",url:url,data:JSON.stringify(item),contentType:"application/json"});};self.resetLiveTvTuner=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("LiveTv/Tuners/"+id+"/Reset");return self.ajax({type:"POST",url:url});};self.getLiveTvSeriesTimers=function(options){var url=self.getUrl("LiveTv/SeriesTimers",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getFileOrganizationResults=function(options){var url=self.getUrl("Library/FileOrganization",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.deleteOriginalFileFromOrganizationResult=function(id){var url=self.getUrl("Library/FileOrganizations/"+id+"/File");return self.ajax({type:"DELETE",url:url});};self.clearOrganizationLog=function(){var url=self.getUrl("Library/FileOrganizations");return self.ajax({type:"DELETE",url:url});};self.performOrganization=function(id){var url=self.getUrl("Library/FileOrganizations/"+id+"/Organize");return self.ajax({type:"POST",url:url});};self.performEpisodeOrganization=function(id,options){var url=self.getUrl("Library/FileOrganizations/"+id+"/Episode/Organize",options||{});return self.ajax({type:"POST",url:url});};self.getLiveTvSeriesTimer=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("LiveTv/SeriesTimers/"+id);return self.ajax({type:"GET",url:url,dataType:"json"});};self.cancelLiveTvSeriesTimer=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("LiveTv/SeriesTimers/"+id);return self.ajax({type:"DELETE",url:url});};self.createLiveTvSeriesTimer=function(item){if(!item){throw new Error("null item");}
var url=self.getUrl("LiveTv/SeriesTimers");return self.ajax({type:"POST",url:url,data:JSON.stringify(item),contentType:"application/json"});};self.updateLiveTvSeriesTimer=function(item){if(!item){throw new Error("null item");}
var url=self.getUrl("LiveTv/SeriesTimers/"+item.Id);return self.ajax({type:"POST",url:url,data:JSON.stringify(item),contentType:"application/json"});};self.getRegistrationInfo=function(feature){var url=self.getUrl("Registrations/"+feature);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSystemInfo=function(){var url=self.getUrl("System/Info");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getPublicSystemInfo=function(){var url=self.getUrl("System/Info/Public");return self.ajax({type:"GET",url:url,dataType:"json"},false);};self.getInstantMixFromSong=function(itemId,options){var url=self.getUrl("Songs/"+itemId+"/InstantMix",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getInstantMixFromAlbum=function(itemId,options){var url=self.getUrl("Albums/"+itemId+"/InstantMix",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getInstantMixFromArtist=function(options){var url=self.getUrl("Artists/InstantMix",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getInstantMixFromMusicGenre=function(options){var url=self.getUrl("MusicGenres/InstantMix",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getInstantMixFromPlaylist=function(itemId,options){var url=self.getUrl("Playlists/"+itemId+"/InstantMix",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getEpisodes=function(itemId,options){var url=self.getUrl("Shows/"+itemId+"/Episodes",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getDisplayPreferences=function(id,userId,app){var url=self.getUrl("DisplayPreferences/"+id,{userId:userId,client:app});return self.ajax({type:"GET",url:url,dataType:"json"});};self.updateDisplayPreferences=function(id,obj,userId,app){var url=self.getUrl("DisplayPreferences/"+id,{userId:userId,client:app});return self.ajax({type:"POST",url:url,data:JSON.stringify(obj),contentType:"application/json"});};self.getSeasons=function(itemId,options){var url=self.getUrl("Shows/"+itemId+"/Seasons",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSimilarMovies=function(itemId,options){var url=self.getUrl("Movies/"+itemId+"/Similar",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSimilarTrailers=function(itemId,options){var url=self.getUrl("Trailers/"+itemId+"/Similar",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSimilarShows=function(itemId,options){var url=self.getUrl("Shows/"+itemId+"/Similar",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSimilarAlbums=function(itemId,options){var url=self.getUrl("Albums/"+itemId+"/Similar",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSimilarGames=function(itemId,options){var url=self.getUrl("Games/"+itemId+"/Similar",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getCultures=function(){var url=self.getUrl("Localization/cultures");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getCountries=function(){var url=self.getUrl("Localization/countries");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getPluginSecurityInfo=function(){var url=self.getUrl("Plugins/SecurityInfo");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getDirectoryContents=function(path,options){if(!path){throw new Error("null path");}
options=options||{};options.path=path;var url=self.getUrl("Environment/DirectoryContents",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getNetworkShares=function(path){if(!path){throw new Error("null path");}
var options={};options.path=path;var url=self.getUrl("Environment/NetworkShares",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getParentPath=function(path){if(!path){throw new Error("null path");}
var options={};options.path=path;var url=self.getUrl("Environment/ParentPath",options);return self.ajax({type:"GET",url:url});};self.getDrives=function(){var url=self.getUrl("Environment/Drives");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getNetworkDevices=function(){var url=self.getUrl("Environment/NetworkDevices");return self.ajax({type:"GET",url:url,dataType:"json"});};self.cancelPackageInstallation=function(installationId){if(!installationId){throw new Error("null installationId");}
var url=self.getUrl("Packages/Installing/"+installationId);return self.ajax({type:"DELETE",url:url});};self.refreshItem=function(itemId,options){if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Items/"+itemId+"/Refresh",options||{});return self.ajax({type:"POST",url:url});};self.installPlugin=function(name,guid,updateClass,version){if(!name){throw new Error("null name");}
if(!updateClass){throw new Error("null updateClass");}
var options={updateClass:updateClass,AssemblyGuid:guid};if(version){options.version=version;}
var url=self.getUrl("Packages/Installed/"+name,options);return self.ajax({type:"POST",url:url});};self.restartServer=function(){var url=self.getUrl("System/Restart");return self.ajax({type:"POST",url:url});};self.shutdownServer=function(){var url=self.getUrl("System/Shutdown");return self.ajax({type:"POST",url:url});};self.getPackageInfo=function(name,guid){if(!name){throw new Error("null name");}
var options={AssemblyGuid:guid};var url=self.getUrl("Packages/"+name,options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getAvailableApplicationUpdate=function(){var url=self.getUrl("Packages/Updates",{PackageType:"System"});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getAvailablePluginUpdates=function(){var url=self.getUrl("Packages/Updates",{PackageType:"UserInstalled"});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getVirtualFolders=function(){var url="Library/VirtualFolders";url=self.getUrl(url);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getPhysicalPaths=function(){var url=self.getUrl("Library/PhysicalPaths");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getServerConfiguration=function(){var url=self.getUrl("System/Configuration");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getNamedConfiguration=function(name){var url=self.getUrl("System/Configuration/"+name);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getScheduledTasks=function(options){options=options||{};var url=self.getUrl("ScheduledTasks",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.startScheduledTask=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("ScheduledTasks/Running/"+id);return self.ajax({type:"POST",url:url});};self.getScheduledTask=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("ScheduledTasks/"+id);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getNextUpEpisodes=function(options){var url=self.getUrl("Shows/NextUp",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.stopScheduledTask=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("ScheduledTasks/Running/"+id);return self.ajax({type:"DELETE",url:url});};self.getPluginConfiguration=function(id){if(!id){throw new Error("null Id");}
var url=self.getUrl("Plugins/"+id+"/Configuration");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getAvailablePlugins=function(options){options=options||{};options.PackageType="UserInstalled";if(self.enableAppStorePolicy){options.IsAppStoreEnabled=true;}
var url=self.getUrl("Packages",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.uninstallPlugin=function(id){if(!id){throw new Error("null Id");}
var url=self.getUrl("Plugins/"+id);return self.ajax({type:"DELETE",url:url});};self.removeVirtualFolder=function(name,refreshLibrary){if(!name){throw new Error("null name");}
var url="Library/VirtualFolders";url=self.getUrl(url,{refreshLibrary:refreshLibrary?true:false,name:name});return self.ajax({type:"DELETE",url:url});};self.addVirtualFolder=function(name,type,refreshLibrary){if(!name){throw new Error("null name");}
var options={};if(type){options.collectionType=type;}
options.refreshLibrary=refreshLibrary?true:false;options.name=name;var url="Library/VirtualFolders";url=self.getUrl(url,options);return self.ajax({type:"POST",url:url});};self.renameVirtualFolder=function(name,newName,refreshLibrary){if(!name){throw new Error("null name");}
var url="Library/VirtualFolders/Name";url=self.getUrl(url,{refreshLibrary:refreshLibrary?true:false,newName:newName,name:name});return self.ajax({type:"POST",url:url});};self.addMediaPath=function(virtualFolderName,mediaPath,refreshLibrary){if(!virtualFolderName){throw new Error("null virtualFolderName");}
if(!mediaPath){throw new Error("null mediaPath");}
var url="Library/VirtualFolders/Paths";url=self.getUrl(url,{refreshLibrary:refreshLibrary?true:false,path:mediaPath,name:virtualFolderName});return self.ajax({type:"POST",url:url});};self.removeMediaPath=function(virtualFolderName,mediaPath,refreshLibrary){if(!virtualFolderName){throw new Error("null virtualFolderName");}
if(!mediaPath){throw new Error("null mediaPath");}
var url="Library/VirtualFolders/Paths";url=self.getUrl(url,{refreshLibrary:refreshLibrary?true:false,path:mediaPath,name:virtualFolderName});return self.ajax({type:"DELETE",url:url});};self.deleteUser=function(id){if(!id){throw new Error("null id");}
var url=self.getUrl("Users/"+id);return self.ajax({type:"DELETE",url:url});};self.deleteUserImage=function(userId,imageType,imageIndex){if(!userId){throw new Error("null userId");}
if(!imageType){throw new Error("null imageType");}
var url=self.getUrl("Users/"+userId+"/Images/"+imageType);if(imageIndex!=null){url+="/"+imageIndex;}
return self.ajax({type:"DELETE",url:url});};self.deleteItemImage=function(itemId,imageType,imageIndex){if(!imageType){throw new Error("null imageType");}
var url=self.getUrl("Items/"+itemId+"/Images");url+="/"+imageType;if(imageIndex!=null){url+="/"+imageIndex;}
return self.ajax({type:"DELETE",url:url});};self.deleteItem=function(itemId){if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Items/"+itemId);return self.ajax({type:"DELETE",url:url});};self.stopActiveEncodings=function(playSessionId){var options={deviceId:deviceId};if(playSessionId){options.PlaySessionId=playSessionId;}
var url=self.getUrl("Videos/ActiveEncodings",options);return self.ajax({type:"DELETE",url:url});};self.reportCapabilities=function(options){var url=self.getUrl("Sessions/Capabilities/Full");return self.ajax({type:"POST",url:url,data:JSON.stringify(options),contentType:"application/json"});};self.updateItemImageIndex=function(itemId,imageType,imageIndex,newIndex){if(!imageType){throw new Error("null imageType");}
var options={newIndex:newIndex};var url=self.getUrl("Items/"+itemId+"/Images/"+imageType+"/"+imageIndex+"/Index",options);return self.ajax({type:"POST",url:url});};self.getItemImageInfos=function(itemId){var url=self.getUrl("Items/"+itemId+"/Images");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getCriticReviews=function(itemId,options){if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Items/"+itemId+"/CriticReviews",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSessions=function(options){var url=self.getUrl("Sessions",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.uploadUserImage=function(userId,imageType,file){if(!userId){throw new Error("null userId");}
if(!imageType){throw new Error("null imageType");}
if(!file){throw new Error("File must be an image.");}
if(file.type!="image/png"&&file.type!="image/jpeg"&&file.type!="image/jpeg"){throw new Error("File must be an image.");}
var deferred=DeferredBuilder.Deferred();var reader=new FileReader();reader.onerror=function(){deferred.reject();};reader.onabort=function(){deferred.reject();};reader.onload=function(e){var data=e.target.result.split(',')[1];var url=self.getUrl("Users/"+userId+"/Images/"+imageType);self.ajax({type:"POST",url:url,data:data,contentType:"image/"+file.name.substring(file.name.lastIndexOf('.')+1)}).done(function(result){deferred.resolveWith(null,[result]);}).fail(function(){deferred.reject();});};reader.readAsDataURL(file);return deferred.promise();};self.uploadItemImage=function(itemId,imageType,file){if(!itemId){throw new Error("null itemId");}
if(!imageType){throw new Error("null imageType");}
if(!file){throw new Error("File must be an image.");}
if(file.type!="image/png"&&file.type!="image/jpeg"&&file.type!="image/jpeg"){throw new Error("File must be an image.");}
var url=self.getUrl("Items/"+itemId+"/Images");url+="/"+imageType;var deferred=DeferredBuilder.Deferred();var reader=new FileReader();reader.onerror=function(){deferred.reject();};reader.onabort=function(){deferred.reject();};reader.onload=function(e){var data=e.target.result.split(',')[1];self.ajax({type:"POST",url:url,data:data,contentType:"image/"+file.name.substring(file.name.lastIndexOf('.')+1)}).done(function(result){deferred.resolveWith(null,[result]);}).fail(function(){deferred.reject();});};reader.readAsDataURL(file);return deferred.promise();};self.getInstalledPlugins=function(){var options={};if(self.enableAppStorePolicy){options.IsAppStoreEnabled=true;}
var url=self.getUrl("Plugins",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getUser=function(id){if(!id){throw new Error("Must supply a userId");}
var url=self.getUrl("Users/"+id);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getStudio=function(name,userId){if(!name){throw new Error("null name");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("Studios/"+self.encodeName(name),options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getGenre=function(name,userId){if(!name){throw new Error("null name");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("Genres/"+self.encodeName(name),options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getMusicGenre=function(name,userId){if(!name){throw new Error("null name");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("MusicGenres/"+self.encodeName(name),options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getGameGenre=function(name,userId){if(!name){throw new Error("null name");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("GameGenres/"+self.encodeName(name),options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getArtist=function(name,userId){if(!name){throw new Error("null name");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("Artists/"+self.encodeName(name),options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getPerson=function(name,userId){if(!name){throw new Error("null name");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("Persons/"+self.encodeName(name),options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getPublicUsers=function(){var url=self.getUrl("users/public");return self.ajax({type:"GET",url:url,dataType:"json"},false);};self.getUsers=function(options){var url=self.getUrl("users",options||{});return self.ajax({type:"GET",url:url,dataType:"json"});};self.getParentalRatings=function(){var url=self.getUrl("Localization/ParentalRatings");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getDefaultImageQuality=function(imageType){return imageType.toLowerCase()=='backdrop'?80:90;};function normalizeImageOptions(options){var ratio=devicePixelRatio||1;if(ratio){if(options.minScale){ratio=Math.max(options.minScale,ratio);}
if(options.width){options.width=Math.round(options.width*ratio);}
if(options.height){options.height=Math.round(options.height*ratio);}
if(options.maxWidth){options.maxWidth=Math.round(options.maxWidth*ratio);}
if(options.maxHeight){options.maxHeight=Math.round(options.maxHeight*ratio);}}
options.quality=options.quality||self.getDefaultImageQuality(options.type);if(self.normalizeImageOptions){self.normalizeImageOptions(options);}}
self.getUserImageUrl=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};var url="Users/"+userId+"/Images/"+options.type;if(options.index!=null){url+="/"+options.index;}
normalizeImageOptions(options);delete options.type;delete options.index;return self.getUrl(url,options);};self.getImageUrl=function(itemId,options){if(!itemId){throw new Error("itemId cannot be empty");}
options=options||{};var url="Items/"+itemId+"/Images/"+options.type;if(options.index!=null){url+="/"+options.index;}
options.quality=options.quality||self.getDefaultImageQuality(options.type);if(self.normalizeImageOptions){self.normalizeImageOptions(options);}
delete options.type;delete options.index;return self.getUrl(url,options);};self.getScaledImageUrl=function(itemId,options){if(!itemId){throw new Error("itemId cannot be empty");}
options=options||{};var url="Items/"+itemId+"/Images/"+options.type;if(options.index!=null){url+="/"+options.index;}
normalizeImageOptions(options);delete options.type;delete options.index;delete options.minScale;return self.getUrl(url,options);};self.getThumbImageUrl=function(item,options){if(!item){throw new Error("null item");}
options=options||{};options.imageType="thumb";var itemId=item.ImageTags&&item.ImageTags.Thumb?item.Id:item.ParentThumbItemId;return itemId?self.getImageUrl(itemId,options):null;};self.authenticateUserByName=function(name,password){if(!name){var deferred=DeferredBuilder.Deferred();deferred.reject();return deferred.promise();}
var url=self.getUrl("Users/authenticatebyname");var postData={password:CryptoJS.SHA1(password||"").toString(),Username:name};return self.ajax({type:"POST",url:url,data:JSON.stringify(postData),dataType:"json",contentType:"application/json"}).done(function(result){Events.trigger(self,'authenticated',[result]);});};self.updateUserPassword=function(userId,currentPassword,newPassword){if(!userId){throw new Error("null userId");}
var url=self.getUrl("Users/"+userId+"/Password");return self.ajax({type:"POST",url:url,data:{currentPassword:CryptoJS.SHA1(currentPassword).toString(),newPassword:CryptoJS.SHA1(newPassword).toString()}});};self.updateEasyPassword=function(userId,newPassword){if(!userId){throw new Error("null userId");}
var url=self.getUrl("Users/"+userId+"/EasyPassword");return self.ajax({type:"POST",url:url,data:{newPassword:CryptoJS.SHA1(newPassword).toString()}});};self.resetUserPassword=function(userId){if(!userId){throw new Error("null userId");}
var url=self.getUrl("Users/"+userId+"/Password");var postData={};postData.resetPassword=true;return self.ajax({type:"POST",url:url,data:postData});};self.resetEasyPassword=function(userId){if(!userId){throw new Error("null userId");}
var url=self.getUrl("Users/"+userId+"/EasyPassword");var postData={};postData.resetPassword=true;return self.ajax({type:"POST",url:url,data:postData});};self.updateServerConfiguration=function(configuration){if(!configuration){throw new Error("null configuration");}
var url=self.getUrl("System/Configuration");return self.ajax({type:"POST",url:url,data:JSON.stringify(configuration),contentType:"application/json"});};self.updateNamedConfiguration=function(name,configuration){if(!configuration){throw new Error("null configuration");}
var url=self.getUrl("System/Configuration/"+name);return self.ajax({type:"POST",url:url,data:JSON.stringify(configuration),contentType:"application/json"});};self.updateItem=function(item){if(!item){throw new Error("null item");}
var url=self.getUrl("Items/"+item.Id);return self.ajax({type:"POST",url:url,data:JSON.stringify(item),contentType:"application/json"});};self.updatePluginSecurityInfo=function(info){var url=self.getUrl("Plugins/SecurityInfo");return self.ajax({type:"POST",url:url,data:JSON.stringify(info),contentType:"application/json"});};self.createUser=function(name){var url=self.getUrl("Users/New");return self.ajax({type:"POST",url:url,data:{Name:name},dataType:"json"});};self.updateUser=function(user){if(!user){throw new Error("null user");}
var url=self.getUrl("Users/"+user.Id);return self.ajax({type:"POST",url:url,data:JSON.stringify(user),contentType:"application/json"});};self.updateUserPolicy=function(userId,policy){if(!userId){throw new Error("null userId");}
if(!policy){throw new Error("null policy");}
var url=self.getUrl("Users/"+userId+"/Policy");return self.ajax({type:"POST",url:url,data:JSON.stringify(policy),contentType:"application/json"});};self.updateUserConfiguration=function(userId,configuration){if(!userId){throw new Error("null userId");}
if(!configuration){throw new Error("null configuration");}
var url=self.getUrl("Users/"+userId+"/Configuration");return self.ajax({type:"POST",url:url,data:JSON.stringify(configuration),contentType:"application/json"});};self.updateScheduledTaskTriggers=function(id,triggers){if(!id){throw new Error("null id");}
if(!triggers){throw new Error("null triggers");}
var url=self.getUrl("ScheduledTasks/"+id+"/Triggers");return self.ajax({type:"POST",url:url,data:JSON.stringify(triggers),contentType:"application/json"});};self.updatePluginConfiguration=function(id,configuration){if(!id){throw new Error("null Id");}
if(!configuration){throw new Error("null configuration");}
var url=self.getUrl("Plugins/"+id+"/Configuration");return self.ajax({type:"POST",url:url,data:JSON.stringify(configuration),contentType:"application/json"});};self.getAncestorItems=function(itemId,userId){if(!itemId){throw new Error("null itemId");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("Items/"+itemId+"/Ancestors",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getItems=function(userId,options){var url;if((typeof userId).toString().toLowerCase()=='string'){url=self.getUrl("Users/"+userId+"/Items",options);}else{url=self.getUrl("Items",options);}
return self.ajax({type:"GET",url:url,dataType:"json"});};self.getUserViews=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};var url=self.getUrl("Users/"+userId+"/Views",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getArtists=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};options.userId=userId;var url=self.getUrl("Artists",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getAlbumArtists=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};options.userId=userId;var url=self.getUrl("Artists/AlbumArtists",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getGenres=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};options.userId=userId;var url=self.getUrl("Genres",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getMusicGenres=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};options.userId=userId;var url=self.getUrl("MusicGenres",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getGameGenres=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};options.userId=userId;var url=self.getUrl("GameGenres",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getPeople=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};options.userId=userId;var url=self.getUrl("Persons",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getStudios=function(userId,options){if(!userId){throw new Error("null userId");}
options=options||{};options.userId=userId;var url=self.getUrl("Studios",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getLocalTrailers=function(userId,itemId){if(!userId){throw new Error("null userId");}
if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Users/"+userId+"/Items/"+itemId+"/LocalTrailers");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getAdditionalVideoParts=function(userId,itemId){if(!itemId){throw new Error("null itemId");}
var options={};if(userId){options.userId=userId;}
var url=self.getUrl("Videos/"+itemId+"/AdditionalParts",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getThemeMedia=function(userId,itemId,inherit){if(!itemId){throw new Error("null itemId");}
var options={};if(userId){options.userId=userId;}
options.InheritFromParent=inherit||false;var url=self.getUrl("Items/"+itemId+"/ThemeMedia",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSearchHints=function(options){var url=self.getUrl("Search/Hints",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.getSpecialFeatures=function(userId,itemId){if(!userId){throw new Error("null userId");}
if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Users/"+userId+"/Items/"+itemId+"/SpecialFeatures");return self.ajax({type:"GET",url:url,dataType:"json"});};self.getDateParamValue=function(date){function formatDigit(i){return i<10?"0"+i:i;}
var d=date;return""+d.getFullYear()+formatDigit(d.getMonth()+1)+formatDigit(d.getDate())+formatDigit(d.getHours())+formatDigit(d.getMinutes())+formatDigit(d.getSeconds());};self.markPlayed=function(userId,itemId,date){if(!userId){throw new Error("null userId");}
if(!itemId){throw new Error("null itemId");}
var options={};if(date){options.DatePlayed=self.getDateParamValue(date);}
var url=self.getUrl("Users/"+userId+"/PlayedItems/"+itemId,options);return self.ajax({type:"POST",url:url,dataType:"json"});};self.markUnplayed=function(userId,itemId){if(!userId){throw new Error("null userId");}
if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Users/"+userId+"/PlayedItems/"+itemId);return self.ajax({type:"DELETE",url:url,dataType:"json"});};self.updateFavoriteStatus=function(userId,itemId,isFavorite){if(!userId){throw new Error("null userId");}
if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Users/"+userId+"/FavoriteItems/"+itemId);var method=isFavorite?"POST":"DELETE";return self.ajax({type:method,url:url,dataType:"json"});};self.updateUserItemRating=function(userId,itemId,likes){if(!userId){throw new Error("null userId");}
if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Users/"+userId+"/Items/"+itemId+"/Rating",{likes:likes});return self.ajax({type:"POST",url:url,dataType:"json"});};self.getItemCounts=function(userId){var options={};if(userId){options.userId=userId;}
var url=self.getUrl("Items/Counts",options);return self.ajax({type:"GET",url:url,dataType:"json"});};self.clearUserItemRating=function(userId,itemId){if(!userId){throw new Error("null userId");}
if(!itemId){throw new Error("null itemId");}
var url=self.getUrl("Users/"+userId+"/Items/"+itemId+"/Rating");return self.ajax({type:"DELETE",url:url,dataType:"json"});};self.reportPlaybackStart=function(options){if(!options){throw new Error("null options");}
var url=self.getUrl("Sessions/Playing");return self.ajax({type:"POST",data:JSON.stringify(options),contentType:"application/json",url:url});};self.reportPlaybackProgress=function(options){if(!options){throw new Error("null options");}
if(self.isWebSocketOpen()){var deferred=DeferredBuilder.Deferred();var msg=JSON.stringify(options);self.sendWebSocketMessage("ReportPlaybackProgress",msg);deferred.resolveWith(null,[]);return deferred.promise();}
var url=self.getUrl("Sessions/Playing/Progress");return self.ajax({type:"POST",data:JSON.stringify(options),contentType:"application/json",url:url});};self.reportPlaybackStopped=function(options){if(!options){throw new Error("null options");}
var url=self.getUrl("Sessions/Playing/Stopped");return self.ajax({type:"POST",data:JSON.stringify(options),contentType:"application/json",url:url});};self.sendPlayCommand=function(sessionId,options){if(!sessionId){throw new Error("null sessionId");}
if(!options){throw new Error("null options");}
var url=self.getUrl("Sessions/"+sessionId+"/Playing",options);return self.ajax({type:"POST",url:url});};self.sendCommand=function(sessionId,command){if(!sessionId){throw new Error("null sessionId");}
if(!command){throw new Error("null command");}
var url=self.getUrl("Sessions/"+sessionId+"/Command");var ajaxOptions={type:"POST",url:url};ajaxOptions.data=JSON.stringify(command);ajaxOptions.contentType="application/json";return self.ajax(ajaxOptions);};self.sendMessageCommand=function(sessionId,options){if(!sessionId){throw new Error("null sessionId");}
if(!options){throw new Error("null options");}
var url=self.getUrl("Sessions/"+sessionId+"/Message",options);return self.ajax({type:"POST",url:url});};self.sendPlayStateCommand=function(sessionId,command,options){if(!sessionId){throw new Error("null sessionId");}
if(!command){throw new Error("null command");}
var url=self.getUrl("Sessions/"+sessionId+"/Playing/"+command,options||{});return self.ajax({type:"POST",url:url});};self.createPackageReview=function(review){var url=self.getUrl("Packages/Reviews/"+review.id,review);return self.ajax({type:"POST",url:url,});};self.getPackageReviews=function(packageId,minRating,maxRating,limit){if(!packageId){throw new Error("null packageId");}
var options={};if(minRating){options.MinRating=minRating;}
if(maxRating){options.MaxRating=maxRating;}
if(limit){options.Limit=limit;}
var url=self.getUrl("Packages/"+packageId+"/Reviews",options);return self.ajax({type:"GET",url:url,dataType:"json"});};};})(window,window.JSON,window.WebSocket,window.setTimeout,window.devicePixelRatio,window.FileReader);(function(globalScope){if(!globalScope.MediaBrowser){globalScope.MediaBrowser={};}
globalScope.MediaBrowser.ConnectionState={Unavailable:0,ServerSelection:1,ServerSignIn:2,SignedIn:3,ConnectSignIn:4};globalScope.MediaBrowser.ConnectionMode={Local:0,Remote:1,Manual:2};globalScope.MediaBrowser.ServerInfo={getServerAddress:function(server,mode){switch(mode){case MediaBrowser.ConnectionMode.Local:return server.LocalAddress;case MediaBrowser.ConnectionMode.Manual:return server.ManualAddress;case MediaBrowser.ConnectionMode.Remote:return server.RemoteAddress;default:return server.ManualAddress||server.LocalAddress||server.RemoteAddress;}}};globalScope.MediaBrowser.ConnectionManager=function(logger,credentialProvider,appName,appVersion,deviceName,deviceId,capabilities){logger.log('Begin MediaBrowser.ConnectionManager constructor');var self=this;var apiClients=[];var defaultTimeout=20000;function mergeServers(list1,list2){for(var i=0,length=list2.length;i<length;i++){credentialProvider.addOrUpdateServer(list1,list2[i]);}
return list1;}
function resolveWithFailure(deferred){deferred.resolveWith(null,[{State:MediaBrowser.ConnectionState.Unavailable,ConnectUser:self.connectUser()}]);}
function updateServerInfo(server,systemInfo){server.Name=systemInfo.ServerName;server.Id=systemInfo.Id;if(systemInfo.LocalAddress){server.LocalAddress=systemInfo.LocalAddress;}
if(systemInfo.WanAddress){server.RemoteAddress=systemInfo.WanAddress;}
if(systemInfo.MacAddress){server.WakeOnLanInfos=[{MacAddress:systemInfo.MacAddress}];}}
function tryConnect(url,timeout){url+="/system/info/public";logger.log('tryConnect url: '+url);return HttpClient.send({type:"GET",url:url,dataType:"json",timeout:timeout||defaultTimeout});}
var connectUser;self.connectUser=function(){return connectUser;};self.appVersion=function(){return appVersion;};self.capabilities=function(){return capabilities;};self.deviceId=function(){return deviceId;};self.credentialProvider=function(){return credentialProvider;};self.connectUserId=function(){return credentialProvider.credentials().ConnectUserId;};self.connectToken=function(){return credentialProvider.credentials().ConnectAccessToken;};self.getLastUsedServer=function(){var servers=credentialProvider.credentials().Servers;servers.sort(function(a,b){return(b.DateLastAccessed||0)-(a.DateLastAccessed||0);});if(!servers.length){return null;}
return servers[0];};self.getLastUsedApiClient=function(){var servers=credentialProvider.credentials().Servers;servers.sort(function(a,b){return(b.DateLastAccessed||0)-(a.DateLastAccessed||0);});if(!servers.length){return null;}
var server=servers[0];return getOrAddApiClient(server,server.LastConnectionMode);};self.addApiClient=function(apiClient){apiClients.push(apiClient);var existingServers=credentialProvider.credentials().Servers.filter(function(s){return stringEqualsIgnoreCase(s.ManualAddress,apiClient.serverAddress())||stringEqualsIgnoreCase(s.LocalAddress,apiClient.serverAddress())||stringEqualsIgnoreCase(s.RemoteAddress,apiClient.serverAddress());});var existingServer=existingServers.length?existingServers[0]:{};existingServer.DateLastAccessed=new Date().getTime();existingServer.LastConnectionMode=MediaBrowser.ConnectionMode.Manual;existingServer.ManualAddress=apiClient.serverAddress();apiClient.serverInfo(existingServer);Events.on(apiClient,'authenticated',function(e,result){onAuthenticated(this,result,{},true);});if(!existingServers.length){var credentials=credentialProvider.credentials();credentials.Servers=[existingServer];credentialProvider.credentials(credentials);}
Events.trigger(self,'apiclientcreated',[apiClient]);if(existingServer.Id){return;}
apiClient.getPublicSystemInfo().done(function(systemInfo){var credentials=credentialProvider.credentials();existingServer.Id=systemInfo.Id;apiClient.serverInfo(existingServer);credentials.Servers=[existingServer];credentialProvider.credentials(credentials);});};self.clearData=function(){logger.log('connection manager clearing data');connectUser=null;var credentials=credentialProvider.credentials();credentials.ConnectAccessToken=null;credentials.ConnectUserId=null;credentials.Servers=[];credentialProvider.credentials(credentials);};function onConnectUserSignIn(user){connectUser=user;Events.trigger(self,'connectusersignedin',[user]);}
function getOrAddApiClient(server,connectionMode){var apiClient=self.getApiClient(server.Id);if(!apiClient){var url=MediaBrowser.ServerInfo.getServerAddress(server,connectionMode);apiClient=new MediaBrowser.ApiClient(logger,url,appName,appVersion,deviceName,deviceId);apiClients.push(apiClient);apiClient.serverInfo(server);Events.on(apiClient,'authenticated',function(e,result){onAuthenticated(this,result,{},true);});Events.trigger(self,'apiclientcreated',[apiClient]);}
if(server.AccessToken&&server.UserId){apiClient.setAuthenticationInfo(server.AccessToken,server.UserId);}
else{apiClient.clearAuthenticationInfo();}
logger.log('returning instance from getOrAddApiClient');return apiClient;}
self.getOrCreateApiClient=function(serverId){var apiClient=self.getApiClient(serverId);if(apiClient){return apiClient;}
var credentials=credentialProvider.credentials();var servers=credentials.Servers.filter(function(s){return stringEqualsIgnoreCase(s.Id,serverId);});if(!servers.length){throw new Error('Server not found: '+serverId);}
var server=servers[0];return getOrAddApiClient(server,server.LastConnectionMode);};function onAuthenticated(apiClient,result,options,saveCredentials){var credentials=credentialProvider.credentials();var servers=credentials.Servers.filter(function(s){return s.Id==result.ServerId;});var server=servers.length?servers[0]:apiClient.serverInfo();server.DateLastAccessed=new Date().getTime();server.Id=result.ServerId;if(saveCredentials){server.UserId=result.User.Id;server.AccessToken=result.AccessToken;}else{server.UserId=null;server.AccessToken=null;}
credentialProvider.addOrUpdateServer(credentials.Servers,server);saveUserInfoIntoCredentials(server,result.User);credentialProvider.credentials(credentials);afterConnected(apiClient,options);onLocalUserSignIn(result.User);}
function saveUserInfoIntoCredentials(server,user){}
function afterConnected(apiClient,options){options=options||{};if(options.reportCapabilities!==false){apiClient.reportCapabilities(capabilities);}
if(options.enableWebSocket!==false){if(!apiClient.isWebSocketOpenOrConnecting&&apiClient.isWebSocketSupported()){logger.log('calling apiClient.openWebSocket');apiClient.openWebSocket();}}}
function onLocalUserSignIn(user){Events.trigger(self,'localusersignedin',[user]);}
function ensureConnectUser(credentials){var deferred=DeferredBuilder.Deferred();if(connectUser&&connectUser.Id==credentials.ConnectUserId){deferred.resolveWith(null,[[]]);}
else if(credentials.ConnectUserId&&credentials.ConnectAccessToken){connectUser=null;getConnectUser(credentials.ConnectUserId,credentials.ConnectAccessToken).done(function(user){onConnectUserSignIn(user);deferred.resolveWith(null,[[]]);}).fail(function(){deferred.resolveWith(null,[[]]);});}else{deferred.resolveWith(null,[[]]);}
return deferred.promise();}
function getConnectUser(userId,accessToken){if(!userId){throw new Error("null userId");}
if(!accessToken){throw new Error("null accessToken");}
var url="https://connect.mediabrowser.tv/service/user?id="+userId;return HttpClient.send({type:"GET",url:url,dataType:"json",headers:{"X-Application":appName+"/"+appVersion,"X-Connect-UserToken":accessToken}});}
function addAuthenticationInfoFromConnect(server,connectionMode,credentials){if(!server.ExchangeToken){throw new Error("server.ExchangeToken cannot be null");}
if(!credentials.ConnectUserId){throw new Error("credentials.ConnectUserId cannot be null");}
var url=MediaBrowser.ServerInfo.getServerAddress(server,connectionMode);url+="/Connect/Exchange?format=json&ConnectUserId="+credentials.ConnectUserId;return HttpClient.send({type:"GET",url:url,dataType:"json",headers:{"X-MediaBrowser-Token":server.ExchangeToken}}).done(function(auth){server.UserId=auth.LocalUserId;server.AccessToken=auth.AccessToken;}).fail(function(){server.UserId=null;server.AccessToken=null;});}
function validateAuthentication(server,connectionMode){var deferred=DeferredBuilder.Deferred();var url=MediaBrowser.ServerInfo.getServerAddress(server,connectionMode);HttpClient.send({type:"GET",url:url+"/system/info",dataType:"json",headers:{"X-MediaBrowser-Token":server.AccessToken}}).done(function(systemInfo){updateServerInfo(server,systemInfo);if(server.UserId){HttpClient.send({type:"GET",url:url+"/users/"+server.UserId,dataType:"json",headers:{"X-MediaBrowser-Token":server.AccessToken}}).done(function(user){onLocalUserSignIn(user);deferred.resolveWith(null,[[]]);}).fail(function(){server.UserId=null;server.AccessToken=null;deferred.resolveWith(null,[[]]);});}}).fail(function(){server.UserId=null;server.AccessToken=null;deferred.resolveWith(null,[[]]);});return deferred.promise();}
function getImageUrl(localUser){if(connectUser&&connectUser.ImageUrl){return{url:connectUser.ImageUrl};}
if(localUser&&localUser.PrimaryImageTag){var apiClient=self.getApiClient(localUser);var url=apiClient.getUserImageUrl(localUser.Id,{tag:localUser.PrimaryImageTag,type:"Primary"});return{url:url,supportsParams:true};}
return{url:null,supportsParams:false};}
self.user=function(apiClient){var deferred=DeferredBuilder.Deferred();var localUser;function onLocalUserDone(){var image=getImageUrl(localUser);deferred.resolveWith(null,[{localUser:localUser,name:connectUser?connectUser.Name:(localUser?localUser.Name:null),canManageServer:localUser&&localUser.Policy.IsAdministrator,imageUrl:image.url,supportsImageParams:image.supportsParams}]);}
function onEnsureConnectUserDone(){if(apiClient&&apiClient.getCurrentUserId()){apiClient.getCurrentUser().done(function(u){localUser=u;}).always(onLocalUserDone);}else{onLocalUserDone();}}
var credentials=credentialProvider.credentials();if(credentials.ConnectUserId&&credentials.ConnectAccessToken&&!(apiClient&&apiClient.getCurrentUserId())){ensureConnectUser(credentials).always(onEnsureConnectUserDone);}else{onEnsureConnectUserDone();}
return deferred.promise();};self.isLoggedIntoConnect=function(){if(!self.connectToken()||!self.connectUserId()){return false;}
return true;};self.logout=function(){Logger.log('begin connectionManager loguot');var promises=[];for(var i=0,length=apiClients.length;i<length;i++){var apiClient=apiClients[i];if(apiClient.accessToken()){promises.push(logoutOfServer(apiClient));}}
return DeferredBuilder.when(promises).done(function(){var credentials=credentialProvider.credentials();var servers=credentials.Servers.filter(function(u){return u.UserLinkType!="Guest";});for(var j=0,numServers=servers.length;j<numServers;j++){var server=servers[j];server.UserId=null;server.AccessToken=null;server.ExchangeToken=null;var serverUsers=server.Users||[];for(var k=0,numUsers=serverUsers.length;k<numUsers;k++){serverUsers[k].IsSignedInOffline=false;}}
credentials.Servers=servers;credentials.ConnectAccessToken=null;credentials.ConnectUserId=null;credentialProvider.credentials(credentials);if(connectUser){connectUser=null;Events.trigger(self,'connectusersignedout');}});};function logoutOfServer(apiClient){var serverInfo=apiClient.serverInfo()||{};var logoutInfo={serverId:serverInfo.Id};return apiClient.logout().always(function(){Events.trigger(self,'localusersignedout',[logoutInfo]);});}
function getConnectServers(credentials){logger.log('Begin getConnectServers');var deferred=DeferredBuilder.Deferred();if(!credentials.ConnectAccessToken||!credentials.ConnectUserId){deferred.resolveWith(null,[[]]);return deferred.promise();}
var url="https://connect.mediabrowser.tv/service/servers?userId="+credentials.ConnectUserId;HttpClient.send({type:"GET",url:url,dataType:"json",headers:{"X-Application":appName+"/"+appVersion,"X-Connect-UserToken":credentials.ConnectAccessToken}}).done(function(servers){servers=servers.map(function(i){return{ExchangeToken:i.AccessKey,ConnectServerId:i.Id,Id:i.SystemId,Name:i.Name,RemoteAddress:i.Url,LocalAddress:i.LocalAddress,UserLinkType:(i.UserType||'').toLowerCase()=="guest"?"Guest":"LinkedUser"};});deferred.resolveWith(null,[servers]);}).fail(function(){deferred.resolveWith(null,[[]]);});return deferred.promise();}
self.getAvailableServers=function(){logger.log('Begin getAvailableServers');var credentials=credentialProvider.credentials();var deferred=DeferredBuilder.Deferred();var connectServersPromise=getConnectServers(credentials);var findServersPromise=findServers();connectServersPromise.done(function(connectServers){findServersPromise.done(function(foundServers){var servers=credentials.Servers.slice(0);mergeServers(servers,foundServers);mergeServers(servers,connectServers);servers=filterServers(servers,connectServers);servers.sort(function(a,b){return(b.DateLastAccessed||0)-(a.DateLastAccessed||0);});credentials.Servers=servers;credentialProvider.credentials(credentials);deferred.resolveWith(null,[servers]);});});return deferred.promise();};function filterServers(servers,connectServers){return servers.filter(function(server){if(!server.ExchangeToken){return true;}
return connectServers.filter(function(connectServer){return server.Id==connectServer.Id;}).length>0;});}
function findServers(){var deferred=DeferredBuilder.Deferred();require(['serverdiscovery'],function(){ServerDiscovery.findServers(2500).done(function(foundServers){var servers=foundServers.map(function(foundServer){var info={Id:foundServer.Id,LocalAddress:foundServer.Address,Name:foundServer.Name,ManualAddress:convertEndpointAddressToManualAddress(foundServer),DateLastLocalConnection:new Date().getTime()};info.LastConnectionMode=info.ManualAddress?MediaBrowser.ConnectionMode.Manual:MediaBrowser.ConnectionMode.Local;return info;});deferred.resolveWith(null,[servers]);});});return deferred.promise();}
function convertEndpointAddressToManualAddress(info){if(info.Address&&info.EndpointAddress){var address=info.EndpointAddress.split(":")[0];var parts=info.Address.split(":");if(parts.length>1){var portString=parts[parts.length-1];if(!isNaN(parseInt(portString))){address+=":"+portString;}}
return normalizeAddress(address);}
return null;}
self.connect=function(){logger.log('Begin connect');var deferred=DeferredBuilder.Deferred();self.getAvailableServers().done(function(servers){self.connectToServers(servers).done(function(result){deferred.resolveWith(null,[result]);});});return deferred.promise();};self.getOffineResult=function(){};self.connectToServers=function(servers){logger.log('Begin connectToServers, with '+servers.length+' servers');var deferred=DeferredBuilder.Deferred();if(servers.length==1){self.connectToServer(servers[0]).done(function(result){if(result.State==MediaBrowser.ConnectionState.Unavailable){result.State=result.ConnectUser==null?MediaBrowser.ConnectionState.ConnectSignIn:MediaBrowser.ConnectionState.ServerSelection;}
logger.log('resolving connectToServers with result.State: '+result.State);deferred.resolveWith(null,[result]);});}else{var firstServer=servers.length?servers[0]:null;if(firstServer){self.connectToServer(firstServer).done(function(result){if(result.State==MediaBrowser.ConnectionState.SignedIn){deferred.resolveWith(null,[result]);}else{deferred.resolveWith(null,[{Servers:servers,State:(!servers.length&&!self.connectUser())?MediaBrowser.ConnectionState.ConnectSignIn:MediaBrowser.ConnectionState.ServerSelection,ConnectUser:self.connectUser()}]);}});}else{deferred.resolveWith(null,[{Servers:servers,State:(!servers.length&&!self.connectUser())?MediaBrowser.ConnectionState.ConnectSignIn:MediaBrowser.ConnectionState.ServerSelection,ConnectUser:self.connectUser()}]);}}
return deferred.promise();};function beginWakeServer(server){require(['wakeonlan'],function(){var infos=server.WakeOnLanInfos||[];for(var i=0,length=infos.length;i<length;i++){WakeOnLan.send(infos[i]);}});}
self.connectToServer=function(server,options){var deferred=DeferredBuilder.Deferred();var tests=[];if(server.LastConnectionMode!=null){tests.push(server.LastConnectionMode);}
if(tests.indexOf(MediaBrowser.ConnectionMode.Manual)==-1){tests.push(MediaBrowser.ConnectionMode.Manual);}
if(tests.indexOf(MediaBrowser.ConnectionMode.Local)==-1){tests.push(MediaBrowser.ConnectionMode.Local);}
if(tests.indexOf(MediaBrowser.ConnectionMode.Remote)==-1){tests.push(MediaBrowser.ConnectionMode.Remote);}
beginWakeServer(server);var wakeOnLanSendTime=new Date().getTime();testNextConnectionMode(tests,0,server,wakeOnLanSendTime,options,deferred);return deferred.promise();};function stringEqualsIgnoreCase(str1,str2){return(str1||'').toLowerCase()==(str2||'').toLowerCase();}
function testNextConnectionMode(tests,index,server,wakeOnLanSendTime,options,deferred){if(index>=tests.length){logger.log('Tested all connection modes. Failing server connection.');resolveWithFailure(deferred);return;}
var mode=tests[index];var address=MediaBrowser.ServerInfo.getServerAddress(server,mode);var enableRetry=false;var skipTest=false;var timeout=defaultTimeout;if(mode==MediaBrowser.ConnectionMode.Local){enableRetry=true;timeout=7000;}
else if(mode==MediaBrowser.ConnectionMode.Manual){if(stringEqualsIgnoreCase(address,server.LocalAddress)||stringEqualsIgnoreCase(address,server.RemoteAddress)){skipTest=true;}}
if(skipTest||!address){testNextConnectionMode(tests,index+1,server,wakeOnLanSendTime,options,deferred);return;}
logger.log('testing connection mode '+mode+' with server '+server.Name);tryConnect(address,timeout).done(function(result){logger.log('calling onSuccessfulConnection with connection mode '+mode+' with server '+server.Name);onSuccessfulConnection(server,result,mode,options,deferred);}).fail(function(){logger.log('test failed for connection mode '+mode+' with server '+server.Name);if(enableRetry){var sleepTime=10000-(new Date().getTime()-wakeOnLanSendTime);testNextConnectionMode(tests,index+1,server,wakeOnLanSendTime,options,deferred);}else{testNextConnectionMode(tests,index+1,server,wakeOnLanSendTime,options,deferred);}});}
function onSuccessfulConnection(server,systemInfo,connectionMode,options,deferred){var credentials=credentialProvider.credentials();if(credentials.ConnectAccessToken){ensureConnectUser(credentials).done(function(){if(server.ExchangeToken){addAuthenticationInfoFromConnect(server,connectionMode,credentials).always(function(){afterConnectValidated(server,credentials,systemInfo,connectionMode,true,options,deferred);});}else{afterConnectValidated(server,credentials,systemInfo,connectionMode,true,options,deferred);}});}
else{afterConnectValidated(server,credentials,systemInfo,connectionMode,true,options,deferred);}}
function afterConnectValidated(server,credentials,systemInfo,connectionMode,verifyLocalAuthentication,options,deferred){if(verifyLocalAuthentication&&server.AccessToken){validateAuthentication(server,connectionMode).done(function(){afterConnectValidated(server,credentials,systemInfo,connectionMode,false,options,deferred);});return;}
updateServerInfo(server,systemInfo);server.DateLastAccessed=new Date().getTime();server.LastConnectionMode=connectionMode;credentialProvider.addOrUpdateServer(credentials.Servers,server);credentialProvider.credentials(credentials);var result={Servers:[]};result.ApiClient=getOrAddApiClient(server,connectionMode);result.State=server.AccessToken?MediaBrowser.ConnectionState.SignedIn:MediaBrowser.ConnectionState.ServerSignIn;result.Servers.push(server);result.ApiClient.updateServerInfo(server,connectionMode);if(result.State==MediaBrowser.ConnectionState.SignedIn){afterConnected(result.ApiClient,options);}
deferred.resolveWith(null,[result]);Events.trigger(self,'connected',[result]);}
function normalizeAddress(address){address=address.trim();if(address.toLowerCase().indexOf('http')!=0){address="http://"+address;}
address=address.replace('Http:','http:');address=address.replace('Https:','https:');return address;}
self.connectToAddress=function(address){var deferred=DeferredBuilder.Deferred();if(!address){deferred.reject();return deferred.promise();}
address=normalizeAddress(address);function onFail(){logger.log('connectToAddress '+address+' failed');resolveWithFailure(deferred);}
tryConnect(address,defaultTimeout).done(function(publicInfo){logger.log('connectToAddress '+address+' succeeded');var server={ManualAddress:address,LastConnectionMode:MediaBrowser.ConnectionMode.Manual};updateServerInfo(server,publicInfo);self.connectToServer(server).done(function(result){deferred.resolveWith(null,[result]);}).fail(onFail);}).fail(onFail);return deferred.promise();};self.loginToConnect=function(username,password){var deferred=DeferredBuilder.Deferred();if(!username){deferred.reject();return deferred.promise();}
if(!password){deferred.reject();return deferred.promise();}
require(['connectservice'],function(){var md5=self.getConnectPasswordHash(password);HttpClient.send({type:"POST",url:"https://connect.mediabrowser.tv/service/user/authenticate",data:{nameOrEmail:username,password:md5},dataType:"json",contentType:'application/x-www-form-urlencoded; charset=UTF-8',headers:{"X-Application":appName+"/"+appVersion}}).done(function(result){var credentials=credentialProvider.credentials();credentials.ConnectAccessToken=result.AccessToken;credentials.ConnectUserId=result.User.Id;credentialProvider.credentials(credentials);onConnectUserSignIn(result.User);deferred.resolveWith(null,[result]);}).fail(function(){deferred.reject();});});return deferred.promise();};self.signupForConnect=function(email,username,password,passwordConfirm){var deferred=DeferredBuilder.Deferred();if(!email){deferred.rejectWith(null,[{errorCode:'invalidinput'}]);return deferred.promise();}
if(!username){deferred.rejectWith(null,[{errorCode:'invalidinput'}]);return deferred.promise();}
if(!password){deferred.rejectWith(null,[{errorCode:'invalidinput'}]);return deferred.promise();}
if(!passwordConfirm){deferred.rejectWith(null,[{errorCode:'passwordmatch'}]);return deferred.promise();}
if(password!=passwordConfirm){deferred.rejectWith(null,[{errorCode:'passwordmatch'}]);return deferred.promise();}
require(['connectservice'],function(){var md5=self.getConnectPasswordHash(password);HttpClient.send({type:"POST",url:"https://connect.mediabrowser.tv/service/register",data:{email:email,userName:username,password:md5},dataType:"json",contentType:'application/x-www-form-urlencoded; charset=UTF-8',headers:{"X-Application":appName+"/"+appVersion,"X-CONNECT-TOKEN":"CONNECT-REGISTER"}}).done(function(result){deferred.resolve(null,[]);}).fail(function(e){try{var result=JSON.parse(e.responseText);deferred.rejectWith(null,[{errorCode:result.Status}]);}catch(err){deferred.rejectWith(null,[{}]);}});});return deferred.promise();};self.getConnectPasswordHash=function(password){password=globalScope.MediaBrowser.ConnectService.cleanPassword(password);return CryptoJS.MD5(password).toString();};self.getApiClient=function(item){if(item.ServerId){item=item.ServerId;}
return apiClients.filter(function(a){var serverInfo=a.serverInfo();return!serverInfo||serverInfo.Id==item;})[0];};self.getUserInvitations=function(){var connectToken=self.connectToken();if(!connectToken){throw new Error("null connectToken");}
if(!self.connectUserId()){throw new Error("null connectUserId");}
var url="https://connect.mediabrowser.tv/service/servers?userId="+self.connectUserId()+"&status=Waiting";return HttpClient.send({type:"GET",url:url,dataType:"json",headers:{"X-Connect-UserToken":connectToken,"X-Application":appName+"/"+appVersion}});};self.deleteServer=function(serverId){var credentials=credentialProvider.credentials();var serverInfo=credentials.Servers=credentials.Servers.filter(function(s){return s.ConnectServerId==serverId;});function onDone(){credentials=credentialProvider.credentials();credentials.Servers=credentials.Servers.filter(function(s){return s.ConnectServerId!=serverId;});credentialProvider.credentials(credentials);}
if(serverInfo.ExchangeToken){var connectToken=self.connectToken();if(!serverId){throw new Error("null serverId");}
if(!connectToken){throw new Error("null connectToken");}
if(!self.connectUserId()){throw new Error("null connectUserId");}
var url="https://connect.mediabrowser.tv/service/serverAuthorizations?serverId="+serverId+"&userId="+self.connectUserId();return HttpClient.send({type:"DELETE",url:url,headers:{"X-Connect-UserToken":connectToken,"X-Application":appName+"/"+appVersion}}).always(onDone);}else{onDone();var deferred=DeferredBuilder.Deferred();deferred.resolve();return deferred.promise();}};self.rejectServer=function(serverId){var connectToken=self.connectToken();if(!serverId){throw new Error("null serverId");}
if(!connectToken){throw new Error("null connectToken");}
if(!self.connectUserId()){throw new Error("null connectUserId");}
var url="https://connect.mediabrowser.tv/service/serverAuthorizations?serverId="+serverId+"&userId="+self.connectUserId();return HttpClient.send({type:"DELETE",url:url,headers:{"X-Connect-UserToken":connectToken,"X-Application":appName+"/"+appVersion}});};self.acceptServer=function(serverId){var connectToken=self.connectToken();if(!serverId){throw new Error("null serverId");}
if(!connectToken){throw new Error("null connectToken");}
if(!self.connectUserId()){throw new Error("null connectUserId");}
var url="https://connect.mediabrowser.tv/service/ServerAuthorizations/accept?serverId="+serverId+"&userId="+self.connectUserId();return HttpClient.send({type:"GET",url:url,headers:{"X-Connect-UserToken":connectToken,"X-Application":appName+"/"+appVersion}});};self.getRegistrationInfo=function(feature,apiClient){var deferred=DeferredBuilder.Deferred();self.getAvailableServers().done(function(servers){var matchedServers=servers.filter(function(s){return stringEqualsIgnoreCase(s.Id,apiClient.serverInfo().Id);});if(!matchedServers.length){deferred.resolveWith(null,[{}]);return;}
var match=matchedServers[0];if((new Date().getTime()-(match.DateLastLocalConnection||0))>2678400000){deferred.resolveWith(null,[{}]);return;}
apiClient.getRegistrationInfo(feature).done(function(result){deferred.resolveWith(null,[result]);}).fail(function(){deferred.reject();});}).fail(function(){deferred.reject();});return deferred.promise();};return self;};})(window,window.Logger);var SURROGATE_PAIR_REGEXP=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,NON_ALPHANUMERIC_REGEXP=/([^\#-~| |!])/g;var hiddenPre=document.createElement("pre");function htmlDecode(value){if(!value){return'';}
hiddenPre.innerHTML=value.replace(/</g,"&lt;");return hiddenPre.textContent;}
function htmlEncode(value){return value.replace(/&/g,'&amp;').replace(SURROGATE_PAIR_REGEXP,function(value){var hi=value.charCodeAt(0);var low=value.charCodeAt(1);return'&#'+(((hi-0xD800)*0x400)+(low-0xDC00)+0x10000)+';';}).replace(NON_ALPHANUMERIC_REGEXP,function(value){return'&#'+value.charCodeAt(0)+';';}).replace(/</g,'&lt;').replace(/>/g,'&gt;');}
Array.prototype.remove=function(from,to){var rest=this.slice((to||from)+1||this.length);this.length=from<0?this.length+from:from;return this.push.apply(this,rest);};$.fn.checked=function(value){if(value===true||value===false){return $(this).each(function(){this.checked=value;});}else{return $(this).is(':checked');}};$.fn.buttonEnabled=function(enabled){return enabled?this.attr('disabled','').removeAttr('disabled'):this.attr('disabled','disabled');};if(!Array.prototype.filter){Array.prototype.filter=function(fun){"use strict";if(this==null)
throw new TypeError();var t=Object(this);var len=t.length>>>0;if(typeof fun!="function")
throw new TypeError();var res=[];var thisp=arguments[1];for(var i=0;i<len;i++){if(i in t){var val=t[i];if(fun.call(thisp,val,i,t))
res.push(val);}}
return res;};}
var WebNotifications={show:function(data){if(window.cordova&&window.cordova.plugins&&window.cordova.plugins.notification){if(!WebNotifications.lastId){WebNotifications.lastId=new Date().getDate()+new Date().getMilliseconds();}
WebNotifications.lastId++;window.cordova.plugins.notification.local.schedule({id:WebNotifications.lastId,title:data.title,text:data.body,icon:data.icon});}
else if(window.Notification){var level=Notification.permissionLevel?Notification.permissionLevel():Notification.permission;if(level==="granted"){var notif=new Notification(data.title,data);if(notif.show){notif.show();}
if(data.timeout){setTimeout(function(){if(notif.close){notif.close();}
else if(notif.cancel){notif.cancel();}},data.timeout);}
return notif;}else if(level==="default"){Notification.requestPermission(function(){return WebNotifications.show(data);});}}
else if(window.webkitNotifications){if(!webkitNotifications.checkPermission()){var notif=webkitNotifications.createNotification(data.icon,data.title,data.body);notif.show();if(data.timeout){setTimeout(function(){if(notif.close){notif.close();}
else if(notif.cancel){notif.cancel();}},data.timeout);}
return notif;}else{webkitNotifications.requestPermission(function(){return WebNotifications.show(data);});}}},requestPermission:function(){if(window.webkitNotifications){if(!webkitNotifications.checkPermission()){}else{webkitNotifications.requestPermission(function(){});}}
else if(window.Notification){var level=Notification.permissionLevel?Notification.permissionLevel():Notification.permission;if(level==="default"){Notification.requestPermission(function(){});}}}};function humane_date(date_str){var time_formats=[[90,'a minute'],[3600,'minutes',60],[5400,'an hour'],[86400,'hours',3600],[129600,'a day'],[604800,'days',86400],[907200,'a week'],[2628000,'weeks',604800],[3942000,'a month'],[31536000,'months',2628000],[47304000,'a year'],[3153600000,'years',31536000]];var dt=new Date;var date=parseISO8601Date(date_str,{toLocal:true});var seconds=((dt-date)/1000);var token=' ago';var i=0;var format;if(seconds<0){seconds=Math.abs(seconds);token='';}
while(format=time_formats[i++]){if(seconds<format[0]){if(format.length==2){return format[1]+token;}else{return Math.round(seconds/format[2])+' '+format[1]+token;}}}
if(seconds>4730400000)
return Math.round(seconds/4730400000)+' centuries'+token;return date_str;};function humane_elapsed(firstDateStr,secondDateStr){var dt1=new Date(firstDateStr);var dt2=new Date(secondDateStr);var seconds=(dt2.getTime()-dt1.getTime())/1000;var numdays=Math.floor((seconds%31536000)/86400);var numhours=Math.floor(((seconds%31536000)%86400)/3600);var numminutes=Math.floor((((seconds%31536000)%86400)%3600)/60);var numseconds=Math.round((((seconds%31536000)%86400)%3600)%60);var elapsedStr='';elapsedStr+=numdays==1?numdays+' day ':'';elapsedStr+=numdays>1?numdays+' days ':'';elapsedStr+=numhours==1?numhours+' hour ':'';elapsedStr+=numhours>1?numhours+' hours ':'';elapsedStr+=numminutes==1?numminutes+' minute ':'';elapsedStr+=numminutes>1?numminutes+' minutes ':'';elapsedStr+=elapsedStr.length>0?'and ':'';elapsedStr+=numseconds==1?numseconds+' second':'';elapsedStr+=numseconds==0||numseconds>1?numseconds+' seconds':'';return elapsedStr;}
function getWindowUrl(win){return(win||window).location.href;}
function getWindowLocationSearch(win){var search=(win||window).location.search;if(!search){var index=window.location.href.indexOf('?');if(index!=-1){search=window.location.href.substring(index);}}
return search||'';}
function getParameterByName(name,url){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS,"i");var results=regex.exec(url||getWindowLocationSearch());if(results==null)
return"";else
return decodeURIComponent(results[1].replace(/\+/g," "));}
function replaceQueryString(url,param,value){var re=new RegExp("([?|&])"+param+"=.*?(&|$)","i");if(url.match(re))
return url.replace(re,'$1'+param+"="+value+'$2');else if(value){if(url.indexOf('?')==-1){return url+'?'+param+"="+value;}
return url+'&'+param+"="+value;}
return url;}
function parseISO8601Date(s,options){options=options||{};var re=/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|([+-])(\d{2}):(\d{2}))?/;var d=s.match(re);if(!d){throw"Couldn't parse ISO 8601 date string '"+s+"'";}
var a=[1,2,3,4,5,6,10,11];for(var i in a){d[a[i]]=parseInt(d[a[i]],10);}
d[7]=parseFloat(d[7]);var ms=Date.UTC(d[1],d[2]-1,d[3],d[4],d[5],d[6]);if(d[7]>0){ms+=Math.round(d[7]*1000);}
if(d[8]!="Z"&&d[10]){var offset=d[10]*60*60*1000;if(d[11]){offset+=d[11]*60*1000;}
if(d[9]=="-"){ms-=offset;}else{ms+=offset;}}else if(!options.toLocal){ms+=new Date().getTimezoneOffset()*60000;}
return new Date(ms);}
(function($,window,undefined){function queryStringToObject(qstr){var result={},nvPairs=((qstr||"").replace(/^\?/,"").split(/&/)),i,pair,n,v;for(i=0;i<nvPairs.length;i++){var pstr=nvPairs[i];if(pstr){pair=pstr.split(/=/);n=pair[0];v=pair[1];if(result[n]===undefined){result[n]=v;}else{if(typeof result[n]!=="object"){result[n]=[result[n]];}
result[n].push(v);}}}
return result;}
$(document).bind("pagebeforechange",function(e,data){if(typeof data.toPage==="string"){var u=$.mobile.path.parseUrl(data.toPage);if($.mobile.path.isEmbeddedPage(u)){var u2=$.mobile.path.parseUrl(u.hash.replace(/^#/,""));if(u2.search){if(!data.options.dataUrl){data.options.dataUrl=data.toPage;}
data.options.pageData=queryStringToObject(u2.search);data.toPage=u.hrefNoHash+"#"+u2.pathname;}}}});})(jQuery,window);function ticks_to_human(str){var in_seconds=(str/10000000);var hours=Math.floor(in_seconds/3600);var minutes=Math.floor((in_seconds-(hours*3600))/60);var seconds='0'+Math.round(in_seconds-(hours*3600)-(minutes*60));var time='';if(hours>0)time+=hours+":";if(minutes<10&&hours==0)time+=minutes;else time+=('0'+minutes).substr(-2);time+=":"+seconds.substr(-2);return time;};(function(window){window.Globalize={translate:function(key){var val=window.localizationGlossary[key]||key;for(var i=1;i<arguments.length;i++){val=val.replace('{'+(i-1)+'}',arguments[i]);}
return val;}};})(window);(function(){var supportTouch=$.support.touch,scrollEvent="touchmove scroll",touchStartEvent=supportTouch?"touchstart":"mousedown",touchStopEvent=supportTouch?"touchend":"mouseup",touchMoveEvent=supportTouch?"touchmove":"mousemove";$.event.special.swipeupdown={setup:function(){var thisObject=this;var $this=$(thisObject);$this.bind(touchStartEvent,function(event){var data=event.originalEvent.touches?event.originalEvent.touches[0]:event,start={time:(new Date).getTime(),coords:[data.pageX,data.pageY],origin:$(event.target)},stop;function moveHandler(event){if(!start){return;}
var data=event.originalEvent.touches?event.originalEvent.touches[0]:event;stop={time:(new Date).getTime(),coords:[data.pageX,data.pageY]};if(Math.abs(start.coords[1]-stop.coords[1])>10){event.preventDefault();}}
$this.bind(touchMoveEvent,moveHandler).one(touchStopEvent,function(event){$this.unbind(touchMoveEvent,moveHandler);if(start&&stop){if(stop.time-start.time<1000&&Math.abs(start.coords[1]-stop.coords[1])>100&&Math.abs(start.coords[0]-stop.coords[0])<75){start.origin.trigger("swipeupdown").trigger(start.coords[1]>stop.coords[1]?"swipeup":"swipedown");}}
start=stop=undefined;});});}};$.each({swipedown:"swipeupdown",swipeup:"swipeupdown"},function(event,sourceEvent){$.event.special[event]={setup:function(){$(this).bind(sourceEvent,$.noop);}};});})();$.fn.visible=function(visible){if(visible){return this.removeClass('hide');}
return this.addClass('hide');};(function(){$.ajaxSetup({crossDomain:true});if($.browser.msie){$.ajaxSetup({cache:false});}})();$.support.cors=true;$(document).one('click',WebNotifications.requestPermission);var Dashboard={jQueryMobileInit:function(){$.mobile.popup.prototype.options.transition="none";if($.browser.mobile){$.mobile.defaultPageTransition="none";}else{$.mobile.defaultPageTransition="none";}
$.mobile.panel.prototype.options.classes.modalOpen="largePanelModalOpen ui-panel-dismiss-open";$.mobile.panel.prototype.options.classes.panel="largePanel ui-panel";$.event.special.swipe.verticalDistanceThreshold=40;$.mobile.loader.prototype.options.disabled=true;$.mobile.page.prototype.options.domCache=true;$.mobile.loadingMessage=false;$.mobile.loader.prototype.options.html="";$.mobile.loader.prototype.options.textVisible=false;$.mobile.loader.prototype.options.textOnly=true;$.mobile.loader.prototype.options.text="";$.mobile.hideUrlBar=false;$.mobile.autoInitializePage=false;$.mobile.changePage.defaults.showLoadMsg=false;$.mobile.nojs=null;$.mobile.degradeInputsWithin=null;$.mobile.keepNative=":jqmData(role='none'),.paper-input";},isConnectMode:function(){if(AppInfo.isNativeApp){return true;}
var url=getWindowUrl().toLowerCase();return url.indexOf('mediabrowser.tv')!=-1||url.indexOf('emby.media')!=-1;},isRunningInCordova:function(){return window.appMode=='cordova';},onRequestFail:function(e,data){if(data.status==401){var url=data.url.toLowerCase();if(url.indexOf('/password')==-1&&url.indexOf('/authenticate')==-1&&!$($.mobile.activePage).is('.standalonePage')){if(data.errorCode=="ParentalControl"){Dashboard.alert({message:Globalize.translate('MessageLoggedOutParentalControl'),callback:function(){Dashboard.logout(false);}});}else{Dashboard.logout(false);}}
return;}
Dashboard.hideLoadingMsg();},getCurrentUser:function(){if(!Dashboard.getUserPromise){Dashboard.getUserPromise=window.ApiClient.getCurrentUser().fail(Dashboard.logout);}
return Dashboard.getUserPromise;},validateCurrentUser:function(){Dashboard.getUserPromise=null;if(Dashboard.getCurrentUserId()){Dashboard.getCurrentUser();}},serverAddress:function(){if(Dashboard.isConnectMode()){var apiClient=window.ApiClient;if(apiClient){return apiClient.serverAddress();}
return null;}
var urlLower=getWindowUrl().toLowerCase();var index=urlLower.indexOf('/web');if(index==-1){index=urlLower.indexOf('/dashboard');}
if(index!=-1){return urlLower.substring(0,index);}
var loc=window.location;var address=loc.protocol+'//'+loc.hostname;if(loc.port){address+=':'+loc.port;}
return address;},getCurrentUserId:function(){var apiClient=window.ApiClient;if(apiClient){return apiClient.getCurrentUserId();}
return null;},onServerChanged:function(userId,accessToken,apiClient){apiClient=apiClient||window.ApiClient;window.ApiClient=apiClient;Dashboard.getUserPromise=null;},logout:function(logoutWithServer){function onLogoutDone(){var loginPage;if(Dashboard.isConnectMode()){loginPage='connectlogin.html';window.ApiClient=null;}else{loginPage='login.html';}
Dashboard.navigate(loginPage);}
if(logoutWithServer===false){onLogoutDone();}else{ConnectionManager.logout().done(onLogoutDone);}},importCss:function(url){if(!Dashboard.importedCss){Dashboard.importedCss=[];}
if(Dashboard.importedCss.indexOf(url)!=-1){return;}
Dashboard.importedCss.push(url);if(document.createStyleSheet){document.createStyleSheet(url);}
else{var link=document.createElement('link');link.setAttribute('rel','stylesheet');link.setAttribute('type','text/css');link.setAttribute('href',url);document.head.appendChild(link);}},showError:function(message){Dashboard.alert(message);},updateSystemInfo:function(info){Dashboard.lastSystemInfo=info;Dashboard.ensureWebSocket();if(!Dashboard.initialServerVersion){Dashboard.initialServerVersion=info.Version;}
if(info.HasPendingRestart){Dashboard.hideDashboardVersionWarning();Dashboard.getCurrentUser().done(function(currentUser){if(currentUser.Policy.IsAdministrator){Dashboard.showServerRestartWarning(info);}});}else{Dashboard.hideServerRestartWarning();if(Dashboard.initialServerVersion!=info.Version){Dashboard.showDashboardRefreshNotification();}}
Dashboard.showInProgressInstallations(info.InProgressInstallations);},showInProgressInstallations:function(installations){installations=installations||[];for(var i=0,length=installations.length;i<length;i++){var installation=installations[i];var percent=installation.PercentComplete||0;if(percent<100){Dashboard.showPackageInstallNotification(installation,"progress");}}
if(installations.length){Dashboard.ensureInstallRefreshInterval();}else{Dashboard.stopInstallRefreshInterval();}},ensureInstallRefreshInterval:function(){if(!Dashboard.installRefreshInterval){if(ApiClient.isWebSocketOpen()){ApiClient.sendWebSocketMessage("SystemInfoStart","0,500");}
Dashboard.installRefreshInterval=1;}},stopInstallRefreshInterval:function(){if(Dashboard.installRefreshInterval){if(ApiClient.isWebSocketOpen()){ApiClient.sendWebSocketMessage("SystemInfoStop");}
Dashboard.installRefreshInterval=null;}},cancelInstallation:function(id){ApiClient.cancelPackageInstallation(id).always(Dashboard.refreshSystemInfoFromServer);},showServerRestartWarning:function(systemInfo){var html='<span style="margin-right: 1em;">'+Globalize.translate('MessagePleaseRestart')+'</span>';if(systemInfo.CanSelfRestart){html+='<button type="button" data-icon="refresh" onclick="this.disabled=\'disabled\';Dashboard.restartServer();" data-theme="b" data-inline="true" data-mini="true">'+Globalize.translate('ButtonRestart')+'</button>';}
Dashboard.showFooterNotification({id:"serverRestartWarning",html:html,forceShow:true,allowHide:false});},hideServerRestartWarning:function(){var elem=document.getElementById('serverRestartWarning');if(elem){elem.parentNode.removeChild(elem);}},showDashboardRefreshNotification:function(){var html='<span style="margin-right: 1em;">'+Globalize.translate('MessagePleaseRefreshPage')+'</span>';html+='<button type="button" data-icon="refresh" onclick="this.disabled=\'disabled\';Dashboard.reloadPage();" data-theme="b" data-inline="true" data-mini="true">'+Globalize.translate('ButtonRefresh')+'</button>';Dashboard.showFooterNotification({id:"dashboardVersionWarning",html:html,forceShow:true,allowHide:false});},reloadPage:function(){var currentUrl=getWindowUrl().toLowerCase();var newUrl;if(currentUrl.indexOf('configurationpage')!=-1){newUrl="dashboard.html";}else{newUrl=getWindowUrl();}
window.location.href=newUrl;},hideDashboardVersionWarning:function(){var elem=document.getElementById('dashboardVersionWarning');if(elem){elem.parentNode.removeChild(elem);}},showFooterNotification:function(options){if(!AppInfo.enableFooterNotifications){return;}
var removeOnHide=!options.id;options.id=options.id||"notification"+new Date().getTime()+parseInt(Math.random());var footer=$(".footer").css("top","initial").show();var parentElem=$('#footerNotifications',footer);var elem=$('#'+options.id,parentElem);if(!elem.length){elem=$('<p id="'+options.id+'" class="footerNotification"></p>').appendTo(parentElem);}
var onclick=removeOnHide?"$(\"#"+options.id+"\").trigger(\"notification.remove\").remove();":"$(\"#"+options.id+"\").trigger(\"notification.hide\").hide();";if(options.allowHide!==false){options.html+="<span style='margin-left: 1em;'><button type='button' onclick='"+onclick+"' data-icon='delete' data-iconpos='notext' data-mini='true' data-inline='true' data-theme='b'>"+Globalize.translate('ButtonHide')+"</button></span>";}
if(options.forceShow){elem.slideDown(400);}
elem.html(options.html).trigger('create');if(options.timeout){setTimeout(function(){if(removeOnHide){elem.trigger("notification.remove").remove();}else{elem.trigger("notification.hide").hide();}},options.timeout);}
footer.on("notification.remove notification.hide",function(e){setTimeout(function(){if(!parentElem.html()){footer.slideUp();}},50);});},getConfigurationPageUrl:function(name){return"ConfigurationPage?name="+encodeURIComponent(name);},navigate:function(url,preserveQueryString,transition){if(!url){throw new Error('url cannot be null or empty');}
var queryString=getWindowLocationSearch();if(preserveQueryString&&queryString){url+=queryString;}
var options={};if(transition){options.transition=transition;}
$.mobile.changePage(url,options);},showLoadingMsg:function(){console.log('showLoadingMsg');require(['paperbuttonstyle'],function(){var elem=document.querySelector('.docspinner');if(elem){elem.active=true;}else{elem=document.createElement("paper-spinner");elem.classList.add('docspinner');document.body.appendChild(elem);elem.active=true;}});},hideLoadingMsg:function(){console.log('hideLoadingMsg');require(['paperbuttonstyle'],function(){var elem=document.querySelector('.docspinner');if(elem){elem.active=false;setTimeout(function(){elem.active=false;},100);}});},getModalLoadingMsg:function(){var elem=$('.modalLoading');if(!elem.length){elem=$('<div class="modalLoading" style="display:none;"></div>').appendTo(document.body);}
return elem;},showModalLoadingMsg:function(){Dashboard.showLoadingMsg();Dashboard.getModalLoadingMsg().show();},hideModalLoadingMsg:function(){Dashboard.getModalLoadingMsg().hide();Dashboard.hideLoadingMsg();},processPluginConfigurationUpdateResult:function(){Dashboard.hideLoadingMsg();Dashboard.alert("Settings saved.");},defaultErrorMessage:Globalize.translate('DefaultErrorMessage'),processServerConfigurationUpdateResult:function(result){Dashboard.hideLoadingMsg();Dashboard.alert(Globalize.translate('MessageSettingsSaved'));},alert:function(options){if(typeof options=="string"){require(['paperbuttonstyle'],function(){var message=options;Dashboard.toastId=Dashboard.toastId||0;var id='toast'+(Dashboard.toastId++);var elem=document.createElement("paper-toast");elem.setAttribute('text',message);elem.id=id;document.body.appendChild(elem);setTimeout(function(){elem.show();setTimeout(function(){elem.parentNode.removeChild(elem);},5000);},300);});return;}
if(navigator.notification&&navigator.notification.alert&&options.message.indexOf('<')==-1){navigator.notification.alert(options.message,options.callback||function(){},options.title||Globalize.translate('HeaderAlert'));}else{Dashboard.confirmInternal(options.message,options.title||Globalize.translate('HeaderAlert'),false,options.callback);}},confirm:function(message,title,callback){if(navigator.notification&&navigator.notification.confirm&&message.indexOf('<')==-1){var buttonLabels=[Globalize.translate('ButtonOk'),Globalize.translate('ButtonCancel')];navigator.notification.confirm(message,function(index){callback(index==1);},title||Globalize.translate('HeaderConfirm'),buttonLabels.join(','));}else{Dashboard.confirmInternal(message,title,true,callback);}},confirmInternal:function(message,title,showCancel,callback){require(['paperbuttonstyle'],function(){var id='paperdlg'+new Date().getTime();var html='<paper-dialog id="'+id+'" role="alertdialog" entry-animation="fade-in-animation" exit-animation="fade-out-animation" with-backdrop>';html+='<h2>'+title+'</h2>';html+='<div>'+message+'</div>';html+='<div class="buttons">';if(showCancel){html+='<paper-button dialog-dismiss>'+Globalize.translate('ButtonCancel')+'</paper-button>';}
html+='<paper-button class="btnConfirm" dialog-confirm autofocus>'+Globalize.translate('ButtonOk')+'</paper-button>';html+='</div>';html+='</paper-dialog>';$(document.body).append(html);setTimeout(function(){var dlg=document.getElementById(id);$(dlg).on('iron-overlay-closed',function(e){var confirmed=this.closingReason.confirmed;this.parentNode.removeChild(this);if(callback){callback(confirmed);}});dlg.open();},300);});},refreshSystemInfoFromServer:function(){var apiClient=ApiClient;if(apiClient&&apiClient.accessToken()){if(AppInfo.enableFooterNotifications){apiClient.getSystemInfo().done(function(info){Dashboard.updateSystemInfo(info);});}else{Dashboard.ensureWebSocket();}}},restartServer:function(){Dashboard.suppressAjaxErrors=true;Dashboard.showLoadingMsg();ApiClient.restartServer().done(function(){setTimeout(function(){Dashboard.reloadPageWhenServerAvailable();},250);}).fail(function(){Dashboard.suppressAjaxErrors=false;});},reloadPageWhenServerAvailable:function(retryCount){ApiClient.getJSON(ApiClient.getUrl("System/Info")).done(function(info){if(!info.HasPendingRestart){Dashboard.reloadPage();}else{Dashboard.retryReload(retryCount);}}).fail(function(){Dashboard.retryReload(retryCount);});},retryReload:function(retryCount){setTimeout(function(){retryCount=retryCount||0;retryCount++;if(retryCount<10){Dashboard.reloadPageWhenServerAvailable(retryCount);}else{Dashboard.suppressAjaxErrors=false;}},500);},showUserFlyout:function(){var html='<div data-role="panel" data-position="right" data-display="overlay" id="userFlyout" data-position-fixed="true" data-theme="a">';html+='<h3 class="userHeader">';html+='</h3>';html+='<form>';html+='<p class="preferencesContainer"></p>';html+='<p><button data-mini="true" type="button" onclick="Dashboard.logout();" data-icon="lock">'+Globalize.translate('ButtonSignOut')+'</button></p>';html+='</form>';html+='</div>';$(document.body).append(html);var elem=$('#userFlyout').panel({}).lazyChildren().trigger('create').panel("open").on("panelclose",function(){$(this).off("panelclose").remove();});ConnectionManager.user(window.ApiClient).done(function(user){Dashboard.updateUserFlyout(elem,user);});require(['jqmicons']);},updateUserFlyout:function(elem,user){var html='';var imgWidth=48;if(user.imageUrl&&AppInfo.enableUserImage){var url=user.imageUrl;if(user.supportsImageParams){url+="&width="+(imgWidth*Math.max(window.devicePixelRatio||1,2));}
html+='<div style="background-image:url(\''+url+'\');width:'+imgWidth+'px;height:'+imgWidth+'px;background-size:contain;background-repeat:no-repeat;background-position:center center;border-radius:1000px;vertical-align:middle;margin-right:.8em;display:inline-block;"></div>';}
html+=user.name;$('.userHeader',elem).html(html).lazyChildren();html='';if(user.localUser&&user.localUser.Policy.EnableUserPreferenceAccess){html+='<p><a data-mini="true" data-role="button" href="mypreferencesdisplay.html?userId='+user.localUser.Id+'" data-icon="gear">'+Globalize.translate('ButtonSettings')+'</button></a>';}
$('.preferencesContainer',elem).html(html).trigger('create');},getPluginSecurityInfo:function(){var apiClient=ApiClient;if(!apiClient){var deferred=$.Deferred();deferred.reject();return deferred.promise();}
if(!Dashboard.getPluginSecurityInfoPromise){var deferred=$.Deferred();apiClient.ajax({type:"GET",url:apiClient.getUrl("Plugins/SecurityInfo"),dataType:'json',error:function(){}}).done(function(result){deferred.resolveWith(null,[result]);});Dashboard.getPluginSecurityInfoPromise=deferred;}
return Dashboard.getPluginSecurityInfoPromise;},resetPluginSecurityInfo:function(){Dashboard.getPluginSecurityInfoPromise=null;},ensureHeader:function(page){if(page.classList.contains('standalonePage')&&!page.classList.contains('noHeaderPage')){Dashboard.renderHeader(page);}},renderHeader:function(page){var header=page.querySelector('.header');if(!header){var headerHtml='';headerHtml+='<div class="header">';headerHtml+='<a class="logo" href="index.html" style="text-decoration:none;font-size: 22px;">';if(page.classList.contains('standalonePage')){headerHtml+='<img class="imgLogoIcon" src="css/images/mblogoicon.png" />';headerHtml+='<span class="logoLibraryMenuButtonText">EMBY</span>';}
headerHtml+='</a>';headerHtml+='</div>';$(page).prepend(headerHtml);}},getToolsMenuHtml:function(page){var items=Dashboard.getToolsMenuLinks(page);var i,length,item;var menuHtml='';for(i=0,length=items.length;i<length;i++){item=items[i];if(item.divider){menuHtml+="<div class='sidebarDivider'></div>";}
if(item.href){var style=item.color?' style="color:'+item.color+'"':'';if(item.selected){menuHtml+='<a class="sidebarLink selectedSidebarLink" href="'+item.href+'">';}else{menuHtml+='<a class="sidebarLink" href="'+item.href+'">';}
var icon=item.icon;if(icon){menuHtml+='<iron-icon icon="'+icon+'" class="sidebarLinkIcon"'+style+'></iron-icon>';}
menuHtml+='<span class="sidebarLinkText">';menuHtml+=item.name;menuHtml+='</span>';menuHtml+='</a>';}else{menuHtml+='<div class="sidebarHeader">';menuHtml+=item.name;menuHtml+='</div>';}}
return menuHtml;},ensureToolsMenu:function(page){var sidebar=page.querySelector('.toolsSidebar');if(!sidebar){var html='<div class="content-secondary toolsSidebar">';html+='<div class="sidebarLinks">';html+=Dashboard.getToolsMenuHtml(page);html+='</div>';html+='</div>';$('.content-primary',page).before(html);Events.trigger(page,'create');}},getToolsMenuLinks:function(page){var pageElem=page;var isServicesPage=page.classList.contains('appServicesPage');var context=getParameterByName('context');return[{name:Globalize.translate('TabServer'),href:"dashboard.html",selected:page.classList.contains("dashboardHomePage"),icon:'dashboard',color:'#38c'},{name:Globalize.translate('TabDevices'),href:"devices.html",selected:page.classList.contains("devicesPage"),icon:'tablet',color:'#ECA403'},{name:Globalize.translate('TabUsers'),href:"userprofiles.html",selected:page.classList.contains("userProfilesPage"),icon:'people',color:'#679C34'},{name:Globalize.translate('TabLibrary'),divider:true,href:"library.html",selected:page.classList.contains("mediaLibraryPage"),icon:'video-library'},{name:Globalize.translate('TabMetadata'),href:"metadata.html",selected:page.classList.contains('metadataConfigurationPage'),icon:'insert-drive-file'},{name:Globalize.translate('TabPlayback'),href:"playbackconfiguration.html",selected:page.classList.contains('playbackConfigurationPage'),icon:'play-circle-filled'},{name:Globalize.translate('TabSync'),href:"syncactivity.html",selected:page.classList.contains('syncConfigurationPage')||(isServicesPage&&context=='sync'),icon:'refresh'},{divider:true,name:Globalize.translate('TabExtras')},{name:Globalize.translate('TabAutoOrganize'),href:"autoorganizelog.html",selected:page.classList.contains("organizePage"),icon:'folder',color:'#01C0DD'},{name:Globalize.translate('TabDLNA'),href:"dlnasettings.html",selected:page.classList.contains("dlnaPage"),icon:'tv',color:'#E5342E'},{name:Globalize.translate('TabLiveTV'),href:"livetvstatus.html",selected:page.classList.contains("liveTvSettingsPage")||(isServicesPage&&context=='livetv'),icon:'live-tv',color:'#293AAE'},{name:Globalize.translate('TabNotifications'),href:"notificationsettings.html",selected:page.classList.contains("notificationConfigurationPage"),icon:'notifications',color:'brown'},{name:Globalize.translate('TabPlugins'),href:"plugins.html",selected:page.classList.contains("pluginConfigurationPage"),icon:'add-shopping-cart',color:'#9D22B1'},{divider:true,name:Globalize.translate('TabExpert')},{name:Globalize.translate('TabAdvanced'),href:"advanced.html",selected:page.classList.contains("advancedConfigurationPage"),icon:'settings',color:'#F16834'},{name:Globalize.translate('TabScheduledTasks'),href:"scheduledtasks.html",selected:page.classList.contains("scheduledTasksConfigurationPage"),icon:'schedule',color:'#38c'},{name:Globalize.translate('TabHelp'),divider:true,href:"support.html",selected:pageElem.id=="supportPage"||pageElem.id=="logPage"||pageElem.id=="supporterPage"||pageElem.id=="supporterKeyPage"||pageElem.id=="aboutPage",icon:'help',color:'#679C34'}];},ensureWebSocket:function(){if(ApiClient.isWebSocketOpenOrConnecting()||!ApiClient.isWebSocketSupported()){return;}
ApiClient.openWebSocket();if(!Dashboard.isConnectMode()){ApiClient.reportCapabilities(Dashboard.capabilities());}},processGeneralCommand:function(cmd){switch(cmd.Name){case'GoHome':Dashboard.navigate('index.html');break;case'GoToSettings':Dashboard.navigate('dashboard.html');break;case'DisplayContent':Dashboard.onBrowseCommand(cmd.Arguments);break;case'GoToSearch':Search.showSearchPanel($.mobile.activePage);break;case'DisplayMessage':{var args=cmd.Arguments;if(args.TimeoutMs){Dashboard.showFooterNotification({html:"<div><b>"+args.Header+"</b></div>"+args.Text,timeout:args.TimeoutMs});}
else{Dashboard.alert({title:args.Header,message:args.Text});}
break;}
case'VolumeUp':case'VolumeDown':case'Mute':case'Unmute':case'ToggleMute':case'SetVolume':case'SetAudioStreamIndex':case'SetSubtitleStreamIndex':case'ToggleFullscreen':break;default:Logger.log('Unrecognized command: '+cmd.Name);break;}},onWebSocketMessageReceived:function(e,data){var msg=data;if(msg.MessageType==="LibraryChanged"){Dashboard.processLibraryUpdateNotification(msg.Data);}
else if(msg.MessageType==="ServerShuttingDown"){Dashboard.hideServerRestartWarning();}
else if(msg.MessageType==="ServerRestarting"){Dashboard.hideServerRestartWarning();}
else if(msg.MessageType==="UserDeleted"){Dashboard.validateCurrentUser();}
else if(msg.MessageType==="SystemInfo"){Dashboard.updateSystemInfo(msg.Data);}
else if(msg.MessageType==="RestartRequired"){Dashboard.updateSystemInfo(msg.Data);}
else if(msg.MessageType==="UserUpdated"||msg.MessageType==="UserConfigurationUpdated"){var user=msg.Data;if(user.Id==Dashboard.getCurrentUserId()){Dashboard.validateCurrentUser();$('.currentUsername').html(user.Name);}}
else if(msg.MessageType==="PackageInstallationCompleted"){Dashboard.getCurrentUser().done(function(currentUser){if(currentUser.Policy.IsAdministrator){Dashboard.showPackageInstallNotification(msg.Data,"completed");Dashboard.refreshSystemInfoFromServer();}});}
else if(msg.MessageType==="PackageInstallationFailed"){Dashboard.getCurrentUser().done(function(currentUser){if(currentUser.Policy.IsAdministrator){Dashboard.showPackageInstallNotification(msg.Data,"failed");Dashboard.refreshSystemInfoFromServer();}});}
else if(msg.MessageType==="PackageInstallationCancelled"){Dashboard.getCurrentUser().done(function(currentUser){if(currentUser.Policy.IsAdministrator){Dashboard.showPackageInstallNotification(msg.Data,"cancelled");Dashboard.refreshSystemInfoFromServer();}});}
else if(msg.MessaapiclientcgeType==="PackageInstalling"){Dashboard.getCurrentUser().done(function(currentUser){if(currentUser.Policy.IsAdministrator){Dashboard.showPackageInstallNotification(msg.Data,"progress");Dashboard.refreshSystemInfoFromServer();}});}
else if(msg.MessageType==="GeneralCommand"){var cmd=msg.Data;}},onBrowseCommand:function(cmd){var url;var type=(cmd.ItemType||"").toLowerCase();if(type=="genre"){url="itembynamedetails.html?id="+cmd.ItemId;}
else if(type=="musicgenre"){url="itembynamedetails.html?id="+cmd.ItemId;}
else if(type=="gamegenre"){url="itembynamedetails.html?id="+cmd.ItemId;}
else if(type=="studio"){url="itembynamedetails.html?id="+cmd.ItemId;}
else if(type=="person"){url="itembynamedetails.html?id="+cmd.ItemId;}
else if(type=="musicartist"){url="itembynamedetails.html?id="+cmd.ItemId;}
if(url){Dashboard.navigate(url);return;}
ApiClient.getItem(Dashboard.getCurrentUserId(),cmd.ItemId).done(function(item){Dashboard.navigate(LibraryBrowser.getHref(item,null,''));});},showPackageInstallNotification:function(installation,status){var html='';if(status=='completed'){html+='<img src="css/images/notifications/done.png" class="notificationIcon" />';}
else if(status=='cancelled'){html+='<img src="css/images/notifications/info.png" class="notificationIcon" />';}
else if(status=='failed'){html+='<img src="css/images/notifications/error.png" class="notificationIcon" />';}
else if(status=='progress'){html+='<img src="css/images/notifications/download.png" class="notificationIcon" />';}
html+='<span style="margin-right: 1em;">';if(status=='completed'){html+=Globalize.translate('LabelPackageInstallCompleted').replace('{0}',installation.Name+' '+installation.Version);}
else if(status=='cancelled'){html+=Globalize.translate('LabelPackageInstallCancelled').replace('{0}',installation.Name+' '+installation.Version);}
else if(status=='failed'){html+=Globalize.translate('LabelPackageInstallFailed').replace('{0}',installation.Name+' '+installation.Version);}
else if(status=='progress'){html+=Globalize.translate('LabelInstallingPackage').replace('{0}',installation.Name+' '+installation.Version);}
html+='</span>';if(status=='progress'){var percentComplete=Math.round(installation.PercentComplete||0);html+='<progress style="margin-right: 1em;" max="100" value="'+percentComplete+'" title="'+percentComplete+'%">';html+=''+percentComplete+'%';html+='</progress>';if(percentComplete<100){var btnId="btnCancel"+installation.Id;html+='<button id="'+btnId+'" type="button" data-icon="delete" onclick="$(\''+btnId+'\').buttonEnabled(false);Dashboard.cancelInstallation(\''+installation.Id+'\');" data-theme="b" data-inline="true" data-mini="true">'+Globalize.translate('ButtonCancel')+'</button>';}}
var timeout=0;if(status=='cancelled'){timeout=2000;}
var forceShow=status!="progress";var allowHide=status!="progress"&&status!='cancelled';Dashboard.showFooterNotification({html:html,id:installation.Id,timeout:timeout,forceShow:forceShow,allowHide:allowHide});},processLibraryUpdateNotification:function(data){var newItems=data.ItemsAdded;if(!newItems.length||AppInfo.isNativeApp){return;}
ApiClient.getItems(Dashboard.getCurrentUserId(),{Recursive:true,Limit:3,Filters:"IsNotFolder",SortBy:"DateCreated",SortOrder:"Descending",ImageTypes:"Primary",Ids:newItems.join(',')}).done(function(result){var items=result.Items;for(var i=0,length=Math.min(items.length,2);i<length;i++){var item=items[i];var notification={title:"New "+item.Type,body:item.Name,timeout:5000};var imageTags=item.ImageTags||{};if(imageTags.Primary){notification.icon=ApiClient.getScaledImageUrl(item.Id,{width:60,tag:imageTags.Primary,type:"Primary"});}
WebNotifications.show(notification);}});},ensurePageTitle:function(page){if(!page.classList.contains('type-interior')){return;}
var pageElem=page;if(pageElem.querySelector('.pageTitle')){return;}
var parent=pageElem.querySelector('.content-primary');if(!parent){parent=pageElem.getElementsByClassName('ui-content')[0];}
var helpUrl=pageElem.getAttribute('data-helpurl');var html='<div>';html+='<h1 class="pageTitle" style="display:inline-block;">'+(document.title||'&nbsp;')+'</h1>';if(helpUrl){html+='<a href="'+helpUrl+'" target="_blank" class="clearLink" style="margin-top:-10px;display:inline-block;vertical-align:middle;margin-left:1em;"><paper-button raised class="secondary mini"><i class="fa fa-info-circle"></i>'+Globalize.translate('ButtonHelp')+'</paper-button></a>';}
html+='</div>';$(parent).prepend(html);if(helpUrl){require(['paperbuttonstyle']);}},setPageTitle:function(title){var elem=$($.mobile.activePage)[0].querySelector('.pageTitle');if(elem){elem.innerHTML=title;}
if(title){document.title=title;}},getDisplayTime:function(ticks){var ticksPerHour=36000000000;var ticksPerMinute=600000000;var ticksPerSecond=10000000;var parts=[];var hours=ticks/ticksPerHour;hours=Math.floor(hours);if(hours){parts.push(hours);}
ticks-=(hours*ticksPerHour);var minutes=ticks/ticksPerMinute;minutes=Math.floor(minutes);ticks-=(minutes*ticksPerMinute);if(minutes<10&&hours){minutes='0'+minutes;}
parts.push(minutes);var seconds=ticks/ticksPerSecond;seconds=Math.floor(seconds);if(seconds<10){seconds='0'+seconds;}
parts.push(seconds);return parts.join(':');},populateLanguages:function(select,languages){var html="";html+="<option value=''></option>";for(var i=0,length=languages.length;i<length;i++){var culture=languages[i];html+="<option value='"+culture.TwoLetterISOLanguageName+"'>"+culture.DisplayName+"</option>";}
$(select).html(html).selectmenu("refresh");},populateCountries:function(select,allCountries){var html="";html+="<option value=''></option>";for(var i=0,length=allCountries.length;i<length;i++){var culture=allCountries[i];html+="<option value='"+culture.TwoLetterISORegionName+"'>"+culture.DisplayName+"</option>";}
$(select).html(html).selectmenu("refresh");},getSupportedRemoteCommands:function(){return["GoHome","GoToSettings","VolumeUp","VolumeDown","Mute","Unmute","ToggleMute","SetVolume","SetAudioStreamIndex","SetSubtitleStreamIndex","DisplayContent","GoToSearch","DisplayMessage"];},isServerlessPage:function(){var url=getWindowUrl().toLowerCase();return url.indexOf('connectlogin.html')!=-1||url.indexOf('selectserver.html')!=-1||url.indexOf('login.html')!=-1||url.indexOf('forgotpassword.html')!=-1||url.indexOf('forgotpasswordpin.html')!=-1;},capabilities:function(){var caps={PlayableMediaTypes:['Audio','Video'],SupportedCommands:Dashboard.getSupportedRemoteCommands(),SupportsPersistentIdentifier:Dashboard.isRunningInCordova(),SupportsMediaControl:true,SupportedLiveMediaTypes:['Audio','Video']};if(Dashboard.isRunningInCordova()&&$.browser.android){caps.SupportsOfflineAccess=true;caps.SupportsSync=true;caps.SupportsContentUploading=true;}
return caps;},getDefaultImageQuality:function(imageType){var quality=90;var isBackdrop=imageType.toLowerCase()=='backdrop';if(isBackdrop){quality-=10;}
if(AppInfo.hasLowImageBandwidth){if(AppInfo.isNativeApp){quality-=15;if(isBackdrop){quality-=20;}}else{quality-=40;}}
return quality;},normalizeImageOptions:function(options){if(AppInfo.hasLowImageBandwidth){options.enableImageEnhancers=false;}
if(AppInfo.forcedImageFormat&&options.type!='Logo'){options.format=AppInfo.forcedImageFormat;options.backgroundColor='#1c1c1c';}},getAppInfo:function(appName,deviceId,deviceName){function generateDeviceName(){var name="Web Browser";if($.browser.chrome){name="Chrome";}else if($.browser.safari){name="Safari";}else if($.browser.msie){name="Internet Explorer";}else if($.browser.opera){name="Opera";}else if($.browser.mozilla){name="Firefox";}
if($.browser.version){name+=" "+$.browser.version;}
if($.browser.ipad){name+=" Ipad";}else if($.browser.iphone){name+=" Iphone";}else if($.browser.android){name+=" Android";}
return name;}
var appVersion=window.dashboardVersion;appName=appName||"Emby Web Client";deviceName=deviceName||generateDeviceName();var seed=[];var keyName='randomId';deviceId=deviceId||MediaBrowser.generateDeviceId(keyName,seed.join(','));return{appName:appName,appVersion:appVersion,deviceName:deviceName,deviceId:deviceId};},loadSwipebox:function(){var deferred=DeferredBuilder.Deferred();Dashboard.importCss('bower_components/swipebox/src/css/swipebox.min.css');require(['bower_components/swipebox/src/js/jquery.swipebox.min'],function(){deferred.resolve();});return deferred.promise();},ready:function(fn){if(Dashboard.initPromiseDone){fn();return;}
Dashboard.initPromise.done(fn);},firePageEvent:function(page,name,dependencies){Dashboard.ready(function(){if(dependencies&&dependencies.length){require(dependencies,function(){Events.trigger(page,name);});}else{Events.trigger(page,name);}});},loadExternalPlayer:function(){var deferred=DeferredBuilder.Deferred();require(['scripts/externalplayer.js'],function(){if(Dashboard.isRunningInCordova()){require(['cordova/externalplayer.js'],function(){deferred.resolve();});}else{deferred.resolve();}});return deferred.promise();},exitOnBack:function(){return $($.mobile.activePage).is('#indexPage');},exit:function(){Dashboard.logout();}};var AppInfo={};(function(){function isTouchDevice(){return(('ontouchstart'in window)||(navigator.MaxTouchPoints>0)||(navigator.msMaxTouchPoints>0));}
function setAppInfo(){if(isTouchDevice()){AppInfo.isTouchPreferred=true;}
var isCordova=Dashboard.isRunningInCordova();AppInfo.enableDetailPageChapters=true;AppInfo.enableDetailsMenuImages=true;AppInfo.enableMovieHomeSuggestions=true;AppInfo.enableAppStorePolicy=isCordova;var isIOS=$.browser.safari||$.browser.ipad||$.browser.iphone;var isAndroid=$.browser.android;var isMobile=$.browser.mobile;if(isIOS){if(isMobile){AppInfo.hasLowImageBandwidth=true;}
if(isCordova){AppInfo.enableBottomTabs=true;AppInfo.cardMargin='mediumCardMargin';}else{if(isMobile){AppInfo.enableDetailPageChapters=false;AppInfo.enableDetailsMenuImages=false;AppInfo.enableMovieHomeSuggestions=false;AppInfo.cardMargin='largeCardMargin';AppInfo.forcedImageFormat='jpg';}}}
if(!AppInfo.hasLowImageBandwidth){AppInfo.enableStudioTabs=true;AppInfo.enablePeopleTabs=true;AppInfo.enableTvEpisodesTab=true;AppInfo.enableMovieTrailersTab=true;}
if(isCordova){AppInfo.enableAppLayouts=true;AppInfo.hasKnownExternalPlayerSupport=true;AppInfo.isNativeApp=true;}
else{AppInfo.enableFooterNotifications=true;AppInfo.enableSupporterMembership=true;if(!isAndroid&&!isIOS){AppInfo.enableAppLayouts=true;}}
if(!$.browser.tv&&!isIOS){if(AppInfo.isNativeApp||window.navigator.standalone||!$.browser.mobile){AppInfo.enableHeadRoom=true;}}
AppInfo.enableUserImage=true;AppInfo.hasPhysicalVolumeButtons=isCordova||isMobile;AppInfo.enableBackButton=isIOS&&(window.navigator.standalone||AppInfo.isNativeApp);AppInfo.supportsFullScreen=isCordova&&isAndroid;AppInfo.supportsSyncPathSetting=isCordova&&isAndroid;if(isCordova&&isAndroid){AppInfo.directPlayAudioContainers="flac,aac,mp3,mpa,wav,wma,mp2,ogg,oga,webma,ape".split(',');AppInfo.directPlayVideoContainers="m4v,3gp,ts,mpegts,mov,xvid,vob,mkv,wmv,asf,ogm,ogv,m2v,avi,mpg,mpeg,mp4,webm".split(',');}else{AppInfo.directPlayAudioContainers=[];AppInfo.directPlayVideoContainers=[];}
if(isCordova&&isIOS){AppInfo.moreIcon='more-horiz';}else{AppInfo.moreIcon='more-vert';}}
function initializeApiClient(apiClient){apiClient.enableAppStorePolicy=AppInfo.enableAppStorePolicy;apiClient.getDefaultImageQuality=Dashboard.getDefaultImageQuality;apiClient.normalizeImageOptions=Dashboard.normalizeImageOptions;$(apiClient).off("websocketmessage",Dashboard.onWebSocketMessageReceived).off('requestfail',Dashboard.onRequestFail);$(apiClient).on("websocketmessage",Dashboard.onWebSocketMessageReceived).on('requestfail',Dashboard.onRequestFail);}
function createConnectionManager(capabilities){var credentialKey=Dashboard.isConnectMode()?null:'servercredentials4';var credentialProvider=new MediaBrowser.CredentialProvider(credentialKey);window.ConnectionManager=new MediaBrowser.ConnectionManager(Logger,credentialProvider,AppInfo.appName,AppInfo.appVersion,AppInfo.deviceName,AppInfo.deviceId,capabilities);if(getWindowUrl().toLowerCase().indexOf('wizardstart.html')!=-1){window.ConnectionManager.clearData();}
$(ConnectionManager).on('apiclientcreated',function(e,newApiClient){initializeApiClient(newApiClient);});var deferred=DeferredBuilder.Deferred();if(Dashboard.isConnectMode()){var server=ConnectionManager.getLastUsedServer();if(!Dashboard.isServerlessPage()){if(server&&server.UserId&&server.AccessToken){ConnectionManager.connectToServer(server).done(function(result){if(result.State==MediaBrowser.ConnectionState.SignedIn){window.ApiClient=result.ApiClient;}
deferred.resolve();});return deferred.promise();}}
deferred.resolve();}else{var apiClient=new MediaBrowser.ApiClient(Logger,Dashboard.serverAddress(),AppInfo.appName,AppInfo.appVersion,AppInfo.deviceName,AppInfo.deviceId);apiClient.enableAutomaticNetworking=false;ConnectionManager.addApiClient(apiClient);Dashboard.importCss(apiClient.getUrl('Branding/Css'));window.ApiClient=apiClient;}
return deferred.promise();}
function initFastClick(){require(["bower_components/fastclick/lib/fastclick"],function(FastClick){FastClick.attach(document.body,{tapDelay:0});$(document.body).on('touchstart','.ui-panel-dismiss',function(){$(this).trigger('click');});});}
function setDocumentClasses(){var elem=document.documentElement;if(AppInfo.enableBottomTabs){elem.classList.add('bottomSecondaryNav');}
if(AppInfo.isTouchPreferred){elem.classList.add('touch');}else{elem.classList.add('pointerInput');}
if(AppInfo.cardMargin){elem.classList.add(AppInfo.cardMargin);}
if(!AppInfo.enableStudioTabs){elem.classList.add('studioTabDisabled');}
if(!AppInfo.enablePeopleTabs){elem.classList.add('peopleTabDisabled');}
if(!AppInfo.enableTvEpisodesTab){elem.classList.add('tvEpisodesTabDisabled');}
if(!AppInfo.enableMovieTrailersTab){elem.classList.add('movieTrailersTabDisabled');}
if(!AppInfo.enableSupporterMembership){elem.classList.add('supporterMembershipDisabled');}
if(AppInfo.isNativeApp){elem.classList.add('nativeApp');}}
function onDocumentReady(){if(AppInfo.isNativeApp){if($.browser.android){Dashboard.importCss('themes/android.css');}
else if($.browser.safari){Dashboard.importCss('themes/ios.css');}}
if($.browser.msie&&$.browser.tv&&($.browser.version||11)<=10){Dashboard.importCss('thirdparty/paper-ie10.css');}
if($.browser.safari&&$.browser.mobile){initFastClick();}
var footerHtml='<div id="footer" class="footer" data-theme="b" class="ui-bar-b">';footerHtml+='<div id="footerNotifications"></div>';footerHtml+='</div>';$(document.body).append(footerHtml);$(window).on("beforeunload",function(){var apiClient=window.ApiClient;if(apiClient&&apiClient.isWebSocketOpen()){var localActivePlayers=MediaController.getPlayers().filter(function(p){return p.isLocalPlayer&&p.isPlaying();});if(!localActivePlayers.length){Logger.log('Sending close web socket command');apiClient.closeWebSocket();}}});$(document).on('contextmenu','.ui-popup-screen',function(e){$('.ui-popup').popup('close');e.preventDefault();return false;});require(['filesystem']);if(Dashboard.isRunningInCordova()){require(['cordova/connectsdk','scripts/registrationservices','cordova/back']);if($.browser.android){require(['cordova/android/androidcredentials','cordova/android/immersive','cordova/android/mediasession']);}else{require(['cordova/volume']);}
if($.browser.safari){require(['cordova/ios/orientation']);}}else{if($.browser.chrome){require(['scripts/chromecast']);}}
if(navigator.splashscreen){navigator.splashscreen.hide();}}
function init(deferred,capabilities,appName,deviceId,deviceName){requirejs.config({urlArgs:"v="+window.dashboardVersion,paths:{"velocity":"bower_components/velocity/velocity.min"}});define('jquery',[],function(){return jQuery;});if(Dashboard.isRunningInCordova()&&$.browser.android){define("appstorage",["cordova/android/appstorage"]);}else{define('appstorage',[],function(){return appStorage;});}
if(Dashboard.isRunningInCordova()){define("serverdiscovery",["cordova/serverdiscovery"]);define("wakeonlan",["cordova/wakeonlan"]);}else{define("serverdiscovery",["apiclient/serverdiscovery"]);define("wakeonlan",["apiclient/wakeonlan"]);}
if(Dashboard.isRunningInCordova()&&$.browser.android){define("localassetmanager",["cordova/android/localassetmanager"]);}else{define("localassetmanager",["apiclient/localassetmanager"]);}
if(Dashboard.isRunningInCordova()&&$.browser.android){define("filesystem",["cordova/android/filesystem"]);}
else if(Dashboard.isRunningInCordova()){define("filesystem",["cordova/filesystem"]);}
else{define("filesystem",["thirdparty/filesystem"]);}
if(Dashboard.isRunningInCordova()&&$.browser.android){define("nativedirectorychooser",["cordova/android/nativedirectorychooser"]);}
if(Dashboard.isRunningInCordova()&&$.browser.android){define("audiorenderer",["cordova/android/vlcplayer"]);define("videorenderer",["cordova/android/vlcplayer"]);}
else{define("audiorenderer",["scripts/htmlmediarenderer"]);define("videorenderer",["scripts/htmlmediarenderer"]);}
define("connectservice",["apiclient/connectservice"]);define("paperbuttonstyle",[],function(){return{};});define("jqmicons",[],function(){Dashboard.importCss('thirdparty/jquerymobile-1.4.5/jquery.mobile.custom.icons.css');return{};});define("livetvcss",[],function(){Dashboard.importCss('css/livetv.css');return{};});define("detailtablecss",[],function(){Dashboard.importCss('css/detailtable.css');return{};});define("tileitemcss",[],function(){Dashboard.importCss('css/tileitem.css');return{};});if(Dashboard.isRunningInCordova()){define("actionsheet",["cordova/actionsheet"]);}else{define("actionsheet",["scripts/actionsheet"]);}
define("sharingmanager",["scripts/sharingmanager"]);if(Dashboard.isRunningInCordova()){define("sharingwidget",["cordova/sharingwidget"]);}else{define("sharingwidget",["scripts/sharingwidget"]);}
if(Dashboard.isRunningInCordova()&&$.browser.safari){define("searchmenu",["cordova/searchmenu"]);}else{define("searchmenu",["scripts/searchmenu"]);}
$.extend(AppInfo,Dashboard.getAppInfo(appName,deviceId,deviceName));var drawer=document.querySelector('.mainDrawerPanel');drawer.classList.remove('mainDrawerPanelPreInit');drawer.forceNarrow=true;var drawerWidth=screen.availWidth-50;drawerWidth=Math.max(drawerWidth,240);drawerWidth=Math.min(drawerWidth,310);drawer.drawerWidth=drawerWidth+"px";if($.browser.safari&&!AppInfo.isNativeApp){drawer.disableEdgeSwipe=true;}
if(Dashboard.isConnectMode()){if(AppInfo.isNativeApp&&$.browser.android){require(['cordova/android/logging']);}
require(['appstorage'],function(){capabilities.DeviceProfile=MediaPlayer.getDeviceProfile(Math.max(screen.height,screen.width));createConnectionManager(capabilities).done(function(){$(function(){onDocumentReady();Dashboard.initPromiseDone=true;$.mobile.initializePage();deferred.resolve();});});});}else{createConnectionManager(capabilities);$(function(){onDocumentReady();Dashboard.initPromiseDone=true;$.mobile.initializePage();deferred.resolve();});}}
function initCordovaWithDeviceId(deferred,deviceId){require(['cordova/imagestore']);var capablities=Dashboard.capabilities();init(deferred,capablities,"Emby Mobile",deviceId,device.model);}
function initCordova(deferred){document.addEventListener("deviceready",function(){window.plugins.uniqueDeviceID.get(function(uuid){initCordovaWithDeviceId(deferred,uuid);},function(){initCordovaWithDeviceId(deferred,device.uuid);});},false);}
var initDeferred=$.Deferred();Dashboard.initPromise=initDeferred.promise();setAppInfo();setDocumentClasses();$(document).on('WebComponentsReady',function(){if(Dashboard.isRunningInCordova()){initCordova(initDeferred);}else{init(initDeferred,Dashboard.capabilities());}});})();Dashboard.jQueryMobileInit();$(document).on('pagecreate',".page",function(){var page=$(this);var current=page.data('theme');if(!current){var newTheme;if(page.hasClass('libraryPage')){newTheme='b';}else{newTheme='a';}
current=page.page("option","theme");if(current&&current!=newTheme){page.page("option","theme",newTheme);}
current=newTheme;}
if(current!='a'&&!$.browser.mobile){document.body.classList.add('darkScrollbars');}else{document.body.classList.remove('darkScrollbars');}}).on('pageinit',".page",function(){var page=this;var dependencies=this.getAttribute('data-require');dependencies=dependencies?dependencies.split(','):null;Dashboard.firePageEvent(page,'pageinitdepends',dependencies);}).on('pagebeforeshow',".page",function(){var page=this;var dependencies=this.getAttribute('data-require');Dashboard.ensurePageTitle(page);dependencies=dependencies?dependencies.split(','):null;Dashboard.firePageEvent(page,'pagebeforeshowready',dependencies);}).on('pageshow',".page",function(){var page=this;var dependencies=this.getAttribute('data-require');dependencies=dependencies?dependencies.split(','):null;Dashboard.firePageEvent(page,'pageshowbeginready',dependencies);}).on('pageshowbeginready',".page",function(){var page=this;var apiClient=window.ApiClient;if(apiClient&&apiClient.accessToken()&&Dashboard.getCurrentUserId()){var isSettingsPage=page.classList.contains('type-interior');if(isSettingsPage){Dashboard.ensureToolsMenu(page);Dashboard.getCurrentUser().done(function(user){if(!user.Policy.IsAdministrator){Dashboard.logout();return;}});}}
else{var isConnectMode=Dashboard.isConnectMode();if(isConnectMode){if(!Dashboard.isServerlessPage()){Dashboard.logout();return;}}
if(!isConnectMode&&this.id!=="loginPage"&&!page.classList.contains('forgotPasswordPage')&&!page.classList.contains('wizardPage')&&this.id!=='publicSharedItemPage'){Logger.log('Not logged into server. Redirecting to login.');Dashboard.logout();return;}}
Dashboard.firePageEvent(page,'pageshowready');Dashboard.ensureHeader(page);if(apiClient&&!apiClient.isWebSocketOpen()){Dashboard.refreshSystemInfoFromServer();}
if(!page.classList.contains('libraryPage')){require(['jqmicons']);}});var LibraryBrowser=(function(window,document,$,screen){var pageSizeKey='pagesize_v4';return{getDefaultPageSize:function(key,defaultValue){var saved=appStorage.getItem(key||pageSizeKey);if(saved){return parseInt(saved);}
if(defaultValue){return defaultValue;}
var isChrome=$.browser.chrome;return isChrome?200:100;},getDefaultItemsView:function(view,mobileView){return $.browser.mobile?mobileView:view;},loadSavedQueryValues:function(key,query){var values=appStorage.getItem(key+'_'+Dashboard.getCurrentUserId());if(values){values=JSON.parse(values);return $.extend(query,values);}
return query;},saveQueryValues:function(key,query){var values={};if(query.SortBy){values.SortBy=query.SortBy;}
if(query.SortOrder){values.SortOrder=query.SortOrder;}
try{appStorage.setItem(key+'_'+Dashboard.getCurrentUserId(),JSON.stringify(values));}catch(e){}},saveViewSetting:function(key,value){try{appStorage.setItem(key+'_'+Dashboard.getCurrentUserId()+'_view',value);}catch(e){}},getSavedViewSetting:function(key){var deferred=$.Deferred();var val=appStorage.getItem(key+'_'+Dashboard.getCurrentUserId()+'_view');deferred.resolveWith(null,[val]);return deferred.promise();},needsRefresh:function(elem){var last=parseInt(elem.getAttribute('data-lastrefresh')||'0');if(!last){return true;}
if(NavHelper.isBack()){Logger.log('Not refreshing data because IsBack=true');return false;}
var now=new Date().getTime();var cacheDuration;if(AppInfo.isNativeApp){cacheDuration=600000;}
else if($.browser.ipad||$.browser.iphone||$.browser.android){cacheDuration=10000;}
else{cacheDuration=60000;}
if((now-last)<cacheDuration){Logger.log('Not refreshing data due to age');return false;}
return true;},setLastRefreshed:function(elem){elem.setAttribute('data-lastrefresh',new Date().getTime());elem.classList.add('hasrefreshtime');},configureSwipeTabs:function(ownerpage,tabs,pages){if(!$.browser.safari){pages.entryAnimation='slide-from-right-animation';pages.exitAnimation='slide-left-animation';}
var pageCount=pages.querySelectorAll('neon-animatable').length;function allowSwipeOn(elem){if(elem.tagName=='PAPER-SLIDER'){return false;}
if(elem.classList){return!elem.classList.contains('hiddenScrollX')&&!elem.classList.contains('smoothScrollX');}
return true;}
function allowSwipe(e){var target=e.target;var parent=target.parentNode;while(parent!=null){if(!allowSwipeOn(parent)){return false;}
parent=parent.parentNode;}
return true;}
$(ownerpage).on('swipeleft',function(e){if(allowSwipe(e)){var selected=parseInt(pages.selected||'0');if(selected<(pageCount-1)){pages.entryAnimation='slide-from-right-animation';pages.exitAnimation='slide-left-animation';tabs.selectNext();}}});$(ownerpage).on('swiperight',function(e){if(allowSwipe(e)){var selected=parseInt(pages.selected||'0');if(selected>0){pages.entryAnimation='slide-from-left-animation';pages.exitAnimation='slide-right-animation';tabs.selectPrevious();}}});},enableFullPaperTabs:function(){return AppInfo.isNativeApp;},navigateOnLibraryTabSelect:function(){return!LibraryBrowser.enableFullPaperTabs();},configurePaperLibraryTabs:function(ownerpage,tabs,pages,defaultTabIndex){tabs.hideScrollButtons=true;if(AppInfo.enableBottomTabs){tabs.alignBottom=true;tabs.classList.add('bottomTabs');}
tabs.noink=true;if(LibraryBrowser.enableFullPaperTabs()){$(tabs).show();if($.browser.safari){tabs.noSlide=true;tabs.noink=true;tabs.noBar=true;}
else{LibraryBrowser.configureSwipeTabs(ownerpage,tabs,pages);}
$('.libraryViewNav',ownerpage).addClass('paperLibraryViewNav').removeClass('libraryViewNavWithMinHeight');}else{tabs.noSlide=true;tabs.noink=true;tabs.noBar=true;tabs.scrollable=true;var legacyTabs=$('.legacyTabs',ownerpage).show();document.body.classList.add('basicPaperLibraryTabs');$(pages).on('iron-select',function(e){var selected=this.selected;$('a',legacyTabs).removeClass('ui-btn-active')[selected].classList.add('ui-btn-active');});$('.libraryViewNav',ownerpage).removeClass('libraryViewNavWithMinHeight');}
$(ownerpage).on('pagebeforeshowready',LibraryBrowser.onTabbedPageBeforeShowReady);$(pages).on('iron-select',function(){var delay=LibraryBrowser.enableFullPaperTabs()?500:0;var pgs=this;setTimeout(function(){$(pgs).trigger('tabchange');},delay);});},onTabbedPageBeforeShowReady:function(){var page=this;var tabs=page.querySelector('paper-tabs');var selected=tabs.selected;if(selected==null){Logger.log('selected tab is null, checking query string');selected=parseInt(getParameterByName('tab')||'0');Logger.log('selected tab will be '+selected);tabs.selected=selected;if(!LibraryBrowser.enableFullPaperTabs()){page.querySelector('neon-animated-pages').selected=selected;}}else{Events.trigger(page.querySelector('neon-animated-pages'),'tabchange');}},canShare:function(item,user){return user.Policy.EnablePublicSharing;},getDateParamValue:function(date){function formatDigit(i){return i<10?"0"+i:i;}
var d=date;return""+d.getFullYear()+formatDigit(d.getMonth()+1)+formatDigit(d.getDate())+formatDigit(d.getHours())+formatDigit(d.getMinutes())+formatDigit(d.getSeconds());},playAllFromHere:function(fn,index){fn(index,100,"MediaSources,Chapters").done(function(result){MediaController.play({items:result.Items});});},queueAllFromHere:function(query,index){fn(index,100,"MediaSources,Chapters").done(function(result){MediaController.queue({items:result.Items});});},getItemCountsHtml:function(options,item){var counts=[];var childText;if(item.Type=='Playlist'){childText='';if(item.CumulativeRunTimeTicks){var minutes=item.CumulativeRunTimeTicks/600000000;minutes=minutes||1;childText+=Globalize.translate('ValueMinutes',Math.round(minutes));}else{childText+=Globalize.translate('ValueMinutes',0);}
counts.push(childText);}
else if(options.context=="movies"){if(item.MovieCount){childText=item.MovieCount==1?Globalize.translate('ValueOneMovie'):Globalize.translate('ValueMovieCount',item.MovieCount);counts.push(childText);}
if(item.TrailerCount){childText=item.TrailerCount==1?Globalize.translate('ValueOneTrailer'):Globalize.translate('ValueTrailerCount',item.TrailerCount);counts.push(childText);}}else if(options.context=="tv"){if(item.SeriesCount){childText=item.SeriesCount==1?Globalize.translate('ValueOneSeries'):Globalize.translate('ValueSeriesCount',item.SeriesCount);counts.push(childText);}
if(item.EpisodeCount){childText=item.EpisodeCount==1?Globalize.translate('ValueOneEpisode'):Globalize.translate('ValueEpisodeCount',item.EpisodeCount);counts.push(childText);}}else if(options.context=="games"){if(item.GameCount){childText=item.GameCount==1?Globalize.translate('ValueOneGame'):Globalize.translate('ValueGameCount',item.GameCount);counts.push(childText);}}else if(options.context=="music"){if(item.AlbumCount){childText=item.AlbumCount==1?Globalize.translate('ValueOneAlbum'):Globalize.translate('ValueAlbumCount',item.AlbumCount);counts.push(childText);}
if(item.SongCount){childText=item.SongCount==1?Globalize.translate('ValueOneSong'):Globalize.translate('ValueSongCount',item.SongCount);counts.push(childText);}
if(item.MusicVideoCount){childText=item.MusicVideoCount==1?Globalize.translate('ValueOneMusicVideo'):Globalize.translate('ValueMusicVideoCount',item.MusicVideoCount);counts.push(childText);}}
return counts.join(' • ');},getArtistLinksHtml:function(artists,cssClass){var html=[];for(var i=0,length=artists.length;i<length;i++){var artist=artists[i];var css=cssClass?(' class="'+cssClass+'"'):'';html.push('<a'+css+' href="itembynamedetails.html?context=music&id='+artist.Id+'">'+artist.Name+'</a>');}
html=html.join(' / ');return html;},playInExternalPlayer:function(id){Dashboard.loadExternalPlayer().done(function(){ExternalPlayer.showMenu(id);});},showPlayMenu:function(positionTo,itemId,itemType,isFolder,mediaType,resumePositionTicks){var externalPlayers=AppSettings.enableExternalPlayers();if(!resumePositionTicks&&mediaType!="Audio"&&!isFolder){if(!externalPlayers||mediaType!="Video"){MediaController.play(itemId);return;}}
var menuItems=[];if(resumePositionTicks){menuItems.push({name:Globalize.translate('ButtonResume'),id:'resume',ironIcon:'play-arrow'});}
menuItems.push({name:Globalize.translate('ButtonPlay'),id:'play',ironIcon:'play-arrow'});if(!isFolder&&externalPlayers&&mediaType!="Audio"){menuItems.push({name:Globalize.translate('ButtonPlayExternalPlayer'),id:'externalplayer',ironIcon:'airplay'});}
if(MediaController.canQueueMediaType(mediaType,itemType)){menuItems.push({name:Globalize.translate('ButtonQueue'),id:'queue',ironIcon:'playlist-add'});}
if(itemType=="Audio"||itemType=="MusicAlbum"||itemType=="MusicArtist"||itemType=="MusicGenre"){menuItems.push({name:Globalize.translate('ButtonInstantMix'),id:'instantmix',ironIcon:'shuffle'});}
if(isFolder||itemType=="MusicArtist"||itemType=="MusicGenre"){menuItems.push({name:Globalize.translate('ButtonShuffle'),id:'shuffle',ironIcon:'shuffle'});}
require(['actionsheet'],function(){ActionSheetElement.show({items:menuItems,positionTo:positionTo,callback:function(id){switch(id){case'play':MediaController.play(itemId);break;case'externalplayer':LibraryBrowser.playInExternalPlayer(itemId);break;case'resume':MediaController.play({ids:[itemId],startPositionTicks:resumePositionTicks});break;case'queue':MediaController.queue(itemId);break;case'instantmix':MediaController.instantMix(itemId);break;case'shuffle':MediaController.shuffle(itemId);break;default:break;}}});});},getMoreCommands:function(item,user){var commands=[];if(BoxSetEditor.supportsAddingToCollection(item)){commands.push('addtocollection');}
if(PlaylistManager.supportsPlaylists(item)){commands.push('playlist');}
if(item.Type=='BoxSet'||item.Type=='Playlist'){commands.push('delete');}
else if(item.CanDelete){commands.push('delete');}
if(user.Policy.IsAdministrator){if(item.Type!="Recording"&&item.Type!="Program"){commands.push('edit');}}
commands.push('refresh');if(SyncManager.isAvailable(item,user)){commands.push('sync');}
if(item.CanDownload){commands.push('download');}
return commands;},refreshItem:function(itemId){ApiClient.refreshItem(itemId,{Recursive:true,ImageRefreshMode:'FullRefresh',MetadataRefreshMode:'FullRefresh',ReplaceAllImages:false,ReplaceAllMetadata:true});Dashboard.alert(Globalize.translate('MessageRefreshQueued'));},deleteItem:function(itemId){setTimeout(function(){var msg=Globalize.translate('ConfirmDeleteItem');Dashboard.confirm(msg,Globalize.translate('HeaderDeleteItem'),function(result){if(result){ApiClient.deleteItem(itemId);Events.trigger(LibraryBrowser,'itemdeleting',[itemId]);}});},250);},showMoreCommands:function(positionTo,itemId,commands){var items=[];if(commands.indexOf('addtocollection')!=-1){items.push({name:Globalize.translate('ButtonAddToCollection'),id:'addtocollection',ironIcon:'add'});}
if(commands.indexOf('playlist')!=-1){items.push({name:Globalize.translate('ButtonAddToPlaylist'),id:'playlist',ironIcon:'playlist-add'});}
if(commands.indexOf('delete')!=-1){items.push({name:Globalize.translate('ButtonDelete'),id:'delete',ironIcon:'delete'});}
if(commands.indexOf('download')!=-1){items.push({name:Globalize.translate('ButtonDownload'),id:'download',ironIcon:'file-download'});}
if(commands.indexOf('edit')!=-1){items.push({name:Globalize.translate('ButtonEdit'),id:'edit',ironIcon:'mode-edit'});}
if(commands.indexOf('refresh')!=-1){items.push({name:Globalize.translate('ButtonRefresh'),id:'refresh',ironIcon:'refresh'});}
require(['actionsheet'],function(){ActionSheetElement.show({items:items,positionTo:positionTo,callback:function(id){switch(id){case'addtocollection':BoxSetEditor.showPanel([itemId]);break;case'playlist':PlaylistManager.showPanel([itemId]);break;case'delete':LibraryBrowser.deleteItem(itemId);break;case'download':{var downloadHref=ApiClient.getUrl("Items/"+itemId+"/Download",{api_key:ApiClient.accessToken()});window.location.href=downloadHref;break;}
case'edit':Dashboard.navigate('edititemmetadata.html?id='+itemId);break;case'refresh':ApiClient.refreshItem(itemId,{Recursive:true,ImageRefreshMode:'FullRefresh',MetadataRefreshMode:'FullRefresh',ReplaceAllImages:false,ReplaceAllMetadata:true});break;default:break;}}});});},getHref:function(item,context,topParentId){var href=LibraryBrowser.getHrefInternal(item,context);if(context!='livetv'){if(topParentId==null&&context!='playlists'){topParentId=LibraryMenu.getTopParentId();}
if(topParentId){href+=href.indexOf('?')==-1?"?topParentId=":"&topParentId=";href+=topParentId;}}
return href;},getHrefInternal:function(item,context){if(!item){throw new Error('item cannot be null');}
if(item.url){return item.url;}
var contextSuffix=context?('&context='+context):'';var id=item.Id||item.ItemId;if(item.CollectionType=='livetv'){return'livetvsuggested.html';}
if(item.CollectionType=='channels'){return'channels.html';}
if(context!='folders'){if(item.CollectionType=='movies'){return'moviesrecommended.html?topParentId='+item.Id;}
if(item.CollectionType=='boxsets'){return'collections.html?topParentId='+item.Id;}
if(item.CollectionType=='tvshows'){return'tvrecommended.html?topParentId='+item.Id;}
if(item.CollectionType=='music'){return'musicrecommended.html?topParentId='+item.Id;}
if(item.CollectionType=='games'){return'gamesrecommended.html?topParentId='+item.Id;}
if(item.CollectionType=='playlists'){return'playlists.html?topParentId='+item.Id;}
if(item.CollectionType=='photos'){return'photos.html?topParentId='+item.Id;}}
if(item.Type=='CollectionFolder'){return'itemlist.html?topParentId='+item.Id+'&parentid='+item.Id;}
if(item.Type=="PhotoAlbum"&&context=='photos'){return"photos.html?parentId="+id;}
if(item.Type=="Playlist"){return"playlistedit.html?id="+id;}
if(item.Type=="TvChannel"){return"livetvchannel.html?id="+id;}
if(item.Type=="Channel"){return"channelitems.html?id="+id;}
if(item.Type=="ChannelFolderItem"){return"channelitems.html?id="+item.ChannelId+'&folderId='+item.Id;}
if(item.Type=="Program"){return"livetvprogram.html?id="+id;}
if(item.Type=="Series"){return"itemdetails.html?id="+id+contextSuffix;}
if(item.Type=="Season"){return"itemdetails.html?id="+id+contextSuffix;}
if(item.Type=="BoxSet"){return"itemdetails.html?id="+id+contextSuffix;}
if(item.Type=="MusicAlbum"){return"itemdetails.html?id="+id+contextSuffix;}
if(item.Type=="GameSystem"){return"itemdetails.html?id="+id+contextSuffix;}
if(item.Type=="Genre"){return"itembynamedetails.html?id="+id+contextSuffix;}
if(item.Type=="MusicGenre"){return"itembynamedetails.html?id="+id+contextSuffix;}
if(item.Type=="GameGenre"){return"itembynamedetails.html?id="+id+contextSuffix;}
if(item.Type=="Studio"){return"itembynamedetails.html?id="+id+contextSuffix;}
if(item.Type=="Person"){return"itembynamedetails.html?id="+id+contextSuffix;}
if(item.Type=="Recording"){return"livetvrecording.html?id="+id+contextSuffix;}
if(item.Type=="MusicArtist"){return"itembynamedetails.html?id="+id+contextSuffix;}
if(item.IsFolder){return id?"itemlist.html?parentId="+id:"#";}
return"itemdetails.html?id="+id+contextSuffix;},getImageUrl:function(item,type,index,options){options=options||{};options.type=type;options.index=index;if(type=='Backdrop'){options.tag=item.BackdropImageTags[index];}else if(type=='Screenshot'){options.tag=item.ScreenshotImageTags[index];}else if(type=='Primary'){options.tag=item.PrimaryImageTag||item.ImageTags[type];}else{options.tag=item.ImageTags[type];}
return ApiClient.getScaledImageUrl(item.Id||item.ItemId,options);},getListViewIndex:function(item,options){if(options.index=='disc'){return item.ParentIndexNumber==null?'':Globalize.translate('ValueDiscNumber',item.ParentIndexNumber);}
var sortBy=(options.sortBy||'').toLowerCase();var code,name;if(sortBy.indexOf('sortname')==0){if(item.Type=='Episode')return'';name=(item.SortName||item.Name||'?')[0].toUpperCase();code=name.charCodeAt(0);if(code<65||code>90){return'#';}
return name.toUpperCase();}
if(sortBy.indexOf('officialrating')==0){return item.OfficialRating||Globalize.translate('HeaderUnrated');}
if(sortBy.indexOf('communityrating')==0){if(item.CommunityRating==null){return Globalize.translate('HeaderUnrated');}
return Math.floor(item.CommunityRating);}
if(sortBy.indexOf('criticrating')==0){if(item.CriticRating==null){return Globalize.translate('HeaderUnrated');}
return Math.floor(item.CriticRating);}
if(sortBy.indexOf('metascore')==0){if(item.Metascore==null){return Globalize.translate('HeaderUnrated');}
return Math.floor(item.Metascore);}
if(sortBy.indexOf('albumartist')==0){if(!item.AlbumArtist)return'';name=item.AlbumArtist[0].toUpperCase();code=name.charCodeAt(0);if(code<65||code>90){return'#';}
return name.toUpperCase();}
return'';},getUserDataCssClass:function(key){if(!key)return'';return'libraryItemUserData'+key.replace(new RegExp(' ','g'),'');},getListViewHtml:function(options){var outerHtml="";outerHtml+='<ul data-role="listview" class="itemsListview">';if(options.title){outerHtml+='<li data-role="list-divider">';outerHtml+=options.title;outerHtml+='</li>';}
var index=0;var groupTitle='';outerHtml+=options.items.map(function(item){var html='';if(options.showIndex!==false){var itemGroupTitle=LibraryBrowser.getListViewIndex(item,options);if(itemGroupTitle!=groupTitle){html+='<li data-role="list-divider">';html+=itemGroupTitle;html+='</li>';groupTitle=itemGroupTitle;}}
var dataAttributes=LibraryBrowser.getItemDataAttributes(item,options,index);var cssClass=options.smallIcon?'ui-li-has-icon listItem':'ui-li-has-thumb listItem';if(item.UserData){cssClass+=' '+LibraryBrowser.getUserDataCssClass(item.UserData.Key);}
var href=LibraryBrowser.getHref(item,options.context);html+='<li class="'+cssClass+'"'+dataAttributes+' data-itemid="'+item.Id+'" data-playlistitemid="'+(item.PlaylistItemId||'')+'" data-href="'+href+'" data-icon="false">';var defaultAction=options.defaultAction;if(defaultAction=='play'||defaultAction=='playallfromhere'){if(item.PlayAccess!='Full'){defaultAction=null;}}
var defaultActionAttribute=defaultAction?(' data-action="'+defaultAction+'" class="itemWithAction mediaItem"'):' class="mediaItem"';html+='<a'+defaultActionAttribute+' href="'+href+'">';var imgUrl;var downloadWidth=options.smallIcon?70:80;var minScale=item.Type=='Episode'||item.Type=='Game'||options.smallIcon?2:1.5;if(item.ImageTags.Primary){imgUrl=ApiClient.getScaledImageUrl(item.Id,{width:downloadWidth,tag:item.ImageTags.Primary,type:"Primary",index:0,minScale:minScale});}
else if(item.AlbumId&&item.AlbumPrimaryImageTag){imgUrl=ApiClient.getScaledImageUrl(item.AlbumId,{type:"Primary",width:downloadWidth,tag:item.AlbumPrimaryImageTag,minScale:minScale});}
else if(item.AlbumId&&item.SeriesPrimaryImageTag){imgUrl=ApiClient.getScaledImageUrl(item.SeriesId,{type:"Primary",width:downloadWidth,tag:item.SeriesPrimaryImageTag,minScale:minScale});}
else if(item.ParentPrimaryImageTag){imgUrl=ApiClient.getImageUrl(item.ParentPrimaryImageItemId,{type:"Primary",width:downloadWidth,tag:item.ParentPrimaryImageTag,minScale:minScale});}
if(imgUrl){var minLazyIndex=16;if(options.smallIcon){if(index<minLazyIndex){html+='<div class="listviewIcon ui-li-icon" style="background-image:url(\''+imgUrl+'\');"></div>';}else{html+='<div class="listviewIcon ui-li-icon lazy" data-src="'+imgUrl+'"></div>';}}else{if(index<minLazyIndex){html+='<div class="listviewImage ui-li-thumb" style="background-image:url(\''+imgUrl+'\');"></div>';}else{html+='<div class="listviewImage ui-li-thumb lazy" data-src="'+imgUrl+'"></div>';}}}
var textlines=[];if(item.Type=='Episode'){textlines.push(item.SeriesName||'&nbsp;');}else if(item.Type=='MusicAlbum'){textlines.push(item.AlbumArtist||'&nbsp;');}
var displayName=LibraryBrowser.getPosterViewDisplayName(item);if(options.showIndexNumber&&item.IndexNumber!=null){displayName=item.IndexNumber+". "+displayName;}
textlines.push(displayName);var verticalTextLines=2;if(item.Type=='Audio'){textlines.push(item.ArtistItems.map(function(a){return a.Name;}).join(', ')||'&nbsp;');}
if(item.Type=='Game'){textlines.push(item.GameSystem||'&nbsp;');}
else if(item.Type=='MusicGenre'){textlines.push('&nbsp;');}
else if(item.Type=='MusicArtist'){textlines.push('&nbsp;');}
else{textlines.push(LibraryBrowser.getMiscInfoHtml(item));}
html+='<h3>';html+=textlines[0];html+='</h3>';if(textlines.length>1&&verticalTextLines>1){html+='<p>';html+=textlines[1];html+='</p>';}
if(textlines.length>2&&verticalTextLines>2){html+='<p>';html+=textlines[2];html+='</p>';}
html+=LibraryBrowser.getSyncIndicator(item);if(item.Type=='Series'||item.Type=='Season'||item.Type=='BoxSet'||item.MediaType=='Video'){if(item.UserData.UnplayedItemCount){}else if(item.UserData.Played&&item.Type!='TvChannel'){html+='<div class="playedIndicator"><i class="fa fa-check"></i></div>';}}
html+='</a>';html+='<div class="listViewAside">';html+='<span class="listViewAsideText">';html+=textlines[verticalTextLines]||LibraryBrowser.getRatingHtml(item,false);html+='</span>';html+='<paper-icon-button icon="'+AppInfo.moreIcon+'" class="listviewMenuButton"></paper-icon-button>';html+='<span class="listViewUserDataButtons">';html+=LibraryBrowser.getUserDataIconsHtml(item);html+='</span>';html+='</div>';html+='</li>';index++;return html;}).join('');outerHtml+='</ul>';return outerHtml;},getItemDataAttributes:function(item,options,index){var atts=[];var itemCommands=LibraryBrowser.getItemCommands(item,options);atts.push('data-itemid="'+item.Id+'"');atts.push('data-commands="'+itemCommands.join(',')+'"');if(options.context){atts.push('data-context="'+(options.context||'')+'"');}
atts.push('data-itemtype="'+item.Type+'"');if(item.MediaType){atts.push('data-mediatype="'+(item.MediaType||'')+'"');}
if(item.UserData.PlaybackPositionTicks){atts.push('data-positionticks="'+(item.UserData.PlaybackPositionTicks||0)+'"');}
atts.push('data-playaccess="'+(item.PlayAccess||'')+'"');atts.push('data-locationtype="'+(item.LocationType||'')+'"');atts.push('data-index="'+index+'"');if(options.showDetailsMenu){atts.push('data-detailsmenu="true"');}
if(item.AlbumId){atts.push('data-albumid="'+item.AlbumId+'"');}
if(item.ArtistItems&&item.ArtistItems.length){atts.push('data-artistid="'+item.ArtistItems[0].Id+'"');}
var html=atts.join(' ');if(html){html=' '+html;}
return html;},getItemCommands:function(item,options){var itemCommands=[];if(item.Type!="Recording"&&item.Type!="Program"){itemCommands.push('edit');}
if(item.LocalTrailerCount){itemCommands.push('trailer');}
if(item.MediaType=="Audio"||item.Type=="MusicAlbum"||item.Type=="MusicArtist"||item.Type=="MusicGenre"){itemCommands.push('instantmix');}
if(item.IsFolder||item.Type=="MusicArtist"||item.Type=="MusicGenre"){itemCommands.push('shuffle');}
if(PlaylistManager.supportsPlaylists(item)){if(options.showRemoveFromPlaylist){itemCommands.push('removefromplaylist');}else{itemCommands.push('playlist');}}
if(BoxSetEditor.supportsAddingToCollection(item)){itemCommands.push('addtocollection');}
if(options.playFromHere){itemCommands.push('playfromhere');itemCommands.push('queuefromhere');}
if(item.Type=='Playlist'||item.Type=='BoxSet'){if(item.CanDelete){itemCommands.push('delete');}}
if(SyncManager.isAvailable(item)){itemCommands.push('sync');}
return itemCommands;},screenWidth:function(){var screenWidth=$(window).width();return screenWidth;},shapes:['square','portrait','banner','smallBackdrop','homePageSmallBackdrop','backdrop','overflowBackdrop','overflowPortrait','overflowSquare'],getPostersPerRow:function(screenWidth){var cache=true;function getValue(shape){var div=$('<div class="card '+shape+'Card"><div class="cardBox"><div class="cardImage"></div></div></div>').appendTo(document.body);var innerWidth=$('.cardImage',div).innerWidth();if(!innerWidth||isNaN(innerWidth)){cache=false;innerWidth=Math.min(400,screenWidth/2);}
var width=screenWidth/innerWidth;div.remove();return Math.floor(width);}
var info={};for(var i=0,length=LibraryBrowser.shapes.length;i<length;i++){var currentShape=LibraryBrowser.shapes[i];info[currentShape]=getValue(currentShape);}
info.cache=cache;return info;},posterSizes:[],getPosterViewInfo:function(){var screenWidth=LibraryBrowser.screenWidth();var cachedResults=LibraryBrowser.posterSizes;for(var i=0,length=cachedResults.length;i<length;i++){if(cachedResults[i].screenWidth==screenWidth){return cachedResults[i];}}
var result=LibraryBrowser.getPosterViewInfoInternal(screenWidth);result.screenWidth=screenWidth;if(result.cache){cachedResults.push(result);}
return result;},getPosterViewInfoInternal:function(screenWidth){var imagesPerRow=LibraryBrowser.getPostersPerRow(screenWidth);var result={};result.screenWidth=screenWidth;if(!AppInfo.hasLowImageBandwidth){screenWidth*=1.2;}
var roundTo=100;for(var i=0,length=LibraryBrowser.shapes.length;i<length;i++){var currentShape=LibraryBrowser.shapes[i];var shapeWidth=screenWidth/imagesPerRow[currentShape];if(!$.browser.mobile){shapeWidth=Math.round(shapeWidth/roundTo)*roundTo;}
result[currentShape+'Width']=Math.round(shapeWidth);}
result.cache=imagesPerRow.cache;return result;},getPosterViewHtml:function(options){var items=options.items;var currentIndexValue;options.shape=options.shape||"portrait";var html="";var primaryImageAspectRatio=LibraryBrowser.getAveragePrimaryImageAspectRatio(items);var isThumbAspectRatio=primaryImageAspectRatio&&Math.abs(primaryImageAspectRatio-1.777777778)<.3;var isSquareAspectRatio=primaryImageAspectRatio&&Math.abs(primaryImageAspectRatio-1)<.33||primaryImageAspectRatio&&Math.abs(primaryImageAspectRatio-1.3333334)<.01;if(options.shape=='auto'||options.shape=='autohome'){if(isThumbAspectRatio){options.shape=options.shape=='auto'?'backdrop':'backdrop';}else if(isSquareAspectRatio){options.coverImage=true;options.shape='square';}else if(primaryImageAspectRatio&&primaryImageAspectRatio>1.9){options.shape='banner';options.coverImage=true;}else if(primaryImageAspectRatio&&Math.abs(primaryImageAspectRatio-0.6666667)<.2){options.shape=options.shape=='auto'?'portrait':'portrait';}else{options.shape=options.defaultShape||(options.shape=='auto'?'portrait':'portrait');}}
var posterInfo=LibraryBrowser.getPosterViewInfo();var thumbWidth=posterInfo.backdropWidth;var posterWidth=posterInfo.portraitWidth;var squareSize=posterInfo.squareWidth;var bannerWidth=posterInfo.bannerWidth;if(isThumbAspectRatio){posterWidth=thumbWidth;}
else if(isSquareAspectRatio){posterWidth=squareSize;}
if(options.shape=='overflowBackdrop'){thumbWidth=posterInfo.overflowBackdropWidth;}
else if(options.shape=='overflowPortrait'){posterWidth=posterInfo.overflowPortraitWidth;}
else if(options.shape=='overflowSquare'){squareSize=posterInfo.overflowSquareWidth;}
else if(options.shape=='smallBackdrop'){thumbWidth=posterInfo.smallBackdropWidth;}
else if(options.shape=='homePageSmallBackdrop'){thumbWidth=posterInfo.homePageSmallBackdropWidth;posterWidth=posterInfo.homePageSmallBackdropWidth;}
else if(options.shape=='detailPagePortrait'){posterWidth=200;}
else if(options.shape=='detailPageSquare'){posterWidth=200;squareSize=200;}
else if(options.shape=='detailPage169'){posterWidth=320;thumbWidth=320;}
var dateText;for(var i=0,length=items.length;i<length;i++){var item=items[i];dateText=null;primaryImageAspectRatio=LibraryBrowser.getAveragePrimaryImageAspectRatio([item]);if(options.showStartDateIndex){if(item.StartDate){try{dateText=LibraryBrowser.getFutureDateText(parseISO8601Date(item.StartDate,{toLocal:true}),true);}catch(err){}}
var newIndexValue=dateText||Globalize.translate('HeaderUnknownDate');if(newIndexValue!=currentIndexValue){html+='<h2 class="timelineHeader detailSectionHeader" style="text-align:center;">'+newIndexValue+'</h2>';currentIndexValue=newIndexValue;}}else if(options.timeline){var year=item.ProductionYear||Globalize.translate('HeaderUnknownYear');if(year!=currentIndexValue){html+='<h2 class="timelineHeader detailSectionHeader">'+year+'</h2>';currentIndexValue=year;}}
html+=LibraryBrowser.getPosterViewItemHtml(item,i,options,primaryImageAspectRatio,thumbWidth,posterWidth,squareSize,bannerWidth);}
return html;},getPosterViewItemHtml:function(item,index,options,primaryImageAspectRatio,thumbWidth,posterWidth,squareSize,bannerWidth){var html='';var imgUrl=null;var icon;var width=null;var height=null;var forceName=false;var enableImageEnhancers=options.enableImageEnhancers!==false;var cssClass="card";if(options.fullWidthOnMobile){cssClass+=" fullWidthCardOnMobile";}
if(options.autoThumb&&item.ImageTags&&item.ImageTags.Primary&&item.PrimaryImageAspectRatio&&item.PrimaryImageAspectRatio>=1.5){width=posterWidth;height=primaryImageAspectRatio?Math.round(posterWidth/primaryImageAspectRatio):null;imgUrl=ApiClient.getImageUrl(item.Id,{type:"Primary",height:height,width:width,tag:item.ImageTags.Primary,enableImageEnhancers:enableImageEnhancers});}else if(options.autoThumb&&item.ImageTags&&item.ImageTags.Thumb){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Thumb",maxWidth:thumbWidth,tag:item.ImageTags.Thumb,enableImageEnhancers:enableImageEnhancers});}else if(options.preferBackdrop&&item.BackdropImageTags&&item.BackdropImageTags.length){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Backdrop",maxWidth:thumbWidth,tag:item.BackdropImageTags[0],enableImageEnhancers:enableImageEnhancers});}else if(options.preferThumb&&item.ImageTags&&item.ImageTags.Thumb){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Thumb",maxWidth:thumbWidth,tag:item.ImageTags.Thumb,enableImageEnhancers:enableImageEnhancers});}else if(options.preferBanner&&item.ImageTags&&item.ImageTags.Banner){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Banner",maxWidth:bannerWidth,tag:item.ImageTags.Banner,enableImageEnhancers:enableImageEnhancers});}else if(options.preferThumb&&item.SeriesThumbImageTag&&options.inheritThumb!==false){imgUrl=ApiClient.getScaledImageUrl(item.SeriesId,{type:"Thumb",maxWidth:thumbWidth,tag:item.SeriesThumbImageTag,enableImageEnhancers:enableImageEnhancers});}else if(options.preferThumb&&item.ParentThumbItemId&&options.inheritThumb!==false){imgUrl=ApiClient.getThumbImageUrl(item.ParentThumbItemId,{type:"Thumb",maxWidth:thumbWidth,enableImageEnhancers:enableImageEnhancers});}else if(options.preferThumb&&item.BackdropImageTags&&item.BackdropImageTags.length){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Backdrop",maxWidth:thumbWidth,tag:item.BackdropImageTags[0],enableImageEnhancers:enableImageEnhancers});forceName=true;}else if(item.ImageTags&&item.ImageTags.Primary){width=posterWidth;height=primaryImageAspectRatio?Math.round(posterWidth/primaryImageAspectRatio):null;imgUrl=ApiClient.getImageUrl(item.Id,{type:"Primary",height:height,width:width,tag:item.ImageTags.Primary,enableImageEnhancers:enableImageEnhancers});}
else if(item.ParentPrimaryImageTag){imgUrl=ApiClient.getImageUrl(item.ParentPrimaryImageItemId,{type:"Primary",width:posterWidth,tag:item.ParentPrimaryImageTag,enableImageEnhancers:enableImageEnhancers});}
else if(item.AlbumId&&item.AlbumPrimaryImageTag){height=squareSize;width=primaryImageAspectRatio?Math.round(height*primaryImageAspectRatio):null;imgUrl=ApiClient.getScaledImageUrl(item.AlbumId,{type:"Primary",height:height,width:width,tag:item.AlbumPrimaryImageTag,enableImageEnhancers:enableImageEnhancers});}
else if(item.Type=='Season'&&item.ImageTags&&item.ImageTags.Thumb){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Thumb",maxWidth:thumbWidth,tag:item.ImageTags.Thumb,enableImageEnhancers:enableImageEnhancers});}
else if(item.BackdropImageTags&&item.BackdropImageTags.length){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Backdrop",maxWidth:thumbWidth,tag:item.BackdropImageTags[0],enableImageEnhancers:enableImageEnhancers});}else if(item.ImageTags&&item.ImageTags.Thumb){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Thumb",maxWidth:thumbWidth,tag:item.ImageTags.Thumb,enableImageEnhancers:enableImageEnhancers});}else if(item.SeriesThumbImageTag){imgUrl=ApiClient.getScaledImageUrl(item.SeriesId,{type:"Thumb",maxWidth:thumbWidth,tag:item.SeriesThumbImageTag,enableImageEnhancers:enableImageEnhancers});}else if(item.ParentThumbItemId){imgUrl=ApiClient.getThumbImageUrl(item,{type:"Thumb",maxWidth:thumbWidth,enableImageEnhancers:enableImageEnhancers});}else if(item.MediaType=="Audio"||item.Type=="MusicAlbum"||item.Type=="MusicArtist"){if(item.Name&&options.showTitle){icon='fa-music';}
cssClass+=" defaultBackground";}else if(item.Type=="Recording"||item.Type=="Program"||item.Type=="TvChannel"){if(item.Name&&options.showTitle){icon='fa-folder-open';}
cssClass+=" defaultBackground";}else if(item.MediaType=="Video"||item.Type=="Season"||item.Type=="Series"){if(item.Name&&options.showTitle){icon='fa-video-camera';}
cssClass+=" defaultBackground";}else if(item.Type=="Person"){if(item.Name&&options.showTitle){icon='fa-user';}
cssClass+=" defaultBackground";}else{if(item.Name&&options.showTitle){icon='fa-folder-open';}
cssClass+=" defaultBackground";}
cssClass+=' '+options.shape+'Card';var mediaSourceCount=item.MediaSourceCount||1;var href=options.linkItem===false?'#':(options.useSecondaryItemsPage&&item.IsFolder)?('secondaryitems.html?parentid='+item.Id):LibraryBrowser.getHref(item,options.context);if(item.UserData){cssClass+=' '+LibraryBrowser.getUserDataCssClass(item.UserData.Key);}
if(options.showChildCountIndicator&&item.ChildCount&&options.showLatestItemsPopup!==false){cssClass+=' groupedCard';}
if(options.showTitle&&!options.overlayText){cssClass+=' bottomPaddedCard';}
var dataAttributes=LibraryBrowser.getItemDataAttributes(item,options,index);var defaultAction=options.defaultAction;if(defaultAction=='play'||defaultAction=='playallfromhere'){if(item.PlayAccess!='Full'){defaultAction=null;}}
var defaultActionAttribute=defaultAction?(' data-action="'+defaultAction+'"'):'';html+='<div'+dataAttributes+' class="'+cssClass+'">';var style="";if(imgUrl&&!options.lazy){style+='background-image:url(\''+imgUrl+'\');';}
var imageCssClass='cardImage';if(icon){imageCssClass+=" iconCardImage";}
if(options.coverImage){imageCssClass+=" coveredCardImage";}
if(options.centerImage){imageCssClass+=" centeredCardImage";}
var dataSrc="";if(options.lazy&&imgUrl){imageCssClass+=" lazy";dataSrc=' data-src="'+imgUrl+'"';}
var cardboxCssClass='cardBox';if(options.cardLayout){cardboxCssClass+=' visualCardBox';}
html+='<div class="'+cardboxCssClass+'">';html+='<div class="cardScalable">';html+='<div class="cardPadder"></div>';var anchorCssClass="cardContent";anchorCssClass+=' mediaItem';if(options.defaultAction){anchorCssClass+=' itemWithAction';}
var transition=options.transition===false||!AppInfo.enableSectionTransitions?'':' data-transition="slide"';html+='<a'+transition+' class="'+anchorCssClass+'" href="'+href+'"'+defaultActionAttribute+'>';html+='<div class="'+imageCssClass+'" style="'+style+'"'+dataSrc+'>';if(icon){html+='<i class="fa '+icon+'"></i>';}
html+='</div>';html+='<div class="cardOverlayTarget"></div>';if(item.LocationType=="Offline"||item.LocationType=="Virtual"){if(options.showLocationTypeIndicator!==false){html+=LibraryBrowser.getOfflineIndicatorHtml(item);}}else if(options.showUnplayedIndicator!==false){html+=LibraryBrowser.getPlayedIndicatorHtml(item);}else if(options.showChildCountIndicator){html+=LibraryBrowser.getGroupCountIndicator(item);}
html+=LibraryBrowser.getSyncIndicator(item);if(mediaSourceCount>1){html+='<div class="mediaSourceIndicator">'+mediaSourceCount+'</div>';}
if(item.IsUnidentified){html+='<div class="unidentifiedIndicator"><i class="fa fa-exclamation"></i></div>';}
var progressHtml=options.showProgress===false||item.IsFolder?'':LibraryBrowser.getItemProgressBarHtml((item.Type=='Recording'?item:item.UserData));var footerOverlayed=false;if(options.overlayText||(forceName&&!options.showTitle)){var footerCssClass=progressHtml?'cardFooter fullCardFooter':'cardFooter';html+=LibraryBrowser.getCardFooterText(item,options,imgUrl,forceName,footerCssClass,progressHtml);footerOverlayed=true;}
else if(progressHtml){html+='<div class="cardFooter fullCardFooter lightCardFooter">';html+="<div class='cardProgress cardText'>";html+=progressHtml;html+="</div>";html+="</div>";progressHtml='';}
html+='</a>';if(options.overlayPlayButton){html+='<paper-icon-button icon="play-arrow" class="cardOverlayPlayButton" onclick="return false;"></paper-icon-button>';}
if(options.overlayMoreButton){html+='<paper-icon-button icon="'+AppInfo.moreIcon+'" class="cardOverlayMoreButton" onclick="return false;"></paper-icon-button>';}
html+='</div>';if(!options.overlayText&&!footerOverlayed){html+=LibraryBrowser.getCardFooterText(item,options,imgUrl,forceName,'cardFooter outerCardFooter',progressHtml);}
html+='</div>';html+="</div>";return html;},getCardFooterText:function(item,options,imgUrl,forceName,footerClass,progressHtml){var html='';html+='<div class="'+footerClass+'">';if(options.cardLayout){html+='<div class="cardButtonContainer">';html+='<paper-icon-button icon="'+AppInfo.moreIcon+'" class="listviewMenuButton btnCardOptions"></paper-icon-button>';html+="</div>";}
var name=LibraryBrowser.getPosterViewDisplayName(item,options.displayAsSpecial);if(!imgUrl&&!options.showTitle){html+="<div class='cardDefaultText'>";html+=htmlEncode(name);html+="</div>";}
var cssClass=options.centerText?"cardText cardTextCentered":"cardText";var lines=[];if(options.showParentTitle){lines.push(item.EpisodeTitle?item.Name:(item.SeriesName||item.Album||item.AlbumArtist||item.GameSystem||""));}
if(options.showTitle||forceName){lines.push(htmlEncode(name));}
if(options.showItemCounts){var itemCountHtml=LibraryBrowser.getItemCountsHtml(options,item);lines.push(itemCountHtml);}
if(options.textLines){var additionalLines=options.textLines(item);for(var i=0,length=additionalLines.length;i<length;i++){lines.push(additionalLines[i]);}}
if(options.showSongCount){var songLine='';if(item.SongCount){songLine=item.SongCount==1?Globalize.translate('ValueOneSong'):Globalize.translate('ValueSongCount',item.SongCount);}
lines.push(songLine);}
if(options.showPremiereDate){if(item.PremiereDate){try{lines.push(LibraryBrowser.getPremiereDateText(item));}catch(err){lines.push('');}}else{lines.push('');}}
if(options.showYear){lines.push(item.ProductionYear||'');}
if(options.showSeriesYear){if(item.Status=="Continuing"){lines.push(Globalize.translate('ValueSeriesYearToPresent',item.ProductionYear||''));}else{lines.push(item.ProductionYear||'');}}
if(options.showProgramAirInfo){var date=parseISO8601Date(item.StartDate,{toLocal:true});var text=item.StartDate?date.toLocaleString():'';lines.push(text||'&nbsp;');lines.push(item.ChannelName||'&nbsp;');}
html+=LibraryBrowser.getCardTextLines(lines,cssClass,!options.overlayText);if(options.overlayText){if(progressHtml){html+="<div class='cardText cardProgress'>";html+=progressHtml;html+="</div>";}}
html+="</div>";return html;},getListItemInfo:function(elem){var elemWithAttributes=elem;while(!elemWithAttributes.getAttribute('data-itemid')){elemWithAttributes=elemWithAttributes.parentNode;}
var itemId=elemWithAttributes.getAttribute('data-itemid');var index=elemWithAttributes.getAttribute('data-index');var mediaType=elemWithAttributes.getAttribute('data-mediatype');return{id:itemId,index:index,mediaType:mediaType,context:elemWithAttributes.getAttribute('data-context')};},getCardTextLines:function(lines,cssClass,forceLines){var html='';var valid=0;var i,length;for(i=0,length=lines.length;i<length;i++){var text=lines[i];if(text){html+="<div class='"+cssClass+"'>";html+=text;html+="</div>";valid++;}}
if(forceLines){while(valid<length){html+="<div class='"+cssClass+"'>&nbsp;</div>";valid++;}}
return html;},getFutureDateText:function(date){var weekday=[];weekday[0]=Globalize.translate('OptionSunday');weekday[1]=Globalize.translate('OptionMonday');weekday[2]=Globalize.translate('OptionTuesday');weekday[3]=Globalize.translate('OptionWednesday');weekday[4]=Globalize.translate('OptionThursday');weekday[5]=Globalize.translate('OptionFriday');weekday[6]=Globalize.translate('OptionSaturday');var day=weekday[date.getDay()];date=date.toLocaleDateString();if(date.toLowerCase().indexOf(day.toLowerCase())==-1){return day+" "+date;}
return date;},getPremiereDateText:function(item,date){if(!date){var text='';if(item.AirTime){text+=item.AirTime;}
if(item.SeriesStudio){if(text){text+=" on "+item.SeriesStudio;}else{text+=item.SeriesStudio;}}
return text;}
var day=LibraryBrowser.getFutureDateText(date);if(item.AirTime){day+=" at "+item.AirTime;}
if(item.SeriesStudio){day+=" on "+item.SeriesStudio;}
return day;},getPosterViewDisplayName:function(item,displayAsSpecial,includeParentInfo){if(!item){throw new Error("null item passed into getPosterViewDisplayName");}
var name=item.EpisodeTitle||item.Name||'';if(item.Type=="TvChannel"){if(item.Number){return item.Number+' '+name;}
return name;}
if(displayAsSpecial&&item.Type=="Episode"&&item.ParentIndexNumber==0){name=Globalize.translate('ValueSpecialEpisodeName',name);}else if(item.Type=="Episode"&&item.IndexNumber!=null&&item.ParentIndexNumber!=null){var displayIndexNumber=item.IndexNumber;var number="E"+displayIndexNumber;if(includeParentInfo!==false){number="S"+item.ParentIndexNumber+", "+number;}
if(item.IndexNumberEnd){displayIndexNumber=item.IndexNumberEnd;number+="-"+displayIndexNumber;}
name=number+" - "+name;}
return name;},getOfflineIndicatorHtml:function(item){if(item.LocationType=="Offline"){return'<div class="posterRibbon offlinePosterRibbon">'+Globalize.translate('HeaderOffline')+'</div>';}
if(item.Type=='Episode'){try{var date=parseISO8601Date(item.PremiereDate,{toLocal:true});if(item.PremiereDate&&(new Date().getTime()<date.getTime())){return'<div class="posterRibbon unairedPosterRibbon">'+Globalize.translate('HeaderUnaired')+'</div>';}}catch(err){}
return'<div class="posterRibbon missingPosterRibbon">'+Globalize.translate('HeaderMissing')+'</div>';}
return'';},getPlayedIndicatorHtml:function(item){if(item.Type=="Series"||item.Type=="Season"||item.Type=="BoxSet"||item.MediaType=="Video"||item.MediaType=="Game"||item.MediaType=="Book"){if(item.UserData.UnplayedItemCount){return'<div class="playedIndicator textIndicator">'+item.UserData.UnplayedItemCount+'</div>';}
if(item.Type!='TvChannel'){if(item.UserData.PlayedPercentage&&item.UserData.PlayedPercentage>=100||(item.UserData&&item.UserData.Played)){return'<div class="playedIndicator"><iron-icon icon="check"></iron-icon></div>';}}}
return'';},getGroupCountIndicator:function(item){if(item.ChildCount){return'<div class="playedIndicator textIndicator">'+item.ChildCount+'</div>';}
return'';},getSyncIndicator:function(item){if(item.SyncPercent){if(item.SyncPercent>=100){return'<div class="syncIndicator"><i class="fa fa-refresh"></i></div>';}
var degree=(item.SyncPercent/100)*360;return'<div class="pieIndicator"><i class="fa fa-refresh"></i><div class="pieBackground"></div><div class="hold"><div class="pie" style="-webkit-transform: rotate('+degree+'deg);-moz-transform: rotate('+degree+'deg);-o-transform: rotate('+degree+'deg);transform: rotate('+degree+'deg);"></div></div></div>';}
if(item.SyncStatus){if(item.SyncStatus=='Queued'||item.SyncStatus=='Converting'||item.SyncStatus=='ReadyToTransfer'||item.SyncStatus=='Transferring'){return'<div class="syncIndicator syncWorkingIndicator"><i class="fa fa-refresh"></i></div>';}
if(item.SyncStatus=='Synced'){return'<div class="syncIndicator"><i class="fa fa-refresh"></i></div>';}}
return'';},getAveragePrimaryImageAspectRatio:function(items){var values=[];for(var i=0,length=items.length;i<length;i++){var ratio=items[i].PrimaryImageAspectRatio||0;if(!ratio){continue;}
values[values.length]=ratio;}
if(!values.length){return null;}
values.sort(function(a,b){return a-b;});var half=Math.floor(values.length/2);var result;if(values.length%2)
result=values[half];else
result=(values[half-1]+values[half])/2.0;if(Math.abs(0.66666666667-result)<=.15){return 0.66666666667;}
if(Math.abs(1.777777778-result)<=.2){return 1.777777778;}
if(Math.abs(1-result)<=.15){return 1;}
if(Math.abs(1.33333333333-result)<=.15){return 1.33333333333;}
return result;},metroColors:["#6FBD45","#4BB3DD","#4164A5","#E12026","#800080","#E1B222","#008040","#0094FF","#FF00C7","#FF870F","#7F0037"],getRandomMetroColor:function(){var index=Math.floor(Math.random()*(LibraryBrowser.metroColors.length-1));return LibraryBrowser.metroColors[index];},getMetroColor:function(str){if(str){var character=String(str.substr(0,1).charCodeAt());var sum=0;for(var i=0;i<character.length;i++){sum+=parseInt(character.charAt(i));}
var index=String(sum).substr(-1);return LibraryBrowser.metroColors[index];}else{return LibraryBrowser.getRandomMetroColor();}},renderName:function(item,nameElem,linkToElement,context){var name=LibraryBrowser.getPosterViewDisplayName(item,false,false);Dashboard.setPageTitle(name);if(linkToElement){nameElem.html('<a class="detailPageParentLink" href="'+LibraryBrowser.getHref(item,context)+'">'+name+'</a>').trigger('create');}else{nameElem.html(name);}},renderParentName:function(item,parentNameElem,context){var html=[];var contextParam=context?('&context='+context):'';if(item.AlbumArtists){html.push(LibraryBrowser.getArtistLinksHtml(item.AlbumArtists,"detailPageParentLink"));}else if(item.ArtistItems&&item.ArtistItems.length&&item.Type=="MusicVideo"){html.push(LibraryBrowser.getArtistLinksHtml(item.ArtistItems,"detailPageParentLink"));}else if(item.SeriesName&&item.Type=="Episode"){html.push('<a class="detailPageParentLink" href="itemdetails.html?id='+item.SeriesId+contextParam+'">'+item.SeriesName+'</a>');}
if(item.SeriesName&&item.Type=="Season"){html.push('<a class="detailPageParentLink" href="itemdetails.html?id='+item.SeriesId+contextParam+'">'+item.SeriesName+'</a>');}else if(item.ParentIndexNumber!=null&&item.Type=="Episode"){html.push('<a class="detailPageParentLink" href="itemdetails.html?id='+item.SeasonId+contextParam+'">'+item.SeasonName+'</a>');}else if(item.Album&&item.Type=="Audio"&&(item.AlbumId||item.ParentId)){html.push('<a class="detailPageParentLink" href="itemdetails.html?id='+(item.AlbumId||item.ParentId)+contextParam+'">'+item.Album+'</a>');}else if(item.Album&&item.Type=="MusicVideo"&&item.AlbumId){html.push('<a class="detailPageParentLink" href="itemdetails.html?id='+item.AlbumId+contextParam+'">'+item.Album+'</a>');}else if(item.Album){html.push(item.Album);}
if(html.length){parentNameElem.show().html(html.join(' - ')).trigger('create');}else{parentNameElem.hide();}},renderLinks:function(linksElem,item){var links=[];if(item.HomePageUrl){links.push('<a class="textlink" href="'+item.HomePageUrl+'" target="_blank">'+Globalize.translate('ButtonWebsite')+'</a>');}
if(item.ExternalUrls){for(var i=0,length=item.ExternalUrls.length;i<length;i++){var url=item.ExternalUrls[i];links.push('<a class="textlink" href="'+url.Url+'" target="_blank">'+url.Name+'</a>');}}
if(links.length){var html=links.join('&nbsp;&nbsp;/&nbsp;&nbsp;');html=Globalize.translate('ValueLinks',html);linksElem.innerHTML=html;$(linksElem).trigger('create');$(linksElem).show();}else{$(linksElem).hide();}},getDefaultPageSizeSelections:function(){return[20,50,100,200,300,400,500];},getQueryPagingHtml:function(options){var startIndex=options.startIndex;var limit=options.limit;var totalRecordCount=options.totalRecordCount;if(limit&&options.updatePageSizeSetting!==false){try{appStorage.setItem(options.pageSizeKey||pageSizeKey,limit);}catch(e){}}
var html='';var recordsEnd=Math.min(startIndex+limit,totalRecordCount);var showControls=totalRecordCount>20||limit<totalRecordCount;html+='<div class="listPaging">';if(showControls){html+='<span style="vertical-align:middle;">';var startAtDisplay=totalRecordCount?startIndex+1:0;html+=startAtDisplay+'-'+recordsEnd+' of '+totalRecordCount;html+='</span>';}
if(showControls||options.viewButton||options.addSelectionButton||options.additionalButtonsHtml){html+='<div style="display:inline-block;margin-left:10px;">';if(showControls){html+='<paper-button raised class="subdued notext btnPreviousPage" '+(startIndex?'':'disabled')+'><iron-icon icon="arrow-back"></iron-icon></paper-button>';html+='<paper-button raised class="subdued notext btnNextPage" '+(startIndex+limit>=totalRecordCount?'disabled':'')+'><iron-icon icon="arrow-forward"></iron-icon></paper-button>';}
html+=(options.additionalButtonsHtml||'');if(options.addSelectionButton){html+='<paper-button raised class="subdued notext btnToggleSelections"><iron-icon icon="check"></iron-icon></paper-button>';}
if(options.viewButton){html+='<paper-button raised class="subdued notext" onclick="require([\'jqmicons\']);jQuery(\'.viewPanel\', jQuery(this).parents(\'.page\')).panel(\'toggle\');"><iron-icon icon="'+AppInfo.moreIcon+'"></iron-icon></paper-button>';}
html+='</div>';if(showControls&&options.showLimit){require(['jqmicons']);var id="selectPageSize";var pageSizes=options.pageSizes||LibraryBrowser.getDefaultPageSizeSelections();var optionsHtml=pageSizes.map(function(val){if(limit==val){return'<option value="'+val+'" selected="selected">'+val+'</option>';}else{return'<option value="'+val+'">'+val+'</option>';}}).join('');html+='<div class="pageSizeContainer"><label style="font-size:inherit;" class="labelPageSize" for="'+id+'">'+Globalize.translate('LabelLimit')+'</label><select class="selectPageSize" id="'+id+'" data-inline="true" data-mini="true">'+optionsHtml+'</select></div>';}}
html+='</div>';return html;},getRatingHtml:function(item,metascore){var html="";if(item.CommunityRating){html+="<div class='starRating' title='"+item.CommunityRating+"'></div>";html+='<div class="starRatingValue">';html+=item.CommunityRating.toFixed(1);html+='</div>';}
if(item.CriticRating!=null){if(item.CriticRating>=60){html+='<div class="fresh rottentomatoesicon" title="Rotten Tomatoes"></div>';}else{html+='<div class="rotten rottentomatoesicon" title="Rotten Tomatoes"></div>';}
html+='<div class="criticRating" title="Rotten Tomatoes">'+item.CriticRating+'%</div>';}
if(item.Metascore&&metascore!==false){if(item.Metascore>=60){html+='<div class="metascore metascorehigh" title="Metascore">'+item.Metascore+'</div>';}
else if(item.Metascore>=40){html+='<div class="metascore metascoremid" title="Metascore">'+item.Metascore+'</div>';}else{html+='<div class="metascore metascorelow" title="Metascore">'+item.Metascore+'</div>';}}
return html;},getItemProgressBarHtml:function(item){if(item.Type=="Recording"&&item.CompletionPercentage){return'<progress class="itemProgressBar recordingProgressBar" min="0" max="100" value="'+item.CompletionPercentage+'"></progress>';}
var pct=item.PlayedPercentage;if(pct&&pct<100){return'<progress class="itemProgressBar" min="0" max="100" value="'+pct+'"></progress>';}
return null;},getUserDataButtonHtml:function(method,itemId,btnCssClass,icon,tooltip){return'<paper-icon-button data-itemid="'+itemId+'" icon="'+icon+'" class="'+btnCssClass+'" onclick="LibraryBrowser.'+method+'(this);return false;"></paper-icon-button>';},getUserDataIconsHtml:function(item,includePlayed){var html='';var userData=item.UserData||{};var itemId=item.Id;var type=item.Type;if(includePlayed!==false){var tooltipPlayed=Globalize.translate('TooltipPlayed');if(item.MediaType=='Video'||item.Type=='Series'||item.Type=='Season'||item.Type=='BoxSet'||item.Type=='Playlist'){if(userData.Played){html+=LibraryBrowser.getUserDataButtonHtml('markPlayed',itemId,'btnUserItemRating btnUserItemRatingOn','check',tooltipPlayed);}else{html+=LibraryBrowser.getUserDataButtonHtml('markPlayed',itemId,'btnUserItemRating','check',tooltipPlayed);}}}
var tooltipLike=Globalize.translate('TooltipLike');var tooltipDislike=Globalize.translate('TooltipDislike');if(typeof userData.Likes=="undefined"){html+=LibraryBrowser.getUserDataButtonHtml('markDislike',itemId,'btnUserItemRating','thumb-down',tooltipDislike);html+=LibraryBrowser.getUserDataButtonHtml('markLike',itemId,'btnUserItemRating','thumb-up',tooltipLike);}
else if(userData.Likes){html+=LibraryBrowser.getUserDataButtonHtml('markDislike',itemId,'btnUserItemRating','thumb-down',tooltipDislike);html+=LibraryBrowser.getUserDataButtonHtml('markLike',itemId,'btnUserItemRating btnUserItemRatingOn','thumb-up',tooltipLike);}
else{html+=LibraryBrowser.getUserDataButtonHtml('markDislike',itemId,'btnUserItemRating btnUserItemRatingOn','thumb-down',tooltipDislike);html+=LibraryBrowser.getUserDataButtonHtml('markLike',itemId,'btnUserItemRating','thumb-up',tooltipLike);}
var tooltipFavorite=Globalize.translate('TooltipFavorite');if(userData.IsFavorite){html+=LibraryBrowser.getUserDataButtonHtml('markFavorite',itemId,'btnUserItemRating btnUserItemRatingOn','favorite',tooltipFavorite);}else{html+=LibraryBrowser.getUserDataButtonHtml('markFavorite',itemId,'btnUserItemRating','favorite',tooltipFavorite);}
return html;},markPlayed:function(link){var id=link.getAttribute('data-itemid');var markAsPlayed=!link.classList.contains('btnUserItemRatingOn');if(markAsPlayed){ApiClient.markPlayed(Dashboard.getCurrentUserId(),id);link.classList.add('btnUserItemRatingOn');}else{ApiClient.markUnplayed(Dashboard.getCurrentUserId(),id);link.classList.remove('btnUserItemRatingOn');}},markFavorite:function(link){var id=link.getAttribute('data-itemid');var $link=$(link);var markAsFavorite=!$link.hasClass('btnUserItemRatingOn');ApiClient.updateFavoriteStatus(Dashboard.getCurrentUserId(),id,markAsFavorite);if(markAsFavorite){$link.addClass('btnUserItemRatingOn');}else{$link.removeClass('btnUserItemRatingOn');}},markLike:function(link){var id=link.getAttribute('data-itemid');var $link=$(link);if(!$link.hasClass('btnUserItemRatingOn')){ApiClient.updateUserItemRating(Dashboard.getCurrentUserId(),id,true);$link.addClass('btnUserItemRatingOn');}else{ApiClient.clearUserItemRating(Dashboard.getCurrentUserId(),id);$link.removeClass('btnUserItemRatingOn');}
$link.prev().removeClass('btnUserItemRatingOn');},markDislike:function(link){var id=link.getAttribute('data-itemid');var $link=$(link);if(!$link.hasClass('btnUserItemRatingOn')){ApiClient.updateUserItemRating(Dashboard.getCurrentUserId(),id,false);$link.addClass('btnUserItemRatingOn');}else{ApiClient.clearUserItemRating(Dashboard.getCurrentUserId(),id);$link.removeClass('btnUserItemRatingOn');}
$link.next().removeClass('btnUserItemRatingOn');},getDetailImageHtml:function(item,href,preferThumb){var imageTags=item.ImageTags||{};if(item.PrimaryImageTag){imageTags.Primary=item.PrimaryImageTag;}
var html='';var url;var imageHeight=360;if(preferThumb&&imageTags.Thumb){url=ApiClient.getScaledImageUrl(item.Id,{type:"Thumb",height:imageHeight,tag:item.ImageTags.Thumb});}
else if(imageTags.Primary){url=ApiClient.getScaledImageUrl(item.Id,{type:"Primary",height:imageHeight,tag:item.ImageTags.Primary});}
else if(item.BackdropImageTags&&item.BackdropImageTags.length){url=ApiClient.getScaledImageUrl(item.Id,{type:"Backdrop",height:imageHeight,tag:item.BackdropImageTags[0]});}
else if(imageTags.Thumb){url=ApiClient.getScaledImageUrl(item.Id,{type:"Thumb",height:imageHeight,tag:item.ImageTags.Thumb});}
else if(imageTags.Disc){url=ApiClient.getScaledImageUrl(item.Id,{type:"Disc",height:imageHeight,tag:item.ImageTags.Disc});}
else if(item.AlbumId&&item.AlbumPrimaryImageTag){url=ApiClient.getScaledImageUrl(item.AlbumId,{type:"Primary",height:imageHeight,tag:item.AlbumPrimaryImageTag});}
else if(item.MediaType=="Audio"||item.Type=="MusicAlbum"||item.Type=="MusicGenre"){url="css/images/items/detail/audio.png";}
else if(item.MediaType=="Game"||item.Type=="GameGenre"){url="css/images/items/detail/game.png";}
else if(item.Type=="Person"){url="css/images/items/detail/person.png";}
else if(item.Type=="Genre"||item.Type=="Studio"){url="css/images/items/detail/video.png";}
else if(item.Type=="TvChannel"){url="css/images/items/detail/tv.png";}
else{url="css/images/items/detail/video.png";}
html+='<div style="position:relative;">';if(href){html+="<a class='itemDetailGalleryLink' href='"+href+"'>";}
html+="<img class='itemDetailImage' src='"+url+"' />";if(href){html+="</a>";}
var progressHtml=item.IsFolder?'':LibraryBrowser.getItemProgressBarHtml((item.Type=='Recording'?item:item.UserData));if(progressHtml){html+='<div class="detailImageProgressContainer">';html+=progressHtml;html+="</div>";}
html+="</div>";return html;},renderDetailImage:function(elem,item,href,preferThumb){var imageTags=item.ImageTags||{};if(item.PrimaryImageTag){imageTags.Primary=item.PrimaryImageTag;}
var html='';var url;var shape='portrait';var imageHeight=360;var detectRatio=false;if(preferThumb&&imageTags.Thumb){url=ApiClient.getScaledImageUrl(item.Id,{type:"Thumb",height:imageHeight,tag:item.ImageTags.Thumb});shape='thumb';}
else if(imageTags.Primary){url=ApiClient.getScaledImageUrl(item.Id,{type:"Primary",height:imageHeight,tag:item.ImageTags.Primary});detectRatio=true;}
else if(item.BackdropImageTags&&item.BackdropImageTags.length){url=ApiClient.getScaledImageUrl(item.Id,{type:"Backdrop",height:imageHeight,tag:item.BackdropImageTags[0]});shape='thumb';}
else if(imageTags.Thumb){url=ApiClient.getScaledImageUrl(item.Id,{type:"Thumb",height:imageHeight,tag:item.ImageTags.Thumb});shape='thumb';}
else if(imageTags.Disc){url=ApiClient.getScaledImageUrl(item.Id,{type:"Disc",height:imageHeight,tag:item.ImageTags.Disc});shape='square';}
else if(item.AlbumId&&item.AlbumPrimaryImageTag){url=ApiClient.getScaledImageUrl(item.AlbumId,{type:"Primary",height:imageHeight,tag:item.AlbumPrimaryImageTag});shape='square';}
else if(item.MediaType=="Audio"||item.Type=="MusicAlbum"||item.Type=="MusicGenre"){url="css/images/items/detail/audio.png";shape='square';}
else if(item.MediaType=="Game"||item.Type=="GameGenre"){url="css/images/items/detail/game.png";shape='square';}
else if(item.Type=="Person"){url="css/images/items/detail/person.png";shape='square';}
else if(item.Type=="Genre"||item.Type=="Studio"){url="css/images/items/detail/video.png";shape='square';}
else if(item.Type=="TvChannel"){url="css/images/items/detail/tv.png";shape='square';}
else{url="css/images/items/detail/video.png";shape='square';}
html+='<div style="position:relative;">';if(href){html+="<a class='itemDetailGalleryLink' href='"+href+"'>";}
if(detectRatio&&item.PrimaryImageAspectRatio){if(item.PrimaryImageAspectRatio>=1.48){shape='thumb';}else if(item.PrimaryImageAspectRatio>=.85&&item.PrimaryImageAspectRatio<=1.34){shape='square';}}
var screenWidth=$(window).width();if(screenWidth>600){html+="<img class='itemDetailImage' src='"+url+"' />";}else{html+="<img class='itemDetailImage lazy' data-src='"+url+"' src='css/images/empty.png' />";}
if(href){html+="</a>";}
var progressHtml=item.IsFolder||!item.UserData?'':LibraryBrowser.getItemProgressBarHtml((item.Type=='Recording'?item:item.UserData));if(progressHtml){html+='<div class="detailImageProgressContainer">';html+=progressHtml;html+="</div>";}
html+="</div>";elem.innerHTML=html;function addClass(elems,name){for(var i=0,length=elems.length;i<length;i++){elems[i].classList.add(name);}}
function removeClass(elems,name){for(var i=0,length=elems.length;i<length;i++){elems[i].classList.remove(name);}}
var page=$(elem).parents('.page')[0];var detailContentEffectedByImage=page.querySelectorAll('.detailContentEffectedByImage');if(shape=='thumb'){addClass(detailContentEffectedByImage,'detailContentEffectedByThumbImage');removeClass(detailContentEffectedByImage,'detailContentEffectedBySquareImage');removeClass(detailContentEffectedByImage,'detailContentEffectedByPortraitImage');elem.classList.add('thumbDetailImageContainer');elem.classList.remove('portraitDetailImageContainer');elem.classList.remove('squareDetailImageContainer');}
else if(shape=='square'){removeClass(detailContentEffectedByImage,'detailContentEffectedByThumbImage');removeClass(detailContentEffectedByImage,'detailContentEffectedByPortraitImage');addClass(detailContentEffectedByImage,'detailContentEffectedBySquareImage');elem.classList.remove('thumbDetailImageContainer');elem.classList.remove('portraitDetailImageContainer');elem.classList.add('squareDetailImageContainer');}else{removeClass(detailContentEffectedByImage,'detailContentEffectedByThumbImage');removeClass(detailContentEffectedByImage,'detailContentEffectedBySquareImage');addClass(detailContentEffectedByImage,'detailContentEffectedByPortraitImage');elem.classList.remove('thumbDetailImageContainer');elem.classList.add('portraitDetailImageContainer');elem.classList.remove('squareDetailImageContainer');}
ImageLoader.lazyChildren(elem);},getDisplayTime:function(date){if((typeof date).toString().toLowerCase()==='string'){try{date=parseISO8601Date(date,{toLocal:true});}catch(err){return date;}}
var lower=date.toLocaleTimeString().toLowerCase();var hours=date.getHours();var minutes=date.getMinutes();var text;if(lower.indexOf('am')!=-1||lower.indexOf('pm')!=-1){var suffix=hours>11?'pm':'am';hours=(hours%12)||12;text=hours;if(minutes){text+=':';if(minutes<10){text+='0';}
text+=minutes;}
text+=suffix;}else{text=hours+':';if(minutes<10){text+='0';}
text+=minutes;}
return text;},getMiscInfoHtml:function(item){var miscInfo=[];var text,date;if(item.Type=="Episode"||item.MediaType=='Photo'){if(item.PremiereDate){try{date=parseISO8601Date(item.PremiereDate,{toLocal:true});text=date.toLocaleDateString();miscInfo.push(text);}
catch(e){Logger.log("Error parsing date: "+item.PremiereDate);}}}
if(item.StartDate){try{date=parseISO8601Date(item.StartDate,{toLocal:true});text=date.toLocaleDateString();miscInfo.push(text);if(item.Type!="Recording"){text=LibraryBrowser.getDisplayTime(date);miscInfo.push(text);}}
catch(e){Logger.log("Error parsing date: "+item.PremiereDate);}}
if(item.ProductionYear&&item.Type=="Series"){if(item.Status=="Continuing"){miscInfo.push(Globalize.translate('ValueSeriesYearToPresent',item.ProductionYear));}
else if(item.ProductionYear){text=item.ProductionYear;if(item.EndDate){try{var endYear=parseISO8601Date(item.EndDate,{toLocal:true}).getFullYear();if(endYear!=item.ProductionYear){text+="-"+parseISO8601Date(item.EndDate,{toLocal:true}).getFullYear();}}
catch(e){Logger.log("Error parsing date: "+item.EndDate);}}
miscInfo.push(text);}}
if(item.Type!="Series"&&item.Type!="Episode"&&item.MediaType!='Photo'){if(item.ProductionYear){miscInfo.push(item.ProductionYear);}
else if(item.PremiereDate){try{text=parseISO8601Date(item.PremiereDate,{toLocal:true}).getFullYear();miscInfo.push(text);}
catch(e){Logger.log("Error parsing date: "+item.PremiereDate);}}}
var minutes;if(item.RunTimeTicks&&item.Type!="Series"){if(item.Type=="Audio"){miscInfo.push(Dashboard.getDisplayTime(item.RunTimeTicks));}else{minutes=item.RunTimeTicks/600000000;minutes=minutes||1;miscInfo.push(Math.round(minutes)+"min");}}
if(item.OfficialRating&&item.Type!=="Season"&&item.Type!=="Episode"){miscInfo.push(item.OfficialRating);}
if(item.Video3DFormat){miscInfo.push("3D");}
if(item.MediaType=='Photo'&&item.Width&&item.Height){miscInfo.push(item.Width+"x"+item.Height);}
return miscInfo.join('&nbsp;&nbsp;&nbsp;&nbsp;');},renderOverview:function(elems,item){$(elems).each(function(){var elem=this;var overview=item.Overview||'';elem.innerHTML=overview;$('a',elem).each(function(){this.setAttribute("target","_blank");});if(overview){elem.classList.remove('empty');}else{elem.classList.add('empty');}});},renderStudios:function(elem,item,context,isStatic){if(item.Studios&&item.Studios.length&&item.Type!="Series"){var html='';for(var i=0,length=item.Studios.length;i<length;i++){if(i>0){html+='&nbsp;&nbsp;/&nbsp;&nbsp;';}
if(isStatic){html+=item.Studios[i].Name;}else{html+='<a class="textlink" href="itembynamedetails.html?context='+context+'&id='+item.Studios[i].Id+'">'+item.Studios[i].Name+'</a>';}}
var translationKey=item.Studios.length>1?"ValueStudios":"ValueStudio";html=Globalize.translate(translationKey,html);elem.show().html(html).trigger('create');}else{elem.hide();}},renderGenres:function(elem,item,context,limit,isStatic){var html='';var genres=item.Genres||[];for(var i=0,length=genres.length;i<length;i++){if(limit&&i>=limit){break;}
if(i>0){html+='<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>';}
var param=item.Type=="Audio"||item.Type=="MusicArtist"||item.Type=="MusicAlbum"?"musicgenre":"genre";if(item.MediaType=="Game"){param="gamegenre";}
if(isStatic){html+=genres[i];}else{html+='<a class="textlink" href="itembynamedetails.html?context='+context+'&'+param+'='+ApiClient.encodeName(genres[i])+'">'+genres[i]+'</a>';}}
elem.html(html).trigger('create');},renderPremiereDate:function(elem,item){if(item.PremiereDate){try{var date=parseISO8601Date(item.PremiereDate,{toLocal:true});var translationKey=new Date().getTime()>date.getTime()?"ValuePremiered":"ValuePremieres";elem.show().html(Globalize.translate(translationKey,date.toLocaleDateString()));}catch(err){elem.hide();}}else{elem.hide();}},renderBudget:function(elem,item){if(item.Budget){elem.show().html(Globalize.translate('ValueBudget','$'+item.Budget));}else{elem.hide();}},renderRevenue:function(elem,item){if(item.Revenue){elem.show().html(Globalize.translate('ValueRevenue','$'+item.Revenue));}else{elem.hide();}},renderAwardSummary:function(elem,item){if(item.AwardSummary){elem.show().html(Globalize.translate('ValueAwards',item.AwardSummary));}else{elem.hide();}},renderDetailPageBackdrop:function(page,item){var screenWidth=screen.availWidth;var imgUrl;if(item.BackdropImageTags&&item.BackdropImageTags.length){imgUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Backdrop",index:0,maxWidth:screenWidth,tag:item.BackdropImageTags[0]});ImageLoader.lazyImage($('#itemBackdrop',page).removeClass('noBackdrop')[0],imgUrl);}
else if(item.ParentBackdropItemId&&item.ParentBackdropImageTags&&item.ParentBackdropImageTags.length){imgUrl=ApiClient.getScaledImageUrl(item.ParentBackdropItemId,{type:'Backdrop',index:0,tag:item.ParentBackdropImageTags[0],maxWidth:screenWidth});ImageLoader.lazyImage($('#itemBackdrop',page).removeClass('noBackdrop')[0],imgUrl);}
else{$('#itemBackdrop',page).addClass('noBackdrop').css('background-image','none');}}};})(window,document,jQuery,screen);(function($,document,window){var showOverlayTimeout;function onHoverOut(){if(showOverlayTimeout){clearTimeout(showOverlayTimeout);showOverlayTimeout=null;}
var elem=this.querySelector('.cardOverlayTarget');if($(elem).is(':visible')){require(["jquery","velocity"],function($,Velocity){Velocity.animate(elem,{"height":"0"},{complete:function(){$(elem).hide();}});});}}
function getOverlayHtml(item,currentUser,card,commands){var html='';html+='<div class="cardOverlayInner">';var className=card.className.toLowerCase();var isMiniItem=className.indexOf('mini')!=-1;var isSmallItem=isMiniItem||className.indexOf('small')!=-1;var isPortrait=className.indexOf('portrait')!=-1;var isSquare=className.indexOf('square')!=-1;var parentName=isSmallItem||isMiniItem||isPortrait?null:item.SeriesName;var name=LibraryBrowser.getPosterViewDisplayName(item,true);html+='<div style="margin-bottom:1em;">';var logoHeight=isSmallItem||isMiniItem?20:26;var maxLogoWidth=isPortrait?100:200;var imgUrl;if(parentName&&item.ParentLogoItemId){imgUrl=ApiClient.getScaledImageUrl(item.ParentLogoItemId,{height:logoHeight,type:'logo',tag:item.ParentLogoImageTag});html+='<img src="'+imgUrl+'" style="max-height:'+logoHeight+'px;max-width:100%;" />';}
else if(item.ImageTags.Logo){imgUrl=ApiClient.getScaledImageUrl(item.Id,{height:logoHeight,type:'logo',tag:item.ImageTags.Logo});html+='<img src="'+imgUrl+'" style="max-height:'+logoHeight+'px;max-width:100%;" />';}
else{html+=parentName||name;}
html+='</div>';if(parentName){html+='<p>';html+=name;html+='</p>';}else if(!isSmallItem&&!isMiniItem){html+='<p class="itemMiscInfo" style="white-space:nowrap;">';html+=LibraryBrowser.getMiscInfoHtml(item);html+='</p>';}
if(!isMiniItem){html+='<div style="margin:1em 0 .75em;">';if(isPortrait){html+='<div class="itemCommunityRating">';html+=LibraryBrowser.getRatingHtml(item,false);html+='</div>';html+='<div class="userDataIcons" style="margin:.5em 0 0em;">';html+=LibraryBrowser.getUserDataIconsHtml(item);html+='</div>';}else{html+='<span class="itemCommunityRating" style="vertical-align:middle;">';html+=LibraryBrowser.getRatingHtml(item,false);html+='</span>';html+='<span class="userDataIcons" style="vertical-align:middle;">';html+=LibraryBrowser.getUserDataIconsHtml(item);html+='</span>';}
html+='</div>';}
html+='<div>';var buttonMargin=isPortrait||isSquare?"margin:0 4px 0 0;":"margin:0 10px 0 0;";var buttonCount=0;if(MediaController.canPlay(item)){var resumePosition=(item.UserData||{}).PlaybackPositionTicks||0;html+='<paper-icon-button icon="play-circle-outline" class="btnPlayItem" data-itemid="'+item.Id+'" data-itemtype="'+item.Type+'" data-isfolder="'+item.IsFolder+'" data-mediatype="'+item.MediaType+'" data-resumeposition="'+resumePosition+'"></paper-icon-button>';buttonCount++;}
if(commands.indexOf('trailer')!=-1){html+='<paper-icon-button icon="videocam" class="btnPlayTrailer" data-itemid="'+item.Id+'"></paper-icon-button>';buttonCount++;}
html+='<paper-icon-button icon="'+AppInfo.moreIcon+'" class="btnMoreCommands"></paper-icon-button>';buttonCount++;html+='</div>';html+='</div>';return html;}
function onTrailerButtonClick(){var id=this.getAttribute('data-itemid');ApiClient.getLocalTrailers(Dashboard.getCurrentUserId(),id).done(function(trailers){MediaController.play({items:trailers});});return false;}
function onPlayItemButtonClick(){var id=this.getAttribute('data-itemid');var type=this.getAttribute('data-itemtype');var isFolder=this.getAttribute('data-isfolder')=='true';var mediaType=this.getAttribute('data-mediatype');var resumePosition=parseInt(this.getAttribute('data-resumeposition'));LibraryBrowser.showPlayMenu(this,id,type,isFolder,mediaType,resumePosition);return false;}
function onMoreButtonClick(){var card=$(this).parents('.card')[0];showContextMenu(card,{showPlayOptions:false});return false;}
function onCardTapHold(e){showContextMenu(this,{});e.preventDefault();return false;}
function showContextMenu(card,options){var displayContextItem=card;if(!card.classList.contains('card')&&!card.classList.contains('listItem')){card=$(card).parents('.listItem,.card')[0];}
var itemId=card.getAttribute('data-itemid');var playlistItemId=card.getAttribute('data-playlistitemid');var commands=card.getAttribute('data-commands').split(',');var itemType=card.getAttribute('data-itemtype');var mediaType=card.getAttribute('data-mediatype');var playbackPositionTicks=parseInt(card.getAttribute('data-positionticks')||'0');var playAccess=card.getAttribute('data-playaccess');var locationType=card.getAttribute('data-locationtype');var index=card.getAttribute('data-index');var albumid=card.getAttribute('data-albumid');var artistid=card.getAttribute('data-artistid');Dashboard.getCurrentUser().done(function(user){var items=[];if(commands.indexOf('addtocollection')!=-1){items.push({name:Globalize.translate('ButtonAddToCollection'),id:'addtocollection',ironIcon:'add'});}
if(commands.indexOf('playlist')!=-1){items.push({name:Globalize.translate('ButtonAddToPlaylist'),id:'playlist',ironIcon:'playlist-add'});}
if(commands.indexOf('delete')!=-1){items.push({name:Globalize.translate('ButtonDelete'),id:'delete',ironIcon:'delete'});}
if(user.Policy.IsAdministrator&&commands.indexOf('edit')!=-1){items.push({name:Globalize.translate('ButtonEdit'),id:'edit',ironIcon:'mode-edit'});}
if(commands.indexOf('instantmix')!=-1){items.push({name:Globalize.translate('ButtonInstantMix'),id:'instantmix',ironIcon:'shuffle'});}
items.push({name:Globalize.translate('ButtonOpen'),id:'open',ironIcon:'folder-open'});if(options.showPlayOptions!==false){if(MediaController.canPlayByAttributes(itemType,mediaType,playAccess,locationType)){items.push({name:Globalize.translate('ButtonPlay'),id:'play',ironIcon:'play-arrow'});if(commands.indexOf('playfromhere')!=-1){items.push({name:Globalize.translate('ButtonPlayAllFromHere'),id:'playallfromhere',ironIcon:'play-arrow'});}}
if(mediaType=='Video'&&AppSettings.enableExternalPlayers()){items.push({name:Globalize.translate('ButtonPlayExternalPlayer'),id:'externalplayer',ironIcon:'airplay'});}
if(playbackPositionTicks&&mediaType!="Audio"){items.push({name:Globalize.translate('ButtonResume'),id:'resume',ironIcon:'play-arrow'});}
if(commands.indexOf('trailer')!=-1){items.push({name:Globalize.translate('ButtonPlayTrailer'),id:'trailer',ironIcon:'play-arrow'});}}
if(MediaController.canQueueMediaType(mediaType,itemType)){items.push({name:Globalize.translate('ButtonQueue'),id:'queue',ironIcon:'playlist-add'});if(commands.indexOf('queuefromhere')!=-1){items.push({name:Globalize.translate('ButtonQueueAllFromHere'),id:'queueallfromhere',ironIcon:'playlist-add'});}}
if(commands.indexOf('shuffle')!=-1){items.push({name:Globalize.translate('ButtonShuffle'),id:'shuffle',ironIcon:'shuffle'});}
if(commands.indexOf('removefromplaylist')!=-1){items.push({name:Globalize.translate('ButtonRemoveFromPlaylist'),id:'removefromplaylist',ironIcon:'remove'});}
if(user.Policy.EnablePublicSharing){items.push({name:Globalize.translate('ButtonShare'),id:'share',ironIcon:'share'});}
if(commands.indexOf('sync')!=-1){items.push({name:Globalize.translate('ButtonSync'),id:'sync',ironIcon:'refresh'});}
if(albumid){items.push({name:Globalize.translate('ButtonViewAlbum'),id:'album',ironIcon:'album'});}
if(artistid){items.push({name:Globalize.translate('ButtonViewArtist'),id:'artist',ironIcon:'person'});}
var href=card.getAttribute('data-href')||card.href;if(!href){var links=card.getElementsByTagName('a');if(links.length){href=links[0].href;}}
require(['actionsheet'],function(){ActionSheetElement.show({items:items,positionTo:displayContextItem,callback:function(id){switch(id){case'addtocollection':BoxSetEditor.showPanel([itemId]);break;case'playlist':PlaylistManager.showPanel([itemId]);break;case'delete':LibraryBrowser.deleteItem(itemId);break;case'download':{var downloadHref=ApiClient.getUrl("Items/"+itemId+"/Download",{api_key:ApiClient.accessToken()});window.location.href=downloadHref;break;}
case'edit':Dashboard.navigate('edititemmetadata.html?id='+itemId);break;case'refresh':ApiClient.refreshItem(itemId,{Recursive:true,ImageRefreshMode:'FullRefresh',MetadataRefreshMode:'FullRefresh',ReplaceAllImages:false,ReplaceAllMetadata:true});break;case'instantmix':MediaController.instantMix(itemId);break;case'shuffle':MediaController.shuffle(itemId);break;case'open':Dashboard.navigate(href);break;case'album':Dashboard.navigate('itemdetails.html?id='+albumid);break;case'artist':Dashboard.navigate('itembynamedetails.html?context=music&id='+artistid);break;case'play':MediaController.play(itemId);break;case'playallfromhere':$(card).parents('.itemsContainer').trigger('playallfromhere',[index]);break;case'queue':MediaController.queue(itemId);break;case'trailer':ApiClient.getLocalTrailers(Dashboard.getCurrentUserId(),itemId).done(function(trailers){MediaController.play({items:trailers});});break;case'resume':MediaController.play({ids:[itemId],startPositionTicks:playbackPositionTicks});break;case'queueallfromhere':$(card).parents('.itemsContainer').trigger('queueallfromhere',[index]);break;case'sync':SyncManager.showMenu({items:[{Id:itemId}]});break;case'externalplayer':LibraryBrowser.playInExternalPlayer(itemId);break;case'share':require(['sharingmanager'],function(){SharingManager.showMenu(Dashboard.getCurrentUserId(),itemId);});break;case'removefromplaylist':$(card).parents('.itemsContainer').trigger('removefromplaylist',[playlistItemId]);break;default:break;}}});});});}
function onListViewMenuButtonClick(e){showContextMenu(this,{});e.preventDefault();return false;}
function onListViewPlayButtonClick(e){var playButton=this;var card=this;if(!card.classList.contains('card')&&!card.classList.contains('listItem')){card=$(card).parents('.listItem,.card')[0];}
var id=card.getAttribute('data-itemid');var type=card.getAttribute('data-itemtype');var isFolder=card.getAttribute('data-isfolder')=='true';var mediaType=card.getAttribute('data-mediatype');var resumePosition=parseInt(card.getAttribute('data-positionticks'));if(type=='MusicAlbum'||type=='MusicArtist'||type=='MusicGenre'||type=='Playlist'){isFolder=true;}
LibraryBrowser.showPlayMenu(playButton,id,type,isFolder,mediaType,resumePosition);e.preventDefault();return false;}
function isClickable(target){while(target!=null){var tagName=target.tagName||'';if(tagName=='A'||tagName.indexOf('BUTTON')!=-1||tagName.indexOf('INPUT')!=-1){return true;}
return false;}
return false;}
function onGroupedCardClick(e){var card=this;var itemId=card.getAttribute('data-itemid');var context=card.getAttribute('data-context');var userId=Dashboard.getCurrentUserId();var options={Limit:parseInt($('.playedIndicator',card).html()||'10'),Fields:"PrimaryImageAspectRatio,DateCreated",ParentId:itemId,GroupItems:false};var target=e.target;if(isClickable(target)){return;}
var buttonParents=$(target).parents('a:not(.card,.cardContent),button:not(.card,.cardContent)');if(buttonParents.length){return;}
ApiClient.getJSON(ApiClient.getUrl('Users/'+userId+'/Items/Latest',options)).done(function(items){if(items.length==1){Dashboard.navigate(LibraryBrowser.getHref(items[0],context));return;}
var ids=items.map(function(i){return i.Id;});showItemsOverlay({ids:ids,context:context});});e.preventDefault();return false;}
function getItemsOverlay(ids,context){$('.detailsMenu').remove();var html='<div data-role="popup" class="detailsMenu" style="border:0;padding:0;" data-ids="'+ids.join(',')+'" data-context="'+(context||'')+'">';html+='<div style="padding:1em 1em;background:rgba(20,20,20,1);margin:0;text-align:center;" class="detailsMenuHeader">';html+='<button type="button" class="imageButton detailsMenuLeftButton" data-role="none"><i class="fa fa-arrow-left"></i></button>';html+='<h3 style="font-weight:400;margin:.5em 0;"></h3>';html+='<button type="button" class="imageButton detailsMenuRightButton" data-role="none"><i class="fa fa-arrow-right"></i></button>';html+='</div>';html+='<div class="detailsMenuContent" style="background-position:center center;background-repeat:no-repeat;background-size:cover;">';html+='<div style="padding:.5em 1em 1em;background:rgba(10,10,10,.80);" class="detailsMenuContentInner">';html+='</div>';html+='</div>';html+='</div>';$($.mobile.activePage).append(html);var elem=$('.detailsMenu').popup().trigger('create').popup("open").on("popupafterclose",function(){$(this).off("popupafterclose").remove();})[0];$('.detailsMenuLeftButton',elem).on('click',function(){var overlay=$(this).parents('.detailsMenu')[0];setItemIntoOverlay(overlay,parseInt(overlay.getAttribute('data-index')||'0')-1,context);});$('.detailsMenuRightButton',elem).on('click',function(){var overlay=$(this).parents('.detailsMenu')[0];setItemIntoOverlay(overlay,parseInt(overlay.getAttribute('data-index')||'0')+1,context);});return elem;}
function setItemIntoOverlay(elem,index){var ids=elem.getAttribute('data-ids').split(',');var itemId=ids[index];var userId=Dashboard.getCurrentUserId();var context=elem.getAttribute('data-context');elem.setAttribute('data-index',index);if(index>0){$('.detailsMenuLeftButton',elem).show();}else{$('.detailsMenuLeftButton',elem).hide();}
if(index<ids.length-1){$('.detailsMenuRightButton',elem).show();}else{$('.detailsMenuRightButton',elem).hide();}
var promise1=ApiClient.getItem(userId,itemId);var promise2=Dashboard.getCurrentUser();$.when(promise1,promise2).done(function(response1,response2){var item=response1[0];var user=response2[0];var background='none';if(AppInfo.enableDetailsMenuImages){var backdropUrl;var screenWidth=$(window).width();var backdropWidth=Math.min(screenWidth,800);if(item.BackdropImageTags&&item.BackdropImageTags.length){backdropUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Backdrop",index:0,maxWidth:backdropWidth,tag:item.BackdropImageTags[0]});}
else if(item.ParentBackdropItemId&&item.ParentBackdropImageTags&&item.ParentBackdropImageTags.length){backdropUrl=ApiClient.getScaledImageUrl(item.ParentBackdropItemId,{type:'Backdrop',index:0,tag:item.ParentBackdropImageTags[0],maxWidth:backdropWidth});}
if(backdropUrl){background='url('+backdropUrl+')';}}
$('.detailsMenuContent',elem).css('backgroundImage',background);var headerHtml=LibraryBrowser.getPosterViewDisplayName(item);$('.detailsMenuHeader',elem).removeClass('detailsMenuHeaderWithLogo');if(AppInfo.enableDetailsMenuImages){var logoUrl;var logoHeight=30;if(item.ImageTags&&item.ImageTags.Logo){logoUrl=ApiClient.getScaledImageUrl(item.Id,{type:"Logo",index:0,height:logoHeight,tag:item.ImageTags.Logo});}
if(logoUrl){headerHtml='<img src="'+logoUrl+'" style="height:'+logoHeight+'px;" />';$('.detailsMenuHeader',elem).addClass('detailsMenuHeaderWithLogo');}}
$('h3',elem).html(headerHtml);var contentHtml='';var miscInfo=LibraryBrowser.getMiscInfoHtml(item);if(miscInfo){contentHtml+='<p>'+miscInfo+'</p>';}
var userData=LibraryBrowser.getUserDataIconsHtml(item);if(userData){contentHtml+='<p class="detailsMenuUserData">'+userData+'</p>';}
var ratingHtml=LibraryBrowser.getRatingHtml(item);if(ratingHtml){contentHtml+='<p>'+ratingHtml+'</p>';}
if(item.Overview){contentHtml+='<p class="detailsMenuOverview">'+item.Overview+'</p>';}
contentHtml+='<div class="detailsMenuButtons">';if(MediaController.canPlay(item)){if(item.MediaType=='Video'&&!item.IsFolder&&item.UserData&&item.UserData.PlaybackPositionTicks){contentHtml+='<paper-button raised class="secondary btnResume" style="background-color:#ff8f00;"><iron-icon icon="play-arrow"></iron-icon><span>'+Globalize.translate('ButtonResume')+'</span></paper-button>';}
contentHtml+='<paper-button raised class="secondary btnPlay"><iron-icon icon="play-arrow"></iron-icon><span>'+Globalize.translate('ButtonPlay')+'</span></paper-button>';}
contentHtml+='<paper-button data-href="'+LibraryBrowser.getHref(item,context)+'" raised class="submit btnSync" style="background-color: #673AB7;" onclick="Dashboard.navigate(this.getAttribute(\'data-href\'));"><iron-icon icon="folder-open"></iron-icon><span>'+Globalize.translate('ButtonOpen')+'</span></paper-button>';if(SyncManager.isAvailable(item,user)){contentHtml+='<paper-button raised class="submit btnSync"><iron-icon icon="refresh"></iron-icon><span>'+Globalize.translate('ButtonSync')+'</span></paper-button>';}
contentHtml+='</div>';$('.detailsMenuContentInner',elem).html(contentHtml).trigger('create');$('.btnSync',elem).on('click',function(){$(elem).popup('close');SyncManager.showMenu({items:[item]});});$('.btnPlay',elem).on('click',function(){$(elem).popup('close');MediaController.play({items:[item]});});$('.btnResume',elem).on('click',function(){$(elem).popup('close');MediaController.play({items:[item],startPositionTicks:item.UserData.PlaybackPositionTicks});});});}
function showItemsOverlay(options){var context=options.context;var elem=getItemsOverlay(options.ids,context);setItemIntoOverlay(elem,0);}
function onCardClick(e){if(isClickable(targetElem)){return;}
var targetElem=e.target;if(targetElem.classList.contains('itemSelectionPanel')||this.querySelector('.itemSelectionPanel')){return;}
var info=LibraryBrowser.getListItemInfo(this);var itemId=info.id;var context=info.context;var card=this;if(card.classList.contains('itemWithAction')){return;}
if(!card.classList.contains('card')){card=$(card).parents('.card')[0];}
if(card.classList.contains('groupedCard')){return;}
if(card.getAttribute('data-detailsmenu')!='true'){return;}
var target=$(targetElem);if(target.parents('a').length||target.parents('button').length){return;}
if(AppSettings.enableItemPreviews()){showItemsOverlay({ids:[itemId],context:context});return false;}}
$.fn.createCardMenus=function(options){var preventHover=false;function onShowTimerExpired(elem){elem=elem.querySelector('a');if($('.itemSelectionPanel:visible',elem).length){return;}
var innerElem=elem.querySelector('.cardOverlayTarget');var dataElement=elem;while(dataElement&&!dataElement.getAttribute('data-itemid')){dataElement=dataElement.parentNode;}
var id=dataElement.getAttribute('data-itemid');var commands=dataElement.getAttribute('data-commands').split(',');var promise1=ApiClient.getItem(Dashboard.getCurrentUserId(),id);var promise2=Dashboard.getCurrentUser();$.when(promise1,promise2).done(function(response1,response2){var item=response1[0];var user=response2[0];var card=elem;while(!card.classList.contains('card')){card=card.parentNode;}
innerElem.innerHTML=getOverlayHtml(item,user,card,commands);$('.btnPlayItem',innerElem).on('click',onPlayItemButtonClick);$('.btnPlayTrailer',innerElem).on('click',onTrailerButtonClick);$('.btnMoreCommands',innerElem).on('click',onMoreButtonClick);});$(innerElem).show();innerElem.style.height='0';require(["jquery","velocity"],function($,Velocity){Velocity.animate(innerElem,{"height":"100%"},"fast");});}
function onHoverIn(e){if(preventHover===true){preventHover=false;return;}
if(showOverlayTimeout){clearTimeout(showOverlayTimeout);showOverlayTimeout=null;}
var elem=this;while(!elem.classList.contains('card')){elem=elem.parentNode;}
showOverlayTimeout=setTimeout(function(){onShowTimerExpired(elem);},1000);}
function preventTouchHover(){preventHover=true;}
this.off('contextmenu','.card',onCardTapHold);this.on('contextmenu','.card',onCardTapHold);this.off('click','.groupedCard',onGroupedCardClick);this.on('click','.groupedCard',onGroupedCardClick);this.off('click','.listviewMenuButton',onListViewMenuButtonClick);this.on('click','.listviewMenuButton',onListViewMenuButtonClick);this.off('click','.cardOverlayMoreButton',onListViewMenuButtonClick);this.on('click','.cardOverlayMoreButton',onListViewMenuButtonClick);this.off('click','.cardOverlayPlayButton',onListViewPlayButtonClick);this.on('click','.cardOverlayPlayButton',onListViewPlayButtonClick);if(!AppInfo.isTouchPreferred){this.off('mouseenter','.card:not(.bannerCard) .cardContent',onHoverIn);this.on('mouseenter','.card:not(.bannerCard) .cardContent',onHoverIn);this.off('mouseleave','.card:not(.bannerCard) .cardContent',onHoverOut);this.on('mouseleave','.card:not(.bannerCard) .cardContent',onHoverOut);this.off("touchstart",'.card:not(.bannerCard) .cardContent',preventTouchHover);this.on("touchstart",'.card:not(.bannerCard) .cardContent',preventTouchHover);}
this.off('click','.mediaItem',onCardClick);this.on('click','.mediaItem',onCardClick);return this;};function toggleSelections(page){Dashboard.showLoadingMsg();var selectionCommands=$('.selectionCommands',page);if(selectionCommands.is(':visible')){selectionCommands.hide();$('.itemSelectionPanel',page).hide();}else{selectionCommands.show();var panels=$('.itemSelectionPanel',page).show();if(!panels.length){var index=0;$('.cardContent',page).each(function(){var chkItemSelectId='chkItemSelect'+index;$(this).append('<div class="itemSelectionPanel" onclick="return false;"><div class="ui-checkbox"><label class="ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left ui-checkbox-off" for="'+chkItemSelectId+'">Select</label><input id="'+chkItemSelectId+'" type="checkbox" class="chkItemSelect" data-enhanced="true" /></div></div>');index++;});$('.itemsContainer',page).trigger('create');}
$('.chkItemSelect:checked',page).checked(false).checkboxradio('refresh');}
Dashboard.hideLoadingMsg();}
function hideSelections(page){var selectionCommands=page.querySelector('.selectionCommands');if(selectionCommands){selectionCommands.style.display='none';}
var elems=page.getElementsByClassName('itemSelectionPanel');for(var i=0,length=elems.length;i<length;i++){elems[i].style.display='none';}}
function getSelectedItems(page){var selection=$('.chkItemSelect:checked',page);return selection.parents('.card').map(function(){return this.getAttribute('data-itemid');}).get();}
function onSyncJobListSubmit(){hideSelections($($.mobile.activePage)[0]);}
function sync(page){var selection=getSelectedItems(page);if(selection.length<1){Dashboard.alert({message:Globalize.translate('MessagePleaseSelectOneItem'),title:Globalize.translate('HeaderError')});return;}
SyncManager.showMenu({items:selection});Events.off(SyncManager,'jobsubmit',onSyncJobListSubmit);Events.on(SyncManager,'jobsubmit',onSyncJobListSubmit);}
function combineVersions(page){var selection=getSelectedItems(page);if(selection.length<2){Dashboard.alert({message:Globalize.translate('MessagePleaseSelectTwoItems'),title:Globalize.translate('HeaderError')});return;}
var names=$('.chkItemSelect:checked',page).parents('.card').get().reverse().map(function(e){return $('.cardText',e).html();}).join('<br/>');var msg=Globalize.translate('MessageTheFollowingItemsWillBeGrouped')+"<br/><br/>"+names;msg+="<br/><br/>"+Globalize.translate('MessageConfirmItemGrouping');Dashboard.confirm(msg,Globalize.translate('HeaderGroupVersions'),function(confirmResult){if(confirmResult){Dashboard.showLoadingMsg();ApiClient.ajax({type:"POST",url:ApiClient.getUrl("Videos/MergeVersions",{Ids:selection.join(',')})}).done(function(){Dashboard.hideLoadingMsg();hideSelections(page);$('.itemsContainer',page).trigger('needsrefresh');});}});}
function addToCollection(page){var selection=getSelectedItems(page);if(selection.length<1){Dashboard.alert({message:Globalize.translate('MessagePleaseSelectOneItem'),title:Globalize.translate('HeaderError')});return;}
BoxSetEditor.showPanel(selection);}
function addToPlaylist(page){var selection=getSelectedItems(page);if(selection.length<1){Dashboard.alert({message:Globalize.translate('MessagePleaseSelectOneItem'),title:Globalize.translate('HeaderError')});return;}
PlaylistManager.showPanel(selection);}
function onListviewSubLinkClick(e){var elem=e.target;Dashboard.navigate(elem.getAttribute('data-href'));return false;}
function onItemWithActionClick(e){var elem=this;var action=elem.getAttribute('data-action');var elemWithAttributes=elem;if(action){while(!elemWithAttributes.getAttribute('data-itemid')){elemWithAttributes=elemWithAttributes.parentNode;}}
var index;var itemsContainer;var itemId=elemWithAttributes.getAttribute('data-itemid');if(action=='play'){MediaController.play(itemId);}
else if(action=='playallfromhere'){index=elemWithAttributes.getAttribute('data-index');itemsContainer=$(elem).parents('.itemsContainer');itemsContainer.trigger('playallfromhere',[index]);}
return false;}
$(document).on('pageinitdepends',".libraryPage",function(){var page=this;var btnAddToPlaylist=page.querySelector('.btnAddToPlaylist');if(btnAddToPlaylist){Events.on(btnAddToPlaylist,'click',function(){addToPlaylist(page);});}
var btnMergeVersions=page.querySelector('.btnMergeVersions');if(btnMergeVersions){Events.on(btnMergeVersions,'click',function(){combineVersions(page);});}
var btnSyncItems=page.querySelector('.btnSyncItems');if(btnSyncItems){Events.on(btnSyncItems,'click',function(){sync(page);});}
var btnAddToCollection=page.querySelector('.btnAddToCollection');if(btnAddToCollection){Events.on(btnAddToCollection,'click',function(){addToCollection(page);});}
$(page.getElementsByClassName('viewTabButton')).on('click',function(){$('.viewTabButton',page).removeClass('ui-btn-active');this.classList.add('ui-btn-active');$('.viewTab',page).hide();$('.'+this.getAttribute('data-tab'),page).show();});var viewPanel=$('.viewPanel',page);$('#selectPageSize',viewPanel).html(LibraryBrowser.getDefaultPageSizeSelections().map(function(i){return'<option value="'+i+'">'+i+'</option>';}).join('')).selectmenu('refresh');$(page).on('click','.btnToggleSelections',function(){toggleSelections(page);}).on('click','.itemWithAction',onItemWithActionClick).on('click','.listviewSubLink',onListviewSubLinkClick);var itemsContainers=page.getElementsByClassName('itemsContainer');for(var i=0,length=itemsContainers.length;i<length;i++){$(itemsContainers[i]).createCardMenus();}}).on('pagebeforeshowready',".libraryPage",function(){var page=this;hideSelections(page);var elem=page.querySelector('.viewTabButton');if(elem){Events.trigger(elem,'click');}});function renderUserDataChanges(card,userData){if(userData.Played){if(!$('.playedIndicator',card).length){$('<div class="playedIndicator"></div>').insertAfter($('.cardOverlayTarget',card));}
$('.playedIndicator',card).html('<iron-icon icon="check"></iron-icon>');$('.cardProgress',card).remove();}
else if(userData.UnplayedItemCount){if(!$('.playedIndicator',card).length){$('<div class="playedIndicator"></div>').insertAfter($('.cardOverlayTarget',card));}
$('.playedIndicator',card).html(userData.UnplayedItemCount);}
else{$('.playedIndicator',card).remove();var progressHtml=LibraryBrowser.getItemProgressBarHtml(userData);$('.cardProgress',card).html(progressHtml);}}
function onUserDataChanged(userData){var cssClass=LibraryBrowser.getUserDataCssClass(userData.Key);if(!cssClass){return;}
$('.'+cssClass).each(function(){var mediaType=this.getAttribute('data-mediatype');if(mediaType=='Video'){this.setAttribute('data-positionticks',(userData.PlaybackPositionTicks||0));if($(this).hasClass('card')){renderUserDataChanges(this,userData);}}});}
function onWebSocketMessage(e,data){var msg=data;if(msg.MessageType==="UserDataChanged"){if(msg.Data.UserId==Dashboard.getCurrentUserId()){for(var i=0,length=msg.Data.UserDataList.length;i<length;i++){onUserDataChanged(msg.Data.UserDataList[i]);}}}}
function initializeApiClient(apiClient){$(apiClient).off('websocketmessage',onWebSocketMessage).on('websocketmessage',onWebSocketMessage);}
function clearRefreshTimes(){$('.hasrefreshtime').removeClass('hasrefreshtime').removeAttr('data-lastrefresh');}
Dashboard.ready(function(){if(window.ApiClient){initializeApiClient(window.ApiClient);}
$(ConnectionManager).on('apiclientcreated',function(e,apiClient){initializeApiClient(apiClient);});Events.on(ConnectionManager,'localusersignedin',clearRefreshTimes);Events.on(ConnectionManager,'localusersignedout',clearRefreshTimes);});})(jQuery,document,window);(function(window,document,$,devicePixelRatio){function renderHeader(){var html='<div class="viewMenuBar ui-bar-b">';var backIcon=$.browser.safari?'chevron-left':'arrow-back';html+='<paper-icon-button icon="'+backIcon+'" class="headerButton headerButtonLeft headerBackButton hide"></paper-icon-button>';html+='<paper-icon-button icon="menu" class="headerButton mainDrawerButton barsMenuButton headerButtonLeft"></paper-icon-button>';html+='<div class="libraryMenuButtonText headerButton">'+Globalize.translate('ButtonHome')+'</div>';html+='<div class="viewMenuSecondary">';html+='<span class="headerSelectedPlayer"></span>';html+='<paper-icon-button icon="cast" class="btnCast headerButton headerButtonRight hide"></paper-icon-button>';html+='<paper-icon-button icon="search" class="headerButton headerButtonRight headerSearchButton hide" onclick="Search.showSearchPanel();"></paper-icon-button>';html+='<div class="viewMenuSearch hide">';html+='<form class="viewMenuSearchForm">';html+='<input type="text" data-role="none" data-type="search" class="headerSearchInput" autocomplete="off" spellcheck="off" />';html+='<div class="searchInputIcon fa fa-search"></div>';html+='<paper-icon-button icon="close" class="btnCloseSearch"></paper-icon-button>';html+='</form>';html+='</div>';html+='<paper-icon-button icon="mic" class="headerButton headerButtonRight headerVoiceButton hide" onclick="VoiceInputManager.startListening();"></paper-icon-button>';if(!showUserAtTop()){html+='<paper-icon-button icon="person" class="headerButton headerButtonRight headerUserButton" onclick="return Dashboard.showUserFlyout(this);"></paper-icon-button>';}
if(!$.browser.mobile&&!AppInfo.isNativeApp){html+='<paper-icon-button icon="settings" class="headerButton headerButtonRight dashboardEntryHeaderButton hide" onclick="return LibraryMenu.onSettingsClicked(event);"></paper-icon-button>';}
html+='</div>';html+='</div>';$(document.body).append(html);ImageLoader.lazyChildren(document.querySelector('.viewMenuBar'));Events.trigger(document,'headercreated');bindMenuEvents();}
function onBackClick(){if(Dashboard.exitOnBack()){Dashboard.exit();}
else{history.back();}}
function addUserToHeader(user){var header=document.querySelector('.viewMenuBar');if(user.localUser){$('.btnCast',header).visible(true);document.querySelector('.headerSearchButton').classList.remove('hide');requirejs(['voice/voice'],function(){if(VoiceInputManager.isSupported()){document.querySelector('.headerVoiceButton').classList.remove('hide');}else{document.querySelector('.headerVoiceButton').classList.add('hide');}});}else{$('.btnCast',header).visible(false);document.querySelector('.headerVoiceButton').classList.add('hide');document.querySelector('.headerSearchButton').classList.add('hide');}
var dashboardEntryHeaderButton=document.querySelector('.dashboardEntryHeaderButton');if(dashboardEntryHeaderButton){if(user.canManageServer){dashboardEntryHeaderButton.classList.remove('hide');}else{dashboardEntryHeaderButton.classList.add('hide');}}
if(user.name){if(user.imageUrl&&AppInfo.enableUserImage){var userButtonHeight=26;var url=user.imageUrl;if(user.supportsImageParams){url+="&height="+(userButtonHeight*Math.max(devicePixelRatio||1,2));}
var headerUserButton=header.querySelector('.headerUserButton');if(headerUserButton){headerUserButton.icon=null;headerUserButton.src=url;headerUserButton.classList.add('headerUserButtonRound');}}}}
function bindMenuEvents(){if(AppInfo.isTouchPreferred){$('.mainDrawerButton').on('touchend',openMainDrawer).on('click',openMainDrawer);}else{$('.mainDrawerButton').createHoverTouch().on('hovertouch',openMainDrawer);}
$('.headerBackButton').on('click',onBackClick);var viewMenuBar=document.getElementsByClassName("viewMenuBar")[0];initHeadRoom(viewMenuBar);}
function updateViewMenuBarHeadroom(page,viewMenuBar){if(page.classList.contains('libraryPage')){setTimeout(reEnableHeadroom,700);}else{viewMenuBar.classList.add('headroomDisabled');}}
function reEnableHeadroom(){var headroomDisabled=document.querySelectorAll('.headroomDisabled');for(var i=0,length=headroomDisabled.length;i<length;i++){headroomDisabled[i].classList.remove('headroomDisabled');}}
function getItemHref(item,context){return LibraryBrowser.getHref(item,context);}
var requiresDrawerRefresh=true;var requiresDashboardDrawerRefresh=true;var lastOpenTime=new Date().getTime();function openMainDrawer(){var drawerPanel=document.querySelector('.mainDrawerPanel');drawerPanel.openDrawer();lastOpenTime=new Date().getTime();}
function onMainDrawerOpened(){if($.browser.mobile){document.body.classList.add('bodyWithPopupOpen');}
var drawer=document.querySelector('.mainDrawerPanel .mainDrawer');ConnectionManager.user(window.ApiClient).done(function(user){if(requiresDrawerRefresh){ensureDrawerStructure(drawer);refreshUserInfoInDrawer(user,drawer);refreshLibraryInfoInDrawer(user,drawer);refreshBottomUserInfoInDrawer(user,drawer);Events.trigger(document,'libraryMenuCreated');updateLibraryMenu(user.localUser);}
var pageElem=$($.mobile.activePage)[0];if(requiresDrawerRefresh||requiresDashboardDrawerRefresh){refreshDashboardInfoInDrawer(pageElem,user,drawer);requiresDashboardDrawerRefresh=false;}
requiresDrawerRefresh=false;updateLibraryNavLinks(pageElem);});document.querySelector('.mainDrawerPanel #drawer').classList.add('verticalScrollingDrawer');}
function onMainDrawerClosed(){document.body.classList.remove('bodyWithPopupOpen');document.querySelector('.mainDrawerPanel #drawer').classList.remove('verticalScrollingDrawer');}
function closeMainDrawer(){document.getElementsByClassName('mainDrawerPanel')[0].closeDrawer();}
function ensureDrawerStructure(drawer){if(drawer.querySelector('.mainDrawerContent')){return;}
var html='<div class="mainDrawerContent">';html+='<div class="userheader">';html+='</div>';html+='<div class="libraryDrawerContent">';html+='</div>';html+='<div class="dashboardDrawerContent">';html+='</div>';html+='<div class="userFooter">';html+='</div>';html+='</div>';drawer.innerHTML=html;}
function refreshUserInfoInDrawer(user,drawer){var html='';var userAtTop=showUserAtTop();var homeHref=window.ApiClient?'index.html':'selectserver.html';var hasUserImage=user.imageUrl&&AppInfo.enableUserImage;if(userAtTop){html+='<div class="drawerUserPanel">';html+='<div class="drawerUserPanelInner">';html+='<div class="drawerUserPanelContent">';var imgWidth=60;if(hasUserImage){var url=user.imageUrl;if(user.supportsImageParams){url+="&width="+(imgWidth*Math.max(devicePixelRatio||1,2));html+='<div class="lazy drawerUserPanelUserImage" data-src="'+url+'" style="width:'+imgWidth+'px;height:'+imgWidth+'px;"></div>';}}else{html+='<div class="fa fa-user drawerUserPanelUserImage" style="font-size:'+imgWidth+'px;"></div>';}
html+='<div class="drawerUserPanelUserName">';html+=user.name;html+='</div>';html+='</div>';html+='</div>';html+='</div>';html+='<a class="sidebarLink lnkMediaFolder" data-itemid="remote" href="index.html" onclick="return LibraryMenu.onLinkClicked(event, this);"><iron-icon icon="home" class="sidebarLinkIcon" style="color:#2196F3;"></iron-icon><span class="sidebarLinkText">'+Globalize.translate('ButtonHome')+'</span></a>';}else{html+='<div style="margin-top:5px;"></div>';html+='<a class="lnkMediaFolder sidebarLink" href="'+homeHref+'" onclick="return LibraryMenu.onLinkClicked(event, this);">';html+='<div style="background-image:url(\'css/images/mblogoicon.png\');width:'+28+'px;height:'+28+'px;background-size:contain;background-repeat:no-repeat;background-position:center center;border-radius:1000px;vertical-align:middle;margin:0 1.6em 0 1.5em;display:inline-block;"></div>';html+=Globalize.translate('ButtonHome');html+='</a>';}
html+='<a class="sidebarLink lnkMediaFolder" data-itemid="remote" href="nowplaying.html" onclick="return LibraryMenu.onLinkClicked(event, this);"><iron-icon icon="tablet-android" class="sidebarLinkIcon" style="color:#673AB7;"></iron-icon><span class="sidebarLinkText">'+Globalize.translate('ButtonRemote')+'</span></a>';var userHeader=drawer.querySelector('.userheader');userHeader.innerHTML=html;ImageLoader.fillImages(userHeader.getElementsByClassName('lazy'));}
function refreshLibraryInfoInDrawer(user,drawer){var html='';html+='<div class="sidebarDivider"></div>';html+='<div class="libraryMenuOptions">';html+='</div>';drawer.querySelector('.libraryDrawerContent').innerHTML=html;}
function refreshDashboardInfoInDrawer(page,user,drawer){var html='';html+='<div class="sidebarDivider"></div>';html+=Dashboard.getToolsMenuHtml(page);html=html.split('href=').join('onclick="return LibraryMenu.onLinkClicked(event, this);" href=');drawer.querySelector('.dashboardDrawerContent').innerHTML=html;}
function replaceAll(string,find,replace){return string.replace(new RegExp(escapeRegExp(find),'g'),replace);}
function refreshBottomUserInfoInDrawer(user,drawer){var html='';html+='<div class="adminMenuOptions">';html+='<div class="sidebarDivider"></div>';html+='<div class="sidebarHeader">';html+=Globalize.translate('HeaderAdmin');html+='</div>';html+='<a class="sidebarLink lnkMediaFolder lnkManageServer" data-itemid="dashboard" href="#"><iron-icon icon="dashboard" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate('ButtonManageServer')+'</span></a>';html+='<a class="sidebarLink lnkMediaFolder editorViewMenu" data-itemid="editor" onclick="return LibraryMenu.onLinkClicked(event, this);" href="edititemmetadata.html"><iron-icon icon="mode-edit" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate('ButtonMetadataManager')+'</span></a>';if(!$.browser.mobile&&!AppInfo.isTouchPreferred){html+='<a class="sidebarLink lnkMediaFolder" data-itemid="reports" onclick="return LibraryMenu.onLinkClicked(event, this);" href="reports.html"><iron-icon icon="insert-chart" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate('ButtonReports')+'</span></a>';}
html+='</div>';html+='<div class="userMenuOptions">';html+='<div class="sidebarDivider"></div>';html+='<a class="sidebarLink lnkMediaFolder" data-itemid="inbox" onclick="return LibraryMenu.onLinkClicked(event, this);" href="notificationlist.html"><iron-icon icon="inbox" class="sidebarLinkIcon"></iron-icon>';html+=Globalize.translate('ButtonInbox');html+='<div class="btnNotifications"><div class="btnNotificationsInner">0</div></div>';html+='</a>';if(user.localUser&&showUserAtTop()){html+='<a class="sidebarLink lnkMediaFolder lnkMySettings" onclick="return LibraryMenu.onLinkClicked(event, this);" data-itemid="mysync" href="mypreferencesdisplay.html?userId='+user.localUser.Id+'"><iron-icon icon="settings" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate('ButtonSettings')+'</span></a>';}
html+='<a class="sidebarLink lnkMediaFolder lnkMySync" data-itemid="mysync" onclick="return LibraryMenu.onLinkClicked(event, this);" href="mysync.html"><iron-icon icon="refresh" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate('ButtonSync')+'</span></a>';if(Dashboard.isConnectMode()){html+='<a class="sidebarLink lnkMediaFolder" data-itemid="selectserver" onclick="return LibraryMenu.onLinkClicked(event, this);" href="selectserver.html"><span class="fa fa-globe sidebarLinkIcon"></span><span class="sidebarLinkText">'+Globalize.translate('ButtonSelectServer')+'</span></a>';}
if(showUserAtTop()){html+='<a class="sidebarLink lnkMediaFolder" data-itemid="logout" onclick="return LibraryMenu.onLogoutClicked(this);" href="#"><iron-icon icon="lock" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate('ButtonSignOut')+'</span></a>';}
html+='</div>';drawer.querySelector('.userFooter').innerHTML=html;Events.on(drawer.querySelector('.lnkManageServer'),'click',onManageServerClicked);}
function onSidebarLinkClick(){var section=this.getElementsByClassName('sectionName')[0];var text=section?section.innerHTML:this.innerHTML;LibraryMenu.setTitle(text);}
function updateLibraryMenu(user){if(!user){$('.adminMenuOptions').visible(false);$('.lnkMySync').visible(false);$('.userMenuOptions').visible(false);return;}
var userId=Dashboard.getCurrentUserId();var apiClient=window.ApiClient;apiClient.getUserViews(userId).done(function(result){var items=result.Items;var html='';html+='<div class="sidebarHeader">';html+=Globalize.translate('HeaderMedia');html+='</div>';html+=items.map(function(i){var icon='folder';var color='inherit';var itemId=i.Id;if(i.CollectionType=="channels"){itemId="channels";}
else if(i.CollectionType=="livetv"){itemId="livetv";}
if(i.Type=='Channel'){}
if(i.CollectionType=="photos"){icon='photo-library';color="#009688";}
else if(i.CollectionType=="music"||i.CollectionType=="musicvideos"){icon='library-music';color='#FB8521';}
else if(i.CollectionType=="books"){icon='library-books';color="#1AA1E1";}
else if(i.CollectionType=="playlists"){icon='view-list';color="#795548";}
else if(i.CollectionType=="games"){icon='games';color="#F44336";}
else if(i.CollectionType=="movies"){icon='video-library';color='#CE5043';}
else if(i.CollectionType=="channels"||i.Type=='Channel'){icon='videocam';color='#E91E63';}
else if(i.CollectionType=="tvshows"){icon='tv';color="#4CAF50";}
else if(i.CollectionType=="livetv"){icon='live-tv';color="#293AAE";}
return'<a data-itemid="'+itemId+'" class="lnkMediaFolder sidebarLink" onclick="return LibraryMenu.onLinkClicked(event, this);" href="'+getItemHref(i,i.CollectionType)+'"><iron-icon icon="'+icon+'" class="sidebarLinkIcon" style="color:'+color+'"></iron-icon><span class="sectionName">'+i.Name+'</span></a>';}).join('');var libraryMenuOptions=document.querySelector('.libraryMenuOptions');libraryMenuOptions.innerHTML=html;var elem=libraryMenuOptions;$('.sidebarLink',elem).off('click',onSidebarLinkClick).on('click',onSidebarLinkClick);});if(user.Policy.IsAdministrator){$('.adminMenuOptions').visible(true);}else{$('.adminMenuOptions').visible(false);}
if(user.Policy.EnableSync){$('.lnkMySync').visible(true);}else{$('.lnkMySync').visible(false);}}
function showUserAtTop(){return AppInfo.isNativeApp;}
var requiresLibraryMenuRefresh=false;var requiresViewMenuRefresh=false;function onManageServerClicked(){closeMainDrawer();requirejs(["scripts/registrationservices"],function(){RegistrationServices.validateFeature('manageserver').done(function(){Dashboard.navigate('dashboard.html');});});}
function getTopParentId(){return getParameterByName('topParentId')||null;}
window.LibraryMenu={getTopParentId:getTopParentId,onLinkClicked:function(event,link){if(event.which!=1){return true;}
if((new Date().getTime()-lastOpenTime)>200){setTimeout(function(){closeMainDrawer();setTimeout(function(){Dashboard.navigate(link.href);},350);},50);}
return false;},onLogoutClicked:function(){if((new Date().getTime()-lastOpenTime)>200){closeMainDrawer();setTimeout(function(){Dashboard.logout();},350);}
return false;},onHardwareMenuButtonClick:function(){openMainDrawer();},onSettingsClicked:function(event){if(event.which!=1){return true;}
Dashboard.navigate('dashboard.html');return false;},setTitle:function(title){document.querySelector('.libraryMenuButtonText').innerHTML=title;},setBackButtonVisible:function(visible){var backButton=document.querySelector('.headerBackButton');if(backButton){if(visible){backButton.classList.remove('hide');}else{backButton.classList.add('hide');}}},setMenuButtonVisible:function(visible){var mainDrawerButton=document.querySelector('.mainDrawerButton');if(mainDrawerButton){if(!visible&&$.browser.mobile){mainDrawerButton.classList.add('hide');}else{mainDrawerButton.classList.remove('hide');}}}};function updateCastIcon(){var info=MediaController.getPlayerInfo();if(info.isLocalPlayer){$('.btnCast').removeClass('btnActiveCast').each(function(){this.icon='cast';});$('.headerSelectedPlayer').html('');}else{$('.btnCast').addClass('btnActiveCast').each(function(){this.icon='cast-connected';});$('.headerSelectedPlayer').html((info.deviceName||info.name));}}
function updateLibraryNavLinks(page){var isLiveTvPage=page.classList.contains('liveTvPage');var isChannelsPage=page.classList.contains('channelsPage');var isEditorPage=page.classList.contains('metadataEditorPage');var isReportsPage=page.classList.contains('reportsPage');var isMySyncPage=page.classList.contains('mySyncPage');var id=isLiveTvPage||isChannelsPage||isEditorPage||isReportsPage||isMySyncPage||page.classList.contains('allLibraryPage')?'':getTopParentId()||'';var i,length;var elems=document.getElementsByClassName('lnkMediaFolder');for(i=0,length=elems.length;i<length;i++){var lnkMediaFolder=elems[i];var itemId=lnkMediaFolder.getAttribute('data-itemid');if(isChannelsPage&&itemId=='channels'){lnkMediaFolder.classList.add('selectedMediaFolder');}
else if(isLiveTvPage&&itemId=='livetv'){lnkMediaFolder.classList.add('selectedMediaFolder');}
else if(isEditorPage&&itemId=='editor'){lnkMediaFolder.classList.add('selectedMediaFolder');}
else if(isReportsPage&&itemId=='reports'){lnkMediaFolder.classList.add('selectedMediaFolder');}
else if(isMySyncPage&&itemId=='mysync'){lnkMediaFolder.classList.add('selectedMediaFolder');}
else if(id&&itemId==id){lnkMediaFolder.classList.add('selectedMediaFolder');}
else{lnkMediaFolder.classList.remove('selectedMediaFolder');}}
var context=getParameterByName('context');if(context!=='playlists'){elems=page.querySelectorAll('.scopedLibraryViewNav a');for(i=0,length=elems.length;i<length;i++){var lnk=elems[i];var src=lnk.href;if(src.indexOf('#')!=-1){continue;}
src=replaceQueryString(src,'topParentId',id);lnk.href=src;}}}
function onWebSocketMessage(e,data){var msg=data;if(msg.MessageType==="UserConfigurationUpdated"){if(msg.Data.Id==Dashboard.getCurrentUserId()){requiresLibraryMenuRefresh=true;}}}
function buildViewMenuBar(page){var viewMenuBar=document.querySelector('.viewMenuBar');if(page.classList.contains('standalonePage')){if(viewMenuBar){viewMenuBar.classList.add('hide');}
return;}
if(requiresViewMenuRefresh){if(viewMenuBar){viewMenuBar.parentNode.removeChild(viewMenuBar);viewMenuBar=null;}}
if(!viewMenuBar){renderHeader();updateViewMenuBarHeadroom(page,document.querySelector('.viewMenuBar'));updateCastIcon();updateLibraryNavLinks(page);requiresViewMenuRefresh=false;ConnectionManager.user(window.ApiClient).done(addUserToHeader);}else{viewMenuBar.classList.remove('hide');updateLibraryNavLinks(page);updateViewMenuBarHeadroom(page,viewMenuBar);requiresViewMenuRefresh=false;}}
$(document).on('pagebeforeshowready',".page",function(){var page=this;requiresDashboardDrawerRefresh=true;onPageBeforeShowDocumentReady(page);}).on('pageshowready',".page",function(){var page=this;onPageShowDocumentReady(page);}).on('pagebeforehide',".page",function(){var headroomEnabled=document.querySelectorAll('.headroomEnabled');for(var i=0,length=headroomEnabled.length;i<length;i++){headroomEnabled[i].classList.add('headroomDisabled');}});function onPageBeforeShowDocumentReady(page){buildViewMenuBar(page);var isLibraryPage=page.classList.contains('libraryPage');var darkDrawer=false;var title=page.getAttribute('data-title')||page.getAttribute('data-contextname');if(title){LibraryMenu.setTitle(title);}
var titleKey=getParameterByName('titlekey');if(titleKey){LibraryMenu.setTitle(Globalize.translate(titleKey));}
var mainDrawerButton=document.querySelector('.mainDrawerButton');if(mainDrawerButton){if(page.getAttribute('data-menubutton')=='false'&&$.browser.mobile){mainDrawerButton.classList.add('hide');}else{mainDrawerButton.classList.remove('hide');}}
if(isLibraryPage){document.body.classList.add('libraryDocument');document.body.classList.remove('dashboardDocument');document.body.classList.remove('hideMainDrawer');if(AppInfo.enableBottomTabs){page.classList.add('noSecondaryNavPage');document.querySelector('.footer').classList.add('footerOverBottomTabs');}else{$('.libraryViewNav',page).each(function(){initHeadRoom(this);});}}
else if(page.classList.contains('type-interior')){document.body.classList.remove('libraryDocument');document.body.classList.add('dashboardDocument');document.body.classList.remove('hideMainDrawer');}else{document.body.classList.remove('libraryDocument');document.body.classList.remove('dashboardDocument');document.body.classList.add('hideMainDrawer');}
if(!AppInfo.isNativeApp){darkDrawer=true;}
var drawer=document.querySelector('.mainDrawerPanel #drawer');if(drawer){if(darkDrawer){drawer.classList.add('darkDrawer');}else{drawer.classList.remove('darkDrawer');}}
updateBackButton(page);}
function updateBackButton(page){var canGoBack=!page.classList.contains('homePage')&&history.length>0;var backButton=document.querySelector('.headerBackButton');var showBackButton=AppInfo.enableBackButton;if(!showBackButton){showBackButton=page.getAttribute('data-backbutton')=='true';}
if(backButton){if(canGoBack&&showBackButton){backButton.classList.remove('hide');}else{backButton.classList.add('hide');}}
if(canGoBack){}}
function onPageSwipeLeft(e){var target=e.target;if(!target.classList.contains('hiddenScrollX')&&!$(target).parents('.hiddenScrollX').length){history.back();}}
function onPageShowDocumentReady(page){if(!NavHelper.isBack()){var elems=page.querySelectorAll('.libraryViewNav .ui-btn-active');elems=$(elems).filter(':visible');if(elems.length){elems[0].scrollIntoView();window.scrollTo(0,0);}}}
function initHeadRoom(elem){if(!AppInfo.enableHeadRoom){return;}
requirejs(["thirdparty/headroom"],function(){var headroom=new Headroom(elem,{tolerance:{down:40,up:0}});headroom.init();elem.classList.add('headroomEnabled');});}
function initializeApiClient(apiClient){requiresLibraryMenuRefresh=true;Events.off(apiClient,'websocketmessage',onWebSocketMessage);Events.on(apiClient,'websocketmessage',onWebSocketMessage);}
Dashboard.ready(function(){if(window.ApiClient){initializeApiClient(window.ApiClient);}
Events.on(ConnectionManager,'apiclientcreated',function(e,apiClient){initializeApiClient(apiClient);});Events.on(ConnectionManager,'localusersignedin',function(){requiresLibraryMenuRefresh=true;requiresViewMenuRefresh=true;requiresDrawerRefresh=true;});Events.on(ConnectionManager,'localusersignedout',function(){requiresLibraryMenuRefresh=true;requiresViewMenuRefresh=true;requiresDrawerRefresh=true;});Events.on(MediaController,'playerchange',function(){updateCastIcon();});var mainDrawerPanel=document.querySelector('.mainDrawerPanel');Events.on(mainDrawerPanel,'paper-drawer-panel-open',onMainDrawerOpened);Events.on(mainDrawerPanel,'paper-drawer-panel-close',onMainDrawerClosed);});})(window,document,jQuery,window.devicePixelRatio);$.fn.createHoverTouch=function(){var preventHover=false;var timerId;function startTimer(elem){stopTimer();timerId=setTimeout(function(){Events.trigger(elem,'hovertouch');},300);}
function stopTimer(elem){if(timerId){clearTimeout(timerId);timerId=null;}}
return $(this).on('mouseenter',function(){if(preventHover===true){preventHover=false;return;}
startTimer(this);}).on('mouseleave',function(){stopTimer(this);}).on('touchstart',function(){preventHover=true;}).on('click',function(){preventHover=true;if(preventHover){Events.trigger(this,'hovertouch');stopTimer(this);preventHover=false;}});};(function(){var backUrl;$(document).on('pagebeforeshow',".page",function(){if(getWindowUrl()!=backUrl){backUrl=null;}});$(window).on("popstate",function(){backUrl=getWindowUrl();});function isBack(){return backUrl==getWindowUrl();}
window.NavHelper={isBack:isBack};})();(function($,window){function setMirrorModeEnabled(enabled){var val=enabled?'1':'0';appStorage.setItem('displaymirror--'+Dashboard.getCurrentUserId(),val);}
function isMirrorModeEnabled(){return(appStorage.getItem('displaymirror--'+Dashboard.getCurrentUserId())||'')!='0';}
var currentDisplayInfo;function mirrorItem(info){var item=info.item;MediaController.getCurrentPlayer().displayContent({ItemName:item.Name,ItemId:item.Id,ItemType:item.Type,Context:info.context});}
function mirrorIfEnabled(info){if(isMirrorModeEnabled()){var player=MediaController.getPlayerInfo();if(!player.isLocalPlayer&&player.supportedCommands.indexOf('DisplayContent')!=-1){mirrorItem(info);}}}
function monitorPlayer(player){Events.on(player,'playbackstart',function(e,state){var info={QueueableMediaTypes:state.NowPlayingItem.MediaType,ItemId:state.NowPlayingItem.Id,NowPlayingItem:state.NowPlayingItem};info=$.extend(info,state.PlayState);ApiClient.reportPlaybackStart(info);});Events.on(player,'playbackstop',function(e,state){var stopInfo={itemId:state.NowPlayingItem.Id,mediaSourceId:state.PlayState.MediaSourceId,positionTicks:state.PlayState.PositionTicks};if(state.PlayState.LiveStreamId){stopInfo.LiveStreamId=state.PlayState.LiveStreamId;}
if(state.PlayState.PlaySessionId){stopInfo.PlaySessionId=state.PlayState.PlaySessionId;}
ApiClient.reportPlaybackStopped(stopInfo);});}
function getTargetsHtml(targets){var playerInfo=MediaController.getPlayerInfo();var html='';html+='<form>';html+='<h3>'+Globalize.translate('HeaderSelectPlayer')+'</h3>';html+='<fieldset data-role="controlgroup" data-mini="true">';var checkedHtml;for(var i=0,length=targets.length;i<length;i++){var target=targets[i];var id='radioPlayerTarget'+i;var isChecked=target.id==playerInfo.id;checkedHtml=isChecked?' checked="checked"':'';var mirror=(!target.isLocalPlayer&&target.supportedCommands.indexOf('DisplayContent')!=-1)?'true':'false';html+='<input type="radio" class="radioSelectPlayerTarget" name="radioSelectPlayerTarget" data-mirror="'+mirror+'" data-commands="'+target.supportedCommands.join(',')+'" data-mediatypes="'+target.playableMediaTypes.join(',')+'" data-playername="'+target.playerName+'" data-targetid="'+target.id+'" data-targetname="'+target.name+'" data-devicename="'+(target.deviceName||'')+'" id="'+id+'" value="'+target.id+'"'+checkedHtml+'>';html+='<label for="'+id+'" style="font-weight:normal;">'+target.name;if(target.appName&&target.appName!=target.name){html+='<br/><span>'+target.appName+'</span>';}
html+='</label>';}
html+='</fieldset>';html+='<p class="fieldDescription">'+Globalize.translate('LabelAllPlaysSentToPlayer')+'</p>';checkedHtml=isMirrorModeEnabled()?' checked="checked"':'';html+='<div style="margin-top:1.5em;" class="fldMirrorMode"><label for="chkEnableMirrorMode">Enable display mirroring</label><input type="checkbox" class="chkEnableMirrorMode" id="chkEnableMirrorMode" data-mini="true"'+checkedHtml+' /></div>';html+='</form>';return html;}
function showPlayerSelection(){var promise=MediaController.getTargets();var html='<div data-role="panel" data-position="right" data-display="overlay" data-position-fixed="true" id="playerSelectionPanel" data-theme="a">';html+='<div class="players"></div>';html+='<br/>';html+='<p><a href="nowplaying.html" class="clearLink"><paper-button raised class="block"><iron-icon icon="tablet-android"></iron-icon><span>'+Globalize.translate('ButtonRemoteControl')+'</span></paper-button></a></p>';html+='</div>';$(document.body).append(html);require(['jqmicons']);var elem=$('#playerSelectionPanel').panel({}).trigger('create').panel("open").on("panelclose",function(){$(this).off("panelclose").remove();});promise.done(function(targets){$('.players',elem).html(getTargetsHtml(targets)).trigger('create');$('.chkEnableMirrorMode',elem).on('change',function(){setMirrorModeEnabled(this.checked);if(this.checked&&currentDisplayInfo){mirrorItem(currentDisplayInfo);}});$('.radioSelectPlayerTarget',elem).off('change').on('change',function(){var supportsMirror=this.getAttribute('data-mirror')=='true';if(supportsMirror){$('.fldMirrorMode',elem).show();}else{$('.fldMirrorMode',elem).hide();}
var playerName=this.getAttribute('data-playername');var targetId=this.getAttribute('data-targetid');var targetName=this.getAttribute('data-targetname');var deviceName=this.getAttribute('data-deviceName');var playableMediaTypes=this.getAttribute('data-mediatypes').split(',');var supportedCommands=this.getAttribute('data-commands').split(',');MediaController.trySetActivePlayer(playerName,{id:targetId,name:targetName,playableMediaTypes:playableMediaTypes,supportedCommands:supportedCommands,deviceName:deviceName});if(currentDisplayInfo){mirrorIfEnabled(currentDisplayInfo);}});if($('.radioSelectPlayerTarget:checked',elem)[0].getAttribute('data-mirror')=='true'){$('.fldMirrorMode',elem).show();}else{$('.fldMirrorMode',elem).hide();}});}
function bindKeys(controller){var self=this;var keyResult={};self.keyBinding=function(e){if(bypass())return;Logger.log("keyCode",e.keyCode);if(keyResult[e.keyCode]){e.preventDefault();keyResult[e.keyCode](e);}};self.keyPrevent=function(e){if(bypass())return;var codes=[32,38,40,37,39,81,77,65,84,83,70];if(codes.indexOf(e.keyCode)!=-1){e.preventDefault();}};keyResult[32]=function(){var player=controller.getCurrentPlayer();player.getPlayerState().done(function(result){var state=result;if(state.NowPlayingItem&&state.PlayState){if(state.PlayState.IsPaused){player.unpause();}else{player.pause();}}});};var bypass=function(){var active=document.activeElement;var type=active.type||active.tagName.toLowerCase();return(type==="text"||type==="select"||type==="textarea"||type=="password");};}
function mediaController(){var self=this;var currentPlayer;var currentTargetInfo;var players=[];var keys=new bindKeys(self);$(window).on("keydown",keys.keyBinding).on("keypress",keys.keyPrevent).on("keyup",keys.keyPrevent);self.registerPlayer=function(player){players.push(player);if(player.isLocalPlayer){monitorPlayer(player);}};self.getPlayerInfo=function(){var player=currentPlayer||{};var target=currentTargetInfo||{};return{name:player.name,isLocalPlayer:player.isLocalPlayer,id:target.id,deviceName:target.deviceName,playableMediaTypes:target.playableMediaTypes,supportedCommands:target.supportedCommands};};function triggerPlayerChange(newPlayer,newTarget){$(self).trigger('playerchange',[newPlayer,newTarget]);}
self.setActivePlayer=function(player,targetInfo){if(typeof(player)==='string'){player=players.filter(function(p){return p.name==player;})[0];}
if(!player){throw new Error('null player');}
currentPairingId=null;currentPlayer=player;currentTargetInfo=targetInfo;Logger.log('Active player: '+JSON.stringify(currentTargetInfo));triggerPlayerChange(player,targetInfo);};var currentPairingId=null;self.trySetActivePlayer=function(player,targetInfo){if(typeof(player)==='string'){player=players.filter(function(p){return p.name==player;})[0];}
if(!player){throw new Error('null player');}
if(currentPairingId==targetInfo.id){return;}
currentPairingId=targetInfo.id;player.tryPair(targetInfo).done(function(){currentPlayer=player;currentTargetInfo=targetInfo;Logger.log('Active player: '+JSON.stringify(currentTargetInfo));triggerPlayerChange(player,targetInfo);});};self.setDefaultPlayerActive=function(){var player=self.getDefaultPlayer();var target=player.getTargets()[0];self.setActivePlayer(player,target);};self.removeActivePlayer=function(name){if(self.getPlayerInfo().name==name){self.setDefaultPlayerActive();}};self.removeActiveTarget=function(id){if(self.getPlayerInfo().id==id){self.setDefaultPlayerActive();}};self.getPlayers=function(){return players;};self.getTargets=function(){var deferred=$.Deferred();var promises=players.map(function(p){return p.getTargets();});$.when.apply($,promises).done(function(){var targets=[];for(var i=0;i<arguments.length;i++){var subTargets=arguments[i];for(var j=0;j<subTargets.length;j++){targets.push(subTargets[j]);}}
targets=targets.sort(function(a,b){var aVal=a.isLocalPlayer?0:1;var bVal=b.isLocalPlayer?0:1;aVal=aVal.toString()+a.name;bVal=bVal.toString()+b.name;return aVal.localeCompare(bVal);});deferred.resolveWith(null,[targets]);});return deferred.promise();};function doWithPlaybackValidation(fn){requirejs(["scripts/registrationservices"],function(){RegistrationServices.validateFeature('playback').done(fn);});}
self.play=function(options){doWithPlaybackValidation(function(){if(typeof(options)==='string'){options={ids:[options]};}
currentPlayer.play(options);});};self.shuffle=function(id){doWithPlaybackValidation(function(){currentPlayer.shuffle(id);});};self.instantMix=function(id){doWithPlaybackValidation(function(){currentPlayer.instantMix(id);});};self.queue=function(options){if(typeof(options)==='string'){options={ids:[options]};}
currentPlayer.queue(options);};self.queueNext=function(options){if(typeof(options)==='string'){options={ids:[options]};}
currentPlayer.queueNext(options);};self.canPlay=function(item){return self.canPlayByAttributes(item.Type,item.MediaType,item.PlayAccess,item.LocationType);};self.canPlayByAttributes=function(itemType,mediaType,playAccess,locationType){if(playAccess!='Full'){return false;}
if(locationType=="Virtual"){return false;}
if(itemType=="Program"){return false;}
if(itemType=="MusicGenre"||itemType=="Season"||itemType=="Series"||itemType=="BoxSet"||itemType=="MusicAlbum"||itemType=="MusicArtist"||itemType=="Playlist"){return true;}
return self.getPlayerInfo().playableMediaTypes.indexOf(mediaType)!=-1;};self.canQueueMediaType=function(mediaType,itemType){if(itemType=='MusicAlbum'||itemType=='MusicArtist'||itemType=='MusicGenre'){mediaType='Audio';}
return currentPlayer.canQueueMediaType(mediaType);};self.getLocalPlayer=function(){return currentPlayer.isLocalPlayer?currentPlayer:players.filter(function(p){return p.isLocalPlayer;})[0];};self.getDefaultPlayer=function(){return currentPlayer.isLocalPlayer?currentPlayer:players.filter(function(p){return p.isDefaultPlayer;})[0];};self.getCurrentPlayer=function(){return currentPlayer;};self.pause=function(){currentPlayer.pause();};self.stop=function(){currentPlayer.stop();};self.unpause=function(){currentPlayer.unpause();};self.seek=function(position){currentPlayer.seek(position);};self.currentPlaylistIndex=function(i){currentPlayer.currentPlaylistIndex(i);};self.removeFromPlaylist=function(i){currentPlayer.removeFromPlaylist(i);};self.nextTrack=function(){currentPlayer.nextTrack();};self.previousTrack=function(){currentPlayer.previousTrack();};self.mute=function(){currentPlayer.mute();};self.unMute=function(){currentPlayer.unMute();};self.toggleMute=function(){currentPlayer.toggleMute();};self.volumeDown=function(){currentPlayer.volumeDown();};self.volumeUp=function(){currentPlayer.volumeUp();};self.playlist=function(){return currentPlayer.playlist||[];};self.sendCommand=function(cmd,player){player=player||self.getLocalPlayer();Logger.log('MediaController received command: '+cmd.Name);switch(cmd.Name){case'VolumeUp':player.volumeUp();break;case'VolumeDown':player.volumeDown();break;case'Mute':player.mute();break;case'Unmute':player.unMute();break;case'ToggleMute':player.toggleMute();break;case'SetVolume':player.setVolume(cmd.Arguments.Volume);break;case'SetAudioStreamIndex':player.setAudioStreamIndex(parseInt(cmd.Arguments.Index));break;case'SetSubtitleStreamIndex':player.setSubtitleStreamIndex(parseInt(cmd.Arguments.Index));break;case'ToggleFullscreen':player.toggleFullscreen();break;default:{if(player.isLocalPlayer){Dashboard.processGeneralCommand(cmd);}else{player.sendCommand(cmd);}
break;}}};self.getNowPlayingNameHtml=function(nowPlayingItem,includeNonNameInfo){var topText=nowPlayingItem.Name;if(nowPlayingItem.MediaType=='Video'){if(nowPlayingItem.IndexNumber!=null){topText=nowPlayingItem.IndexNumber+" - "+topText;}
if(nowPlayingItem.ParentIndexNumber!=null){topText=nowPlayingItem.ParentIndexNumber+"."+topText;}}
var bottomText='';if(nowPlayingItem.Artists&&nowPlayingItem.Artists.length){bottomText=topText;topText=nowPlayingItem.Artists[0];}
else if(nowPlayingItem.SeriesName||nowPlayingItem.Album){bottomText=topText;topText=nowPlayingItem.SeriesName||nowPlayingItem.Album;}
else if(nowPlayingItem.ProductionYear&&includeNonNameInfo!==false){bottomText=nowPlayingItem.ProductionYear;}
return bottomText?topText+'<br/>'+bottomText:topText;};self.showPlaybackInfoErrorMessage=function(errorCode){setTimeout(function(){Dashboard.alert({message:Globalize.translate('MessagePlaybackError'+errorCode),title:Globalize.translate('HeaderPlaybackError')});},300);};function getPlaybackInfoFromLocalMediaSource(itemId,deviceProfile,startPosition,mediaSource){mediaSource.SupportsDirectPlay=true;return{MediaSources:[mediaSource],PlaySessionId:new Date().getTime().toString()};}
self.getPlaybackInfo=function(itemId,deviceProfile,startPosition,mediaSource,audioStreamIndex,subtitleStreamIndex,liveStreamId){var deferred=DeferredBuilder.Deferred();require(['localassetmanager'],function(){var serverInfo=ApiClient.serverInfo();if(serverInfo.Id){var localMediaSource=window.LocalAssetManager.getLocalMediaSource(serverInfo.Id,itemId);if(localMediaSource&&(!mediaSource||mediaSource.Id==localMediaSource.Id)){var playbackInfo=getPlaybackInfoFromLocalMediaSource(itemId,deviceProfile,startPosition,localMediaSource);deferred.resolveWith(null,[playbackInfo]);return;}}
self.getPlaybackInfoInternal(itemId,deviceProfile,startPosition,mediaSource,audioStreamIndex,subtitleStreamIndex,liveStreamId).done(function(result){deferred.resolveWith(null,[result]);}).fail(function(){deferred.reject();});});return deferred.promise();}
self.getPlaybackInfoInternal=function(itemId,deviceProfile,startPosition,mediaSource,audioStreamIndex,subtitleStreamIndex,liveStreamId){var postData={DeviceProfile:deviceProfile};var query={UserId:Dashboard.getCurrentUserId(),StartTimeTicks:startPosition||0};if(audioStreamIndex!=null){query.AudioStreamIndex=audioStreamIndex;}
if(subtitleStreamIndex!=null){query.SubtitleStreamIndex=subtitleStreamIndex;}
if(mediaSource){query.MediaSourceId=mediaSource.Id;}
if(liveStreamId){query.LiveStreamId=liveStreamId;}
return ApiClient.ajax({url:ApiClient.getUrl('Items/'+itemId+'/PlaybackInfo',query),type:'POST',data:JSON.stringify(postData),contentType:"application/json",dataType:"json"});}
self.getLiveStream=function(itemId,playSessionId,deviceProfile,startPosition,mediaSource,audioStreamIndex,subtitleStreamIndex){var postData={DeviceProfile:deviceProfile,OpenToken:mediaSource.OpenToken};var query={UserId:Dashboard.getCurrentUserId(),StartTimeTicks:startPosition||0,ItemId:itemId,PlaySessionId:playSessionId};if(audioStreamIndex!=null){query.AudioStreamIndex=audioStreamIndex;}
if(subtitleStreamIndex!=null){query.SubtitleStreamIndex=subtitleStreamIndex;}
return ApiClient.ajax({url:ApiClient.getUrl('LiveStreams/Open',query),type:'POST',data:JSON.stringify(postData),contentType:"application/json",dataType:"json"});};self.supportsDirectPlay=function(mediaSource){if(mediaSource.SupportsDirectPlay&&mediaSource.Protocol=='Http'&&!mediaSource.RequiredHttpHeaders.length){return true;}
if(mediaSource.SupportsDirectPlay&&mediaSource.Protocol=='File'){return FileSystemBridge.fileExists(mediaSource.Path);}
return false;};self.showPlayerSelection=showPlayerSelection;}
window.MediaController=new mediaController();function onWebSocketMessageReceived(e,msg){var localPlayer;if(msg.MessageType==="Play"){localPlayer=MediaController.getLocalPlayer();if(msg.Data.PlayCommand=="PlayNext"){localPlayer.queueNext({ids:msg.Data.ItemIds});}
else if(msg.Data.PlayCommand=="PlayLast"){localPlayer.queue({ids:msg.Data.ItemIds});}
else{localPlayer.play({ids:msg.Data.ItemIds,startPositionTicks:msg.Data.StartPositionTicks});}}
else if(msg.MessageType==="ServerShuttingDown"){MediaController.setDefaultPlayerActive();}
else if(msg.MessageType==="ServerRestarting"){MediaController.setDefaultPlayerActive();}
else if(msg.MessageType==="Playstate"){localPlayer=MediaController.getLocalPlayer();if(msg.Data.Command==='Stop'){localPlayer.stop();}
else if(msg.Data.Command==='Pause'){localPlayer.pause();}
else if(msg.Data.Command==='Unpause'){localPlayer.unpause();}
else if(msg.Data.Command==='Seek'){localPlayer.seek(msg.Data.SeekPositionTicks);}
else if(msg.Data.Command==='NextTrack'){localPlayer.nextTrack();}
else if(msg.Data.Command==='PreviousTrack'){localPlayer.previousTrack();}}
else if(msg.MessageType==="GeneralCommand"){var cmd=msg.Data;localPlayer=MediaController.getLocalPlayer();MediaController.sendCommand(cmd,localPlayer);}}
function initializeApiClient(apiClient){$(apiClient).off("websocketmessage",onWebSocketMessageReceived).on("websocketmessage",onWebSocketMessageReceived);}
Dashboard.ready(function(){if(window.ApiClient){initializeApiClient(window.ApiClient);}
$(ConnectionManager).on('apiclientcreated',function(e,apiClient){initializeApiClient(apiClient);});});function onCastButtonClicked(){showPlayerSelection();}
$(document).on('headercreated',function(){$('.btnCast').off('click',onCastButtonClicked).on('click',onCastButtonClicked);}).on('pagebeforeshow',".page",function(){var page=this;currentDisplayInfo=null;}).on('displayingitem',".libraryPage",function(e,info){currentDisplayInfo=info;mirrorIfEnabled(info);});})(jQuery,window);(function($,document){function getElement(){var elem=document.documentElement;elem.classList.add('backdropContainer');return elem;}
function clearBackdrop(){var elem=document.documentElement;elem.classList.remove('backdropContainer');elem.style.backgroundImage='';}
function getRandom(min,max){return Math.floor(Math.random()*(max-min)+min);}
function getBackdropItemIds(apiClient,userId,types,parentId){var key='backdrops2_'+userId+(types||'')+(parentId||'');var deferred=$.Deferred();var data=sessionStore.getItem(key);if(data){Logger.log('Found backdrop id list in cache. Key: '+key)
data=JSON.parse(data);deferred.resolveWith(null,[data]);}else{var options={SortBy:"IsFavoriteOrLiked,Random",Limit:20,Recursive:true,IncludeItemTypes:types,ImageTypes:"Backdrop",ParentId:parentId};apiClient.getItems(Dashboard.getCurrentUserId(),options).done(function(result){var images=result.Items.map(function(i){return{id:i.Id,tag:i.BackdropImageTags[0]};});sessionStore.setItem(key,JSON.stringify(images));deferred.resolveWith(null,[images]);});}
return deferred.promise();}
function setBackdropImage(elem,url){ImageLoader.lazyImage(elem,url);}
function showBackdrop(type,parentId){var apiClient=window.ApiClient;if(!apiClient){return;}
getBackdropItemIds(apiClient,Dashboard.getCurrentUserId(),type,parentId).done(function(images){if(images.length){var index=getRandom(0,images.length-1);var item=images[index];var screenWidth=$(window).width();var imgUrl=apiClient.getScaledImageUrl(item.id,{type:"Backdrop",tag:item.tag,maxWidth:screenWidth,quality:50});setBackdropImage(getElement(),imgUrl);}else{clearBackdrop();}});}
function setDefault(page){getElement().style.backgroundImage="url(css/images/splash.jpg)";page.classList.add('backdropPage');page.classList.add('staticBackdropPage');}
function isEnabledByDefault(){if(AppInfo.hasLowImageBandwidth){return false;}
if($.browser.mobile){return false;}
return!AppInfo.isTouchPreferred;}
function enabled(){var userId=Dashboard.getCurrentUserId();var val=appStorage.getItem('enableBackdrops-'+userId);return val=='1'||(val!='0'&&isEnabledByDefault());}
function setBackdrops(page,items){var images=items.map(function(i){if(i.BackdropImageTags.length>0){return{id:i.Id,tag:i.BackdropImageTags[0]};}
if(i.ParentBackdropItemId&&i.ParentBackdropImageTags&&i.ParentBackdropImageTags.length){return{id:i.ParentBackdropItemId,tag:i.ParentBackdropImageTags[0]};}
return null;}).filter(function(i){return i!=null;});if(images.length){page.classList.add('backdropPage');var index=getRandom(0,images.length-1);var item=images[index];var screenWidth=$(window).width();var imgUrl=ApiClient.getScaledImageUrl(item.id,{type:"Backdrop",tag:item.tag,maxWidth:screenWidth,quality:50});setBackdropImage(getElement(),imgUrl);}else{page.classList.remove('backdropPage');}}
function setBackdropUrl(page,url){if(url){page.classList.add('backdropPage');setBackdropImage(getElement(),url);}else{page.classList.remove('backdropPage');clearBackdrop();}}
Events.on(document,'pagebeforeshowready',".page",function(){var page=this;if(!page.classList.contains('staticBackdropPage')){if(page.classList.contains('backdropPage')){if(enabled()){var type=page.getAttribute('data-backdroptype');var parentId=page.classList.contains('globalBackdropPage')?'':LibraryMenu.getTopParentId();showBackdrop(type,parentId);}else{page.classList.remove('backdropPage');clearBackdrop();}}else{clearBackdrop();}}});window.Backdrops={setBackdrops:setBackdrops,setBackdropUrl:setBackdropUrl,setDefault:setDefault};})(jQuery,document);(function(window,$){var currentDialogOptions;function submitJob(userId,syncOptions,form){if(!userId){throw new Error('userId cannot be null');}
if(!syncOptions){throw new Error('syncOptions cannot be null');}
if(!form){throw new Error('form cannot be null');}
var target=$('#selectSyncTarget',form).val();if(!target){Dashboard.alert(Globalize.translate('MessagePleaseSelectDeviceToSyncTo'));return;}
var options={userId:userId,TargetId:target,ParentId:syncOptions.ParentId,Category:syncOptions.Category};setJobValues(options,form);if(syncOptions.items&&syncOptions.items.length){options.ItemIds=(syncOptions.items||[]).map(function(i){return i.Id||i;}).join(',');}
ApiClient.ajax({type:"POST",url:ApiClient.getUrl("Sync/Jobs"),data:JSON.stringify(options),contentType:"application/json"}).done(function(){$('.syncPanel').panel('close');$(window.SyncManager).trigger('jobsubmit');Dashboard.alert(Globalize.translate('MessageSyncJobCreated'));});}
function setJobValues(job,form){var bitrate=$('#txtBitrate',form).val()||null;if(bitrate){bitrate=parseFloat(bitrate)*1000000;}
job.Name=$('#txtSyncJobName',form).val();job.Quality=$('#selectQuality',form).val()||null;job.Profile=$('#selectProfile',form).val()||null;job.Bitrate=bitrate;job.ItemLimit=$('#txtItemLimit',form).val()||null;job.SyncNewContent=$('#chkSyncNewContent',form).checked();job.UnwatchedOnly=$('#chkUnwatchedOnly',form).checked();}
function renderForm(options){var elem=options.elem;var dialogOptions=options.dialogOptions;var targets=dialogOptions.Targets;var html='';if(options.showName||dialogOptions.Options.indexOf('Name')!=-1){html+='<p>';html+='<label for="txtSyncJobName">'+Globalize.translate('LabelSyncJobName')+'</label>';html+='<input type="text" id="txtSyncJobName" class="txtSyncJobName" required="required" />';html+='</p>';}
html+='<div>';html+='<label for="selectSyncTarget">'+Globalize.translate('LabelSyncTo')+'</label>';if(options.readOnlySyncTarget){html+='<input type="text" id="selectSyncTarget" readonly="readonly" />';}else{html+='<select id="selectSyncTarget" required="required" data-mini="true">';html+=targets.map(function(t){var isSelected=t.Id==AppInfo.deviceId;var selectedHtml=isSelected?' selected="selected"':'';return'<option'+selectedHtml+' value="'+t.Id+'">'+t.Name+'</option>';}).join('');html+='</select>';if(!targets.length){html+='<div class="fieldDescription">'+Globalize.translate('LabelSyncNoTargetsHelp')+'</div>';html+='<div class="fieldDescription"><a href="https://github.com/MediaBrowser/Wiki/wiki/Sync" target="_blank">'+Globalize.translate('ButtonLearnMore')+'</a></div>';}}
html+='</div>';html+='<div class="fldProfile" style="display:none;">';html+='<br/>';html+='<label for="selectProfile">'+Globalize.translate('LabelProfile')+'</label>';html+='<select id="selectProfile" data-mini="true">';html+='</select>';html+='<div class="fieldDescription profileDescription"></div>';html+='</div>';html+='<div class="fldQuality" style="display:none;">';html+='<br/>';html+='<label for="selectQuality">'+Globalize.translate('LabelQuality')+'</label>';html+='<select id="selectQuality" data-mini="true" required="required">';html+='</select>';html+='<div class="fieldDescription qualityDescription"></div>';html+='</div>';html+='<div class="fldBitrate" style="display:none;">';html+='<br/>';html+='<div>';html+='<label for="txtBitrate">'+Globalize.translate('LabelBitrateMbps')+'</label>';html+='<input type="number" id="txtBitrate" step=".1" min=".1" />';html+='</div>';html+='</div>';if(dialogOptions.Options.indexOf('UnwatchedOnly')!=-1){html+='<br/>';html+='<div>';html+='<label for="chkUnwatchedOnly">'+Globalize.translate('OptionSyncUnwatchedVideosOnly')+'</label>';html+='<input type="checkbox" id="chkUnwatchedOnly" data-mini="true" />';html+='<div class="fieldDescription">'+Globalize.translate('OptionSyncUnwatchedVideosOnlyHelp')+'</div>';html+='</div>';}
if(dialogOptions.Options.indexOf('SyncNewContent')!=-1||dialogOptions.Options.indexOf('ItemLimit')!=-1){html+='<br/>';html+='<div data-role="collapsible" data-mini="true">';html+='<h2>'+Globalize.translate('HeaderAdvanced')+'</h2>';html+='<div style="padding:0 0 1em;">';if(dialogOptions.Options.indexOf('SyncNewContent')!=-1){html+='<br/>';html+='<div>';html+='<label for="chkSyncNewContent">'+Globalize.translate('OptionAutomaticallySyncNewContent')+'</label>';html+='<input type="checkbox" id="chkSyncNewContent" data-mini="true" checked="checked" />';html+='<div class="fieldDescription">'+Globalize.translate('OptionAutomaticallySyncNewContentHelp')+'</div>';html+='</div>';}
if(dialogOptions.Options.indexOf('ItemLimit')!=-1){html+='<br/>';html+='<div>';html+='<label for="txtItemLimit">'+Globalize.translate('LabelItemLimit')+'</label>';html+='<input type="number" id="txtItemLimit" step="1" min="1" />';html+='<div class="fieldDescription">'+Globalize.translate('LabelItemLimitHelp')+'</div>';html+='</div>';}
html+='</div>';html+='</div>';}
$(elem).html(html).trigger('create');$('#selectSyncTarget',elem).on('change',function(){loadQualityOptions(elem,this.value,options.dialogOptionsFn);}).trigger('change');$('#selectProfile',elem).on('change',function(){onProfileChange(elem,this.value);}).trigger('change');$('#selectQuality',elem).on('change',function(){onQualityChange(elem,this.value);}).trigger('change');}
function showSyncMenu(options){var userId=Dashboard.getCurrentUserId();var dialogOptionsQuery={UserId:userId,ItemIds:(options.items||[]).map(function(i){return i.Id||i;}).join(','),ParentId:options.ParentId,Category:options.Category};ApiClient.getJSON(ApiClient.getUrl('Sync/Options',dialogOptionsQuery)).done(function(dialogOptions){currentDialogOptions=dialogOptions;var html='<div data-role="panel" data-position="right" data-display="overlay" class="syncPanel" data-position-fixed="true" data-theme="a">';html+='<div>';html+='<form class="formSubmitSyncRequest">';html+='<div style="margin:1em 0 1.5em;">';html+='<h1 style="margin: 0;display:inline-block;vertical-align:middle;">'+Globalize.translate('SyncMedia')+'</h1>';html+='<a href="https://github.com/MediaBrowser/Wiki/wiki/Sync" target="_blank" class="clearLink" style="margin-top:0;display:inline-block;vertical-align:middle;margin-left:1em;"><paper-button raised class="secondary mini"><i class="fa fa-info-circle"></i>'+Globalize.translate('ButtonHelp')+'</paper-button></a>';html+='</div>';html+='<div class="formFields"></div>';html+='<p>';html+='<button type="submit" data-role="none" class="clearButton"><paper-button raised class="submit block"><iron-icon icon="refresh"></iron-icon><span>'+Globalize.translate('ButtonSync')+'</span></paper-button></button>';html+='</p>';html+='</form>';html+='</div>';html+='</div>';$(document.body).append(html);require(['paperbuttonstyle']);var elem=$('.syncPanel').panel({}).trigger('create').panel("open").on("panelclose",function(){$(this).off("panelclose").remove();});$('form',elem).on('submit',function(){submitJob(userId,options,this);return false;});renderForm({elem:$('.formFields',elem),dialogOptions:dialogOptions,dialogOptionsFn:getTargetDialogOptionsFn(dialogOptionsQuery)});});require(['jqmicons']);}
function getTargetDialogOptionsFn(query){return function(targetId){query.TargetId=targetId;return ApiClient.getJSON(ApiClient.getUrl('Sync/Options',query));};}
function onProfileChange(form,profileId){var options=currentDialogOptions||{};var option=(options.ProfileOptions||[]).filter(function(o){return o.Id==profileId;})[0];if(option){$('.profileDescription',form).html(option.Description||'');setQualityFieldVisible(form,options.QualityOptions.length>0&&option.EnableQualityOptions&&options.Options.indexOf('Quality')!=-1);}else{$('.profileDescription',form).html('');setQualityFieldVisible(form,options.QualityOptions.length>0&&options.Options.indexOf('Quality')!=-1);}}
function onQualityChange(form,qualityId){var options=currentDialogOptions||{};var option=(options.QualityOptions||[]).filter(function(o){return o.Id==qualityId;})[0];if(option){$('.qualityDescription',form).html(option.Description||'');}else{$('.qualityDescription',form).html('');}
if(qualityId=='custom'){$('.fldBitrate',form).show();$('#txtBitrate',form).attr('required','required');}else{$('.fldBitrate',form).hide();$('#txtBitrate',form).removeAttr('required').val('');}}
function loadQualityOptions(form,targetId,dialogOptionsFn){dialogOptionsFn(targetId).done(function(options){renderTargetDialogOptions(form,options);});}
function setQualityFieldVisible(form,visible){if(visible){$('.fldQuality',form).show();$('#selectQuality',form).attr('required','required');}else{$('.fldQuality',form).hide();$('#selectQuality',form).removeAttr('required');}}
function renderTargetDialogOptions(form,options){currentDialogOptions=options;if(options.ProfileOptions.length&&options.Options.indexOf('Profile')!=-1){$('.fldProfile',form).show();$('#selectProfile',form).attr('required','required');}else{$('.fldProfile',form).hide();$('#selectProfile',form).removeAttr('required');}
setQualityFieldVisible(options.QualityOptions.length>0);$('#selectProfile',form).html(options.ProfileOptions.map(function(o){var selectedAttribute=o.IsDefault?' selected="selected"':'';return'<option value="'+o.Id+'"'+selectedAttribute+'>'+o.Name+'</option>';}).join('')).trigger('change').selectmenu('refresh');$('#selectQuality',form).html(options.QualityOptions.map(function(o){var selectedAttribute=o.IsDefault?' selected="selected"':'';return'<option value="'+o.Id+'"'+selectedAttribute+'>'+o.Name+'</option>';}).join('')).trigger('change').selectmenu('refresh');}
function isAvailable(item,user){return item.SupportsSync;}
window.SyncManager={showMenu:showSyncMenu,isAvailable:isAvailable,renderForm:renderForm,setJobValues:setJobValues};function showSyncButtonsPerUser(page){var apiClient=window.ApiClient;if(!apiClient||!apiClient.getCurrentUserId()){return;}
Dashboard.getCurrentUser().done(function(user){$('.categorySyncButton',page).visible(user.Policy.EnableSync);});}
function onCategorySyncButtonClick(page,button){var category=button.getAttribute('data-category');var parentId=LibraryMenu.getTopParentId();SyncManager.showMenu({ParentId:parentId,Category:category});}
$(document).on('pageinitdepends',".libraryPage",function(){var page=this;$('.categorySyncButton',page).on('click',function(){onCategorySyncButtonClick(page,this);});}).on('pageshowready',".libraryPage",function(){var page=this;if(!Dashboard.isServerlessPage()){showSyncButtonsPerUser(page);}});})(window,jQuery);(function($,document){var lastPlaylistId='';function redirectToPlaylist(id){var context=getParameterByName('context');ApiClient.getItem(Dashboard.getCurrentUserId(),id).done(function(item){Dashboard.navigate(LibraryBrowser.getHref(item,context));});}
function onAddToPlaylistFormSubmit(){Dashboard.showLoadingMsg();var panel=$(this).parents('.newPlaylistPanel');var playlistId=$('select.selectPlaylistToAddTo',panel).val();if(playlistId){lastPlaylistId=playlistId;addToPlaylist(panel,playlistId);}else{createPlaylist(panel);}
return false;}
function getNewPlaylistPanel(){Dashboard.showLoadingMsg();$('.newPlaylistPanel').panel('destroy').remove();var html='<div data-role="panel" data-position="right" data-display="overlay" class="newPlaylistPanel" data-position-fixed="true" data-theme="a">';html+='<h3>'+Globalize.translate('HeaderAddToPlaylist')+'</h3>';html+='<br />';html+='<form class="addToPlaylistForm">';var selectId='selectPlaylistToAddTo'+new Date().getTime();html+='<div>';html+='<label for="'+selectId+'">'+Globalize.translate('LabelSelectPlaylist')+'</label>';html+='<select id="'+selectId+'" class="selectPlaylistToAddTo" data-mini="true">';html+='</select>';html+='</div>';html+='<br />';html+='<div class="fldNewPlaylist" style="display:none;">';html+='<label for="txtNewPlaylistName">'+Globalize.translate('LabelName')+'</label>';html+='<input type="text" id="txtNewPlaylistName" />';html+='</div>';html+='<p>';html+='<input class="fldSelectedItemIds" type="hidden" />';html+='<button type="submit" data-icon="plus" data-mini="true" data-theme="b">'+Globalize.translate('ButtonSubmit')+'</button>';html+='</p>';html+='</form>';html+='</div>';$(document.body).append(html);var elem=$('.newPlaylistPanel').panel({}).trigger('create').on("panelclose",function(){$(this).off("panelclose").remove();});var select=$('#'+selectId,elem).on('change',function(){if(this.value){$('.fldNewPlaylist',elem).hide();$('input',elem).removeAttr('required');}else{$('.fldNewPlaylist',elem).show();$('input',elem).attr('required','required');}}).trigger('change');ApiClient.getItems(Dashboard.getCurrentUserId(),{IncludeItemTypes:'Playlist',recursive:true,SortBy:'SortName'}).done(function(result){var selectHtml='<option value="">'+Globalize.translate('OptionNewPlaylist')+'</option>';selectHtml+=result.Items.map(function(o){return'<option value="'+o.Id+'">'+o.Name+'</option>';}).join('');select.html(selectHtml).selectmenu('refresh');select.val(lastPlaylistId||'').selectmenu('refresh').trigger('change');Dashboard.hideLoadingMsg();});$('form',elem).on('submit',onAddToPlaylistFormSubmit);return elem;}
function showNewPlaylistPanel(items){var panel=getNewPlaylistPanel().panel('toggle');$('.fldSelectedItemIds',panel).val(items.join(','));populatePlaylists(panel);}
function populatePlaylists(panel){var select=$('select.selectPlaylistToAddTo',panel);if(!select.length){$('#txtNewPlaylistName',panel).val('').focus();return;}
$('.newPlaylistInfo',panel).hide();var options={Recursive:true,IncludeItemTypes:"Playlist",SortBy:'SortName'};ApiClient.getItems(Dashboard.getCurrentUserId(),options).done(function(result){var html='';html+='<option value="">'+Globalize.translate('OptionNewPlaylist')+'</option>';html+=result.Items.map(function(i){return'<option value="'+i.Id+'">'+i.Name+'</option>';});select.html(html).val('').selectmenu('refresh').trigger('change');});}
function createPlaylist(panel){var url=ApiClient.getUrl("Playlists",{Name:$('#txtNewPlaylistName',panel).val(),Ids:$('.fldSelectedItemIds',panel).val()||'',userId:Dashboard.getCurrentUserId()});ApiClient.ajax({type:"POST",url:url,dataType:"json"}).done(function(result){Dashboard.hideLoadingMsg();var id=result.Id;panel.panel('toggle');redirectToPlaylist(id);});}
function addToPlaylist(panel,id){var url=ApiClient.getUrl("Playlists/"+id+"/Items",{Ids:$('.fldSelectedItemIds',panel).val()||'',userId:Dashboard.getCurrentUserId()});ApiClient.ajax({type:"POST",url:url}).done(function(){Dashboard.hideLoadingMsg();panel.panel('toggle');Dashboard.alert(Globalize.translate('MessageAddedToPlaylistSuccess'));});}
window.PlaylistManager={showPanel:function(items){showNewPlaylistPanel(items);},supportsPlaylists:function(item){if(item.Type=='Program'){return false;}
return item.RunTimeTicks||item.IsFolder||item.Type=="Genre"||item.Type=="MusicGenre"||item.Type=="MusicArtist";}};})(jQuery,document);(function(window){function update(key,val){appStorage.setItem(key,val);Events.trigger(AppSettings,'settingupdated',[key]);}
window.AppSettings={maxStreamingBitrate:function(val){if(val!=null){update('preferredVideoBitrate',val);}
return parseInt(appStorage.getItem('preferredVideoBitrate')||'')||1500000;},maxChromecastBitrate:function(val){if(val!=null){update('chromecastBitrate',val);}
return parseInt(appStorage.getItem('chromecastBitrate')||'')||3000000;},enableChromecastAc3:function(val){if(val!=null){update('enablechromecastac3',val.toString());}
return appStorage.getItem('enablechromecastac3')=='true';},enableExternalPlayers:function(val){if(val!=null){update('externalplayers',val.toString());}
return appStorage.getItem('externalplayers')=='true';},enableItemPreviews:function(val){if(val!=null){update('enableItemPreviews',val.toString());}
return appStorage.getItem('enableItemPreviews')=='true';},enableFullScreen:function(val){if(val!=null){update('enableFullScreen',val.toString());}
return appStorage.getItem('enableFullScreen')=='true';},syncPath:function(val){if(val!=null){update('syncPath',val.toString());}
return appStorage.getItem('syncPath');},displayPreferencesKey:function(){if(AppInfo.isNativeApp){return'Emby Mobile';}
return'webclient';}};})(window);(function(document,setTimeout,clearTimeout,screen,$,setInterval,window){function mediaPlayer(){var self=this;var currentProgressInterval;var canClientSeek;var currentPlaylistIndex=0;self.currentMediaRenderer=null;self.currentItem=null;self.currentMediaSource=null;self.currentDurationTicks=null;self.startTimeTicksOffset=null;self.playlist=[];self.isLocalPlayer=true;self.isDefaultPlayer=true;self.name='Html5 Player';self.getTargets=function(){var targets=[{name:Globalize.translate('MyDevice'),id:ConnectionManager.deviceId(),playerName:self.name,playableMediaTypes:['Audio','Video'],isLocalPlayer:true,supportedCommands:Dashboard.getSupportedRemoteCommands()}];return targets;};var canPlayAac=document.createElement('audio').canPlayType('audio/aac').replace(/no/,'');self.getVideoQualityOptions=function(videoWidth,videoHeight){var bitrateSetting=AppSettings.maxStreamingBitrate();var maxAllowedWidth=videoWidth||4096;var maxAllowedHeight=videoHeight||2304;var options=[];if(maxAllowedWidth>=1900){options.push({name:'1080p - 30Mbps',maxHeight:1080,bitrate:30000000});options.push({name:'1080p - 25Mbps',maxHeight:1080,bitrate:25000000});options.push({name:'1080p - 20Mbps',maxHeight:1080,bitrate:20000000});options.push({name:'1080p - 15Mbps',maxHeight:1080,bitrate:15000000});options.push({name:'1080p - 10Mbps',maxHeight:1080,bitrate:10000001});options.push({name:'1080p - 8Mbps',maxHeight:1080,bitrate:8000001});options.push({name:'1080p - 6Mbps',maxHeight:1080,bitrate:6000001});options.push({name:'1080p - 5Mbps',maxHeight:1080,bitrate:5000001});}else if(maxAllowedWidth>=1260){options.push({name:'720p - 10Mbps',maxHeight:720,bitrate:10000000});options.push({name:'720p - 8Mbps',maxHeight:720,bitrate:8000000});options.push({name:'720p - 6Mbps',maxHeight:720,bitrate:6000000});options.push({name:'720p - 5Mbps',maxHeight:720,bitrate:5000000});}else if(maxAllowedWidth>=700){options.push({name:'480p - 4Mbps',maxHeight:480,bitrate:4000001});options.push({name:'480p - 3Mbps',maxHeight:480,bitrate:3000001});options.push({name:'480p - 2.5Mbps',maxHeight:480,bitrate:2500000});options.push({name:'480p - 2Mbps',maxHeight:480,bitrate:2000001});options.push({name:'480p - 1.5Mbps',maxHeight:480,bitrate:1500001});}
if(maxAllowedWidth>=1260){options.push({name:'720p - 4Mbps',maxHeight:720,bitrate:4000000});options.push({name:'720p - 3Mbps',maxHeight:720,bitrate:3000000});options.push({name:'720p - 2Mbps',maxHeight:720,bitrate:2000000});options.push({name:'720p - 1.5Mbps',maxHeight:720,bitrate:1500000});options.push({name:'720p - 1Mbps',maxHeight:720,bitrate:1000001});}
options.push({name:'480p - 1.0Mbps',maxHeight:480,bitrate:1000000});options.push({name:'480p - 720kbps',maxHeight:480,bitrate:720000});options.push({name:'480p - 420kbps',maxHeight:480,bitrate:420000});options.push({name:'360p',maxHeight:360,bitrate:400000});options.push({name:'240p',maxHeight:240,bitrate:320000});options.push({name:'144p',maxHeight:144,bitrate:192000});var i,length,option;var selectedIndex=-1;for(i=0,length=options.length;i<length;i++){option=options[i];if(selectedIndex==-1&&option.bitrate<=bitrateSetting){selectedIndex=i;}}
if(selectedIndex==-1){selectedIndex=options.length-1;}
options[selectedIndex].selected=true;return options;};self.getDeviceProfile=function(maxHeight){if(!maxHeight){maxHeight=self.getVideoQualityOptions().filter(function(q){return q.selected;})[0].maxHeight;}
var bitrateSetting=AppSettings.maxStreamingBitrate();var canPlayWebm=self.canPlayWebm();var profile={};profile.MaxStreamingBitrate=bitrateSetting;profile.MaxStaticBitrate=40000000;profile.MusicStreamingTranscodingBitrate=Math.min(bitrateSetting,192000);profile.DirectPlayProfiles=[];profile.DirectPlayProfiles.push({Container:'mp4,m4v',Type:'Video',VideoCodec:'h264',AudioCodec:'aac,mp3'});if($.browser.chrome){profile.DirectPlayProfiles.push({Container:'mkv',Type:'Video',VideoCodec:'h264',AudioCodec:'aac,mp3'});}
var directPlayVideoContainers=AppInfo.directPlayVideoContainers;if(directPlayVideoContainers&&directPlayVideoContainers.length){profile.DirectPlayProfiles.push({Container:directPlayVideoContainers.join(','),Type:'Video'});}
profile.DirectPlayProfiles.push({Container:'mp3',Type:'Audio'});if(canPlayAac){profile.DirectPlayProfiles.push({Container:'aac',Type:'Audio'});}
var directPlayAudioContainers=AppInfo.directPlayAudioContainers;if(directPlayAudioContainers&&directPlayAudioContainers.length){profile.DirectPlayProfiles.push({Container:directPlayAudioContainers.join(','),Type:'Audio'});}
if(canPlayWebm){profile.DirectPlayProfiles.push({Container:'webm',Type:'Video'});profile.DirectPlayProfiles.push({Container:'webm,webma',Type:'Audio'});}
profile.TranscodingProfiles=[];if(self.canPlayHls()){profile.TranscodingProfiles.push({Container:'ts',Type:'Video',AudioCodec:'aac',VideoCodec:'h264',Context:'Streaming',Protocol:'hls'});if(canPlayAac&&$.browser.safari){profile.TranscodingProfiles.push({Container:'ts',Type:'Audio',AudioCodec:'aac',Context:'Streaming',Protocol:'hls'});}}
if(canPlayWebm){profile.TranscodingProfiles.push({Container:'webm',Type:'Video',AudioCodec:'vorbis',VideoCodec:'vpx',Context:'Streaming',Protocol:'http'});}
profile.TranscodingProfiles.push({Container:'mp4',Type:'Video',AudioCodec:'aac',VideoCodec:'h264',Context:'Streaming',Protocol:'http'});profile.TranscodingProfiles.push({Container:'mp4',Type:'Video',AudioCodec:'aac',VideoCodec:'h264',Context:'Static',Protocol:'http'});if(canPlayAac&&$.browser.safari){profile.TranscodingProfiles.push({Container:'aac',Type:'Audio',AudioCodec:'aac',Context:'Streaming',Protocol:'http'});profile.TranscodingProfiles.push({Container:'aac',Type:'Audio',AudioCodec:'aac',Context:'Static',Protocol:'http'});}else{profile.TranscodingProfiles.push({Container:'mp3',Type:'Audio',AudioCodec:'mp3',Context:'Streaming',Protocol:'http'});profile.TranscodingProfiles.push({Container:'mp3',Type:'Audio',AudioCodec:'mp3',Context:'Static',Protocol:'http'});}
profile.ContainerProfiles=[];var maxAudioChannels=isVlc?'6':'2';profile.CodecProfiles=[];profile.CodecProfiles.push({Type:'Audio',Conditions:[{Condition:'LessThanEqual',Property:'AudioChannels',Value:'2'}]});profile.CodecProfiles.push({Type:'VideoAudio',Codec:'mp3',Conditions:[{Condition:'LessThanEqual',Property:'AudioChannels',Value:maxAudioChannels}]});var isVlc=AppInfo.isNativeApp&&$.browser.android;if(!isVlc){profile.CodecProfiles.push({Type:'VideoAudio',Codec:'aac',Container:'mkv,mov',Conditions:[{Condition:'NotEquals',Property:'AudioProfile',Value:'HE-AAC'},{Condition:'NotEquals',Property:'AudioProfile',Value:'LC'}]});}
profile.CodecProfiles.push({Type:'VideoAudio',Codec:'aac',Conditions:[{Condition:'LessThanEqual',Property:'AudioChannels',Value:maxAudioChannels}]});if(isVlc){profile.CodecProfiles.push({Type:'Video',Codec:'h264',Conditions:[{Condition:'EqualsAny',Property:'VideoProfile',Value:'high|main|baseline|constrained baseline'},{Condition:'LessThanEqual',Property:'VideoLevel',Value:'41'}]});}else{profile.CodecProfiles.push({Type:'Video',Codec:'h264',Conditions:[{Condition:'NotEquals',Property:'IsAnamorphic',Value:'true',IsRequired:false},{Condition:'EqualsAny',Property:'VideoProfile',Value:'high|main|baseline|constrained baseline'},{Condition:'LessThanEqual',Property:'VideoLevel',Value:'41'},{Condition:'LessThanEqual',Property:'Height',Value:maxHeight}]});}
if(!isVlc){profile.CodecProfiles.push({Type:'Video',Codec:'vpx',Conditions:[{Condition:'NotEquals',Property:'IsAnamorphic',Value:'true',IsRequired:false},{Condition:'LessThanEqual',Property:'Height',Value:maxHeight}]});}
profile.SubtitleProfiles=[];if(self.supportsTextTracks()){if(isVlc){profile.SubtitleProfiles.push({Format:'srt',Method:'External'});profile.SubtitleProfiles.push({Format:'srt',Method:'Embed'});profile.SubtitleProfiles.push({Format:'ass',Method:'Embed'});profile.SubtitleProfiles.push({Format:'ssa',Method:'Embed'});profile.SubtitleProfiles.push({Format:'pgs',Method:'Embed'});profile.SubtitleProfiles.push({Format:'vtt',Method:'Embed'});}else{profile.SubtitleProfiles.push({Format:'vtt',Method:'External'});}}
profile.ResponseProfiles=[];profile.ResponseProfiles.push({Type:'Video',Container:'m4v',MimeType:'video/mp4'});profile.ResponseProfiles.push({Type:'Video',Container:'mov',MimeType:'video/webm'});return profile;};var supportsTextTracks;self.supportsTextTracks=function(){if(supportsTextTracks==null){supportsTextTracks=document.createElement('video').textTracks!=null;}
return supportsTextTracks;};self.updateCanClientSeek=function(mediaRenderer){var duration=mediaRenderer.duration();canClientSeek=duration&&!isNaN(duration)&&duration!=Number.POSITIVE_INFINITY&&duration!=Number.NEGATIVE_INFINITY;};self.getCurrentSrc=function(mediaRenderer){return mediaRenderer.currentSrc();};self.getCurrentTicks=function(mediaRenderer){var playerTime=Math.floor(10000*(mediaRenderer||self.currentMediaRenderer).currentTime());playerTime+=self.startTimeTicksOffset;return playerTime;};self.playNextAfterEnded=function(){self.nextTrack();};self.startProgressInterval=function(){clearProgressInterval();var intervalTime=ApiClient.isWebSocketOpen()?1200:5000;if($.browser.safari){intervalTime=Math.max(intervalTime,5000);}
self.lastProgressReport=0;currentProgressInterval=setInterval(function(){if(self.currentMediaRenderer){if((new Date().getTime()-self.lastProgressReport)>intervalTime){self.lastProgressReport=new Date().getTime();sendProgressUpdate();}}},250);};self.getCurrentMediaExtension=function(currentSrc){currentSrc=currentSrc.split('?')[0];return currentSrc.substring(currentSrc.lastIndexOf('.'));};self.canPlayNativeHls=function(){if(AppInfo.isNativeApp){return true;}
var media=document.createElement('video');if(media.canPlayType('application/x-mpegURL').replace(/no/,'')||media.canPlayType('application/vnd.apple.mpegURL').replace(/no/,'')){return true;}
return false;};self.canPlayHls=function(){if(self.canPlayNativeHls()){return true;}
if($.browser.msie&&$.browser.mobile){return false;}
return window.MediaSource!=null;};self.changeStream=function(ticks,params){var mediaRenderer=self.currentMediaRenderer;if(canClientSeek&&params==null){mediaRenderer.currentTime(ticks/10000);return;}
params=params||{};var currentSrc=mediaRenderer.currentSrc();var playSessionId=getParameterByName('PlaySessionId',currentSrc);var liveStreamId=getParameterByName('LiveStreamId',currentSrc);var deviceProfile=self.getDeviceProfile();var audioStreamIndex=params.AudioStreamIndex==null?(getParameterByName('AudioStreamIndex',currentSrc)||null):params.AudioStreamIndex;if(typeof(audioStreamIndex)=='string'){audioStreamIndex=parseInt(audioStreamIndex);}
var subtitleStreamIndex=params.SubtitleStreamIndex==null?(getParameterByName('SubtitleStreamIndex',currentSrc)||null):params.SubtitleStreamIndex;if(typeof(subtitleStreamIndex)=='string'){subtitleStreamIndex=parseInt(subtitleStreamIndex);}
MediaController.getPlaybackInfo(self.currentItem.Id,deviceProfile,ticks,self.currentMediaSource,audioStreamIndex,subtitleStreamIndex,liveStreamId).done(function(result){if(validatePlaybackInfoResult(result)){self.currentMediaSource=result.MediaSources[0];var streamInfo=self.createStreamInfo(self.currentItem.MediaType,self.currentItem,self.currentMediaSource,ticks);self.currentSubtitleStreamIndex=subtitleStreamIndex;currentSrc=streamInfo.url;changeStreamToUrl(mediaRenderer,playSessionId,currentSrc,streamInfo.startTimeTicksOffset||0);}});};function changeStreamToUrl(mediaRenderer,playSessionId,url,newPositionTicks){clearProgressInterval();Events.off(mediaRenderer,'ended',self.onPlaybackStopped);Events.off(mediaRenderer,'ended',self.playNextAfterEnded);$(mediaRenderer).one("play",function(){self.updateCanClientSeek(this);Events.on(this,'ended',self.onPlaybackStopped);$(this).one('ended',self.playNextAfterEnded);self.startProgressInterval();sendProgressUpdate();});if(self.currentItem.MediaType=="Video"){ApiClient.stopActiveEncodings(playSessionId).done(function(){mediaRenderer.setCurrentSrc(url,self.currentItem,self.currentMediaSource);});self.startTimeTicksOffset=newPositionTicks||0;self.updateTextStreamUrls(newPositionTicks||0);}else{self.startTimeTicksOffset=newPositionTicks||0;mediaRenderer.setCurrentSrc(url,self.currentItem,self.currentMediaSource);}}
self.setCurrentTime=function(ticks,positionSlider,currentTimeElement){ticks=Math.floor(ticks);var timeText=Dashboard.getDisplayTime(ticks);if(self.currentDurationTicks){timeText+=" / "+Dashboard.getDisplayTime(self.currentDurationTicks);if(positionSlider){var percent=ticks/self.currentDurationTicks;percent*=100;positionSlider.disabled=false;positionSlider.value=percent;}}else{if(positionSlider){positionSlider.disabled=true;}}
if(currentTimeElement){currentTimeElement.html(timeText);}
var state=self.getPlayerStateInternal(self.currentMediaRenderer,self.currentItem,self.currentMediaSource);Events.trigger(self,'positionchange',[state]);};self.canQueueMediaType=function(mediaType){return self.currentItem&&self.currentItem.MediaType==mediaType;};function translateItemsForPlayback(items){var deferred=$.Deferred();var firstItem=items[0];var promise;if(firstItem.Type=="Playlist"){promise=self.getItemsForPlayback({ParentId:firstItem.Id,});}
else if(firstItem.Type=="MusicArtist"){promise=self.getItemsForPlayback({ArtistIds:firstItem.Id,Filters:"IsNotFolder",Recursive:true,SortBy:"SortName",MediaTypes:"Audio"});}
else if(firstItem.Type=="MusicGenre"){promise=self.getItemsForPlayback({Genres:firstItem.Name,Filters:"IsNotFolder",Recursive:true,SortBy:"SortName",MediaTypes:"Audio"});}
else if(firstItem.IsFolder){promise=self.getItemsForPlayback({ParentId:firstItem.Id,Filters:"IsNotFolder",Recursive:true,SortBy:"SortName",MediaTypes:"Audio,Video"});}
if(promise){promise.done(function(result){deferred.resolveWith(null,[result.Items]);});}else{deferred.resolveWith(null,[items]);}
return deferred.promise();}
self.play=function(options){Dashboard.showLoadingMsg();Dashboard.getCurrentUser().done(function(user){if(options.items){translateItemsForPlayback(options.items).done(function(items){self.playWithIntros(items,options,user);});}else{self.getItemsForPlayback({Ids:options.ids.join(',')}).done(function(result){translateItemsForPlayback(result.Items).done(function(items){self.playWithIntros(items,options,user);});});}});};self.playWithIntros=function(items,options,user){var firstItem=items[0];if(firstItem.MediaType==="Video"){Dashboard.showModalLoadingMsg();}
if(options.startPositionTicks||firstItem.MediaType!=='Video'){self.playInternal(firstItem,options.startPositionTicks,function(){self.setPlaylistState(0,items);});return;}
ApiClient.getJSON(ApiClient.getUrl('Users/'+user.Id+'/Items/'+firstItem.Id+'/Intros')).done(function(intros){items=intros.Items.concat(items);self.playInternal(items[0],options.startPositionTicks,function(){self.setPlaylistState(0,items);});});};function getOptimalMediaSource(mediaType,versions){var optimalVersion=versions.filter(function(v){v.enableDirectPlay=MediaController.supportsDirectPlay(v);return v.enableDirectPlay;})[0];if(!optimalVersion){optimalVersion=versions.filter(function(v){return v.SupportsDirectStream;})[0];}
return optimalVersion||versions.filter(function(s){return s.SupportsTranscoding;})[0];}
self.createStreamInfo=function(type,item,mediaSource,startPosition){var mediaUrl;var contentType;var startTimeTicksOffset=0;var startPositionInSeekParam=startPosition?(startPosition/10000000):0;var seekParam=startPositionInSeekParam?'#t='+startPositionInSeekParam:'';var playMethod='Transcode';if(type=='Video'){contentType='video/'+mediaSource.Container;if(mediaSource.enableDirectPlay){mediaUrl=mediaSource.Path;if(mediaSource.Protocol=='File'){mediaUrl=FileSystemBridge.translateFilePath(mediaUrl);}
playMethod='DirectPlay';}else{if(mediaSource.SupportsDirectStream){mediaUrl=ApiClient.getUrl('Videos/'+item.Id+'/stream.'+mediaSource.Container,{Static:true,mediaSourceId:mediaSource.Id,api_key:ApiClient.accessToken()});mediaUrl+=seekParam;playMethod='DirectStream';}else{mediaUrl=ApiClient.getUrl(mediaSource.TranscodingUrl);if(mediaSource.TranscodingSubProtocol=='hls'){mediaUrl+=seekParam;contentType='application/x-mpegURL';}else{startTimeTicksOffset=startPosition||0;contentType='video/'+mediaSource.TranscodingContainer;}}}}else{contentType='audio/'+mediaSource.Container;if(mediaSource.enableDirectPlay){mediaUrl=mediaSource.Path;if(mediaSource.Protocol=='File'){mediaUrl=FileSystemBridge.translateFilePath(mediaUrl);}
playMethod='DirectPlay';}else{var isDirectStream=mediaSource.SupportsDirectStream;if(isDirectStream){var outputContainer=(mediaSource.Container||'').toLowerCase();mediaUrl=ApiClient.getUrl('Audio/'+item.Id+'/stream.'+outputContainer,{mediaSourceId:mediaSource.Id,deviceId:ApiClient.deviceId(),api_key:ApiClient.accessToken()});mediaUrl+="&static=true"+seekParam;playMethod='DirectStream';}else{mediaUrl=ApiClient.getUrl(mediaSource.TranscodingUrl);if(mediaSource.TranscodingSubProtocol=='hls'){mediaUrl+=seekParam;contentType='application/x-mpegURL';}else{startTimeTicksOffset=startPosition||0;contentType='audio/'+mediaSource.TranscodingContainer;}}}}
return{url:mediaUrl,mimeType:contentType,startTimeTicksOffset:startTimeTicksOffset,startPositionInSeekParam:startPositionInSeekParam,playMethod:playMethod};};self.playInternal=function(item,startPosition,callback){if(item==null){throw new Error("item cannot be null");}
if(self.isPlaying()){self.stop(false);}
if(item.MediaType!=='Audio'&&item.MediaType!=='Video'){throw new Error("Unrecognized media type");}
if(item.IsPlaceHolder){Dashboard.hideModalLoadingMsg();MediaController.showPlaybackInfoErrorMessage('PlaceHolder');return;}
var deviceProfile=self.getDeviceProfile();if(item.MediaType==="Video"){Dashboard.showModalLoadingMsg();}
MediaController.getPlaybackInfo(item.Id,deviceProfile,startPosition).done(function(playbackInfoResult){if(validatePlaybackInfoResult(playbackInfoResult)){var mediaSource=getOptimalMediaSource(item.MediaType,playbackInfoResult.MediaSources);if(mediaSource){if(mediaSource.RequiresOpening){MediaController.getLiveStream(item.Id,playbackInfoResult.PlaySessionId,deviceProfile,startPosition,mediaSource,null,null).done(function(openLiveStreamResult){openLiveStreamResult.MediaSource.enableDirectPlay=MediaController.supportsDirectPlay(openLiveStreamResult.MediaSource);playInternalPostMediaSourceSelection(item,openLiveStreamResult.MediaSource,startPosition,callback);});}else{playInternalPostMediaSourceSelection(item,mediaSource,startPosition,callback);}}else{Dashboard.hideModalLoadingMsg();MediaController.showPlaybackInfoErrorMessage('NoCompatibleStream');}}});};function playInternalPostMediaSourceSelection(item,mediaSource,startPosition,callback){Dashboard.hideModalLoadingMsg();self.currentMediaSource=mediaSource;self.currentItem=item;if(item.MediaType==="Video"){requirejs(['videorenderer'],function(){self.playVideo(item,self.currentMediaSource,startPosition,callback);});}else if(item.MediaType==="Audio"){playAudio(item,self.currentMediaSource,startPosition,callback);}}
function validatePlaybackInfoResult(result){if(result.ErrorCode){MediaController.showPlaybackInfoErrorMessage(result.ErrorCode);return false;}
return true;}
self.getPosterUrl=function(item){if($.browser.safari){return null;}
var screenWidth=Math.max(screen.height,screen.width);if(item.BackdropImageTags&&item.BackdropImageTags.length){return ApiClient.getScaledImageUrl(item.Id,{type:"Backdrop",index:0,maxWidth:screenWidth,tag:item.BackdropImageTags[0]});}
else if(item.ParentBackdropItemId&&item.ParentBackdropImageTags&&item.ParentBackdropImageTags.length){return ApiClient.getScaledImageUrl(item.ParentBackdropItemId,{type:'Backdrop',index:0,maxWidth:screenWidth,tag:item.ParentBackdropImageTags[0]});}
return null;};self.displayContent=function(options){Dashboard.onBrowseCommand(options);};self.getItemsForPlayback=function(query){var userId=Dashboard.getCurrentUserId();if(query.Ids&&query.Ids.split(',').length==1){var deferred=DeferredBuilder.Deferred();ApiClient.getItem(userId,query.Ids.split(',')).done(function(item){deferred.resolveWith(null,[{Items:[item],TotalRecordCount:1}]);});return deferred.promise();}
else{query.Limit=query.Limit||100;query.Fields=getItemFields;query.ExcludeLocationTypes="Virtual";return ApiClient.getItems(userId,query);}};self.removeFromPlaylist=function(index){self.playlist.remove(index);};self.currentPlaylistIndex=function(i){if(i==null){return currentPlaylistIndex;}
var newItem=self.playlist[i];self.playInternal(newItem,0,function(){self.setPlaylistState(i);});};self.setPlaylistState=function(i,items){if(!isNaN(i)){currentPlaylistIndex=i;}
if(items){self.playlist=items;}
if(self.updatePlaylistUi){self.updatePlaylistUi();}};self.nextTrack=function(){var newIndex=currentPlaylistIndex+1;var newItem=self.playlist[newIndex];if(newItem){Logger.log('playing next track');self.playInternal(newItem,0,function(){self.setPlaylistState(newIndex);});}};self.previousTrack=function(){var newIndex=currentPlaylistIndex-1;if(newIndex>=0){var newItem=self.playlist[newIndex];if(newItem){self.playInternal(newItem,0,function(){self.setPlaylistState(newIndex);});}}};self.queueItemsNext=function(items){var insertIndex=1;for(var i=0,length=items.length;i<length;i++){self.playlist.splice(insertIndex,0,items[i]);insertIndex++;}};self.queueItems=function(items){for(var i=0,length=items.length;i<length;i++){self.playlist.push(items[i]);}};self.queue=function(options){if(!self.playlist.length){self.play(options);return;}
Dashboard.getCurrentUser().done(function(user){if(options.items){translateItemsForPlayback(options.items).done(function(items){self.queueItems(items);});}else{self.getItemsForPlayback({Ids:options.ids.join(',')}).done(function(result){translateItemsForPlayback(result.Items).done(function(items){self.queueItems(items);});});}});};self.queueNext=function(options){if(!self.playlist.length){self.play(options);return;}
Dashboard.getCurrentUser().done(function(user){if(options.items){self.queueItemsNext(options.items);}else{self.getItemsForPlayback({Ids:options.ids.join(',')}).done(function(result){options.items=result.Items;self.queueItemsNext(options.items);});}});};self.pause=function(){self.currentMediaRenderer.pause();};self.unpause=function(){self.currentMediaRenderer.unpause();};self.seek=function(position){self.changeStream(position);};self.mute=function(){self.setVolume(0);};self.unMute=function(){self.setVolume(self.getSavedVolume()*100);};self.volume=function(){return self.currentMediaRenderer.volume()*100;};self.toggleMute=function(){if(self.currentMediaRenderer){Logger.log('MediaPlayer toggling mute');if(self.volume()){self.mute();}else{self.unMute();}}};self.volumeDown=function(){if(self.currentMediaRenderer){self.setVolume(Math.max(self.volume()-2,0));}};self.volumeUp=function(){if(self.currentMediaRenderer){self.setVolume(Math.min(self.volume()+2,100));}};self.setVolume=function(val){if(self.currentMediaRenderer){Logger.log('MediaPlayer setting volume to '+val);self.currentMediaRenderer.volume(val/100);self.onVolumeChanged(self.currentMediaRenderer);}};self.saveVolume=function(val){if(val){appStorage.setItem("volume",val);}};self.getSavedVolume=function(){return appStorage.getItem("volume")||0.5;};self.shuffle=function(id){var userId=Dashboard.getCurrentUserId();ApiClient.getItem(userId,id).done(function(item){var query={UserId:userId,Fields:getItemFields,Limit:100,Filters:"IsNotFolder",Recursive:true,SortBy:"Random"};if(item.Type=="MusicArtist"){query.MediaTypes="Audio";query.ArtistIds=item.Id;}
else if(item.Type=="MusicGenre"){query.MediaTypes="Audio";query.Genres=item.Name;}
else if(item.IsFolder){query.ParentId=id;}
else{return;}
self.getItemsForPlayback(query).done(function(result){self.play({items:result.Items});});});};self.instantMix=function(id){var userId=Dashboard.getCurrentUserId();ApiClient.getItem(userId,id).done(function(item){var promise;var itemLimit=100;if(item.Type=="MusicArtist"){promise=ApiClient.getInstantMixFromArtist({UserId:Dashboard.getCurrentUserId(),Fields:getItemFields,Limit:itemLimit,Id:id});}
else if(item.Type=="MusicGenre"){promise=ApiClient.getInstantMixFromMusicGenre({UserId:Dashboard.getCurrentUserId(),Fields:getItemFields,Limit:itemLimit,Id:id});}
else if(item.Type=="MusicAlbum"){promise=ApiClient.getInstantMixFromAlbum(id,{UserId:Dashboard.getCurrentUserId(),Fields:getItemFields,Limit:itemLimit});}
else if(item.Type=="Playlist"){promise=ApiClient.getInstantMixFromPlaylist(id,{UserId:Dashboard.getCurrentUserId(),Fields:getItemFields,Limit:itemLimit});}
else if(item.Type=="Audio"){promise=ApiClient.getInstantMixFromSong(id,{UserId:Dashboard.getCurrentUserId(),Fields:getItemFields,Limit:itemLimit});}
else{return;}
promise.done(function(result){self.play({items:result.Items});});});};self.stop=function(destroyRenderer){var mediaRenderer=self.currentMediaRenderer;if(mediaRenderer){mediaRenderer.stop();Events.off(mediaRenderer,'ended',self.playNextAfterEnded);$(mediaRenderer).one("ended",function(){$(this).off('.mediaplayerevent');this.cleanup(destroyRenderer);self.currentMediaRenderer=null;self.currentItem=null;self.currentMediaSource=null;});Events.trigger(mediaRenderer,"ended");}else{self.currentMediaRenderer=null;self.currentItem=null;self.currentMediaSource=null;}
if(self.isFullScreen()){self.exitFullScreen();}
self.resetEnhancements();};self.isPlaying=function(){return self.playlist.length>0;};self.getPlayerState=function(){var deferred=$.Deferred();var result=self.getPlayerStateInternal(self.currentMediaRenderer,self.currentItem,self.currentMediaSource);deferred.resolveWith(null,[result]);return deferred.promise();};self.getPlayerStateInternal=function(mediaRenderer,item,mediaSource){var state={PlayState:{}};if(mediaRenderer){state.PlayState.VolumeLevel=mediaRenderer.volume()*100;state.PlayState.IsMuted=mediaRenderer.volume()==0;state.PlayState.IsPaused=mediaRenderer.paused();state.PlayState.PositionTicks=self.getCurrentTicks(mediaRenderer);var currentSrc=mediaRenderer.currentSrc();if(currentSrc){var audioStreamIndex=getParameterByName('AudioStreamIndex',currentSrc);if(audioStreamIndex){state.PlayState.AudioStreamIndex=parseInt(audioStreamIndex);}
state.PlayState.SubtitleStreamIndex=self.currentSubtitleStreamIndex;state.PlayState.PlayMethod=getParameterByName('static',currentSrc)=='true'?'DirectStream':'Transcode';state.PlayState.LiveStreamId=getParameterByName('LiveStreamId',currentSrc);state.PlayState.PlaySessionId=getParameterByName('PlaySessionId',currentSrc);}}
if(mediaSource){state.PlayState.MediaSourceId=mediaSource.Id;state.NowPlayingItem={RunTimeTicks:mediaSource.RunTimeTicks};state.PlayState.CanSeek=mediaSource.RunTimeTicks&&mediaSource.RunTimeTicks>0;}
if(item){state.NowPlayingItem=self.getNowPlayingItemForReporting(item,mediaSource);}
return state;};self.getNowPlayingItemForReporting=function(item,mediaSource){var nowPlayingItem={};nowPlayingItem.RunTimeTicks=mediaSource.RunTimeTicks;nowPlayingItem.Id=item.Id;nowPlayingItem.MediaType=item.MediaType;nowPlayingItem.Type=item.Type;nowPlayingItem.Name=item.Name;nowPlayingItem.IndexNumber=item.IndexNumber;nowPlayingItem.IndexNumberEnd=item.IndexNumberEnd;nowPlayingItem.ParentIndexNumber=item.ParentIndexNumber;nowPlayingItem.ProductionYear=item.ProductionYear;nowPlayingItem.PremiereDate=item.PremiereDate;nowPlayingItem.SeriesName=item.SeriesName;nowPlayingItem.Album=item.Album;nowPlayingItem.Artists=item.Artists;var imageTags=item.ImageTags||{};if(item.SeriesPrimaryImageTag){nowPlayingItem.PrimaryImageItemId=item.SeriesId;nowPlayingItem.PrimaryImageTag=item.SeriesPrimaryImageTag;}
else if(imageTags.Primary){nowPlayingItem.PrimaryImageItemId=item.Id;nowPlayingItem.PrimaryImageTag=imageTags.Primary;}
else if(item.AlbumPrimaryImageTag){nowPlayingItem.PrimaryImageItemId=item.AlbumId;nowPlayingItem.PrimaryImageTag=item.AlbumPrimaryImageTag;}
else if(item.SeriesPrimaryImageTag){nowPlayingItem.PrimaryImageItemId=item.SeriesId;nowPlayingItem.PrimaryImageTag=item.SeriesPrimaryImageTag;}
if(item.BackdropImageTags&&item.BackdropImageTags.length){nowPlayingItem.BackdropItemId=item.Id;nowPlayingItem.BackdropImageTag=item.BackdropImageTags[0];}
else if(item.ParentBackdropImageTags&&item.ParentBackdropImageTags.length){nowPlayingItem.BackdropItemId=item.ParentBackdropItemId;nowPlayingItem.BackdropImageTag=item.ParentBackdropImageTags[0];}
if(imageTags.Thumb){nowPlayingItem.ThumbItemId=item.Id;nowPlayingItem.ThumbImageTag=imageTags.Thumb;}
if(imageTags.Logo){nowPlayingItem.LogoItemId=item.Id;nowPlayingItem.LogoImageTag=imageTags.Logo;}
else if(item.ParentLogoImageTag){nowPlayingItem.LogoItemId=item.ParentLogoItemId;nowPlayingItem.LogoImageTag=item.ParentLogoImageTag;}
return nowPlayingItem;};self.beginPlayerUpdates=function(){};self.endPlayerUpdates=function(){};self.onPlaybackStart=function(mediaRenderer,item,mediaSource){self.updateCanClientSeek(mediaRenderer);var state=self.getPlayerStateInternal(mediaRenderer,item,mediaSource);Events.trigger(self,'playbackstart',[state]);self.startProgressInterval();};self.onVolumeChanged=function(mediaRenderer){self.saveVolume(mediaRenderer.volume());var state=self.getPlayerStateInternal(mediaRenderer,self.currentItem,self.currentMediaSource);Events.trigger(self,'volumechange',[state]);};self.cleanup=function(){};self.onPlaybackStopped=function(){Logger.log('playback stopped');document.body.classList.remove('bodyWithPopupOpen');var mediaRenderer=this;Events.off(mediaRenderer,'.mediaplayerevent');Events.off(mediaRenderer,'ended',self.onPlaybackStopped);var item=self.currentItem;var mediaSource=self.currentMediaSource;var state=self.getPlayerStateInternal(mediaRenderer,item,mediaSource);self.cleanup(mediaRenderer);clearProgressInterval();if(item.MediaType=="Video"){if(self.isFullScreen()){self.exitFullScreen();}
self.resetEnhancements();}
Events.trigger(self,'playbackstop',[state]);};self.onPlaystateChange=function(mediaRenderer){var state=self.getPlayerStateInternal(mediaRenderer,self.currentItem,self.currentMediaSource);Events.trigger(self,'playstatechange',[state]);};Events.on(window,"beforeunload",function(){if(self.currentItem&&self.currentMediaRenderer&&currentProgressInterval){self.onPlaybackStopped.call(self.currentMediaRenderer);}});function sendProgressUpdate(){var mediaRenderer=self.currentMediaRenderer;if(mediaRenderer.enableProgressReporting===false){return;}
var state=self.getPlayerStateInternal(mediaRenderer,self.currentItem,self.currentMediaSource);var info={QueueableMediaTypes:state.NowPlayingItem.MediaType,ItemId:state.NowPlayingItem.Id,NowPlayingItem:state.NowPlayingItem};info=$.extend(info,state.PlayState);ApiClient.reportPlaybackProgress(info);}
function clearProgressInterval(){if(currentProgressInterval){clearTimeout(currentProgressInterval);currentProgressInterval=null;}}
self._canPlayWebm=null;self.canPlayWebm=function(){if(self._canPlayWebm==null){self._canPlayWebm=($.browser.android&&AppInfo.isNativeApp)||document.createElement('video').canPlayType('video/webm').replace(/no/,'');}
return self._canPlayWebm;};self.canAutoPlayAudio=function(){if(AppInfo.isNativeApp){return true;}
if($.browser.mobile){return false;}
return true;};function onTimeUpdate(){var currentTicks=self.getCurrentTicks(this);self.setCurrentTime(currentTicks);}
function playAudio(item,mediaSource,startPositionTicks,callback){requirejs(['audiorenderer'],function(){playAudioInternal(item,mediaSource,startPositionTicks);if(callback){callback();}});}
function playAudioInternal(item,mediaSource,startPositionTicks){var streamInfo=self.createStreamInfo('Audio',item,mediaSource,startPositionTicks);var audioUrl=streamInfo.url;self.startTimeTicksOffset=streamInfo.startTimeTicksOffset;var initialVolume=self.getSavedVolume();var mediaRenderer=new AudioRenderer({poster:self.getPosterUrl(item)});mediaRenderer.volume(initialVolume);mediaRenderer.setCurrentSrc(audioUrl,item,mediaSource);Events.on(mediaRenderer,"volumechange.mediaplayerevent",function(){Logger.log('audio element event: volumechange');self.onVolumeChanged(this);});$(mediaRenderer).one("playing.mediaplayerevent",function(){Logger.log('audio element event: playing');Events.on(this,'ended',self.onPlaybackStopped);$(this).one('ended',self.playNextAfterEnded);self.onPlaybackStart(this,item,mediaSource);}).on("pause.mediaplayerevent",function(){Logger.log('audio element event: pause');self.onPlaystateChange(this);self.setCurrentTime(self.getCurrentTicks());}).on("playing.mediaplayerevent",function(){Logger.log('audio element event: playing');self.onPlaystateChange(this);self.setCurrentTime(self.getCurrentTicks());}).on("timeupdate.mediaplayerevent",onTimeUpdate);self.currentMediaRenderer=mediaRenderer;self.currentDurationTicks=self.currentMediaSource.RunTimeTicks;}
var getItemFields="MediaSources,Chapters";self.tryPair=function(target){var deferred=$.Deferred();deferred.resolve();return deferred.promise();};}
window.MediaPlayer=new mediaPlayer();Dashboard.ready(function(){window.MediaController.registerPlayer(window.MediaPlayer);window.MediaController.setActivePlayer(window.MediaPlayer,window.MediaPlayer.getTargets()[0]);});})(document,setTimeout,clearTimeout,screen,$,setInterval,window);(function(){function createVideoPlayer(self){var initialVolume;var idleState=true;var muteButton=null;var unmuteButton=null;var volumeSlider=null;var positionSlider;var currentTimeElement;self.currentSubtitleStreamIndex=null;self.getCurrentSubtitleStream=function(){return self.getSubtitleStream(self.currentSubtitleStreamIndex);};self.getSubtitleStream=function(index){return self.currentMediaSource.MediaStreams.filter(function(s){return s.Type=='Subtitle'&&s.Index==index;})[0];};self.toggleFullscreen=function(){if(self.isFullScreen()){self.exitFullScreen();}else{requestFullScreen(document.body);}};self.resetEnhancements=function(){$("#mediaPlayer").hide();$('#videoPlayer').removeClass('fullscreenVideo').removeClass('idlePlayer');$('.hiddenOnIdle').removeClass("inactive");$("video").remove();};self.exitFullScreen=function(){if(document.exitFullscreen){document.exitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}
$('#videoPlayer').removeClass('fullscreenVideo');};self.isFullScreen=function(){return document.fullscreen||document.mozFullScreen||document.webkitIsFullScreen||document.msFullscreenElement?true:false;};self.showChaptersFlyout=function(){function onFlyoutClose(){$('.itemVideo').css('visibility','visible');}
require(['jqmicons']);var html=getChaptersFlyoutHtml();var elem=$('.videoChaptersPopup').html(html).trigger('create').popup("option","positionTo",$('.videoChaptersButton')).off('popupafterclose',onFlyoutClose).on('popupafterclose',onFlyoutClose);elem.popup("open").parents(".ui-popup-container").css("margin-top",30);};self.showSubtitleMenu=function(){var streams=self.currentMediaSource.MediaStreams.filter(function(currentStream){return currentStream.Type=="Subtitle";});var currentIndex=self.currentSubtitleStreamIndex||-1;streams.unshift({Index:-1,Language:"Off"});var menuItems=streams.map(function(stream){var attributes=[];attributes.push(stream.Language||Globalize.translate('LabelUnknownLanguage'));if(stream.Codec){attributes.push(stream.Codec);}
var name=attributes.join(' - ');if(stream.IsDefault){name+=' (D)';}
if(stream.IsForced){name+=' (F)';}
if(stream.External){name+=' (EXT)';}
var opt={name:name,id:stream.Index};if(stream.Index==currentIndex){opt.ironIcon="check";}
return opt;});require(['actionsheet'],function(){ActionSheetElement.show({items:menuItems,positionTo:$('.videoSubtitleButton')[0],callback:function(id){var index=parseInt(id);if(index!=currentIndex){self.onSubtitleOptionSelected(index);}}});});};self.showQualityFlyout=function(){var currentSrc=self.getCurrentSrc(self.currentMediaRenderer).toLowerCase();var isStatic=currentSrc.indexOf('static=true')!=-1;var videoStream=self.currentMediaSource.MediaStreams.filter(function(stream){return stream.Type=="Video";})[0];var videoWidth=videoStream?videoStream.Width:null;var videoHeight=videoStream?videoStream.Height:null;var options=self.getVideoQualityOptions(videoWidth,videoHeight);if(isStatic){options[0].name="Direct";}
var menuItems=options.map(function(o){var opt={name:o.name,id:o.bitrate};if(o.selected){opt.ironIcon="check";}
return opt;});var selectedId=options.filter(function(o){return o.selected;});selectedId=selectedId.length?selectedId[0].bitrate:null;require(['actionsheet'],function(){ActionSheetElement.show({items:menuItems,positionTo:$('.videoQualityButton')[0],callback:function(id){var bitrate=parseInt(id);if(bitrate!=selectedId){self.onQualityOptionSelected(bitrate);}}});});};self.showAudioTracksFlyout=function(){var options=self.currentMediaSource.MediaStreams.filter(function(currentStream){return currentStream.Type=="Audio";});var currentIndex=getParameterByName('AudioStreamIndex',self.getCurrentSrc(self.currentMediaRenderer));var menuItems=options.map(function(stream){var attributes=[];attributes.push(stream.Language||Globalize.translate('LabelUnknownLanguage'));if(stream.Codec){attributes.push(stream.Codec);}
if(stream.Profile){attributes.push(stream.Profile);}
if(stream.BitRate){attributes.push((Math.floor(stream.BitRate/1000))+' kbps');}
if(stream.Channels){attributes.push(stream.Channels+' ch');}
var name=attributes.join(' - ');if(stream.IsDefault){name+=' (D)';}
var opt={name:name,id:stream.Index};if(stream.Index==currentIndex){opt.ironIcon="check";}
return opt;});require(['actionsheet'],function(){ActionSheetElement.show({items:menuItems,positionTo:$('.videoAudioButton')[0],callback:function(id){var index=parseInt(id);if(index!=currentIndex){self.onAudioOptionSelected(index);}}});});};self.setAudioStreamIndex=function(index){self.changeStream(self.getCurrentTicks(),{AudioStreamIndex:index});};self.setSubtitleStreamIndex=function(index){if(!self.currentMediaRenderer.supportsTextTracks()){self.changeStream(self.getCurrentTicks(),{SubtitleStreamIndex:index});self.currentSubtitleStreamIndex=index;return;}
var currentStream=self.getCurrentSubtitleStream();var newStream=self.getSubtitleStream(index);if(!currentStream&&!newStream)return;var selectedTrackElementIndex=-1;if(currentStream&&!newStream){if(currentStream.DeliveryMethod!='External'){self.changeStream(self.getCurrentTicks(),{SubtitleStreamIndex:-1});}}
else if(!currentStream&&newStream){if(newStream.DeliveryMethod=='External'){selectedTrackElementIndex=index;}else{self.changeStream(self.getCurrentTicks(),{SubtitleStreamIndex:index});}}
else if(currentStream&&newStream){if(newStream.DeliveryMethod=='External'){selectedTrackElementIndex=index;if(currentStream.DeliveryMethod!='External'){self.changeStream(self.getCurrentTicks(),{SubtitleStreamIndex:-1});}}else{self.changeStream(self.getCurrentTicks(),{SubtitleStreamIndex:index});}}
self.setCurrentTrackElement(selectedTrackElementIndex);self.currentSubtitleStreamIndex=index;};self.setCurrentTrackElement=function(index){var textStreams=self.currentMediaSource.MediaStreams.filter(function(s){return s.DeliveryMethod=='External';});var newStream=textStreams.filter(function(s){return s.Index==index;})[0];var trackIndex=newStream?textStreams.indexOf(newStream):-1;self.currentMediaRenderer.setCurrentTrackElement(trackIndex);};self.updateTextStreamUrls=function(startPositionTicks){self.currentMediaRenderer.updateTextStreamUrls(startPositionTicks);};self.updateNowPlayingInfo=function(item){if(!item){throw new Error('item cannot be null');}
var mediaControls=$("#videoPlayer");var state=self.getPlayerStateInternal(self.currentMediaRenderer,item,self.currentMediaSource);var url="";var imageWidth=400;var imageHeight=300;if(state.NowPlayingItem.PrimaryImageTag){url=ApiClient.getScaledImageUrl(state.NowPlayingItem.PrimaryImageItemId,{type:"Primary",width:imageWidth,tag:state.NowPlayingItem.PrimaryImageTag});}
else if(state.NowPlayingItem.PrimaryImageTag){url=ApiClient.getScaledImageUrl(state.NowPlayingItem.PrimaryImageItemId,{type:"Primary",width:imageWidth,tag:state.NowPlayingItem.PrimaryImageTag});}
else if(state.NowPlayingItem.BackdropImageTag){url=ApiClient.getScaledImageUrl(state.NowPlayingItem.BackdropItemId,{type:"Backdrop",height:imageHeight,tag:state.NowPlayingItem.BackdropImageTag,index:0});}
else if(state.NowPlayingItem.ThumbImageTag){url=ApiClient.getScaledImageUrl(state.NowPlayingItem.ThumbImageItemId,{type:"Thumb",height:imageHeight,tag:state.NowPlayingItem.ThumbImageTag});}
if(url){$('.nowPlayingImage',mediaControls).html('<img src="'+url+'" />');}else{$('.nowPlayingImage',mediaControls).html('');}
if(state.NowPlayingItem.LogoItemId){url=ApiClient.getScaledImageUrl(state.NowPlayingItem.LogoItemId,{type:"Logo",height:42,tag:state.NowPlayingItem.LogoImageTag});$('.videoTopControlsLogo',mediaControls).html('<img src="'+url+'" />');}else{$('.videoTopControlsLogo',mediaControls).html('');}
var elem=$('.nowPlayingTabs',mediaControls).html(getNowPlayingTabsHtml(item)).lazyChildren();$('.nowPlayingTabButton',elem).on('click',function(){if(!$(this).hasClass('selectedNowPlayingTabButton')){$('.selectedNowPlayingTabButton').removeClass('selectedNowPlayingTabButton');$(this).addClass('selectedNowPlayingTabButton');$('.nowPlayingTab').hide();$('.'+this.getAttribute('data-tab')).show().trigger('scroll');}});$('.chapterCard',elem).on('click',function(){self.seek(parseInt(this.getAttribute('data-position')));});};function getNowPlayingTabsHtml(item){var html='';html+='<div class="nowPlayingTabButtons">';html+='<a href="#" class="nowPlayingTabButton selectedNowPlayingTabButton" data-tab="tabInfo">'+Globalize.translate('TabInfo')+'</a>';if(item.Chapters&&item.Chapters.length){html+='<a href="#" class="nowPlayingTabButton" data-tab="tabScenes">'+Globalize.translate('TabScenes')+'</a>';}
if(item.People&&item.People.length){html+='<a href="#" class="nowPlayingTabButton" data-tab="tabCast">'+Globalize.translate('TabCast')+'</a>';}
html+='</div>';html+='<div class="tabInfo nowPlayingTab">';var nameHtml=MediaController.getNowPlayingNameHtml(item,false);nameHtml='<div class="videoNowPlayingName">'+nameHtml+'</div>';var miscInfo=LibraryBrowser.getMiscInfoHtml(item);if(miscInfo){nameHtml+='<div class="videoNowPlayingRating">'+miscInfo+'</div>';}
var ratingHtml=LibraryBrowser.getRatingHtml(item);if(ratingHtml){nameHtml+='<div class="videoNowPlayingRating">'+ratingHtml+'</div>';}
if(item.Overview){nameHtml+='<div class="videoNowPlayingOverview">'+item.Overview+'</div>';}
html+=nameHtml;html+='</div>';if(item.Chapters&&item.Chapters.length){html+='<div class="tabScenes nowPlayingTab hiddenScrollX" style="display:none;white-space:nowrap;margin-bottom:2em;">';var chapterIndex=0;html+=item.Chapters.map(function(c){var width=240;var chapterHtml='<a class="card backdropCard chapterCard" href="#" style="margin-right:1em;width:'+width+'px;" data-position="'+c.StartPositionTicks+'">';chapterHtml+='<div class="cardBox">';chapterHtml+='<div class="cardScalable">';chapterHtml+='<div class="cardPadder"></div>';chapterHtml+='<div class="cardContent">';if(c.ImageTag){var chapterImageUrl=ApiClient.getScaledImageUrl(item.Id,{width:width,tag:c.ImageTag,type:"Chapter",index:chapterIndex});chapterHtml+='<div class="cardImage lazy" data-src="'+chapterImageUrl+'"></div>';}else{chapterHtml+='<div class="cardImage" style="background:#444;"></div>';}
chapterHtml+='<div class="cardFooter">';if(c.Name){chapterHtml+='<div class="cardText">'+c.Name+'</div>';}
chapterHtml+='<div class="cardText">'+Dashboard.getDisplayTime(c.StartPositionTicks)+'</div>';chapterHtml+='</div>';chapterHtml+='</div>';chapterHtml+='</div>';chapterHtml+='</div>';chapterHtml+='</a>';chapterIndex++;return chapterHtml;}).join('');html+='</div>';}
if(item.People&&item.People.length){html+='<div class="tabCast nowPlayingTab hiddenScrollX" style="display:none;white-space:nowrap;">';html+=item.People.map(function(cast){var personHtml='<div class="tileItem smallPosterTileItem" style="width:300px;">';var imgUrl;var height=150;if(cast.PrimaryImageTag){imgUrl=ApiClient.getScaledImageUrl(cast.Id,{height:height,tag:cast.PrimaryImageTag,type:"primary",minScale:2});}else{imgUrl="css/images/items/list/person.png";}
personHtml+='<div class="tileImage lazy" data-src="'+imgUrl+'" style="height:'+height+'px;"></div>';personHtml+='<div class="tileContent">';personHtml+='<p>'+cast.Name+'</p>';var role=cast.Role?Globalize.translate('ValueAsRole',cast.Role):cast.Type;if(role=="GuestStar"){role=Globalize.translate('ValueGuestStar');}
role=role||"";var maxlength=40;if(role.length>maxlength){role=role.substring(0,maxlength-3)+'...';}
personHtml+='<p>'+role+'</p>';personHtml+='</div>';personHtml+='</div>';return personHtml;}).join('');html+='</div>';}
return html;}
function onPositionSliderChange(){var newPercent=parseInt(this.value);var newPositionTicks=(newPercent/100)*self.currentMediaSource.RunTimeTicks;self.changeStream(Math.floor(newPositionTicks));}
self.onChapterOptionSelected=function(elem){if(!$(elem).hasClass('selectedMediaPopupOption')){var ticks=parseInt(elem.getAttribute('data-value')||'0');self.changeStream(ticks);}
$('.videoChaptersPopup').popup('close');};self.onAudioOptionSelected=function(index){self.setAudioStreamIndex(index);};self.onSubtitleOptionSelected=function(index){self.setSubtitleStreamIndex(index);};self.onQualityOptionSelected=function(bitrate){AppSettings.maxStreamingBitrate(bitrate);$('.videoQualityPopup').popup('close');self.changeStream(self.getCurrentTicks(),{Bitrate:bitrate});};function ensureVideoPlayerElements(){var html='<div id="mediaPlayer" style="display: none;">';html+='<div class="videoBackdrop">';html+='<div id="videoPlayer">';html+='<div id="videoElement">';html+='<div id="play" class="status"></div>';html+='<div id="pause" class="status"></div>';html+='</div>';html+='<div class="videoTopControls hiddenOnIdle">';html+='<div class="videoTopControlsLogo"></div>';html+='<div class="videoAdvancedControls">';html+='<paper-icon-button icon="skip-previous" class="previousTrackButton mediaButton videoTrackControl hide" onclick="MediaPlayer.previousTrack();"></paper-icon-button>';html+='<paper-icon-button icon="skip-next" class="nextTrackButton mediaButton videoTrackControl hide" onclick="MediaPlayer.nextTrack();"></paper-icon-button>';html+='<paper-icon-button icon="audiotrack" class="mediaButton videoAudioButton" onclick="MediaPlayer.showAudioTracksFlyout();"></paper-icon-button>';html+='<paper-icon-button icon="subtitles" class="mediaButton videoSubtitleButton" onclick="MediaPlayer.showSubtitleMenu();"></paper-icon-button>';html+='<paper-icon-button icon="videocam" class="mediaButton videoChaptersButton" onclick="MediaPlayer.showChaptersFlyout();"></paper-icon-button>';html+='<div data-role="popup" class="videoChaptersPopup videoPlayerPopup" data-history="false" data-theme="b"></div>';html+='<paper-icon-button icon="settings" class="mediaButton videoQualityButton" onclick="MediaPlayer.showQualityFlyout();"></paper-icon-button>';html+='<paper-icon-button icon="close" class="mediaButton" onclick="MediaPlayer.stop();"></paper-icon-button>';html+='</div>';html+='</div>';html+='<div class="videoControls hiddenOnIdle">';html+='<div class="nowPlayingInfo hiddenOnIdle">';html+='<div class="nowPlayingImage"></div>';html+='<div class="nowPlayingTabs"></div>';html+='</div>';html+='<paper-icon-button icon="skip-previous" class="previousTrackButton mediaButton videoTrackControl hide" onclick="MediaPlayer.previousTrack();"></paper-icon-button>';html+='<paper-icon-button id="video-playButton" icon="play-arrow" class="mediaButton unpauseButton" onclick="MediaPlayer.unpause();"></paper-icon-button>';html+='<paper-icon-button id="video-pauseButton" icon="pause" class="mediaButton pauseButton" onclick="MediaPlayer.pause();"></paper-icon-button>';html+='<paper-icon-button icon="skip-next" class="nextTrackButton mediaButton videoTrackControl hide" onclick="MediaPlayer.nextTrack();"></paper-icon-button>';html+='<paper-slider pin step=".1" min="0" max="100" value="0" class="videoPositionSlider" style="width:300px;vertical-align:middle;margin-left:-1em;"></paper-slider>';html+='<div class="currentTime">--:--</div>';html+='<paper-icon-button icon="volume-up" class="muteButton mediaButton" onclick="MediaPlayer.mute();"></paper-icon-button>';html+='<paper-icon-button icon="volume-off" class="unmuteButton mediaButton" onclick="MediaPlayer.unMute();"></paper-icon-button>';html+='<paper-slider pin step="1" min="0" max="100" value="0" class="videoVolumeSlider" style="width:100px;vertical-align:middle;margin-left:-1em;"></paper-slider>';html+='<paper-icon-button icon="fullscreen" class="mediaButton fullscreenButton" onclick="MediaPlayer.toggleFullscreen();" id="video-fullscreenButton"></paper-icon-button>';html+='</div>';html+='</div>';html+='</div>';html+='</div>';var div=document.createElement('div');div.innerHTML=html;document.body.appendChild(div);$(div).trigger('create');}
Dashboard.ready(function(){ensureVideoPlayerElements();var parent=$("#mediaPlayer");muteButton=$('.muteButton',parent);unmuteButton=$('.unmuteButton',parent);currentTimeElement=$('.currentTime',parent);positionSlider=$(".videoPositionSlider",parent).on('change',onPositionSliderChange)[0];positionSlider._setPinValue=function(value){if(!self.currentMediaSource||!self.currentMediaSource.RunTimeTicks){this.pinValue='--:--';return;}
var ticks=self.currentMediaSource.RunTimeTicks;ticks/=100;ticks*=value;this.pinValue=Dashboard.getDisplayTime(ticks);};volumeSlider=$('.videoVolumeSlider',parent).on('change',function(){var vol=this.value;updateVolumeButtons(vol);self.setVolume(vol);})[0];});var idleHandlerTimeout;function idleHandler(){if(idleHandlerTimeout){window.clearTimeout(idleHandlerTimeout);}
if(idleState==true){$('.hiddenOnIdle').removeClass("inactive");$('#videoPlayer').removeClass('idlePlayer');}
idleState=false;idleHandlerTimeout=window.setTimeout(function(){idleState=true;$('.hiddenOnIdle').addClass("inactive");$('#videoPlayer').addClass('idlePlayer');},3500);}
function updateVolumeButtons(vol){if(vol){muteButton.show();unmuteButton.hide();}else{muteButton.hide();unmuteButton.show();}}
function requestFullScreen(element){var requestMethod=element.requestFullscreen||element.webkitRequestFullscreen||element.mozRequestFullScreen||element.msRequestFullscreen;if(requestMethod){requestMethod.call(element);}else{enterFullScreen();}}
function enterFullScreen(){var player=$("#videoPlayer");player.addClass("fullscreenVideo");}
function exitFullScreenToWindow(){var player=$("#videoPlayer");player.removeClass("fullscreenVideo");}
function getChaptersFlyoutHtml(){var item=self.currentItem;var currentTicks=self.getCurrentTicks();var chapters=item.Chapters||[];var html='';html+='<div class="videoPlayerPopupContent">';html+='<ul data-role="listview" data-inset="true"><li data-role="list-divider">'+Globalize.translate('HeaderScenes')+'</li>';html+='</ul>';html+='<div class="videoPlayerPopupScroller">';html+='<ul data-role="listview" data-inset="true">';var index=0;html+=chapters.map(function(chapter){var cssClass="mediaPopupOption";var selected=false;var onclick='';if(currentTicks>=chapter.StartPositionTicks){var nextChapter=chapters[index+1];selected=!nextChapter||currentTicks<nextChapter.StartPositionTicks;}
if(!selected){onclick=' onclick="MediaPlayer.onChapterOptionSelected(this);"';}
var optionHtml='<li><a'+onclick+' data-value="'+chapter.StartPositionTicks+'" class="'+cssClass+'" href="#" style="padding-top:0;padding-bottom:0;">';var imgUrl="css/images/media/chapterflyout.png";if(chapter.ImageTag){optionHtml+='<img src="'+imgUrl+'" style="visibility:hidden;" />';imgUrl=ApiClient.getScaledImageUrl(item.Id,{width:160,tag:chapter.ImageTag,type:"Chapter",index:index});optionHtml+='<div class="videoChapterPopupImage" style="background-image:url(\''+imgUrl+'\');"></div>';}else{optionHtml+='<img src="'+imgUrl+'" />';}
optionHtml+='<p style="margin:12px 0 0;">';var textLines=[];textLines.push(chapter.Name);textLines.push(Dashboard.getDisplayTime(chapter.StartPositionTicks));optionHtml+=textLines.join('<br/>');optionHtml+='</p>';optionHtml+='</a></li>';index++;return optionHtml;}).join('');html+='</ul>';html+='</div>';html+='</div>';return html;}
function onPopState(){self.stop();return;}
function onBodyMouseMove(){idleHandler();}
function onFullScreenChange(){if(self.isFullScreen()){enterFullScreen();idleState=true;}else{exitFullScreenToWindow();}}
function bindEventsForPlayback(mediaRenderer){var hideElementsOnIdle=true;if(hideElementsOnIdle){var itemVideo=document.querySelector('.itemVideo');if(itemVideo){Events.on(itemVideo,'mousemove',idleHandler);Events.on(itemVideo,'keydown',idleHandler);Events.on(itemVideo,'scroll',idleHandler);Events.on(itemVideo,'mousedown',idleHandler);idleHandler();}}
$(document).on('webkitfullscreenchange',onFullScreenChange);$(document).on('mozfullscreenchange',onFullScreenChange);$(document).on('msfullscreenchange',onFullScreenChange);$(document).on('fullscreenchange',onFullScreenChange);$(window).one("popstate",onPopState);if(hideElementsOnIdle){$(document.body).on("mousemove",onBodyMouseMove);}}
function unbindEventsForPlayback(mediaRenderer){$(document).off('webkitfullscreenchange',onFullScreenChange);$(document).off('mozfullscreenchange',onFullScreenChange);$(document).off('msfullscreenchange',onFullScreenChange);$(document).off('fullscreenchange',onFullScreenChange);$(window).off("popstate",onPopState);$(document.body).off("mousemove",onBodyMouseMove);var itemVideo=document.querySelector('.itemVideo');if(itemVideo){Events.off(itemVideo,'mousemove',idleHandler);Events.off(itemVideo,'keydown',idleHandler);Events.off(itemVideo,'scroll',idleHandler);Events.off(itemVideo,'mousedown',idleHandler);}}
self.cleanup=function(mediaRenderer){currentTimeElement.html('--:--');unbindEventsForPlayback(mediaRenderer);};self.playVideo=function(item,mediaSource,startPosition,callback){requirejs(['videorenderer'],function(){var streamInfo=self.createStreamInfo('Video',item,mediaSource,startPosition);if($.browser.safari&&!mediaSource.RunTimeTicks){Dashboard.showLoadingMsg();ApiClient.ajax({type:'GET',url:streamInfo.url.replace('master.m3u8','live.m3u8')}).always(function(){Dashboard.hideLoadingMsg();}).done(function(){self.playVideoInternal(item,mediaSource,startPosition,streamInfo,callback);});}else{self.playVideoInternal(item,mediaSource,startPosition,streamInfo,callback);}});};function supportsContentOverVideoPlayer(){return true;}
self.playVideoInternal=function(item,mediaSource,startPosition,streamInfo,callback){var videoUrl=streamInfo.url;var contentType=streamInfo.mimeType;var startPositionInSeekParam=streamInfo.startPositionInSeekParam;self.startTimeTicksOffset=streamInfo.startTimeTicksOffset;var mediaStreams=mediaSource.MediaStreams||[];var subtitleStreams=mediaStreams.filter(function(s){return s.Type=='Subtitle';});if(streamInfo.playMethod=='Transcode'&&videoUrl.indexOf('.m3u8')==-1){videoUrl+='&EnableAutoStreamCopy=false';}
var mediaPlayerContainer=$("#mediaPlayer").show();var videoControls=$('.videoControls',mediaPlayerContainer);$('#video-playButton',videoControls).hide();$('#video-pauseButton',videoControls).show();$('.videoTrackControl').visible(false);var videoElement=$('#videoElement',mediaPlayerContainer);$('.videoQualityButton',videoControls).show();if(mediaStreams.filter(function(s){return s.Type=="Audio";}).length){$('.videoAudioButton').show();}else{$('.videoAudioButton').hide();}
if(subtitleStreams.length){$('.videoSubtitleButton').show();}else{$('.videoSubtitleButton').hide();}
if(item.Chapters&&item.Chapters.length&&supportsContentOverVideoPlayer()){$('.videoChaptersButton').show();}else{$('.videoChaptersButton').hide();}
var mediaRenderer=new VideoRenderer({poster:self.getPosterUrl(item)});var requiresNativeControls=!mediaRenderer.enableCustomVideoControls();if(requiresNativeControls){$('#video-fullscreenButton',videoControls).hide();}else{$('#video-fullscreenButton',videoControls).show();}
if(AppInfo.hasPhysicalVolumeButtons){$(volumeSlider).visible(false);$('.muteButton',videoControls).addClass('hide');$('.unmuteButton',videoControls).addClass('hide');}else{$(volumeSlider).visible(true);$('.muteButton',videoControls).removeClass('hide');$('.unmuteButton',videoControls).removeClass('hide');}
if(requiresNativeControls){videoControls.addClass('hide');}else{videoControls.removeClass('hide');}
initialVolume=self.getSavedVolume();mediaRenderer.volume(initialVolume);volumeSlider.value=initialVolume*100;updateVolumeButtons(initialVolume);$(mediaRenderer).on("volumechange.mediaplayerevent",function(e){updateVolumeButtons(this.volume());}).one("playing.mediaplayerevent",function(){$(this).on("ended",self.onPlaybackStopped).one('ended',self.playNextAfterEnded);self.onPlaybackStart(this,item,mediaSource);}).on("pause.mediaplayerevent",function(e){$('#video-playButton',videoControls).show();$('#video-pauseButton',videoControls).hide();$("#pause",videoElement).show().addClass("fadeOut");setTimeout(function(){$("#pause",videoElement).hide().removeClass("fadeOut");},300);}).on("playing.mediaplayerevent",function(e){$('#video-playButton',videoControls).hide();$('#video-pauseButton',videoControls).show();$("#play",videoElement).show().addClass("fadeOut");setTimeout(function(){$("#play",videoElement).hide().removeClass("fadeOut");},300);}).on("timeupdate.mediaplayerevent",function(){if(!positionSlider.dragging){self.setCurrentTime(self.getCurrentTicks(this),positionSlider,currentTimeElement);}}).on("error.mediaplayerevent",function(){self.stop();var errorMsg=Globalize.translate('MessageErrorPlayingVideo');if(item.Type=="TvChannel"){errorMsg+='<p>';errorMsg+=Globalize.translate('MessageEnsureOpenTuner');errorMsg+='</p>';}
Dashboard.alert({title:Globalize.translate('HeaderVideoError'),message:errorMsg});}).on("click.mediaplayerevent",function(e){if(!$.browser.mobile){if(this.paused()){self.unpause();}else{self.pause();}}}).on("dblclick.mediaplayerevent",function(){if(!$.browser.mobile){self.toggleFullscreen();}});bindEventsForPlayback(mediaRenderer);self.currentSubtitleStreamIndex=mediaSource.DefaultSubtitleStreamIndex;$(document.body).addClass('bodyWithPopupOpen');self.currentMediaRenderer=mediaRenderer;self.currentDurationTicks=self.currentMediaSource.RunTimeTicks;self.updateNowPlayingInfo(item);mediaRenderer.init().done(function(){var textStreams=subtitleStreams.filter(function(s){return s.DeliveryMethod=='External';});var tracks=[];for(var i=0,length=textStreams.length;i<length;i++){var textStream=textStreams[i];var textStreamUrl=!textStream.IsExternalUrl?ApiClient.getUrl(textStream.DeliveryUrl):textStream.DeliveryUrl;tracks.push({url:textStreamUrl,language:(textStream.Language||'und'),isDefault:textStream.Index==mediaSource.DefaultSubtitleStreamIndex});}
mediaRenderer.setCurrentSrc(videoUrl,item,mediaSource,tracks);if(callback){callback();}});};self.updatePlaylistUi=function(){var index=self.currentPlaylistIndex(null);var length=self.playlist.length;var requiresNativeControls=false;if(self.currentMediaRenderer&&!self.currentMediaRenderer.enableCustomVideoControls){requiresNativeControls=self.currentMediaRenderer.enableCustomVideoControls();}
if(length<2){$('.videoTrackControl').visible(false);return;}
var controls=requiresNativeControls?'.videoAdvancedControls':'.videoControls';controls=document.querySelector(controls);var previousTrackButton=controls.getElementsByClassName('previousTrackButton')[0];var nextTrackButton=controls.getElementsByClassName('nextTrackButton')[0];if(index===0){previousTrackButton.setAttribute('disabled','disabled');}else{previousTrackButton.removeAttribute('disabled');}
if((index+1)>=length){nextTrackButton.setAttribute('disabled','disabled');}else{nextTrackButton.removeAttribute('disabled');}
$(previousTrackButton).visible(true);$(nextTrackButton).visible(true);};}
createVideoPlayer(MediaPlayer);})();(function(window,document,$,setTimeout,clearTimeout){var currentPlayer;var currentTimeElement;var nowPlayingImageElement;var nowPlayingTextElement;var nowPlayingUserData;var unmuteButton;var muteButton;var volumeSlider;var unpauseButton;var pauseButton;var positionSlider;var lastPlayerState;function getNowPlayingBarHtml(){var html='';html+='<div class="nowPlayingBar" style="display:none;">';html+='<div class="nowPlayingBarPositionContainer">';html+='<paper-slider pin step=".1" min="0" max="100" value="0" class="nowPlayingBarPositionSlider"></paper-slider>';html+='</div>';html+='<div class="nowPlayingBarInfoContainer">';html+='<div class="nowPlayingImage"></div>';html+='<div class="nowPlayingBarText"></div>';html+='</div>';html+='<div class="nowPlayingBarCenter">';html+='<paper-icon-button icon="skip-previous" class="previousTrackButton mediaButton"></paper-icon-button>';html+='<paper-icon-button icon="play-arrow" class="mediaButton unpauseButton"></paper-icon-button>';html+='<paper-icon-button icon="pause" class="mediaButton pauseButton"></paper-icon-button>';html+='<paper-icon-button icon="stop" class="stopButton mediaButton"></paper-icon-button>';html+='<paper-icon-button icon="skip-next" class="nextTrackButton mediaButton"></paper-icon-button>';html+='<div class="nowPlayingBarCurrentTime"></div>';html+='</div>';html+='<div class="nowPlayingBarRight">';html+='<paper-icon-button icon="volume-up" class="muteButton mediaButton"></paper-icon-button>';html+='<paper-icon-button icon="volume-off" class="unmuteButton mediaButton"></paper-icon-button>';html+='<paper-slider pin step="1" min="0" max="100" value="0" class="nowPlayingBarVolumeSlider" style="width:100px;vertical-align:middle;"></paper-slider>';html+='<div class="nowPlayingBarUserDataButtons">';html+='</div>';html+='<paper-icon-button icon="play-arrow" class="mediaButton unpauseButton"></paper-icon-button>';html+='<paper-icon-button icon="pause" class="mediaButton pauseButton"></paper-icon-button>';html+='<paper-icon-button icon="tablet-android" onclick="Dashboard.navigate(\'nowplaying.html\', false);" class="mediaButton remoteControlButton"></paper-icon-button>';html+='<paper-icon-button icon="queue-music" class="mediaButton playlistButton"></paper-icon-button>';html+='</div>';html+='</div>';return html;}
function bindEvents(elem){currentTimeElement=$('.nowPlayingBarCurrentTime',elem);nowPlayingImageElement=$('.nowPlayingImage',elem);nowPlayingTextElement=$('.nowPlayingBarText',elem);nowPlayingUserData=$('.nowPlayingBarUserDataButtons',elem);$(elem).on('swipeup',function(){Dashboard.navigate('nowplaying.html');});unmuteButton=$('.unmuteButton',elem).on('click',function(){if(currentPlayer){currentPlayer.unMute();}});muteButton=$('.muteButton',elem).on('click',function(){if(currentPlayer){currentPlayer.mute();}});$('.stopButton',elem).on('click',function(){if(currentPlayer){currentPlayer.stop();}});pauseButton=$('.pauseButton',elem).on('click',function(){if(currentPlayer){currentPlayer.pause();}});unpauseButton=$('.unpauseButton',elem).on('click',function(){if(currentPlayer){currentPlayer.unpause();}});$('.nextTrackButton',elem).on('click',function(){if(currentPlayer){currentPlayer.nextTrack();}});$('.previousTrackButton',elem).on('click',function(){if(currentPlayer){currentPlayer.previousTrack();}});$('.playlistButton',elem).on('click',function(){$.mobile.changePage('nowplaying.html',{dataUrl:'nowplaying.html#playlist'});});setTimeout(function(){volumeSlider=$('.nowPlayingBarVolumeSlider',elem).on('change',function(){if(currentPlayer){currentPlayer.setVolume(this.value);}})[0];positionSlider=$('.nowPlayingBarPositionSlider',elem).on('change',function(){if(currentPlayer&&lastPlayerState){var newPercent=parseFloat(this.value);var newPositionTicks=(newPercent/100)*lastPlayerState.NowPlayingItem.RunTimeTicks;currentPlayer.seek(Math.floor(newPositionTicks));}})[0];positionSlider._setPinValue=function(value){var state=lastPlayerState;if(!state||!state.NowPlayingItem||!state.NowPlayingItem.RunTimeTicks){this.pinValue='--:--';return;}
var ticks=state.NowPlayingItem.RunTimeTicks;ticks/=100;ticks*=value;this.pinValue=Dashboard.getDisplayTime(ticks);};},300);}
function getNowPlayingBar(){var elem=document.querySelector('.nowPlayingBar');if(elem){return elem;}
elem=$(getNowPlayingBarHtml()).insertBefore('#footerNotifications')[0];if(($.browser.safari||!AppInfo.isNativeApp)&&$.browser.mobile){elem.classList.add('noMediaProgress');}
bindEvents(elem);$.mobile.loadPage('nowplaying.html');return elem;}
function showButton(button){button.removeClass('hide');}
function hideButton(button){button.addClass('hide');}
var lastUpdateTime=0;function updatePlayerState(event,state){if(state.NowPlayingItem){showNowPlayingBar();}else{hideNowPlayingBar();return;}
if(event.type=='positionchange'){var now=new Date().getTime();if((now-lastUpdateTime)<700){return;}
lastUpdateTime=now;}
lastPlayerState=state;if(!muteButton){getNowPlayingBar();}
var playerInfo=MediaController.getPlayerInfo();var playState=state.PlayState||{};if(playState.IsPaused){hideButton(pauseButton);showButton(unpauseButton);}else{showButton(pauseButton);hideButton(unpauseButton);}
updatePlayerVolumeState(state,playerInfo);var nowPlayingItem=state.NowPlayingItem||{};if(positionSlider){if(!positionSlider.dragging){if(nowPlayingItem.RunTimeTicks){var pct=playState.PositionTicks/nowPlayingItem.RunTimeTicks;pct*=100;positionSlider.value=pct;}else{positionSlider.value=0;}
positionSlider.disabled=!playState.CanSeek;}}
var timeText=Dashboard.getDisplayTime(playState.PositionTicks);if(nowPlayingItem.RunTimeTicks){timeText+=" / "+Dashboard.getDisplayTime(nowPlayingItem.RunTimeTicks);}
currentTimeElement.html(timeText);updateNowPlayingInfo(state);}
function updatePlayerVolumeState(state,playerInfo){playerInfo=playerInfo||MediaController.getPlayerInfo();if(!muteButton){getNowPlayingBar();}
var playState=state.PlayState||{};var supportedCommands=playerInfo.supportedCommands;var showMuteButton=true;var showUnmuteButton=true;var showVolumeSlider=true;if(supportedCommands.indexOf('Mute')==-1){showMuteButton=false;}
if(supportedCommands.indexOf('Unmute')==-1){showUnmuteButton=false;}
if(playState.IsMuted){showMuteButton=false;}else{showUnmuteButton=false;}
if(supportedCommands.indexOf('SetVolume')==-1){showVolumeSlider=false;}
if(playerInfo.isLocalPlayer&&AppInfo.hasPhysicalVolumeButtons){showMuteButton=false;showUnmuteButton=false;showVolumeSlider=false;}
if(showMuteButton){showButton(muteButton);}else{hideButton(muteButton);}
if(showUnmuteButton){showButton(unmuteButton);}else{hideButton(unmuteButton);}
if(volumeSlider){$(volumeSlider).visible(showVolumeSlider);if(!volumeSlider.dragging){volumeSlider.value=playState.VolumeLevel||0;}}}
var currentImgUrl;function updateNowPlayingInfo(state){var nameHtml=MediaController.getNowPlayingNameHtml(state.NowPlayingItem)||'';if(nameHtml.indexOf('<br/>')!=-1){nowPlayingTextElement.addClass('nowPlayingDoubleText');}else{nowPlayingTextElement.removeClass('nowPlayingDoubleText');}
if(state.NowPlayingItem.Id){nameHtml='<a style="color:inherit;text-decoration:none;" href="'+LibraryBrowser.getHref(state.NowPlayingItem)+'">'+nameHtml+'</a>';}
nowPlayingTextElement.html(nameHtml);var url;var imgHeight=80;var nowPlayingItem=state.NowPlayingItem;if(nowPlayingItem.PrimaryImageTag){url=ApiClient.getScaledImageUrl(nowPlayingItem.PrimaryImageItemId,{type:"Primary",height:imgHeight,tag:nowPlayingItem.PrimaryImageTag});}
else if(nowPlayingItem.BackdropImageTag){url=ApiClient.getScaledImageUrl(nowPlayingItem.BackdropItemId,{type:"Backdrop",height:imgHeight,tag:nowPlayingItem.BackdropImageTag,index:0});}else if(nowPlayingItem.ThumbImageTag){url=ApiClient.getScaledImageUrl(nowPlayingItem.ThumbImageItemId,{type:"Thumb",height:imgHeight,tag:nowPlayingItem.ThumbImageTag});}
else if(nowPlayingItem.Type=="TvChannel"||nowPlayingItem.Type=="Recording"){url="css/images/items/detail/tv.png";}
else if(nowPlayingItem.MediaType=="Audio"){url="css/images/items/detail/audio.png";}
else{url="css/images/items/detail/video.png";}
if(url==currentImgUrl){return;}
currentImgUrl=url;var imgHtml='<img src="'+url+'" />';nowPlayingImageElement.html(imgHtml);if(nowPlayingItem.Id){ApiClient.getItem(Dashboard.getCurrentUserId(),nowPlayingItem.Id).done(function(item){nowPlayingUserData.html(LibraryBrowser.getUserDataIconsHtml(item,false));});}else{nowPlayingUserData.html('');}}
function onPlaybackStart(e,state){Logger.log('nowplaying event: '+e.type);var player=this;player.beginPlayerUpdates();onStateChanged.call(player,e,state);}
function showNowPlayingBar(){var nowPlayingBar=getNowPlayingBar();$(nowPlayingBar).show();}
function hideNowPlayingBar(){var elem=document.getElementsByClassName('nowPlayingBar')[0];if(elem){elem.style.display='none';}}
function onPlaybackStopped(e,state){Logger.log('nowplaying event: '+e.type);var player=this;player.endPlayerUpdates();hideNowPlayingBar();}
function onStateChanged(e,state){var player=this;if(player.isDefaultPlayer&&state.NowPlayingItem&&state.NowPlayingItem.MediaType=='Video'){return;}
updatePlayerState(e,state);}
function releaseCurrentPlayer(){if(currentPlayer){$(currentPlayer).off('playbackstart',onPlaybackStart).off('playbackstop',onPlaybackStopped).off('volumechange',onVolumeChanged).off('playstatechange',onStateChanged).off('positionchange',onStateChanged);currentPlayer.endPlayerUpdates();currentPlayer=null;hideNowPlayingBar();}}
function onVolumeChanged(e){var player=this;player.getPlayerState().done(function(state){if(player.isDefaultPlayer&&state.NowPlayingItem&&state.NowPlayingItem.MediaType=='Video'){return;}
updatePlayerVolumeState(state);});}
function bindToPlayer(player){releaseCurrentPlayer();currentPlayer=player;player.getPlayerState().done(function(state){if(state.NowPlayingItem){player.beginPlayerUpdates();}
onStateChanged.call(player,{type:'init'},state);});$(player).on('playbackstart',onPlaybackStart).on('playbackstop',onPlaybackStopped).on('volumechange',onVolumeChanged).on('playstatechange',onStateChanged).on('positionchange',onStateChanged);}
Dashboard.ready(function(){Events.on(MediaController,'playerchange',function(){bindToPlayer(MediaController.getCurrentPlayer());});bindToPlayer(MediaController.getCurrentPlayer());});})(window,document,jQuery,setTimeout,clearTimeout);(function(window,document,$){function getPickerHtml(){var html='';html+='<a href="#">#</a>';html+='<a href="#">A</a>';html+='<a href="#">B</a>';html+='<a href="#">C</a>';html+='<a href="#">D</a>';html+='<a href="#">E</a>';html+='<a href="#">F</a>';html+='<a href="#">G</a>';html+='<a href="#">H</a>';html+='<a href="#">I</a>';html+='<a href="#">J</a>';html+='<a href="#">K</a>';html+='<a href="#">L</a>';html+='<a href="#">M</a>';html+='<a href="#">N</a>';html+='<a href="#">O</a>';html+='<a href="#">P</a>';html+='<a href="#">Q</a>';html+='<a href="#">R</a>';html+='<a href="#">S</a>';html+='<a href="#">T</a>';html+='<a href="#">U</a>';html+='<a href="#">V</a>';html+='<a href="#">W</a>';html+='<a href="#">X</a>';html+='<a href="#">Y</a>';html+='<a href="#">Z</a>';return html;}
$(document).on('pageinitdepends',".libraryPage",function(){var page=this;var picker=page.querySelector('.alphabetPicker');if(!picker){return;}
$('.itemsContainer',page).addClass('itemsContainerWithAlphaPicker');picker.innerHTML=getPickerHtml();Events.on(picker,'click','a',function(){var elem=this;var isSelected=elem.classList.contains('selectedCharacter');$('.selectedCharacter',picker).removeClass('selectedCharacter');if(!isSelected){elem.classList.add('selectedCharacter');Events.trigger(picker,'alphaselect',[this.innerHTML]);}else{Events.trigger(picker,'alphaclear');}});});$.fn.alphaValue=function(val){if(val==null){return $('.selectedCharacter',this).html();}
val=val.toLowerCase();$('.selectedCharacter',this).removeClass('selectedCharacter');$('a',this).each(function(){if(this.innerHTML.toLowerCase()==val){this.classList.add('selectedCharacter');}else{this.classList.remove('selectedCharacter');}});return this;};$.fn.alphaClear=function(val){return this.alphaValue('');};})(window,document,jQuery);(function(window,document,$){function refreshDirectoryBrowser(page,path,fileOptions){Dashboard.showLoadingMsg();if(path){$('.networkHeadline').hide();}else{$('.networkHeadline').show();}
var promise;var parentPathPromise=null;if(path==="Network"){promise=ApiClient.getNetworkDevices();}
else if(path){promise=ApiClient.getDirectoryContents(path,fileOptions);parentPathPromise=ApiClient.getParentPath(path);}else{promise=ApiClient.getDrives();}
if(!parentPathPromise){parentPathPromise=$.Deferred();parentPathPromise.resolveWith(null,[]);parentPathPromise=parentPathPromise.promise();}
$.when(promise,parentPathPromise).done(function(response1,response2){var folders=response1[0];var parentPath=response2&&response2.length?response2[0]||'':'';$('#txtDirectoryPickerPath',page).val(path||"");var html='';if(path){html+='<li><a class="lnkPath lnkDirectory" data-path="'+parentPath+'" href="#">..</a></li>';}
for(var i=0,length=folders.length;i<length;i++){var folder=folders[i];var cssClass=folder.Type=="File"?"lnkPath lnkFile":"lnkPath lnkDirectory";html+='<li><a class="'+cssClass+'" data-type="'+folder.Type+'" data-path="'+folder.Path+'" href="#">'+folder.Name+'</a></li>';}
if(!path){html+='<li><a class="lnkPath lnkDirectory" data-path="Network" href="#">'+Globalize.translate('ButtonNetwork')+'</a></li>';}
$('#ulDirectoryPickerList',page).html(html).listview('refresh');Dashboard.hideLoadingMsg();}).fail(function(){$('#txtDirectoryPickerPath',page).val("");$('#ulDirectoryPickerList',page).html('').listview('refresh');Dashboard.hideLoadingMsg();});}
window.DirectoryBrowser=function(page){var self=this;self.show=function(options){options=options||{};var fileOptions={includeDirectories:true};if(options.includeDirectories!=null){fileOptions.includeDirectories=options.includeDirectories;}
if(options.includeFiles!=null){fileOptions.includeFiles=options.includeFiles;}
options.header=options.header||Globalize.translate('HeaderSelectPath');options.instruction=options.instruction||"";var html='<div data-role="popup" id="popupDirectoryPicker" class="popup" style="min-width:65%;">';html+='<div class="ui-bar-a" style="text-align: center; padding: 0 20px;">';html+='<h3>'+options.header+'</h3>';html+='</div>';html+='<div data-role="content" class="ui-content">';html+='<form>';var instruction=options.instruction?options.instruction+'<br/><br/>':'';html+='<p class="directoryPickerHeadline">';html+=instruction;html+=Globalize.translate('MessageDirectoryPickerInstruction').replace('{0}','<b>\\\\server</b>').replace('{1}','<b>\\\\192.168.1.101</b>');html+='</p>';html+='<div style="margin:20px 0 0;">';html+='<label for="txtDirectoryPickerPath" class="lblDirectoryPickerPath">'+Globalize.translate('LabelCurrentPath')+'</label>';html+='<div style="width:82%;display:inline-block;"><input id="txtDirectoryPickerPath" name="txtDirectoryPickerPath" type="text" required="required" style="font-weight:bold;" /></div>';html+='<button class="btnRefreshDirectories" type="button" data-icon="refresh" data-inline="true" data-mini="true" data-iconpos="notext">'+Globalize.translate('ButtonRefresh')+'</button>';html+='</div>';html+='<div style="height: 180px; overflow-y: auto;">';html+='<ul id="ulDirectoryPickerList" data-role="listview" data-inset="true" data-auto-enhanced="false"></ul>';html+='</div>';html+='<p>';html+='<button type="submit" data-theme="b" data-icon="check" data-mini="true">'+Globalize.translate('ButtonOk')+'</button>';html+='<button type="button" data-icon="delete" onclick="$(this).parents(\'.popup\').popup(\'close\');" data-mini="true">'+Globalize.translate('ButtonCancel')+'</button>';html+='</p>';html+='</form>';html+='</div>';html+='</div>';$(page).append(html);var popup=$('#popupDirectoryPicker').popup().trigger('create').on("popupafteropen",function(){$('#popupDirectoryPicker input:first',this).focus();}).popup("open").on("popupafterclose",function(){$('form',this).off("submit");$(this).off("click").off("change").off("popupafterclose").remove();}).on("click",".lnkPath",function(){var path=this.getAttribute('data-path');if($(this).hasClass('lnkFile')){$('#txtDirectoryPickerPath',page).val(path);}else{refreshDirectoryBrowser(page,path,fileOptions);}}).on("click",".btnRefreshDirectories",function(){var path=$('#txtDirectoryPickerPath',page).val();refreshDirectoryBrowser(page,path,fileOptions);}).on("change","#txtDirectoryPickerPath",function(){refreshDirectoryBrowser(page,this.value,fileOptions);});var txtCurrentPath=$('#txtDirectoryPickerPath',popup);if(options.path){txtCurrentPath.val(options.path);}
$('form',popup).on('submit',function(){if(options.callback){options.callback($('#txtDirectoryPickerPath',this).val());}
return false;});refreshDirectoryBrowser(page,txtCurrentPath.val());};self.close=function(){$('#popupDirectoryPicker',page).popup("close");};};})(window,document,jQuery);(function($,document){var view=LibraryBrowser.getDefaultItemsView('Poster','Poster');var query={SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"BoxSet",Recursive:true,Fields:"PrimaryImageAspectRatio,SortName,SyncInfo,CanDelete",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"};function getSavedQueryKey(){return'collections'+(query.ParentId||'');}
function reloadItems(page){Dashboard.showLoadingMsg();var promise1=ApiClient.getItems(Dashboard.getCurrentUserId(),query);var promise2=Dashboard.getCurrentUser();$.when(promise1,promise2).done(function(response1,response2){var result=response1[0];var user=response2[0];window.scrollTo(0,0);var html='';$('.listTopPaging',page).html(LibraryBrowser.getQueryPagingHtml({startIndex:query.StartIndex,limit:query.Limit,totalRecordCount:result.TotalRecordCount,viewButton:true,showLimit:false,})).trigger('create');updateFilterControls(page);var trigger=false;if(result.TotalRecordCount){if(view=="List"){html=LibraryBrowser.getListViewHtml({items:result.Items,context:'movies',sortBy:query.SortBy});trigger=true;}
else if(view=="Poster"){html=LibraryBrowser.getPosterViewHtml({items:result.Items,shape:"auto",context:'movies',showTitle:true,centerText:true,lazy:true});}
else if(view=="PosterCard"){html=LibraryBrowser.getPosterViewHtml({items:result.Items,shape:"auto",context:'movies',showTitle:true,cardLayout:true,lazy:true,showItemCounts:true});}
else if(view=="Thumb"){html=LibraryBrowser.getPosterViewHtml({items:result.Items,shape:"backdrop",context:'movies',showTitle:true,centerText:true,lazy:true,preferThumb:true});}
else if(view=="ThumbCard"){html=LibraryBrowser.getPosterViewHtml({items:result.Items,shape:"backdrop",context:'movies',showTitle:true,lazy:true,preferThumb:true,cardLayout:true,showItemCounts:true});}
$('.noItemsMessage',page).hide();}else{$('.noItemsMessage',page).show();}
var elem=page.querySelector('.itemsContainer');elem.innerHTML=html;ImageLoader.lazyChildren(elem);if(trigger){$(elem).trigger('create');}
$('.btnNextPage',page).on('click',function(){query.StartIndex+=query.Limit;reloadItems(page);});$('.btnPreviousPage',page).on('click',function(){query.StartIndex-=query.Limit;reloadItems(page);});LibraryBrowser.saveQueryValues(getSavedQueryKey(),query);Dashboard.hideLoadingMsg();});}
function updateFilterControls(page){$('.radioSortBy',page).each(function(){this.checked=(query.SortBy||'').toLowerCase()==this.getAttribute('data-sortby').toLowerCase();}).checkboxradio('refresh');$('.radioSortOrder',page).each(function(){this.checked=(query.SortOrder||'').toLowerCase()==this.getAttribute('data-sortorder').toLowerCase();}).checkboxradio('refresh');$('.chkStandardFilter',page).each(function(){var filters=","+(query.Filters||"");var filterName=this.getAttribute('data-filter');this.checked=filters.indexOf(','+filterName)!=-1;}).checkboxradio('refresh');$('#selectView',page).val(view).selectmenu('refresh');$('#chkTrailer',page).checked(query.HasTrailer==true).checkboxradio('refresh');$('#chkThemeSong',page).checked(query.HasThemeSong==true).checkboxradio('refresh');$('#chkThemeVideo',page).checked(query.HasThemeVideo==true).checkboxradio('refresh');$('#selectPageSize',page).val(query.Limit).selectmenu('refresh');}
$(document).on('pageinitdepends',"#boxsetsPage",function(){var page=this;$('.radioSortBy',this).on('click',function(){query.SortBy=this.getAttribute('data-sortby');reloadItems(page);});$('.radioSortOrder',this).on('click',function(){query.SortOrder=this.getAttribute('data-sortorder');reloadItems(page);});$('.chkStandardFilter',this).on('change',function(){var filterName=this.getAttribute('data-filter');var filters=query.Filters||"";filters=(','+filters).replace(','+filterName,'').substring(1);if(this.checked){filters=filters?(filters+','+filterName):filterName;}
query.StartIndex=0;query.Filters=filters;reloadItems(page);});$('#chkTrailer',this).on('change',function(){query.StartIndex=0;query.HasTrailer=this.checked?true:null;reloadItems(page);});$('#chkThemeSong',this).on('change',function(){query.StartIndex=0;query.HasThemeSong=this.checked?true:null;reloadItems(page);});$('#chkThemeVideo',this).on('change',function(){query.StartIndex=0;query.HasThemeVideo=this.checked?true:null;reloadItems(page);});$('#selectView',this).on('change',function(){view=this.value;reloadItems(page);LibraryBrowser.saveViewSetting(getSavedQueryKey(),view);});$('#selectPageSize',page).on('change',function(){query.Limit=parseInt(this.value);query.StartIndex=0;reloadItems(page);});}).on('pagebeforeshowready',"#boxsetsPage",function(){var page=this;var context=getParameterByName('context');if(context=='movies'){$('.collectionTabs',page).hide();$('.movieTabs',page).show();query.ParentId=null;}else{$('.collectionTabs',page).show();$('.movieTabs',page).hide();query.ParentId=LibraryMenu.getTopParentId();query.ParentId=null;}
var limit=LibraryBrowser.getDefaultPageSize();if(limit!=query.Limit){query.Limit=limit;query.StartIndex=0;}
var viewkey=getSavedQueryKey();LibraryBrowser.loadSavedQueryValues(viewkey,query);LibraryBrowser.getSavedViewSetting(viewkey).done(function(val){if(val){$('#selectView',page).val(val).selectmenu('refresh').trigger('change');}else{reloadItems(page);}});updateFilterControls(this);});})(jQuery,document);(function($,document){function getNewCollectionPanel(createIfNeeded){var panel=$('.newCollectionPanel');if(createIfNeeded&&!panel.length){var html='';html+='<div>';html+='<div data-role="panel" class="newCollectionPanel" data-position="right" data-display="overlay" data-position-fixed="true" data-theme="a">';html+='<form class="newCollectionForm">';html+='<h3>'+Globalize.translate('HeaderAddToCollection')+'</h3>';html+='<div class="fldSelectCollection">';html+='<br />';html+='<label for="selectCollectionToAddTo">'+Globalize.translate('LabelSelectCollection')+'</label>';html+='<select id="selectCollectionToAddTo" data-mini="true"></select>';html+='</div>';html+='<div class="newCollectionInfo">';html+='<br />';html+='<div>';html+='<label for="txtNewCollectionName">'+Globalize.translate('LabelName')+'</label>';html+='<input type="text" id="txtNewCollectionName" required="required" />';html+='<div class="fieldDescription">'+Globalize.translate('NewCollectionNameExample')+'</div>';html+='</div>';html+='<br />';html+='<div>';html+='<label for="chkEnableInternetMetadata">'+Globalize.translate('OptionSearchForInternetMetadata')+'</label>';html+='<input type="checkbox" id="chkEnableInternetMetadata" data-mini="true" />';html+='</div>';html+='</div>';html+='<br />';html+='<p>';html+='<input class="fldSelectedItemIds" type="hidden" />';html+='<button type="submit" data-icon="plus" data-mini="true" data-theme="b">'+Globalize.translate('ButtonSubmit')+'</button>';html+='</p>';html+='</form>';html+='</div>';html+='</div>';panel=$(html).appendTo(document.body).trigger('create').find('.newCollectionPanel');$('#selectCollectionToAddTo',panel).on('change',function(){if(this.value){$('.newCollectionInfo',panel).hide();$('#txtNewCollectionName',panel).removeAttr('required');}else{$('.newCollectionInfo',panel).show();$('#txtNewCollectionName',panel).attr('required','required');}});$('.newCollectionForm',panel).off('submit',BoxSetEditor.onNewCollectionSubmit).on('submit',BoxSetEditor.onNewCollectionSubmit);}
return panel;}
function showCollectionPanel(items){var panel=getNewCollectionPanel(true).panel('toggle');$('.fldSelectedItemIds',panel).val(items.join(','));require(['jqmicons']);if(items.length){$('.fldSelectCollection',panel).show();populateCollections(panel);}else{$('.fldSelectCollection',panel).hide();$('#selectCollectionToAddTo',panel).html('').val('').selectmenu('refresh').trigger('change');}}
function populateCollections(panel){var select=$('#selectCollectionToAddTo',panel);$('.newCollectionInfo',panel).hide();var options={Recursive:true,IncludeItemTypes:"BoxSet",SortBy:"SortName"};ApiClient.getItems(Dashboard.getCurrentUserId(),options).done(function(result){var html='';html+='<option value="">'+Globalize.translate('OptionNewCollection')+'</option>';html+=result.Items.map(function(i){return'<option value="'+i.Id+'">'+i.Name+'</option>';});select.html(html).val('').selectmenu('refresh').trigger('change');});}
$(document).on('pageinitdepends',".collectionEditorPage",function(){var page=this;$(page).on('click','.btnNewCollection',function(){showCollectionPanel([]);});});function redirectToCollection(id){var context=getParameterByName('context');ApiClient.getItem(Dashboard.getCurrentUserId(),id).done(function(item){Dashboard.navigate(LibraryBrowser.getHref(item,context));});}
function createCollection(panel){var url=ApiClient.getUrl("Collections",{Name:$('#txtNewCollectionName',panel).val(),IsLocked:!$('#chkEnableInternetMetadata',panel).checked(),Ids:$('.fldSelectedItemIds',panel).val()||''});ApiClient.ajax({type:"POST",url:url,dataType:"json"}).done(function(result){Dashboard.hideLoadingMsg();var id=result.Id;panel.panel('toggle');redirectToCollection(id);});}
function addToCollection(panel,id){var url=ApiClient.getUrl("Collections/"+id+"/Items",{Ids:$('.fldSelectedItemIds',panel).val()||''});ApiClient.ajax({type:"POST",url:url}).done(function(){Dashboard.hideLoadingMsg();panel.panel('toggle');Dashboard.alert(Globalize.translate('MessageItemsAdded'));});}
window.BoxSetEditor={showPanel:function(items){showCollectionPanel(items);},onNewCollectionSubmit:function(){Dashboard.showLoadingMsg();var panel=getNewCollectionPanel(false);var collectionId=$('#selectCollectionToAddTo',panel).val();if(collectionId){addToCollection(panel,collectionId);}else{createCollection(panel);}
return false;},supportsAddingToCollection:function(item){var invalidTypes=['Person','Genre','MusicGenre','Studio','GameGenre','BoxSet','Playlist','UserView','CollectionFolder','Audio','Episode'];return item.LocationType=='FileSystem'&&!item.CollectionType&&invalidTypes.indexOf(item.Type)==-1&&item.MediaType!='Photo';}};})(jQuery,document);(function($,document,Dashboard,LibraryBrowser){function notifications(){var self=this;self.getNotificationsSummaryPromise=null;self.total=0;self.getNotificationsSummary=function(){var apiClient=window.ApiClient;if(!apiClient){return;}
self.getNotificationsSummaryPromise=self.getNotificationsSummaryPromise||apiClient.getNotificationSummary(Dashboard.getCurrentUserId());return self.getNotificationsSummaryPromise;};self.updateNotificationCount=function(){if(!Dashboard.getCurrentUserId()){return;}
var promise=self.getNotificationsSummary();if(!promise){return;}
promise.done(function(summary){var item=$('.btnNotificationsInner').removeClass('levelNormal').removeClass('levelWarning').removeClass('levelError').html(summary.UnreadCount);if(summary.UnreadCount){item.addClass('level'+summary.MaxUnreadNotificationLevel);}});};self.markNotificationsRead=function(ids,callback){ApiClient.markNotificationsRead(Dashboard.getCurrentUserId(),ids,true).done(function(){self.getNotificationsSummaryPromise=null;self.updateNotificationCount();if(callback){callback();}});};self.showNotificationsList=function(startIndex,limit,elem){refreshNotifications(startIndex,limit,elem,true);};}
function refreshNotifications(startIndex,limit,elem,showPaging){var apiClient=window.ApiClient;if(apiClient){return apiClient.getNotifications(Dashboard.getCurrentUserId(),{StartIndex:startIndex,Limit:limit}).done(function(result){listUnreadNotifications(result.Notifications,result.TotalRecordCount,startIndex,limit,elem,showPaging);});}}
function listUnreadNotifications(list,totalRecordCount,startIndex,limit,elem,showPaging){if(!totalRecordCount){elem.html('<p style="padding:.5em 1em;">'+Globalize.translate('LabelNoUnreadNotifications')+'</p>');return;}
Notifications.total=totalRecordCount;var html='';if(totalRecordCount>limit&&showPaging===true){var query={StartIndex:startIndex,Limit:limit};html+=LibraryBrowser.getQueryPagingHtml({startIndex:query.StartIndex,limit:query.Limit,totalRecordCount:totalRecordCount,showLimit:false,updatePageSizeSetting:false});}
for(var i=0,length=list.length;i<length;i++){var notification=list[i];html+=getNotificationHtml(notification);}
elem.html(html).trigger('create');}
function getNotificationHtml(notification){var html='';var cssClass=notification.IsRead?"flyoutNotification":"flyoutNotification unreadFlyoutNotification";html+='<div data-notificationid="'+notification.Id+'" class="'+cssClass+'">';html+='<div class="notificationImage">';html+=getImageHtml(notification);html+='</div>';html+='<div class="notificationContent">';html+='<p style="font-size:16px;margin: .5em 0 .5em;" class="notificationName">';if(notification.Url){html+='<a href="'+notification.Url+'" target="_blank" style="text-decoration:none;">'+notification.Name+'</a>';}else{html+=notification.Name;}
html+='</p>';html+='<p class="notificationTime" style="margin: .5em 0;">'+humane_date(notification.Date)+'</p>';if(notification.Description){html+='<p style="margin: .5em 0;max-height:150px;overflow:hidden;text-overflow:ellipsis;">'+notification.Description+'</p>';}
html+='</div>';html+='</div>';return html;}
function getImageHtml(notification){if(notification.Level=="Error"){return'<div class="imgNotification imgNotificationError"><div class="imgNotificationInner imgNotificationIcon"></div></div>';}
if(notification.Level=="Warning"){return'<div class="imgNotification imgNotificationWarning"><div class="imgNotificationInner imgNotificationIcon"></div></div>';}
return'<div class="imgNotification imgNotificationNormal"><div class="imgNotificationInner imgNotificationIcon"></div></div>';}
window.Notifications=new notifications();$(document).on('libraryMenuCreated',function(e){if(window.ApiClient){Notifications.updateNotificationCount();}});function onWebSocketMessage(e,msg){if(msg.MessageType==="NotificationUpdated"||msg.MessageType==="NotificationAdded"||msg.MessageType==="NotificationsMarkedRead"){Notifications.getNotificationsSummaryPromise=null;Notifications.updateNotificationCount();}}
function initializeApiClient(apiClient){$(apiClient).off("websocketmessage",onWebSocketMessage).on("websocketmessage",onWebSocketMessage);}
Dashboard.ready(function(){if(window.ApiClient){initializeApiClient(window.ApiClient);}
$(ConnectionManager).on('apiclientcreated',function(e,apiClient){initializeApiClient(apiClient);});});})(jQuery,document,Dashboard,LibraryBrowser);(function(window,document,$){function sendPlayCommand(options,playType){var sessionId=MediaController.getPlayerInfo().id;var ids=options.ids||options.items.map(function(i){return i.Id;});var remoteOptions={ItemIds:ids.join(','),PlayCommand:playType};if(options.startPositionTicks){remoteOptions.startPositionTicks=options.startPositionTicks;}
ApiClient.sendPlayCommand(sessionId,remoteOptions);}
function sendPlayStateCommand(command,options){var sessionId=MediaController.getPlayerInfo().id;ApiClient.sendPlayStateCommand(sessionId,command,options);}
function remoteControlPlayer(){var self=this;self.name='Remote Control';function sendCommandByName(name,options){var command={Name:name};if(options){command.Arguments=options;}
self.sendCommand(command);}
self.sendCommand=function(command){var sessionId=MediaController.getPlayerInfo().id;ApiClient.sendCommand(sessionId,command);};self.play=function(options){sendPlayCommand(options,'PlayNow');};self.shuffle=function(id){sendPlayCommand({ids:[id]},'PlayShuffle');};self.instantMix=function(id){sendPlayCommand({ids:[id]},'PlayInstantMix');};self.queue=function(options){sendPlayCommand(options,'PlayNext');};self.queueNext=function(options){sendPlayCommand(options,'PlayLast');};self.canQueueMediaType=function(mediaType){return mediaType=='Audio'||mediaType=='Video';};self.stop=function(){sendPlayStateCommand('stop');};self.nextTrack=function(){sendPlayStateCommand('nextTrack');};self.previousTrack=function(){sendPlayStateCommand('previousTrack');};self.seek=function(positionTicks){sendPlayStateCommand('seek',{SeekPositionTicks:positionTicks});};self.pause=function(){sendPlayStateCommand('Pause');};self.unpause=function(){sendPlayStateCommand('Unpause');};self.mute=function(){sendCommandByName('Mute');};self.unMute=function(){sendCommandByName('Unmute');};self.toggleMute=function(){sendCommandByName('ToggleMute');};self.setVolume=function(vol){sendCommandByName('SetVolume',{Volume:vol});};self.volumeUp=function(){sendCommandByName('VolumeUp');};self.volumeDown=function(){sendCommandByName('VolumeDown');};self.toggleFullscreen=function(){sendCommandByName('ToggleFullscreen');};self.setAudioStreamIndex=function(index){sendCommandByName('SetAudioStreamIndex',{Index:index});};self.setSubtitleStreamIndex=function(index){sendCommandByName('SetSubtitleStreamIndex',{Index:index});};self.displayContent=function(options){sendCommandByName('DisplayContent',options);};self.getPlayerState=function(){var deferred=$.Deferred();var apiClient=window.ApiClient;if(apiClient){apiClient.getSessions().done(function(sessions){var currentTargetId=MediaController.getPlayerInfo().id;var session=sessions.filter(function(s){return s.Id==currentTargetId;})[0];if(session){session=getPlayerState(session);}
deferred.resolveWith(null,[session]);});}else{deferred.resolveWith(null,[{}]);}
return deferred.promise();};var pollInterval;function onPollIntervalFired(){if(!ApiClient.isWebSocketOpen()){var apiClient=window.ApiClient;if(apiClient){apiClient.getSessions().done(processUpdatedSessions);}}}
self.subscribeToPlayerUpdates=function(){self.isUpdating=true;if(ApiClient.isWebSocketOpen()){ApiClient.sendWebSocketMessage("SessionsStart","100,800");}
if(pollInterval){clearInterval(pollInterval);pollInterval=null;}
pollInterval=setInterval(onPollIntervalFired,1500);};function unsubscribeFromPlayerUpdates(){self.isUpdating=true;if(ApiClient.isWebSocketOpen()){ApiClient.sendWebSocketMessage("SessionsStop");}
if(pollInterval){clearInterval(pollInterval);pollInterval=null;}}
var playerListenerCount=0;self.beginPlayerUpdates=function(){if(playerListenerCount<=0){playerListenerCount=0;self.subscribeToPlayerUpdates();}
playerListenerCount++;};self.endPlayerUpdates=function(){playerListenerCount--;if(playerListenerCount<=0){unsubscribeFromPlayerUpdates();playerListenerCount=0;}};self.getTargets=function(){var deferred=$.Deferred();var sessionQuery={ControllableByUserId:Dashboard.getCurrentUserId()};var apiClient=window.ApiClient;if(apiClient){apiClient.getSessions(sessionQuery).done(function(sessions){var targets=sessions.filter(function(s){return s.DeviceId!=apiClient.deviceId();}).map(function(s){return{name:s.DeviceName,deviceName:s.DeviceName,id:s.Id,playerName:self.name,appName:s.Client,playableMediaTypes:s.PlayableMediaTypes,isLocalPlayer:false,supportedCommands:s.SupportedCommands};});deferred.resolveWith(null,[targets]);}).fail(function(){deferred.reject();});}else{deferred.resolveWith(null,[]);}
return deferred.promise();};self.tryPair=function(target){var deferred=$.Deferred();deferred.resolve();return deferred.promise();};}
var player=new remoteControlPlayer();MediaController.registerPlayer(player);function getPlayerState(session){return session;}
function firePlaybackEvent(name,session){Events.trigger(player,name,[getPlayerState(session)]);}
function onWebSocketConnectionChange(){if(player.isUpdating){player.subscribeToPlayerUpdates();}}
function processUpdatedSessions(sessions){var currentTargetId=MediaController.getPlayerInfo().id;var session=sessions.filter(function(s){return s.Id==currentTargetId;})[0];if(session){firePlaybackEvent('playstatechange',session);}}
function onWebSocketMessageReceived(e,msg){var apiClient=this;if(msg.MessageType==="Sessions"){processUpdatedSessions(msg.Data);}
else if(msg.MessageType==="SessionEnded"){Logger.log("Server reports another session ended");if(MediaController.getPlayerInfo().id==msg.Data.Id){MediaController.setDefaultPlayerActive();}}
else if(msg.MessageType==="PlaybackStart"){if(msg.Data.DeviceId!=apiClient.deviceId()){if(MediaController.getPlayerInfo().id==msg.Data.Id){firePlaybackEvent('playbackstart',msg.Data);}}}
else if(msg.MessageType==="PlaybackStopped"){if(msg.Data.DeviceId!=apiClient.deviceId()){if(MediaController.getPlayerInfo().id==msg.Data.Id){firePlaybackEvent('playbackstop',msg.Data);}}}}
function initializeApiClient(apiClient){$(apiClient).on("websocketmessage",onWebSocketMessageReceived).on("websocketopen",onWebSocketConnectionChange);}
Dashboard.ready(function(){if(window.ApiClient){initializeApiClient(window.ApiClient);}
$(ConnectionManager).on('apiclientcreated',function(e,apiClient){initializeApiClient(apiClient);});});})(window,document,jQuery);(function($,document,window,clearTimeout,setTimeout){var searchHintTimeout;function clearSearchHintTimeout(){if(searchHintTimeout){clearTimeout(searchHintTimeout);searchHintTimeout=null;}}
function getAdditionalTextLines(hint){if(hint.Type=="Audio"){return[[hint.AlbumArtist,hint.Album].join(" - ")];}
else if(hint.Type=="MusicAlbum"){return[hint.AlbumArtist];}
else if(hint.Type=="MusicArtist"){return[Globalize.translate('LabelArtist')];}
else if(hint.Type=="Movie"){return[Globalize.translate('LabelMovie')];}
else if(hint.Type=="MusicVideo"){return[Globalize.translate('LabelMusicVideo')];}
else if(hint.Type=="Episode"){return[Globalize.translate('LabelEpisode')];}
else if(hint.Type=="Series"){return[Globalize.translate('LabelSeries')];}
else if(hint.Type=="BoxSet"){return[Globalize.translate('LabelCollection')];}
return[hint.Type];}
function search(){var self=this;self.showSearchPanel=function(){showSearchMenu();};}
window.Search=new search();function renderSearchResultsInOverlay(elem,hints){hints=hints.map(function(i){i.Id=i.ItemId;i.ImageTags={};i.UserData={};if(i.PrimaryImageTag){i.ImageTags.Primary=i.PrimaryImageTag;}
return i;});var html=LibraryBrowser.getPosterViewHtml({items:hints,shape:"auto",lazy:true,overlayText:false,showTitle:true,coverImage:true,centerImage:true,textLines:getAdditionalTextLines});var itemsContainer=elem.querySelector('.itemsContainer');itemsContainer.innerHTML=html;ImageLoader.lazyChildren(itemsContainer);}
function requestSearchHintsForOverlay(elem,searchTerm){var currentTimeout=searchHintTimeout;Dashboard.showLoadingMsg();ApiClient.getSearchHints({userId:Dashboard.getCurrentUserId(),searchTerm:searchTerm,limit:30}).done(function(result){if(currentTimeout==searchHintTimeout){renderSearchResultsInOverlay(elem,result.SearchHints);}
Dashboard.hideLoadingMsg();}).fail(function(){Dashboard.hideLoadingMsg();});}
function updateSearchOverlay(elem,searchTerm){if(!searchTerm){$('.itemsContainer',elem).empty();clearSearchHintTimeout();return;}
clearSearchHintTimeout();searchHintTimeout=setTimeout(function(){requestSearchHintsForOverlay(elem,searchTerm);},100);}
function getSearchOverlay(createIfNeeded){var elem=document.querySelector('.searchResultsOverlay');if(createIfNeeded&&!elem){var html='<div class="searchResultsOverlay ui-page-theme-b smoothScrollY">';html+='<div class="searchResultsContainer"><div class="itemsContainer"></div></div></div>';elem=$(html).appendTo(document.body).hide()[0];$(elem).createCardMenus();}
return elem;}
function onHeaderSearchChange(val){var elem;if(val){elem=getSearchOverlay(true);$(elem).show();elem.style.opacity='1';document.body.classList.add('bodyWithPopupOpen');updateSearchOverlay(elem,val);}else{elem=getSearchOverlay(false);if(elem){require(["jquery","velocity"],function($,Velocity){$(elem).velocity("fadeOut");document.body.classList.remove('bodyWithPopupOpen');});updateSearchOverlay(elem,'');}}}
function bindSearchEvents(){require(['searchmenu'],function(){Events.on(SearchMenu,'closed',closeSearchResults);Events.on(SearchMenu,'change',function(e,value){onHeaderSearchChange(value);});});}
function closeSearchResults(){onHeaderSearchChange('');hideSearchMenu();}
function showSearchMenu(){require(['searchmenu'],function(){SearchMenu.show();});}
function hideSearchMenu(){require(['searchmenu'],function(){SearchMenu.hide();});}
$(document).on('pagecontainerbeforehide',closeSearchResults);$(document).on('headercreated',function(){bindSearchEvents();});})(jQuery,document,window,clearTimeout,setTimeout);(function(document){var currentOwnerId;var currentThemeIds=[];function playThemeSongs(items,ownerId){var player=getPlayer();if(items.length&&player.isDefaultPlayer&&player.canAutoPlayAudio()){if(!currentOwnerId&&player.isPlaying()){return;}
currentThemeIds=items.map(function(i){return i.Id;});currentOwnerId=ownerId;player.play({items:items});}else{currentOwnerId=null;}}
function onPlayItem(item){if(currentThemeIds.indexOf(item.Id)==-1){currentOwnerId=null;}}
function enabled(){var userId=Dashboard.getCurrentUserId();var val=appStorage.getItem('enableThemeSongs-'+userId);var localAutoPlayers=MediaController.getPlayers().filter(function(p){return p.isLocalPlayer&&p.canAutoPlayAudio();});return val=='1'||(val!='0'&&localAutoPlayers.length);}
function getPlayer(){return MediaController.getCurrentPlayer();}
Events.on(document,'thememediadownload',".libraryPage",function(e,themeMediaResult){if(!enabled()){return;}
var ownerId=themeMediaResult.ThemeSongsResult.OwnerId;if(ownerId!=currentOwnerId){playThemeSongs(themeMediaResult.ThemeSongsResult.Items,ownerId);}});})(document);