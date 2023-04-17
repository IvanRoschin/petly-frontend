"use strict";(self.webpackChunkpetly_frontend=self.webpackChunkpetly_frontend||[]).push([[437],{3115:function(e,t,n){n.d(t,{D:function(){return a},s:function(){return r}});var r=function(e){return e.map((function(e){var t=Object.assign({},e);return Number(e.useCounty)?(t.value="".concat(e.cityEn,",  ").concat(e.countyEn,", ").concat(e.stateEn," region"),t.label="".concat(e.cityEn,",  ").concat(e.countyEn,", ").concat(e.stateEn," region")):(t.value="".concat(e.cityEn,", ").concat(e.stateEn," region"),t.label="".concat(e.cityEn,", ").concat(e.stateEn," region")),t}))},a=function(e){return e.map((function(e){var t=Object.assign({},e);return Number(e.useCounty)?(t.value="".concat(e.city,",  ").concat(e.county,", ").concat(e.state," \u043e\u0431\u043b\u0430\u0441\u0442\u044c"),t.label="".concat(e.city,",  ").concat(e.county,", ").concat(e.state," \u043e\u0431\u043b\u0430\u0441\u0442\u044c")):(t.value="".concat(e.city,", ").concat(e.state," \u043e\u0431\u043b\u0430\u0441\u0442\u044c"),t.label="".concat(e.city,", ").concat(e.state," \u043e\u0431\u043b\u0430\u0441\u0442\u044c")),t}))}},8437:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(5861),a=n(9439),o=n(4687),s=n.n(o),c=n(2791),i=n(9434),u=n(7689),l=n(5705),d=n(9230),p=n(1898),h=n(5218),f=n(9273),m=n(319),x=n(3682),y=n(6727),j=y.Ry().shape({email:y.Z_().matches(/^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,p.Z.t("email_match")).min(5,p.Z.t("at_least_five")).required(p.Z.t("required_field")),password:y.Z_().matches(/^\S+$/,p.Z.t("no_space")).min(7,p.Z.t("at_least_seven")).max(32,p.Z.t("max_tt")).required(p.Z.t("required_field")),confirm:y.Z_().oneOf([y.iH("password"),null],p.Z.t("Passwords_match")).required(p.Z.t("required_field"))}),v=y.Ry().shape({name:y.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+(?: [a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+)*$/,p.Z.t("Only_cyrillic_latin")).required(p.Z.t("required_field")),phone:y.Z_().matches(/^\+380\d{9}$/,"Invalid phone number(+380111111111)").min(13).max(13).required("Required field")}),Z=n(3037),g=n(3997),b=n(1604),_=n(9001),C=n(3329),k=function(e){var t=(0,c.useState)(!1),n=(0,a.Z)(t,2),r=n[0],o=n[1],s=(0,c.useState)(!1),i=(0,a.Z)(s,2),u=i[0],l=i[1],p=(0,d.$G)().t;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(b.ZP,{type:"email",name:"email",placeholder:p("Email"),errors:e.errors,touched:e.touched,values:e.values.email,required:!0,autoFocus:!0}),(0,C.jsx)(b.jj,{name:"email",component:"div"}),(0,C.jsxs)(g.ZC,{children:[(0,C.jsx)(b.ZP,{id:"password",name:"password",placeholder:p("Password"),type:r?"text":"password",errors:e.errors,touched:e.touched,values:e.values.password,required:!0}),(0,C.jsx)(g.yS,{type:"button",onClick:function(){o(!r)},children:r?(0,C.jsx)(g.rr,{}):(0,C.jsx)(g.OF,{})}),(0,C.jsx)(b.jj,{name:"password",component:"div"})]}),(0,C.jsxs)(g.ZC,{children:[(0,C.jsx)(b.ZP,{id:"confirm",type:u?"text":"password",name:"confirm",placeholder:p("Confirm_Password"),errors:e.errors,touched:e.touched,values:e.values.confirm,required:!0}),(0,C.jsx)(g.yS,{type:"button",onClick:function(){l(!u)},children:u?(0,C.jsx)(g.rr,{}):(0,C.jsx)(g.OF,{})}),(0,C.jsx)(b.jj,{name:"confirm",component:"div"})]}),(0,C.jsx)(b.zx,{type:"button",onClick:e.next,disabled:e.isValid,children:p("Next")}),(0,C.jsxs)(_.tw,{href:"https://petly-backend-flax.vercel.app/api/users/google",children:[(0,C.jsx)(g.DW,{src:Z.Z,alt:"Google"}),p("Signup_with_Google")]})]})},w=n(9593),q=n(5737),E=n.n(q),F=(n(8404),n(922)),S=n(3115),P={},z=function(e){var t=(0,d.$G)().t,n=localStorage.getItem("i18nextLng"),o="en";("uk"===n||n.includes("uk"))&&(o="uk");var i=(0,c.useState)(null),u=(0,a.Z)(i,2),l=u[0],f=u[1],m=(0,c.useState)([]),x=(0,a.Z)(m,2),y=x[0],j=x[1],v=(0,c.useState)(!1),Z=(0,a.Z)(v,2),g=Z[0],_=Z[1];return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l<3)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,_(!0),e.next=6,F.tF.get("api/cities?query=".concat(l,"&lang=").concat(o));case 6:t=e.sent,n=t.data,j("en"===o?(0,S.s)(n):(0,S.D)(n)),_(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),h.ZP.error(p.Z.t("Try_again"));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l,o]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(b.ZP,{type:"text",name:"name",placeholder:t("Name"),errors:e.errors,touched:e.touched,values:e.values.name,required:!0}),(0,C.jsx)(b.jj,{name:"name",component:"div"}),(0,C.jsx)(w.ZP,{onInputChange:function(e){e.length>=3&&f(e)},options:y,onChange:function(t){return e.forCity(t)},placeholder:t("City_region"),isSearchable:"true",isLoading:g,noOptionsMessage:function(e){var n=e.inputValue;return t(n?"City_notfound":"City_letters")},styles:{control:function(e,t){return{display:"flex",padding:"4px",border:"1px solid #F59256",borderRadius:"20px",backgroundColor:"#FDF7F2",borderColor:t.isSelected?"#3CBC81":"#F59256"}}}}),(0,C.jsx)(b.jj,{name:"city",component:"div"}),(0,C.jsx)(E(),{name:"phone",type:"tel",className:P,onlyCountries:["ua"],country:"ua",countryCodeEditable:!1,errors:e.errors,value:e.values.phone,touched:e.touched,onChange:function(t,n,r){e.setFieldValue("phone","+".concat(t)),t.length<12?r.target.style.border="1px solid #E2001A":r.target.style.border="1px solid #3CBC81"}}),(0,C.jsx)(b.zx,{type:"submit",children:t("Register")}),(0,C.jsx)(b.zx,{type:"button",onClick:e.back,children:t("Back")})]})},R=n(9887),V={email:"",password:"",confirm:"",name:"",city:"",phone:""},$=function(){var e=(0,c.useState)(0),t=(0,a.Z)(e,2),n=t[0],o=t[1],y=(0,d.$G)().t,Z=(0,u.TH)();(0,c.useEffect)((function(){document.title="Registration"}),[Z]);var g=(0,i.I0)(),_=function(){o(n+1)},w=function(){o(n-1)},q=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a,o,c,i,u,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.email,a=t.password,o=t.name,c=t.city,i=t.phone,u=n.resetForm,c){e.next=5;break}return h.ZP.error(p.Z.t("City_required")),e.abrupt("return");case 5:if(13===i.length){e.next=8;break}return h.ZP.error(p.Z.t("Enter_phone")),e.abrupt("return");case 8:return e.next=10,g((0,f.IU)({email:r,password:a,name:o,city:c,phone:i}));case 10:if("auth/signup/fulfilled"!==(l=e.sent).type){e.next=14;break}return e.next=14,g((0,f.Ib)({email:r,password:a}));case 14:"auth/signup/rejected"===l.type&&h.ZP.error(l.payload.message),u();case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,C.jsx)(x.x,{as:"section",children:(0,C.jsx)(b.lY,{children:(0,C.jsx)(m.W,{children:(0,C.jsxs)(b.bh,{children:[(0,C.jsx)(b.zD,{children:y("Registration")}),(0,C.jsx)(l.J9,{initialValues:V,onSubmit:q,validationSchema:0===n?j:v,children:function(e){var t=e.errors,r=e.touched,a=e.isValid,o=e.setFieldValue,s=e.values;return(0,C.jsxs)(b.gR,{autoComplete:"off",children:[0===n&&(0,C.jsx)(k,{next:_,errors:t,touched:r,isValid:!a,values:s}),1===n&&(0,C.jsx)(z,{back:w,errors:t,touched:r,values:s,setFieldValue:o,forCity:function(e){o("city",e)}})]})}}),(0,C.jsx)(R.Z,{link:"/login",question:y("Is_account"),pageName:y("Log_in")})]})})})})}}}]);
//# sourceMappingURL=437.fb04325f.chunk.js.map