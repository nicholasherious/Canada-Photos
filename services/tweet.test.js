import {expect, jest, test} from '@jest/globals';

import { postTweet, makeTweet} from './tweet'

const userInfo = {
    location: { name: "test location"},
    description: "This is a test title"
}

const buffer = null

test('receives title', () => {
    expect(makeTweet(userInfo, buffer)).toBeDefined()
})

jest.mock("./tweet");

it("mocks entire module", () => {
  expect(makeTweet(userInfo, buffer)).toBeTruthy();

});

