'use strict';

var path = require('path')

var should = require('should');

var status = require('.././src');

describe('etc report', function () {
	beforeEach(function () {
		this.status = status(path.join(__dirname, 'demo-node/src/index'));
	});

	it('etc()', function () {
		var etc = this.status.etc();

		etc.should.eql(10);
	});

	it('etcModule()', function () {
		var etc = this.status.etcModule();

		etc.should.eql(75);
	})
});
