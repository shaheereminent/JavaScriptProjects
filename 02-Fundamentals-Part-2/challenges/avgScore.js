const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3

const avgScoreD = calcAverage(44, 23, 71)
const avgScoreK = calcAverage(65, 54, 49)

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins * 2 < avgKoalas) {
    console.log(`Koalas Wins hehe`)
  } else if (avgKoalas * 2 < avgDolhins) {
    console.log(`Dolphin wins hehe`)
  } else {
    console.log(`hehe working`)
  }
}
checkWinner(avgScoreD, avgScoreK)
