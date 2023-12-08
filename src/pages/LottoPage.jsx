import React from 'react'
import { useState } from 'react';

import { IoMdInformationCircleOutline } from "react-icons/io";

import './LottoPage.css'

const LottoPage = () => {

  const [lottoData, setLottoData] = useState(null)
  
  // fetch prev lotto number
  const fetchLotto = async () => {
    const res = await fetch("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1095")
    const data = await res.json()
    setLottoData(data)
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
            <div className='lotto-info'>
              <h3><IoMdInformationCircleOutline /> 알아두세요.</h3>
              <p><span>매주 토요일 오후 8시 35분</span>에 MBC에서 추첨방송 진행</p>
              <p>매주 토요일 오후 8시에 회차 판매 마감</p>
              <p>토요일 오후 8시부터 일요일 오전 6시까지 판매 정지</p>
              <p>로또 당첨 지급기한은 1년 입니다.</p>
            </div>
            <button onClick={fetchLotto}>나오냐</button>
          </div>

          <div className='lotto-prev-info'>
            {lottoData.drwtNo1} 라느넫
          </div>

          <div className='lotto-container'>

          </div>

          <div className='lotto-btn'>

          </div>

        </div>

      </section>
    </main>
  )
}

export default LottoPage