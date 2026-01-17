import Link from "next/link";
import { QuizModule } from "../data/quiz-data";

interface ModuleCardProps {
  module: QuizModule;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link
      href={`/module/${module.id}`}
      className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-50 transition-colors group"
      aria-label={`Start ${module.title} module`}
    >
      <h2 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {module.title}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {module.description}
      </p>
      <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium" aria-hidden="true">
        Start Module →
      </div>
    </Link>
  );
}
