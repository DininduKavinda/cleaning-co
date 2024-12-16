import{q as j,r as o,j as e}from"./app-XFbUVf-n.js";import{A as N}from"./AuthenticatedLayout-B9_jAqLR.js";import{g as b,u as g,c as v}from"./PermissionApi-4T2zn_lv.js";import{B as y}from"./BootstrapToaster-Drkpczus.js";import"./index-DKFs-34d.js";import"./Api-C_e93x4I.js";function I({auth:d}){var m;const t=(m=j().props.permission)==null?void 0:m.id,[i,n]=o.useState({name:""}),[a,h]=o.useState(!1),[c,l]=o.useState({type:"",message:"",title:""});o.useEffect(()=>{t&&(h(!0),p())},[t]);const p=async()=>{try{const s=(await b(t)).data.data;n({name:s.name})}catch(r){console.error("Error fetching permission data:",r)}},x=r=>{const{name:s,value:u}=r.target;n({...i,[s]:u})},f=async r=>{r.preventDefault();try{let s;a?s=await g(t,i):s=await v(i),s.status===201?l({type:"success",message:"success.",title:"Success"}):l({type:"error",message:s.data.message,title:"error"})}catch(s){console.error("Error saving permission data:",s)}};return e.jsxs(N,{permission:d.permission,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:a?"Edit Permission":"Create Permission"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("h2",{children:a?"Edit Profile":"Create Profile"})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"/",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})}),e.jsx("li",{className:"breadcrumb-item",children:"Permissions"}),e.jsx("li",{className:"breadcrumb-item active",children:a?"Edit Profile":"Create Profile"})]})})]})})}),e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"edit-profile",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-12",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header card-no-border pb-0",children:e.jsx("h3",{className:"card-title mb-0",children:a?i.name:"New Permission"})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Name"}),e.jsx("input",{className:"form-control",name:"name",value:i.name,onChange:x,required:!0})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{className:"btn btn-primary btn-block",type:"submit",children:a?"Update Profile":"Create Profile"})})]}),c.message&&e.jsx(y,{type:c.type,message:c.message,title:c.title})]})]})})})})})]})}export{I as default};
