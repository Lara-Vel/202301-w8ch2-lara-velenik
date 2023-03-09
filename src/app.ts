import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});
app.use(express.json());

export default app;
