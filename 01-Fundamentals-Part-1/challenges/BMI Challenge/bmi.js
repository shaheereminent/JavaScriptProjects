// Mark
const markMass = 78 //KG
const markHeight = 1.69 //Mtr
const marksBMI = markMass / markHeight ** 2

// John
const johnMass = 85 //KG
const johnHeight = 1.76 //Mtr
const johnBMI = johnMass / johnHeight ** 2

if (marksBMI > johnBMI) {
  console.log(`Mark's
BMI ${marksBMI} is higher than John's ${johnBMI}!`)
} else {
  console.log(
    `John's BMI ${johnBMI.toFixed(2)} is higher than Mark's ${marksBMI.toFixed(
      2
    )}`
  )
}

// console.log(BMI.toFixed(2))
