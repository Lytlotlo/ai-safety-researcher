import React from "react";
import { motion } from "framer-motion";

function MentorSelection({ setMentor, nextStage }) {
  return (
    <motion.div>
      <p>Choose a mentor to guide you:</p>
      <button onClick={() => { setMentor("Dr. Joy Buolamwini"); nextStage(); }}>👩‍🏫 Dr. Joy Buolamwini (Bias Expert)</button>
      <button onClick={() => { setMentor("Elham Tabassi"); nextStage(); }}>👩‍🔬 Elham Tabassi (AI Safety Standards)</button>
    </motion.div>
  );
}

export default MentorSelection;
