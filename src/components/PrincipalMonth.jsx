import React from 'react'

import './PrincipalMonth.css'

const PrincipalMonth = ({ result, principalActive }) => {

  // principal Active close func
  const closePrincipalActive = () => {
    principalActive(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className='principal-table'>
      <table>
        <thead>
          <tr>
            <td>회차</td>
            <td>납입 원금</td>
            <td>납입 이자</td>
            <td>총 납입 금액</td>
          </tr>
        </thead>
        <tbody>
          {result.map((month, index) => (
            <tr key={index}>
              <td>{index + 1}회차</td>
              <td>{Math.ceil(month.principal).toLocaleString('ko-KR')}원</td>
              <td>{Math.ceil(month.interest).toLocaleString('ko-KR')}원</td>
              <td>{Math.ceil(month.principal + month.interest).toLocaleString('ko-KR')}원</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={closePrincipalActive}>
        <span>
          닫기
        </span>
      </button>
    </div>
  )
}

export default PrincipalMonth