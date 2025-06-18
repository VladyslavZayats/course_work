import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { cats } from './data/cats';
import CatCard from './components/CatCard';

const CatCatalog: React.FC = () => (
  <div style={{ padding: 32 }}>
    <h1>HTTP Cat Catalog</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cats.map(cat => (
        <CatCard key={cat.code} code={cat.code} description={cat.description} />
      ))}
    </div>
  </div>
);

const CatDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const cat = cats.find(c => c.code === Number(code));
  if (!cat) return <NotFound />;
  return (
    <div style={{ padding: 32, maxWidth: 500, margin: '0 auto' }}>
      <img
        src={`https://http.cat/${cat.code}`}
        alt={`HTTP ${cat.code}`}
        style={{ width: '100%', borderRadius: 16, marginBottom: 24 }}
      />
      <h2>HTTP {cat.code}</h2>
      <p style={{ fontSize: 18 }}>{cat.description}</p>
      {cat.example && (
        <div style={{ marginTop: 16, background: '#f9f9f9', borderRadius: 8, padding: 16 }}>
          <strong>Example:</strong>
          <div style={{ marginTop: 8, color: '#555' }}>{cat.example}</div>
        </div>
      )}
      <a href="/" style={{ color: '#1976d2', display: 'inline-block', marginTop: 24 }}>← Back to catalog</a>
    </div>
  );
};

const NotFound: React.FC = () => (
  <div style={{ padding: 32, textAlign: 'center' }}>
    <img
      src="https://http.cat/404"
      alt="HTTP 404 Not Found"
      style={{ width: 350, maxWidth: '100%', borderRadius: 16, marginBottom: 24 }}
    />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;