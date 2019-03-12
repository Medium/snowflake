import commonTracks from './shared';

const tracks = {
  "1": {
    "displayName": "Architecture",
    "category": "A",
    "description": "Develops expertise cloud development",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Knows and understands the connections between the components of a specific system and dependencies",
        "Understands where systems are deployed and the core infrastructure components",
        "Understands the difference between Amazon Elasticbeastalk and  ECS",
      ],
      "examples": [
        "Understands the difference between SQS queues and SNS notifications",
        "Understands AWS firehose and kinesis streams",
        "Understands Docker and knows how to run it locally",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Can setup a system similar to an existing one ",
        "Made minor version upgrades to technologies",
        "Triages service issues correctly and independently",
      ],
      "examples": [
        "Setup a new API on our infrastructure",
        "Upgraded Node version on our docker images",
        "Debugged issues with multiplayer and redis connectivity",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Designs moderately complex systems",
        "Makes major version upgrades to libraries",
      ],
      "examples": [
        "Chooses the right technologies on the systems",
        "Designed a leaderboards system that updates on high scale with high availability",
        "Upgraded docker revision and all the dependent modules",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Created a game server that can serve  high scale clients",
        "Designed and Implemented a system that scales the multiplayer socket server",
        "Implemented a mail system for Prodigy",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Introduces new industry architecture patterns and designs",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Introduced microservices to Prodigy",
      ],
    }],
  },

  "2": {
    "displayName": "Data Storage",
    "category": "A",
    "description": "Develops expertise in data storages SQL and noSQL databases and Cache stores",
    "milestones": [{
      "summary": "Queries and understands effectively established databases, following current best practices",
      "signals": [
        "Can write queries to change the data in postgres databases",
        "Knows at least one data storage technology and can fluently interact with it",
        "Can read or write keys into a redis storage ",
      ],
      "examples": [
        "Understands and writes queries to interact with dynamodb",
        "Can navigate kibana over elasticsearch and retrieve data from it programatically",
        "Modified in app driver configuration to fit app needs ",
      ],
    }, {
      "summary": "Modifies and adds new features on existing data storages and does improvments to existing schemas ",
      "signals": [
        "Alters the schema of existing tables including adding columns ",
        "Knows the difference between the various data storage types and caches and can explain the differences",
        "Determines data needs from product requirements",
      ],
      "examples": [
        "Added a column to our dynamodb character storage table",
        "Profile sql queries and identifies slowdowns",
        "Understands and adds indexes where needed on a database",
      ],
    }, {
      "summary": "Designs new data storages SQL or NoSQL with moderate complexity to serve new features to existing systems",
      "signals": [
        "Creates a schema for the database that holds the data for a new feature",
        "Introduces new databases and technologies to meet underserved needs",
        "Acts as primary maintainer for existing critical systems",
      ],
      "examples": [
        "Designs the data structure of player schema in dynamodb",
        "Designs the data structure of mailer database in postgres",
        "Defines cache strategy for multiplayer redis servers",
      ],
    }, {
      "summary": "Designs complex data storages with large scale data and extensive schemas",
      "signals": [
        "Optimized pooling strategy for a database driver",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Have deep understanding of data stores sorting algorithms",
        "Created an authentication database with roles and capabilities",
      ],
    }, {
      "summary": "Is a database expert on all the levels, sets the strategic foundational direction for the backend team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Wrote a driver to one of the new databases",
      ],
    }],
  },

  "3": {
    "displayName": "Backend",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as NodeJS, typescript, Java, or Python",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Adds NodeJS endpoints to one of our microservices",
        "Adds event handlers to our multiplayer serices",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Changed the get mailer endpoint to match the needs of the client",
        "Added an event listener to the multiplayer server",
        "Added a game-api endpoint that allows a change on one of the character attributes",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Proposed changes to prodigy-api",
      ],
      "examples": [
        "Added a caching layer to one of our APIs to optimize the load",
        "Created a new API starting using prodigy-api over http or over sockets",
        "Added functionality to prodigy-formatter or  prodigy-game-common",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Introduced changes to prodigy-api with new features or enhancements",
        "Introduced a new way to handle multiplayer on the game",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Designed AWS configuration management",
        "Designed and implemented authentication system for the  company",
        "Introduced prodigy validator library to avoid code duplication",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Introduced prodigy game common  with a vision and strategy",
        "Created frameworks and libraries like  Express",
      ],
    }],
  },

  "4": {
    "displayName": "Pipelines & Releases",
    "category": "A",
    "description": "Develops expertise in release engineering, software pipelines and  code lifecycle using technologies like like AWS, Jenkins or Python.",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Understands jenkins jobs and can identify build steps",
        "Can check the status of a pipeline on AWS",
        "Understands Node package manager and information about Node build process",
      ],
      "examples": [
        "Understands major branching strategies with Pros and cons",
        "Understands the diference between SVN and Git and can interact with either",
        "Understands webpack build scripts",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Can change jenkins job configuration to modify build behaviour",
        "Can change AWS code build steps to fit the needs",
        "Can setup node scripts and customize project build or start process",
      ],
      "examples": [
        "Implements a post commit hook on jenkins server that validates the commits",
        "Setup a github integration with a build server",
        "Optimized webpack configurations",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Can install a jenkins server and POC and build environment",
        "Finds another build software like Circle ci and introduced it to Prodigy",
        "Fluent with AWS build pipeline setup and creates jobs with it",
      ],
      "examples": [
        "Introduced webpack and configured it to fit the needs",
        "Can compare build tools and assess the pros and cons of each",
        "Changes the branching strategy to solve CI/CD problems",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Revamped the asset pipeline system to be more optimized",
        "Contributed to jenkins plugins directory",
        "Contributed to webpack source code",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Invents new techniques to innovate and overcome CI/CD constraints",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Introduced Prodigy build servers  with a long term strategy ",
        "Defined and developed Prodigy's continuous delivery strategy",
      ],
    }],
  },
}

export default {
  ...tracks,
  ...commonTracks
}
