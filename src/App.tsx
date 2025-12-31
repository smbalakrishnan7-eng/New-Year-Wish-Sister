import React, { useState } from "react";
import { motion } from "framer-motion";

const wishes = [
  "May 2026 give you the courage to chase dreams that truly matter.",
  "A year of calm mornings, fulfilled goals, and peaceful nights awaits you.",
  "May your heart stay light even when your path grows big.",
  "2026 will celebrate your kindness and reward your strength.",
  "May your growth feel natural, not forced — like sunrise, not lightning.",
  "This year, may happiness find you in small moments and big victories.",
  "You are magic in human form — may 2026 treat you accordingly.",
  "May you rise without rushing and shine without burning out.",
  "The universe has written 2026 in your favor — trust it.",
  "Keep your softness. It is your superpower. 2026 will prove it."
];

export default function NewYearSister() {
  const [index, setIndex] = useState(-1);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const handleNext = () => {
    if (index < wishes.length - 1) {
      setIndex(index + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handleQuiz = (answer: string) => {
    const correct = "A";
    const score = answer === correct ? 1 : 0;
    setQuizScore(score);
    setTimeout(() => setShowPrediction(true), 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      {!showQuiz && !showPrediction && (
        <motion.div
          key={index}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", duration: 0.9 }}
          className="w-full max-w-xl h-[60vh] flex items-center justify-center rounded-2xl shadow-lg"
          style={{
            background: "radial-gradient(circle at center, rgba(255,215,0,0.15), transparent)"
          }}
          onClick={handleNext}
        >
          <div className="text-center px-6">
            <h1 className="text-3xl font-bold text-black mb-6 tracking-wider font-serif">
              {index === -1 ? `Happy New Year 2026, Dhivyashree` : `Wish ${index + 1}/10`}
            </h1>
            {index !== -1 && (
              <p className="text-xl text-black leading-relaxed tracking-wide">
                {wishes[index]}
              </p>
            )}
            <p className="text-sm text-black mt-8 opacity-70">Click to continue</p>
          </div>
        </motion.div>
      )}

      {showQuiz && !showPrediction && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md p-6 rounded-2xl shadow-lg text-center"
          style={{
            background: "radial-gradient(circle at center, rgba(255,215,0,0.15), transparent)"
          }}
        >
          <h2 className="text-2xl font-serif font-bold text-black mb-4">
            What is your brother’s secret power?
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {["A) Staying calm", "B) Singing", "C) Overthinking", "D) Fighting"].map(opt => (
              <button
                key={opt}
                onClick={() => handleQuiz(opt[0])}
                className="p-3 border border-black/20 rounded-2xl text-black font-medium font-serif hover:scale-[1.03] transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {showPrediction && (
        <motion.div
          initial={{ rotate: -720, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="w-full max-w-lg p-8 rounded-2xl shadow-lg text-center"
          style={{
            background: "radial-gradient(circle at center, rgba(255,215,0,0.2), transparent)"
          }}
        >
          <h2 className="text-3xl font-serif font-bold text-black mb-6 tracking-wider">
            2026 Prediction for You
          </h2>
          <p className="text-xl text-black font-serif mb-4">Quiz Score: {quizScore}/1</p>
          <p className="text-lg text-black font-serif opacity-80 mb-8">
            You know me well, sis. Now see how 2026 knows you:
          </p>
          <div className="space-y-3 text-lg font-serif text-black">
            <p>Chance of Happiness: 100%</p>
            <p>Success Probability: Extremely High</p>
            <p>Stress Level: Minimal</p>
            <p>Blessing Overflow: Guaranteed</p>
          </div>
          <p className="text-2xl font-serif font-bold text-black mt-10">
            Final Verdict: The universe favors Dhivyashree this year!
          </p>
        </motion.div>
      )}
    </div>
  );
}
