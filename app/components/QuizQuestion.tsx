"use client";

import { useState, useEffect, useRef } from "react";
import { QuizQuestion as QuizQuestionType } from "../data/quiz-data";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedAnswer: number) => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [question.id]);

  const handleSelect = (index: number) => {
    if (selectedAnswer !== null) return; // Prevent changing answer after selection
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    onAnswer(index);
    
    // Announce feedback to screen readers
    if (feedbackRef.current) {
      feedbackRef.current.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (selectedAnswer === null) {
        handleSelect(index);
      }
    }
  };

  const isCorrect = selectedAnswer === question.correctAnswer;
  const getOptionClass = (index: number) => {
    if (selectedAnswer === null) {
      return "border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900";
    }
    if (index === question.correctAnswer) {
      return "border-green-600 dark:border-green-500 bg-green-100 dark:bg-green-900";
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "border-red-600 dark:border-red-500 bg-red-100 dark:bg-red-900";
    }
    return "border-zinc-200 dark:border-zinc-700 opacity-60";
  };

  const getTextClass = (index: number) => {
    if (selectedAnswer === null) {
      return "text-zinc-900 dark:text-zinc-50";
    }
    if (index === question.correctAnswer) {
      return "text-green-900 dark:text-green-100";
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "text-red-900 dark:text-red-100";
    }
    return "text-zinc-600 dark:text-zinc-400";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Question {questionNumber} of {totalQuestions}
        </span>
        {selectedAnswer !== null && (
          <div
            ref={feedbackRef}
            role="status"
            aria-live="polite"
            aria-atomic="true"
            tabIndex={-1}
            className={`text-sm font-semibold ${
              isCorrect
                ? "text-green-700 dark:text-green-300"
                : "text-red-700 dark:text-red-300"
            }`}
          >
            {isCorrect ? "✓ Correct" : "✗ Incorrect"}
          </div>
        )}
      </div>

      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
        {question.question}
      </h2>

      <fieldset className="space-y-3" aria-label={`Question ${questionNumber}: ${question.question}`}>
        <legend className="sr-only">Answer options</legend>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === question.correctAnswer;
          const isDisabled = selectedAnswer !== null;
          
          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={isDisabled}
              aria-label={`Option ${String.fromCharCode(65 + index)}: ${option}${isSelected ? (isCorrect ? ", correct answer" : ", incorrect answer") : ""}${isDisabled && isCorrectOption && !isSelected ? ", correct answer" : ""}`}
              aria-pressed={isSelected}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${getOptionClass(
                index
              )} ${
                selectedAnswer === null
                  ? "hover:shadow-md focus:shadow-md"
                  : "cursor-not-allowed"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                    index === question.correctAnswer && selectedAnswer !== null
                      ? "border-green-700 dark:border-green-400 bg-green-700 dark:bg-green-500 text-white"
                      : index === selectedAnswer && index !== question.correctAnswer
                      ? "border-red-700 dark:border-red-400 bg-red-700 dark:bg-red-500 text-white"
                      : "border-zinc-400 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800"
                  }`}
                  aria-hidden="true"
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={`${getTextClass(index)} flex-1`}>
                  {option}
                </span>
              </div>
            </button>
          );
        })}
      </fieldset>

      {showExplanation && question.explanation && (
        <div
          role="region"
          aria-label="Explanation"
          className={`mt-4 p-4 rounded-lg ${
            isCorrect
              ? "bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-700"
              : "bg-blue-50 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700"
          }`}
        >
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
            Explanation:
          </p>
          <p className={`text-sm ${
            isCorrect
              ? "text-green-900 dark:text-green-100"
              : "text-zinc-700 dark:text-zinc-300"
          }`}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
