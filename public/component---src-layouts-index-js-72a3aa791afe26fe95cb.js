webpackJsonp([0x67ef26645b2a,60335399758886],{130:function(e,t){e.exports={layoutContext:{}}},255:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(2),r=n(o),c=a(261),u=n(c),i=a(130),s=n(i);t.default=function(e){return r.default.createElement(u.default,l({},e,s.default))},e.exports=t.default},352:function(e,t){},353:function(e,t){},258:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(2),u=n(c),i=a(19),s=n(i);a(353);var f=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return u.default.createElement("nav",{className:"default-primary-color navbar navbar-dark col-md-2 d-none d-md-block",id:"sticky-outer-nav"},u.default.createElement("div",{className:"d-flex align-items-center inner-centered-div"},u.default.createElement("ul",{className:"navbar-nav mx-3 w-100"},u.default.createElement("li",{className:"nav-item"},u.default.createElement(s.default,{exact:!0,to:"/",className:"nav-link px-3",activeClassName:"nav-link-active"},"Blog")),u.default.createElement("li",{className:"nav-item"},u.default.createElement(s.default,{to:"/tags",className:"nav-link px-3",activeClassName:"nav-link-active"},"Tags")),u.default.createElement("li",{className:"nav-item"},u.default.createElement(s.default,{to:"/about",className:"nav-link px-3",activeClassName:"nav-link-active"},"About")))))},t}(u.default.Component);t.default=f,e.exports=t.default},354:function(e,t){},260:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(2),u=n(c),i=a(19),s=n(i);a(354);var f=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return u.default.createElement("nav",{className:"default-primary-color navbar navbar-dark col-md-2 d-md-none"},u.default.createElement("input",{type:"checkbox",id:"topnavbar-control"}),u.default.createElement("label",{htmlFor:"topnavbar-control",className:"navbar-toggler hidden-md-up topnavbar-control-label","aria-controls":"collapsable-navbar"},u.default.createElement("span",{className:"navbar-toggler-icon topnavbar-control-icon"})),u.default.createElement("div",{className:"collapse navbar navbar-collapse topnavbar-menu-container"},u.default.createElement("ul",{className:"navbar-nav mr-auto"},u.default.createElement("li",{className:"nav-item"},u.default.createElement(s.default,{exact:!0,to:"/",className:"nav-link px-3",activeClassName:"nav-link-active"},"Blog")),u.default.createElement("li",{className:"nav-item"},u.default.createElement(s.default,{to:"/tags/",className:"nav-link px-3",activeClassName:"nav-link-active"},"Tags")),u.default.createElement("li",{className:"nav-item"},u.default.createElement(s.default,{to:"/about/",className:"nav-link px-3",activeClassName:"nav-link-active"},"About")))))},t}(u.default.Component);t.default=f,e.exports=t.default},355:function(e,t){},261:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(2),u=n(c),i=a(19),s=n(i),f=a(258),d=n(f),p=a(260),m=n(p);a(352),a(355);var v=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.children,n=void 0;return n="/"===t.pathname?u.default.createElement("h1",{className:"text-center font-weight-bold"},"Solid Flow Blog"):u.default.createElement("h3",null,u.default.createElement(s.default,{to:"/"},"Solid Flow Blog")),u.default.createElement("div",{className:""},u.default.createElement("div",{className:"row"},u.default.createElement(m.default,null),u.default.createElement(d.default,null),u.default.createElement("div",{className:"col-md-9 col-lg-10 ml-sm-auto"},u.default.createElement("div",{className:"main-container"},n,a()))))},t}(u.default.Component);v.propTypes={children:u.default.PropTypes.func,location:u.default.PropTypes.object,route:u.default.PropTypes.object},t.default=v,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-72a3aa791afe26fe95cb.js.map