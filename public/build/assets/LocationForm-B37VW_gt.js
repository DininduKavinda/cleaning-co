import{j as s}from"./app-BGrlIOB8.js";import{C as m}from"./CountryDropdown-15e23UzF.js";import{P as x}from"./ProvinceDropdown-Cd5cFD0a.js";import{D as j}from"./DistrictDropdown-DTUsm_Ju.js";import{C as h}from"./CityDropdown-CLUh7akr.js";const I=({client:o,setClient:t})=>{const{country_id:e,province_id:r,district_id:l,city_id:d}=o,c=(i,a)=>{t(n=>({...n,[i]:a}))};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"col-sm-6",children:s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Select Country"}),s.jsx(m,{countryId:e,setCountryId:i=>c("country_id",i)})]})}),s.jsx("div",{className:"col-sm-6",children:s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Select Province"}),s.jsx(x,{countryId:e,provinceId:r,setProvinceId:i=>c("province_id",i)})]})}),s.jsx("div",{className:"col-sm-6",children:s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Select District"}),s.jsx(j,{provinceId:r,districtId:l,setDistrictId:i=>c("district_id",i)})]})}),s.jsx("div",{className:"col-sm-6",children:s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Select City"}),s.jsx(h,{districtId:l,cityId:d,setCityId:i=>c("city_id",i)})]})})]})};export{I as L};
