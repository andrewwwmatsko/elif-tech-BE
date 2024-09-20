import createHttpError from 'http-errors';
import { getEventById } from '../services/events.js';
import { subscribe } from '../services/subscribers.js';

import { getEventParticipants } from '../services/subscribers.js';

export const signUpSubscriberController = async (req, res) => {
  const { eventId } = req.params;

  const event = await getEventById(eventId);

  if (!event) {
    throw createHttpError(404, `Event with id=${eventId} not found`);
  }

  const subscriber = await subscribe({ ...req.body, eventId });

  res.status(201).json({
    status: 201,
    message: 'Subscribed successfully',
    data: subscriber,
  });
};

export const getEventParticipantsControlller = async (req, res) => {
  const { eventId } = req.params;

  const event = await getEventById(eventId);

  if (!event) {
    throw createHttpError(404, `Event with id=${eventId} not found`);
  }

  const participants = await getEventParticipants(eventId);

  if (participants.length < 1) {
    res.json({
      status: 200,
      message: 'There are no participants yet',
    });
  }

  res.json({
    status: 200,
    message: 'Participants found',
    data: participants,
  });
};
