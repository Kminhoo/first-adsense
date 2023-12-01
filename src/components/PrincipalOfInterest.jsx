import React from 'react'

import './PrincipalOfInterest.css'

const PrincipalOfInterest = ({ result, principalOfInterest }) => {

  // principalOfInterest Active close func
  const closePrincipalOfInterestActive = () => {
    principalOfInterest(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className='principal-of-interest'>
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
              <td>
                {(Math.ceil(month.principal) + Math.ceil(month.interest)).toLocaleString('ko-KR')}원
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={closePrincipalOfInterestActive}>
        <span>
          닫기
        </span>
      </button>
    </div>
  )
}

export default PrincipalOfInterest