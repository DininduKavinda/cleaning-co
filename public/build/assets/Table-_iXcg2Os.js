import{j as r}from"./app--yM69B3u.js";import{T as a}from"./Table-4amYCKbp.js";import{d as m}from"./CityApi-DlKe618_.js";import"./Pagination-D30oRUvE.js";import"./floating-ui.dom-DtcZXcvp.js";import"./Api-Rb4oq7BM.js";function x({cities:e,pagination:o,onPageChange:i}){const s=["Id","District","City","Action"],n=["id","district.name_en","name_en"],t={show:"cities.show",delete:m};return r.jsx(a,{data:e,columns:s,actions:t,columnData:n,pagination:o,onPageChange:i,onDelete:t.delete})}export{x as default};