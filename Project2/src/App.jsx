import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlashcardDeck from './Components/FlashcardDeck'

function App() {
  const flashcards = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'What is JSX?', answer: 'JSX is a syntax extension for JavaScript used with React for describing UI components.' },
    { question: 'What is a component?', answer: 'A component is a reusable building block for creating UI elements in React.' },
    { question: 'What is state?', answer: 'State is a mechanism for storing data within a React component.' },
    { question: 'What is props?', answer: 'Props (short for properties) are a way to pass data from parent to child components in React.' },
    { question: 'What is a hook?', answer: 'Hooks are functions that let you "hook into" React state and lifecycle features from functional components.' },
    { question: 'What is a class component?', answer: 'A class component is a JavaScript class that extends React.Component and defines a render method.' },
    { question: 'What is a functional component?', answer: 'A functional component is a JavaScript function that returns JSX.' },
    { question: 'What is the virtual DOM?', answer: 'The virtual DOM is a lightweight in-memory representation of the actual DOM, which helps React optimize updates.' },
    { question: 'What is a key prop?', answer: 'The key prop is a special attribute used by React to identify which items have changed, been added, or been removed from a list of components.' }
  ];

  return (
    <div className="App">
      <h1>ReactJS Quiz</h1>
      <h3>This quiz tests your knowledge on ReactJS</h3>
      <p>Total number of cards: {flashcards.length}</p>
      <FlashcardDeck cards={flashcards} />
    </div>
  )
}

export default App
