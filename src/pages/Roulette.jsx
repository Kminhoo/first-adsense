import React, { useState } from 'react'

import { Wheel } from 'react-custom-roulette'

import DisplayAds from '../components/DisplayAds'
import { rouletteData } from '../serviceData'

import './Roulette.css'

const Roulette = () => {

  // roulette menu data
  const data = rouletteData

  // roulette spin start
  const [startSpin, setStartSpin] = useState(false)

  // prize arr num
  const [prizeNumber, setPrizeNumber] = useState(0);

  // roulette spin
  const rouletteSpin = () => {
    const prizeNum = Math.floor(Math.random() * data.length)
    console.log(prizeNum)
    setPrizeNumber(prizeNum)
    setStartSpin(true)
  }

  return (
    <main className='main-roulette'>
      <section className='roulette-sect'>

        <div className='roulette-inner'>

          <div className='roulette-title'>
            <h1>&#127869; 점심 메뉴 추천 룰렛</h1>
            <p>매일 점심메뉴 고르느라 고민하셨죠? 오늘 무엇을 먹을지 고민하지말고 룰렛에 맞겨보세요!!</p>
          </div>

          <div className='roulette-container'>
            <div className='roulette'>
              <Wheel 
                mustStartSpinning={startSpin}
                prizeNumber={prizeNumber}
                data={data}
              />
            </div>
            <div className='roulette-btn'>
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