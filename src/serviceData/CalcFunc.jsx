//원금균등
export function calculateLoan(principal, annualRate, termMonths) {
  let monthlyRate = annualRate / 12 / 100;
  let monthlyPrincipal = principal / termMonths;
  let totalInterest = 0;
  let repaymentSchedule = [];

  for (let i = 0; i < termMonths; i++) {
    let monthlyInterest = (principal - i * monthlyPrincipal) * monthlyRate;
    totalInterest += monthlyInterest;

    repaymentSchedule.push({
      principal: monthlyPrincipal,
      interest: monthlyInterest
    });
  }

  let monthlyPayment = monthlyPrincipal + repaymentSchedule[0].interest;

  return {
    monthlyPayment,
    totalInterest,
    repaymentSchedule
  };
}


//원리금균등
export function calculateEqualPrincipalAndInterest(principal, annualRate, termMonths) {
  let monthlyRate = annualRate / 12 / 100;
  let monthlyPayment = principal * monthlyRate * Math.pow((1 + monthlyRate), termMonths) / (Math.pow((1 + monthlyRate), termMonths) - 1);
  let totalInterest = 0;
  let repaymentSchedule = [];

  for (let i = 0; i < termMonths; i++) {
    let interest = (principal - totalInterest) * monthlyRate;
    let principalPayment = monthlyPayment - interest;

    repaymentSchedule.push({
      principal: principalPayment,
      interest: interest
    });

    totalInterest += principalPayment;
  }

  totalInterest = monthlyPayment * termMonths - principal;

  return {
    monthlyPayment,
    totalInterest,
    repaymentSchedule
  };
}

//만기일시
export function calculateMaturityRepayment(principal, annualRate, termMonths) {
  let monthlyRate = annualRate / 12 / 100;
  let monthlyInterest = principal * monthlyRate; // 매월 이자는 원금에 월 이자율을 곱한 값입니다.
  let totalInterest = monthlyInterest * termMonths; // 총 이자는 매월 이자를 대출 기간 동안 누적한 값입니다.

  let repaymentSchedule = [];

  for (let i = 0; i < termMonths; i++) {
    repaymentSchedule.push({
      principal: 0, // 원금은 만기일에 한번에 상환하므로 매월 원금은 0입니다.
      interest: monthlyInterest // 매월 이자는 항상 동일합니다.
    });
  }

  // 마지막 달에는 원금을 한번에 상환합니다.
  repaymentSchedule[termMonths - 1].principal = principal;

  return {
    monthlyPayment: monthlyInterest, // 월 납입금은 매월 이자와 동일합니다.
    totalInterest,
    repaymentSchedule
  };
}
