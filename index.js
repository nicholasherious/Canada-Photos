import express from 'express';
const app = express();
const PORT = process.env.PORT || PORT;

import { getPhoto } from './services/unsplash.js';

// getPhoto()
// postTweet()

const timer = () => {
  getPhoto();
  setTimeout(timer, 5 * 60 * 60 * 1000);
};

timer();

app.get('/', (req, res) => {
  res.send('What are you doing here?');
});

app.listen(PORT, () => {
  console.log(`Canada Photos is Running`);
});
