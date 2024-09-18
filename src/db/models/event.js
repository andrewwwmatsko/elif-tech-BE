import { model, Schema } from 'mongoose';

import { handleSaveError } from './hooks.js';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

eventSchema.post('save', handleSaveError);

export const EventCollection = model('event', eventSchema);
