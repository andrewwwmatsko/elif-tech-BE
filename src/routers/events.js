import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllEventsController } from '../contollers/events.js';

const eventRouter = Router();

eventRouter.get('/', ctrlWrapper(getAllEventsController));

export default eventRouter;
