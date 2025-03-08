import React, { useState } from "react";
import { motion } from "framer-motion";

function TopicSelection({ setTrack, setTopic, nextStage }) {
  const [selectedTrack, setSelectedTrack] = useState("");
  
  // Research tracks with their respective AI safety topics
  const researchTracks = {
    "🧠 Mechanistic Interpretability": [
      "Neuron Activation Analysis",
      "Sparse Autoencoders in LLMs",
      "Feature Visualization",
      "Model Steering & Editing"
    ],
    "⚖️ AI Governance & Security": [
      "AI Regulations & Policy Risks",
      "Autonomous AI Decision-Making",
      "AI Auditing & Safety Compliance",
      "Ethical AI Development"
    ],
    "🌍 Social Sciences & AI Impact": [
      "Misinformation & AI-Generated Content",
      "Bias in AI Decision-Making",
      "AI & Human Psychology",
      "AI’s Role in Global Societal Shifts"
    ]
  };

  return (
    <motion.div className="topic-selection">
      <h2>📚 Select a Research Track</h2>
      <p>Choose an AI Safety research track to specialize in:</p>

      {/* Step 1: Select a research track */}
      {Object.keys(researchTracks).map((track, index) => (
        <button key={index} onClick={() => setSelectedTrack(track)}>
          {track}
        </button>
      ))}

      {/* Step 2: Select a topic within the chosen track */}
      {selectedTrack && (
        <motion.div>
          <h3>🔎 Track Selected: {selectedTrack}</h3>
          <p>Now, choose a specific research topic:</p>

          {researchTracks[selectedTrack].map((topic, index) => (
            <button key={index} onClick={() => { setTrack(selectedTrack); setTopic(topic); nextStage(); }}>
              {topic}
            </button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default TopicSelection;

