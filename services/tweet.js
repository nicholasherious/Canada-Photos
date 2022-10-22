import { TwitterApi, EUploadMimeType } from 'twitter-api-v2';
import { config } from '../environment.js'

const client = new TwitterApi({
  appKey: config.appKey,
  appSecret: config.appSecret,
  accessToken: config.accessToken,
  accessSecret: config.accessSecret,
});

export const postTweet = async (userInfo, buffer) => {
  try {
    const mediaIds = await Promise.all([
      client.v1.uploadMedia(buffer, { mimeType: EUploadMimeType.Jpeg }),
    ]);

    let tweetTitle = userInfo.description;

    if (tweetTitle === null) {
      tweetTitle = userInfo.location.title;
    }

    if (tweetTitle === null) {
      tweetTitle = userInfo.user.location;
    }

    console.log(mediaIds);
    const { data: createdTweet } = await client.v2.tweet(
      `${tweetTitle} | credit: ${userInfo.user.name} #photography #canada #photos #nature`,
      { media: { media_ids: mediaIds } }
    );
    console.log('Tweet', createdTweet.id, ':', createdTweet.text);
  } catch (error) {
    console.log(error);
  }
};
