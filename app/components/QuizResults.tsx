"use client";

import Link from "next/link";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onReviewModule?: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  onReviewModule,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassing = percentage >= 70;

  const handleReviewModule = () => {
    if (onReviewModule) {
      onReviewModule();
    }
  };

  return (
    <div className="text-center space-y-6 py-8">
      <div className="mb-8">
        <div
          className={`text-6xl font-bold mb-4 ${
            isPassing
              ? "text-green-700 dark:text-green-300"
              : "text-blue-700 dark:text-blue-300"
          }`}
          aria-label={`Score: ${percentage} percent`}
        >
          {percentage}%
        </div>
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          {isPassing ? "Great Job!" : "Keep Learning!"}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          You got {score} out of {totalQuestions} questions correct
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 text-white font-semibold rounded-lg transition-colors"
          aria-label="Retake the quiz"
        >
          Retake Quiz
        </button>
        <button
          onClick={handleReviewModule}
          className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 text-zinc-900 dark:text-zinc-50 font-semibold rounded-lg transition-colors"
          aria-label="Review module content and explainer"
        >
          Review Module
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 text-zinc-900 dark:text-zinc-50 font-semibold rounded-lg transition-colors"
          aria-label="Return to all modules"
        >
          All Modules
        </Link>
      </div>
    </div>
  );
}
