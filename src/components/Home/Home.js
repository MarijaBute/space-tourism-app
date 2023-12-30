import './home.css'
import { useNavigate  } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="home-container">
            <div className='home-container-area'>
                <div className="home-content-container">
                    <div className="home-content">
                        <h3>SO, YOU WANT TO TRAVEL TO </h3>
                        <span>SPACE</span>
                        <p>Let’s face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the
                        edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className="home-explore-btn">
                        <button className="home-explore"
                        onClick={() => navigate("/destination")}
                        >EXPLORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
