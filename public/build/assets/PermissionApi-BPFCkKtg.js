import{b as e}from"./app-CillZM3T.js";import{B as a,b as o}from"./Api-Rb4oq7BM.js";const t=a+"admin/permissions",m=(s,i)=>e.get(`${t}?page=${s}${i}`,o),$=s=>e.get(`${t}/${s}`,o),c=s=>e.post(t,s,o),p=(s,i)=>e.put(`${t}/${s}`,i,o),d=s=>e.delete(`${t}/${s}`,o);export{m as a,c,d,$ as g,p as u};