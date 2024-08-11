import { Sequelize } from "sequelize";

const sequelize = new Sequelize('flashcards_db', 'root', 'pass123', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;