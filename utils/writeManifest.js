const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const colors = require('colors/safe');

module.exports = function(output, options) {
	return function() {
		this.plugin('done', function(stats) {
			const data = {
				assets: {},
				assetsLocal: {},
				localPath: 'http://127.0.0.1:8079',
			};
			const hashLength = 8;

			function getDevString(str) {
				const index = str.indexOf('--');
				const {length} = str;

				return index !== -1
					? str.slice(0, -(length - index)) + str.slice(index + hashLength + 2) // 2 символа --
					: str;
			}

			stats.compilation.chunks.map(chunk =>
				chunk.files.forEach(el => {
					data.assets[chunk.name + el.match(/\.([0-9a-z]+)$/)[0]] = el;
					data.assetsLocal[chunk.name + el.match(/\.([0-9a-z]+)$/)[0]] =
						`assets/${getDevString(el)}`;
				}));

			if (options && options.publicPath) {
				data.publicPath = options.publicPath;
			}

			/* eslint-disable no-console */
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
