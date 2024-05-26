import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{r}from"./index-D3g0PtM7.js";import{B as i}from"./Button-BBo6iamC.js";import{a as z,F as D}from"./floating-ui.react-BeSb3Qk3.js";import{m as T,g as M}from"./index-DvTNjOXU.js";import{u as _,a as V,g as L}from"./use-floating-C5Wvtv5S.js";import"./bundle-mjs-CsYRq7or.js";import"./index-B1-ClQV2.js";function c({children:t,content:d,theme:a={},arrow:h=!0,trigger:u="click",initialOpen:b,open:f,onOpenChange:j,placement:N="bottom",...w}){const[k,O]=r.useState(!!b),g=r.useRef(null),l=T(M().popover,a),m=f??k,C=_({open:m,placement:N,arrowRef:g,setOpen:j??O}),{floatingStyles:P,context:p,placement:R,middlewareData:{arrow:{x:I,y:B}={}},refs:F}=C,{getFloatingProps:S,getReferenceProps:v}=V({context:p,role:"dialog",trigger:u}),A=t.ref,x=z([p.refs.setReference,A]);if(!r.isValidElement(t))throw Error("Invalid target element");const E=r.useMemo(()=>r.cloneElement(t,v({ref:x,"data-testid":"flowbite-popover-target",...t?.props})),[t,x,v]);return e.jsxs(e.Fragment,{children:[E,m&&e.jsx(D,{context:p,modal:!0,children:e.jsx("div",{className:l.base,ref:F.setFloating,"data-testid":"flowbite-popover",...w,style:P,...S(),children:e.jsxs("div",{className:"relative",children:[h&&e.jsx("div",{className:l.arrow.base,"data-testid":"flowbite-popover-arrow",ref:g,style:{top:B??" ",left:I??" ",right:" ",bottom:" ",[L({placement:R})]:l.arrow.placement},children:" "}),e.jsx("div",{className:l.content,children:d})]})})})]})}const Z={title:"Components/Popover",component:c,argTypes:{trigger:{options:["click","hover"],control:{type:"inline-radio"},defaultValue:"click"}}},y=t=>e.jsx("div",{className:"flex items-center justify-center w-full h-96",children:e.jsx(c,{...t,"aria-labelledby":"popover-title",content:e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{id:"popover-title",className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]})})}),n=y.bind({});n.args={placement:"top",onOpenChange:void 0,open:void 0,children:e.jsx(i,{children:"Default popover"})};const o=y.bind({});o.args={initialOpen:!0,placement:"top",onOpenChange:void 0,open:void 0,children:e.jsx(i,{children:"Initial open"})};const U=t=>{const[d,a]=r.useState(!1);return e.jsx("div",{className:"flex items-center justify-center w-full h-96",children:e.jsx(c,{...t,"aria-labelledby":"popover-title",open:d,onOpenChange:a,content:e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{id:"popover-title",className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsxs("div",{className:"px-3 py-2 space-y-4",children:[e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"}),e.jsx(i,{color:"secondary",onClick:()=>a(!1),children:"Close"})]})]}),children:e.jsx(i,{onClick:()=>a(!0),children:"Controlled popover"})})})},s=U.bind({});s.args={initialOpen:!0,placement:"top",onOpenChange:void 0,open:void 0,children:e.jsx(i,{children:"Initial open"})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <div className="flex items-center justify-center w-full h-96">
      <Popover {...args} aria-labelledby="popover-title" content={<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <h3 id="popover-title" className="font-semibold text-gray-900 dark:text-white">
                Popover title
              </h3>
            </div>
            <div className="px-3 py-2">
              <p>And here's some amazing content. It's very engaging. Right?</p>
            </div>
          </div>} />
    </div>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <div className="flex items-center justify-center w-full h-96">
      <Popover {...args} aria-labelledby="popover-title" content={<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <h3 id="popover-title" className="font-semibold text-gray-900 dark:text-white">
                Popover title
              </h3>
            </div>
            <div className="px-3 py-2">
              <p>And here's some amazing content. It's very engaging. Right?</p>
            </div>
          </div>} />
    </div>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div className="flex items-center justify-center w-full h-96">
      <Popover {...args} aria-labelledby="popover-title" open={open} onOpenChange={setOpen} content={<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <h3 id="popover-title" className="font-semibold text-gray-900 dark:text-white">
                Popover title
              </h3>
            </div>
            <div className="px-3 py-2 space-y-4">
              <p>And here's some amazing content. It's very engaging. Right?</p>
              <Button color="secondary" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </div>}>
        <Button onClick={() => setOpen(true)}>Controlled popover</Button>
      </Popover>
    </div>;
}`,...s.parameters?.docs?.source}}};const $=["Default","InitialOpen","Controlled"];export{s as Controlled,n as Default,o as InitialOpen,$ as __namedExportsOrder,Z as default};
