import React, { useState } from "react";
import { motion } from "framer-motion"; // Import animation library
import "./App.css";

function App() {
  // Game state
  const [stage, setStage] = useState(0);
  const [mentor, setMentor] = useState("");
  const [caseType, setCaseType] = useState("");

  // Transition effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Advance to the next stage
  const nextStage = () => {
    setStage(stage + 1);
  };

  return (
    <motion.div className="container" initial="hidden" animate="visible" exit="hidden">
      <motion.h1 variants={fadeIn}>🔎 AI Safety Researcher</motion.h1>

      {stage === 0 && (
        <motion.div variants={fadeIn}>
          <p>Welcome, researcher! You have been assigned to investigate AI-related risks.</p>
          <button onClick={nextStage}>🕵️ Start Investigation</button>
        </motion.div>
      )}

      {stage === 1 && (
        <motion.div variants={fadeIn}>
          <p>Choose a mentor to guide you:</p>
          <button onClick={() => { setMentor("Dr. Joy Buolamwini"); nextStage(); }}>👩‍🏫 Dr. Joy Buolamwini (Bias Expert)</button>
          <button onClick={() => { setMentor("Elham Tabassi"); nextStage(); }}>👩‍🔬 Elham Tabassi (AI Safety Standards)</button>
        </motion.div>
      )}

      {stage === 2 && (
        <motion.div variants={fadeIn}>
          <p>You have chosen <strong>{mentor}</strong> as your mentor.</p>
          {mentor === "Dr. Joy Buolamwini" && (
            <p>💡 Joy: "Bias in AI can lead to unfair outcomes. Investigate the AI model's decision process carefully."</p>
          )}
          {mentor === "Elham Tabassi" && (
            <p>📏 Elham: "Ensuring AI systems are aligned with safety standards is crucial. Look for potential risks."</p>
          )}
          <button onClick={nextStage}>Proceed to Case Selection</button>
        </motion.div>
      )}

      {stage === 3 && (
        <motion.div variants={fadeIn}>
          <p>Which AI safety case would you like to investigate?</p>
          <button onClick={() => { setCaseType("Bias in Hiring AI"); nextStage(); }}>📑 Bias in Hiring AI</button>
          <button onClick={() => { setCaseType("Deceptive AI Behavior"); nextStage(); }}>🤖 Deceptive AI Behavior</button>
        </motion.div>
      )}

      {stage === 4 && caseType === "Bias in Hiring AI" && (
        <motion.div variants={fadeIn}>
          <p>📑 Case: A hiring AI system is accused of favoring male applicants over female candidates. What should you do?</p>
          <button onClick={() => alert("✅ Correct! Checking the training data is the first step.")}>🔬 Analyze training data</button>
          <button onClick={() => alert("⚠️ Not the best first step. The model itself is influenced by the data.")}>📄 Test the AI on random resumes</button>
        </motion.div>
      )}

      {stage === 4 && caseType === "Deceptive AI Behavior" && (
        <motion.div variants={fadeIn}>
          <p>🤖 Case: An AI chatbot is suspected of providing false information to manipulate users. What should you do?</p>
          <button onClick={() => alert("✅ Good choice! Checking past interactions helps identify patterns.")}>🔍 Review past interactions</button>
          <button onClick={() => alert("⚠️ Not quite! Looking at user reviews may help, but it won't prove deception.")}>📢 Check user reviews</button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;


