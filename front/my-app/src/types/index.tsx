// src/types/index.ts
export interface Choice {
    id: string;
    text: string;
    scores: Record<string, number>; // 예: { "프로그래밍": 2, "경제": 1 }
  }
  
  export interface Question {
    id: number;
    text: string;
    choices: Choice[];
  }
  
  export interface TestResult {
    programming: number;
    design: number;
    planning: number;
    culture: number;
    travel: number;
    food: number;
    health: number;
    economy: number;
  }
  
  export interface UserResult {
    name: string;
    result: TestResult;
  }
  