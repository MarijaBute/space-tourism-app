import './technology.css';
import { useState } from 'react';
import { data } from '../data';

export default function Technology() {
    const technology = data.technology
    const [selectedTechnology, setSelectedTechnology] = useState(technology[0])
    const [activeButtonIndex, setActiveButtonIndex] = useState(0)

function handleTechnologySelect (index) {
        setSelectedTechnology (technology[index])
        setActiveButtonIndex(index)
}

  return (
    <div className="technology-container">
      <div className="technology-content">
        <div className="technology-header">
            <span className="technology-header-number">03</span>
            <span className="technology-header-text"> SPACE LAUNCH 101</span>
        </div>
        <div className='technology-content-container'>
            <div className='technology-buttons'>
                <div><button className={`technology-button ${activeButtonIndex === 0 ? "technology-button-active" : ""}`} onClick={() => handleTechnologySelect(0)}> 1 </button></div>
                <div><button className={`technology-button ${activeButtonIndex === 1 ? "technology-button-active" : ""}`} onClick={() => handleTechnologySelect(1)}> 2 </button></div>
                <div><button className={`technology-button ${activeButtonIndex === 2 ? "technology-button-active" : ""}`} onClick={() => handleTechnologySelect(2)}> 3 </button></div>
            </div>
            <div className='technology-text'>
                <p className='technology-terminology'>THE TERMINOLOGY...</p>
                <h1 className='technology-name'>{selectedTechnology.name}</h1>
                <p className='technology-description'>{selectedTechnology.description}</p>
            </div>
            <div>
                <img src={selectedTechnology.images.portrait} alt={selectedTechnology.name} className='technology-img'/>
            </div>
        </div>
      </div>
    </div>
  )
}