"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[101],{1862:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var s=t(5893),n=t(1151);const i={hide_table_of_contents:!0},l="v1.28.X",h={id:"release-notes/v1.28.X",title:"v1.28.X",description:"Before upgrading from earlier releases, be sure to read the Kubernetes Urgent Upgrade Notes.",source:"@site/docs/release-notes/v1.28.X.md",sourceDirName:"release-notes",slug:"/release-notes/v1.28.X",permalink:"/release-notes/v1.28.X",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/release-notes/v1.28.X.md",tags:[],version:"current",lastUpdatedAt:1700501528,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"v1.27.X",permalink:"/release-notes/v1.27.X"},next:{title:"Known Issues and Limits",permalink:"/known_issues"}},a={},c=[{value:"Release v1.28.2+rke2r1",id:"release-v1282rke2r1",level:2},{value:"Changes since v1.28.1+rke2r1:",id:"changes-since-v1281rke2r1",level:3}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"v128x",children:"v1.28.X"}),"\n",(0,s.jsx)(r.admonition,{title:"Upgrade Notice",type:"caution",children:(0,s.jsxs)(r.p,{children:["Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,s.jsx)(r.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md#urgent-upgrade-notes",children:"Urgent Upgrade Notes"}),"."]})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Version"}),(0,s.jsx)(r.th,{children:"Release date"}),(0,s.jsx)(r.th,{children:"Kubernetes"}),(0,s.jsx)(r.th,{children:"Etcd"}),(0,s.jsx)(r.th,{children:"Containerd"}),(0,s.jsx)(r.th,{children:"Runc"}),(0,s.jsx)(r.th,{children:"Metrics-server"}),(0,s.jsx)(r.th,{children:"CoreDNS"}),(0,s.jsx)(r.th,{children:"Ingress-Nginx"}),(0,s.jsx)(r.th,{children:"Helm-controller"}),(0,s.jsx)(r.th,{children:"Canal (Default)"}),(0,s.jsx)(r.th,{children:"Calico"}),(0,s.jsx)(r.th,{children:"Cilium"}),(0,s.jsx)(r.th,{children:"Multus"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/release-notes/v1.28.X#release-v1282rke2r1",children:"v1.28.2+rke2r1"})}),(0,s.jsx)(r.td,{children:"Sep 18 2023"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md#v1282",children:"v1.28.2"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.3-k3s1",children:"v1.7.3-k3s1"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.8",children:"v1.1.8"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3",children:"v0.6.3"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/kubernetes/ingress-nginx/releases/tag/helm-chart-4.6.1",children:"4.6.1"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.4",children:"v0.15.4"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.22.1",children:"Flannel v0.22.1"}),(0,s.jsx)("br",{}),(0,s.jsx)(r.a,{href:"https://docs.tigera.io/calico/latest/release-notes/#v3.26",children:"Calico v3.26.1"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://docs.tigera.io/calico/latest/release-notes/#v3.26",children:"v3.26.1"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/cilium/cilium/releases/tag/v1.14.1",children:"v1.14.1"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni/releases/tag/v4.0.2",children:"v4.0.2"})})]})})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.h2,{id:"release-v1282rke2r1",children:"Release v1.28.2+rke2r1"}),"\n",(0,s.jsx)(r.p,{children:"This release updates Kubernetes to v1.28.2."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Important Note"})}),"\n",(0,s.jsxs)(r.p,{children:["If your server (control-plane) nodes were not started with the ",(0,s.jsx)(r.code,{children:"--token"})," CLI flag or config file key, a randomized token was generated during initial cluster startup. This key is used both for joining new nodes to the cluster, and for encrypting cluster bootstrap data within the datastore. Ensure that you retain a copy of this token, as is required when restoring from backup."]}),"\n",(0,s.jsx)(r.p,{children:"You may retrieve the token value from any server already joined to the cluster:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"cat /var/lib/rancher/rke2/server/token\n"})}),"\n",(0,s.jsx)(r.h3,{id:"changes-since-v1281rke2r1",children:"Changes since v1.28.1+rke2r1:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:['Support new generic "cis" profile ',(0,s.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/4708",children:"(#4708)"})]}),"\n",(0,s.jsxs)(r.li,{children:["Update cilium to 1.14.1 ",(0,s.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/4755",children:"(#4755)"})]}),"\n",(0,s.jsxs)(r.li,{children:["Update Kubernetes to v1.28.2 Go to v1.20.8 ",(0,s.jsx)(r.a,{href:"https://github.com/rancher/rke2/pull/4760",children:"(#4760)"})]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>h,a:()=>l});var s=t(7294);const n={},i=s.createContext(n);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);