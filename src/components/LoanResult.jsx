import React from 'react'

const LoanResult = ({
  result, //결과
  principalInterest, //원리금 균등 
  principal, //원금 균등
  dateOfTiem, //만기일
  loan // 대출금
}) => {
  if (principalInterest) {
    return (
      <div className='result'>
        <p>대출 원금은 {loan.display}원 입니다.</p>
        <p>총 이자는 {result.totalInterest.toLocaleString('Ko-KR')}원 입니다.</p>
        <p>총 상환 금액은 {(loan.raw + result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
      </div>
    )
  }
  if (principal) {
    return (
      <div className='result'>
        <p>대출 원금은 {loan.display}원 입니다.</p>
        <p>총 이자는 {result.totalInterest.toLocaleString('Ko-KR')}원 입니다.</p>
        <p>총 상환 금액은 {(loan.raw + result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
      </div>
    )
  }
  if (dateOfTiem) {
    return (
      <div className='result'>
        <p>대출 원금은 {loan.display}원 입니다.</p>
        <p>총 이자는 {result.totalInterest.toLocaleString('Ko-KR')}원 입니다.</p>
        <p>총 상환 금액은 {(loan.raw + result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
      </div>
    )
  }
}

export default LoanResult


