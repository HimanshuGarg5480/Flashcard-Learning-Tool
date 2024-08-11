import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaSave } from "react-icons/fa";
import EditModal from "./EditModal";

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({
    question: "",
    answer: "",
  });
  const [editingFlashcard, setEditingFlashcard] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://flashcard-learning-tool-1.onrender.com/api/flashcards`)
      .then((response) => setFlashcards(response.data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  const handleAddOrUpdate = () => {
    axios
      .post(`https://flashcard-learning-tool-1.onrender.com/api/flashcards`, newFlashcard)
      .then((response) => {
        setFlashcards([...flashcards, response.data]);
        setNewFlashcard({ question: "", answer: "" });
      })
      .catch((error) => console.error("Error adding flashcard:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://flashcard-learning-tool-1.onrender.com/api/flashcards/${id}`)
      .then(() => setFlashcards(flashcards.filter((fc) => fc.id !== id)))
      .catch((error) => console.error("Error deleting flashcard:", error));
  };

  const handleEdit = (id) => {
    const flashcard = flashcards.find((fc) => fc.id === id);
    setEditingFlashcard({
      question: flashcard.question,
      answer: flashcard.answer,
      id: id,
    });
    setModalOpen(true);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Flashcard Dashboard
        </h2>
        <div className="mb-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Question"
            className="w-full sm:w-auto border text-gray-800 border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-300 transition-all"
            value={newFlashcard.question}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, question: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Answer"
            className="w-full sm:w-auto border text-gray-800 border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-300 transition-all"
            value={newFlashcard.answer}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, answer: e.target.value })
            }
          />
          <button
            className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
            onClick={handleAddOrUpdate}
          >
            {editingFlashcard.id ? (
              <>
                <FaSave className="mr-2" /> Update Flashcard
              </>
            ) : (
              <>
                <FaPlus className="mr-2" /> Add Flashcard
              </>
            )}
          </button>
        </div>
        <ul className="h-[390px] bg-blue-600 dark:bg-slate-800 rounded-xl overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {flashcards.map((fc) => (
            <li
              key={fc.id}
              className="bg-white dark:bg-gray-800 p-6 h-fit rounded-lg shadow-lg hover:shadow-xl transition-shadow flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                  {fc.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{fc.answer}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-yellow-500 hover:text-yellow-600 transition-all"
                  onClick={() => handleEdit(fc.id)}
                >
                  <FaEdit size={20} />
                </button>
                <button
                  className="text-red-500 hover:text-red-600 transition-all"
                  onClick={() => handleDelete(fc.id)}
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {modalOpen && (
        <EditModal
          question={editingFlashcard.question}
          answer={editingFlashcard.answer}
          id={editingFlashcard.id}
          setModalOpen={setModalOpen}
          flashcards={flashcards}
          setFlashcards={setFlashcards}
          setEditingFlashcard={setEditingFlashcard}
        />
      )}
    </>
  );
};

export default Dashboard;
