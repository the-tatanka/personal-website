"use strict";(self.webpackChunkgithub_pages_docusaurus_template=self.webpackChunkgithub_pages_docusaurus_template||[]).push([[210],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=i,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={sidebar_position:2},s="GitHub Integration",u={unversionedId:"security-toolchain/github-integration",id:"security-toolchain/github-integration",title:"GitHub Integration",description:"Basic understanding of GitHub and GitHub Actions is necessary.",source:"@site/docs/security-toolchain/github-integration.md",sourceDirName:"security-toolchain",slug:"/security-toolchain/github-integration",permalink:"/github-pages-docusaurus-template/docs/security-toolchain/github-integration",editUrl:"https://github.com/the-tatanka/github-pages-docusaurus-template/tree/master/docs/security-toolchain/github-integration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"projectsSidebar",previous:{title:"Intro",permalink:"/github-pages-docusaurus-template/docs/security-toolchain/intro"},next:{title:"Static Application Security Testing (SAST)",permalink:"/github-pages-docusaurus-template/docs/security-toolchain/static-application-security-testing"}},c={},p=[{value:"Branch protection rules",id:"branch-protection-rules",level:2},{value:"Pre-Commit Hooks",id:"pre-commit-hooks",level:2},{value:"Upload build artifacts",id:"upload-build-artifacts",level:2},{value:"Release management",id:"release-management",level:2}],m={toc:p};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github-integration"},"GitHub Integration"),(0,r.kt)("p",null,"Basic understanding of GitHub and GitHub Actions is necessary."),(0,r.kt)("h2",{id:"branch-protection-rules"},"Branch protection rules"),(0,r.kt)("p",null,"The main / master branch must be blocked. You are only allowed to commit to them if all security ",(0,r.kt)("i",null,"status checks")," of the actions are successful."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Branch protection rules",src:n(82418).Z,width:"893",height:"828"})),(0,r.kt)("p",null,"The actions can be configured to run for each pull request."),(0,r.kt)("p",null,"This ensures that all security status checks are checked before the release of the main/master branch takes place."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pull request status checks",src:n(95055).Z,width:"986",height:"853"})),(0,r.kt)("h2",{id:"pre-commit-hooks"},"Pre-Commit Hooks"),(0,r.kt)("p",null,"Catch bugs or vulnerabilities before they get into the repo."),(0,r.kt)("p",null,"Steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check for secrets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quality checks: code formatting, commit messages"))),(0,r.kt)("p",null,"One way to use git hooks locally in a Node environment is by using a library called husky. Install husky as dev-dependency."),(0,r.kt)("p",null,"Put these lines of code into your package.json."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"husky": {\n    "hooks": {\n      "pre-commit": "gitleaks detect -v -s ./src/ --no-git -c gitleaks.toml"\n    }\n  },\n')),(0,r.kt)("p",null,"It may happen that the hooks do not work - two solutions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remove node_modules and then install the packages again")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remove the git hooks folder, uninstall husky and install it again"))),(0,r.kt)("h2",{id:"upload-build-artifacts"},"Upload build artifacts"),(0,r.kt)("p",null,"GitHub provides a default action for uploading artifacts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"build:\n  runs-on: ubuntu-latest\n  steps:\n    - name: Build Projects\n      if: github.event_name == 'push'\n      run: npm run build\n\n    - name: Upload Build Folder\n      if: github.event_name == 'push'\n      uses: actions/upload-artifact@v1\n      with:\n        name: build\n        path: build\n")),(0,r.kt)("h2",{id:"release-management"},"Release management"),(0,r.kt)("p",null,"You can create a GitHub release to package software, along with release notes and links to workflow artifacts."),(0,r.kt)("p",null,"Official github documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases"},"https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases"))),(0,r.kt)("b",null,"semantic-release")," automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/semantic-release"},"https://github.com/semantic-release/semantic-release"))),(0,r.kt)("p",null,"semantic-release uses the commit messages to determine the consumer impact of changes in the codebase. Following formalized conventions for commit messages, semantic-release automatically determines the next semantic version number, generates a changelog and publishes the release."),(0,r.kt)("p",null,"By default, semantic-release uses Angular Commit Message Conventions."),(0,r.kt)("p",null,"Tools such as commitizen or commitlint can be used to help contributors and enforce valid commit messages."),(0,r.kt)("p",null,"The commit messages are checked for quality. The quality guidelines are determined by ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/"},"https://www.conventionalcommits.org/"),"."),(0,r.kt)("p",null,"With the devDependency packages ",(0,r.kt)("b",null,"commitlint/cli")," and ",(0,r.kt)("b",null,"commitlint/config-conventional")," enforce the quality."),(0,r.kt)("p",null,"The Commitizen tool is used to create quality commit messages. Commitizen must be installed locally:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"https://github.com/commitizen/cz-cli"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"npm install commitizen -g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Initialize project to use the cz-conventional-changelog: commitizen init cz-conventional-changelog --save-dev --save-exact"))))}h.isMDXComponent=!0},82418:function(e,t,n){t.Z=n.p+"assets/images/branch_protection_rules-6e895af58628632c3667a85a865cd49e.webp"},95055:function(e,t,n){t.Z=n.p+"assets/images/pull_request_status_checks-a3c3d93f08fee4e94263f1279f7aca37.webp"}}]);