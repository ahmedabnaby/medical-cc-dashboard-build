(this["webpackJsonpekseer-dashboard"]=this["webpackJsonpekseer-dashboard"]||[]).push([[8],{326:function(e,t,a){"use strict";var r=a(0),o=r.createContext();t.a=o},327:function(e,t,a){"use strict";var r=a(0),o=r.createContext();t.a=o},378:function(e,t,a){"use strict";var r=a(2),o=a(4),n=a(0),i=a(8),c=a(213),s=a(10),l=a(6),d=a(161),b=a(214);function j(e){return Object(d.a)("MuiTableContainer",e)}Object(b.a)("MuiTableContainer",["root"]);var p=a(1),u=Object(l.a)("div",{},{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),g=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableContainer"}),n=a.className,l=a.component,d=void 0===l?"div":l,b=Object(o.a)(a,["className","component"]),g=Object(r.a)({},a,{component:d}),O=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(g);return Object(p.jsx)(u,Object(r.a)({ref:t,as:d,className:Object(i.a)(O.root,n),styleProps:g},b))}));t.a=g},379:function(e,t,a){"use strict";var r=a(4),o=a(2),n=a(0),i=a(8),c=a(213),s=a(327),l=a(10),d=a(6),b=a(161),j=a(214);function p(e){return Object(b.a)("MuiTable",e)}Object(j.a)("MuiTable",["root","stickyHeader"]);var u=a(1),g=Object(d.a)("table",{},{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(o.a)({},t.root,a.stickyHeader&&t.stickyHeader)}})((function(e){var t=e.theme,a=e.styleProps;return Object(o.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),O="table",h=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,j=void 0===b?O:b,h=a.padding,v=void 0===h?"normal":h,m=a.size,f=void 0===m?"medium":m,y=a.stickyHeader,x=void 0!==y&&y,k=Object(r.a)(a,["className","component","padding","size","stickyHeader"]),T=Object(o.a)({},a,{component:j,padding:v,size:f,stickyHeader:x}),M=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(c.a)(a,p,t)}(T),R=n.useMemo((function(){return{padding:v,size:f,stickyHeader:x}}),[v,f,x]);return Object(u.jsx)(s.a.Provider,{value:R,children:Object(u.jsx)(g,Object(o.a)({as:j,role:j===O?null:"table",ref:t,className:Object(i.a)(M.root,d),styleProps:T},k))})}));t.a=h},380:function(e,t,a){"use strict";var r=a(2),o=a(4),n=a(0),i=a(8),c=a(213),s=a(326),l=a(10),d=a(6),b=a(161),j=a(214);function p(e){return Object(b.a)("MuiTableHead",e)}Object(j.a)("MuiTableHead",["root"]);var u=a(1),g=Object(d.a)("thead",{},{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),O={variant:"head"},h="thead",v=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),n=a.className,d=a.component,b=void 0===d?h:d,j=Object(o.a)(a,["className","component"]),v=Object(r.a)({},a,{component:b}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(v);return Object(u.jsx)(s.a.Provider,{value:O,children:Object(u.jsx)(g,Object(r.a)({as:b,className:Object(i.a)(m.root,n),ref:t,role:b===h?null:"rowgroup",styleProps:v},j))})}));t.a=v},381:function(e,t,a){"use strict";var r=a(3),o=a(4),n=a(2),i=a(0),c=a(8),s=a(213),l=a(326),d=a(17),b=a(10),j=a(6),p=a(161),u=a(214);function g(e){return Object(p.a)("MuiTableRow",e)}var O=Object(u.a)("MuiTableRow",["root","selected","hover","head","footer"]),h=a(1),v=Object(j.a)("tr",{},{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.root,a.head&&t.head,a.footer&&t.footer)}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(r.a)(t,"&.".concat(O.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(r.a)(t,"&.".concat(O.selected),{backgroundColor:Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),m=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),r=a.className,d=a.component,j=void 0===d?"tr":d,p=a.hover,u=void 0!==p&&p,O=a.selected,m=void 0!==O&&O,f=Object(o.a)(a,["className","component","hover","selected"]),y=i.useContext(l.a),x=Object(n.a)({},a,{component:j,hover:u,selected:m,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),k=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,g,t)}(x);return Object(h.jsx)(v,Object(n.a)({as:j,ref:t,className:Object(c.a)(k.root,r),role:"tr"===j?null:"row",styleProps:x},f))}));t.a=m},382:function(e,t,a){"use strict";var r=a(3),o=a(4),n=a(2),i=a(0),c=a(8),s=a(213),l=a(9),d=a(17),b=a(327),j=a(326),p=a(10),u=a(6),g=a(161),O=a(214);function h(e){return Object(g.a)("MuiTableCell",e)}var v=Object(O.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),m=a(1),f=Object(u.a)("td",{},{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.root,t[a.variant],t["size".concat(Object(l.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(l.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(l.a)(a.align))],a.stickyHeader&&t.stickyHeader)}})((function(e){var t=e.theme,a=e.styleProps;return Object(n.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(d.i)(Object(d.a)(t.palette.divider,1),.88):Object(d.b)(Object(d.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(r.a)({padding:"6px 16px"},"&.".concat(v.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:t.palette.background.default})})),y=i.forwardRef((function(e,t){var a,r=Object(p.a)({props:e,name:"MuiTableCell"}),d=r.align,u=void 0===d?"inherit":d,g=r.className,O=r.component,v=r.padding,y=r.scope,x=r.size,k=r.sortDirection,T=r.variant,M=Object(o.a)(r,["align","className","component","padding","scope","size","sortDirection","variant"]),R=i.useContext(b.a),w=i.useContext(j.a),C=w&&"head"===w.variant;a=O||(C?"th":"td");var H=y;!H&&C&&(H="col");var N=T||w&&w.variant,z=Object(n.a)({},r,{align:u,component:a,padding:v||(R&&R.padding?R.padding:"normal"),size:x||(R&&R.size?R.size:"medium"),sortDirection:k,stickyHeader:"head"===N&&R&&R.stickyHeader,variant:N}),P=function(e){var t=e.classes,a=e.variant,r=e.align,o=e.padding,n=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat(Object(l.a)(r)),"normal"!==o&&"padding".concat(Object(l.a)(o)),"size".concat(Object(l.a)(n))]};return Object(s.a)(i,h,t)}(z),A=null;return k&&(A="asc"===k?"ascending":"descending"),Object(m.jsx)(f,Object(n.a)({as:a,ref:t,className:Object(c.a)(P.root,g),"aria-sort":A,scope:H,styleProps:z},M))}));t.a=y},383:function(e,t,a){"use strict";var r=a(2),o=a(4),n=a(0),i=a(8),c=a(213),s=a(326),l=a(10),d=a(6),b=a(161),j=a(214);function p(e){return Object(b.a)("MuiTableBody",e)}Object(j.a)("MuiTableBody",["root"]);var u=a(1),g=Object(d.a)("tbody",{},{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),O={variant:"body"},h="tbody",v=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),n=a.className,d=a.component,b=void 0===d?h:d,j=Object(o.a)(a,["className","component"]),v=Object(r.a)({},a,{component:b}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(v);return Object(u.jsx)(s.a.Provider,{value:O,children:Object(u.jsx)(g,Object(r.a)({className:Object(i.a)(m.root,n),as:b,ref:t,role:b===h?null:"rowgroup",styleProps:v},j))})}));t.a=v},549:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a(0),o=a.n(r),n=a(231),i=a(301),c=a(225),s=a(168),l=a(226),d=a(54),b=a(379),j=a(383),p=a(382),u=a(378),g=a(380),O=a(381),h=a(1),v=Object(n.a)({table:{minWidth:350}});function m(e,t,a,r,o){return{name:e,calories:t,fat:a,carbs:r,protein:o}}var f=[m("Frozen yoghurt",159,6,24,4),m("Ice cream sandwich",237,9,37,4.3),m("Eclair",262,16,24,6),m("Cupcake",305,3.7,67,4.3),m("Gingerbread",356,16,49,3.9)];function y(){var e=v();return Object(h.jsx)(o.a.Fragment,{children:Object(h.jsx)(i.a,{container:!0,spacing:d.b,children:Object(h.jsx)(i.a,{item:!0,xs:12,children:Object(h.jsxs)(c.a,{children:[Object(h.jsx)(s.a,{title:"Basic Table"}),Object(h.jsx)(l.a,{}),Object(h.jsx)(u.a,{children:Object(h.jsxs)(b.a,{className:e.table,"aria-label":"simple table",children:[Object(h.jsx)(g.a,{children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(p.a,{children:"Dessert (100g serving)"}),Object(h.jsx)(p.a,{align:"right",children:"Calories"}),Object(h.jsx)(p.a,{align:"right",children:"Fat\xa0(g)"}),Object(h.jsx)(p.a,{align:"right",children:"Carbs\xa0(g)"}),Object(h.jsx)(p.a,{align:"right",children:"Protein\xa0(g)"}),Object(h.jsx)(p.a,{align:"right",children:"Protein\xa0(g)"}),Object(h.jsx)(p.a,{align:"right",children:"Protein\xa0(g)"}),Object(h.jsx)(p.a,{align:"right",children:"Protein\xa0(g)"})]})}),Object(h.jsx)(j.a,{children:f.map((function(e){return Object(h.jsxs)(O.a,{children:[Object(h.jsx)(p.a,{component:"th",scope:"row",children:e.name}),Object(h.jsx)(p.a,{align:"right",children:e.calories}),Object(h.jsx)(p.a,{align:"right",children:e.fat}),Object(h.jsx)(p.a,{align:"right",children:e.carbs}),Object(h.jsx)(p.a,{align:"right",children:e.protein}),Object(h.jsx)(p.a,{align:"right",children:e.protein}),Object(h.jsx)(p.a,{align:"right",children:e.protein}),Object(h.jsx)(p.a,{align:"right",children:e.protein})]},e.name)}))})]})})]})})})})}}}]);
//# sourceMappingURL=8.5e3d621a.chunk.js.map