import { quizModules } from "./data/quiz-data";
import ModuleCard from "./components/ModuleCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      <div id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Learn AIDD - Advanced JavaScript & React Quiz Platform
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Master JavaScript, TypeScript, React, Next.js, and Node.js through comprehensive quizzes. 
            Each module includes detailed explainers followed by 10 randomly selected questions from 
            a pool of 200+ questions covering fundamentals, advanced patterns, performance optimization, 
            coding challenges, and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </div>
  );
}
