import{b as e}from"./app-XFbUVf-n.js";import{B as p,I as n,b as a}from"./Api-C_e93x4I.js";const s=p+"common/departments",$=(t,o)=>e.get(`${s}?page=${t}${o}&${n}`,a),c=t=>e.get(`${s}/${t}?${n}`,a),d=t=>e.post(s,t,a),D=(t,o)=>e.put(`${s}/${t}`,o,a),g=t=>e.delete(`${s}/${t}`,a);export{$ as a,d as c,g as d,c as g,D as u};
