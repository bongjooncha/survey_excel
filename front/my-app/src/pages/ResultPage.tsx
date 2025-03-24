// src/pages/ResultPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTest } from '../contexts/TestContext';
import ResultChart from '../components/ResultChart';
import { saveResult } from '../api/api';
import { categoryNames } from '../data/questions';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const ResultDescription = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-align: left;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CategoryImage = styled.img`
  width: 30%;
  height: auto; 
  object-fit: contain;
  display: block; 
  margin-left: auto;
  margin-right: auto;
`;

const CategoryTitle = styled.h3`
  color: #3498db;
  margin: 0;
  font-size: 18px;
`;


const ResultSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  
  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 0 10px;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #95a5a6;
  
  &:hover {
    background-color: #7f8c8d;
  }
`;

const OthersButton = styled(Button)`
  background-color: #2ecc71;
  
  &:hover {
    background-color: #27ae60;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const ResultType = styled.div`
  font-size: 24px;
  color: #3498db;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { result, resetTest } = useTest();
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  
  // 결과가 없으면 테스트 페이지로 리다이렉트
  if (!result) {
    navigate('/test');
    return null;
  }
  
  // 최고 점수 카테고리 찾기
  const getTopCategories = () => {
    const maxScore = Math.max(...Object.values(result));
    return Object.entries(result)
      .filter(([_, score]) => score === maxScore)
      .map(([category]) => category);
  };
  
  const topCategories = getTopCategories();
  
  const getCategoryName = (category: string): string => {
    return categoryNames[category].name || category;
  };
  
  const handleSave = async () => {
    if (name.trim() === '') {
      alert('이름을 입력해주세요.');
      return;
    }
    
    const savedResult = await saveResult({
      name,
      result
    });
    
    if (savedResult) {
      setSaved(true);
      alert('결과가 저장되었습니다!');
    }
  };
  
  const handleRetake = () => {
    resetTest();
    navigate('/');
  };
  
  const handleSeeOthers = () => {
    navigate('/others');
  };
  
  return (
    <Container>
      <Title>테스트 결과</Title>
      
      <ResultSection>
      <ResultType>
  당신은 {topCategories.map(cat => getCategoryName(cat)).join(', ')} 유형입니다!
</ResultType>

{topCategories.map(category => (
  <ResultDescription key={category}>
    <CategoryHeader>
      <CategoryTitle>{getCategoryName(category)}</CategoryTitle>
    </CategoryHeader>
    <p>{categoryNames[category].description}</p>
    <br/><br/>
      <CategoryImage src={categoryNames[category].image} alt={getCategoryName(category)} />
      <br/><br/>
  </ResultDescription>
))}
        
        <ResultChart result={result} />
      </ResultSection>
      
      <FormContainer>
        {!saved ? (
          <>
            <p>결과를 저장하시겠습니까?</p>
            <Input
              type="text"
              placeholder="닉네임을 영어로 작성해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button onClick={handleSave}>결과 저장하기</Button>
          </>
        ) : (
          <>
            <p>결과가 성공적으로 저장되었습니다!</p>
            <ButtonContainer>
              <OthersButton onClick={handleSeeOthers}>
                다른 사용자 결과 보기
              </OthersButton>
              <SecondaryButton onClick={handleRetake}>
                테스트 다시 하기
              </SecondaryButton>
            </ButtonContainer>
          </>
        )}
        
        {!saved && (
          <SecondaryButton onClick={handleRetake}>
            테스트 다시 하기
          </SecondaryButton>
        )}
      </FormContainer>
    </Container>
  );
};

export default ResultPage;