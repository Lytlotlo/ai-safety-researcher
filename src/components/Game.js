import React, { useState } from "react";
import { motion } from "framer-motion";
import PlayerStats from "./PlayerStats";
import MentorSelection from "./MentorSelection";
import CaseSelection from "./CaseSelection";
import ResearchJournal from "./ResearchJournal";
import SummaryScreen from "./SummaryScreen";
import "../App.css"; // Keep the main styling

function Game() {
  const [stage, setStage] = useState(0);
  const [mentor, setMentor] = useState("");
  const [caseType, setCaseType] = useState("");
  const [journal, setJournal] = useState([]);
  const [score, setScore] = useState(0);

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
  const playerLevel = levels[Math.min(Math.floor(score / 10), levels.length - 1)];

  const addToJournal = (entry) => {
    if (!journal.includes(entry)) {
      setJournal([...journal, entry]);
    }
  };

  const increaseScore = (points, entry) => {
    setScore(score + points);
    addToJournal(entry);
  };

  const nextStage = () => setStage(stage + 1);

  const restartGame = () => {
    setStage(0);
    setScore(0);
    setJournal([]);
    setMentor("");
    setCaseType("");
  };

  return (
    <motion.div className="container" initial="hidden" animate="visible" exit="hidden">
      <motion.h1>🔎 AI Safety Researcher</motion.h1>
      <PlayerStats playerLevel={playerLevel} score={score} />

      {stage === 0 && (
        <motion.div>
          <p>Welcome, researcher! You have been assigned to investigate AI-related risks.</p>
          <button onClick={nextStage}>🕵️ Start Investigation</button>
        </motion.div>
      )}

      {stage === 1 && <MentorSelection setMentor={setMentor} nextStage={nextStage} />}
      {stage === 2 && <CaseSelection mentor={mentor} setCaseType={setCaseType} increaseScore={increaseScore} nextStage={nextStage} />}

      {stage === 3 && (
        <motion.div>
          <p>You've completed your investigation! Click below to see your results.</p>
          <button onClick={nextStage}>📊 View Summary</button>
        </motion.div>
      )}

      {stage === 4 && <SummaryScreen score={score} playerLevel={playerLevel} restartGame={restartGame} />}

      <ResearchJournal journal={journal} />
    </motion.div>
  );
}

export default Game;

