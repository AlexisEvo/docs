"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[3107],{24928:(e,t,a)=>{a.d(t,{Ue:()=>c,xc:()=>o});var r=a(67294),n=a(39960),l=a(92503),i=a(86010);function o(e){let{name:t,url:a,description:i}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement(n.Z,{class:"card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module",to:a},r.createElement(l.Z,{as:"h2",class:"text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"},t),r.createElement("p",{class:"text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"},i)))}function s(e){let{name:t,image:a,url:o,description:s}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement("div",{className:(0,i.Z)("card")},r.createElement("div",{className:(0,i.Z)("card__image")},r.createElement(n.Z,{to:o},r.createElement("img",{src:a,alt:`${t}'s image`}))),r.createElement("div",{className:"card__body"},r.createElement(l.Z,{as:"h3"},t),r.createElement("p",null,s)),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},r.createElement(n.Z,{className:"button button--secondary",to:o},"Download")))))}function c(){return r.createElement("div",{class:"row",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.createElement(s,{name:"VRCFaceTracking AppInstaller",url:"https://github.com/benaclejames/VRCFaceTracking/releases/latest/download/VRCFaceTracking_x64.appinstaller",image:a(82648).Z,description:"Get the latest Release lightweight Windows AppInstaller, just run and install!"}))}},90351:(e,t,a)=>{a.d(t,{F4:()=>i,d9:()=>s,xb:()=>o,y$:()=>c});var r=a(65130),n=a(67294),l=a(52263);function i(e){let{children:t}=e;const{metadata:a}=(0,r.k)(),{editUrl:l}=a;return n.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},t)}function o(e){let{children:t,to:a,append:r=""}=e;const{siteConfig:i}=(0,l.Z)(),o=i.customFields[a.toLowerCase()];return n.createElement("a",{href:o.href+r,target:"_blank",rel:"noopener noreferrer"},t??o.label)}const s=e=>{let{children:t,color:a}=e;return n.createElement("span",{style:{color:a}},t)},c=e=>{let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},45413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(90351),i=(a(24928),a(22004));const o={},s="Vive Pro Eye",c={unversionedId:"hardware/VIVE/vpe",id:"hardware/VIVE/vpe",title:"Vive Pro Eye",description:"Overview",source:"@site/docs/hardware/VIVE/vpe.mdx",sourceDirName:"hardware/VIVE",slug:"/hardware/VIVE/vpe",permalink:"/docs/hardware/VIVE/vpe",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/VIVE/vpe.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SRanipal (VIVE)",permalink:"/docs/hardware/VIVE/sranipal"},next:{title:"Vive Wireless + Eye & Face Tracking",permalink:"/docs/hardware/VIVE/wireless"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Module",id:"module",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Mods",id:"mods",level:2}],p={toc:m},u="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vive-pro-eye"},"Vive Pro Eye"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Vive Pro Eye provides eye gaze tracking as well as detailed eye expression tracking.\nIt is a ",(0,n.kt)("em",{parentName:"p"},"built-in")," eye-tracking device (no additional hardware setup required).\nEye tracking data is accessed through ",(0,n.kt)("a",{parentName:"p",href:"sranipal"},"Vive's SRanipal interface"),"."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the Vive hardware setup instructions that came the headset. Make sure that the headset cable is not damaged, and ideally, plug in the USB connection from the linkbox to a USB 3.0 port (usually ",(0,n.kt)("em",{parentName:"li"},"blue")," internal connector tab)"),(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("a",{parentName:"li",href:"sranipal#software"},"SRanipal runtime software")),(0,n.kt)("li",{parentName:"ol"},"Calibrate the eye tracking with the SRanipal Vive Pro Eye Calibration tool in SteamVR")),(0,n.kt)("h2",{id:"module"},"Module"),(0,n.kt)("p",null,"Install the ",(0,n.kt)("strong",{parentName:"p"},'"SRanipalTrackingModule"')," from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/vrcft-software/vrcft#module-registry"},"VRCFaceTracking Module Registry"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/VRCFaceTracking/SRanipalTrackingModule"},"SRanipalTrackingModule source repository")),(0,n.kt)("h2",{id:"common-issues"},"Common Issues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A regular Vive Pro is occasionally mistaken to be a Vive Pro Eye.\nA Vive Pro Eye will have ",(0,n.kt)(l.y$,{color:"#2aa5cd",mdxType:"Highlight"},"light blue rings")," around the front two passthrough cameras and a plastic covered IR LED ring surrounding each lens on the inside")),(0,n.kt)("div",{style:{display:"flex","justify-content":"space-between"}},(0,n.kt)("div",{style:{width:"50%",height:"auto"}},(0,n.kt)("img",{src:a(9404).Z,alt:"Front View"})),(0,n.kt)("div",{style:{width:"50%",height:"auto"}},(0,n.kt)("img",{src:a(58508).Z,alt:"Inside View"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The headset cable can be damaged with heavy use, especially if it gets tangled around or used with a ceiling pulley system.\nA damaged cable may not show tell-tale \u201cdisplay snow\u201d or even obvious physical indicators, but can affect USB connectivity of the Eye\nbut more commonly, the Vive Facial Tracker connected to the accessory port of the Eye.\nReplacing the headset cable will often resolve \u201ccutting out\u201d or \u201cfail to initialize\u201d face and eye tracking problems.")),(0,n.kt)("h2",{id:"mods"},"Mods"),(0,n.kt)("p",null,"The following is a list of community made modifications or recommended products for the Vive Pro headset to improve comfort, add features, or fix issues.\n(Ordered by generally perceived difficulty to accomplish)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.studioformcreative.com/product-page/htc-vive-pro-1-2-apache-comfort-strap"},"Studioform Creative Apache Comfort Strap"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:2896509"},"Vive Pro Bass Clip"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:4900650"},"Unlock headstrap rotation mod"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Vive Pro Facial Tracker Mount: ",(0,n.kt)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:5332531"},"Variant 1")," | ",(0,n.kt)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:5444833"},"Variant 2"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/kusomaigo/VP_BMR_Arm"},"Vive Pro BMR Audio Replacement"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/Vive/comments/mz7cpt/vive_pro_eye_gearvr_mod_and_headset_disassembly/"},"GearVR Lens Swap (For Vive Pro Eye)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Samsung Odyssey+ Screen Swap"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Video from ForgottenFox#8555 going over many of these mods, and teardown tutorial for the GearVR lens swap and screen swap:"),(0,n.kt)("div",{class:"row",style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,n.kt)(i.Z,{controls:!0,url:"https://www.youtube.com/watch?v=0MVTsp736no",mdxType:"ReactPlayer"})))}h.isMDXComponent=!0},9404:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/vpe_front-4313a025d6a79d1d39bbd8eeb396265a.jpg"},58508:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/vpe_inside-f3e71280d014ef806d20a1628560f250.jpg"},82648:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/vrcft_installer-ee91e492bc58e5982831a43ad159fa6e.png"}}]);