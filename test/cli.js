'use strict'

import {join} from 'path'
import {spawn} from 'child_process'
import test from 'ava'

const bin = join(__dirname, '../src/cli.js')

test.cb('cli', t => {
	spawn(bin, ['./test/fixtures/test.css', '-o', './test/fixtures/cli.sss'])
		.stdout
		.on('data', buffer => {
			t.is(buffer.toString(), '==> Created test/fixtures/cli.sss \n\n')
			t.true(true)
			t.end()
		})
})
