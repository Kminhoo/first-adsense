import React, { useState, useRef, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { CgMenuGridR } from 'react-icons/cg'
import { FaRegShareSquare } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import useOnClickOutside from '../hooks/useOnClickOutside'

import './Header.css'

const Header = () => {
  //sidemenu state
  const [menu, setMenu] = useState('menu-container')

  //background overlay state
  const [overlay, setOverly] = useState('overlay')

  // current location check
  const location = useLocation()

  // url path change sidemenu close
  useEffect(() => {
    closeMenuEvent()
  }, [location])

  //outside click event
  const ref = useRef()
  useOnClickOutside(ref, () => {
    setMenu('menu-container')
    setOverly('overlay')
    document.body.style.overflow = 'auto'
  })

  //show menu func
  const showMenuEvent = () => {
    setMenu('menu-container active')
    setOverly('overlay active')
    document.body.style.overflow = 'hidden'
  }

  //close menu func
  const closeMenuEvent = () => {
    setMenu('menu-container')
    setOverly('overlay')
    document.body.style.overflow = 'auto'
  }

  //share event
  const shareUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    .then(() => alert('\n URL이 클립보드에 복사되었습니다. \n 공유하세요!!'))
    .catch((error) => alert(`URL 복사 실패: ${error}`))
  }

  return (
    <header>
      <div className={overlay}></div>
      <div className='header-inner'>

        <div className='logo-container'>
          <h2>Minus</h2>
        </div>

        <div ref={ref} className={menu}>
          <div className='menu-title'>
            <h3>&#128315; MINUS Service</h3>
            <IoMdClose className='close' onClick={closeMenuEvent}/>
          </div>
          <nav>
            <Link className='to' to='/'>HOME</Link>
            <Link className='to' to='/loanCalc'>대출 이자 계산기</Link>
            <Link className='to' to='/roulette'>점심 메뉴 추천</Link>
            <Link className='to' to='/lotto'>로또 번호 생성</Link>
          </nav>
        </div>

        <div className='icon-container'>
          <div onClick={showMenuEvent} className='menu-icon'>
            <CgMenuGridR />
            <span>모든 서비스</span>
          </div>
          <div onClick={shareUrl} className='share-icon'>
            <FaRegShareSquare />
            <span>공유하기</span>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header