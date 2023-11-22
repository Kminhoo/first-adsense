import React from 'react'

import { useNavigate } from 'react-router-dom'

import './Service.css'

const Service = ({ data }) => {
  const navigate = useNavigate()

  const iconSelected = (data) => {
    switch (data.title) {
      case "대출 이자 계산기":
        return "💵"
      case "점심 메뉴 추천":
        return "🎯"
      case "로또 번호 생성":
        return "🎱"
      default:
        return null
    }
  }

  return (
    <div className='move-service'>
      <h4><span>{iconSelected(data)}</span>{data.title}</h4>
      <p>{data.desc}</p>
      <button onClick={() => navigate(data.link)}>이동하기 <span>&#8594;</span></button>
    </div>
  )
}

export default Service