import express from 'express';
const app = express();
const PORT = 3000;

import { getPhoto } from './services/unsplash.js';

// getPhoto()
// postTweet()

setInterval(getPhoto, 5 * 60 * 60 * 1000);

app.get('/', req, res => {
  res.send('What are you doing?');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Canada Photos is Running`);
});
