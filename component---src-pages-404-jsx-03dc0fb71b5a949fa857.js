(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(t,e,n){"use strict";n.r(e);var a=n(9),r=(n(0),n(160)),i=n(159),o=n(154);e.default=function(){return Object(a.d)(i.a,null,Object(a.d)(o.a,{title:"404: Not found"}),Object(a.d)("h1",null,"NOT FOUND"),Object(a.d)(r.e,{size:"200px"}),Object(a.d)("p",null,"You just hit a route that doesn't exist..."))}},151:function(t,e,n){"use strict";var a=n(0);e.a=function(){var t=Object(a.useState)(window.innerWidth),e=t[0],n=t[1];return Object(a.useEffect)(function(){var t=function(){return n(window.innerWidth)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),e}},152:function(t,e,n){var a;t.exports=(a=n(158))&&a.default||a},153:function(t,e,n){"use strict";e.a={primary:"#6ab7ff",secondary:"#ff9800",secondaryDark:"#e65100",secondaryLight:"#ff945e",darkGrey:"#aaaaaa",lightGrey:"#e3e3e3",blueGrey:"#90a4ae",red:"#ff4136",green:"#3d9970",white:"#ffffff"}},154:function(t,e,n){"use strict";var a=n(9),r=n(155),i=(n(0),n(4)),o=n.n(i),c=n(161),s=n.n(c);function l(t){var e=t.description,n=t.lang,i=t.meta,o=t.keywords,c=t.title,l=r.data.site,d=e||l.siteMetadata.description;return Object(a.d)(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",description:"",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.string),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},155:function(t){t.exports={data:{site:{siteMetadata:{title:"Nathan Yocum -- GitHub",description:"Nathan Yocum's GitHub profie",author:"NathanYocum"}}}}},157:function(t){t.exports={data:{site:{siteMetadata:{title:"Nathan Yocum -- GitHub"}}}}},158:function(t,e,n){"use strict";n.r(e);n(58);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(59),s=n(2),l=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},159:function(t,e,n){"use strict";var a=n(156),r=n(9),i=n(157),o=n(0),c=n.n(o),s=n(4),l=n.n(s),d=n(36),u=n.n(d),p=(n(152),c.a.createContext({})),f=function(t){return Object(r.d)(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(r.d)("div",null,"Loading (StaticQuery)")})};f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var x=n(160),b=n(151),g=n(153),j=Object(a.a)("nav",{target:"e1m6wsfp0"})("height:56px;color:",g.a.white,";background-color:",g.a.primary,";font-size:24px;display:flex;align-items:center;padding-left:8px;padding-right:8px;"),m=Object(a.a)("div",{target:"e1m6wsfp1"})({name:"rt3psj",styles:"display:flex;flex-direction:column;align-items:flex-start;background-color:#a1e9ff;color:#ac0800;"}),O=function(t){var e=t.siteTitle,n=Object(b.a)(),a=Object(o.useState)(n<488),i=a[0],s=a[1];Object(o.useEffect)(function(){return s(n<488)},[n]);var l=Object(o.useReducer)(function(t,e){return!t&&n<488&&"resize"!==e},!1),d=l[0],p=l[1];return Object(o.useEffect)(function(){return p("resize")},[i]),Object(r.d)("nav",null,Object(r.d)(j,null,i&&Object(r.d)(x.a,{style:{margin:"0px 20px 0px 10px"},onClick:function(){return p()}}),Object(r.d)(u.a,{style:{textDecoration:"none",color:"inherit",flexGrow:2},to:"/"},e),n>488&&Object(r.d)(c.a.Fragment,null,Object(r.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/"},Object(r.d)(x.c,{size:"20px"})," ",Object(r.d)("br",null),"Home"),Object(r.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/blog"},Object(r.d)(x.f,{size:"20px"})," ",Object(r.d)("br",null),"Blog"),Object(r.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/resources"},Object(r.d)(x.d,{size:"20px"})," ",Object(r.d)("br",null),"Resources"))),d&&Object(r.d)(m,null,Object(r.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/"},Object(r.d)(x.c,{size:"40px",style:{margin:"10px 10px 0px 0px"}}),"Home"),Object(r.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/blog"},Object(r.d)(x.f,{size:"40px",style:{marginRight:"10px"}}),"Blog"),Object(r.d)(u.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/resources"},Object(r.d)(x.d,{size:"40px",style:{marginRight:"10px"}}),"Resources")))};O.propTypes={siteTitle:l.a.string},O.defaultProps={siteTitle:""};var y=O,h=Object(a.a)("div",{target:"e1akkqh30"})({name:"x4tn88",styles:"display:grid;justify-content:center;line-height:1.4;color:#222222;font-size:18px;"}),w={name:"g7359a",styles:"body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}"},v=function(t){var e=t.children,n=Object(b.a)();return Object(r.d)(c.a.Fragment,null,Object(r.d)(r.a,{styles:w}),Object(r.d)(f,{query:"1044757290",render:function(t){return 0===n?Object(r.d)(c.a.Fragment,null):Object(r.d)(c.a.Fragment,null,Object(r.d)(y,{siteTitle:t.site.siteMetadata.title}),Object(r.d)(h,null,Object(r.d)("main",null,e)))},data:i}))};v.propTypes={children:l.a.node.isRequired};e.a=v}}]);
//# sourceMappingURL=component---src-pages-404-jsx-03dc0fb71b5a949fa857.js.map