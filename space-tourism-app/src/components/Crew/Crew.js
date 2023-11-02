import './crew.css';
import { useState } from 'react'
import { data } from '../data'

export default function Crew() {
  const [crew] = useState(data.crew)
  const [value, setValue] = useState(0)

  const { name, role, bio, images } = crew[value]

  return (
    <div className="crew-container">
      <div className="crew-content">
          <div className="crew-header">
          <span className="crew-header-number">02</span>
          <span className="crew-header-text"> MEET YOUR CREW</span>
      </div>
        <div className="crew-content-container">
          <div className="crew-text-content">
            <h3 className='crew-role'>{role}</h3>
            <h1 className="crew-name">{name}</h1>
            <div className="crew-bio-container">
              <p className="crew-bio">{bio}</p>
            </div>
            <ul className="circles">
              {crew.map((item, index) => (
                <li key={index} className='circle'>
                  <button
                    onClick={() => setValue(index)}
                    style={{
                      backgroundColor: index === value ? '#fff' : '#808080',
                      color: index === value ? '#808080' : '#fff',
                      borderRadius: '50%',
                      border: 'none',
                      height: '15px',
                      width: '15px',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgb(72, 72, 72)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = index === value ? '#fff' : '#808080'; 
                    }}
                  >
                  </button>

                </li>
              ))}
            </ul>
          </div>
          <div className="crew-image">
            <img src={images.png} alt={name} />
          </div>
        </div>
      </div>
    </div>
  )
}