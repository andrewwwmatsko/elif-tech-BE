import { EventCollection } from '../db/models/event.js';

import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllEvents = async ({ page, perPage }) => {
  const skip = (page - 1) * perPage;

  const eventsQuery = EventCollection.find();

  const [eventsCount, events] = await Promise.all([
    EventCollection.find().merge(eventsQuery).countDocuments(),
    eventsQuery.skip(skip).limit(perPage),
  ]);

  const parsePaginationData = calculatePaginationData(
    eventsCount,
    page,
    perPage,
  );

  return {
    data: events,
    page,
    perPage,
    totalItems: eventsCount,
    ...parsePaginationData,
  };
};

export const getEventById = async (eventId) => {
  const event = await EventCollection.findById(eventId);
  return event;
};
