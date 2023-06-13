import { data } from './data';

export const fetchCards = (tabType, searchTerm, cardTypeFilter, page, ownerId) => {
  // Filter cards based on tab type and owner_id
  let filteredCards = [];
  if (tabType === 'your') {
    filteredCards = data.data.filter((card) => card.owner_id === ownerId);
  } else if (tabType === 'all') {
    filteredCards = data.data;
  }

  // Filter cards based on search term
  if (searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    filteredCards = filteredCards.filter((card) => card.name.toLowerCase().includes(searchTermLower));
  }

  // Filter cards based on card type
  if (cardTypeFilter !== 'all') {
    filteredCards = filteredCards.filter((card) => card.card_type === cardTypeFilter.toLowerCase());
  }

  // Pagination
  const perPage = data.per_page;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCards = filteredCards.slice(startIndex, endIndex);

  return {
    data: paginatedCards,
    page: page,
    per_page: perPage,
    total: filteredCards.length
  };
};
