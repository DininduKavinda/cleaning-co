import{r,j as e,a as p}from"./app-CillZM3T.js";import{A as u}from"./AuthenticatedLayout-Bd2vGtaY.js";import j from"./SearchBox-BuTDEVRg.js";import f from"./Table-Cd_L6SYp.js";import{a as v}from"./LevelApi-K1S9eHl4.js";import"./index-Cb0NI_B_.js";import"./Api-Rb4oq7BM.js";import"./Table-BsnR_G_Z.js";import"./Pagination-Dp2kQyLy.js";import"./floating-ui.dom-D73o39gD.js";function A({auth:o}){const[i,n]=r.useState([]),[l,m]=r.useState(""),[d,h]=r.useState({currentPage:1,lastPage:1,total:0,perPage:10}),c=async(a=1)=>{try{let s="";l&&(s+=`&name[like]=${l}`);const t=await v(a,s);n(t.data.data),h({currentPage:t.data.meta.current_page,lastPage:t.data.meta.last_page,total:t.data.meta.total,perPage:t.data.meta.per_page})}catch(s){console.error("There was an error fetching the level data!",s)}};r.useEffect(()=>{c()},[l]);const x=a=>{m(a)},g=a=>{c(a)};return e.jsxs(u,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Levels"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-6 col-12",children:[e.jsx("h2",{children:"Levels"}),e.jsx("p",{className:"mb-0 text-title-gray",children:"Welcome back! Let’s start from where you left."})]}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("ol",{className:"breadcrumb",children:e.jsx("li",{className:"breadcrumb-item",children:e.jsx(p,{href:"index.html",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})})})})]})})}),e.jsxs("div",{className:"col-sm-12",children:[e.jsx(j,{onSearch:x}),e.jsx(f,{levels:i,pagination:d,onPageChange:g})]})]})}export{A as default};