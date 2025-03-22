import pandas as pd
import os
from app.config import CSV_FILE
from app.models import TestResult, UserResult

# CSV 파일이 없으면 생성하는 함수
def initialize_csv():
    if not os.path.exists(CSV_FILE):
        columns = ["name", "programming", "design", "planning", "culture", 
                  "travel", "food", "health", "economy"]
        df = pd.DataFrame(columns=columns)
        df.to_csv(CSV_FILE, index=False)
        print(f"'{CSV_FILE}' 파일이 생성되었습니다.")

# 모든 결과를 가져오는 함수
def get_all_results():
    df = pd.read_csv(CSV_FILE)
    scores = []
    for _, row in df.iterrows():
        result = TestResult(
            programming=int(row["programming"]),
            design=int(row["design"]),
            planning=int(row["planning"]),
            culture=int(row["culture"]),
            travel=int(row["travel"]),
            food=int(row["food"]),
            health=int(row["health"]),
            economy=int(row["economy"])
        )
        scores.append(UserResult(name=row["name"], result=result))
    return scores

# 새 결과를 저장하는 함수
def save_result(user_result: UserResult):
    df = pd.read_csv(CSV_FILE)
    # 결과를 단일 행으로 변환
    new_row = {
        "name": user_result.name,
        "programming": user_result.result.programming,
        "design": user_result.result.design,
        "planning": user_result.result.planning,
        "culture": user_result.result.culture,
        "travel": user_result.result.travel,
        "food": user_result.result.food,
        "health": user_result.result.health,
        "economy": user_result.result.economy
    }
    
    # 같은 이름이 이미 있는지 확인
    if user_result.name in df["name"].values:
        # 기존 행 업데이트
        df.loc[df["name"] == user_result.name] = new_row
    else:
        # 새 행 추가
        df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
        
    df.to_csv(CSV_FILE, index=False)
    return user_result

# 이름으로 결과를 가져오는 함수
def get_result_by_name(name: str):
    df = pd.read_csv(CSV_FILE)
    result = df[df["name"] == name]
    if result.empty:
        return None
    
    row = result.iloc[0]
    test_result = TestResult(
        programming=int(row["programming"]),
        design=int(row["design"]),
        planning=int(row["planning"]),
        culture=int(row["culture"]),
        travel=int(row["travel"]),
        food=int(row["food"]),
        health=int(row["health"]),
        economy=int(row["economy"])
    )
    
    return UserResult(name=row["name"], result=test_result)