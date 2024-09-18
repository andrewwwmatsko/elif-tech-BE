import { getEventById } from '../services/events.js';
import { subscribe } from '../services/subscribers.js';

export const signUpSubscriberController = async (req, res) => {
  const subscriber = await subscribe(req.body);

  res.status(201).json({
    status: 201,
    message: 'Subscribed successfully',
    data: subscriber,
  });
};
