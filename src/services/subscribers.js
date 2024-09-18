import createHttpError from 'http-errors';
import { SubscribersCollection } from '../db/models/subscriber.js';

export const subscribe = async (payload) => {
  const { email } = payload;

  const subscriber = await SubscribersCollection.findOne({ email });

  if (subscriber) {
    throw createHttpError(409, 'This email has already been registered.');
  }

  const newSubscriber = await SubscribersCollection.create(payload);

  return newSubscriber;
};
