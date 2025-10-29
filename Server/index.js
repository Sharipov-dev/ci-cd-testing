import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import sequelize from './db.js';


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()) ;
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'Server is running successfully!' });
});

(async () => {
    try { 
        await sequelize.authenticate();
        console.log('Database connected successfully');

        await sequelize.sync();
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

