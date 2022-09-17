
import express from 'express'
const app = express();
const port = 3000;

import { getPhoto } from './services/unsplash.js'




// getPhoto()
// postTweet()

setInterval(getPhoto, 5*60*60*1000)

app.listen(port, () => {
  console.log(`Canada Photos listening on port ${port}`);
});
