import{r as s,j as a}from"./app-BGrlIOB8.js";import{g as p}from"./ItemTypeApi-_E8_M0nL.js";function f({value:r,onChange:n}){const[c,i]=s.useState([]),[m,o]=s.useState(!0);return s.useEffect(()=>{(async()=>{try{const t=await p();i(t.data.data),o(!1)}catch(t){console.error("Error fetching item_types:",t),o(!1)}})()},[]),a.jsxs("select",{className:"form-control",value:r,name:"item_type_id",onChange:e=>n(e.target.value),disabled:m,children:[a.jsx("option",{value:"",children:"Select ItemType"}),c.map(e=>a.jsx("option",{value:e.id,children:e.name},e.id))]})}export{f as I};
