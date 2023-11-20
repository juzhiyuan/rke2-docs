"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2416],{8809:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(5893),t=n(1151);const s={title:"\u96c6\u7fa4\u8bbf\u95ee"},l=void 0,o={id:"cluster_access",title:"\u96c6\u7fa4\u8bbf\u95ee",description:"/etc/rancher/rke2/rke2.yaml \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cluster_access.md",sourceDirName:".",slug:"/cluster_access",permalink:"/zh/cluster_access",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/cluster_access.md",tags:[],version:"current",lastUpdatedAt:1700501528,formattedLastUpdatedAt:"2023\u5e7411\u670820\u65e5",frontMatter:{title:"\u96c6\u7fa4\u8bbf\u95ee"},sidebar:"mySidebar",previous:{title:"\u67b6\u6784",permalink:"/zh/architecture"},next:{title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d",permalink:"/zh/backup_restore"}},a={},i=[{value:"\u4f7f\u7528 kubectl \u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",id:"\u4f7f\u7528-kubectl-\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",level:3}];function d(e){const c={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.code,{children:"/etc/rancher/rke2/rke2.yaml"})," \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\n\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e0a\u6e38\u7684 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 kubectl \u6216 helm)\uff0c\u4f60\u9700\u8981\u7528\u6b63\u786e\u7684 kubeconfig \u8def\u5f84\u914d\u7f6e\u5b83\u4eec\u3002\n\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5bfc\u51fa ",(0,r.jsx)(c.code,{children:"KUBECONFIG"})," \u73af\u5883\u53d8\u91cf\u6216\u8c03\u7528 ",(0,r.jsx)(c.code,{children:"--kubeconfig"})," \u547d\u4ee4\u884c\u6807\u5fd7\u6765\u5b8c\u6210\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002"]}),"\n",(0,r.jsxs)(c.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u67d0\u4e9b\u5de5\u5177\uff08\u4f8b\u5982 kubectl\uff09\u9ed8\u8ba4\u5b89\u88c5\u5728 ",(0,r.jsx)(c.code,{children:"/var/lib/rancher/rke2/bin"})," \u4e2d\u3002"]}),"\n",(0,r.jsx)(c.p,{children:"\u4f7f\u7528 KUBECONFIG \u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{children:"export KUBECONFIG=/etc/rancher/rke2/rke2.yaml\nkubectl get pods --all-namespaces\nhelm ls --all-namespaces\n"})}),"\n",(0,r.jsx)(c.p,{children:"\u6216\u8005\u5728\u547d\u4ee4\u4e2d\u6307\u5b9a kubeconfig \u6587\u4ef6\u7684\u4f4d\u7f6e\uff1a"}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{children:"kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml get pods --all-namespaces\nhelm --kubeconfig /etc/rancher/rke2/rke2.yaml ls --all-namespaces\n"})}),"\n",(0,r.jsx)(c.h3,{id:"\u4f7f\u7528-kubectl-\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",children:"\u4f7f\u7528 kubectl \u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4"}),"\n",(0,r.jsxs)(c.p,{children:["\u5c06 ",(0,r.jsx)(c.code,{children:"/etc/rancher/rke2/rke2.yaml"})," \u590d\u5236\u5230\u4f4d\u4e8e\u96c6\u7fa4\u5916\u90e8\u7684\u4e3b\u673a\u4e0a\u7684 ",(0,r.jsx)(c.code,{children:"~/.kube/config"}),"\u3002\u7136\u540e\u5c06 ",(0,r.jsx)(c.code,{children:"127.0.0.1"})," \u66ff\u6362\u4e3a RKE2 server \u7684 IP \u6216\u4e3b\u673a\u540d\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(c.code,{children:"kubectl"})," \u6765\u7ba1\u7406 RKE2 \u96c6\u7fa4\u3002"]})]})}function u(e={}){const{wrapper:c}={...(0,t.a)(),...e.components};return c?(0,r.jsx)(c,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,c,n)=>{n.d(c,{Z:()=>o,a:()=>l});var r=n(7294);const t={},s=r.createContext(t);function l(e){const c=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:c},e.children)}}}]);