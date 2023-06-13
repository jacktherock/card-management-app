# Card Management App

This is a Card Management application built with React that allows users to view and manage their cards. The application retrieves card data from a mock API and provides features such as filtering, searching, and pagination.

## Features

- Display cards based on different tabs: "Your", "All", and "Blocked"
- Two types of cards: "Burner" and "Subscription"
- Show card expiry for burner cards and limit for subscription cards
- Filter cards by card type (burner or subscription)
- Search cards by name
- Infinite scroll for fetching more data (10 records per call)

## Getting Started

1. Clone the repository: `git clone https://github.com/jacktherock/card-management-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the application in your browser: `http://localhost:3000`

## Code Structure

The code for the Card Management application is organized into several files and components:

### CardData Component
The CardData component is responsible for fetching and managing the card data. It uses the fetchCards function from the api.js file to retrieve the card data based on the selected tab, search term, card type filter, page, and owner ID. It handles the pagination and infinite scroll functionality to load more cards as the user scrolls. The fetched card data is stored in the cards state variable and passed down to the CardList component for rendering.

### CardList Component
The CardList component receives the cards prop, which contains an array of card objects. It iterates over the card data and renders individual Card components for each card. The Card component receives a card prop, which represents a single card object. It extracts the necessary information from the card object and renders the card's name, budget name, card type, expiry (for burner cards), or limit (for subscription cards).

### Filters Component
The Filters component is responsible for rendering the search bar and card type filter dropdown. It receives the searchTerm and cardTypeFilter state variables as props and sets their values based on user input. The searchTerm is updated when the user types in the search bar, and the cardTypeFilter is updated when the user selects an option from the dropdown. The updated values are then used to trigger the data fetching process in the CardData component.

### Tabs Component
The Tabs component is responsible for rendering the tabs (Your, All, Blocked) and handling the tab selection. It receives the tab state variable as a prop and sets its value based on user selection. When a tab is clicked, the handleTabChange function is called to update the tab state variable and trigger the data fetching process in the CardData component.

#### These components work together to display the card data, provide filtering and search functionality, and handle user interactions.

- `App.js`: The main component that handles the application state and renders other components.
- `Card.js`: A reusable component that represents an individual card item.
- `api.js`: Contains the `fetchCards` function that simulates fetching card data from an API.
- `data.js`: Contains the mock data structure used by the `fetchCards` function.

## Implementation Details

### Data Fetching

The `fetchCards` function in `api.js` retrieves card data based on the provided parameters: `tabType`, `searchTerm`, `cardTypeFilter`, `page`, and `ownerId`. It filters the data based on the selected tab, search term, and card type. It also handles pagination by returning a subset of the filtered data based on the page and the configured number of cards per page.

### Filtering and Searching

The application allows users to filter cards by card type and search for cards by name. The selected card type filter is applied to the displayed cards, and the search term is used to filter cards by matching the card name.

### Pagination and Infinite Scroll

The application implements infinite scroll to fetch more data as the user scrolls. Initially, 10 cards are loaded, and when the user reaches the bottom of the page, additional cards are fetched and appended to the existing list. This process continues until all the available cards have been loaded.