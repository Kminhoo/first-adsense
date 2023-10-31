import React from 'react'

import { Link } from 'react-router-dom'

import './DropMenu.css'



const DropMenu = () => {
  return (
    <div className='dropdown-content'>
      <Link className='item' to='/loancalc'>대출 이자 계산기</Link>
      <Link className='item' to='/loancalc'>점심 메뉴 룰렛</Link>
      <Link className='item' to='/loancalc'>주식 배당금 계산기</Link>
    </div>
  )
}

export default DropMenu