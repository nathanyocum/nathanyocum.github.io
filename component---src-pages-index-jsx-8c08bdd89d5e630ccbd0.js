(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(t,e,n){"use strict";n.r(e);var r=n(9),a=(n(0),n(160)),i=n(159),o=n(154);e.default=function(){return Object(r.d)(i.a,null,Object(r.d)(o.a,{title:"Home",keywords:["gatsby","react","nathanyocum","golang","javascript","testing"]}),Object(r.d)("h1",null,"Hello World!"),Object(r.d)(a.b,{size:"200px"}),Object(r.d)("p",null,"This site is under construction!"),Object(r.d)("p",null,"I am very busy working on my"," ",Object(r.d)("a",{href:"https://github.com/LectureGoggles/"},"Senior Project")," so I will be very slow updating this site."))}},151:function(t,e,n){"use strict";var r=n(0);e.a=function(){var t=Object(r.useState)(0),e=t[0],n=t[1];return Object(r.useEffect)(function(){n(window.innerWidth);var t=function(){return n(window.innerWidth)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}},[]),e}},152:function(t,e,n){var r;t.exports=(r=n(158))&&r.default||r},153:function(t,e,n){"use strict";e.a={primary:"#6ab7ff",secondary:"#ff9800",secondaryDark:"#e65100",secondaryLight:"#ff945e",darkGrey:"#aaaaaa",lightGrey:"#e3e3e3",blueGrey:"#90a4ae",red:"#ff4136",green:"#3d9970",white:"#ffffff"}},154:function(t,e,n){"use strict";var r=n(9),a=n(155),i=(n(0),n(4)),o=n.n(i),c=n(161),s=n.n(c);function l(t){var e=t.description,n=t.lang,i=t.meta,o=t.keywords,c=t.title,l=a.data.site,d=e||l.siteMetadata.description;return Object(r.d)(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",description:"",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.string),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},155:function(t){t.exports={data:{site:{siteMetadata:{title:"Nathan Yocum -- GitHub",description:"Nathan Yocum's GitHub profie",author:"NathanYocum"}}}}},157:function(t){t.exports={data:{site:{siteMetadata:{title:"Nathan Yocum -- GitHub"}}}}},158:function(t,e,n){"use strict";n.r(e);n(58);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(59),s=n(2),l=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},159:function(t,e,n){"use strict";var r=n(156),a=n(9),i=n(157),o=n(0),c=n.n(o),s=n(4),l=n.n(s),d=n(36),u=n.n(d),p=(n(152),c.a.createContext({})),f=function(t){return Object(a.d)(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.d)("div",null,"Loading (StaticQuery)")})};f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var g=n(160),x=n(151),b=n(153),m=Object(r.a)("nav",{target:"e1m6wsfp0"})("height:56px;color:",b.a.white,";background-color:",b.a.primary,";font-size:24px;display:flex;align-items:center;padding-left:8px;padding-right:8px;"),y=Object(r.a)("div",{target:"e1m6wsfp1"})({name:"rt3psj",styles:"display:flex;flex-direction:column;align-items:flex-start;background-color:#a1e9ff;color:#ac0800;"}),j=function(t){var e=t.siteTitle,n=Object(x.a)(),r=Object(o.useState)(n<488),i=r[0],s=r[1];Object(o.useEffect)(function(){return s(n<488)},[n]);var l=Object(o.useReducer)(function(t,e){return!t&&n<488&&"resize"!==e},!1),d=l[0],p=l[1];return Object(o.useEffect)(function(){return p("resize")},[i]),Object(a.d)("nav",null,Object(a.d)(m,null,i&&Object(a.d)(g.a,{style:{margin:"0px 20px 0px 10px"},onClick:function(){return p()}}),Object(a.d)(u.a,{style:{textDecoration:"none",color:"inherit",flexGrow:2},to:"/"},e),n>488&&Object(a.d)(c.a.Fragment,null,Object(a.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/"},Object(a.d)(g.c,{size:"20px"})," ",Object(a.d)("br",null),"Home"),Object(a.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/blog"},Object(a.d)(g.f,{size:"20px"})," ",Object(a.d)("br",null),"Blog"),Object(a.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/resources"},Object(a.d)(g.d,{size:"20px"})," ",Object(a.d)("br",null),"Resources"))),d&&Object(a.d)(y,null,Object(a.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/"},Object(a.d)(g.c,{size:"40px",style:{margin:"10px 10px 0px 0px"}}),"Home"),Object(a.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/blog"},Object(a.d)(g.f,{size:"40px",style:{marginRight:"10px"}}),"Blog"),Object(a.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/resources"},Object(a.d)(g.d,{size:"40px",style:{marginRight:"10px"}}),"Resources")))};j.propTypes={siteTitle:l.a.string},j.defaultProps={siteTitle:""};var O=j,h=Object(r.a)("div",{target:"e1akkqh30"})({name:"x4tn88",styles:"display:grid;justify-content:center;line-height:1.4;color:#222222;font-size:18px;"}),w={name:"g7359a",styles:"body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}"},v=function(t){var e=t.children,n=Object(x.a)();return Object(a.d)(c.a.Fragment,null,Object(a.d)(a.a,{styles:w}),Object(a.d)(f,{query:"1044757290",render:function(t){return 0===n?Object(a.d)(c.a.Fragment,null):Object(a.d)(c.a.Fragment,null,Object(a.d)(O,{siteTitle:t.site.siteMetadata.title}),Object(a.d)(h,null,Object(a.d)("main",null,e)))},data:i}))};v.propTypes={children:l.a.node.isRequired};e.a=v}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8c08bdd89d5e630ccbd0.js.map