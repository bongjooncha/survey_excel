// src/contexts/TestContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Question, TestResult, Choice } from '../types';
import { questions } from '../data/questions';

interface TestContextType {
  currentQuestionIndex: number;
  answers: Record<number, Choice>;
  result: TestResult | null;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  setAnswer: (questionId: number, choice: Choice) => void;
  calculateResult: () => void;
  resetTest: () => void;
}

const defaultResult: TestResult = {
  programming: 0,
  design: 0,
  planning: 0,
  culture: 0,
  travel: 0,
  food: 0,
  health: 0,
  economy: 0
};

export const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Choice>>({});
  const [result, setResult] = useState<TestResult | null>(null);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const setAnswer = (questionId: number, choice: Choice) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: choice
    }));
  };

  const calculateResult = () => {
    // 초기 결과 객체 생성
    const newResult = { ...defaultResult };
    
    // 모든 답변을 순회하며 점수 계산
    Object.values(answers).forEach(choice => {
      Object.entries(choice.scores).forEach(([category, score]) => {
        // 카테고리 이름을 소문자로 변환하여 결과 객체의 키로 사용
        const key = category.toLowerCase() as keyof TestResult;
        // 해당 카테고리가 결과 객체에 있으면 점수 추가
        if (newResult[key] !== undefined) {
          newResult[key] += score;
        }
      });
    });
    
    setResult(newResult);
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <TestContext.Provider
        value={{
            currentQuestionIndex,
            answers,
            result,
            goToNextQuestion,
            goToPreviousQuestion,
            setAnswer,
            calculateResult,
            resetTest
        }}        
        >
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};