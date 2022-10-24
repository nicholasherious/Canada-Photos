import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;

import { getPhoto } from './services/unsplash.js';

const delay = 5 * 60 * 60 * 1000; // 5 Hours

const timer = () => {
  getPhoto();
  setTimeout(timer, delay);
};

timer();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/time', (req, res) => {
  res.send('What are you doing here?');
});

app.listen(PORT, () => {
  console.log(`Canada Photos is Running`);
});
