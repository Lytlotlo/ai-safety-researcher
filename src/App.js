import React, { useState } from "react";
import "./App.css";

function App() {
  // Game state
  const [stage, setStage] = useState(0);
  const [mentor, setMentor] = useState("");

  // Advance to the next stage
  const nextStage = () => {
    setStage(stage + 1);
  };

  return (
    <div className="App">
      <h1>AI Safety Researcher</h1>
      
      {stage === 0 && (
        <>
          <p>Welcome, researcher! You are assigned to investigate an AI system.</p>
          <button onClick={nextStage}>Start Investigation</button>
        </>
      )}

      {stage === 1 && (
        <>
          <p>Your first case: An AI system has been accused of bias in hiring. A mentor will guide you. Who do you want as your mentor?</p>
          <button onClick={() => { setMentor("Dr. Joy Buolamwini"); nextStage(); }}>Dr. Joy Buolamwini (Bias Expert)</button>
          <button onClick={() => { setMentor("Elham Tabassi"); nextStage(); }}>Elham Tabassi (AI Safety Standards)</button>
        </>
      )}

      {stage === 2 && (
        <>
          <p>You have chosen <strong>{mentor}</strong> as your mentor.</p>
          {mentor === "Dr. Joy Buolamwini" && (
            <p>Joy: "Bias in AI comes from imbalanced training data. Your first step should be analyzing the dataset."</p>
          )}
          {mentor === "Elham Tabassi" && (
            <p>Elham: "AI safety standards ensure that models are fair and robust. Start by checking the data quality."</p>
          )}
          <button onClick={nextStage}>Analyze the training data</button>
        </>
      )}

      {stage === 3 && (
        <>
          <p>The training data reveals an imbalance in gender representation. What should you do?</p>
          <button onClick={() => alert("Good job! You've flagged the bias for review.")}>Report the bias</button>
        </>
      )}
    </div>
  );
}

export default App;

