import createHttpError from 'http-errors';

import {
  getAllEvents,
  getEventById,
  getEventByName,
} from '../services/events.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getAllEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const events = await getAllEvents({
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  res.json({
    status: 200,
    message: 'Successfully found events!',
    data: events,
  });
};

export const getEventByIdController = async (req, res) => {
  const { eventId } = req.params;

  const event = await getEventById(eventId);

  if (!event) {
    throw createHttpError(404, `Event with id=${eventId} not found`);
  }

  res.json({
    status: 200,
    message: 'The event was successfully found!',
    data: event,
  });
};

export const getEventByNameController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const { title } = req.body;

  const events = await getEventByName({
    title,
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  if (events.data.length < 1) {
    res.status(404).json({
      status: 404,
      message: 'There are no such events',
    });
  }

  res.json({
    status: 200,
    message: 'The events was successfully found!',
    data: events,
  });
};
