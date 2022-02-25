const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Let's say we are hard at work in the battery factory. We've assembled several
// batches of batteries today. Let's count how many assembled batteries we ended
// up with.

// * Create a new variable called `totalBatteries`, which holds the sum of all of
//   the battery amounts in the `batteryBatches` array.

// Code your solution here

function counter(num) {
  let count = 0;
  count += num;

  return count;
}

// const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
//   return element * 2 + accumulator;
// }, 0);

const totalBatteries = batteryBatches.reduce(function (accumulator, element) {
  return element + accumulator;
}, 0);
