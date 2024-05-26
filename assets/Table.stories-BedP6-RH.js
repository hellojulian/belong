import{j as e}from"./jsx-runtime-BDqaA1IU.js";import{r as n}from"./index-D3g0PtM7.js";import{t as i}from"./bundle-mjs-CsYRq7or.js";import{m as b,g as k}from"./index-DvTNjOXU.js";const u=n.createContext(void 0);function v(){const l=n.useContext(u);if(!l)throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");return l}const w=n.createContext(void 0);function T(){const l=n.useContext(w);if(!l)throw new Error("useTableContext should be used within the TableContext provider!");return l}const C=n.forwardRef(({children:l,className:r,theme:s={},...o},d)=>{const{theme:c}=T(),t=b(c.body,s);return e.jsx(u.Provider,{value:{theme:t},children:e.jsx("tbody",{className:i(t.base,r),ref:d,...o,children:l})})});C.displayName="Table.Body";const y=n.forwardRef(({children:l,className:r,theme:s={},...o},d)=>{const{theme:c}=v(),t=b(c.cell,s);return e.jsx("td",{className:i(t.base,r),ref:d,...o,children:l})});y.displayName="Table.Cell";const p=n.createContext(void 0);function R(){const l=n.useContext(p);if(!l)throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");return l}const f=n.forwardRef(({children:l,className:r,theme:s={},...o},d)=>{const{theme:c}=T(),t=b(c.head,s);return e.jsx(p.Provider,{value:{theme:t},children:e.jsx("thead",{className:i(t.base,r),ref:d,...o,children:e.jsx("tr",{children:l})})})});f.displayName="Table.Head";const g=n.forwardRef(({children:l,className:r,theme:s={},...o},d)=>{const{theme:c}=R(),t=b(c.cell,s);return e.jsx("th",{className:i(t.base,r),ref:d,...o,children:l})});g.displayName="Table.HeadCell";const N=n.forwardRef(({children:l,className:r,theme:s={},...o},d)=>{const{theme:c,hoverable:t,striped:m}=T(),x=b(c.row,s);return e.jsx("tr",{ref:d,"data-testid":"table-row-element",className:i(x.base,m&&x.striped,t&&x.hovered,r),...o,children:l})});N.displayName="Table.Row";const j=n.forwardRef(({children:l,className:r,striped:s,hoverable:o,theme:d={},...c},t)=>{const m=b(k().table,d);return e.jsx("div",{"data-testid":"table-element",className:i(m.root.wrapper),children:e.jsxs(w.Provider,{value:{theme:m,striped:s,hoverable:o},children:[e.jsx("div",{className:i(m.root.shadow,r)}),e.jsx("table",{className:i(m.root.base,r),...c,ref:t,children:l})]})})});j.displayName="Table";const a=Object.assign(j,{Head:f,Body:C,Row:N,Cell:y,HeadCell:g}),M={title:"Components/Tables",component:a},H=l=>e.jsxs(a,{className:"max-w-sm",...l,children:[e.jsxs(a.Head,{children:[e.jsx(a.HeadCell,{children:"Product name"}),e.jsx(a.HeadCell,{children:"Price"}),e.jsx(a.HeadCell,{children:e.jsx("span",{className:"sr-only",children:"Edit"})})]}),e.jsxs(a.Body,{className:"divide-y",children:[e.jsxs(a.Row,{className:"bg-white dark:border-gray-700 dark:bg-neutral-700",children:[e.jsx(a.Cell,{className:"font-medium text-gray-900 whitespace-nowrap dark:text-white",children:'Apple MacBook Pro 17"'}),e.jsx(a.Cell,{children:"$2999"}),e.jsx(a.Cell,{children:e.jsx("a",{href:"/tables",className:"font-medium text-cyan-600 hover:underline dark:text-cyan-500",children:"Edit"})})]}),e.jsxs(a.Row,{className:"bg-white dark:border-gray-700 dark:bg-neutral-700",children:[e.jsx(a.Cell,{className:"font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"Microsoft Surface Pro"}),e.jsx(a.Cell,{children:"$1999"}),e.jsx(a.Cell,{children:e.jsx("a",{href:"/tables",className:"font-medium text-cyan-600 hover:underline dark:text-cyan-500",children:"Edit"})})]}),e.jsxs(a.Row,{className:"bg-white dark:border-gray-700 dark:bg-neutral-700",children:[e.jsx(a.Cell,{className:"font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"Magic Mouse 2"}),e.jsx(a.Cell,{children:"$99"}),e.jsx(a.Cell,{children:e.jsx("a",{href:"/tables",className:"font-medium text-cyan-600 hover:underline dark:text-cyan-500",children:"Edit"})})]}),e.jsxs(a.Row,{className:"bg-white dark:border-gray-700 dark:bg-neutral-700",children:[e.jsx(a.Cell,{className:"font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"Google Pixel Phone"}),e.jsx(a.Cell,{children:"$799"}),e.jsx(a.Cell,{children:e.jsx("a",{href:"/tables",className:"font-medium text-cyan-600 hover:underline dark:text-cyan-500",children:"Edit"})})]}),e.jsxs(a.Row,{className:"bg-white dark:border-gray-700 dark:bg-neutral-700",children:[e.jsx(a.Cell,{className:"font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"Apple Watch 5"}),e.jsx(a.Cell,{children:"$999"}),e.jsx(a.Cell,{children:e.jsx("a",{href:"/tables",className:"font-medium text-cyan-600 hover:underline dark:text-cyan-500",children:"Edit"})})]})]})]}),h=H.bind({});h.storyName="Default";h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Table className="max-w-sm" {...args}>
    <Table.Head>
      <Table.HeadCell>Product name</Table.HeadCell>
      <Table.HeadCell>Price</Table.HeadCell>
      <Table.HeadCell>
        <span className="sr-only">Edit</span>
      </Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-neutral-700">
        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {'Apple MacBook Pro 17"'}
        </Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-neutral-700">
        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Microsoft Surface Pro
        </Table.Cell>
        <Table.Cell>$1999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-neutral-700">
        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Magic Mouse 2</Table.Cell>
        <Table.Cell>$99</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-neutral-700">
        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Google Pixel Phone
        </Table.Cell>
        <Table.Cell>$799</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-neutral-700">
        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch 5</Table.Cell>
        <Table.Cell>$999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>`,...h.parameters?.docs?.source}}};const A=["DefaultTable"];export{h as DefaultTable,A as __namedExportsOrder,M as default};
