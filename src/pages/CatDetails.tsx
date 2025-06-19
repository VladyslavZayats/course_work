import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CatDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const cat = useSelector((state: RootState) =>
    state.cat.cats.find(c => c.code === Number(code))
  );

  if (!cat) {
    return (
      <div style={{ padding: 32, textAlign: 'center' }}>
        <img
          src="https://http.cat/404"
          alt="HTTP 404 Not Found"
          style={{ width: 350, maxWidth: '100%', borderRadius: 16, marginBottom: 24 }}
        />
        <h2>404 – Cat Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: '#1976d2', display: 'inline-block', marginTop: 24 }}>
          ← Back to catalog
        </Link>
      </div>
    );
  }

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
      <Link to="/" style={{ color: '#1976d2', display: 'inline-block', marginTop: 24 }}>
        ← Back to catalog
      </Link>
    </div>
  );
};

export default CatDetails;
