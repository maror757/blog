"use strict";(self.webpackChunk_playcanvas_blog=self.webpackChunk_playcanvas_blog||[]).push([[48132],{31584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=t(74848),s=t(28453);const r={authors:"steven",slug:"changes-to-our-editor-and-engine-releases",title:"Changes to our Editor and Engine Releases",tags:["editor"]},i=void 0,o={permalink:"/changes-to-our-editor-and-engine-releases",editUrl:"https://github.com/playcanvas/blog/tree/main/blog/2021-10-27-changes-to-our-editor-and-engine-releases.md",source:"@site/blog/2021-10-27-changes-to-our-editor-and-engine-releases.md",title:"Changes to our Editor and Engine Releases",description:"Up to now, our process for releasing new features and fixes to the PlayCanvas Engine and Editor has been rather simple.",date:"2021-10-27T00:00:00.000Z",tags:[{label:"editor",permalink:"/tags/editor"}],readingTime:2.575,hasTruncateMarker:!1,authors:[{name:"Steven Yau",title:"Partner Relations Manager",url:"https://twitter.com/yaustar",imageURL:"https://pbs.twimg.com/profile_images/1675831859756908545/E60-0cNq_400x400.jpg",key:"steven"}],frontMatter:{authors:"steven",slug:"changes-to-our-editor-and-engine-releases",title:"Changes to our Editor and Engine Releases",tags:["editor"]},unlisted:!1,prevItem:{title:"Anim Layer Masks and Blending",permalink:"/anim-layer-masks-and-blending"},nextItem:{title:"Import Full Model Hierarchy into PlayCanvas",permalink:"/import-full-model-hierarchy-into-playcanvas"}},l={authorsImageUrls:[void 0]},h=[{value:"Minor and patch versions updates",id:"minor-and-patch-versions-updates",level:3},{value:"Renaming Engine&#39;s GitHub &#39;master&#39; branch to &#39;dev&#39;",id:"renaming-engines-github-master-branch-to-dev",level:3},{value:"Separate Engine releases from the Editor",id:"separate-engine-releases-from-the-editor",level:3},{value:"Feedback",id:"feedback",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Up to now, our process for releasing new features and fixes to the PlayCanvas Engine and Editor has been rather simple."}),"\n",(0,a.jsx)(n.p,{children:"As features and fixes are ready, we would plan a release and test against a comprehensive list of PlayCanvas projects and the Engine examples. Once testing is passed, it would be released to everyone that is using the playcanvas.com service and Editor."}),"\n",(0,a.jsx)(n.p,{children:"This has served us well for many years and meant that users always had the latest features of the Engine."}),"\n",(0,a.jsx)(n.p,{children:"However, as the features of the Engine are get bigger and more complex and users' projects grow in scale and size, this release process needs to change to match our users' needs for stability and transparency with releases."}),"\n",(0,a.jsx)(n.p,{children:"Over the next month or so, we will be rolling out the following changes (finer details subject to change):"}),"\n",(0,a.jsx)(n.h3,{id:"minor-and-patch-versions-updates",children:"Minor and patch versions updates"}),"\n",(0,a.jsx)(n.p,{children:"Minor releases (1.XX.0 where the XX is the minor version) are currently reserved for API additions/changes in the Engine and/or larger feature releases while patch releases (1.XX.YY where YY is the patch version) could be bug fixes and minor features."}),"\n",(0,a.jsx)(n.p,{children:"Going forward, patch releases will strictly only be for bug fixes which will generally improve stability and user expectations."}),"\n",(0,a.jsx)(n.p,{children:"New functionality will only be added in minor releases."}),"\n",(0,a.jsx)(n.h3,{id:"renaming-engines-github-master-branch-to-dev",children:"Renaming Engine's GitHub 'master' branch to 'dev'"}),"\n",(0,a.jsx)(n.p,{children:"To better reflect our usage of the 'master' branch, we will be renaming it to 'dev' over the next few days as that is where our features and updates are merged prior being released."}),"\n",(0,a.jsx)(n.p,{children:"As the branch is typically unstable, the naming of 'dev' is more descriptive of the branch's purpose."}),"\n",(0,a.jsxs)(n.p,{children:["This will have knock on effects to forks of the Engine repo on GitHub. If you have a fork of the Engine, please read the following ",(0,a.jsx)(n.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch#updating-a-local-clone-after-a-branch-name-changes",children:"documentation from GitHub"})," to see how this affects you."]}),"\n",(0,a.jsx)(n.p,{children:"The steps from the documentation will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"git branch -m master dev\ngit fetch origin\ngit branch -u origin/dev dev\ngit remote set-head origin -a\n"})}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, creating a fresh clone from GitHub will work as well."}),"\n",(0,a.jsx)(n.h3,{id:"separate-engine-releases-from-the-editor",children:"Separate Engine releases from the Editor"}),"\n",(0,a.jsxs)(n.p,{children:["The Editor will no longer be affected by the latest release of the Engine on the ",(0,a.jsx)(n.a,{href:"https://github.com/playcanvas/engine",children:"GitHub repo"}),". The Engine version used in the Editor will only be updated via an Editor release."]}),"\n",(0,a.jsx)(n.p,{children:"While it means that Editor users will have to wait a little longer to get the latest features, it allows extra time for users to test their projects against the upcoming Engine release and report any issues."}),"\n",(0,a.jsxs)(n.p,{children:["However, users will still be able test early against the latest Engine releases using the ",(0,a.jsxs)(n.a,{href:"https://developer.playcanvas.com/user-manual/scripting/custom_engine/",children:[(0,a.jsx)(n.code,{children:"use_local_engine"})," param on the Launch Tab"]}),". We will also be looking at making this process easier to do via the Editor, such as an option in the Launch Tab settings."]}),"\n",(0,a.jsx)(n.p,{children:"Once this has been tested against the Editor and any reported issues are fixed, the Editor will be released with this version of the Engine."}),"\n",(0,a.jsx)(n.h3,{id:"feedback",children:"Feedback"}),"\n",(0,a.jsxs)(n.p,{children:["This is currently the high level plan and we would love to hear your thoughts and suggestions on the ",(0,a.jsx)(n.a,{href:"https://forum.playcanvas.com/",children:"forums"}),"!"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);