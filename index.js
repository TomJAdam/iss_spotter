//index.js

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIp } = require('./iss');
const { fetchISSflyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('Error:', error);
//     return;
//   }
//   console.log(ip);
// });

// fetchCoordsByIp('24.108.168.227', (error, coords) => {
//   if (error) {
//     console.log('It didnt work!', error);
//     return;
//   }
//   console.log(coords);
// });

fetchISSflyOverTimes({ latitude: '48.41670', longitude: '-123.36500' }, (error, data) => {
  if (error) {
    console.log('It didnt work!', error);
    return;
  }
  console.log('Flyover times: \n', data);
});