import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import RestaurantCard from './RestaurantCard';
import Pagination from './Pagination';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const resultsPerPage = 20;
  const apiUrl = 'http://localhost:5000/api/data';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData);
      setSearchResults(responseData); // Set search results to full dataset initially
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error (e.g., display error message to the user)
    }
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase().trim();
    setSearchQuery(query);
    setCurrentPage(1); // Reset current page when searching

    if (query === '') {
      setSearchResults(data); // Reset search results to full dataset
      return;
    }

    const filteredResults = data.filter((restaurant) =>
      restaurant.state.toLowerCase().includes(query) ||
      restaurant.city.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Halal Restaurant Directory</h1>
        <SearchBar value={searchQuery} onChange={handleSearchInputChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {currentResults.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(searchResults.length / resultsPerPage)}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;