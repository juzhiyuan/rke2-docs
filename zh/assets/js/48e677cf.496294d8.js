"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(d,i(i({ref:t},k),{},{components:n})):r.createElement(d,i({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u5feb\u901f\u5f00\u59cb"},i=void 0,o={unversionedId:"install/quickstart",id:"install/quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"\u672c\u6307\u5357\u5e2e\u52a9\u4f60\u4f7f\u7528\u9ed8\u8ba4\u9009\u9879\u5feb\u901f\u542f\u52a8\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/quickstart.md",sourceDirName:"install",slug:"/install/quickstart",permalink:"/zh/install/quickstart",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/quickstart.md",tags:[],version:"current",lastUpdatedAt:1685635809,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb"},sidebar:"mySidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/zh/"},next:{title:"\u8981\u6c42",permalink:"/zh/install/requirements"}},p={},s=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"Server \u8282\u70b9\u5b89\u88c5",id:"server-\u8282\u70b9\u5b89\u88c5",level:3},{value:"1. \u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f",id:"1-\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f",level:4},{value:"2. \u542f\u7528 rke2-server \u670d\u52a1",id:"2-\u542f\u7528-rke2-server-\u670d\u52a1",level:4},{value:"3. \u542f\u52a8\u670d\u52a1",id:"3-\u542f\u52a8\u670d\u52a1",level:4},{value:"4. \u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7",id:"4-\u5982\u6709\u9700\u8981\u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7",level:4},{value:"Linux Agent\uff08Worker\uff09\u8282\u70b9\u5b89\u88c5",id:"linux-agentworker\u8282\u70b9\u5b89\u88c5",level:3},{value:"1. \u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f",id:"1-\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f-1",level:4},{value:"2. \u542f\u7528 rke2-agent \u670d\u52a1",id:"2-\u542f\u7528-rke2-agent-\u670d\u52a1",level:4},{value:"3. \u914d\u7f6e rke2-agent \u670d\u52a1",id:"3-\u914d\u7f6e-rke2-agent-\u670d\u52a1",level:4},{value:"4. \u542f\u52a8\u670d\u52a1",id:"4-\u542f\u52a8\u670d\u52a1",level:4},{value:"Windows Agent\uff08Worker\uff09\u8282\u70b9\u5b89\u88c5",id:"windows-agentworker\u8282\u70b9\u5b89\u88c5",level:3},{value:"0. \u51c6\u5907 Windows Agent \u8282\u70b9",id:"0-\u51c6\u5907-windows-agent-\u8282\u70b9",level:4},{value:"1. \u4e0b\u8f7d\u5b89\u88c5\u811a\u672c",id:"1-\u4e0b\u8f7d\u5b89\u88c5\u811a\u672c",level:4},{value:"2. \u4e3a Windows \u914d\u7f6e rke2-agent",id:"2-\u4e3a-windows-\u914d\u7f6e-rke2-agent",level:4},{value:"3. \u914d\u7f6e PATH",id:"3-\u914d\u7f6e-path",level:4},{value:"4. \u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f",id:"4-\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f",level:4},{value:"5. \u542f\u52a8 Windows RKE2 \u670d\u52a1",id:"5-\u542f\u52a8-windows-rke2-\u670d\u52a1",level:4}],k={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6307\u5357\u5e2e\u52a9\u4f60\u4f7f\u7528\u9ed8\u8ba4\u9009\u9879\u5feb\u901f\u542f\u52a8\u96c6\u7fa4\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Kubernetes \u65b0\u624b\uff1fKubernetes \u5b98\u65b9\u6587\u6863\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u5f88\u597d\u7684",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"\u57fa\u7840\u77e5\u8bc6\u6559\u7a0b"),"\u3002")),(0,a.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u786e\u4fdd\u4f60\u7684\u73af\u5883\u6ee1\u8db3",(0,a.kt)("a",{parentName:"p",href:"/zh/install/requirements"},"\u8981\u6c42"),"\u3002\n\u5982\u679c\u4f60\u7684\u4e3b\u673a\u5b89\u88c5\u5e76\u542f\u7528\u4e86 NetworkManager\uff0c\u8bf7",(0,a.kt)("a",{parentName:"p",href:"/zh/known_issues#networkmanager"},"\u786e\u4fdd\u5c06\u5176\u914d\u7f6e\u4e3a\u5ffd\u7565 CNI \u7ba1\u7406\u7684\u63a5\u53e3"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u4e8e RKE2 1.21 \u53ca\u66f4\u9ad8\u7248\u672c\uff0c\u5982\u679c\u4e3b\u673a\u5185\u6838\u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://apparmor.net/"},"AppArmor"),"\uff0c\u5219\u5728\u5b89\u88c5 RKE2 \u4e4b\u524d\u8fd8\u5fc5\u987b\u5177\u6709 AppArmor \u5de5\u5177\uff08\u901a\u5e38\u53ef\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"apparmor-parser")," \u5305\u83b7\u5f97\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5fc5\u987b\u4ee5 root \u7528\u6237\u6216\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," \u6267\u884c RKE2 \u5b89\u88c5\u3002"))),(0,a.kt)("h3",{id:"server-\u8282\u70b9\u5b89\u88c5"},"Server \u8282\u70b9\u5b89\u88c5"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"RKE2 \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b89\u88c5\u811a\u672c\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5c06\u5176\u4f5c\u4e3a\u670d\u52a1\u5b89\u88c5\u5728\u57fa\u4e8e systemd \u7684\u7cfb\u7edf\u4e0a\u3002\u8be5\u811a\u672c\u53ef\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://get.rke2.io"},"https://get.rke2.io")," \u83b7\u5f97\u3002\u8981\u4f7f\u7528\u6b64\u65b9\u6cd5\u5b89\u88c5 RKE2\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("h4",{id:"1-\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f"},"1. \u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io | sh -\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"curl -sfL https://rancher-mirror.rancher.cn/rke2/install.sh | INSTALL_RKE2_MIRROR=cn sh -\n"))),(0,a.kt)("p",null,"\u8fd9\u4f1a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-server")," \u670d\u52a1\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u5b89\u88c5\u5230\u4f60\u7684\u4e3b\u673a\u4e0a\u3002\u9664\u975e\u4ee5 root \u7528\u6237\u6216\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," \u8fd0\u884c\uff0c\u5426\u5219\u5b83\u5c06\u5931\u8d25\u3002"),(0,a.kt)("h4",{id:"2-\u542f\u7528-rke2-server-\u670d\u52a1"},"2. \u542f\u7528 rke2-server \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable rke2-server.service\n")),(0,a.kt)("h4",{id:"3-\u542f\u52a8\u670d\u52a1"},"3. \u542f\u52a8\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl start rke2-server.service\n")),(0,a.kt)("h4",{id:"4-\u5982\u6709\u9700\u8981\u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7"},"4. \u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u rke2-server -f\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u6b64\u5b89\u88c5\u540e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rke2-server")," \u670d\u52a1\u5c06\u4f1a\u5b89\u88c5\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-server")," \u670d\u52a1\u5c06\u88ab\u914d\u7f6e\u4e3a\u5728\u8282\u70b9\u91cd\u542f\u540e\u6216\u8fdb\u7a0b\u5d29\u6e83\u6216\u88ab\u6740\u6b7b\u65f6\u81ea\u52a8\u91cd\u542f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5b9e\u7528\u7a0b\u5e8f\u5c06\u5b89\u88c5\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke2/bin/"),"\uff0c\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"crictl")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"ctr"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u4eec\u4e0d\u5728\u4f60\u7684\u8def\u5f84\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u6e05\u7406\u811a\u672c ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-killall.sh")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," \u5c06\u5b89\u88c5\u5230\u4ee5\u4e0b\u8def\u5f84\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5e38\u89c4\u6587\u4ef6\u7cfb\u7edf\uff0c\u5219\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u53ea\u8bfb\u548c brtfs \u6587\u4ef6\u7cfb\u7edf\uff0c\u5219\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"/opt/rke2/bin")),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"INSTALL_RKE2_TAR_PREFIX"),"\uff0c\u5219\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"INSTALL_RKE2_TAR_PREFIX/bin")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," \u6587\u4ef6\u5c06\u5199\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/rancher/rke2/rke2.yaml"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6ce8\u518c\u5176\u4ed6 Server \u6216 Agent \u8282\u70b9\u7684\u4ee4\u724c\u5c06\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke2/server/node-token")," \u4e2d\u521b\u5efa\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u6dfb\u52a0\u5176\u4ed6 Server \u8282\u70b9\uff0c\u5219\u603b\u6570\u5fc5\u987b\u4e3a\u5947\u6570\u3002\u4ef2\u88c1\u8981\u6c42\u8282\u70b9\u6570\u4e3a\u5947\u6570\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/install/ha"},"\u9ad8\u53ef\u7528\u6587\u6863"),"\u3002")),(0,a.kt)("h3",{id:"linux-agentworker\u8282\u70b9\u5b89\u88c5"},"Linux Agent\uff08Worker\uff09\u8282\u70b9\u5b89\u88c5"),(0,a.kt)("p",null,"\u672c\u8282\u4e2d\u7684\u6b65\u9aa4\u9700\u8981 root \u7ea7\u522b\u8bbf\u95ee\u6743\u9650\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," \u624d\u80fd\u6267\u884c\u3002"),(0,a.kt)("h4",{id:"1-\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f-1"},"1. \u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -sfL https://get.rke2.io | INSTALL_RKE2_TYPE="agent" sh -\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'curl -sfL https://rancher-mirror.rancher.cn/rke2/install.sh | INSTALL_RKE2_MIRROR=cn INSTALL_RKE2_TYPE="agent" sh -\n'))),(0,a.kt)("p",null,"\u8fd9\u4f1a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-agent")," \u670d\u52a1\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u5b89\u88c5\u5230\u4f60\u7684\u4e3b\u673a\u4e0a\u3002\u9664\u975e\u4ee5 root \u7528\u6237\u6216\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," \u8fd0\u884c\uff0c\u5426\u5219\u5b83\u5c06\u5931\u8d25\u3002"),(0,a.kt)("h4",{id:"2-\u542f\u7528-rke2-agent-\u670d\u52a1"},"2. \u542f\u7528 rke2-agent \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable rke2-agent.service\n")),(0,a.kt)("h4",{id:"3-\u914d\u7f6e-rke2-agent-\u670d\u52a1"},"3. \u914d\u7f6e rke2-agent \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /etc/rancher/rke2/\nvim /etc/rancher/rke2/config.yaml\n")),(0,a.kt)("p",null,"config.yaml \u7684\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server: https://<server>:9345\ntoken: <token from server node>\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"rke2 server")," \u8fdb\u7a0b\u5728\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"9345")," \u4e0a\u4fa6\u542c\u65b0\u8282\u70b9\u6ce8\u518c\u3002Kubernetes API \u4ecd\u7136\u7167\u5e38\u5728\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"6443")," \u4e0a\u63d0\u4f9b\u670d\u52a1\u3002")),(0,a.kt)("h4",{id:"4-\u542f\u52a8\u670d\u52a1"},"4. \u542f\u52a8\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl start rke2-agent.service\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u rke2-agent -f\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6bcf\u53f0\u4e3b\u673a\u5fc5\u987b\u5177\u6709\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3002\u5982\u679c\u4f60\u7684\u4e3b\u673a\u6ca1\u6709\u552f\u4e00\u7684\u4e3b\u673a\u540d\uff0c\u8bf7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"node-name")," \u53c2\u6570\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u8282\u70b9\u63d0\u4f9b\u4e00\u4e2a\u6709\u6548\u4e14\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3002"),(0,a.kt)("p",null,"\u6709\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/install/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u5b89\u88c5\u9009\u9879\u6587\u6863"),"\u3002"),(0,a.kt)("h3",{id:"windows-agentworker\u8282\u70b9\u5b89\u88c5"},"Windows Agent\uff08Worker\uff09\u8282\u70b9\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows \u652f\u6301\u76ee\u524d\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff08\u4ece v1.21.3+rke2r1 \u5f00\u59cb\uff09"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Windows \u652f\u6301\u8981\u6c42\u9009\u62e9 Calico \u4f5c\u4e3a RKE2 \u96c6\u7fa4\u7684 CNI")),(0,a.kt)("h4",{id:"0-\u51c6\u5907-windows-agent-\u8282\u70b9"},"0. \u51c6\u5907 Windows Agent \u8282\u70b9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u9700\u8981\u542f\u7528 Windows Server Containers \u529f\u80fd\u624d\u80fd\u4f7f RKE2 Agent \u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u6253\u5f00\u4e00\u4e2a\u65b0\u7684 Powershell \u7a97\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'powershell -Command "Start-Process PowerShell -Verb RunAs"\n')),(0,a.kt)("p",null,"\u5728\u65b0\u7684 Powershell \u7a97\u53e3\u4e2d\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName containers \u2013All\n")),(0,a.kt)("p",null,"\u9700\u8981\u91cd\u542f\u624d\u80fd\u4f7f ",(0,a.kt)("inlineCode",{parentName:"p"},"Containers")," \u529f\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"),(0,a.kt)("h4",{id:"1-\u4e0b\u8f7d\u5b89\u88c5\u811a\u672c"},"1. \u4e0b\u8f7d\u5b89\u88c5\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -Uri https://raw.githubusercontent.com/rancher/rke2/master/install.ps1 -Outfile install.ps1\n")),(0,a.kt)("p",null,"\u6b64\u811a\u672c\u4f1a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2.exe")," Windows \u4e8c\u8fdb\u5236\u6587\u4ef6\u4e0b\u8f7d\u5230\u4f60\u7684\u8ba1\u7b97\u673a\u4e0a\u3002"),(0,a.kt)("h4",{id:"2-\u4e3a-windows-\u914d\u7f6e-rke2-agent"},"2. \u4e3a Windows \u914d\u7f6e rke2-agent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'New-Item -Type Directory c:/etc/rancher/rke2 -Force\nSet-Content -Path c:/etc/rancher/rke2/config.yaml -Value @"\nserver: https://<server>:9345\ntoken: <token from server node>\n"@\n')),(0,a.kt)("p",null,"\u6709\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/install/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u5b89\u88c5\u9009\u9879\u6587\u6863"),"\u3002"),(0,a.kt)("h4",{id:"3-\u914d\u7f6e-path"},"3. \u914d\u7f6e PATH"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH+=";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin"\n\n[Environment]::SetEnvironmentVariable(\n    "Path",\n    [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine) + ";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin",\n    [EnvironmentVariableTarget]::Machine)\n')),(0,a.kt)("h4",{id:"4-\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f"},"4. \u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"./install.ps1\n")),(0,a.kt)("h4",{id:"5-\u542f\u52a8-windows-rke2-\u670d\u52a1"},"5. \u542f\u52a8 Windows RKE2 \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"rke2.exe agent service --add\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6bcf\u53f0\u4e3b\u673a\u5fc5\u987b\u5177\u6709\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u4ec5\u4f7f\u7528 CLI \u53c2\u6570\uff0c\u8bf7\u4f7f\u7528\u6240\u9700\u53c2\u6570\u8fd0\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"rke2.exe agent --token <> --server <>\n")))}c.isMDXComponent=!0}}]);