import{j as n}from"./app--yM69B3u.js";import{T as r}from"./Table-4amYCKbp.js";import{d as i}from"./TaskApi-D4YgcytR.js";import"./Pagination-D30oRUvE.js";import"./floating-ui.dom-DtcZXcvp.js";import"./Api-Rb4oq7BM.js";function f({tasks:o,pagination:s,onPageChange:e}){const a=["Id","Task","Status","Action"],m=["id","name","active"],t={show:"tasks.show",delete:i};return n.jsx(r,{data:o,columns:a,actions:t,columnData:m,pagination:s,onPageChange:e,onDelete:t.delete})}export{f as default};