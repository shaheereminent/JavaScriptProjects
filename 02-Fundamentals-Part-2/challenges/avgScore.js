/* 
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/

const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3

const scoreDolphins = calcAverage(85, 54, 41)
const scoreKoalas = calcAverage(23, 34, 27)

function checkWinner(avgDolphins, avgKoalas) {
  let winner = 'No team wins...'

  if (avgKoalas >= avgDolphins * 2) {
    winner = `Koalas win (${avgKoalas} vs. ${avgDolphins})`
  } else if (avgDolphins >= avgKoalas * 2) {
    winner = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
  }

  console.log(winner) // This prints the result to the console
}

checkWinner(scoreDolphins, scoreKoalas) // Calls the function to print the winner
