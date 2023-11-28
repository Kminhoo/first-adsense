import React from 'react'

import './PrincipalMonth.css'

const PrincipalMonth = ({ result, principalActive }) => {

  // principal Active close func
  const closePrincipalActive = () => {
    principalActive(false)
  }

  return (
    <div className='principal-table'>
      <button onClick={closePrincipalActive}>닫기</button>
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
            <tr key={month.interest}>
              <td>{index + 1}회차</td>
              <td>{Math.ceil(month.principal).toLocaleString('ko-KR')}원</td>
              <td>{Math.ceil(month.interest).toLocaleString('ko-KR')}원</td>
              <td>{Math.ceil(month.principal + month.interest).toLocaleString('ko-KR')}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PrincipalMonth