export default [
  {
    summary:
      "Works effectively within established web client architectures, following current best practices",
    signals: [
      "Makes minor modifications to existing screens",
      "Fixes simple design quality issues",
      "Uses CSS appropriately, following style guide",
    ],
    examples: [
      "Implemented sticky footer on the post page",
      "Hooked up the action to dismiss a post from a stream",
      "Built PaymentHistory screen using ResponseScreen",
    ],
  },
  {
    summary:
      "Develops new instances of existing architecture, or minor improvements to existing architecture",
    signals: [
      "Makes sensible abstractions based on template and code patterns",
      "Specs and builds interactive components independently",
      "Prototypes simple new features quickly",
    ],
    examples: [
      "Built credit card input component",
      "Created shared buttons template",
      "Built modal system",
    ],
  },
  {
    summary:
      "Designs major new features and demonstrates a nuanced understanding of browser constraints",
    signals: [
      "Provides useful design feedback and suggests feasible alternatives",
      "Performs systemic tasks to significantly minimise bundle size",
      "Acts a caretaker for all of web client code",
    ],
    examples: [
      "Designed font loading strategy for Thndr",
      "Researched utility of service workers for Thndr",
      "Designed and implemented ResponseScreen",
    ],
  },
];
