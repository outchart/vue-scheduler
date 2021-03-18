!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueScheduler=t():e.VueScheduler=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=9)}([function(e,t,n){},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){var r=n(3),o=n(4),i=n(5),s=n(7);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||s()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(e,t,n){var r=n(6);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n(0)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(2),s=n.n(i),u=1,c=2,a=3,l=0,d={AM:"AM",PM:"PM",TIME_TITLE:"TIME",WEEK_TITLE:"DAY",WEEK_DAYS:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],DRAG_TIP:"Drag to select hours",RESET:"Reset Selected"};function h(e,t){e>t&&(e+=t,e-=t=e-t);for(var n=[],r=e;r<=t;r++)n.push(r);return n}function f(e,t,n){for(var r=[],o=0;o<t;o++){var i=e+o;n?i>5&&(i-=5):i%=24,r.push(i)}return r}function p(e,t){var n={},r=[];return e.forEach((function(e,t){n[e]=1,r[t]=e})),t.forEach((function(e){n[e]||r.push(e)})),r.sort((function(e,t){return e-t}))}function v(e,t){var n={},r=[];return t.forEach((function(e,t){n[e]=t})),e.forEach((function(e){n.hasOwnProperty(e)||r.push(e)})),r.sort((function(e,t){return e-t}))}function y(e,t){return e>t?[t,e]:[e,t]}var g={name:"Scheduler",props:{value:{},decoder:Function,encoder:Function,hourRange:{type:Array,default:function(){return[0,23]},validator:function(e){var t=s()(e,2),n=t[0],r=t[1];if(n<0||r>23||n>r)throw new Error('Invalid prop: custom validator check failed for prop "hourRange". It must be a number array with 2 items. such as [0, 23].');return!0}},startOfWeek:{type:Number,default:1,validator:function(e){return e>=0&&e<=6}},ignoreWeekend:Boolean,accuracy:{type:Number,default:1},footer:{type:Boolean,default:!0},locale:Object,multiple:Boolean,disabled:Boolean},data:function(){return{selectMode:l,startCoord:null,endCoord:null,selected:{},tempSelected:null,moving:!1}},computed:{startOfWeekFixed:function(){return!this.ignoreWeekend||0!==this.startOfWeek&&6!==this.startOfWeek?this.startOfWeek:1},hourSerial:function(){for(var e=[],t=this.hourRange[0];t<=this.hourRange[1];t++)e.push(t);return e},daySerial:function(){return f(this.startOfWeekFixed,this.ignoreWeekend?5:7,this.ignoreWeekend)},hours:function(){return this.hourSerial.length},isFullHours:function(){return 24===this.hours},halfDaySpan:function(){return 12*this.accuracy},cellColAmout:function(){return 7}},watch:{value:{handler:function(e){this.decodeVal(e,this.accuracy)},immediate:!0}},methods:{decodeVal:function(e,t){this.decoder?e=this.decoder(e,t):this.$SCHEDULER&&this.$SCHEDULER.decoder&&(e=this.$SCHEDULER.decoder(e,t)),this.selected=e,this.tempSelected=e},i18n:function(e,t){if(this.locale){var n=this.locale[e];if(void 0!==n)return n}return function(e,t){return d[e]||(void 0!==t?t:e)}(e,t)},isCellSelected:function(e,t){var n=this.tempSelected,r=(void 0===n?{}:n)[t];return r&&~r.indexOf(e)?"scheduler-active":""},handleClickAM:function(){this.disabled||this.toggleHalfDay(1)},handleClickPM:function(){this.disabled||this.toggleHalfDay(2)},toggleHalfDay:function(e){var t=12*(e-1)*this.accuracy,n=t+12*this.accuracy-1,r=[this.ignoreWeekend?1:0,t],o=[this.ignoreWeekend?5:6,n],i=this.getRangeSelectMode(r,o);this.updateToggle(r,o,i)},handleClickWeek:function(){if(!this.disabled){var e=[this.ignoreWeekend?1:0,0],t=[this.ignoreWeekend?5:6,this.hours*this.accuracy-1],n=this.getRangeSelectMode(e,t);this.updateToggle(e,t,n)}},handleClickHour:function(e){if(!this.disabled){var t=e*this.accuracy,n=t+this.accuracy-1,r=[t,(this.ignoreWeekend,1)],o=[n,this.ignoreWeekend?7:8],i=this.getRangeSelectMode(r,o);this.updateToggle(r,o,i)}},handleClickDay:function(e){if(!this.disabled){var t=[0,e+1],n=[this.hours*this.accuracy-1,e+1],r=this.getRangeSelectMode(t,n);this.updateToggle(t,n,r)}},handleMouseDown:function(e,t){var n=this;if(!this.disabled){this.moving=!0,this.startCoord=[e,t],this.endCoord=this.startCoord.slice(0),this.selectMode=this.getCellSelectMode(this.startCoord),this.updateRange(this.startCoord,this.endCoord,this.selectMode);document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),!n.moving)return!1;n.end()}))}},handleMouseMove:function(e,t){return!!this.moving&&(!(!this.selectMode||!this.startCoord||this.endCoord&&this.endCoord[0]===e&&this.endCoord[1]===t)&&(this.endCoord=[e,t],void this.updateRange(this.startCoord,this.endCoord,this.selectMode)))},getRangeSelectMode:function(e,t){if(!this.multiple)return a;for(var n=y(e[0],t[0]),r=y(e[1],t[1]),o=n[0],i=n[1],s=r[0],l=r[1]-s+1,d=(i-o+1)*l,h=0,f=0;f<l;f++){var p=this.toDay(s+f),v=this.selected[p];if(v)for(var g=o;g<=i;g++)v.indexOf(g)>=0&&h++}return d===h?c:u},toDay:function(e){return(this.startOfWeek+e)%7},getCellSelectMode:function(e){if(!this.multiple)return a;var t=this.selected[this.toDay(e[1])];return t&&~t.indexOf(e[0])?c:u},updateToggle:function(e,t,n){this.updateRange(e,t,n),this.end()},updateRange:function(e,t,n){var r=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,o={},i=h(e[1],t[1]),s=e[0]<t[0]?e[0]:t[0],u=Math.abs(e[0]-t[0])+1,c=f(s+n,u,r),a=0;a<i.length;a++)o[i[a]]=c.slice(0);return o}(e,t,this.startOfWeekFixed,this.ignoreWeekend);this.tempSelected=this.merge(this.selected,r,n)},merge:function(e,t,n){var r,o={};if(n===a){for(r=0;r<24;r++)t[r]&&t[r].length&&(o[r]=t[r].slice(0));return o}for(r=0;r<24;r++)if(t[r])if(e[r]&&e[r].length){var i=n===u?p(e[r],t[r]):v(e[r],t[r]);i.length&&(o[r]=i)}else n===u&&(o[r]=t[r].slice(0));else e[r]&&e[r].length&&(o[r]=e[r].slice(0));return o},end:function(){this.moving=!1,this.startCoord=null,this.endCoord=null,this.selectMode=l,this.emitChange(this.tempSelected)},reset:function(){this.disabled||this.emitChange({})},emitChange:function(e){this.encoder?e=this.encoder(e,this.accuracy):this.$SCHEDULER&&this.$SCHEDULER.encoder&&(e=this.$SCHEDULER.encoder(e,this.accuracy)),this.$emit("input",e),this.$emit("change",e)}}};n(8);var m=function(e,t,n,r,o,i,s,u){var c,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=c):o&&(c=u?function(){o.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(a.functional){a._injectStyles=c;var l=a.render;a.render=function(e,t){return c.call(t),l(e,t)}}else{var d=a.beforeCreate;a.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:a}}(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"scheduler",class:{"scheduler-disabled":e.disabled}},[n("thead",[n("tr",[n("td",[e._v(" ")]),e._v(" "),e._l(e.daySerial,(function(t,r){return n("td",{key:t,staticClass:"scheduler-day-toggle",attrs:{colspan:e.accuracy},on:{click:function(t){return e.handleClickDay(r)}}},[e._v("\n        "+e._s(e.i18n("WEEK_DAYS")[t])+"\n      ")])}))],2)]),e._v(" "),n("tbody",e._l(e.hourSerial,(function(t,r){return n("tr",{key:r},[n("td",{staticClass:"scheduler-hour scheduler-hour-title",on:{click:function(t){return e.handleClickHour(r)}}},[e._v("\n        "+e._s(t)+":00 — "+e._s(t+1)+":00\n      ")]),e._v(" "),e._l(7,(function(t){return n("td",{key:t,staticClass:"scheduler-hour",class:{"scheduler-active":e.isCellSelected(r,t)},on:{mousedown:function(n){return e.handleMouseDown(r,t)},mousemove:function(n){return e.handleMouseMove(r,t)},touchstart:function(n){return e.handleMouseDown(r,t)},touchmove:function(n){return e.handleMouseMove(r,t)}}})}))],2)})),0),e._v(" "),e.footer?n("tfoot",[n("tr",[n("td",{attrs:{colspan:e.cellColAmout+1}},[n("span",{staticClass:"scheduler-tips"},[e._v(e._s(e.i18n("DRAG_TIP")))]),e._v(" "),n("a",{staticClass:"scheduler-reset",on:{click:e.reset}},[e._v(e._s(e.i18n("RESET")))])])])]):e._e()])}),[],!1,null,null,null).exports,S=function(e){"object"===o()(e)&&function(e){d=e}(e)};m.install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t=Object.assign({componentName:"Scheduler"},t),r=n.locale,o=n.encoder,i=n.decoder;S(r),e.component(t.componentName,m),e.prototype.$SCHEDULER={encoder:o,decoder:i}},m.setLocale=S,"undefined"!=typeof window&&window.Vue&&m.install(window.Vue);t.default=m}])}));