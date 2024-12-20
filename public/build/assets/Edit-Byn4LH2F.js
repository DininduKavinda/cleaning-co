import{q as b,r as c,j as e}from"./app-CillZM3T.js";import{A as g}from"./AuthenticatedLayout-Bd2vGtaY.js";import{L as C}from"./LocationForm-u6Yb216a.js";import{g as y,u as _,c as w}from"./ClientApi-Bb-DlfjN.js";import{B as E}from"./BootstrapToaster-C4x44DNK.js";import"./index-Cb0NI_B_.js";import"./Api-Rb4oq7BM.js";import"./CountryDropdown-25aSrtLt.js";import"./react-select.esm-BcHrBxA-.js";import"./floating-ui.dom-D73o39gD.js";import"./CountryApi-DYq2LDhX.js";import"./ProvinceDropdown-bmLdza3j.js";import"./ProvinceApi-BMblm3Sb.js";import"./DistrictDropdown-F9hYeZXo.js";import"./DistrictApi-Bn6T9cU6.js";import"./CityDropdown-DqxGKfwS.js";function G({auth:j}){var x;const t=(x=b().props.client)==null?void 0:x.id,[n,d]=c.useState({type:"",message:"",title:""}),[a,m]=c.useState({nic:"",name:"",mobile:"",phone:"",address:"",roles:["user"],country_id:"",province_id:"",district_id:"",city_id:"",full_name:"",email:"",password:"",password_confirmation:"",image:null,last_login:"",active:1}),[o,p]=c.useState(!1),[h,u]=c.useState(null);c.useEffect(()=>{t&&(p(!0),N())},[t]);const N=async()=>{try{const s=(await y(t)).data.data;m({nic:s.nic,name:s.name,mobile:s.mobile,phone:s.phone,address:s.address,country_id:s.country_id,province_id:s.province_id,district_id:s.district_id,city_id:s.city_id,full_name:s.full_name,email:s.email,roles:s.roles,active:s.active}),u(s.image)}catch(i){console.error("Error fetching client data:",i)}},r=i=>{const{name:s,value:l}=i.target;m({...a,[s]:l})},f=i=>{const s=i.target.files[0];m({...a,image:s}),u(URL.createObjectURL(s))},v=async i=>{i.preventDefault();const s=new FormData;Object.keys(a).forEach(l=>{s.append(l,a[l])});try{let l;o?l=await _(t,s):l=await w(s),l.status===201?d({type:"success",message:"success.",title:"Success"}):d({type:"error",message:l.data.message,title:"error"})}catch(l){console.error("Error saving client data:",l)}};return e.jsxs(g,{client:j.client,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:o?"Edit Client":"Create Client"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("h2",{children:"Edit Profile"})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"index.html",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})}),e.jsx("li",{className:"breadcrumb-item",children:"Users"}),e.jsx("li",{className:"breadcrumb-item active",children:"Edit Profile"})]})})]})})}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"edit-profile",children:[e.jsxs("form",{onSubmit:v,className:"row",children:[e.jsx("div",{className:"col-xl-4",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header card-no-border pb-0",children:e.jsx("h3",{className:"card-title mb-0",children:"Client Profile"})}),e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"row mb-2",children:e.jsx("div",{className:"profile-title",children:e.jsxs("div",{className:"d-flex gap-3",children:[h?e.jsx("img",{className:"img-70 rounded-circle",alt:"Profile",src:h}):e.jsx("img",{className:"img-70 rounded-circle",alt:"Default",src:"/theme/assets/images/user/user.png"}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("h3",{className:"mb-1",children:a.name||"New Client"}),e.jsx("p",{children:a.roles.join(", ")})]})]})})}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h6",{className:"form-label",children:"NIC"}),e.jsx("input",{className:"form-control",name:"nic",value:a.nic,onChange:r,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h6",{className:"form-label",children:"Username"}),e.jsx("input",{className:"form-control",name:"name",value:a.name,onChange:r,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h6",{className:"form-label",children:"Mobile"}),e.jsx("input",{className:"form-control",name:"mobile",value:a.mobile,onChange:r,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h6",{className:"form-label",children:"Phone"}),e.jsx("input",{className:"form-control",name:"phone",value:a.phone,onChange:r,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h6",{className:"form-label",children:"Address"}),e.jsx("input",{className:"form-control",name:"address",value:a.address,onChange:r,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h6",{className:"form-label",children:"Upload Image"}),e.jsx("input",{type:"file",className:"form-control",onChange:f})]})]})]})}),e.jsx("div",{className:"col-xl-8",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header card-no-border pb-0",children:e.jsx("h3",{className:"card-title mb-0",children:"Edit Client Details"})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Full Name"}),e.jsx("input",{className:"form-control",name:"full_name",value:a.full_name,onChange:r,required:!0})]})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{className:"form-control",name:"email",value:a.email,onChange:r,required:!0}),e.jsx("input",{hidden:!0,className:"form-control",name:"active",value:a.active,onChange:r,required:!0})]})}),!o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsx("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:r,required:!0})]})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Confirm Password"}),e.jsx("input",{type:"password",className:"form-control",name:"password_confirmation",value:a.password_confirmation,onChange:r,required:!0})]})})]}),e.jsx(C,{client:a,setClient:m}),e.jsx("div",{className:"card-footer",children:e.jsx("button",{className:"btn btn-primary btn-block",type:"submit",children:o?"Update Client":"Create Client"})})]})})]})})]}),n.message&&e.jsx(E,{type:n.type,message:n.message,title:n.title})]})})]})}export{G as default};
