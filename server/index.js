import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// Initializing our express
const app = express();

//Calling our middleware
app.use(cors());
app.use(express.json());

// 
app.get('/', async (req, res) => {
  res.send('Hello from sever index');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
