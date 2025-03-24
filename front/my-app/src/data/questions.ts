// src/data/questions.ts
import { Question } from '../types';
import Basil from '../assets/pic/basil.png';
import Cucumber from '../assets/pic/cucumber.png';
import GreenBean from '../assets/pic/greenBean.png';
import GreenOnion from '../assets/pic/greenOnion.png';
import Radish from '../assets/pic/radish.png';
import RedBean from '../assets/pic/redBean.png';
import RedRadish from '../assets/pic/redRadish.png';
import Tomato from '../assets/pic/tomato.png';


export const categoryNames: Record<string, { name: string, description: string, image: string }> = {
  programming: { name: '프로그래밍(대파)', description: '대파의 층층이 쌓인 구조는 프로그래밍의 계층적 구조를 상징하며, 지속적으로 자라나는 특성은 코드의 발전과 유지보수를 나타냅니다.', image: GreenOnion },
  design: { name: '디자인(완두콩)', description: '완두콩의 선명한 녹색과 다양한 주름 모양은 디자인의 신선함과 조화로운 구성을 나타냅니다.', image: RedBean },
  planning: { name: '기획(강낭콩)', description: '강낭콩이 작은 씨앗에서 풍성한 수확으로 자라나는 과정은 기획의 잠재력 실현과 체계적인 발전 과정을 나타냅니다.', image: GreenBean },
  culture: { name: '문화(적상추)', description: '적상추의 독특한 색상과 다양한 요리법은 문화의 다양성과 새로운 환경에 대한 적응력을 나타냅니다.', image: RedRadish },
  travel: { name: '여행(꺳잎)', description: '깻잎의 독특한 향과 맛은 여행에서 경험하는 새로운 문화와 다양한 경험을 상징합니다.', image: Radish },
  food: { name: '맛집(방울토마토)', description: '방울토마토의 작은 크기와 풍부한 맛은 맛집에서 경험할 수 있는 집중된 맛의 경험을 상징합니다.', image: Tomato },
  health: { name: '건강(오이)', description: '오이의 높은 수분 함량과 다양한 영양소는 건강한 생활을 위한 균형 잡힌 영양과 수분 공급을 상징합니다.',image: Cucumber },
  economy: { name: '경제(바질)', description: '바질의 다양한 요리 활용과 높은 경제적 가치는 경제 분야의 자원 활용과 가치 창출 능력을 상징합니다.', image: Basil }
};
;

export const questions: Question[] = [
  {
    id: 1,
    text: "새 도시에 도착한 첫날, 무엇을 가장 먼저 하고 싶으신가요?",
    choices: [
      {
        id: "1a",
        text: "도시의 디지털 인프라와 혁신 센터들을 둘러본다",
        scores: { "programming": 2, "economy": 1 }
      },
      {
        id: "1b",
        text: "지역 명소와 숨겨진 장소들을 탐방한다",
        scores: { "travel": 2, "culture": 1 }
      },
      {
        id: "1c",
        text: "현지 시장을 방문해 신선한 식재료를 구경한다",
        scores: { "food": 2, "culture": 1 }
      },
      {
        id: "1d",
        text: "도시의 건축물과 공공 디자인을 감상한다",
        scores: { "design": 2, "culture": 1 }
      }
    ]
  },
  {
    id: 2,
    text: "지역 커뮤니티 센터에서 새로운 강좌를 시작합니다. 어떤 강좌에 등록하고 싶으신가요?",
    choices: [
      {
        id: "2a",
        text: "최신 기술 트렌드와 활용법",
        scores: { "programming": 2, "economy": 1 }
      },
      {
        id: "2b",
        text: "세계 각국의 문화와 언어 입문",
        scores: { "culture": 2, "travel": 1 }
      },
      {
        id: "2c",
        text: "건강한 라이프스타일과 요가 클래스",
        scores: { "health": 2, "planning": 1 }
      },
      {
        id: "2d",
        text: "창의적 문제 해결과 기획 능력 향상",
        scores: { "planning": 2, "design": 1 }
      }
    ]
  },
  {
    id: 3,
    text: "주말에 새로운 취미를 시작하려고 합니다. 어떤 활동을 선택하시겠어요?",
    choices: [
      {
        id: "3a",
        text: "디지털 사진 촬영과 편집",
        scores: { "design": 2, "travel": 1 }
      },
      {
        id: "3b",
        text: "홈 가드닝과 요리",
        scores: { "health": 2, "food": 1 }
      },
      {
        id: "3c",
        text: "온라인 커뮤니티 운영하기",
        scores: { "culture": 2, "programming": 1 }
      },
      {
        id: "3d",
        text: "개인 재무 관리와 투자 공부",
        scores: { "economy": 2, "planning": 1 }
      }
    ]
  },
  {
    id: 4,
    text: "회사에서 새 프로젝트 팀을 꾸립니다. 어떤 역할을 맡고 싶으신가요?",
    choices: [
      {
        id: "4a",
        text: "데이터 분석과 전략 수립",
        scores: { "programming": 2, "economy": 1 }
      },
      {
        id: "4b",
        text: "창의적인 아이디어 제안과 기획",
        scores: { "planning": 2, "design": 1 }
      },
      {
        id: "4c",
        text: "팀 내 소통과 문화 조성 담당",
        scores: { "culture": 2, "health": 1 }
      },
      {
        id: "4d",
        text: "시장 조사와 고객 니즈 파악",
        scores: { "travel": 2, "food": 1 }
      }
    ]
  },
  {
    id: 5,
    text: "회사에서 직원 복지 향상을 위한 아이디어를 모집합니다. 어떤 제안을 하시겠어요?",
    choices: [
      {
        id: "5a",
        text: "유연근무제와 원격근무 확대",
        scores: { "planning": 2, "programming": 1 }
      },
      {
        id: "5b",
        text: "다양한 문화 체험 프로그램 운영",
        scores: { "culture": 2, "travel": 1 }
      },
      {
        id: "5c",
        text: "건강 관리 지원과 운동 시설 확충",
        scores: { "health": 2, "design": 1 }
      },
      {
        id: "5d",
        text: "직원 간 지식 공유 플랫폼 구축",
        scores: { "economy": 2, "food": 1 }
      }
    ]
  },
  {
    id: 6,
    text: "지역 축제에 참여하게 되었습니다. 어떤 부스나 행사에 가장 관심이 가나요?",
    choices: [
      {
        id: "6a",
        text: "미래 기술 체험관",
        scores: { "programming": 2, "design": 1 }
      },
      {
        id: "6b",
        text: "세계 음식 문화 박람회",
        scores: { "food": 2, "travel": 1 }
      },
      {
        id: "6c",
        text: "친환경 라이프스타일 전시회",
        scores: { "health": 2, "planning": 1 }
      },
      {
        id: "6d",
        text: "지역 예술가들의 작품 전시회",
        scores: { "culture": 2, "design": 1 }
      }
    ]
  },
  {
    id: 7,
    text: "이사 온 지 6개월, 새로운 도전을 해보고 싶습니다. 어떤 것을 시도해보고 싶으신가요?",
    choices: [
      {
        id: "7a",
        text: "온라인 플랫폼을 통한 부업 시작",
        scores: { "economy": 2, "programming": 1 }
      },
      {
        id: "7b",
        text: "새로운 언어 배우기",
        scores: { "culture": 2, "travel": 1 }
      },
      {
        id: "7c",
        text: "지역 마라톤 대회 참가 준비",
        scores: { "health": 2, "planning": 1 }
      },
      {
        id: "7d",
        text: "DIY 가구 제작 도전",
        scores: { "design": 2, "food": 1 }
      }
    ]
  },
  {
    id: 8,
    text: "회사에서 팀 빌딩을 위해 워크숍을 갑니다. 어떤 활동을 제안하시겠어요?",
    choices: [
      {
        id: "8a",
        text: "창의적 문제 해결 워크숍",
        scores: { "planning": 2, "programming": 1 }
      },
      {
        id: "8b",
        text: "다문화 요리 대회",
        scores: { "food": 2, "culture": 1 }
      },
      {
        id: "8c",
        text: "자연 속에서의 팀 챌린지 활동",
        scores: { "health": 2, "travel": 1 }
      },
      {
        id: "8d",
        text: "팀별 단편 영화 만들기",
        scores: { "design": 2, "culture": 1 }
      }
    ]
  },
  {
    id: 9,
    text: "지역 봉사 활동에 참여하고자 합니다. 어떤 활동을 선택하시겠어요?",
    choices: [
      {
        id: "9a",
        text: "디지털 격차 해소를 위한 교육 봉사",
        scores: { "programming": 2, "culture": 1 }
      },
      {
        id: "9b",
        text: "다문화 가정을 위한 문화 교류 행사",
        scores: { "culture": 2, "food": 1 }
      },
      {
        id: "9c",
        text: "지역 주민을 위한 건강 검진 행사",
        scores: { "health": 2, "planning": 1 }
      },
      {
        id: "9d",
        text: "지역 환경 개선 프로젝트 참여",
        scores: { "design": 2, "travel": 1 }
      }
    ]
  },
  {
    id: 10,
    text: "1년이 지나고 이 도시에서의 경험을 돌아보며 미래를 그려봅니다. 어떤 모습이 떠오르나요?",
    choices: [
      {
        id: "10a",
        text: "혁신적인 아이디어로 사회에 기여하는 모습",
        scores: { "planning": 2, "programming": 1 }
      },
      {
        id: "10b",
        text: "다양한 문화를 이해하고 소통하는 모습",
        scores: { "culture": 2, "travel": 1 }
      },
      {
        id: "10c",
        text: "건강하고 균형 잡힌 삶을 사는 모습",
        scores: { "health": 2, "food": 1 }
      },
      {
        id: "10d",
        text: "창의적인 작업으로 가치를 만들어내는 모습",
        scores: { "design": 2, "economy": 1 }
      }
    ]
  }
];