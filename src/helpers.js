'use strict';

var _ = require('lodash');

exports.compactObject = function compactObject(obj) {
	_.each(obj, function (v, key) {
		if (_.isUndefined(v)) {
			delete obj[key];
		}
	});

	return obj;
};