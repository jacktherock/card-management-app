import React from 'react';

const CardData = () => {
  const data = {
    data: [
      {
        name: 'Mixmax',
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: {
          value: 100,
          currency: 'SGD'
        },
        available_to_spend: {
          value: 1000,
          currency: 'SGD'
        },
        card_type: 'burner',
        expiry: '9 Feb',
        limit: 100,
        status: 'active'
      },
      {
        name: 'Quickbooks',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: {
          value: 50,
          currency: 'SGD'
        },
        available_to_spend: {
          value: 250,
          currency: 'SGD'
        },
        card_type: 'subscription',
        limit: 10,
        status: 'active'
      }
    ],
    page: 1,
    per_page: 10,
    total: 100
  };

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
};

export default CardData;
