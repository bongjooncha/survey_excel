// src/components/ChoiceButton.tsx
import React from 'react';
import styled from 'styled-components';
import { Choice } from '../types';

interface ChoiceButtonProps {
  choice: Choice;
  isSelected: boolean;
  onClick: (choice: Choice) => void;
}

const Button = styled.button<{ isSelected: boolean }>`
  display: block;
  width: 100%;
  padding: 15px 20px;
  margin: 10px 0;
  text-align: left;
  border: 2px solid ${props => props.isSelected ? '#3498db' : '#ddd'};
  background-color: ${props => props.isSelected ? '#e0f2fe' : 'white'};
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.isSelected ? '#e0f2fe' : '#f9f9f9'};
    border-color: ${props => props.isSelected ? '#3498db' : '#ccc'};
  }
`;

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, isSelected, onClick }) => {
  return (
    <Button 
      isSelected={isSelected} 
      onClick={() => onClick(choice)}
    >
      {choice.text}
    </Button>
  );
};

export default ChoiceButton;