from fastapi import APIRouter, HTTPException
from app.models import UserResult, ResultList
from app.database import get_all_results, save_result, get_result_by_name

router = APIRouter()

# 모든 결과 조회
@router.get("/scores", response_model=ResultList)
async def get_all_scores():
    try:
        scores = get_all_results()
        return {"scores": scores}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"데이터 조회 중 오류 발생: {str(e)}")

# 새로운 결과 추가
@router.post("/scores", response_model=UserResult)
async def add_score(user_result: UserResult):
    try:
        result = save_result(user_result)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"데이터 저장 중 오류 발생: {str(e)}")

# 이름으로 결과 조회
@router.get("/scores/{name}", response_model=UserResult)
async def get_score_by_name(name: str):
    try:
        result = get_result_by_name(name)
        if result is None:
            raise HTTPException(status_code=404, detail=f"'{name}'의 결과를 찾을 수 없습니다.")
        return result
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"데이터 조회 중 오류 발생: {str(e)}")