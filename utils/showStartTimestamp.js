const moment = require('moment');

module.exports = function() {
  this.plugin('watch-run', (compilation, callback) => {
    const label = 'Started at';
    const time = moment().format('LTS');
    const format = '\n%s: \u001b[1m%s\u001b[0m';

    console.log(format, label, time);
    callback();
  });
};
