import sequelize from "./db/index.js";
import app from "./app.js";

// Sync database
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch((err) => console.error('Error syncing database:', err));



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
