import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAllResults } from '../api/api';
import { UserResult } from '../types';
import PeopleList from '../components/PeopleList';
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

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`;

const CategoryTab = styled.button<{ active: boolean }>`
  background-color: ${props => props.active ? '#3498db' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  
  &:hover {
    background-color: ${props => props.active ? '#2980b9' : '#e0e0e0'};
  }
`;

const BackButton = styled.button`
  background-color: #95a5a6;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: block;
  margin: 30px auto 0;
  
  &:hover {
    background-color: #7f8c8d;
  }
`;

const SeeOthers: React.FC = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<UserResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('programming');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const data = await getAllResults();
        setResults(data);
      } catch (error) {
        console.error('결과 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, []);
  
  const getCategoryName = (category: string): string => {
    return categoryNames[category].name || category;
  };
  
  const handleBack = () => {
    navigate('/');
  };

  const categories = ['programming', 'design', 'planning', 'culture', 'travel', 'food', 'health', 'economy'];
  
  return (
    <Container>
      <Title>다른 사용자 결과 보기</Title>
      
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          <CategoryTabs>
            {categories.map(category => (
              <CategoryTab 
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {getCategoryName(category)}
              </CategoryTab>
            ))}
          </CategoryTabs>
          <br/> 
          <PeopleList 
            people={results}
            category={selectedCategory}
            getCategoryName={getCategoryName}
          />
        </>
      )}
      
      <BackButton onClick={handleBack}>
        홈으로 돌아가기
      </BackButton>
    </Container>
  );
};

export default SeeOthers; 