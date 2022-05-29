"use strict";(self.webpackChunkgithub_pages_docusaurus_template=self.webpackChunkgithub_pages_docusaurus_template||[]).push([[6059],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19225:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={sidebar_position:6},s="Dependency Scanning",l={unversionedId:"security-toolchain/dependency-scanning",id:"security-toolchain/dependency-scanning",title:"Dependency Scanning",description:"Looks for a lock file, then performs a build to fetch upstream dependency information. In the case of containers, dependency scanning uses the compatible manifest and reports only these declared software dependencies (and those installed as a sub-dependency).",source:"@site/docs/security-toolchain/dependency-scanning.md",sourceDirName:"security-toolchain",slug:"/security-toolchain/dependency-scanning",permalink:"/personal-website/docs/security-toolchain/dependency-scanning",editUrl:"https://github.com/the-tatanka/personal-website/blob/master/docs/security-toolchain/dependency-scanning.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"projectsSidebar",previous:{title:"Dynamic Application Security Testing",permalink:"/personal-website/docs/security-toolchain/dynamic-application-security-testing"},next:{title:"Secret Scanning",permalink:"/personal-website/docs/security-toolchain/secret-scanning"}},p={},d=[{value:"Integration",id:"integration",level:2},{value:"GitHub Action",id:"github-action",level:2}],u={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dependency-scanning"},"Dependency Scanning"),(0,i.kt)("p",null,"Looks for a lock file, then performs a build to fetch upstream dependency information. In the case of containers, dependency scanning uses the compatible manifest and reports only these declared software dependencies (and those installed as a sub-dependency)."),(0,i.kt)("p",null,"The identified dependencies are compiled into a Bill of Materials (BOM), which is then compared against a variety of databases, including the National Vulnerability Database (NVD)."),(0,i.kt)("p",null,"Dependency scanning can not detect software dependencies that are pre-bundled into the container\u2019s base image. To identify pre-bundled dependencies, use container scanning."),(0,i.kt)("p",null,"Dependency scanning is part of Software Composition Analysis."),(0,i.kt)("b",null,"OWASP Dependency-Check")," will be used to check for vulnerable dependencies.",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/jeremylong/DependencyCheck"},"https://github.com/jeremylong/DependencyCheck"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Github action: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dependency-check/Dependency-Check_Action"},"https://github.com/dependency-check/Dependency-Check_Action"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OWASP Dependency Check command line arguments (action calls Docker container from OWASP Dependency Check): ",(0,i.kt)("a",{parentName:"p",href:"https://jeremylong.github.io/DependencyCheck/dependency-check-cli/arguments.html"},"https://jeremylong.github.io/DependencyCheck/dependency-check-cli/arguments.html")))),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable code scanning in your repository.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Creat a new workflow named "dependency-check.yml" in your ".github/workflows" directory.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Paste the example Dependency-Check action below."))),(0,i.kt)("h2",{id:"github-action"},"GitHub Action"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'# For most projects, this workflow file will not need changing; you simply need\n# to commit it to your repository.\n#\n# You may wish to alter this file to provide command line arguments:\n# https://jeremylong.github.io/DependencyCheck/dependency-check-cli/arguments.html\n#\nname: "Dependency-Check"\n\non:\n  push:\n    branches: [main, master]\n  pull_request:\n    # The branches below must be a subset of the branches above\n    branches: [main, master]\n    paths-ignore:\n      - "**/*.md"\n      - "**/*.txt"\n  schedule:\n    - cron: "28 15 * * 3"\n\njobs:\n  analyze:\n    name: Analyze\n    runs-on: ubuntu-latest\n    permissions:\n      actions: read\n      contents: read\n      security-events: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Dependency Check\n        uses: dependency-check/Dependency-Check_Action@main\n        with:\n          project: "test"\n          # Automatically searches for dependency manager files in the repository\n          path: "."\n          # Exports the results in SARIF format for SARIF upload.\n          # Alternatively, other report formats can be selected, see command line arguments.\n          format: "SARIF"\n          # If results with a high severity are found, the workflow fails.\n          args: >\n            --failOnCVSS 7\n            --enableRetired\n\n      - name: Upload DependencyCheck output as artifact\n        uses: actions/upload-artifact@v1\n        with:\n          name: dependency-check-report-sarif\n          path: ${{ github.workspace }}/reports\n        if: always()\n\n      # Upload findings to GitHub Advanced Security Dashboard\n      - name: Upload SARIF file for GitHub Advanced Security Dashboard\n        uses: github/codeql-action/upload-sarif@v1\n        with:\n          # Path to SARIF file relative to the root of the repository\n          sarif_file: ${{ github.workspace }}/reports/dependency-check-report.sarif\n        if: always()\n')))}h.isMDXComponent=!0}}]);