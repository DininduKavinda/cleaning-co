import{r as s,j as e,a as g}from"./app-BGrlIOB8.js";import{A as u}from"./AuthenticatedLayout-X6LyfNqf.js";import j from"./SearchBox-voVE5ffa.js";import f from"./Table-D8ahkclD.js";import{a as N}from"./DepartmentApi-DCyNUoyd.js";import"./index-Blqs8vea.js";import"./Api-_485fmwb.js";import"./Table-BqnJdb4d.js";import"./Pagination-D0f-Sv8X.js";import"./floating-ui.dom-DtcZXcvp.js";function A({auth:l}){const[o,i]=s.useState([]),[c,m]=s.useState(""),[d,h]=s.useState({currentPage:1,lastPage:1,total:0,perPage:10}),n=async(a=1)=>{try{let r="";c&&(r+=`&name[like]=${c}`);const t=await N(a,r);i(t.data.data),h({currentPage:t.data.meta.current_page,lastPage:t.data.meta.last_page,total:t.data.meta.total,perPage:t.data.meta.per_page})}catch(r){console.error("There was an error fetching the department data!",r)}};s.useEffect(()=>{n()},[c]);const p=a=>{m(a)},x=a=>{n(a)};return e.jsxs(u,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Departments"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-6 col-12",children:[e.jsx("h2",{children:"Departments"}),e.jsx("p",{className:"mb-0 text-title-gray",children:"Welcome back! Let’s start from where you left."})]}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("ol",{className:"breadcrumb",children:e.jsx("li",{className:"breadcrumb-item",children:e.jsx(g,{href:"index.html",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})})})})]})})}),e.jsxs("div",{className:"col-sm-12",children:[e.jsx(j,{onSearch:p}),e.jsx(f,{departments:o,pagination:d,onPageChange:x})]})]})}export{A as default};
