'use strict'

import test from 'ava'
import parser from '../src/lib/parser'

test('parser', async t => {
	const result = await parser('./test/fixtures/test.css', './test/fixtures/parser.sss')
	t.is(result, '.test\n  color: blue\n')
})
