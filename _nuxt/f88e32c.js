(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{537:function(e,t,n){e.exports={}},568:function(e,t){},571:function(e,t){},574:function(e,t){},578:function(e,t){},602:function(e,t){},604:function(e,t){},613:function(e,t){},615:function(e,t){},625:function(e,t){},627:function(e,t){},736:function(e,t){},738:function(e,t){},745:function(e,t){},746:function(e,t){},841:function(e,t,n){"use strict";n(537)},896:function(e,t,n){"use strict";n.r(t);var r=n(14),o=(n(55),n(24)),c=n(554),l=n.n(c),f=n(840),v=n.n(f),d=n(22),m=n(53),x=Object(o.a)({components:{ValidationProvider:m.b,ValidationObserver:m.a},setup:function(e,t){var n=t.root;Object(o.h)({title:"Coffee With Crypto | "});var c=n.$vToastify,f=Object(o.e)(null),m=null,x=Object(o.e)(null),h=Object(o.e)(!1),address=Object(o.e)(null),w=Object(o.e)(0),y=Object(o.e)(0),C=Object(o.e)(null),k=Object(o.e)(null),_=Object(o.e)(null),j=Object(o.e)(null),O=Object(o.e)(!1);Object(o.d)(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:x.value&&(m=new l.a(x.value));case 3:case"end":return e.stop()}}),e)}))));var R=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.value){e.next=3;break}return c.error("No web3 provider detected."),e.abrupt("return");case 3:return e.prev=3,e.next=6,m.eth.requestAccounts();case 6:return e.next=8,B();case 8:return e.next=10,m.eth.net.isListening();case 10:h.value=e.sent,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),c.error(String(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.eth.sendTransaction({from:address.value.toLowerCase(),to:"0x93C4C1e86434eA4E831d8A13e64aC288C49B7b76".toLowerCase(),value:m.utils.toWei(y.value,"ether")}).on("transactionHash",(function(e){_.value=e,C.value="Awaiting transaction confirmation.",c.info("Transaction Status: Awaiting transaction confirmation."),O.value=!0,A()})).on("receipt",Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C.value="Awaiting block confirmation.",c.success("Transaction Status: Awaiting block confirmation."),c.info("Thank You For Your Support! - @emretepedev"),e.next=5,B();case 5:case"end":return e.stop()}}),e)})))).on("confirmation",(function(e){j.value=m.eth.transactionConfirmationBlocks,k.value=e,c.info("Confirmation Status: New block found."),j.value-e==0&&(C.value="Confirmed.",c.success("Transaction Status: Confirmed."),V())})).on("error",(function(){C.value="Failed.",c.error("Transaction Status: Failed."),V()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:h.value=!1,address.value=null,w.value=null,A();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.eth.getCoinbase();case 2:return address.value=e.sent,e.t0=m.utils,e.next=6,m.eth.getBalance(address.value);case 6:e.t1=e.sent,w.value=e.t0.fromWei.call(e.t0,e.t1,"ether");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){f.value.reset(),y.value=0},V=function(){C.value=null,_.value=null,j.value=null,k.value=null,O.value=!1},W=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({mustBeMetaMask:!0,silent:!0,timeout:3e3});case 2:x.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(text){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(text).catch((function(){c.error("Something went wrong.")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{provider:x,isConnected:h,amount:y,address:address,balance:w,observer:f,txStatus:C,confirmationCount:k,spinner:O,txHash:_,totalConfirmationCount:j,web3:m,copyText:D,connectWeb3:R,disconnectWeb3:S,formatBalanceToDisplay:function(e){return(+e).toFixed(6)},formatAddressToDisplay:function(address){return address.substring(0,6)+"..."+address.substring(address.length-4)},send:T,mdiCurrencyUsdOff:d.l}},head:{}}),h=x,w=(n(841),n(48)),y=n(65),C=n.n(y),k=n(191),_=n(354),j=n(538),O=n(445),R=n(886),T=n(848),S=n.n(T),B=n(81),component=Object(w.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"flex justify-center mt-12"},[n("v-container",[e.provider?n("div",[e.isConnected?n("div",[n("v-row",{class:"my-5 "+(e.$vuetify.breakpoint.xsOnly?"space-x-0 grid grid-cols-1 gap-y-5 mx-2":"space-x-6"),attrs:{justify:"center",align:"center"}},[n("v-tooltip",{attrs:{bottom:"","content-class":"text-xs"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("span",e._g(e._b({directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"\n                    p-3\n                    text-center\n                    my-auto\n                    cursor-pointer\n                    text-gray-100\n                    border-2 border-transparent border-solid\n                    rounded-md\n                    shadow-xl\n                    app-title\n                    border-gradient-br-blue-green-gray-900\n                  ",on:{click:function(t){return e.copyText(e.address)}}},"span",o,!1),r),[e._v("\n                  Address: "+e._s(e.formatAddressToDisplay(e.address))+"\n                ")])]}}],null,!1,3787724510)},[e._v(" "),n("span",[e._v("\n                "+e._s(e.address)+"\n              ")])]),e._v(" "),n("span",{staticClass:"\n                p-3\n                my-auto\n                text-center text-gray-100\n                border-2 border-transparent border-solid\n                rounded-md\n                app-title\n                border-gradient-br-blue-green-gray-900\n              "},[e._v("\n              Balance: "+e._s(e.formatBalanceToDisplay(e.balance))+"\n            ")])],1),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[n("v-row",[n("validation-provider",{staticClass:"flex justify-center",attrs:{name:"amount",rules:{required:!0,decimal:!0,min:1,max:8,min_value:1e-6,max_value:e.formatBalanceToDisplay(e.balance)}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{staticClass:"max-w-sm mx-4 mt-4",attrs:{counter:8,"error-messages":r,success:!Boolean(Object.keys(r).length)&&Boolean(e.amount),label:"Amount",placeholder:"Your amount",hint:Boolean(e.amount)?"":"For example, `0.01`",name:"amount","prepend-inner-icon":e.mdiCurrencyUsdOff,outlined:"",rounded:"",dense:"",shaped:""},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})]}}],null,!0)})],1),e._v(" "),n("v-row",{class:e.$vuetify.breakpoint.xsOnly?"space-x-0 space-y-1 px-5 grid grid-cols-1 gap-y-2 my-4":"space-x-6",attrs:{justify:"center",align:"center"}},[n("v-btn",{class:e.$vuetify.breakpoint.xsOnly?"w-full":"",attrs:{disabled:r||e.spinner},on:{click:e.send}},[e.spinner?n("svg",{staticClass:"animate-spin h-5 w-5 mr-3 text-white",attrs:{viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):e._e(),e._v(" "),n("span",[e._v("Send")])]),e._v(" "),n("v-btn",{on:{click:e.disconnectWeb3}},[e._v("Disconnect to Metamask")])],1)]}}],null,!1,1331546057)}),e._v(" "),n("div",{staticClass:"\n              mt-5\n              flex flex-col\n              items-center\n              text-center text-sm\n              space-y-1\n            "},[e.txHash?n("div",{staticClass:"break-words"},[e._v("\n              Transaction Hash: "+e._s(e.txHash)+"\n            ")]):e._e(),e._v(" "),e.txStatus?n("div",[e._v("Status: "+e._s(e.txStatus))]):e._e(),e._v(" "),e.confirmationCount?n("div",[e._v("\n              Confirmation Progress:\n              "+e._s(e.confirmationCount)+"/"+e._s(e.totalConfirmationCount)+"\n            ")]):e._e()])],1):n("div",{staticClass:"flex justify-center items-center"},[n("v-btn",{on:{click:e.connectWeb3}},[e._v("Connect to Metamask")])],1)]):n("div",{staticClass:"flex justify-center items-center"},[n("v-btn",{attrs:{target:"_blank",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}},[e._v("\n          Install Metamask\n        ")])],1)])],1)])}),[],!1,null,null,null);t.default=component.exports;C()(component,{VBtn:k.a,VContainer:_.a,VRow:j.a,VTextField:O.a,VTooltip:R.a}),S()(component,{Ripple:B.a})}}]);