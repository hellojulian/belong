import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{b as g,c as i}from"./index-Cfm4aYrO.js";import{m as j,g as A,t as y}from"./index-DvTNjOXU.js";import{t as d}from"./bundle-mjs-CsYRq7or.js";import"./index-D3g0PtM7.js";import"./iconBase-DeIphD-G.js";const a=({additionalContent:r,children:p,className:h,color:n="info",icon:l,onDismiss:c,rounded:x=!0,theme:u={},withBorderAccent:f,...b})=>{const t=j(A().alert,u);return e.jsxs("div",{className:d(t.base,t.color[n],x&&t.rounded,f&&t.borderAccent,h),role:"alert",...b,children:[e.jsxs("div",{className:t.wrapper,"data-testid":"flowbite-alert-wrapper",children:[l&&e.jsx(l,{className:t.icon,"data-testid":"flowbite-alert-icon"}),e.jsx("div",{children:p}),typeof c=="function"&&e.jsx("button",{"aria-label":"Dismiss",className:d(t.closeButton.base,t.closeButton.color[n]),onClick:c,type:"button",children:e.jsx(g,{"aria-hidden":!0,className:t.closeButton.icon})})]}),r&&e.jsx("div",{children:r})]})};a.displayName="Alert";const B={title:"Components/Alert",component:a,argTypes:{color:{options:Object.keys(y.alert.color),control:{type:"inline-radio"},description:"Color variant of the alert"},icon:{control:{type:"select"},options:[i,null],description:"Icon to display in the alert"},onDismiss:{control:{type:"boolean"},description:"Whether the alert can be dismissed"},rounded:{control:{type:"boolean"},description:"Whether the alert has rounded corners"},withBorderAccent:{control:{type:"boolean"},description:"Whether the alert has a border accent"},additionalContent:{control:{type:"text"},description:"Additional content to display in the alert"}}},m=r=>e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{...r})}),s=m.bind({});s.storyName="Dismissible";s.args={color:"info",icon:i,onDismiss:()=>alert("Alert dismissed!"),children:e.jsx(e.Fragment,{children:"Info alert! Change a few things up and try submitting again."})};const o=m.bind({});o.storyName="With Additional Content";o.args={color:"info",icon:i,onDismiss:()=>alert("Alert dismissed!"),withBorderAccent:!1,additionalContent:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4 text-sm",children:["More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with ",e.jsx("a",{href:"",className:"underline",children:"this kind of content."})]}),e.jsx("div",{className:"flex"})]}),children:e.jsx(e.Fragment,{children:e.jsx("h3",{className:"text-lg font-medium font-proxima",children:"This is an info alert"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => <div className="max-w-sm">
    <Alert {...props} />
  </div>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => <div className="max-w-sm">
    <Alert {...props} />
  </div>`,...o.parameters?.docs?.source}}};const T=["AlertDismissible","AlertWithAdditionalContent"];export{s as AlertDismissible,o as AlertWithAdditionalContent,T as __namedExportsOrder,B as default};
