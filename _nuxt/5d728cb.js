(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{673:function(t,e,n){"use strict";var r=n(2),o=(n(59),n(42),n(5),n(43),n(228),n(36),n(17),n(34),n(4),n(6),n(7),n(8),n(229),n(0)),c=n(74),l=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],y=["start","end","center"];function v(t,e){return f.reduce((function(n,r){return n[t+Object(l.D)(r)]=e(),n}),{})}var m=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},O=v("align",(function(){return{type:String,default:null,validator:m}})),x=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},w=v("justify",(function(){return{type:String,default:null,validator:x}})),C=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},j=v("alignContent",(function(){return{type:String,default:null,validator:C}})),D={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(j)},S={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.c.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},O),{},{justify:{type:String,default:null,validator:x}},w),{},{alignContent:{type:String,default:null,validator:C}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var h in n)l+=String(n[h]);var d=k.get(l);return d||function(){var t,e;for(e in d=[],D)D[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},962:function(t,e,n){"use strict";n(230);var r=n(1);e.a=Object(r.i)("spacer","div","v-spacer")},970:function(t,e,n){t.exports={}},971:function(t){t.exports=JSON.parse('{"data":{"user":{"contributionsCollection":{"contributionCalendar":{"weeks":[{"contributionDays":[{"contributionCount":7},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":10},{"contributionCount":13},{"contributionCount":20}]},{"contributionDays":[{"contributionCount":3},{"contributionCount":1},{"contributionCount":4},{"contributionCount":1},{"contributionCount":3},{"contributionCount":16},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":10},{"contributionCount":6},{"contributionCount":3},{"contributionCount":2},{"contributionCount":4},{"contributionCount":3},{"contributionCount":3}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":20},{"contributionCount":9},{"contributionCount":1},{"contributionCount":13},{"contributionCount":2},{"contributionCount":19}]},{"contributionDays":[{"contributionCount":31}]}]}}}}}')},993:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(6),n(7),n(8);var r=n(2),o=(n(970),n(87)),c=n(140),l=n(73),h=n(109),d=n(165),f=n(56),y=n(11),v=n(1);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=Object(y.a)(o.a,d.a,f.a).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes:function(){return O(O({},o.a.options.computed.classes.call(this)),{},{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isSticky:function(){return this.sticky||this.app},styles:function(){var t=O({},o.a.options.computed.styles.call(this));if(this.isSticky){var e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=Object(v.h)(e),t.position="sticky",t.zIndex=1}return t}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(t){this.$emit("click:icon",t)},genIcon:function(){var content;if(this.hasIcon)return content=this.icon?this.$createElement(l.a,{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(c.a,{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[content])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var t=this,e=Object(v.r)(this,"actions",{dismiss:function(){return t.isActive=!1}});if(e)return this.$createElement("div",{staticClass:"v-banner__actions"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(t){var data={staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return t(h.a,[t("div",this.outlined?data:this.setBackgroundColor(this.color,data),[this.genWrapper()])])}}),w=n(168),C=n(75),j=n(314),D=n(673),S=n(15),_={sparkline:{gradients:["#f72047","#ffd200","#1feaea"]}},k=n(971),P=n(167),$=n(45),E=n(962),L=n(9),M=(n(16),n(42),n(29),n(234),n(17),n(62),n(63),n(30),n(27)),B=n(48);function W(t,e){var n=e.minX,r=e.maxX,o=e.minY,c=e.maxY,l=t.length,h=Math.max.apply(Math,Object(B.a)(t)),d=Math.min.apply(Math,Object(B.a)(t)),f=(r-n)/(l-1),y=(c-o)/(h-d||1);return t.map((function(t,e){return{x:n+e*f,y:c-(t-d)*y,value:t}}))}function z(t,e){var n=e.minX,r=e.maxX,o=e.minY,c=e.maxY,l=t.length,h=Math.max.apply(Math,Object(B.a)(t)),d=Math.min.apply(Math,Object(B.a)(t));d>0&&(d=0),h<0&&(h=0);var f=r/l,y=(c-o)/(h-d||1),v=c-Math.abs(d*y);return t.map((function(t,e){var r=Math.abs(y*t);return{x:n+e*f,y:v-r+ +(t<0)*r,height:r,value:t}}))}function A(t){return parseInt(t,10)}function I(t,e,n){return A(t.x+n.x)===A(2*e.x)&&A(t.y+n.y)===A(2*e.y)}function N(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Y(t,e,n){var r=t.x-e.x,o=t.y-e.y,c=Math.sqrt(r*r+o*o),l=r/c,h=o/c;return{x:e.x+l*n,y:e.y+h*n}}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,o=t.shift(),c=t[t.length-1];return(n?"M".concat(o.x," ").concat(r-o.x+2," L").concat(o.x," ").concat(o.y):"M".concat(o.x," ").concat(o.y))+t.map((function(n,r){var c=t[r+1],l=t[r-1]||o,h=c&&I(c,n,l);if(!c||h)return"L".concat(n.x," ").concat(n.y);var d=Math.min(N(l,n),N(c,n)),f=d/2<e?d/2:e,y=Y(l,n,f),v=Y(c,n,f);return"L".concat(y.x," ").concat(y.y,"S").concat(n.x," ").concat(n.y," ").concat(v.x," ").concat(v.y)})).join("")+(n?"L".concat(c.x," ").concat(r-o.x+2," Z"):"")}function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function H(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var X=Object(y.a)(M.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,i=0;t.length<n;i++){var r=e[i],o=this.labels[i];o||(o="object"===Object(L.a)(r)?r.value:r),t.push({x:r.x,value:String(o)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?W(this.normalizedValues,this.boundary):z(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),o=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},o)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=W(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:V(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,i){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,i)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=z(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var o=this,c="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return o.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:c,ry:c}},[o.autoDraw?o.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(o.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:H(H({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),T=n(31),J=Object(S.a)({props:{graphData:{type:Array,default:function(){return[]},required:!0},gradients:{type:Array,default:function(){return[]},required:!0}},setup:function(){return{mdiPoll:T.G}}}),R=n(38),U=Object(R.a)(J,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(w.a,{staticClass:"overflow-y-auto",attrs:{outlined:"",ripple:""}},[e(C.c,[t.$vuetify.breakpoint.mdAndDown?e(E.a):t._e(),t._v(" "),e(P.a,[t._v("\n      "+t._s(t.mdiPoll)+"\n    ")])],1),t._v(" "),e(C.a,{staticClass:"text-center"},[e("div",{staticClass:"text-caption grey--text text-uppercase"},[t._v("\n      contributions in the last\n      "),e("strong",[t._v("30 days")])])]),t._v(" "),e($.a,{attrs:{color:"transparent"}},[e(X,{attrs:{"auto-draw":"","auto-draw-duration":5e3,"auto-line-width":!1,fill:!1,gradient:t.gradients,"gradient-direction":"top","line-width":1,padding:8,"show-labels":!0,smooth:10,"stroke-linecap":"round",type:"trend",value:t.graphData}})],1)],1)}),[],!1,null,null,null).exports,F=Object(S.a)({components:{Sparkline:U},setup:function(){var t=Object(S.f)([]),e=new Date,n=new Date;return e.setDate(n.getDate()-30),k.data.user.contributionsCollection.contributionCalendar.weeks.forEach((function(e){e.contributionDays.forEach((function(e){t.value.push(e.contributionCount)}))})),{data:_,graphData:t}},head:{}}),Z=Object(R.a)(F,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"mt-12 flex justify-center"},[e(j.a,{staticClass:"space-y-5"},[e("div",{staticClass:"flex flex-col items-center text-center"},[e(D.a,{attrs:{align:"center",justify:"center"}},[e(w.a,{staticClass:"overflow-y-auto",attrs:{"max-height":"400",outlined:"",ripple:""}},[e(x,{staticClass:"text-h5 font-weight-light justify-center",attrs:{sticky:""}},[e("nuxt-img",{staticClass:"inline rounded-full",attrs:{alt:"@emretepedev",height:"150",provider:"static",src:"/images/avatar.png",title:"@emretepedev",width:"150"}})],1),t._v(" "),e(C.b,[e("div",[t._v("\n                I am a passionate and curious blockchain & web developer who\n                takes discipline seriously. On the other hand, I’m open-minded\n                to learning new things about technology and software. In\n                addition to the technical topics I am interested in, I take\n                into account everything related to the concept of esteem.\n              ")])])],1)],1)],1),t._v(" "),e("div",[e("Sparkline",{attrs:{gradients:t.data.sparkline.gradients,"graph-data":t.graphData}})],1)])],1)])}),[],!1,null,null,null);e.default=Z.exports}}]);