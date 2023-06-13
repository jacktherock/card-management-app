import React from 'react';

const Filters = ({ searchTerm, handleSearch, cardTypeFilter, handleCardTypeFilter }) => {
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Search by card name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <select value={cardTypeFilter} onChange={handleCardTypeFilter}>
                <option value="all">All Types</option>
                <option value="burner">Burner</option>
                <option value="subscription">Subscription</option>
            </select>
        </div>
    );
};

export default Filters;
