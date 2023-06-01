"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[5057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={title:"Default Pod Security Standards"},a=void 0,s={unversionedId:"security/pod_security_standards",id:"security/pod_security_standards",title:"Default Pod Security Standards",description:"This document describes how RKE2 configures PodSecurityStandards and NetworkPolicies in order to be secure-by-default while also providing operators with maximum configuration flexibility.",source:"@site/docs/security/pod_security_standards.md",sourceDirName:"security",slug:"/security/pod_security_standards",permalink:"/security/pod_security_standards",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/pod_security_standards.md",tags:[],version:"current",lastUpdatedAt:1685635809,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"Default Pod Security Standards"},sidebar:"mySidebar",previous:{title:"Default Pod Security Policies",permalink:"/security/pod_security_policies"},next:{title:"SELinux",permalink:"/security/selinux"}},l={},p=[{value:"Pod Security Standards",id:"pod-security-standards",level:4},{value:"Network Policies",id:"network-policies",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how RKE2 configures ",(0,r.kt)("inlineCode",{parentName:"p"},"PodSecurityStandards")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkPolicies")," in order to be secure-by-default while also providing operators with maximum configuration flexibility."),(0,r.kt)("admonition",{title:"Version Gate",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This document applies to RKE2 v1.25 and newer, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/security/pod_security_policies"},"Pod Security Policies Documentation")," for the default policy information for RKE2 v1.24 and older.")),(0,r.kt)("h4",{id:"pod-security-standards"},"Pod Security Standards"),(0,r.kt)("p",null,"Starting from Kubernetes version v1.25.0, Pod Security Policies (PSP) are totally removed from Kubernetes, and replaced by ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security Admission (PSA)"),". A default Pod Security Admission config file will be added to the cluster upon startup as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If running with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile=cis-1.23")," option, RKE2 will apply a restricted pod security standard via a configuration file which will enforce ",(0,r.kt)("inlineCode",{parentName:"p"},"restricted")," mode throughout the cluster with an exception to the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-operator-system"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"tigera-operator")," namespaces to ensure successful operation of system pods.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If running without the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile=cis-1.23")," option, RKE2 will apply a nonrestricted pod security standard via a configuration file which will enforce ",(0,r.kt)("inlineCode",{parentName:"p"},"privileged")," mode throughout the cluster which allows a completely unrestricted mode to all pods in the cluster."))),(0,r.kt)("p",null,"RKE2 will put this configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2-pss.yaml"),", the content of the configuration file varies according to the cis mode which you started rke2:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CIS Mode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system, tigera-operator]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Non CIS Mode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "privileged"\n      enforce-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: []\n')),(0,r.kt)("p",null,"After placing this configuration file, rke2 will start the kube-apiserver with the following flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--admission-control-config-file")," which will be set to the path of the PSA config file."),(0,r.kt)("p",null,"If you want to override the default pod security standard configuration file, you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"pod-security-admission-config-file: <path-to-custom-psa-config-file>")," to the RKE2 config file."),(0,r.kt)("h4",{id:"network-policies"},"Network Policies"),(0,r.kt)("p",null,"When RKE2 is run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile: cis-1.23")," parameter, it will apply 2 network policies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-public"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespaces and applies associated annotations. The same logic applies to these policies and annotations as the PSPs. On start, the annotations for each namespace are checked for existence and if they exist, RKE2 takes no action. If the annotation doesn't exist, RKE2 checks to see if the policy exists and if it does, recreates it."),(0,r.kt)("p",null,"The first policy applied is to restrict network traffic to only the namespace itself. See below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:policyTypes: {}\n  name: default-network-policy\n  namespace: default\nspec:\n  ingress:\n  - from:\n    - podSelector: {}\n  podSelector: {}\n  policyTypes:\n  - Ingress\n")),(0,r.kt)("p",null,"The second policy applied is to the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace and allows for DNS traffic. See below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:podSelector:\n          f:matchLabels:\n        f:policyTypes: {}\n  name: default-network-dns-policy\n  namespace: kube-system\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n  policyTypes:\n  - Ingress\n")),(0,r.kt)("p",null,"RKE2 applies the ",(0,r.kt)("inlineCode",{parentName:"p"},"default-network-policy")," policy and ",(0,r.kt)("inlineCode",{parentName:"p"},"np.rke2.io")," annotation to all built-in namespaces. The ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace additionally gets the ",(0,r.kt)("inlineCode",{parentName:"p"},"default-network-dns-policy")," policy and ",(0,r.kt)("inlineCode",{parentName:"p"},"np.rke2.io/dns")," annotation applied to it."),(0,r.kt)("p",null,"To view the network policies currently deployed on your system, run the below command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get networkpolicies -A\n")))}d.isMDXComponent=!0}}]);