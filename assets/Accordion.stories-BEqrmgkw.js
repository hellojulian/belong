import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{H as k,a as B}from"./index-Cfm4aYrO.js";import{r as l}from"./index-D3g0PtM7.js";import{t as A}from"./bundle-mjs-CsYRq7or.js";import{m as y,g as T}from"./index-DvTNjOXU.js";import"./iconBase-DeIphD-G.js";const v=l.createContext(void 0);function P(){const n=l.useContext(v);if(!n)throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");return n}const N=({children:n,className:t,theme:r={},...a})=>{const{isOpen:i}=P(),c=y(T().accordion.content,r);return e.jsx("div",{className:A(c.base,t),"data-testid":"flowbite-accordion-content",hidden:!i,...a,children:n})},j=({children:n,...t})=>{const{alwaysOpen:r}=t,[a,i]=l.useState(t.isOpen),c=r?{...t,isOpen:a,setOpen:()=>i(!a)}:t;return e.jsx(v.Provider,{value:c,children:n})},O=({as:n="h2",children:t,className:r,theme:a={},...i})=>{const{arrowIcon:c,flush:w,isOpen:h,setOpen:d}=P(),f=()=>typeof d<"u"&&d(),s=y(T().accordion.title,a);return e.jsxs("button",{className:A(s.base,s.flush[w?"on":"off"],s.open[h?"on":"off"],r),onClick:f,type:"button",...i,children:[e.jsx(n,{className:s.heading,"data-testid":"flowbite-accordion-heading",children:t}),c&&e.jsx(c,{"aria-hidden":!0,className:A(s.arrow.base,s.arrow.open[h?"on":"off"]),"data-testid":"flowbite-accordion-arrow"})]})},S=({alwaysOpen:n=!1,arrowIcon:t=k,children:r,flush:a=!1,collapseAll:i=!1,className:c,theme:w={},...h})=>{const[d,f]=l.useState(i?-1:0),s=l.useMemo(()=>l.Children.map(r,(I,x)=>l.cloneElement(I,{alwaysOpen:n,arrowIcon:t,flush:a,isOpen:d===x,setOpen:()=>f(d===x?-1:x)})),[n,t,r,a,d]),C=y(T().accordion.root,w);return e.jsx("div",{className:A(C.base,C.flush[a?"on":"off"],c),"data-testid":"flowbite-accordion",...h,children:s})};S.displayName="Accordion";j.displayName="Accordion.Panel";O.displayName="Accordion.Title";N.displayName="Accordion.Content";const o=Object.assign(S,{Panel:j,Title:O,Content:N}),R={title:"Components/Accordion",component:o,args:{alwaysOpen:!1,flush:!1}},W=k,b=n=>e.jsxs(o,{arrowIcon:W,...n,children:[e.jsxs(o.Panel,{children:[e.jsx(o.Title,{children:"Plans made for digital lives"}),e.jsx(o.Content,{children:e.jsxs("p",{className:"mb-2 text-neutral-900 dark:text-neutral-100",children:["Our lives are pretty online these days, and most people just want a simple, affordable way to get connected.",e.jsx("br",{}),e.jsx("br",{}),"So, we put the good stuff first (hello, unlimited home internet and mobile data banking). We don’t tie you down (seeya later, lock-in contracts). And we’re only a call, chat or email away"," ",e.jsx("a",{href:"https://www.belong.com.au/go/about-belong",className:"underline text-belong-500 dark:text-belong-500",children:"if you need us."})]})})]}),e.jsxs(o.Panel,{children:[e.jsx(o.Title,{children:"Backed by Telstra"}),e.jsx(o.Content,{children:e.jsx("p",{className:"mb-2 text-neutral-900 dark:text-neutral-100",children:"Telstra started Belong in 2013. The plan was to start a company that could offer the usual telco things at a lower price. That meant no stores or new phone deals, but the same great security and coverage – using parts of the Telstra mobile network."})})]}),e.jsxs(o.Panel,{children:[e.jsx(o.Title,{children:"Climate Active program certified"}),e.jsx(o.Content,{children:e.jsx("p",{className:"mb-2 text-neutral-900 dark:text-neutral-100",children:"It takes a lot of energy to store and send the data that makes our digital world so good. Since 2019, we’ve been calculating and offsetting the carbon emissions associated with all our customers’ plans, with help from Climate Active."})})]})]}),u=b.bind({});u.storyName="Always open";u.args={alwaysOpen:!0};const g=b.bind({}),p=b.bind({});p.args={flush:!0};const m=b.bind({});m.storyName="With arrow icon";m.args={arrowIcon:B};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <Accordion arrowIcon={icon} {...args}>
    <Accordion.Panel>
      <Accordion.Title>Plans made for digital lives</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-neutral-900 dark:text-neutral-100">
          Our lives are pretty online these days, and most people just want a
          simple, affordable way to get connected.<br></br><br></br>So, we put the good stuff
          first (hello, unlimited home internet and mobile data banking). We
          don’t tie you down (seeya later, lock-in contracts). And we’re only a
          call, chat or email away{" "}
          <a href="https://www.belong.com.au/go/about-belong" className="underline text-belong-500 dark:text-belong-500">
            if you need us.
          </a>
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Backed by Telstra</Accordion.Title>
      <Accordion.Content>
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">
        Telstra started Belong in 2013. The plan was to start a company that could offer the usual telco things at a lower price. That meant no stores or new phone deals, but the same great security and coverage – using parts of the Telstra mobile network.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
      Climate Active program certified
      </Accordion.Title>
      <Accordion.Content>
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">
        It takes a lot of energy to store and send the data that makes our digital world so good. Since 2019, we’ve been calculating and offsetting the carbon emissions associated with all our customers’ plans, with help from Climate Active.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <Accordion arrowIcon={icon} {...args}>
    <Accordion.Panel>
      <Accordion.Title>Plans made for digital lives</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-neutral-900 dark:text-neutral-100">
          Our lives are pretty online these days, and most people just want a
          simple, affordable way to get connected.<br></br><br></br>So, we put the good stuff
          first (hello, unlimited home internet and mobile data banking). We
          don’t tie you down (seeya later, lock-in contracts). And we’re only a
          call, chat or email away{" "}
          <a href="https://www.belong.com.au/go/about-belong" className="underline text-belong-500 dark:text-belong-500">
            if you need us.
          </a>
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Backed by Telstra</Accordion.Title>
      <Accordion.Content>
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">
        Telstra started Belong in 2013. The plan was to start a company that could offer the usual telco things at a lower price. That meant no stores or new phone deals, but the same great security and coverage – using parts of the Telstra mobile network.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
      Climate Active program certified
      </Accordion.Title>
      <Accordion.Content>
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">
        It takes a lot of energy to store and send the data that makes our digital world so good. Since 2019, we’ve been calculating and offsetting the carbon emissions associated with all our customers’ plans, with help from Climate Active.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Accordion arrowIcon={icon} {...args}>
    <Accordion.Panel>
      <Accordion.Title>Plans made for digital lives</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-neutral-900 dark:text-neutral-100">
          Our lives are pretty online these days, and most people just want a
          simple, affordable way to get connected.<br></br><br></br>So, we put the good stuff
          first (hello, unlimited home internet and mobile data banking). We
          don’t tie you down (seeya later, lock-in contracts). And we’re only a
          call, chat or email away{" "}
          <a href="https://www.belong.com.au/go/about-belong" className="underline text-belong-500 dark:text-belong-500">
            if you need us.
          </a>
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Backed by Telstra</Accordion.Title>
      <Accordion.Content>
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">
        Telstra started Belong in 2013. The plan was to start a company that could offer the usual telco things at a lower price. That meant no stores or new phone deals, but the same great security and coverage – using parts of the Telstra mobile network.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
      Climate Active program certified
      </Accordion.Title>
      <Accordion.Content>
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">
        It takes a lot of energy to store and send the data that makes our digital world so good. Since 2019, we’ve been calculating and offsetting the carbon emissions associated with all our customers’ plans, with help from Climate Active.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Accordion arrowIcon={icon} {...args}>
    <Accordion.Panel>
      <Accordion.Title>Plans made for digital lives</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-neutral-900 dark:text-neutral-100">
          Our lives are pretty online these days, and most people just want a
          simple, affordable way to get connected.<br></br><br></br>So, we put the good stuff
          first (hello, unlimited home internet and mobile data banking). We
          don’t tie you down (seeya later, lock-in contracts). And we’re only a
          call, chat or email away{" "}
          <a href="https://www.belong.com.au/go/about-belong" className="underline text-belong-500 dark:text-belong-500">
            if you need us.
          </a>
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Backed by Telstra</Accordion.Title>
      <Accordion.Content>
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">
        Telstra started Belong in 2013. The plan was to start a company that could offer the usual telco things at a lower price. That meant no stores or new phone deals, but the same great security and coverage – using parts of the Telstra mobile network.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
      Climate Active program certified
      </Accordion.Title>
      <Accordion.Content>
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">
        It takes a lot of energy to store and send the data that makes our digital world so good. Since 2019, we’ve been calculating and offsetting the carbon emissions associated with all our customers’ plans, with help from Climate Active.
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>`,...m.parameters?.docs?.source}}};const q=["AlwaysOpen","Default","Flush","WithArrowIcon"];export{u as AlwaysOpen,g as Default,p as Flush,m as WithArrowIcon,q as __namedExportsOrder,R as default};
