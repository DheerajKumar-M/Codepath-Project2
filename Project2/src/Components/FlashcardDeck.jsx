import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css'
function FlashcardDeck({ cards }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const previousCard = () => {
        setCurrentCardIndex((prevIndex) => prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1);
    };


    return (
        <div className="flashcard-deck">
            <div>
                <Flashcard question={cards[currentCardIndex].question} answer={cards[currentCardIndex].answer} />
            </div>
            <div className='button'>
                <button onClick={previousCard}>Previous</button>
                <button onClick={nextCard}>Next</button>
            </div>
        </div>
    );
}

export default FlashcardDeck;
