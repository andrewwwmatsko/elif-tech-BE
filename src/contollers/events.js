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

  res.json({
    status: 200,
    message: 'The event was successfully found!',
    data: event,
  });
};

export const getEventByNameController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const event = await getEventByName({
    title: req.body,
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  res.json({
    status: 200,
    message: 'The event was successfully found!',
    data: event,
  });
};
