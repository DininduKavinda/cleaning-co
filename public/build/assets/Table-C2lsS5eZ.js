import{j as m}from"./app-XFbUVf-n.js";import{T as n}from"./Table-BEtSleuQ.js";import{d as r}from"./LevelApi-CVkI2ODK.js";import"./Pagination-CI_YWKbS.js";import"./floating-ui.dom-D73o39gD.js";import"./Api-C_e93x4I.js";function x({levels:e,pagination:t,onPageChange:s}){const a=["Id","Level Name","Actions"],l=["id","name"],o={show:"levels.show",delete:r};return console.log(e),m.jsx(n,{data:e,columns:a,actions:o,columnData:l,pagination:t,onPageChange:s,onDelete:o.delete})}export{x as default};