// const teamDolphinesAverage = ((97 + 112 + 101) / 3).toFixed(2)
// const teamKoalasAverage = ((88 + 91 + 110) / 3).toFixed(2)

// if (teamDolphinesAverage > teamKoalasAverage) {
//   console.log(`Team Dolphones Wins by Average Point of ${teamDolphinesAverage}`)
// } else if (
//   teamDolphinesAverage === teamKoalasAverage &&
//   teamDolphinesAverage > 100 &&
//   teamKoalasAverage > 100
// ) {
//   console.log(
//     `It's a draw between these two matches each team has avg point of ${teamDolphinesAverage} & ${teamKoalasAverage}`
//   )
// }

const teamDolphinesAverage = ((97 + 112 + 101) / 3).toFixed(2)
const teamKoalasAverage = ((109 + 95 + 123) / 3).toFixed(2)

if (teamDolphinesAverage > teamKoalasAverage) {
  console.log(`Team Dolphones Wins by Average Point of ${teamDolphinesAverage}`)
} else if (
  teamDolphinesAverage === teamKoalasAverage &&
  teamDolphinesAverage > 100 &&
  teamKoalasAverage > 100
) {
  console.log(
    `It's a draw between these two matches each team has avg point of ${teamDolphinesAverage} & ${teamKoalasAverage}`
  )
}
console.log(`hehe`)
