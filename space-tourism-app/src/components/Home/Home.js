import Header from '../Header/Header';
import './home.css';

export default function Home() {
    return (
        <div className="home-background">
            <Header />
            <div className="container">
                <div className="home-content">
                    <h3>SO, YOU WANT TO TRAVEL TO </h3>
                    <span>SPACE</span>
                    <p>Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="explore-btn">
                    <button className="explore">EXPLORE</button>
                </div>
            </div>
        </div>
    );
}
