(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),i=n(2),r=n(3),s=n(5),b=n(4),o=n(1),d=n.n(o),l=(n(12),n(13),n(0)),u=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t,e=this.props,n=e.tabs,c=e.selectedTabId,a=e.onTabSelected;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs",children:n.map((function(t){return Object(l.jsx)("button",{type:"button",onClick:function(){a(t.id)},children:t.title},t.id)}))}),Object(l.jsx)("p",{children:null===(t=n.find((function(t){return t.id===c})))||void 0===t?void 0:t.content})]})}}]),n}(d.a.PureComponent),j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={selectedTab:j[0]},t.changeTabSelected=function(e){var n=j.find((function(t){return t.id===e}));n&&t.setState({selectedTab:n})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{children:"Selected tab ".concat(t.title)}),Object(l.jsx)(u,{tabs:j,selectedTabId:t.id,onTabSelected:this.changeTabSelected})]})}}]),n}(d.a.Component),p=h;a.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4cff32ab.chunk.js.map