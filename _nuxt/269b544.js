(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8],{526:function(t,e,n){"use strict";var r=n(170);n.d(e,"a",(function(){return r.a}));r.a},532:function(t,e,n){t.exports=n.p+"img/avatar.d5e55d1.png"},575:function(t,e,n){"use strict";n.r(e);var r=n(99),o=n(75),c=n(130),l=n(2),h=n(5),d=(n(24),n(45),n(40),n(401),n(4),n(62),n(30),n(41),n(8),n(9),n(10),n(16),n(12),n(17),n(48)),f=n(19),y=n(57);function m(t,e){var n=e.minX,r=e.maxX,o=e.minY,c=e.maxY,l=t.length,h=Math.max.apply(Math,Object(y.a)(t)),d=Math.min.apply(Math,Object(y.a)(t)),f=(r-n)/(l-1),m=(c-o)/(h-d||1);return t.map((function(t,e){return{x:n+e*f,y:c-(t-d)*m,value:t}}))}function v(t,e){var n=e.minX,r=e.maxX,o=e.minY,c=e.maxY,l=t.length,h=Math.max.apply(Math,Object(y.a)(t)),d=Math.min.apply(Math,Object(y.a)(t));d>0&&(d=0),h<0&&(h=0);var f=r/l,m=(c-o)/(h-d||1),v=c-Math.abs(d*m);return t.map((function(t,e){var r=Math.abs(m*t);return{x:n+e*f,y:v-r+ +(t<0)*r,height:r,value:t}}))}n(60);function x(t){return parseInt(t,10)}function C(t,e,n){return x(t.x+n.x)===x(2*e.x)&&x(t.y+n.y)===x(2*e.y)}function w(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function O(t,e,n){var r=t.x-e.x,o=t.y-e.y,c=Math.sqrt(r*r+o*o),l=r/c,h=o/c;return{x:e.x+l*n,y:e.y+h*n}}function _(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,o=t.shift(),c=t[t.length-1];return(n?"M".concat(o.x," ").concat(r-o.x+2," L").concat(o.x," ").concat(o.y):"M".concat(o.x," ").concat(o.y))+t.map((function(n,r){var c=t[r+1],l=t[r-1]||o,h=c&&C(c,n,l);if(!c||h)return"L".concat(n.x," ").concat(n.y);var d=Math.min(w(l,n),w(c,n)),f=d/2<e?d/2:e,y=O(l,n,f),m=O(c,n,f);return"L".concat(y.x," ").concat(y.y,"S").concat(n.x," ").concat(n.y," ").concat(m.x," ").concat(m.y)})).join("")+(n?"L".concat(c.x," ").concat(r-o.x+2," Z"):"")}function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(f.a)(d.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,i=0;t.length<n;i++){var r=e[i],o=this.labels[i];o||(o="object"===Object(h.a)(r)?r.value:r),t.push({x:r.x,value:String(o)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?m(this.normalizedValues,this.boundary):v(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),o=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},o)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=m(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:_(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,i){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,i)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=v(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var o=this,c="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return o.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:c,ry:c}},[o.autoDraw?o.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(o.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:k(k({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),D=n(0),$=n(56),E=Object(D.c)({__name:"Sparkline",props:{graphData:null,gradients:null},setup:function(t){return{__sfc:!0,mdiPoll:$.G}}}),P=n(76),component=Object(P.a)(E,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e(r.a,{staticClass:"overflow-y-auto",attrs:{outlined:"",ripple:""}},[e(r.d,{staticClass:"relative"},[e(o.a,{staticClass:"absolute",attrs:{left:""}},[t._v("\n      "+t._s(n.mdiPoll)+"\n    ")]),t._v(" "),e("div",{staticClass:"text-caption grey--text text-uppercase mx-auto"},[t._v("\n      contributions in the last\n      "),e("strong",[t._v("30 days")])])],1),t._v(" "),e(c.a,{attrs:{color:"transparent"}},[e(S,{attrs:{"auto-draw":"","auto-draw-duration":1e4,"auto-line-width":"",gradient:t.gradients,"line-width":"1","show-labels":"",smooth:"9","stroke-linecap":"round",value:t.graphData}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},625:function(t,e,n){t.exports={}},626:function(t){t.exports=JSON.parse('{"data":{"user":{"contributionsCollection":{"contributionCalendar":{"weeks":[{"contributionDays":[{"contributionCount":1},{"contributionCount":4},{"contributionCount":1},{"contributionCount":3},{"contributionCount":17},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":10},{"contributionCount":6},{"contributionCount":3},{"contributionCount":2},{"contributionCount":4},{"contributionCount":3},{"contributionCount":3}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":20},{"contributionCount":9},{"contributionCount":1},{"contributionCount":13},{"contributionCount":2},{"contributionCount":19}]},{"contributionDays":[{"contributionCount":31},{"contributionCount":74},{"contributionCount":18},{"contributionCount":17},{"contributionCount":8},{"contributionCount":14},{"contributionCount":2}]},{"contributionDays":[{"contributionCount":12},{"contributionCount":25},{"contributionCount":45}]}]}}}}}')},634:function(t,e,n){"use strict";n.r(e);n(8),n(9),n(10),n(4),n(16),n(12),n(17);var r=n(2),o=(n(625),n(130)),c=n(214),l=n(75),h=n(161),d=n(251),f=n(92),y=n(19),m=n(1);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(y.a)(o.b,d.a,f.a).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes:function(){return x(x({},o.b.options.computed.classes.call(this)),{},{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isSticky:function(){return this.sticky||this.app},styles:function(){var t=x({},o.b.options.computed.styles.call(this));if(this.isSticky){var e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=Object(m.h)(e),t.position="sticky",t.zIndex=1}return t}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(t){this.$emit("click:icon",t)},genIcon:function(){var content;if(this.hasIcon)return content=this.icon?this.$createElement(l.b,{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(c.a,{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[content])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var t=this,e=Object(m.s)(this,"actions",{dismiss:function(){return t.isActive=!1}});if(e)return this.$createElement("div",{staticClass:"v-banner__actions"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(t){var data={staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return t(h.a,[t("div",this.outlined?data:this.setBackgroundColor(this.color,data),[this.genWrapper()])])}}),w=n(99),O=n(168),_=n(526),j=n(0),k={sparkline:{gradients:["#f72047","#ffd200","#1feaea"]}},S=n(626),D=Object(j.c)({__name:"index",setup:function(t){var e=Object(j.r)([]);return S.data.user.contributionsCollection.contributionCalendar.weeks.forEach((function(t){t.contributionDays.forEach((function(t){e.value.push(t.contributionCount)}))})),{__sfc:!0,graphData:e,data:k}}}),$=n(76),component=Object($.a)(D,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("div",[e("div",{staticClass:"mt-12 flex justify-center"},[e(O.b,{staticClass:"space-y-5"},[e("div",{staticClass:"flex flex-col items-center text-center"},[e(O.c,{staticClass:"m-0",attrs:{align:"center",justify:"center"}},[e(w.a,{staticClass:"overflow-y-auto",attrs:{"max-height":"400",outlined:"",ripple:""}},[e(C,{staticClass:"text-h5 font-weight-light justify-center",attrs:{sticky:""}},[e(_.a,{staticClass:"border-gradient-br-blue-green-gray-900 mx-auto rounded-full border-2 border-solid border-transparent",attrs:{alt:"@emretepedev",height:"150","max-height":"150","max-width":"150",src:n(532),title:"@emretepedev",width:"150"}})],1),t._v(" "),e(w.c,[e("div",[t._v("\n                I am a passionate and curious blockchain & web developer who\n                takes discipline seriously. In addition, I’m open-minded to\n                learning new things about technology and software. On the\n                other hand to the technical topics I am interested in, I take\n                into account everything related to the concept of esteem.\n              ")])])],1)],1)],1),t._v(" "),e("div",[e("Sparkline",{attrs:{gradients:r.data.sparkline.gradients,"graph-data":r.graphData}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Sparkline:n(575).default})}}]);