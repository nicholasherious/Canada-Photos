import {expect, jest, test} from '@jest/globals';
import { getPhoto } from './unsplash';
import { postTweet } from '../services/tweet'

jest.mock("./unsplash", () => ({
    getPhoto: () => '1:11PM'
  }))

 