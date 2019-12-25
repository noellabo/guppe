(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],p=0,h=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var o={},n={app:0},a=[];function s(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=o,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/web/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var o=r("64a9"),n=r.n(o);n.a},"13f2":function(t,e,r){"use strict";var o=r("3747"),n=r.n(o);n.a},"1ad5":function(t,e,r){},2154:function(t,e,r){"use strict";var o=r("1ad5"),n=r.n(o);n.a},3747:function(t,e,r){},"4a48":function(t,e,r){"use strict";var o=r("9838"),n=r.n(o);n.a},"4bbd":function(t,e,r){"use strict";var o=r("cbf7"),n=r.n(o);n.a},"56d7":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"w3-bar w3-black w3-card"},[r("div",{staticClass:"w3-container w3-section"},[r("router-link",{attrs:{to:"/"}},[r("i",{staticClass:"fas fa-home",attrs:{title:"home"}})])],1)]),r("div",{staticClass:"w3-row"},[r("div",{staticClass:"w3-col s0 m1 l2"},[t._v(" ")]),r("div",{staticClass:"w3-col s12 m10 l8 w3-content"},[r("router-view")],1),r("div",{staticClass:"w3-col s0 m1 l2"},[t._v(" ")])]),t._m(0)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge"},[r("a",{attrs:{href:"https://github.com/wmurphyrd/guppe"}},[r("i",{staticClass:"fab fa-github w3-hover-opacity"})])])}],s=(r("034f"),r("2877")),i={},c=Object(s["a"])(i,n,a,!1,null,null,null),l=c.exports,u=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-container"},[t._m(0),r("h1",{staticClass:"w3-center"},[t._v("Guppe Groups")]),r("p",[t._v("\n    Guppe brings social groups to the fediverse — making it easy to connect and meet new\n    people based on shared\n    interests without the maniuplation of your attention to maximize ad revenue nor the\n    walled garden lock-in of capitalist social media.\n  ")]),r("h2",{staticClass:"w3-center"},[t._v("How does Guppe work?")]),r("p",[t._v("\n    Guppe groups look like regular users you can interact with using your existing account on any\n    ActivityPub service, but they automatically share anything you send them with all of their followers.\n  ")]),t._m(1),r("h2",{staticClass:"w3-center"},[t._v("Active Groups")]),r("div",{staticClass:"profile-grid w3-margin-bottom w3-mobile"},t._l(t.groups,(function(e){return r("div",{key:e._id,staticClass:"w3-card w3-container w3-section"},[r("profile-summary",{staticClass:"profile",attrs:{actor:e}}),r("router-link",{attrs:{to:"/u/"+e.preferredUsername}},[t._v("Group profile...")])],1)})),0)])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-center"},[r("img",{attrs:{alt:"Guppe logo",src:"/f/guppe.png"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("Follow a group on @gup.pe to join that group")]),r("li",[t._v("Mention a group on @gup.pe to share a post with everyone in the group")]),r("li",[t._v("New groups are created on demand, just search for or mention @YourGroupNameHere@gup.pe and it will show up")]),r("li",[t._v("Visit a @gup.pe group profile to see the group history")])])}],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-center"},[r("img",{staticClass:"w3-image profile-image",attrs:{src:t.groupProfileSrc}}),r("h2",{staticClass:"w3-wide"},[t._v(t._s(t.actor.preferredUsername))]),r("div",{staticClass:"w3-container"},[r("span",{staticClass:"w3-container w3-show-inline-block"},[r("i",{staticClass:"fas fa-users",attrs:{title:"Group members"}}),t._v(t._s(t.followerCount))]),r("span",{staticClass:"w3-container w3-show-inline-block"},[r("i",{staticClass:"fas fa-mail-bulk",attrs:{title:"Group posts"}}),t._v(t._s(t.postCount))])]),r("p",{staticClass:"w3-opacity"},[r("i",[t._v(t._s(t.actor.summary))])])])},f=[],w={props:{actor:{type:Object,required:!0}},data(){return{followerCount:void 0,postCount:void 0}},computed:{groupProfileSrc(){return this.actor&&this.actor.icon?this.actor.icon.url:""}},methods:{fetchInfo(){window.fetch(this.actor.followers,{method:"get",headers:{accept:"application/activity+json"}}).then(t=>t.json()).then(t=>{this.followerCount=t.totalItems}),window.fetch(this.actor.outbox,{method:"get",headers:{accept:"application/activity+json"}}).then(t=>t.json()).then(t=>{this.postCount=t.totalItems})}},created(){this.fetchInfo()},updated(){this.fetchInfo()}},m=w,v=(r("13f2"),Object(s["a"])(m,d,f,!1,null,"c1288b72",null)),g=v.exports,b={name:"home",components:{ProfileSummary:g},data(){return{groups:[],error:null}},created(){window.fetch("/u/",{method:"get",headers:{accept:"application/json"}}).then(t=>t.json()).then(t=>{this.groups=t}).catch(t=>this.error=t.message)}},y=b,_=(r("4bbd"),r("2154"),Object(s["a"])(y,p,h,!1,null,"9c330358",null)),C=_.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-container w3-content w3-center w3-padding-32"},[r("profile-summary",{attrs:{actor:t.actor}}),r("p",{staticClass:"w3-left-align"},[t._v("To join "+t._s(t.actor.preferredUsername)+", enter your handle below and you'll be\n    redirected back to this group's profile in your app where you can follow it.")]),r("form",{staticClass:"w3-container"},[r("label",[t._v("Your account")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.handle,expression:"handle"}],staticClass:"w3-input w3-center",attrs:{placeholder:"user@example.com",type:"text"},domProps:{value:t.handle},on:{input:function(e){e.target.composing||(t.handle=e.target.value)}}}),r("button",{staticClass:"w3-btn w3-cyan w3-block w3-margin-top",attrs:{disabled:t.fetchingRemote},on:{click:function(e){return e.preventDefault(),t.doFollow(e)}}},[t._v("\n      Procced to follow\n    ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.invalidHandle,expression:"invalidHandle"}],staticClass:"w3-panel w3-pale-red w3-display-container w3-border"},[r("span",{staticClass:"w3-button w3-large w3-display-topright",on:{click:function(e){e.preventDefault(),t.invalidHandle=!1}}},[t._v("×")]),r("h3",[t._v("Double check that username")]),r("p",[t._v("e.g. you@yourhost.com")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.unreachable,expression:"unreachable"}],staticClass:"w3-panel w3-pale-red w3-display-container w3-border"},[r("span",{staticClass:"w3-button w3-large w3-display-topright",on:{click:function(e){e.preventDefault(),t.unreachable=!1}}},[t._v("×")]),r("h3",[t._v("Oops")]),r("p",[t._v("Couldn't connect with your host.")]),r("p",[t._v("You could try going back to your app and entering @"+t._s(t.groupHandle)+" in the search instead")])]),r("div",{staticClass:"w3-container w3-content w3-padding-64"},[r("h2",{staticClass:"w3-wide w3-center"},[t._v("Recent group posts")]),r("div",t._l(t.stream,(function(t){return r("post-card",{key:t.id,attrs:{activity:t}})})),1)])],1)},k=[],x=(r("a481"),r("3835")),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-card w3-margin-bottom"},[r("div",{staticClass:"w3-container w3-left-align"},[r("label",[r("b",[t._v(t._s(t.actor.preferredUsername))]),r("span",{staticClass:"w3-text-grey"},[t._v("@"+t._s(t.actorHost))])])]),r("div",{staticClass:"w3-container"},[r("p",{domProps:{innerHTML:t._s(t.post.content)}})])])},P=[],$={props:{activity:{type:Object,required:!0}},data(){return{post:{},actor:{},isError:!1}},computed:{actorIconUrl(){return this.actor.icon&&this.actor.icon.url},actorHost(){try{const t=new URL(this.actor.id);return t.host}catch(t){return""}}},methods:{resolveObject(t){return"string"!==typeof t?new Promise(e=>e(t)):window.fetch(`/o/${encodeURIComponent(t)}`,{method:"get",headers:{accept:"application/activity+json"}}).then(t=>t.json()).catch(t=>{this.isError=!0,console.log(t.message)})}},created(){this.resolveObject(this.activity.object).then(t=>{return this.post=t,this.resolveObject(this.post.attributedTo)}).then(t=>{this.actor=t})}},H=$,G=(r("4a48"),r("582d"),Object(s["a"])(H,O,P,!1,null,"26eca70a",null)),S=G.exports,E={components:{PostCard:S,ProfileSummary:g},props:{name:{type:String,required:!0},postLimit:{type:Number,default:20}},data(){return{actor:{},stream:{},error:null,handle:"",invalidHandle:!1,unreachable:!1,fetchingRemote:!1}},computed:{groupProfileSrc(){return this.actor&&this.actor.icon?this.actor.icon.url:""},groupHandle(){if(this.actor.id&&this.actor.preferredUsername){const t=new window.URL(this.actor.id);return`${this.actor.preferredUsername.toLowerCase()}@${t.host}`}return""}},methods:{doFollow(){let t,e,r;this.invalidHandle=!1,this.unreachable=!1;try{var o=/@?([^@]+)@(.+)/.exec(this.handle),n=Object(x["a"])(o,3);t=n[0],e=n[1],r=n[2],console.log(t,e,r)}catch(a){return void(this.invalidHandle=!0)}this.fetchingRemote=!0,window.fetch(`https://${r}/.well-known/webfinger?resource=acct:${e}@${r}`,{method:"get",mode:"cors",headers:{accept:"application/json"}}).then(t=>t.json()).then(t=>{const e=t.links.find(t=>"http://ostatus.org/schema/1.0/subscribe"===t.rel);window.location.href=e.template.replace("{uri}",this.groupHandle)}).catch(t=>{console.log(t),this.unreachable=!0}).then(()=>{this.fetchingRemote=!1})}},created(){window.fetch(`/u/${this.name}`,{method:"get",headers:{accept:"application/activity+json"}}).then(t=>t.json()).then(t=>{this.actor=t}).then(()=>{return window.fetch(this.actor.outbox,{method:"get",mode:"cors",headers:{accept:"application/activity+json"}})}).then(t=>t.json()).then(t=>{this.stream=t.orderedItems.filter(t=>"Announce"===t.type).slice(0,this.postLimit)}).catch(t=>this.error=t.message)}},U=E,I=(r("ab71"),Object(s["a"])(U,j,k,!1,null,"94492214",null)),R=I.exports;o["a"].use(u["a"]);var L=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:C},{path:"/u/:name",name:"profile",component:R,props:!0}],scrollBehavior(t,e,r){return r||{x:0,y:0}}});o["a"].config.productionTip=!1,new o["a"]({router:L,render:t=>t(l)}).$mount("#app")},"582d":function(t,e,r){"use strict";var o=r("c8b5"),n=r.n(o);n.a},"64a9":function(t,e,r){},9838:function(t,e,r){},ab71:function(t,e,r){"use strict";var o=r("ef6c"),n=r.n(o);n.a},c8b5:function(t,e,r){},cbf7:function(t,e,r){},ef6c:function(t,e,r){}});
//# sourceMappingURL=app.08039a55.js.map