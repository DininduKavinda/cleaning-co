import{r as p,j as e}from"./app-XFbUVf-n.js";import{A as h}from"./AuthenticatedLayout-B9_jAqLR.js";import x from"./NavigationTabs-C2leoQUa.js";import j from"./MatterInformation-Dmn0FAw-.js";import b from"./LocationAndContact-BNOmGct-.js";import N from"./Files-B9sQJTLu.js";import f from"./Access-9tu9G8h2.js";import u from"./MatterDetails-DenWnedS.js";import"./index-DKFs-34d.js";import"./Api-C_e93x4I.js";import"./TaskDropdown-BIlbRRcW.js";import"./react-select.esm-D-AvBf3p.js";import"./floating-ui.dom-D73o39gD.js";import"./ClientApi-BM7pdcBo.js";import"./TaskApi-Bz3_CESL.js";import"./DepartmentDropdown-Dw-AC0Um.js";import"./DepartmentApi-CsHmy87l.js";import"./MatterApi-CycJfdUW.js";function H({auth:d}){const[a,l]=p.useState({name:"",getComputedStyle:"",started_at:"",task:"",department:"",chooseClient:"",description:"",otherNotes:"",matterType:"",customerName:"",customerNIC:"",customerPhone:"",country:"",province:"",district:"",city:"",address:"",areaRadius:"",fileName:"",fileNotes:"",fileStatus:"",fileUpload:null,permittedTo:"",permittedOn:"",accessNotes:""}),i=s=>{const{name:t,value:o,type:n,files:m}=s.target;l(n==="file"?r=>({...r,[t]:m[0]}):r=>({...r,[t]:o}))},c=s=>{s.preventDefault(),console.log("Form Data:",a),console.log("Latitude:",latitude),console.log("Longitude:",longitude)};return e.jsxs(h,{client:d.client,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create Client"}),children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"page-title",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6 col-12",children:e.jsx("h2",{children:"Edit Profile"})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"index.html",children:e.jsx("i",{className:"iconly-Home icli svg-color"})})}),e.jsx("li",{className:"breadcrumb-item",children:"Users"}),e.jsx("li",{className:"breadcrumb-item active",children:"Edit Profile"})]})})]})})}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header card-no-border pb-0",children:[e.jsx("h3",{children:"Shipping form"}),e.jsx("p",{className:"mt-1 mb-0",children:"Fill up your true details and next proceed."})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"row shopping-wizard",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"row shipping-form g-3",children:[e.jsx("div",{className:"col-xl-8 shipping-border",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsx(x,{})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"tab-content dark-field shipping-content",id:"cart-options-tabContent",children:[e.jsx("div",{className:"tab-pane fade show active",id:"bill-wizard",role:"tabpanel","aria-labelledby":"bill-wizard-tab",children:e.jsx(j,{formData:a,handleChange:i})}),e.jsx("div",{className:"tab-pane fade shipping-wizard",id:"ship-wizard",role:"tabpanel","aria-labelledby":"ship-wizard-tab",children:e.jsx(b,{formData:a,handleChange:i})}),e.jsx("div",{className:"tab-pane fade shipping-wizard",id:"payment-wizard",role:"tabpanel","aria-labelledby":"payment-wizard-tab",children:e.jsx(N,{formData:a,handleChange:i})}),e.jsx("div",{className:"tab-pane fade shipping-wizard finish-wizard1",id:"finish-wizard",role:"tabpanel","aria-labelledby":"finish-wizard-tab",children:e.jsx(f,{formData:a,handleChange:i,handleSubmit:c})})]})})]})}),e.jsx("div",{className:"col-xl-4",children:e.jsx(u,{formData:a})})]})})})})]})})]})}export{H as default};
