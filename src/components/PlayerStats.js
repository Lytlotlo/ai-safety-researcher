import React from "react";

function PlayerStats({ playerLevel, score }) {
  return (
    <div className="player-info">
      <h2>🏆 Level: {playerLevel}</h2>
      <p>⭐ Score: {score} points</p>
    </div>
  );
}

export default PlayerStats;
