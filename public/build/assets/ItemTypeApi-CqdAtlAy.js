import{b as t}from"./app-XFbUVf-n.js";import{B as m,b as s,I as p}from"./Api-C_e93x4I.js";const o=m+"common/itemTypes",n=(e,a)=>t.get(`${o}?page=${e}${a}&${p}`,s),I=e=>t.get(`${o}/${e}?${p}`,s),y=e=>t.post(o,e,s),T=(e,a)=>t.put(`${o}/${e}`,a,s),d=e=>t.delete(`${o}/${e}`,s);export{I as a,y as c,d,n as g,T as u};
