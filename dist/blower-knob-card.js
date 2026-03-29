var dt=Object.defineProperty;var Vt=Object.getOwnPropertyDescriptor;var Ft=(r,t,e)=>t in r?dt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var A=(r,t,e,s)=>{for(var i=s>1?void 0:s?Vt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&dt(t,e,i),i};var w=(r,t,e)=>Ft(r,typeof t!="symbol"?t+"":t,e);var V=globalThis,F=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),pt=new WeakMap,O=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(F&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&pt.set(e,t))}return t}toString(){return this.cssText}},ut=r=>new O(typeof r=="string"?r:r+"",void 0,X),J=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new O(e,r,X)},mt=(r,t)=>{if(F)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=V.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Z=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ut(e)})(r):r;var{is:Wt,defineProperty:Kt,getOwnPropertyDescriptor:Yt,getOwnPropertyNames:Xt,getOwnPropertySymbols:Jt,getPrototypeOf:Zt}=Object,b=globalThis,ft=b.trustedTypes,Gt=ft?ft.emptyScript:"",G=b.reactiveElementPolyfillSupport,R=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?Gt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},W=(r,t)=>!Wt(r,t),_t={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:W},gt,vt;(gt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(vt=b.litPropertyMetadata)!=null||(b.litPropertyMetadata=new WeakMap);var v=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Kt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){var n;let{get:i,set:o}=(n=Yt(this.prototype,t))!=null?n:{get(){return this[e]},set(c){this[e]=c}};return{get:i,set(c){let a=i==null?void 0:i.call(this);o==null||o.call(this,c),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:_t}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let e=this.properties,s=[...Xt(e),...Jt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o,n,c;let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let a=s.getPropertyOptions(i),h=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:N;this._$Em=i;let l=h.fromAttribute(e,a.type);this[i]=(c=l!=null?l:(n=this._$Ej)==null?void 0:n.get(i))!=null?c:l,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){var n,c;if(t!==void 0){let a=this.constructor;if(i===!1&&(o=this[t]),s!=null||(s=a.getPropertyOptions(t)),!(((n=s.hasChanged)!=null?n:W)(o,e)||s.useDefault&&s.reflect&&o===((c=this._$Ej)==null?void 0:c.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){var c,a,h;s&&!((c=this._$Ej)!=null?c:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(a=n!=null?n:e)!=null?a:this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&((h=this._$Eq)!=null?h:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,c]of this._$Ep)this[n]=c;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,c]of o){let{wrapped:a}=c,h=this[n];a!==!0||this._$AL.has(n)||h===void 0||this.C(n,void 0,c,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}},$t;v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[R("elementProperties")]=new Map,v[R("finalized")]=new Map,G==null||G({ReactiveElement:v}),(($t=b.reactiveElementVersions)!=null?$t:b.reactiveElementVersions=[]).push("2.1.2");var L=globalThis,bt=r=>r,K=L.trustedTypes,yt=K?K.createPolicy("lit-html",{createHTML:r=>r}):void 0,Pt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+y,Qt=`<${Ut}>`,C=document,j=()=>C.createComment(""),z=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,te=r=>ot(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,At=/>/g,E=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,Et=/"/g,kt=/^(?:script|style|textarea|title)$/i,at=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=at(1),pe=at(2),ue=at(3),P=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),St=new WeakMap,S=C.createTreeWalker(C,129);function Mt(r,t){if(!ot(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}var ee=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=D;for(let c=0;c<e;c++){let a=r[c],h,l,d=-1,m=0;for(;m<a.length&&(n.lastIndex=m,l=n.exec(a),l!==null);)m=n.lastIndex,n===D?l[1]==="!--"?n=xt:l[1]!==void 0?n=At:l[2]!==void 0?(kt.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=E):l[3]!==void 0&&(n=E):n===E?l[0]===">"?(n=i!=null?i:D,d=-1):l[1]===void 0?d=-2:(d=n.lastIndex-l[2].length,h=l[1],n=l[3]===void 0?E:l[3]==='"'?Et:wt):n===Et||n===wt?n=E:n===xt||n===At?n=D:(n=E,i=void 0);let u=n===E&&r[c+1].startsWith("/>")?" ":"";o+=n===D?a+Qt:d>=0?(s.push(h),a.slice(0,d)+Pt+a.slice(d)+y+u):a+y+(d===-2?c:u)}return[Mt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},q=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,c=t.length-1,a=this.parts,[h,l]=ee(t,e);if(this.el=r.createElement(h,s),S.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=S.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(Pt)){let m=l[n++],u=i.getAttribute(d).split(y),f=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:f[2],strings:u,ctor:f[1]==="."?st:f[1]==="?"?it:f[1]==="@"?rt:M}),i.removeAttribute(d)}else d.startsWith(y)&&(a.push({type:6,index:o}),i.removeAttribute(d));if(kt.test(i.tagName)){let d=i.textContent.split(y),m=d.length-1;if(m>0){i.textContent=K?K.emptyScript:"";for(let u=0;u<m;u++)i.append(d[u],j()),S.nextNode(),a.push({type:2,index:++o});i.append(d[m],j())}}}else if(i.nodeType===8)if(i.data===Ut)a.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(y,d+1))!==-1;)a.push({type:7,index:o}),d+=y.length-1}o++}}static createElement(t,e){let s=C.createElement("template");return s.innerHTML=t,s}};function k(r,t,e=r,s){var n,c,a;if(t===P)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl,o=z(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?((a=e._$Co)!=null?a:e._$Co=[])[s]=i:e._$Cl=i),i!==void 0&&(t=k(r,i._$AS(r,t.values),i,s)),t}var et=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var h;let{el:{content:e},parts:s}=this._$AD,i=((h=t==null?void 0:t.creationScope)!=null?h:C).importNode(e,!0);S.currentNode=i;let o=S.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new B(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new nt(o,this,t)),this._$AV.push(l),a=s[++c]}n!==(a==null?void 0:a.index)&&(o=S.nextNode(),n++)}return S.currentNode=C,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},B=class r{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(o=i==null?void 0:i.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),z(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):te(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var o;let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=q.createElement(Mt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{let n=new et(i,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new q(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(j()),this.O(j()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){let i=bt(t).nextSibling;bt(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},M=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=k(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{let c=t,a,h;for(t=o[0],a=0;a<o.length-1;a++)h=k(this,c[s+a],e,a),h===P&&(h=this._$AH[a]),n||(n=!z(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h!=null?h:"")+o[a+1]),this._$AH[a]=h}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},st=class extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},it=class extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},rt=class extends M{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var n;if((t=(n=k(this,t,e,0))!=null?n:p)===P)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};var tt=L.litHtmlPolyfillSupport,Ct;tt==null||tt(q,B),((Ct=L.litHtmlVersions)!=null?Ct:L.litHtmlVersions=[]).push("3.3.2");var Tt=(r,t,e)=>{var o,n;let s=(o=e==null?void 0:e.renderBefore)!=null?o:t,i=s._$litPart$;if(i===void 0){let c=(n=e==null?void 0:e.renderBefore)!=null?n:null;s._$litPart$=i=new B(t.insertBefore(j(),c),c,void 0,e!=null?e:{})}return i._$AI(r),i};var U=globalThis,x=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}},Ht;x._$litElement$=!0,x.finalized=!0,(Ht=U.litElementHydrateSupport)==null||Ht.call(U,{LitElement:x});var ct=U.litElementPolyfillSupport;ct==null||ct({LitElement:x});var Ot;((Ot=U.litElementVersions)!=null?Ot:U.litElementVersions=[]).push("4.2.2");var Rt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var se={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:W},ie=(r=se,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,r,!0,c)},init(c){return c!==void 0&&this.C(n,void 0,r,c),c}}}if(s==="setter"){let{name:n}=e;return function(c){let a=this[n];t.call(this,c),this.requestUpdate(n,a,r,!0,c)}}throw Error("Unsupported decorator location: "+s)};function Nt(r){return(t,e)=>typeof e=="object"?ie(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}function T(r){return Nt({...r,state:!0,attribute:!1})}var Dt=J`
  :host {
    --accent: var(--blower-knob-accent, var(--primary-color, #3d7bfd));
    --track: var(--blower-knob-track, rgba(0, 0, 0, 0.12));
    --bg: var(--ha-card-background, var(--card-background-color, #1e1e1e));
    --text: var(--primary-text-color, #e5e5e5);
    --muted: var(--secondary-text-color, rgba(229, 229, 229, 0.7));
    --shadow: var(--ha-card-box-shadow, 0 8px 24px rgba(0, 0, 0, 0.25));
    display: block;
  }

  ha-card {
    background: var(--bg);
    color: var(--text);
    box-shadow: var(--shadow);
    border-radius: 16px;
    padding: 16px;
    box-sizing: border-box;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .header ha-icon {
    color: var(--accent);
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .name {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2;
  }

  .state {
    font-size: 0.85rem;
    color: var(--muted);
  }

  .knob {
    position: relative;
    width: 220px;
    height: 220px;
    margin: 0 auto;
    display: grid;
    place-items: center;
  }

  .dial {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background:
      conic-gradient(
        var(--accent) 0deg,
        var(--accent) var(--progress, 0deg),
        var(--track) var(--progress, 0deg)
      );
    display: grid;
    place-items: center;
    transition: background 120ms ease-out;
  }

  .dial::after {
    content: "";
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08), transparent 45%),
      var(--ha-card-background, rgba(0, 0, 0, 0.35));
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  }

  .value {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .value .current {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .value .unit {
    font-size: 0.95rem;
    color: var(--muted);
  }

  .controls {
    margin-top: 14px;
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.08);
    color: var(--text);
    font-size: 0.95rem;
    cursor: pointer;
    user-select: none;
    transition: transform 120ms ease, background 120ms ease;
  }

  .pill:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.06);
  }

  .pill ha-icon {
    color: var(--accent);
  }

  .row {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
  }

  button {
    background: var(--accent);
    color: #fff;
    border: none;
    padding: 10px 14px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    min-width: 46px;
    transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
  }

  button.secondary {
    background: rgba(255, 255, 255, 0.07);
    color: var(--text);
    box-shadow: none;
  }

  .unavailable {
    text-align: center;
    padding: 8px 0;
    color: #ffb3b3;
  }

  @media (max-width: 480px) {
    .knob {
      width: 180px;
      height: 180px;
    }
    .value .current {
      font-size: 2rem;
    }
  }
`;var re=0,ne=100,oe=1;function Lt(r){if(!r.entity)throw new Error("You need to define an entity.")}function jt(r,t){if(r.entity_type)return r.entity_type;if(t){let[e]=t.entity_id.split(".");if(e==="fan"||e==="number"||e==="input_number")return e}return"fan"}function $(r){if(r===void 0)return;let t=Number(r);return Number.isFinite(t)?t:void 0}function I(r,t,e){return Math.min(Math.max(r,t),e)}function H(r,t,e){var n,c,a,h,l,d,m,u,f;let s=(a=(c=$(e.min))!=null?c:$((n=r==null?void 0:r.attributes)==null?void 0:n.min))!=null?a:re,i=(d=(l=$(e.max))!=null?l:$((h=r==null?void 0:r.attributes)==null?void 0:h.max))!=null?d:ne,o=(f=(u=$(e.step))!=null?u:$((m=r==null?void 0:r.attributes)==null?void 0:m.step))!=null?f:oe;return{min:s,max:i,step:o}}function zt(r,t,e){return!r||r.state==="unavailable"?"Unavailable":t==="fan"?r.state==="on"?`${e}%`:"Off":String(e)}var g=class extends x{constructor(){super(...arguments);w(this,"_config");w(this,"_entity");w(this,"_domain","fan");w(this,"_value",0);w(this,"_progressDeg",0)}get hass(){return this._hass}setConfig(e){Lt(e),this._config={show_state:!0,show_percentage:!0,show_buttons:!0,show_secondary:!0,...e}}getCardSize(){return 3}shouldUpdate(e){return e.has("hass")||e.has("_config")||e.has("_value")}set hassObj(e){this.hass=e}set hass(e){var a;let s=this.hass;if(this._hass=e,!e||!this._config)return;let i=e.states[this._config.entity];this._entity=i,this._domain=jt(this._config,i);let{min:o,max:n}=H(i,this._domain,this._config),c;this._domain==="fan"?(c=$((a=i==null?void 0:i.attributes)==null?void 0:a.percentage),c===void 0&&(c=(i==null?void 0:i.state)==="on"?n:o)):c=$(i==null?void 0:i.state),this._value=I(c!=null?c:o,o,n),this._progressDeg=this.valueToDeg(this._value,o,n),this.requestUpdate("hass",s)}valueToDeg(e,s,i){return(e-s)/(i-s||1)*360}onDialPointer(e){var h;e.preventDefault();let s=(h=this.shadowRoot)==null?void 0:h.querySelector(".dial");if(!s||!this._entity)return;let i=s.getBoundingClientRect(),o=i.left+i.width/2,n=i.top+i.height/2,c=l=>{let d=l.clientX-o,m=l.clientY-n,u=Math.atan2(m,d)*(180/Math.PI)+90;u<0&&(u+=360);let{min:f,max:ht,step:lt}=H(this._entity,this._domain,this._config),qt=f+u/360*(ht-f),Bt=Math.round(qt/lt)*lt,It=I(Bt,f,ht);this.updateValue(It)},a=()=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",a)};window.addEventListener("pointermove",c),window.addEventListener("pointerup",a)}async updateValue(e){if(!this.hass||!this._entity)return;let{min:s,max:i}=H(this._entity,this._domain,this._config),o=I(e,s,i);this._value=o,this._progressDeg=this.valueToDeg(o,s,i);try{this._domain==="fan"?await this.hass.callService("fan","set_percentage",{entity_id:this._entity.entity_id,percentage:o}):this._domain==="number"?await this.hass.callService("number","set_value",{entity_id:this._entity.entity_id,value:o}):await this.hass.callService("input_number","set_value",{entity_id:this._entity.entity_id,value:o})}catch(n){console.error("blower-knob-card: failed to set value",n)}}async toggleFan(e){if(!this.hass||!this._entity)return;let s=e==="on"?"turn_on":"turn_off";await this.hass.callService("fan",s,{entity_id:this._entity.entity_id})}adjust(e){let{min:s,max:i,step:o}=H(this._entity,this._domain,this._config),n=I(this._value+e*o,s,i);this.updateValue(n)}renderUnavailable(){return _`<div class="unavailable">Entity unavailable</div>`}renderButtons(){return this._config.show_buttons?_`
      <div class="row">
        <button class="secondary" @click=${()=>this.adjust(-1)} aria-label="decrease">
          -
        </button>
        <button @click=${()=>this.adjust(1)} aria-label="increase">
          +
        </button>
      </div>
    `:null}renderSecondary(){if(!this._config.show_secondary||this._domain!=="fan"||!this._entity)return null;let e=this._entity.state==="on";return _`
      <div class="controls">
        <div class="pill" @click=${()=>this.toggleFan(e?"off":"on")}>
          <ha-icon icon=${e?"mdi:power":"mdi:power-off"}></ha-icon>
          <span>${e?"Turn off":"Turn on"}</span>
        </div>
      </div>
    `}render(){var n,c,a;if(!this._config)return null;let e=this._entity;if(!e)return this.renderUnavailable();let{min:s,max:i}=H(e,this._domain,this._config),o=zt(e,this._domain,this._value);return _`
      <ha-card>
        <div class="header">
          ${this._config.icon?_`<ha-icon .icon=${this._config.icon}></ha-icon>`:_`<ha-icon icon="mdi:fan"></ha-icon>`}
          <div class="title">
            <div class="name">${(c=(n=this._config.name)!=null?n:e.attributes.friendly_name)!=null?c:e.entity_id}</div>
            ${this._config.show_state?_`<div class="state">${o}</div>`:null}
          </div>
        </div>

        <div class="knob">
          <div
            class="dial"
            style=${`--progress:${this._progressDeg}deg`}
            @pointerdown=${this.onDialPointer}
            role="slider"
            aria-valuemin=${s}
            aria-valuemax=${i}
            aria-valuenow=${this._value}
          >
            <div class="value">
              <div class="current">${this._value}</div>
              ${this._domain==="fan"&&this._config.show_percentage?_`<div class="unit">%</div>`:_`<div class="unit">${(a=e.attributes.unit_of_measurement)!=null?a:""}</div>`}
            </div>
          </div>
        </div>

        ${this.renderButtons()} ${this.renderSecondary()}
      </ha-card>
    `}};w(g,"styles",Dt),A([T()],g.prototype,"_config",2),A([T()],g.prototype,"_entity",2),A([T()],g.prototype,"_domain",2),A([T()],g.prototype,"_value",2),A([T()],g.prototype,"_progressDeg",2),g=A([Rt("blower-knob-card")],g);window.customCards?window.customCards.push({type:"blower-knob-card",name:"Blower Knob Card",description:"Circular blower control for fan/number/input_number with native-like knob UI."}):window.customCards=[{type:"blower-knob-card",name:"Blower Knob Card",description:"Circular blower control for fan/number/input_number with native-like knob UI."}];export{g as BlowerKnobCard};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=blower-knob-card.js.map
