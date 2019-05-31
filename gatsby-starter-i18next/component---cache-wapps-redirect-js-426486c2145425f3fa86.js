(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,n){var r=n(167).Redirect;e.exports=r},158:function(e,t,n){"use strict";n(155);var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nProvider=function(e){var t=e.children,n=(0,u.default)(e,["children"]);return l.default.createElement(i.Provider,{value:(0,a.default)({},n)},t)},t.I18nConsumer=void 0;var a=r(n(159)),u=r(n(165)),l=r(n(0)),i=(r(n(4)),l.default.createContext());var o=i.Consumer;t.I18nConsumer=o},163:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return s}),n.d(t,"useStaticQuery",function(){return p});var r=n(0),a=n.n(r),u=n(4),l=n.n(u),i=n(36),o=n.n(i);n.d(t,"Link",function(){return o.a}),n.d(t,"withAssetPrefix",function(){return i.withAssetPrefix}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"parsePath",function(){return i.parsePath}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var c=n(166),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var f=a.a.createContext({}),s=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){a.a.useContext;var t=a.a.useContext(f);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},166:function(e,t,n){var r;e.exports=(r=n(171))&&r.default||r},167:function(e,t,n){"use strict";n(155);var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"I18nProvider",{enumerable:!0,get:function(){return o.I18nProvider}}),Object.defineProperty(t,"I18nConsumer",{enumerable:!0,get:function(){return o.I18nConsumer}});var a=r(n(169)),u=r(n(170)),l=r(n(173)),i=r(n(175)),o=n(158)},169:function(e,t,n){"use strict";n(56),n(155);var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(80)),u=r(n(0)),l=(r(n(4)),r(n(180))),i=n(158);function o(e){var t=e.availableLngs,n=e.children,r=e.lng,a=e.originalPath,i=e.siteUrl;e.hreflang;return u.default.createElement(u.default.Fragment,null,u.default.createElement(l.default,null,u.default.createElement("html",{lang:r}),u.default.createElement("link",{rel:"alternate",href:"".concat(i),hreflang:"x-default"}),t.map(function(e){return u.default.createElement("link",{key:e,rel:"alternate",href:"".concat(i).concat(e).concat(a),hreflang:e})}),n))}o.defaultProps={hreflang:!0};t.default=function(e){return u.default.createElement(i.I18nConsumer,null,function(t){return u.default.createElement(o,(0,a.default)({},t,e))})}},170:function(e,t,n){"use strict";n(155);var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(156)),u=r(n(157)),l=r(n(160)),i=r(n(161)),o=r(n(162)),c=r(n(37)),d=r(n(38)),f=n(0),s=(r(n(4)),n(163)),p=n(181),g=n(172),v=function(e){function t(){var e,n;(0,a.default)(this,t);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return n=(0,l.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(u))),(0,d.default)((0,c.default)((0,c.default)(n)),"perform",function(){var e=n.props.pageContext,t=e.fallbackLng,r=e.availableLngs,a=e.redirectPage,u=window.localStorage.getItem("@wappsLng")||(0,p.lookup)(r,(0,p.navigatorLanguages)(),t);window.localStorage.setItem("@wappsLng",u);var l="/".concat(u).concat(a);(0,s.navigate)(l,{replace:!0})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){(0,g.isBrowser)()||this.perform()}},{key:"render",value:function(){return null}}]),t}(f.PureComponent);t.default=v},171:function(e,t,n){"use strict";n.r(t);n(39);var r=n(0),a=n.n(r),u=n(4),l=n.n(u),i=n(57),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},172:function(e,t,n){"use strict";n(155),Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowser=function(){return"undefined"==typeof window}},173:function(e,t,n){"use strict";n(155);var r=n(174),a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(80)),l=a(n(156)),i=a(n(157)),o=a(n(160)),c=a(n(161)),d=a(n(162)),f=a(n(37)),s=a(n(38)),p=r(n(0)),g=n(163),v=n(158),h=function(e){function t(){var e,n;(0,l.default)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return n=(0,o.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(a))),(0,s.default)((0,f.default)((0,f.default)(n)),"handleChangeLng",function(e){var t=n.props.originalPath,r="/".concat(e).concat(t);(0,g.navigate)(r)}),n}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.availableLngs;return(0,e.children)({lng:e.lng,changeLng:this.handleChangeLng,availableLngs:t})}}]),t}(p.Component);t.default=function(e){return p.default.createElement(v.I18nConsumer,null,function(t){return p.default.createElement(h,(0,u.default)({},t,e))})}},175:function(e,t,n){"use strict";n(155);var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(80)),u=r(n(165)),l=r(n(0)),i=r(n(4)),o=n(163),c=n(158),d=function(e){var t=e.to,n=e.lng,r=e.children,i=(0,u.default)(e,["to","lng","children"]);return l.default.createElement(o.Link,(0,a.default)({to:n?"/".concat(n).concat(t):"".concat(t)},i),r)};d.propTypes={to:i.default.string.isRequired,children:i.default.node.isRequired};t.default=function(e){return l.default.createElement(c.I18nConsumer,null,function(t){var n=t.lng;return l.default.createElement(d,(0,a.default)({lng:n},e))})}}}]);
//# sourceMappingURL=component---cache-wapps-redirect-js-426486c2145425f3fa86.js.map