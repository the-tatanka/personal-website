"use strict";(self.webpackChunkgithub_pages_docusaurus_template=self.webpackChunkgithub_pages_docusaurus_template||[]).push([[920],{98374:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(15861),r=n(87757),u=n.n(r),c=n(67294),s=n(52263),l=n(32600),o=n(35742),i=n(39960),m=n(76775),h=n(10412);var f=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,s.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(90022),d=n(98202),_=n(82539),g=n(10726),E=n(91073),v=n(80311),y=n(61029);function I(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var S="searchQueryInput_CFBF",b="searchResultItem_U687",w="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr";function C(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,u=t.tokens,s=t.metadata,l=0===a,o=2===a,m=(l?n.b:r.b).slice(),h=o?n.s:n.t;return l||m.push(r.t),c.createElement("article",{className:b},c.createElement("h2",null,c.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,_.C)(h,u):(0,g.o)(h,(0,E.m)(s,"t"),u,100)}})),m.length>0&&c.createElement("p",{className:w},m.join(" \u203a ")),o&&c.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,g.o)(n.t,(0,E.m)(s,"t"),u,100)}}))}var Z=function(){var e=(0,s.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,i=(0,c.useState)(n),m=i[0],h=i[1],_=(0,c.useState)(),g=_[0],E=_[1],b=(0,c.useState)(),w=b[0],k=b[1],Z=(0,c.useMemo)((function(){return m?I(y.Iz.search_results_for,{keyword:m}):y.Iz.search_the_documentation}),[m]);(0,c.useEffect)((function(){r(m),g&&(m?g(m,(function(e){k(e)})):k(void 0))}),[m,g]);var R=(0,c.useCallback)((function(e){h(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==m&&h(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,a.Z)(u().mark((function t(){var n,a,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,E((function(){return(0,d.v)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(l.Z,{title:Z},c.createElement(o.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"})),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,Z),c.createElement("input",{type:"search",name:"q",className:S,"aria-label":"Search",onChange:R,value:m,autoComplete:"off",autoFocus:!0}),!g&&m&&c.createElement("div",null,c.createElement(v.Z,null)),w&&(w.length>0?c.createElement("p",null,I(1===w.length?y.Iz.count_documents_found:y.Iz.count_documents_found_plural,{count:w.length})):c.createElement("p",null,y.Iz.no_documents_were_found)),c.createElement("section",null,w&&w.map((function(e){return c.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);