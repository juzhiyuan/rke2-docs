"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7069],{7353:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=i(5893),n=i(1151);const s={title:"Containerd Registry Configuration"},o=void 0,a={id:"install/containerd_registry_configuration",title:"Containerd Registry Configuration",description:"Containerd can be configured to connect to private registries and use them to pull private images on each node.",source:"@site/docs/install/containerd_registry_configuration.md",sourceDirName:"install",slug:"/install/containerd_registry_configuration",permalink:"/install/containerd_registry_configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/containerd_registry_configuration.md",tags:[],version:"current",lastUpdatedAt:1700501528,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{title:"Containerd Registry Configuration"},sidebar:"mySidebar",previous:{title:"Installation Methods",permalink:"/install/methods"},next:{title:"Air-Gap Install",permalink:"/install/airgap"}},c={},l=[{value:"Registries Configuration File",id:"registries-configuration-file",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"Rewrites",id:"rewrites",level:4},{value:"Configs",id:"configs",level:3},{value:"With TLS",id:"with-tls",level:3},{value:"Without TLS",id:"without-tls",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Containerd can be configured to connect to private registries and use them to pull private images on each node."}),"\n",(0,r.jsxs)(t.p,{children:["Upon startup, RKE2 will check to see if a ",(0,r.jsx)(t.code,{children:"registries.yaml"})," file exists at ",(0,r.jsx)(t.code,{children:"/etc/rancher/rke2/"})," and instruct containerd to use any registries defined in the file. If you wish to use a private registry, then you will need to create this file as root on each node that will be using the registry."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that server nodes are schedulable by default. If you have not tainted the server nodes and will be running workloads on them, please ensure you also create the ",(0,r.jsx)(t.code,{children:"registries.yaml"})," file on each server as well."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," Prior to RKE2 v1.20, containerd registry configuration is not honored for the initial RKE2 node bootstrapping, only for Kubernetes workloads that are launched after the node is joined to the cluster. Consult the ",(0,r.jsx)(t.a,{href:"/install/airgap",children:"airgap installation documentation"})," if you plan on using this containerd registry feature to bootstrap nodes."]}),"\n",(0,r.jsxs)(t.p,{children:["Configuration in containerd can be used to connect to a private registry with a TLS connection and with registries that enable authentication as well. The following section will explain the ",(0,r.jsx)(t.code,{children:"registries.yaml"})," file and give different examples of using private registry configuration in RKE2."]}),"\n",(0,r.jsx)(t.h2,{id:"registries-configuration-file",children:"Registries Configuration File"}),"\n",(0,r.jsx)(t.p,{children:"The file consists of two main sections:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"mirrors"}),"\n",(0,r.jsx)(t.li,{children:"configs"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"mirrors",children:"Mirrors"}),"\n",(0,r.jsx)(t.p,{children:"Mirrors is a directive that defines the names and endpoints of the private registries. Private registries can be used as a local mirror for the default docker.io registry, or for images where the registry is explicitly specified in the name."}),"\n",(0,r.jsxs)(t.p,{children:["For example, the following configuration would pull from the private registry at ",(0,r.jsx)(t.code,{children:"https://registry.example.com:5000"})," for both ",(0,r.jsx)(t.code,{children:"library/busybox:latest"})," and ",(0,r.jsx)(t.code,{children:"registry.example.com/library/busybox:latest"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n  registry.example.com:\n    endpoint:\n      - "https://registry.example.com:5000"\n'})}),"\n",(0,r.jsx)(t.p,{children:"Each mirror must have a name and set of endpoints. When pulling an image from a registry, containerd will try these endpoint URLs one by one, and use the first working one."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If no endpoint is configured, containerd assumes that the registry can be accessed anonymously via HTTPS on port 443, and is using a certificate trusted by the host operating system. For more information, you may ",(0,r.jsx)(t.a,{href:"https://github.com/containerd/containerd/blob/master/docs/cri/registry.md#configure-registry-endpoint",children:"consult the containerd documentation"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"rewrites",children:"Rewrites"}),"\n",(0,r.jsx)(t.p,{children:"Each mirror can have a set of rewrites. Rewrites can change the tag of an image based on a regular expression. This is useful if the organization/project structure in the mirror registry is different to the upstream one."}),"\n",(0,r.jsxs)(t.p,{children:["For example, the following configuration would transparently pull the image ",(0,r.jsx)(t.code,{children:"rancher/rke2-runtime:v1.23.5-rke2r1"})," from ",(0,r.jsx)(t.code,{children:"registry.example.com:5000/mirrorproject/rancher-images/rke2-runtime:v1.23.5-rke2r1"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"configs",children:"Configs"}),"\n",(0,r.jsxs)(t.p,{children:["The configs section defines the TLS and credential configuration for each mirror. For each mirror you can define ",(0,r.jsx)(t.code,{children:"auth"})," and/or ",(0,r.jsx)(t.code,{children:"tls"}),". The TLS part consists of:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Directive"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"cert_file"})}),(0,r.jsx)(t.td,{children:"The client certificate path that will be used to authenticate with the registry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"key_file"})}),(0,r.jsx)(t.td,{children:"The client key path that will be used to authenticate with the registry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ca_file"})}),(0,r.jsx)(t.td,{children:"Defines the CA certificate path to be used to verify the registry's server cert file"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"insecure_skip_verify"})}),(0,r.jsx)(t.td,{children:"Boolean that defines if TLS verification should be skipped for the registry"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"The credentials consist of either username/password or authentication token:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"username: user name of the private registry basic auth"}),"\n",(0,r.jsx)(t.li,{children:"password: user password of the private registry basic auth"}),"\n",(0,r.jsx)(t.li,{children:"auth: authentication token of the private registry basic auth"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Below are basic examples of using private registries in different modes:"}),"\n",(0,r.jsx)(t.h3,{id:"with-tls",children:"With TLS"}),"\n",(0,r.jsxs)(t.p,{children:["Below are examples showing how you may configure ",(0,r.jsx)(t.code,{children:"/etc/rancher/rke2/registries.yaml"})," on each node when using TLS."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"With Authentication:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file:            # path to the cert file used to authenticate to the registry\n      key_file:             # path to the key file for the certificate used to authenticate to the registry\n      ca_file:              # path to the ca file used to verify the registry\'s certificate\n      insecure_skip_verify: # may be set to true to skip verifying the registry\'s certificate\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Without Authentication:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    tls:\n      cert_file:            # path to the cert file used to authenticate to the registry\n      key_file:             # path to the key file for the certificate used to authenticate to the registry\n      ca_file:              # path to the ca file used to verify the registry\'s certificate\n      insecure_skip_verify: # may be set to true to skip verifying the registry\'s certificate\n'})}),"\n",(0,r.jsx)(t.h3,{id:"without-tls",children:"Without TLS"}),"\n",(0,r.jsxs)(t.p,{children:["Below are examples showing how you may configure ",(0,r.jsx)(t.code,{children:"/etc/rancher/rke2/registries.yaml"})," on each node when ",(0,r.jsx)(t.em,{children:"not"})," using TLS."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Plaintext HTTP With Authentication:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Plaintext HTTP Without Authentication:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["If using a registry using plaintext HTTP without TLS, you need to specify ",(0,r.jsx)(t.code,{children:"http://"})," as the endpoint URI scheme, otherwise it will default to ",(0,r.jsx)(t.code,{children:"https://"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In order for the registry changes to take effect, you need to either configure this file before starting RKE2 on the node, or restart RKE2 on each configured node."})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var r=i(7294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);