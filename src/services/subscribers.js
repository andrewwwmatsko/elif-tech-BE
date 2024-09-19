import createHttpError from 'http-errors';
import { SubscribersCollection } from '../db/models/subscriber.js';
import { EventCollection } from '../db/models/event.js';

export const subscribe = async (payload) => {
  const { email, eventId } = payload;

  const subscriber = await SubscribersCollection.findOne({ email, eventId });

  if (subscriber) {
    throw createHttpError(409, 'This email has already been registered.');
  }

  const event = await EventCollection.findOne({ _id: eventId });
  if (!event) {
    throw createHttpError(401, 'Event not found.');
  }

  const newSubscriber = await SubscribersCollection.create(payload);

  return newSubscriber;
};

export const getEventParticipants = async (eventId) => {
  const subscribers = await SubscribersCollection.find({ eventId });

  return subscribers;
};
