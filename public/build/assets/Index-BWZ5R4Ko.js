import{r as s,j as e,a as p}from"./app-BGrlIOB8.js";import{A as x}from"./AuthenticatedLayout-X6LyfNqf.js";import g from"./SearchBox-BYdpGI5q.js";import u from"./Table-pFV71YPI.js";import{g as j}from"./ItemTypeApi-_E8_M0nL.js";import"./index-Blqs8vea.js";import"./Api-_485fmwb.js";import"./Table-BqnJdb4d.js";import"./Pagination-D0f-Sv8X.js";import"./floating-ui.dom-DtcZXcvp.js";function E({auth:l}){const[o,m]=s.useState([]),[c,f]=s.useState(""),[n,d]=s.useState({currentPage:1,lastPage:1,total:0,perPage:10}),i=async(r=1)=>{try{let t="";c&&(t+=`&name[like]=${c}`);const a=await j(r,t);m(a.data.data),d({currentPage:a.data.meta.current_page,lastPage:a.data.meta.last_page,total:a.data.meta.total,perPage:a.data.meta.per_page})}catch(t){console.error("There was an error fetching the itemType data!",t)}};s.useEffect(()=>{i()},[]);const h=r=>{i(r)};return e.jsxs(x,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"ItemTypes"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-6 col-12",children:[e.jsx("h2",{children:"ItemTypes"}),e.jsx("p",{className:"mb-0 text-title-gray",children:"Welcome back! Let’s start from where you left."})]}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("ol",{className:"breadcrumb",children:e.jsx("li",{className:"breadcrumb-item",children:e.jsx(p,{href:"index.html",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})})})})]})})}),e.jsxs("div",{className:"col-sm-12",children:[e.jsx(g,{}),e.jsx(u,{itemTypes:o,pagination:n,onPageChange:h})]})]})}export{E as default};
