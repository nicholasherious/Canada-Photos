import express from 'express';
const app = express();
const PORT = process.env.port || 3000;

import { getPhoto } from './services/unsplash.js';

// getPhoto()
// postTweet()

setInterval(getPhoto, 5 * 60 * 60 * 1000);

app.listen(PORT, () => {
  console.log(`Canada Photos listening on port ${PORT}`);
});
