"use strict";(self.webpackChunk_playcanvas_blog=self.webpackChunk_playcanvas_blog||[]).push([[94243],{74038:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=a(74848),i=a(28453);const s={authors:"martin",slug:"initial-webgpu-support-lands-in-playcanvas-engine-1-62",title:"Initial WebGPU support lands in PlayCanvas Engine 1.62!",tags:["webgpu"]},r=void 0,o={permalink:"/initial-webgpu-support-lands-in-playcanvas-engine-1-62",editUrl:"https://github.com/playcanvas/blog/tree/main/blog/2023-03-31-initial-webgpu-support-lands-in-playcanvas-engine-1-62.md",source:"@site/blog/2023-03-31-initial-webgpu-support-lands-in-playcanvas-engine-1-62.md",title:"Initial WebGPU support lands in PlayCanvas Engine 1.62!",description:"WebGPU is a cutting-edge technology that promises to revolutionize the way 3D graphics are handled on the web. As the successor to WebGL, WebGPU provides faster and more efficient rendering capabilities for complex 3D graphics and simulations.",date:"2023-03-31T00:00:00.000Z",tags:[{inline:!0,label:"webgpu",permalink:"/tags/webgpu"}],readingTime:3.095,hasTruncateMarker:!1,authors:[{name:"Martin Valigursky",title:"Software Engineer",url:"https://twitter.com/ValigurskyM",imageURL:"https://pbs.twimg.com/profile_images/1262848991982690305/gUUoHdk1_400x400.jpg",key:"martin",page:null}],frontMatter:{authors:"martin",slug:"initial-webgpu-support-lands-in-playcanvas-engine-1-62",title:"Initial WebGPU support lands in PlayCanvas Engine 1.62!",tags:["webgpu"]},unlisted:!1,prevItem:{title:"Announcing the New PlayCanvas Asset Store",permalink:"/announcing-the-new-playcanvas-asset-store"},nextItem:{title:"WebXR AR Made Easy with PlayCanvas",permalink:"/webxr-ar-made-easy-with-playcanvas"}},l={authorsImageUrls:[void 0]},c=[{value:"Refactoring of WebGL engine",id:"refactoring-of-webgl-engine",level:2},{value:"What is left to do",id:"what-is-left-to-do",level:2},{value:"Engine examples",id:"engine-examples",level:2},{value:"Attributions",id:"attributions",level:3}];function h(e){const n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"WebGPU is a cutting-edge technology that promises to revolutionize the way 3D graphics are handled on the web. As the successor to WebGL, WebGPU provides faster and more efficient rendering capabilities for complex 3D graphics and simulations."}),"\n",(0,t.jsx)(n.p,{children:"PlayCanvas has been at the forefront of this new technology and has been working on adding WebGPU support to its platform."}),"\n",(0,t.jsx)(n.p,{children:"With WebGPU, we can expect to see more immersive and interactive 3D experiences on the web in the future."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(69913).A+"",children:(0,t.jsx)(n.img,{alt:"WebGPU Area Lights",src:a(98983).A+"",width:"1279",height:"720"})}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://playcanvas.com/demos/arealights/",children:(0,t.jsx)(n.em,{children:"PlayCanvas WebGPU Clustered Area Lights Demo"})})]}),"\n",(0,t.jsx)(n.h2,{id:"refactoring-of-webgl-engine",children:"Refactoring of WebGL engine"}),"\n",(0,t.jsx)(n.p,{children:"Before adding support for WebGPU, it's important to discuss the significant amount of refactoring work that was required on our existing WebGL engine. Implementing deeper architectural changes while preserving backwards compatibility required a significant amount of meticulous care."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To enable support for WebGPU, we needed to establish a clear separation of graphics technology that could be shared between WebGL and WebGPU. This involved a significant refactoring effort to extract WebGL-specific code into a separate set of classes."}),"\n",(0,t.jsx)(n.li,{children:"PlayCanvas utilizes a collection of shader chunks to produce GLSL shaders that implement advanced material properties and lighting modes, as well as custom shader chunks defined by users. However, since WebGPU employs the WGSL language, we used glslang and tint WASM modules to dynamically convert these shaders on-the-fly with injecting support for uniform buffers and other modifications."}),"\n",(0,t.jsx)(n.li,{children:"The PlayCanvas engine lacked explicit render passes, making the rendering process more rigid and harder to extend. This was solved by implementing a FrameGraph that allowed us to describe the rendering process as a set of render passes, their dependencies, and associated targets, which created a more flexible and performant rendering architecture."}),"\n",(0,t.jsx)(n.li,{children:"Unlike WebGL, which sets render state and shaders using a custom API, WebGPU specifies all those through render pipelines. To support both rendering APIs with optimal performance, we needed to refactor the render states into standalone objects that are efficient to compare and set up."}),"\n",(0,t.jsx)(n.li,{children:"To support the WebGPU platform, we need to undergo a significant refactoring to organize uniforms into uniform buffers."}),"\n",(0,t.jsx)(n.li,{children:"To facilitate the asynchronous creation of WebGPU device, we have introduced a new async API to create a graphics device, which is the primary breaking change required to adopt WebGPU."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-left-to-do",children:"What is left to do"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Our primary objective is to align the WebGPU implementation with that of WebGL, and while we have made significant progress towards this goal, there are still some features that are missing. Furthermore, several smaller details require cleanup and rectification."}),"\n",(0,t.jsx)(n.li,{children:"We need to incorporate it into the Editor environment for both launched and published applications. Currently, only WebGL is available in this environment."}),"\n",(0,t.jsx)(n.li,{children:"Our primary objective is to achieve full parity with WebGL, but initially, we are focusing on basic implementations of some concepts to deliver a working implementation, which will need to be extended to meet our performance objectives."}),"\n",(0,t.jsx)(n.li,{children:"WebGPU provides developers with access to Compute Shaders, which enables more efficient parallel processing of data on the GPU. This feature can significantly improve the performance of complex algorithms and simulations, which may have been impractical to run on the CPU. With access to Compute Shaders, we can bring new visual features to the next level, such as advanced particle systems, post-processing and global illumination techniques."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"engine-examples",children:"Engine examples"}),"\n",(0,t.jsxs)(n.p,{children:["As an early pre-release of WebGPU, we have updated several engine examples to use it, which can be accessed on ",(0,t.jsx)(n.a,{href:"https://playcanvas.github.io/",children:"https://playcanvas.github.io"}),". To use WebGPU, the Chrome Canary browser is required, with the 'chrome://flags/#enable-unsafe-webgpu' flag enabled."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(20811).A+"",children:(0,t.jsx)(n.img,{alt:"Examples Browser WebGPU",src:a(45761).A+"",width:"1991",height:"1080"})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://playcanvas.github.io/",children:"PlayCanvas Examples Browser"})}),"\n",(0,t.jsxs)(n.p,{children:["Let us know what you think in the ",(0,t.jsx)(n.a,{href:"https://forum.playcanvas.com/t/engine-release-v1-62/30360",children:"forums"}),"!"]}),"\n",(0,t.jsx)(n.h3,{id:"attributions",children:"Attributions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://sketchfab.com/3d-models/oldsmobile-cutlass-supreme-sedan-71-78f76d386a4341b0b71745bdc50fd5ab",children:"Oldsmobile Cutlass Supreme Sedan '71"})," by Barbo is licensed under ",(0,t.jsx)(n.a,{href:"https://creativecommons.org/licenses/by/4.0/",children:"Creative Commons Attribution"})]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},20811:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/playcanvas-examples-browser-webgpu-6cd3de39d5fbbfef6f5d046b1248751f.jpg"},69913:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/webgpu-area-lights-demo-64f443713c1605547761ebc10246f4f0.jpg"},45761:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/playcanvas-examples-browser-webgpu-6cd3de39d5fbbfef6f5d046b1248751f.jpg"},98983:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/webgpu-area-lights-demo-64f443713c1605547761ebc10246f4f0.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);