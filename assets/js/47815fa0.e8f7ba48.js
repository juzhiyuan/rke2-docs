"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[1880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"Automated Upgrades"},l=void 0,s={unversionedId:"upgrade/automated_upgrade",id:"upgrade/automated_upgrade",title:"Automated Upgrades",description:"Overview",source:"@site/docs/upgrade/automated_upgrade.md",sourceDirName:"upgrade",slug:"/upgrade/automated_upgrade",permalink:"/upgrade/automated_upgrade",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/upgrade/automated_upgrade.md",tags:[],version:"current",lastUpdatedAt:1672961407,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Automated Upgrades"},sidebar:"mySidebar",previous:{title:"Manual Upgrades",permalink:"/upgrade/manual_upgrade"},next:{title:"About Hardened Images",permalink:"/security/about_hardened_images"}},p={},i=[{value:"Overview",id:"overview",level:3},{value:"Install the system-upgrade-controller",id:"install-the-system-upgrade-controller",level:3},{value:"Configure plans",id:"configure-plans",level:3}],u={toc:i};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"You can manage rke2 cluster upgrades using Rancher's system-upgrade-controller. This is a Kubernetes-native approach to cluster upgrades. It leverages a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources"},"custom resource definition (CRD)"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"plan"),", and a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"controller")," that schedules upgrades based on the configured plans."),(0,a.kt)("p",null,"A plan defines upgrade policies and requirements. This documentation will provide plans with defaults appropriate for upgrading a rke2 cluster. For more advanced plan configuration options, please review the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/blob/master/pkg/apis/upgrade.cattle.io/v1/types.go"},"CRD"),"."),(0,a.kt)("p",null,"The controller schedules upgrades by monitoring plans and selecting nodes to run upgrade ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"jobs")," on. A plan defines which nodes should be upgraded through a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"label selector"),". When a job has run to completion successfully, the controller will label the node on which it ran accordingly."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," The upgrade job that is launched must be highly privileged. It is configured with the following:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Host ",(0,a.kt)("inlineCode",{parentName:"li"},"IPC"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"NET"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"PID")," namespaces"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"CAP_SYS_BOOT")," capability"),(0,a.kt)("li",{parentName:"ul"},"Host root mounted at ",(0,a.kt)("inlineCode",{parentName:"li"},"/host")," with read and write permissions"))),(0,a.kt)("p",null,"For more details on the design and architecture of the system-upgrade-controller or its integration with rke2, see the following Git repositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/system-upgrade-controller"},"system-upgrade-controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke2-upgrade"},"rke2-upgrade"))),(0,a.kt)("p",null,"To automate upgrades in this manner you must:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the system-upgrade-controller into your cluster"),(0,a.kt)("li",{parentName:"ol"},"Configure plans")),(0,a.kt)("h3",{id:"install-the-system-upgrade-controller"},"Install the system-upgrade-controller"),(0,a.kt)("p",null,"The system-upgrade-controller can be installed as a deployment into your cluster. The deployment requires a service-account, clusterRoleBinding, and a configmap. To install these components, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/download/v0.9.1/system-upgrade-controller.yaml\n")),(0,a.kt)("p",null,"The controller can be configured and customized via the previously mentioned configmap, but the controller must be redeployed for the changes to be applied."),(0,a.kt)("h3",{id:"configure-plans"},"Configure plans"),(0,a.kt)("p",null,"It is recommended that you minimally create two plans: a plan for upgrading server (master / control-plane) nodes and a plan for upgrading agent (worker) nodes. As needed, you can create additional plans to control the rollout of the upgrade across nodes. The following two example plans will upgrade your cluster to rke2 v1.23.1+rke2r2. Once the plans are created, the controller will pick them up and begin to upgrade your cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Server plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\n  labels:\n    rke2-upgrade: server\nspec:\n  concurrency: 1\n  nodeSelector:\n    matchExpressions:\n       - {key: rke2-upgrade, operator: Exists}\n       - {key: rke2-upgrade, operator: NotIn, values: ["disabled", "false"]}\n       # When using k8s version 1.19 or older, swap control-plane with master\n       - {key: node-role.kubernetes.io/control-plane, operator: In, values: ["true"]}\n  serviceAccountName: system-upgrade\n  cordon: true\n#  drain:\n#    force: true\n  upgrade:\n    image: rancher/rke2-upgrade\n  version: v1.23.1-rke2r2\n---\n# Agent plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: agent-plan\n  namespace: system-upgrade\n  labels:\n    rke2-upgrade: agent\nspec:\n  concurrency: 2\n  nodeSelector:\n    matchExpressions:\n      - {key: rke2-upgrade, operator: Exists}\n      - {key: rke2-upgrade, operator: NotIn, values: ["disabled", "false"]}\n      # When using k8s version 1.19 or older, swap control-plane with master\n      - {key: node-role.kubernetes.io/control-plane, operator: NotIn, values: ["true"]}\n  prepare:\n    args:\n    - prepare\n    - server-plan\n    image: rancher/rke2-upgrade\n  serviceAccountName: system-upgrade\n  cordon: true\n  drain:\n    force: true\n  upgrade:\n    image: rancher/rke2-upgrade\n  version: v1.23.1-rke2r2\n\n')),(0,a.kt)("p",null,"There are a few important things to call out regarding these plans:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The plans must be created in the same namespace where the controller was deployed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"concurrency")," field indicates how many nodes can be upgraded at the same time. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The server-plan targets server nodes by specifying a label selector that selects nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"node-role.kubernetes.io/control-plane")," label (",(0,a.kt)("inlineCode",{parentName:"p"},"node-role.kubernetes.io/master"),' for 1.19 or older). The agent-plan targets agent nodes by specifying a label selector that select nodes without that label. Optionally, additional labels can be included, like in the example above, which requires label "rke2-upgrade" to exist and not have the value "disabled" or "false".')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare")," step in the agent-plan will cause upgrade jobs for that plan to wait for the server-plan to complete before they execute.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Both plans have the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," field set to v1.23.1+rke2r2. Alternatively, you can omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," field and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"channel")," field to a URL that resolves to a release of rke2. This will cause the controller to monitor that URL and upgrade the cluster any time it resolves to a new release. This works well with the ",(0,a.kt)("a",{parentName:"p",href:"/upgrade/manual_upgrade#release-channels"},"release channels"),". Thus, you can configure your plans with the following channel to ensure your cluster is always automatically upgraded to the newest stable release of rke2:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: upgrade.cattle.io/v1\nkind: Plan\n...\nspec:\n  ...\n  channel: https://update.rke2.io/v1-release/channels/stable\n\n")),(0,a.kt)("p",null,"As stated, the upgrade will begin as soon as the controller detects that a plan was created. Updating a plan will cause the controller to re-evaluate the plan and determine if another upgrade is needed."),(0,a.kt)("p",null,"You can monitor the progress of an upgrade by viewing the plan and jobs via kubectl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n system-upgrade get plans -o yaml\nkubectl -n system-upgrade get jobs -o yaml\n")))}d.isMDXComponent=!0}}]);