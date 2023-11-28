import React, { useState } from 'react'

import './LoanResult.css'

import PrincipalMonth from './PrincipalMonth'

const LoanResult = ({
  result, //결과
  principalInterest, //원리금 균등 
  principal, //원금 균등
  dateOfTiem, //만기일
  loan // 대출금
}) => {
  // principal month active
  const [principalActive, setPrincipalActive] = useState(false);

  // principal month active func
  const activePrincipal = () => {
    setPrincipalActive(true)
  }

  if (principalInterest) {
    return (
      <div className='calc-result'>
        <p>대출 원금은 {loan.display}원 입니다.</p>
        <p>총 이자는 {parseInt(result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
        <p>총 상환 금액은 {parseInt(loan.raw + result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
      </div>
    )
  }
  if (principal) {
    return (
      <>
        <div className='calc-result-principal'>
          <p><span>{loan.display}</span>원을, {result.repaymentSchedule.length}개월로 원금균등 대출을 실행한다면,</p>
          <p>대출 원금 : <span>{loan.display}</span> 원</p>
          <p>대출 이자 : <span>{result.totalInterest.toLocaleString('ko-KR')}</span> 원</p>
          <p>총 상환 금액 : <span>{Math.ceil(loan.raw + result.totalInterest).toLocaleString('ko-KR')}</span> 원</p>
          <button onClick={activePrincipal}>월별 상환 금액보기</button>
        </div>
        {principalActive && (<PrincipalMonth 
          result={result.repaymentSchedule} 
          principalActive={setPrincipalActive}
        />)}
      </>
    )
  }
  if (dateOfTiem) {
    return (
      <div className='calc-result-dateOfTime'>
        <p>
          <span>{loan.display}</span>원을 {result.repaymentSchedule.length}개월 동안
          만기일시상환 방식으로 대출을 실행한다면 매달 이자는 약 <span>{Math.ceil(result.monthlyPayment).toLocaleString('ko-KR')}</span>원 이며,
          총 상환금액은 <span>{Math.ceil(loan.raw + (result.monthlyPayment * result.repaymentSchedule.length)).toLocaleString('ko-KR')}</span>원 입니다.
        </p>
      </div>
    )
  }
}

export default LoanResult


