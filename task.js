function monthlySavings(payments, living_cost) {
  if (!Array.isArray(payments)) {
    console.log("Invalid input")
    return;
  }

  if(isNaN(living_cost)) {
    console.log("Invalid input")
    return;
  }

  const tax_payed_payment = payments.map(payment => {
    if(payment >= 3000) {
      let tax = (payment*20) / 100;
      payment -= tax 
    }
    return payment
  })

  let saving = 0;
  tax_payed_payment.forEach(payment => {
    saving += payment
  })

  saving -= living_cost

  if(saving >= 0) {
    console.log(saving)
  } else {
    console.log("earn more")
  }
}

monthlySavings(100, [900, 2700, 3400])
