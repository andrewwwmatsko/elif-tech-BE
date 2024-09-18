import { model, Schema } from 'mongoose';

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const EventCollection = model('event', eventSchema);
