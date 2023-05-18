"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[9804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={title:"Manual Upgrades"},s=void 0,o={unversionedId:"upgrade/manual_upgrade",id:"upgrade/manual_upgrade",title:"Manual Upgrades",description:"You can upgrade rke2 by using the installation script, or by manually installing the binary of the desired version.",source:"@site/docs/upgrade/manual_upgrade.md",sourceDirName:"upgrade",slug:"/upgrade/manual_upgrade",permalink:"/upgrade/manual_upgrade",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/upgrade/manual_upgrade.md",tags:[],version:"current",lastUpdatedAt:1684426920,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Manual Upgrades"},sidebar:"mySidebar",previous:{title:"Overview",permalink:"/upgrade/"},next:{title:"Automated Upgrades",permalink:"/upgrade/automated_upgrade"}},i={},p=[{value:"Release Channels",id:"release-channels",level:3},{value:"Upgrade rke2 Using the Installation Script",id:"upgrade-rke2-using-the-installation-script",level:3},{value:"Manually Upgrade rke2 Using the Binary",id:"manually-upgrade-rke2-using-the-binary",level:3},{value:"Restarting rke2",id:"restarting-rke2",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can upgrade rke2 by using the installation script, or by manually installing the binary of the desired version."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Upgrade the server nodes first, one at a time. Once all servers have been upgraded, you may then upgrade agent nodes.")),(0,n.kt)("h3",{id:"release-channels"},"Release Channels"),(0,n.kt)("p",null,"Upgrades performed via the installation script or using our ",(0,n.kt)("a",{parentName:"p",href:"/upgrade/automated_upgrade"},"automated upgrades")," feature can be tied to different release channels. The following channels are available:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Channel"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stable"),(0,n.kt)("td",{parentName:"tr",align:null},"(Default) Stable is recommended for production environments. These releases have been through a period of community hardening, and are compatible with the most recent release of Rancher.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"latest"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest is recommended for trying out the latest features.  These releases have not yet been through a period of community hardening, and may not be compatible with Rancher.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v1.26 (example)"),(0,n.kt)("td",{parentName:"tr",align:null},"There is a release channel tied to each Kubernetes minor version, including versions that are end-of-life. These channels will select the latest patch available, not necessarily a stable release.")))),(0,n.kt)("p",null,"For an exhaustive and up-to-date list of channels, you can visit the ",(0,n.kt)("a",{parentName:"p",href:"https://update.rke2.io/v1-release/channels"},"rke2 channel service API"),". For more technical details on how channels work, you can see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/channelserver"},"channelserver project"),"."),(0,n.kt)("h3",{id:"upgrade-rke2-using-the-installation-script"},"Upgrade rke2 Using the Installation Script"),(0,n.kt)("p",null,"To upgrade rke2 from an older version you can re-run the installation script using the same flags, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io | sh -\n")),(0,n.kt)("p",null,"This will upgrade to the most recent version in the stable channel by default."),(0,n.kt)("p",null,"If you want to upgrade to the most recent version in a specific channel (such as latest) you can specify the channel:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=latest sh -\n")),(0,n.kt)("p",null,"If you want to upgrade to a specific version you can run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io | INSTALL_RKE2_VERSION=vX.Y.Z+rke2rN sh -\n")),(0,n.kt)("p",null,"Remember to restart the rke2 process after installing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Server nodes:\nsystemctl restart rke2-server\n\n# Agent nodes:\nsystemctl restart rke2-agent\n")),(0,n.kt)("h3",{id:"manually-upgrade-rke2-using-the-binary"},"Manually Upgrade rke2 Using the Binary"),(0,n.kt)("p",null,"Or to manually upgrade rke2:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the desired version of the rke2 binary from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke2/releases"},"releases")),(0,n.kt)("li",{parentName:"ol"},"Copy the downloaded binary to ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/rke2")," for tarball installed rke2, and ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/bin")," for rpm installed rke2"),(0,n.kt)("li",{parentName:"ol"},"Stop the old rke2 binary"),(0,n.kt)("li",{parentName:"ol"},"Launch the new rke2 binary")),(0,n.kt)("h3",{id:"restarting-rke2"},"Restarting rke2"),(0,n.kt)("p",null,"Restarting rke2 is supported by the installation script for systemd."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"systemd")),(0,n.kt)("p",null,"To restart servers manually:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart rke2-server\n")),(0,n.kt)("p",null,"To restart agents manually:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart rke2-agent\n")))}c.isMDXComponent=!0}}]);