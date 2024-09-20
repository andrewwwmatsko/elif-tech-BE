import { Router } from 'express';

import {
  getAllEventsController,
  getEventByIdController,
} from '../contollers/events.js';
import {
  getEventParticipantsControlller,
  signUpSubscriberController,
} from '../contollers/subscribers.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';

import { isValidId } from '../middlewares/isValidId.js';

import { subscriberValidation } from '../validation/subscribers.js';

const eventRouter = Router();

eventRouter.get('/', ctrlWrapper(getAllEventsController));

eventRouter.get('/:eventId', isValidId, ctrlWrapper(getEventByIdController));

eventRouter.get(
  '/:eventId/participants',
  isValidId,
  ctrlWrapper(getEventParticipantsControlller),
);

eventRouter.post(
  '/:eventId',
  isValidId,
  validateBody(subscriberValidation),
  ctrlWrapper(signUpSubscriberController),
);

export default eventRouter;
