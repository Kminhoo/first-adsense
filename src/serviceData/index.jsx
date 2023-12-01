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
  { option: '한식', style: { backgroundColor: '#ffcc00', textColor: '#000000' } },
  { option: '중식', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '일식', style: { backgroundColor: '#00ffff', textColor: '#000000' } },
  { option: '양식', style: { backgroundColor: '#008000', textColor: '#ffffff' } },
  { option: '분식', style: { backgroundColor: '#ff6600', textColor: '#ffffff' } },
  { option: '패스트푸드', style: { backgroundColor: '#800000', textColor: '#ffffff' } },
  { option: '뷔페', style: { backgroundColor: '#663399', textColor: '#ffffff' } },
  { option: '초식', style: { backgroundColor: '#00ff00', textColor: '#000000' } },
]





