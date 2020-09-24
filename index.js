//index.js

const { nextISSTimesForMyLocation } = require('./iss');

//prints output
const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

//function call for iss.js
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('Failed:', error);
  }

  printPassTimes(passTimes);
});


