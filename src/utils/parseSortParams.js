import { sortOrder } from '../constants/events.js';

const parseSortOrder = (sortOrderQuery) => {
  const isKnownOrder = sortOrder.includes(sortOrderQuery);
  if (isKnownOrder) return sortOrderQuery;
  return sortOrder[0];
};

const parseSortBy = (sortBy) => {
  const keyOfEvents = ['_id', 'title', 'date', 'organizer'];

  if (keyOfEvents.includes(sortBy)) {
    return sortBy;
  }
  return '_id';
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortOBy = parseSortBy(sortBy);

  return {
    sortBy: parsedSortOBy,
    sortOrder: parsedSortOrder,
  };
};
