import { expect, jest, test } from '@jest/globals';

import { postTweet, makeTweet } from './tweet';

const userInfo = {
  location: {
    name: 'test location',
    country: 'Canada',
    city: 'toronto canada',
  },
  description: 'This is a test title',
  user: { name: 'test name', twitter_username: 'testuser' },
};

const buffer = null;

test('receives title', () => {
  expect(makeTweet(userInfo, buffer)).toBeDefined();
});

test('receives location', () => {
  return makeTweet(userInfo, buffer).then((data) => {
  expect(data).toMatchObject({location: {name: 'test location', city: 'torontocanada', country: 'canada'}});
  });
});

test('check credit', () => {
  return makeTweet(userInfo, buffer).then((data) => {
  expect(data).toMatchObject({credit: {name: 'test name', twitterUser: 'testuser'}});
  });
});

jest.mock('./tweet');

it('mocks entire module', () => {
  expect(makeTweet(userInfo, buffer)).toBeTruthy();
});
