import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  // Game state
  const [stage, setStage] = useState(0);
  const [mentor, setMentor] = useState("");
  const [caseType, setCaseType] = useState("");
  const [journal, setJournal] = useState([]); // Research Journal
  const [score, setScore] = useState(0); // Score System

  // Define levels based on score
  const levels = [
    "AI Enthusiast",
    "Beginner Researcher",
    "Junior Researcher",
    "AI Ethics Analyst",
    "AI Investigator",
    "AI Safety Officer",
    "Senior AI Safety Expert",
    "AI Researcher"
  ];

  // Determine player level
  const playerLevel = levels[Math.min(Math.floor(score / 10), levels.length - 1)];

  // Animation settings for smooth transitions
  const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  // Function to add journal entries
  const addToJournal = (entry) => {
    if (!journal.includes(entry)) {
      setJournal([...journal, entry]);
    }
  };

  // Function to increase score
  const increaseScore = (points, entry) => {
    setScore(score + points);
    addToJournal(entry);
  };

  // Advance to the next stage
  const nextStage = () => {
    setStage(stage + 1);
  };

  return (
    <motion.div className="container" initial="hidden" animate="visible" exit="hidden">
      <motion.h1 variants={fadeIn}>🔎 AI Safety Researcher</motion.h1>

      {/* Display Player Score and Level */}
      <motion.div className="player-info" variants={fadeIn}>
        <h2>🏆 Level: {playerLevel}</h2>
        <p>⭐ Score: {score} points</p>
      </motion.div>

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
          <button onClick={() => increaseScore(10, "Checking the training data is the first step in detecting AI bias.")}>🔬 Analyze training data</button>
          <button onClick={() => increaseScore(5, "Testing AI outputs is useful, but understanding bias requires looking at data sources.")}>📄 Test the AI on random resumes</button>
        </motion.div>
      )}

      {stage === 4 && caseType === "Deceptive AI Behavior" && (
        <motion.div variants={fadeIn}>
          <p>🤖 Case: An AI chatbot is suspected of providing false information to manipulate users. What should you do?</p>
          <button onClick={() => increaseScore(10, "Reviewing past interactions helps identify patterns of deception in AI systems.")}>🔍 Review past interactions</button>
          <button onClick={() => increaseScore(5, "Checking user reviews may reveal concerns, but it doesn’t provide direct proof of deception.")}>📢 Check user reviews</button>
        </motion.div>
      )}

      {/* Research Journal */}
      <motion.div className="journal" variants={fadeIn}>
        <h2>📖 Research Journal</h2>
        {journal.length === 0 ? <p>No entries yet.</p> : 
          <ul>
            {journal.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        }
      </motion.div>
    </motion.div>
  );
}

export default App;


