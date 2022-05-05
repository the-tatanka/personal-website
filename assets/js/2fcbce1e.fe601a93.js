"use strict";(self.webpackChunkgithub_pages_docusaurus_template=self.webpackChunkgithub_pages_docusaurus_template||[]).push([[8234],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61105:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return p}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={sidebar_position:4},s="Security Assessment",m={unversionedId:"threat-modeling/security-assessment",id:"threat-modeling/security-assessment",title:"Security Assessment",description:"The security assessment describes a detailed detailed threat modeling process - based on STRIDE.",source:"@site/docs/threat-modeling/security-assessment.md",sourceDirName:"threat-modeling",slug:"/threat-modeling/security-assessment",permalink:"/personal-website/docs/threat-modeling/security-assessment",editUrl:"https://github.com/the-tatanka/personal-website/blob/master/docs/threat-modeling/security-assessment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"projectsSidebar",previous:{title:"Checklist",permalink:"/personal-website/docs/threat-modeling/checklist"},next:{title:"Security Assessment Process",permalink:"/personal-website/docs/threat-modeling/security-assessment-process"}},u={},p=[{value:"Writing a good Data Flow Diagram",id:"writing-a-good-data-flow-diagram",level:2},{value:"STRIDE",id:"stride",level:2},{value:"STRIDE-per-element",id:"stride-per-element",level:2},{value:"Risk Analysis",id:"risk-analysis",level:2},{value:"Impact",id:"impact",level:2},{value:"Likelihood",id:"likelihood",level:2},{value:"Risk",id:"risk",level:2},{value:"Risk Treatment",id:"risk-treatment",level:2},{value:"Treatment Plan",id:"treatment-plan",level:3},{value:"Mitigation",id:"mitigation",level:3}],d={toc:p};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"security-assessment"},"Security Assessment"),(0,l.kt)("p",null,"The security assessment describes a detailed ",(0,l.kt)("b",null,"detailed")," threat modeling process - based on STRIDE."),(0,l.kt)("h2",{id:"writing-a-good-data-flow-diagram"},"Writing a good Data Flow Diagram"),(0,l.kt)("p",null,"Having a good diagram is key to a good threat model."),(0,l.kt)("p",null,"The first step is to draw a diagram of the flow of data in your component. It's the DATA flow you care about, NOT the code flow. Your threats come via data, NOT code."),(0,l.kt)("p",null,"Use the following elements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"External Interactor: Is an element that is outside your area of control. It could be a user calling into an API, it could be another component (browser, user) but not one that's being threat modeled.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Process: A process is simply some code (or microservice). It does NOT mean that it's a \"process\" as OS's call processes, instead it's just a collection of code.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data Store: A datastore is something that holds data.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data Flow: Represents the flow of data through the system.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Trust Boundary: Occurs when one component doesn't trust the component on the other side of the boundary. There is always a trust boundary between elements running at different privilege levels.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("i",null,"Data: Could be a file, a registry key or personal data. This element does not appear in the classic data flow diagram. However, I find it helpful to explicitly model certain security relevant data."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Stores store data"),(0,l.kt)("li",{parentName:"ul"},"Processes process data."),(0,l.kt)("li",{parentName:"ul"},"Data Flows send Data.")))),(0,l.kt)("h2",{id:"stride"},"STRIDE"),(0,l.kt)("p",null,'STRIDE stands for "Spoofing", "Tampering", "Repudiation", "Information disclosure", "Denial of service", and "Elevation of privilege".'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Threat"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spoofing"),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,l.kt)("td",{parentName:"tr",align:null},"Impersonating something or someone else")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tampering"),(0,l.kt)("td",{parentName:"tr",align:null},"Integrity"),(0,l.kt)("td",{parentName:"tr",align:null},"Modifying data or code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repudiation"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-repudiation"),(0,l.kt)("td",{parentName:"tr",align:null},"Claiming to have not performed an action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Information Disclosure"),(0,l.kt)("td",{parentName:"tr",align:null},"Confidentiality"),(0,l.kt)("td",{parentName:"tr",align:null},"Exposing information to someone not authorized to see it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Denial of Service"),(0,l.kt)("td",{parentName:"tr",align:null},"Availability"),(0,l.kt)("td",{parentName:"tr",align:null},"Deny or degrade service to users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elevation of Privilege"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Gain capabilities without proper authorization")))),(0,l.kt)("p",null,"Essentially the idea is that you can classify all your threats according to one of the 6 STRIDE categories. But STRIDE is not a rigorous classification mechanism - there's a ton of overlap between the various categories (a successful Elevation of Privilege attack could result in Tampering of data, for instance). But it doesn't change the fact that it's an extremely useful mechanism for analyzing threats to a system."),(0,l.kt)("p",null,"It turns out that some STRIDE threats only apply to particular types of elements. If you think about it, it makes sense - for instance, an Elevation of Privilege threat doesn't apply to data stores (since a data store simply holds data, it operates at no privilege level)."),(0,l.kt)("p",null,"For each element type, the following threats are considered valid:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element type"),(0,l.kt)("th",{parentName:"tr",align:null},"S"),(0,l.kt)("th",{parentName:"tr",align:null},"T"),(0,l.kt)("th",{parentName:"tr",align:null},"R"),(0,l.kt)("th",{parentName:"tr",align:null},"I"),(0,l.kt)("th",{parentName:"tr",align:null},"D"),(0,l.kt)("th",{parentName:"tr",align:null},"E"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"External Entities"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Processes"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Stores"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Flows"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"stride-per-element"},"STRIDE-per-element"),(0,l.kt)("p",null,'We call this process of considering the element-specific threats to each element in the DFD "STRIDE-per-Element".'),(0,l.kt)("p",null,"And the best part about it is that STRIDE/element allows people to produce competent threat models with relatively little training."),(0,l.kt)("p",null,"The STRIDE-per-element methodology ends up creating a fair number of threats, even a component with a relatively tiny diagram. The good news is that many/most of those threats aren't meaningful threats."),(0,l.kt)("p",null,"This analysis is the core of the threat model, and where the real work associated with the process takes place."),(0,l.kt)("h2",{id:"risk-analysis"},"Risk Analysis"),(0,l.kt)("p",null,"For each threat, the risk must be determined. The defined risk assessment methodology can be used for this purpose."),(0,l.kt)("p",null,"Risk is composed both of the impact when a risk is manifested as well as the likelihood that the risk will manifest. Impact can be assessed in a risk assessment and is primarily based on the data which the service handles. Likelihood on the other hand is primarily driven by the presence or absence of security controls in the service."),(0,l.kt)("p",null,"Risk is commonly defined as: ",(0,l.kt)("b",null,"risk = impact ","*"," likelihood")),(0,l.kt)("p",null,"For each identified threat, the risk must be assessed."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://infosec.mozilla.org/guidelines/assessing_security_risk"},"The metrics and descriptions were taken from Mozilla.")),(0,l.kt)("h2",{id:"impact"},"Impact"),(0,l.kt)("p",null,"Impact is the potential result that can be produced by the weakness, assuming that the weakness can be successfully reached and exploited."),(0,l.kt)("p",null,"Assessing impact is a relatively finite, quantitative exercise:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"define the maximum amount of how much money we might lose")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"how badly our reputation would be damaged")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"how many employees would be unable to work")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"etc."))),(0,l.kt)("p",null,"Risk impact generally does not change quickly over time unless services and products are redesigned, large features are added, new types of data is processed, etc."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Level"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"There is no technical impact to the software being analyzed at all. In other words, this does not lead to a vulnerability.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimal control over the software being analyzed, or only access to relatively unimportant information can be obtained.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Moderate control over the software being analyzed, or access to moderately important information can be obtained.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},"Significant control over the software being analyzed, or access to critical information can be obtained.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete control over the software being analyzed, to the point where operations cannot take place.")))),(0,l.kt)("h2",{id:"likelihood"},"Likelihood"),(0,l.kt)("p",null,"The likelihood that a vulnerability in the service will be exploited in a calendar year due to the absence of security controls."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Level"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},'Due to the absence of security controls, an attacker has no chance of success; i.e., the issue is a "bug" because there is no attacker role, and no benefit to the attacker.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Due to the absence of security controls, an attacker probably would not target this weakness, or could have very limited chances of success.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Due to the absence of security controls, an attacker would probably target this weakness successfully, but the chances of success might vary, or require multiple attempts to succeed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},"Due to the absence of security controls, it is highly likely that an attacker would target this weakness successfully, with a reliable exploit that is easy to develop.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum"),(0,l.kt)("td",{parentName:"tr",align:null},"The absence of security controls will cause a risk.")))),(0,l.kt)("h2",{id:"risk"},"Risk"),(0,l.kt)("p",null,"Risk is determined based on this risk metric."),(0,l.kt)("p",null,"The risk levels also represent a simplified ISO 31000 equivalent (and are non-compliant with ISO 31000)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Level"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum"),(0,l.kt)("td",{parentName:"tr",align:null},"This is the most important level, where the risk is especially great. ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Attention: Full attention from all concerned parties required. "),(0,l.kt)("li",null,"Impact: High or maximum impact."),(0,l.kt)("li",null,"Effort: All resources engaged on fixing issues. Following standard/guidelines is required."),(0,l.kt)("li",null,"Risk acceptance: Rarely accepted as residual risk, must be discussed, and must be mitigated or remediated."),(0,l.kt)("li",null,"Exception time (SLA): Recommend fixing immediately.")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Attention: Full attention from all concerned parties required."),(0,l.kt)("li",null,"Impact: Medium, high or maximum impact."),(0,l.kt)("li",null,"Effort: Some key resources engaged on fixing the issue. Following standard/guidelines is required."),(0,l.kt)("li",null,"Risk acceptance: Risk must be discussed, and must at least be mitigated."),(0,l.kt)("li",null,"Exception time (SLA): Recommend remediation within 7 days.")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Attention: Attention from all concerned parties."),(0,l.kt)("li",null,"Impact: Low, medium or high impact."),(0,l.kt)("li",null,"Effort: Best effort. Following standard/guidelines is required."),(0,l.kt)("li",null,"Risk acceptance: Risk should be discussed, and at least mitigated."),(0,l.kt)("li",null,"Exception time (SLA): Recommend remediation within 90 days.")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Attention: Expected but not required."),(0,l.kt)("li",null,"Impact: Low or medium impact."),(0,l.kt)("li",null,"Effort: Best effort and best practices expected."),(0,l.kt)("li",null,"Risk acceptance: Risk may often be accepted as residual risk."),(0,l.kt)("li",null,"Exception time (SLA): Indefinitely.")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Likelihood /(x) / Impact (y)"),(0,l.kt)("th",{parentName:"tr",align:null},"None"),(0,l.kt)("th",{parentName:"tr",align:null},"Low"),(0,l.kt)("th",{parentName:"tr",align:null},"Medium"),(0,l.kt)("th",{parentName:"tr",align:null},"High"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Medium")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"High")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum"),(0,l.kt)("td",{parentName:"tr",align:null},"Low"),(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum")))),(0,l.kt)("h2",{id:"risk-treatment"},"Risk Treatment"),(0,l.kt)("p",null,"For each risk, the risk treatment option must be determined."),(0,l.kt)("p",null,"Risk treatment options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"Avoid")," - deciding not to proceed with the activity that introduced the unacceptable risk, choosing an alternative more acceptable activity that meets business objectives, or choosing an alternative less risky approach or process."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"Reduce")," - implementing a strategy that is designed to reduce the likelihood or consequence of the risk to an acceptable level, where elimination is considered to be excessive in terms of time or expense."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"Transfer")," - implementing a strategy that shares or transfers the risk to another party or parties, such as outsourcing the management of physical assets, developing contracts with service providers or insuring against the risk. The third-party accepting the risk should be aware of and agree to accept this obligation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"Accept")," - making an informed decision that the risk rating is at an acceptable level or that the cost of the treatment outweighs the benefit. This option may also be relevant in situations where a residual risk remains after other treatment options have been put in place. No further action is taken to treat the risk, however, ongoing monitoring is recommended.")),(0,l.kt)("p",null,"In an ideal world, a risk treatment plan can be created. Unfortunately, this is usually unrealistic and creates more overhead than benefit."),(0,l.kt)("p",null,'What cannot be waived, however, is for each risk with the treatment option "reduce", to create issues / stories for the associated mitigations and to include the issue number in the security assessment report.'),(0,l.kt)("p",null,"This ensures that the mitigations are in the backlog and are visible to the development team."),(0,l.kt)("h3",{id:"treatment-plan"},"Treatment Plan"),(0,l.kt)("p",null,"Effective risk treatment relies on attaining commitment from key practice stakeholders and developing realistic objectives and timelines for implementation."),(0,l.kt)("p",null,"For each risk identified in the risk assessment, detail the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Specify the treatment option agreed on - avoid, reduce, share/transfer or accept.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Document the treatment plan - outline the approach to be used to treat the risk. Any relationships or interdependencies with other risks should also be highlighted.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Assign an appropriate owner - who is accountable for monitoring and reporting on progress of the treatment plan implementation. Where the treatment plan owner and the risk owner are different, the risk owner has ultimate accountability for ensuring the agreed treatment plan is implemented.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Specify a target resolution date - where risk treatments have long lead times, consider the development of interim measures. For example, it is unlikely to be acceptable for a residual risk to be rated \u2018high' and to have a risk treatment with a resolution timeframe of two years."))),(0,l.kt)("h3",{id:"mitigation"},"Mitigation"),(0,l.kt)("p",null,"When using STRIDE, the following threat-mitigation table can be used to identify techniques that can be employed to mitigate the threats from ",(0,l.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/Threat_Modeling_Process#determine-countermeasures-and-mitigation"},"OWASP"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Threat"),(0,l.kt)("th",{parentName:"tr",align:null},"Mitigation Techniques"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spoofing"),(0,l.kt)("td",{parentName:"tr",align:null},"Appropriate authentication, Protect secret data, Don't store secrets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tampering"),(0,l.kt)("td",{parentName:"tr",align:null},"Appropriate authorization, Hashes, MACs, Digital signatures, Tamper resistant protocols")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repudiation"),(0,l.kt)("td",{parentName:"tr",align:null},"Digital signatures, Timestamps, Audit trails")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Information Disclosure"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization, Privacy-enhanced protocols, Encryption, Protect secrets, Don't store secrets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Denial of Service"),(0,l.kt)("td",{parentName:"tr",align:null},"Appropriate authentication, Appropriate authorization, Filtering, Throttling, Quality of service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elevation of privilege"),(0,l.kt)("td",{parentName:"tr",align:null},"Run with least privilege")))))}c.isMDXComponent=!0}}]);