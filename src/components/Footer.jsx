import React from 'react'

import './Footer.css'

import data from '../serviceData'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='footer-inner'>
        <div className='footer-menu'>
          <ul className='service-list'>
            <h3>제공 서비스</h3>
            <li>
              <Link className='list-menu' to={data.loanCalc.link}>{data.loanCalc.title}</Link>
            </li>
            <li>
              <Link className='list-menu' to={data.roulette.link}>{data.roulette.title} &#128293;</Link>
            </li>
            <li>
              <Link className='list-menu' to={data.lotto.link}>{data.lotto.title} &#128293;</Link>
            </li>
          </ul>

          <ul className='blog'>
            <h3>MINUS BLOG</h3>
            <li>
              <a href='https://hoostory.tistory.com'>TISTORY BLOG &#128161;</a>
            </li>
          </ul>
        </div>

        <div className='footer-info'>
          <span>MINUS</span>
          <span>Email: whdgus4158@gmail.com</span>
          <span>CopyRight 2023. Minus</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer