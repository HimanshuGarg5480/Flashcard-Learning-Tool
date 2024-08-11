import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Flashcard = sequelize.define('Flashcard', {
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Flashcard;