import React, { useState, useEffect, useCallback } from 'react'

import { IoMdInformationCircleOutline } from "react-icons/io";

import './LottoPage.css'

const LottoPage = () => {

  // prev lotto winner Data
  const [prevNumber, setPrevNumber] = useState({})

  // get lotto round func
  const getLottoRoundNumber = () => {
    // 1000 회차를 기준
    const baseDate = new Date(2022, 0, 29) 
    const baseRound = 1000

    const currentDate = new Date() 
    const diffTime = currentDate.getTime() - baseDate.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    // 현재 요일이 토요일이고 현재 시간이 오후 9시 이전인 경우
    if (currentDate.getDay() === 6 && currentDate.getHours() < 21) {
      return baseRound + Math.floor(diffDays / 7) - 1
    } else {
      return baseRound + Math.floor(diffDays / 7)
    }
  }

  // fetch prev lotto number
  // const fetchLotto = async () => {
  //   const round = getLottoRoundNumber()
  //   const res = await fetch(`/common.do?method=getLottoNumber&drwNo=${round}`)
  //   // const res = await fetch(`/.netlify/functions/getLottoNumber?drwNo=${round}`)
  //   const data = await res.json()
  //   setPrevNumber(data)
  //   console.log(data)
  // }

  // 메모이제이션된 fetchLotto 함수를 생성합니다.
  const fetchLotto = useCallback(async () => {
    const round = getLottoRoundNumber()
    const res = await fetch(`/.netlify/functions/getLotto?drwNo=${round}`)
    const data = await res.json()
    setPrevNumber(data)
    console.log(data)
  }, [])

  // 의존성 배열에 fetchLotto 함수를 추가합니다.
  useEffect(() => {
    fetchLotto()
  }, [fetchLotto])

  // useEffect(() => {
  //   fetchLotto()
  // }, [])


  const seletedBallColor = (num) => {
    if (num >= 1 && num <= 10) {
      return 'yellow';
    } else if (num >= 11 && num <= 20) {
      return 'blue';
    } else if (num >= 21 && num <= 30) {
      return 'red';
    } else if (num >= 31 && num <= 40) {
      return 'gray';
    } else {
      return 'green';
    }
  }


  return (
    <main className='main-lotto'>
      <section className='lotto'>

        <div className='lotto-inner'>

          <div className='lotto-text-container'>
            <h1>&#127921; 로또 번호 추천</h1>
            <p className='lotto-text'>
              매달 돈내고 번호를 추천받는 서비스는 이제 그만 &#128400; MINUS에서 추천하는 로또 당첨 번호 무료로 생성해보세요.
              이번주 1등은? 바로 당신입니다. &#127881;
            </p>
          </div>

          <div className='lotto-prev-info'>
            <h4>{prevNumber.drwNo}회차({prevNumber.drwNoDate})</h4>
            <div className='prev-lotto-num'>
              <div>
                <p>당첨번호:</p>
                <ul>
                  <li className={seletedBallColor(prevNumber.drwtNo1)}>{prevNumber.drwtNo1}</li>
                  <li className={seletedBallColor(prevNumber.drwtNo2)}>{prevNumber.drwtNo2}</li>
                  <li className={seletedBallColor(prevNumber.drwtNo3)}>{prevNumber.drwtNo3}</li>
                  <li className={seletedBallColor(prevNumber.drwtNo4)}>{prevNumber.drwtNo4}</li>
                  <li className={seletedBallColor(prevNumber.drwtNo5)}>{prevNumber.drwtNo5}</li>
                  <li className={seletedBallColor(prevNumber.drwtNo6)}>{prevNumber.drwtNo6}</li>
                  <li>
                    <span style={{
                      color: 'black',
                      fontWeight: 'bold'
                    }}>+</span>
                  </li>
                  <li className={seletedBallColor(prevNumber.bnusNo)}>{prevNumber.bnusNo}</li>
                </ul>
              </div>
              <p>1등 당첨금액 : <span>{prevNumber.firstWinamnt ? (prevNumber.firstWinamnt).toLocaleString('ko-KR') : '데이터 로딩중...'} 원</span></p>
            </div>
          </div>

          <div className='lotto-container'>

          </div>

          <div className='lotto-btn'>

          </div>

          <div className='lotto-info'>
            <h3><IoMdInformationCircleOutline /> 알아두세요.</h3>
            <p><span>매주 토요일 오후 8시 35분</span>에 MBC에서 추첨방송 진행</p>
            <p>매주 토요일 오후 8시에 회차 판매 마감</p>
            <p>토요일 오후 8시부터 일요일 오전 6시까지 판매 정지</p>
            <p>로또 당첨 지급기한은 1년 입니다.</p>
          </div>
        </div>

      </section>
    </main>
  )
}

export default LottoPage