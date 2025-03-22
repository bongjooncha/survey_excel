// src/api/api.ts
import axios from 'axios';
import { UserResult } from '../types';

const API_URL = import.meta.env.VITE_API_URL; // 백엔드 서버 URL

// 모든 결과 가져오기
export const getAllResults = async (): Promise<UserResult[]> => {
  try {
    const response = await axios.get(`${API_URL}/scores`);
    return response.data.scores;
  } catch (error) {
    console.error('결과 가져오기 실패:', error);
    return [];
  }
};

// 새 결과 추가하기
export const saveResult = async (userResult: UserResult): Promise<UserResult | null> => {
  try {
    const response = await axios.post(`${API_URL}/scores`, userResult);
    return response.data;
  } catch (error) {
    console.error('결과 저장 실패:', error);
    return null;
  }
};