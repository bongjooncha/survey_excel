// src/pages/StartPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTest } from '../contexts/TestContext';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const StartButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const { resetTest } = useTest();
  
  const handleStart = () => {
    resetTest();
    navigate('/test');
  };
  
  return (
    <Container>
      <Title>당신의 인생 여정: 새로운 도시에서의 1년</Title>
      <Subtitle>
        여러분의 선택을 통해 성향을 알아보는 테스트입니다.<br />
        10개의 질문에 답하고 자신의 성향을 확인해보세요.
      </Subtitle>
      <StartButton onClick={handleStart}>
        테스트 시작하기
      </StartButton>
    </Container>
  );
};

export default StartPage;