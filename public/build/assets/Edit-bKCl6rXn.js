import{q as N,r as n,W as f,j as e}from"./app-CillZM3T.js";import{A as v}from"./AuthenticatedLayout-Bd2vGtaY.js";import{g,u as y,c as I}from"./ItemApi-mIehaZ69.js";import{I as _}from"./ItemTypeDropdown-CTvdN6AB.js";import{B as C}from"./BootstrapToaster-C4x44DNK.js";import"./index-Cb0NI_B_.js";import"./Api-Rb4oq7BM.js";import"./ItemTypeApi-DC5WYWwF.js";function F({auth:h}){var o;const c=(o=N().props.item)==null?void 0:o.id,[r,p]=n.useState({type:"",message:"",title:""}),{data:t,setData:l}=f({name:"",item_type_id:"",price:"",active:!1}),[i,x]=n.useState(!1);n.useEffect(()=>{c&&(x(!0),u())},[c]);const u=async()=>{try{const s=(await g(c)).data.data;l({name:s.name,item_type_id:s.item_type_id,price:s.price,active:s.active})}catch(a){console.error("Error fetching item data:",a)}},d=a=>{const{name:s,value:m}=a.target;l({...t,[s]:m})},j=(a,s)=>{l(m=>({...m,[a]:s}))},b=async a=>{a.preventDefault();try{let s;i?s=await y(c,t):s=await I(t),s.status===201&&p({type:"success",message:"success.",title:"Success"})}catch(s){console.error("Error saving item data:",s)}};return e.jsx(v,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:i?"Edit Item":"Create Item"}),children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("h2",{children:i?"Edit Item":"Create Item"})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"/",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})}),e.jsx("li",{className:"breadcrumb-item",children:"Items"}),e.jsx("li",{className:"breadcrumb-item active",children:i?"Edit Item":"Create Item"})]})})]})}),e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"edit-item",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-12",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header card-no-border pb-0",children:e.jsx("h3",{className:"card-title mb-0",children:i?t.name:"New Item"})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Item Name"}),e.jsx("input",{className:"form-control",name:"name",value:t.name,onChange:d,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Select Item Type"}),e.jsx(_,{value:t.item_type_id,onChange:a=>j("item_type_id",a)})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Price"}),e.jsx("input",{className:"form-control",type:"number",name:"price",value:t.price,onChange:d,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("input",{className:"form-check-input ",type:"checkbox",name:"active",checked:t.active,onChange:a=>l({...t,active:a.target.checked})}),e.jsxs("label",{className:" px-4 form-label",children:["Active"," "]})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{className:"btn btn-primary btn-block",type:"submit",children:i?"Update Item":"Create Item"})})]}),r.message&&e.jsx(C,{type:r.type,message:r.message,title:r.title})]})]})})})})})]})})}export{F as default};
