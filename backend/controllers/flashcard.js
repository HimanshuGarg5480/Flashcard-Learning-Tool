import app from "../app.js";
import Flashcard from "../model/flashcard.model.js"
// API endpoints
const getAllCards = async (req, res) => {
    const flashcards = await Flashcard.findAll();
    res.json(flashcards);
};

const createCard = async (req, res) => {
    const { question, answer } = req.body;
    const newFlashcard = await Flashcard.create({ question, answer });
    res.json(newFlashcard);
};

const updateCard = async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    const flashcard = await Flashcard.findByPk(id);
    if (flashcard) {
        flashcard.question = question;
        flashcard.answer = answer;
        await flashcard.save();
        res.json(flashcard);
    } else {
        res.status(404).json({ message: 'Flashcard not found' });
    }
};

const deleteCard = async (req, res) => {
    const { id } = req.params;
    const flashcard = await Flashcard.findByPk(id);
    if (flashcard) {
        await flashcard.destroy();
        res.json({ message: 'Flashcard deleted' });
    } else {
        res.status(404).json({ message: 'Flashcard not found' });
    }
};

export {getAllCards,createCard,updateCard,deleteCard}