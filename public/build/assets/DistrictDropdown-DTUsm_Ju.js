import{r as s,j as m}from"./app-BGrlIOB8.js";import{S as d}from"./react-select.esm-DzUBhU4r.js";import{s as g}from"./DistrictApi-B-Mbc2sZ.js";const C=({provinceId:t,setDistrictId:c})=>{const[l,a]=s.useState([]),[p,n]=s.useState(!1);s.useEffect(()=>{t?r(""):a([])},[t]);const r=async e=>{n(!0);try{const f=(await g({"name_en[like]":e,"province_id[eq]":t})).data.data.map(i=>({value:i.id,label:i.name_en}));a(f)}catch(o){console.error("Error fetching districts:",o)}finally{n(!1)}},u=e=>{r(e)},h=e=>{c(e?e.value:null)};return m.jsx(d,{placeholder:"Select District",isLoading:p,onInputChange:u,options:l,onChange:h,isClearable:!0,cacheOptions:!0})};export{C as D};
