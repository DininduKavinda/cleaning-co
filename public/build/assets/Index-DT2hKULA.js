import{r,j as e,a as p}from"./app-XFbUVf-n.js";import{A as u}from"./AuthenticatedLayout-B9_jAqLR.js";import j from"./SearchBox-CoIepptD.js";import f from"./Table-EClEXFYH.js";import{a as T}from"./TimecardTaskApi-BRnlj0Zv.js";import"./index-DKFs-34d.js";import"./Api-C_e93x4I.js";import"./Table-BEtSleuQ.js";import"./Pagination-CI_YWKbS.js";import"./floating-ui.dom-D73o39gD.js";function A({auth:l}){const[o,m]=r.useState([]),[c,n]=r.useState(""),[d,h]=r.useState({currentPage:1,lastPage:1,total:0,perPage:10}),i=async(a=1)=>{try{let t="";c&&(t+=`&name[like]=${c}`);const s=await T(a,t);m(s.data.data),h({currentPage:s.data.meta.current_page,lastPage:s.data.meta.last_page,total:s.data.meta.total,perPage:s.data.meta.per_page})}catch(t){console.error("There was an error fetching the timecardTask data!",t)}};r.useEffect(()=>{i()},[c]);const x=a=>{n(a)},g=a=>{i(a)};return e.jsxs(u,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"TimecardTasks"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-6 col-12",children:[e.jsx("h2",{children:"TimecardTasks"}),e.jsx("p",{className:"mb-0 text-title-gray",children:"Welcome back! Let’s start from where you left."})]}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("ol",{className:"breadcrumb",children:e.jsx("li",{className:"breadcrumb-item",children:e.jsx(p,{href:"index.html",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})})})})]})})}),e.jsxs("div",{className:"col-sm-12",children:[e.jsx(j,{onSearch:x}),e.jsx(f,{timecardTasks:o,pagination:d,onPageChange:g})]})]})}export{A as default};