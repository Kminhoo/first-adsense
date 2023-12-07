import React, { useState } from 'react'

import { Wheel } from 'react-custom-roulette'

import './StopSpin.css'

const StopSpin = ({ data }) => {

  // detail roulette start state
  const [spinStart, setSpinStart] = useState(false)

  // detail roulette przie num
  const [detailPrizeNumber, setDetailPrizeNumber] = useState()

  // detail roulette start spin
  const detailRouletteSpin = () => {
    const prizeNum = Math.floor(Math.random() * data.length)
    setDetailPrizeNumber(prizeNum)
    setSpinStart(true)
  }

  // detail roulette stop spin
  const detailRouletteStop = () => {
    alert(`오늘 메뉴는 ${data[detailPrizeNumber].option} (으)로 맛있게 드세요!!`)
  }

  return (
    <div className='detail-food-container' >
      <div className='detail-roulette'>

        <Wheel
          mustStartSpinning={spinStart}
          prizeNumber={detailPrizeNumber}
          data={data}
          spinDuration={[0.4]}
          outerBorderColor={['#FFCACC']}
          radiusLineWidth={[1]}
          radiusLineColor={["tranparent"]}
          onStopSpinning={detailRouletteStop}
        />

      </div>

      <div className='detail-roulette-btn'>
        <button onClick={detailRouletteSpin}>
          <span>룰렛 돌리기</span>
        </button>
      </div>

    </div>
  )
}

export default StopSpin