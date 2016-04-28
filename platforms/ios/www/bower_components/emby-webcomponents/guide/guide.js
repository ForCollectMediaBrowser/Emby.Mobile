define(["globalize","connectionManager","loading","scrollHelper","datetime","focusManager","imageLoader","events","layoutManager","itemShortcuts","registrationservices","clearButtonStyle","css!./guide.css","html!./icons.html","scrollStyles"],function(e,t,r,a,n,o,i,s,c,l,u){function d(d){function g(e){var t=e.getMinutes()-j;return t>=0?e.setHours(e.getHours(),j,0,0):e.setHours(e.getHours(),0,0,0),e}function v(){r.show()}function f(){r.hide()}function p(t){return u.validateFeature("livetv").then(function(){var e=400;return t.querySelector(".guideRequiresUnlock").classList.add("hide"),e},function(){var r=5;return t.querySelector(".guideRequiresUnlock").classList.remove("hide"),t.querySelector(".unlockText").innerHTML=e.translate("MessageLiveTvGuideRequiresUnlock",r),r})}function h(e,r){var a=t.currentApiClient();X.UserId=a.getCurrentUserId(),p(e).then(function(t){v(),X.Limit=t,X.AddCurrentProgram=!1,B=B||a.getLiveTvChannels(X);var n=r;n=new Date(n.getTime()+1e3);var o=new Date(n.getTime()+W-2e3);B.then(function(t){a.getLiveTvPrograms({UserId:a.getCurrentUserId(),MaxStartDate:o.toISOString(),MinEndDate:n.toISOString(),channelIds:t.Items.map(function(e){return e.Id}).join(","),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop",SortBy:"StartDate"}).then(function(r){w(e,n,t.Items,r.Items,a),f()})})})}function S(e){if("string"===(typeof e).toString().toLowerCase())try{e=n.parseISO8601Date(e,{toLocal:!0})}catch(t){return e}return n.getDisplayTime(e).toLowerCase()}function T(e,t){var r="";for(e=new Date(e.getTime()),r+='<div class="timeslotHeadersInner">';e.getTime()<t;)r+='<div class="timeslotHeader">',r+=S(e),r+="</div>",e.setTime(e.getTime()+K);return r+="</div>"}function I(e){if(!e.StartDateLocal)try{e.StartDateLocal=n.parseISO8601Date(e.StartDate,{toLocal:!0})}catch(t){}if(!e.EndDateLocal)try{e.EndDateLocal=n.parseISO8601Date(e.EndDate,{toLocal:!0})}catch(t){}return null}function L(t,r,a,n){var o="",i=r.getTime(),s=i+W-1;n=n.filter(function(e){return e.ChannelId==a.Id}),o+='<div class="channelPrograms">';for(var c=0,l=n.length;l>c;c++){var u=n[c];if(u.ChannelId==a.Id&&(I(u),!(u.EndDateLocal.getTime()<i))){if(u.StartDateLocal.getTime()>s)break;F[u.Id]=u;var d=Math.max(u.StartDateLocal.getTime(),i),m=(u.StartDateLocal.getTime()-i)/W;m*=100,m=Math.max(m,0);var g=Math.min(u.EndDateLocal.getTime(),s),v=(g-d)/W;v*=100;var f="programCell clearButton itemAction",p=!0;u.IsKids?f+=" childProgramInfo":u.IsSports?f+=" sportsProgramInfo":u.IsNews?f+=" newsProgramInfo":u.IsMovie?f+=" movieProgramInfo":(f+=" plainProgramInfo",p=!1),o+='<button data-action="link" data-isfolder="'+u.IsFolder+'" data-id="'+u.Id+'" data-serverid="'+u.ServerId+'" data-type="'+u.Type+'" class="'+f+'" style="left:'+m+"%;width:"+v+'%;">';var h="guideProgramName";o+='<div class="'+h+'">',u.IsLive?o+='<span class="liveTvProgram">'+e.translate("core#AttributeLive")+"&nbsp;</span>":u.IsPremiere?o+='<span class="premiereTvProgram">'+e.translate("core#AttributePremiere")+"&nbsp;</span>":u.IsSeries&&!u.IsRepeat&&(o+='<span class="newTvProgram">'+e.translate("core#AttributeNew")+"&nbsp;</span>"),o+=u.Name,o+="</div>",u.IsHD&&(o+='<iron-icon icon="guide:hd"></iron-icon>'),u.SeriesTimerId?o+='<iron-icon class="seriesTimerIcon" icon="guide:fiber-smart-record"></iron-icon>':u.TimerId&&(o+='<iron-icon class="timerIcon" icon="guide:fiber-manual-record"></iron-icon>'),p&&(o+='<div class="programAccent"></div>'),o+="</button>"}}return o+="</div>"}function y(e,t,r,a){for(var n=[],o=0,i=r.length;i>o;o++)n.push(L(e,t,r[o],a));var s=e.querySelector(".programGrid");s.innerHTML=n.join(""),s.scrollTop=0,s.scrollLeft=0}function D(e,t,r){for(var a="",n=0,o=t.length;o>n;n++){var s=t[n],c=s.ImageTags.Primary,l="";if(c){var u=r.getScaledImageUrl(s.Id,{maxHeight:200,tag:s.ImageTags.Primary,type:"Primary"});l=' data-src="'+u+'"'}var d="channelHeaderCell clearButton itemAction lazy";c&&(d+=" withImage"),a+='<button type="button" class="'+d+'"'+l+' data-action="link" data-isfolder="'+s.IsFolder+'" data-id="'+s.Id+'" data-serverid="'+s.ServerId+'" data-type="'+s.Type+'">',a+='<div class="guideChannelNumber">'+s.Number+"</div>",c||(a+='<div class="guideChannelName">'+s.Name+"</div>"),a+="</button>"}var m=e.querySelector(".channelList");m.innerHTML=a,i.lazyChildren(m)}function w(e,t,r,a,n){D(e,r,n);var i=t,s=new Date(i.getTime()+W);e.querySelector(".timeslotHeaders").innerHTML=T(i,s),F={},y(e,t,r,a),c.tv&&o.autoFocus(e.querySelector(".programGrid"),!0)}function H(e,t,r){e.scrollTo?r?e.scrollTo(t,0):e.scrollTo(0,t):r?e.scrollLeft=Math.round(t):e.scrollTop=Math.round(t)}function b(e,t,r){(new Date).getTime()-J>=1e3&&(Y=(new Date).getTime(),H(r,t.scrollLeft,!0))}function M(e,t,r){(new Date).getTime()-Y>=1e3&&(J=(new Date).getTime(),H(r,t.scrollLeft,!0))}function q(t){var r=[];r[0]=e.translate("core#OptionSundayShort"),r[1]=e.translate("core#OptionMondayShort"),r[2]=e.translate("core#OptionTuesdayShort"),r[3]=e.translate("core#OptionWednesdayShort"),r[4]=e.translate("core#OptionThursdayShort"),r[5]=e.translate("core#OptionFridayShort"),r[6]=e.translate("core#OptionSaturdayShort");var a=r[t.getDay()];return t=t.toLocaleDateString(),-1==t.toLowerCase().indexOf(a.toLowerCase())?a+" "+t:t}function C(e,t){var r=g(t);G=r,h(e,r);var a=q(t);a='<span class="guideCurrentDay">'+a.replace(" "," </span>"),e.querySelector(".btnSelectDate").innerHTML=a}function P(e,t){var r=new Date;r.setHours(r.getHours(),0,0,0);var a=n.parseISO8601Date(t.StartDate,{toLocal:!0}),o=n.parseISO8601Date(t.EndDate,{toLocal:!0});for(a.setHours(0,0,0,0),o.setHours(0,0,0,0),a.getTime()>=o.getTime()&&o.setDate(a.getDate()+1),a=new Date(Math.max(r,a)),Q=[];o>=a;)Q.push({name:q(a),id:a.getTime()}),a.setDate(a.getDate()+1),a.setHours(0,0,0,0);var i=new Date;G&&i.setTime(G.getTime()),C(e,i)}function E(e){v();var r=t.currentApiClient();r.getLiveTvGuideInfo().then(function(t){P(e,t)})}function O(t){require(["actionsheet"],function(r){r.show({items:Q,title:e.translate("core#HeaderSelectDate"),callback:function(e){var r=new Date;r.setTime(parseInt(e)),C(t,r)}})})}function k(e){if(c.tv){a.centerFocus.on(e.querySelector(".smoothScrollY"),!1);var t=e.querySelector(".programGrid");a.centerFocus.on(t,!0)}}function A(e,t){for(;!e.classList||!e.classList.contains(t);)if(e=e.parentNode,!e)return null;return e}function U(e){var t=A(e.target,"programCell");t&&(z=e.target,R&&clearTimeout(R),R=setTimeout(N,700))}function N(){var e=z;if(e&&document.activeElement==e){var t=e.getAttribute("data-id"),r=F[t];r&&s.trigger(x,"focus",[{item:r}])}}var x=this,F={};x.refresh=function(){E(d.element)},x.destroy=function(){l.off(d.element),F={}},x.options=d;var G,B,R,z,j=30,K=60*j*1e3,W=864e5,X={StartIndex:0,EnableFavoriteSorting:!0},Y=0,J=0,Q=[],V=new XMLHttpRequest;V.open("GET",m+"/tvguide.template.html",!0),V.onload=function(){var t=this.response,r=d.element;r.innerHTML=e.translateDocument(t,"core");var a=r.querySelector(".programGrid"),n=r.querySelector(".timeslotHeaders");a.addEventListener("focus",U,!0),a.addEventListener("scroll",function(){b(r,this,n)}),n.addEventListener("scroll",function(){M(r,this,a)}),r.querySelector(".btnSelectDate").addEventListener("click",function(){O(r)}),r.querySelector(".btnUnlockGuide").addEventListener("click",function(){E(r)}),r.classList.add("tvguide"),k(r,x),l.on(r),s.trigger(x,"load"),x.refresh()},V.send()}var m;return d.setBaseUrl=function(e){m=e},d});