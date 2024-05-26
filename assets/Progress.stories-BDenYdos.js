import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{P as s}from"./Progress-cQ92o4v_.js";import"./index-D3g0PtM7.js";import"./bundle-mjs-CsYRq7or.js";import"./index-DvTNjOXU.js";const p={title:"Components/Progress",component:s,decorators:[m=>e.jsx("div",{className:"flex flex-col w-1/2",children:e.jsx(m,{})})]},l=m=>e.jsx(s,{...m}),o=l.bind({});o.args={progress:45};const a=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-base font-medium dark:text-white",children:"Small"}),e.jsx(s,{progress:45,size:"sm"}),e.jsx("div",{className:"mt-3 text-base font-medium dark:text-white",children:"Default"}),e.jsx(s,{progress:45,size:"md"}),e.jsx("div",{className:"mt-3 text-lg font-medium dark:text-white",children:"Large"}),e.jsx(s,{progress:45,size:"lg"}),e.jsx("div",{className:"mt-3 text-lg font-medium dark:text-white",children:"Extra Large"}),e.jsx(s,{progress:45,size:"xl"})]}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-base font-medium",children:"Dark"}),e.jsx(s,{progress:45,color:"dark"}),e.jsx("div",{className:"mt-3 text-base font-medium text-cyan-700",children:"Blue"}),e.jsx(s,{progress:45,color:"info"}),e.jsx("div",{className:"mt-3 text-base font-medium text-red-700",children:"Red"}),e.jsx(s,{progress:45,color:"red"}),e.jsx("div",{className:"mt-3 text-base font-medium text-green-700",children:"Green"}),e.jsx(s,{progress:45,color:"green"}),e.jsx("div",{className:"mt-3 text-base font-medium text-yellow-700",children:"Yellow"}),e.jsx(s,{progress:45,color:"yellow"}),e.jsx("div",{className:"mt-3 text-base font-medium text-indigo-700",children:"Indigo"}),e.jsx(s,{progress:45,color:"indigo"}),e.jsx("div",{className:"mt-3 text-base font-medium text-purple-700",children:"Purple"}),e.jsx(s,{progress:45,color:"purple"})]}),r=l.bind({});r.storyName="With labels";r.args={textLabel:"Amount",labelText:!0,progress:45,labelProgress:!0,size:"lg"};const t=l.bind({});t.storyName="Label positions";t.args={textLabel:"Data left",labelText:!0,textLabelPosition:"outside",progress:45,labelProgress:!0,progressLabelPosition:"inside",size:"lg"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Progress {...args} />",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(): JSX.Element => <>
    <div className="text-base font-medium dark:text-white">Small</div>
    <Progress progress={45} size="sm" />
    <div className="mt-3 text-base font-medium dark:text-white">Default</div>
    <Progress progress={45} size="md" />
    <div className="mt-3 text-lg font-medium dark:text-white">Large</div>
    <Progress progress={45} size="lg" />
    <div className="mt-3 text-lg font-medium dark:text-white">Extra Large</div>
    <Progress progress={45} size="xl" />
  </>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(): JSX.Element => <>
    <div className="text-base font-medium">Dark</div>
    <Progress progress={45} color="dark" />
    <div className="mt-3 text-base font-medium text-cyan-700">Blue</div>
    <Progress progress={45} color="info" />
    <div className="mt-3 text-base font-medium text-red-700">Red</div>
    <Progress progress={45} color="red" />
    <div className="mt-3 text-base font-medium text-green-700">Green</div>
    <Progress progress={45} color="green" />
    <div className="mt-3 text-base font-medium text-yellow-700">Yellow</div>
    <Progress progress={45} color="yellow" />
    <div className="mt-3 text-base font-medium text-indigo-700">Indigo</div>
    <Progress progress={45} color="indigo" />
    <div className="mt-3 text-base font-medium text-purple-700">Purple</div>
    <Progress progress={45} color="purple" />
  </>`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Progress {...args} />",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Progress {...args} />",...t.parameters?.docs?.source}}};const u=["Default","Sizes","Colors","WithLabelInside","WithLabelOutside"];export{i as Colors,o as Default,a as Sizes,r as WithLabelInside,t as WithLabelOutside,u as __namedExportsOrder,p as default};
