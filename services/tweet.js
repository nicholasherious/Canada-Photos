import { TwitterApi, EUploadMimeType } from 'twitter-api-v2';
import truncate from 'lodash/truncate.js';
import lowerCase from 'lodash/lowerCase.js';
import { config } from '../environment.js';

const client = new TwitterApi({
  appKey: config.appKey,
  appSecret: config.appSecret,
  accessToken: config.accessToken,
  accessSecret: config.accessSecret,
});

export const postTweet = async (tweetInfo, buffer) => {
  // Upload images to Twitter

  try {
    const mediaIds = await Promise.all([
      client.v1.uploadMedia(buffer, { mimeType: EUploadMimeType.Jpeg }),
    ]);

    // Post Tweet

    const { data: createdTweet } = await client.v2.tweet(
      `${tweetInfo?.tweetTitle} | 📸 ${tweetInfo?.credit?.name} ${
        tweetInfo?.credit?.twitterUser
          ? `@${tweetInfo?.credit?.twitterUser}`
          : ''
      } #photography ${
        tweetInfo?.location?.city ? `#${tweetInfo?.location?.city}` : ''
      } #canada `,
      { media: { media_ids: mediaIds } }
    );
    console.log('Tweet', createdTweet.id, ':', createdTweet.text);
    return createdTweet;
  } catch (error) {
    console.log(error);
  }
};

export const makeTweet = async (userInfo, buffer) => {
  // Save user information from unsplash

  const credit = {
    name: userInfo?.user?.name,
    twitterUser: userInfo?.user?.twitter_username,
  };

  const photoDescription = {
    description: userInfo?.description,
    default: 'Canada is so amazing!',
  };

  const location = {
    name: lowerCase(userInfo?.location?.name),
    country: lowerCase(userInfo?.location?.country),
    city: lowerCase(userInfo?.location?.city).replace(/\s/g, ''),
  };

  let tweetTitle = truncate(photoDescription?.description, {
    length: 150,
    separator: ' ',
  });

  // Check for image description on unsplash

  if (!tweetTitle) {
    tweetTitle = location?.name;
  } else if (!location?.name) {
    tweetTitle = photoDescription?.default;
  }

  // Return all the info and call postTweet

  const tweetInfo = {
    tweetTitle,
    location,
    photoDescription,
    credit,
  };

  if (buffer) {
    postTweet(tweetInfo, buffer);
  }
 
  return tweetInfo
  
  
};
