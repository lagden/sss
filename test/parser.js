'use strict'

const test = require('ava')
const parser = require('../src/lib/parser')

test('css to sss', async t => {
	const result = await parser('./test/fixtures/test.css', './test/fixtures/parser.sss')
	t.is(result, '.test\n  color: blue\n')
})

test('sss to css', async t => {
	const result = await parser('./test/fixtures/test.sss', './test/fixtures/parser.css')
	t.is(result, '.test {\n  color: blue\n}\n')
})
