
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';
import Crew from './components/Crew/Crew';
import Destination from './components/Destination/Destination';

function App() {
  return (
    <>
    {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} /> 
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
