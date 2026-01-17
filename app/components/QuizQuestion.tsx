"use client";

import { useState, useEffect } from "react";
import { QuizQuestion as QuizQuestionType } from "../data/quiz-data";
import TextWithCode from "./TextWithCode";

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
    
    // Announce feedback to screen readers (aria-live handles this automatically)
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
      return "border-green-700 dark:border-green-400 bg-green-200 dark:bg-green-950";
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "border-red-700 dark:border-red-400 bg-red-200 dark:bg-red-950";
    }
    return "border-zinc-200 dark:border-zinc-700 opacity-60";
  };

  const getTextClass = (index: number) => {
    if (selectedAnswer === null) {
      return "text-zinc-900 dark:text-zinc-50";
    }
    if (index === question.correctAnswer) {
      return "text-green-950 dark:text-green-50";
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "text-red-950 dark:text-red-50";
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
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className={`text-sm font-semibold ${
              isCorrect
                ? "text-green-800 dark:text-green-200"
                : "text-red-800 dark:text-red-200"
            }`}
          >
            {isCorrect ? "✓ Correct" : "✗ Incorrect"}
          </div>
        )}
      </div>

      <div className="mb-6">
        <TextWithCode
          text={question.question}
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
        />
      </div>

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
                  : "cursor-not-allowed opacity-75"
              }`}
              aria-disabled={isDisabled}
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
              ? "bg-green-100 dark:bg-green-950/50 border-2 border-green-400 dark:border-green-600"
              : "bg-blue-100 dark:bg-blue-950/50 border-2 border-blue-400 dark:border-blue-600"
          }`}
        >
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
            Explanation:
          </p>
          <div className={`text-sm ${
            isCorrect
              ? "text-green-950 dark:text-green-50"
              : "text-zinc-800 dark:text-zinc-200"
          }`}>
            <TextWithCode text={question.explanation || ""} />
          </div>
        </div>
      )}
    </div>
  );
}
