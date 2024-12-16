import{r as N,j as e,a as f}from"./app-XFbUVf-n.js";import{L as g}from"./LevelDropdown-Bdkh_wyx.js";import{C as y}from"./CountryDropdown-CkkQMrRa.js";import{P as C}from"./ProvinceDropdown-NYxF2Z74.js";import{D as k}from"./DistrictDropdown-F3L7rF4X.js";import{C as D}from"./CityDropdown-DoJhk-CF.js";import{D as w}from"./DepartmentDropdown-Dw-AC0Um.js";import"./LevelApi-CVkI2ODK.js";import"./Api-C_e93x4I.js";import"./react-select.esm-D-AvBf3p.js";import"./floating-ui.dom-D73o39gD.js";import"./CountryApi-DkXjArS7.js";import"./ProvinceApi-Cu3ZTS5d.js";import"./DistrictApi-DqsiEqkn.js";import"./DepartmentApi-CsHmy87l.js";function H({onLevelSearch:s,onCountrySearch:c,onProvinceSearch:r,onDistrictSearch:n,onCitySearch:o,onDepartmentSearch:d,onNicSearch:m,onInitialSearch:h,onFullNameSearch:p,onDobSearch:v,onMobileSearch:x,onCivilStatusSearch:b,onActiveSearch:j}){const[i,u]=N.useState({level_id:"",country_id:null,province_id:null,district_id:null,city_id:null,department_id:"",nic:"",initial:"",full_name:"",dob:"",mobile:"",civil_status:"",active:""}),t=(a,l)=>{switch(u(_=>({..._,[a]:l})),a){case"level_id":s(l);break;case"country_id":c(l);break;case"province_id":r(l);break;case"district_id":n(l);break;case"city_id":o(l);break;case"department_id":d(l);break;case"nic":m(l);break;case"initial":h(l);break;case"full_name":p(l);break;case"dob":v(l);break;case"mobile":x(l);break;case"civil_status":b(l);break;case"active":j(l);break}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-md-12 project-list",children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("ul",{className:"nav nav-tabs border-tab",id:"top-tab",role:"tablist",children:[e.jsx("li",{className:"nav-item",children:e.jsxs("a",{className:`nav-link ${i.active===""?"active":""}`,id:"top-home-tab","data-bs-toggle":"tab",href:"#top-home",role:"tab","aria-controls":"top-home","aria-selected":i.active==="",onClick:()=>t("active",""),children:[e.jsx("i",{"data-feather":"target"}),"All"]})}),e.jsx("li",{className:"nav-item",children:e.jsxs("a",{className:`nav-link ${i.active==="1"?"active":""}`,id:"profile-top-tab","data-bs-toggle":"tab",href:"#top-profile",role:"tab","aria-controls":"top-profile","aria-selected":i.active==="1",onClick:()=>t("active","1"),children:[e.jsx("i",{"data-feather":"info"}),"Active"]})}),e.jsx("li",{className:"nav-item",children:e.jsxs("a",{className:`nav-link ${i.active==="0"?"active":""}`,id:"contact-top-tab","data-bs-toggle":"tab",href:"#top-contact",role:"tab","aria-controls":"top-contact","aria-selected":i.active==="0",onClick:()=>t("active","0"),children:[e.jsx("i",{"data-feather":"check-circle"}),"Inactive"]})})]})}),e.jsx("div",{className:"col-md-6 d-md-block d-none",children:e.jsxs(f,{className:"btn btn-primary d-flex align-items-center",href:route("staff.create"),children:[" ",e.jsx("i",{"data-feather":"plus-square"}),"Create New"," "]})})]}),e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"Level"}),e.jsx(g,{value:i.level_id,onChange:a=>t("level_id",a)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"NIC"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by NIC...",value:i.nic,onChange:a=>t("nic",a.target.value)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"Initial"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by initial...",value:i.initial,onChange:a=>t("initial",a.target.value)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by full name...",value:i.full_name,onChange:a=>t("full_name",a.target.value)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"DOB"}),e.jsx("input",{type:"date",className:"form-control",value:i.dob,onChange:a=>t("dob",a.target.value)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"Mobile"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by mobile...",value:i.mobile,onChange:a=>t("mobile",a.target.value)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"Civil Status"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by civil status...",value:i.civil_status,onChange:a=>t("civil_status",a.target.value)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"Country"}),e.jsx(y,{value:i.country_id,onChange:a=>t("country_id",a)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"Province"}),e.jsx(C,{country_id:i.country_id,value:i.province_id,onChange:a=>t("province_id",a)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"District"}),e.jsx(k,{province_id:i.province_id,value:i.district_id,onChange:a=>t("district_id",a)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"City"}),e.jsx(D,{district_id:i.district_id,value:i.city_id,onChange:a=>t("city_id",a)})]}),e.jsxs("div",{className:"col-md-3 mt-3",children:[e.jsx("label",{children:"Department"}),e.jsx(w,{value:i.department_id,onChange:a=>t("department_id",a)})]})]})})]})})})}export{H as default};
