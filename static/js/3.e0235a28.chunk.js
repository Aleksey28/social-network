(this["webpackJsonp01-first-project"]=this["webpackJsonp01-first-project"]||[]).push([[3],{413:function(e,t,n){e.exports={pages:"Paginator_pages__3EovE",pages__items:"Paginator_pages__items__26MLN",pages__item:"Paginator_pages__item__WDRUo",pages__item_selected:"Paginator_pages__item_selected__372N0"}},414:function(e,t,n){e.exports={avatar:"User_avatar__1Z9oA"}},415:function(e,t,n){"use strict";t.decode=t.parse=n(416),t.encode=t.stringify=n(417)},416:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var s={};if("string"!==typeof e||0===e.length)return s;var i=/\+/g;e=e.split(t);var a=1e3;o&&"number"===typeof o.maxKeys&&(a=o.maxKeys);var u=e.length;a>0&&u>a&&(u=a);for(var l=0;l<u;++l){var f,j,d,b,p=e[l].replace(i,"%20"),O=p.indexOf(n);O>=0?(f=p.substr(0,O),j=p.substr(O+1)):(f=p,j=""),d=decodeURIComponent(f),b=decodeURIComponent(j),r(s,d)?c(s[d])?s[d].push(b):s[d]=[s[d],b]:s[d]=b}return s};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},417:function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,i){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?o(s(e),(function(s){var i=encodeURIComponent(r(s))+n;return c(e[s])?o(e[s],(function(e){return i+encodeURIComponent(r(e))})).join(t):i+encodeURIComponent(r(e[s]))})).join(t):i?encodeURIComponent(r(i))+n+encodeURIComponent(r(e)):""};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},420:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n(16),o=n.n(c),s=n(31),i=n(0),a=n(87),u=n(52),l=n(413),f=n.n(l),j=n(3),d=function(e){for(var t=e.totalPagesCount,n=e.currentPage,r=e.onClick,c=e.pagesPortionSize,o=void 0===c?10:c,s=Object(i.useState)(Math.floor(n/o)),a=Object(u.a)(s,2),l=a[0],d=a[1],b=[],p=Math.ceil(t/o),O=o*l,g=Math.min(o*(l+1),t),h=function(e){b.push(Object(j.jsx)("li",{className:"".concat(f.a.pages__item," ").concat(n===e?f.a.pages__item_selected:void 0),onClick:function(){return r(e)},children:e+1},e))},m=O;m<g;m++)h(m);return Object(j.jsxs)("div",{className:f.a.pages,children:[l>0&&Object(j.jsx)("button",{onClick:function(){d((function(e){return e-1}))},children:"Prev"}),Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{className:f.a.pages__items,children:b})}),l<p-1&&Object(j.jsx)("button",{onClick:function(){d((function(e){return e+1}))},children:"Next"})]})},b=n(51),p=n(178),O=n(414),g=n.n(O),h=function(e){var t=e.id,n=e.name,r=e.status,c=e.photos,o=e.followed,s=e.isTogglingFollowUsers,i=e.follow,a=e.unfollow;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(b.c,{to:"/profile/".concat(t),children:Object(j.jsx)("img",{src:c.small||p.a,alt:"avatar",className:g.a.avatar})}),o?Object(j.jsx)("button",{disabled:s.some((function(e){return e===t})),onClick:function(){a(t)},children:"Unfollow"}):Object(j.jsx)("button",{disabled:s.some((function(e){return e===t})),onClick:function(){i(t)},children:"Follow"})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:n}),Object(j.jsx)("p",{children:r})]})})]})},m=n(212),v=n(165),x=n(113),_=function(e){var t={};return e.term&&e.term.length<2&&(t.term="Min length - 2"),t},w=function(e){var t=e.onSearch,n=e.filters;return Object(j.jsx)(v.d,{initialValues:n,validate:_,onSubmit:function(){var e=Object(s.a)(o.a.mark((function e(n,r){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.setSubmitting,e.next=3,t(n);case 3:c(!1);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting;e.submitForm;return Object(j.jsxs)(v.c,{children:[Object(j.jsx)(v.b,{type:"input",name:"term"}),Object(j.jsx)(v.a,{name:"term",component:"span"}),Object(j.jsxs)(v.b,{as:"select",name:"friend",disabled:t,children:[Object(j.jsx)("option",{value:x.a.AllUsers,children:"All users"}),Object(j.jsx)("option",{value:x.a.Followed,children:"Followed"}),Object(j.jsx)("option",{value:x.a.Unfollowed,children:"Unfollowed"})]}),Object(j.jsx)("button",{type:"submit",disabled:t,children:"Search"})]})}})},y=n(19),P=function(e){return e.usersPage.users},U=function(e){return e.usersPage.usersCount},C=function(e){return e.usersPage.pageSize},k=function(e){return e.usersPage.currentPage},S=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.isTogglingFollowUsers},A=function(e){return e.usersPage.filters},N=n(20),R=n(415);t.default=function(){var e=Object(y.c)(),t=Object(N.g)(),n=Object(N.h)(),c=Object(y.d)(P),u=Object(y.d)(U),l=Object(y.d)(k),f=Object(y.d)(C),b=Object(y.d)(A),p=Object(y.d)(F),O=Object(y.d)(S),g=function(){var t=Object(s.a)(o.a.mark((function t(){var n,r,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:l,r=c.length>1&&void 0!==c[1]?c[1]:b,t.next=4,e(Object(m.c)(n,f,r));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(i.useEffect)((function(){var e=Object(R.parse)(n.search.slice(1)),t=e.page,r=e.term,c=e.friend,o=l,s=b;switch(t&&(o=Number(t)-1),r&&(s.term=r),c){case"true":s.friend=x.a.Followed;break;case"false":s.friend=x.a.Unfollowed;break;default:s.friend=x.a.AllUsers}g(o,s)}),[]),Object(i.useEffect)((function(){var e={},n=b.term,r=b.friend;switch(l&&(e.page=String(l+1)),n&&(e.term=n),Number(r)){case x.a.Followed:e.friend="true";break;case x.a.Unfollowed:e.friend="false"}t.push({search:Object(R.stringify)(e)})}),[l,b]);var v=u/f,_=function(t){return e(Object(m.b)(t))},I=function(t){return e(Object(m.d)(t))};return Object(j.jsxs)("div",{children:[Object(j.jsx)(w,{onSearch:function(e){return g(0,e)},filters:b}),O?Object(j.jsx)(a.a,{}):Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{currentPage:l,totalPagesCount:v,onClick:function(e){return g(e)}}),Object(j.jsx)("ul",{children:c.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(h,Object(r.a)(Object(r.a)({},e),{},{isTogglingFollowUsers:p,follow:_,unfollow:I}))},e.id)}))})]})]})}}}]);
//# sourceMappingURL=3.e0235a28.chunk.js.map