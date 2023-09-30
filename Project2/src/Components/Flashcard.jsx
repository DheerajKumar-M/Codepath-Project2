import React, { useState } from 'react';
import './Flashcard.css'; 

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

    
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className={`flashcard ${showAnswer ? 'show-answer' : ''}`} onClick={toggleAnswer}>
      <div className={`card ${showAnswer ? 'show-answer' : ''}`}>
        <div className="card-text">
          {showAnswer ? answer : question}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
