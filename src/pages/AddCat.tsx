import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCat } from '../redux/catSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AddCat: React.FC = () => {
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [example, setExample] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCat({ code: parseInt(code), description, example }));
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Add New HTTP Cat</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input type="number" value={code} placeholder="HTTP Code" onChange={e => setCode(e.target.value)} required />
        <input type="text" value={description} placeholder="Description" onChange={e => setDescription(e.target.value)} required />
        <input type="text" value={example} placeholder="Example (optional)" onChange={e => setExample(e.target.value)} />
        <button type="submit" style={{ padding: 10, cursor: 'pointer' }}>Add Cat</button>
      </form>
    </div>
  );
};

export default AddCat;
