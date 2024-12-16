import{q as j,r as i,W as N,j as e}from"./app--yM69B3u.js";import{A as b}from"./AuthenticatedLayout-C1S-0GyU.js";import{g as f,u as C,c as g}from"./CountryApi-Cs8Zc2Y8.js";import{B as v}from"./BootstrapToaster-3hnoYUoa.js";import"./index-CW7j9gvC.js";import"./Api-Rb4oq7BM.js";function T({auth:u}){var m;const o=(m=j().props.country)==null?void 0:m.id,[c,l]=i.useState({type:"",message:"",title:""}),{data:a,setData:d,put:E,post:w,reset:S}=N({country_name:"",iso_code:"",phone_code:""}),[r,h]=i.useState(!1);i.useEffect(()=>{o&&(h(!0),x())},[o]);const x=async()=>{try{const s=(await f(o)).data.data;d({country_name:s.country_name,iso_code:s.iso_code,phone_code:s.phone_code,user_id:s.user_id})}catch(t){console.error("Error fetching country data:",t)}},n=t=>{const{name:s,value:p}=t.target;d({...a,[s]:p})},y=async t=>{t.preventDefault();try{let s;r?s=await C(o,a):s=await g(a),s.status===201?l({type:"success",message:"success.",title:"Success"}):l({type:"error",message:s.data.message,title:"error"})}catch(s){console.error("Error saving country data:",s)}};return e.jsxs(b,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:r?"Edit Country":"Create Country"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("h2",{children:r?"Edit Country":"Create Country"})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"/",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})}),e.jsx("li",{className:"breadcrumb-item",children:"Countries"}),e.jsx("li",{className:"breadcrumb-item active",children:r?"Edit Country":"Create Country"})]})})]})})}),e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"edit-country",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-12",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header card-no-border pb-0",children:e.jsx("h3",{className:"card-title mb-0",children:r?a.country_name:"New Country"})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("form",{onSubmit:y,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Country Name"}),e.jsx("input",{className:"form-control",name:"country_name",value:a.country_name,onChange:n,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"ISO Code"}),e.jsx("input",{className:"form-control",name:"iso_code",value:a.iso_code,onChange:n,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Phone Code"}),e.jsx("input",{className:"form-control",name:"phone_code",value:a.phone_code,onChange:n,required:!0})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{className:"btn btn-primary btn-block",type:"submit",children:r?"Update Country":"Create Country"})})]}),c.message&&e.jsx(v,{type:c.type,message:c.message,title:c.title})]})]})})})})})]})}export{T as default};
