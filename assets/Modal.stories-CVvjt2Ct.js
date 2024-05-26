import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{t as Y,u as U}from"./index-Cfm4aYrO.js";import{r as d}from"./index-D3g0PtM7.js";import{B as w}from"./Button-BBo6iamC.js";import{C as A}from"./Checkbox-DATcz7hn.js";import{L as v}from"./Label-DgM3fGTe.js";import{T as z}from"./TextInput-Z7ITnyUb.js";import{e as X,a as q,f as J,g as _,h as G,i as W,j as K,k as Q,F as V}from"./floating-ui.react-BeSb3Qk3.js";import{t as y}from"./bundle-mjs-CsYRq7or.js";import{m as j,g as Z}from"./index-DvTNjOXU.js";import"./iconBase-DeIphD-G.js";import"./HelperText-B6eQdDhC.js";import"./index-B1-ClQV2.js";const k=d.createContext(void 0);function M(){const o=d.useContext(k);if(!o)throw new Error("useModalContext should be used within the ModalContext provider!");return o}const F=({children:o,className:n,theme:r={},...s})=>{const{theme:t,popup:i}=M(),a=j(t.body,r);return e.jsx("div",{className:y(a.base,i&&[a.popup],n),...s,children:o})},P=({children:o,className:n,theme:r={},...s})=>{const{theme:t,popup:i}=M(),a=j(t.footer,r);return e.jsx("div",{className:y(a.base,!i&&a.popup,n),...s,children:o})},I=({as:o="h3",children:n,className:r,theme:s={},id:t,...i})=>{const a=d.useId(),m=t||a,{theme:S,popup:b,onClose:N,setHeaderId:u}=M(),h=j(S.header,s);return d.useLayoutEffect(()=>(u(m),()=>u(void 0)),[m,u]),e.jsxs("div",{className:y(h.base,b&&h.popup,r),...i,children:[e.jsx(o,{id:m,className:h.title,children:n}),e.jsx("button",{"aria-label":"Close",className:h.close.base,type:"button",onClick:N,children:e.jsx(Y,{"aria-hidden":!0,className:h.close.icon})})]})},T=d.forwardRef(({children:o,className:n,dismissible:r=!1,onClose:s,popup:t,position:i="center",root:a,show:m,size:S="2xl",theme:b={},initialFocus:N,...u},h)=>{const[B,E]=d.useState(void 0),l=j(Z().modal,b),{context:f}=X({open:m,onOpenChange:()=>s&&s()}),H=q([f.refs.setFloating,h]),D=J(f),R=_(f,{outsidePressEvent:"mousedown",enabled:r}),L=G(f),{getFloatingProps:O}=W([D,R,L]);return m?e.jsx(k.Provider,{value:{theme:l,popup:t,onClose:s,setHeaderId:E},children:e.jsx(K,{root:a,children:e.jsx(Q,{lockScroll:!0,"data-testid":"modal-overlay",className:y(l.root.base,l.root.positions[i],m?l.root.show.on:l.root.show.off,n),...u,children:e.jsx(V,{context:f,initialFocus:N,children:e.jsx("div",{ref:H,...O(u),"aria-labelledby":B,className:y(l.content.base,l.root.sizes[S]),children:e.jsx("div",{className:l.content.inner,children:o})})})})})}):null});T.displayName="Modal";I.displayName="Modal.Header";F.displayName="Modal.Body";P.displayName="Modal.Footer";const c=Object.assign(T,{Header:I,Body:F,Footer:P}),he={title:"Components/Modal",component:c,args:{show:!1}},C=({children:o,show:n,...r})=>{const[s,t]=d.useState(n),[i,a]=d.useState("sm");return e.jsxs(e.Fragment,{children:[e.jsx(w,{onClick:()=>t(!0),children:"Toggle modal"})," ",e.jsxs(c,{show:s,size:i,onClose:()=>t(!1),...r,children:[" ",o]})]})},g=C.bind({});g.args={children:e.jsxs(e.Fragment,{children:[e.jsx(c.Header,{className:"font-proxima",children:"Terms of Service"}),e.jsx(c.Body,{className:"max-h-60",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("p",{className:"text-sm leading-relaxed text-gray-500 dark:text-gray-400",children:["The Telecommunications Number Plan sets out rules for issuing, transferring and changing telephone numbers. You and we must comply with the Telecommunications Number Plan. You do not own or have any legal interest or goodwill in any telephone number or PIN issued to you. You are entitled to continue to use any telephone number we issue to you, except in circumstances where the Telecommunications Number Plan allows us to recover the number from you.",e.jsx("br",{}),e.jsx("br",{})," You can transfer a telephone number or PIN to another person if you get our consent first. Because you have to pay for any use of your service, whether you authorise it or not, we recommend you protect the security of any PIN used with your service. We can vary customer dialing codes used to access your service with a PIN. With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."]}),e.jsx("p",{className:"text-sm leading-relaxed text-gray-500 dark:text-gray-400",children:"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."})]})}),e.jsxs(c.Footer,{children:[e.jsx(w,{onClick:()=>setShow(!1),children:"I accept"})," ",e.jsxs(w,{color:"secondary",onClick:()=>setShow(!1),children:[" ","Decline"]})]})]})};const p=C.bind({});p.storyName="Pop-up modal";p.args={children:e.jsx(c.Body,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(U,{className:"mx-auto mb-4 text-gray-400 size-14 dark:text-gray-200"}),e.jsx("h3",{className:"mb-5 text-sm font-normal text-gray-500 dark:text-gray-400",children:"Are you sure you want to delete this product?"}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(w,{color:"default",onClick:()=>setShow(!1),children:"Continue"}),e.jsx(w,{color:"secondary",onClick:()=>setShow(!1),children:"Cancel"})]})]})})};const x=C.bind({});x.storyName="Form elements";x.args={children:e.jsxs(e.Fragment,{children:[e.jsx(c.Header,{className:"font-proxima",children:"Log in to Belong"}),e.jsx(c.Body,{children:e.jsxs("div",{className:"px-6 pb-4 space-y-6 sm:pb-6 lg:px-8 xl:pb-8",children:[e.jsxs("div",{children:[e.jsx("div",{className:"block mb-2",children:e.jsx(v,{htmlFor:"email",value:"Your email"})}),e.jsx(z,{id:"email",placeholder:"name@company.com",required:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"block mb-2",children:e.jsx(v,{htmlFor:"password",value:"Your password"})}),e.jsx(z,{id:"password",type:"password",required:!0})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{id:"remember"}),e.jsx(v,{htmlFor:"remember",children:"Remember me"})]}),e.jsx("a",{href:"/modal",className:"text-sm text-cyan-700 hover:underline dark:text-cyan-500",children:"Lost Password?"})]}),e.jsx("div",{className:"w-full",children:e.jsx(w,{children:"Log in to your account"})}),e.jsxs("div",{className:"text-sm font-medium text-gray-500 dark:text-gray-300",children:["Not registered? ",e.jsx("a",{href:"/modal",className:"text-cyan-700 hover:underline dark:text-cyan-500",children:"Create account"})]})]})})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  children,
  show: initialShow,
  ...rest
}): JSX.Element => {
  const [show, setShow] = useState(initialShow); // Initialize show state with initialShow
  const [modalSize, setModalSize] = useState<string>("sm"); // Add state for modalSize

  return <>
      <Button onClick={() => setShow(true)}>Toggle modal</Button>{" "}
      {/* Set show to true on click */}
      <Modal show={show} size={modalSize} onClose={() => setShow(false)} {...rest}>
        {" "}
        {/* Pass show and modalSize state to Modal */}
        {children}
      </Modal>
    </>;
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  children,
  show: initialShow,
  ...rest
}): JSX.Element => {
  const [show, setShow] = useState(initialShow); // Initialize show state with initialShow
  const [modalSize, setModalSize] = useState<string>("sm"); // Add state for modalSize

  return <>
      <Button onClick={() => setShow(true)}>Toggle modal</Button>{" "}
      {/* Set show to true on click */}
      <Modal show={show} size={modalSize} onClose={() => setShow(false)} {...rest}>
        {" "}
        {/* Pass show and modalSize state to Modal */}
        {children}
      </Modal>
    </>;
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
  children,
  show: initialShow,
  ...rest
}): JSX.Element => {
  const [show, setShow] = useState(initialShow); // Initialize show state with initialShow
  const [modalSize, setModalSize] = useState<string>("sm"); // Add state for modalSize

  return <>
      <Button onClick={() => setShow(true)}>Toggle modal</Button>{" "}
      {/* Set show to true on click */}
      <Modal show={show} size={modalSize} onClose={() => setShow(false)} {...rest}>
        {" "}
        {/* Pass show and modalSize state to Modal */}
        {children}
      </Modal>
    </>;
}`,...x.parameters?.docs?.source}}};const ue=["Default","PopUp","FormElements"];export{g as Default,x as FormElements,p as PopUp,ue as __namedExportsOrder,he as default};
