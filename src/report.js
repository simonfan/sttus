'use strict';

var path = require('path');

var _ = require('lodash'),
	mapo = require('mapo');

var h = require('./helpers');

exports.report = function report(name) {

	// name defaults to status
	name = name || 'status';

		// retrieve report type
	var type = this.reports[name].type || 'single',
		// retrieve report defaults
		defaults = this.reports[name].defaults || {};

	var comments = this.comments();

	if (type === 'single') {

		return _.extend({}, defaults, comments.yml(name));

	} else if (type === 'list') {

		return _.map(comments.ymls(name), function (d) {
			return _.extend({}, defaults, d);
		});

	} else if (type === 'method') {

		var args = Array.prototype.slice.call(arguments);
		args.shift();

		return this[name].apply(this, args);

	}
};

exports.reportModule = function reportModule(name) {
		// retrieve dependencies object
	var deps = this.dependencies({
			origin: 'internal',
			depth: true,
			base: path.dirname(this.path)
		}),

		// retrieve reports from dependencies
		reports = deps.invoke('report', name);

	// retrieve own report
	reports[path.basename(this.path)] = this.report(name);

	return h.compactObject(reports);
};
