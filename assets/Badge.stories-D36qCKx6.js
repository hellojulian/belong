import{j as t}from"./jsx-runtime-BDqaA1IU.js";import{d as i}from"./index-Cfm4aYrO.js";import{t as c}from"./index-DvTNjOXU.js";import{B as n}from"./Badge-IsEKpjKI.js";import"./index-D3g0PtM7.js";import"./iconBase-DeIphD-G.js";import"./bundle-mjs-CsYRq7or.js";const y={title:"Components/Badge",component:n,argTypes:{color:{options:Object.keys(c.badge.root.color),control:{type:"inline-radio"}},size:{options:Object.keys(c.badge.root.size),control:{type:"inline-radio"}}}},o=d=>t.jsx("div",{className:"flex items-center",children:t.jsx(n,{...d})}),e=o.bind({});e.storyName="Default";e.args={children:"Default"};const s=o.bind({});s.storyName="With icon";s.args={color:"success",icon:i,children:"2 minutes ago"};const r=o.bind({});r.storyName="Only icon";r.args={color:"success",icon:i};const a=o.bind({});a.storyName="As link";a.args={href:"/badges",children:"Read more →"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <div className="flex items-center">
    <Badge {...args} />
  </div>`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div className="flex items-center">
    <Badge {...args} />
  </div>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div className="flex items-center">
    <Badge {...args} />
  </div>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div className="flex items-center">
    <Badge {...args} />
  </div>`,...a.parameters?.docs?.source}}};const x=["DefaultBadge","BadgeWithIcon","BadgeOnlyIcon","BadgeAsLink"];export{a as BadgeAsLink,r as BadgeOnlyIcon,s as BadgeWithIcon,e as DefaultBadge,x as __namedExportsOrder,y as default};
