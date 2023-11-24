import React, { useState } from 'react'

import './LoanCalc.css'
import DisplayAds from '../components/DisplayAds'
import LoanResult from '../components/LoanResult'
import { calculateLoan, calculateEqualPrincipalAndInterest, calculateMaturityRepayment } from '../components/CalcFunc'

const LoanCalc = () => {
  const [loanMoney, setLoanMoney] = useState({
    raw: '',
    display: ''
  }) //대출금
  const [loanRate, setLoanRate] = useState('') //대출이율
  const [loanTerm, setLoanTerm] = useState('') //대출기간
  const [equalPrincipal, setEqualPrincipal] = useState(false) //원금 균등
  const [equalPrincipalInterest, setEqualPrincipalInterest] = useState(false) //원리금균등
  const [maturityRepayment, setMaturityRepayment] = useState(false) //만기상환
  const [resultData, setResultData] = useState(null) // 계산 결과값

  const inputMoney = (e) => {
    const rawValue = parseFloat(e.target.value.replace(/,/g, ''))
    const parsedValue = parseFloat(rawValue);
    const displayValue = isNaN(parsedValue) ? '' : rawValue.toLocaleString('Ko-KR')
    setLoanMoney({
      raw: rawValue,
      display: displayValue
    })
  }

  const inputRate = (e) => {
    const rawValue = e.target.value;
    const isValidInput = /^[0-9.]*$/.test(rawValue);
  
    if (isValidInput) {
      setLoanRate(rawValue);
    }
  }
  

  const inputTerm = (e) => {
    setLoanTerm(parseFloat(e.target.value))
    console.log(loanTerm)
  }

  const principalClick = () => {
    setEqualPrincipal(true);
    setEqualPrincipalInterest(false);
    setMaturityRepayment(false);
  }
  
  const principalInterestClick = () => {
    setEqualPrincipalInterest(true);
    setEqualPrincipal(false);
    setMaturityRepayment(false);
  }
  
  const maturityRepaymentClick = () => {
    setMaturityRepayment(true);
    setEqualPrincipal(false);
    setEqualPrincipalInterest(false);
  }
  

  const totalCalc = () => {
    let result = null;

    if (equalPrincipalInterest) {
      result = calculateEqualPrincipalAndInterest(loanMoney.raw, loanRate, loanTerm)
      console.log(result)
    }
    if (equalPrincipal) {
      result = calculateLoan(loanMoney.raw, loanRate, loanTerm)
      console.log(result)
    }
    if (maturityRepayment) {
      result = calculateMaturityRepayment(loanMoney.raw, loanRate, loanTerm)
      console.log(result)
    }

    setResultData(result)
  }

  const resetEvent = () => {
    setLoanMoney({
      raw: '',
      display: ''
    })
    setLoanRate('')
    setLoanTerm('')
    setEqualPrincipal(false)
    setEqualPrincipalInterest(false)
    setMaturityRepayment(false)
    setResultData(null)
  }

  return (
    <section>
      <div className='sect-inner'>

        <div className='calc-wrap'>
          <div className='calc-desc'>
            <h2 className='calc-title'>대출 이자 계산기</h2>
            <p>
              이 페이지에서는 본인의 대출 이자를 계산하고 상환계획을 수립할 수 있습니다. <br />
              월 납입금액, 이자, 상환일정등을 제공받고 대출계획을 세워보세요.
            </p>
          </div>

          <div className='calc-form'>


            <div className='input-container'>
              <div className="row">
                <input type="text" id="input" required value={loanMoney.display} onChange={inputMoney} />
                <label htmlFor="input" className="label">대출 금액을 입력하세요.</label>
                <div className="underline"></div>
              </div>
              <span>원</span>
            </div>

            <div className='input-container'>
              <div className="row">
                <input type="text" id="input" required value={loanTerm} onChange={inputTerm} />
                <label htmlFor="input" className="label">대출 기간을 입력하세요.</label>
                <div className="underline"></div>
              </div>
              <span>개월</span>
            </div>

            <div className='input-container'>
              <div className="row">
                <input type="text" id="input" required value={loanRate} onChange={inputRate} />
                <label htmlFor="input" className="label">연 이자율을 입력하세요..</label>
                <div className="underline"></div>
              </div>
              <span>%</span>
            </div>

            <div className='row'>
              <span>상환방법</span>
              <button onClick={principalInterestClick}>원리금 균등</button>
              <button onClick={principalClick}>원금 균등</button>
              <button onClick={maturityRepaymentClick}>만기일시</button>
            </div>
            <div className='calc-btn'>
              <button onClick={resetEvent}>초기화</button>
              <button onClick={totalCalc}>계산하기</button>
            </div>
            {resultData && (<LoanResult 
              result={resultData} 
              equalPrincipal={equalPrincipal}
              equalPrincipalInterest={equalPrincipalInterest}
              maturityRepayment={maturityRepayment}
              loanMoney={loanMoney}
              />) }
            <div className='warning'>
              <p>이 계산기의 월 납입금액, 이자 상환일정등은 조금 다를 수 있습니다.</p>
            </div>
          </div>
        </div>
        <div className='main-adsense'>
            <DisplayAds />
        </div>
      </div>
    </section>
  )
}

export default LoanCalc


// import React, { useState } from 'react'

// import './CalcPage.css'

// const CalcPage = () => {

//   const [calcDesc, setCalcDesc] = useState('각 대출 실행 방식을 클릭하면 상세한 내용을 확인할 수 있습니다.')

//   const calcDescFunc = (e) => {
//     switch (e.target.innerText) {
//       case "원리금 균등":
//         setCalcDesc("대출 원금과 이자를 합친 금액 즉 원리금을 만기일까지 균등하게 상환하는 대출 상환 방식이다.");
//         break;
//       case "원금 균등":
//         setCalcDesc("원금 균등에 대한 설명");
//         break;
//       case "만기 일시":
//         setCalcDesc("만기 일시에 대한 설명");
//         break;
//       default:
//         setCalcDesc('각 대출 실행 방식을 클릭하면 상세한 내용을 확인할 수 있습니다.')
//     }
//   }

//   return (
//     <main className='calc-main'>
//       <div className='calc-inner'>

//         <div className='calc-wrap'>

//           <div className='calc-text'>
//             <h1>&#128184; 대출 이자 계산기</h1>
//             <p>원리금 균등, 원금 균등, 만기 일시등 다양한 방법으로 대출 예상 금액을 조회하고 계산해보세요.</p>
//           </div>

//           <div className='calc-desc'>
//             <div className='calc-btn'>
//               <button onClick={(e) => calcDescFunc(e)}>원리금 균등</button>
//               <button onClick={(e) => calcDescFunc(e)}>원금 균등</button>
//               <button onClick={(e) => calcDescFunc(e)}>만기 일시</button>
//             </div>
//             <div className='calc-btn-desc'>
//               <p>{calcDesc}</p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </main>
//   )
// }

// export default CalcPage