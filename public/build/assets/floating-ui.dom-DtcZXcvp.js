const j=Math.min,H=Math.max,nt=Math.round,et=Math.floor,B=t=>({x:t,y:t}),kt={left:"right",right:"left",bottom:"top",top:"bottom"},Ft={start:"end",end:"start"};function ft(t,e,n){return H(t,j(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function $(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function At(t){return t==="x"?"y":"x"}function mt(t){return t==="y"?"height":"width"}function X(t){return["top","bottom"].includes($(t))?"y":"x"}function gt(t){return At(X(t))}function Bt(t,e,n){n===void 0&&(n=!1);const o=Z(t),i=gt(t),r=mt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ot(s)),[s,ot(s)]}function Nt(t){const e=ot(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>Ft[e])}function Wt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Mt(t,e,n,o){const i=Z(t);let r=Wt($(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(at)))),r}function ot(t){return t.replace(/left|right|bottom|top/g,e=>kt[e])}function Vt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Rt(t){return typeof t!="number"?Vt(t):{top:t,right:t,bottom:t,left:t}}function it(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function xt(t,e,n){let{reference:o,floating:i}=t;const r=X(e),s=gt(e),c=mt(s),f=$(e),l=r==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let a;switch(f){case"top":a={x:d,y:o.y-i.height};break;case"bottom":a={x:d,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(Z(e)){case"start":a[s]-=g*(n&&l?-1:1);break;case"end":a[s]+=g*(n&&l?-1:1);break}return a}const Ht=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),f=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=xt(l,o,f),g=o,a={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y,data:b,reset:v}=await p({x:d,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:a,rects:l,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(l=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=xt(l,g,f)),h=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:a}};async function Ot(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:f}=t,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:a=0}=Q(e,t),m=Rt(a),w=c[g?u==="floating"?"reference":"floating":u],p=it(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:d,strategy:f})),x=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=it(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:f}):x);return{top:(p.top-v.top+m.top)/b.y,bottom:(v.bottom-p.bottom+m.bottom)/b.y,left:(p.left-v.left+m.left)/b.x,right:(v.right-p.right+m.right)/b.x}}const $t=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:f}=e,{element:l,padding:d=0}=Q(t,e)||{};if(l==null)return{};const u=Rt(d),g={x:n,y:o},a=gt(i),m=mt(a),h=await s.getDimensions(l),w=a==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[a]-g[a]-r.floating[m],v=g[a]-r.reference[a],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let W=E?E[y]:0;(!W||!await(s.isElement==null?void 0:s.isElement(E)))&&(W=c.floating[y]||r.floating[m]);const U=b/2-v/2,M=W/2-h[m]/2-1,D=j(u[p],M),K=j(u[x],M),V=D,G=W-h[m]-K,A=W/2-h[m]/2+U,_=ft(V,A,G),P=!f.arrow&&Z(i)!=null&&A!==_&&r.reference[m]/2-(A<V?D:K)-h[m]/2<0,T=P?A<V?A-V:A-G:0;return{[a]:g[a]+T,data:{[a]:_,centerOffset:A-_-T,...P&&{alignmentOffset:T}},reset:P}}}),zt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:f,elements:l}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=Q(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const p=$(i),x=X(c),y=$(c)===c,b=await(f.isRTL==null?void 0:f.isRTL(l.floating)),v=g||(y||!h?[ot(c)]:Nt(c)),E=m!=="none";!g&&E&&v.push(...Mt(c,h,m,b));const W=[c,...v],U=await Ot(e,w),M=[];let D=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&M.push(U[p]),u){const A=Bt(i,s,b);M.push(U[A[0]],U[A[1]])}if(D=[...D,{placement:i,overflows:M}],!M.every(A=>A<=0)){var K,V;const A=(((K=r.flip)==null?void 0:K.index)||0)+1,_=W[A];if(_)return{data:{index:A,overflows:D},reset:{placement:_}};let P=(V=D.filter(T=>T.overflows[0]<=0).sort((T,k)=>T.overflows[1]-k.overflows[1])[0])==null?void 0:V.placement;if(!P)switch(a){case"bestFit":{var G;const T=(G=D.filter(k=>{if(E){const F=X(k.placement);return F===x||F==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(F=>F>0).reduce((F,Dt)=>F+Dt,0)]).sort((k,F)=>k[1]-F[1])[0])==null?void 0:G[0];T&&(P=T);break}case"initialPlacement":P=c;break}if(i!==P)return{reset:{placement:P}}}return{}}}};async function _t(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=$(n),c=Z(n),f=X(n)==="y",l=["left","top"].includes(s)?-1:1,d=r&&f?-1:1,u=Q(e,t);let{mainAxis:g,crossAxis:a,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof m=="number"&&(a=c==="end"?m*-1:m),f?{x:a*d,y:g*l}:{x:g*l,y:a*d}}const It=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,f=await _t(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+f.x,y:r+f.y,data:{...f,placement:s}}}}},jt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...f}=Q(t,e),l={x:n,y:o},d=await Ot(e,f),u=X($(i)),g=At(u);let a=l[g],m=l[u];if(r){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",x=a+d[w],y=a-d[p];a=ft(x,a,y)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=m+d[w],y=m-d[p];m=ft(x,m,y)}const h=c.fn({...e,[g]:a,[u]:m});return{...h,data:{x:h.x-n,y:h.y-o,enabled:{[g]:r,[u]:s}}}}}};function st(){return typeof window<"u"}function q(t){return Ct(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function S(t){var e;return(e=(Ct(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ct(t){return st()?t instanceof Node||t instanceof R(t).Node:!1}function O(t){return st()?t instanceof Element||t instanceof R(t).Element:!1}function L(t){return st()?t instanceof HTMLElement||t instanceof R(t).HTMLElement:!1}function yt(t){return!st()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Xt(t){return["table","td","th"].includes(q(t))}function rt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ht(t){const e=pt(),n=O(t)?C(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Yt(t){let e=N(t);for(;L(e)&&!Y(e);){if(ht(e))return e;if(rt(e))return null;e=N(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Y(t){return["html","body","#document"].includes(q(t))}function C(t){return R(t).getComputedStyle(t)}function ct(t){return O(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function N(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yt(t)&&t.host||S(t);return yt(e)?e.host:e}function Et(t){const e=N(t);return Y(e)?t.ownerDocument?t.ownerDocument.body:t.body:L(e)&&tt(e)?e:Et(e)}function J(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Et(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=R(i);if(r){const c=ut(s);return e.concat(s,s.visualViewport||[],tt(i)?i:[],c&&n?J(c):[])}return e.concat(i,J(i,[],n))}function ut(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Tt(t){const e=C(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=L(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=nt(n)!==r||nt(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function wt(t){return O(t)?t:t.contextElement}function I(t){const e=wt(t);if(!L(e))return B(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Tt(e);let s=(r?nt(n.width):n.width)/o,c=(r?nt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const qt=B(0);function Lt(t){const e=R(t);return!pt()||!e.visualViewport?qt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ut(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==R(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=wt(t);let s=B(1);e&&(o?O(o)&&(s=I(o)):s=I(t));const c=Ut(r,n,o)?Lt(r):B(0);let f=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const g=R(r),a=o&&O(o)?R(o):o;let m=g,h=ut(m);for(;h&&o&&a!==m;){const w=I(h),p=h.getBoundingClientRect(),x=C(h),y=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;f*=w.x,l*=w.y,d*=w.x,u*=w.y,f+=y,l+=b,m=R(h),h=ut(m)}}return it({width:d,height:u,x:f,y:l})}function Kt(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=S(o),c=e?rt(e.floating):!1;if(o===s||c&&r)return n;let f={scrollLeft:0,scrollTop:0},l=B(1);const d=B(0),u=L(o);if((u||!u&&!r)&&((q(o)!=="body"||tt(s))&&(f=ct(o)),L(o))){const g=z(o);l=I(o),d.x=g.x+o.clientLeft,d.y=g.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-f.scrollLeft*l.x+d.x,y:n.y*l.y-f.scrollTop*l.y+d.y}}function Gt(t){return Array.from(t.getClientRects())}function dt(t,e){const n=ct(t).scrollLeft;return e?e.left+n:z(S(t)).left+n}function Jt(t){const e=S(t),n=ct(t),o=t.ownerDocument.body,i=H(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=H(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+dt(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(s+=H(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function Qt(t,e){const n=R(t),o=S(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,f=0;if(i){r=i.width,s=i.height;const l=pt();(!l||l&&e==="fixed")&&(c=i.offsetLeft,f=i.offsetTop)}return{width:r,height:s,x:c,y:f}}function Zt(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=L(t)?I(t):B(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,f=i*r.x,l=o*r.y;return{width:s,height:c,x:f,y:l}}function vt(t,e,n){let o;if(e==="viewport")o=Qt(t,n);else if(e==="document")o=Jt(S(t));else if(O(e))o=Zt(e,n);else{const i=Lt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return it(o)}function St(t,e){const n=N(t);return n===e||!O(n)||Y(n)?!1:C(n).position==="fixed"||St(n,e)}function te(t,e){const n=e.get(t);if(n)return n;let o=J(t,[],!1).filter(c=>O(c)&&q(c)!=="body"),i=null;const r=C(t).position==="fixed";let s=r?N(t):t;for(;O(s)&&!Y(s);){const c=C(s),f=ht(s);!f&&c.position==="fixed"&&(i=null),(r?!f&&!i:!f&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(s)&&!f&&St(t,s))?o=o.filter(d=>d!==s):i=c,s=N(s)}return e.set(t,o),o}function ee(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?rt(e)?[]:te(e,this._c):[].concat(n),o],c=s[0],f=s.reduce((l,d)=>{const u=vt(e,d,i);return l.top=H(u.top,l.top),l.right=j(u.right,l.right),l.bottom=j(u.bottom,l.bottom),l.left=H(u.left,l.left),l},vt(e,c,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function ne(t){const{width:e,height:n}=Tt(t);return{width:e,height:n}}function oe(t,e,n){const o=L(e),i=S(e),r=n==="fixed",s=z(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const f=B(0);if(o||!o&&!r)if((q(e)!=="body"||tt(i))&&(c=ct(e)),o){const a=z(e,!0,r,e);f.x=a.x+e.clientLeft,f.y=a.y+e.clientTop}else i&&(f.x=dt(i));let l=0,d=0;if(i&&!o&&!r){const a=i.getBoundingClientRect();d=a.top+c.scrollTop,l=a.left+c.scrollLeft-dt(i,a)}const u=s.left+c.scrollLeft-f.x-l,g=s.top+c.scrollTop-f.y-d;return{x:u,y:g,width:s.width,height:s.height}}function lt(t){return C(t).position==="static"}function bt(t,e){if(!L(t)||C(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return S(t)===n&&(n=n.ownerDocument.body),n}function Pt(t,e){const n=R(t);if(rt(t))return n;if(!L(t)){let i=N(t);for(;i&&!Y(i);){if(O(i)&&!lt(i))return i;i=N(i)}return n}let o=bt(t,e);for(;o&&Xt(o)&&lt(o);)o=bt(o,e);return o&&Y(o)&&lt(o)&&!ht(o)?n:o||Yt(t)||n}const ie=async function(t){const e=this.getOffsetParent||Pt,n=this.getDimensions,o=await n(t.floating);return{reference:oe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function se(t){return C(t).direction==="rtl"}const re={convertOffsetParentRelativeRectToViewportRelativeRect:Kt,getDocumentElement:S,getClippingRect:ee,getOffsetParent:Pt,getElementRects:ie,getClientRects:Gt,getDimensions:ne,getScale:I,isElement:O,isRTL:se};function ce(t,e){let n=null,o;const i=S(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,f){c===void 0&&(c=!1),f===void 0&&(f=1),r();const{left:l,top:d,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const a=et(d),m=et(i.clientWidth-(l+u)),h=et(i.clientHeight-(d+g)),w=et(l),x={rootMargin:-a+"px "+-m+"px "+-h+"px "+-w+"px",threshold:H(0,j(1,f))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==f){if(!y)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return s(!0),r}function le(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:f=!1}=o,l=wt(t),d=i||r?[...l?J(l):[],...J(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const u=l&&c?ce(l,n):null;let g=-1,a=null;s&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===l&&a&&(a.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),n()}),l&&!f&&a.observe(l),a.observe(e));let m,h=f?z(t):null;f&&w();function w(){const p=z(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,m=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(x=>{i&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,f&&cancelAnimationFrame(m)}}const fe=It,ae=jt,ue=zt,de=$t,me=(t,e,n)=>{const o=new Map,i={platform:re,...n},r={...i.platform,_c:o};return Ht(t,e,{...i,platform:r})};export{le as a,de as b,me as c,ue as f,fe as o,ae as s};
