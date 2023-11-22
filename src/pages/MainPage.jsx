import React, { useRef } from 'react'

import data from '../serviceData/index'

import './MainPage.css'
import Service from '../components/Service'
import DisplayAds from '../components/DisplayAds'

const MainPage = () => {

  // scroll event
  const scrollRef = useRef()

  const scrollToService = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <section className='hero'>

        <div className='hero-inner'>
          <div className='hero-content'>

            <div className='text'>
              <span className='grad'>MINUS : &#41;</span>
              <span className='two'>당신의 일상에</span>
              <span className='grad'>간편함, 즐거움을</span>
              <span className='two'>선물합니다.</span>
              <div className='eng-desc'>
                <p>MINUS: &#41; It brings simplicity and pleasure to your daily life. Enjoy it right now.</p>
              </div>
            </div>

            <div className='service-example'>
              <p>로또 번호 생성, </p>
              <p>대출 이자 계산기, </p>
              <p>점심 메뉴 추천 ... </p>
            </div>

            <div className='google-ads'>
              <DisplayAds />
            </div>

            <div className='down-btn'>
              <button onClick={scrollToService}><span>&#8595;</span></button>
            </div>
          </div>
        </div>

      </section>

      <section className='service-info'>
        <div className='service-inner'>

          <div ref={scrollRef} className='info-title'>
            <h1><span>&#128226;</span> 제공 서비스</h1>
            <h3>가볍게 즐길 수 있는 여러 서비스들을 만나보세요&#128512;</h3>
          </div>

          <div className='service-container'>
            <Service data={data.loanCalc} />
            <Service data={data.roulette} />
            <Service data={data.lotto} />
          </div>

        </div>
      </section>
    </main>
  )
}

export default MainPage