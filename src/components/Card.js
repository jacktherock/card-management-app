import React from 'react';

const Card = ({ card }) => {
    const { name, budget_name, card_type, expiry, limit } = card;

    return (
        <div className="card">
            <div className="card-header">
                <span className={`card-type ${card_type}`}>{card_type}</span>
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <p>{budget_name}</p>
                {card_type === 'burner' ? <p>Expiry: {expiry}</p> : <p>Limit: {limit}</p>}
            </div>
        </div>
    );
};

export default Card;
