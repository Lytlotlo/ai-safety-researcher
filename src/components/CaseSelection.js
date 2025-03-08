import React from "react";
import { motion } from "framer-motion";

function CaseSelection({ selectedTopic, setCaseType, increaseScore, nextStage }) {
  const caseStudies = {
    "AI Alignment": [
      { question: "🎯 Why is AI alignment important?", answer: "AI must align with human values to avoid harmful outcomes." },
      { question: "🛠 How do we align AI with ethics?", answer: "Using techniques like reward modeling and inverse reinforcement learning." }
    ],
    "AI Robustness": [
      { question: "🏗 How do we make AI systems more robust?", answer: "By improving generalization, testing under diverse conditions, and stress testing models." },
      { question: "🛡 What are the risks of brittle AI models?", answer: "They can fail unpredictably in real-world situations, causing safety issues." }
    ],
    "Interpretability": [
      { question: "🔍 Why do we need AI interpretability?", answer: "Understanding AI decisions helps ensure fairness and safety." },
      { question: "📊 How can we understand black-box models?", answer: "Using techniques like SHAP values, attention maps, and probing methods." }
    ],
    "Fairness & Bias": [
      { question: "📊 How does bias form in AI?", answer: "Bias often comes from historical inequalities embedded in data." },
      { question: "🔄 How can we reduce AI bias?", answer: "We need diverse datasets, fairness constraints, and ethical oversight." }
    ],
    "Adversarial Attacks": [
      { question: "⚔️ What are adversarial attacks?", answer: "They trick AI models into making incorrect predictions using manipulated inputs." },
      { question: "🛡 How can we defend AI against adversarial inputs?", answer: "By using adversarial training and robust feature extraction." }
    ],
    "Misinformation Detection": [
      { question: "📰 How does AI spread misinformation?", answer: "AI-generated content can amplify false narratives through social media." },
      { question: "🔍 How do we detect AI-generated misinformation?", answer: "We use NLP techniques, fact-checking datasets, and adversarial training." }
    ],
    "AI Governance": [
      { question: "⚖️ Why is AI governance important?", answer: "It ensures that AI systems are developed responsibly and transparently." },
      { question: "📜 What policies help regulate AI?", answer: "Guidelines like the EU AI Act and IEEE AI Ethics principles provide frameworks." }
    ],
    "Value Learning": [
      { question: "🤖 How does AI learn values?", answer: "Through reinforcement learning, imitation learning, and inverse reinforcement learning." },
      { question: "🎯 What are the risks of incorrect value alignment?", answer: "AI may optimize the wrong objectives, leading to dangerous outcomes." }
    ],
    "Scalable Oversight": [
      { question: "🕵️ What is scalable oversight in AI?", answer: "It ensures that AI safety measures remain effective as models scale up." },
      { question: "📊 How do we monitor advanced AI behavior?", answer: "Through interpretability tools, auditing, and anomaly detection." }
    ],
    "AI Policy & Regulation": [
      { question: "⚖️ How do we regulate AI systems?", answer: "Through government policies, ethical guidelines, and industry best practices." },
      { question: "🏛 What are the challenges in AI policy-making?", answer: "Balancing innovation with safety, and enforcing global regulations." }
    ],
    "AI Cybersecurity": [
      { question: "🔐 What are the cybersecurity risks of AI?", answer: "AI models can be hacked, manipulated, or used for cyber threats." },
      { question: "🔍 How do we protect AI systems from cyber threats?", answer: "By implementing robust encryption, adversarial testing, and threat monitoring." }
    ],
    "Autonomous Weapons": [
      { question: "🚀 What are the risks of AI in military use?", answer: "AI-driven weapons could lead to loss of human oversight and accountability." },
      { question: "☠️ Should we ban autonomous weapons?", answer: "Many experts argue for global bans, while some advocate for controlled AI in defense." }
    ],
    "Human-AI Interaction": [
      { question: "🤝 How does AI impact human decision-making?", answer: "AI can assist but also introduce biases in decision-making processes." },
      { question: "🧠 What are the ethical concerns in AI-human collaboration?", answer: "Transparency, trust, and fairness in AI-assisted decisions are key issues." }
    ],
    "Long-term AI Risks": [
      { question: "🏗 What are the long-term risks of AI?", answer: "Unaligned AI, loss of control, and economic displacement are major concerns." },
      { question: "🔮 Can we predict AI's future impact?", answer: "Scenario analysis and forecasting techniques help anticipate AI risks." }
    ]
  };

  return (
    <motion.div>
      <p>🔎 You are researching: <strong>{selectedTopic}</strong></p>

      {caseStudies[selectedTopic] ? (
        <>
          {caseStudies[selectedTopic].map((study, index) => (
            <button key={index} onClick={() => increaseScore(5, study.answer)}>
              {study.question}
            </button>
          ))}
        </>
      ) : (
        <p>⚠️ No case studies available for this topic.</p>
      )}

      <button onClick={nextStage}>Proceed to Next Stage</button>
    </motion.div>
  );
}

export default CaseSelection;

