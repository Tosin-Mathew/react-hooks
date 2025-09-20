import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

// Sample initial movies
const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a C.E.O.',
    posterURL: 'https://images.unsplash.com/photo-1489599102910-59206b8ca314?w=400',
    rating: 4.8
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterURL: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400',
    rating: 4.9
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    posterURL: 'https://images.unsplash.com/photo-1489599102910-59206b8ca314?w=400',
    rating: 4.7
  }
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({
    title: '',
    rating: 0
  });

  const addMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  const deleteMovie = (movieId) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬 Movie Collection</h1>
        <p>Manage your favorite movies with ease</p>
      </header>

      <main className="App-main">
        <AddMovie onAddMovie={addMovie} />
        <Filter 
          filterTitle={filters.title}
          filterRating={filters.rating}
          onFilterChange={handleFilterChange}
        />
        <MovieList 
          movies={movies}
          onDeleteMovie={deleteMovie}
          filterTitle={filters.title}
          filterRating={filters.rating}
        />
      </main>
    </div>
  );
}

export default App;
