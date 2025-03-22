from pydantic import BaseModel
from typing import List

# 데이터 모델 정의
class TestResult(BaseModel):
    programming: int = 0
    design: int = 0
    planning: int = 0
    culture: int = 0
    travel: int = 0
    food: int = 0
    health: int = 0
    economy: int = 0

class UserResult(BaseModel):
    name: str
    result: TestResult

class ResultList(BaseModel):
    scores: List[UserResult]