import { subscribe } from '../services/subscribers.js';

import { getEventParticipants } from '../services/subscribers.js';

export const signUpSubscriberController = async (req, res) => {
  const { eventId } = req.params;

  const subscriber = await subscribe({ ...req.body, eventId });

  res.status(201).json({
    status: 201,
    message: 'Subscribed successfully',
    data: subscriber,
  });
};

export const getEventParticipantsControlller = async (req, res) => {
  const { eventId } = req.params;

  const participants = await getEventParticipants(eventId);

  res.json({
    status: 200,
    message: 'Participants found',
    data: participants,
  });
};
