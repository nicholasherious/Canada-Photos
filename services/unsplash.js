import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import axios from 'axios';
import { makeTweet } from './tweet.js';

import { config } from '../environment.js';

const unsplash = createApi({
  accessKey: config.unsplashKey,
  fetch: nodeFetch,
});

export const getPhoto = async () => {
  try {
    const randomPhoto = await unsplash.photos.getRandom({ query: 'canada' });
    const rawPhoto = randomPhoto.response.urls.regular;
    const response = await axios.get(rawPhoto, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'base64');
    const userInfo = randomPhoto.response;

    // makeTweet(userInfo, buffer)
    makeTweet(userInfo, buffer);
    // console.log(userInfo);
  } catch (error) {
    console.log('Rate exceeded on Unsplash', error);
  }
};
