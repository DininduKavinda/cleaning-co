import{b as s}from"./app-XFbUVf-n.js";import{B as c,b as e,I as i}from"./Api-C_e93x4I.js";const a=c+"location/cities",p=(t,o)=>s.get(`${a}?page=${t}${o}&${i}`,e),d=t=>s.get(`${a}/${t}?${i}`,e),g=t=>s.post(a,t,e),l=(t,o)=>s.put(`${a}/${t}`,o,e),r=t=>s.delete(`${a}/${t}`,e);export{p as a,g as c,r as d,d as g,l as u};
