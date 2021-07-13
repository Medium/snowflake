export default [
  {
    summary:
      "Delivers consistently good quality work, expect many comments in MR Review",
    signals: [
      "Tests new code thoroughly, both locally, and in production once shipped",
      "Writes clear comments and documentation",
      "Informs themselves of Team Code Convention",
      "Informs themselves of Clean Code Practice",
      "Caught a bug on Staging before it went to Production",
      "Wrote tests for the happy and sad cases",
      "Understands the definition of done for their tasks",
      "Owns the quality of their work instead of delegating it to other team members",
      "Actively seeks to understand the acceptance criteria of their tasks before implementation start",
      "Actively points out quality issues to their colleagues and peers",
      "Writes descriptive merge requests to ease code reviews",
      "Ensures their work is tested and working before pushing it into version control",
      "Ensures all automated suites are passing and working properly before pushing new code",
      "Writes tests for every new behavior or bug fix in the system",
    ],
  },
  {
    summary:
      "Increases the robustness and reliability of the codebase, and devotes time to polishing products and systems, expect high contribution in reviewing others",
    signals: [
      "Refactors existing code to make it more testable",
      "Adds tests for uncovered areas",
      "Deletes unnecessary code and deprecates proactively when safe to do so",
      "Provides constructive feedback to their peers and colleagues around quality",
      "Helps in defining acceptance criteria and test cases for tasks and stories",
      "Identifies new standards of quality within their squad",
      "Aware of technical debt being introduced and logs it",
    ],
  },
  {
    summary: "Improves others' ability to deliver great quality work",
    signals: [
      "Implements systems that enable better testing",
      "Gives thoughtful code reviews as a domain expert",
      "Adds tooling to improve code quality",
      "Occasionally participates in end-to-end tests of Thndr's systems to identify quality issues ",
      "Regularly identifies technical debt and seeks to eliminate it",
      "Writes test cases for detected bugs and issues before resolving them to prevent regression",
    ],
  },
  {
    summary: "Introduces new standards to virtuously improve work quality",
    signals: [
      "Implements effective system wide guardrails for better quality, eg. eslint rules",
      "Designs and implements effective organizational processes to mitigate risks in quality",
      "Builds systems so as to eliminate entire classes of programmer error",
    ],
  },
  {
    summary:
      "Enables and encourages the entire organization to make quality a central part of the development process",
    signals: [
      "Defines policies for the engineering org that encourage quality work",
      "Identifies and eliminates single points of failure throughout the organization",
      "Secures time and resources from execs to support great quality",
    ],
  },
];
