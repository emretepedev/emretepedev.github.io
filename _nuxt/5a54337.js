(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{446:function(t,n,e){"use strict";var o=e(21),r=Object(o.a)({props:{projects:{type:Array,required:!0}}}),c=e(47),l=e(65),d=e.n(l),v=e(191),C=e(169),h=e(99),f=e(864),m=e(100),y=e(865),_=e(139),w=e(172),x=e(540),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",t._l(t.projects,(function(n){return e("v-col",{key:n.name},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var r=o.hover;return[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",height:"275",shaped:"",outlined:""}},[e("v-img",{attrs:{src:n.image,title:n.name,alt:n.name,height:"128"}}),t._v(" "),e("v-card-title",{staticClass:"pb-1"},[t._v("\n                        "+t._s(n.name)+"\n                    ")]),t._v(" "),e("v-card-text",[t._v("\n                        "+t._s(n.description)+"\n                    ")]),t._v(" "),e("v-fade-transition",[r?e("v-overlay",{attrs:{absolute:"",color:"teal"}},[e("v-btn",{attrs:{href:n.href,target:"_blank"}},[t._v("\n                                Open in new tab\n                            ")])],1):t._e()],1)],1)]}}],null,!0)})],1)})),1)}),[],!1,null,null,null);n.a=component.exports;d()(component,{VBtn:v.a,VCard:C.a,VCardText:h.b,VCardTitle:h.c,VCol:f.a,VFadeTransition:m.c,VHover:y.a,VImg:_.a,VOverlay:w.a,VRow:x.a})},877:function(t){t.exports=JSON.parse('{"projects":[{"name":"LandIndex","description":"LandIndex provides digital land prices and analytics. Land investing basics, guides and resources. Check out Metaverse land prices.","href":"https://landindex.io","image":"https://landindex.io/images/logoWithText.svg"},{"name":"/dev/null","description":"/dev/random","href":"#","image":"/images/dev-null.png"}],"sparkline":{"gradients":["#f72047","#ffd200","#1feaea"]}}')},878:function(t){t.exports=JSON.parse('{"data":{"user":{"contributionsCollection":{"contributionCalendar":{"weeks":[{"contributionDays":[{"contributionCount":4},{"contributionCount":8},{"contributionCount":8}]},{"contributionDays":[{"contributionCount":9},{"contributionCount":13},{"contributionCount":11},{"contributionCount":14},{"contributionCount":4},{"contributionCount":4},{"contributionCount":6}]},{"contributionDays":[{"contributionCount":6},{"contributionCount":17},{"contributionCount":13},{"contributionCount":10},{"contributionCount":25},{"contributionCount":14},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":7},{"contributionCount":1},{"contributionCount":8},{"contributionCount":1},{"contributionCount":12},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":24},{"contributionCount":5},{"contributionCount":0}]}]}}}}}')},905:function(t,n,e){"use strict";e.r(n);var o=e(21),r=e(877),c=e(878),l=e(20),d=Object(o.a)({props:{graphData:{type:Array,required:!0},gradients:{type:Array,required:!0}},setup:function(){return{mdiPoll:l.G}}}),v=e(47),C=e(65),h=e.n(C),f=e(169),m=e(99),y=e(168),_=e(45),w=e(874),x=e(910),component=Object(v.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"overflow-y-auto",attrs:{outlined:"",ripple:""}},[e("v-card-title",[t.$vuetify.breakpoint.mdAndDown?e("v-spacer"):t._e(),t._v(" "),e("v-icon",[t._v("\n            "+t._s(t.mdiPoll)+"\n        ")])],1),t._v(" "),e("v-card-subtitle",{staticClass:"text-center"},[e("div",{staticClass:"text-caption grey--text text-uppercase"},[e("strong",[t._v("GitHub")]),t._v(" contributions in the last\n            "),e("strong",[t._v("30 days")]),t._v(" ("),e("strong",[t._v("exclude")]),t._v("\n            GitLab etc.)\n        ")])]),t._v(" "),e("v-sheet",{attrs:{color:"transparent"}},[e("v-sparkline",{attrs:{value:t.graphData,gradient:t.gradients,smooth:10,padding:8,"line-width":1,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"trend","auto-draw":"","show-labels":!0,"auto-line-width":!1,"auto-draw-duration":5e3}})],1)],1)}),[],!1,null,null,null),V=component.exports;h()(component,{VCard:f.a,VCardSubtitle:m.a,VCardTitle:m.c,VIcon:y.a,VSheet:_.a,VSpacer:w.a,VSparkline:x.a});var j=e(446),k=Object(o.a)({components:{Sparkline:V,Project:j.a},setup:function(){Object(o.h)({meta:[{name:"google-site-verification",content:"d4yezmSdB2cAwtSSzAyPg7B3u9JidcIhNUVs-HI-w_0"}]});var t=Object(o.e)([]),n=new Date,e=new Date;return n.setDate(e.getDate()-30),c.data.user.contributionsCollection.contributionCalendar.weeks.forEach((function(n){n.contributionDays.forEach((function(n){t.value.push(n.contributionCount)}))})),{data:r,graphData:t}},head:{}}),D=e(901),O=e(354),S=e(540),I=Object(v.a)(k,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"flex justify-center mt-12"},[e("v-container",{staticClass:"space-y-5"},[e("div",{staticClass:"text-center flex flex-col items-center"},[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-card",{staticClass:"overflow-y-auto",attrs:{outlined:"","max-height":"400",ripple:""}},[e("v-banner",{staticClass:"justify-center text-h5 font-weight-light",attrs:{sticky:""}},[e("nuxt-img",{staticClass:"rounded-full inline",attrs:{src:"/images/avatar.jpg",width:"150",height:"150",title:"@emretepedev",alt:"@emretepedev",provider:"static"}})],1),t._v(" "),e("v-card-text",[e("div",[t._v("\n                                I’m a young ambitious Web and Blockchain\n                                developer who seriously cares discipline. On\n                                the other hand, I’m an open-minded person to\n                                learn new stuffs about technology and\n                                software. In addition to the technical\n                                matters that I care, I personally take\n                                account of everything about the notion\n                                “esteem”.\n                            ")])])],1)],1)],1),t._v(" "),e("div",[e("Sparkline",{attrs:{"graph-data":t.graphData,gradients:t.data.sparkline.gradients}})],1),t._v(" "),e("div",[e("Project",{attrs:{projects:t.data.projects}})],1)])],1)])}),[],!1,null,null,null);n.default=I.exports;h()(I,{VBanner:D.a,VCard:f.a,VCardText:m.b,VContainer:O.a,VRow:S.a})}}]);