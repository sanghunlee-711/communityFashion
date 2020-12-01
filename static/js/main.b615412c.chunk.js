(this.webpackJsonpcommunityfashion=this.webpackJsonpcommunityfashion||[]).push([[0],{39:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e(20),a=e.n(c),o=e(21),u=e(22),l=e(27),s=e(26),d=e(10),b=e(4),j=e(3),h=e(6),f=e(2);function O(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 1vh 0;\n"]);return O=function(){return n},n}function v(){var n=Object(j.a)(["\n  width: 20vw;\n  margin: 1vh;\n  img {\n    width: 100%;\n    height: 50vh;\n  }\n  @media only screen and (max-width: 1000px) {\n    width: 100%;\n    img {\n      width: 100%;\n      height: 50vh;\n    }\n    margin: 1vh 0;\n  }\n"]);return v=function(){return n},n}function p(){var n=Object(j.a)(["\n  color: gray;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n"]);return p=function(){return n},n}function m(){var n=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return m=function(){return n},n}function g(){var n=Object(j.a)(["\n  font-size: 0.8rem;\n  cursor: pointer;\n  justify-content: space-around;\n"]);return g=function(){return n},n}function x(){var n=Object(j.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n  margin: 0.2rem;\n"]);return x=function(){return n},n}var y=f.d.span(x()),w=Object(f.d)(y)(g()),k=f.d.div(m()),q=f.d.span(p()),A=f.d.div(v()),V=f.d.div(O()),z=function(n){var t=n.smallData,e=Object(i.useState)([]),c=Object(h.a)(e,2);return c[0],c[1],Object(r.jsxs)(A,{children:[Object(r.jsx)("img",{alt:"smallPicture",src:t["image-src"]}),Object(r.jsxs)(V,{children:[Object(r.jsxs)(k,{children:[Object(r.jsx)(y,{children:t.title}),Object(r.jsx)(w,{children:t["user-id"]})]}),Object(r.jsx)(q,{children:t.contents})]})]})};function U(){var n=Object(j.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  width: 50vw;\n  @media only screen and (max-width: 1000px) {\n    flex-direction: column;\n    width: 80vw;\n  }\n"]);return U=function(){return n},n}function C(){var n=Object(j.a)(["\n  width: 30vw;\n  height: 80vh;\n  margin-top: 1vh;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n  @media only screen and (max-width: 1000px) {\n    width: 100%;\n    height: 50vh;\n    margin: 0;\n  }\n"]);return C=function(){return n},n}function P(){var n=Object(j.a)(["\n  /* margin-top: 10vh; */\n  display: flex;\n  justify-content: center;\n  background-color: white;\n  @media only screen and (max-width: 1000px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return P=function(){return n},n}function X(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  /* @media only screen and (max-width: 1000px) {\n    display: none;\n  } */\n"]);return X=function(){return n},n}function I(){var n,t,e=Object(i.useState)([]),c=Object(h.a)(e,2),a=c[0],o=c[1];return Object(i.useEffect)((function(){fetch("".concat("https://sanghunlee-711.github.io/communityFashion","/data/data.json"),{}).then((function(n){return n.json()})).then((function(n){return o(n["main-data"])}))}),[]),Object(r.jsxs)(L,{children:[Object(r.jsx)(Z,{children:null===(n=a["big-data"])||void 0===n?void 0:n.map((function(n,t){return Object(r.jsx)(G,{children:Object(r.jsx)("img",{alt:"bigPhoto",src:n["image-src"]})},n.title+t)}))}),Object(r.jsx)(T,{children:null===(t=a["small-data"])||void 0===t?void 0:t.map((function(n,t){return Object(r.jsx)(z,{smallData:n},n.title+t)}))})]})}var Z=f.d.section(X()),L=f.d.main(P()),G=f.d.div(C()),T=f.d.section(U());function Q(){var n=Object(j.a)(["\n  li {\n    text-align: center;\n    margin: 0.5vh 0;\n    transition: all 0.5s ease-in-out;\n    color: #b5b5b5;\n    &:hover {\n      color: black;\n    }\n  }\n"]);return Q=function(){return n},n}function N(){var n=Object(j.a)(["\n  border: 1px solid #b5b5b5;\n  border-radius: 3px;\n  width: 20%;\n  background-color: #b5b5b5;\n  color: white;\n"]);return N=function(){return n},n}function S(){var n=Object(j.a)(["\n  width: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n"]);return S=function(){return n},n}function D(){var n=Object(j.a)(["\n  position: absolute;\n\n  display: ",";\n  width: 100%;\n  z-index: 100;\n  background-color: white;\n  ul {\n    li {\n      text-align: center;\n    }\n  }\n"]);return D=function(){return n},n}function J(n){n.navData,n.navKeys;var t=n.hideNavData,e=n.eachKey,i=n.toggle,c=n.toggleNav;return Object(r.jsxs)(K,{toggle:i,children:[Object(r.jsx)(W,{children:Object(r.jsx)(Y,{children:e})}),Object(r.jsx)(E,{onClick:c,children:null===t||void 0===t?void 0:t.map((function(n,i){return Object(r.jsx)(d.b,{to:"/menu/".concat(e,"/").concat(n),children:Object(r.jsx)("li",{children:n})},t[i])}))})]})}var K=f.d.section(D(),(function(n){return n.toggle?"static":"none"})),W=f.d.div(S()),Y=f.d.span(N()),E=f.d.ul(Q());function H(){var n=Object(j.a)(["\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 auto;\n  font-size: 1rem;\n  @media only screen and (max-width: 1000px) {\n    display: none;\n  }\n"]);return H=function(){return n},n}function M(){var n=Object(j.a)(["\n  position: absolute;\n  right: 10px;\n  margin: 10px 0;\n  span {\n    margin: 0 20px;\n  }\n  @media only screen and (max-width: 1000px) {\n    display: none;\n  }\n"]);return M=function(){return n},n}function B(){var n=Object(j.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin-bottom: 2vh;\n  margin-top: 1vh;\n  position: relative;\n\n  li {\n    border-bottom: 2px solid white;\n    transition: all 0.5s ease-in-out;\n    width: 100%;\n    text-align: center;\n    cursor: pointer;\n    padding: 1em 0;\n\n    &:hover {\n      border-bottom: 2px solid #b5b5b5;\n      color: olive;\n    }\n  }\n"]);return B=function(){return n},n}function R(){var n=Object(j.a)(['\n  background-image: url("https://media.vlpt.us/images/cloudlee711/post/f57ac95c-91ec-416d-8aad-6112b6369eee/stylefolkslogo.png");\n  background-position: center;\n  width: 300px;\n  height: 120px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0 auto;\n']);return R=function(){return n},n}function F(){var n=Object(j.a)(['\n  background-image: url("data:image/png;base64,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");\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 30px;\n  height: 30px;\n  background-size: cover;\n  background-position: center;\n  display: none;\n  @media only screen and (max-width: 1000px) {\n    display: block;\n  }\n']);return F=function(){return n},n}function $(){var n=Object(j.a)(["\n  position: relative;\n  width: 100vw;\n"]);return $=function(){return n},n}function _(){var n=Object(j.a)(['\n  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2i7Fb7jCfqGSrjSYZpm6z5EJ-QGDcRuHNqA&usqp=CAU");\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  background-size: cover;\n  background-position: center;\n  z-index: 1000;\n']);return _=function(){return n},n}function nn(){var n=Object(j.a)(["\n  display: ",";\n"]);return nn=function(){return n},n}function tn(){var n=Object(j.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  background-color: white;\n  display: ",";\n  ul {\n    li {\n      margin: 1vh 0;\n      text-align: center;\n    }\n  }\n  @media only screen and (max-width: 1000px) {\n  }\n"]);return tn=function(){return n},n}function en(){var n=Object(j.a)(["\n  color: red;\n"]);return en=function(){return n},n}function rn(){var n=Object(j.a)(["\n  width: 100vw;\n  min-height: 140px;\n  background-color: white;\n  font-size: 1rem;\n  color: gray;\n"]);return rn=function(){return n},n}function cn(){var n=Object(i.useState)({}),t=Object(h.a)(n,2),e=t[0],c=t[1],a=Object(i.useState)([]),o=Object(h.a)(a,2),u=o[0],l=o[1],s=Object(i.useState)([]),b=Object(h.a)(s,2),j=b[0],f=b[1],O=Object(i.useState)(""),v=Object(h.a)(O,2),p=v[0],m=v[1],g=Object(i.useState)(!1),x=Object(h.a)(g,2),y=x[0],w=x[1],k=Object(i.useState)(!1),q=Object(h.a)(k,2),A=q[0],V=q[1],z=Object(i.useState)(""),U=Object(h.a)(z,2),C=U[0],P=U[1];Object(i.useEffect)((function(){fetch("".concat("https://sanghunlee-711.github.io/communityFashion","/data/data.json"),{}).then((function(n){return n.json()})).then((function(n){c(n["nav-category"]),l(Object.keys(n["nav-category"]))}))}),[]);var X=function(n){f(e[n]),m(n),w(!0)},I=function(){w(!1)},Z=function(){V(!A)};return Object(r.jsxs)(an,{children:[Object(r.jsx)(bn,{onClick:Z}),Object(r.jsxs)(un,{burgerToggle:A,onClick:function(n){return X(n.target.innerText)},children:[Object(r.jsx)(sn,{onClick:Z}),Object(r.jsx)("ul",{children:null===u||void 0===u?void 0:u.map((function(n,t){return Object(r.jsxs)("li",{children:[Object(r.jsx)(on,{onClick:function(n){return function(n){P(n.target.innerText)}(n)},children:n}),Object(r.jsx)(ln,{keyElements:n,burgerDetail:C,children:e[n].map((function(t,e){return Object(r.jsx)(d.b,{to:"/menu/".concat(n,"/").concat(t),onClick:Z,children:Object(r.jsx)("li",{children:t},t+e)},t+e)}))},n)]},n+t)}))})]}),Object(r.jsxs)(fn,{children:[Object(r.jsx)("span",{children:"Login"}),Object(r.jsx)("span",{children:"SignUp"})]}),Object(r.jsx)(d.b,{to:"/",children:Object(r.jsx)(jn,{})}),Object(r.jsxs)(On,{onMouseLeave:I,children:[Object(r.jsx)(hn,{onMouseOver:function(n){return X(n.target.innerText)},children:null===u||void 0===u?void 0:u.map((function(n,t){return Object(r.jsx)("li",{children:Object(r.jsxs)(d.b,{to:"/".concat("Total"===n?"":n),children:[n," "]})},n+t)}))}),Object(r.jsx)(dn,{children:Object(r.jsx)(J,{navData:e,navKeys:u,eachKey:p,hideNavData:j,toggle:y,toggleNav:I})})]})]})}var an=f.d.nav(rn()),on=f.d.span(en()),un=f.d.nav(tn(),(function(n){return n.burgerToggle?"static":"none"})),ln=f.d.ul(nn(),(function(n){return n.burgerDetail===n.keyElements?"static":"none"})),sn=f.d.div(_()),dn=f.d.div($()),bn=f.d.div(F()),jn=f.d.div(R()),hn=f.d.ul(B()),fn=f.d.div(M()),On=f.d.section(H());function vn(){var n=Object(j.a)(["\n  border-top: 0.5px solid #b5b5b5;\n\n  width: 80%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  ul {\n    margin: 1vh 0;\n\n    li {\n      margin: 1vh 0;\n    }\n  }\n"]);return vn=function(){return n},n}function pn(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  span {\n    margin: 1vh;\n  }\n"]);return pn=function(){return n},n}function mn(){var n=Object(j.a)(["\n  width: 100vw;\n  background-color: rgba(255, 255, 255, 0.96);\n  margin: 5vh 0;\n"]);return mn=function(){return n},n}function gn(){return Object(r.jsx)(xn,{children:Object(r.jsxs)(wn,{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(r.jsx)("li",{children:"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68"}),Object(r.jsx)("li",{children:"\uac8c\uc2dc\ubb3c/\ub313\uae00 \uc0ad\uc81c\uc694\uccad"})]}),Object(r.jsxs)(yn,{children:[Object(r.jsx)("span",{children:"COPYRIGHT 2020 Stylefolks.com"}),Object(r.jsx)("span",{children:"\uad11\uace0/\uc81c\ud734 \ubb38\uc758\ub294 ..."})]})]})})}var xn=f.d.footer(mn()),yn=f.d.div(pn()),wn=f.d.section(vn());function kn(){var n=Object(j.a)(["\n  color: red;\n"]);return kn=function(){return n},n}function qn(){return Object(r.jsx)("div",{children:Object(r.jsxs)(An,{children:[Object(r.jsx)("li",{children:"\ucd5c\uaca8\uc6b8"}),Object(r.jsx)("li",{children:"\ud54f\ub354\uc0ac\uc774\uc988"}),Object(r.jsx)("li",{children:"\ucd5c\uaca8\uc6b8"})]})})}var An=f.d.ul(kn());function Vn(){var n=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]);return Vn=function(){return n},n}function zn(){var n=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin: 1vh 0;\n"]);return zn=function(){return n},n}function Un(){var n=Object(j.a)(["\n  width: 80vw;\n  margin: 0 auto;\n"]);return Un=function(){return n},n}var Cn=f.d.main(Un()),Pn=f.d.title(zn()),Xn=f.d.section(Vn()),In=function(n){var t,e=Object(i.useState)([]),c=Object(h.a)(e,2),a=c[0],o=c[1];return Object(i.useEffect)((function(){fetch("".concat("https://sanghunlee-711.github.io/communityFashion","/data/data.json"),{}).then((function(n){return n.json()})).then((function(n){return o(n["main-data"])}))}),[]),Object(r.jsxs)(Cn,{children:[Object(r.jsxs)(Pn,{children:[Object(r.jsx)("span",{children:n.match.params.menuKey}),Object(r.jsx)("span",{children:" Of"}),Object(r.jsx)("span",{children:n.match.params.menuId})]}),Object(r.jsx)(Xn,{children:null===(t=a["small-data"])||void 0===t?void 0:t.map((function(n,t){return Object(r.jsx)(z,{smallData:n},n.title+t)}))})]})},Zn=function(n){Object(l.a)(e,n);var t=Object(s.a)(e);function e(){return Object(o.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return Object(r.jsxs)(d.a,{basename:"/communityFashion",children:[Object(r.jsx)(cn,{}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",component:I}),Object(r.jsx)(b.a,{exact:!0,path:"/youtube",component:qn}),Object(r.jsx)(b.a,{exact:!0,path:"/menu/:menuId/:menuKey",component:In})]}),Object(r.jsx)(gn,{})]})}}]),e}(i.Component),Ln=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,40)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),c(n),a(n)}))};function Gn(){var n=Object(j.a)(["\n    a{\n        text-decoration:none;\n        color: #191919;\n    }\n    * {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n    }\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed,\n    figure, figcaption, footer, header, hgroup,\n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        border: 0;\n        font-size: 100%;\n        font-family: 'Heebo', sans-serif;\n        vertical-align: baseline;\n    }\n    body {\n        line-height: 1.3;\n        font-size: 12px;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    button, input, select, textarea {\n        font-size: 100%;\n        margin: 0;\n        vertical-align: baseline;\n    }\n    button, input {\n        padding: 0;\n        border: none;\n        font: inherit;\n        color: inherit;\n        background-color: transparent;\n        cursor: pointer;\n        outline: 0;\n    }\n"]);return Gn=function(){return n},n}var Tn=Object(f.b)(Gn());function Qn(){var n=Object(j.a)(["\n    font-size: ",";\n    font-weight: ",";\n    color: ",";\n    font-family: ",";\n  "]);return Qn=function(){return n},n}function Nn(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: ",";\n    flex-direction: ",";\n  "]);return Nn=function(){return n},n}function Sn(){var n=Object(j.a)(["\n    width: ",";\n    height: ",";\n  "]);return Sn=function(){return n},n}function Dn(){var n=Object(j.a)(["\n    &:link,\n    &:visited,\n    &:active {\n      color: black;\n    }\n\n    &:hover {\n      transition: ease 250ms color;\n      color: #999999;\n    }\n  "]);return Dn=function(){return n},n}var Jn={libre:"Libre Baskerville",alata:"Alata",lora:"Lora",comfortaa:"Comfortaa",titleBlack:"#000000",borderBlack:"#333333",contentsGray:"#4d4d4d",CartCountGray:"#999999",dateTextGray:"#b3b3b3",white:"#ffffff",footerHover:Object(f.c)(Dn()),setSize:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object(f.c)(Sn(),n,t)},setFlex:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object(f.c)(Nn(),n,t,e)},setFont:function(n,t,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Object(f.c)(Qn(),n,t,e,r)}};a.a.render(Object(r.jsxs)(f.a,{theme:Jn,children:[Object(r.jsx)(Zn,{}),Object(r.jsx)(Tn,{})]},Jn),document.getElementById("root")),Ln()}},[[39,1,2]]]);
//# sourceMappingURL=main.b615412c.chunk.js.map