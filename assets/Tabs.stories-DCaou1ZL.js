import{j as t}from"./jsx-runtime-BDqaA1IU.js";import{p as A,y as H,z as J}from"./index-Cfm4aYrO.js";import{r as i}from"./index-D3g0PtM7.js";import{t as g}from"./bundle-mjs-CsYRq7or.js";import{m as M,g as R}from"./index-DvTNjOXU.js";import"./iconBase-DeIphD-G.js";const y=({children:n,className:d})=>t.jsx("div",{className:d,children:n});y.displayName="Tabs.Item";const D=i.forwardRef(({children:n,className:d,onActiveTabChange:C,style:f="default",theme:N={},...W},E)=>{const o=M(R().tabs,N),I=i.useId(),T=i.useMemo(()=>i.Children.map(i.Children.toArray(n),({props:s})=>s),[n]),P=i.useRef([]),[h,v]=i.useState(Math.max(0,T.findIndex(s=>s.active))),[r,p]=i.useState(-1),j=s=>{v(s),C&&C(s)},w=({target:s})=>{j(s),p(s)},k=({event:s,target:a})=>{s.key==="ArrowLeft"&&p(Math.max(0,r-1)),s.key==="ArrowRight"&&p(Math.min(T.length-1,r+1)),s.key==="Enter"&&(j(a),p(a))},S=o.tablist.tabitem.styles[f],$=o.tabitemcontainer.styles[f];return i.useEffect(()=>{P.current[r]?.focus()},[r]),i.useImperativeHandle(E,()=>({setActiveTab:j})),t.jsxs("div",{className:g(o.base,d),children:[t.jsx("div",{"aria-label":"Tabs",role:"tablist",className:g(o.tablist.base,o.tablist.styles[f],d),...W,children:T.map((s,a)=>t.jsxs("button",{type:"button","aria-controls":`${I}-tabpanel-${a}`,"aria-selected":a===h,className:g(o.tablist.tabitem.base,S.base,a===h&&S.active.on,a!==h&&!s.disabled&&S.active.off),disabled:s.disabled,id:`${I}-tab-${a}`,onClick:()=>w({target:a}),onKeyDown:x=>k({event:x,target:a}),ref:x=>P.current[a]=x,role:"tab",tabIndex:a===r?0:-1,style:{zIndex:a===r?2:1},children:[s.icon&&t.jsx(s.icon,{className:o.tablist.tabitem.icon}),s.title]},a))}),t.jsx("div",{className:g(o.tabitemcontainer.base,$),children:T.map((s,a)=>t.jsx("div",{"aria-labelledby":`${I}-tab-${a}`,className:o.tabpanel,hidden:a!==h,id:`${I}-tabpanel-${a}`,role:"tabpanel",tabIndex:0,children:s.children},a))})]})});D.displayName="Tabs";const e=Object.assign(D,{Item:y}),K={title:"Components/Tabs",component:e,args:{className:"max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:text-white"},argTypes:{className:{control:"text"},style:{control:"radio",options:["default","underline","pills","fullWidth"]}}},u=n=>t.jsxs(e,{...n,children:[t.jsx(e.Item,{title:"Profile",children:"Profile content"}),t.jsx(e.Item,{title:"Settings",children:"Settings content"}),t.jsx(e.Item,{title:"Contacts",children:"Contacts content"}),t.jsx(e.Item,{disabled:!0,title:"Disabled",children:"Disabled content"})]}),l=n=>t.jsxs(e,{...n,children:[t.jsx(e.Item,{title:"Profile",children:"Profile content"}),t.jsx(e.Item,{title:"Settings",children:"Settings content"}),t.jsx(e.Item,{title:"Contacts",children:"Contacts content"}),t.jsx(e.Item,{disabled:!0,title:"Disabled",children:"Disabled content"})]});l.args={style:"underline"};l.storyName="With underline";const c=n=>t.jsxs(e,{...n,children:[t.jsx(e.Item,{title:"Profile",icon:A,children:"Profile content"}),t.jsx(e.Item,{title:"Settings",icon:H,children:"Settings content"}),t.jsx(e.Item,{title:"Contacts",icon:J,children:"Contacts content"})]});c.args={style:"underline"};c.storyName="With icons";const b=n=>t.jsxs(e,{...n,children:[t.jsx(e.Item,{title:"Profile",children:"Profile content"}),t.jsx(e.Item,{title:"Dashboard",children:"Dashboard content"}),t.jsx(e.Item,{title:"Settings",children:"Settings content"}),t.jsx(e.Item,{title:"Contacts",children:"Contacts content"})]});b.args={style:"pills"};const m=n=>t.jsxs(e,{...n,children:[t.jsx(e.Item,{title:"Profile",children:"Profile content"}),t.jsx(e.Item,{title:"Dashboard",children:"Dashboard content"}),t.jsx(e.Item,{title:"Settings",children:"Settings content"}),t.jsx(e.Item,{title:"Contacts",children:"Contacts content"})]});m.args={style:"fullWidth"};m.storyName="Full width";u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: TabsProps): JSX.Element => <Tabs {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: TabsProps): JSX.Element => <Tabs {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: TabsProps): JSX.Element => <Tabs {...args}>
    <Tabs.Item title="Profile" icon={HiUserCircle}>
      Profile content
    </Tabs.Item>
    <Tabs.Item title="Settings" icon={HiAdjustments}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Contacts" icon={HiClipboardList}>
      Contacts content
    </Tabs.Item>
  </Tabs>`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: TabsProps): JSX.Element => <Tabs {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
  </Tabs>`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: TabsProps): JSX.Element => <Tabs {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
  </Tabs>`,...m.parameters?.docs?.source}}};const O=["Default","WithUnderline","WithIcons","Pills","FullWidth"];export{u as Default,m as FullWidth,b as Pills,c as WithIcons,l as WithUnderline,O as __namedExportsOrder,K as default};
