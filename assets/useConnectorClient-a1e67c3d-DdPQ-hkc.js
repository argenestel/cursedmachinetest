import{b as g,a9 as q,k as K,f as I,ae as d,c5 as p,cf as v,c6 as m}from"./index-COQjmB9B.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="73b85771-a806-47e7-ae3a-f6b2fe14e6e1",e._sentryDebugIdIdentifier="sentry-dbid-73b85771-a806-47e7-ae3a-f6b2fe14e6e1")}catch{}})();function w(e,n={}){return{gcTime:0,async queryFn({queryKey:r}){const{connector:t}=n,{connectorUid:o,scopeKey:c,...s}=r[1];return v(e,{...s,connector:t})},queryKey:x(n)}}function x(e={}){const{connector:n,...r}=e;return["connectorClient",{...m(r),connectorUid:n?.uid}]}function _(e={}){const{query:n={},...r}=e,t=g(r),o=q(),{address:c,connector:s,status:f}=K({config:t}),y=I({config:t}),{queryKey:u,...b}=w(t,{...e,chainId:e.chainId??y,connector:e.connector??s}),l=!!(f!=="disconnected"&&(n.enabled??!0)),a=d.useRef(c);return d.useEffect(()=>{const i=a.current;!c&&i?(o.removeQueries({queryKey:u}),a.current=void 0):c!==i&&(o.invalidateQueries({queryKey:u}),a.current=c)},[c,o]),p({...n,...b,queryKey:u,enabled:l,staleTime:1/0})}export{_ as b};
//# sourceMappingURL=useConnectorClient-a1e67c3d-DdPQ-hkc.js.map