import React, { useEffect, useState } from "react";
import axios from "axios";
import Flashcard from "./Flashcard";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedStates, setFlippedStates] = useState([]);

  useEffect(() => {
    axios.get('https://flashcard-learning-tool-1.onrender.com/api/flashcards')
        .then(response => {
          setFlashcards(response.data);
          setFlippedStates(new Array(response.data.length).fill(false)); // Initialize flip states
        })
        .catch(error => console.error('Error fetching flashcards:', error));
  }, []);

  const handleFlip = () => {
    setFlippedStates((prevFlippedStates) => {
      const newFlippedStates = [...prevFlippedStates];
      newFlippedStates[currentIndex] = !newFlippedStates[currentIndex];
      return newFlippedStates;
    });
  };

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      {flashcards.length > 0 && (
        <Flashcard
          key={currentIndex}
          flashcard={flashcards[currentIndex]}
          isFlipped={flippedStates[currentIndex]}
          onFlip={handleFlip}
        />
      )}

      <div className="mt-6 flex space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          onClick={prevCard}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          onClick={nextCard}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardList;
