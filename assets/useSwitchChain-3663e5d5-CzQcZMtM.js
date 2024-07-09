import{cb as C,b as i,ae as f,cc as v,a7 as h,f as g,c5 as m,l as E,a as q,c6 as w,c7 as y,h as _,cd as K,ce as S,cf as A,cg as x,p as D}from"./index-COQjmB9B.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="ceb54296-8585-487c-8b22-6256d6cd4978",n._sentryDebugIdIdentifier="sentry-dbid-ceb54296-8585-487c-8b22-6256d6cd4978")}catch{}})();class F extends C{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}async function j(n,t){var e;let c;if(typeof t.connector=="function"?c=n._internal.connectors.setup(t.connector):c=t.connector,c.uid===n.state.current)throw new _;try{n.setState(a=>({...a,status:"connecting"})),c.emitter.emit("message",{type:"connecting"});const o=await c.connect({chainId:t.chainId}),s=o.accounts;return c.emitter.off("connect",n._internal.events.connect),c.emitter.on("change",n._internal.events.change),c.emitter.on("disconnect",n._internal.events.disconnect),await((e=n.storage)==null?void 0:e.setItem("recentConnectorId",c.id)),n.setState(a=>({...a,connections:new Map(a.connections).set(c.uid,{accounts:s,chainId:o.chainId,connector:c}),current:c.uid,status:"connected"})),{accounts:s,chainId:o.chainId}}catch(o){throw n.setState(s=>({...s,status:s.current?"connected":"disconnected"})),o}}let d=[];function l(n){const t=n.connectors;return q(d,t)?d:(d=t,t)}function M(n,t){const{chainId:e,...c}=t,o=n.getClient({chainId:e});return y(o,K,"getEnsAvatar")(c)}function P(n,t){const{chainId:e,...c}=t,o=n.getClient({chainId:e});return y(o,S,"getEnsName")(c)}async function $(n,t){const{account:e,connector:c,...o}=t;let s;return typeof e=="object"&&e.type==="local"?s=n.getClient():s=await A(n,{account:e,connector:c}),y(s,x,"signMessage")({...o,...e?{account:e}:{}})}async function B(n,t){var e;const{addEthereumChainParameter:c,chainId:o}=t,s=n.state.connections.get(((e=t.connector)==null?void 0:e.uid)??n.state.current);if(s){const r=s.connector;if(!r.switchChain)throw new F({connector:r});return await r.switchChain({addEthereumChainParameter:c,chainId:o})}const a=n.chains.find(r=>r.id===o);if(!a)throw new D;return n.setState(r=>({...r,chainId:o})),a}function N(n,t){const{onChange:e}=t;return n._internal.connectors.subscribe((c,o)=>{e(Object.values(c),o)})}function Q(n={}){const{onConnect:t,onDisconnect:e}=n,c=i(n);f.useEffect(()=>v(c,{onChange(o,s){if((s.status==="reconnecting"||s.status==="connecting"&&s.address===void 0)&&o.status==="connected"){const{address:a,addresses:r,chain:u,chainId:b,connector:I}=o,p=s.status==="reconnecting"||s.status===void 0;t?.({address:a,addresses:r,chain:u,chainId:b,connector:I,isReconnected:p})}else s.status==="connected"&&o.status==="disconnected"&&e?.()}}),[c,t,e])}function X(n){return{mutationFn(t){return j(n,t)},mutationKey:["connect"]}}function k(n,t={}){return{async queryFn({queryKey:e}){const{name:c,scopeKey:o,...s}=e[1];if(!c)throw new Error("name is required");return M(n,{...s,name:c})},queryKey:H(t)}}function H(n={}){return["ensAvatar",w(n)]}function O(n,t={}){return{async queryFn({queryKey:e}){const{address:c,scopeKey:o,...s}=e[1];if(!c)throw new Error("address is required");return P(n,{...s,address:c})},queryKey:R(t)}}function R(n={}){return["ensName",w(n)]}function z(n){return{mutationFn(t){return $(n,t)},mutationKey:["signMessage"]}}function G(n){return{mutationFn(t){return B(n,t)},mutationKey:["switchChain"]}}function J(n={}){const t=i(n);return f.useSyncExternalStore(e=>N(t,{onChange:e}),()=>l(t),()=>l(t))}function T(n={}){const{mutation:t}=n,e=i(n),c=X(e),{mutate:o,mutateAsync:s,...a}=h({...t,...c});return f.useEffect(()=>e.subscribe(({status:r})=>r,(r,u)=>{u==="connected"&&r==="disconnected"&&a.reset()}),[e,a]),{...a,connect:o,connectAsync:s,connectors:J({config:e})}}function U(n={}){const{name:t,query:e={}}=n,c=i(n),o=g({config:c}),s=k(c,{...n,chainId:n.chainId??o}),a=!!(t&&(e.enabled??!0));return m({...e,...s,enabled:a})}function V(n={}){const{address:t,query:e={}}=n,c=i(n),o=g({config:c}),s=O(c,{...n,chainId:n.chainId??o}),a=!!(t&&(e.enabled??!0));return m({...e,...s,enabled:a})}function W(n={}){const{mutation:t}=n,e=i(n),c=z(e),{mutate:o,mutateAsync:s,...a}=h({...t,...c});return{...a,signMessage:o,signMessageAsync:s}}function Y(n={}){const{mutation:t}=n,e=i(n),c=G(e),{mutate:o,mutateAsync:s,...a}=h({...t,...c});return{...a,chains:E({config:e}),switchChain:o,switchChainAsync:s}}export{J as L,Q as U,T as V,U as W,V as X,W as Y,Y as Z,F as _};
//# sourceMappingURL=useSwitchChain-3663e5d5-CzQcZMtM.js.map