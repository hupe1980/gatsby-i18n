(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,n){"use strict";n(133);var r=n(28);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nProvider=function(e){var t=e.children,n=(0,u.default)(e,["children"]);return i.default.createElement(l.Provider,{value:(0,a.default)({},n)},t)},t.I18nConsumer=void 0;var a=r(n(196)),u=r(n(162)),i=r(n(0)),l=(r(n(4)),i.default.createContext());var o=l.Consumer;t.I18nConsumer=o},138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return _}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),u=n(4),i=n.n(u),l=n(135),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(157),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var f=n(31);n.d(t,"parsePath",function(){return f.a});var s=a.a.createContext({}),p=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function _(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,n){"use strict";n(133);var r=n(28);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return a.Head}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.Redirect}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return a.Language}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return a.Link}}),Object.defineProperty(t,"withLingui",{enumerable:!0,get:function(){return u.default}});var a=n(161),u=r(n(233))},157:function(e,t,n){var r;e.exports=(r=n(171))&&r.default||r},161:function(e,t,n){"use strict";n(133);var r=n(28);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"I18nProvider",{enumerable:!0,get:function(){return o.I18nProvider}}),Object.defineProperty(t,"I18nConsumer",{enumerable:!0,get:function(){return o.I18nConsumer}});var a=r(n(168)),u=r(n(170)),i=r(n(173)),l=r(n(175)),o=n(137)},168:function(e,t,n){"use strict";n(192),n(133);var r=n(28);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(142)),u=r(n(0)),i=(r(n(4)),r(n(194))),l=n(137);function o(e){var t=e.availableLngs,n=e.children,r=e.lng,a=e.originalPath,l=e.siteUrl;e.hreflang;return u.default.createElement(u.default.Fragment,null,u.default.createElement(i.default,null,u.default.createElement("html",{lang:r}),u.default.createElement("link",{rel:"alternate",href:"".concat(l),hreflang:"x-default"}),t.map(function(e){return u.default.createElement("link",{key:e,rel:"alternate",href:"".concat(l).concat(e).concat(a),hreflang:e})}),n))}o.defaultProps={hreflang:!0};t.default=function(e){return u.default.createElement(l.I18nConsumer,null,function(t){return u.default.createElement(o,(0,a.default)({},t,e))})}},170:function(e,t,n){"use strict";n(133);var r=n(28);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(152)),u=r(n(153)),i=r(n(154)),l=r(n(155)),o=r(n(156)),c=r(n(46)),d=r(n(47)),f=n(0),s=(r(n(4)),n(138)),p=n(198),_=n(172),g=function(e){function t(){var e,n;(0,a.default)(this,t);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return n=(0,i.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(u))),(0,d.default)((0,c.default)((0,c.default)(n)),"perform",function(){var e=n.props.pageContext,t=e.fallbackLng,r=e.availableLngs,a=e.redirectPage,u=window.localStorage.getItem("@wappsLng")||(0,p.lookup)(r,(0,p.navigatorLanguages)(),t);window.localStorage.setItem("@wappsLng",u);var i="/".concat(u).concat(a);(0,s.navigate)(i,{replace:!0})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){(0,_.isBrowser)()||this.perform()}},{key:"render",value:function(){return null}}]),t}(f.PureComponent);t.default=g},171:function(e,t,n){"use strict";n.r(t);n(29);var r=n(0),a=n.n(r),u=n(4),i=n.n(u),l=n(49),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},172:function(e,t,n){"use strict";n(133),Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowser=function(){return"undefined"==typeof window}},173:function(e,t,n){"use strict";n(133);var r=n(174),a=n(28);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(142)),i=a(n(152)),l=a(n(153)),o=a(n(154)),c=a(n(155)),d=a(n(156)),f=a(n(46)),s=a(n(47)),p=r(n(0)),_=n(138),g=n(137),v=function(e){function t(){var e,n;(0,i.default)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return n=(0,o.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(a))),(0,s.default)((0,f.default)((0,f.default)(n)),"handleChangeLng",function(e){var t=n.props.originalPath,r=(0,_.withPrefix)("/".concat(e).concat(t));(0,_.navigate)(r)}),n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.availableLngs;return(0,e.children)({lng:e.lng,changeLng:this.handleChangeLng,availableLngs:t})}}]),t}(p.Component);t.default=function(e){return p.default.createElement(g.I18nConsumer,null,function(t){return p.default.createElement(v,(0,u.default)({},t,e))})}},175:function(e,t,n){"use strict";n(133);var r=n(28);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(142)),u=r(n(162)),i=r(n(0)),l=r(n(4)),o=n(138),c=n(137),d=function(e){var t=e.to,n=e.lng,r=e.children,l=(0,u.default)(e,["to","lng","children"]);return i.default.createElement(o.Link,(0,a.default)({to:n?"/".concat(n).concat(t):"".concat(t)},l),r)};d.propTypes={to:l.default.string.isRequired,children:l.default.node.isRequired};t.default=function(e){return i.default.createElement(c.I18nConsumer,null,function(t){var n=t.lng;return i.default.createElement(d,(0,a.default)({lng:n},e))})}},191:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(4),i=n.n(u),l=n(163),o=n(146),c=(n(29),function(e){var t=e.changeLng,n=e.lng,r=e.availableLngs;return a.a.createElement("ul",{style:{listStyle:"none"}},r.map(function(e){return a.a.createElement("li",{key:e,style:{display:"inline"}},a.a.createElement("button",{style:{background:"rebeccapurple",color:"white",textDecoration:e===n?"underline":"none"},onClick:function(){return t(e)}},e))}))}),d=function(e){return a.a.createElement(o.Language,null,function(t){return a.a.createElement(c,Object.assign({},e,t))})},f=function(e){var t=e.siteTitle;return a.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.a.createElement("h1",{style:{margin:0}},a.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),a.a.createElement("div",{style:{position:"absolute",top:0,right:0}},a.a.createElement(d,null)))},s=(n(300),function(e){var t=e.children,n=e.i18n;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Head,{hreflang:!0},a.a.createElement("title",null,n._("Gatsby Starter Lingui")),a.a.createElement("meta",{name:"description",content:"Sample"}),a.a.createElement("meta",{name:"keywords",content:"gatsby, react, wapps, lingui"})),a.a.createElement(f,{siteTitle:n._("Gatsby Starter Lingui")}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))});s.propTypes={children:i.a.node.isRequired};t.a=Object(l.withI18n)()(s)},233:function(module,exports,__webpack_require__){"use strict";__webpack_require__(69),__webpack_require__(234),__webpack_require__(235),__webpack_require__(236),__webpack_require__(133);var _interopRequireWildcard=__webpack_require__(174),_interopRequireDefault=__webpack_require__(28);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(152)),_createClass2=_interopRequireDefault(__webpack_require__(153)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(154)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(155)),_inherits2=_interopRequireDefault(__webpack_require__(156)),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(46)),_defineProperty2=_interopRequireDefault(__webpack_require__(47)),_react=_interopRequireWildcard(__webpack_require__(0)),_react2=__webpack_require__(163),_core=__webpack_require__(214),_gatsbyI18n=__webpack_require__(161),convert=function convert(data){return JSON.parse(data,function(key,value){return"string"==typeof value&&value.startsWith("/Function(")&&value.endsWith(")/")?(value=value.substring(10,value.length-2),eval("("+value+")")):value})},withLingui=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e){return function(t){function n(e){var t;return(0,_classCallCheck2.default)(this,n),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(n).call(this,e)),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(t)),"activateLng",function(){var e=t.props,n=e.data,r=e.pageContext,a={};n.locales&&n.locales.edges.forEach(function(e){var t=e.node,n=t.lng,r=t.ns,u=t.data;a[n]=(0,_defineProperty2.default)({},r,JSON.parse(u))}),t.i18n.load(a),t.i18n.activate(r.lng)}),t.i18n=(0,_core.setupI18n)(),t.activateLng(),t}return(0,_inherits2.default)(n,t),(0,_createClass2.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.pageContext.lng!==e.pageContext.lng&&(this.activateLng(),this.forceUpdate())}},{key:"render",value:function(){return _react.default.createElement(_react2.I18nProvider,{i18n:this.i18n},_react.default.createElement(_gatsbyI18n.I18nProvider,this.props.pageContext,_react.default.createElement(e,this.props)))}}]),n}(_react.Component)}},_default=withLingui;exports.default=_default},300:function(e,t,n){}}]);
//# sourceMappingURL=2-a253b5ef278146b5f76c.js.map