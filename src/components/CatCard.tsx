import React from 'react';
import styled from 'styled-components';

interface CatCardProps {
  code: number;
  description: string;
}

const Card = styled.div`
  border: 1.5px solid #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  padding: 20px 16px 16px 16px;
  margin: 16px;
  width: 260px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
    border-color: #bdbdbd;
  }
`;

const CatImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 12px;
  background: #f5f5f5;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: #333;
  letter-spacing: 1px;
`;

const Desc = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
  text-align: center;
`;

const CatCard: React.FC<CatCardProps> = ({ code, description }) => (
  <Card>
    <CatImage
      src={`https://http.cat/${code}`}
      alt={`HTTP ${code}`}
      loading="lazy"
    />
    <Title>HTTP {code}</Title>
    <Desc>{description}</Desc>
  </Card>
);

export default CatCard;