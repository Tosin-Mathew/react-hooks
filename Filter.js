import React from 'react';
import './Filter.css';

const Filter = ({ filterTitle, filterRating, onFilterChange }) => {
  const handleTitleChange = (e) => {
    onFilterChange({ title: e.target.value, rating: filterRating });
  };

  const handleRatingChange = (e) => {
    onFilterChange({ title: filterTitle, rating: Number(e.target.value) });
  };

  const clearFilters = () => {
    onFilterChange({ title: '', rating: 0 });
  };

  return (
    <div className="filter">
      <h2>Filter Movies</h2>
      
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="title-filter">Title:</label>
          <input
            id="title-filter"
            type="text"
            placeholder="Search by title..."
            value={filterTitle}
            onChange={handleTitleChange}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="rating-filter">Minimum Rating:</label>
          <select
            id="rating-filter"
            value={filterRating}
            onChange={handleRatingChange}
            className="filter-select"
          >
            <option value={0}>All Ratings</option>
            <option value={1}>1+ Stars</option>
            <option value={2}>2+ Stars</option>
            <option value={3}>3+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>

        <button onClick={clearFilters} className="clear-btn">
          Clear Filters
        </button>
      </div>

      {filterTitle && (
        <p className="filter-info">
          Showing movies with title containing: "{filterTitle}"
        </p>
      )}
      
      {filterRating > 0 && (
        <p className="filter-info">
          Minimum rating: {filterRating}+ stars
        </p>
      )}
    </div>
  );
};

export default Filter;
