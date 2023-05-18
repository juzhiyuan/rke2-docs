"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"SELinux"},o=void 0,l={unversionedId:"security/selinux",id:"security/selinux",title:"SELinux",description:"RKE2 \u53ef\u4ee5\u5728\u652f\u6301 SELinux \u7684\u7cfb\u7edf\u4e0a\u8fd0\u884c\uff0c\u8fd9\u662f\u5b89\u88c5\u5728 CentOS/RHEL 7 &amp; 8 \u65f6\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/selinux.md",sourceDirName:"security",slug:"/security/selinux",permalink:"/zh/security/selinux",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/selinux.md",tags:[],version:"current",lastUpdatedAt:1684426920,formattedLastUpdatedAt:"2023\u5e745\u670818\u65e5",frontMatter:{title:"SELinux"},sidebar:"mySidebar",previous:{title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u6807\u51c6",permalink:"/zh/security/pod_security_standards"},next:{title:"Secret \u52a0\u5bc6",permalink:"/zh/security/secrets_encryption"}},c={},p=[{value:"\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u6807\u7b7e",id:"\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u6807\u7b7e",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RKE2 \u53ef\u4ee5\u5728\u652f\u6301 SELinux \u7684\u7cfb\u7edf\u4e0a\u8fd0\u884c\uff0c\u8fd9\u662f\u5b89\u88c5\u5728 CentOS/RHEL 7 ","&"," 8 \u65f6\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002\n\u652f\u6301\u8be5\u8bbe\u7f6e\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux"},"\u7b56\u7565"),"\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux"},"container-selinux")," \u7b56\u7565\u7684\u4e00\u4e2a\u7279\u6b8a\u7248\u672c\uff0c\u7528\u4e8e containerd\u3002\u5b83\u89e3\u91ca\u4e86 containerd \u5b89\u88c5\u5728\u975e\u6807\u51c6\u4f4d\u7f6e\u7684\u539f\u56e0\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6301\u4e45\u548c\u77ed\u6682\u72b6\u6001\u3002"),(0,a.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u6807\u7b7e"},"\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u6807\u7b7e"),(0,a.kt)("p",null,"RKE2 \u5c06 control plane \u670d\u52a1\u4f5c\u4e3a\u9759\u6001 pod \u8fd0\u884c\uff0c\u9700\u8981\u8bbf\u95ee\u591a\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux/blob/RHEL7.5/container.te#L59"},(0,a.kt)("inlineCode",{parentName:"a"},"container_var_lib_t"))," \u4f4d\u7f6e\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u5bb9\u5668\u5fc5\u987b\u80fd\u591f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db")," \u4e0b\u8bfb\u5199\uff0c\u5e76\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," \u4e00\u8d77\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls")," \u8bfb\u53d6\u3002\n\u4e3a\u4e86\u4e0d\u8fc7\u5ea6\u6388\u6743\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux/blob/RHEL7.5/container.te#L47-L49"},(0,a.kt)("inlineCode",{parentName:"a"},"spc_t")),"\uff0cRKE2 SELinux \u7b56\u7565\u5f15\u5165\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux/blob/v0.3.latest.1/rke2.te#L15-L21"},(0,a.kt)("inlineCode",{parentName:"a"},"rke2_service_db_t"))," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux/blob/v0.3.latest.1/rke2.te#L15-L21"},(0,a.kt)("inlineCode",{parentName:"a"},"rke2_service_t"))," \u4e0a\u4e0b\u6587\u6807\u7b7e\uff0c\u5206\u522b\u4e3a\u8bfb\u5199\u548c\u53ea\u8bfb\u8bbf\u95ee\u3002\u8fd9\u4e9b\u6807\u7b7e\u5c06\u4ec5\u9002\u7528\u4e8e RKE2 control plane \u9759\u6001 pod\u3002"),(0,a.kt)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"RKE2 \u5bf9 SELinux \u7684\u652f\u6301\u76f8\u5f53\u4e8e\u4e00\u4e2a\u914d\u7f6e\u9879\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"--selinux")," \u5e03\u5c14\u6807\u5fd7\u3002\u8fd9\u662f\u4e00\u4e2a\u901a\u5411 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/cri/blob/release/1.4/docs/config.md"},"containerd/cri toml \u7684 CRI \u90e8\u5206\u7684 ",(0,a.kt)("inlineCode",{parentName:"a"},"enable_selinux")," \u5e03\u5c14\u503c"),"\u7684\u901a\u9053\u3002\n\u5982\u679c RKE2 \u662f\u901a\u8fc7 tarball \u5b89\u88c5\u7684\uff0c\u90a3\u4e48 SELinux \u5c06\u4e0d\u4f1a\u5728\u6ca1\u6709\u989d\u5916\u914d\u7f6e\u7684\u60c5\u51b5\u4e0b\u542f\u7528\u3002\u63a8\u8350\u7684\u914d\u7f6e\u65b9\u6cd5\u662f\u4f7f\u7528 RKE2 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d\u7684\u4e00\u4e2a\u6761\u76ee\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml is the default location\nselinux: true\n")),(0,a.kt)("p",null,"\u8fd9\u76f8\u5f53\u4e8e\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"--selinux")," \u6807\u5fd7\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 server")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 agent")," \u547d\u4ee4\u884c\u6216\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"RKE2_SELINUX=true")," \u73af\u5883\u53d8\u91cf\u3002"))}s.isMDXComponent=!0}}]);