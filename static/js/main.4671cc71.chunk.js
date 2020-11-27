(this.webpackJsonpcommunityfashion=this.webpackJsonpcommunityfashion||[]).push([[0],{39:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e(20),o=e.n(c),a=e(21),u=e(22),s=e(27),l=e(26),d=e(12),b=e(4),j=e(3),f=e(9),h=e(2);function v(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 1vh 0;\n"]);return v=function(){return n},n}function O(){var n=Object(j.a)(["\n  width: 20vw;\n  margin: 0 auto;\n  img {\n    width: 100%;\n    height: 50vh;\n  }\n"]);return O=function(){return n},n}function x(){var n=Object(j.a)(["\n  color: gray;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n"]);return x=function(){return n},n}function g(){var n=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return g=function(){return n},n}function p(){var n=Object(j.a)(["\n  font-size: 0.8rem;\n  cursor: pointer;\n  justify-content: space-around;\n"]);return p=function(){return n},n}function m(){var n=Object(j.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n  margin: 0.2rem;\n"]);return m=function(){return n},n}function y(){var n=Object(j.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  width: 50vw;\n"]);return y=function(){return n},n}h.d.section(y());var w=h.d.span(m()),k=Object(h.d)(w)(p()),z=h.d.div(g()),S=h.d.span(x()),F=h.d.div(O()),C=h.d.div(v()),D=function(n){var t,e=n.mainData;return Object(r.jsx)(r.Fragment,{children:null===(t=e["small-data"])||void 0===t?void 0:t.map((function(n){return Object(r.jsxs)(F,{children:[Object(r.jsx)("img",{alt:"smallPicture",src:n["image-src"]}),Object(r.jsxs)(C,{children:[Object(r.jsxs)(z,{children:[Object(r.jsx)(w,{children:n.title}),Object(r.jsx)(k,{children:n["user-id"]})]}),Object(r.jsx)(S,{children:n.contents})]})]})}))})};function L(){var n=Object(j.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  width: 50vw;\n"]);return L=function(){return n},n}function B(){var n=Object(j.a)(["\n  width: 30vw;\n  height: 80vh;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return B=function(){return n},n}function I(){var n=Object(j.a)(["\n  /* margin-top: 10vh; */\n  display: flex;\n  justify-content: center;\n  background-color: white;\n"]);return I=function(){return n},n}function P(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return P=function(){return n},n}function T(){var n,t=Object(i.useState)([]),e=Object(f.a)(t,2),c=e[0],o=e[1];return Object(i.useEffect)((function(){fetch("/data/data.json",{}).then((function(n){return n.json()})).then((function(n){return o(n["main-data"])}))}),[]),Object(r.jsxs)(G,{children:[Object(r.jsx)(E,{children:null===(n=c["big-data"])||void 0===n?void 0:n.map((function(n,t){return Object(r.jsx)(K,{children:Object(r.jsx)("img",{alt:"bigPhoto",src:n["image-src"]})})}))}),Object(r.jsx)(H,{children:Object(r.jsx)(D,{mainData:c})})]})}var E=h.d.section(P()),G=h.d.main(I()),K=h.d.div(B()),H=h.d.section(L());function q(){var n=Object(j.a)(["\n  li {\n    text-align: center;\n    margin: 0.5vh 0;\n    transition: all 0.5s ease-in-out;\n    color: #b5b5b5;\n    &:hover {\n      color: black;\n    }\n  }\n"]);return q=function(){return n},n}function J(){var n=Object(j.a)(["\n  border: 1px solid #b5b5b5;\n  border-radius: 3px;\n  width: 20%;\n  background-color: #b5b5b5;\n  color: white;\n"]);return J=function(){return n},n}function M(){var n=Object(j.a)(["\n  width: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n"]);return M=function(){return n},n}function N(){var n=Object(j.a)(["\n  position: absolute;\n\n  display: ",";\n  width: 100%;\n  z-index: 100;\n  background-color: white;\n  ul {\n    li {\n      text-align: center;\n    }\n  }\n"]);return N=function(){return n},n}function A(n){n.navData,n.navKeys;var t=n.hideNavData,e=n.eachKey,i=n.toggle;return Object(r.jsxs)(R,{toggle:i,children:[Object(r.jsx)(U,{children:Object(r.jsx)(Y,{children:e})}),Object(r.jsx)(Q,{children:null===t||void 0===t?void 0:t.map((function(n,e){return Object(r.jsx)(d.b,{to:"/menu/".concat(n),children:Object(r.jsx)("li",{children:n},t[e])})}))})]})}var R=h.d.section(N(),(function(n){return n.toggle?"static":"none"})),U=h.d.div(M()),Y=h.d.span(J()),Q=h.d.ul(q());function V(){var n=Object(j.a)(["\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 auto;\n  font-size: 1rem;\n"]);return V=function(){return n},n}function W(){var n=Object(j.a)(["\n  position: absolute;\n  right: 10px;\n  margin: 10px 0;\n  span {\n    margin: 0 20px;\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(j.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin-bottom: 2vh;\n  margin-top: 1vh;\n  position: relative;\n\n  li {\n    border-bottom: 2px solid white;\n    transition: all 0.5s ease-in-out;\n    width: 100%;\n    text-align: center;\n    cursor: pointer;\n    padding: 1em 0;\n\n    &:hover {\n      border-bottom: 2px solid #b5b5b5;\n      color: olive;\n    }\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(j.a)(['\n  background-image: url("https://media.vlpt.us/images/cloudlee711/post/f57ac95c-91ec-416d-8aad-6112b6369eee/stylefolkslogo.png");\n  background-position: center;\n  width: 300px;\n  height: 120px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0 auto;\n']);return Z=function(){return n},n}function $(){var n=Object(j.a)(["\n  position: relative;\n  width: 100vw;\n  /* margin: 0 auto; */\n"]);return $=function(){return n},n}function _(){var n=Object(j.a)(["\n  width: 100vw;\n  min-height: 140px;\n  background-color: white;\n  font-size: 1rem;\n  color: gray;\n"]);return _=function(){return n},n}function nn(){var n=Object(i.useState)({}),t=Object(f.a)(n,2),e=t[0],c=t[1],o=Object(i.useState)([]),a=Object(f.a)(o,2),u=a[0],s=a[1],l=Object(i.useState)([]),d=Object(f.a)(l,2),b=d[0],j=d[1],h=Object(i.useState)(""),v=Object(f.a)(h,2),O=v[0],x=v[1],g=Object(i.useState)(!1),p=Object(f.a)(g,2),m=p[0],y=p[1];Object(i.useEffect)((function(){fetch("https://sanghunlee-711.github.io/communityFashion/data/data.json",{}).then((function(n){return n.json()})).then((function(n){c(n["nav-category"]),s(Object.keys(n["nav-category"]))}))}),[]);return Object(r.jsxs)(tn,{children:[Object(r.jsxs)(on,{children:[Object(r.jsx)("span",{children:"Login"}),Object(r.jsx)("span",{children:"SignUp"})]}),Object(r.jsx)(rn,{}),Object(r.jsxs)(an,{onMouseLeave:function(){y(!1),console.log(m)},children:[Object(r.jsx)(cn,{onMouseOver:function(n){return t=n.target.innerText,j(e[t]),x(t),y(!0),void console.log(m);var t},children:null===u||void 0===u?void 0:u.map((function(n,t){return Object(r.jsx)("li",{children:n},n+t)}))}),Object(r.jsx)(en,{children:Object(r.jsx)(A,{navData:e,navKeys:u,eachKey:O,hideNavData:b,toggle:m})})]})]})}var tn=h.d.nav(_()),en=h.d.div($()),rn=h.d.div(Z()),cn=h.d.ul(X()),on=h.d.div(W()),an=h.d.section(V());function un(){var n=Object(j.a)(["\n  border-top: 0.5px solid #b5b5b5;\n\n  width: 80%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  ul {\n    margin: 1vh 0;\n\n    li {\n      margin: 1vh 0;\n    }\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  span {\n    margin: 1vh;\n  }\n"]);return sn=function(){return n},n}function ln(){var n=Object(j.a)(["\n  width: 100vw;\n  background-color: rgba(255, 255, 255, 0.96);\n  margin: 5vh 0;\n"]);return ln=function(){return n},n}function dn(){return Object(r.jsx)(bn,{children:Object(r.jsxs)(fn,{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(r.jsx)("li",{children:"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68"}),Object(r.jsx)("li",{children:"\uac8c\uc2dc\ubb3c/\ub313\uae00 \uc0ad\uc81c\uc694\uccad"})]}),Object(r.jsxs)(jn,{children:[Object(r.jsx)("span",{children:"COPYRIGHT 2020 Stylefolks.com"}),Object(r.jsx)("span",{children:"\uad11\uace0/\uc81c\ud734 \ubb38\uc758\ub294 ..."})]})]})})}var bn=h.d.footer(ln()),jn=h.d.div(sn()),fn=h.d.section(un());function hn(){var n=Object(j.a)(["\n  color: red;\n"]);return hn=function(){return n},n}function vn(){return Object(r.jsx)("div",{children:Object(r.jsxs)(On,{children:[Object(r.jsx)("li",{children:"\ucd5c\uaca8\uc6b8"}),Object(r.jsx)("li",{children:"\ud54f\ub354\uc0ac\uc774\uc988"}),Object(r.jsx)("li",{children:"\ucd5c\uaca8\uc6b8"})]})})}var On=h.d.ul(hn());function xn(){var n=Object(j.a)(["\n  width: 80vw;\n  background-color: red;\n  margin: 0 auto;\n"]);return xn=function(){return n},n}var gn=h.d.main(xn()),pn=function(n){return Object(i.useEffect)((function(){}),[]),Object(r.jsx)(gn,{children:Object(r.jsx)("span",{children:n.match.params.menuId})})},mn=function(n){Object(s.a)(e,n);var t=Object(l.a)(e);function e(){return Object(a.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return Object(r.jsxs)(d.a,{basename:"/communityFashion",children:[Object(r.jsx)(nn,{}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",component:T}),Object(r.jsx)(b.a,{exact:!0,path:"/youtube",component:vn}),Object(r.jsx)(b.a,{exact:!0,path:"/menu/:menuId",component:pn})]}),Object(r.jsx)(dn,{})]})}}]),e}(i.Component),yn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,40)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),i(n),c(n),o(n)}))};function wn(){var n=Object(j.a)(["\n    a{\n        text-decoration:none;\n        color: #191919;\n    }\n    * {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n    }\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed,\n    figure, figcaption, footer, header, hgroup,\n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        border: 0;\n        font-size: 100%;\n        font-family: 'Heebo', sans-serif;\n        vertical-align: baseline;\n    }\n    body {\n        line-height: 1.3;\n        font-size: 12px;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    button, input, select, textarea {\n        font-size: 100%;\n        margin: 0;\n        vertical-align: baseline;\n    }\n    button, input {\n        padding: 0;\n        border: none;\n        font: inherit;\n        color: inherit;\n        background-color: transparent;\n        cursor: pointer;\n        outline: 0;\n    }\n"]);return wn=function(){return n},n}var kn=Object(h.b)(wn());function zn(){var n=Object(j.a)(["\n    font-size: ",";\n    font-weight: ",";\n    color: ",";\n    font-family: ",";\n  "]);return zn=function(){return n},n}function Sn(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: ",";\n    flex-direction: ",";\n  "]);return Sn=function(){return n},n}function Fn(){var n=Object(j.a)(["\n    width: ",";\n    height: ",";\n  "]);return Fn=function(){return n},n}function Cn(){var n=Object(j.a)(["\n    &:link,\n    &:visited,\n    &:active {\n      color: black;\n    }\n\n    &:hover {\n      transition: ease 250ms color;\n      color: #999999;\n    }\n  "]);return Cn=function(){return n},n}var Dn={libre:"Libre Baskerville",alata:"Alata",lora:"Lora",comfortaa:"Comfortaa",titleBlack:"#000000",borderBlack:"#333333",contentsGray:"#4d4d4d",CartCountGray:"#999999",dateTextGray:"#b3b3b3",white:"#ffffff",footerHover:Object(h.c)(Cn()),setSize:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object(h.c)(Fn(),n,t)},setFlex:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object(h.c)(Sn(),n,t,e)},setFont:function(n,t,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Object(h.c)(zn(),n,t,e,r)}};o.a.render(Object(r.jsxs)(h.a,{theme:Dn,children:[Object(r.jsx)(mn,{}),Object(r.jsx)(kn,{})]},Dn),document.getElementById("root")),yn()}},[[39,1,2]]]);
//# sourceMappingURL=main.4671cc71.chunk.js.map