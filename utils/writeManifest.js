const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const colors = require('colors/safe');

module.exports = function(output, options) {
  return function() {
    this.plugin('done', function(stats) {
      const data = {
        assets: {},
      };

      stats.compilation.chunks.map(chunk =>
        chunk.files.forEach(el => {
          data.assets[chunk.name + el.match(/\.([0-9a-z]+)$/)[0]] = el;
        }));

      if (options && options.publicPath) {
        data.publicPath = options.publicPath;
      }

      mkdirp(output, mkdirpERROR => {
        if (mkdirpERROR) {
          console.log(colors.red(`ERROR: Not able to create ${output}`));
        } else {
          fs.writeFile(path.join(output, options.filename), JSON.stringify(data, null, '\t'), fsERROR => {
            if (fsERROR) {
              console.log(colors.red(`ERROR: Not able to create ${options.filename}`));
            } else {
              console.log(colors.green(`Succesfully created  ${options.filename}`));
            }
          });
        }
      });
    });
  };
};
