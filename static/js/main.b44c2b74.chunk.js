(this["webpackJsonp01-first-project"]=this["webpackJsonp01-first-project"]||[]).push([[0],{103:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(45),a=n(4),s="social-network/dialogs/SEND-MESSAGE",c={dialogsData:[{id:11,name:"Pety",ownerId:2},{id:12,name:"Vany",ownerId:3},{id:13,name:"Sasha",ownerId:4}],messagesData:[{id:1,message:"Hello",ownerId:1},{id:2,message:"How are you",ownerId:2},{id:3,message:"Buy",ownerId:2}]},i=function(e){var t=e.newMessage;return{type:s,newMessage:t}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:7,message:t.newMessage,ownerId:1}])});default:return e}}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e.friends}},116:function(e,t,n){"use strict";t.a=n.p+"static/media/empty_avatar.0901ad81.svg"},129:function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"d",(function(){return C})),n.d(t,"c",(function(){return I}));var r=n(6),a=n.n(r),s=n(12),c=n(45),i=n(4),u=n(20),o=n(21),l=n(67),f=n.n(l),d=n(27),p=new(function(){function e(){Object(u.a)(this,e),this._instance=f.a.create({baseURL:d.a.baseUrl,withCredentials:!0,headers:{"API-KEY":d.a.token}})}return Object(o.a)(e,[{key:"getUsers",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._instance.get("/users?count=".concat(n,"&page=").concat(t));case 2:return r=e.sent,s=r.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"follow",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._instance.post("/follow/".concat(t),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"unfollow",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._instance.delete("/follow/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),j=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(i.a)(Object(i.a)({},e),r):e}))},b="social-network/users/FOLLOW",h="social-network/users/UNFOLLOW",O="social-network/users/SET_USERS",m="social-network/users/SET_USERS_COUNT",v="social-network/users/SET_CURRENT_PAGE",x="social-network/users/SET_IS_FETCHING",_="social-network/users/SET_IS_TOGGLING_FOLLOW_USERS",g={users:[],usersCount:20,pageSize:5,currentPage:0,isFetching:!1,isTogglingFollowUsers:[]},w=function(e){return{type:b,userId:e}},y=function(e){return{type:h,userId:e}},S=function(e){return{type:x,isFetching:e}},k=function(e,t){return{type:_,userId:e,isFetching:t}},I=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(S(!0)),n.prev=1,n.next=4,p.getUsers(e+1,t);case 4:s=n.sent,r({type:v,currentPage:e}),r((c=s.totalCount,{type:m,usersCount:c})),r((a=s.items,{type:O,users:a})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:return n.prev=13,r(S(!1)),n.finish(13);case 16:case"end":return n.stop()}var a,c}),n,null,[[1,10,13,16]])})));return function(e){return n.apply(this,arguments)}}()},N=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k(t,!0)),e.prev=1,e.next=4,s(t);case 4:if(1!==(c=e.sent).resultCode){e.next=7;break}throw new Error(c.messages[0]);case 7:n(r(t)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:return e.prev=13,n(k(t,!1)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),E=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",N(e,n,w,p.follow.bind(p)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",N(e,n,y,p.unfollow.bind(p)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{users:j(e.users,"id",t.userId,{followed:!0})});case h:return Object(i.a)(Object(i.a)({},e),{},{users:j(e.users,"id",t.userId,{followed:!1})});case O:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case m:return Object(i.a)(Object(i.a)({},e),{},{usersCount:t.usersCount});case v:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case x:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case _:return Object(i.a)(Object(i.a)({},e),{},{isTogglingFollowUsers:t.isFetching?[].concat(Object(c.a)(e.isTogglingFollowUsers),[t.userId]):e.isTogglingFollowUsers.filter((function(e){return e!==t.userId}))});default:return e}}},133:function(e,t,n){e.exports={list:"Friends_list__3QnH4"}},134:function(e,t,n){e.exports={item:"FriendMini_item__3enyf"}},135:function(e,t,n){e.exports={info__avatar:"ProfileInfo_info__avatar__3SAhs"}},136:function(e,t,n){e.exports={item:"Post_item__E_wL4"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__edSRB",list:"Navbar_list__2dmAb",item:"Navbar_item__nZc1_",item_active:"Navbar_item_active__2n9NZ"}},167:function(e,t,n){},250:function(e,t,n){},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r={baseUrl:"https://social-network.samuraijs.com/api/1.0",token:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY},a="Enter"},292:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(64),c=n.n(s),i=(n(167),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),u=n(22),o=n(10),l=n(6),f=n.n(l),d=n(12),p=n(45),j=n(4),b=n(20),h=n(21),O=n(67),m=n.n(O),v=n(27),x=new(function(){function e(){Object(b.a)(this,e),this._instance=m.a.create({baseURL:v.a.baseUrl,withCredentials:!0,headers:{"API-KEY":v.a.token}})}return Object(h.a)(e,[{key:"login",value:function(e){var t=e.email,n=e.password,r=e.rememberMe;return console.log(v.a.token),this._instance.post("/auth/login",{email:t,password:n,rememberMe:r})}},{key:"logout",value:function(){return this._instance.delete("/auth/login")}},{key:"auth",value:function(){var e=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._instance.get("/auth/me");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProfileData",value:function(){var e=Object(d.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._instance.get("/profile/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getStatus",value:function(){var e=Object(d.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._instance.get("/profile/status/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setStatus",value:function(e){return this._instance.put("/profile/status",{status:e})}}]),e}()),_="social-network/reducer/ADD_POST",g="social-network/reducer/REMOVE_POST",w="social-network/reducer/SET_USER_INFO",y="social-network/reducer/SET_USER_STATUS",S={postsData:[{id:1,message:"How are you?"},{id:2,message:"It is my first post"}],userInfo:null,userStatus:"no status"},k=function(e){return{type:y,userStatus:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(j.a)(Object(j.a)({},e),{},{postsData:[].concat(Object(p.a)(e.postsData),[{id:5,message:t.newPost}])});case g:return Object(j.a)(Object(j.a)({},e),{},{postsData:e.postsData.filter((function(e,n){return t.index!==n}))});case w:return Object(j.a)(Object(j.a)({},e),{},{userInfo:t.userInfo});case y:return Object(j.a)(Object(j.a)({},e),{},{userStatus:t.userStatus});default:return e}},N=n(103),E=[{id:2,name:"Pety",avatar:"https://sun9-1.userapi.com/impf/c623226/v623226632/20ec3/wFW0LmxAF5E.jpg?size=1536x2048&quality=96&proxy=1&sign=3c23701904d2894bc56f0539b108dc64&type=album"},{id:3,name:"Vany",avatar:"https://sun9-31.userapi.com/impf/K_i77x3c5rD-pxY1Hu_UzX7uaweHBadmZjnIUg/BaSOzQ1brCo.jpg?size=1620x2160&quality=96&proxy=1&sign=6977728d5d7739f0ff9bf4dd584c78c8&type=album0"},{id:4,name:"Sasha",avatar:"https://sun9-29.userapi.com/impg/7pSRuhuz_LBQ1A7D-_eoWP0JyE8cMhl4NuHAiw/HuSEMS0th20.jpg?size=1906x2160&quality=96&proxy=1&sign=cc30984ecfe23af9466d513b63073748&type=album"}],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return e},P=n(129),U=n(46),T="social-network/auth/SET_USER_DATA",A={email:"",login:"",userId:"",isAuth:!1},D=function(e){var t=e.email,n=e.login,r=e.userId,a=e.isAuth;return{type:T,data:{email:t,login:n,userId:r,isAuth:a}}},F=function(){return function(){var e=Object(d.a)(f.a.mark((function e(t){var n,r,a,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.auth();case 3:if(1!==(n=e.sent).resultCode){e.next=6;break}throw new Error(n.messages[0]);case 6:r=n.data,a=r.email,s=r.login,c=r.id,t(D({email:a,login:s,userId:c,isAuth:!0})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(j.a)(Object(j.a)({},e),t.data);default:return e}},M=n(130),R=n(131),z="social-network/app/SET_INITIALIZED",H={initialized:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},G=Object(o.c)({profilePage:I,dialogsPage:N.a,friends:C,usersPage:P.a,auth:L,form:M.a,app:B}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,W=Object(o.e)(G,K(Object(o.a)(R.a)));window.__store__=W;var Z=W,q=n(13),V=n(31),Y=n(30),X=(n(250),n(8)),J=n(15),Q=n.n(J),$=n(1);function ee(){return Object($.jsx)("nav",{className:Q.a.nav,children:Object($.jsxs)("ul",{className:Q.a.list,children:[Object($.jsx)("li",{children:Object($.jsx)(u.b,{className:Q.a.item,activeClassName:Q.a.item_active,to:"/profile",href:"#",children:"Profile"})}),Object($.jsx)("li",{children:Object($.jsx)(u.b,{className:Q.a.item,activeClassName:Q.a.item_active,to:"/messages",href:"#",children:"Messages"})}),Object($.jsx)("li",{children:Object($.jsx)(u.b,{className:Q.a.item,activeClassName:Q.a.item_active,to:"/news",href:"#",children:"News"})}),Object($.jsx)("li",{children:Object($.jsx)(u.b,{className:Q.a.item,activeClassName:Q.a.item_active,to:"/music",href:"#",children:"Music"})}),Object($.jsx)("li",{children:Object($.jsx)(u.b,{className:Q.a.item,activeClassName:Q.a.item_active,to:"/settings",href:"#",children:"Settings"})}),Object($.jsx)("li",{children:Object($.jsx)(u.b,{className:Q.a.item,activeClassName:Q.a.item_active,to:"/users",href:"#",children:"Find users"})})]})})}var te=n(91),ne=n.n(te),re=n(133),ae=n.n(re),se=n(134),ce=n.n(se),ie=function(e){var t=e.name,n=e.avatar;return Object($.jsxs)("div",{className:ce.a.item,children:[Object($.jsx)("img",{src:n,alt:"friend's avatar"}),Object($.jsx)("span",{children:t})]})},ue=function(e){var t=e.friends.map((function(e){return Object($.jsx)(ie,Object(j.a)({},e),e.id)}));return Object($.jsx)("ul",{className:ae.a.list,children:t})},oe=function(e){var t=e.friends;return Object($.jsxs)("div",{className:ne.a.side,children:[Object($.jsx)("h2",{className:ne.a.title,children:"Friends"}),Object($.jsx)(ue,{friends:t})]})},le=n(115),fe=Object(q.b)((function(e){return{friends:Object(le.a)(e)}}),(function(){return{}}))(oe),de=n(40),pe=n(116),je=n(135),be=n.n(je),he=n(88),Oe=function(e){var t=e.status,n=e.updateUserStatus,a=Object(r.useState)(!1),s=Object(he.a)(a,2),c=s[0],i=s[1],u=Object(r.useState)(t),o=Object(he.a)(u,2),l=o[0],f=o[1];Object(r.useEffect)((function(){f(t)}),[t]);var d=function(){i(!1),n(l)};return Object($.jsx)("div",{children:c?Object($.jsx)("input",{value:l,onBlur:d,onKeyUp:function(e){e.key===v.b&&d()},onChange:function(e){f(e.currentTarget.value)},autoFocus:!0}):Object($.jsx)("span",{onClick:function(){i(!0)},children:l||"---"})})},me=function(e){var t=e.userInfo,n=e.userStatus,r=e.updateUserStatus,a=t||{},s=a.photos,c=a.fullName,i=a.aboutMe;return t?Object($.jsxs)("div",{children:[Object($.jsx)("img",{src:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg",alt:"\u043c\u0430\u0448\u0438\u043d\u0430"}),Object($.jsxs)("div",{children:[Object($.jsx)("img",{className:be.a.info__avatar,src:s.small||pe.a,alt:"Avatar"}),Object($.jsx)(Oe,{status:n,updateUserStatus:r}),Object($.jsx)("p",{children:c}),Object($.jsx)("p",{children:i})]})]}):Object($.jsx)(de.a,{})},ve=n(136),xe=n.n(ve),_e=function(e){var t=e.message;return Object($.jsxs)("div",{className:xe.a.item,children:[Object($.jsx)("img",{src:"https://sun9-32.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=1440x2160&quality=96&proxy=1&sign=8cd83def1f42c508f1c64c607f5504fd&type=album",alt:"avatar"}),t,Object($.jsx)("div",{children:Object($.jsx)("span",{children:"Like"})})]})},ge=n(127),we=n(128),ye=n(41),Se=n(34),ke=Object(we.a)({form:"newPost"})((function(e){var t=e.handleSubmit;return Object($.jsxs)("form",{onSubmit:t,children:[Object($.jsx)(ge.a,{name:"newPost",placeholder:"New post",component:ye.b,validate:[Se.b,Se.a]}),Object($.jsx)("button",{type:"submit",children:"Add post"})]})})),Ie=a.a.memo((function(e){var t=e.addPost,n=e.postsData.map((function(e){var t=e.id,n=e.message;return Object($.jsx)(_e,{message:n},t)}));return Object($.jsxs)("div",{children:["My posts",Object($.jsx)(ke,{onSubmit:function(e){t(e)}}),Object($.jsx)("div",{children:n})]})})),Ne=function(e){return e.profilePage.userInfo},Ee=function(e){return e.profilePage.userStatus},Ce=function(e){return e.profilePage.postsData},Pe={addPost:function(e){var t=e.newPost;return{type:_,newPost:t}}},Ue=Object(q.b)((function(e){return{postsData:Ce(e)}}),Pe)(Ie),Te=function(e){var t=e.userInfo,n=e.userStatus,r=e.updateUserStatus;return Object($.jsxs)("main",{children:[Object($.jsx)(me,{userInfo:t,userStatus:n,updateUserStatus:r}),Object($.jsx)(Ue,{})]})},Ae=function(e){return e.auth.email},De=function(e){return e.auth.login},Fe=function(e){return e.auth.userId},Le=function(e){return e.auth.isAuth},Me=function(e){Object(V.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history,n=e.getUserInfo,r=e.getUserStatus,a=this.props.match.params.userId||this.props.userId;a||t.push("/login"),n(a),r(a)}},{key:"render",value:function(){return Object($.jsx)(Te,Object(j.a)({},this.props))}}]),n}(a.a.Component),Re={getUserInfo:function(e){return function(){var t=Object(d.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.getProfileData(e);case 3:r=t.sent,n({type:w,userInfo:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(d.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.getStatus(e);case 3:r=t.sent,n(k(r)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(d.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.setStatus(e);case 3:r=t.sent,0===r.data.resultCode&&n(k(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},ze=Object(o.d)(Object(q.b)((function(e){return{userInfo:Ne(e),userStatus:Ee(e),userId:Fe(e)}}),Re),X.i)(Me),He=n.p+"static/media/logo.620308a0.svg",Be=n(71),Ge=n.n(Be);function Ke(e){var t=e.login,n=e.logout,r=e.isAuth;return Object($.jsxs)("header",{className:Ge.a.header,children:[Object($.jsx)("img",{src:He,alt:"",className:Ge.a.header__logo}),Object($.jsx)("div",{children:r?Object($.jsxs)("div",{className:Ge.a.header__nav,children:[Object($.jsx)("p",{children:t}),Object($.jsx)("button",{onClick:n,children:"Log out"})]}):Object($.jsx)(u.b,{to:"/auth",children:"Login"})})]})}var We=function(e){Object(V.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object($.jsx)(Ke,Object(j.a)({},this.props))}}]),n}(a.a.Component),Ze={logout:function(){return function(){var e=Object(d.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.logout();case 3:if(1!==(n=e.sent).resultCode){e.next=6;break}throw new Error(n.messages[0]);case 6:t(D({email:null,login:null,userId:null,isAuth:!1})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}},qe=Object(o.d)(Object(q.b)((function(e){return{email:Ae(e),login:De(e),userId:Fe(e),isAuth:Le(e)}}),Ze))(We);var Ve=function(e){var t=e.children,n=e.condition,r=e.to;return Object($.jsx)(X.b,{children:function(){return n?t:Object($.jsx)(X.a,{to:r})}})},Ye=n(94),Xe=n.n(Ye);var Je=Object(we.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object($.jsxs)("form",{onSubmit:t,className:Xe.a.form,children:[Object($.jsx)(ge.a,{name:"email",placeholder:"Email",component:ye.a,validate:[Se.b,Se.a]}),Object($.jsx)(ge.a,{name:"password",placeholder:"Password",component:ye.a,validate:[Se.b,Se.a],type:"password"}),Object($.jsxs)("div",{children:[Object($.jsx)(ge.a,{name:"rememberMe",component:ye.a,type:"checkbox"}),"remember me"]}),n&&Object($.jsx)("span",{className:Xe.a.form__error,children:n}),Object($.jsx)("button",{type:"submit",children:"Login"})]})}));var Qe=function(e){var t=e.isAuth,n=e.login,r=Object(X.g)();return t&&r.push("/profile"),Object($.jsxs)("div",{children:[Object($.jsx)("h1",{children:"LOGIN"}),Object($.jsx)(Je,{onSubmit:function(e){n(e)}})]})},$e=function(e){Object(V.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object($.jsx)(Qe,Object(j.a)({},this.props))}}]),n}(a.a.Component),et={login:function(e){var t=e.email,n=e.password,r=e.rememberMe;return function(){var e=Object(d.a)(f.a.mark((function e(a){var s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.login({email:t,password:n,rememberMe:r});case 3:if(s=e.sent,1!==(c=s.data).resultCode){e.next=7;break}throw new Error(c.messages[0]);case 7:a(F()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a(Object(U.a)("login",{_error:e.t0.message}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}},tt=Object(o.d)(Object(q.b)((function(e){return{isAuth:Le(e)}}),et))($e),nt=function(e){return e.app.initialized};var rt=function(e){return function(t){return Object($.jsx)(r.Suspense,{fallback:Object($.jsx)(de.a,{}),children:Object($.jsx)(e,Object(j.a)({},t))})}},at=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,299)).then((function(e){return e}))})),st=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,300)).then((function(e){return e}))})),ct=function(e){Object(V.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.initializing()}},{key:"render",value:function(){var e=this.props,t=e.isAuth;return e.initialized?Object($.jsxs)("div",{className:"app-wrapper",children:[Object($.jsx)(qe,{}),Object($.jsx)(ee,{}),Object($.jsx)(fe,{}),Object($.jsx)("div",{className:"app-wrapper__content",children:Object($.jsxs)(X.d,{children:[Object($.jsx)(X.b,{path:"/login",children:Object($.jsx)(tt,{})}),Object($.jsx)(X.b,{path:"/profile/:userId?",children:Object($.jsx)(ze,{})}),Object($.jsxs)(Ve,{condition:t,to:"/login",children:[Object($.jsx)(X.b,{path:"/messages",render:rt(at)}),Object($.jsx)(X.b,{path:"/users",render:rt(st)})]}),Object($.jsx)(X.b,{exact:!0,path:"/",children:Object($.jsx)(X.a,{to:"/profile"})})]})})]}):Object($.jsx)(de.a,{})}}]),n}(a.a.Component),it={initializing:function(){return function(){var e=Object(d.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(F());case 3:t({type:z}),e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),Error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}},ut=Object(o.d)(X.i,Object(q.b)((function(e){return{isAuth:Le(e),initialized:nt(e)}}),it))(ct);c.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(u.a,{children:Object($.jsx)(q.a,{store:Z,children:Object($.jsx)(ut,{})})})}),document.getElementById("root")),i()},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r,a=function(e){return e?void 0:"Required field"},s=(r=30,function(e){return e&&e.length>r?"Max length is ".concat(r):void 0})},40:function(e,t,n){"use strict";var r=n.p+"static/media/loader.2e72bf7b.gif",a=(n(0),n(1));t.a=function(){return Object(a.jsx)("img",{src:r,alt:"Loader"})}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f}));var r=n(4),a=n(137),s=n(69),c=n.n(s),i=n(1),u=["Component","input","meta"],o=function(e){var t=e.Component,n=e.input,s=e.meta,o=s.valid,l=s.touched,f=s.error,d=Object(a.a)(e,u),p=!o&&l;return Object(i.jsxs)("div",{className:c.a.control,children:[Object(i.jsx)(t,Object(r.a)(Object(r.a)({className:p?c.a.control__component:void 0},n),d)),p&&Object(i.jsx)("span",{className:c.a.control__message,children:f})]})},l=function(e){return Object(i.jsx)(o,Object(r.a)({Component:"textarea"},e))},f=function(e){return Object(i.jsx)(o,Object(r.a)({Component:"input"},e))}},69:function(e,t,n){e.exports={control:"FormsControls_control__1prlx",control__component:"FormsControls_control__component__adX83",control__message:"FormsControls_control__message__Ydg7H"}},71:function(e,t,n){e.exports={header:"Header_header__3N93h",header__logo:"Header_header__logo__2A_Px",header__nav:"Header_header__nav__14bMn"}},91:function(e,t,n){e.exports={side:"SideBar_side__3v3le",title:"SideBar_title__1CMfw"}},94:function(e,t,n){e.exports={form:"Login_form__3enBs",form__error:"Login_form__error__1UlGS"}}},[[292,1,2]]]);
//# sourceMappingURL=main.b44c2b74.chunk.js.map