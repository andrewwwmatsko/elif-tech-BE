export const calculatePaginationData = (eventsCount, page, perPage) => {
  const totalPages = Math.ceil(eventsCount / perPage);

  const hasNextPage = Boolean(totalPages - page);

  const hasPreviousPage = page !== 1;

  return {
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
