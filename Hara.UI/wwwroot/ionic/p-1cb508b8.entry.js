import{c as e,r,e as i,f as t,h as s,i as n,H as o}from"./p-53b5a7f5.js";import{i as h,b as a,c as f}from"./p-275c7570.js";import{h as l,g as c,r as p}from"./p-a07772f1.js";import{c as g}from"./p-986d0fc8.js";import{g as m}from"./p-bac8255f.js";import{s as d}from"./p-1f87b1b9.js";import{d as u}from"./p-a96dd2bf.js";import{S as b}from"./p-2b4de713.js";const x=e=>{const r=e.querySelector("ion-spinner"),i=r.shadowRoot.querySelector("circle"),t=e.querySelector(".spinner-arrow-container"),s=e.querySelector(".arrow-container"),n=s?s.querySelector("ion-icon"):null,o=g().duration(1e3).easing("ease-out"),h=g().addElement(t).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),a=g().addElement(i).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=g().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(s&&n){const e=g().addElement(s).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),r=g().addElement(n).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([e,r])}return o.addAnimation([h,a,f])},v=(e,r)=>{e.style.setProperty("opacity",r.toString())},w=(r,i)=>{if(!r)return Promise.resolve();const t=y(r,200);return e((()=>{r.style.setProperty("transition","0.2s all ease-out"),void 0===i?r.style.removeProperty("transform"):r.style.setProperty("transform",`translate3d(0px, ${i}, 0px)`)})),t},k=(e,r)=>{const i=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==i&&null!==t&&("ios"===r&&h("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)},y=(e,r=0)=>new Promise((i=>{_(e,r,i)})),_=(e,r=0,i)=>{let t,s;const n={passive:!0},o=()=>{t&&t()},h=r=>{void 0!==r&&e!==r.target||(o(),i(r))};return e&&(e.addEventListener("webkitTransitionEnd",h,n),e.addEventListener("transitionend",h,n),s=setTimeout(h,r+500),t=()=>{s&&(clearTimeout(s),s=void 0),e.removeEventListener("webkitTransitionEnd",h,n),e.removeEventListener("transitionend",h,n)}),o},j=class{constructor(e){r(this,e),this.ionRefresh=i(this,"ionRefresh",7),this.ionPull=i(this,"ionPull",7),this.ionStart=i(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){const e=k(this.el,a(this));if(e&&!this.nativeRefresher){const e=this.el.closest("ion-content");this.setupNativeRefresher(e)}else e||this.destroyNativeRefresher()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}async resetNativeRefresher(e,r){this.state=r,"ios"===a(this)?await w(e,void 0):await y(this.el.querySelector(".refresher-refreshing-icon"),200),this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((e=>e.destroy())),this.animations=[],this.progress=0,this.state=1}async setupiOSNativeRefresher(r,i){this.elementToTransform=this.scrollEl;const s=r.shadowRoot.querySelectorAll("svg");let n=.16*this.scrollEl.clientHeight;const o=s.length;e((()=>s.forEach((e=>e.style.setProperty("animation","none"))))),this.scrollListenerCallback=()=>{(this.pointerDown||1!==this.state)&&t((()=>{const t=this.scrollEl.scrollTop,h=this.el.clientHeight;if(t>0){if(8===this.state){const r=l(0,t/(.5*h),1);return void e((()=>v(i,1-r)))}return void e((()=>v(r,0)))}this.pointerDown&&(this.didStart||(this.didStart=!0,this.ionStart.emit()),this.pointerDown&&this.ionPull.emit());const a=l(0,Math.abs(t)/h,.99),f=this.progress=l(0,(Math.abs(t)-30)/n,1),c=l(0,Math.floor(f*o),o-1);var p,g;8===this.state||c===o-1?(this.pointerDown&&(p=i,g=this.lastVelocityY,e((()=>{p.style.setProperty("--refreshing-rotation-duration",g>=1?"0.5s":"2s"),p.style.setProperty("opacity","1")}))),this.didRefresh||(this.beginRefresh(),this.didRefresh=!0,u({style:"light"}),this.pointerDown||w(this.elementToTransform,h+"px"))):(this.state=2,((r,i,t,s)=>{e((()=>{v(r,t),i.forEach(((e,r)=>e.style.setProperty("opacity",r<=s?"0.99":"0")))}))})(r,s,a,c))}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),this.gesture=(await __sc_import_ionic("./p-a013b234.js")).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{this.pointerDown=!0,this.didRefresh||w(this.elementToTransform,"0px"),0===n&&(n=.16*this.scrollEl.clientHeight)},onMove:e=>{this.lastVelocityY=e.velocityY},onEnd:()=>{this.pointerDown=!1,this.didStart=!1,this.needsCompletion?(this.resetNativeRefresher(this.elementToTransform,32),this.needsCompletion=!1):this.didRefresh&&t((()=>w(this.elementToTransform,this.el.clientHeight+"px")))}}),this.disabledChanged()}async setupMDNativeRefresher(r,i,t){const s=c(i).querySelector("circle"),n=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),o=c(t).querySelector("circle");null!==s&&null!==o&&e((()=>{s.style.setProperty("animation","none"),t.style.setProperty("animation-delay","-655ms"),o.style.setProperty("animation-delay","-655ms")})),this.gesture=(await __sc_import_ionic("./p-a013b234.js")).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==this.state&&32!==this.state&&0===this.scrollEl.scrollTop,onStart:e=>{e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:i=>{if(i.velocityY<0&&0===this.progress&&!i.data.didStart||i.data.cancelled)i.data.cancelled=!0;else{if(!i.data.didStart)return i.data.didStart=!0,this.state=2,void e((()=>{const e=((e,r)=>"scale"===e?(e=>{const r=e.clientHeight,i=g().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${r+20}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return x(e).addAnimation([i])})(r):(e=>{const r=e.clientHeight,i=g().addElement(e).keyframes([{offset:0,transform:`translateY(-${r+20}px)`},{offset:1,transform:"translateY(100px)"}]);return x(e).addAnimation([i])})(r))((e=>{const r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"})(r),n);i.data.animation=e,this.scrollEl.style.setProperty("--overflow","hidden"),e.progressStart(!1,0),this.ionStart.emit(),this.animations.push(e)}));this.progress=l(0,i.deltaY/180*.5,1),i.data.animation.progressStep(this.progress),this.ionPull.emit()}},onEnd:r=>{if(!r.data.didStart)return;if(e((()=>this.scrollEl.style.removeProperty("--overflow"))),this.progress<=.4)return this.gesture.enable(!1),void r.data.animation.progressEnd(0,this.progress,500).onFinish((()=>{this.animations.forEach((e=>e.destroy())),this.animations=[],this.gesture.enable(!0),this.state=1}));const i=m([0,0],[0,0],[1,1],[1,1],this.progress)[0],t=(e=>g().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(n);this.animations.push(t),e((async()=>{n.style.setProperty("--ion-pulling-refresher-translate",100*i+"px"),r.data.animation.progressEnd(),await t.play(),this.beginRefresh(),r.data.animation.destroy()}))}}),this.disabledChanged()}async setupNativeRefresher(e){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl)return;this.nativeRefresher=!0;const r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),i=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===a(this)?this.setupiOSNativeRefresher(r,i):this.setupMDNativeRefresher(e,r,i)}componentDidUpdate(){this.checkNativeRefresher()}async connectedCallback(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const e=this.el.closest("ion-content");e?(await e.componentOnReady(),this.scrollEl=await e.getScrollElement(),this.backgroundContentEl=c(e).querySelector("#background-content"),k(this.el,a(this))?this.setupNativeRefresher(e):(this.gesture=(await __sc_import_ionic("./p-a013b234.js")).createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:()=>this.onEnd()}),this.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||p((()=>p((()=>this.resetNativeRefresher(this.elementToTransform,32)))))):this.close(32,"120ms")}async cancel(){this.nativeRefresher?this.pointerDown||p((()=>p((()=>this.resetNativeRefresher(this.elementToTransform,16))))):this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const r=e.event;if(r.touches&&r.touches.length>1)return;if(0!=(56&this.state))return;const i=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,t=e.deltaY*i;if(t<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(t,"0ms",!0,""),0===t)return void(this.progress=0);const s=this.pullMin;this.progress=t/s,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),t<s?this.state=2:t>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,r){setTimeout((()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}setCss(r,i,t,s){this.nativeRefresher||(this.appliedStyles=r>0,e((()=>{if(this.scrollEl&&this.backgroundContentEl){const e=this.scrollEl.style,n=this.backgroundContentEl.style;e.transform=n.transform=r>0?`translateY(${r}px) translateZ(0px)`:"",e.transitionDuration=n.transitionDuration=i,e.transitionDelay=n.transitionDelay=s,e.overflow=t?"hidden":""}})))}render(){const e=a(this);return s(o,{slot:"fixed",class:{[e]:!0,["refresher-"+e]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return n(this)}static get watchers(){return{disabled:["disabledChanged"]}}};j.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:white;-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};const S=class{constructor(e){r(this,e)}componentWillLoad(){if(void 0===this.pullingIcon){const e=a(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=f.get("refreshingIcon","ios"===e&&h("mobile")?f.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){const e=a(this);this.refreshingSpinner=f.get("refreshingSpinner",f.get("spinner","ios"===e?"lines":"circular"))}}render(){const e=this.pullingIcon,r=null!=e&&void 0!==b[e],i=a(this);return s(o,{class:i},s("div",{class:"refresher-pulling"},this.pullingIcon&&r&&s("div",{class:"refresher-pulling-icon"},s("div",{class:"spinner-arrow-container"},s("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===i&&"circular"===this.pullingIcon&&s("div",{class:"arrow-container"},s("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&s("div",{class:"refresher-pulling-icon"},s("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&s("div",{class:"refresher-pulling-text",innerHTML:d(this.pullingText)})),s("div",{class:"refresher-refreshing"},this.refreshingSpinner&&s("div",{class:"refresher-refreshing-icon"},s("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&s("div",{class:"refresher-refreshing-text",innerHTML:d(this.refreshingText)})))}get el(){return n(this)}};export{j as ion_refresher,S as ion_refresher_content}