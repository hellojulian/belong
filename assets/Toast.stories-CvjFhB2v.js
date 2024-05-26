import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{b as j,d as v,A as H}from"./index-Cfm4aYrO.js";import{r as u}from"./index-D3g0PtM7.js";import{t as b}from"./bundle-mjs-CsYRq7or.js";import{m as T,g as W}from"./index-DvTNjOXU.js";import{a as E}from"./index-Mw6lXc81.js";import{B as N}from"./Button-BBo6iamC.js";import"./iconBase-DeIphD-G.js";const k=u.createContext(void 0);function S(){const t=u.useContext(k);if(!t)throw new Error("useToastContext should be used within the ToastContext provider!");return t}const w=({className:t,onClick:l,theme:d={},xIcon:g=j,onDismiss:c,...m})=>{const{theme:h,duration:x,isClosed:f,isRemoved:a,setIsClosed:C,setIsRemoved:z}=S(),p=T(h.toggle,d),B=I=>{if(l&&l(I),c){c();return}C(!f),setTimeout(()=>z(!a),x)};return e.jsx("button",{"aria-label":"Close",onClick:B,type:"button",className:b(p.base,t),...m,children:e.jsx(g,{"aria-hidden":!0,className:p.icon})})},U={75:"duration-75",100:"duration-100",150:"duration-150",200:"duration-200",300:"duration-300",500:"duration-500",700:"duration-700",1e3:"duration-1000"},y=({children:t,className:l,duration:d=300,theme:g={},...c})=>{const[m,h]=u.useState(!1),[x,f]=u.useState(!1),a=T(W().toast,g);return x?null:e.jsx(k.Provider,{value:{theme:a,duration:d,isClosed:m,isRemoved:x,setIsClosed:h,setIsRemoved:f},children:e.jsx("div",{"data-testid":"flowbite-toast",role:"alert",className:b(a.root.base,U[d],m&&a.root.closed,l),...c,children:t})})};y.displayName="Toast";w.displayName="Toast.Toggle";const s=Object.assign(y,{Toggle:w}),O={title:"Components/Toast",component:s},n=t=>e.jsxs(s,{...t,children:[e.jsx("div",{className:"inline-flex items-center justify-center rounded-lg size-8 shrink-0 bg-success-100 text-success-400 dark:bg-success-800 dark:text-success-200",children:e.jsx(v,{className:"size-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Your profile is now updated"}),e.jsx(s.Toggle,{})]});n.storyName="Default";const o=t=>e.jsxs(s,{...t,children:[e.jsx("div",{className:"inline-flex items-center justify-center rounded-lg size-8 shrink-0 bg-success-100 text-success-400 dark:bg-success-800 dark:text-success-200",children:e.jsx(v,{className:"size-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Your profile is now updated"}),e.jsxs("div",{className:"flex items-center ml-auto space-x-2",children:[e.jsx("a",{href:"#",className:"rounded-lg p-1.5 text-sm font-medium text-belong-600 hover:bg-belong-200 dark:text-belong-500 dark:hover:bg-gray-700",children:"Undo"}),e.jsx(s.Toggle,{})]})]});o.storyName="Toast With Button";const r=t=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{children:[e.jsx("div",{className:"inline-flex items-center justify-center w-8 h-8 text-green-500 bg-green-100 rounded-lg shrink-0 dark:bg-green-800 dark:text-green-200",children:e.jsx(v,{className:"w-5 h-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Item moved successfully."}),e.jsx(s.Toggle,{})]}),e.jsxs(s,{children:[e.jsx("div",{className:"inline-flex items-center justify-center w-8 h-8 text-red-500 bg-red-100 rounded-lg shrink-0 dark:bg-red-800 dark:text-red-200",children:e.jsx(j,{className:"w-5 h-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Item has been deleted."}),e.jsx(s.Toggle,{})]}),e.jsxs(s,{children:[e.jsx("div",{className:"inline-flex items-center justify-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg shrink-0 dark:bg-orange-700 dark:text-orange-200",children:e.jsx(H,{className:"w-5 h-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Improve password difficulty."}),e.jsx(s.Toggle,{})]})]});r.storyName="Toast Variants";const i=t=>e.jsx(s,{children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 bg-belong-200 text-belong-500 dark:bg-belong-900 dark:text-belong-300",children:e.jsx(E,{className:"w-5 h-5"})}),e.jsxs("div",{className:"ml-4 text-sm font-normal",children:[e.jsx("span",{className:"mb-4 text-lg font-medium text-gray-900 font-proxima dark:text-white",children:"Update available"}),e.jsx("div",{className:"mb-4 text-sm font-normal",children:"A new software version is available for download. Would you like to update now?"}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx("div",{className:"w-auto",children:e.jsx(N,{size:"xs",children:"Update"})}),e.jsx("div",{className:"w-auto",children:e.jsx(N,{color:"secondary",size:"xs",children:"Not now"})})]})]}),e.jsx(s.Toggle,{})]})});i.storyName="Toast With Buttons";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <Toast {...args}>
      <div className="inline-flex items-center justify-center rounded-lg size-8 shrink-0 bg-success-100 text-success-400 dark:bg-success-800 dark:text-success-200">
        <HiCheck className="size-5" />
      </div>
      <div className="ml-3 text-sm font-normal">Your profile is now updated</div>
      <Toast.Toggle />
    </Toast>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <Toast {...args}>
      <div className="inline-flex items-center justify-center rounded-lg size-8 shrink-0 bg-success-100 text-success-400 dark:bg-success-800 dark:text-success-200">
        <HiCheck className="size-5" />
      </div>
      <div className="ml-3 text-sm font-normal">Your profile is now updated</div>
      <div className="flex items-center ml-auto space-x-2">
        <a href="#" className="rounded-lg p-1.5 text-sm font-medium text-belong-600 hover:bg-belong-200 dark:text-belong-500 dark:hover:bg-gray-700">
          Undo
        </a>
      <Toast.Toggle />
      </div>
    </Toast>;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <div className="flex flex-col gap-4">
      <Toast>
        <div className="inline-flex items-center justify-center w-8 h-8 text-green-500 bg-green-100 rounded-lg shrink-0 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="w-5 h-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex items-center justify-center w-8 h-8 text-red-500 bg-red-100 rounded-lg shrink-0 dark:bg-red-800 dark:text-red-200">
          <HiX className="w-5 h-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex items-center justify-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg shrink-0 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="w-5 h-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>
        <Toast.Toggle />
      </Toast>
    </div>;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <Toast>
    <div className="flex items-start">
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 bg-belong-200 text-belong-500 dark:bg-belong-900 dark:text-belong-300">
        <MdLoop className="w-5 h-5" />
      </div>
      <div className="ml-4 text-sm font-normal">
        <span className="mb-4 text-lg font-medium text-gray-900 font-proxima dark:text-white">Update available</span>
        <div className="mb-4 text-sm font-normal">A new software version is available for download. Would you like to update now?</div>
        <div className="flex justify-end gap-3">
          <div className="w-auto">
            <Button size="xs">Update</Button>
          </div>
          <div className="w-auto">
            <Button color="secondary" size="xs">
              Not now
            </Button>
          </div>
        </div>
      </div>
      <Toast.Toggle />
    </div>
  </Toast>;
}`,...i.parameters?.docs?.source}}};const X=["DefaultToast","ToastWithButton","ToastVariants","ToastWithButtons"];export{n as DefaultToast,r as ToastVariants,o as ToastWithButton,i as ToastWithButtons,X as __namedExportsOrder,O as default};
