import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{e as I,f as j}from"./index-Cfm4aYrO.js";import{t as u}from"./bundle-mjs-CsYRq7or.js";import{m as b,g as l}from"./index-DvTNjOXU.js";import{r as H}from"./index-D3g0PtM7.js";import"./iconBase-DeIphD-G.js";const p=H.forwardRef(({children:a,className:d,href:t,icon:s,theme:o={},...h},g)=>{const i=typeof t<"u",x=i?"a":"span",c=b(l().breadcrumb.item,o);return e.jsxs("li",{className:u(c.base,d),...h,children:[e.jsx(I,{"aria-hidden":!0,className:c.chevron,"data-testid":"flowbite-breadcrumb-separator"}),e.jsxs(x,{ref:g,className:c.href[i?"on":"off"],"data-testid":"flowbite-breadcrumb-item",href:t,children:[s&&e.jsx(s,{"aria-hidden":!0,className:c.icon}),a]})]})});p.displayName="Breadcrumb.Item";const B=({children:a,className:d,theme:t={},...s})=>{const o=b(l().breadcrumb.root,t);return e.jsx("nav",{"aria-label":"Breadcrumb",className:u(o.base,d),...s,children:e.jsx("ol",{className:o.list,children:a})})};B.displayName="Breadcrumb";const m=Object.assign(B,{Item:p}),C={title:"Components/Breadcrumb",component:m},f=a=>e.jsxs(m,{...a,children:[e.jsx(m.Item,{href:"#",icon:j,children:"Home"}),e.jsx(m.Item,{href:"#",children:"Projects"}),e.jsx(m.Item,{children:"Flowbite React"})]}),n=f.bind({}),r=f.bind({});r.storyName="Solid background";r.args={className:"bg-information-100 px-5 py-3 dark:bg-information-900 rounded-lg max-w-sm"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <Breadcrumb {...args}>
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Breadcrumb {...args}>
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>`,...r.parameters?.docs?.source}}};const v=["Default","SolidBackground"];export{n as Default,r as SolidBackground,v as __namedExportsOrder,C as default};
