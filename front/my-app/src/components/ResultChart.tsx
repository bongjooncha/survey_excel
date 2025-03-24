// src/components/ResultChart.tsx
import React from 'react';
import styled from 'styled-components';
import { TestResult } from '../types';
import { categoryNames } from '../data/questions';

interface ResultChartProps {
  result: TestResult;
}

const ChartContainer = styled.div`
  margin: 30px 0;
`;

const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CategoryName = styled.div`
  width: 120px;
  font-weight: bold;
  color: #333;
`;

const BarContainer = styled.div`
  flex: 1;
  height: 24px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Bar = styled.div<{ width: string; color: string }>`
  height: 100%;
  width: ${props => props.width};
  background-color: ${props => props.color};
  border-radius: 4px;
  transition: width 0.5s ease;
`;

const Score = styled.div`
  margin-left: 10px;
  font-weight: bold;
  width: 30px;
  text-align: right;
`;

// 카테고리별 색상 정의
const categoryColors: Record<string, string> = {
  programming: '#3498db', // 파란색
  design: '#9b59b6',      // 보라색
  planning: '#2ecc71',    // 초록색
  culture: '#e74c3c',     // 빨간색
  travel: '#f39c12',      // 주황색
  food: '#1abc9c',        // 청록색
  health: '#d35400',      // 갈색
  economy: '#34495e'      // 남색
};


const ResultChart: React.FC<ResultChartProps> = ({ result }) => {
  // 최대 점수 계산 (차트 비율 조정용)
  const maxScore = Math.max(...Object.values(result), 10); // 최소 10으로 설정
  
  return (
    <ChartContainer>
      {Object.entries(result).map(([category, score]) => (
        <CategoryRow key={category}>
          <CategoryName>{categoryNames[category].name || category}</CategoryName>
          <BarContainer>
            <Bar 
              width={`${(score / maxScore) * 100}%`} 
              color={categoryColors[category] || '#999'}
            />
          </BarContainer>
          <Score>{score}</Score>
        </CategoryRow>
      ))}
    </ChartContainer>
  );
};

export default ResultChart;