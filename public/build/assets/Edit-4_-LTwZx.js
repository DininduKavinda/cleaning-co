import{q as j,r as m,W as f,j as e}from"./app-BGrlIOB8.js";import{A as N}from"./AuthenticatedLayout-X6LyfNqf.js";import{a as T,u as b,c as g}from"./ItemTypeApi-_E8_M0nL.js";import{B as v}from"./BootstrapToaster-Z7gsQhx8.js";import"./index-Blqs8vea.js";import"./Api-_485fmwb.js";function _({auth:d}){var o;const i=(o=j().props.itemType)==null?void 0:o.id,[c,l]=m.useState({type:"",message:"",title:""}),{data:r,setData:n,put:E,post:w,reset:C}=f({name:""}),[t,p]=m.useState(!1);m.useEffect(()=>{i&&(p(!0),h())},[i]);const h=async()=>{try{const s=(await T(i)).data.data;n({name:s.name})}catch(a){console.error("Error fetching itemType data:",a)}},y=a=>{const{name:s,value:u}=a.target;n({...r,[s]:u})},x=async a=>{a.preventDefault();try{let s;t?s=await b(i,r):s=await g(r),s.status===201?l({type:"success",message:"success.",title:"Success"}):l({type:"error",message:s.data.message,title:"error"})}catch(s){console.error("Error saving itemType data:",s)}};return e.jsxs(N,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:t?"Edit ItemType":"Create ItemType"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("h2",{children:t?"Edit ItemType":"Create ItemType"})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"/",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})}),e.jsx("li",{className:"breadcrumb-item",children:"ItemTypes"}),e.jsx("li",{className:"breadcrumb-item active",children:t?"Edit ItemType":"Create ItemType"})]})})]})})}),e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"edit-itemType",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-12",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header card-no-border pb-0",children:e.jsx("h3",{className:"card-title mb-0",children:t?r.name:"New ItemType"})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"ItemType Name"}),e.jsx("input",{className:"form-control",name:"name",value:r.name,onChange:y,required:!0})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{className:"btn btn-primary btn-block",type:"submit",children:t?"Update ItemType":"Create ItemType"})})]}),c.message&&e.jsx(v,{type:c.type,message:c.message,title:c.title})]})]})})})})})]})}export{_ as default};
