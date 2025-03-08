import React, { useState } from "react";
import { motion } from "framer-motion";
import PlayerStats from "./PlayerStats";
import TopicSelection from "./TopicSelection";
import CaseSelection from "./CaseSelection";
import ResearchJournal from "./ResearchJournal";
import SummaryScreen from "./SummaryScreen";
import "../App.css"; 

function Game() {
  const [stage, setStage] = useState(0);
  const [selectedTrack, setTrack] = useState(""); // Track selection now used
  const [selectedTopic, setTopic] = useState("");
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
    setTrack(""); // Reset track
    setTopic(""); // Reset topic
  };

  return (
    <motion.div className="container" initial="hidden" animate="visible" exit="hidden">
      <motion.h1>🔎 AI Safety Researcher</motion.h1>
      <PlayerStats playerLevel={playerLevel} score={score} />

      {stage === 0 && (
        <motion.div>
          <TopicSelection setTrack={setTrack} setTopic={setTopic} nextStage={nextStage} />
          {selectedTrack && <p>🎓 Research Track: <strong>{selectedTrack}</strong></p>}
        </motion.div>
      )}

      {stage === 2 && <CaseSelection selectedTopic={selectedTopic} increaseScore={increaseScore} nextStage={nextStage} />}

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


