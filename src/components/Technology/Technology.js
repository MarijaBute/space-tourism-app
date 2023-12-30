import './technology.css';
import { useState, useEffect } from 'react';
import { data } from '../data';

export default function Technology() {
  const technology = data.technology;
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  function handleTechnologySelect(index) {
    setSelectedTechnology(technology[index]);
    setActiveButtonIndex(index);
  }

  useEffect(() => {
    const updateTechnology = () => {
      const currentIndex = technology.findIndex((tech) => tech === selectedTechnology);
      const nextIndex = (currentIndex + 1) % technology.length;
      setSelectedTechnology(technology[nextIndex]);
      setActiveButtonIndex(nextIndex);
    };

    const intervalId = setInterval(updateTechnology, 3000);

    return () => clearInterval(intervalId);
  }, [technology, selectedTechnology]);

  return (
    <div className="technology-container">
      <div className="technology-content">
        <div className="technology-header">
          <span className="technology-header-number">03</span>
          <span className="technology-header-text"> SPACE LAUNCH 101</span>
        </div>
        <div className="technology-content-container">
          <div className="technology-buttons">
            {technology.map((tech, index) => (
              <div key={index}>
                <button
                  className={`technology-button ${activeButtonIndex === index ? 'technology-button-active' : ''}`}
                  onClick={() => handleTechnologySelect(index)}
                >
                  {index + 1}
                </button>
              </div>
            ))}
          </div>
          <div className="technology-text">
            <p className="technology-terminology">THE TERMINOLOGY...</p>
            <h1 className="technology-name">{selectedTechnology.name}</h1>
            <p className="technology-description">{selectedTechnology.description}</p>
          </div>
          <div className="image-container">
            <img src={selectedTechnology.images.portrait} alt={selectedTechnology.name} className="technology-img" />
            <img src={selectedTechnology.images.landscape} alt={selectedTechnology.name} className="technology-img-landscape" />
          </div>
        </div>
      </div>
    </div>
  );
}
