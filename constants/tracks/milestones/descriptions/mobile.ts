export default [
  {
    summary:
      "Works effectively within established react native architectures, following current best practices. Requires supervision",
    signals: [
      "Delivers features requiring simple local modifications",
      "Adds simple actions that call server endpoints",
      "Reuses existing components appropriately",
    ],
    examples: [
      "Added existing button to a different iOS surface",
      "Add follow button for a stock on Android",
      "Fetched and displayed a new stream, using existing stream item styles",
    ],
  },
  {
    summary:
      "Develops new instances of existing architecture, or minor improvements to existing architecture",
    signals: [
      "Defines new useful and appropriate proto-generated objects",
      "Creates simple new activities on Android",
      "Migrates code from old patterns to new patterns",
    ],
    examples: [
      "Upgraded SDWebImage to a new major version",
      "Added support for rendering a new type of stream item",
      "Prototyped a simple new feature quickly",
    ],
  },
  {
    summary:
      "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
    signals: [
      "Implements complex features with a large product surface area",
      "Works effectively with  Android reactive programming framework",
      "Adds support for new iOS features after a major iOS version upgrade",
    ],
    examples: [
      "Designed iOS caching strategy for offline reading",
      "Built series reader on Android",
      "Informed the team about recent best practice changes and deprecations",
    ],
  },
];
