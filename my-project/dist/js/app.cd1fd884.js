(function(t){function e(e){for(var r,a,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3d3811a2"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}o[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var v=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2621:function(t,e,n){},2902:function(t,e,n){},"2b2c":function(t,e,n){"use strict";var r=n("b032"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("7e05"),i=n("aa2f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("appNav"),n("router-view")],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("SKILL")]),n("router-link",{attrs:{to:"/publish"}},[t._v("Publishing")]),n("router-link",{attrs:{to:"/dev"}},[t._v("Development")])],1)},c=[],u={name:"appNav"},v=u,p=(n("83e9"),n("2877")),d=Object(p["a"])(v,l,c,!1,null,null,null),f=d.exports,h={name:"App",components:{appNav:f}},_=h,m=Object(p["a"])(_,a,s,!1,null,null,null),b=m.exports,g=(n("d3b7"),n("8c4f")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("homeSection1"),n("homeSection2")],1)},w=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home section1"},[n("div",{staticClass:"obj left1"}),n("div",{staticClass:"obj left2"}),n("div",{staticClass:"obj left3"}),n("div",{staticClass:"obj right1"}),n("div",{staticClass:"obj right2"}),n("div",{staticClass:"obj right3"}),n("h2",[t.Typing>1?n("span",[t._v("성")]):t._e(),t.Typing>2?n("span",[t._v("장")]):t._e(),t.Typing>3?n("span",[t._v("형")]):t._e(),t.Typing>5?n("span",[t._v(" 개")]):t._e(),t.Typing>6?n("span",[t._v("발")]):t._e(),t.Typing>7?n("span",[t._v("자")]):t._e(),n("span",[t._v(" 김다운")])]),t._m(0)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll_ani"},[n("div")])}],O={name:"homeSection1",data:function(){return{Typing:0}},mounted:function(){var t=this;setInterval((function(){t.Typing<10?t.Typing+=1:clearInterval()}),150)},methods:{}},S=O,P=(n("bd94"),Object(p["a"])(S,j,C,!1,null,"2d6016d3",null)),T=P.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home section2"},[n("h2",[t._v("About")]),n("div",{staticClass:"h2_line"}),n("div",{attrs:{id:"wrap"}},[n("b-row",{staticClass:"info"},[n("transition",{attrs:{name:"fade-right"}},[t.scrollPositon>500?n("b-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("h3",[t._v("Profile")]),n("div",{staticClass:"private_info"},[n("div",{staticClass:"photo"}),n("div",{staticClass:"infos"},[n("h4",[t._v("김다운")]),n("p",[t._v("Front-end Developer [경력 1년 2개월]")]),n("ul",[n("li",[n("b-icon-calendar"),t._v("2020.04.16")],1),n("li",[n("b-icon-house-fill"),t._v("경기도 김포시")],1),n("li",[n("b-icon-phone"),t._v("010-2386-6487")],1),n("li",[n("b-icon-envelope"),t._v("hec8897@naver.com")],1)])])]),n("ul",[n("li",[n("b-icon-arrow-return-right"),t._v("자유 분방함 속에 책임감")],1),n("li",[n("b-icon-arrow-return-right"),t._v("포기보단 다른 방법을 찾는 집요함")],1),n("li",[n("b-icon-arrow-return-right"),t._v("멈추지 않고 성장하는 개발자")],1),n("li",[n("b-icon-arrow-return-right"),t._v("스펀지 같은 흡수력을 가진 개발자")],1)]),n("div",{staticClass:"resum"},[n("h3",[t._v("Career")]),n("ul",[n("li",[n("p",[t._v("대림대학교 (전문학사)")]),n("p",[t._v("모바일인터넷과 전공")]),n("dd",[t._v("2013.3~2019.2")])]),n("li",[n("p",[t._v("BM Company 웹개발자")]),n("p",[t._v("html,css,js,php 개발")]),n("dd",[t._v("2019.3~2020.5")])]),n("li",[n("p",[t._v("대림대학교 (전공심화)")]),n("p",[t._v("모바일인터넷과 학사과정")]),n("dd",[t._v("2020.3~2021.2")])])])])]):t._e()],1),n("transition",{attrs:{name:"fade-left"}},[t.scrollPositon>500?n("b-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("h3",[t._v("Skill")]),n("div",{staticClass:"skill_info"},[n("ul",[n("li",[t._v("html5,css3 웹 표준 마크업")]),n("li",[t._v("SEO 구글,네이버 웹마스터 도구 등록 경험")]),n("li",[t._v("css animation(keyframe,transform) 제작")]),n("li",[t._v("css preprocessor (less,scss) 활용")]),n("li",[t._v("jquery 활용")]),n("li",[t._v("javascript es6 개발")]),n("li",[t._v("webpack,bable 활용")]),n("li",[t._v("Vue.js(vue,router,vuex) 개발 경험")]),n("li",[t._v("react, react native 학습 중")]),n("li",[t._v("기초 php 가능 (mysql 연동)")])])])]):t._e()],1)],1)],1)])},x=[],E={name:"homeSection2",data:function(){return{scrollPositon:0}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollPositon=window.scrollY}}},$=E,L=(n("2b2c"),Object(p["a"])($,k,x,!1,null,"35f10331",null)),M=L.exports,A={name:"Home",components:{homeSection1:T,homeSection2:M},data:function(){return{scrollPositon:0}},updated:function(){}},q=A,H=Object(p["a"])(q,y,w,!1,null,null,null),I=H.exports;r["default"].use(g["a"]);var N=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],D=new g["a"]({mode:"history",base:"/",routes:N}),J=D,B=n("2f62");r["default"].use(B["a"]);var F=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=n("0d36");n("5b3d"),n("7db1"),n("2902");r["default"].use(K["a"],{throttle:600}),r["default"].use(o["a"]),r["default"].use(i["a"]),r["default"].config.productionTip=!1,new r["default"]({router:J,store:F,render:function(t){return t(b)}}).$mount("#app")},"83e9":function(t,e,n){"use strict";var r=n("8559"),o=n.n(r);o.a},8559:function(t,e,n){},b032:function(t,e,n){},bd94:function(t,e,n){"use strict";var r=n("2621"),o=n.n(r);o.a}});
//# sourceMappingURL=app.cd1fd884.js.map