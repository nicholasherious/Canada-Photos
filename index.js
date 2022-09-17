import express from 'express';
const app = express();
const PORT = 3000;

import { getPhoto } from './services/unsplash.js';

// getPhoto()
// postTweet()

setInterval(getPhoto, 5 * 60 * 60 * 1000);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Canada Photos is Running`);
});
