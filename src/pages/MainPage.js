import React from 'react'

import { Link } from 'react-router-dom'

import './MainPage.css'
import DisplayAds from '../components/DisplayAds'


const MainPage = () => {
  return (
    <main>
      <div className='main-inner'>
        <div className='main-desc'>
            <div className='desc-text'>
              <h2 className='main-title'>
                Minus : &#41;
              </h2>

              <p>
              일상에 필요한 다양한 서비스를<br />
              간편하고 편안하게 즐기면서<br />
              공유해보세요!
              </p>
            </div>

            <div className='desc-btn'>
              <Link to='/loancalc' className="start-hover">
                <span aria-hidden="true" className="circle">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">탐험을 시작해 볼까요?</span>
              </Link>
            </div>

          </div>

          <div className='main-adsense'>
            <DisplayAds />
          </div>
      </div>
    </main>
  )
}

export default MainPage
