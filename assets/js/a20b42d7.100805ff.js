"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4461],{8211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(5893),d=t(1151);const o={title:"Managing Server Roles"},s=void 0,l={id:"install/server_roles",title:"Managing Server Roles",description:"By default, starting the RKE2 will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes.",source:"@site/docs/install/server_roles.md",sourceDirName:"install",slug:"/install/server_roles",permalink:"/install/server_roles",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/server_roles.md",tags:[],version:"current",lastUpdatedAt:1700501528,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{title:"Managing Server Roles"},sidebar:"mySidebar",previous:{title:"Windows Air-Gap Install",permalink:"/install/windows_airgap"},next:{title:"Uninstall",permalink:"/install/uninstall"}},i={},a=[{value:"Dedicated <code>etcd</code> Nodes",id:"dedicated-etcd-nodes",level:2},{value:"Dedicated <code>control-plane</code> Nodes",id:"dedicated-control-plane-nodes",level:2},{value:"Adding Roles To Existing Servers",id:"adding-roles-to-existing-servers",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"By default, starting the RKE2 will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes."}),"\n",(0,r.jsxs)(n.h2,{id:"dedicated-etcd-nodes",children:["Dedicated ",(0,r.jsx)(n.code,{children:"etcd"})," Nodes"]}),"\n",(0,r.jsxs)(n.p,{children:["To create a server with only the ",(0,r.jsx)(n.code,{children:"etcd"})," role, deploy a config with all the control-plane components disabled:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# /etc/rancher/rke2/config.yaml\ndisable-apiserver: true\ndisable-controller-manager: true\ndisable-scheduler: true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This first node will start etcd, and wait for additional ",(0,r.jsx)(n.code,{children:"etcd"})," and/or ",(0,r.jsx)(n.code,{children:"control-plane"})," nodes to join. The cluster will not be usable until you join an additional server with the ",(0,r.jsx)(n.code,{children:"control-plane"})," components enabled."]}),"\n",(0,r.jsxs)(n.h2,{id:"dedicated-control-plane-nodes",children:["Dedicated ",(0,r.jsx)(n.code,{children:"control-plane"})," Nodes"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["A dedicated ",(0,r.jsx)(n.code,{children:"control-plane"})," node cannot be the first server in the cluster; there must be an existing node with the ",(0,r.jsx)(n.code,{children:"etcd"})," role before joining dedicated ",(0,r.jsx)(n.code,{children:"control-plane"})," nodes."]})}),"\n",(0,r.jsxs)(n.p,{children:["To create a server with only the ",(0,r.jsx)(n.code,{children:"control-plane"})," role, deploy a config with etcd disabled:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# /etc/rancher/rke2/config.yaml\nserver: https://<etcd-only-node>:9345\ndisable-etcd: true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After creating dedicated server nodes, the selected roles will be visible in ",(0,r.jsx)(n.code,{children:"kubectl get node"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME           STATUS   ROLES                       AGE     VERSION\nrke2-server-1   Ready    etcd                        5h39m   v1.26.4+rke2r1\nrke2-server-2   Ready    control-plane,master        5h39m   v1.26.4+rke2r1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"adding-roles-to-existing-servers",children:"Adding Roles To Existing Servers"}),"\n",(0,r.jsxs)(n.p,{children:["Roles can be added to existing dedicated nodes by restarting RKE2 with the disable flags removed. For example, if you want to add the ",(0,r.jsx)(n.code,{children:"control-plane"})," role to a dedicated ",(0,r.jsx)(n.code,{children:"etcd"})," node, you can remove the ",(0,r.jsx)(n.code,{children:"disable-apiserver disable-controller-manager disable-scheduler"})," lines from the config file, and restart the service."]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(7294);const d={},o=r.createContext(d);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);