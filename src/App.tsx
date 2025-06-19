import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { cats } from './data/cats';
// import CatCard from './components/CatCard';
import CatCatalog from './pages/CatCatalog';
import AddCat from './pages/AddCat';
import CatDetails from './pages/CatDetails';


const NotFound: React.FC = () => (
  <div style={{ padding: 32, textAlign: 'center' }}>
    <img src="https://http.cat/404" alt="HTTP 404 Not Found" style={{ width: 350, maxWidth: '100%', borderRadius: 16, marginBottom: 24 }} />
    <h2>404 – Cat Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <a href="/" style={{ color: '#1976d2', display: 'inline-block', marginTop: 24 }}>← Back to catalog</a>
  </div>
);

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CatCatalog />} />
      <Route path="/cat/:code" element={<CatDetails />} />
      <Route path="/add" element={<AddCat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;