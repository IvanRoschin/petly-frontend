"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{6079:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(5861),s=t(9439),r=t(4687),i=t.n(r),o=t(2791),l=t(9434),c=t(5705),m=t(9230),d=t(9273),u=t(319),p=t(3682),x=t(6727),h=x.Ry().shape({email:x.Z_().matches(/^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Error! Email must be in a format: aaaaa@aaa.aaa").min(12,"At least 12 symbols").max(50,"Maximum 50 symbols").required("Required field"),password:x.Z_().matches(/^\S+$/,"Space is not allowed").min(7,"At least 7 symbols").max(32,"Maximum 32 symbols").required("Required field"),confirm:x.Z_().oneOf([x.iH("password"),null],"Passwords must match").required("Required field")}),j=x.Ry().shape({name:x.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+(?: [a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+)*$/,"Only cyrillic and latin letters are allowed").required("Required field"),city:x.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+(?:[-\s]?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+)*,\s*[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490'\u2019\s-]+$/,'Should be "City, Region" separated by comma, only letters can be accepted').required("Required field "),phone:x.Z_().matches(/^\+380\d{9}$/,"Invalid phone number(+380111111111)").min(13).max(13).required("Required field")}),f=t(3037),y=t(6179),b=t(1604),w=t(9001),Z=t(3329),g=function(e){var n=e.next,t=e.isSubmitting,a=(0,o.useState)(!1),r=(0,s.Z)(a,2),i=r[0],l=r[1],c=(0,m.$G)().t,d=(0,o.useState)(!1),u=(0,s.Z)(d,2),p=u[0],x=u[1];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b.II,{type:"email",name:"email",placeholder:c("Email")}),(0,Z.jsx)(b.jj,{name:"email",component:"div"}),(0,Z.jsxs)(y.ZC,{children:[(0,Z.jsx)(b.II,{id:"password",name:"password",placeholder:c("Password"),type:i?"text":"password"}),(0,Z.jsx)(y.yS,{type:"button",onClick:function(){l(!i)},children:i?(0,Z.jsx)(y.rr,{}):(0,Z.jsx)(y.OF,{})}),(0,Z.jsx)(b.jj,{name:"password",component:"div"})]}),(0,Z.jsxs)(y.ZC,{children:[(0,Z.jsx)(b.II,{id:"confirm",type:p?"text":"password",name:"confirm",placeholder:c("Confirm_Password")}),(0,Z.jsx)(y.yS,{type:"button",onClick:function(){x(!p)},children:p?(0,Z.jsx)(y.rr,{}):(0,Z.jsx)(y.OF,{})}),(0,Z.jsx)(b.jj,{name:"confirm",component:"div"})]}),(0,Z.jsx)(b.zx,{type:"submit",onClick:n,disabled:t,children:c("Next")}),(0,Z.jsxs)(w.t,{href:"https://petly-gd7x.onrender.com/api/users/google",children:[(0,Z.jsx)(y.DW,{src:f.Z,alt:"Google"}),c("Signup_with_Google")]})]})},I=function(e){var n=e.props,t=(0,m.$G)().t;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b.II,{type:"text",name:"name",placeholder:t("Name")}),(0,Z.jsx)(b.jj,{name:"name",component:"div"}),(0,Z.jsx)(b.II,{type:"text",name:"city",placeholder:t("City_region")}),(0,Z.jsx)(b.jj,{name:"city",component:"div"}),(0,Z.jsx)(b.II,{type:"tel",name:"phone",placeholder:t("Mobile_phone")}),(0,Z.jsx)(b.jj,{name:"phone",component:"div"}),(0,Z.jsx)(b.zx,{type:"submit",children:t("Register")}),(0,Z.jsx)(b.zx,{type:"button",onClick:n.back,children:t("Back")})]})},_=t(9887),k={email:"",password:"",confirm:"",name:"",city:"",phone:""},v=function(){var e=(0,o.useState)(0),n=(0,s.Z)(e,2),t=n[0],r=n[1],x=(0,m.$G)().t,f=(0,l.I0)(),y=function(){var e=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)(i().mark((function e(n,t){var a,s,r,o,l,c,m,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.email,s=n.password,r=n.name,o=n.city,l=n.phone,c=t.resetForm,e.next=4,f((0,d.IU)({email:a,password:s,name:r,city:o,phone:l}));case 4:if("auth/signup/fulfilled"!==(m=e.sent).type){e.next=11;break}return console.log("resultSignup",m),e.next=9,f((0,d.Ib)({email:a,password:s}));case 9:u=e.sent,console.log("resultLogIn",u);case 11:c();case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,Z.jsx)(p.x,{as:"section",children:(0,Z.jsx)(b.lY,{children:(0,Z.jsx)(u.W,{children:(0,Z.jsxs)(b.bh,{children:[(0,Z.jsx)(b.zD,{children:x("Registration")}),(0,Z.jsx)(c.J9,{initialValues:k,validationSchema:0===t?h:j,onSubmit:w,children:(0,Z.jsxs)(b.gR,{autoComplete:"off",children:[0===t&&(0,Z.jsx)(g,{next:y}),1===t&&(0,Z.jsx)(I,{back:function(){r(t-1)}})]})}),(0,Z.jsx)(_.Z,{link:"/login",question:x("Is_account"),pageName:x("Log_in")})]})})})})}}}]);
//# sourceMappingURL=79.6dc5d050.chunk.js.map