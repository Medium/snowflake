export default [
  {
    summary:
      "Works effectively within established structures, following current best practices",
    signals: `
- Basic knowledge of networking
- Understands workflow of k8s and the meaning of k8s objects
- Basic bash scripting ability
- Good understanding of shell scripting and linux
- Uses CI/CD and knows how they work. And knows the difference between them.
- Knows how to use virtualization and containers (eg: Docker)
- Aware of proxies and reverse proxies
- Aware with any cloud provider basics
- Knows difference between PASS, SASS, IASS
- Understands what VMs are and how they operate on the cloud
- Understanding of how OS work
- Configured and dealt with web servers
- Awareness of error tracking tools
    `,
  },
  {
    summary:
      "Develops new instances of existing architecture, or minor improvements to existing architecture",
    signals: `
- Knowledge of grafana and prometheus and how to monitor metrics
- Understands how APIs and services communicate and impact each other
- Food knowledge of a specific cloud provider
	- Load balancers
	- VPCs and networks
	- Storage
	- VMs
- How DNS works deeply and the different record types
- Setting up something from scratch
- Large integration that impacts multiple aspects
- Implementing changes to CI/CD
- Good level of networking knowledge
- Basic Knowledge of Security Practices
	- Roles
	- Authentication
	- Basic Exploits
- Deeper understanding of kubernetes
	- Role access control like: RBAC
	- Define Custom Resource: CRDs
- Good Troubleshooting and debugging of resources
	- Efficient usage of OS tools (top, tail, watch, nmap, ss, dig, …..)
- Knowledge of distributed logging infrastructure
- Understand caching systems
- Understanding of data stores (Replication, sharding, backups and recovery, …)
- Knowledge of configuration management tools and gitops
- Awareness of out SLIs and Metrics
- Configuring error tracking tools
  `,
  },
  {
    summary:
      "Designs standalone systems of moderate complexity, or major new features in existing systems",
    signals: `
- Acts as primary maintainer for existing critical systems
- Designs moderately complex systems
- Makes major version upgrades to libraries
    `,
  },
];
