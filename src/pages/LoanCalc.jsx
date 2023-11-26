// import React, { useState } from 'react'

// import './LoanCalc.css'
// import DisplayAds from '../components/DisplayAds'
// import LoanResult from '../components/LoanResult'
// import { calculateLoan, calculateEqualPrincipalAndInterest, calculateMaturityRepayment } from '../components/CalcFunc'

// const LoanCalc = () => {
//   const [loanMoney, setLoanMoney] = useState({
//     raw: '',
//     display: ''
//   }) //대출금
//   const [loanRate, setLoanRate] = useState('') //대출이율
//   const [loanTerm, setLoanTerm] = useState('') //대출기간
//   const [equalPrincipal, setEqualPrincipal] = useState(false) //원금 균등
//   const [equalPrincipalInterest, setEqualPrincipalInterest] = useState(false) //원리금균등
//   const [maturityRepayment, setMaturityRepayment] = useState(false) //만기상환
//   const [resultData, setResultData] = useState(null) // 계산 결과값

//   const inputMoney = (e) => {
//     const rawValue = parseFloat(e.target.value.replace(/,/g, ''))
//     const parsedValue = parseFloat(rawValue);
//     const displayValue = isNaN(parsedValue) ? '' : rawValue.toLocaleString('Ko-KR')
//     setLoanMoney({
//       raw: rawValue,
//       display: displayValue
//     })
//   }

//   const inputRate = (e) => {
//     const rawValue = e.target.value;
//     const isValidInput = /^[0-9.]*$/.test(rawValue);
  
//     if (isValidInput) {
//       setLoanRate(rawValue);
//     }
//   }
  

//   const inputTerm = (e) => {
//     setLoanTerm(parseFloat(e.target.value))
//     console.log(loanTerm)
//   }

//   const principalClick = () => {
//     setEqualPrincipal(true);
//     setEqualPrincipalInterest(false);
//     setMaturityRepayment(false);
//   }
  
//   const principalInterestClick = () => {
//     setEqualPrincipalInterest(true);
//     setEqualPrincipal(false);
//     setMaturityRepayment(false);
//   }
  
//   const maturityRepaymentClick = () => {
//     setMaturityRepayment(true);
//     setEqualPrincipal(false);
//     setEqualPrincipalInterest(false);
//   }
  

//   const totalCalc = () => {
//     let result = null;

//     if (equalPrincipalInterest) {
//       result = calculateEqualPrincipalAndInterest(loanMoney.raw, loanRate, loanTerm)
//       console.log(result)
//     }
//     if (equalPrincipal) {
//       result = calculateLoan(loanMoney.raw, loanRate, loanTerm)
//       console.log(result)
//     }
//     if (maturityRepayment) {
//       result = calculateMaturityRepayment(loanMoney.raw, loanRate, loanTerm)
//       console.log(result)
//     }

//     setResultData(result)
//   }

//   const resetEvent = () => {
//     setLoanMoney({
//       raw: '',
//       display: ''
//     })
//     setLoanRate('')
//     setLoanTerm('')
//     setEqualPrincipal(false)
//     setEqualPrincipalInterest(false)
//     setMaturityRepayment(false)
//     setResultData(null)
//   }

//   return (
//     <section>
//       <div className='sect-inner'>

//         <div className='calc-wrap'>
//           <div className='calc-desc'>
//             <h2 className='calc-title'>대출 이자 계산기</h2>
//             <p>
//               이 페이지에서는 본인의 대출 이자를 계산하고 상환계획을 수립할 수 있습니다. <br />
//               월 납입금액, 이자, 상환일정등을 제공받고 대출계획을 세워보세요.
//             </p>
//           </div>

//           <div className='calc-form'>


//             <div className='input-container'>
//               <div className="row">
//                 <input type="text" id="input" required value={loanMoney.display} onChange={inputMoney} />
//                 <label htmlFor="input" className="label">대출 금액을 입력하세요.</label>
//                 <div className="underline"></div>
//               </div>
//               <span>원</span>
//             </div>

//             <div className='input-container'>
//               <div className="row">
//                 <input type="text" id="input" required value={loanTerm} onChange={inputTerm} />
//                 <label htmlFor="input" className="label">대출 기간을 입력하세요.</label>
//                 <div className="underline"></div>
//               </div>
//               <span>개월</span>
//             </div>

//             <div className='input-container'>
//               <div className="row">
//                 <input type="text" id="input" required value={loanRate} onChange={inputRate} />
//                 <label htmlFor="input" className="label">연 이자율을 입력하세요..</label>
//                 <div className="underline"></div>
//               </div>
//               <span>%</span>
//             </div>

//             <div className='row'>
//               <span>상환방법</span>
//               <button onClick={principalInterestClick}>원리금 균등</button>
//               <button onClick={principalClick}>원금 균등</button>
//               <button onClick={maturityRepaymentClick}>만기일시</button>
//             </div>
//             <div className='calc-btn'>
//               <button onClick={resetEvent}>초기화</button>
//               <button onClick={totalCalc}>계산하기</button>
//             </div>
//             {resultData && (<LoanResult 
//               result={resultData} 
//               equalPrincipal={equalPrincipal}
//               equalPrincipalInterest={equalPrincipalInterest}
//               maturityRepayment={maturityRepayment}
//               loanMoney={loanMoney}
//               />) }
//             <div className='warning'>
//               <p>이 계산기의 월 납입금액, 이자 상환일정등은 조금 다를 수 있습니다.</p>
//             </div>
//           </div>
//         </div>
//         <div className='main-adsense'>
//             <DisplayAds />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default LoanCalc

// ----------------------------------------------

import React, { useState } from 'react'
import LoanResult from '../components/LoanResult'

import { loanDesc } from '../serviceData'
import { calculateLoan, calculateEqualPrincipalAndInterest, calculateMaturityRepayment  } from '../serviceData/CalcFunc'

import './LoanCalc.css'

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
    <main>
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
                <button onClick={calcReulstBtn}>원리금 균등</button>
                <button onClick={calcReulstBtn}>원금 균등</button>
                <button onClick={calcReulstBtn}>만기 일시</button>
              </div>

              <div className='calc-result-btn'>
                <button onClick={resetEvent}>초기화</button>
                <button onClick={totalCalc}>계산하기</button>
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

          {/* 여긴 애드센스 컴포넌트 */}

        </div>
      </section>
    </main>
  )
  // return (
  //   <main className='calc-main'>
  //     <div className='calc-inner'>

        

  //     </div>
  //   </main>
  // )
}

export default CalcPage