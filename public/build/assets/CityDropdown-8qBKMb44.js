import{r as a,b as g,j as m}from"./app--yM69B3u.js";import{S as C}from"./react-select.esm-gHH6TMdO.js";const S=({districtId:t,setCityId:c})=>{const[l,s]=a.useState([]),[p,n]=a.useState(!1);a.useEffect(()=>{t?o(""):s([])},[t]);const o=async e=>{n(!0);try{const f=(await g.get("http://16.171.64.154/api/location/cities",{params:{"name_en[like]":e,"district_id[eq]":t}})).data.data.map(i=>({value:i.id,label:i.name_en}));s(f)}catch(r){console.error("Error fetching cities:",r)}finally{n(!1)}},u=e=>{o(e)},h=e=>{c(e?e.value:null)};return m.jsx(C,{placeholder:"Select City",isLoading:p,onInputChange:u,options:l,onChange:h,isClearable:!0,cacheOptions:!0})};export{S as C};
