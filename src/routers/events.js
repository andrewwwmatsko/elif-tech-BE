import { Router } from 'express';

import {
  getAllEventsController,
  getEventByIdController,
} from '../contollers/events.js';
import { signUpSubscriberController } from '../contollers/subscribers.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';

import { subscriberValidation } from '../validation/subscribers.js';

const eventRouter = Router();

eventRouter.get('/', ctrlWrapper(getAllEventsController));

eventRouter.get('/:eventId', ctrlWrapper(getEventByIdController));

eventRouter.post(
  '/:eventId',
  validateBody(subscriberValidation),
  ctrlWrapper(signUpSubscriberController),
);

export default eventRouter;
