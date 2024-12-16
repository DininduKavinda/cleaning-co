import{W as u,r as j,j as e,Y as b,a as g}from"./app-BGrlIOB8.js";import{l as w}from"./index-Blqs8vea.js";import{G as f}from"./GuestLayout-WBefoJ3p.js";import{a as N}from"./Api-_485fmwb.js";function E({status:k,canResetPassword:o}){const{data:a,setData:l,post:c,processing:n,errors:r,reset:m}=u({email:"",password:"",remember:!1}),[i,d]=j.useState(!1),h=async s=>{s.preventDefault();try{const t=await w(a);if(t.status===200){const p=t.data.token;N.set("authToken",p,{expires:7}),c(route("login"),{onFinish:()=>{m("password")}})}}catch(t){console.error("Error during login:",t)}},x=()=>{d(s=>!s)};return e.jsxs(f,{children:[e.jsx(b,{title:"Log in"}),e.jsxs("form",{onSubmit:h,className:"theme-form",children:[e.jsx("h2",{className:"text-center",children:"Sign in to account"}),e.jsx("p",{className:"text-center",children:"Enter your email & password to login"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",className:"col-form-label",children:"Email Address"}),e.jsx("input",{id:"email",type:"email",name:"email",value:a.email,onChange:s=>l("email",s.target.value),className:"form-control",required:!0,placeholder:"Test@gmail.com"}),r.email&&e.jsx("div",{className:"mt-2 text-sm text-red-600",children:r.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"password",className:"col-form-label",children:"Password"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{id:"password",type:i?"text":"password",name:"password",value:a.password,onChange:s=>l("password",s.target.value),className:"form-control",required:!0,placeholder:"*********"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:x,children:i?"Hide":"Show"})]}),r.password&&e.jsx("div",{className:"mt-2 text-sm text-red-600",children:r.password})]}),e.jsxs("div",{className:"form-group mb-0 checkbox-checked",children:[e.jsxs("div",{className:"form-check checkbox-solid-info",children:[e.jsx("input",{id:"remember",type:"checkbox",name:"remember",checked:a.remember,onChange:s=>l("remember",s.target.checked),className:"form-check-input"}),e.jsx("label",{className:"form-check-label",htmlFor:"remember",children:"Remember password"})]}),o&&e.jsx(g,{href:route("password.request"),className:"link",children:"Forgot password?"}),e.jsx("div",{className:"text-end mt-3",children:e.jsx("button",{className:"btn btn-primary btn-block w-100",type:"submit",disabled:n,children:"Sign in"})})]}),e.jsx("div",{className:"login-social-title",children:e.jsx("h6",{children:"Or Sign in with"})}),e.jsx("div",{className:"form-group",children:e.jsxs("ul",{className:"login-social",children:[e.jsx("li",{children:e.jsx("a",{href:"https://www.linkedin.com",target:"_blank",children:e.jsx("i",{className:"icon-linkedin"})})}),e.jsx("li",{children:e.jsx("a",{href:"https://twitter.com",target:"_blank",children:e.jsx("i",{className:"icon-twitter"})})}),e.jsx("li",{children:e.jsx("a",{href:"https://www.facebook.com",target:"_blank",children:e.jsx("i",{className:"icon-facebook"})})}),e.jsx("li",{children:e.jsx("a",{href:"https://www.instagram.com",target:"_blank",children:e.jsx("i",{className:"icon-instagram"})})})]})}),e.jsxs("p",{className:"mt-4 mb-0 text-center",children:["Don't have an account?"," ",e.jsx("a",{className:"ms-2",href:"sign-up.html",children:"Create Account"})]})]})]})}export{E as default};
