import express from "express";
const app = express();
const PORT = process.env.PORT || PORT;

import { getPhoto } from "./services/unsplash.js";

// getPhoto()
// postTweet()

setInterval(getPhoto, 5 * 60 * 60 * 1000);

app.get("/", (req, res) => {
  res.send("What are you doing here?");
});

app.listen(PORT, () => {
  console.log(`Canada Photos is Running`);
});
