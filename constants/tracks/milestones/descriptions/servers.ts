export default [
  {
    summary:
      "Works effectively within established server side frameworks, following current best practices",
    signals: `
- Adds NodeJS endpoints using layers architecture
- Adds golang endpoints using Gotham architecture
- Makes minor server changes to support client needs
    `,
  },
  {
    summary:
      "Develops new instances of existing architecture, or minor improvements to existing architecture",
    signals: `
- Assesses correctness and utility of existing code and avoids blind copy-pasting
- Generalizes code when appropriate
- Determines data needs from product requirements
    `,
  },
  {
    summary:
      "Designs standalone systems of moderate complexity, or major new features in existing systems",
    signals: `
- Acts as primary maintainer for existing critical systems
- Integrates third party services effectively
- Writes playbooks for new service maintenance
    `,
  },
];
