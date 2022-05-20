import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="bg-pink-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/param" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
