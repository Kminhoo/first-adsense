import React, { useState } from 'react'

import LoanResult from '../components/LoanResult'
import DisplayAds from '../components/DisplayAds'
import { loanDesc } from '../serviceData'
import { calculateLoan, calculateEqualPrincipalAndInterest, calculateMaturityRepayment  } from '../serviceData/CalcFunc'
import './LoanCalc.css'
import { Helmet } from 'react-helmet-async'

const CalcPage = () => {

  // Loan Description state
  const [calcDesc, setCalcDesc] = useState(loanDesc.default)

  // Loan state
  const [loan, setLoan] = useState({
    raw: "",
    display: ""
  })

  // Loan term state
  const [loanTerm, setLoanTerm] = useState('')

  // Loan rate state
  const [loanRate, setLoanRate] = useState('')

  // calc btn state
  const [principalInterest, setPrincipalInterest] = useState(false) //principal Interest
  const [principal, setPrincipal] = useState(false) //principal
  const [dateOfTime, setDateofTime] = useState(false)

  // calc result
  const [resultData, setResultData] = useState(null)

  // Loan Description change event func
  const calcDescFunc = (e) => {
    switch (e.target.innerText) {
      case "원리금 균등":
        setCalcDesc(loanDesc.principalInterest);
        break;
      case "원금 균등":
        setCalcDesc(loanDesc.principal);
        break;
      case "만기 일시":
        setCalcDesc(loanDesc.dateOfTime);
        break;
      default:
        setCalcDesc(loanDesc.default)
    }
  }

  // inputMoney evnet func
  const inputMoney = (e) => {
    const rawValue = parseFloat(e.target.value.replace(/,/g, ''))
    const displayValue = isNaN(rawValue) ? '' : rawValue.toLocaleString('ko-KR')
    setLoan({
      raw: rawValue,
      display: displayValue
    })
  }

  // inputRate event func
  const inputRate = (e) => {
    const rawValue = e.target.value
    const isValidInput = /^[0-9.]*$/.test(rawValue)

    if (isValidInput) {
      setLoanRate(rawValue)
    }
  }

// inputTerm event func
  const inputTerm = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9.]*$/.test(value)) {
      setLoanTerm(value);
    }
  }


  //calc btn event func
  const calcReulstBtn = (e) => {
    switch (e.target.innerText) {
      case "원리금 균등":
        setPrincipalInterest(true)
        setPrincipal(false)
        setDateofTime(false)
        console.log(principalInterest)
        break
      case "원금 균등":
        setPrincipalInterest(false)
        setPrincipal(true)
        setDateofTime(false)
        console.log(principal)
        break
      case "만기 일시":
        setPrincipalInterest(false)
        setPrincipal(false)
        setDateofTime(true)
        console.log(dateOfTime)
        break
      default:
        setPrincipalInterest(false)
        setPrincipal(false)
        setDateofTime(false)
        break
    }
  }

  // total Calc event func
  const totalCalc = () => {

    let result = null;

    if (principalInterest) {
      result = calculateEqualPrincipalAndInterest(loan.raw, loanRate, loanTerm)
      console.log(result)
    }
    if (principal) {
      result = calculateLoan(loan.raw, loanRate, loanTerm)
      console.log(result)
    }
    if (dateOfTime) {
      result = calculateMaturityRepayment(loan.raw, loanRate, loanTerm)
      console.log(result)
    }

    if (!loan.raw || !loanTerm || !loanRate || (!principalInterest && !principal && !dateOfTime)) {
      alert('대출금, 대출기간, 대출비율 혹은 상환방식을 선택해주세요.');
      return;
    }

    setResultData(result)
  }

  // reset event func
  const resetEvent = () => {
    setLoan({
      raw: '',
      display: ''
    })
    setLoanRate('')
    setLoanTerm('')
    setPrincipalInterest(false)
    setPrincipal(false)
    setDateofTime(false)
    setResultData(null)
  }

  return (
    <>
    <Helmet>
      <title>대출 이자 계산기</title>
    </Helmet>
    <main className='main-calc'>
      <section className='loan-calc'>
        <div className='calc-inner'>

          <div className='calc-wrap'>

            <div className='calc-text'>
              <h1>&#128184; 대출 이자 계산기</h1>
              <p>대출 이자 계산기를 통해 본인의 대출 이자를 계산하고 상환계획을 수립할 수 있습니다. 월 납입금액, 이자, 상환일정등을 제공받아 대출게획을 세워보세요.</p>
            </div>

            <div className='calc-desc'>
              <div className='calc-btn'>
                <button onClick={(e) => calcDescFunc(e)}>원리금 균등</button>
                <button onClick={(e) => calcDescFunc(e)}>원금 균등</button>
                <button onClick={(e) => calcDescFunc(e)}>만기 일시</button>
              </div>
              <div className='calc-btn-desc'>
                <p>{calcDesc}</p>
              </div>
            </div>

            <div className='calc-form'>

              <div className='input-box'>
                <div className='input-container'>
                  <div className='row'>
                    <input onChange={inputMoney} type='text' id='input' required value={loan.display} />
                    <label htmlFor='input' className='label'>대출 금액을 입력하세요.</label>
                    <div className='underline'></div>
                  </div>
                  <span>원</span>
                </div>

                <div className='input-container'>
                  <div className='row'>
                    <input onChange={inputTerm} type='text' id='input' required value={loanTerm} />
                    <label htmlFor='input' className='label'>대출 기간을 입력하세요.</label>
                    <div className='underline'></div>
                  </div>
                  <span>개월</span>
                </div>

                <div className='input-container'>
                  <div className='row'>
                    <input onChange={inputRate} type='text' id='input' required value={loanRate} />
                    <label htmlFor='input' className='label'>연 이자율을 입력하세요.</label>
                    <div className='underline'></div>
                  </div>
                  <span>%</span>
                </div>
              </div>

              <div className='method-container'>
                <span>상환방식 : </span>
                <button style={principalInterest ? {
                  backgroundColor: 'black',
                  color: 'white'
                }: null} onClick={calcReulstBtn}>
                  원리금 균등
                </button>
                <button style={principal ? {
                  backgroundColor: 'black',
                  color: 'white'
                }: null} onClick={calcReulstBtn}>
                  원금 균등
                </button>
                <button style={dateOfTime ? {
                  backgroundColor: 'black',
                  color: 'white'
                }: null} onClick={calcReulstBtn}>
                  만기 일시
                </button>
              </div>

              <div className='calc-result-btn'>
                <button onClick={resetEvent}>
                  <span>초기화</span>
                </button>
                <button onClick={totalCalc}>
                  <span>계산하기</span>
                </button>
              </div>

            </div>

            {resultData && <LoanResult 
            result={resultData}
            principalInterest={principalInterest}
            principal={principal}
            dateOfTiem={dateOfTime}
            loan={loan}
            />}

          </div>

          <div className='google-ads'>
            <DisplayAds />
          </div>

        </div>
      </section>
    </main>
    </>
  )
}

export default CalcPage