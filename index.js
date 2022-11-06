import got from 'got';

console.time("\nThis took");

//var link = prompt("Enter your link here");
//var boost = Number(prompt("\nHow many times do you want to boost your profile?"));

var link = "https:camo.githubusercontent.com/fbae0a2cff0eb63113eb6d9d76e5d94855ab37aa5000fd3a1169a08b93bdd531/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7831796c";
var boost = 20;

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
console.timeEnd("\nThis took")
