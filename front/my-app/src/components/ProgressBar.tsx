// src/components/ProgressBar.tsx
import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 20px 0;
`;

const Progress = styled.div<{ width: string }>`
  height: 100%;
  background-color: #3498db;
  border-radius: 4px;
  width: ${props => props.width};
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  text-align: right;
  margin-top: 5px;
  font-size: 14px;
  color: #666;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div>
      <ProgressContainer>
        <Progress width={`${percentage}%`} />
      </ProgressContainer>
      <ProgressText>{current} / {total}</ProgressText>
    </div>
  );
};

export default ProgressBar;