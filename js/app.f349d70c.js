(function(e){function t(t){for(var n,a,o=t[0],u=t[1],c=t[2],f=0,p=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,o=1;o<i.length;o++){var u=i[o];0!==s[u]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e._l(e.countOfTimers,(function(e){return i("Timer",{key:e.id})})),i("div",{staticClass:"addTimer",on:{click:e.addTimer}},[e._v("+")])],2)},r=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"timer"},[i("div",{staticClass:"timer__screen",class:{activeTimer:e.isActive}},[e.hours?i("span",[i("pre",[e._v(e._s(e.hours)+"h : ")])]):e._e(),e.minutes||e.hours?i("span",[i("pre",[e._v(e._s(e.minutes)+"m : ")])]):e._e(),i("span",[e._v(e._s(e.seconds)+"s")])]),i("div",{staticClass:"timer__buttons",class:{activeTimer:e.isActive}},[e.isActive?e._e():i("div",{staticClass:"play-button",on:{click:e.startTimer}}),e.isActive?i("div",{staticClass:"pause-button",on:{click:e.pauseTimer}}):e._e(),i("div",{staticClass:"stop-button",on:{click:e.stopTimer}})])])},o=[],u=(i("d81d"),{name:"timer",data:function(){return{startTime:new Date,diffTime:0,prevTime:0,interval:[],seconds:0,minutes:0,hours:0,isActive:!1,isPause:!1}},methods:{startTimer:function(){this.isPause=!1,this.isActive=!0,this.startTime=new Date,this.interval.push(setInterval(this.getTime,1e3))},getTime:function(){if(!this.isPause){var e=new Date;this.diffTime=this.prevTime+parseInt(e.getTime()-this.startTime.getTime())/1e3,this.hours=parseInt(this.diffTime/3600),this.minutes=parseInt(this.diffTime/60%60),this.seconds=parseInt(this.diffTime%60)}},pauseTimer:function(){this.isActive=!1,this.isPause=!0,this.prevTime=this.diffTime},stopTimer:function(){this.isActive=!1,this.isPause=!1,this.diffTime=0,this.prevTime=0,this.seconds=0,this.minutes=0,this.hours=0,this.interval.map((function(e){return clearInterval(e)}))}}}),c=u,l=i("2877"),f=Object(l["a"])(c,a,o,!1,null,null,null),p=f.exports,m={name:"App",components:{Timer:p},data:function(){return{countOfTimers:0}},methods:{addTimer:function(){this.countOfTimers++}}},d=m,h=(i("034f"),Object(l["a"])(d,s,r,!1,null,null,null)),v=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.f349d70c.js.map