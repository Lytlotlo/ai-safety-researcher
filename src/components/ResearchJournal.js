import React from "react";
import { motion } from "framer-motion";

function ResearchJournal({ journal }) {
  return (
    <motion.div className="journal">
      <h2>📖 Research Journal</h2>
      {journal.length === 0 ? <p>No entries yet.</p> : 
        <ul>
          {journal.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      }
    </motion.div>
  );
}

export default ResearchJournal;
