import got from 'got';
console.time("\nThis took");
var link = prompt("Enter your link here");
var boost = Number(prompt("\nHow many times do you want to boost your profile?"));
function error() {
  if (link.includes("http") == false || (Number.isNaN(boost)) || (boost <= 0)) {
  console.log("\n Double check your input for boost is a number and your link is valid (http/https required)")
  return;
  }
}
error()

for (let i = 0; i < boost;) {
  got.get(link);
  i += 1
  if (i == 1) {
    console.log('\nBoosted ' + i + ' time')
  } else {
    console.log('\nBoosted ' + i + ' times')
  }
}
console.timeEnd("\nThis took");