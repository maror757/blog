"use strict";(self.webpackChunk_playcanvas_blog=self.webpackChunk_playcanvas_blog||[]).push([[44746],{48230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(74848),i=n(28453);const s={authors:"dave",slug:"new-maths-api",title:"Incoming Breaking Changes - New Maths API",tags:["engine"]},r=void 0,o={permalink:"/new-maths-api",editUrl:"https://github.com/playcanvas/blog/tree/main/blog/2014-01-13-new-maths-api.md",source:"@site/blog/2014-01-13-new-maths-api.md",title:"Incoming Breaking Changes - New Maths API",description:"Our new math API will make your life so much easier, but it will require updating your game.",date:"2014-01-13T00:00:00.000Z",tags:[{label:"engine",permalink:"/tags/engine"}],readingTime:2.255,hasTruncateMarker:!1,authors:[{name:"Dave Evans",title:"CTO",url:"https://twitter.com/daredevildave",imageURL:"https://pbs.twimg.com/profile_images/1271233580430053376/-OHHBJ2Z_400x400.jpg",key:"dave"}],frontMatter:{authors:"dave",slug:"new-maths-api",title:"Incoming Breaking Changes - New Maths API",tags:["engine"]},unlisted:!1,prevItem:{title:"New Math API: A Transition Guide",permalink:"/new-math-api-a-transition-guide"},nextItem:{title:"Primitives are Dead! Long Live the Model!",permalink:"/primitives-are-dead-long-live-the-model"}},h={authorsImageUrls:[void 0]},l=[{value:"What does this mean for you?",id:"what-does-this-mean-for-you",level:2},{value:"When is it going to break?",id:"when-is-it-going-to-break",level:2}];function c(e){const t={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Our new math API will make your life so much easier, but it will require updating your game."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Maths",src:n(53025).A+"",width:"808",height:"526"})}),"\n",(0,a.jsx)(t.p,{children:"One of the first things that is written for a new game engine is the Math library. A critically important base for your engine and used by almost every game that is written using the engine. The Math library must be fast, consistent and succinct."}),"\n",(0,a.jsx)(t.p,{children:"The PlayCanvas engine was first started almost 3 years ago, so the Math library is already a venerable old friend. But it's a friend that is in need of a facelift. (!? - Ed) So in the next few days we'll be releasing Math API v2.0 for our Engine."}),"\n",(0,a.jsx)(t.h2,{id:"what-does-this-mean-for-you",children:"What does this mean for you?"}),"\n",(0,a.jsx)(t.p,{children:"First, let's give you a little sample of how the Math library is going to work."}),"\n",(0,a.jsx)(t.p,{children:"Here is some code from our recent Ludum Dare game Going Around."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// In this code, we get the camera position,\n// We convert a mouse click into world space\n// Then we calculate the ray end point from\n// the mouse click using a variety of vector operations\npc.math.vec3.copy(camera.getPosition(), this.rayStart);\ncamera.camera.screenToWorld(event.x, event.y, 1, this.rayEnd);\npc.math.vec3.subtract(this.rayEnd, this.rayStart, this.rayEnd);\npc.math.vec3.normalize(this.rayEnd,this.rayEnd);\npc.math.vec3.scale(this.rayEnd, RAY_LENGTH, this.rayEnd);\npc.math.vec3.add(this.rayStart, this.rayEnd, this.rayEnd);\n\ncontext.systems.rigidbody.raycastFirst(this.rayStart, this.rayEnd, this.onRayHit.bind(this));\n"})}),"\n",(0,a.jsx)(t.p,{children:"This is what this will look like in the new API."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"this.rayStart.copy(camera.getPosition());\ncamera.camera.screenToWorld(event.x, event.y, 1, this.rayEnd);\n\n// subtract, then normalize, then scale by RAY_LENGTH, then add\nthis.rayEnd.sub(this.rayStart).normalize().scale(RAY_LENGTH).add(this.rayStart);\n\ncontext.systems.rigidbody.raycastFirst(this.rayStart, this.rayEnd, this.onRayHit.bind(this));\n"})}),"\n",(0,a.jsxs)(t.p,{children:["As you can see we now support chaining vector operations together. This makes the code more concise, and also more readable. If you read through the line you can see we ",(0,a.jsx)(t.code,{children:"subtract"}),", ",(0,a.jsx)(t.code,{children:"normalize"}),", ",(0,a.jsx)(t.code,{children:"scale"})," and then ",(0,a.jsx)(t.code,{children:"add"}),". All into the same vector."]}),"\n",(0,a.jsx)(t.p,{children:"This shows you how it will work for vectors but these changes apply to all our math primitives such as matrices and quaternions."}),"\n",(0,a.jsx)(t.p,{children:"So hopefully you can see that the new math library is going to be an all round better beast, but obviously it does mean breaking changes. Even though our engine is pre-1.0, we never issue breaking changes lightly. It's a pain for you and it's a pain for us. But in this case, it's important that such a fundamental piece of the engine is easy to use and \"just right\"."}),"\n",(0,a.jsx)(t.h2,{id:"when-is-it-going-to-break",children:"When is it going to break?"}),"\n",(0,a.jsx)(t.p,{children:"We doing the final round of testing at the moment, just to make sure everything works perfectly. We'll be deploying the engine very soon\xa0(today or tomorrow). This is a heads up so you know why we're doing it."}),"\n",(0,a.jsx)(t.p,{children:"After we deploy, we'll be updating all the samples and examples to use the new API. This will take a little bit of time, so some of them may not be up-to-date immediately."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},53025:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/think-maths-03b25960e6cb5c2d11328f88956f3d54.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);