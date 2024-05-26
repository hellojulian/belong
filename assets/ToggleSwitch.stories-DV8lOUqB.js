import{j as c}from"./jsx-runtime-BDqaA1IU.js";import{r as m}from"./index-D3g0PtM7.js";import{m as N,g as D,t as z}from"./index-DvTNjOXU.js";import{t as S}from"./bundle-mjs-CsYRq7or.js";const u=m.forwardRef(({checked:e,className:l,color:i="blue",sizing:d="md",disabled:a,label:h,name:C,onChange:p,theme:b={},...f},T)=>{const w=m.useId(),t=N(D().toggleSwitch,b),y=()=>p(!e),x=()=>{y()},j=k=>{k.code=="Enter"&&k.preventDefault()};return c.jsxs(c.Fragment,{children:[C&&e?c.jsx("input",{ref:T,checked:e,hidden:!0,name:C,readOnly:!0,type:"checkbox",className:"sr-only"}):null,c.jsxs("button",{"aria-checked":e,"aria-labelledby":`${w}-flowbite-toggleswitch-label`,disabled:a,id:`${w}-flowbite-toggleswitch`,onClick:x,onKeyDown:j,role:"switch",tabIndex:0,type:"button",className:S(t.root.base,t.root.active[a?"off":"on"],l),...f,children:[c.jsx("div",{"data-testid":"flowbite-toggleswitch-toggle",className:S(t.toggle.base,t.toggle.checked[e?"on":"off"],e&&t.toggle.checked.color[i],t.toggle.sizes[d])}),h?.length?c.jsx("span",{"data-testid":"flowbite-toggleswitch-label",id:`${w}-flowbite-toggleswitch-label`,className:t.root.label,children:h}):null]})]})});u.displayName="ToggleSwitch";const E=Object.keys(z.toggleSwitch.toggle.checked.color),$={title:"Components/ToggleSwitch",component:u},g=({checked:e,...l})=>{const[i,d]=m.useState(e),a=()=>{d(h=>!h)};return c.jsx(u,{...l,checked:i,onChange:a})},s=g.bind({});s.storyName="Toggle switch";s.args={};s.argTypes={color:{description:"Control defaults for colors",control:{type:"radio",options:[...E]}}};const o=g.bind({});o.storyName="Small Toggle switch";o.args={sizing:"sm",label:"small toggle switch"};const n=g.bind({});n.storyName="Medium Toggle switch";n.args={sizing:"md",label:"default toggle switch"};const r=g.bind({});r.storyName="Large Toggle switch";r.args={sizing:"lg",label:"large toggle switch"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  checked,
  ...args
}) => {
  const [switchChecked, setSwitchChecked] = useState(checked);
  const handleChange = () => {
    setSwitchChecked(currentCheck => !currentCheck);
  };
  return <ToggleSwitch {...args} checked={switchChecked} onChange={handleChange} />;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  checked,
  ...args
}) => {
  const [switchChecked, setSwitchChecked] = useState(checked);
  const handleChange = () => {
    setSwitchChecked(currentCheck => !currentCheck);
  };
  return <ToggleSwitch {...args} checked={switchChecked} onChange={handleChange} />;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  checked,
  ...args
}) => {
  const [switchChecked, setSwitchChecked] = useState(checked);
  const handleChange = () => {
    setSwitchChecked(currentCheck => !currentCheck);
  };
  return <ToggleSwitch {...args} checked={switchChecked} onChange={handleChange} />;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  checked,
  ...args
}) => {
  const [switchChecked, setSwitchChecked] = useState(checked);
  const handleChange = () => {
    setSwitchChecked(currentCheck => !currentCheck);
  };
  return <ToggleSwitch {...args} checked={switchChecked} onChange={handleChange} />;
}`,...r.parameters?.docs?.source}}};const v=["DefaultToggleSwitch","SmallToggleSwitch","MediumToggleSwitch","LargeToggleSwitch"];export{s as DefaultToggleSwitch,r as LargeToggleSwitch,n as MediumToggleSwitch,o as SmallToggleSwitch,v as __namedExportsOrder,$ as default};
