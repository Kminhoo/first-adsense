import React, { useRef } from 'react'

import { serviceData } from '../serviceData/index'

import './MainPage.css'
import Service from '../components/Service'
import DisplayAds from '../components/DisplayAds'
import { Helmet } from 'react-helmet-async'

const MainPage = () => {

  // scroll event
  const scrollRef = useRef()

  const scrollToService = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Helmet>
        <title>Hoostory Main</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hoostory" />
        <meta property="og:title" content="Hoostroy website" />
        <meta property="og:description" content="대출 계산기, 점심 메뉴 룰렛 등등 다양한 웹서비스를 제공합니다. 즐거움을 느껴보세요." />
        <meta property="og:image" content="/images/ogimage.png" />
        <meta property="og:url" content="https://hoostory.com" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="Hoostory" />
        <meta property="twitter:title" content="Hoostroy website" />
        <meta property="twitter:description" content="대출 계산기, 점심 메뉴 룰렛 등등 다양한 웹서비스를 제공합니다. 즐거움을 느껴보세요." />
        <meta property="twitter:image" content="/images/twittercardimage.png" />
        <meta property="twitter:url" content="https://hoostory.com" />
      </Helmet>
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
            <Service data={serviceData.loanCalc} />
            <Service data={serviceData.roulette} />
            <Service data={serviceData.lotto} />
          </div>

        </div>
      </section>
    </main>
  )
}

export default MainPage