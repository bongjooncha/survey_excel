// src/pages/TestPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTest } from '../contexts/TestContext';
import { questions } from '../data/questions';
import ChoiceButton from '../components/ChoiceButton';
import ProgressBar from '../components/ProgressBar';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const QuestionNumber = styled.div`
  font-size: 18px;
  color: #3498db;
  margin-bottom: 10px;
`;

const QuestionText = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
  line-height: 1.4;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const NavButton = styled.button`
  background-color: #fff;
  color: #3498db;
  border: 2px solid #3498db;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f0f8ff;
  }
  
  &:disabled {
    color: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
    background-color: #f9f9f9;
  }
`;

const NextButton = styled(NavButton)`
  background-color: ${props => props.disabled ? '#f9f9f9' : '#3498db'};
  color: ${props => props.disabled ? '#ccc' : 'white'};
  
  &:hover {
    background-color: ${props => props.disabled ? '#f9f9f9' : '#2980b9'};
  }
`;

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    answers, 
    goToNextQuestion, 
    goToPreviousQuestion,
    setAnswer,
    calculateResult
  } = useTest();
  
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleChoiceSelect = (choice: any) => {
    setAnswer(currentQuestion.id, choice);
  };
  
  const handleNext = () => {
    if (isLastQuestion) {
      calculateResult();
      navigate('/result');
    } else {
      goToNextQuestion();
    }
  };
  
  const currentAnswer = answers[currentQuestion.id];
  const isAnswered = !!currentAnswer;
  
  return (
    <Container>
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      
      <QuestionNumber>질문 {currentQuestion.id}</QuestionNumber>
      <QuestionText>{currentQuestion.text}</QuestionText>
      
      {currentQuestion.choices.map((choice) => (
        <ChoiceButton
          key={choice.id}
          choice={choice}
          isSelected={currentAnswer?.id === choice.id}
          onClick={handleChoiceSelect}
        />
      ))}
      
      <ButtonContainer>
        <NavButton 
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          이전
        </NavButton>
        
        <NextButton 
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {isLastQuestion ? '결과 보기' : '다음'}
        </NextButton>
      </ButtonContainer>
    </Container>
  );
};

export default TestPage;