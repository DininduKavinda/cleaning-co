import{b as s}from"./app-CillZM3T.js";import{B as o,I as a,b as c}from"./Api-Rb4oq7BM.js";const e=o+"location/districts",n=(t,i)=>s.get(`${e}?page=${t}${i}&${a}`,c),D=t=>s.get(`${e}/${t}?${a}`,c),d=t=>s.post(e,t,c),g=(t,i)=>s.put(`${e}/${t}`,i,c),p=t=>s.delete(`${e}/${t}`,c),l=t=>s.get(`${e}?${a}`,{params:t},c);export{n as a,d as c,p as d,D as g,l as s,g as u};