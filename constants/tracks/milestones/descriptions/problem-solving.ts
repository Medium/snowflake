export default [
  {
    summary:
      "Applies structured ways to decompose and solve simple well defined problems.",
    signals: `
- Accepts and understands the product requirements.
- Learns to use standard problem solving tools (aka profiler/debugger, system monitoring, incident management tools
- Read documentations
- Research bugs (Stack overflow, github issues)
- Tool knowledge limited to primary IDE
- Needs assistance when carrying out code discovery.
    `,
  },
  {
    summary:
      "Applies structured ways to investigate how parts of the system interact with each other or with external systems using problem solving tools",
    signals: `
- Performs code discovery with minimal support in a timely manner.
- Discusses the conflicts between stated requirements and problems in implementing them
- Can find gaps in product requirements and suggest alternate views on the requirements
- Discovers and incorporates tacit requirements
- Has a more complete mental model of the problem
- Seeks to model the problem forming a mental model before jumping to a solution
- Digs into code package code and creates isolated prototypes to help them narrow down triage problems when debugging, or when introducing a new feature.
- Designs code before implementing it.
- Understands the importance of having a fast feedback loop and attempts to structure design to support that.
- Can perform discovery tasks.
    `,
  },
  {
    summary:
      "Can resolve conflicts (technical and design) across teams by balancing arguments in qualitative and quantitative ways; considers and reasons with all assumptions",
    signals: `
- Deals with ambiguity
- Understands requirements (performance, data, ownership of feature) between different systems
- Can analyze and suggest solutions to mitigate cross system issues
- provides guidance on how to proceed in solving complex problems
- Builds tools to increase the feedback loop when experimenting
- Can be thrown in an unknown environment with the expectation that they will be able to model and make reasonably accurate meaning of their situation.
    `,
  },
];
