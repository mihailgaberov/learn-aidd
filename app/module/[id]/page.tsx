"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getModuleById, getRandomQuestions, QuizQuestion } from "../../data/quiz-data";
import ModuleExplainer from "../../components/ModuleExplainer";
import QuizQuestionComponent from "../../components/QuizQuestion";
import QuizResults from "../../components/QuizResults";
import Link from "next/link";

type QuizState = "explainer" | "quiz" | "results";

export default function ModulePage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = params.id as string;
  const quizModule = getModuleById(moduleId);

  const [state, setState] = useState<QuizState>("explainer");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!quizModule) {
      router.push("/");
      return;
    }
  }, [quizModule, router]);

  if (!quizModule) {
    return null;
  }

  const handleStartQuiz = () => {
    const randomQuestions = getRandomQuestions(quizModule, 10);
    setQuestions(randomQuestions);
    setAnswers(new Array(randomQuestions.length).fill(-1));
    setCurrentQuestionIndex(0);
    setScore(0); // Reset score when starting a new quiz
    setState("quiz");
  };

  const handleAnswer = (selectedAnswer: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);

    // Check if answer is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    // Note: Auto-advance removed - user controls progression with Next button
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setState("results");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      <div id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-6" aria-label="Breadcrumb navigation">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 rounded text-sm font-medium"
            aria-label="Return to all modules"
          >
            ← Back to All Modules
          </Link>
        </nav>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8">
          {state === "explainer" && (
            <ModuleExplainer module={quizModule} onStartQuiz={handleStartQuiz} />
          )}

          {state === "quiz" && questions.length > 0 && (
            <div>
              <div className="mb-6">
                <div
                  role="progressbar"
                  aria-valuenow={currentQuestionIndex + 1}
                  aria-valuemin={1}
                  aria-valuemax={questions.length}
                  aria-label={`Quiz progress: question ${currentQuestionIndex + 1} of ${questions.length}`}
                  className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-3"
                >
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <QuizQuestionComponent
                question={questions[currentQuestionIndex]}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
              />

              {answers[currentQuestionIndex] !== -1 && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 text-white font-semibold rounded-lg transition-colors"
                    aria-label={
                      currentQuestionIndex < questions.length - 1
                        ? "Continue to next question"
                        : "View quiz results"
                    }
                  >
                    {currentQuestionIndex < questions.length - 1
                      ? "Next Question"
                      : "View Results"}
                  </button>
                </div>
              )}
            </div>
          )}

          {state === "results" && (
            <QuizResults
              score={score}
              totalQuestions={questions.length}
              onReviewModule={() => setState("explainer")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
