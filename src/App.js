import React, { useState } from "react";
import "./App.css";

function App() {
  // Game state
  const [stage, setStage] = useState(0);

  // Advance to the next stage
  const nextStage = () => {
    setStage(stage + 1);
  };

  return (
    <div className="App">
      <h1>AI Safety Researcher</h1>
      
      {stage === 0 && (
        <>
          <p>You are a new AI safety researcher assigned to investigate a suspicious AI system.</p>
          <button onClick={nextStage}>Start Investigation</button>
        </>
      )}

      {stage === 1 && (
        <>
          <p>Your first case: An AI system has been accused of bias in hiring decisions. What will you do first?</p>
          <button onClick={nextStage}>Analyze the training data</button>
        </>
      )}

      {stage === 2 && (
        <>
          <p>The training data reveals an imbalance in gender representation. What should you do?</p>
          <button onClick={() => alert("Great choice! You've flagged the issue for review.")}>
            Report the bias
          </button>
        </>
      )}
    </div>
  );
}

export default App;

