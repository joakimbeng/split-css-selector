'use strict';
var test = require('ava');
var splitCssSelectors = require('../src');

test('comma as separator', function (assert) {
	assert.plan(1);
	var actual = splitCssSelectors('.class1, li');
	var expected = ['.class1', 'li'];
	assert.same(actual, expected);
});

test('comma in parentheses', function (assert) {
	assert.plan(1);
	var actual = splitCssSelectors(':not(.class1, li)');
	var expected = [':not(.class1, li)'];
	assert.same(actual, expected);
});

test('comma in brackets', function (assert) {
	assert.plan(1);
	var actual = splitCssSelectors('.class1[type*=","]');
	var expected = ['.class1[type*=","]'];
	assert.same(actual, expected);
});

test('at-rule', function (assert) {
	assert.plan(1);
	var actual = splitCssSelectors('@media screen, print');
	var expected = ['@media screen, print'];
	assert.same(actual, expected);
});
