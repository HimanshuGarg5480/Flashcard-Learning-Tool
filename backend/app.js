import express from "express";
import cors from "cors"
import Flashcard from "./model/flashcard.model.js";
import { createCard, deleteCard, getAllCards, updateCard } from "./controllers/flashcard.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/flashcards', getAllCards);

app.post('/api/flashcards', createCard);

app.put('/api/flashcards/:id',updateCard);

app.delete('/api/flashcards/:id', deleteCard);

export default app;