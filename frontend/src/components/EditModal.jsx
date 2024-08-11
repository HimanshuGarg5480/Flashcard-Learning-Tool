import axios from "axios";
import React, { useState } from "react";

const EditModal = ({question, answer, id, setModalOpen,flashcards,setFlashcards,setEditingFlashcard}) => {
    const [questionInput,setQuestionInput]=useState(question);
    const [answerInput,setAnswerInput]=useState(answer);

    const handleEdit = ()=>{
        axios
        .put(`http://localhost:5000/api/flashcards/${id}`, {"question":questionInput,"answer":answerInput})
        .then((response) => {
          setFlashcards(
            flashcards.map((fc) => (fc.id === id ? response.data : fc))
          );
          setEditingFlashcard({ });
        })
        .catch((error) => console.error("Error updating flashcard:", error));

        setModalOpen(false);
    }
  return (
    <>
      <div
        className="fixed z-10 overflow-y-auto top-40 sm:top-20 w-full left-0"
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-slate-500 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label className="font-medium text-gray-200">question</label>
              <input
                type="text"
                className="w-full text-blue-950 outline-none rounded p-2 mt-2 mb-3"
                value={questionInput}
                onChange={(e)=>{setQuestionInput(e.target.value)}}
              />
              <label className="font-medium text-gray-200">answer</label>
              <input
                type="text"
                className="w-full text-blue-950 outline-none rounded p-2 mt-2 mb-3"
                value={answerInput}
                onChange={(e)=>{setAnswerInput(e.target.value)}}
              />
            </div>
            <div className="px-4 py-3 text-right">
              <button
                type="button"
                className="py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700 mr-2"
                onClick={()=>{setModalOpen(false)}}
              >
                <i className="fas fa-times"></i> Cancel
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500"
                onClick={handleEdit}
              >
                <i className="fas fa-plus"></i> Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
