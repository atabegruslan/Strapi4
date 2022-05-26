module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
];

// const entry = require('./entry');

// module.exports = {
//   entry,
// };