(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(152),o=n(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Blog",keywords:["gatsby","react","nathanyocum","golang","javascript","testing","blog"]}),r.a.createElement("h1",null,"Coming soon..."))}},145:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Nathan Yocum -- GitHub"}}}}},149:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(154),s=n.n(l);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,l=a.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",description:"",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.string),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Nathan Yocum -- GitHub",description:"Nathan Yocum's GitHub profie",author:"NathanYocum"}}}}},152:function(e,t,n){"use strict";var a=n(146),r=n.n(a),i=n(148),o=n(0),c=n.n(o),l=n(4),s=n.n(l),u=n(32),p=n.n(u),m=(n(145),c.a.createContext({})),d=function(e){return c.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var f=n(147),x=n(153),g=function(){var e=Object(o.useState)("undefined"==typeof window?0:window.innerWidth),t=e[0],n=e[1];return Object(o.useEffect)(function(){var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),t};function y(){var e=r()(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: #a1e9ff;\n  color: #ac0800;\n"]);return y=function(){return e},e}function E(){var e=r()(["\n  height: 56px;\n  color: #e64a19;\n  background-color: #6ab7ff;\n  font-size: 24px;\n  display: flex;\n  align-items: flex-end;\n"]);return E=function(){return e},e}var h=f.b.nav(E()),b=f.b.div(y()),w=function(e){var t=e.siteTitle,n=g(),a=Object(o.useState)(n<488),r=a[0],i=a[1];Object(o.useEffect)(function(){return i(n<488)},[n]);var l=Object(o.useReducer)(function(e,t){return!e&&n<488&&"resize"!==t},!1),s=l[0],u=l[1];return Object(o.useEffect)(function(){return u("resize")},[r]),c.a.createElement("header",null,c.a.createElement(h,null,r&&c.a.createElement(x.a,{style:{margin:"0px 20px 0px 10px"},onClick:function(){return u()}}),c.a.createElement(p.a,{style:{textDecoration:"none",color:"inherit",flexGrow:2},to:"/"},t),n>488&&c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/"},c.a.createElement(x.c,{size:"20px"})," ",c.a.createElement("br",null),"Home"),c.a.createElement(p.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/blog"},c.a.createElement(x.f,{size:"20px"})," ",c.a.createElement("br",null),"Blog"),c.a.createElement(p.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"16px"},to:"/resources"},c.a.createElement(x.d,{size:"20px"})," ",c.a.createElement("br",null),"Resources"))),s&&c.a.createElement(b,null,c.a.createElement(p.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/"},c.a.createElement(x.c,{size:"40px",style:{margin:"10px 10px 0px 0px"}}),"Home"),c.a.createElement(p.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/blog"},c.a.createElement(x.f,{size:"40px",style:{marginRight:"10px"}}),"Blog"),c.a.createElement(p.a,{style:{textDecoration:"none",color:"inherit",textAlign:"center",margin:"0px 8px 0px 8px",fontSize:"30px"},to:"/resources"},c.a.createElement(x.d,{size:"40px",style:{marginRight:"10px"}}),"Resources")))};w.propTypes={siteTitle:s.a.string},w.defaultProps={siteTitle:""};var v=w;function z(){var e=r()(["\n  display: grid;\n  justify-content: center;\n  line-height: 1.4;\n  color: #222222;\n  font-size: 18px;\n"]);return z=function(){return e},e}function j(){var e=r()(["\n  body {\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return j=function(){return e},e}var R=Object(f.a)(j()),k=f.b.div(z()),q=function(e){var t=e.children;return c.a.createElement(d,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(R,null),c.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(k,null,c.a.createElement("main",null,t),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",c.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})};q.propTypes={children:s.a.node.isRequired};t.a=q}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-587ad36fd7d24b763c79.js.map