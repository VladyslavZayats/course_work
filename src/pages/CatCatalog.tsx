import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CatCard from '../components/CatCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 32px;
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SearchInput = styled.input`
  max-width: 300px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`;


const CatCatalog: React.FC = () => {
  const cats = useSelector((state: RootState) => state.cat.cats);
  const [query, setQuery] = useState('');

  const filteredCats = cats.filter(cat =>
    cat.code.toString().includes(query.toLowerCase()) ||
    cat.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <h1>HTTP Cat Catalog</h1>
        <SearchInput
          type="text"
          placeholder="Search code or description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link to="/add">+ Add New Cat</Link>
      </Header>
      <Grid>
        {filteredCats.map(cat => (
          <CatCard key={cat.code} code={cat.code} description={cat.description} />
        ))}
      </Grid>
    </Container>
  );
};

export default CatCatalog;
