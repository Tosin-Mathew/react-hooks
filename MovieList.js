import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, onDeleteMovie, filterTitle, filterRating }) => {
  // Filter movies based on title and rating
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating === 0 || movie.rating >= filterRating;
    return matchesTitle && matchesRating;
  });

  if (filteredMovies.length === 0) {
    return (
      <div className="movie-list">
        <h2>No movies found matching your criteria</h2>
      </div>
    );
  }

  return (
    <div className="movie-list">
      <h2>Movies ({filteredMovies.length})</h2>
      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onDelete={onDeleteMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
