const inputEl = document.getElementById('input')
const autoList = document.getElementById('auto-result')

const menuArray = [
  { name: 'HOME', url: '#'},
  { name: '대출 이자 계산기', url: '/loanCalc.html'},
  { name: '점심 메뉴 룰렛', url: '/roulette.html'}
]

inputEl.addEventListener('input', (e) => {
  autoList.innerHTML = ''

  if (e.target.value) {
    const plusMenu = menuArray.filter(item => item.name.includes(e.target.value))

    plusMenu.forEach((menu) => {
      const newEl = document.createElement('a')
      newEl.textContent = menu.name
      newEl.setAttribute('href', menu.url)
      newEl.classList.add('plus-item')
      autoList.appendChild(newEl)
    })
  }
})

const shareBtn = document.getElementById('share')

shareBtn.addEventListener('click', () => {
  const url = document.location.href

  navigator.clipboard.writeText(url)
  .then(() => {
    alert("주소가 복사되었습니다! 공유하세요!")
  }).catch(error => {
    console.error("URL 복사 실패 :", error)
  });    
})



