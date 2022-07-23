(self.webpackChunkgithub_pages_docusaurus_template=self.webpackChunkgithub_pages_docusaurus_template||[]).push([[210],{49939:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),l=a(93456),o=["components"],r={sidebar_position:2},u="GitHub Integration",c={unversionedId:"security-toolchain/github-integration",id:"security-toolchain/github-integration",title:"GitHub Integration",description:"Basic understanding of GitHub and GitHub Actions is necessary.",source:"@site/docs/security-toolchain/github-integration.md",sourceDirName:"security-toolchain",slug:"/security-toolchain/github-integration",permalink:"/personal-website/docs/security-toolchain/github-integration",editUrl:"https://github.com/the-tatanka/personal-website/blob/master/docs/security-toolchain/github-integration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"projectsSidebar",previous:{title:"Intro",permalink:"/personal-website/docs/security-toolchain/intro"},next:{title:"Tool Selection",permalink:"/personal-website/docs/security-toolchain/tool_selection"}},m={},p=[{value:"GitHub Limitation and Solution",id:"github-limitation-and-solution",level:2},{value:"Workflow Strategy",id:"workflow-strategy",level:2},{value:"Branch Protection Rules",id:"branch-protection-rules",level:2},{value:"Pre-Commit Hooks",id:"pre-commit-hooks",level:2},{value:"Upload Build Artifacts",id:"upload-build-artifacts",level:2},{value:"Release Management",id:"release-management",level:2}],h={toc:p};function k(e){var t=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"github-integration"},"GitHub Integration"),(0,s.kt)("p",null,"Basic understanding of GitHub and GitHub Actions is necessary."),(0,s.kt)("h2",{id:"github-limitation-and-solution"},"GitHub Limitation and Solution"),(0,s.kt)("p",null,"TODO Vendor Lock-In ..."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"SARIF dashboard is expensive!")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use backlog or issue board as dashboard")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"One issue equals one security finding")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Stick to the SARIF standard"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Much easier integration of future tools"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use issue tags like ",(0,s.kt)("em",{parentName:"p"},"security")," to filter issues and separate them from the other issues")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Using the findings as issues makes it easier to integrate the mitigation into their dev workflow")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create one GitHub Action that exports findings to the used issue board (Jira, GitHub, ...)"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Auto create and close issues")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use SARIF values to create meaningful issues")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Check for duplicates - use some sort of ID to track duplicates"))))),(0,s.kt)("h2",{id:"workflow-strategy"},"Workflow Strategy"),(0,s.kt)(l.Mermaid,{config:{mermaid:{theme:"neutral"}},chart:"graph TD\n    A[Feature] --\x3e|Pull request| B{Pull request <br /> -status checks?}\n\n    B --\x3e|&#9745 <br /> Merge pull request / push| C[Staging <br /> -deploy to staging env]\n    B --\x3e|&#9746 <br /> Make changes| A\n\n    C --\x3e|Pulll request| D{Pull request <br /> -status checks?}\n    D --\x3e|&#9745 <br /> Merge pull request / push| E[Main <br /> -create a release <br /> -deploy to prod env]\n    D --\x3e|&#9746 <br /> Make changes| C",mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"branch-protection-rules"},"Branch Protection Rules"),(0,s.kt)("p",null,"The main / master branch must be blocked. You are only allowed to commit to them if all security ",(0,s.kt)("strong",{parentName:"p"},"status checks")," of the actions are successful."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Branch protection rules",src:a(42085).Z,width:"893",height:"828"})),(0,s.kt)("p",null,"The actions can be configured to run for each pull request."),(0,s.kt)("p",null,"This ensures that all security status checks are checked before the release of the main/master branch takes place."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Pull request status checks",src:a(49200).Z,width:"986",height:"853"})),(0,s.kt)("h2",{id:"pre-commit-hooks"},"Pre-Commit Hooks"),(0,s.kt)("p",null,"Catch bugs or vulnerabilities before they get into the repo."),(0,s.kt)("p",null,"Steps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Check for secrets")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Quality checks: code formatting, commit messages"))),(0,s.kt)("p",null,"One way to use git hooks locally in a Node environment is by using a library called husky. Install husky as dev-dependency."),(0,s.kt)("p",null,"Put these lines of code into your package.json."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"husky": {\n    "hooks": {\n      "pre-commit": "gitleaks detect -v -s ./src/ --no-git -c gitleaks.toml"\n    }\n  },\n')),(0,s.kt)("p",null,"It may happen that the hooks do not work - two solutions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Remove node_modules and then install the packages again")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Remove the git hooks folder, uninstall husky and install it again"))),(0,s.kt)("h2",{id:"upload-build-artifacts"},"Upload Build Artifacts"),(0,s.kt)("p",null,"GitHub provides a default action for uploading artifacts."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"build:\n  runs-on: ubuntu-latest\n  steps:\n    - name: Build Projects\n      if: github.event_name == 'push'\n      run: npm run build\n\n    - name: Upload Build Folder\n      if: github.event_name == 'push'\n      uses: actions/upload-artifact@v1\n      with:\n        name: build\n        path: build\n")),(0,s.kt)("h2",{id:"release-management"},"Release Management"),(0,s.kt)("p",null,"You can create a GitHub release to package software, along with release notes and links to workflow artifacts."),(0,s.kt)("p",null,"Official github documentation:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases"},"https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"semantic-release")," automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/semantic-release/semantic-release"},"https://github.com/semantic-release/semantic-release"))),(0,s.kt)("p",null,"semantic-release uses the commit messages to determine the consumer impact of changes in the codebase. Following formalized conventions for commit messages, semantic-release automatically determines the next semantic version number, generates a changelog and publishes the release."),(0,s.kt)("p",null,"By default, semantic-release uses Angular Commit Message Conventions."),(0,s.kt)("p",null,"Tools such as commitizen or commitlint can be used to help contributors and enforce valid commit messages."),(0,s.kt)("p",null,"The commit messages are checked for quality. The quality guidelines are determined by ",(0,s.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/"},"https://www.conventionalcommits.org/"),"."),(0,s.kt)("p",null,"With the devDependency packages ",(0,s.kt)("strong",{parentName:"p"},"commitlint/cli")," and ",(0,s.kt)("strong",{parentName:"p"},"commitlint/config-conventional")," enforce the quality."),(0,s.kt)("p",null,"The Commitizen tool is used to create quality commit messages. Commitizen must be installed locally:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"https://github.com/commitizen/cz-cli"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"npm install commitizen -g")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Initialize project to use the cz-conventional-changelog: commitizen init cz-conventional-changelog --save-dev --save-exact"))))}k.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=11748},42085:function(e,t,a){"use strict";t.Z=a.p+"assets/images/branch_protection_rules-6e895af58628632c3667a85a865cd49e.webp"},49200:function(e,t,a){"use strict";t.Z=a.p+"assets/images/pull_request_status_checks-a3c3d93f08fee4e94263f1279f7aca37.webp"}}]);