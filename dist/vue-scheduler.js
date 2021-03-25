!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueScheduler=t():e.VueScheduler=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=9)}([function(e,t,n){},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(3),r=n(4),i=n(5),s=n(7);e.exports=function(e,t){return o(e)||r(e,t)||i(e,t)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(o=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==u.return||u.return()}finally{if(r)throw i}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(6);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n(0)},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(2),s=n.n(i),u=1,a=2,c=3,l=0,d={AM:"AM",PM:"PM",TIME_TITLE:"TIME",WEEK_TITLE:"DAY",WEEK_DAYS:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],DRAG_TIP:"Drag to select hours",RESET:"Reset Selected"};function f(e,t){e>t&&(e+=t,e-=t=e-t);for(var n=[],o=e;o<=t;o++)n.push(o);return n}function h(e,t,n){for(var o=[],r=0;r<t;r++){var i=e+r;n?i>5&&(i-=5):i%=24,o.push(i)}return o}function p(e,t){var n={},o=[];return e.forEach((function(e,t){n[e]=1,o[t]=e})),t.forEach((function(e){n[e]||o.push(e)})),o.sort((function(e,t){return e-t}))}function v(e,t){var n={},o=[];return t.forEach((function(e,t){n[e]=t})),e.forEach((function(e){n.hasOwnProperty(e)||o.push(e)})),o.sort((function(e,t){return e-t}))}function y(e,t){return e>t?[t,e]:[e,t]}var g={name:"Scheduler",props:{value:{},decoder:Function,encoder:Function,hourRange:{type:Array,default:function(){return[0,23]},validator:function(e){var t=s()(e,2),n=t[0],o=t[1];if(n<0||o>23||n>o)throw new Error('Invalid prop: custom validator check failed for prop "hourRange". It must be a number array with 2 items. such as [0, 23].');return!0}},startOfWeek:{type:Number,default:1,validator:function(e){return e>=0&&e<=6}},ignoreWeekend:Boolean,accuracy:{type:Number,default:1},footer:{type:Boolean,default:!0},locale:Object,multiple:Boolean,disabled:Boolean},data:function(){return{selectMode:l,startCoord:null,endCoord:null,selected:{},tempSelected:null,moving:!1}},computed:{startOfWeekFixed:function(){return!this.ignoreWeekend||0!==this.startOfWeek&&6!==this.startOfWeek?this.startOfWeek:1},hourSerial:function(){for(var e=[],t=this.hourRange[0];t<=this.hourRange[1];t++)e.push(t);return e},daySerial:function(){return h(this.startOfWeekFixed,this.ignoreWeekend?5:7,this.ignoreWeekend)},hours:function(){return this.hourSerial.length},isFullHours:function(){return 24===this.hours},halfDaySpan:function(){return 12*this.accuracy},cellColAmout:function(){return 7}},watch:{value:{handler:function(e){this.decodeVal(e,this.accuracy)},immediate:!0}},methods:{decodeVal:function(e,t){this.decoder?e=this.decoder(e,t):this.$SCHEDULER&&this.$SCHEDULER.decoder&&(e=this.$SCHEDULER.decoder(e,t)),this.selected=e,this.tempSelected=e},i18n:function(e,t){if(this.locale){var n=this.locale[e];if(void 0!==n)return n}return function(e,t){return d[e]||(void 0!==t?t:e)}(e,t)},isCellSelected:function(e,t){var n=this.tempSelected,o=(void 0===n?{}:n)[t];return o&&~o.indexOf(e)?"scheduler-active":""},handleClickAM:function(){this.disabled||this.toggleHalfDay(1)},handleClickPM:function(){this.disabled||this.toggleHalfDay(2)},toggleHalfDay:function(e){var t=12*(e-1)*this.accuracy,n=t+12*this.accuracy-1,o=[this.ignoreWeekend?1:0,t],r=[this.ignoreWeekend?5:6,n],i=this.getRangeSelectMode(o,r);this.updateToggle(o,r,i)},handleClickWeek:function(){if(!this.disabled){var e=[this.ignoreWeekend?1:0,0],t=[this.ignoreWeekend?5:6,this.hours*this.accuracy-1],n=this.getRangeSelectMode(e,t);this.updateToggle(e,t,n)}},handleClickHour:function(e){if(!this.disabled){var t=e*this.accuracy,n=t+this.accuracy-1,o=[t,(this.ignoreWeekend,1)],r=[n,this.ignoreWeekend?6:7],i=this.getRangeSelectMode(o,r);this.updateToggle(o,r,i)}},handleClickDay:function(e){if(!this.disabled){var t=[0,e+1],n=[this.hours*this.accuracy-1,e+1],o=this.getRangeSelectMode(t,n);this.updateToggle(t,n,o)}},handleMouseDown:function(e,t){var n=this;if(!this.disabled){this.moving=!0,this.startCoord=[e,t],this.endCoord=this.startCoord.slice(0),this.selectMode=this.getCellSelectMode(this.startCoord),this.updateRange(this.startCoord,this.endCoord,this.selectMode);document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),!n.moving)return!1;n.end()}))}},handleMouseMove:function(e,t){return!!this.moving&&(!(!this.selectMode||!this.startCoord||this.endCoord&&this.endCoord[0]===e&&this.endCoord[1]===t)&&(this.endCoord=[e,t],void this.updateRange(this.startCoord,this.endCoord,this.selectMode)))},getRangeSelectMode:function(e,t){if(!this.multiple)return c;for(var n=y(e[0],t[0]),o=y(e[1],t[1]),r=n[0],i=n[1],s=o[0],l=o[1]-s+1,d=(i-r+1)*l,f=0,h=0;h<l;h++){var p=this.toDay(s+h),v=this.selected[p];if(v)for(var g=r;g<=i;g++)v.indexOf(g)>=0&&f++}return d===f?a:u},toDay:function(e){return(this.startOfWeek+e)%7},getCellSelectMode:function(e){if(!this.multiple)return c;var t=this.selected[this.toDay(e[1])];return t&&~t.indexOf(e[0])?a:u},updateToggle:function(e,t,n){this.updateRange(e,t,n),this.end()},updateRange:function(e,t,n){var o=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3?arguments[3]:void 0,r={},i=f(e[1],t[1]),s=e[0]<t[0]?e[0]:t[0],u=Math.abs(e[0]-t[0])+1,a=h(s+n,u,o),c=0;c<i.length;c++)r[i[c]]=a.slice(0);return r}(e,t,this.startOfWeekFixed,this.ignoreWeekend);this.tempSelected=this.merge(this.selected,o,n)},merge:function(e,t,n){var o,r={};if(n===c){for(o=0;o<24;o++)t[o]&&t[o].length&&(r[o]=t[o].slice(0));return r}for(o=0;o<24;o++)if(t[o])if(e[o]&&e[o].length){var i=n===u?p(e[o],t[o]):v(e[o],t[o]);i.length&&(r[o]=i)}else n===u&&(r[o]=t[o].slice(0));else e[o]&&e[o].length&&(r[o]=e[o].slice(0));return r},end:function(){this.moving=!1,this.startCoord=null,this.endCoord=null,this.selectMode=l,this.emitChange(this.tempSelected)},reset:function(){this.disabled||this.emitChange({})},emitChange:function(e){this.encoder?e=this.encoder(e,this.accuracy):this.$SCHEDULER&&this.$SCHEDULER.encoder&&(e=this.$SCHEDULER.encoder(e,this.accuracy)),this.$emit("input",e),this.$emit("change",e)}}};n(8);var m=function(e,t,n,o,r,i,s,u){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=a):r&&(a=u?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var l=c.render;c.render=function(e,t){return a.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,a):[a]}return{exports:e,options:c}}(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"scheduler",class:{"scheduler-disabled":e.disabled}},[n("thead",[n("tr",[n("td",[e._v(" ")]),e._v(" "),e._l(e.daySerial,(function(t,o){return n("td",{key:t,staticClass:"scheduler-day-toggle",attrs:{colspan:e.accuracy},on:{click:function(t){return e.handleClickDay(o)}}},[e._v("\n        "+e._s(e.i18n("WEEK_DAYS")[t])+"\n      ")])}))],2)]),e._v(" "),n("tbody",e._l(e.hourSerial,(function(t,o){return n("tr",{key:o},[n("td",{staticClass:"scheduler-hour scheduler-hour-title",on:{click:function(t){return e.handleClickHour(o)}}},[e._v("\n        "+e._s(t)+":00 — "+e._s(t+1)+":00\n      ")]),e._v(" "),e._l(7,(function(t){return n("td",{key:t,staticClass:"scheduler-hour",class:{"scheduler-active":e.isCellSelected(o,t)},on:{mousedown:function(n){return e.handleMouseDown(o,t)},mousemove:function(n){return e.handleMouseMove(o,t)},touchstart:function(n){return e.handleMouseDown(o,t)},touchmove:function(n){return e.handleMouseMove(o,t)}}})}))],2)})),0),e._v(" "),e.footer?n("tfoot",[n("tr",[n("td",{attrs:{colspan:e.cellColAmout+1}},[n("span",{staticClass:"scheduler-tips"},[e._v(e._s(e.i18n("DRAG_TIP")))]),e._v(" "),n("a",{staticClass:"scheduler-reset",on:{click:e.reset}},[e._v(e._s(e.i18n("RESET")))])])])]):e._e()])}),[],!1,null,null,null).exports,_=function(e){"object"===r()(e)&&function(e){d=e}(e)};m.install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t=Object.assign({componentName:"Scheduler"},t),o=n.locale,r=n.encoder,i=n.decoder;_(o),e.component(t.componentName,m),e.prototype.$SCHEDULER={encoder:r,decoder:i}},m.setLocale=_,"undefined"!=typeof window&&window.Vue&&m.install(window.Vue);t.default=m}])}));