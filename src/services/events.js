import { sortOrder } from '../constants/events.js';
import { EventCollection } from '../db/models/event.js';

import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllEvents = async ({
  page = 1,
  perPage = 12,
  sortOrder = sortOrder[0],
  sortBy = '_id',
}) => {
  const skip = (page - 1) * perPage;

  const eventsQuery = EventCollection.find();

  const [eventsCount, events] = await Promise.all([
    EventCollection.find().merge(eventsQuery).countDocuments(),
    eventsQuery
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder }),
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

export const getEventByName = async ({
  title,
  page = 1,
  perPage = 12,
  sortOrder = sortOrder[0],
  sortBy = '_id',
}) => {
  const skip = (page - 1) * perPage;

  const eventsQuery = EventCollection.find(title);

  const [eventsCount, events] = await Promise.all([
    EventCollection.find().merge(eventsQuery).countDocuments(),
    eventsQuery
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder }),
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
