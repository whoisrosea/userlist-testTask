"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[284,427],{6860:(e,s,t)=>{t.d(s,{c:()=>u});var r=t(6536),n=t.n(r),c=t(8504);const a=t(600).iU();var o=t(4628),i=t(2564);const l=n().create({baseURL:c.G4,timeout:6e4}),d="/auth/login";l.interceptors.request.use((e=>{const s=localStorage.getItem(o.I5);return s&&(e.headers.authorization=s),s||e.headers["public-request"]||(a.push(d),window.location.reload()),e}),(e=>{i.c.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((e=>e.data),(e=>{let s={message:""};return 400!==e.response.status&&403!==e.response.status||(s.message="Authentication Fail",s.description="Please login again",localStorage.removeItem(o.I5),a.push(d),window.location.reload()),404===e.response.status&&(s.message="Not Found"),500===e.response.status&&(s.message="Internal Server Error"),508===e.response.status&&(s.message="Time Out"),i.c.error(s),Promise.reject(e)}));const h=l,m={login:function(e){return h({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return h({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}},u=m},8427:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});t(9060);var r=t(3632),n=t(7156),c=t(9512),a=t(5920),o=t(8820),i=t(2496);const l={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},d=e=>{const s=(0,o.w1)((e=>e.theme.currentTheme));return(0,i.jsx)("div",{className:"h-100",style:l,children:(0,i.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:(0,i.jsx)(n.c,{justify:"center",children:(0,i.jsx)(c.c,{xs:20,sm:20,md:20,lg:7,children:(0,i.jsx)(a.c,{children:(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===s?"logo.png":"logo-white.png"),alt:""}),(0,i.jsxs)("p",{children:["Don't have an account yet? ",(0,i.jsx)("a",{href:"/auth/register-1",children:"Sign Up"})]})]}),(0,i.jsx)(n.c,{justify:"center",children:(0,i.jsx)(c.c,{xs:24,sm:24,md:20,lg:20,children:(0,i.jsx)(r.c,{...e})})})]})})})})})})}},8904:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});t(9060);var r=t(8427),n=t(2496);const c=()=>(0,n.jsx)(r.default,{allowRedirect:!0})},3632:(e,s,t)=>{t.d(s,{c:()=>P});var r=t(9060),n=t(8820),c=t(804),a=t(3520),o=t(7232),i=t(9828),l=t(2648),d=t(5276),h=t(6656),m=t(2496);const u=()=>(0,m.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:(0,m.jsxs)("g",{children:[(0,m.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),(0,m.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),(0,m.jsx)("g",{id:"Connected_Home_1_",children:(0,m.jsx)("g",{children:(0,m.jsx)("g",{children:(0,m.jsx)("g",{children:(0,m.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),(0,m.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),(0,m.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),(0,m.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),(0,m.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})}),g=()=>(0,m.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:(0,m.jsxs)("g",{children:[(0,m.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),(0,m.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),(0,m.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})});var p=t(800),x=t(1024),j=t(5572),f=t.n(j),v=t(2128),w=r.forwardRef((function(e,s){var t=e.className,n=e.component,c=e.viewBox,a=e.spin,o=e.rotate,i=e.tabIndex,l=e.onClick,d=e.children,h=(0,x.c)(e,["className","component","viewBox","spin","rotate","tabIndex","onClick","children"]);(0,v.sZ)(Boolean(n||d),"Should have `component` prop or `children`."),(0,v.aC)();var m=f()("anticon",t),u=f()({"anticon-spin":!!a}),g=o?{msTransform:"rotate(".concat(o,"deg)"),transform:"rotate(".concat(o,"deg)")}:void 0,j=(0,p.c)((0,p.c)({},v.lK),{},{className:u,style:g,viewBox:c});c||delete j.viewBox;var w=i;return void 0===w&&l&&(w=-1),r.createElement("span",Object.assign({role:"img"},h,{ref:s,tabIndex:w,onClick:l,className:m}),n?r.createElement(n,Object.assign({},j),d):d?((0,v.sZ)(Boolean(c)||1===r.Children.count(d)&&r.isValidElement(d)&&"use"===r.Children.only(d).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),r.createElement("svg",Object.assign({},j,{viewBox:c}),d)):null)}));w.displayName="AntdIcon";const y=w,C=r.forwardRef(((e,s)=>(0,m.jsx)(y,{component:e.svg,className:e.className})));var b=t(5428),F=t(6860),N=t(5328),k=t(2216);const M=e=>{let s=(0,N.useHistory)();const{otherSignIn:t,showForgetPassword:n,hideAuthMessage:p,onForgetPasswordClick:x,showLoading:j,extra:f,loading:v,showMessage:w,message:y,authenticated:b,showAuthMessage:M,token:I,redirect:P,allowRedirect:z}=e;(0,r.useEffect)((()=>{null!==I&&z&&s.push(P),w&&setTimeout((()=>{p()}),3e3)}));const B=(0,m.jsxs)("div",{children:[(0,m.jsx)(c.c,{children:(0,m.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),(0,m.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,m.jsx)(a.c,{onClick:()=>{j()},className:"mr-2",disabled:v,icon:(0,m.jsx)(C,{svg:u}),children:"Google"}),(0,m.jsx)(a.c,{onClick:()=>{j()},icon:(0,m.jsx)(C,{svg:g}),disabled:v,children:"Facebook"})]})]});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k.q4.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:w?1:0,marginBottom:w?20:0},children:(0,m.jsx)(o.c,{type:"error",showIcon:!0,message:y})}),(0,m.jsxs)(i.c,{layout:"vertical",name:"login-form",onFinish:e=>{j();F.c.login(e).then((e=>{b("fakeToken")})).then((e=>{M(e)}))},children:[(0,m.jsx)(i.c.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:(0,m.jsx)(l.c,{prefix:(0,m.jsx)(d.c,{className:"text-primary"})})}),(0,m.jsx)(i.c.Item,{name:"password",label:(0,m.jsxs)("div",{className:"".concat(n?"d-flex justify-content-between w-100 align-items-center":""),children:[(0,m.jsx)("span",{children:"Password"}),n&&(0,m.jsx)("span",{onClick:()=>x,className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:(0,m.jsx)(l.c.Password,{prefix:(0,m.jsx)(h.c,{className:"text-primary"})})}),(0,m.jsx)(i.c.Item,{children:(0,m.jsx)(a.c,{type:"primary",htmlType:"submit",block:!0,loading:v,children:"Sign In"})}),t?B:null,f]})]})};M.defaultProps={otherSignIn:!0,showForgetPassword:!1};const I={showAuthMessage:b.MB,showLoading:b.QV,hideAuthMessage:b.uG,authenticated:b.kX},P=(0,n.Ul)((e=>{let{auth:s}=e;const{loading:t,message:r,showMessage:n,token:c,redirect:a}=s;return{loading:t,message:r,showMessage:n,token:c,redirect:a}}),I)(M)},804:(e,s,t)=>{t.d(s,{c:()=>d});var r=t(5072),n=t(2536),c=t(9060),a=t(5572),o=t.n(a),i=t(3832),l=function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)s.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};const d=function(e){return c.createElement(i._X,null,(function(s){var t,a=s.getPrefixCls,i=s.direction,d=e.prefixCls,h=e.type,m=void 0===h?"horizontal":h,u=e.orientation,g=void 0===u?"center":u,p=e.className,x=e.children,j=e.dashed,f=e.plain,v=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),w=a("divider",d),y=g.length>0?"-".concat(g):g,C=!!x,b=o()(w,"".concat(w,"-").concat(m),(t={},(0,n.c)(t,"".concat(w,"-with-text"),C),(0,n.c)(t,"".concat(w,"-with-text").concat(y),C),(0,n.c)(t,"".concat(w,"-dashed"),!!j),(0,n.c)(t,"".concat(w,"-plain"),!!f),(0,n.c)(t,"".concat(w,"-rtl"),"rtl"===i),t),p);return c.createElement("div",(0,r.c)({className:b},v,{role:"separator"}),x&&c.createElement("span",{className:"".concat(w,"-inner-text")},x))}))}}}]);
//# sourceMappingURL=284.8013e75b.chunk.js.map