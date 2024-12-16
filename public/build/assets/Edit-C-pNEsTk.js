import{q as j,r as i,W as f,j as e}from"./app-BGrlIOB8.js";import{A as N}from"./AuthenticatedLayout-X6LyfNqf.js";import{g as b,u as g,c as L}from"./LevelApi-ChY-yw3L.js";import{B as y}from"./BootstrapToaster-Z7gsQhx8.js";import"./index-Blqs8vea.js";import"./Api-_485fmwb.js";function T({auth:m}){var d;const l=(d=j().props.level)==null?void 0:d.id,[c,n]=i.useState({type:"",message:"",title:""}),{data:r,setData:o,put:w,post:C,reset:D}=f({name:""}),[a,v]=i.useState(!1);i.useEffect(()=>{l&&(v(!0),h())},[l]);const h=async()=>{try{const s=(await b(l)).data.data;o({name:s.name})}catch(t){console.error("Error fetching level data:",t)}},x=t=>{const{name:s,value:p}=t.target;o({...r,[s]:p})},u=async t=>{t.preventDefault();try{let s;a?s=await g(l,r):s=await L(r),s.status===201?n({type:"success",message:"success.",title:"Success"}):n({type:"error",message:s.data.message,title:"error"})}catch(s){console.error("Error saving level data:",s)}};return e.jsxs(N,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:a?"Edit Level":"Create Level"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("h2",{children:a?"Edit Level":"Create Level"})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"/",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})}),e.jsx("li",{className:"breadcrumb-item",children:"Levels"}),e.jsx("li",{className:"breadcrumb-item active",children:a?"Edit Level":"Create Level"})]})})]})})}),e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"edit-level",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-12",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header card-no-border pb-0",children:e.jsx("h3",{className:"card-title mb-0",children:a?r.name:"New Level"})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Level Name"}),e.jsx("input",{className:"form-control",name:"name",value:r.name,onChange:x,required:!0})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{className:"btn btn-primary btn-block",type:"submit",children:a?"Update Level":"Create Level"})})]}),c.message&&e.jsx(y,{type:c.type,message:c.message,title:c.title})]})]})})})})})]})}export{T as default};
