import{b as a}from"./app-XFbUVf-n.js";import{B as o,I as f,b as $}from"./Api-C_e93x4I.js";const s=o+"web/staff",S=(t,e)=>a.get(`${s}?page=${t}${e}&${f}`,$),n=t=>a.get(`${s}/${t}?${f}`,$),g=t=>a.post(`${s}`,t,HEADER2),p=(t,e)=>a.put(`${s}/${t}`,e,HEADER2),r=t=>a.delete(`${s}/${t}`,HEADER2),A=t=>a.get(`${s}?${f}&${t}`,$);export{S as a,g as c,r as d,n as g,A as s,p as u};
