import * as dotenv from 'dotenv'
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
      }

export const config = {
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
    unsplashKey: process.env.UNSPLASH_KEY
}

