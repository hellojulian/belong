import{j as t}from"./jsx-runtime-BDqaA1IU.js";import{r as n}from"./index-D3g0PtM7.js";import{t as a}from"./bundle-mjs-CsYRq7or.js";import{m as b,g}from"./index-DvTNjOXU.js";const p=n.forwardRef(({label:o,helperText:c,color:l="default",sizing:m="md",variant:d,disabled:f=!1,theme:h={},className:i,...e},x)=>{const s=n.useId(),r=b(g().floatingLabel,h);return t.jsxs("div",{children:[t.jsxs("div",{className:a("relative",d==="standard"?"z-0":""),children:[t.jsx("input",{type:"text",id:e.id?e.id:"floatingLabel"+s,"aria-describedby":"outlined_success_help",className:a(r.input[l][d][m],i),placeholder:" ","data-testid":"floating-label",disabled:f,...e,ref:x}),t.jsx("label",{htmlFor:e.id?e.id:"floatingLabel"+s,className:a(r.label[l][d][m],i),children:o})]}),t.jsx("p",{id:"outlined_helper_text"+s,className:a(r.helperText[l],i),children:c})]})});p.displayName="FloatingLabel";export{p as F};