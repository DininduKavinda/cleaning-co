import{j as i}from"./app--yM69B3u.js";import{T as n}from"./Table-4amYCKbp.js";import{d as r}from"./ItemTypeApi-C3Dme3D9.js";import"./Pagination-D30oRUvE.js";import"./floating-ui.dom-DtcZXcvp.js";import"./Api-Rb4oq7BM.js";function f({itemTypes:e,pagination:o,onPageChange:m}){const s=["Id"," Item Type","Status","Action"],a=["id","name","active"],t={show:"itemTypes.show",delete:r};return i.jsx(n,{data:e,columns:s,actions:t,columnData:a,pagination:o,onPageChange:m,onDelete:t.delete})}export{f as default};