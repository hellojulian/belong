import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{r as E}from"./index-D3g0PtM7.js";import{v as B,w as D}from"./index-Cfm4aYrO.js";import{t as l}from"./bundle-mjs-CsYRq7or.js";import{m as C,g as j}from"./index-DvTNjOXU.js";import"./iconBase-DeIphD-G.js";const _=(t,a)=>t>=a?[]:[...Array(a-t+1).keys()].map(s=>s+t),v=({active:t,children:a,className:s,onClick:g,theme:o={},...r})=>{const i=C(j().pagination,o);return e.jsx("button",{type:"button",className:l(t&&i.pages.selector.active,s),onClick:g,...r,children:a})};v.displayName="Pagination.Button";const N=({children:t,className:a,onClick:s,theme:g={},disabled:o=!1,...r})=>{const i=C(j().pagination,g);return e.jsx("button",{type:"button",className:l(o&&i.pages.selector.disabled,a),disabled:o,onClick:s,...r,children:t})};N.displayName="Pagination.Navigation";const w=({className:t,currentPage:a,layout:s="pagination",nextLabel:g="Next",onPageChange:o,previousLabel:r="Previous",renderPaginationButton:i=n=>e.jsx(v,{...n}),showIcons:c=!1,theme:T={},totalPages:y,...M})=>{const n=C(j().pagination,T),f=Math.min(Math.max(s==="pagination"?a+2:a+4,5),y),S=Math.max(1,f-4),W=()=>{o(Math.min(a+1,y))},k=()=>{o(Math.max(a-1,1))};return e.jsxs("nav",{className:l(n.base,t),...M,children:[s==="table"&&e.jsxs("div",{className:n.layout.table.base,children:["Showing ",e.jsx("span",{className:n.layout.table.span,children:S})," to ",e.jsx("span",{className:n.layout.table.span,children:f})," of ",e.jsx("span",{className:n.layout.table.span,children:y})," Entries"]}),e.jsxs("ul",{className:n.pages.base,children:[e.jsx("li",{children:e.jsxs(N,{className:l(n.pages.previous.base,c&&n.pages.showIcon),onClick:k,disabled:a===1,children:[c&&e.jsx(B,{"aria-hidden":!0,className:n.pages.previous.icon}),r]})}),s==="pagination"&&_(S,f).map(u=>e.jsx("li",{"aria-current":u===a?"page":void 0,children:i({className:l(n.pages.selector.base,a===u&&n.pages.selector.active),active:u===a,onClick:()=>o(u),children:u})},u)),e.jsx("li",{children:e.jsxs(N,{className:l(n.pages.next.base,c&&n.pages.showIcon),onClick:W,disabled:a===y,children:[g,c&&e.jsx(D,{"aria-hidden":!0,className:n.pages.next.icon})]})})]})]})};w.displayName="Pagination";const I=Object.assign(w,{Button:v}),z={title:"Components/Pagination",component:I,decorators:[t=>e.jsx("div",{className:"flex items-center justify-center text-center",children:e.jsx(t,{})})]},h=({currentPage:t=1,layout:a="pagination",totalPages:s=100,...g})=>{const[o,r]=E.useState(t),i=c=>{r(c)};return E.useEffect(()=>{r(t)},[t]),e.jsx(I,{...g,currentPage:o,layout:a,onPageChange:i,totalPages:s})},x=h.bind({}),p=h.bind({});p.storyName="Pagination with icons";p.args={showIcons:!0};const d=h.bind({});d.args={layout:"navigation"};const P=h.bind({});P.storyName="Nav with icons";P.args={layout:"navigation",showIcons:!0};const b=h.bind({});b.args={layout:"table"};const m=h.bind({});m.storyName="Table with icons";m.args={layout:"table",showIcons:!0};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
  currentPage = 1,
  layout = "pagination",
  totalPages = 100,
  ...rest
}) => {
  const [page, setPage] = useState(currentPage);
  const onPageChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return <Pagination {...rest} currentPage={page} layout={layout} onPageChange={onPageChange} totalPages={totalPages} />;
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  currentPage = 1,
  layout = "pagination",
  totalPages = 100,
  ...rest
}) => {
  const [page, setPage] = useState(currentPage);
  const onPageChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return <Pagination {...rest} currentPage={page} layout={layout} onPageChange={onPageChange} totalPages={totalPages} />;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  currentPage = 1,
  layout = "pagination",
  totalPages = 100,
  ...rest
}) => {
  const [page, setPage] = useState(currentPage);
  const onPageChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return <Pagination {...rest} currentPage={page} layout={layout} onPageChange={onPageChange} totalPages={totalPages} />;
}`,...d.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`({
  currentPage = 1,
  layout = "pagination",
  totalPages = 100,
  ...rest
}) => {
  const [page, setPage] = useState(currentPage);
  const onPageChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return <Pagination {...rest} currentPage={page} layout={layout} onPageChange={onPageChange} totalPages={totalPages} />;
}`,...P.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
  currentPage = 1,
  layout = "pagination",
  totalPages = 100,
  ...rest
}) => {
  const [page, setPage] = useState(currentPage);
  const onPageChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return <Pagination {...rest} currentPage={page} layout={layout} onPageChange={onPageChange} totalPages={totalPages} />;
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  currentPage = 1,
  layout = "pagination",
  totalPages = 100,
  ...rest
}) => {
  const [page, setPage] = useState(currentPage);
  const onPageChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return <Pagination {...rest} currentPage={page} layout={layout} onPageChange={onPageChange} totalPages={totalPages} />;
}`,...m.parameters?.docs?.source}}};const F=["Default","PaginationWithIcons","Nav","NavWithIcons","Table","TableWithIcons"];export{x as Default,d as Nav,P as NavWithIcons,p as PaginationWithIcons,b as Table,m as TableWithIcons,F as __namedExportsOrder,z as default};
