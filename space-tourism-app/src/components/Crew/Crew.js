import './crew.css'
import jsonData from "./../../starter-code/data.json"


export default function Crew() {
    const crewName = jsonData.crew[0].name;
    const crewDescription = jsonData.crew[0].bio;
    const crewImage = jsonData.crew[0].images.png;

    console.log(crewImage);

    return (
        <div className="crew-background">
            <div className="container">
                <div className="crew-content">
                <div className="crew-header">
                        <span className="crew-header-number">02</span>
                        <span className="crew-header-text">MEET YOUR CREW</span>
                    </div>
                    <div className="crew-content-container">
                        <div className="crew-text-content">
                            <h1 className="crew-name">{crewName}</h1>
                            <p className="crew-bio">{crewDescription}</p>
                        </div>
                        <div className="crew-image">
                        <img
                        src={crewImage}
                        alt="Crew image"
                        onLoad={() => console.log('Image is loaded')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}