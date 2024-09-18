import Joi from 'joi';

import { emailRegexp, backgroundInfo } from '../constants/subscribers.js';

export const subscriberValidation = Joi.object({
  fullName: Joi.string().min(3).max(50).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  birthDate: Joi.date().required(),
  backgroundInfo: Joi.string()
    .valid(...backgroundInfo)
    .required(),
});
