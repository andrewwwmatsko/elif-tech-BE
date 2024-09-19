import { model, Schema } from 'mongoose';

import { backgroundInfo, emailRegexp } from '../../constants/subscribers.js';

const subscriberSchema = new Schema(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'event',
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: emailRegexp,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    backgroundInfo: {
      type: String,
      enum: backgroundInfo,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const SubscribersCollection = model('subscribers', subscriberSchema);
