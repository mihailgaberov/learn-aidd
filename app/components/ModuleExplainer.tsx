import { QuizModule } from "../data/quiz-data";

interface ModuleExplainerProps {
  module: QuizModule;
  onStartQuiz: () => void;
}

export default function ModuleExplainer({ module, onStartQuiz }: ModuleExplainerProps) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
          {module.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {module.description}
        </p>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
            About This Module
          </h2>
          <div className="text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
            {module.explainer}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <button
          onClick={onStartQuiz}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
          aria-label="Start quiz with 10 questions"
        >
          Start Quiz (10 Questions)
        </button>
      </div>
    </div>
  );
}
