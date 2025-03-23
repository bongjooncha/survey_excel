// src/components/PeopleList.tsx
import React from 'react';
import styled from 'styled-components';
import { UserResult } from '../types';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const ScoreValue = styled.div`
  font-size: 14px;
  background-color: #3498db;
  color: white;
  padding: 3px 8px;
  border-radius: 10px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  margin: 40px 0;
  color: #777;
  font-style: italic;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ScoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 10px;
`;

const ScoreItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

const ScoreLabel = styled.span`
  color: #666;
  margin-bottom: 4px;
`;

interface PeopleListProps {
  people: UserResult[];
  category: string;
  getCategoryName: (category: string) => string;
}

const PeopleList: React.FC<PeopleListProps> = ({ people, category, getCategoryName }) => {
  // 현재 선택된 카테고리에서 최고 점수인 사람들 찾기
  const topScorers = people.filter(person => {
    const scores = Object.entries(person.result);
    const maxScore = Math.max(...scores.map(([_, value]) => value));
    const topCategories = scores.filter(([_, value]) => value === maxScore).map(([key]) => key);
    return topCategories.includes(category);
  });

  // 모든 카테고리 목록
  const allCategories = ['programming', 'design', 'planning', 'culture', 'travel', 'food', 'health', 'economy'];

  return (
    <ListContainer>
      <h3>{getCategoryName(category)} 유형의 사람들</h3>
      
      {topScorers.length > 0 ? (
        topScorers.map((person, index) => (
          <ListItem key={index}>
            <UserInfo>
              <Name>{person.name}</Name>
              <ScoreValue>{person.result[category as keyof typeof person.result]}</ScoreValue>
            </UserInfo>
            <ScoreGrid>
              {allCategories.map(cat => (
                <ScoreItem key={cat}>
                  <ScoreLabel>{getCategoryName(cat)}</ScoreLabel>
                  <strong>{person.result[cat as keyof typeof person.result]}</strong>
                </ScoreItem>
              ))}
            </ScoreGrid>
          </ListItem>
        ))
      ) : (
        <EmptyMessage>아직 {getCategoryName(category)} 유형의 사람이 없습니다.</EmptyMessage>
      )}
    </ListContainer>
  );
};

export default PeopleList;