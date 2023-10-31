import React, { useEffect, useRef, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import './Header.css'
import DropMenu from './DropMenu'
import useOnClickOutside from '../hooks/useOnClickOutside'

const Header = () => {

  // menu open state
  const [ menu, setMenu ] = useState(false)

  // menu open handler
  const menuOpen = () => {
    setMenu(!menu)
    console.log(ref)
  }

  //click outside 
  const ref = useRef();
  useOnClickOutside(ref, () => setMenu(false))

  // url path chage with menu state
  const location = useLocation()
  useEffect(() => setMenu(false), [location])

  //share event
  const shareUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    .then(() => alert('\n URL이 클립보드에 복사되었습니다. \n 공유하세요!!'))
    .catch((error) => console.log(`URL 복사 실패: ${error}`))
  }

  return (
    <header>
      <div className='inner'>
        <h1>Minus</h1>

        <nav className='menu'>

          <div className='btn-box home'>
            <Link to='/' className='btn homeBtn'>
              <span className="material-symbols-outlined">
                house
              </span>
              HOME
            </Link>
          </div>

          <div ref={ref} className='btn-box drop-menu'>
            <button onClick={menuOpen} className='btn dropBtn'>
              <span className="material-symbols-outlined">
                arrow_drop_down
              </span>
              모든 서비스
            </button>
            {menu ? <DropMenu /> : null}
          </div>

          <div className='btn-box share'>
            <button onClick={shareUrl} className='btn shareBtn'>
              <span className="material-symbols-outlined">
                share
              </span>
              공유하기
            </button>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Header