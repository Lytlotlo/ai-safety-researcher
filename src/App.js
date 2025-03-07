import React, { useState } from "react";
import "./App.css";

function App() {
  // Game state
  const [stage, setStage] = useState(0);
  const [mentor, setMentor] = useState("");
  const [caseType, setCaseType] = useState("");

  // Advance to the next stage
  const nextStage = () => {
    setStage(stage + 1);
  };

  return (
    <div className="container">
      <h1>🔎 AI Safety Researcher</h1>
      
      {stage === 0 && (
        <>
          <p>Welcome, researcher! You have been assigned to investigate AI-related risks.</p>
          <button onClick={nextStage}>🕵️ Start Investigation</button>
        </>
      )}

      {stage === 1 && (
        <>
          <p>Choose a mentor to guide you:</p>
          <button onClick={() => { setMentor("Dr. Joy Buolamwini"); nextStage(); }}>👩‍🏫 Dr. Joy Buolamwini (Bias Expert)</button>
          <button onClick={() => { setMentor("Elham Tabassi"); nextStage(); }}>👩‍🔬 Elham Tabassi (AI Safety Standards)</button>
        </>
      )}

      {stage === 2 && (
        <>
          <p>You have chosen <strong>{mentor}</strong> as your mentor.</p>
          {mentor === "Dr. Joy Buolamwini" && (
            <p>💡 Joy: "Bias in AI can lead to unfair outcomes. Investigate the AI model's decision process carefully."</p>
          )}
          {mentor === "Elham Tabassi" && (
            <p>📏 Elham: "Ensuring AI systems are aligned with safety standards is crucial. Look for potential risks."</p>
          )}
          <button onClick={nextStage}>Proceed to Case Selection</button>
        </>
      )}

      {stage === 3 && (
        <>
          <p>Which AI safety case would you like to investigate?</p>
          <button onClick={() => { setCaseType("Bias in Hiring AI"); nextStage(); }}>📑 Bias in Hiring AI</button>
          <button onClick={() => { setCaseType("Deceptive AI Behavior"); nextStage(); }}>🤖 Deceptive AI Behavior</button>
        </>
      )}

      {stage === 4 && caseType === "Bias in Hiring AI" && (
        <>
          <p>📑 Case: A hiring AI system is accused of favoring male applicants over female candidates. What should you do?</p>
          <button onClick={() => alert("✅ Correct! Checking the training data is the first step.")}>🔬 Analyze training data</button>
          <button onClick={() => alert("⚠️ Not the best first step. The model itself is influenced by the data.")}>📄 Test the AI on random resumes</button>
        </>
      )}

      {stage === 4 && caseType === "Deceptive AI Behavior" && (
        <>
          <p>🤖 Case: An AI chatbot is suspected of providing false information to manipulate users. What should you do?</p>
          <button onClick={() => alert("✅ Good choice! Checking past interactions helps identify patterns.")}>🔍 Review past interactions</button>
          <button onClick={() => alert("⚠️ Not quite! Looking at user reviews may help, but it won't prove deception.")}>📢 Check user reviews</button>
        </>
      )}
    </div>
  );
}

export default App;


