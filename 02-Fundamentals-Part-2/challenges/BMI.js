const mark = {
  fullName: 'Mark Miller',
  height: 1.69,
  weight: 78,

  calcBMI: function (height = this.height, weight = this.weight) {
    this.bmi = this.weight / this.height ** 2
    return this.bmi
  },
}

const john = {
  fullName: 'John Smith',
  height: 1.95,
  weight: 92,

  calcBMI: function (height = this.height, weight = this.weight) {
    this.bmi = this.weight / this.height ** 2
    return this.bmi
  },
}

console.log(
  mark.calcBMI() < john.calcBMI()
    ? `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})!`
    : `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s (${john.calcBMI()})!`
)
