"use strict";(self.webpackChunkgithub_pages_docusaurus_template=self.webpackChunkgithub_pages_docusaurus_template||[]).push([[2130],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(k,s(s({ref:t},m),{},{components:a})):r.createElement(k,s({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66519:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=["components"],l={sidebar_position:3},o="Rapid Security Assessment",p={unversionedId:"threat-modeling/rapid-security-assessment",id:"threat-modeling/rapid-security-assessment",title:"Rapid Security Assessment",description:"Often there is no time or resources available for a detailed security assessment.",source:"@site/docs/threat-modeling/rapid-security-assessment.md",sourceDirName:"threat-modeling",slug:"/threat-modeling/rapid-security-assessment",permalink:"/personal-website/docs/threat-modeling/rapid-security-assessment",editUrl:"https://github.com/the-tatanka/personal-website/blob/master/docs/threat-modeling/rapid-security-assessment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"projectsSidebar",previous:{title:"Security Assessment",permalink:"/personal-website/docs/threat-modeling/security-assessment"},next:{title:"Metrics",permalink:"/personal-website/docs/threat-modeling/metrics"}},m={},c=[{value:"Process",id:"process",level:2},{value:"Assessment Template",id:"assessment-template",level:2},{value:"Rapid Security Assessment for &lt;REPLACEME service name&gt;",id:"rapid-security-assessment-for-replaceme-service-name",level:3},{value:"1. Service Notes",id:"1-service-notes",level:3},{value:"2. Data",id:"2-data",level:3},{value:"3. Threats",id:"3-threats",level:3},{value:"4. Risks",id:"4-risks",level:3},{value:"5. Recommendations",id:"5-recommendations",level:3},{value:"References",id:"references",level:2}],d={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rapid-security-assessment"},"Rapid Security Assessment"),(0,i.kt)("p",null,"Often there is no time or resources available for a detailed security assessment."),(0,i.kt)("p",null,"Therefore, an security assessment is needed that can be performed very rapidly - similar to ",(0,i.kt)("strong",{parentName:"p"},"Rapid Risk Assessment (RRA) from Mozillla"),"."),(0,i.kt)("p",null,"The most important assets in an service are the data. That is why this approach is based on the data processed, stored or simply accessible by services."),(0,i.kt)("p",null,"This approach is intended for analyzing and assessing services, not processes or individual controls."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The rapid security assessment does not include a likelihood rating. The risk is determined by the impact (risk = impact)."),(0,i.kt)("p",null,"Do not forget that it is a rapid assessment that does not include controls."),(0,i.kt)("p",null,"Worst case scenarios are considered, therefore only the impact rating."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/personal-website/docs/threat-modeling/metrics"},"risk and impact metrics"),"."),(0,i.kt)("h2",{id:"process"},"Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an assessment page / document with the assessment template")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Send invitation to project teams containing:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Agenda")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Necessary materials (link to project-specific page created in step 1)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Objectives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One hour meeting block"))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create threats through CIA per data")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Confidentiality: What happens if all the data is disclosed to the world?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Integrity: What happens if the data is incorrect, misleading, website defaced, etc.?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Availability: What happens if the data or service is missing, deleted, or currently unreachable?"))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Access risk by determining the impact")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make recommendations")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Discuss recommendations with project team"))),(0,i.kt)("h2",{id:"assessment-template"},"Assessment Template"),(0,i.kt)("h3",{id:"rapid-security-assessment-for-replaceme-service-name"},"Rapid Security Assessment for \\<REPLACEME service name",">"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Service / Product Owner"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Contact Person (Security)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Github Repository"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Service Data Classification"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Highest Risk Impact"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Status"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RRA responsibles"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"1-service-notes"},"1. Service Notes"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"How does the service work? Do we have diagrams, demos, examples? Is the service in production yet?"),"\n",(0,i.kt)("em",{parentName:"p"},"Please describe (or link) the items.")),(0,i.kt)("h3",{id:"2-data"},"2. Data"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"We want to know about all data the service will process, store or receive (and not just store). Any data the service can touch or see must be considered.")),(0,i.kt)("h3",{id:"3-threats"},"3. Threats"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"CIA per data."),"\n",(0,i.kt)("em",{parentName:"p"},"How might an attacker benefit from capturing or modifying the data?")),(0,i.kt)("p",null,"\\<REPLACEME data",">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Affecting confidentiality")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Affecting integrity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Affecting availability"))),(0,i.kt)("h3",{id:"4-risks"},"4. Risks"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Risk is commonly defined as: risk = impact")),(0,i.kt)("h3",{id:"5-recommendations"},"5. Recommendations"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Recommendations are ordered by how much risk we're taking by not implementing the recommendation."),"\n",(0,i.kt)("em",{parentName:"p"},"MAXIMUM is we need to fix this right now, HIGH is we need to fix this within a week, MEDIUM is we\u2019ve to look at this in the next 3mo, LOW is this would be also interesting to do or look at.")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://infosec.mozilla.org/guidelines/risk/rapid_risk_assessment.html"},"https://infosec.mozilla.org/guidelines/risk/rapid_risk_assessment.html"))))}u.isMDXComponent=!0}}]);