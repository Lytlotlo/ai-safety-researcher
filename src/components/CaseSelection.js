import React from "react";
import { motion } from "framer-motion";

function CaseSelection({ mentor, setCaseType, increaseScore, nextStage }) {
  return (
    <motion.div>
      <p>You have chosen <strong>{mentor}</strong> as your mentor.</p>

      {mentor === "Dr. Joy Buolamwini" && (
        <>
          <p>💡 Joy: "Bias in AI can lead to unfair outcomes. Investigate the AI model's decision process carefully."</p>
          <button onClick={() => increaseScore(5, "Bias often comes from historical inequalities embedded in data.")}>📊 How does bias form?</button>
          <button onClick={() => increaseScore(5, "We need diverse datasets, fairness constraints, and ethical oversight.")}>🔄 How can we reduce bias?</button>
        </>
      )}

      {mentor === "Elham Tabassi" && (
        <>
          <p>📏 Elham: "Ensuring AI systems are aligned with safety standards is crucial. Look for potential risks."</p>
          <button onClick={() => increaseScore(5, "AI standards help regulate fairness, robustness, and transparency.")}>📜 What are AI safety standards?</button>
          <button onClick={() => increaseScore(5, "Developers should test models under various conditions before deployment.")}>🛠 How do we test AI safety?</button>
        </>
      )}

      <button onClick={nextStage}>Proceed to Case Selection</button>
    </motion.div>
  );
}

export default CaseSelection;
