// src/components/VideoForm.jsx

import React, { useState } from 'react';

const VideoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    videoUrl: '',
    category: 'Futbol'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      videoUrl: '',
      category: 'Futbol'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="video-form">
      <label>
        Título:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Descripción:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Imagen URL:
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      </label>
      <label>
        Video URL:
        <input type="text" name="videoUrl" value={formData.videoUrl} onChange={handleChange} />
      </label>
      <label>
        Categoría:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Futbol">Futbol</option>
          <option value="MotoGP">MotoGP</option>
          <option value="Basquetball">Basquetball</option>
        </select>
      </label>
      <button type="submit">Agregar Video</button>
    </form>
  );
};

export default VideoForm;
