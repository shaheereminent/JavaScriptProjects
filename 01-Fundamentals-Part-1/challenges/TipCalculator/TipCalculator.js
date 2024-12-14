let bill = 430
let tip

bill > 50 && bill < 300 ? (tip = (bill * 15) / 100) : (tip = (bill * 20) / 100)
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
is ${tip + bill}`)
