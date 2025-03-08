'use strict'
/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



👋 OPTIONAL: You can watch my solution in video format in the next lecture*/

/* Write your code below. Good luck! 🙂 */

const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2)

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(totals)

const jonas = {
  firstName: 'Jonas',
  lastName: 'damn wtf',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLicence: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
  },
}

console.log(
  `${jonas.firstName} is a ${jonas.calcAge()} years old teacher, and ${
    jonas.hasDriverLicence
      ? 'he has a driver licence'
      : 'he does not have a driver license'
  }`
)
