import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import RegionPage from './components/pages/RegionPage';

function App() {
  return (
    <div className="bg-pink-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:countryName" element={<RegionPage />} />
      </Routes>
    </div>
  );
}

export default App;
