(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(t,e,o){},147:function(t,e,o){"use strict";var r={},l=o(19),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"hidden md:hidden opacity-0 invisible new-menu bg-gray-900  w-full z-10 left-0 animate-menu"},[e("ul",[e("li",[e("nuxt-link",{staticClass:"p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800",attrs:{to:"/",href:"#"}},[this._v("Home")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800",attrs:{to:"/portfolio"}},[this._v("Portfolio")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800",attrs:{to:"/contact-us",href:"#"}},[this._v("Contact Us")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800",attrs:{to:"/about",href:"#"}},[this._v("About Us")])],1)])])])}),[],!1,null,null,null);e.a=component.exports},148:function(t,e,o){"use strict";var r=o(146);o.n(r).a},149:function(t,e,o){"use strict";var r=o(41),l=(o(147),{methods:{showMenu:function(){$(window).width()<768&&($(".new-menu").toggleClass("new-menu-open"),gsap.timeline({defaults:{autoAlpha:0}}).from(".new-menu-open",{ease:"expo.inOut",duration:.8,opacity:0,height:0}).from(".new-menu-open ul li",Object(r.a)({y:15,ease:"expo.inOut",duration:.8,opacity:0,strqgger:.4},"y",10),"-=.4")),$(".icon-one").toggleClass("active-one"),$(".menu").toggleClass("menu-open")}}}),n=(o(148),o(19)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("header",{staticClass:"font-heading w-full z-10 shadow-header-shadow bg-white"},[o("div",{staticClass:"container px-2 md:px-4 lg:w-cont-width mx-auto flex items-center justify-between"},[o("div",{},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"w-165 md:w-190 max-w-190",attrs:{src:"/img/logo.jpg",alt:"Freeman Design Workshop Logo"}})])],1),t._v(" "),o("div",{staticClass:"relative"},[o("ul",{staticClass:"hidden md:flex mr-10 opacity-0 invisible menu transition-all delay-0 duration-300 ease-in-out"},[o("li",[o("nuxt-link",{staticClass:"p-6 md:text-0.9 lg:text-base text-freeman-dark font-semibold block hover:bg-gray-800",attrs:{to:"/",href:"#"}},[t._v("Home")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"p-6 md:text-0.9 lg:text-base text-freeman-dark font-semibold block hover:bg-gray-800",attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"p-6 md:text-0.9 lg:text-base text-freeman-dark font-semibold block hover:bg-gray-800",attrs:{to:"/contact-us",href:"#"}},[t._v("Contact Us")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"p-6 md:text-0.9 lg:text-base text-freeman-dark font-semibold block hover:bg-gray-800",attrs:{to:"/about",href:"#"}},[t._v("About Us")])],1)]),t._v(" "),o("div",[o("div",{staticClass:"icon-one",on:{click:t.showMenu}},[o("div",{staticClass:"hamburger hamburger-one"})])])])])]),t._v(" "),o("div",{staticClass:"md:hidden new-menu bg-gray-900  w-full z-10 left-0"},[o("ul",[o("li",[o("nuxt-link",{staticClass:"p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800",attrs:{to:"/",href:"#"}},[t._v("Home")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800",attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800",attrs:{to:"/contact-us",href:"#"}},[t._v("Contact Us")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800",attrs:{to:"/about",href:"#"}},[t._v("About Us")])],1)])])])}),[],!1,null,null,null);e.a=component.exports},150:function(t,e,o){"use strict";var r=o(19),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("footer",{staticClass:"bg-footer py-28 md:py-32"},[e("div",{staticClass:"container mx-auto lg:w-cont-width"},[e("div",{staticClass:"flex flex-col"},[this._m(0),this._v(" "),e("div",{staticClass:"text-center pb-8 mx-auto"},[e("ul",{staticClass:"flex"},[e("li",{staticClass:"ml-8"},[e("a",{staticClass:"font-heading font-semibold text-sm text-footer hover:text-footer-hover",attrs:{href:"#"}},[e("svg",{staticStyle:{fill:"#5a5a5a"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17 3H7a4 4 0 00-4 4v10a4 4 0 004 4h5.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43H16.78c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.725h-2.345V21H17a4 4 0 004-4V7a4 4 0 00-4-4z"}})])])]),this._v(" "),e("li",{staticClass:"ml-8"},[e("a",{staticClass:"font-heading font-semibold text-sm text-footer hover:text-footer-hover",attrs:{href:"#"}},[e("svg",{staticStyle:{fill:"#5a5a5a"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"34",height:"34",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h10c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z M17.05,9.514 c0,0.086,0,0.171,0,0.343c0,3.257-2.486,7.029-7.029,7.029c-1.371,0-2.657-0.429-3.771-1.114c0.171,0,0.429,0,0.6,0 c1.114,0,2.229-0.429,3.086-1.029c-1.114,0-1.971-0.771-2.314-1.714c0.171,0,0.343,0.086,0.429,0.086c0.257,0,0.429,0,0.686-0.086 c-1.114-0.257-1.971-1.2-1.971-2.4c0.343,0.171,0.686,0.257,1.114,0.343c-0.686-0.6-1.114-1.286-1.114-2.143 c0-0.429,0.086-0.857,0.343-1.2c1.2,1.457,3,2.486,5.057,2.571c0-0.171-0.086-0.343-0.086-0.6c0-1.371,1.114-2.486,2.486-2.486 c0.686,0,1.371,0.257,1.8,0.771c0.6-0.086,1.114-0.343,1.543-0.6c-0.171,0.6-0.6,1.029-1.114,1.371 c0.514-0.086,0.943-0.171,1.457-0.429C17.907,8.743,17.479,9.171,17.05,9.514z"}})])])]),this._v(" "),e("li",{staticClass:"ml-8"},[e("a",{staticClass:"font-heading font-semibold text-sm text-footer hover:text-footer-hover",attrs:{href:"#"}},[e("svg",{staticStyle:{fill:"#5a5a5a"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"34",height:"34",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"}})])])])])]),this._v(" "),e("div",{staticClass:"text-center text-13 font-sans text-footer font-normal"},[this._v("© Freeman Design Workshop 2020. All Rights Reserved.")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center py-8 mx-auto"},[e("ul",{staticClass:"flex flex-col md:flex-row"},[e("li",{staticClass:"mb-8 md:mb-0 md:ml-8"},[e("a",{staticClass:"font-heading font-semibold text-sm text-footer hover:text-footer-hover",attrs:{href:"#"}},[this._v("Home")])]),this._v(" "),e("li",{staticClass:"mb-8 md:mb-0 md:ml-8"},[e("a",{staticClass:"font-heading font-semibold text-sm text-footer hover:text-footer-hover",attrs:{href:"#"}},[this._v("Portfolio")])]),this._v(" "),e("li",{staticClass:"mb-8 md:mb-0 md:ml-8"},[e("a",{staticClass:"font-heading font-semibold text-sm text-footer hover:text-footer-hover",attrs:{href:"#"}},[this._v("Contact Us")])]),this._v(" "),e("li",{staticClass:"mb-8 md:mb-0 md:ml-8"},[e("a",{staticClass:"font-heading font-semibold text-sm text-footer hover:text-footer-hover",attrs:{href:"#"}},[this._v("About Us")])])])])}],!1,null,null,null);e.a=component.exports},159:function(t,e,o){"use strict";o.r(e);var r=o(149),l=o(150),n={components:{Header:r.a,Footer:l.a}},c=o(19),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),this._m(0),this._v(" "),e("Footer")],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"py-16 md:py-32"},[o("div",{staticClass:"container mx-auto lg:w-cont-width px-4"},[o("div",{staticClass:"grid grid-cols-1 lg:grid-cols-3 gap-8"},[o("div",{staticClass:"lg:col-span-2"},[o("img",{attrs:{src:"/img/portfolio/detail-1.jpg",alt:""}})]),t._v(" "),o("div",{staticClass:"lg:h-56 px-6 pt-6 bg-footer rounded lg:col-span-1 border border-gray-400 side-r"},[o("h1",{staticClass:"pb-2 mb-3 border-b border-gray-300 text-sm font-bold font-heading text-freeman-primary"},[t._v("Created By : "),o("span",{staticClass:"font-sans font-medium text-base text-freeman-primary"},[t._v("Freeman Design Workshop")])]),t._v(" "),o("h1",{staticClass:"pb-2 mb-3 border-b border-gray-300  text-sm font-bold font-heading text-freeman-primary"},[t._v("Completed On : "),o("span",{staticClass:"font-sans font-medium text-base text-freeman-primary"},[t._v("15 April 2017pb-6 ")])]),t._v(" "),o("h1",{staticClass:"pb-2 mb-3 border-b border-gray-300 text-sm font-bold font-heading text-freeman-primary"},[t._v("Client : "),o("span",{staticClass:"font-sans font-medium text-base text-freeman-primary"},[t._v("Cafe Javas")])]),t._v(" "),o("h1",{staticClass:"pb-2 mb-3 border-b border-gray-300  text-sm font-bold font-heading text-freeman-primary"},[t._v("Category : "),o("span",{staticClass:"font-sans font-medium text-base text-freeman-primary"},[t._v("Interior Design")])])])]),t._v(" "),o("div",[o("h1",{staticClass:"font-bold text-2xl mt-10 mb-10 text-freeman-primary font-heading border-b pb-3 border-gray-400 uppercase"},[t._v("Project Info")]),t._v(" "),o("div",{staticClass:"text-base text-freeman-primary font-sans"},[o("p",{staticClass:"mb-3"},[t._v("\n                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat\n\n                    ")]),t._v(" "),o("p",{staticClass:"mb-3"},[t._v("\n                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.\n                    ")])])])])])}],!1,null,null,null);e.default=component.exports}}]);