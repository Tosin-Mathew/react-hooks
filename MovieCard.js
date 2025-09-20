import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onDelete }) => {
  const { title, description, posterURL, rating } = movie;

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">⭐</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star">✨</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={posterURL} 
          alt={title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x300?text=No+Poster';
          }}
        />
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
        
        <div className="movie-rating">
          <div className="stars">{renderStars(rating)}</div>
          <span className="rating-text">({rating}/5)</span>
        </div>
        
        <button 
          className="delete-btn"
          onClick={() => onDelete(movie.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
