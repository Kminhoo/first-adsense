import React from 'react'

import './LoanResult.css'

const LoanResult = ({
  result, //결과
  principalInterest, //원리금 균등 
  principal, //원금 균등
  dateOfTiem, //만기일
  loan // 대출금
}) => {
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
      <div className='calc-result'>
        <p>대출 원금은 {loan.display}원 입니다.</p>
        <p>총 이자는 {result.totalInterest.toLocaleString('Ko-KR')}원 입니다.</p>
        <p>총 상환 금액은 {(loan.raw + result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
      </div>
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


