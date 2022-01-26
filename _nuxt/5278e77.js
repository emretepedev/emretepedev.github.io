(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){"use strict";var r=n(127),o=n.n(r);t.default=o.a},127:function(e,t){},174:function(e,t,n){"use strict";n(6),n(5),n(7),n(8),n(9);var r=n(2),o=n(70),c=n(71);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(o.a)("required",v(v({},c.g),{},{message:"The {_field_} field is required."})),Object(o.a)("alpha_dash",v(v({},c.a),{},{message:"The {_field_} must only contain letters, numbers, dashes and underscores."})),Object(o.a)("max",v(v({},c.c),{},{message:"The {_field_} must not be greater than {length} characters."})),Object(o.a)("min",v(v({},c.d),{},{message:"The {_field_} must be at least {length} characters."})),Object(o.a)("email",v(v({},c.b),{},{message:"The {_field_} must be a valid email address."})),Object(o.a)("oneOf",v(v({},c.e),{},{message:"The selected {_field_} is invalid."})),Object(o.a)("regex",v(v({},c.f),{},{message:"The {_field_} format is invalid."}))},175:function(e,t,n){"use strict";var r=n(0),o=n(215),c=n.n(o);r.default.use(c.a,{customNotifications:{clientError:{canTimeout:!1,errorDuration:!1,theme:"~/assets/css/custom-toastify.scss"}}})},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{staticClass:"bg-dark-gray h-full"},[n("Header"),e._v(" "),n("Nuxt"),e._v(" "),n("Footer")],1)])},o=[]},201:function(e,t,n){e.exports={}},210:function(e,t,n){"use strict";var r=n(176),o=n(126),c=n(46),l=n(57),v=n.n(l),d=n(306),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);t.default=component.exports,v()(component,{Header:n(304).default,Footer:n(305).default}),v()(component,{VApp:d.a})},225:function(e,t,n){n(226),n(227),e.exports=n(231)},266:function(e,t,n){"use strict";n(201)},282:function(e,t,n){e.exports={}},283:function(e,t,n){e.exports={}},302:function(e,t){},304:function(e,t,n){"use strict";n.r(t);var r=n(47),o=n(24),c=Object(r.a)({setup:function(){return{drawer:Object(r.d)(null),pages:[{title:"Home",to:"/",icon:o.s},{title:"Projects",to:"/projects",icon:o.p},{title:"CV",to:"/cv",icon:o.h},{title:"Contact",to:"/contact",icon:o.b},{title:"Coffee",to:"/coffee-with-crypto",icon:o.d}],mdiClose:o.c}}}),l=n(46),v=n(57),d=n.n(v),f=n(321),m=n(317),_=n(318),h=n(165),w=n(166),x=n(108),O=n(78),k=n(94),j=n(320),y=n(211),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$vuetify.breakpoint.mdAndDown?n("v-app-bar",{staticClass:"h-12",attrs:{app:"","clipped-left":""}},[n("v-toolbar-title",{staticClass:"flex justify-between items-center"},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),n("span",[e._v("\n                "+e._s(e.$config.spaName)+"\n            ")])],1)],1):e._e(),e._v(" "),n("v-navigation-drawer",{attrs:{app:"",clipped:"",permanent:!e.$vuetify.breakpoint.mdAndDown,"expand-on-hover":!e.$vuetify.breakpoint.mdAndDown},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[e.$vuetify.breakpoint.mdAndDown?n("v-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("\n                        "+e._s(e.mdiClose)+"\n                    ")]):e._e(),e._v(" "),e.$vuetify.breakpoint.mdAndDown?e._e():n("span",[e._v("\n                        "+e._s(e.$config.spaName)+"\n                    ")])],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list",{attrs:{nav:"",dense:"","active-class":"text--red"}},e._l(e.pages,(function(t){return n("nuxt-link",{key:t.title,attrs:{to:t.to}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-item-title",[e._v("\n                        "+e._s(t.title)+"\n                    ")])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAppBar:f.a,VAppBarNavIcon:m.a,VDivider:_.a,VIcon:h.a,VList:w.a,VListItem:x.a,VListItemContent:O.a,VListItemIcon:k.a,VListItemTitle:O.b,VNavigationDrawer:j.a,VToolbarTitle:y.a})},305:function(e,t,n){"use strict";n.r(t);var r=n(47),o=n(24),c=Object(r.a)({setup:function(){return{icons:[{href:"https://github.com/emretepedev",image:o.i},{href:"https://linkedin.com/in/emretepedev",image:o.k},{href:"https://twitter.com/emretepedev",image:o.q},{href:"https://instagram.com/emretepedev",image:o.j},{href:"https://facebook.com/emretepedev",image:o.g},{href:"https://telegram.me/emretepedev",image:o.n},{href:"https://discordapp.com/users/365827212890341378",image:o.e},{href:"https://api.whatsapp.com/send?phone=905522801804&text=Hi%20@emretepedev.",image:o.r},{href:"skype:live:.cid.ebf04f9e644e1570",image:o.o},{href:"mailto:emretepedev@gmail.com",image:o.f},{href:"tel:+905522801804",image:o.l}]}}}),l=n(46),v=n(57),d=n.n(v),f=n(218),m=n(169),_=n(140),h=n(322),w=n(318),x=n(319),O=n(165),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-divider"),e._v(" "),n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"white--text text-center w-full",attrs:{flat:"",tile:"",ripple:""}},[n("v-card-text",e._l(e.icons,(function(t){return n("v-btn",{key:t,staticClass:"mx-4 white--text",attrs:{icon:"",href:t.href,target:"_blank"}},[n("v-icon",{attrs:{"x-large":!e.$vuetify.breakpoint.mdAndDown}},[e._v("\n                        "+e._s(t.image)+"\n                    ")])],1)})),1),e._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[e._v("\n                This website made with "),n("strong",[e._v("Vue")]),e._v(" (JavaScript\n                Framework), "),n("strong",[e._v("Tailwind")]),e._v(" (CSS Framework),\n                "),n("strong",[e._v("Vuetify")]),e._v(" (UI Framework),\n                "),n("strong",[e._v("Nuxt")]),e._v(" (Meta Framework based on Vue) and\n                "),n("strong",[e._v("Material Design Icons")]),e._v(" (Icon Pack) on\n                "),n("strong",[e._v("GH Pages")]),e._v(".\n            ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"white--text"},[e._v("\n                "+e._s((new Date).getFullYear())+" —\n                "),n("strong",[e._v(e._s(e.$config.spaName))])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:f.a,VCard:m.a,VCardText:_.b,VContainer:h.a,VDivider:w.a,VFooter:x.a,VIcon:O.a})},68:function(e,t,n){"use strict";var r=n(47),o=n(24),c=Object(r.a)({head:{},setup:function(){return Object(r.f)({title:"Page not found | "}),{mdiArrowRightThin:o.a}}}),l=(n(266),n(46)),v=n(57),d=n.n(v),f=n(218),m=n(165),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center h-screen"},[n("div",{staticClass:"mx-5"},[e._m(0),e._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("span",{staticClass:"text-logo-green hover:text-dark-logo-green"},[e._v("Go back home")]),e._v(" "),n("v-btn",{attrs:{text:"",icon:"",color:"green darken-2"}},[n("v-icon",[e._v(e._s(e.mdiArrowRightThin))])],1)],1)],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-40 mb-10 md:flex"},[n("div",{staticClass:"flex items-center font-black text-center error-text"},[e._v("\n                404\n            ")]),e._v(" "),n("h2",{staticClass:"hidden mx-5 border-l-4 md:block border-logo-green"}),e._v(" "),n("div",[n("div",{staticClass:"flex items-center error-text"},[e._v("\n                    Page not found\n                ")]),e._v(" "),n("div",{staticClass:"flex items-center text-xl"},[e._v("\n                    Please check the URL in the address bar and try again.\n                ")])])])}],!1,null,"63754d99",null);t.a=component.exports;d()(component,{VBtn:f.a,VIcon:m.a})}},[[225,5,1,6]]]);