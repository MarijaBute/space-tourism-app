import './destination.css'
import React, { useState } from 'react';
import { data } from '../data';

export default function Destination() {
  const destinations = data.destinations
  const [selectedDestination, setSelectedDestination] = useState(destinations[0])

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination)
  }

  return (
    <div className="destination-container">
      <div className='destination-container-area'>
        <div className="destination-content">
          <div className="destination-header">
            <span className="destination-header-number">01</span>
            <span className="destination-header-text"> PICK YOUR DESTINATION</span>
          </div>
          
          <div className="destination-content-container">
            <div className="destination-planet-image">
              <img src={selectedDestination.images.png} alt={selectedDestination.name} />
            </div>

            <div className="destination-text-content">
              <nav>
                <ul className="destination-nav-menu">
                  {destinations.map((destination, index) => (
                    <li
                      key={index}
                      className={`destination-nav-title ${destination === selectedDestination ? 'active' : ''}`}
                      onClick={() => handleDestinationSelect(destination)}>
                      {destination.name}
                    </li>
                  ))}
                </ul>
              </nav>
              <h1 className="destination-title">{selectedDestination.name}</h1>
              <p className="destination-description">{selectedDestination.description}</p>
              <div className="destination-distance-travel">
                <div className="destination-block">
                  <div className="destination-headers">AVG. DISTANCE</div>
                  <div className="destination-numbers">{selectedDestination.distance}</div>
                </div>
                <div className="destination-block">
                  <div className="destination-headers">EST. TRAVEL TIME</div>
                  <div className="destination-numbers">{selectedDestination.travel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
