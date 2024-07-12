// src/App.jsx

import React, { useState } from 'react';
import CardVideo from './components/CardVideo';
import EditModal from './components/EditModal';
import VideoForm from './components/VideoForm';
import './styles.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleAdd = (video) => {
    setVideos([...videos, { ...video, id: Date.now() }]);
  };

  const handleRemove = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const handleEdit = (id) => {
    setCurrentVideo(videos.find(video => video.id === id));
    setIsModalOpen(true);
  };

  const handleSave = (updatedVideo) => {
    setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
  };

  const categorizedVideos = {
    Futbol: videos.filter(video => video.category === 'Futbol'),
    MotoGP: videos.filter(video => video.category === 'MotoGP'),
    Basquetball: videos.filter(video => video.category === 'Basquetball')
  };

  return (
    <div className="app">
      <h1>Aluraflix</h1>
      <VideoForm onAdd={handleAdd} />
      <div className="video-section">
        <h2>Futbol</h2>
        <div className="video-grid">
          {categorizedVideos.Futbol.map(video => (
            <CardVideo
              key={video.id}
              {...video}
              onRemove={() => handleRemove(video.id)}
              onEdit={() => handleEdit(video.id)}
            />
          ))}
        </div>
      </div>
      <div className="video-section">
        <h2>MotoGP</h2>
        <div className="video-grid">
          {categorizedVideos.MotoGP.map(video => (
            <CardVideo
              key={video.id}
              {...video}
              onRemove={() => handleRemove(video.id)}
              onEdit={() => handleEdit(video.id)}
            />
          ))}
        </div>
      </div>
      <div className="video-section">
        <h2>Basquetball</h2>
        <div className="video-grid">
          {categorizedVideos.Basquetball.map(video => (
            <CardVideo
              key={video.id}
              {...video}
              onRemove={() => handleRemove(video.id)}
              onEdit={() => handleEdit(video.id)}
            />
          ))}
        </div>
      </div>
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={currentVideo}
      />
    </div>
  );
};

export default App;
