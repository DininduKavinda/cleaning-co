import{r as d,j as e,a as m}from"./app-BGrlIOB8.js";function i({onSearch:a}){const[l,r]=d.useState(""),c=t=>{const s=t.target.value;r(s),a(s)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-md-12 project-list",children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6"}),e.jsxs("div",{className:"col-md-6 d-md-block d-none",children:[e.jsx("div",{className:"form-group mb-0 me-0"}),e.jsxs(m,{className:"btn btn-primary d-flex align-items-center",href:route("levels.create"),children:[" ",e.jsx("i",{"data-feather":"plus-square"}),"Create New"," "]})]})]}),e.jsx("div",{className:"mb-4",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Name"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:l,onChange:c})]})})})]})})})}export{i as default};
