import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import Tabs from './components/Tabs';
import Filters from './components/Filters';
import { fetchCards } from './api/api';
import './App.css';

const App = () => {
  const [tab, setTab] = useState('your');
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [cardTypeFilter, setCardTypeFilter] = useState('all');
  // eslint-disable-next-line
  const [ownerId, setOwnerId] = useState(1);

  const handleTabChange = (tab) => {
    setTab(tab);
    setPage(1);
    setCards([]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
    setCards([]);
  };

  const handleCardTypeFilter = (event) => {
    setCardTypeFilter(event.target.value);
    setPage(1);
    setCards([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const initialCards = await fetchCards(tab, searchTerm, cardTypeFilter, page, ownerId);
      setCards(initialCards.data);
    };

    fetchData();
  }, [tab, searchTerm, cardTypeFilter, page, ownerId]);

  const fetchMoreCards = async () => {
    const newPage = page + 1;
    const newCards = await fetchCards(tab, searchTerm, cardTypeFilter, newPage, ownerId);

    if (newCards.data.length > 0) {
      setCards((prevCards) => [...prevCards, ...newCards.data]);
      setPage(newCards.page);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMoreCards();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Tabs activeTab={tab} handleTabChange={handleTabChange} />
      <Filters
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        cardTypeFilter={cardTypeFilter}
        handleCardTypeFilter={handleCardTypeFilter}
      />
      <CardList cards={cards} />
    </div>
  );
};

export default App;