(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return f}));var r=n(3),a=n(60),s=(n(1),n(61)),o=n.n(s),i=(n(23),n(92)),c=n(0),u=["input","meta"],l=["input","meta"],d=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,u),i=n.touched&&n.error;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)(Object(r.a)({},t),s),{},{className:o.a.formControl+""+(i?o.a.error:"")}))}),i&&Object(c.jsx)("span",{children:n.error})]})},j=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,l),i=n.touched&&n.error;return Object(c.jsxs)("div",{className:o.a.formControl+""+(i?o.a.error:""),children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),s))}),i&&Object(c.jsx)("span",{children:n.error})]})},f=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(c.jsxs)("div",{children:[Object(c.jsx)(i.a,Object(r.a)({placeholder:e,name:t,component:a,validate:n},s)),o]})}},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(49),a=n(3),s="SEND-MESSAGE",o={dialogsData:[{name:"Dimych",id:1},{name:"Andrey",id:2},{name:"Sveta",id:3},{name:"Sasha",id:4},{name:"Victor",id:5},{name:"Valera",id:6}],messageData:[{message:"Hi"},{message:"Hellolp[]l[]l"},{message:"Yo"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[n])});default:return e}}},130:function(e,t,n){e.exports={preloader:"Preloader_preloader__V0RPB"}},132:function(e,t,n){e.exports={profile:"Profile_profile__2Qov3"}},134:function(e,t,n){e.exports={item:"Post_item__2kxmB"}},165:function(e,t,n){},166:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},19:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__1hvgF",link:"Sidebar_link__15uUN",active:"Sidebar_active__kdsxv"}},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},26:function(e,t,n){e.exports={users:"Users_users__JMxwx",user:"Users_user__2-VZs",userLeftBlock:"Users_userLeftBlock__1CICJ",userPhoto:"Users_userPhoto__1Ldfk",userFollow:"Users_userFollow__1ZXxp",userContent:"Users_userContent__34qyy",userInfo:"Users_userInfo__2G4_W",userName:"Users_userName__2spMA",userStatus:"Users_userStatus__3_yaB",userLocation:"Users_userLocation___9bf-",userCountry:"Users_userCountry__33uN8",userCity:"Users_userCity__1K_-h"}},293:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(70),o=n.n(s),i=(n(165),n(34)),c=n(35),u=n(37),l=n(36),d=(n(166),n(19)),j=n.n(d),f=n(17),b=n(0),p=function(e){return Object(b.jsxs)("aside",{className:j.a.sidebar,children:[Object(b.jsx)("div",{className:j.a.link,children:Object(b.jsx)(f.b,{to:"/profile",activeClassName:j.a.active,children:"Profile"})}),Object(b.jsx)("div",{className:j.a.link,children:Object(b.jsx)(f.b,{to:"/dialogs",activeClassName:j.a.active,children:"Messages"})}),Object(b.jsx)("div",{className:j.a.link,children:Object(b.jsx)(f.b,{to:"/users",activeClassName:j.a.active,children:"Users"})}),Object(b.jsx)("div",{className:j.a.link,children:Object(b.jsx)(f.b,{to:"/news",activeClassName:j.a.active,children:"News"})}),Object(b.jsx)("div",{className:j.a.link,children:Object(b.jsx)(f.b,{to:"/music",activeClassName:j.a.active,children:"Music"})}),Object(b.jsx)("div",{className:j.a.link,children:Object(b.jsx)(f.b,{to:"/settings",activeClassName:j.a.active,children:"Settings"})})]})},h=n(13),O=(n(172),function(e){return Object(b.jsx)("div",{children:"News"})}),g=(n(173),function(e){return Object(b.jsx)("div",{children:"Music"})}),m=(n(174),function(e){return Object(b.jsx)("div",{children:"Settings"})}),A=n(14),v=n(9),x=n.n(v),w=n(16),_=n(49),N=n(3),P=n(129).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"99b92852-12a3-4e30-8f17-f5dd26672b7a"}}),C={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return P.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return P.post("/follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return P.delete("/follow/".concat(e)).then((function(e){return e.data}))}},S=function(e){return P.get("profile/".concat(e)).then((function(e){return e.data}))},I=function(e){return P.get("profile/status/".concat(e))},E=function(e){return P.put("profile/status",{status:e})},Q=function(e){var t=new FormData;return t.append("image",e),P.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},B=function(e){return P.put("profile",e)},k=function(){return P.get("auth/me").then((function(e){return e.data}))},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return P.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},F=function(){return P.delete("auth/login").then((function(e){return e.data}))},U=function(){return P.get("security/get-captcha-url")},L=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(N.a)(Object(N.a)({},e),r):e}))},D="FOLLOW",M="UNFOLLOW",T="SET-USERS",J="SET-CURRENT-PAGE",G="SET-TOTAL-USERS-COUNT",H="TOGGLE-IS-FETCHING",R="TOGGLE_IS_FOLLOWING_PROGRESS",V={users:[],pageSize:10,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},K=function(e){return{type:D,userId:e}},z=function(e){return{type:M,userId:e}},W=function(e){return{type:J,currentPage:e}},Z=function(e){return{type:H,isFetching:e}},Y=function(e,t){return{type:R,isFetching:e,userId:t}},X=function(){var e=Object(w.a)(x.a.mark((function e(t,n,r,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Y(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t(Y(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(N.a)(Object(N.a)({},e),{},{users:L(e.users,t.userId,"id",{followed:!0})});case M:return Object(N.a)(Object(N.a)({},e),{},{users:L(e.users,t.userId,"id",{followed:!1})});case T:return Object(N.a)(Object(N.a)({},e),{},{users:t.users});case J:return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.currentPage});case G:return Object(N.a)(Object(N.a)({},e),{},{totalUserCount:t.totalCount});case H:return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});case R:return Object(N.a)(Object(N.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},$=n(60),ee=n(26),te=n.n(ee),ne=n(43),re=n(30),ae=n.n(re),se=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,c=Math.ceil(t/n),u=[],l=1;l<=c;l++)u.push(l);var d=Math.ceil(c/i),j=Object(r.useState)(1),f=Object(ne.a)(j,2),p=f[0],h=f[1],O=(p-1)*i+1,g=p*i;return Object(b.jsxs)("div",{className:ae.a.paginator,children:[p>1?Object(b.jsx)("button",{className:ae.a.button,onClick:function(){h(p-1)},children:"Prev"}):Object(b.jsx)("div",{className:ae.a.void}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(b.jsx)("span",{className:a===e?ae.a.selectedPage+" "+ae.a.page:ae.a.notSelectedPage+" "+ae.a.page,onClick:function(t){s(e)},children:e},e)})),d>p?Object(b.jsx)("button",{className:ae.a.button,onClick:function(){h(p+1)},children:"Next"}):Object(b.jsx)("div",{className:ae.a.void})]})},oe="data:image/png;base64,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",ie=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(b.jsxs)("div",{className:te.a.user,children:[Object(b.jsxs)("div",{className:te.a.userLeftBlock,children:[Object(b.jsx)("div",{className:te.a.userPhoto,children:Object(b.jsx)(f.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:oe})})}),Object(b.jsx)("div",{className:te.a.userFollow,children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(b.jsx)("div",{className:te.a.userContent,children:Object(b.jsxs)("div",{className:te.a.userInfo,children:[Object(b.jsx)("div",{className:te.a.userName,children:t.name}),Object(b.jsx)("div",{className:te.a.userStatus,children:t.status})]})})]})},ce=["totalUserCount","pageSize","currentPage","onPageChanged","users"],ue=function(e){var t=e.totalUserCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.users,o=Object($.a)(e,ce);return Object(b.jsxs)("div",{children:[Object(b.jsx)(se,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:a}),Object(b.jsx)("div",{className:te.a.users,children:s.map((function(e){return Object(b.jsx)(ie,{user:e,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow},e.id)}))})]})},le=n(130),de=n.n(le),je=n.p+"static/media/preloader.055c0963.svg",fe=function(e){return Object(b.jsx)("div",{className:de.a.preloader,children:Object(b.jsx)("img",{src:je,alt:""})})},be=n(11),pe=n(131),he=Object(pe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Oe=function(e){return e.usersPage.pageSize},ge=function(e){return e.usersPage.totalUserCount},me=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},ve=function(e){return e.usersPage.followingInProgress},xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(fe,{}):null,Object(b.jsx)(ue,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),we=Object(be.d)(Object(A.b)((function(e){return{users:he(e),pageSize:Oe(e),totalUserCount:ge(e),currentPage:me(e),isFetching:Ae(e),followingInProgress:ve(e)}}),{follow:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:X(n,e,C.followUser.bind(C),K);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:X(n,e,C.unfollowUser.bind(C),z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:W,toggleFollowingProgress:Y,getUsers:function(e,t){return function(){var n=Object(w.a)(x.a.mark((function n(r){var a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Z(!0)),r(W(e)),n.next=4,C.getUsers(e,t);case 4:a=n.sent,r(Z(!1)),r((o=a.items,{type:T,users:o})),r((s=a.totalCount,{type:G,totalCount:s}));case 8:case"end":return n.stop()}var s,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(xe),_e=n(31),Ne=n.n(_e),Pe=function(e){return Object(b.jsxs)("header",{className:Ne.a.header,children:[Object(b.jsxs)("div",{className:Ne.a.logo,children:[Object(b.jsx)("span",{children:"Social"}),"Network"]}),Object(b.jsx)("div",{children:e.isAuth?Object(b.jsxs)("div",{className:Ne.a.loginBlock,children:[Object(b.jsxs)("div",{className:Ne.a.userLogin,children:[Object(b.jsx)("div",{className:Ne.a.login,children:e.login}),Object(b.jsx)("div",{className:Ne.a.email,children:e.email})]}),Object(b.jsx)("div",{className:Ne.a.btnLogin,children:Object(b.jsx)("button",{className:Ne.a.btnLogin,onClick:e.logout,children:"LOG OUT"})})]}):Object(b.jsx)("div",{className:Ne.a.btnLogin,children:Object(b.jsx)(f.b,{to:"/login",children:"LOG IN"})})})]})},Ce=n(29),Se="SET_USER_DATA",Ie="GET_CAPTCHA_URL_SUCCESS",Ee={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Qe=function(e,t,n,r){return{type:Se,payload:{userId:e,email:t,login:n,isAuth:r}}},Be=function(e){return{type:Ie,payload:{captchaUrl:e}}},ke=function(){return function(){var e=Object(w.a)(x.a.mark((function e(t){var n,r,a,s,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.email,o=r.login,t(Qe(a,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=function(){return function(){var e=Object(w.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:n=e.sent,r=n.data.url,t(Be(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:case Ie:return Object(N.a)(Object(N.a)({},e),t.payload);default:return e}},Ue="ADD-POST",Le="SET-USER-PROFILE",De="SET_STATUS",Me="DELETE_POST",Te="SAVE_PHOTO_SUCCESS",Je={posts:[{id:0,message:"Hi",likesCount:0},{id:1,message:"Hello",likesCount:10},{id:2,message:"Aloha",likesCount:15}],profile:null,status:""},Ge=function(e){return{type:De,status:e}},He=function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:r=t.sent,n({type:Le,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:var n={id:5,message:t.newPostText,likesCount:0};return Object(N.a)(Object(N.a)({},e),{},{posts:[].concat(Object(_.a)(e.posts),[n])});case Me:return Object(N.a)(Object(N.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case Le:return Object(N.a)(Object(N.a)({},e),{},{profile:t.profile});case De:return Object(N.a)(Object(N.a)({},e),{},{status:t.status});case Te:return Object(N.a)(Object(N.a)({},e),{},{profile:Object(N.a)(Object(N.a)({},e.profile),{},{photos:t.photos})});default:return e}},Ve=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)(Pe,Object(N.a)({},this.props))}}]),n}(a.a.Component),Ke=Object(A.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,email:e.auth.email,profile:e.profilePage.profile}}),{logout:function(){return function(){var e=Object(w.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:0===e.sent.resultCode&&t(Qe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getUserProfile:He})(Ve),ze=n(132),We=n.n(ze),Ze=n(6),Ye=n.n(Ze),Xe=function(e){var t=Object(r.useState)(!1),n=Object(ne.a)(t,2),a=n[0],s=n[1],o=Object(r.useState)(e.status),i=Object(ne.a)(o,2),c=i[0],u=i[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(b.jsxs)("div",{className:Ye.a.status,children:[!a&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"----"})}),a&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{className:Ye.a.statusInput,autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},onChange:function(e){u(e.currentTarget.value)},value:c})})]})},qe=n(127),$e=n(12),et=n(23),tt=Object(et.a)(20),nt=Object(qe.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(b.jsxs)("form",{className:Ye.a.ProfileDataForm,onSubmit:t,children:[Object(b.jsxs)("div",{className:Ye.a.info,children:[Object(b.jsxs)("div",{className:Ye.a.fullNameEditMode,children:[Object(b.jsx)("div",{className:Ye.a.fullNameTitle,children:"full name:"}),Object($e.c)("Full name","fullName",[et.b,tt],$e.a)]}),Object(b.jsxs)("div",{className:Ye.a.aboutMe,children:[Object(b.jsx)("div",{className:Ye.a.aboutMeTitle,children:"about me:"}),Object($e.c)("About me","aboutMe",[et.b],$e.b)]}),Object(b.jsxs)("div",{className:Ye.a.job,children:["Looking for a job :",Object($e.c)("","lookingForAJob",[],$e.a,{type:"checkbox"})]}),Object(b.jsxs)("div",{className:Ye.a.jobDescriptions,children:[Object(b.jsx)("div",{className:Ye.a.jobDescriptionsTitle,children:"my professional skills:"}),Object($e.c)("My professional skills","lookingForAJobDescription",[],$e.b)]})]}),Object(b.jsxs)("div",{className:Ye.a.contacts,children:["Contacts:",Object.keys(n.contacts).map((function(e){return Object(b.jsxs)("div",{children:[e,": ",Object($e.c)(e,"contacts."+e,[],$e.a)]},e)}))]}),Object(b.jsxs)("div",{className:Ye.a.editMode,children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:Ye.a.btnEditModeSave,children:"save"})}),r&&Object(b.jsx)("div",{className:Ye.a.formSummaryError,children:r})]})]})})),rt=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return Object(b.jsxs)("div",{className:Ye.a.profileData,children:[Object(b.jsxs)("div",{className:Ye.a.info,children:[Object(b.jsx)("div",{className:Ye.a.fullName,children:t.fullName}),Object(b.jsxs)("div",{className:Ye.a.aboutMe,children:[Object(b.jsx)("div",{className:Ye.a.aboutMeTitle,children:"about me:"}),t.aboutMe]}),Object(b.jsxs)("div",{className:Ye.a.job,children:[t.lookingForAJob?" ":"not "," looking for a job"]}),Object(b.jsx)("div",{className:Ye.a.jobDescriptions,children:t.lookingForAJobDescription})]}),Object(b.jsx)("div",{className:Ye.a.contacts,children:Object.keys(t.contacts).map((function(e){return Object(b.jsx)(at,{contactTitle:e,contactValue:t.contacts[e]},e)}))}),n&&Object(b.jsx)("div",{className:Ye.a.editMode,children:Object(b.jsx)("button",{className:Ye.a.btnEditMode,onClick:r,children:"edit"})})]})},at=function(e){var t=e.contactTitle,n=e.contactValue;return n?Object(b.jsxs)("div",{className:Ye.a.contact,children:[Object(b.jsx)("div",{className:Ye.a.contactTitle,children:t}),Object(b.jsx)("div",{className:Ye.a.contactValue,children:n})]}):Object(b.jsx)("div",{className:Ye.a.void})},st=function(e){var t=e.profile,n=e.status,a=e.updateStatus,s=e.isOwner,o=e.savePhoto,i=e.saveProfile,c=Object(r.useState)(!1),u=Object(ne.a)(c,2),l=u[0],d=u[1];if(!t)return Object(b.jsx)(fe,{});return Object(b.jsxs)("div",{className:Ye.a.body,children:[Object(b.jsxs)("div",{className:Ye.a.image,children:[Object(b.jsxs)("div",{className:Ye.a.imageUser,children:[Object(b.jsx)("img",{src:t.photos.large||oe}),s&&Object(b.jsxs)("div",{className:Ye.a.inputWrapper,children:[Object(b.jsx)("input",{className:Ye.a.inputFile,type:"file",name:"file",id:"inputFile",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),Object(b.jsx)("label",{for:"inputFile",className:Ye.a.inputFileButton,children:Object(b.jsx)("span",{className:Ye.a.inputFileButtonText,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b"})})]})]}),Object(b.jsx)("div",{className:Ye.a.status,children:Object(b.jsx)(Xe,{status:n,updateStatus:a})})]}),l?Object(b.jsx)(nt,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){d(!1)}))}}):Object(b.jsx)(rt,{profile:t,isOwner:s,goToEditMode:function(){d(!0)}})]})},ot=n(75),it=n.n(ot),ct=n(134),ut=n.n(ct),lt=function(e){return Object(b.jsxs)("div",{className:ut.a.item,children:[Object(b.jsx)("img",{src:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"}),e.message,Object(b.jsxs)("div",{children:["like",Object(b.jsx)("span",{children:e.likesCount})]})]})},dt=n(92),jt=Object(et.a)(10),ft=Object(qe.a)({form:"myPostsForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(dt.a,{name:"newPostText",component:$e.b,validate:[et.b,jt],className:it.a.entryField})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:it.a.btnAdd,children:"Add post"})})]})})),bt=a.a.memo((function(e){var t=e.profilePage.posts.map((function(e){return Object(b.jsx)(lt,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"My post"}),Object(b.jsx)(ft,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(b.jsx)("div",{className:it.a.posts,children:t})]})})),pt=Object(A.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:Ue,newPostText:e}}})(bt),ht=function(e){return Object(b.jsxs)("main",{className:We.a.profile,children:[Object(b.jsx)(st,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(b.jsx)(pt,{store:e.store})]})},Ot=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(b.jsx)(ht,Object(N.a)(Object(N.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),n}(a.a.Component),gt=Object(be.d)(Object(A.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:He,getStatus:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:r=t.sent,n(Ge(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:0===t.sent.data.resultCode&&n(Ge(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:Te,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n,r){var a,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,B(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(He(a)),t.next=10;break;case 8:return n(Object(Ce.a)("editProfile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),h.g)(Ot),mt=n(50),At=n.n(mt),vt=Object(qe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsx)("div",{className:At.a.login,children:Object($e.c)("Email","email",[et.b],$e.a)}),Object(b.jsx)("div",{className:At.a.password,children:Object($e.c)("password","password",[et.b],$e.a)}),Object(b.jsx)("div",{className:At.a.rememberMe,children:Object($e.c)(null,"rememberMe",[],$e.a,{type:"checkbox"},"remember me")}),r&&Object(b.jsx)("img",{src:r}),r&&Object($e.c)("symbols from image","captcha",[et.b],$e.a,{}),n&&Object(b.jsx)("div",{className:At.a.formSummaryError,children:n}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:At.a.btnLogin,children:"LOG IN"})})]})})),xt=Object(A.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(w.a)(x.a.mark((function a(s){var o,i;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y(e,t,n,r);case 2:0===(o=a.sent).resultCode?s(ke()):(10===o.resultCode&&s(ye()),i=o.messages.length>0?o.messages[0]:"Some error",s(Object(Ce.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(h.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(vt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),wt="INITIALIZED_SUCCESS",_t={initialized:!1},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case wt:return Object(N.a)(Object(N.a)({},e),{},{initialized:!0});default:return e}},Pt=n(126),Ct={friends:[{ava:"https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png",name:"Andrew"},{ava:"https://shutniki.club/wp-content/uploads/2019/12/ava_dlya_zhenschiny_3_22073642.jpg",name:"Sasha"},{ava:"https://www.blast.hk/attachments/74776/",name:"Sveta"}]},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct;return e},It=n(135),Et=n(128),Qt=Object(be.c)({profilePage:Re,dialogsPage:Pt.a,usersPage:q,sidebar:St,auth:Fe,form:Et.a,app:Nt}),Bt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,kt=Object(be.e)(Qt,Bt(Object(be.a)(It.a)));window.__store__=kt;var yt=kt,Ft=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Ut=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert(e)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(Ke,{}),Object(b.jsx)(p,{}),Object(b.jsx)("div",{className:"app-wrapper-content",children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(h.a,{from:"/",to:"/profile"})}}),Object(b.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(gt,{})}}),Object(b.jsx)(h.b,{path:"/dialogs",render:function(){return Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:Object(b.jsx)(Ft,{})})}}),Object(b.jsx)(h.b,{path:"/login",render:function(){return Object(b.jsx)(xt,{})}}),Object(b.jsx)(h.b,{path:"/users",render:function(){return Object(b.jsx)(we,{})}}),Object(b.jsx)(h.b,{path:"/news",component:O}),Object(b.jsx)(h.b,{path:"/music",component:g}),Object(b.jsx)(h.b,{path:"/settings",component:m}),Object(b.jsx)(h.b,{path:"*",render:function(){return Object(b.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(b.jsx)(fe,{})}}]),n}(a.a.Component),Lt=Object(be.d)(h.g,Object(A.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ke());Promise.all([t]).then((function(){e({type:wt})}))}}}))(Ut),Dt=function(e){return Object(b.jsx)(f.a,{children:Object(b.jsx)(A.a,{store:yt,children:Object(b.jsx)(Lt,{})})})},Mt=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,297)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(Dt,{}),document.getElementById("root")),Mt()},30:function(e,t,n){e.exports={paginator:"Paginator_paginator__2B3Aj",page:"Paginator_page__DNlj8",selectedPage:"Paginator_selectedPage__6bDeQ",notSelectedPage:"Paginator_notSelectedPage__2kFwc",button:"Paginator_button__3U1LX",void:"Paginator_void__1kCxX"}},31:function(e,t,n){e.exports={header:"Header_header__1okeO",logo:"Header_logo__3tVCu",loginBlock:"Header_loginBlock__2oU9f",userLogin:"Header_userLogin__1zd92",userId:"Header_userId__j_ppz",login:"Header_login__29q0i",email:"Header_email__1GWP4",btnLogin:"Header_btnLogin__35nNv"}},50:function(e,t,n){e.exports={login:"Login_login__ZHSa-",password:"Login_password__3HiHE",rememberMe:"Login_rememberMe__22KOt",btnLogin:"Login_btnLogin__1uqpd"}},6:function(e,t,n){e.exports={body:"ProfileInfo_body__rYova",imageUser:"ProfileInfo_imageUser__Mq7qT",inputWrapper:"ProfileInfo_inputWrapper__1DCKX",inputFile:"ProfileInfo_inputFile__3Ny9t",inputFileButtonText:"ProfileInfo_inputFileButtonText__2C-4y",status:"ProfileInfo_status__OyrE1",statusInput:"ProfileInfo_statusInput__3ErOD",profileData:"ProfileInfo_profileData__24JCN",ProfileDataForm:"ProfileInfo_ProfileDataForm__2LG5z",fullNameTitle:"ProfileInfo_fullNameTitle__2SjF2",aboutMeTitle:"ProfileInfo_aboutMeTitle__3iH9P",job:"ProfileInfo_job__1F_eo",jobDescriptionsTitle:"ProfileInfo_jobDescriptionsTitle__3Haaq",contacts:"ProfileInfo_contacts__3SmzG",contact:"ProfileInfo_contact__3xSLP",contactTitle:"ProfileInfo_contactTitle__1GEnF",contactValue:"ProfileInfo_contactValue__1EU8m",void:"ProfileInfo_void__2OOmO",editMode:"ProfileInfo_editMode__3oUl-",btnEditMode:"ProfileInfo_btnEditMode__sHBMd",info:"ProfileInfo_info__2JvM-",fullName:"ProfileInfo_fullName__1XaF_",aboutMe:"ProfileInfo_aboutMe__2LyW0",btnEditModeSave:"ProfileInfo_btnEditModeSave__1-dkU"}},61:function(e,t,n){e.exports={formControl:"FormsControls_formControl__39a5H",error:"FormsControls_error__2_Q_-",formSummaryError:"FormsControls_formSummaryError__2dm9K"}},75:function(e,t,n){e.exports={btnAdd:"MyPosts_btnAdd__1ADlY",entryField:"MyPosts_entryField__1W9o5"}}},[[293,1,2]]]);
//# sourceMappingURL=main.769b9194.chunk.js.map