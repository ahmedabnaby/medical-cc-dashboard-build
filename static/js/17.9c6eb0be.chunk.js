(this["webpackJsonpekseer-dashboard"]=this["webpackJsonpekseer-dashboard"]||[]).push([[17],{562:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(301),i=a(54),s=a(117),o=a.n(s),l=a(137),d=a(12),j=a(13),u=a(3),b=a(231),p=a(225),h=a(227),m=a(300),x=a(159),O=a(567),f=a(167),g=a(354),A=a.n(g),v=a(422),y=a.n(v),k=a(355),C=a.n(k),w=a(356),N=a.n(w),S=a(357),z=a.n(S),I=a(358),B=a.n(I),R=a(560),D=a(1),_=Object(b.a)((function(e){return{card:{backgroundColor:e.palette.purple.main,color:"#fff",overflow:"hidden",position:"relative","&:after":Object(u.a)({content:'""',position:"absolute",width:"210px",height:"210px",backgroundColor:e.palette.purple.dark,borderRadius:"50%",top:"-85px",right:"-95px"},e.breakpoints.down("xs"),{top:"-105px",right:"-140px"}),"&:before":Object(u.a)({content:'""',position:"absolute",width:"210px",height:"210px",backgroundColor:e.palette.purple.dark,borderRadius:"50%",top:"-125px",right:"-15px",opacity:.7},e.breakpoints.down("xs"),{top:"-155px",right:"-70px"})},content:{padding:"20px !important"},avatar:Object(j.a)(Object(j.a)(Object(j.a)({},e.typography.commonAvatar),e.typography.largeAvatar),{},{backgroundColor:e.palette.purple.dark,marginTop:"8px"}),avatarRight:Object(j.a)(Object(j.a)(Object(j.a)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{backgroundColor:e.palette.purple.main,color:e.palette.purple[200],zIndex:1}),cardHeading:{fontSize:"2.125rem",fontWeight:500,marginRight:"8px",marginTop:"18px",marginBottom:"8px"},subHeading:{fontSize:"1.5rem",fontWeight:500,color:e.palette.purple[200]},avatarCricle:Object(j.a)(Object(j.a)({cursor:"pointer"},e.typography.smallAvatar),{},{backgroundColor:e.palette.purple[200],color:e.palette.purple.dark}),circleIcon:{transform:"rotate3d(1, 1, 1, 45deg)"},menuItem:{marginRight:"14px",fontSize:"1.25rem"}}})),E=function(){var e=_(),t=0,a=c.a.useState(null),i=Object(d.a)(a,2),s=i[0],j=i[1],u=c.a.useState([]),b=Object(d.a)(u,2),g=b[0],v=b[1],k=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat("https://backend.alsahaba.sa/api","/users/")).then((function(e){v(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){j(null)};return Object(n.useEffect)((function(){k()}),[]),Object(D.jsx)(p.a,{className:e.card,children:Object(D.jsx)(h.a,{className:e.content,children:Object(D.jsxs)(r.a,{container:!0,direction:"column",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,justifyContent:"space-between",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(m.a,{variant:"rounded",className:e.avatar,children:Object(D.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAQAAADlauupAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cIGhcvOZwxeDAAAAFuSURBVDjLjZO9bQJBEIWHv4MEOoCIiJ+QIkwCPRDQgYkoAcQJBBI14ApsKAEk/hJsB9ABkIBgPgeLfCzns/2klVazb3be25kVeQBaLILrwnKJHo/o8QjLJXQ6aKEgQUDjcej34XolEJcL9Hqo4/yQPJlYXP34gGbTrM9P+2w8ti6BwcCutNmgyaRXIJVC399tTrd75/lR9vOzzyKNht9OPh+WUK0mEg7b9MvF/0qPsUhEqNUEViv/Yy0WkEh41RMJ0wk/LwT7vYjn18N8LjIcmn29LlIs+jmHwy8X/Af7fVhkt7OD06lQKolEo6EbRKJRoVQSZjObu90KdDqep/MZTaeDhy2TgfPZm4d2W9BCwbQEYLX6SzSs114bc7lbsNczwdMJnp6Ck8tlwwFw3TtpjoO+vd10KYxGUKmg2SyazUK1ir68mDNAX1/RWOzBn+NAt+vZCfpMrutLtmXm82i7bYbpcDBrsUBbrW/Pd/gCIv/lSBPGlW8AAAAASUVORK5CYII=",alt:"Notification"})})}),Object(D.jsxs)(r.a,{item:!0,children:[Object(D.jsx)(m.a,{variant:"rounded",className:e.avatarRight,"aria-controls":"menu-earning-card","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:Object(D.jsx)(A.a,{fontSize:"inherit"})}),Object(D.jsxs)(x.a,{id:"menu-earning-card",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:w,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(D.jsxs)(O.a,{onClick:w,children:[Object(D.jsx)(C.a,{fontSize:"inherit",className:e.menuItem})," Import Card"]}),Object(D.jsxs)(O.a,{onClick:w,children:[Object(D.jsx)(N.a,{fontSize:"inherit",className:e.menuItem})," Copy Data"]}),Object(D.jsxs)(O.a,{onClick:w,children:[Object(D.jsx)(z.a,{fontSize:"inherit",className:e.menuItem})," Export"]}),Object(D.jsxs)(O.a,{onClick:w,children:[Object(D.jsx)(B.a,{fontSize:"inherit",className:e.menuItem})," Archive File"]})]})]})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,alignItems:"center",children:[Object(D.jsxs)(r.a,{item:!0,children:[Object(D.jsx)("div",{style:{display:"none"},children:null===g||void 0===g?void 0:g.map((function(e){return e.is_doctor?"":t++}))}),Object(D.jsx)(f.a,{className:e.cardHeading,children:t})]}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(m.a,{className:e.avatarCricle,children:Object(D.jsx)(y.a,{fontSize:"inherit",className:e.circleIcon})})})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{className:e.subHeading,children:"Registered Patients"})})]})})})},U=a(386),W=a.n(U),T=Object(b.a)((function(e){return{card:{backgroundColor:e.palette.primary.main,color:"#fff",overflow:"hidden",position:"relative","&:after":Object(u.a)({content:'""',position:"absolute",width:"210px",height:"210px",backgroundColor:e.palette.primary.dark,borderRadius:"50%",top:"-85px",right:"-95px"},e.breakpoints.down("xs"),{top:"-105px",right:"-140px"}),"&:before":Object(u.a)({content:'""',position:"absolute",width:"210px",height:"210px",backgroundColor:e.palette.primary.dark,borderRadius:"50%",top:"-125px",right:"-15px",opacity:.7},e.breakpoints.down("xs"),{top:"-155px",right:"-70px"})},content:{padding:"20px !important"},avatar:Object(j.a)(Object(j.a)(Object(j.a)({},e.typography.commonAvatar),e.typography.largeAvatar),{},{backgroundColor:e.palette.primary.dark,color:"#fff",marginTop:"8px"}),avatarRight:Object(j.a)(Object(j.a)(Object(j.a)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{backgroundColor:e.palette.primary.main,color:e.palette.primary[200],zIndex:1}),cardHeading:{fontSize:"2.125rem",fontWeight:500,marginRight:"8px",marginTop:"18px",marginBottom:"8px"},subHeading:{fontSize:"1.5rem",fontWeight:500,color:e.palette.primary[200]},avatarCricle:Object(j.a)(Object(j.a)({},e.typography.smallAvatar),{},{cursor:"pointer",backgroundColor:e.palette.primary[200],color:e.palette.primary.dark}),circleIcon:{transform:"rotate3d(1, 1, 1, 45deg)"},menuItem:{marginRight:"14px",fontSize:"1.25rem"}}})),G=function(){var e=T(),t=0,a=c.a.useState(null),i=Object(d.a)(a,2),s=i[0],j=i[1],u=c.a.useState([]),b=Object(d.a)(u,2),g=b[0],v=b[1],y=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat("https://backend.alsahaba.sa/api","/users/")).then((function(e){v(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){j(null)};return Object(n.useEffect)((function(){y()}),[]),Object(D.jsx)(p.a,{className:e.card,children:Object(D.jsx)(h.a,{className:e.content,children:Object(D.jsxs)(r.a,{container:!0,direction:"column",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,justifyContent:"space-between",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(m.a,{variant:"rounded",className:e.avatar,children:Object(D.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAQAAADlauupAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cJGAoOOOQ+jF0AAAF2SURBVDjLjZOha0JRFMbPfc4FZzAsqZMlg8Vk0+hADAomw4wWbQbB/0CNWlzZf7BilBUHgtUwLMMgikkEYQ6G97dwZW/uPTcPXO6959zzfYfvnCviYhAIoB8eYLk0q9eDQEDOMbAsGA5x2GgEHs//APrujlOm0+nf7y0nRDR6El05Y04A9fp6ur6/Yt8aKIV+fnaWPxiAUmcKeXWFbrdhOoXpFN1qgc/n9vbCHUEpkclE5P1dRClRb28iu915zNRqUKk4W5DLQaeD9vtdRUR7vSL9vkg4LGSzTnjLEqlWRZ6e0JeXLuyNhmEqFmGzsZnXa3SpBJkMPD4aX73+K9njgdUKZjN0IgHb7UF6Dfk8TCagNfr+3gi7Wh11BG5vTUIsZu6FgrnP51Au29WMx9BsGuxI5IcGoZBBur4+2iUUEtnvRT4+jL/bFYnHzcDd3NgV6FTKMGy38PICn5/un2GxsAcrlfoxBwcG8ftFksnTjQ4G7bPJ+QKlDG99XockvwAAAABJRU5ErkJggg==",alt:"Notification"})})}),Object(D.jsxs)(r.a,{item:!0,children:[Object(D.jsx)(m.a,{variant:"rounded",className:e.avatarRight,"aria-controls":"menu-total-chart-card","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:Object(D.jsx)(A.a,{fontSize:"inherit"})}),Object(D.jsxs)(x.a,{id:"menu-total-chart-card",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:k,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(D.jsxs)(O.a,{onClick:k,children:[Object(D.jsx)(C.a,{fontSize:"inherit",className:e.menuItem})," Import Card"]}),Object(D.jsxs)(O.a,{onClick:k,children:[Object(D.jsx)(N.a,{fontSize:"inherit",className:e.menuItem})," Copy Data"]}),Object(D.jsxs)(O.a,{onClick:k,children:[Object(D.jsx)(z.a,{fontSize:"inherit",className:e.menuItem})," Export"]}),Object(D.jsxs)(O.a,{onClick:k,children:[Object(D.jsx)(B.a,{fontSize:"inherit",className:e.menuItem})," Archive File"]})]})]})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,alignItems:"center",children:[Object(D.jsxs)(r.a,{item:!0,children:[Object(D.jsx)("div",{style:{display:"none"},children:null===g||void 0===g?void 0:g.map((function(e){return e.is_doctor?t++:""}))}),Object(D.jsx)(f.a,{className:e.cardHeading,children:t})]}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(m.a,{className:e.avatarCricle,children:Object(D.jsx)(W.a,{fontSize:"inherit",className:e.circleIcon})})})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{className:e.subHeading,children:"Registered Doctors"})})]})})})},L=a(24),J=a(289),F=a(423),H=a.n(F),M=a(18),P=a.n(M),Y={height:480,type:"bar",options:{chart:{stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},colors:[P.a.deepPurple500,P.a.blue500,P.a.blue200,P.a.deepPurple50],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"string",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],labels:{style:{colors:[]}}},yaxis:{labels:{style:{colors:[]}}},legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,labels:{colors:P.a.grey500,useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},fill:{type:"solid"},dataLabels:{enabled:!1},grid:{show:!0}},series:[{name:"Patients",data:[32,124,32,32,32,80,32]},{name:"Consultations",data:[32,15,15,32,64,38,78]}]},Q=[{value:"month",label:"This Month"},{value:"year",label:"This Year"}],q=function(){var e=c.a.useState("month"),t=Object(d.a)(e,2),a=t[0],s=t[1],u=Object(L.a)(),b=0,m=0,x="https://backend.alsahaba.sa/api",g=Object(n.useState)([]),A=Object(d.a)(g,2),v=(A[0],A[1]),y=Object(n.useState)([]),k=Object(d.a)(y,2),C=k[0],w=k[1],N=u.palette.secondary.main;Y.options.grid.borderColor=u.palette.primary.light,Y.options.yaxis.labels.style.colors=[u.palette.secondary.main],Y.options.xaxis.labels.style.colors=[N,N,N,N,N,N,N];var S=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(x,"/consultations/")).then((function(e){v(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(x,"/calls/")).then((function(e){w(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S(),z()}),[]),Object(D.jsx)(p.a,{children:Object(D.jsx)(h.a,{children:Object(D.jsxs)(r.a,{container:!0,spacing:i.b,children:[Object(D.jsx)(r.a,{item:!0,xs:12,children:Object(D.jsxs)(r.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,direction:"column",spacing:1,children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{variant:"subtitle2",children:"Requested Consultations"})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(f.a,{variant:"h3",children:[Object(D.jsx)("div",{style:{display:"none"},children:null===C||void 0===C?void 0:C.map((function(e){return e.is_new?"":b++}))}),b]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{variant:"subtitle2",children:"Accepted Consultations"})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(f.a,{variant:"h3",children:[Object(D.jsx)("div",{style:{display:"none"},children:null===C||void 0===C?void 0:C.map((function(e){return e?m++:""}))}),m]})})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(J.a,{id:"standard-select-currency",select:!0,value:a,onChange:function(e){return s(e.target.value)},variant:"outlined",children:Q.map((function(e){return Object(D.jsx)(O.a,{value:e.value,children:e.label},e.value)}))})})]})}),Object(D.jsx)(r.a,{item:!0,xs:12,children:Object(D.jsx)(H.a,Object(j.a)({},Y))})]})})})},K=a(315),X=a(226),V=a(322),Z=a(306),$=a(168),ee=a(311),te=a(297),ae=a(304),ne=a(417),ce=a(284),re=a(16),ie=a(425),se=a.n(ie),oe=a(39),le=a(118),de=Object(b.a)((function(e){return{cardAction:{padding:"10px",paddingTop:0,justifyContent:"center"},primaryLight:{color:e.palette.primary[200],cursor:"pointer"},divider:{marginTop:"12px",marginBottom:"12px"},avatarSuccess:{width:"16px",height:"16px",borderRadius:"5px",backgroundColor:e.palette.success.light,color:e.palette.success.dark,marginLeft:"15px"},successDark:{color:e.palette.success.dark},avatarError:{width:"16px",height:"16px",borderRadius:"5px",backgroundColor:e.palette.orange.light,color:e.palette.orange.dark,marginLeft:"15px"},errorDark:{color:e.palette.orange.dark}}})),je=function(){var e=de(),t="https://backend.alsahaba.sa/api",a=Object(n.useState)([]),s=Object(d.a)(a,2),j=s[0],u=s[1],b=c.a.useState([]),x=Object(d.a)(b,2),O=x[0],g=x[1],A=c.a.useState(!1),v=Object(d.a)(A,2),y=v[0],k=v[1],C=c.a.useState(!1),w=Object(d.a)(C,2),N=w[0],S=w[1],z=c.a.useState([]),I=Object(d.a)(z,2),B=I[0],_=I[1],E=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(t,"/users/")).then((function(e){_(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(t,"/consultations/")).then((function(e){u(e.data.reverse())}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){var t=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),a=Object(d.a)(t,5),n=a[0],c=a[1],r=a[2],i=a[3],s=a[4],o=n.toUpperCase();return"".concat(c," ").concat(o," ").concat(r," ").concat(i," ").concat(s)};return Object(n.useEffect)((function(){U(),E()}),[]),Object(D.jsxs)(p.a,{children:[y&&Object(D.jsx)(ue,{consultation:O,handleClose:function(){k(!1)}}),N&&Object(D.jsx)(pe,{handleClose:function(){S(!1)}}),Object(D.jsx)(h.a,{children:Object(D.jsxs)(r.a,{container:!0,spacing:i.b,children:[Object(D.jsx)(r.a,{item:!0,xs:12,children:Object(D.jsxs)(r.a,{container:!0,alignContent:"center",justifyContent:"space-between",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{variant:"h4",children:"Recent Consultations"})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(K.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){S(!0)},children:"Create Consultation"})})]})}),Object(D.jsx)(r.a,{item:!0,xs:12,children:j.slice(0,4).map((function(t){return Object(D.jsxs)(r.a,{container:!0,direction:"column",className:"consultations",onClick:function(){return e=t,k(!0),void g(e);var e},children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{variant:"subtitle1",color:"inherit",children:t.chief_complaint})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{variant:"subtitle1",color:"inherit",style:{position:"relative",top:"13px"},children:B.map((function(e){return t.patient_id==e.id?Object(D.jsxs)(D.Fragment,{children:[e.full_name,Object(D.jsx)("br",{}),Object(D.jsx)("strong",{style:{fontSize:"12px",color:"#993f95"},children:W(t.created_at)})]}):""}))})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(m.a,{variant:"rounded",className:e.avatarSuccess,children:Object(D.jsx)(se.a,{fontSize:"small",color:"inherit"})})})]})})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{variant:"subtitle2",className:e.successDark,children:B.map((function(e){return t.doctor_id==e.id?e.full_name:""}))})}),Object(D.jsx)(X.a,{className:e.divider})]},t.id)}))})]})}),Object(D.jsx)(V.a,{className:e.cardAction,children:Object(D.jsx)(Z.a,{component:oe.b,to:"/consultations",children:"View All"})})]})},ue=function(e){var t=c.a.useState([]),a=Object(d.a)(t,2),s=a[0],j=a[1],u=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat("https://backend.alsahaba.sa/api","/users/")).then((function(e){j(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){var t=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),a=Object(d.a)(t,5),n=a[0],c=a[1],r=a[2],i=a[3],s=a[4],o=n.toUpperCase();return"".concat(c," ").concat(o," ").concat(r," ").concat(i," ").concat(s)};return Object(n.useEffect)((function(){u()}),[]),Object(D.jsx)(r.a,{container:!0,spacing:i.b,children:Object(D.jsx)(r.a,{item:!0,xs:12,children:Object(D.jsxs)(p.a,{className:"popup-container",children:[console.log(e),Object(D.jsx)($.a,{title:"Consultation"}),Object(D.jsx)(X.a,{}),Object(D.jsxs)(h.a,{className:"popup-body",children:[Object(D.jsx)(K.a,{id:"closeBtn",onClick:function(){return e.handleClose()},children:"X"}),Object(D.jsx)(r.a,{container:!0,spacing:i.b,children:Object(D.jsx)(r.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(le.a,{title:s.map((function(t){return e.consultation.patient_id==t.id?t.full_name+" Consultation":""})),children:Object(D.jsx)(r.a,{container:!0,direction:"column",id:"poppins",spacing:1,children:Object(D.jsxs)(r.a,{item:!0,children:[Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Doctor name: \xa0",Object(D.jsx)("span",{id:"small-text",children:s.map((function(t){return e.consultation.doctor_id==t.id?t.full_name:""}))})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Patient name: \xa0",Object(D.jsx)("span",{id:"small-text",children:s.map((function(t){return e.consultation.patient_id==t.id?t.full_name:""}))})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Date: \xa0",Object(D.jsx)("span",{id:"small-text",children:b(e.consultation.created_at)})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Chief Complaint: \xa0",Object(D.jsx)("span",{id:"small-text",children:e.consultation.chief_complaint})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["History of illness: \xa0",Object(D.jsx)("span",{id:"small-text",children:e.consultation.history_of_illness})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Review of systems: \xa0",Object(D.jsx)("span",{id:"small-text",children:e.consultation.review_of_systems})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Examination: \xa0",Object(D.jsx)("span",{id:"small-text",children:e.consultation.examination})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Assessment: \xa0",Object(D.jsx)("span",{id:"small-text",children:e.consultation.assessment})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Sick leave: \xa0",Object(D.jsx)("span",{id:"small-text",children:e.consultation.sick_leave})]}),Object(D.jsxs)(f.a,{variant:"h3",gutterBottom:!0,children:["Last updated: \xa0",Object(D.jsx)("span",{id:"small-text",children:b(e.consultation.updated_at)})]})]})})})})})]})]})})})},be=Object(b.a)({table:{minWidth:350},searchControl:{width:"100%",paddingRight:"8px",paddingLeft:"16px",marginBottom:"16px",marginTop:"16px"}}),pe=function(e){var t=be(),a="https://backend.alsahaba.sa/api",s=c.a.useState([]),j=Object(d.a)(s,2),u=j[0],b=j[1],m=c.a.useState(""),x=Object(d.a)(m,2),f=x[0],g=x[1],A=c.a.useState(!1),v=Object(d.a)(A,2),y=v[0],k=v[1],C=c.a.useState(!1),w=Object(d.a)(C,2),N=w[0],S=w[1],z=c.a.useState(""),I=Object(d.a)(z,2),B=I[0],_=I[1],E=c.a.useState(null),U=Object(d.a)(E,2),W=U[0],T=U[1],G=c.a.useState(null),L=Object(d.a)(G,2),F=L[0],H=L[1],M=Object(n.useState)(!1),P=Object(d.a)(M,2),Y=P[0],Q=P[1],q=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(a,"/users/")).then((function(e){b(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){var t=e.handleClose,a=Object(n.useRef)(null),c=function(){a.current&&(a.current.classList.add("closing"),a.current.classList.remove("closing"),t())};return Object(D.jsx)("div",{ref:a,className:"graphpop",children:Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("div",{className:"logo-img",children:Object(D.jsx)("a",{href:"/",children:Object(D.jsx)("img",{src:"/images/double-check.gif",alt:""})})}),Object(D.jsxs)("h2",{children:[Object(D.jsx)("span",{style:{color:"#ba8abb"},children:"Consultation"})," saved ",Object(D.jsx)("span",{style:{color:"#24ab94"},children:"successfully!"})]}),Object(D.jsx)("div",{className:"cancel-btn",children:Object(D.jsx)("img",{src:"/images/cancel.png",id:"cancel-here",onClick:c})}),Object(D.jsx)("div",{style:{display:"none"},children:setTimeout((function(){c()}),2e3)})]})})},Z=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(a,"/search?query=").concat("patient"===t?f:B)).then((function(e){b(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(F),console.log(W),(n=new FormData).append("doctor_id",F),n.append("patient_id",W),n.append("chief_complaint",t.target.chief_complaint.value),n.append("history_of_illness",t.target.history_of_illness.value),n.append("review_of_systems",t.target.review_of_systems.value),n.append("examination",t.target.examination.value),n.append("assessment",t.target.assessment.value),void 0==t.target.medication?n.append("medication","No"):n.append("medication",t.target.medication.value),void 0==t.target.sick_leave?n.append("sick_leave",0):n.append("sick_leave",t.target.sick_leave.value),console.log(n),e.next=16,Object(R.a)({method:"post",url:"".concat(a,"/create-consultation/"),data:n,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){se(),console.log(e)})).catch((function(e){console.log(e)}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){Q(!0)};return Object(n.useEffect)((function(){q()}),[]),Object(D.jsxs)(r.a,{container:!0,spacing:i.b,children:[Object(D.jsx)(r.a,{item:!0,xs:12,children:Object(D.jsxs)(p.a,{className:"popup-container",children:[Object(D.jsx)($.a,{title:"Consultation"}),Object(D.jsx)(X.a,{}),Object(D.jsxs)(h.a,{className:"popup-body overflowY",id:"popupCustom",children:[Object(D.jsx)(K.a,{id:"closeBtn",onClick:function(){return e.handleClose()},children:"X"}),Object(D.jsx)(r.a,{container:!0,spacing:i.b,children:Object(D.jsx)(r.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(le.a,{title:"Create Consultation",children:Object(D.jsx)("form",{onSubmit:ie,children:Object(D.jsxs)(r.a,{container:!0,direction:"column",id:"poppins",spacing:1,className:"overflowY",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-simple-select-label",children:"Doctor's Iqama Number:"}),Object(D.jsx)(ae.a,{className:t.searchControl,id:"input-search-profile",name:"doctor_id",value:B,onChange:function(e){console.log(e.target.value),k(!0),""===e.target.value?(_(e.target.value),q()):(_(e.target.value),Z("doctor"))},placeholder:"Search Doctors",startAdornment:Object(D.jsx)(ne.a,{position:"start",children:Object(D.jsx)(re.V,{stroke:1.5,size:"1.3rem",className:t.startAdornment})}),"aria-describedby":"search-helper-text",inputProps:{"aria-label":"weight"},labelWidth:0}),B&&Object(D.jsx)(D.Fragment,{children:null===u||void 0===u?void 0:u.filter((function(e){return e.is_doctor})).map((function(e){return y&&Object(D.jsx)(O.a,{onClick:function(){return t=e.iqama_number,a=e.id,_(t),H(a),void k(!1);var t,a},children:e.iqama_number},e.id)}))})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-simple-select-label",children:"Patient's Iqama Number:"}),Object(D.jsx)(ae.a,{className:t.searchControl,id:"input-search-profile",value:f,onChange:function(e){S(!0),console.log(e.target.value),""===e.target.value?(g(e.target.value),q()):(g(e.target.value),Z("patient"))},placeholder:"Search patients",startAdornment:Object(D.jsx)(ne.a,{position:"start",children:Object(D.jsx)(re.V,{stroke:1.5,size:"1.3rem",className:t.startAdornment})}),"aria-describedby":"search-helper-text",inputProps:{"aria-label":"weight"},labelWidth:0}),f&&Object(D.jsx)(D.Fragment,{children:u.filter((function(e){return!(null===e||void 0===e?void 0:e.is_doctor)})).map((function(e,t){return N&&Object(D.jsx)(O.a,{value:e.id,name:"patient_id",onClick:function(){return t=e.iqama_number,a=e.id,g(t),T(a),void S(!1);var t,a},children:e.iqama_number},e.id)}))})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-textarea-select-label",children:"Chief Complaint:"}),Object(D.jsx)(ce.a,{className:"mt-2",defaultValue:"",name:"chief_complaint"})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-textarea-select-label",children:"History of illness:"}),Object(D.jsx)(ce.a,{className:"mt-2",defaultValue:"",name:"history_of_illness"})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-textarea-select-label",children:"Review of systems:"}),Object(D.jsx)(ce.a,{className:"mt-2",defaultValue:"",name:"review_of_systems"})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-textarea-select-label",children:"Examination:"}),Object(D.jsx)(ce.a,{className:"mt-2",defaultValue:"",name:"examination"})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-textarea-select-label",children:"Assessment:"}),Object(D.jsx)(ce.a,{className:"mt-2",defaultValue:"",name:"assessment"})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-textarea-select-label",children:"Medication:"}),Object(D.jsx)(ce.a,{className:"mt-2",defaultValue:"",name:"medication"})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(ee.a,{fullWidth:!0,className:"mt-5",children:[Object(D.jsx)(te.a,{id:"demo-textarea-select-label",children:"Sick Leave:"}),Object(D.jsx)(J.a,{className:"mt-2",defaultValue:"",type:"number",name:"sick_leave"})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(ee.a,{className:"mt-5",children:Object(D.jsx)(K.a,{variant:"contained",color:"primary",disableElevation:!0,type:"submit",children:"Create Consultation"})})})]})})})})})]})]})}),Y&&Object(D.jsx)(V,{handleClose:function(){Q(!1)}})]})},he=Object(b.a)((function(e){return{card:{backgroundColor:"#212af3",color:"#fff",overflow:"hidden",position:"relative","&:after":Object(u.a)({content:'""',position:"absolute",width:"210px",height:"210px",backgroundColor:e.palette.primary.dark,borderRadius:"50%",top:"-85px",right:"-95px"},e.breakpoints.down("xs"),{top:"-105px",right:"-140px"}),"&:before":Object(u.a)({content:'""',position:"absolute",width:"210px",height:"210px",backgroundColor:e.palette.primary.dark,borderRadius:"50%",top:"-125px",right:"-15px",opacity:.7},e.breakpoints.down("xs"),{top:"-155px",right:"-70px"})},content:{padding:"20px !important"},avatar:Object(j.a)(Object(j.a)(Object(j.a)({},e.typography.commonAvatar),e.typography.largeAvatar),{},{backgroundColor:e.palette.primary.dark,color:"#fff",marginTop:"8px"}),avatarRight:Object(j.a)(Object(j.a)(Object(j.a)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{backgroundColor:e.palette.primary.main,color:e.palette.primary[200],zIndex:1}),cardHeading:{fontSize:"2.125rem",fontWeight:500,marginRight:"8px",marginTop:"18px",marginBottom:"8px"},subHeading:{fontSize:"1.5rem",fontWeight:500,color:e.palette.primary[200]},avatarCricle:Object(j.a)(Object(j.a)({},e.typography.smallAvatar),{},{cursor:"pointer",backgroundColor:e.palette.primary[200],color:e.palette.primary.dark}),circleIcon:{transform:"rotate3d(1, 1, 1, 45deg)"},menuItem:{marginRight:"14px",fontSize:"1.25rem"}}})),me=function(){var e=he(),t=0,a=c.a.useState(null),i=Object(d.a)(a,2),s=i[0],j=i[1],u=Object(n.useState)([]),b=Object(d.a)(u,2),g=b[0],v=b[1],y=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat("https://backend.alsahaba.sa/api","/consultations/")).then((function(e){v(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){j(null)};return Object(n.useEffect)((function(){y()}),[]),Object(D.jsx)(p.a,{className:e.card,children:Object(D.jsx)(h.a,{className:e.content,children:Object(D.jsxs)(r.a,{container:!0,direction:"column",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,justifyContent:"space-between",children:[Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(m.a,{variant:"rounded",className:e.avatar,children:Object(D.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAQAAADlauupAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cIGwIbC02d3LkAAAGsSURBVDjLlZNPKHxRFMc/5/W2LxZiTfmzmmajiIWdEhbCUnaSzdhYaGSlZCUrxcLO3kJs1OwoJWUhJWw1zZQpGsP9/hZ35s1vniG+dbvd7/fe0znfew7Szo5UqehbZDLS6qpcKkUTBLC4CGHIj+juxnI5aXAwqYT1xzc3UC43yr29fn96gvt7WF+Xm5iwoFKp3TBJgtdXmJ5GdcGry8tQLKKDgzp5cWFBqRQf9Wek04kSAJyDo6MvGcSZmMHoKEQRgFwUYZOTKJerBnh/h7MzLOlB7HUA/f2Qz8PjI7ayAtksdnf3hxJeXuRSKbmtLamvT9rclG5vqyaWy7Cx4TNJYm4OenrQ+Dg2NARra1AswswMXF1VSwhD6OpqHiCKIJPBWlogm/Vcayu0t5sVCr8oYX/fG7e3F1OuFqihD2Zn0X8m2sICTE2hzk7s8BCWlmBszDfX/LyZlOiD62vp8rK+CgXPDQx4vVSSRkaatHINzYbl+Njzz8+wu4seHuTa2izI5+MPho+P74doeBidnkI6DW9v2Pk51tHRcEXa3v55nD8/q8456eRErnFy/wHayJuZgodHeQAAAABJRU5ErkJggg==",alt:"Notification"})})}),Object(D.jsxs)(r.a,{item:!0,children:[Object(D.jsx)(m.a,{variant:"rounded",className:e.avatarRight,"aria-controls":"menu-total-chart-card","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:Object(D.jsx)(A.a,{fontSize:"inherit"})}),Object(D.jsxs)(x.a,{id:"menu-total-chart-card",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:k,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(D.jsxs)(O.a,{onClick:k,children:[Object(D.jsx)(C.a,{fontSize:"inherit",className:e.menuItem})," Import Card"]}),Object(D.jsxs)(O.a,{onClick:k,children:[Object(D.jsx)(N.a,{fontSize:"inherit",className:e.menuItem})," Copy Data"]}),Object(D.jsxs)(O.a,{onClick:k,children:[Object(D.jsx)(z.a,{fontSize:"inherit",className:e.menuItem})," Export"]}),Object(D.jsxs)(O.a,{onClick:k,children:[Object(D.jsx)(B.a,{fontSize:"inherit",className:e.menuItem})," Archive File"]})]})]})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsxs)(r.a,{container:!0,alignItems:"center",children:[Object(D.jsxs)(r.a,{item:!0,children:[Object(D.jsx)("div",{style:{display:"none"},children:null===g||void 0===g?void 0:g.map((function(e){return e?t++:""}))}),Object(D.jsx)(f.a,{className:e.cardHeading,children:t})]}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(m.a,{className:e.avatarCricle,children:Object(D.jsx)(W.a,{fontSize:"inherit",className:e.circleIcon})})})]})}),Object(D.jsx)(r.a,{item:!0,children:Object(D.jsx)(f.a,{className:e.subHeading,children:"Total Consultations"})})]})})})},xe=a(27);t.default=function(){var e=Object(xe.g)(),t=function(t){var a="/".concat(t);e.push(a)};return Object(D.jsxs)(r.a,{container:!0,spacing:i.b,children:[Object(D.jsx)(r.a,{item:!0,xs:12,children:Object(D.jsxs)(r.a,{container:!0,spacing:i.b,children:[Object(D.jsx)(r.a,{item:!0,lg:4,md:6,sm:6,xs:12,onClick:function(){return t("patients")},style:{cursor:"pointer"},children:Object(D.jsx)(E,{})}),Object(D.jsx)(r.a,{item:!0,lg:4,md:6,sm:6,xs:12,onClick:function(){return t("doctors")},style:{cursor:"pointer"},children:Object(D.jsx)(G,{})}),Object(D.jsx)(r.a,{item:!0,lg:4,md:6,sm:6,xs:12,onClick:function(){return t("consultations")},style:{cursor:"pointer"},children:Object(D.jsx)(me,{})})]})}),Object(D.jsx)(r.a,{item:!0,xs:12,children:Object(D.jsxs)(r.a,{container:!0,spacing:i.b,children:[Object(D.jsx)(r.a,{item:!0,xs:12,sm:12,md:8,children:Object(D.jsx)(q,{})}),Object(D.jsx)(r.a,{item:!0,xs:12,sm:12,md:4,children:Object(D.jsx)(je,{})})]})})]})}}}]);
//# sourceMappingURL=17.9c6eb0be.chunk.js.map