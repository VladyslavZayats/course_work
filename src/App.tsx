import React from 'react';
import { cats } from './data/cats';
import CatCard from './components/CatCard';

const App: React.FC = () => (
  <div style={{ padding: 32 }}>
    <h1>HTTP Cat Catalog</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cats.map(cat => (
        <CatCard key={cat.code} code={cat.code} description={cat.description} />
      ))}
    </div>
  </div>
);

export default App;