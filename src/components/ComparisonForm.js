import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const StyledForm = styled.form`
  display: grid;
  gap: 20px;
`;

const SelectGroup = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const CompareButton = styled.button`
  background: #ff6b6b;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    background: #ff5252;
  }
`;

const ComparisonForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    coverAmount: '',
    provider: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <FormContainer>
      <h2>Compare Funeral Plans</h2>
      <StyledForm onSubmit={handleSubmit}>
        <SelectGroup>
          <label>Your Age</label>
          <select name="age" value={formData.age} onChange={handleChange}>
            <option value="">Select your age</option>
            {Array.from({ length: 83 }, (_, i) => i + 18).map(age => (
              <option key={age} value={age}>{age} years</option>
            ))}
          </select>
        </SelectGroup>

        <SelectGroup>
          <label>Cover Amount</label>
          <select name="coverAmount" value={formData.coverAmount} onChange={handleChange}>
            <option value="">Select cover amount</option>
            {[5000, 10000, 15000, 20000, 25000, 30000].map(amount => (
              <option key={amount} value={amount}>R{amount.toLocaleString()}</option>
            ))}
          </select>
        </SelectGroup>

        <SelectGroup>
          <label>Preferred Provider</label>
          <select name="provider" value={formData.provider} onChange={handleChange}>
            <option value="">Select provider (optional)</option>
            <option value="old-mutual">Old Mutual</option>
            <option value="sanlam">Sanlam</option>
            <option value="avbob">AVBOB</option>
            <option value="clientele">Clientele</option>
          </select>
        </SelectGroup>

        <CompareButton type="submit">Compare Quotes</CompareButton>
      </StyledForm>
    </FormContainer>
  );
};

export default ComparisonForm; 