/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$2=globalThis,c$3=n$2.trustedTypes,h$3=c$3?c$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,f$3="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,m$1="?"+v,_=`<${m$1}>`,w$1=document,lt=()=>w$1.createComment(""),st$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,$=t=>g(t)||"function"==typeof t?.[Symbol.iterator],x="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,k=/>/g,O=RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),S$1=/'/g,j=/"/g,M=/^(?:script|style|textarea|title)$/i,P=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),ke=P(1),R=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),V=new WeakMap,I=w$1.createTreeWalker(w$1,129);function N(t,i){if(!g(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==h$3?h$3.createHTML(i):i}const U=(t,i)=>{const s=t.length-1,e=[];let h,o=2===i?"<svg>":3===i?"<math>":"",n=T;for(let i=0;i<s;i++){const s=t[i];let r,l,c=-1,a=0;for(;a<s.length&&(n.lastIndex=a,l=n.exec(s),null!==l);)a=n.lastIndex,n===T?"!--"===l[1]?n=E:void 0!==l[1]?n=k:void 0!==l[2]?(M.test(l[2])&&(h=RegExp("</"+l[2],"g")),n=O):void 0!==l[3]&&(n=O):n===O?">"===l[0]?(n=h??T,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?O:'"'===l[3]?j:S$1):n===j||n===S$1?n=O:n===E||n===k?n=T:(n=O,h=void 0);const u=n===O&&t[i+1].startsWith("/>")?" ":"";o+=n===T?s+_:c>=0?(e.push(r),s.slice(0,c)+f$3+s.slice(c)+v+u):s+v+(-2===c?i:u);}return [N(t,o+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class B{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let h=0,o=0;const n=t.length-1,r=this.parts,[l,a]=U(t,i);if(this.el=B.createElement(l,s),I.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(e=I.nextNode())&&r.length<n;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(f$3)){const i=a[o++],s=e.getAttribute(t).split(v),n=/([.?@])?(.*)/.exec(i);r.push({type:1,index:h,name:n[2],strings:s,ctor:"."===n[1]?Y:"?"===n[1]?Z:"@"===n[1]?q:G}),e.removeAttribute(t);}else t.startsWith(v)&&(r.push({type:6,index:h}),e.removeAttribute(t));if(M.test(e.tagName)){const t=e.textContent.split(v),i=t.length-1;if(i>0){e.textContent=c$3?c$3.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],lt()),I.nextNode(),r.push({type:2,index:++h});e.append(t[i],lt());}}}else if(8===e.nodeType)if(e.data===m$1)r.push({type:2,index:h});else {let t=-1;for(;-1!==(t=e.data.indexOf(v,t+1));)r.push({type:7,index:h}),t+=v.length-1;}h++;}}static createElement(t,i){const s=w$1.createElement("template");return s.innerHTML=t,s}}function z(t,i,s=t,e){if(i===R)return i;let h=void 0!==e?s.o?.[e]:s.l;const o=st$1(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s.o??=[])[e]=h:s.l=h),void 0!==h&&(i=z(t,h._$AS(t,i.values),h,e)),i}class F{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??w$1).importNode(i,!0);I.currentNode=e;let h=I.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new et(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new K(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=I.nextNode(),o++);}return I.currentNode=w$1,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class et{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,i,s,e){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this.v=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=z(this,t,i),st$1(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):$(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==D&&st$1(this._$AH)?this._$AA.nextSibling.data=t:this.T(w$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(N(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new F(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=V.get(t.strings);return void 0===i&&V.set(t.strings,i=new B(t)),i}k(t){g(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new et(this.O(lt()),this.O(lt()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t));}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=D;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=z(this,t,i,0),o=!st$1(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=z(this,e[s+n],i,n),r===R&&(r=this._$AH[n]),o||=!st$1(r)||r!==this._$AH[n],r===D?t=D:t!==D&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class Y extends G{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===D?void 0:t;}}class Z extends G{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D);}}class q extends G{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=z(this,t,i,0)??D)===R)return;const s=this._$AH,e=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==D&&(s===D||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class K{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t);}}const si={M:f$3,P:v,A:m$1,C:1,L:U,R:F,D:$,V:z,I:et,H:G,N:Z,U:q,B:Y,F:K},Re=n$2.litHtmlPolyfillSupport;Re?.(B,et),(n$2.litHtmlVersions??=[]).push("3.2.0");const Q=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new et(i.insertBefore(lt(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Me=null;const Ie={boundAttributeSuffix:si.M,marker:si.P,markerMatch:si.A,HTML_RESULT:si.C,getTemplateHtml:si.L,overrideDirectiveResolve:(e,t)=>class extends e{_$AS(e,r){return t(this,r)}},patchDirectiveResolve:(e,t)=>{if(e.prototype._$AS!==t){Me??=e.prototype._$AS.name;for(let r=e.prototype;r!==Object.prototype;r=Object.getPrototypeOf(r))if(r.hasOwnProperty(Me))return void(r[Me]=t);throw Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527")}},setDirectiveClass(e,t){e._$litDirective$=t;},getAttributePartCommittedValue:(e,t,r)=>{let i=R;return e.j=e=>i=e,e._$AI(t,e,r),i},connectedDisconnectable:e=>({...e,_$AU:!0}),resolveDirective:si.V,AttributePart:si.H,PropertyPart:si.B,BooleanAttributePart:si.N,EventPart:si.U,ElementPart:si.F,TemplateInstance:si.R,isIterable:si.D,ChildPart:si.I};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=o=>null===o||"object"!=typeof o&&"function"!=typeof o,nt=(o,t)=>void 0!==o?._$litType$,ot=o=>null!=o?._$litType$?.h,rt=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{TemplateInstance:l$1,isIterable:s$1,resolveDirective:d$1,ChildPart:c$2,ElementPart:p$1}=Ie,f$2=(e,t,r={})=>{if(void 0!==t._$litPart$)throw Error("container already contains a live render");let n,o,i;const a=[],l=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);let s;for(;null!==(s=l.nextNode());){const t=s.data;if(t.startsWith("lit-part")){if(0===a.length&&void 0!==n)throw Error(`There must be only one root part per container. Found a part marker (${s}) when we already have a root part marker (${o})`);i=m(e,s,a,r),void 0===n&&(n=i),o??=s;}else if(t.startsWith("lit-node"))u$1(s,a,r);else if(t.startsWith("/lit-part")){if(1===a.length&&i!==n)throw Error("internal error");i=h$2(s,i,a);}}if(void 0===n){const e=t instanceof ShadowRoot?"{container.host.localName}'s shadow root":t instanceof DocumentFragment?"DocumentFragment":t.localName;console.error(`There should be exactly one root part in a render container, but we didn't find any in ${e}.`);}t._$litPart$=n;},m=(t,r,a,p)=>{let f,m;if(0===a.length)m=new c$2(r,null,void 0,p),f=t;else {const e=a[a.length-1];if("template-instance"===e.type)m=new c$2(r,null,e.instance,p),e.instance._$AV.push(m),f=e.result.values[e.instancePartIndex++],e.templatePartIndex++;else if("iterable"===e.type){m=new c$2(r,null,e.part,p);const t=e.iterator.next();if(t.done)throw f=void 0,e.done=!0,Error("Unhandled shorter than expected iterable");f=t.value,e.part._$AH.push(m);}else m=new c$2(r,null,e.part,p);}if(f=d$1(m,f),f===R)a.push({part:m,type:"leaf"});else if(st(f))a.push({part:m,type:"leaf"}),m._$AH=f;else if(nt(f)){if(ot(f))throw Error("compiled templates are not supported");const e="lit-part "+w(f);if(r.data!==e)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{const e=c$2.prototype._$AC(f),t=new l$1(e,m);a.push({type:"template-instance",instance:t,part:m,templatePartIndex:0,instancePartIndex:0,result:f}),m._$AH=t;}}else s$1(f)?(a.push({part:m,type:"iterable",value:f,iterator:f[Symbol.iterator](),done:!1}),m._$AH=[]):(a.push({part:m,type:"leaf"}),m._$AH=f??"");return m},h$2=(e,t,r)=>{if(void 0===t)throw Error("unbalanced part marker");t._$AB=e;const n=r.pop();if("iterable"===n.type&&!n.iterator.next().done)throw Error("unexpected longer than expected iterable");if(r.length>0)return r[r.length-1].part},u$1=(e,t,n)=>{const o=/lit-node (\d+)/.exec(e.data),i=parseInt(o[1]),l=e.nextElementSibling;if(null===l)throw Error("could not find node for attribute parts");l.removeAttribute("defer-hydration");const s=t[t.length-1];if("template-instance"!==s.type)throw Error("Hydration value mismatch: Primitive found where TemplateResult expected. This usually occurs due to conditional rendering that resulted in a different value or template being rendered between the server and client.");{const e=s.instance;for(;;){const t=e._$AD.parts[s.templatePartIndex];if(void 0===t||t.type!==t$1.ATTRIBUTE&&t.type!==t$1.ELEMENT||t.index!==i)break;if(t.type===t$1.ATTRIBUTE){const o=new t.ctor(l,t.name,t.strings,s.instance,n),i=rt(o)?s.result.values[s.instancePartIndex]:s.result.values,d=!(o.type===t$1.EVENT||o.type===t$1.PROPERTY);o._$AI(i,o,s.instancePartIndex,d),s.instancePartIndex+=t.strings.length-1,e._$AV.push(o);}else {const t=new p$1(l,s.instance,n);d$1(t,s.result.values[s.instancePartIndex++]),e._$AV.push(t);}s.templatePartIndex++;}}},w=e=>{const t=new Uint32Array(2).fill(5381);for(const r of e.strings)for(let e=0;e<r.length;e++)t[e%2]=33*t[e%2]^r.charCodeAt(e);const r=String.fromCharCode(...new Uint8Array(t.buffer));return btoa(r)};

globalThis.litElementHydrateSupport=({LitElement:s})=>{const h=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(s),"observedAttributes").get;Object.defineProperty(s,"observedAttributes",{get(){return [...h.call(this),"defer-hydration"]}});const e=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(t,i,s){"defer-hydration"===t&&null===s&&n.call(this),e.call(this,t,i,s);};const n=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||n.call(this);};const o=s.prototype.createRenderRoot;s.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):o.call(this)};const r=Object.getPrototypeOf(s.prototype).update;s.prototype.update=function(s){const h=this.render();if(r.call(this,s),this._$AG){this._$AG=!1;for(let t=0;t<this.attributes.length;t++){const i=this.attributes[t];if(i.name.startsWith("hydrate-internals-")){const t=i.name.slice(18);this.removeAttribute(t),this.removeAttribute(i.name);}}f$2(h,this.renderRoot,this.renderOptions);}else Q(h,this.renderRoot,this.renderOptions);};};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e$1=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o$1=new WeakMap;let n$1 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$1&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$1.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$1.set(s,t));}return t}toString(){return this.cssText}};const r$1=t=>new n$1("string"==typeof t?t:t+"",void 0,s),i$1=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$1(o,t,s)},S=(s,o)=>{if(e$1)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$1=e$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$1(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i,defineProperty:e,getOwnPropertyDescriptor:r,getOwnPropertyNames:h$1,getOwnPropertySymbols:o,getPrototypeOf:n}=Object,a=globalThis,c=a.trustedTypes,l=c?c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i(t,s),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...h$1(t),...o(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$1(s));}else void 0!==s&&i.push(c$1(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Q(e,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1);}render(){return R}}h._$litElement$=!0,h["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:h});const f=globalThis.litElementPolyfillSupport;f?.({LitElement:h});(globalThis.litElementVersions??=[]).push("4.1.0");

const customElementTmpl = ({
  hideGreeting,
  customText,
  onInput,
  inputValue,
  onThemeChange,
  onGreetingChange,
  setInputToDefault,
}) => ke`
  <p ?hidden="${hideGreeting}">hello from my custom element!</p>
  <p>${customText}</p>
  <input @input=${onInput} .value=${inputValue} />
  <div>
    <label>
      dark theme:
      <input type="checkbox" @change=${onThemeChange} />
    </label>
  </div>
  <div>
    <label>
      hide greeting:
      <input type="checkbox" @change=${onGreetingChange} />
    </label>
  </div>
  <div>
    <button @click=${setInputToDefault}>set input to default</button>
  </div>
`;

class CustomElement extends h {
  static properties = {
    customText: {},
    theme: {},
    hideGreeting: {},
    inputValue: {},
  };

  static styles = i$1`
    p {
      margin: 30px;
    }
  `;

  constructor() {
    super();
    this.customText = "";
    this.theme = "light";
    this.hideGreeting = false;
    this.inputValue = "";
  }

  #onInput(event) {
    const input = event.target;
    this.customText = input.value;
    this.inputValue = input.value;
  }

  #onThemeChange(event) {
    const input = event.target;
    this.theme = input.checked ? "dark" : "light";
    this.#updateTheme();
  }

  #updateTheme() {
    document.documentElement.style.colorScheme = this.theme;
  }

  #onGreetingChange(event) {
    const input = event.target;
    this.hideGreeting = input.checked ? true : false;
  }

  #setInputToDefault() {
    this.customText = "default input value";
    this.inputValue = "default input value";
  }

  render() {
    return customElementTmpl({
      customText: this.customText,
      hideGreeting: this.hideGreeting,
      inputValue: this.inputValue,
      setInputToDefault: this.#setInputToDefault,
      onGreetingChange: this.#onGreetingChange,
      onInput: this.#onInput,
      onThemeChange: this.#onThemeChange,
    });
  }
}
customElements.define("custom-element", CustomElement);
