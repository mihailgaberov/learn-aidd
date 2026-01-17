export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizModule {
  id: string;
  title: string;
  description: string;
  explainer: string;
  questions: QuizQuestion[];
}

export const quizModules: QuizModule[] = [
  {
    id: "javascript",
    title: "JavaScript Best Practices",
    description: "Learn JavaScript/TypeScript best practices and coding principles",
    explainer: `JavaScript/TypeScript is a powerful language that requires discipline to write high-quality software. This module covers key principles like DOT (Do One Thing), YAGNI (You Aren't Gonna Need It), KISS (Keep It Simple, Stupid), DRY (Don't Repeat Yourself), and SDA (Self Describing APIs).

Key principles include:
- Favor functional programming with pure, composable functions
- Use immutability with const, spread, and rest operators
- Prefer map, filter, reduce over manual loops
- Keep functions short and focused on one job
- Use concise syntax: arrow functions, destructuring, template literals
- Avoid classes and inheritance in favor of composition
- Use strict equality (===)
- Prefer async/await over promise chains

Naming conventions emphasize active voice, clear verbs for functions, and yes/no questions for predicates.`,
    questions: [
      {
        id: "js-1",
        question: "Which principle emphasizes that functions should do one thing well?",
        options: ["YAGNI", "DOT", "DRY", "KISS"],
        correctAnswer: 1,
        explanation: "DOT stands for 'Do One Thing' - functions should have a single, clear responsibility."
      },
      {
        id: "js-2",
        question: "What should you prefer over manual loops?",
        options: ["for loops", "while loops", "map, filter, reduce", "forEach only"],
        correctAnswer: 2,
        explanation: "Functional programming approaches like map, filter, and reduce are preferred over manual loops for better readability and immutability."
      },
      {
        id: "js-3",
        question: "Which is the preferred way to handle defaults in function parameters?",
        options: ["Using || operator", "Using parameter defaults", "Using if statements", "Using ternary operators"],
        correctAnswer: 1,
        explanation: "Parameter defaults in function signatures are preferred over using || operator, as they provide better type inference and clearer intent."
      },
      {
        id: "js-4",
        question: "What should boolean variables be named like?",
        options: ["Nouns", "Yes/no questions", "Verbs", "Adjectives"],
        correctAnswer: 1,
        explanation: "Booleans should read like yes/no questions, e.g., isActive, hasPermission, isEmpty."
      },
      {
        id: "js-5",
        question: "Which equality operator should you always use?",
        options: ["==", "===", "=", "!="],
        correctAnswer: 1,
        explanation: "Always use strict equality (===) to avoid type coercion issues."
      },
      {
        id: "js-6",
        question: "What should you favor over classes and inheritance?",
        options: ["Mixins", "Composition", "Prototypes", "Interfaces"],
        correctAnswer: 1,
        explanation: "Prefer composition of functions and data structures over inheritance and classes."
      },
      {
        id: "js-7",
        question: "What does SDA stand for?",
        options: ["Simple Data Access", "Self Describing APIs", "Structured Data Architecture", "Single Data Access"],
        correctAnswer: 1,
        explanation: "SDA stands for Self Describing APIs - parameter values should be explicitly named in function signatures."
      },
      {
        id: "js-8",
        question: "Which is preferred for async operations?",
        options: ["Promise chains", "async/await", "Callbacks", "Event emitters"],
        correctAnswer: 1,
        explanation: "Prefer async/await or asyncPipe over raw promise chains for better readability."
      },
      {
        id: "js-9",
        question: "What should function names be?",
        options: ["Nouns", "Verbs", "Adjectives", "Any of the above"],
        correctAnswer: 1,
        explanation: "Functions should be verbs, e.g., increment(), filter(), createUser()."
      },
      {
        id: "js-10",
        question: "What should you use instead of mutation?",
        options: ["const, spread, rest operators", "let and var", "Object.assign", "Direct assignment"],
        correctAnswer: 0,
        explanation: "Prefer immutability using const, spread, and rest operators instead of mutation."
      },
      {
        id: "js-11",
        question: "What does YAGNI stand for?",
        options: ["You Always Get New Ideas", "You Aren't Gonna Need It", "Your App Gets New Items", "You Always Get Nice Interfaces"],
        correctAnswer: 1,
        explanation: "YAGNI means 'You Aren't Gonna Need It' - don't add functionality until it's actually needed."
      },
      {
        id: "js-12",
        question: "How should you handle null/undefined arguments?",
        options: ["Use them directly", "Use options objects", "Use default parameters only", "Throw errors"],
        correctAnswer: 1,
        explanation: "Avoid null/undefined arguments; use options objects instead for better clarity and type safety."
      },
      {
        id: "js-13",
        question: "What should you avoid when writing functions?",
        options: ["Pure functions", "Short functions", "Loose procedural sequences", "Composable functions"],
        correctAnswer: 2,
        explanation: "Avoid loose procedural sequences; compose clear pipelines instead."
      },
      {
        id: "js-14",
        question: "What is the preferred way to extract object properties?",
        options: ["const a = obj.a;", "const { a } = obj;", "obj['a']", "obj.get('a')"],
        correctAnswer: 1,
        explanation: "Use object destructuring: const { a } = obj; instead of verbose property assignments."
      },
      {
        id: "js-15",
        question: "What should you use for function composition?",
        options: ["Classes", "Inheritance", "Partial application and point-free style", "Mixins"],
        correctAnswer: 2,
        explanation: "Prefer composition with partial application and point-free style for cleaner, more functional code."
      },
      {
        id: "js-16",
        question: "What will be logged after calling test() twice?\n```javascript\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    console.log(count);\n  };\n}\nconst test = outer();\ntest();\ntest();\n```",
        options: ["1, 1", "1, 2", "0, 1", "2, 2"],
        correctAnswer: 1,
        explanation: "The inner function forms a closure over count in outer. Each call increases count, so it logs 1 then 2. Closures preserve the variable's state across function calls."
      },
      {
        id: "js-17",
        question: "What will console.log(a) output?\n```javascript\nconsole.log(a);\nvar a = 5;\n```",
        options: ["5", "undefined", "ReferenceError", "null"],
        correctAnswer: 1,
        explanation: "var hoists the declaration and initializes it to 'undefined', so accessing it before assignment returns undefined.\n\n**Note:** With let/const, this would throw a ReferenceError."
      },
      {
        id: "js-18",
        question: "What is obj1.name after this code runs?\n```javascript\nlet obj1 = { name: 'Alice' };\nlet obj2 = obj1;\nobj2.name = 'Bob';\nconsole.log(obj1.name);\n```",
        options: ["'Alice'", "'Bob'", "undefined", "null"],
        correctAnswer: 1,
        explanation: "Both variables point to the same object in memory, so mutating obj2 also mutates obj1. Objects are passed by reference, not by value."
      },
      {
        id: "js-19",
        question: "What will greet(null) output?\n```javascript\nfunction greet(name = 'Stranger') {\n  console.log(name);\n}\ngreet();\ngreet(undefined);\ngreet(null);\n```",
        options: ["'Stranger'", "null", "undefined", "Error"],
        correctAnswer: 1,
        explanation: "null is an existing value, not undefined, so it doesn't trigger the default parameter.\n\n**Output:**\n- greet() → 'Stranger'\n- greet(undefined) → 'Stranger'\n- greet(null) → null\n\nOnly undefined or missing arguments use defaults."
      },
      {
        id: "js-20",
        question: "What happens when you call greet()?\n```javascript\nconst person = {\n  name: 'Sam',\n  greet() {\n    console.log(this.name);\n  }\n};\nconst greet = person.greet;\ngreet();\n```",
        options: ["Logs person.name", "Logs undefined", "Throws error", "Logs 'greet'"],
        correctAnswer: 1,
        explanation: "greet is invoked in the global context where this is undefined.\n\n**Fix:** Use bind() to preserve context:\n```javascript\nconst greet = person.greet.bind(person);\ngreet(); // Logs 'Sam'\n```"
      },
      {
        id: "js-21",
        question: "What does console.log(typeof a) output after: (function() { let a = 10; })(); console.log(typeof a);",
        options: ["'number'", "'undefined'", "'object'", "ReferenceError"],
        correctAnswer: 1,
        explanation: "IIFE creates its own function scope. The variable a exists only inside the IIFE, so outside it's undefined."
      },
      {
        id: "js-22",
        question: "What does addFive(3) return?\n```javascript\nfunction add(a) {\n  return function(b) {\n    return a + b;\n  };\n}\nconst addFive = add(5);\nconsole.log(addFive(3));\n```",
        options: ["8", "5", "3", "15"],
        correctAnswer: 0,
        explanation: "The first call creates a closure that 'freezes' 5, available on the second call. Result: 5 + 3 = 8. This is an example of currying and partial application."
      },
      {
        id: "js-23",
        question: "What do these equality checks evaluate to?\n```javascript\nconsole.log(0 == '0');\nconsole.log(0 === '0');\nconsole.log(false == '0');\n```",
        options: ["true, false, true", "false, false, false", "true, true, true", "Error"],
        correctAnswer: 0,
        explanation: "== performs type coercion:\n- 0 == '0' → true (coerces '0' to 0)\n- 0 === '0' → false (strict equality, no coercion)\n- false == '0' → true (coerces both)\n\n**Always use === for strict equality.**"
      },
      {
        id: "js-24",
        question: "In what order are these logged?\n```javascript\nconsole.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('End');\n```",
        options: ["Start, End, Promise, Timeout", "Start, Timeout, Promise, End", "Start, End, Timeout, Promise", "Start, Promise, End, Timeout"],
        correctAnswer: 0,
        explanation: "Event loop execution order:\n1. Synchronous code (Start, End)\n2. Microtasks (Promise)\n3. Macrotasks (Timeout)\n\nMicrotasks (promises) run before macrotasks (setTimeout)."
      },
      {
        id: "js-25",
        question: "What error occurs when: let x = 1; function test() { console.log(x); let x = 2; } test();",
        options: ["Logs 1", "Logs 2", "ReferenceError: Cannot access 'x' before initialization", "Logs undefined"],
        correctAnswer: 2,
        explanation: "let hoists only the declaration, not initialization. Accessing x before initialization in the same scope causes a ReferenceError."
      },
      {
        id: "js-26",
        question: "What does sum(1, 2, 3) return for: function sum(...numbers) { return numbers.reduce((acc, curr) => acc + curr, 0); }?",
        options: ["6", "0", "undefined", "Error"],
        correctAnswer: 0,
        explanation: "The rest operator collects all arguments into an array. reduce sums them: 1 + 2 + 3 = 6."
      },
      {
        id: "js-27",
        question: "What does const {a, b = 2} = {a: 1}; console.log(a, b); output?",
        options: ["1, 2", "1, undefined", "undefined, 2", "Error"],
        correctAnswer: 0,
        explanation: "Destructuring extracts a=1. Since b is missing, the default value 2 is used."
      },
      {
        id: "js-28",
        question: "After mutate(arr, obj) where mutate pushes to array and changes object.key, what happens to the original arr and obj?",
        options: ["They remain unchanged", "They are mutated", "Only arr changes", "Only obj changes"],
        correctAnswer: 1,
        explanation: "Arrays and objects are passed by reference. Mutating them inside the function mutates the originals."
      },
      {
        id: "js-29",
        question: "What does '5' - 2 evaluate to?",
        options: ["'52'", "3", "'3'", "NaN"],
        correctAnswer: 1,
        explanation: "The - operator triggers numeric coercion. '5' becomes 5, so 5 - 2 = 3."
      },
      {
        id: "js-30",
        question: "What does '5' + 2 evaluate to?",
        options: ["'52'", "7", "'7'", "NaN"],
        correctAnswer: 0,
        explanation: "The + operator with a string operand triggers string concatenation. '5' + 2 = '52'."
      },
      {
        id: "js-31",
        question: "What does user.profile?.contact?.phone return if contact doesn't exist?",
        options: ["undefined", "null", "Error", "'Not Found'"],
        correctAnswer: 0,
        explanation: "Optional chaining (?.) returns undefined when accessing a property that doesn't exist, instead of throwing an error."
      },
      {
        id: "js-32",
        question: "What does null ?? 'default' evaluate to?",
        options: ["'default'", "null", "undefined", "Error"],
        correctAnswer: 0,
        explanation: "The nullish coalescing operator (??) returns the right-hand side when the left is null or undefined."
      },
      {
        id: "js-33",
        question: "What does 0 ?? 42 evaluate to?",
        options: ["0", "42", "undefined", "null"],
        correctAnswer: 0,
        explanation: "The nullish coalescing operator only triggers for null/undefined. 0 is a valid value, so it returns 0."
      },
      {
        id: "js-34",
        question: "What is the benefit of dynamic imports (import())?",
        options: ["Code splitting and lazy loading", "Faster initial load", "Conditional loading", "All of the above"],
        correctAnswer: 3,
        explanation: "Dynamic imports enable code splitting, lazy loading, conditional loading, and better performance by reducing initial bundle size."
      },
      {
        id: "js-35",
        question: "How does Promise.allSettled differ from Promise.all?",
        options: ["No difference", "allSettled waits for all promises, all stops on first rejection", "all is faster", "allSettled is deprecated"],
        correctAnswer: 1,
        explanation: "Promise.allSettled waits for all promises to settle (fulfilled or rejected), while Promise.all stops on the first rejection."
      },
      {
        id: "js-36",
        question: "What happens when accessing p.#secret outside the class for: class Person { #secret = 'Hidden'; } const p = new Person();",
        options: ["Returns 'Hidden'", "Returns undefined", "SyntaxError: Private field must be declared in enclosing class", "TypeError"],
        correctAnswer: 2,
        explanation: "Private fields (#) are only accessible inside the class. Accessing them outside throws a SyntaxError."
      },
      {
        id: "js-37",
        question: "What does x ||= 10 do when x = 0?",
        options: ["x becomes 10", "x stays 0", "Error", "x becomes undefined"],
        correctAnswer: 0,
        explanation: "Logical OR assignment (||=) assigns the right value if the left is falsy. 0 is falsy, so x becomes 10."
      },
      {
        id: "js-38",
        question: "What does arr.at(-1) return for arr = [10, 20, 30, 40, 50]?",
        options: ["50", "10", "undefined", "Error"],
        correctAnswer: 0,
        explanation: "The at() method accepts negative indices. at(-1) returns the last element: 50."
      },
      {
        id: "js-39",
        question: "What does weakRef.deref() return after the object is garbage collected?",
        options: ["The object", "undefined", "null", "Error"],
        correctAnswer: 1,
        explanation: "WeakRef.deref() returns the object if it hasn't been garbage collected, or undefined if it has been collected."
      },
      {
        id: "js-40",
        question: "Are Symbol('id') and Symbol('id') equal?",
        options: ["Yes, they're equal", "No, symbols are always unique", "Only if created together", "Depends on context"],
        correctAnswer: 1,
        explanation: "Symbols are always unique, even if created with the same description. Each Symbol() call creates a new unique symbol."
      },
      {
        id: "js-41",
        question: "What does a Proxy's get trap allow you to do?",
        options: ["Intercept property access", "Prevent access", "Return custom values", "All of the above"],
        correctAnswer: 3,
        explanation: "Proxy get traps intercept property access, allowing you to return custom values, prevent access, or add logic."
      },
      {
        id: "js-42",
        question: "What does Promise.any() return?",
        options: ["First fulfilled promise", "First rejected promise", "All promises", "Last promise"],
        correctAnswer: 0,
        explanation: "Promise.any() resolves to the first fulfilled promise, or throws an AggregateError if all promises reject."
      },
      {
        id: "js-43",
        question: "What does function* generateSequence() { yield 1; yield 2; } create?",
        options: ["A regular function", "A generator function", "An async function", "An arrow function"],
        correctAnswer: 1,
        explanation: "The function* syntax creates a generator function that yields values lazily using the iterator protocol."
      }
    ]
  },
  {
    id: "aidd",
    title: "AIDD Framework",
    description: "Learn about AI-Assisted Development and the AIDD framework",
    explainer: `AIDD (AI-Assisted Development) is a framework for building software with AI agents. This project uses structured guidance in the ai/ directory to coordinate agent actions.

Key concepts:
- Agents examine the ai/* directory listings to understand available commands, rules, and workflows
- Each folder contains index.md files that describe purpose and contents
- Progressive discovery: only consume what you need for the current task
- Vision document serves as source of truth for project goals and constraints
- Conflict resolution: if tasks conflict with vision, stop and clarify

The framework emphasizes:
- Structured agent coordination
- Clear separation of concerns
- Progressive information consumption
- Vision-driven development
- Conflict detection and resolution`,
    questions: [
      {
        id: "aidd-1",
        question: "What does AIDD stand for?",
        options: ["AI Integrated Development", "AI-Assisted Development", "Advanced Integrated Development", "Automated Integrated Development"],
        correctAnswer: 1,
        explanation: "AIDD stands for AI-Assisted Development - a framework for building software with AI agents."
      },
      {
        id: "aidd-2",
        question: "Where are agent guidelines stored in this project?",
        options: ["/src/agents", "/ai directory", "/config/agents", "/docs/agents"],
        correctAnswer: 1,
        explanation: "Agent guidelines are stored in the ai/ directory with structured guidance for commands, rules, and workflows."
      },
      {
        id: "aidd-3",
        question: "What is the purpose of index.md files in the ai/ directory?",
        options: ["To store code", "To describe purpose and contents of folders", "To run tests", "To deploy applications"],
        correctAnswer: 1,
        explanation: "Each folder contains an index.md file that describes the purpose and contents of that folder."
      },
      {
        id: "aidd-4",
        question: "What principle should agents follow when consuming information?",
        options: ["Read everything", "Progressive discovery", "Skip documentation", "Read only code"],
        correctAnswer: 1,
        explanation: "Agents should use progressive discovery - only consume what they need for the current task."
      },
      {
        id: "aidd-5",
        question: "What serves as the source of truth for project goals?",
        options: ["README.md", "package.json", "vision.md", "AGENTS.md"],
        correctAnswer: 2,
        explanation: "The vision document (vision.md) serves as the source of truth for project goals, constraints, and architectural decisions."
      },
      {
        id: "aidd-6",
        question: "What should agents do if a task conflicts with the vision document?",
        options: ["Proceed anyway", "Stop and clarify", "Ignore the conflict", "Modify the vision"],
        correctAnswer: 1,
        explanation: "If conflicts are detected, agents must stop, identify the conflict, and ask for clarification before proceeding."
      },
      {
        id: "aidd-7",
        question: "How should agents approach reading subfolders?",
        options: ["Read all subfolders", "Only when task requires it", "Never read subfolders", "Read randomly"],
        correctAnswer: 1,
        explanation: "Agents should only drill into subfolders when the task requires that specific domain knowledge."
      },
      {
        id: "aidd-8",
        question: "What is the main benefit of progressive discovery?",
        options: ["Faster execution", "Minimizes context consumption", "More accurate results", "Better error handling"],
        correctAnswer: 1,
        explanation: "Progressive discovery minimizes context consumption and keeps agent responses focused."
      },
      {
        id: "aidd-9",
        question: "What should agents examine to understand available commands?",
        options: ["Only code files", "ai/* directory listings", "node_modules", "package.json"],
        correctAnswer: 1,
        explanation: "Agents should examine the ai/* directory listings to understand available commands, rules, and workflows."
      },
      {
        id: "aidd-10",
        question: "What is the purpose of the agent orchestrator?",
        options: ["To run tests", "To coordinate agent actions", "To deploy code", "To write documentation"],
        correctAnswer: 1,
        explanation: "The agent orchestrator coordinates the actions of other agents using structured guidance."
      },
      {
        id: "aidd-11",
        question: "When should agents read the vision document?",
        options: ["After completing tasks", "Before creating or running any task", "Never", "Only on errors"],
        correctAnswer: 1,
        explanation: "Before creating or running any task, agents must first read the vision document."
      },
      {
        id: "aidd-12",
        question: "What should index.md files in ai/ directory NOT be?",
        options: ["Auto-generated", "Manually created or edited", "Descriptive", "Helpful"],
        correctAnswer: 1,
        explanation: "The ai/**/index.md files are auto-generated from frontmatter and should not be created or edited manually."
      },
      {
        id: "aidd-13",
        question: "What does the vision document NOT cover?",
        options: ["Project goals", "Architectural decisions", "User experience principles", "Specific code implementations"],
        correctAnswer: 3,
        explanation: "The vision document covers goals, constraints, architecture, and UX principles, but not specific code implementations."
      },
      {
        id: "aidd-14",
        question: "What is the recommended approach for Python projects?",
        options: ["Read JavaScript folders", "Skip JavaScript-specific folders", "Read everything", "Read nothing"],
        correctAnswer: 1,
        explanation: "For Python projects, there's no need to read JavaScript-specific folders - only consume what's relevant."
      },
      {
        id: "aidd-15",
        question: "What happens if agents proceed with conflicting tasks?",
        options: ["Nothing", "They should never do this", "Tasks complete successfully", "Automatic fixes apply"],
        correctAnswer: 1,
        explanation: "Agents should never proceed with a task that contradicts the vision without explicit user approval."
      }
    ]
  },
  {
    id: "sudolang",
    title: "SudoLang",
    description: "Learn about SudoLang programming language",
    explainer: `SudoLang is a structured natural language programming syntax designed for AI agents. It provides a way to express programming concepts, data structures, and logic in a human-readable format that AI can understand and execute.

Key features:
- Structured syntax similar to programming languages
- Human-readable and AI-interpretable
- Supports functions, data structures, constraints, and logic
- Used for defining rules, workflows, and agent behaviors
- Enables clear communication between humans and AI systems

SudoLang syntax includes:
- Function definitions with parameters
- Data structures and types
- Constraints and rules
- Conditional logic
- Iteration and control flow
- Comments and documentation`,
    questions: [
      {
        id: "sudo-1",
        question: "What is SudoLang?",
        options: ["A compiled language", "A structured natural language programming syntax", "A database query language", "A markup language"],
        correctAnswer: 1,
        explanation: "SudoLang is a structured natural language programming syntax designed for AI agents."
      },
      {
        id: "sudo-2",
        question: "Who is SudoLang primarily designed for?",
        options: ["Web browsers", "AI agents", "Mobile apps", "Desktop applications"],
        correctAnswer: 1,
        explanation: "SudoLang is designed for AI agents to understand and execute programming concepts."
      },
      {
        id: "sudo-3",
        question: "What is a key feature of SudoLang syntax?",
        options: ["Binary compilation", "Human-readable format", "Low-level memory access", "Hardware control"],
        correctAnswer: 1,
        explanation: "SudoLang is human-readable and AI-interpretable, making it easy for both humans and AI to understand."
      },
      {
        id: "sudo-4",
        question: "What can SudoLang express?",
        options: ["Only functions", "Only data structures", "Functions, data structures, constraints, and logic", "Only constraints"],
        correctAnswer: 2,
        explanation: "SudoLang supports functions, data structures, constraints, and logic."
      },
      {
        id: "sudo-5",
        question: "What is SudoLang commonly used for in this project?",
        options: ["Writing tests", "Defining rules, workflows, and agent behaviors", "Database queries", "API endpoints"],
        correctAnswer: 1,
        explanation: "SudoLang is used for defining rules, workflows, and agent behaviors in AI-assisted development."
      },
      {
        id: "sudo-6",
        question: "What does SudoLang syntax NOT include?",
        options: ["Function definitions", "Data structures", "Binary code", "Constraints and rules"],
        correctAnswer: 2,
        explanation: "SudoLang is a high-level syntax and does not include binary code."
      },
      {
        id: "sudo-7",
        question: "What is the main advantage of SudoLang?",
        options: ["Fast execution", "Clear communication between humans and AI", "Small file size", "Low memory usage"],
        correctAnswer: 1,
        explanation: "SudoLang enables clear communication between humans and AI systems."
      },
      {
        id: "sudo-8",
        question: "Can SudoLang express conditional logic?",
        options: ["No", "Yes", "Only simple conditions", "Only complex conditions"],
        correctAnswer: 1,
        explanation: "SudoLang supports conditional logic along with other programming constructs."
      },
      {
        id: "sudo-9",
        question: "What type of language structure does SudoLang have?",
        options: ["Unstructured", "Structured", "Object-oriented only", "Functional only"],
        correctAnswer: 1,
        explanation: "SudoLang has a structured syntax similar to programming languages."
      },
      {
        id: "sudo-10",
        question: "Where might you see SudoLang in this project?",
        options: ["In compiled code", "In rule and guide files", "In package.json", "In CSS files"],
        correctAnswer: 1,
        explanation: "SudoLang appears in rule and guide files (like .mdc files) that define agent behaviors."
      },
      {
        id: "sudo-11",
        question: "What makes SudoLang different from traditional programming languages?",
        options: ["It's compiled", "It's designed for AI interpretation", "It requires a runtime", "It's typed"],
        correctAnswer: 1,
        explanation: "SudoLang is specifically designed to be interpreted by AI agents, not compiled to machine code."
      },
      {
        id: "sudo-12",
        question: "Can SudoLang support iteration and control flow?",
        options: ["No", "Yes", "Only loops", "Only conditionals"],
        correctAnswer: 1,
        explanation: "SudoLang supports iteration and control flow along with other programming constructs."
      },
      {
        id: "sudo-13",
        question: "What is the primary use case for SudoLang in AI development?",
        options: ["Performance optimization", "Expressing agent instructions and rules", "Database management", "Network protocols"],
        correctAnswer: 1,
        explanation: "SudoLang is primarily used for expressing agent instructions, rules, and workflows."
      },
      {
        id: "sudo-14",
        question: "Is SudoLang suitable for writing production application code?",
        options: ["Yes, always", "No, it's for AI instructions", "Only for frontend", "Only for backend"],
        correctAnswer: 1,
        explanation: "SudoLang is designed for AI instructions and rules, not for writing production application code."
      },
      {
        id: "sudo-15",
        question: "What format are SudoLang files typically saved in this project?",
        options: [".js", ".ts", ".mdc", ".json"],
        correctAnswer: 2,
        explanation: "SudoLang content is typically saved in .mdc (markdown) files that contain structured instructions."
      }
    ]
  },
  {
    id: "react",
    title: "React",
    description: "Learn React best practices and patterns",
    explainer: `React is a JavaScript library for building user interfaces. This module covers React best practices and patterns used in this project.

Key concepts:
- Functional components over class components
- Hooks for state and side effects
- Container/presentation pattern for persisted state
- Containers should never contain direct UI markup
- Containers should use react-redux connect to wire actions and selectors
- Separation of concerns: state management, UI, and side-effects in different modules
- Use functional programming approaches
- Favor pure functions and immutability

Best practices:
- Keep components focused and reusable
- Use composition over inheritance
- Extract logic into custom hooks
- Optimize with React.memo when needed
- Use proper key props for lists
- Handle loading and error states`,
    questions: [
      {
        id: "react-1",
        question: "What should you use instead of class components?",
        options: ["Mixins", "Functional components", "Prototypes", "Interfaces"],
        correctAnswer: 1,
        explanation: "Functional components are preferred over class components in modern React."
      },
      {
        id: "react-2",
        question: "What pattern should you use when you need persisted state?",
        options: ["HOC pattern", "Container/presentation pattern", "Singleton pattern", "Factory pattern"],
        correctAnswer: 1,
        explanation: "Always use the container/presentation pattern when you need persisted state."
      },
      {
        id: "react-3",
        question: "What should containers NEVER contain?",
        options: ["State", "Direct UI markup", "Actions", "Selectors"],
        correctAnswer: 1,
        explanation: "Containers should never contain any direct UI markup - they should import and use presentation components."
      },
      {
        id: "react-4",
        question: "How should containers wire actions and selectors?",
        options: ["Directly in JSX", "Using react-redux connect", "Using useState", "Using useEffect"],
        correctAnswer: 1,
        explanation: "Containers should use react-redux connect to wire actions and selectors to presentation components."
      },
      {
        id: "react-5",
        question: "Should containers contain business logic?",
        options: ["Yes, always", "No, never", "Sometimes", "Only for simple logic"],
        correctAnswer: 1,
        explanation: "Containers should NEVER contain business logic. Use react-redux connect instead."
      },
      {
        id: "react-6",
        question: "What should be separated into different modules?",
        options: ["Only state and UI", "State management, UI, and side-effects", "Only UI and side-effects", "Nothing needs separation"],
        correctAnswer: 1,
        explanation: "Always separate state management, UI, and side-effects from each other in different modules."
      },
      {
        id: "react-7",
        question: "What should you use for state and side effects in functional components?",
        options: ["Classes", "Hooks", "Mixins", "Prototypes"],
        correctAnswer: 1,
        explanation: "Use hooks for state and side effects in functional components."
      },
      {
        id: "react-8",
        question: "What should you favor in React components?",
        options: ["Mutation", "Immutability", "Direct DOM manipulation", "Global variables"],
        correctAnswer: 1,
        explanation: "Favor immutability and pure functions in React components."
      },
      {
        id: "react-9",
        question: "What should you use for optimizing component renders?",
        options: ["useState", "React.memo", "useEffect", "useCallback only"],
        correctAnswer: 1,
        explanation: "Use React.memo to optimize component renders when needed."
      },
      {
        id: "react-10",
        question: "What is important when rendering lists?",
        options: ["Using index as key", "Using proper key props", "Not using keys", "Using random keys"],
        correctAnswer: 1,
        explanation: "Always use proper key props for lists to help React efficiently update the DOM."
      },
      {
        id: "react-11",
        question: "What should you extract complex logic into?",
        options: ["Classes", "Custom hooks", "Global functions", "Inline functions"],
        correctAnswer: 1,
        explanation: "Extract complex logic into custom hooks for reusability and separation of concerns."
      },
      {
        id: "react-12",
        question: "What should you use for composition?",
        options: ["Inheritance", "Composition", "Mixins", "Prototypes"],
        correctAnswer: 1,
        explanation: "Use composition over inheritance in React components."
      },
      {
        id: "react-13",
        question: "What should components be?",
        options: ["Large and complex", "Focused and reusable", "Tightly coupled", "Stateful only"],
        correctAnswer: 1,
        explanation: "Keep components focused and reusable for better maintainability."
      },
      {
        id: "react-14",
        question: "What should you handle in components?",
        options: ["Only success states", "Loading and error states", "Only loading states", "Nothing special"],
        correctAnswer: 1,
        explanation: "Always handle loading and error states properly in components."
      },
      {
        id: "react-15",
        question: "What programming approach should you favor in React?",
        options: ["Object-oriented", "Functional programming", "Procedural", "Imperative"],
        correctAnswer: 1,
        explanation: "Favor functional programming approaches with pure functions and immutability."
      },
      {
        id: "react-16",
        question: "What is the difference between Component and PureComponent?\n```jsx\n// Regular Component\nclass MyComponent extends React.Component {\n  render() { return <div>{this.props.data}</div>; }\n}\n\n// PureComponent\nclass MyPureComponent extends React.PureComponent {\n  render() { return <div>{this.props.data}</div>; }\n}\n```",
        options: ["No difference", "PureComponent does shallow comparison in shouldComponentUpdate", "Component is faster", "PureComponent doesn't re-render"],
        correctAnswer: 1,
        explanation: "PureComponent implements shouldComponentUpdate with shallow comparison, preventing re-renders when props/state haven't changed. Regular Component re-renders on every parent update."
      },
      {
        id: "react-17",
        question: "Why is Context + shouldComponentUpdate dangerous?",
        options: ["They conflict", "Context updates don't respect shouldComponentUpdate", "Performance issues", "Both B and C"],
        correctAnswer: 3,
        explanation: "Context updates don't respect shouldComponentUpdate and will re-render all subscribed components, potentially causing unexpected behavior."
      },
      {
        id: "react-18",
        question: "What are 3 ways to pass information from a component to its parent?",
        options: ["Props only", "Callback functions, Context API, state management libraries", "Only callbacks", "Props and state"],
        correctAnswer: 1,
        explanation: "Common methods: callback functions (most direct), Context API, and state management libraries (Redux, Zustand). Also refs and event bubbling."
      },
      {
        id: "react-19",
        question: "What are 2 ways to prevent components from re-rendering?\n```jsx\n// React.memo\nconst Child = React.memo(({ onClick }) => {\n  return <button onClick={onClick}>Click Me</button>;\n});\n\n// useCallback\nconst handleClick = React.useCallback(() => {\n  console.log('click');\n}, []);\n\n// useMemo\nconst data = React.useMemo(() => ({ value: 'Hello' }), []);\n```",
        options: ["Nothing works", "React.memo and useMemo/useCallback", "Only React.memo", "Only useMemo"],
        correctAnswer: 1,
        explanation: "React.memo prevents re-renders based on props. useMemo caches expensive calculations, useCallback memoizes functions to prevent child re-renders."
      },
      {
        id: "react-20",
        question: "What is a Fragment and why do we need it?",
        options: ["A DOM element", "A wrapper that doesn't add DOM nodes", "A component", "A hook"],
        correctAnswer: 1,
        explanation: "Fragments (<></> or <Fragment>) group elements without adding extra DOM nodes, satisfying React's single element return requirement."
      },
      {
        id: "react-21",
        question: "What are 3 examples of the HOC (Higher-Order Component) pattern?",
        options: ["Components only", "withAuthorization, withLoading, withLogging", "Hooks only", "No examples"],
        correctAnswer: 1,
        explanation: "HOCs wrap components to add behavior: withAuthorization (auth checks), withLoading (loading states), withLogging (logging)."
      },
      {
        id: "react-22",
        question: "What's the difference in handling exceptions in promises, callbacks, and async/await?",
        options: ["No difference", "Promises use .catch(), callbacks use err param, async/await uses try/catch", "All use try/catch", "All use .catch()"],
        correctAnswer: 1,
        explanation: "Promises: .then()/.catch(). Callbacks: err as first parameter (Node.js style). async/await: try/catch blocks."
      },
      {
        id: "react-23",
        question: "How many arguments does setState take and why is it async?",
        options: ["1 argument, synchronous", "2 arguments (update, callback), async for batching", "1 argument, async", "3 arguments"],
        correctAnswer: 1,
        explanation: "setState takes state update and optional callback. It's async because React batches multiple setState calls for performance and consistency."
      },
      {
        id: "react-24",
        question: "What are steps to migrate a Class to Function Component?",
        options: ["No migration needed", "Change class to function, remove this, use hooks, remove render method", "Just change syntax", "Impossible"],
        correctAnswer: 1,
        explanation: "Change class to function, remove constructor/lifecycle methods, replace this.setState with useState, use useEffect for side effects, remove render method."
      },
      {
        id: "react-25",
        question: "How can styles be used with components?",
        options: ["Only inline", "Inline, CSS, SASS, CSS modules, CSS-in-JS, Tailwind, component libraries", "Only CSS", "Only CSS-in-JS"],
        correctAnswer: 1,
        explanation: "Many options: inline styles, plain CSS, SASS/SCSS, CSS modules, CSS-in-JS (Styled Components, Emotion), Tailwind, Bootstrap, component libraries (MUI, Chakra)."
      },
      {
        id: "react-26",
        question: "How to render an HTML string coming from the server?",
        options: ["Directly in JSX", "dangerouslySetInnerHTML after sanitization", "Not possible", "Only with libraries"],
        correctAnswer: 1,
        explanation: "Use dangerouslySetInnerHTML prop, but always sanitize HTML strings first to prevent XSS attacks, especially from untrusted sources."
      }
    ]
  },
  {
    id: "nextjs",
    title: "Next.js",
    description: "Learn Next.js framework and App Router",
    explainer: `Next.js is a React framework for production that provides server-side rendering, static site generation, and other powerful features.

Key features:
- App Router for file-based routing
- Server Components and Client Components
- Built-in optimization (images, fonts, etc.)
- API routes for backend functionality
- Automatic code splitting
- Optimized production builds

This project uses:
- Next.js 16 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Server and Client Components appropriately
- File-based routing in the app/ directory

Best practices:
- Use Server Components by default
- Mark Client Components with 'use client'
- Leverage Next.js Image component for optimization
- Use proper metadata for SEO
- Organize routes in the app directory`,
    questions: [
      {
        id: "next-1",
        question: "What is Next.js?",
        options: ["A database", "A React framework for production", "A CSS framework", "A testing library"],
        correctAnswer: 1,
        explanation: "Next.js is a React framework for production with server-side rendering and other features."
      },
      {
        id: "next-2",
        question: "What routing system does this project use?",
        options: ["React Router", "App Router", "Hash routing", "Manual routing"],
        correctAnswer: 1,
        explanation: "This project uses Next.js App Router for file-based routing."
      },
      {
        id: "next-3",
        question: "Where are routes defined in the App Router?",
        options: ["In a config file", "In the app/ directory", "In pages/ directory", "In components/"],
        correctAnswer: 1,
        explanation: "Routes are defined in the app/ directory using the file-based routing system."
      },
      {
        id: "next-4",
        question: "What should you use by default for components?",
        options: ["Client Components", "Server Components", "Both equally", "Class components"],
        correctAnswer: 1,
        explanation: "Use Server Components by default in Next.js App Router."
      },
      {
        id: "next-5",
        question: "How do you mark a component as a Client Component?",
        options: ["'use server' directive", "'use client' directive", "export default", "Using useState"],
        correctAnswer: 1,
        explanation: "Mark Client Components with the 'use client' directive at the top of the file."
      },
      {
        id: "next-6",
        question: "What component should you use for images?",
        options: ["<img>", "Next.js Image component", "<picture>", "CSS background"],
        correctAnswer: 1,
        explanation: "Use the Next.js Image component for automatic optimization."
      },
      {
        id: "next-7",
        question: "What does Next.js provide for backend functionality?",
        options: ["Only frontend", "API routes", "Database connections only", "File system only"],
        correctAnswer: 1,
        explanation: "Next.js provides API routes for backend functionality."
      },
      {
        id: "next-8",
        question: "What feature does Next.js provide automatically?",
        options: ["Database setup", "Code splitting", "Email sending", "Payment processing"],
        correctAnswer: 1,
        explanation: "Next.js provides automatic code splitting for optimal performance."
      },
      {
        id: "next-9",
        question: "What should you use for SEO?",
        options: ["Only titles", "Proper metadata", "Only descriptions", "Nothing special"],
        correctAnswer: 1,
        explanation: "Use proper metadata exports for SEO in Next.js."
      },
      {
        id: "next-10",
        question: "What version of Next.js does this project use?",
        options: ["Next.js 14", "Next.js 15", "Next.js 16", "Next.js 13"],
        correctAnswer: 2,
        explanation: "This project uses Next.js 16.1.3."
      },
      {
        id: "next-11",
        question: "What does Next.js optimize automatically?",
        options: ["Only images", "Images, fonts, and more", "Only fonts", "Nothing"],
        correctAnswer: 1,
        explanation: "Next.js provides built-in optimization for images, fonts, and other assets."
      },
      {
        id: "next-12",
        question: "What type of rendering does Next.js support?",
        options: ["Only client-side", "Server-side rendering and static site generation", "Only static", "Only server-side"],
        correctAnswer: 1,
        explanation: "Next.js supports both server-side rendering (SSR) and static site generation (SSG)."
      },
      {
        id: "next-13",
        question: "Where should you organize routes?",
        options: ["In components/", "In the app directory", "In pages/", "In lib/"],
        correctAnswer: 1,
        explanation: "Organize routes in the app directory using the App Router file-based system."
      },
      {
        id: "next-14",
        question: "What is the main advantage of Server Components?",
        options: ["They run in the browser", "They run on the server, reducing client bundle", "They're faster to write", "They support all hooks"],
        correctAnswer: 1,
        explanation: "Server Components run on the server, reducing the client bundle size and improving performance."
      },
      {
        id: "next-15",
        question: "What does Next.js provide for production builds?",
        options: ["Manual optimization", "Optimized production builds", "No optimization", "Basic builds only"],
        correctAnswer: 1,
        explanation: "Next.js provides optimized production builds with automatic optimizations."
      }
    ]
  },
  {
    id: "aidd-framework",
    title: "AIDD Framework Details",
    description: "Learn about the AIDD framework implementation and architecture",
    explainer: `The AIDD framework is the specific implementation used in this project for AI-assisted development. It builds on the general AIDD concepts with specific patterns and structures.

Framework components:
- Agent orchestrator for coordinating actions
- Structured rules in .mdc files
- Command system for common tasks
- Task creator for systematic planning
- TDD workflow integration
- Redux state management with Autodux
- Saga pattern for side effects

Key files:
- ai/rules/ - Contains rule definitions
- ai/commands/ - Contains command implementations
- Agent orchestrator coordinates all agents
- Vision document guides all decisions

Architecture:
- Separation of concerns (state, UI, side-effects)
- Functional programming principles
- Container/presentation pattern
- Redux with Autodux (not Redux Toolkit)
- redux-saga for side effects`,
    questions: [
      {
        id: "framework-1",
        question: "What does the agent orchestrator do?",
        options: ["Writes code", "Coordinates agent actions", "Runs tests", "Deploys apps"],
        correctAnswer: 1,
        explanation: "The agent orchestrator coordinates the actions of other agents using structured guidance."
      },
      {
        id: "framework-2",
        question: "What format are rule files stored in?",
        options: [".js files", ".mdc files", ".json files", ".ts files"],
        correctAnswer: 1,
        explanation: "Rules are stored in .mdc (markdown) files with frontmatter."
      },
      {
        id: "framework-3",
        question: "What Redux solution does this framework use?",
        options: ["Redux Toolkit", "Autodux", "Plain Redux", "Zustand"],
        correctAnswer: 1,
        explanation: "The framework uses Autodux and redux connect, avoiding Redux Toolkit."
      },
      {
        id: "framework-4",
        question: "What pattern is used for side effects?",
        options: ["Redux Thunk", "Saga pattern", "useEffect only", "Callbacks"],
        correctAnswer: 1,
        explanation: "The framework uses redux-saga for side effects (the saga pattern)."
      },
      {
        id: "framework-5",
        question: "Where are command implementations stored?",
        options: ["ai/rules/", "ai/commands/", "src/commands/", "lib/commands/"],
        correctAnswer: 1,
        explanation: "Command implementations are stored in the ai/commands/ directory."
      },
      {
        id: "framework-6",
        question: "What pattern is used for components with state?",
        options: ["HOC pattern", "Container/presentation pattern", "Render props", "Compound components"],
        correctAnswer: 1,
        explanation: "The framework uses the container/presentation pattern for components with persisted state."
      },
      {
        id: "framework-7",
        question: "What should Autodux dux objects be saved as initially?",
        options: [".js files", ".sudo files", ".ts files", ".mdc files"],
        correctAnswer: 1,
        explanation: "Autodux dux objects should be built and saved as .sudo files, then transpiled to .js."
      },
      {
        id: "framework-8",
        question: "What guides all framework decisions?",
        options: ["README.md", "package.json", "Vision document", "AGENTS.md"],
        correctAnswer: 2,
        explanation: "The vision document guides all framework decisions and serves as the source of truth."
      },
      {
        id: "framework-9",
        question: "What should be separated in different modules?",
        options: ["Only state and UI", "State management, UI, and side-effects", "Nothing", "Only UI and side-effects"],
        correctAnswer: 1,
        explanation: "Always separate state management, UI, and side-effects into different modules."
      },
      {
        id: "framework-10",
        question: "What workflow is integrated with the framework?",
        options: ["Waterfall", "TDD", "Agile only", "Scrum"],
        correctAnswer: 1,
        explanation: "The framework integrates TDD (Test-Driven Development) workflow."
      },
      {
        id: "framework-11",
        question: "What should containers use to wire Redux?",
        options: ["useSelector and useDispatch", "react-redux connect", "Context API", "Props drilling"],
        correctAnswer: 1,
        explanation: "Containers should use react-redux connect to wire actions and selectors."
      },
      {
        id: "framework-12",
        question: "What programming approach does the framework favor?",
        options: ["Object-oriented", "Functional programming", "Procedural", "Mixed"],
        correctAnswer: 1,
        explanation: "The framework favors functional programming approaches with pure functions."
      },
      {
        id: "framework-13",
        question: "What is the task creator used for?",
        options: ["Writing code", "Systematic task/epic planning", "Running tests", "Deploying apps"],
        correctAnswer: 1,
        explanation: "The task creator is used for systematic task/epic planning and execution."
      },
      {
        id: "framework-14",
        question: "What should NEVER be changed without clear requirements?",
        options: ["Tests", "Source code", "Documentation", "Config files"],
        correctAnswer: 1,
        explanation: "Source code should never be changed without clear requirements, tests, and/or manual user approval."
      },
      {
        id: "framework-15",
        question: "What does the framework use for state management instead of Redux Toolkit?",
        options: ["Zustand", "Jotai", "Autodux and redux connect", "Context API"],
        correctAnswer: 2,
        explanation: "The framework uses Autodux and redux connect, avoiding Redux Toolkit."
      }
    ]
  },
  {
    id: "typescript-advanced",
    title: "Advanced TypeScript Patterns",
    description: "Master TypeScript utility types, generics, and advanced patterns for productivity",
    explainer: `Advanced TypeScript patterns are essential for building maintainable, type-safe applications at scale. This module covers utility types, conditional types, mapped types, and patterns that eliminate boilerplate and catch errors at compile time.

Key topics:
- Utility types: Pick, Omit, Partial, Required, Record, Exclude, Extract
- Conditional types and type inference
- Template literal types
- Branded types and nominal typing
- Advanced generics with constraints
- Type guards and assertion functions
- Discriminated unions for state management
- Type-safe API clients and data transformations

Productivity patterns:
- Creating reusable type utilities
- Type-safe form handling
- Generic hooks and components
- Type inference optimization
- Reducing any types in codebase`,
    questions: [
      {
        id: "ts-1",
        question: "What utility type creates a new type with all properties of T set to optional?",
        options: ["Pick<T>", "Partial<T>", "Required<T>", "Omit<T>"],
        correctAnswer: 1,
        explanation: "Partial<T> makes all properties of T optional, useful for update operations and form handling."
      },
      {
        id: "ts-2",
        question: "How do you create a type that excludes specific types from a union?",
        options: ["Extract<T, U>", "Exclude<T, U>", "Omit<T, U>", "Pick<T, U>"],
        correctAnswer: 1,
        explanation: "Exclude<T, U> removes types from T that are assignable to U. Example: Exclude<'a' | 'b' | 'c', 'a'> = 'b' | 'c'."
      },
      {
        id: "ts-3",
        question: "What pattern allows TypeScript to narrow types based on a discriminant property?",
        options: ["Type guards", "Discriminated unions", "Branded types", "Template literals"],
        correctAnswer: 1,
        explanation: "Discriminated unions use a common property (discriminant) to help TypeScript narrow types, perfect for state machines and API responses."
      },
      {
        id: "ts-4",
        question: "What is the purpose of 'as const' assertion?",
        options: ["Type casting", "Creating readonly tuple types", "Making values immutable at type level", "All of the above"],
        correctAnswer: 3,
        explanation: "'as const' creates deeply readonly types and narrows literals, enabling precise type inference for constants and configurations."
      },
      {
        id: "ts-5",
        question: "How do you create a type that represents all keys of T that have values of type V?",
        options: ["Pick<T, V>", "Record<keyof T, V>", "Extract keyof T where T[K] extends V", "Using conditional types"],
        correctAnswer: 3,
        explanation: "You need conditional types: type KeysWithType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T]"
      },
      {
        id: "ts-6",
        question: "What is the benefit of using branded types?",
        options: ["Runtime validation", "Preventing primitive type confusion", "Better performance", "Smaller bundle size"],
        correctAnswer: 1,
        explanation: "Branded types prevent mixing semantically different primitives (e.g., UserId vs OrderId) at compile time without runtime overhead."
      },
      {
        id: "ts-7",
        question: "What utility type creates a record type with specific keys and value type?",
        options: ["Pick<T, K>", "Record<K, V>", "Partial<Record<K, V>>", "Omit<T, K>"],
        correctAnswer: 1,
        explanation: "Record<K, V> creates an object type with keys of type K and values of type V. Perfect for dictionaries and maps."
      },
      {
        id: "ts-8",
        question: "How do you infer the return type of a function?",
        options: ["typeof fn", "ReturnType<typeof fn>", "fn['return']", "infer ReturnType"],
        correctAnswer: 1,
        explanation: "ReturnType<T> is a built-in utility that extracts the return type of a function type T."
      },
      {
        id: "ts-9",
        question: "What pattern allows creating type-safe API clients?",
        options: ["Function overloading", "Generic constraints", "Template literal types", "All of the above"],
        correctAnswer: 3,
        explanation: "Combining function overloading, generics with constraints, and template literal types enables fully type-safe API clients with autocomplete."
      },
      {
        id: "ts-10",
        question: "What is the purpose of 'satisfies' operator (TypeScript 4.9+)?",
        options: ["Type assertion", "Type checking without widening", "Runtime validation", "Type casting"],
        correctAnswer: 1,
        explanation: "'satisfies' ensures a value matches a type without widening the type, preserving literal types while checking compatibility."
      },
      {
        id: "ts-11",
        question: "How do you create a type that makes specific properties required?",
        options: ["Required<Pick<T, K>>", "Partial<T> & Pick<T, K>", "Required<Pick<T, K>> & Omit<T, K>", "All of the above"],
        correctAnswer: 2,
        explanation: "Required<Pick<T, K>> & Omit<T, K> makes properties K required while keeping others as they were."
      },
      {
        id: "ts-12",
        question: "What is a conditional type that checks if T extends U?",
        options: ["T extends U ? X : Y", "T is U", "T === U", "T instanceof U"],
        correctAnswer: 0,
        explanation: "T extends U ? X : Y is the syntax for conditional types, allowing type-level branching based on type relationships."
      },
      {
        id: "ts-13",
        question: "What pattern helps create type-safe form state management?",
        options: ["Discriminated unions", "Partial<FormData> & { errors: ... }", "Template literal types", "Branded types"],
        correctAnswer: 1,
        explanation: "Combining Partial for optional fields, error tracking, and validation state creates robust type-safe form management."
      },
      {
        id: "ts-14",
        question: "How do you create a type that extracts all function property names?",
        options: ["Pick<T, Function>", "Extract keyof T where T[K] extends Function", "Using mapped types", "All of the above"],
        correctAnswer: 3,
        explanation: "You need mapped types with conditional types: { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]"
      },
      {
        id: "ts-15",
        question: "What is the most productive approach to reducing 'any' types?",
        options: ["Using 'unknown' and type guards", "Type assertions", "Disabling strict mode", "Using 'as any'"],
        correctAnswer: 0,
        explanation: "Using 'unknown' with type guards is the safest way to handle untyped data, forcing explicit type narrowing."
      },
      {
        id: "ts-16",
        question: "What happens with this code?\n```typescript\nlet message: string = 'Hello';\nmessage = 123;\n```",
        options: ["Works fine", "TypeScript Error: Type 'number' is not assignable to type 'string'", "Runtime error", "Silent failure"],
        correctAnswer: 1,
        explanation: "TypeScript catches type errors at compile time. Assigning a number to a string-typed variable causes a type error before the code runs."
      },
      {
        id: "ts-17",
        question: "What does this code do?\n```typescript\nlet unknownValue: any = 'Hello World';\nlet strLength: number = (unknownValue as string).length;\nconsole.log(strLength);\n```",
        options: ["Type assertion that treats unknownValue as string", "Type guard", "Type check", "Runtime conversion"],
        correctAnswer: 0,
        explanation: "The 'as string' syntax is a type assertion, telling TypeScript to treat unknownValue as a string type. Output: 11"
      },
      {
        id: "ts-18",
        question: "What does getProperty(person, 'name') return?\n```typescript\nfunction getProperty<T, K extends keyof T>(obj: T, key: K) {\n  return obj[key];\n}\nconst person = { name: 'John', age: 30 };\nconsole.log(getProperty(person, 'name'));\n```",
        options: ["The value of person.name", "The type of person.name", "An error", "undefined"],
        correctAnswer: 0,
        explanation: "The function uses keyof T to ensure key exists on obj, then returns obj[key] with proper type inference. Output: 'John'"
      },
      {
        id: "ts-19",
        question: "What does updateTask(task, {description: 'Practice'}) do with Partial<Task>?",
        options: ["Replaces entire task", "Makes all properties optional for partial updates", "Throws error", "Does nothing"],
        correctAnswer: 1,
        explanation: "Partial<T> makes all properties optional, enabling partial updates without requiring all fields."
      },
      {
        id: "ts-20",
        question: "What does Required<Options> do?",
        options: ["Makes all properties optional", "Makes all properties required", "Removes all properties", "Adds new properties"],
        correctAnswer: 1,
        explanation: "Required<T> makes all optional properties required, enforcing their presence at compile time."
      },
      {
        id: "ts-21",
        question: "What does typeof id === 'string' do in a type guard?",
        options: ["Runtime check only", "Narrows the type within the if block", "Type assertion", "Nothing"],
        correctAnswer: 1,
        explanation: "TypeScript uses typeof in type guards to narrow types. Inside the if block, id is treated as string."
      },
      {
        id: "ts-22",
        question: "What pattern uses a 'kind' property to differentiate types?",
        options: ["Type guards", "Discriminated unions", "Branded types", "Template literals"],
        correctAnswer: 1,
        explanation: "Discriminated unions use a common property (like 'kind') to help TypeScript narrow types correctly."
      },
      {
        id: "ts-23",
        question: "What does @LogClass do in: @LogClass class Service {}?",
        options: ["Runs at runtime", "Executes when class is defined", "Only works in decorators", "Both B and C"],
        correctAnswer: 3,
        explanation: "Class decorators execute when the class is defined, not when instantiated. This requires decorator support."
      },
      {
        id: "ts-24",
        question: "What does Status.Active return for: enum Status { Active, Inactive }?",
        options: ["0", "'Active'", "1", "undefined"],
        correctAnswer: 0,
        explanation: "Numeric enums default to starting at 0, so Status.Active = 0, Status.Inactive = 1."
      },
      {
        id: "ts-25",
        question: "What does getLength('Hello') return for: function getLength<T extends { length: number }>(item: T): number?",
        options: ["5", "Error", "undefined", "null"],
        correctAnswer: 0,
        explanation: "The constraint T extends { length: number } ensures T has a length property. 'Hello'.length = 5."
      },
      {
        id: "ts-26",
        question: "What does Readonly<Todo> do?",
        options: ["Makes properties mutable", "Makes all properties readonly", "Removes properties", "Adds new properties"],
        correctAnswer: 1,
        explanation: "Readonly<T> utility type makes all properties in T immutable, preventing assignment after initialization."
      },
      {
        id: "ts-27",
        question: "What does IsString<string> evaluate to for: type IsString<T> = T extends string ? 'yes' : 'no';?",
        options: ["'yes'", "'no'", "boolean", "Error"],
        correctAnswer: 0,
        explanation: "Conditional types check if T extends string. Since string extends string, it returns 'yes'."
      },
      {
        id: "ts-28",
        question: "What does CapitalizeWord<'typescript'> evaluate to for: type CapitalizeWord<T extends string> = Capitalize<T>;?",
        options: ["'Typescript'", "'typescript'", "'TYPESCRIPT'", "Error"],
        correctAnswer: 0,
        explanation: "The Capitalize<T> utility type capitalizes the first letter of the string: 'typescript' → 'Typescript'."
      },
      {
        id: "ts-29",
        question: "What does ReturnTypeOf<typeof greet> extract for a function that returns string?",
        options: ["string", "void", "any", "unknown"],
        correctAnswer: 0,
        explanation: "ReturnTypeOf uses 'infer R' to extract the return type from the function type, resulting in string."
      },
      {
        id: "ts-30",
        question: "What does module augmentation allow?",
        options: ["Extending third-party module definitions", "Creating new modules", "Deleting modules", "Runtime changes only"],
        correctAnswer: 0,
        explanation: "Module augmentation allows extending third-party module definitions without modifying the original source."
      }
    ]
  },
  {
    id: "react-performance",
    title: "React Performance & Advanced Patterns",
    description: "Master React optimization, advanced hooks, and performance patterns",
    explainer: `React performance optimization is crucial for building fast, responsive applications. This module covers rendering optimization, advanced hooks patterns, code splitting, and techniques for handling large datasets.

Key topics:
- React.memo, useMemo, useCallback optimization strategies
- Virtualization for large lists (react-window, react-virtual)
- Code splitting with React.lazy and Suspense
- Concurrent features (useTransition, useDeferredValue)
- Advanced custom hooks patterns
- Context optimization and splitting
- Bundle size optimization
- Profiling and identifying performance bottlenecks

Productivity patterns:
- Reusable optimization hooks
- Component composition patterns
- State colocation strategies
- Avoiding unnecessary re-renders
- Optimizing expensive computations`,
    questions: [
      {
        id: "react-perf-1",
        question: "When should you use React.memo?",
        options: ["Always", "For components that receive stable props", "Only for class components", "Never"],
        correctAnswer: 1,
        explanation: "React.memo is most effective when props are stable and the component renders frequently. Measure first, then optimize."
      },
      {
        id: "react-perf-2",
        question: "What is the primary use case for useMemo?",
        options: ["Caching function references", "Memoizing expensive computations", "Preventing re-renders", "State management"],
        correctAnswer: 1,
        explanation: "useMemo caches the result of expensive computations, recalculating only when dependencies change."
      },
      {
        id: "react-perf-3",
        question: "When should you use useCallback?",
        options: ["Always", "When passing functions to memoized children", "For all functions", "Never"],
        correctAnswer: 1,
        explanation: "useCallback is useful when passing stable function references to memoized components to prevent unnecessary re-renders."
      },
      {
        id: "react-perf-4",
        question: "What is the purpose of useTransition?",
        options: ["State transitions", "Marking non-urgent updates", "Animation", "Route transitions"],
        correctAnswer: 1,
        explanation: "useTransition marks state updates as non-urgent, allowing React to keep the UI responsive during expensive updates."
      },
      {
        id: "react-perf-5",
        question: "How do you optimize rendering large lists?",
        options: ["Render all items", "Pagination only", "Virtualization", "Hidden overflow"],
        correctAnswer: 2,
        explanation: "Virtualization (react-window, react-virtual) renders only visible items, dramatically improving performance for large lists."
      },
      {
        id: "react-perf-6",
        question: "What is the best way to split React context to avoid unnecessary re-renders?",
        options: ["Single large context", "Split by concern (state, actions)", "Use Redux instead", "Avoid context"],
        correctAnswer: 1,
        explanation: "Splitting context by concern (e.g., UserStateContext, UserActionsContext) prevents components from re-rendering when unrelated values change."
      },
      {
        id: "react-perf-7",
        question: "What does useDeferredValue do?",
        options: ["Defers state updates", "Defers expensive value calculations", "Defers rendering", "Defers side effects"],
        correctAnswer: 1,
        explanation: "useDeferredValue defers updating a value, useful for keeping the UI responsive while expensive computations complete."
      },
      {
        id: "react-perf-8",
        question: "How do you prevent unnecessary re-renders from context?",
        options: ["Use multiple contexts", "Memoize context value", "Use selectors", "All of the above"],
        correctAnswer: 3,
        explanation: "Combining context splitting, memoized values, and selector patterns minimizes unnecessary re-renders."
      },
      {
        id: "react-perf-9",
        question: "What is the React Profiler used for?",
        options: ["Code profiling", "Performance measurement", "Identifying slow components", "All of the above"],
        correctAnswer: 3,
        explanation: "React Profiler measures component render times, helping identify performance bottlenecks in the component tree."
      },
      {
        id: "react-perf-10",
        question: "When is code splitting most beneficial?",
        options: ["Small apps", "Large apps with route-based chunks", "All apps", "Never"],
        correctAnswer: 1,
        explanation: "Code splitting is most beneficial for large apps, splitting by routes or features to reduce initial bundle size."
      },
      {
        id: "react-perf-11",
        question: "What pattern helps optimize expensive list operations?",
        options: ["useMemo with list dependencies", "Virtualization", "Debouncing", "All of the above"],
        correctAnswer: 3,
        explanation: "Combining memoization, virtualization, and debouncing optimizes list rendering and filtering operations."
      },
      {
        id: "react-perf-12",
        question: "How do you optimize context providers?",
        options: ["Single provider", "Split providers by domain", "Memoize provider value", "Both B and C"],
        correctAnswer: 3,
        explanation: "Splitting providers by domain and memoizing values prevents unnecessary re-renders of consumer components."
      },
      {
        id: "react-perf-13",
        question: "What is the purpose of React.startTransition?",
        options: ["Starting animations", "Marking urgent updates", "Marking non-urgent state updates", "Route transitions"],
        correctAnswer: 2,
        explanation: "startTransition marks state updates as non-urgent, keeping the UI responsive during transitions."
      },
      {
        id: "react-perf-14",
        question: "How do you measure React performance?",
        options: ["React DevTools Profiler", "Performance API", "console.time", "All of the above"],
        correctAnswer: 3,
        explanation: "React DevTools Profiler is best, but Performance API and timing measurements also provide valuable insights."
      },
      {
        id: "react-perf-15",
        question: "What is the best practice for optimizing custom hooks?",
        options: ["Memoize all values", "Return stable references", "Use useMemo/useCallback appropriately", "All of the above"],
        correctAnswer: 3,
        explanation: "Returning stable references from hooks and using memoization appropriately prevents unnecessary re-renders in consuming components."
      }
    ]
  },
  {
    id: "nextjs-advanced",
    title: "Next.js Advanced Features",
    description: "Master Next.js App Router, Server Components, and production optimization",
    explainer: `Next.js App Router introduces powerful patterns for building fast, scalable applications. This module covers Server Components, streaming, advanced routing, and production optimization strategies.

Key topics:
- Server Components vs Client Components
- Streaming and Suspense boundaries
- Route handlers and API routes
- Advanced routing patterns (parallel routes, intercepting routes)
- Data fetching strategies (fetch, cache, revalidate)
- Image and font optimization
- Middleware and edge functions
- Production deployment optimization

Productivity patterns:
- Optimal Server/Client Component boundaries
- Streaming data fetching patterns
- Route organization strategies
- Caching strategies for performance
- Bundle optimization techniques`,
    questions: [
      {
        id: "next-adv-1",
        question: "What is the main advantage of Server Components?",
        options: ["They support hooks", "They reduce client bundle size", "They run faster", "They support browser APIs"],
        correctAnswer: 1,
        explanation: "Server Components run on the server, reducing JavaScript sent to the client and improving initial load performance."
      },
      {
        id: "next-adv-2",
        question: "When should you use 'use client' directive?",
        options: ["Always", "When using hooks, browser APIs, or event handlers", "Never", "Only for forms"],
        correctAnswer: 1,
        explanation: "'use client' is needed when components use React hooks, browser APIs, or need interactivity."
      },
      {
        id: "next-adv-3",
        question: "What does streaming enable in Next.js?",
        options: ["Video streaming", "Progressive page rendering", "File downloads", "WebSocket connections"],
        correctAnswer: 1,
        explanation: "Streaming allows progressive rendering, showing page content as it becomes available rather than waiting for everything."
      },
      {
        id: "next-adv-4",
        question: "How do you implement incremental static regeneration (ISR)?",
        options: ["revalidate option in fetch", "getStaticProps", "getServerSideProps", "useEffect"],
        correctAnswer: 0,
        explanation: "In App Router, use the 'revalidate' option in fetch() or route segment config to enable ISR."
      },
      {
        id: "next-adv-5",
        question: "What is the purpose of route groups in Next.js?",
        options: ["URL segments", "Organizing routes without affecting URLs", "API routes", "Middleware"],
        correctAnswer: 1,
        explanation: "Route groups (folders in parentheses) organize routes without creating URL segments, useful for layouts and organization."
      },
      {
        id: "next-adv-6",
        question: "How do you handle loading states in App Router?",
        options: ["loading.tsx", "getServerSideProps", "useEffect", "Suspense boundaries"],
        correctAnswer: 0,
        explanation: "loading.tsx files automatically create Suspense boundaries for route segments, showing loading UI during data fetching."
      },
      {
        id: "next-adv-7",
        question: "What is the difference between Route Handlers and API Routes?",
        options: ["No difference", "Route Handlers use Web APIs, API Routes use Node.js", "Route Handlers are async by default", "Both B and C"],
        correctAnswer: 3,
        explanation: "Route Handlers use Web Request/Response APIs, are async by default, and support streaming, unlike Pages Router API routes."
      },
      {
        id: "next-adv-8",
        question: "How do you optimize images in Next.js?",
        options: ["Regular img tags", "next/image with optimization", "CSS background images", "Base64 encoding"],
        correctAnswer: 1,
        explanation: "next/image automatically optimizes images with lazy loading, responsive sizing, and modern format support."
      },
      {
        id: "next-adv-9",
        question: "What is the purpose of middleware in Next.js?",
        options: ["Server-side logic", "Edge runtime request/response manipulation", "API routes", "Static generation"],
        correctAnswer: 1,
        explanation: "Middleware runs on the Edge runtime, allowing you to modify requests/responses before they reach route handlers."
      },
      {
        id: "next-adv-10",
        question: "How do you implement parallel data fetching in Server Components?",
        options: ["Sequential await", "Promise.all()", "useEffect", "React Query"],
        correctAnswer: 1,
        explanation: "Use Promise.all() to fetch multiple data sources in parallel, reducing total loading time."
      },
      {
        id: "next-adv-11",
        question: "What is the benefit of using generateStaticParams?",
        options: ["Dynamic routes", "Pre-generating static pages at build time", "API routes", "Middleware"],
        correctAnswer: 1,
        explanation: "generateStaticParams pre-generates static pages for dynamic routes at build time, improving performance."
      },
      {
        id: "next-adv-12",
        question: "How do you handle errors in App Router?",
        options: ["error.tsx", "try/catch", "Error boundaries", "Both A and C"],
        correctAnswer: 3,
        explanation: "error.tsx files create error boundaries for route segments, providing error UI and recovery options."
      },
      {
        id: "next-adv-13",
        question: "What is the purpose of notFound() in Next.js?",
        options: ["404 pages", "Triggering 404 response in Server Components", "API errors", "Route errors"],
        correctAnswer: 1,
        explanation: "notFound() triggers the nearest not-found.tsx boundary, useful for handling missing data in Server Components."
      },
      {
        id: "next-adv-14",
        question: "How do you optimize bundle size in Next.js?",
        options: ["Code splitting", "Tree shaking", "Dynamic imports", "All of the above"],
        correctAnswer: 3,
        explanation: "Next.js automatically code splits, but you can optimize further with dynamic imports, tree shaking, and analyzing bundles."
      },
      {
        id: "next-adv-15",
        question: "What is the best practice for data fetching in Server Components?",
        options: ["useEffect", "Direct async/await fetch", "React Query", "SWR"],
        correctAnswer: 1,
        explanation: "Server Components can use async/await directly with fetch, leveraging Next.js caching and revalidation features."
      }
    ]
  },
  {
    id: "productivity-patterns",
    title: "Code Generation & Productivity",
    description: "Learn patterns and tools to 10x your development speed",
    explainer: `Productivity in development comes from eliminating repetition, automating common tasks, and building reusable patterns. This module covers code generation, automation, and patterns that accelerate development.

Key topics:
- Code generation strategies (CLI tools, templates)
- Reusable component libraries and design systems
- Custom hooks for common patterns
- Type-safe API client generation
- Automated testing setup
- Monorepo patterns and tooling
- Development workflow automation
- Shared utilities and helpers

Productivity patterns:
- Scaffolding tools and generators
- Template-based component creation
- Automated CRUD generation
- Type generation from schemas
- Shared configuration management
- Development environment setup automation`,
    questions: [
      {
        id: "prod-1",
        question: "What is the most effective way to eliminate repetitive code?",
        options: ["Copy-paste", "Code generation", "Manual refactoring", "Ignore it"],
        correctAnswer: 1,
        explanation: "Code generation eliminates repetition at the source, ensuring consistency and reducing maintenance burden."
      },
      {
        id: "prod-2",
        question: "What pattern helps create reusable React components quickly?",
        options: ["Copy-paste components", "Component templates with generators", "Write from scratch", "Use only libraries"],
        correctAnswer: 1,
        explanation: "Component templates with CLI generators (like Plop, Hygen) create consistent, reusable components with proper structure."
      },
      {
        id: "prod-3",
        question: "How do you generate type-safe API clients?",
        options: ["Manual typing", "OpenAPI/Swagger to TypeScript generators", "Using 'any'", "Runtime validation only"],
        correctAnswer: 1,
        explanation: "Tools like openapi-typescript-codegen generate type-safe clients from OpenAPI specs, ensuring API type safety."
      },
      {
        id: "prod-4",
        question: "What is the benefit of a shared component library?",
        options: ["Consistency", "Reusability", "Faster development", "All of the above"],
        correctAnswer: 3,
        explanation: "Shared component libraries provide consistency, reusability, and faster development across projects."
      },
      {
        id: "prod-5",
        question: "How do you automate common development tasks?",
        options: ["Manual execution", "npm scripts", "CLI tools", "Both B and C"],
        correctAnswer: 3,
        explanation: "Combining npm scripts with custom CLI tools automates repetitive tasks like scaffolding, testing, and deployment."
      },
      {
        id: "prod-6",
        question: "What pattern helps manage shared utilities across projects?",
        options: ["Copy-paste", "Monorepo with shared packages", "Git submodules", "All of the above"],
        correctAnswer: 1,
        explanation: "Monorepos with shared packages (npm workspaces, pnpm, Turborepo) enable code sharing while maintaining version control."
      },
      {
        id: "prod-7",
        question: "How do you generate CRUD operations efficiently?",
        options: ["Write manually", "Code generators from schemas", "Use only ORMs", "Copy from examples"],
        correctAnswer: 1,
        explanation: "Generating CRUD from schemas (Prisma, TypeORM, custom generators) ensures consistency and reduces errors."
      },
      {
        id: "prod-8",
        question: "What is the purpose of custom hooks libraries?",
        options: ["State management", "Reusable logic patterns", "Component composition", "All of the above"],
        correctAnswer: 3,
        explanation: "Custom hooks encapsulate reusable logic, state patterns, and side effects, promoting code reuse and consistency."
      },
      {
        id: "prod-9",
        question: "How do you maintain consistency across multiple projects?",
        options: ["Manual coordination", "Shared configs (ESLint, Prettier, TS)", "No consistency needed", "Copy configs"],
        correctAnswer: 1,
        explanation: "Shared configuration packages ensure consistent code style, types, and tooling across all projects."
      },
      {
        id: "prod-10",
        question: "What tooling helps with monorepo management?",
        options: ["npm workspaces", "Turborepo", "pnpm", "All of the above"],
        correctAnswer: 3,
        explanation: "Modern tools like npm workspaces, Turborepo, and pnpm simplify monorepo management and build optimization."
      },
      {
        id: "prod-11",
        question: "How do you generate types from database schemas?",
        options: ["Manual typing", "ORM type generation", "Schema-first tools", "Both B and C"],
        correctAnswer: 3,
        explanation: "ORMs (Prisma, TypeORM) and schema-first tools (GraphQL Code Generator) generate types from schemas automatically."
      },
      {
        id: "prod-12",
        question: "What is the benefit of template-based scaffolding?",
        options: ["Consistency", "Speed", "Best practices", "All of the above"],
        correctAnswer: 3,
        explanation: "Templates ensure consistent structure, speed up creation, and embed best practices automatically."
      },
      {
        id: "prod-13",
        question: "How do you share TypeScript utilities across projects?",
        options: ["Copy-paste", "Shared npm package", "Git submodules", "Both B and C"],
        correctAnswer: 1,
        explanation: "Shared npm packages (or monorepo packages) enable type-safe utility sharing with version control."
      },
      {
        id: "prod-14",
        question: "What pattern accelerates form development?",
        options: ["Manual form code", "Form libraries (react-hook-form, Formik)", "Code generation", "Both B and C"],
        correctAnswer: 3,
        explanation: "Form libraries provide patterns, and generators can create form components from schemas, accelerating development."
      },
      {
        id: "prod-15",
        question: "What is the key to 10x productivity?",
        options: ["Working faster", "Eliminating repetition", "Better tools", "All of the above"],
        correctAnswer: 3,
        explanation: "10x productivity comes from eliminating repetition through automation, using better tools, and working smarter, not just faster."
      }
    ]
  },
  {
    id: "state-management",
    title: "Advanced State Management",
    description: "Master state management patterns for complex applications",
    explainer: `Effective state management is crucial for building maintainable applications. This module covers advanced patterns, optimization strategies, and choosing the right approach for different scenarios.

Key topics:
- Redux patterns (Autodux, redux-saga)
- Context API optimization
- Zustand and modern state libraries
- Server state management (React Query, SWR)
- State machine patterns (XState)
- Local vs global state decisions
- State normalization strategies
- Performance optimization

Productivity patterns:
- Reusable state management utilities
- Type-safe state patterns
- Optimized selectors
- State colocation strategies
- Caching and synchronization patterns`,
    questions: [
      {
        id: "state-1",
        question: "When should you use Redux vs Context API?",
        options: ["Always Redux", "Redux for complex global state, Context for simple/domain state", "Always Context", "Never use Redux"],
        correctAnswer: 1,
        explanation: "Redux excels for complex global state with time-travel debugging. Context is better for simple, domain-specific state."
      },
      {
        id: "state-2",
        question: "What is the saga pattern used for?",
        options: ["Synchronous operations", "Managing side effects and async flows", "State updates", "Component logic"],
        correctAnswer: 1,
        explanation: "Saga pattern (redux-saga) manages complex async flows, side effects, and orchestration in a testable way."
      },
      {
        id: "state-3",
        question: "How do you optimize Context API to prevent unnecessary re-renders?",
        options: ["Single context", "Split contexts by domain", "Memoize context value", "Both B and C"],
        correctAnswer: 3,
        explanation: "Splitting contexts by domain and memoizing values prevents components from re-rendering when unrelated state changes."
      },
      {
        id: "state-4",
        question: "What is the benefit of using React Query or SWR?",
        options: ["Local state", "Server state management with caching", "State machines", "Form state"],
        correctAnswer: 1,
        explanation: "React Query/SWR handle server state with automatic caching, synchronization, and background updates."
      },
      {
        id: "state-5",
        question: "What pattern helps with state normalization?",
        options: ["Nested objects", "Flat structure with IDs as keys", "Arrays only", "Mixed structures"],
        correctAnswer: 1,
        explanation: "Normalized state (flat structure with entities keyed by ID) simplifies updates and prevents duplication."
      },
      {
        id: "state-6",
        question: "When should state be local vs global?",
        options: ["Always global", "Local when possible, global when shared across distant components", "Always local", "No rules"],
        correctAnswer: 1,
        explanation: "Keep state local (colocated) when possible. Lift to global only when needed across distant component trees."
      },
      {
        id: "state-7",
        question: "What is the purpose of selectors in Redux?",
        options: ["Selecting components", "Deriving computed state", "State updates", "Side effects"],
        correctAnswer: 1,
        explanation: "Selectors derive computed state from the store, enabling memoization and preventing unnecessary recalculations."
      },
      {
        id: "state-8",
        question: "How do you handle optimistic updates?",
        options: ["Wait for server", "Update UI immediately, rollback on error", "Never update", "Use only local state"],
        correctAnswer: 1,
        explanation: "Optimistic updates improve UX by updating UI immediately, then rolling back if the server request fails."
      },
      {
        id: "state-9",
        question: "What is the benefit of state machines (XState)?",
        options: ["Performance", "Explicit state transitions and guards", "Smaller bundle", "Easier debugging"],
        correctAnswer: 1,
        explanation: "State machines make state transitions explicit, prevent invalid states, and improve testability."
      },
      {
        id: "state-10",
        question: "How do you manage form state efficiently?",
        options: ["useState for each field", "Form libraries (react-hook-form)", "Redux for all forms", "No state management"],
        correctAnswer: 1,
        explanation: "Form libraries like react-hook-form optimize re-renders and provide validation, reducing boilerplate."
      },
      {
        id: "state-11",
        question: "What pattern helps with state persistence?",
        options: ["localStorage directly", "State persistence libraries", "Server only", "Both A and B"],
        correctAnswer: 3,
        explanation: "Libraries like redux-persist handle serialization, but localStorage can work for simple cases."
      },
      {
        id: "state-12",
        question: "How do you handle loading and error states?",
        options: ["Separate state fields", "State machine", "Error boundaries", "All of the above"],
        correctAnswer: 3,
        explanation: "Combining explicit loading/error fields, state machines, and error boundaries provides robust state management."
      },
      {
        id: "state-13",
        question: "What is the benefit of using Zustand over Redux?",
        options: ["Smaller bundle", "Simpler API", "Less boilerplate", "All of the above"],
        correctAnswer: 3,
        explanation: "Zustand provides Redux-like capabilities with less boilerplate, smaller bundle, and simpler API."
      },
      {
        id: "state-14",
        question: "How do you optimize selector performance?",
        options: ["No memoization", "Reselect library", "useMemo in components", "Both B and C"],
        correctAnswer: 3,
        explanation: "Reselect memoizes selectors, and useMemo in components prevents unnecessary recalculations."
      },
      {
        id: "state-15",
        question: "What is the best practice for state management architecture?",
        options: ["One global store", "Domain-driven state organization", "Component-level only", "No structure"],
        correctAnswer: 1,
        explanation: "Organizing state by domain (features/modules) improves maintainability and scalability."
      }
    ]
  },
  {
    id: "testing-strategies",
    title: "Testing & Quality Assurance",
    description: "Master testing strategies for reliable, maintainable code",
    explainer: `Effective testing strategies ensure code quality and enable confident refactoring. This module covers testing patterns, tools, and strategies for React, TypeScript, and full-stack applications.

Key topics:
- Unit testing patterns and best practices
- Component testing (React Testing Library)
- Integration testing strategies
- E2E testing with Playwright/Cypress
- Test-driven development (TDD)
- Mocking and test doubles
- Test organization and structure
- Coverage and quality metrics

Productivity patterns:
- Reusable test utilities
- Test data factories
- Custom render functions
- Automated test generation
- CI/CD testing strategies`,
    questions: [
      {
        id: "test-1",
        question: "What is the primary principle of React Testing Library?",
        options: ["Test implementation details", "Test user behavior", "Test internal state", "Test props"],
        correctAnswer: 1,
        explanation: "React Testing Library emphasizes testing from the user's perspective, focusing on behavior rather than implementation."
      },
      {
        id: "test-2",
        question: "What is the testing pyramid?",
        options: ["Many E2E, some integration, few unit", "Many unit, some integration, few E2E", "Equal amounts", "No structure"],
        correctAnswer: 1,
        explanation: "The testing pyramid: many fast unit tests, some integration tests, few slow E2E tests."
      },
      {
        id: "test-3",
        question: "What is TDD (Test-Driven Development)?",
        options: ["Write tests after code", "Write tests before code (Red-Green-Refactor)", "No tests", "Manual testing only"],
        correctAnswer: 1,
        explanation: "TDD: Write failing test (Red), make it pass (Green), refactor (Refactor). Ensures tests drive design."
      },
      {
        id: "test-4",
        question: "How do you test async operations?",
        options: ["Synchronous assertions", "waitFor and findBy queries", "setTimeout", "No testing"],
        correctAnswer: 1,
        explanation: "Use waitFor and findBy queries from React Testing Library to handle async operations and state updates."
      },
      {
        id: "test-5",
        question: "What is the purpose of test data factories?",
        options: ["Generate random data", "Create consistent, reusable test data", "Mock APIs", "Performance testing"],
        correctAnswer: 1,
        explanation: "Test data factories (like Factory Bot pattern) create consistent, reusable test data with sensible defaults."
      },
      {
        id: "test-6",
        question: "How do you test custom hooks?",
        options: ["In components only", "renderHook from @testing-library/react", "Manual testing", "No testing"],
        correctAnswer: 1,
        explanation: "renderHook utility from @testing-library/react allows testing hooks in isolation."
      },
      {
        id: "test-7",
        question: "What is the benefit of integration tests over unit tests?",
        options: ["Faster", "Test component interactions", "Smaller scope", "No benefit"],
        correctAnswer: 1,
        explanation: "Integration tests verify that multiple units work together correctly, catching interaction bugs."
      },
      {
        id: "test-8",
        question: "How do you mock API calls in tests?",
        options: ["Real API calls", "MSW (Mock Service Worker)", "Manual mocks", "Both B and C"],
        correctAnswer: 3,
        explanation: "MSW intercepts network requests, while manual mocks work for specific cases. Both are valid approaches."
      },
      {
        id: "test-9",
        question: "What is the purpose of test coverage metrics?",
        options: ["100% coverage goal", "Identify untested code", "Quality indicator", "All of the above"],
        correctAnswer: 3,
        explanation: "Coverage metrics identify untested code and indicate quality, but 100% coverage isn't always necessary."
      },
      {
        id: "test-10",
        question: "How do you test error boundaries?",
        options: ["Throw errors in components", "Simulate errors with test utilities", "Manual testing", "Both A and B"],
        correctAnswer: 3,
        explanation: "Test error boundaries by throwing errors in test components or using utilities that simulate errors."
      },
      {
        id: "test-11",
        question: "What is the benefit of snapshot testing?",
        options: ["Catch unintended UI changes", "Test logic", "Performance", "State management"],
        correctAnswer: 0,
        explanation: "Snapshot tests catch unintended UI changes but should be used sparingly and updated intentionally."
      },
      {
        id: "test-12",
        question: "How do you organize test files?",
        options: ["Separate test directory", "Colocated with source", "No organization", "Both A and B are valid"],
        correctAnswer: 3,
        explanation: "Both approaches work: colocated tests (test.tsx) or separate __tests__ directories. Choose based on team preference."
      },
      {
        id: "test-13",
        question: "What is the purpose of E2E tests?",
        options: ["Unit testing", "Testing complete user flows", "Component testing", "API testing"],
        correctAnswer: 1,
        explanation: "E2E tests verify complete user flows from start to finish, ensuring the entire system works together."
      },
      {
        id: "test-14",
        question: "How do you test accessibility in components?",
        options: ["Manual only", "@testing-library/jest-dom matchers", "axe-core", "Both B and C"],
        correctAnswer: 3,
        explanation: "Use @testing-library/jest-dom accessibility matchers and axe-core for automated accessibility testing."
      },
      {
        id: "test-15",
        question: "What is the best practice for test maintenance?",
        options: ["Write once, never update", "Keep tests simple and focused", "Test everything", "No maintenance"],
        correctAnswer: 1,
        explanation: "Keep tests simple, focused, and maintainable. Tests should be easy to understand and update when requirements change."
      }
    ]
  },
  {
    id: "nodejs-backend",
    title: "Node.js & Backend Patterns",
    description: "Learn Node.js, Express, and backend development patterns",
    explainer: `Node.js enables JavaScript on the server, powering backend APIs and server-side applications. This module covers middleware patterns, Express.js, and backend development concepts.

Key topics:
- Middleware pattern and request/response processing
- Express.js framework patterns
- Request/response modification
- Error handling in middleware
- Authentication and authorization
- Logging and auditing
- Caching strategies
- Data transformation

Backend patterns:
- Middleware chaining
- Request validation
- Response formatting
- Error middleware
- Async middleware patterns`,
    questions: [
      {
        id: "node-1",
        question: "What is middleware in JavaScript/Node.js?",
        options: ["A database", "A software design pattern for sequential function execution", "A framework", "A language feature"],
        correctAnswer: 1,
        explanation: "Middleware is a design pattern that enables functions to execute sequentially, processing requests and responses in Node.js/Express applications."
      },
      {
        id: "node-2",
        question: "What is the typical middleware function signature?",
        options: ["(req, res) => {}", "(req, res, next) => {}", "(req) => {}", "(res) => {}"],
        correctAnswer: 1,
        explanation: "Middleware functions typically take (req, res, next) where req is request, res is response, and next passes control to the next middleware."
      },
      {
        id: "node-3",
        question: "What does the 'next' function do in middleware?",
        options: ["Stops execution", "Passes control to the next middleware", "Returns a response", "Throws an error"],
        correctAnswer: 1,
        explanation: "Calling next() passes control to the next middleware function in the chain, enabling sequential processing."
      },
      {
        id: "node-4",
        question: "What can middleware do?",
        options: ["Only modify requests", "Modify requests/responses, handle errors, authentication, logging", "Only handle errors", "Only authentication"],
        correctAnswer: 1,
        explanation: "Middleware can modify requests/responses, handle errors, perform authentication/authorization, logging, caching, and data transformation."
      },
      {
        id: "node-5",
        question: "What is express.json() middleware used for?",
        options: ["Serving static files", "Parsing JSON request bodies", "Handling errors", "Authentication"],
        correctAnswer: 1,
        explanation: "express.json() is built-in Express middleware that parses incoming JSON request bodies, making them available in req.body."
      }
    ]
  },
  {
    id: "js-challenges",
    title: "JavaScript Coding Challenges",
    description: "Practice with JavaScript and React coding challenges and edge cases",
    explainer: `Coding challenges help identify common pitfalls and edge cases in JavaScript and React. This module covers practical challenges, debugging scenarios, and solutions to common problems.

Key topics:
- React component anti-patterns
- Function binding and context issues
- Closure and scope challenges
- Prototype extensions
- Array manipulation
- Event loop behavior
- Type coercion gotchas
- React performance issues

Challenge patterns:
- Identifying and fixing bugs
- Understanding execution order
- Context and binding problems
- Memory and performance issues
- Edge case handling`,
    questions: [
      {
        id: "challenge-1",
        question: "What's wrong with this React component?\n```jsx\nclass WelcomeMessage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { name: this.props.name || 'Anonymous' };\n  }\n  render() {\n    return <p>Hello {this.state.name}</p>;\n  }\n}\n```",
        options: ["Nothing", "Using state unnecessarily for a prop that doesn't change", "Missing key prop", "Wrong syntax"],
        correctAnswer: 1,
        explanation: "Using state for a prop that doesn't change means it won't reflect updates to props.name.\n\n**Fix:** Use a functional component:\n```jsx\nconst WelcomeMessage = ({ name = 'Anonymous' }) => \n  <p>Hello {name}</p>;\n```"
      },
      {
        id: "challenge-2",
        question: "What happens with this button?\n```jsx\n<button onClick={this.handleClick1()}>click 1</button>\n```",
        options: ["Calls on click", "Executes during render, not on click", "Does nothing", "Throws error"],
        correctAnswer: 1,
        explanation: "handleClick1() is called immediately during render, not when clicked.\n\n**Fix:** Remove the parentheses:\n```jsx\n<button onClick={this.handleClick1}>click 1</button>\n```"
      },
      {
        id: "challenge-3",
        question: "What does this code return?\n```javascript\nconst a = 10;\nfunction b() { return a; }\n((f) => {\n  const a = 5;\n  return f();\n})(b);\n```",
        options: ["5", "10", "undefined", "Error"],
        correctAnswer: 1,
        explanation: "Function b closes over the outer scope where a = 10. The inner a = 5 doesn't affect b's closure, so it returns 10. Closures capture variables from their lexical environment at creation time."
      },
      {
        id: "challenge-4",
        question: "What will this code print?\n```javascript\nfor (var i = 0; i < 10; i++) {\n  setTimeout(() => console.log(i), 10);\n}\n```",
        options: ["0-9", "10 ten times", "0-9 then 10", "Nothing"],
        correctAnswer: 1,
        explanation: "var is function-scoped, so all timeouts see the same i after the loop completes (i = 10).\n\n**Fix:** Use let for block scope:\n```javascript\nfor (let i = 0; i < 10; i++) {\n  setTimeout(() => console.log(i), 10);\n}\n```"
      },
      {
        id: "challenge-5",
        question: "What happens with this code?\n```javascript\nvar feedback = {\n  message: 'Hello',\n  send() {\n    console.log(this.message);\n  }\n};\nsetTimeout(feedback.send);\n```",
        options: ["Logs 'Hello'", "Logs undefined", "Throws error", "Nothing"],
        correctAnswer: 1,
        explanation: "this is lost when passing feedback.send directly.\n\n**Fix:** Use arrow function or bind:\n```javascript\nsetTimeout(() => feedback.send());\n// or\nsetTimeout(feedback.send.bind(feedback));\n```"
      },
      {
        id: "challenge-6",
        question: "What does this CSS selector target?\n```css\n[role='navigation'] > ul a:not([href^='mailto'])\n```",
        options: ["All links", "Links in navigation ul that don't start with mailto:", "Only mailto links", "Nothing"],
        correctAnswer: 1,
        explanation: "Selects <a> elements inside <ul> that is a direct child of [role='navigation'], excluding links that start with 'mailto:'."
      },
      {
        id: "challenge-7",
        question: "What is the difference between % and rem units?",
        options: ["No difference", "% is relative to parent, rem is relative to root font-size", "rem is relative to parent", "% is absolute"],
        correctAnswer: 1,
        explanation: "% is relative to the parent container. rem is relative to the root element's (html) font-size, making it more predictable."
      },
      {
        id: "challenge-8",
        question: "What does this code output?\n```javascript\n(function() {\n  f();\n  f = function() { console.log(1); };\n})();\nfunction f() { console.log(2); }\nf();\n```",
        options: ["2, 1", "1, 2", "2, 2", "1, 1"],
        correctAnswer: 0,
        explanation: "Function declarations hoist, so first f() calls the hoisted function (logs 2). Then f is reassigned, so second f() logs 1."
      },
      {
        id: "challenge-9",
        question: "What's the issue with PureComponent when passing object props?",
        options: ["No issue", "Shallow comparison doesn't detect object mutations", "Too slow", "Doesn't work"],
        correctAnswer: 1,
        explanation: "PureComponent uses shallow comparison. If you mutate an object (data.value++), the reference doesn't change, so it won't re-render."
      },
      {
        id: "challenge-10",
        question: "How do you find duplicates in an unsorted array efficiently?",
        options: ["Nested loops", "Use Set to track seen values", "Sort first", "All of the above"],
        correctAnswer: 1,
        explanation: "Using a Set to track seen values provides O(n) time complexity.\n\n**Efficient solution:**\n```javascript\nconst findDuplicate = (arr) => {\n  const seen = new Set();\n  for (let num of arr) {\n    if (seen.has(num)) return num;\n    seen.add(num);\n  }\n};\n```\n\nNested loops are O(n²), sorting is O(n log n)."
      }
    ]
  }
];

export function getRandomQuestions(module: QuizModule, count: number = 10): QuizQuestion[] {
  const shuffled = [...module.questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, module.questions.length));
}

export function getModuleById(id: string): QuizModule | undefined {
  return quizModules.find(module => module.id === id);
}
