(this.webpackJsonpgobang=this.webpackJsonpgobang||[]).push([[0],{20:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e.n(i),a=e(9),o=e.n(a),u=e(2),l=e(3),s=e(4),d="@media screen and (max-width: 760px)";function f(n,t){return 0===n?(n=t?1:-1,t=t?!t:t):n=n>0?n+1:n-1,[n,t]}function b(n){var t=n.board,e=n.position,r=n.type,i=Object(u.a)(e,2),c=i[0],a=i[1];if(e.length){for(var o=0,l=0,s=0,d=!0;s<2&&l<5;){var b=f(o,d),p=Object(u.a)(b,2);o=p[0],d=p[1],"row"===r&&(t[c][a]&&t[c][a]===t[c][a+o]?l++:s++),"column"===r&&(void 0!==t[c+o]&&t[c][a]&&t[c][a]===t[c+o][a]?l++:s++),"leftUpSlash"===r&&(void 0!==t[c+o]&&t[c][a]&&t[c][a]===t[c+o][a+o]?l++:s++),"rightUpSlash"===r&&(void 0!==t[c+o]&&void 0!==t[c-o]&&t[c][a]&&t[c][a]===t[c-o][a+o]?l++:s++),s>=1&&o>=1&&(o=0)}return l<4?null:t[c][a]}}function p(){var n=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: ",";\n  width: ",";\n  border-radius: ",";\n  background-color: ",";\n\n  "," {\n    height: ",";\n    width: ",";\n  }\n"]);return p=function(){return n},n}function j(){var n=Object(l.a)(["\n  position: relative;\n  width: 34px;\n  height: 34px;\n  background-color: #ff9224;\n  margin-left: -1px;\n  margin-top: -1px;\n  padding: 4px;\n\n  "," {\n    width: 24px;\n    height: 24px;\n  }\n\n  &:hover {\n    background-color: #4f4f4f;\n  }\n"]);return j=function(){return n},n}var h=s.a.button(j(),d),x=s.a.div(p(),(function(n){return n.value?"25px":""}),(function(n){return n.value?"25px":""}),(function(n){return n.value?"50%":""}),(function(n){return n.value&&"W"===n.value?"white":"black"}),d,(function(n){return n.value?"15px":""}),(function(n){return n.value?"15px":""}));function v(n){var t=n.children,e=n.onClick;return Object(r.jsx)("div",{className:"resetButton",style:{textAlign:"center",margin:"10px"},children:Object(r.jsx)("button",{style:{backgroundColor:"#FF359A",cursor:"pointer",padding:"10px",borderRadius:"8px",color:"#FFF7FB"},onClick:e,children:t})})}function O(n){var t=n.onClick,e=n.value;return Object(r.jsx)(h,{onClick:t,children:Object(r.jsx)(x,{value:e})})}function g(){var n=Object(l.a)(["\n  text-align: center;\n"]);return g=function(){return n},n}function w(){var n=Object(l.a)(["\n  width: 640px;\n  margin: 0 auto;\n  text-align: center;\n  "," {\n    width: 440px;\n    padding: 0px;\n    margin: 0 auto;\n    line-height: 0px;\n  }\n"]);return w=function(){return n},n}function m(){var n=Object(l.a)(["\n  width: 100%;\n  text-align: center;\n"]);return m=function(){return n},n}var y=s.a.h1(m()),k=s.a.div(w(),d),S=s.a.div(g());function N(n){var t=n.status,e=n.whiteIsNext;return t?Object(r.jsxs)(S,{children:[" Winner is ","W"===t?"\u767d":"\u9ed1"]}):Object(r.jsxs)(S,{children:[" NextPlayer is ",e?"\u767d\u5b50":"\u9ed1\u5b50"]})}var A=function(){var n=Object(i.useState)(Array(19).fill(Array(19).fill(null))),t=Object(u.a)(n,2),e=t[0],c=t[1],a=Object(i.useState)([]),o=Object(u.a)(a,2),l=o[0],s=o[1],d=Object(i.useState)(""),f=Object(u.a)(d,2),p=f[0],j=f[1],h=Object(i.useState)(!0),x=Object(u.a)(h,2),g=x[0],w=x[1];function m(){for(var n=function(n){e[n[0]][n[1]]||p||(!function(n,t,r){var i=JSON.parse(JSON.stringify(e));i[n][t]=r,c(i)}(n[0],n[1],g?"W":"B"),s(n),w(!g))},t=[],i=function(i){t[i]=[];for(var c=function(c){t[i][c]=Object(r.jsx)(O,{onClick:function(){n([i,c])},whiteIsNext:g,value:e[i][c]},"".concat(i,",").concat(c))},a=0;a<19;a++)c(a)},a=0;a<19;a++)i(a);return t}return Object(i.useEffect)((function(){var n=b({board:e,position:l,type:"row"}),t=b({board:e,position:l,type:"column"}),r=b({board:e,position:l,type:"leftUpSlash"}),i=b({board:e,position:l,type:"rightUpSlash"});n&&j(n),t&&j(t),r&&j(r),i&&j(i)}),[e,l]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(y,{children:"\u4e94\u5b50\u68cb\u904a\u6232"}),Object(r.jsx)(N,{status:p,whiteIsNext:g}),Object(r.jsx)(v,{onClick:function(){c(Array(19).fill(Array(19).fill(null))),s([]),j(""),w(!0)},children:"\u91cd\u65b0\u958b\u59cb"}),Object(r.jsx)(k,{children:Object(r.jsx)(m,{})})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a3e1a6b2.chunk.js.map