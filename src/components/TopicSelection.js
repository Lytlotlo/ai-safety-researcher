import React from "react";
import { motion } from "framer-motion";

function TopicSelection({ setTopic, nextStage }) {
  const aiSafetyTopics = [
    "AI Alignment",
    "AI Robustness",
    "Interpretability",
    "Fairness & Bias",
    "Adversarial Attacks",
    "Misinformation Detection",
    "AI Governance",
    "Value Learning",
    "Scalable Oversight",
    "AI Policy & Regulation",
    "AI Cybersecurity",
    "Autonomous Weapons",
    "Human-AI Interaction",
    "Long-term AI Risks"
  ];

  return (
    <motion.div className="topic-selection">
      <h2>📚 Select a Research Topic</h2>
      <p>Choose an AI Safety topic to research:</p>
      {aiSafetyTopics.map((topic, index) => (
        <button key={index} onClick={() => { setTopic(topic); nextStage(); }}>
          📖 {topic}
        </button>
      ))}
    </motion.div>
  );
}

export default TopicSelection;
