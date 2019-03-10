import commonTracks from './shared';

const tracks = {
  "1": {
    "displayName": "Cloud / Security",
    "category": "A",
    "description": "Develops expertise in AWS services. The theory behind AWS based technology and services. Is knowledgeable about security in a cloud based environment, and can contribute guidelines and policies for ensuring a secure environment.",
    "milestones": [{
      "summary": "Works effectively within established AWS services, following current best practices",
      "signals": [
        "Can provide basic information on a few AWS services",
        "Follows current best practices when creating new resources",
        "Provides feedback on TDDs around AWS services",
      ],
      "examples": [
        "Added new team members to IAM",
        "Made some changes to the dev security group",
        "Added an alarm on free disk space for the logs elasticsearch",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Can provide basic information on most AWS services",
        "Makes minor modifications to existing services",
        "Certificates: Solutions Architect Associate",
      ],
      "examples": [
        "Modified DynamoDB Read/Write Capacity",
        "Modified an AWS Role to add a new resource",
        "Modified the StatsDB Postgres instance type",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of different AWS services, keeping performance, cost, and security in mind at all times",
      "signals": [
        "Can provide detailed information on most AWS services",
        "Provides actionable reccomendations on our AWS service utilization (performance, cost, security, etc.)",
        "Certificates: SysOps Associate / AWS Security",
      ],
      "examples": [
        "Mapped out and implemented RDS reserved pricing strategy",
        "Added CloudTrail monitoring and alerting for suspicious activity",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable developers to work more effectively",
      "signals": [
        "Provides action plans for multiple teams to better support their long term goals",
        "Writes/Updates documentation on best practices for self-serve services",
        "Certificates: DevOps Pro, SA Pro",
      ],
      "examples": [
        "Created guidelines for launching new FullStack services on EKS ",
        "Wrote Q3 and Q4 project plan for Web to implement their own AWS account",
      ],
    }, {
      "summary": "Is an industry-leading expert in AWS",
      "signals": [
        
      ],
      "examples": [
        
      ],
    }],
  },

  "2": {
    "displayName": "Infrastructure",
    "category": "A",
    "description": "Develops expertise in core infrastructure technologies, such as networking, docker, kubernetes, and terraform. The application of technologies and architectures to create functional services ",
    "milestones": [{
      "summary": "Works effectively within established SaaS architectures, following current best practices",
      "signals": [
        "Can investigate some minor infrastructure issues on Dev ",
        "Makes simple configuration changes to services",
        "Can answer some Docker related questions",
      ],
      "examples": [
        "Changed the base Docker image for Node",
        "Resolved low disk space independently on dev",
        "Added new CloudWatch alarm for CPU usage on dev database",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Writes thorough postmortems for service outages",
        "Can create new service architecture for some small projects",
        "Makes small changes that work towards implementing the long term vision for our infrastructure",
      ],
      "examples": [
        "Made safe and effective Terraform changes",
        "Created new Lambda triggers for new DynamoDB table",
        "Migrated /Blog in terraform",
      ],
    }, {
      "summary": "Designs major new features and demonstrates some thought towards long-term stability",
      "signals": [
        "Investigates new technologies that improve our long term scalability",
        "Can function as Incident Commander for resolving issues in production",
        "Identifies opportunities to effectively scale to meet predicted growth",
      ],
      "examples": [
        "Implemented Kubernetes based infrastructure for local and dev environments",
        "Incorperated Spot Instances into our non-critical infrastructure",
        "Implemented LetsEncrypt for local and dev on demand environments",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and is designed for long term scale",
      "signals": [
        "Can take point on developing large scale infrastructure projects",
        "Takes ownership over the long term vision for our infrastructure",
      ],
      "examples": [
        "Designed production infrastructure migration plan for Kubernetes",
        "Implemented Centralized Configuration system",
        "L&L on EKS",
      ],
    }, {
      "summary": "Is an industry-leading expert in infrastructure design and maintenance",
      "signals": [
        
      ],
      "examples": [
        
      ],
    }],
  },

  "3": {
    "displayName": "Build/Release Engineering",
    "category": "A",
    "description": "Develops expertise in delivering changes reliably, such as deployments, pipelines, load testing, and rollbacks",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "CI deployments",
        "Automation of builds/tests on CI server",
      ],
      "examples": [
        "Follows GitFlow model",
        "Automated unit testing",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "0-downtime deployments",
        "Pull based pipelines",
        "Self service of development and QA environments",
      ],
      "examples": [
        "Changes (commits, PRs, branching) trigger feedback mechanism",
        "Automated integration testing",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "A/B Enviroments with rollback",
        "Fully automated provisioning and validation of environments",
      ],
      "examples": [
        "Same image deployed to all environments",
        "Visualized Delivery Pipeline",
        "Automated testing of infrastructure code",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Contributes to planning the long term vision for Build/Release ",
        "Can build large scale features",
      ],
      "examples": [
        "Rewrote our Feature Flag system to incorperate multiple split test groups",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "4": {
    "displayName": "Server",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Adds NodeJS endpoints using layers architecture",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Added IFTTT trigger for new bookmark to Prodigy",
        "Queried a Dynamo LSI appropriately",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Determines data needs from product requirements",
      ],
      "examples": [
        "Identified need for new index on Dynamo",
        "Acted as caretaker for routes protos",
        "Updated Facebook API version and codebase dependencies",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Writes playbooks for new service maintenance",
      ],
      "examples": [
        "Implemented Google Auth login to Prodigy",
        "Implemented payments integration with Stripe",
        "Built Textshots server",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Designed Prodigy's ranked feed architecture",
        "Designed custom domains architecture",
        "Created Gotham framework for creating Go services",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Researched, vetted, and selected Go as Prodigy's statically typed language",
        "Defined microservices architecture and Prodigy2 migration plan",
        "Defined and implemented proprietary IP core to the company's success",
      ],
    }],
  },
}

export default {
  ...tracks,
  ...commonTracks
}
