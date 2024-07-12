// src/components/EditModal.jsx

import React, { useState } from 'react';

const EditModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
