import{j as n}from"./jsx-runtime-BDqaA1IU.js";import{r as g}from"./index-D3g0PtM7.js";import{k as se,l as ne,m as ae}from"./index-Cfm4aYrO.js";import{t as b}from"./bundle-mjs-CsYRq7or.js";import{m as E,g as re}from"./index-DvTNjOXU.js";import{T as oe}from"./TextInput-Z7ITnyUb.js";import"./iconBase-DeIphD-G.js";import"./HelperText-B6eQdDhC.js";const Q=g.createContext(void 0);function P(){const e=g.useContext(Q);if(!e)throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");return e}var o=(e=>(e[e.Days=0]="Days",e[e.Months=1]="Months",e[e.Years=2]="Years",e[e.Decades=3]="Decades",e))(o||{}),F=(e=>(e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday",e))(F||{});const S=(e,s,t)=>{const a=new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime();if(s&&t){const c=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime(),u=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();return a>=c&&a<=u}if(s){const c=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();return a>=c}if(t){const c=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();return a<=c}return!0},H=(e,s)=>(e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),s=new Date(s.getFullYear(),s.getMonth(),s.getDate()),e.getTime()===s.getTime()),U=(e,s,t)=>(S(e,s,t)||(s&&e<s?e=s:t&&e>t&&(e=t)),e),ie=(e,s)=>{const t=new Date(e.getFullYear(),e.getMonth(),1);let c=t.getDay()-s;return c<0&&(c+=7),q(t,-c)},ce=(e,s)=>{const t=[],a=new Date(0);a.setDate(a.getDate()-a.getDay()+s);const c=new Intl.DateTimeFormat(e,{weekday:"short"});for(let u=0;u<7;u++)t.push(c.format(q(a,u)));return t},q=(e,s)=>{const t=new Date(e);return t.setDate(t.getDate()+s),t},ue=(e,s)=>{const t=new Date(e);return t.setMonth(t.getMonth()+s),t},N=(e,s)=>{const t=new Date(e);return t.setFullYear(t.getFullYear()+s),t},V=(e,s,t)=>{let a={day:"numeric",month:"long",year:"numeric"};return t&&(a=t),new Intl.DateTimeFormat(e,a).format(s)},Y=(e,s)=>{const t=e.getFullYear();return Math.floor(t/s)*s},le=(e,s)=>{const t=e.getFullYear(),a=s+9;return t>=s&&t<=a},me=({theme:e={}})=>{const{theme:s,weekStart:t,minDate:a,maxDate:c,viewDate:u,selectedDate:D,changeSelectedDate:v,language:i}=P(),l=E(s.views.days,e),h=ce(i,t),f=ie(u,t);return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:l.header.base,children:h.map((m,d)=>n.jsx("span",{className:l.header.title,children:m},d))}),n.jsx("div",{className:l.items.base,children:[...Array(42)].map((m,d)=>{const p=q(f,d),w=V(i,p,{day:"numeric"}),$=H(D,p),C=!S(p,a,c);return n.jsx("button",{disabled:C,type:"button",className:b(l.items.item.base,$&&l.items.item.selected,C&&l.items.item.disabled),onClick:()=>{C||v(p,!0)},children:w},d)})})]})},de=({theme:e={}})=>{const{theme:s,selectedDate:t,viewDate:a,setViewDate:c,setView:u}=P(),D=E(s.views.decades,e);return n.jsx("div",{className:D.items.base,children:[...Array(12)].map((v,i)=>{const h=Y(a,100)-10+i*10,f=new Date(h,0,1),m=N(f,9),d=le(a,h),p=!S(a,f,m);return n.jsx("button",{disabled:p,type:"button",className:b(D.items.item.base,d&&D.items.item.selected,p&&D.items.item.disabled),onClick:()=>{p||(c(N(a,h-t.getFullYear())),u(o.Years))},children:h},i)})})},pe=({theme:e={}})=>{const{theme:s,minDate:t,maxDate:a,selectedDate:c,viewDate:u,language:D,setViewDate:v,setView:i}=P(),l=E(s.views.months,e);return n.jsx("div",{className:l.items.base,children:[...Array(12)].map((h,f)=>{const m=new Date(u.getTime());m.setMonth(f);const d=V(D,m,{month:"short"}),p=H(c,m),w=!S(m,t,a);return n.jsx("button",{disabled:w,type:"button",className:b(l.items.item.base,p&&l.items.item.selected,w&&l.items.item.disabled),onClick:()=>{w||(v(m),i(o.Days))},children:d},f)})})},De=({theme:e={}})=>{const{theme:s,selectedDate:t,minDate:a,maxDate:c,viewDate:u,setViewDate:D,setView:v}=P(),i=E(s.views.years,e);return n.jsx("div",{className:i.items.base,children:[...Array(12)].map((l,h)=>{const m=Y(u,10)-1+h*1,d=new Date(u.getTime());d.setFullYear(m);const p=H(t,d),w=!S(d,a,c);return n.jsx("button",{disabled:w,type:"button",className:b(i.items.item.base,p&&i.items.item.selected,w&&i.items.item.disabled),onClick:()=>{w||(D(d),v(o.Months))},children:m},h)})})},he=({title:e,open:s,inline:t=!1,autoHide:a=!0,showClearButton:c=!0,labelClearButton:u="Clear",showTodayButton:D=!0,labelTodayButton:v="Today",defaultDate:i=new Date,minDate:l,maxDate:h,language:f="en",weekStart:m=F.Sunday,className:d,theme:p={},onSelectedDateChanged:w,...$},C)=>{const r=E(re().datepicker,p);i=U(i,l,h);const[z,O]=g.useState(s),[T,G]=g.useState(o.Days),[I,J]=g.useState(i),[x,k]=g.useState(i),_=g.useRef(null),L=g.useRef(null),A=(y,j)=>{J(y),w&&w(y),a&&T===o.Days&&j==!0&&!t&&O(!1)},X=()=>{A(i,!0),i&&k(i)};g.useImperativeHandle(C,()=>({focus(){_.current?.focus()},clear(){X()}}));const Z=y=>{switch(y){case o.Decades:return n.jsx(de,{theme:r.views.decades});case o.Years:return n.jsx(De,{theme:r.views.years});case o.Months:return n.jsx(pe,{theme:r.views.months});case o.Days:default:return n.jsx(me,{theme:r.views.days})}},W=()=>{switch(T){case o.Days:return o.Months;case o.Months:return o.Years;case o.Years:return o.Decades}return T},ee=()=>{switch(T){case o.Decades:return`${Y(x,100)} - ${Y(x,100)+90}`;case o.Years:return`${Y(x,10)} - ${Y(x,10)+9}`;case o.Months:return V(f,x,{year:"numeric"});case o.Days:default:return V(f,x,{month:"long",year:"numeric"})}},K=(y,j,M)=>{switch(y){case o.Days:return new Date(ue(j,M));case o.Months:return new Date(N(j,M));case o.Years:return new Date(N(j,M*10));case o.Decades:return new Date(N(j,M*100));default:return new Date(N(j,M*10))}};return g.useEffect(()=>{const y=j=>{const M=L?.current?.contains(j.target),te=_?.current?.contains(j.target);!M&&!te&&O(!1)};return document.addEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)}},[_,L,O]),n.jsx(Q.Provider,{value:{theme:r,language:f,minDate:l,maxDate:h,weekStart:m,isOpen:z,setIsOpen:O,view:T,setView:G,viewDate:x,setViewDate:k,selectedDate:I,setSelectedDate:J,changeSelectedDate:A},children:n.jsxs("div",{className:b(r.root.base,d),children:[!t&&n.jsx(oe,{theme:r.root.input,icon:se,ref:_,onFocus:()=>{H(x,I)||k(I),O(!0)},value:I&&V(f,I),readOnly:!0,...$}),(z||t)&&n.jsx("div",{ref:L,className:b(r.popup.root.base,t&&r.popup.root.inline),children:n.jsxs("div",{className:r.popup.root.inner,children:[n.jsxs("div",{className:r.popup.header.base,children:[e&&n.jsx("div",{className:r.popup.header.title,children:e}),n.jsxs("div",{className:r.popup.header.selectors.base,children:[n.jsx("button",{type:"button",className:b(r.popup.header.selectors.button.base,r.popup.header.selectors.button.prev),onClick:()=>k(K(T,x,-1)),children:n.jsx(ne,{})}),n.jsx("button",{type:"button",className:b(r.popup.header.selectors.button.base,r.popup.header.selectors.button.view),onClick:()=>G(W()),children:ee()}),n.jsx("button",{type:"button",className:b(r.popup.header.selectors.button.base,r.popup.header.selectors.button.next),onClick:()=>k(K(T,x,1)),children:n.jsx(ae,{})})]})]}),n.jsx("div",{className:r.popup.view.base,children:Z(T)}),(c||D)&&n.jsxs("div",{className:r.popup.footer.base,children:[D&&n.jsx("button",{type:"button",className:b(r.popup.footer.button.base,r.popup.footer.button.today),onClick:()=>{const y=new Date;A(y,!0),k(y)},children:v}),c&&n.jsx("button",{type:"button",className:b(r.popup.footer.button.base,r.popup.footer.button.clear),onClick:()=>{A(i,!0),i&&k(i)},children:u})]})]})})]})})},B=g.forwardRef(he);B.displayName="Datepicker";const ke={title:"Components/Datepicker",component:B,argTypes:{language:{control:{type:"select",options:["en","pt-BR"]}},weekStart:{options:Object.values(F).filter(e=>typeof e=="string"),mapping:Object.entries(F).filter(([,e])=>typeof e!="string").reduce((e,[s,t])=>({...e,[s]:t}),{}),control:{type:"select",labels:Object.entries(F).filter(([,e])=>typeof e!="string").reduce((e,[s,t])=>({...e,[t]:s}),{})}}}},fe=e=>(e.minDate&&(e.minDate=new Date(e.minDate)),e.maxDate&&(e.maxDate=new Date(e.maxDate)),e.minDate&&e.maxDate&&e.defaultDate&&(e.defaultDate=U(e.defaultDate,e.minDate,e.maxDate)),n.jsx(B,{...e})),R=fe.bind({});R.args={open:!1,autoHide:!0,showClearButton:!0,showTodayButton:!0,defaultDate:new Date,minDate:void 0,maxDate:void 0,language:"en",weekStart:F.Sunday,theme:{}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  // https://github.com/storybookjs/storybook/issues/11822
  if (args.minDate) {
    args.minDate = new Date(args.minDate);
  }
  if (args.maxDate) {
    args.maxDate = new Date(args.maxDate);
  }

  // update defaultDate based on the range
  if (args.minDate && args.maxDate) {
    if (args.defaultDate) {
      args.defaultDate = getFirstDateInRange(args.defaultDate, args.minDate, args.maxDate);
    }
  }
  return <Datepicker {...args} />;
}`,...R.parameters?.docs?.source}}};const Me=["Default"];export{R as Default,Me as __namedExportsOrder,ke as default};
