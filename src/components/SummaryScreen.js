import React from "react";
import { motion } from "framer-motion";

function SummaryScreen({ score, playerLevel, restartGame }) {
  // Determine performance message based on score
  const getMessage = () => {
    if (score >= 30) return "🚀 Amazing work! You're a top AI Safety Researcher!";
    if (score >= 20) return "🔎 Great job! You're making real progress in AI safety.";
    if (score >= 10) return "📖 Good start! Keep learning and improving.";
    return "🧠 Keep trying! Every mistake is a learning opportunity.";
  };

  return (
    <motion.div className="summary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>🏆 Final Results</h2>
      <p>🔹 Level: <strong>{playerLevel}</strong></p>
      <p>⭐ Score: <strong>{score} points</strong></p>
      <p>{getMessage()}</p>
      <button onClick={restartGame}>🔄 Play Again</button>
    </motion.div>
  );
}

export default SummaryScreen;
