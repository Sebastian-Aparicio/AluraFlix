// src/components/CardVideo.jsx

import React from 'react';

const CardVideo = ({ title, description, imageUrl, videoUrl, onRemove, onEdit }) => {
  const handleImageClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={title}
        className="card-image"
        onClick={handleImageClick}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="card-buttons">
        <button onClick={onEdit}>Editar</button>
        <button onClick={onRemove}>Eliminar</button>
      </div>
    </div>
  );
};

export default CardVideo;
