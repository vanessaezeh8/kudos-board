import express from 'express';
import cors from 'cors';
import boardRoutes from './routes/boardRoutes.js';
import cardRoutes from './routes/cardRoutes.js';  

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Kudos Board API is up and running!');
});

app.use('/api/boards', boardRoutes);
app.use('/api/cards', cardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
