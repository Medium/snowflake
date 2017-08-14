var levelStrings = {
  "Mobile": {
    "description": "Develops capability in native mobile platform development, such as iOS or Android",
    "levels": [{
      "summary": "Works effectively within established iOS or Android architectures, following current best practices",
      "examples": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Fetched and displayed a new stream, using existing stream item styles",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "examples": [
        "Defines new useful and appropriate proto-generated objects",
        "Creates simple new activities on Android",
        "Migrates code from old patterns to new patterns",
        "Upgraded SDWebImage to a new major version",
        "Added support for rendering a new type of stream item",
        "Prototyped a simple new feature quickly",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "examples": [
        "Implements complex features with a large product surface area",
        "Works effectively with  Android reactive programming framework",
        "Adds support for new iOS features after a major iOS version upgrade",
        "Designed iOS caching strategy for offline reading",
        "Built series reader on Android",
        "Informed the team about recent best practice changes and deprecations",
      ],
    }, {
      "summary": "Designs frameworks of significant complexity that enable mobile engineers to work more effectively",
      "examples": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "examples": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "Web Client": {
    "description": "Develops capability in web client development technologies, such as HTML, CSS, and JavaScript",
    "levels": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "examples": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "Uses CSS appropriately, following style guide",
        "Implemented sticky footer on the post page",
        "Hooked up the action to dismiss a post from a stream",
        "Built PaymentHistory screen using ResponseScreen",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "examples": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
        "Built credit card input component",
        "Created shared buttons template",
        "Built modal system",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "examples": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Performs systemic tasks to significantly minimise bundle size",
        "Acts a caretaker for all of web client code",
        "Designed font loading strategy for Medium",
        "Researched utility of service workers for Medium",
        "Designed and implemented ResponseScreen",
      ],
    }, {
      "summary": "Designs frameworks of significant complexity that pioneer best practices for other engineers",
      "examples": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
        "Designed Medium's post morpher and delta system",
        "Implemented Medium's scrolling text over image blur",
        "Designed and pioneered proto-based model storage",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "examples": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
        "Invented CSS in JS",
        "Defined and drove migration strategy to Lite",
        "Implemented unidirectional data flow to completion",
      ],
    }],
  },

  "Foundations": {
    "description": "Develops capability in foundational systems, such as deployments, pipelines and databases",
    "levels": [{
      "summary": "Works effectively within established structures, following current best practices",
      "examples": [
        "Writes thorough postmortems for service outages",
        "Makes simple configuration changes to services",
        "Made safe and effective Ansible changes",
        "Implemented new ETL pipelines based on existing ones",
        "Resolved out of disk errors independently",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "examples": [
        "Made minor version upgrades to technologies",
        "Triages service issues correctly and independently",
        "Upgraded NodeJS from 8.0 to 8.1.1",
        "Built custom packages for RPMs",
        "Improved ETL efficiency by improving Dynamo to S3 loading",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "examples": [
        "Designs moderately complex systems",
        "Makes major version upgrades to libraries",
        "Designed Ansible configuration management",
        "Built realtime stats pipeline",
        "Designed flexible framework for writing machine learning jobs",
      ],
    }, {
      "summary": "Designs frameworks that pioneer best practices for other engineers, or complex multi-system services",
      "examples": [
        "Designs complex projects that encompass multiple systems and technologies",
        "Introduces new databases and technologies to meet underserved needs",
        "Designed and built BBFD",
        "Designed AWS configuration management",
        "Introduced Kinesis and pioneered streaming events pipeline",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "examples": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational work and supporting technologies",
        "Invents industry-leading techniques to solve complex problems",
        "Invented a novel ML technique that advanced the state of the art",
        "Defined and developed Medium's continuous delivery strategy",
        "Developed and implemented HA strategy",
      ],
    }],
  },

  "Servers": {
    "description": "Develops capability in server side development technologies, such as Go, NodeJS, or Scala",
    "levels": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "examples": [
        "Adds NodeJS endpoints using layers architecture",
        "Adds golang endpoints using Gotham architecture",
        "Makes minor server changes to support client needs",
        "Added IFTTT trigger for new bookmark to medium2",
        "Added delete audio route to Buggle",
        "Queried a Dynamo LSI appropriately",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "examples": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Determines data needs from product requirements",
        "Identified need for new index on Dynamo",
        "Acted as caretaker for routes protos",
        "Updated Facebook API version and codebase dependencies",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "examples": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Writes playbooks for new service maintenance",
        "Implemented Google Auth login to Medium",
        "Implemented payments integration with Stripe",
        "Built Textshots server",
      ],
    }, {
      "summary": "Designs frameworks that pioneer best practices for other engineers, or complex multi-system services",
      "examples": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
        "Designed Medium's ranked feed architecture",
        "Designed custom domains",
        "Created Gotham framework for creating Go services",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "examples": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
        "Researched, vetted, and selected Go as Medium's statically typed language",
        "Defined microservices architecture and medium2 migration plan",
        "Defined and implemented proprietary IP core to the company's success",
      ],
    }],
  },

  "Project Management": {
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "levels": [{
      "summary": "Effectively delivers individual tasks",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Communication": {
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "levels": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organisation",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Craft": {
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "levels": [{
      "summary": "Delivers consistently good quality work",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult system issues",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Enables and encourages the entire organisation to make quality a central part of the development process",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Initiative": {
    "description": "Challenges the status quo and effects positive organisational change outside of mandated work",
    "levels": [{
      "summary": "Identifies opportunities for organisational change or product improvements",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organisation or a major product impact",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Career Development": {
    "description": "Provides strategic support to engineers to help them build the career they want",
    "levels": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Org Design": {
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "levels": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Thinks deeply about organisational issues and identifies hidden dynamics that contribute to them",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Wellbeing": {
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "levels": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Accomplishment": {
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "levels": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Resolves complex organisational disfunction",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Mentorship": {
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "levels": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires and conveys institutional knowledge",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realisations rather than providing the answer",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Encourages and creates ways for people to mentor each other",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Evangelism": {
    "description": "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
    "levels": [{
      "summary": "Represents Medium well externally, and influences individuals positively",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Medium",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Establishes Medium as an great, innovative company and workplace to the whole industry",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Introduces Medium in a positive light to a wider audience outside the industry",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Recruiting": {
    "description": "Strengthens Medium's team by bringing in excellent staff members",
    "levels": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Regularly interviews, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and helps improve the quality of our interviews",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },

  "Community": {
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "levels": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "examples": [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    }],
  },
}
