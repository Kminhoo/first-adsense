export const serviceData = {
  home : {
    title: 'Home',
    desc: '대출이자 계산기, 점심 메뉴 추천, 로또 번호 생성등 다양한 서비스를 제공하는 Minus 메인페이지',
    link: '/'
  },
  loanCalc : {
    title: '대출 이자 계산기',
    desc: '원리금 균등, 원금 균등, 만기 일시등 다양한 방법으로 대출 예상 금액을 조회하고 대출을 실행해보세요.',
    link: '/loanCalc'
  },
  roulette: {
    title: '점심 메뉴 추천',
    desc: '매일 점심 뭐 먹을지 고민하셨나요? 고민하지말고 룰렛으로 돌려보세요! 다양한 메뉴를 추천합니다.',
    link: '/roulette'
  },
  lotto : {
    title: '로또 번호 생성',
    desc: '오늘 1등은 누구? 오늘의 1등은 바로 당신. 지금 여기서 1등 번호를 받아가세요. 당첨을 축하합니다.',
    link: '/lotto'
  },
}

export const loanDesc = {
  default: "각 대출 실행방식 버튼을 클릭하면 상세한 내용을 확인할 수 있습니다.",
  principalInterest: "대출 원금과 이자를 합친 금액(원리금)을 만기일까지 균등한 금액으로 대출을 상환하는 방식입니다.",
  principal: "대출 원금은 매월 동일하게 상환하고, 남은 대출 원금에 대한 이자를 더해 상환하는 방식으로 매달 상환하는 금액이다른 방식입니다.",
  dateOfTime: "대출원금을 만기일에 모두 상환하는 방식으로 대출기간에는 이자만 납부하는 이자부담이 큰 상환방식입니다."
}

export const rouletteData = [
  { option: '한식', 
    style: { backgroundColor: '#ffffff', textColor: '#000000' },
    detailMenu: [
      {
        option: '찌개류',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '국밥',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '제육볶음',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '불고기',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '비빔밥',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '백반',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '쌈밥',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '탕류',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },  
      {
        option: '육개장',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '삼겹살',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
    ] 
  },
  { option: '중식',
     style: { backgroundColor: '#D2E0FB', textColor: '#000000' },
    detailMenu: [
      {
        option: '짜장면',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '짬뽕',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '울면',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '탕수육',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '양장피',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '볶음밥',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '깐풍기',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '마파두부',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },  
      {
        option: '마라탕',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '고추잡채',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
    ] 
  },
  { option: '일식', 
    style: { backgroundColor: '#ffffff', textColor: '#000000' },
    detailMenu: [
      {
        option: '초밥',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '라멘',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '돈부리',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '돈가츠',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '텐동',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '가츠카레',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '오코노미야키',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '토리야끼',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },  
      {
        option: '소바',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '가츠동',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
    ] 
  },
  { option: '양식', 
    style: { backgroundColor: '#D2E0FB', textColor: '#000000' },
    detailMenu: [
      {
        option: '스테이크',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '파스타',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '리조또',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '피자',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '필라프',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '타코',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '스프',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '토스트',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },  
      {
        option: '파니니',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '라자냐',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
    ] 
  },
  { option: '분식', 
    style: { backgroundColor: '#ffffff', textColor: '#000000' },
    detailMenu: [
      {
        option: '김밥',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '라면',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '떡볶이',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '순대',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '튀김',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '라볶이',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '닭강정',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '만두',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },  
      {
        option: '오뎅',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '부침개',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
    ] 
  },
  { option: '패스트푸드', 
    style: { backgroundColor: '#D2E0FB', textColor: '#000000' },
    detailMenu: [
      {
        option: '롯데리아',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '파파이스',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '버거킹',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '맥도날드',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: 'KFC',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '수제버거',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '핫도그',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '노브랜드',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },  
      {
        option: '봉구스밥버거',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '맘스터치',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
    ]  
  },
  { option: '뷔페', 
    style: { backgroundColor: '#ffffff', textColor: '#000000' },
    detailMenu: [
      {
        option: '애슐리',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '빕스',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '쿠우쿠우',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '피자몰',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '자연별곡',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '한식뷔페',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '중식뷔페',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '샤브샤브 뷔페',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },  
      {
        option: '일식 뷔페',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '호텔 뷔페',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
    ] 
  },
  { option: '카페 및 디저트', 
    style: { backgroundColor: '#D2E0FB', textColor: '#000000' },
    detailMenu: [
      {
        option: '샐러드',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '샌드위치',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '과일',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '베이글',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '에그샐런트',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '써브웨이',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
      {
        option: '파리바게트',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '뜨레쥬르',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },  
      {
        option: '던킨 도넛츠',
        style: { backgroundColor: '#FFCACC', textColor: '#000000' }
      },
      {
        option: '퀴즈노스',
        style: { backgroundColor: '#ffffff', textColor: '#000000' }
      },
    ] 
  }
]





