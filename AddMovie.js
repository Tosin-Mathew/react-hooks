import React, { useState } from 'react';
import './AddMovie.css';

const AddMovie = ({ onAddMovie }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev,
      [name]: name === 'rating' ? Math.min(5, Math.max(0, Number(value))) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title.trim() && newMovie.posterURL.trim()) {
      onAddMovie({
        ...newMovie,
        id: Date.now() // Simple ID generation
      });
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: 0
      });
      setIsFormOpen(false);
    }
  };

  return (
    <div className="add-movie">
      <button 
        onClick={() => setIsFormOpen(!isFormOpen)}
        className="toggle-form-btn"
      >
        {isFormOpen ? 'Cancel' : '➕ Add New Movie'}
      </button>

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="movie-form">
          <h3>Add New Movie</h3>
          
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleInputChange}
              required
              placeholder="Movie title..."
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={newMovie.description}
              onChange={handleInputChange}
              placeholder="Movie description..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Poster URL *</label>
            <input
              type="url"
              name="posterURL"
              value={newMovie.posterURL}
              onChange={handleInputChange}
              required
              placeholder="https://example.com/poster.jpg"
            />
          </div>

          <div className="form-group">
            <label>Rating (0-5)</label>
            <input
              type="number"
              name="rating"
              value={newMovie.rating}
              onChange={handleInputChange}
              min="0"
              max="5"
              step="0.1"
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Movie
          </button>
        </form>
      )}
    </div>
  );
};

export default AddMovie;
