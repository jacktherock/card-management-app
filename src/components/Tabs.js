import React from 'react';

const Tabs = ({ activeTab, handleTabChange }) => {
    return (
        <div className="tabs">
            {['your', 'all', 'blocked'].map((tabItem) => (
                <button
                    key={tabItem}
                    className={`tab-button ${activeTab === tabItem ? 'active' : ''}`}
                    onClick={() => handleTabChange(tabItem)}
                >
                    {tabItem.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
