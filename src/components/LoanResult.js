import React from 'react'

const LoanResult = ({
  result, //결과
  equalPrincipal, //원금 균등 
  equalPrincipalInterest, //원리금 균등
  maturityRepayment, //만기일
  loanMoney
}) => {
  if (equalPrincipal) {
    return (
      <div className='result'>
        <p>대출 원금은 {loanMoney.display}원 입니다.</p>
        <p>총 이자는 {result.totalInterest.toLocaleString('Ko-KR')}원 입니다.</p>
        <p>총 상환 금액은 {(loanMoney.raw + result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
      </div>
    )
  }
  if (equalPrincipalInterest) {
    return (
      <div className='result'>
        <p>대출 원금은 {loanMoney.display}원 입니다.</p>
        <p>총 이자는 {result.totalInterest.toLocaleString('Ko-KR')}원 입니다.</p>
        <p>총 상환 금액은 {(loanMoney.raw + result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
      </div>
    )
  }
  if (maturityRepayment) {
    return (
      <div className='result'>
        <p>대출 원금은 {loanMoney.display}원 입니다.</p>
        <p>총 이자는 {result.totalInterest.toLocaleString('Ko-KR')}원 입니다.</p>
        <p>총 상환 금액은 {(loanMoney.raw + result.totalInterest).toLocaleString('Ko-KR')}원 입니다.</p>
      </div>
    )
  }
}

export default LoanResult


