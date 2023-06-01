"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7349],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(k,l(l({ref:r},u),{},{components:t})):n.createElement(k,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4445:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={title:"\u81ea\u52a8\u5347\u7ea7"},l=void 0,p={unversionedId:"upgrade/automated_upgrade",id:"upgrade/automated_upgrade",title:"\u81ea\u52a8\u5347\u7ea7",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrade/automated_upgrade.md",sourceDirName:"upgrade",slug:"/upgrade/automated_upgrade",permalink:"/zh/upgrade/automated_upgrade",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/upgrade/automated_upgrade.md",tags:[],version:"current",lastUpdatedAt:1685635809,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u81ea\u52a8\u5347\u7ea7"},sidebar:"mySidebar",previous:{title:"\u624b\u52a8\u5347\u7ea7",permalink:"/zh/upgrade/manual_upgrade"},next:{title:"\u5f3a\u5316\u955c\u50cf",permalink:"/zh/security/about_hardened_images"}},i={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u5b89\u88c5 system-upgrade-controller",id:"\u5b89\u88c5-system-upgrade-controller",level:3},{value:"\u914d\u7f6e\u8ba1\u5212",id:"\u914d\u7f6e\u8ba1\u5212",level:3}],u={toc:s};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u7684 system-upgrade-controller \u7ba1\u7406 RKE2 \u96c6\u7fa4\u5347\u7ea7\u3002\u8fd9\u662f\u4e00\u79cd Kubernetes \u539f\u751f\u7684\u96c6\u7fa4\u5347\u7ea7\u65b9\u6cd5\u3002\u5b83\u5229\u7528",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources"},"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\uff08custom resource definition\uff0cCRD\uff09"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u8ba1\u5212"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"\u63a7\u5236\u5668"),"\uff0c\u6839\u636e\u914d\u7f6e\u7684\u8ba1\u5212\u5b89\u6392\u5347\u7ea7\u3002"),(0,a.kt)("p",null,"\u8ba1\u5212\u5b9a\u4e49\u4e86\u5347\u7ea7\u7684\u7b56\u7565\u548c\u8981\u6c42\u3002\u672c\u6587\u6863\u5c06\u63d0\u4f9b\u9002\u7528\u4e8e\u5347\u7ea7 RKE2 \u96c6\u7fa4\u7684\u9ed8\u8ba4\u8ba1\u5212\u3002\u6709\u5173\u66f4\u9ad8\u7ea7\u7684\u8ba1\u5212\u914d\u7f6e\u9009\u9879\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/blob/master/pkg/apis/upgrade.cattle.io/v1/types.go"},"CRD"),"\u3002"),(0,a.kt)("p",null,"\u63a7\u5236\u5668\u901a\u8fc7\u76d1\u63a7\u8ba1\u5212\u548c\u9009\u62e9\u8981\u8fd0\u884c\u5347\u7ea7 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"job")," \u7684\u8282\u70b9\u6765\u5b89\u6392\u5347\u7ea7\u3002\u8ba1\u5212\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"\u6807\u7b7e\u9009\u62e9\u5668"),"\u5b9a\u4e49\u5e94\u8be5\u5347\u7ea7\u54ea\u4e9b\u8282\u70b9\u3002job \u6210\u529f\u8fd0\u884c\u5b8c\u6210\u65f6\uff0c\u63a7\u5236\u5668\u5c06\u76f8\u5e94\u5730\u6807\u8bb0\u5b83\u8fd0\u884c\u7684\u8282\u70b9\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u542f\u52a8\u7684\u5347\u7ea7 job \u5fc5\u987b\u5177\u6709\u9ad8\u6743\u9650\u3002\u5b83\u914d\u7f6e\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u673a ",(0,a.kt)("inlineCode",{parentName:"li"},"IPC"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"NET")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"PID")," \u547d\u540d\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CAP_SYS_BOOT")," \u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"/host")," \u7684\u4e3b\u673a\u6839\u76ee\u5f55\uff0c\u5177\u6709\u8bfb\u5199\u6743\u9650"))),(0,a.kt)("p",null,"\u6709\u5173 system-upgrade-controller \u7684\u8bbe\u8ba1\u548c\u67b6\u6784\uff0c\u4ee5\u53ca\u5b83\u4e0e RKE2 \u96c6\u6210\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b Git \u4ed3\u5e93\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/system-upgrade-controller"},"system-upgrade-controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s-upgrade"},"rke2-upgrade"))),(0,a.kt)("p",null,"\u8981\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u81ea\u52a8\u5347\u7ea7\uff0c\u4f60\u5fc5\u987b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06 system-upgrade-controller \u5b89\u88c5\u5230\u96c6\u7fa4\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8ba1\u5212")),(0,a.kt)("h3",{id:"\u5b89\u88c5-system-upgrade-controller"},"\u5b89\u88c5 system-upgrade-controller"),(0,a.kt)("p",null,"system-upgrade-controller \u53ef\u4ee5\u4f5c\u4e3a Deployment \u5b89\u88c5\u5230\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002Deployment \u9700\u8981 ServiceAccount\u3001clusterRoleBinding \u548c configmap\u3002\u8981\u5b89\u88c5\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/download/v0.9.1/system-upgrade-controller.yaml\n")),(0,a.kt)("p",null,"\u63a7\u5236\u5668\u53ef\u4ee5\u901a\u8fc7\u524d\u9762\u63d0\u5230\u7684 configmap \u8fdb\u884c\u914d\u7f6e\u548c\u81ea\u5b9a\u4e49\uff0c\u4f46\u63a7\u5236\u5668\u5fc5\u987b\u91cd\u65b0\u90e8\u7f72\u624d\u80fd\u5e94\u7528\u66f4\u6539\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u8ba1\u5212"},"\u914d\u7f6e\u8ba1\u5212"),(0,a.kt)("p",null,"\u5efa\u8bae\u4f60\u81f3\u5c11\u521b\u5efa\u4e24\u4e2a\u8ba1\u5212\uff1a\u5347\u7ea7 server\uff08master/control plane\uff09\u8282\u70b9\u7684\u8ba1\u5212\u548c\u5347\u7ea7 agent\uff08worker\uff09\u8282\u70b9\u7684\u8ba1\u5212\u3002\u6839\u636e\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u5176\u4ed6\u8ba1\u5212\u6765\u63a7\u5236\u8de8\u8282\u70b9\u7684\u5347\u7ea7\u56de\u6eda\u3002\u4ee5\u4e0b\u4e24\u4e2a\u793a\u4f8b\u8ba1\u5212\u4f1a\u5c06\u4f60\u7684\u96c6\u7fa4\u5347\u7ea7\u5230 rke2 v1.23.1+rke2r2\u3002\u521b\u5efa\u8ba1\u5212\u540e\uff0c\u63a7\u5236\u5668\u5c06\u9009\u62e9\u5b83\u4eec\u5e76\u5f00\u59cb\u5347\u7ea7\u4f60\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Server plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\n  labels:\n    rke2-upgrade: server\nspec:\n  concurrency: 1\n  nodeSelector:\n    matchExpressions:\n       - {key: rke2-upgrade, operator: Exists}\n       - {key: rke2-upgrade, operator: NotIn, values: ["disabled", "false"]}\n       # When using k8s version 1.19 or older, swap control-plane with master\n       - {key: node-role.kubernetes.io/control-plane, operator: In, values: ["true"]}\n  serviceAccountName: system-upgrade\n  cordon: true\n#  drain:\n#    force: true\n  upgrade:\n    image: rancher/rke2-upgrade\n  version: v1.23.1-rke2r2\n---\n# Agent plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: agent-plan\n  namespace: system-upgrade\n  labels:\n    rke2-upgrade: agent\nspec:\n  concurrency: 2\n  nodeSelector:\n    matchExpressions:\n      - {key: rke2-upgrade, operator: Exists}\n      - {key: rke2-upgrade, operator: NotIn, values: ["disabled", "false"]}\n      # When using k8s version 1.19 or older, swap control-plane with master\n      - {key: node-role.kubernetes.io/control-plane, operator: NotIn, values: ["true"]}\n  prepare:\n    args:\n    - prepare\n    - server-plan\n    image: rancher/rke2-upgrade\n  serviceAccountName: system-upgrade\n  cordon: true\n  drain:\n    force: true\n  upgrade:\n    image: rancher/rke2-upgrade\n  version: v1.23.1-rke2r2\n\n')),(0,a.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e9b\u8ba1\u5212\uff0c\u6709\u51e0\u4e2a\u91cd\u8981\u7684\u4e8b\u60c5\u9700\u8981\u6ce8\u610f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8ba1\u5212\u5fc5\u987b\u5728\u90e8\u7f72\u63a7\u5236\u5668\u7684\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"concurrency")," \u5b57\u6bb5\u8868\u793a\u53ef\u4ee5\u540c\u65f6\u5347\u7ea7\u591a\u5c11\u4e2a\u8282\u70b9\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"server-plan")," \u901a\u8fc7\u6307\u5b9a\u4e00\u4e2a\u6807\u7b7e\u9009\u62e9\u5668\u6765\u9009\u62e9 Server \u8282\u70b9\uff0c\u8be5\u6807\u7b7e\u9009\u62e9\u5668\u4f1a\u9009\u62e9\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"node-role.kubernetes.io/control-plane")," \u6807\u7b7e\u7684\u8282\u70b9\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"node-role.kubernetes.io/master")," \u9002\u7528\u4e8e 1.19 \u6216\u66f4\u65e9\u7248\u672c\uff09\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"agent-plan")," \u901a\u8fc7\u6307\u5b9a\u4e00\u4e2a\u6807\u7b7e\u9009\u62e9\u5668\u6765\u9009\u62e9\u6ca1\u6709\u8be5\u6807\u7b7e\u7684\u8282\u70b9\uff0c\u4ece\u800c\u9501\u5b9a agent \u8282\u70b9\u3002\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u5305\u542b\u5176\u4ed6\u6807\u7b7e\uff0c\u5982\u4e0a\u4f8b\u6240\u793a\uff0c\u5b83\u8981\u6c42\u6807\u7b7e \u201crke2-upgrade\u201d \u5b58\u5728\u5e76\u4e14\u503c\u4e0d\u662f \u201cdisabled\u201d \u6216 \u201cfalse\u201d\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"agent-plan")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare")," \u6b65\u9aa4\u4f1a\u4f7f\u8be5\u8ba1\u5212\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"p"},"server-plan")," \u5b8c\u6210\u540e\u518d\u6267\u884c\u5347\u7ea7 job\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e24\u4e2a\u8ba1\u5212\u90fd\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a v1.23.1+rke2r2\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u7701\u7565 ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," \u5b57\u6bb5\u5e76\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"channel")," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u89e3\u6790\u5230 RKE2 \u7248\u672c\u7684 URL\u3002\u8fd9\u5c06\u5bfc\u81f4\u63a7\u5236\u5668\u76d1\u63a7\u8be5 URL\uff0c\u5e76\u5728\u5b83\u89e3\u6790\u5230\u65b0\u7248\u672c\u65f6\u968f\u65f6\u5347\u7ea7\u96c6\u7fa4\u3002\u8fd9\u9002\u7528\u4e8e",(0,a.kt)("a",{parentName:"p",href:"manual_upgrade#%E7%89%88%E6%9C%AC-channels"},"\u7248\u672c channels"),"\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684 channel \u914d\u7f6e\u8ba1\u5212\uff0c\u4ece\u800c\u786e\u4fdd\u4f60\u7684\u96c6\u7fa4\u603b\u662f\u81ea\u52a8\u5347\u7ea7\u5230 RKE2 \u7684\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: upgrade.cattle.io/v1\nkind: Plan\n...\nspec:\n  ...\n  channel: https://update.rke2.io/v1-release/channels/stable\n\n")),(0,a.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u4e00\u65e6\u63a7\u5236\u5668\u68c0\u6d4b\u5230\u5df2\u521b\u5efa\u8ba1\u5212\uff0c\u5347\u7ea7\u5c31\u4f1a\u7acb\u5373\u5f00\u59cb\u3002\u66f4\u65b0\u8ba1\u5212\u5c06\u5bfc\u81f4\u63a7\u5236\u5668\u91cd\u65b0\u8bc4\u4f30\u8ba1\u5212\u5e76\u786e\u5b9a\u662f\u5426\u9700\u8981\u518d\u6b21\u5347\u7ea7\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 kubectl \u67e5\u770b\u8ba1\u5212\u548c job \u6765\u76d1\u63a7\u5347\u7ea7\u8fdb\u5ea6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n system-upgrade get plans -o yaml\nkubectl -n system-upgrade get jobs -o yaml\n")))}c.isMDXComponent=!0}}]);