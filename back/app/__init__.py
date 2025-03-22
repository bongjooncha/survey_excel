from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import scores
from app.database import initialize_csv

def create_app():
    app = FastAPI()
    
    # CORS 설정 추가
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # React 앱 URL
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # 라우터 포함
    app.include_router(scores.router)
    
    # 시작 이벤트
    @app.on_event("startup")
    async def startup_event():
        initialize_csv()
    
    return app