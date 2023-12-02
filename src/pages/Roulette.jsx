import React, { useState } from 'react'

import { Wheel } from 'react-custom-roulette'

import DisplayAds from '../components/DisplayAds'
import { rouletteData } from '../serviceData'

import './Roulette.css'

const Roulette = () => {

  // roulette menu data
  const [data, setData] = useState(rouletteData)

  // roulette spin start
  const [startSpin, setStartSpin] = useState(false)

  // prize arr num
  const [prizeNumber, setPrizeNumber] = useState();


  // roulette spin
  const rouletteSpin = () => {
    const prizeNum = Math.floor(Math.random() * data.length)
    console.log(prizeNum)
    setPrizeNumber(prizeNum)
    setStartSpin(true)
  }

  // reset roulette func
  const resetRoulette = () => {
    setStartSpin(false)
    setPrizeNumber()
  }

  // 이어서 작성하기
  const handleStopSpinning = () => {
    const confirmResult = window.confirm('선택된 메뉴의 상세 메뉴들을 보시겠습니까?');
  }
  

  return (
    <main className='main-roulette'>
      <section className='roulette-sect'>

        <div className='roulette-inner'>

          <div className='roulette-title'>
            <h1>🍱 점심 메뉴 추천 룰렛</h1>
            <div className='roulette-desc'>
              <p>
                매일 똑같은 점심 메뉴에 지친 당신. 
                오늘은 새로운 음식이 먹고싶은 당신.
                그러나 무엇을 먹어야 할 지 모르는 당신.
                <span>우리가 어떤 민족입니까?</span> 언제까지 아무거나~ 하실꺼에요?
                더이상 고민하지말고 메뉴 추천 룰렛을 돌려보세요
              </p>
            </div>
          </div>

          <div className='roulette-container'>
            <div className='roulette'>
              <Wheel 
                mustStartSpinning={startSpin}
                prizeNumber={prizeNumber}
                data={data}
                spinDuration={[0.4]}
                onStopSpinning={handleStopSpinning}
                outerBorderColor={["#D2E0FB"]}
                radiusLineWidth={[1]}
                radiusLineColor={["tranparent"]}
              />
            </div>
            <div className='roulette-btn'>
              <button onClick={resetRoulette}>
                <span>초기화</span>
              </button>
              <button onClick={rouletteSpin}>
                <span>룰렛 돌리기</span>
              </button>
            </div>
          </div>

          {/* plus roulette */}

          <div className='google-ads'>
            <DisplayAds />
          </div>

        </div>

      </section>
    </main>
  )
}

export default Roulette