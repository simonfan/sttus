//     sttus
//     (c) simonfan
//     sttus is licensed under the MIT terms.

/**
 * CJS module.
 *
 * @module sttus
 */

'use strict';

var jsfile = require('js-file');

var sttus = module.exports = jsfile.extend({
	reports: {
		status: {
			type: 'single',
			defaults: {
				etc: 0,
			}
		},

		todo: {
			type: 'list',
			defaults: {
				etc: 0
			}
		}
	}
});

sttus.proto(require('./report'));
sttus.proto(require('./reducers/etc'));
