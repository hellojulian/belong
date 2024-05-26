import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{S as a,B as o}from"./Button-BBo6iamC.js";import"./index-D3g0PtM7.js";import"./bundle-mjs-CsYRq7or.js";import"./index-DvTNjOXU.js";const u={title:"Components/Spinner",component:a},t=p=>e.jsx(a,{...p}),r=t.bind({});r.args={color:"info",size:"xl",title:"Default spinner example"};const n=()=>e.jsxs("div",{className:"flex flex-col w-1/3 gap-3 p-6",children:[e.jsx("div",{className:"text-left",children:e.jsx(a,{"aria-label":"Left-aligned spinner example"})}),e.jsx("div",{className:"text-center",children:e.jsx(a,{"aria-label":"Center-aligned spinner example"})}),e.jsx("div",{className:"text-right",children:e.jsx(a,{"aria-label":"Right-aligned spinner example"})})]}),l=()=>e.jsxs("div",{className:"flex flex-row gap-3",children:[e.jsx(a,{color:"info","aria-label":"Info spinner example"}),e.jsx(a,{color:"success","aria-label":"Success spinner example"}),e.jsx(a,{color:"failure","aria-label":"Failure spinner example"}),e.jsx(a,{color:"warning","aria-label":"Warning spinner example"}),e.jsx(a,{color:"pink","aria-label":"Pink spinner example"}),e.jsx(a,{color:"purple","aria-label":"Purple spinner example"})]}),s=()=>e.jsxs("div",{className:"flex flex-row gap-3",children:[e.jsx(a,{"aria-label":"Extra small spinner example",size:"xs"}),e.jsx(a,{"aria-label":"Small spinner example",size:"sm"}),e.jsx(a,{"aria-label":"Medium sized spinner example",size:"md"}),e.jsx(a,{"aria-label":"Large spinner example",size:"lg"}),e.jsx(a,{"aria-label":"Extra large spinner example",size:"xl"})]}),i=()=>e.jsx("div",{className:"flex flex-row gap-3",children:e.jsxs(o,{color:"gray",children:[e.jsx(a,{"aria-label":"Alternate spinner button example"}),e.jsx("span",{className:"pl-3",children:"Loading..."})]})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(): JSX.Element => <div className="flex flex-col w-1/3 gap-3 p-6">
    <div className="text-left">
      <Spinner aria-label="Left-aligned spinner example" />
    </div>
    <div className="text-center">
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
    <div className="text-right">
      <Spinner aria-label="Right-aligned spinner example" />
    </div>
  </div>`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(): JSX.Element => <div className="flex flex-row gap-3">
    <Spinner color="info" aria-label="Info spinner example" />
    <Spinner color="success" aria-label="Success spinner example" />
    <Spinner color="failure" aria-label="Failure spinner example" />
    <Spinner color="warning" aria-label="Warning spinner example" />
    <Spinner color="pink" aria-label="Pink spinner example" />
    <Spinner color="purple" aria-label="Purple spinner example" />
  </div>`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(): JSX.Element => <div className="flex flex-row gap-3">
    <Spinner aria-label="Extra small spinner example" size="xs" />
    <Spinner aria-label="Small spinner example" size="sm" />
    <Spinner aria-label="Medium sized spinner example" size="md" />
    <Spinner aria-label="Large spinner example" size="lg" />
    <Spinner aria-label="Extra large spinner example" size="xl" />
  </div>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(): JSX.Element => <div className="flex flex-row gap-3">
    <Button color="gray">
      <Spinner aria-label="Alternate spinner button example" />
      <span className="pl-3">Loading...</span>
    </Button>
  </div>`,...i.parameters?.docs?.source}}};const S=["Default","Alignment","Colors","Sizes","Buttons"];export{n as Alignment,i as Buttons,l as Colors,r as Default,s as Sizes,S as __namedExportsOrder,u as default};
