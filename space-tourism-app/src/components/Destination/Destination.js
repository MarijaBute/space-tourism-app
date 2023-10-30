import './destination.css'
import jsonData from "./../../starter-code/data.json"
import moonImage1 from "./image-moon.png"

export default function Destination() {
    const moonImage = jsonData.destinations[0].images.png
    const moonDescription = jsonData.destinations[0].description


    return (
        <div className="destination-background">
            <div className="destination-container">
                <div className="destination-content">
                    <div className="destination-header">
                        <span className="destination-header-number">01</span>
                        <span className="destination-header-text"> PICK YOUR DESTINATION</span>
                    </div>
                    <div className="destination-content-container">
                        <div className="destination-planet-image">
                            <img src={moonImage1} alt="moon"/>
                        </div>
                        <div className="destination-text-content">
                            <nav>
                                <ul className="destination-nav-menu">
                                    <li className='destination-nav-title'>MOON</li>
                                    <li className='destination-nav-title'>MARS</li>
                                    <li className='destination-nav-title'>EUROPA</li>
                                    <li className='destination-nav-title'>TITAN</li>
                                </ul>
                            </nav>
                            <h1 className="destination-title">MOON</h1>
                            <p className='destination-description'>{moonDescription}</p>
                            <div className="destination-distance-travel">
                                <div className="destination-block">
                                    <div className="destination-headers">
                                        AVG. DISTANCE
                                    </div>
                                    <div className="destination-numbers">
                                        384,400 KM
                                    </div>
                                </div>
                                <div className="destination-block">
                                    <div className="destination-headers">
                                        EST. TRAVEL TIME
                                    </div>
                                    <div className="destination-numbers">
                                        3 DAYS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
